!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2),l=n(1);Object(r.registerBlockType)("rivendellweb-blocks/example-07",{title:"Example 07",icon:"smiley",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"},contentStyle:{type:"object",default:{color:"black",textAlign:"left"}}},edit:function(e){console.log("edit-props",e);var t=e.attributes,n=t.content,r=t.contentStyle,c=e.setAttributes,i=e.className;return Object(o.createElement)("div",null,Object(o.createElement)(l.BlockControls,null,Object(o.createElement)(l.AlignmentToolbar,{value:r.textAlign,onChange:function(e){var t=void 0===e?"none":e;c({contentStyle:{color:r.color,textAlign:t}})}})),Object(o.createElement)(l.InspectorControls,null,Object(o.createElement)(l.ColorPalette,{onChange:function(e){c({contentStyle:{color:void 0===e?"none":e,textAlign:r.textAlign}})}})),Object(o.createElement)(l.RichText,{tagName:"p",style:r,className:i,onChange:function(e){c({content:e})},value:n}))},save:function(e){return console.log("save-props",e),Object(o.createElement)(l.RichText.Content,{style:e.attributes.contentStyle,tagName:"p",value:e.attributes.content})}})}]);