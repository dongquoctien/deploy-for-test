(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2QGa":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i("F97/"),s=i("SeVD"),o=i("pLZG"),l=i("HDdC");function a(e,t,i){return[Object(o.a)(t,i)(new l.a(Object(s.a)(e))),Object(o.a)(Object(n.a)(t,i))(new l.a(Object(s.a)(e)))]}},U6NN:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("fXoL"),s=i("3Pt+"),o=i("LvDl"),l=i("ofXK");function a(e,t){if(1&e&&(n.Wb(0,"option",3),n.Pc(1),n.Vb()),2&e){const e=n.hc();n.pc("ngValue",null),n.Cb(1),n.Qc(e.useAllOptionName)}}function u(e,t){if(1&e&&(n.Wb(0,"option",3),n.Pc(1),n.Vb()),2&e){const e=t.$implicit,i=n.hc();n.pc("ngValue",e),n.Cb(1),n.Qc(i.displayKey?e[i.displayKey]:e)}}const r={provide:s.p,useExisting:Object(n.U)(()=>c),multi:!0};let c=(()=>{class e{constructor(e,t,i,s){this.el=e,this.renderer=t,this.cd=i,this.zone=s,this.dataKey="value",this.displayKey="label",this.useAllOptionYn=!0,this.useAllOptionName="All",this.onChange=new n.n,this.onModelChange=()=>{},this.onModelTouched=()=>{}}get invalid(){return this.isInvalid}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.cd.destroyed||this.cd.detectChanges()}get options(){return this._options}set options(e){this._options=e,this.updateSelectedOption(this.value)}ngOnInit(){this.updateSelectedOption(null)}ngOnDestroy(){}compareFn(e,t){return this.dataKey?e[this.dataKey]===t[this.dataKey]:e===t}selectItem(e){this.selectedOption=e,this.value=this._getValue(e),this.onModelChange(this.value),this.onChange.emit({value:this.value,option:e})}writeValue(e){this.value=e,this.updateSelectedOption(e),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e}updateSelectedOption(e){this.selectedOption=this._findOption(e,this.options)}_findOption(e,t){return this.dataKey?o.find(t,t=>t[this.dataKey]===e)||null:e}_getValue(e){return o.isNil(e)?null:e[this.dataKey]}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.l),n.Qb(n.E),n.Qb(n.h),n.Qb(n.z))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-selectbox"]],hostAttrs:[1,"select-box"],hostVars:2,hostBindings:function(e,t){2&e&&n.Gb("valid-error",t.invalid)},inputs:{name:"name",styleClass:"styleClass",required:"required",tabindex:"tabindex",dataKey:"dataKey",displayKey:"displayKey",isInvalid:"isInvalid",useAllOptionYn:"useAllOptionYn",useAllOptionName:"useAllOptionName",disabled:"disabled",options:"options"},outputs:{onChange:"onChange"},features:[n.Bb([r])],decls:3,vars:8,consts:[[3,"compareWith","ngModel","disabled","ngModelChange"],[3,"ngValue",4,"ngIf"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"]],template:function(e,t){1&e&&(n.Wb(0,"select",0),n.fc("ngModelChange",(function(e){return t.selectItem(e)})),n.Nc(1,a,2,2,"option",1),n.Nc(2,u,2,2,"option",2),n.Vb()),2&e&&(n.pc("compareWith",t.compareFn)("ngModel",t.selectedOption)("disabled",t.disabled),n.Db("name",t.name)("required",t.required)("tabindex",t.tabindex),n.Cb(1),n.pc("ngIf",t.useAllOptionYn),n.Cb(1),n.pc("ngForOf",t.options))},directives:[s.y,s.r,s.u,s.x,l.o,l.n,s.v,s.A],encapsulation:2}),e})()},pfiq:function(e,t,i){"use strict";i.d(t,"a",(function(){return G}));var n=i("fXoL"),s=i("3Pt+"),o=i("R0Ic"),l=i("XNiG"),a=i("2QGa"),u=i("Kj3r"),r=i("/uUt"),c=i("w1tV"),h=i("vkgz"),p=i("pLZG"),d=i("lJxs"),g=i("eIep"),m=i("7o/Q");class f{constructor(e,t){this.count=e,this.source=t}call(e,t){return t.subscribe(new b(e,this.count,this.source))}}class b extends m.a{constructor(e,t,i){super(e),this.count=t,this.source=i}error(e){if(!this.isStopped){const{source:t,count:i}=this;if(0===i)return super.error(e);i>-1&&(this.count=i-1),t.subscribe(this._unsubscribeAndRecycle())}}}var v=i("nYR2"),y=i("LvDl"),C=i("YDFv");class F{static equals(e,t,i){return i?this.resolveFieldData(e,i)===this.resolveFieldData(t,i):this.equalsByValue(e,t)}static equalsByValue(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var i,n,s,o=Array.isArray(e),l=Array.isArray(t);if(o&&l){if((n=e.length)!=t.length)return!1;for(i=n;0!=i--;)if(!this.equalsByValue(e[i],t[i]))return!1;return!0}if(o!=l)return!1;var a=e instanceof Date,u=t instanceof Date;if(a!=u)return!1;if(a&&u)return e.getTime()==t.getTime();var r=e instanceof RegExp,c=t instanceof RegExp;if(r!=c)return!1;if(r&&c)return e.toString()==t.toString();var h=Object.keys(e);if((n=h.length)!==Object.keys(t).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(t,h[i]))return!1;for(i=n;0!=i--;)if(!this.equalsByValue(e[s=h[i]],t[s]))return!1;return!0}return e!=e&&t!=t}static resolveFieldData(e,t){if(e&&t){if(this.isFunction(t))return t(e);if(-1==t.indexOf("."))return e[t];{let i=t.split("."),n=e;for(let e=0,t=i.length;e<t;++e){if(null==n)return null;n=n[i[e]]}return n}}return null}static isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)}static reorderArray(e,t,i){e&&t!==i&&(i>=e.length&&(i%=e.length,t%=e.length),e.splice(i,0,e.splice(t,1)[0]))}static generateSelectItems(e,t){let i;if(e&&e.length){i=[];for(let n of e)i.push({label:this.resolveFieldData(n,t),value:n})}return i}static insertIntoOrderedArray(e,t,i,n){if(i.length>0){let s=!1;for(let o=0;o<i.length;o++)if(this.findIndexInList(i[o],n)>t){i.splice(o,0,e),s=!0;break}s||i.push(e)}else i.push(e)}static findIndexInList(e,t){let i=-1;if(t)for(let n=0;n<t.length;n++)if(t[n]==e){i=n;break}return i}static removeAccents(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}}var O=i("LRne"),E=i("z6cu"),I=i("JIr8"),L=i("AytR"),w=i("tpT/");const{API_URL:x}=L.a;let k=(()=>{class e{constructor(e){this.api=e}getSuggestions(e,t){const i=y.assign({},this.api.defaultParams,{condition:t});return this.api.post(this.getFullApiUrl(e),i).pipe(Object(g.a)(e=>(null==e?void 0:e.succeedYn)?Object(O.a)(e.result):Object(E.a)(e)),Object(I.a)(e=>(console.error(e),Object(O.a)({}))))}getFullApiUrl(e){return`${x}/${e}`}}return e.\u0275fac=function(t){return new(t||e)(n.bc(w.a))},e.\u0275prov=n.Mb({token:e,factory:e.\u0275fac}),e})();const N=/^[a-zA-Z]*$/,D=/^[a-zA-Z_\xc0\xc1\xc2\xc3\xc8\xc9\xca\u1ebe\xcc\xcd\xd2\xd3\xd4\xd5\xd9\xda\u0102\u0110\u0128\u0168\u01a0\xe0\xe1\xe2\xe3\xe8\xe9\xea\u1ebf\xec\xed\xf2\xf3\xf4\xf5\xf9\xfa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\ ]+$/,V=/^[\u3131-\u314e|\u314f-\u3163]*$/;var S=function(e){return e.Airports="airports",e.Cities="cities",e.Hotels="hotels",e.Pois="pois",e.Regions="regions",e.ServiceActivities="serviceActivities",e.ServiceCities="serviceCities",e.Vehicles="vehicles",e}({}),K=i("ofXK");const j=["in"],A=["multiIn"];function T(e,t){if(1&e){const e=n.Xb();n.Wb(0,"a",10),n.fc("click",(function(){n.Fc(e),n.hc();const t=n.Ec(1);return n.hc(2).removeItem(t)})),n.Pc(1,"\uc0ad\uc81c"),n.Vb()}}function M(e,t){if(1&e&&(n.Wb(0,"div",7,8),n.Wb(2,"span"),n.Pc(3),n.Vb(),n.Nc(4,T,2,0,"a",9),n.Vb()),2&e){const e=t.$implicit,i=n.hc(2);n.Cb(3),n.Qc(i.resolveFieldData(e)),n.Cb(1),n.pc("ngIf",!i.disabled)}}function R(e,t){if(1&e&&(n.Wb(0,"div",5),n.Nc(1,M,5,2,"div",6),n.Vb()),2&e){const e=n.hc();n.Cb(1),n.pc("ngForOf",e.value)}}function _(e,t){if(1&e){const e=n.Xb();n.Wb(0,"input",11,12),n.fc("click",(function(t){return n.Fc(e),n.hc().onInputClick(t)}))("input",(function(t){return n.Fc(e),n.hc().onInput(t)}))("keydown",(function(t){return n.Fc(e),n.hc().onKeydown(t)}))("keyup",(function(t){return n.Fc(e),n.hc().onKeyup(t)}))("focus",(function(t){return n.Fc(e),n.hc().onInputFocus(t)}))("blur",(function(t){return n.Fc(e),n.hc().onInputBlur(t)}))("change",(function(t){return n.Fc(e),n.hc().onInputChange(t)}))("paste",(function(t){return n.Fc(e),n.hc().onInputPaste(t)}))("focusout",(function(){return n.Fc(e),n.hc().focusOutFunction()})),n.Vb()}if(2&e){const e=n.hc();n.pc("autocomplete",e.autocomplete)("value",e.inputFieldValue)("readonly",e.readonly)("disabled",e.disabled),n.Db("type",e.type)("placeholder",e.placeholder)("maxlength",e.maxlength)("aria-expanded",e.overlayVisible)("autofocus",e.autofocus)("tabindex",e.tabindex)("aria-activedescendant","p-highlighted-option")}}function P(e,t){if(1&e){const e=n.Xb();n.Wb(0,"input",13,14),n.fc("click",(function(t){return n.Fc(e),n.hc().onInputClick(t)}))("input",(function(t){return n.Fc(e),n.hc().onInput(t)}))("keydown",(function(t){return n.Fc(e),n.hc().onKeydown(t)}))("keyup",(function(t){return n.Fc(e),n.hc().onKeyup(t)}))("focus",(function(t){return n.Fc(e),n.hc().onInputFocus(t)}))("blur",(function(t){return n.Fc(e),n.hc().onInputBlur(t)}))("change",(function(t){return n.Fc(e),n.hc().onInputChange(t)}))("paste",(function(t){return n.Fc(e),n.hc().onInputPaste(t)})),n.Vb()}if(2&e){const e=n.hc();n.pc("autocomplete",e.autocomplete)("readonly",e.readonly)("disabled",e.disabled),n.Db("type",e.type)("placeholder",e.placeholder)("maxlength",e.maxlength)("aria-expanded",e.overlayVisible)("autofocus",e.autofocus)("tabindex",e.tabindex)}}const U=function(e){return{hover:e}};function B(e,t){if(1&e){const e=n.Xb();n.Wb(0,"li",18),n.fc("mouseenter",(function(){n.Fc(e);const i=t.$implicit;return n.hc(2).highlightOption=i}))("mouseleave",(function(){return n.Fc(e),n.hc(2).highlightOption=null}))("click",(function(){n.Fc(e);const i=t.$implicit;return n.hc(2).selectItem(i)})),n.Wb(1,"a",19),n.Pc(2),n.Vb(),n.Vb()}if(2&e){const e=t.$implicit,i=n.hc(2);n.pc("ngClass",n.uc(3,U,i.highlightOption==e))("id",i.highlightOption==e?"p-highlighted-option":""),n.Cb(2),n.Qc(i.resolveFieldData(e))}}function z(e,t){if(1&e&&(n.Wb(0,"li",20),n.Pc(1),n.Vb()),2&e){const e=n.hc(2);n.Cb(1),n.Qc(e.emptyMessage)}}const W=function(e){return{"auto-complete-result":!0,shadow:!0,active:e}},Q=function(e,t){return{showTransitionParams:e,hideTransitionParams:t}},H=function(e){return{value:"visible",params:e}};function $(e,t){if(1&e){const e=n.Xb();n.Wb(0,"div",1,15),n.fc("@overlayAnimation.start",(function(t){return n.Fc(e),n.hc().onOverlayAnimationStart(t)}))("@overlayAnimation.done",(function(t){return n.Fc(e),n.hc().onOverlayAnimationDone(t)})),n.Wb(2,"ul"),n.Nc(3,B,3,5,"li",16),n.Nc(4,z,2,1,"li",17),n.Vb(),n.Vb()}if(2&e){const e=n.hc();n.pc("ngClass",n.uc(4,W,e.overlayVisible))("@overlayAnimation",n.uc(9,H,n.vc(6,Q,e.showTransitionOptions,e.hideTransitionOptions))),n.Cb(3),n.pc("ngForOf",e.suggestions),n.Cb(1),n.pc("ngIf",e.noResults&&e.emptyMessage)}}const q=function(e){return{"valid-error":e,"input search flex-fill":!0}},Y={provide:s.p,useExisting:Object(n.U)(()=>G),multi:!0},X={limits:[0,10]};let G=(()=>{class e{constructor(e,t,i,s,o){this.el=e,this.renderer=t,this.cd=i,this.differs=s,this.service=o,this.minLength=1,this.delay=300,this.forceSelection=!0,this.type="text",this.completeOnFocus=!1,this.scrollHeight="200px",this.dropdownMode="blank",this.multiple=!1,this.listFlag=!0,this.emptyMessage="There are no search results. Please enter another search.",this.showTransitionOptions="0ms ease-out",this.hideTransitionOptions="0ms ease-in",this.autocomplete="off",this.limitConditionNeedYn=!0,this.compTypeCodeFlag=!1,this.completeMethod=new n.n,this.onSelect=new n.n,this.onUnselect=new n.n,this.onFocus=new n.n,this.onBlur=new n.n,this.onClear=new n.n,this.onKeyUp=new n.n,this.onShow=new n.n,this.onHide=new n.n,this.overlayVisible=!1,this.focus=!1,this.itemClicked=!1,this.autoKeyword$=new l.a,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.differ=s.find([]).create(null),this._initAutoKeywordSub()}get invalid(){return this.isInvalid}get suggestions(){return this._suggestions}set suggestions(e){this._suggestions=e,this.handleSuggestionsChange()}get inputFieldValue(){return this._inputFieldValue}set inputFieldValue(e){y.isNil(e)?this._inputFieldValue="":(this._inputFieldValue=e,this.updateInputField(e))}ngAfterViewInit(){this.writeValue(this.value)}ngAfterContentChecked(){}ngAfterViewChecked(){this.highlightOptionChanged&&(setTimeout(()=>{if(this.overlay){const e=C.a.findSingle(this.overlay,"li.hover");e&&C.a.scrollInView(this.overlay,e)}},1),this.highlightOptionChanged=!1)}getInputValue(){return!this.multiple&&this.inputId?{[this.inputId]:y.isEmpty(this.inputEL.nativeElement.value)?null:this.inputEL.nativeElement.value}:null}handleSuggestionsChange(){null!=this._suggestions&&(this.highlightOption=null,this._suggestions.length?(this.noResults=!1,this.show()):(this.noResults=!0,this.emptyMessage?this.show():this.hide()))}writeValue(e){if(this.value=e,this.filled=this.value&&""!==this.value,!this.inputFieldValue)if(this.inputEL&&"*"===this.value)this.inputEL.nativeElement.value="*";else{if(this.inputEL&&this.value){const e=y.omitBy(this.apiCondition||{},y.isNil),t=Object.assign({},this.limitConditionNeedYn?X:{},e),i=this.value.toString();this.apiSearchTerm&&("admin/common/staff"===this.apiUrl&&parseInt(i)>0?t.userNo=parseInt(i):"admin/basis/region"===this.apiUrl&&parseInt(i)>0?t.regionCode=parseInt(i):t[this.apiSearchTerm]=i),this.compTypeCodeFlag&&(t.compTypeCodes=["CMP01","CMP08"],t.compName=i,t.corporateCompName=void 0),this.suggestions?this.inputEL.nativeElement.value=this.resolveFieldData(this._findItemByDataKey(this.suggestions)):(this.inputEL.nativeElement.value="searching...",this.service.getSuggestions(this.apiUrl,t).subscribe(e=>{const t=y.get(e,this.searchResultPath||["list"]);t&&t.length>0&&(this.inputEL.nativeElement.value=this.resolveFieldData(this._findItemByDataKey(t)))}))}this.updateInputField()}}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e}onInput(e){if(this.itemClicked=!1,!this.inputKeyDown&&C.a.isIE())return;this.timeout&&clearTimeout(this.timeout);const t=e.target.value;0!==t.length||this.multiple||(this.hide(),this.onClear.emit(e),this.onModelChange(null)),this.search(e,t),this.updateFilledState(),this.inputKeyDown=!1}onInputClick(e){this.documentClickListener&&(this.inputClick=!0)}search(e,t){y.isNil(t)||this.autoKeyword$.next(t)}selectItem(e,t=!0){this.multiple?(this.multiInputEL.nativeElement.value="",this.value=this.value||[],this.isSelected(e)||(this.value=[...this.value,e],this.onModelChange(this.value))):(this.inputEL.nativeElement.value=this.resolveFieldData(e),this.value=this.dataKey?F.resolveFieldData(e,this.dataKey)||"":e,this.onModelChange(this.value));const i=this.multiple?Object.assign({},e):Object.assign(Object.assign({},e),{value:this.value,label:this.inputEL.nativeElement.value});this.onSelect.emit(i),this.updateFilledState(),this.autoKeyword$.next(null),t&&(this.itemClicked=!0,this.focusInput())}updateInputField(e){null===this.value?(this.inputEL&&this.inputEL.nativeElement&&(this.inputEL.nativeElement.value=""),this.multiInputEL&&this.multiInputEL.nativeElement&&(this.multiInputEL.nativeElement.value="")):e&&(this.inputEL&&this.inputEL.nativeElement&&(this.inputEL.nativeElement.value=e),this.multiInputEL&&this.multiInputEL.nativeElement&&(this.multiInputEL.nativeElement.value=e))}show(){if(this.multiInputEL||this.inputEL){const e=this.multiple?document.activeElement==this.multiInputEL.nativeElement:document.activeElement==this.inputEL.nativeElement;!this.overlayVisible&&e&&(this.overlayVisible=!0)}}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.overlay=e.element,this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.onShow.emit(e);break;case"void":this.onOverlayHide()}}onOverlayAnimationDone(e){"void"===e.toState&&(this._suggestions=null)}resolveFieldData(e){return y.isNil(e)?"":this.inputFieldFormat&&this.inputFieldFormatKeyList&&this.inputFieldFormatKeyList.length>0?this._formatInputField(this.inputFieldFormat,e,this.inputFieldFormatKeyList):e}hide(){this.overlayVisible=!1,this.cd.markForCheck()}focusInput(){this.multiple?this.multiInputEL.nativeElement.focus():this.inputEL.nativeElement.focus()}removeItem(e){const t=C.a.index(e),i=this.value[t];this.value=this.value.filter((e,i)=>i!==t),this.onModelChange(this.value.length>0?this.value:null),this.updateFilledState(),this.onUnselect.emit(i)}onKeydown(e){if(this.overlayVisible){const t=this.findOptionIndex(this.highlightOption);switch(e.which){case 40:if(-1!==t){const e=t+1;e!==this.suggestions.length&&(this.highlightOption=this.suggestions[e],this.highlightOptionChanged=!0)}else this.highlightOption=this.suggestions[0];e.preventDefault();break;case 38:t>0&&(this.highlightOption=this.suggestions[t-1],this.highlightOptionChanged=!0),e.preventDefault();break;case 13:this.highlightOption?(this.selectItem(this.highlightOption),this.hide()):this.suggestions&&(1!=this.suggestions.length||this.noResults||(this.selectItem(this.suggestions[0]),this.hide())),e.preventDefault();break;case 27:this.hide(),e.preventDefault();break;case 9:this.highlightOption&&this.selectItem(this.highlightOption),this.hide()}}else 40===e.which&&this.suggestions&&this.search(e,e.target.value),13!==e.which||this.value||e.preventDefault();this.inputKeyDown=!0}onKeyup(e){this.onKeyUp.emit(e)}onInputFocus(e){this.focus=!0,this.onFocus.emit(e)}onInputBlur(e){this.focus=!1,this.onModelTouched(),this.onBlur.emit(e)}onInputChange(e){}onInputPaste(e){this.onKeydown(e)}isSelected(e){let t=!1;if(this.value&&this.value.length)for(const i of this.value)if(F.equals(i,e,this.dataKey)){t=!0;break}return t}findOptionIndex(e){let t=-1;if(this.suggestions)for(let i=0;i<this.suggestions.length;i++)if(F.equals(e,this.suggestions[i])){t=i;break}return t}updateFilledState(){this.filled=this.multiple?this.value&&this.value.length||this.multiInputEL&&this.multiInputEL.nativeElement&&""!==this.multiInputEL.nativeElement.value:this.inputFieldValue&&""!==this.inputFieldValue||this.inputEL&&this.inputEL.nativeElement&&""!==this.inputEL.nativeElement.value}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen("document","click",e=>{3!==e.which&&(this.inputClick||this.hide(),this.inputClick=!1,this.cd.markForCheck())}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}onWindowResize(){this.hide()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.overlay=null,this.onHide.emit()}_initAutoKeywordSub(){const e=this.autoKeyword$.pipe(Object(u.a)(this.delay),Object(r.a)(),Object(c.a)());let[t,i]=Object(a.a)(e,e=>e&&e.trim().length>=this.minLength);t=t.pipe(Object(h.a)(this._showLoading),Object(p.a)(e=>{const t=D,i=V;return!((N.test(null==e?void 0:e[0])||t.test(null==e?void 0:e[0]))&&e.length<3||i.test(null==e?void 0:e[0]))}),Object(d.a)(e=>{const t=y.omitBy(this.apiCondition||{},y.isNil),i=Object.assign({},this.limitConditionNeedYn?X:{},t);return e="roleSeq"===this.apiSearchTerm?Number(e):String(e),"admin/common/staff"===this.apiUrl&&parseInt(e)>0?i.userNo=parseInt(e):this.apiSearchTerm&&(i[this.apiSearchTerm]=e),this.compTypeCodeFlag&&(i.compTypeCodes=["CMP01","CMP08"],i.compName=e,i.corporateCompName=void 0),i}),Object(u.a)(500),Object(g.a)(e=>this.service.getSuggestions(this.apiUrl,e)),Object(h.a)(this._hideLoading),function(e=-1){return t=>t.lift(new f(e,t))}(2),Object(v.a)(this._hideLoading)),i=i.pipe(Object(h.a)(e=>this.suggestions=null),Object(h.a)(e=>this.hide()),Object(v.a)(()=>this.cd.markForCheck())),this.autoKeywordSub=t.subscribe(e=>{var t;const i=this.searchResultPath||["list"];if("all"===(null===(t=this.searchResultPath)||void 0===t?void 0:t[0])){let t=[];Object.entries(e).forEach(([e,i])=>{t=this.generateSearchObjs(i,e,t)}),this.suggestions=t}else this.suggestions=y.cloneDeep(y.get(e,i))||[];this.cd.markForCheck()}),this.autoResetSub=i.subscribe()}generateSearchObjs(e,t,i){return e.reduce((e,i)=>{var n,s,o,l,a,u,r,c;let h;switch(t){case S.Airports:if(h=i,e.some(e=>e.airportCode===h.airportCode))break;e.push({type:S.Airports,cityCodeIata:null!==(n=h.cityCodeIata)&&void 0!==n?n:"",airportCode:h.airportCode,airportNameLn:null!==(s=h.airportNameLn)&&void 0!==s?s:"",airportNameEn:h.airportNameEn,regionCode:"",regionNameLn:null!==(o=h.airportNameLn)&&void 0!==o?o:"",regionNameEn:h.airportNameEn,stateNameEn:null!==(l=h.stateNameEn)&&void 0!==l?l:"",countryNameEn:h.countryNameEn,countryCode:h.countryCode});break;case S.Hotels:h=i,e.push({type:S.Hotels,regionCode:h.hotelCode,regionNameLn:h.hotelNameLn,regionNameEn:h.hotelNameEn,stateNameEn:null!==(a=h.stateNameEn)&&void 0!==a?a:"",countryNameEn:h.countryNameEn,countryCode:h.countryCode});break;case S.Regions:h=i,e.push({type:S.Regions,regionNameLn:null!==(u=h.regionNameLn)&&void 0!==u?u:"",regionNameEn:h.regionNameEn,regionCode:h.regionCode,countryNameEn:null!==(r=h.countryNameEn)&&void 0!==r?r:"",stateNameEn:null!==(c=h.stateNameEn)&&void 0!==c?c:"",countryCode:h.countryCode})}return e},i)}_formatInputField(e,t,i){let n=!0;const s=i.map(e=>t.hasOwnProperty(e)?t[e]||"***":(n=!1,""));if(!n)return"";let o=e.format(s);return o=o.indexOf("***")>-1?o.split("&").filter(e=>-1===e.indexOf("***")).join(""):o.replace(/&/g,""),o}_showLoading(){this.loading=!0}_hideLoading(){this.loading=!1}_findItemByDataKey(e){return e.find(e=>e[this.dataKey]===this.value)}ngOnDestroy(){this.onOverlayHide(),this.autoKeywordSub.unsubscribe(),this.autoResetSub.unsubscribe()}focusOutFunction(){this.inputEL.nativeElement.value===this._inputFieldValue||this.itemClicked||(this.onModelChange(null),this.inputEL.nativeElement.value="")}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.l),n.Qb(n.E),n.Qb(n.h),n.Qb(n.s),n.Qb(k))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-auto-complete"]],viewQuery:function(e,t){var i;1&e&&(n.Xc(j,!0),n.Xc(A,!0)),2&e&&(n.Dc(i=n.gc())&&(t.inputEL=i.first),n.Dc(i=n.gc())&&(t.multiInputEL=i.first))},hostAttrs:[1,"auto-complete"],hostVars:2,hostBindings:function(e,t){2&e&&n.Gb("valid-error",t.invalid)},inputs:{minLength:"minLength",delay:"delay",styleClass:"styleClass",placeholder:"placeholder",readonly:"readonly",disabled:"disabled",maxlength:"maxlength",forceSelection:"forceSelection",type:"type",apiUrl:"apiUrl",apiCondition:"apiCondition",apiSearchTerm:"apiSearchTerm",searchResultPath:"searchResultPath",completeOnFocus:"completeOnFocus",field:"field",scrollHeight:"scrollHeight",dropdown:"dropdown",dropdownMode:"dropdownMode",multiple:"multiple",listFlag:"listFlag",tabindex:"tabindex",dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:"autofocus",autocomplete:"autocomplete",isInvalid:"isInvalid",inputId:"inputId",inputFieldFormat:"inputFieldFormat",inputFieldFormatKeyList:"inputFieldFormatKeyList",limitConditionNeedYn:"limitConditionNeedYn",compTypeCodeFlag:"compTypeCodeFlag",suggestions:"suggestions",inputFieldValue:"inputFieldValue"},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide"},features:[n.Bb([Y,k])],decls:5,vars:9,consts:[["class","selected-label-area",4,"ngIf"],[3,"ngClass"],["role","combobox","aria-haspopup","true",3,"autocomplete","value","readonly","disabled","click","input","keydown","keyup","focus","blur","change","paste","focusout",4,"ngIf"],["role","searchbox","aria-autocomplete","list","aria-haspopup","true",3,"autocomplete","readonly","disabled","click","input","keydown","keyup","focus","blur","change","paste",4,"ngIf"],[3,"ngClass",4,"ngIf"],[1,"selected-label-area"],["class","selected-label",4,"ngFor","ngForOf"],[1,"selected-label"],["token",""],["class","btn-label-del",3,"click",4,"ngIf"],[1,"btn-label-del",3,"click"],["role","combobox","aria-haspopup","true",3,"autocomplete","value","readonly","disabled","click","input","keydown","keyup","focus","blur","change","paste","focusout"],["in",""],["role","searchbox","aria-autocomplete","list","aria-haspopup","true",3,"autocomplete","readonly","disabled","click","input","keydown","keyup","focus","blur","change","paste"],["multiIn",""],["panel",""],[3,"ngClass","id","mouseenter","mouseleave","click",4,"ngFor","ngForOf"],["class","no-result",4,"ngIf"],[3,"ngClass","id","mouseenter","mouseleave","click"],[1,"auto-complete-item"],[1,"no-result"]],template:function(e,t){1&e&&(n.Nc(0,R,2,1,"div",0),n.Wb(1,"div",1),n.Nc(2,_,2,11,"input",2),n.Nc(3,P,2,9,"input",3),n.Vb(),n.Nc(4,$,5,11,"div",4)),2&e&&(n.pc("ngIf",t.multiple&&null!==t.value&&(null==t.value?null:t.value.length)>0&&t.listFlag),n.Cb(1),n.Eb(t.styleClass),n.pc("ngClass",n.uc(7,q,t.isInvalid)),n.Cb(1),n.pc("ngIf",!t.multiple),n.Cb(1),n.pc("ngIf",t.multiple),n.Cb(1),n.pc("ngIf",t.overlayVisible))},directives:[K.o,K.l,K.n],styles:[".hover[_ngcontent-%COMP%]{color:#000;font-style:italic;font-weight:700}"],data:{animation:[Object(o.k)("overlayAnimation",[Object(o.h)("void",Object(o.i)({opacity:0})),Object(o.h)("visible",Object(o.i)({top:"100%",opacity:1})),Object(o.j)("void => visible",Object(o.e)("{{showTransitionParams}}")),Object(o.j)("visible => void",Object(o.e)("{{hideTransitionParams}}"))])]}}),e})()}}]);