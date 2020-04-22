var RJO = RJO || {};
RJO.HE = RJO.HE || {};
RJO.HE.version = 2.00;

//=============================================================================
// RJO_HelpExtend.js
//=============================================================================

/*:
 * @plugindesc 物品帮助拓展 v2.0
 * @author RJO (804173948)

 * @param FieldSetting
 * @text 字段设置

 * @param GeneralField
 * @text 通用字段数据
 * @desc 所有类型道具通用的字段数据
 * @parent FieldSetting
 * @type struct<field>[]
 * @default ["{\"name\":\"名称\",\"source\":\"item.name\",\"row\":\"0\",\"col\":\"0\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"false\",\"line\":\"false\",\"fontSize\":\"normal+4\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"source!=\\\\\\\"\\\\\\\"\\\"\",\"script\":\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}","{\"name\":\"描述\",\"source\":\"item.description\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"false\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=\\\\\\\"\\\\\\\"\\\"\",\"script\":\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}"]
 
 * @param ItemsField
 * @text 物品字段数据
 * @desc 物品类型道具特有字段数据
 * @parent FieldSetting
 * @type struct<field>[]
 * @default ["{\"name\":\"物品类型\",\"source\":\"item.itypeId\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"true\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.itemType(source);\\\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}","{\"name\":\"使用范围\",\"source\":\"item.scope\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.itemScope(source);\\\"\"}","{\"name\":\"使用场合\",\"source\":\"item.occasion\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source<3\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.itemOccasion(source);\\\"\"}","{\"name\":\"消耗品\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"item.consumable\\\"\",\"script\":\"\\\"\\\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}","{\"name\":\"价格\",\"source\":\"item.price\",\"row\":\"-1\",\"col\":\"0\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\"}","{\"name\":\"不可出售\",\"source\":\"\",\"row\":\"-1\",\"col\":\"0\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"item.price==0\\\"\",\"script\":\"\"}"]

 * @param WeaponsField
 * @text 武器字段数据
 * @desc 武器类型道具特有字段数据
 * @parent FieldSetting
 * @type struct<field>[]
 * @default ["{\"name\":\"武器类型\",\"source\":\"item.wtypeId\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"true\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.weaponType(source);\\\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[mhp]\",\"source\":\"item.params[0]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[mmp]\",\"source\":\"item.params[1]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[atk]\",\"source\":\"item.params[2]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[def]\",\"source\":\"item.params[3]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[mat]\",\"source\":\"item.params[4]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[mdf]\",\"source\":\"item.params[5]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[agi]\",\"source\":\"item.params[6]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[luk]\",\"source\":\"item.params[7]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}","{\"name\":\"价格\",\"source\":\"item.price\",\"row\":\"-1\",\"col\":\"0\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\"}","{\"name\":\"不可出售\",\"source\":\"\",\"row\":\"-1\",\"col\":\"0\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"item.price==0\\\"\",\"script\":\"\"}"]

 * @param ArmorsField
 * @text 防具字段数据
 * @desc 防具类型道具特有字段数据
 * @parent FieldSetting
 * @type struct<field>[]
 * @default ["{\"name\":\"防具类型\",\"source\":\"item.atypeId\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"true\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.armorType(source);\\\"\"}","{\"name\":\"装备位置\",\"source\":\"item.etypeId\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"true\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.equipType(source);\\\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[mhp]\",\"source\":\"item.params[0]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[mmp]\",\"source\":\"item.params[1]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[atk]\",\"source\":\"item.params[2]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[def]\",\"source\":\"item.params[3]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[mat]\",\"source\":\"item.params[4]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[mdf]\",\"source\":\"item.params[5]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[agi]\",\"source\":\"item.params[6]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"\\\\[luk]\",\"source\":\"item.params[7]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source!=0\\\"\",\"script\":\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}","{\"name\":\"价格\",\"source\":\"item.price\",\"row\":\"-1\",\"col\":\"0\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\"}","{\"name\":\"不可出售\",\"source\":\"\",\"row\":\"-1\",\"col\":\"0\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"item.price==0\\\"\",\"script\":\"\"}"]

 * @param SkillsField
 * @text 技能字段数据
 * @desc 技能类型道具特有字段数据
 * @parent FieldSetting
 * @type struct<field>[]
 * @default ["{\"name\":\"技能类型\",\"source\":\"item.stypeId\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"true\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.skillType(source);\\\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}","{\"name\":\"伤害类型\",\"source\":\"item.damage.type\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.skillDamageType(source);\\\"\"}","{\"name\":\"伤害属性\",\"source\":\"item.damage.elementId\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"item.damage.type>0\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.skillDamageElement(source);\\\"\"}","{\"name\":\"使用范围\",\"source\":\"item.scope\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.itemScope(source);\\\"\"}","{\"name\":\"使用场合\",\"source\":\"item.occasion\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source<3\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.itemOccasion(source);\\\"\"}","{\"name\":\"消耗\\\\[mp]\",\"source\":\"item.mpCost\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\\\"\\\"\"}","{\"name\":\"消耗\\\\[tp]\",\"source\":\"item.tpCost\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\\\"\\\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"\\\"true\\\"\",\"script\":\"\"}","{\"name\":\"武器前提\",\"source\":\"item.requiredWtypeId1\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"true\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.weaponType(source);\\\"\"}","{\"name\":\"武器前提\",\"source\":\"item.requiredWtypeId2\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.weaponType(source);\\\"\"}"]
 
 * @param CustomField
 * @text 自定义字段数据
 * @desc 自定义的字段数据，可在备注中使用
 * @parent FieldSetting
 * @type struct<customfield>[]
 * @default []

 * @param WindowSetting
 * @text 窗口设置

 * @param WindowSkin
 * @text 窗口皮肤
 * @desc 浮动窗口的皮肤
 * @parent WindowSetting
 * @type file
 * @dir img/system/
 * @default Window

 * @param WindowWidth
 * @text 窗口最大宽度
 * @desc 浮动窗口的最大宽度
 * @parent WindowSetting
 * @type number
 * @min 1
 * @default 512

 * @param WindowCol
 * @text 窗口列数
 * @desc 浮动窗口显示列数（每列所占大小平分）
 * @parent WindowSetting
 * @type number
 * @min 1
 * @default 2

 * @param WindowOpacity
 * @text 窗口不透明度
 * @desc 窗口的不透明度（0~255）
 * @parent WindowSetting
 * @type number
 * @min 0
 * @max 255
 * @default 196

 * @param WindowAnimation
 * @text 窗口动画
 * @desc 窗口出现与退出的动画
 * @parent WindowSetting
 * @type select
 * @option 淡入淡出
 * @value 1
 * @option 打开关闭
 * @value 2
 * @option 无
 * @value 0
 * @default 1

 * @param WindowKey
 * @text 关闭快捷键
 * @desc 关闭窗口的快捷键
 * @parent WindowSetting
 * @default A

 * @param FontSetting
 * @text 文本设置

 * @param DefaultTextSize
 * @text 默认字号
 * @desc 道具描述里默认字号
 * @parent FontSetting
 * @type number
 * @default 18

 * @param SplitLineHeight
 * @text 分割线高度（与内容的距离）
 * @desc 物品描述里分割线高度（与内容的距离）
 * @parent FontSetting
 * @type number
 * @min 1
 * @default 4

 * @param DefaultTextColor
 * @text 默认颜色
 * @desc 道具描述里默认颜色
 * @parent FontSetting
 * @default rgba(255,255,255,1)

 * @param SplitLineColor
 * @text 分割线颜色
 * @desc 物品描述里分割线颜色
 * @parent FontSetting
 * @default rgba(255,255,176,1) 

 * @param FieldNameFormat
 * @text 字段名格式
 * @desc 字段名显示的格式
 * @parent FontSetting
 * @default 【%1】


*/

/*~struct~Field:
 * @param name
 * @text 字段名
 * @desc 用于帮助窗口显示
 * @default  

 * @param source
 * @text 字段数据源
 * @desc 用于显示的数据的来源（脚本）
 * @default item.
 * 
 * @param row
 * @text 字段所在行
 * @desc 字段显示所在的行数，若为-1则自动分配，若为-2则自动分配到下一行
 * @type number
 * @min -2
 * @default -1

 * @param col
 * @text 字段所在列
 * @desc 字段显示所在的行数，若为-1则自动分配 
 * @type number
 * @min -1
 * @default -1

 * @param rowLen
 * @text 字段占用行数（高度）
 * @desc 字段显示要占用的行数，若为0则自动分配
 * @type number
 * @min 0
 * @default 0

 * @param colLen
 * @text 字段占用列数（宽度）
 * @desc 字段显示要占用的列数，若为0则自动分配，若为-1则占满全部
 * @type number
 * @min -1
 * @default 0
 *
 * @param nameVisible
 * @text 字段名可视
 * @desc 是否显示字段名
 * @type boolean
 * @on 是
 * @off 否
 * @default true

 * @param line
 * @text 分割线
 * @desc 该字段显示为分割线
 * @type boolean
 * @on 是
 * @off 否
 * @default false
 *
 * @param fontSize
 * @text 字段字体大小
 * @desc 字段显示的字体大小，normal可表示默认大小，可填写表达式
 * @default normal
 *
 * @param color
 * @text 字段颜色
 * @desc 字段显示的颜色，以rgba(红,绿,蓝,透明度)表示，填normal则使用具体环境决定的颜色（默认白色）
 * @default normal
 *
 * @param align
 * @text 字段对齐方式
 * @desc 字段显示对齐方式
 * @type select
 * @option 左对齐
 * @value left
 * @option 居中对齐
 * @value center
 * @option 右对齐
 * @value right
 * @default left

 * @param visible
 * @text 可视条件
 * @desc 该字段可视条件（脚本）
 * @type note
 * @default "source!=\"\""

 * @param script
 * @text 脚本
 * @desc 实现特殊功能
 * @type note
 * @default  
 *
*/
/*~struct~CustomField:
 * @param name
 * @text 字段集名字
 * @desc 自定义字段集的名字
 * @default  

 * @param fields
 * @text 字段
 * @desc 该字段集容纳的字段
 * @type struct<field>[]
 * @default  
*/

//  ["{\"name\":\"防具类型\",\"source\":\"item.atypeId\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"true\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.armorType(source);\\\"\"}","{\"name\":\"装备位置\",\"source\":\"item.etypeId\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"true\\\"\",\"script\":\"\\\"RJO.HE.ProcessDataSource.equipType(source);\\\"\"}","{\"name\":\"\\\\[mhp]\",\"source\":\"item.params[0]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"source!=0\",\"script\":\"\"}","{\"name\":\"\\\\[mmp]\",\"source\":\"item.params[1]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"source!=0\",\"script\":\"\"}","{\"name\":\"\\\\[atk]\",\"source\":\"item.params[2]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"source!=0\",\"script\":\"\"}","{\"name\":\"\\\\[def]\",\"source\":\"item.params[3]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"source!=0\",\"script\":\"\"}","{\"name\":\"\\\\[mat]\",\"source\":\"item.params[4]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"source!=0\",\"script\":\"\"}","{\"name\":\"\\\\[mdf]\",\"source\":\"item.params[5]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"source!=0\",\"script\":\"\"}","{\"name\":\"\\\\[agi]\",\"source\":\"item.params[6]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"source!=0\",\"script\":\"\"}","{\"name\":\"\\\\[luk]\",\"source\":\"item.params[7]\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"source!=0\",\"script\":\"\"}","{\"name\":\"分割线\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"-1\",\"nameVisible\":\"true\",\"line\":\"true\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"center\",\"visible\":\"true\",\"script\":\"\"}","{\"name\":\"价格\",\"source\":\"item.price\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"source>0\\\"\",\"script\":\"\"}","{\"name\":\"不可出售\",\"source\":\"\",\"row\":\"-1\",\"col\":\"-1\",\"rowLen\":\"0\",\"colLen\":\"0\",\"nameVisible\":\"true\",\"line\":\"false\",\"fontSize\":\"normal\",\"color\":\"normal\",\"align\":\"left\",\"visible\":\"\\\"item.price==0\\\"\",\"script\":\"\"}"]

RJO.Parameters = PluginManager.parameters('RJO_HelpExtend');
RJO.Param = RJO.Param || {};
RJO.HE.GeneralField = eval(RJO.Parameters['GeneralField']);
RJO.HE.ItemsField = eval(RJO.Parameters['ItemsField']);
RJO.HE.WeaponsField = eval(RJO.Parameters['WeaponsField']);
RJO.HE.ArmorsField = eval(RJO.Parameters['ArmorsField']);
RJO.HE.SkillsField = eval(RJO.Parameters['SkillsField']);
RJO.HE.CustomField = eval(RJO.Parameters['CustomField']);

RJO.HE.WindowSkin = String(RJO.Parameters['WindowSkin']);
RJO.HE.WindowWidth = Number(RJO.Parameters['WindowWidth']);
RJO.HE.WindowCol = Number(RJO.Parameters['WindowCol']);
RJO.HE.WindowOpacity = Number(RJO.Parameters['WindowOpacity']);
RJO.HE.WindowAnimation = Number(RJO.Parameters['WindowAnimation']);
RJO.HE.WindowKey = String(RJO.Parameters['WindowKey']);

RJO.HE.DefaultTextSize = Number(RJO.Parameters['DefaultTextSize']);
RJO.HE.SplitLineHeight = Number(RJO.Parameters['SplitLineHeight']);
RJO.HE.DefaultTextColor = String(RJO.Parameters['DefaultTextColor']);
RJO.HE.SplitLineColor = String(RJO.Parameters['SplitLineColor']);
RJO.HE.FieldNameFormat = String(RJO.Parameters['FieldNameFormat']);

RJO.HE.RegText1 = /<field>([^]*?)<\/field>/ig;
RJO.HE.RegText2 = /<custom:([^]*?)>/ig;
RJO.HE.RegText3 = /<field:([^]*?)>/ig;
RJO.HE.RegText4 = /\\\[(.+?)\]/ig;
RJO.HE.ColorReg = /rgba\((.+),(.+),(.+),(.+)\)/i;

RJO.HE.ProcessDataSource = {};

Object.defineProperties(TextManager, {
    mhp          : TextManager.getter('param', 0),
    mmp          : TextManager.getter('param', 1),
    atk          : TextManager.getter('param', 2),
    def          : TextManager.getter('param', 3),
    mat          : TextManager.getter('param', 4),
    mdf          : TextManager.getter('param', 5),
    agi          : TextManager.getter('param', 6),
    luk          : TextManager.getter('param', 7)
});
RJO.HE.ProcessDataSource.xparamName = function(source){
  return ["命中率","回避率","暴击率","暴击回避","魔法回避",
  "魔法反射","物理反击","\0HP恢复率","\0MP恢复率","\0TP恢复率"][source];
}
TextManager.hit = RJO.HE.ProcessDataSource.xparamName(0);
TextManager.eva = RJO.HE.ProcessDataSource.xparamName(1);
TextManager.cri = RJO.HE.ProcessDataSource.xparamName(2);
TextManager.cev = RJO.HE.ProcessDataSource.xparamName(3);
TextManager.mev = RJO.HE.ProcessDataSource.xparamName(4);
TextManager.mrf = RJO.HE.ProcessDataSource.xparamName(5);
TextManager.cnt = RJO.HE.ProcessDataSource.xparamName(6);
TextManager.hrg = RJO.HE.ProcessDataSource.xparamName(7);
TextManager.mrg = RJO.HE.ProcessDataSource.xparamName(8);
TextManager.trg = RJO.HE.ProcessDataSource.xparamName(9);


RJO.HE.ProcessDataSource.itemType = function(source){
  return ["普通物品","贵重物品","隐藏物品","隐藏物品"][source-1];
}
RJO.HE.ProcessDataSource.equipType = function(source){
  if(source==0) return "无";
  return $dataSystem.equipTypes[source];
}
RJO.HE.ProcessDataSource.weaponType = function(source){
  if(source==0) return "无";
  return $dataSystem.weaponTypes[source];
}
RJO.HE.ProcessDataSource.armorType = function(source){
  if(source==0) return "无";
  return $dataSystem.armorTypes[source];
}
RJO.HE.ProcessDataSource.skillType = function(source){
  if(source==0) return "无";
  return $dataSystem.skillTypes[source];
}
RJO.HE.ProcessDataSource.skillDamageType = function(source){
  return ["无","HP伤害","MP伤害","HP恢复","MP恢复","HP吸收","MP吸收"][source];
}
RJO.HE.ProcessDataSource.skillDamageElement = function(source){
  if(source>0) return RJO.HE.ProcessDataSource.elementType(source);
  else return ["跟随角色","无"][source+1];
}
RJO.HE.ProcessDataSource.elementType = function(source){
  return $dataSystem.elements[source];
}
RJO.HE.ProcessDataSource.itemScope = function(source){
  return ["无","敌方单体","敌方全体",
  "随机1敌人","随机2敌人","随机3敌人","随机4敌人",
  "己方单体","己方全体","己方单体（死亡）","己方全体（死亡）","自己"][source];
}
RJO.HE.ProcessDataSource.itemOccasion = function(source){
  return ["随时","战斗","菜单","无"][source];
}
RJO.HE.ProcessDataSource.getItemName = function(source){
  return source ? source.name : "无";
}
RJO.HE.ProcessDataSource.getItemTriatData = function(source, code, id){
  return source && source.traits ? source.traits.filter(function(trait){
    return trait.code === code && trait.dataId === id;
  }) : [];
}
RJO.HE.ProcessDataSource.getItemTriatSum = function(source, code, id){
  return RJO.HE.ProcessDataSource.getItemTriatData(source, code, id).reduce(function(r, trait) {
        return r + trait.value;
    }, 0);
}
RJO.HE.ProcessDataSource.getItemTriatPi = function(source, code, id){
  return RJO.HE.ProcessDataSource.getItemTriatData(source, code, id).reduce(function(r, trait) {
        return r * trait.value;
    }, 0);
}
RJO.HE.ProcessDataSource.getItemXparam = function(source, id){
  return RJO.HE.ProcessDataSource.getItemTriatSum(source,Game_BattlerBase.TRAIT_XPARAM,id);
}
RJO.HE.ProcessDataSource.getItemSparam = function(source, id){
  return RJO.HE.ProcessDataSource.getItemTriatPi(source,Game_BattlerBase.TRAIT_SPARAM,id);
}
RJO.HE.JsizeAllField = function(){
  RJO.HE.Field = {};    RJO.HE.Field.General=[];
  RJO.HE.Field.Item=[];   RJO.HE.Field.Skill=[];
  RJO.HE.Field.Weapon=[]; RJO.HE.Field.Armor=[];
  RJO.HE.Field.Custom={};
  RJO.HE.GeneralField.forEach(function(string){
    var field = RJO.HE.JsizeField(string);RJO.HE.Field.General.push(field);
  });
  RJO.HE.ItemsField.forEach(function(string){
    var field = RJO.HE.JsizeField(string);RJO.HE.Field.Item.push(field);
  });
  RJO.HE.WeaponsField.forEach(function(string){
    var field = RJO.HE.JsizeField(string);RJO.HE.Field.Weapon.push(field);
  });
  RJO.HE.ArmorsField.forEach(function(string){
    var field = RJO.HE.JsizeField(string);RJO.HE.Field.Armor.push(field);
  });
  RJO.HE.SkillsField.forEach(function(string){
    var field = RJO.HE.JsizeField(string);RJO.HE.Field.Skill.push(field);
  });
  RJO.HE.CustomField.forEach(function(string){
    var group = RJO.HE.JsizeFieldGroup(string);RJO.HE.Field.Custom[group.name]=group.fields;
  });
  RJO.HE.dealExtendedField();
}
RJO.HE.JsizeField = function(string){
    var field = JSON.parse(string);
    field.row = Number(field.row);
    field.col = Number(field.col);
    field.rowLen = Number(field.rowLen);
    field.colLen = Number(field.colLen);
    field.nameVisible = eval(field.nameVisible);
    field.line = eval(field.line);
    field.visible = eval(field.visible);
    field.script = eval(field.script);
    return field;
}
RJO.HE.JsizeFieldGroup = function(string){
    var group = JSON.parse(string);
    group.fields = eval(group.fields);
    group.fields = group.fields.map(function(f){return RJO.HE.JsizeField(f);});
    return group;
}
RJO.HE.dealExtendedField = function(){}

RJO.HE.getBaseField = function(type){
  var field = RJO.HE.Field.General.slice(0);
  switch(type){
    case 1: field = field.concat(RJO.HE.Field.Item.slice(0)); break;
    case 2: field = field.concat(RJO.HE.Field.Weapon.slice(0)); break;
    case 3: field = field.concat(RJO.HE.Field.Armor.slice(0)); break;
    case 4: field = field.concat(RJO.HE.Field.Skill.slice(0)); break;
  }
  return field;
}
RJO.HE.defaultizeField = function(f){
  if(f.name == undefined) f.name = "";
  if(f.source == undefined) f.source = "";
  if(f.row == undefined) f.row = -1; else f.row = Number(f.row);
  if(f.col == undefined) f.col = -1; else f.col = Number(f.col);
  if(f.rowLen == undefined) f.rowLen = 0; else f.rowLen = Number(f.rowLen);
  if(f.colLen == undefined) f.colLen = 0; else f.colLen = Number(f.colLen);
  if(f.nameVisible == undefined) f.nameVisible = true;
  if(f.line == undefined) f.line = false;
  if(f.fontSize == undefined) f.fontSize = "normal";
  if(f.color == undefined) f.color = "normal";
  if(f.align == undefined) f.align = "left";
  if(f.visible == undefined) f.visible = "source!=\"\"";
  if(f.script == undefined) f.script = "";
  return f;
}
RJO.HE.getDescParams = function(item,type){
  var type = type || DataManager.getCate(item);
  var field = []; var res;
  if(!item.meta.newField) field = RJO.HE.getBaseField(type);

  res = item.note.match(RJO.HE.RegText2);
  if(res){
    res.forEach(function(str){
      str.match(RJO.HE.RegText2);str = RegExp.$1;
      field = field.concat(RJO.HE.Field.Custom[str]);
    }.bind(this));
  }
  res = item.note.match(RJO.HE.RegText3);
  if(res){
    res.forEach(function(str){
      str.match(RJO.HE.RegText3);str = RegExp.$1;
      str = str.split(',');
      var f = {};
      if(str[0]!='line'){
        f.name = str[0];
        if(str[1])
          f.source = str[1][0]=="'" ? str[1] : ("\""+str[1]+"\"");
        if(str[2]) f.row = Number(str[2]);
        if(str[3]) f.col = Number(str[3]);
        if(str[4]) f.rowLen = Number(str[4]);
        if(str[5]) f.colLen = Number(str[5]);
        if(str[6]) f.fontSize = str[6];
        if(str[7]) f.color = str[7];
        if(str[8]) f.align = str[8];
        if(str[9]) f.script = str[9];
      }else{
        f.line = true;
        if(str[1]) f.row = str[1];
        if(str[2]) f.visible = str[2]; else f.visible = "true";
      }
      f = RJO.HE.defaultizeField(f);
      field.push(f);
    }.bind(this));
  }

  res = item.note.match(RJO.HE.RegText1);
  if(res){
    res.forEach(function(str){
      str.match(RJO.HE.RegText1);str = RegExp.$1;
      var f = eval("({"+str+"})");
      f = RJO.HE.defaultizeField(f);
      field.push(f);
    }.bind(this));
  }

  field = field.concat(RJO.HE.getItemExtraDescParams(item,type));
  field = field.map(function(f){return JsonEx.makeDeepCopy(f);});
  //if(field) console.info(field.map(function(f){return f.name;}));
  return field;
}
RJO.HE.getItemExtraDescParams = function(item,type){return [];}

RJO.HE.replaceText = function(text){
  return text.replace(RJO.HE.RegText4,function(){return TextManager[arguments[1]];});
}
RJO.HE.fieldNameText = function(name){
  return RJO.HE.FieldNameFormat.format(name);
}
RJO.HE.dealItemField = function(field,item){
  var source = eval(field.source);
  if(eval(field.visible)){
    if(field.line) return 'line';
    var stext = eval(field.script);
    var text = (field.nameVisible && field.name!="" ? RJO.HE.fieldNameText(field.name) : "");
    if(source==undefined) source = '';
    if(!field.script || field.script == "") text+=source;
    else text+=stext;
    return RJO.HE.replaceText(text);
  }else return undefined;
}

DataManager.getCate = function (item) {
    if (!item) return [];
    if (DataManager.isItem(item)) return 1;
    if (DataManager.isWeapon(item)) return 2;
    if (DataManager.isArmor(item)) return 3;
    if (DataManager.isSkill(item)) return 4;
    return [];
};

RJO.HE.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    RJO.HE.Game_System_initialize.call(this);
    RJO.HE.JsizeAllField();
};
Window_Base.prototype.changeTextSize = function(size) {
    this.contents.fontSize = size;
};
function Window_ItemHelp() {
    this.initialize.apply(this, arguments);
}

Window_ItemHelp._show =  true; //显示

Window_ItemHelp.prototype = Object.create(Window_Base.prototype);
Window_ItemHelp.prototype.constructor = Window_ItemHelp;

Window_ItemHelp.prototype.initialize = function(width) {
    width = width || RJO.HE.WindowWidth;
    this._aniType = RJO.HE.WindowAnimation;
    this._windowWidth = width;
    Window_Base.prototype.initialize.call(this,0,0,width,1);
    this.backOpacity = RJO.HE.WindowOpacity;
    this._hotKey = RJO.HE.WindowKey;
    this._aniCount = 0;
    this.visible = false;
};
Window_ItemHelp.prototype.loadWindowskin = function() {
    this._oriTone = true;
    this.windowskin = ImageManager.loadSystem(RJO.HE.WindowSkin);
};

Window_ItemHelp.prototype.standardPadding = function() {return 10;};

Window_ItemHelp.prototype.contentsWidth = function() {return this._windowWidth - this.standardPadding() * 2;};

Window_ItemHelp.prototype.maxCols = function() {return RJO.HE.WindowCol;}
Window_ItemHelp.prototype.maxRows = function() {return this._table ? this._table.length : 0;}
Window_ItemHelp.prototype.colWidth = function() {return this.contentsWidth()/this.maxCols();}

Window_ItemHelp.prototype.standardTextColor = function() {return RJO.HE.DefaultTextColor;};
Window_ItemHelp.prototype.standardFontSize = function() {return RJO.HE.DefaultTextSize;};
Window_ItemHelp.prototype.standardLineColor = function() {return RJO.HE.SplitLineColor;};

Window_ItemHelp.prototype.hide = function(){
  switch(this._aniType){
    case 0: Window_Base.prototype.hide.call(this);break;
    case 1: this._hiding = true;this._showing = false;break;
    case 2: this.close();this._opening = false;break;
  }
}
Window_ItemHelp.prototype.show = function(){
  this.visible = true;
  switch(this._aniType){
    case 0: Window_Base.prototype.show.call(this);break;
    case 1: this._showing = true;this._hiding = false;break;
    case 2: this.open();this._closing = false;break;
  }
}
Window_ItemHelp.SplitLineHeight = 2;
Window_ItemHelp.prototype.drawHorzLine = function(y) {
    var lineColor = this.standardLineColor();
    var w = this.contentsWidth()-this.standardPadding()*2;
    this.contents.paintOpacity = 152;
    this.contents.fillRect(this.standardPadding(), y+RJO.HE.SplitLineHeight/2, 
      w, Window_ItemHelp.SplitLineHeight, lineColor);
    this.contents.paintOpacity = 255;
};

Window_ItemHelp.prototype.getTextSize = function(text,width,row){
    var l = 0; var r = 0;
    var tw = 0;var line = 0;
    var maxTw = 0;
    
    text = this.convertEscapeCharactersForTest(text);

    while(r<text.length){
        var c = text[r++];
        if((c == '\n') || (tw += this.textWidth(c)) >= width){
            maxTw = Math.max(maxTw,tw);  
            if(this._rowHeight[row+line])
              this._rowHeight[row+line] = Math.max(this._rowHeight[row+line],
              this.calcTextLineHeight(text.substring(l,r)));
            else
              this._rowHeight[row+line] = this.calcTextLineHeight(text.substring(l,r));           
            if(c != '\n') r--;   l = r; line++; tw = 0;
        }
    }            
    if(this._rowHeight[row+line])
      this._rowHeight[row+line] = Math.max(this._rowHeight[row+line],
      this.calcTextLineHeight(text.substring(l,r)));
    else
      this._rowHeight[row+line] = this.calcTextLineHeight(text.substring(l,r));           

    if(maxTw <= 0) maxTw = tw;
    return [line+1,maxTw];
}
Window_ItemHelp.prototype.getTextLen = function(text,width,len,r){
  var size = this.getTextSize(text,width,r);
  var maxTw = size[1];

  if(len >0) col = len;
  if(len==0) col = Math.ceil(maxTw/this.colWidth());
  if(len==-1) col = Math.ceil(width/this.colWidth());
  return [size[0],col];
}
Window_ItemHelp.prototype.lineHeight = function(fontSize) {
    fontSize = fontSize || this.contents.fontSize;
    return fontSize+8;
};

Window_ItemHelp.prototype.initTable = function(){
  this._table = [];this._rowHeight = [];
}
Window_ItemHelp.prototype.addNewRow = function(){
  var row = [];
  for(var i=0;i<this.maxCols();i++) row.push('');
  this._table.push(row);
  if(this._rowHeight.length<this._table.length) this._rowHeight.push(0);
}

Window_ItemHelp.prototype.fillTable = function(r,c,rl,cl,field){
  while(this.maxRows()-1<r+rl) this.addNewRow();

  var normal = this.standardFontSize();
  var size = eval(field.fontSize);
  for(var rr=r;rr<r+rl;rr++) {
    for(var cc=c;cc<c+cl;cc++) 
      this._table[rr][cc] = [r,c];
  }
  this._table[r][c] = field;
}
Window_ItemHelp.prototype.fillLine = function(r){
  while(this.maxRows()-1<r) this.addNewRow();

  for(var i=0;i<this.maxCols();i++) this._table[r][i]='line';
  this._rowHeight[r] = RJO.HE.SplitLineHeight*2;
}

Window_ItemHelp.prototype.makeTable = function(){
  this.initTable();
  var auto_fields = this._fields.filter(function(f){return f.row == -1 || f.col == -1});
  var settle_fields = this._fields.filter(function(f){return f.row >= 0 && f.col >= 0});

  settle_fields.forEach(function(f){
    var text = RJO.HE.dealItemField(f,this._item);
    if(text){
      var r = f.row; var c = f.col; 
      if(f.line) this.fillLine(r);
      else{
        var rl = f.rowLen; var cl = f.colLen;
        this.updateFontSize(f);
        if(cl <= 0 || rl <= 0){
          if(cl > 0){ // rl = 0
            var tl = cl*this.colWidth();
            rl = this.getTextLen(text,tl,cl,r)[0];
          }else if(cl == 0){
            var tl = (this.maxCols()-c)*this.colWidth();
            var size = this.getTextLen(text,tl,cl,r);
            if(rl == 0) rl = size[0];
            cl = size[1];
          }else if(cl == -1) {
            cl = this.maxCols()-c;
            if(rl == 0){
              var tl = cl*this.colWidth();
              rl = this.getTextLen(text,tl,cl,r)[0];
            }          
          }
        }
        f.rowLen = rl; f.colLen = cl;
        this.fillTable(r,c,rl,cl,f);
      }
    }
  }.bind(this));

  auto_fields.forEach(function(f){
    var text = RJO.HE.dealItemField(f,this._item);
    if(text){
      var r = f.row;     var c = f.col; 
      var rr = Math.max(0,this.maxRows()-2); var rc = 0;
      if(f.line){
        if(r == -1){
          while(this._table[rr]){
            var flag = true;
            for(var i=0;i<this.maxCols();i++) 
              if(this._table[rr][i]!='') {
                flag = false;break;
              }
            if(flag) break; else rr++;
          }
          r = rr;
        }
        if(r==0 || this._table[r-1][0]!='line'){
          f.row = r;
          this.fillLine(r);
        }
      }else{
        var rl = f.rowLen; var cl = f.colLen; 
        this.updateFontSize(f);
        if(r == -1 && c == -1){
          while(this._table[rr]){
            while(this._table[rr][rc] && this._table[rr][rc]!='') rc++;
            if(rc<this.maxCols()) break;
            rr++; rc = 0;
          }
          r = rr; c = rc;
        }else if(r == -1){
          while(this._table[rr] && this._table[rr][c] && this._table[rr][c]!='') rr++;
          r = rr;
        }
        else if(c == -1){
          while(this._table[r] && this._table[r][rc] && this._table[r][rc]!='') rc++;
          c = rc;
        }
        if(cl <= 0 || rl <= 0){
          if(cl > 0){ // rl = 0
            var tl = cl*this.colWidth();
            rl = this.getTextLen(text,tl,cl,r)[0];
          }else if(cl == 0){
            var tl = (this.maxCols()-c)*this.colWidth();
            var size = this.getTextLen(text,tl,cl,r);
            if(rl == 0) rl = size[0];
            cl = size[1];
          }else if(cl == -1){
            cl = this.maxCols()-c;
            if(rl == 0){
              var tl = cl*this.colWidth();
              rl = this.getTextLen(text,tl,cl,r)[0];         
            }
          }
        }
        f.row = r; f.col = c;
        f.rowLen = rl; f.colLen = cl;
        this.fillTable(r,c,rl,cl,f);
      }
    }
  }.bind(this));
}
Window_ItemHelp.prototype.clear = function(){ this.setItem(null); }

Window_ItemHelp.prototype.setItem = function(item,force){
	//if(!force && item == this._item) return;
    this.contents.clear();
    this._item = item;

    this.refreshFields();
}
Window_ItemHelp.prototype.refreshFields = function(){
	var item = this._item;
    this._fields = item ? RJO.HE.getDescParams(item) : [];
    if(Window_ItemHelp._show && this._fields.length>0){
    	this.refreshWindowWidth();
        this.refresh();
        this.show();
    }else this.hide();
}
Window_ItemHelp.prototype.refreshWindowWidth = function() {
	var ctw = 0;
	for(var i=0;i<this._fields.length;i++){
		var f = this._fields[i];
    	var text = RJO.HE.dealItemField(f,this._item);
    	if(!text) continue;
        this.updateFontSize(f);
    	var size = this.getTextSizeWithoutLimit(text);
		ctw = Math.max(ctw,size[1]);
	}
	this._windowWidth = Math.min(ctw+20+this.standardPadding()*2,RJO.HE.WindowWidth);
};
Window_ItemHelp.prototype.refresh = function() {
    this.makeTable();    
    this.resetSize();
    this.drawTable();
    this.refreshPos();
};
Window_ItemHelp.prototype.resetSize = function() {
  var h = 2*this.standardPadding();
  for(var i=0;i<this._rowHeight.length;i++) h+=(this._rowHeight[i]||0);
  this.width = this._windowWidth; this.height = h+8;
  this.createContents();
};
Window_ItemHelp.prototype.drawTable = function(){
  var y = 0; var x = 0;
  for(var r=0;r<this.maxRows();r++){
    if(this._table[r][0]=='line') this.drawHorzLine(y);
    else
      for(var c=0;c<this.maxCols();c++){
        var f = this._table[r][c];
        if(f!='' && !f.length){      
          var rl = f.rowLen; var cl = f.colLen; 
          var text = RJO.HE.dealItemField(f,this._item);
          this.updateFontSize(f);
          this.updateTextColor(f);
          this.drawTextExNoFontReset(text,x,y,cl*this.colWidth(),rl*this._rowHeight[r],f.align);
        }
        x+=this.colWidth();
      }
    y += this._rowHeight[r];
    x = 0;
  }
}
Window_ItemHelp.prototype.updateFontSize = function(f) {
  var item = this._item;
  var normal = this.standardFontSize();
  this.changeTextSize(eval(f.fontSize));
};
Window_ItemHelp.prototype.updateTextColor = function(f) {
  if(f.color && f.color.match(RJO.HE.ColorReg)){
    this.changeTextColor(f.color);
  }else{
    var item = this._item;
    var normal = this.standardTextColor();
    this.changeTextColor(eval(f.color));
  }
};

Window_ItemHelp.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this.updateHotKey();
    this.updateAni();
};

Window_ItemHelp.prototype.updatePos = function(wx,wy,rect){
    var sx = wx+rect.x+rect.width-4;
    var sy = wy+rect.y+rect.height-4;
    if (sx+this.width>Graphics.boxWidth) sx=Graphics.boxWidth-this.width;
    if (sy+this.height>Graphics.boxHeight) sy=Graphics.boxHeight-this.height;
    this.x=sx;this.y=sy;
    this._rwx = wx; this._rwy = wy; 
    this._rRect = rect;
}
Window_ItemHelp.prototype.refreshPos = function(){
	if(this._rRect) this.updatePos(this._rwx,this._rwy,this._rRect);
}
Window_ItemHelp.prototype.updateHotKey = function(){
  if(this._hotKey && /*InputExtra.isTriggered(RJO.KCC.KeyCode[this._hotKey]) ||*/
  		Input.isTriggered(this._hotKey)){
    this._showing = this._hiding = false;
    this._opening = this._closing = false;
  	Window_ItemHelp._show = !Window_ItemHelp._show;
  	this.refreshFields();
  }
}
Window_ItemHelp.prototype.updateAni = function(){
    this._aniCount++;
    this.updateShow();
    this.updateHide();
    this.updateOthers();
}
Window_ItemHelp.prototype.updateShow = function() {
    if (this._showing) {
      this.visible = true;
      if(this.opacity<RJO.HE.WindowOpacity) this.opacity += 15;
      else this.opacity = RJO.HE.WindowOpacity;
      this.contentsOpacity += 15; 
      this._showing = (this.contentsOpacity<255);
    }
};
Window_ItemHelp.prototype.updateHide = function() {
    if (this._hiding) {
      this.opacity -= 15;
      this.contentsOpacity -= 15; 
      this._hiding = this.visible = (this.opacity>0);
    }
};
Window_ItemHelp.prototype.updateOthers = function() {
	if(this._showing && this._hiding) this._hiding = false;
	if(this._opening && this._closing) this._closing = false;
};
RJO.HE.Window_Base_convertEscapeCharacters = Window_ItemHelp.prototype.convertEscapeCharacters;
Window_ItemHelp.prototype.convertEscapeCharacters = function(text) {
    text = RJO.HE.Window_Base_convertEscapeCharacters.call(this,text);
    text = text.replace(/\x1bPs\[(\d+)\]/gi, function() {
    	var id = parseInt(arguments[1]);
        /*return this._item.params[id] !=0 ? 
        	TextManager.param(id)+'：'+this._item.params[id] : '';*/
        return TextManager.param(id)+' ：'+this._item.params[id];
    }.bind(this));
    text = text.replace(/\x1bXPs\[(\d+)\]/gi, function() {
    	var id = parseInt(arguments[1]);
        /*return this._item.params[id] !=0 ? 
        	TextManager.param(id)+'：'+this._item.params[id] : '';*/
        return RJO.HE.ProcessDataSource.xparamName(id)+' ：'+
        	Math.round(RJO.HE.ProcessDataSource.getItemXparam(this._item,id)*100)+'%';
    }.bind(this));
    return text;
};    
Window_ItemHelp.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case 'S':
    	if(textState.right)
    		textState.x = (this.colWidth() > textState.x+48 ? this.colWidth() : textState.x+48);
    	else
    		textState.x = this.colWidth();
        break;
    case 'L':
    	this.drawHorzLine(textState.y+RJO.HE.SplitLineHeight-3);
    	textState.y+=RJO.HE.SplitLineHeight*2
        break;
    default:
    	Window_Base.prototype.processEscapeCharacter.call(this,code,textState); 
    	break;
    }
};
Window_Base.prototype.isNewLineCharacter = function(text,id) {
    if (text[id]=='\n') return true;
    if (id == text.length-1) return false;
    if (text[id]!='\x1b') return false;
    var c = text[id+1];
    return c=='L' || c=='M' || c=='R';
};
    

Window_ItemList.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
    this._helpWindow.updatePos(this.x,this.y,this.itemRect(this.index()));
};
Window_SkillList.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
    this._helpWindow.updatePos(this.x,this.y,this.itemRect(this.index()));
};
Window_EquipSlot.prototype.updateHelp = function() {  
    this.setHelpWindowItem(this.item());
    this._helpWindow.updatePos(this.x,this.y,this.itemRect(this.index()));
    if (this._statusWindow) {
        this._statusWindow.setTempActor(null);
    }
};
Window_ShopBuy.prototype.updateHelp = function() {   
    this.setHelpWindowItem(this.item());
    this._helpWindow.updatePos(this.x,this.y,this.itemRect(this.index()));
    if (this._statusWindow) {
        this._statusWindow.setItem(this.item());
    }
};


Scene_MenuBase.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_ItemHelp(RJO.HE.WindowWidth);
    this.addChild(this._helpWindow);
};
Scene_Battle.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_ItemHelp(RJO.HE.WindowWidth);
    Window_ItemHelp._show = false;
    this._helpWindow.hide();
    this.addChild(this._helpWindow);
};

RJO.HE.Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
    RJO.HE.Scene_Battle_terminate.call(this);
    Window_ItemHelp._show = true;
};

Scene_Item.prototype.createCategoryWindow = function() {
    this._categoryWindow = new Window_ItemCategory();
    this._categoryWindow.setHelpWindow(this._helpWindow);
    this._categoryWindow.y = 0;
    this._categoryWindow.setHandler('ok',     this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._categoryWindow);
};
Scene_Item.prototype.createItemWindow = function() {
    var wy = this._categoryWindow.y + this._categoryWindow.height;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_ItemList(0, wy, Graphics.boxWidth, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
    this._categoryWindow.setItemWindow(this._itemWindow);
};
Scene_Skill.prototype.createStatusWindow = function() {
    var wx = this._skillTypeWindow.width;
    var ww = Graphics.boxWidth - wx;
    var wh = this._skillTypeWindow.height;
    this._statusWindow = new Window_SkillStatus(wx, 0, ww, wh);
    this.addWindow(this._statusWindow);
};
Scene_Skill.prototype.createSkillTypeWindow = function() {
    this._skillTypeWindow = new Window_SkillType(0, 0);
    this._skillTypeWindow.setHelpWindow(this._helpWindow);
    this._skillTypeWindow.setHandler('skill',    this.commandSkill.bind(this));
    this._skillTypeWindow.setHandler('cancel',   this.popScene.bind(this));
    this._skillTypeWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._skillTypeWindow.setHandler('pageup',   this.previousActor.bind(this));
    this.addWindow(this._skillTypeWindow);
};
Scene_Equip.prototype.createStatusWindow = function() {
    this._statusWindow = new Window_EquipStatus(0, 0);
    this.addWindow(this._statusWindow);
};
Scene_Equip.prototype.createCommandWindow = function() {
    var wx = this._statusWindow.width;
    var ww = Graphics.boxWidth - this._statusWindow.width;
    this._commandWindow = new Window_EquipCommand(wx, 0, ww);
    this._commandWindow.setHelpWindow(this._helpWindow);
    this._commandWindow.setHandler('equip',    this.commandEquip.bind(this));
    this._commandWindow.setHandler('optimize', this.commandOptimize.bind(this));
    this._commandWindow.setHandler('clear',    this.commandClear.bind(this));
    this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup',   this.previousActor.bind(this));
    this.addWindow(this._commandWindow);
};
Scene_Shop.prototype.createGoldWindow = function() {
    this._goldWindow = new Window_Gold(0, 0);
    this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
    this.addWindow(this._goldWindow);
};
Scene_Shop.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_ShopCommand(this._goldWindow.x, this._purchaseOnly);
    this._commandWindow.y = 0;
    this._commandWindow.setHandler('buy',    this.commandBuy.bind(this));
    this._commandWindow.setHandler('sell',   this.commandSell.bind(this));
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};
RJO.HE.Scene_Shop_OnBuyOk = Scene_Shop.prototype.onBuyOk;
Scene_Shop.prototype.onBuyOk = function() {
    this._helpWindow.clear();
    RJO.HE.Scene_Shop_OnBuyOk.call(this);
};
RJO.HE.Scene_Shop_OnSellOk = Scene_Shop.prototype.onSellOk;
Scene_Shop.prototype.onSellOk = function() {
    this._helpWindow.clear();
    RJO.HE.Scene_Shop_OnSellOk.call(this);
};
Scene_Shop.prototype.createCategoryWindow = function() {
    this._categoryWindow = new Window_ItemCategory();
    this._categoryWindow.setHelpWindow(this._helpWindow);
    this._categoryWindow.y = this._dummyWindow.y;
    this._categoryWindow.hide();
    this._categoryWindow.deactivate();
    this._categoryWindow.setHandler('ok',     this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
    this.addWindow(this._categoryWindow);
};
Scene_Battle.prototype.createSkillWindow = function() {
    var wh = this._statusWindow.y;
    this._skillWindow = new Window_BattleSkill(0, 0, Graphics.boxWidth, wh);
    this._skillWindow.setHelpWindow(this._helpWindow);
    this._skillWindow.setHandler('ok',     this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.addWindow(this._skillWindow);
};
Scene_Battle.prototype.createItemWindow = function() {
    var wh = this._statusWindow.y;
    this._itemWindow = new Window_BattleItem(0, 0, Graphics.boxWidth, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
};
RJO.HE.Scene_Battle_onSelectAction = Scene_Battle.prototype.onSelectAction;
Scene_Battle.prototype.onSelectAction = function() {
	RJO.HE.Scene_Battle_onSelectAction.call(this);
	this._helpWindow.clear();	
};
RJO.HE.Scene_Battle_onSkillCancel = Scene_Battle.prototype.onSkillCancel;
Scene_Battle.prototype.onSkillCancel = function() {
	RJO.HE.Scene_Battle_onSkillCancel.call(this);
	this._helpWindow.clear();	
};
RJO.HE.Scene_Battle_onItemCancel = Scene_Battle.prototype.onItemCancel;
Scene_Battle.prototype.onItemCancel = function() {
	RJO.HE.Scene_Battle_onItemCancel.call(this);
	this._helpWindow.clear();	
};

