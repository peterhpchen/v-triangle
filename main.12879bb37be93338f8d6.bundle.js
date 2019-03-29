(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(module,exports,__webpack_require__){__webpack_require__("487f"),__webpack_require__("48a2"),module.exports=__webpack_require__("5d29")},"5d29":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__("ac6a");var _storybook_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7d14"),_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d1e2"),req=__webpack_require__("f330");Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{theme:_theme__WEBPACK_IMPORTED_MODULE_2__.a}}),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(function(){return'<div style="display: flex; justify-content: center; padding: 16px;"><story /></div>'}),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__("dd40")(module))},aefb:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__("c5f6");var _storybook_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7d14"),_components_Triangle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("b329"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("4357");Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Triangle",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("Basic",function(){return{components:{Triangle:_components_Triangle__WEBPACK_IMPORTED_MODULE_2__.a},props:{height:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Height (px)",64)},width:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width (px)",64)},direction:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Direction",["top","bottom","left","right","topLeft","topRight","bottomLeft","bottomRight"],"top")},color:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#354951")}},computed:{height_:function height_(){return"".concat(this.height,"px")},width_:function width_(){return"".concat(this.width,"px")}},template:'<Triangle\n      :height="height_"\n      :width="width_"\n      :direction="direction"\n      :color="color"\n    />'}}).add("Top",function(){return{components:{Triangle:_components_Triangle__WEBPACK_IMPORTED_MODULE_2__.a},props:{height:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Height (px)",64)},width:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width (px)",64)},color:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#41b883")}},computed:{height_:function height_(){return"".concat(this.height,"px")},width_:function width_(){return"".concat(this.width,"px")}},template:'<Triangle\n      :height="height_"\n      :width="width_"\n      direction="top"\n      :color="color"\n    />'}}).add("Bottom",function(){return{components:{Triangle:_components_Triangle__WEBPACK_IMPORTED_MODULE_2__.a},props:{height:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Height (px)",64)},width:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width (px)",64)},color:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#41b883")}},computed:{height_:function height_(){return"".concat(this.height,"px")},width_:function width_(){return"".concat(this.width,"px")}},template:'<Triangle\n      :height="height_"\n      :width="width_"\n      direction="bottom"\n      :color="color"\n    />'}}).add("Left",function(){return{components:{Triangle:_components_Triangle__WEBPACK_IMPORTED_MODULE_2__.a},props:{height:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Height (px)",64)},width:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width (px)",64)},color:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#41b883")}},computed:{height_:function height_(){return"".concat(this.height,"px")},width_:function width_(){return"".concat(this.width,"px")}},template:'<Triangle\n      :height="height_"\n      :width="width_"\n      direction="left"\n      :color="color"\n    />'}}).add("Right",function(){return{components:{Triangle:_components_Triangle__WEBPACK_IMPORTED_MODULE_2__.a},props:{height:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Height (px)",64)},width:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width (px)",64)},color:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#41b883")}},computed:{height_:function height_(){return"".concat(this.height,"px")},width_:function width_(){return"".concat(this.width,"px")}},template:'<Triangle\n      :height="height_"\n      :width="width_"\n      direction="right"\n      :color="color"\n    />'}}).add("Top Right",function(){return{components:{Triangle:_components_Triangle__WEBPACK_IMPORTED_MODULE_2__.a},props:{height:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Height (px)",64)},width:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width (px)",64)},color:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#41b883")}},computed:{height_:function height_(){return"".concat(this.height,"px")},width_:function width_(){return"".concat(this.width,"px")}},template:'<Triangle\n      :height="height_"\n      :width="width_"\n      direction="topRight"\n      :color="color"\n    />'}}).add("Top Left",function(){return{components:{Triangle:_components_Triangle__WEBPACK_IMPORTED_MODULE_2__.a},props:{height:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Height (px)",64)},width:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width (px)",64)},color:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#41b883")}},computed:{height_:function height_(){return"".concat(this.height,"px")},width_:function width_(){return"".concat(this.width,"px")}},template:'<Triangle\n      :height="height_"\n      :width="width_"\n      direction="topLeft"\n      :color="color"\n    />'}}).add("Bottom Right",function(){return{components:{Triangle:_components_Triangle__WEBPACK_IMPORTED_MODULE_2__.a},props:{height:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Height (px)",64)},width:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width (px)",64)},color:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#41b883")}},computed:{height_:function height_(){return"".concat(this.height,"px")},width_:function width_(){return"".concat(this.width,"px")}},template:'<Triangle\n      :height="height_"\n      :width="width_"\n      direction="bottomRight"\n      :color="color"\n    />'}}).add("Bottom Left",function(){return{components:{Triangle:_components_Triangle__WEBPACK_IMPORTED_MODULE_2__.a},props:{height:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Height (px)",64)},width:{type:Number,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width (px)",64)},color:{type:String,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#41b883")}},computed:{height_:function height_(){return"".concat(this.height,"px")},width_:function width_(){return"".concat(this.width,"px")}},template:'<Triangle\n      :height="height_"\n      :width="width_"\n      direction="bottomLeft"\n      :color="color"\n    />'}})}.call(this,__webpack_require__("dd40")(module))},b329:function(module,__webpack_exports__,__webpack_require__){"use strict";var objectSpread=__webpack_require__("cebc"),components_Trianglevue_type_script_lang_js_=(__webpack_require__("6762"),{name:"VTriangle",props:{height:{type:String,required:!0,validator:function validator(value){return!!/^(\d*\.?\d*)(ch|em|ex|rem|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt)$/.exec(value)}},width:{type:String,required:!0,validator:function validator(value){return!!/^(\d*\.?\d*)(ch|em|ex|rem|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt)$/.exec(value)}},direction:{type:String,default:"top",validator:function validator(value){return["top","bottom","left","right","topRight","topLeft","bottomRight","bottomLeft"].includes(value)}},color:{type:String,default:"black"}},computed:{style:function style(){var height=this.height,width=this.width,color=this.color,result={width:0,height:0};if("topRight"===this.direction)return Object(objectSpread.a)({},result,{"border-top":"".concat(height," ").concat(color," solid"),"border-left":"".concat(width," transparent solid")});if("topLeft"===this.direction)return Object(objectSpread.a)({},result,{"border-top":"".concat(height," ").concat(color," solid"),"border-right":"".concat(width," transparent solid")});if("bottomRight"===this.direction)return Object(objectSpread.a)({},result,{"border-bottom":"".concat(height," ").concat(color," solid"),"border-left":"".concat(width," transparent solid")});if("bottomLeft"===this.direction)return Object(objectSpread.a)({},result,{"border-bottom":"".concat(height," ").concat(color," solid"),"border-right":"".concat(width," transparent solid")});var widthReResult=/^(\d*\.?\d*)(ch|em|ex|rem|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt)$/.exec(width);if(widthReResult&&0!==widthReResult.length){var widthNumber=widthReResult[1]/2,widthUnit=widthReResult[2];return"top"===this.direction?Object(objectSpread.a)({},result,{"border-bottom":"".concat(height," ").concat(color," solid"),"border-left":"".concat(widthNumber).concat(widthUnit," transparent solid"),"border-right":"".concat(widthNumber).concat(widthUnit," transparent solid")}):"bottom"===this.direction?Object(objectSpread.a)({},result,{"border-top":"".concat(height," ").concat(color," solid"),"border-left":"".concat(widthNumber).concat(widthUnit," transparent solid"),"border-right":"".concat(widthNumber).concat(widthUnit," transparent solid")}):"left"===this.direction?Object(objectSpread.a)({},result,{"border-right":"".concat(height," ").concat(color," solid"),"border-top":"".concat(widthNumber).concat(widthUnit," transparent solid"),"border-bottom":"".concat(widthNumber).concat(widthUnit," transparent solid")}):Object(objectSpread.a)({},result,{"border-left":"".concat(height," ").concat(color," solid"),"border-top":"".concat(widthNumber).concat(widthUnit," transparent solid"),"border-bottom":"".concat(widthNumber).concat(widthUnit," transparent solid")})}}}}),componentNormalizer=__webpack_require__("0c7c"),component=Object(componentNormalizer.a)(components_Trianglevue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{style:this.style})},[],!1,null,null,null);__webpack_exports__.a=component.exports},d1e2:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("8b21");__webpack_exports__.a=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({base:"light",brandTitle:"v-triangle",brandUrl:"https://github.com/peterhpchen/v-triangle",brandImage:"https://github.com/peterhpchen/v-triangle/blob/master/logo.png?raw=true"})},f330:function(module,exports,__webpack_require__){var map={"./Triangle.stories.js":"aefb"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="f330"}},[[0,1,2]]]);
//# sourceMappingURL=main.12879bb37be93338f8d6.bundle.js.map