var RJO = RJO || {};
RJO.TE = RJO.TE || {};
RJO.TE.version = 1.03;

// RJO_TextExtend
// 文本显示 拓展
// 
/*:
 * @plugindesc 文本显示拓展
 * @author RJO (804173948)
 *

*/

RJO.Parameters = PluginManager.parameters('RJO_TextExtend');
RJO.Param = RJO.Param || {};

Window_ChoiceList.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height,Graphics.boxWidth);
};
Window_Base.prototype.drawTextExNoFontReset = function(text, x, y, width, height, align) {
    if (text) {
        width = width || this.contentsWidth()-x;
        var textState = { index: 0, x: x, y: y, left: x ,top: y,width: width ,maxHeight: height};
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        textState.align = align || 'left';
        while (textState.index < textState.text.length) {            
            this.processCharacter(textState);
        }
        return textState.x - x;
    } else {
        return 0;
    }
};
Window_Base.prototype.drawTextEx = function(text, x, y, width, height, align) {
    if (text) {
        width = width || this.contentsWidth()-x;
        var textState = { index: 0, x: x, y: y, left: x ,top: y,width: width ,maxHeight: height};
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        textState.align = align || 'left';
        this.resetFontSettings();
        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }
        return textState.x - x;
    } else {
        return 0;
    }
};
Window_Base.prototype.drawTextTest = function(text, width) {
    if (text) {
        width = width || 9999;
        var textState = { index: 0, x: this.width, y: this.height, 
            left: this.width, right: this.width, top: this.height, width: width};
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        textState.align = 'left';
        this.resetFontSettings();
        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }
        textState.bottom = textState.y + textState.height;
        return textState;
    } else {
        return undefined;
    }
};
if(window.Window_NameBox){
    Window_NameBox.prototype.textWidthEx = function(text) {
        return this.drawTextEx(text, -999, this.contents.height);
    };  
}

Window_Base.prototype.processCharacter = function(textState) {
    switch (textState.text[textState.index]) {
    case '\n':
        this.processNewLine(textState);
        break;
    case '\f':
        this.processNewPage(textState);
        break;
    case '\x1b':
        this.processEscapeCharacter(this.obtainEscapeCode(textState), textState);
        break;
    default:
        this.processNormalCharacter(textState);
        break;
    }
};

Window_Base.prototype.processNormalCharacter = function(textState) {
    var c = textState.text[textState.index];
    if(c == undefined) return;
    var w = this.textWidth(c);
    if (textState.left + textState.width >= textState.x + w){
        this.contents.drawText(c, textState.x, textState.y, w * 2, textState.height);
        textState.index++;
        textState.x += w;
        if(textState.right) 
            textState.right = Math.max(textState.x,textState.right);
    }else{
        this.processNewLine(textState);
        textState.index--;
        this.processNormalCharacter(textState);
    }
};
RJO.TE.Window_Base_processNormalCharacter = Window_Base.prototype.processNormalCharacter;
Window_Base.prototype.processNormalCharacter = function(textState) {
    switch(textState.align){
        case 'left':
            RJO.TE.Window_Base_processNormalCharacter.call(this,textState);
            break;
        case 'middle':
        case 'center':
            var index = textState.index;var width = 0;var textSize = this.contents.fontSize;var line=false;
            while (textState.index < textState.text.length && !this.isNewLineCharacter(textState.text,textState.index) ) {
                width+=this.processCharacterTest(textState);if(width > textState.width-textState.x){textState.index--;line=true;break;}
            }
            var maxIndex = textState.index;textState.index = index;
            this.contents.fontSize = textSize;
            textState.x += (textState.width - textState.x - width) / 2;textState.align = 'left';
            while (textState.index < maxIndex) {this.processCharacter(textState);}
            textState.align = 'middle';if(line)textState.index--;
            this.processNewLine(textState);
            break;
        case 'right':            
            var index = textState.index;var width = 0;var textSize = this.contents.fontSize;var line=false;
            while (textState.index < textState.text.length && !this.isNewLineCharacter(textState.text,textState.index) ) {
                width+=this.processCharacterTest(textState);if(width > textState.width-textState.x){textState.index--;line=true;break;}
            }
            var maxIndex = textState.index;textState.index = index;
            this.contents.fontSize = textSize;
            textState.x = textState.width - width;textState.align = 'left';
            while (textState.index < maxIndex) {this.processCharacter(textState);}
            textState.align = 'right';if(line)textState.index--;
            this.processNewLine(textState);
            break;
        default:
            RJO.TE.Window_Base_processNormalCharacter.call(this,textState);
            break;
    }
};
Window_Base.prototype.processCharacterTest = function(textState) {
    var c =textState.text[textState.index];
    switch (c) {
    case '\n':textState.index++;return 0;
    case '\f':textState.index++;return 0;
    case '\x1b':return this.processEscapeCharacterTest(this.obtainEscapeCode(textState));
    default:textState.index++;return this.textWidth(c);
    }
};
Window_Base.prototype.processEscapeCharacterTest = function(code) {    
    switch (code) {
    case 'C':return 0;
    case 'I':return Window_Base._iconWidth + 4;
    case '{':this.makeFontBigger();return 0;
    case '}':this.makeFontSmaller();return 0;
    default :return 0;
    }
};
Window_Base.prototype.isNewLineCharacter = function(text,id) {
    if (text[id]=='\n') return true;
    if (id == text.length-1) return false;
    if (text[id]!='\x1b') return false;
    var c = text[id+1];
    return c=='L' || c=='M' || c=='R';
};
Window_Base.prototype.calcTextHeight = function(textState, all) {
    var lastFontSize = this.contents.fontSize;
    var textHeight = 0;
    var lines = textState.text.slice(textState.index).split('\n');
    var maxLines = all ? lines.length : 1;

    for (var i = 0; i < maxLines; i++) {
        var maxFontSize = this.contents.fontSize;
        var regExp = /\x1b[\{\}]/g;
        for (;;) {
            var array = regExp.exec(lines[i]);
            if (array) {
                if (array[0] === '\x1b{') {
                    this.makeFontBigger();
                }
                if (array[0] === '\x1b}') {
                    this.makeFontSmaller();
                }
                if (maxFontSize < this.contents.fontSize) {
                    maxFontSize = this.contents.fontSize;
                }
            } else {
                break;
            }
        }
        textHeight += maxFontSize + 8;
    }

    this.contents.fontSize = lastFontSize;
    return textHeight;
};

RJO.TE.Window_Base_processNewLine = Window_Base.prototype.processNewLine;
Window_Base.prototype.processNewLine = function(textState,align) {
    //align = align || 'left';
    //textState.align = align;
    RJO.TE.Window_Base_processNewLine.call(this,textState);
    if(textState.maxHeight && textState.y+textState.height>textState.top+textState.maxHeight) textState.index = textState.text.length;
};
/*
Window_Base.prototype.processNewPage = function(textState) {
    textState.index++;
};
*/
RJO.TE.Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = RJO.TE.Window_Base_convertEscapeCharacters.call(this,text);
    text = text.replace(/\x1bnw/gi, "\n");
    return text;
};

RJO.TE.Window_Base_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
Window_Base.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case 'L':textState.align = 'left';break;
    case 'M':textState.align = 'middle';break;
    case 'R':textState.align = 'right';break;
    default:RJO.TE.Window_Base_processEscapeCharacter.call(this,code,textState);break;
    }
};

Window_Base.prototype.getTextSize = function(text,width){
    var ts = this.drawTextTest(text,width);
    return [ts.bottom-ts.top, ts.right-ts.left];
/*
    var l = 0; var r = 0;
    var tw = 0; var th = 0;
    var maxTw = 0;
    text = this.convertEscapeCharactersForTest(text);

    while(r<text.length){
        var c = text[r++];
        if(c == '\n' || (tw += this.textWidth(c)) >= width){
            maxTw = Math.max(maxTw,tw); tw = 0; 
            th += this.calcTextLineHeight(text.substring(l,r));
            if(c != '\n') r--; l = r;
        }
    }
    maxTw = Math.max(maxTw,tw);
    return [th,maxTw];
*/
}
Window_Base.prototype.getTextSizeWithoutLimit = function(text){
    var ts = this.drawTextTest(text);
    return [ts.bottom-ts.top, ts.right-ts.left];
/*
    var l = 0; var r = 0;
    var tw = 0; var th = 0;
    var maxTw = 0;
    text = this.convertEscapeCharactersForTest(text);

    while(r<text.length){
        var c = text[r++];
        if(c == '\x1b'){

        }
        tw += this.textWidth(c);
        if(c == '\n'){
            maxTw = Math.max(maxTw,tw); tw = 0; 
            th += this.calcTextLineHeight(text.substring(l,r));
            l = r;
        }
    }
    maxTw = Math.max(maxTw,tw);
    return [th,maxTw];
*/
}

Window_Base.prototype.convertEscapeCharactersForTest = function(text){
    text = this.convertEscapeCharacters(text);
    text = text.replace(/\x1b.\[(\d+)\]/gi, '');
    text = text.replace(/\x1b..\[(\d+)\]/gi, '');
    text = text.replace(/\x1bMSGCORE\[(\d+)\]/gi, '');
    return text;
}

Window_Base.prototype.calcTextLineHeight = function(text) {
    var lastFontSize = this.contents.fontSize;
    var textHeight = 0;
    var maxFontSize = 0;
    var regExp = /\x1b[\{\}]/g;
    for (;;) {
        var array = regExp.exec(text);
        if (array) {
            if (array[0] === '\x1b{') {
                this.makeFontBigger();
            }
            if (array[0] === '\x1b}') {
                this.makeFontSmaller();
            }
            if (maxFontSize < this.contents.fontSize) {
                maxFontSize = this.contents.fontSize;
            }
        } else {
            break;
        }
    }
    if(maxFontSize<=0) maxFontSize = lastFontSize;
    textHeight = maxFontSize + 8;
    //this.contents.fontSize = lastFontSize;
    return textHeight;
};