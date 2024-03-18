/*! For license information please see Dropdown-Dropdown-mdx.5468b22a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[174],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./components/Dropdown/Dropdown.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Dropdown_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Dropdown/Dropdown.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Dropdown_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"dropdown",children:"Dropdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Dropdown é um elemento interativo clicável que envolve uma ação de alternância."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"common",children:"Common"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Dropdown_stories__WEBPACK_IMPORTED_MODULE_2__.Common,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"documentação-interativa",children:"Documentação Interativa"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./components/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Common:()=>Common,Primary:()=>Primary,default:()=>Dropdown_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),combobox=__webpack_require__("./node_modules/@headlessui/react/dist/components/combobox/combobox.js"),transition=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),ChevronDownIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js"),dropdownStyles_container="relative mt-1",dropdownStyles_containerMenu="relative w-96 cursor-default overflow-hidden rounded-md bg-dark text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300",dropdownStyles_input="border-none py-2 pl-3 bg-dark pr-10 text-sm leading-5 text-gray-primary focus:outline-none",dropdownStyles_button="absolute inset-y-0 right-0 flex items-center pr-2",dropdownStyles_optionsContainer="absolute mt-1 max-h-60 w-96 overflow-auto bg-white rounded-md py-1 text-base shadow-lg",dropdownStyles_option="relative cursor-default select-none py-2 pl-10 pr-4",dropdownStyles_noResult="relative cursor-default select-none py-2 px-4 text-gray-700",_excluded=["list"],__jsx=react.createElement,Dropdown=function Dropdown(_ref){var list=_ref.list,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,react.useState)(list[0]),selectedItem=_useState[0],setSelectedItem=_useState[1],_useState2=(0,react.useState)(""),query=_useState2[0],setQuery=_useState2[1],filteredItem=""===query?list:list.filter((function(item){return item.toLowerCase().includes(query.toLowerCase())}));return __jsx(combobox.h,(0,esm_extends.Z)({value:selectedItem,onChange:setSelectedItem},rest),__jsx("div",{className:dropdownStyles_container},__jsx("div",{className:dropdownStyles_containerMenu},__jsx(combobox.h.Input,{className:dropdownStyles_input,displayValue:function displayValue(item){return item},onChange:function onChange(event){return setQuery(event.target.value)}}),__jsx(combobox.h.Button,{className:dropdownStyles_button},__jsx(ChevronDownIcon.Z,{className:"h-5 w-5 text-primary","aria-hidden":"true"}))),__jsx(transition.u,{as:react.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:function afterLeave(){return setQuery("")}},__jsx(combobox.h.Options,{className:dropdownStyles_optionsContainer},0===filteredItem.length&&""!==query?__jsx("div",{className:dropdownStyles_noResult},"Nenhum selecionado."):filteredItem.map((function(item){return __jsx(combobox.h.Option,{className:function className(_ref2){var active=_ref2.active;return"".concat(dropdownStyles_option," ").concat(active?"bg-dark text-gray-primary":"text-gray-900")},key:item,value:item},(function(_ref3){var selected=_ref3.selected;return __jsx(react.Fragment,null,__jsx("span",{className:"block truncate ".concat(selected?"font-medium text-primary":"font-normal")},item))}))}))))))};Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const Dropdown_Dropdown=Dropdown;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"components/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Common$parameters,_Common$parameters2,_Common$parameters2$d,Dropdown_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Dropdown_stories={title:"Design system/Molecules/Dropdown",component:Dropdown_Dropdown,decorators:[function(Story){return Dropdown_stories_jsx("div",{style:{paddingBottom:"15em",paddingTop:"3em"}},Dropdown_stories_jsx(Story,null))}]};var Primary={args:{list:[]}},Common={args:{list:["Durward Reynolds","Kenton Towne","Therese Wunsch","Benedict Kessler","Katelyn Rohan"]}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    list: []\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Common.parameters=_objectSpread(_objectSpread({},Common.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Common$parameters=Common.parameters)||void 0===_Common$parameters?void 0:_Common$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    list: ["Durward Reynolds", "Kenton Towne", "Therese Wunsch", "Benedict Kessler", "Katelyn Rohan"]\n  }\n}'},null===(_Common$parameters2=Common.parameters)||void 0===_Common$parameters2||null===(_Common$parameters2$d=_Common$parameters2.docs)||void 0===_Common$parameters2$d?void 0:_Common$parameters2$d.source)})})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);