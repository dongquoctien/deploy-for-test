(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{Onn4:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("fXoL"),o=i("3Pt+"),a=i("ofXK");const c=["rb"],r=function(){return{radio:!0}},s={provide:o.p,useExisting:Object(n.U)(()=>l),multi:!0};let l=(()=>{class e{constructor(e){this.cd=e,this.onClick=new n.n,this.onFocus=new n.n,this.onBlur=new n.n,this.onModelChange=()=>{},this.onModelTouched=()=>{}}handleClick(e,t,i){e.preventDefault(),this.disabled||(this.select(e),i&&t.focus())}select(e){this.disabled||(this.inputViewChild.nativeElement.checked=!0,this.checked=!0,this.onModelChange(this.value),this.onClick.emit(e))}writeValue(e){this.checked=e===this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}onChange(e){this.select(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.h))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-radio"]],viewQuery:function(e,t){var i;1&e&&n.Kc(c,!0),2&e&&n.Dc(i=n.gc())&&(t.inputViewChild=i.first)},inputs:{value:"value",name:"name",disabled:"disabled",label:"label",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",checked:"checked"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[n.Bb([s])],decls:5,vars:11,consts:[[3,"ngClass","click"],["type","radio",1,"radio-control-input",3,"checked","disabled","change","focus","blur"],["rb",""],[1,"radio-control-text"]],template:function(e,t){1&e&&(n.Wb(0,"label",0),n.fc("click",(function(e){return t.select(e)})),n.Wb(1,"input",1,2),n.fc("change",(function(e){return t.onChange(e)}))("focus",(function(e){return t.onInputFocus(e)}))("blur",(function(e){return t.onInputBlur(e)})),n.Vb(),n.Wb(3,"span",3),n.Pc(4),n.Vb(),n.Vb()),2&e&&(n.Eb(t.styleClass),n.pc("ngClass",n.tc(10,r)),n.Cb(1),n.pc("checked",t.checked)("disabled",t.disabled),n.Db("id",t.inputId)("name",t.name)("value",t.value)("tabindex",t.tabindex),n.Cb(3),n.Qc(t.label))},directives:[a.l],encapsulation:2}),e})()},jyh4:function(e,t,i){"use strict";i.r(t),i.d(t,"CONTAINERS",(function(){return mt})),i.d(t,"COMPONENTS",(function(){return ft})),i.d(t,"BsRegionModule",(function(){return Ct}));var n={};i.r(n),i.d(n,"getListSuccess",(function(){return w})),i.d(n,"getListFailure",(function(){return D})),i.d(n,"upsertItemSuccess",(function(){return F})),i.d(n,"upsertItemFailure",(function(){return L})),i.d(n,"removeItemsSuccess",(function(){return _})),i.d(n,"removeItemsFailure",(function(){return Y})),i.d(n,"loadList",(function(){return T})),i.d(n,"reloadList",(function(){return x})),i.d(n,"initList",(function(){return $})),i.d(n,"changeSearchCondition",(function(){return z})),i.d(n,"removeSelectedGridEntities",(function(){return A})),i.d(n,"openDetailPopup",(function(){return U})),i.d(n,"closeDetailPopup",(function(){return B})),i.d(n,"addSelectedDetailRowInfo",(function(){return K})),i.d(n,"delSelectedDetailRowInfo",(function(){return H})),i.d(n,"upsertItem",(function(){return G})),i.d(n,"setGridCheckedRowidsAction",(function(){return Q})),i.d(n,"setGridStateAction",(function(){return J})),i.d(n,"changePageIndex",(function(){return M})),i.d(n,"changePageSize",(function(){return X}));var o=i("ofXK"),a=i("3Pt+"),c=i("snw9"),r=i("kt0X"),s=i("WG3B"),l=i("xoAz"),d=i("wPo9"),u=i("7rOj"),b=i("+NQf"),p=i("6LsY"),h=i("l1P7"),g=i("v7zA"),m=i("7UZF"),f=i("hHe4"),C=i("1OXJ"),v=i("5hwk"),O=i("kKjH"),S=i("qXPF"),I=i("w8np"),j=i("vu/V"),y=i("tyNb"),R=i("XNiG"),V=i("itXk"),N=i("zP0r"),k=i("1G5W"),P=i("Kj3r"),W=i("pLZG"),E=i("LvDl");const w=Object(r.o)("[BsRegion/List] get list success",Object(r.t)()),D=Object(r.o)("[BsRegion/List] get list failure",Object(r.t)()),F=Object(r.o)("[BsRegion/List] upsert item success"),L=Object(r.o)("[BsRegion/List] upsert item failure",Object(r.t)()),_=Object(r.o)("[BsRegion/API] remove items success",Object(r.t)()),Y=Object(r.o)("[BsRegion/API] remove items failure",Object(r.t)()),T=Object(r.o)("[BsRegion/List] load grid data list",Object(r.t)()),x=Object(r.o)("[BsRegion/List] reload grid data list"),$=Object(r.o)("[BsRegion/List] init grid data list"),z=Object(r.o)("[BsRegion/List] change search condition",Object(r.t)()),A=Object(r.o)("[BsRegion/List] \uc0ad\uc81c\ubc84\ud2bc \ud074\ub9ad \uc561\uc158",Object(r.t)()),U=Object(r.o)("[BsRegion/Detail] \uc0c1\uc138\ud31d\uc5c5 \uc5f4\uae30"),B=Object(r.o)("[BsRegion/Detail] \uc0c1\uc138\ud31d\uc5c5 \ub2eb\uae30"),K=Object(r.o)("[BsRegion/Detail] \uc0c1\uc138\ud31d\uc5c5\uc5d0\uc11c \ubcf4\uc5ec\uc9c8 \ud56d\ubaa9 \uc120\ud0dd",Object(r.t)()),H=Object(r.o)("[BsRegion/Detail] \uc0c1\uc138\ud31d\uc5c5\uc5d0\uc11c \ubcf4\uc5ec\uc9c8 \ud56d\ubaa9 \uc81c\uac70"),G=Object(r.o)("[BsRegion/Detail] \uc0c1\uc138\ud31d\uc5c5\uc5d0\uc11c \uc800\uc7a5 \ubc84\ud2bc \ud074\ub9ad \uc561\uc158",Object(r.t)()),Q=Object(r.o)("[BsRegion/List] set grid checked rowids",Object(r.t)()),J=Object(r.o)("[BsRegion/List] set grid state",Object(r.t)()),M=Object(r.o)("[BsRegion/List] change page index",Object(r.t)()),X=Object(r.o)("[BsRegion/List] change page size",Object(r.t)());var q=i("EVqC");const Z=Object(q.a)({selectId:e=>e.regionCode,sortComparer:!1}),ee=Z.getInitialState({loading:!1,reloadToggle:!1,searchCondition:{},otherSearchInfo:null,selectedDetailRowInfo:null,isOpenDetailPopup:!1,gridState:{pageInfo:{skip:0,take:20},sortInfo:[]},gridDataTotal:null,gridCheckedRowids:null}),te=Object(r.q)(ee,Object(r.s)(n.loadList,e=>Object.assign(Object.assign({},e),{loading:!0})),Object(r.s)(n.reloadList,e=>Object.assign(Object.assign({},e),{reloadToggle:!e.reloadToggle})),Object(r.s)(n.initList,e=>Object.assign(Object.assign({},e),{loading:!1,selectedDetailRowInfo:null,isOpenDetailPopup:!1})),Object(r.s)(n.getListSuccess,(e,{dataList:t,totalCount:i})=>{const n=Z.setAll(t,Object.assign(Object.assign({},e),{loading:!1,gridDataTotal:i})),o=function(e,t){const i=Object.assign({},e);let n=0;return t.forEach(e=>{i[e]=Object.assign(Object.assign({},i[e]),{rowid:n++})}),i}(n.entities,n.ids);return Object.assign(Object.assign({},n),{entities:o})}),Object(r.s)(n.getListFailure,e=>Object.assign(Object.assign({},e),{loading:!1})),Object(r.s)(n.changeSearchCondition,(e,{searchCondition:t,otherSearchInfo:i})=>Object.assign(Object.assign({},e),{searchCondition:t,otherSearchInfo:i})),Object(r.s)(n.openDetailPopup,e=>Object.assign(Object.assign({},e),{isOpenDetailPopup:!0})),Object(r.s)(n.closeDetailPopup,e=>Object.assign(Object.assign({},e),{isOpenDetailPopup:!1})),Object(r.s)(n.addSelectedDetailRowInfo,(e,{selectedDetailRowInfo:t})=>Object.assign(Object.assign({},e),{selectedDetailRowInfo:t})),Object(r.s)(n.delSelectedDetailRowInfo,e=>Object.assign(Object.assign({},e),{selectedDetailRowInfo:null})),Object(r.s)(n.setGridCheckedRowidsAction,(e,{rowids:t})=>Object.assign(Object.assign({},e),{gridCheckedRowids:t})),Object(r.s)(n.setGridStateAction,(e,{gridState:t})=>Object.assign(Object.assign({},e),{gridState:t})),Object(r.s)(n.changePageSize,(e,{pageSize:t})=>Object.assign(Object.assign({},e),{pageSize:t,gridState:E.set(E.cloneDeep(e.gridState),["pageInfo","take"],t)})),Object(r.s)(n.changePageIndex,(e,{pageIndex:t})=>Object.assign(Object.assign({},e),{gridState:E.set(E.cloneDeep(e.gridState),["pageInfo","skip"],t)})));function ie(e,t){return Object(r.m)({bsRegionList:te})(e,t)}const ne=Object(r.p)("bsRegion"),oe=Object(r.r)(ne,e=>e.bsRegionList),ae=Object(r.r)(oe,e=>e.loading),ce=Object(r.r)(oe,e=>e.reloadToggle),re=Object(r.r)(oe,e=>e.searchCondition),se=Object(r.r)(oe,e=>e.otherSearchInfo),le=Object(r.r)(oe,e=>e.selectedDetailRowInfo),de=Object(r.r)(oe,e=>e.isOpenDetailPopup),ue=Z.getSelectors(oe).selectAll,be=(Z.getSelectors(oe),Object(r.r)(oe,e=>e.gridState)),pe=Object(r.r)(oe,e=>e.gridDataTotal),he=Object(r.r)(oe,e=>e.gridCheckedRowids),ge=Object(r.r)(be,e=>E.get(e,["pageInfo","take"],20));var me=i("YY+H"),fe=i("fXoL"),Ce=i("pfiq"),ve=i("LRne"),Oe=i("z6cu"),Se=i("eIep"),Ie=i("AytR");const{API_URL:je}=Ie.a,ye={selectEntities:`${je}/admin/basis/region`,modifyEntities:`${je}/admin/basis/region`,selectCountryCodes:`${je}/admin/basis/country`,selectDetailCodes:`${je}/common/detail-code`,displayEntity:`${je}control/bs/region-code`};var Re=i("tpT/");let Ve=(()=>{class e{constructor(e){this.api=e}getList(e){const t=E.assign({},this.api.defaultParams,{condition:e});return this.api.post(ye.selectEntities,t).pipe(Object(Se.a)(e=>{var t,i;if(e.succeedYn){const n=this._addRowid(null===(t=e.result)||void 0===t?void 0:t.list);return Object(ve.a)({dataList:n,totalCount:(null===(i=e.result)||void 0===i?void 0:i.totalCount)||0})}return Object(Oe.a)(e||"api response error")}))}removeItems(e){const t=E.assign({},this.api.defaultParams,{condition:e});return this.api.delete(ye.modifyEntities,t).pipe(Object(Se.a)(e=>e.succeedYn?Object(ve.a)(e.result&&e.result.counts):Object(Oe.a)(e||"api response error")))}upsertItem(e){const t=E.assign({},this.api.defaultParams,{condition:e});return this.api.put(ye.modifyEntities,t).pipe(Object(Se.a)(e=>e.succeedYn?Object(ve.a)({data:e.result}):Object(Oe.a)(e||"api response error")))}getCommonDetailCodeList(e){const t=E.assign({},this.api.defaultParams,{condition:e});return this.api.post(ye.selectDetailCodes,t).pipe(Object(Se.a)(e=>e.succeedYn?Object(ve.a)(e.result.list):Object(Oe.a)(e||"api response error")))}_addRowid(e){return E.isNil(e)?[]:e.map((e,t)=>Object.assign(Object.assign({},e),{rowid:String(t)}))}}return e.\u0275fac=function(t){return new(t||e)(fe.bc(Re.a))},e.\u0275prov=fe.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Ne=i("6UzV");let ke=(()=>{class e{constructor(e){this.fb=e,this.generateGridColumns=()=>[{field:"regionCode",title:"Region Code",style:{"text-align":"center"}},{field:"regionType",title:"Region Type"},{field:"regionNameEn",title:"Region Name(EN)"},{field:"regionNameKo",title:"Region Name(KO)"},{field:"regionNameJa",title:"Region Name(JA)"},{field:"regionNameVi",title:"Region Name(VI)"},{field:"regionNameZh",title:"Region Name(ZH)"},{field:"regionNameSearch",title:"Region Name Search"},{field:"parentRegionCode",title:"Parent Region Code"},{field:"parentRegionType",title:"Parent Region Type"},{field:"parentRegionNameEn",title:"Parent Region Name(EN)"},{field:"parentRegionNameKo",title:"Parent Region Name(KO)"},{field:"parentRegionNameJa",title:"Parent Region Name(JA)"},{field:"parentRegionNameVi",title:"Parent Region Name(VI)"},{field:"parentRegionNameZh",title:"Parent Region Name(ZH)"},{field:"countryCode",title:"Country Code",style:{"text-align":"center"}},{field:"displayOrder",title:"Display Order"},{field:"cityCodeIata",title:"City Code IATA",style:{"text-align":"center"}},{field:"firstInsertName",title:"First Insert User"},{field:"firstInsertDatetime",title:"First Insert Time",type:"text",style:{"text-align":"center"}},{field:"lastUpdateName",title:"Last Insert User"},{field:"lastUpdateDatetime",title:"Last Update Time",type:"text",style:{"text-align":"center"}}],this.generateListSearchForm=()=>this.fb.group({countryCode:[null,[a.z.required]],regionName:[null],regionCode:[null],parentRegionYn:[null],parentRegionCode:[null],parentRegionName:[null]}),this.initListSearch=()=>({countryCode:null,regionName:null,regionCode:null,parentRegionYn:null}),this.generatePutForm=()=>this.fb.group({regionCode:[{value:null,disabled:!0}],regionType:[null],regionNameEn:[null,[a.z.required]],regionNameKo:[null,[a.z.required]],regionNameJa:[null],regionNameVi:[null],regionNameZh:[null],cityCodeIata:[null],parentRegionCode:[null],parentRegionType:[{value:null,disabled:!0}],regionNameSearch:[null,[a.z.required]],countryCode:[null,[a.z.required,Ne.a.eng(),a.z.minLength(2),a.z.maxLength(2)]],latitude:[null,[Ne.a.latLon()]],longitude:[null,[Ne.a.latLon()]],hotelCount:[null,[a.z.required,Ne.a.num()]],displayOrder:[null,[a.z.required,Ne.a.num()]],deleteYn:[!1,[a.z.required]],updateProhibitYn:[!1,[a.z.required]],controlRemark:[null]}),this.initPutFormData=()=>({regionCode:null,regionType:"city",regionNameEn:null,regionNameKo:null,regionNameJa:null,regionNameVi:null,regionNameZh:null,cityCodeIata:null,parentRegionCode:null,parentRegionType:null,regionNameSearch:null,latitude:null,longitude:null,countryCode:null,hotelCount:0,displayOrder:9999,deleteYn:!1,updateProhibitYn:!1,controlRemark:null})}}return e.\u0275fac=function(t){return new(t||e)(fe.bc(a.f))},e.\u0275prov=fe.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Pe=i("+Sob"),We=i("gbCm"),Ee=i("U6NN");const we=function(){return["countryCode","countryNameLn","countryNameEn"]};let De=(()=>{class e{constructor(e){this._dataService=e,this.clickSearchEvent=new fe.n,this.clickResetEvent=new fe.n,this.changeSearchConditionEvent=new fe.n,this.isShowmore=!1,this.useYnOptions=[{label:"Y",value:!0},{label:"N",value:!1}],this.searchForm=this._dataService.generateListSearchForm()}get otherSearchInfo(){return this._otherSearchInfo}set otherSearchInfo(e){this._otherSearchInfo=e,this._setOtherSearchInfo(e)}get searchCondition(){return this._searchCondition}set searchCondition(e){this._searchCondition=e,this.searchFormData=this._setSearchFormData(e)}get searchFormValid(){return this.searchForm.valid}ngOnInit(){this._initThisState()}onSubmit(){if(this.searchForm.invalid)return void(this._checkValid=!0);const e=E.omitBy(this.searchForm.value,E.isNil),t=this._setOtherSearchCondition();this.clickSearchEvent.emit({searchCondition:e,otherSearchInfo:t}),this._checkValid=!1}onReset(){this.clickResetEvent.emit()}checkIsInvalid(e){return this._checkValid&&this.searchForm.get(e)&&this.searchForm.get(e).invalid}_initThisState(){}_setSearchFormData(e){const t=this._dataService.initListSearch();return Object.assign({},t,E.pick(e,Object.keys(t)))}_setOtherSearchInfo(e){this.regionInput=(null==e?void 0:e.regionInput)||null,this.countryInput=(null==e?void 0:e.countryInput)||null,this.cityInput=(null==e?void 0:e.cityInput)||null}_setOtherSearchCondition(){const e={};return this.autoCopmpletes.forEach(t=>{Object.assign(e,t.getInputValue())}),e}}return e.\u0275fac=function(t){return new(t||e)(fe.Qb(ke))},e.\u0275cmp=fe.Kb({type:e,selectors:[["app-bs-region-search"]],viewQuery:function(e,t){var i;1&e&&fe.Xc(Ce.a,!0),2&e&&fe.Dc(i=fe.gc())&&(t.autoCopmpletes=i)},inputs:{otherSearchInfo:"otherSearchInfo",searchCondition:"searchCondition"},outputs:{clickSearchEvent:"clickSearchEvent",clickResetEvent:"clickResetEvent",changeSearchConditionEvent:"changeSearchConditionEvent"},decls:34,vars:8,consts:[[1,"grid-search-box","multi",3,"formGroup","connectForm","ngSubmit"],[1,"form-option-area"],[1,"row"],[1,"col-1"],[1,"form-label"],["formControlName","countryCode","inputId","countryInput","apiUrl","admin/common/country","dataKey","countryCode","inputFieldFormat","{0} - &{1}_&{2}","placeholder","Name",1,"d-inline-flex","flex-fill",3,"inputFieldValue","isInvalid","apiSearchTerm","inputFieldFormatKeyList"],["formControlName","regionName",1,"flex-fill"],["formControlName","regionCode","valueType","number",1,"flex-fill"],["formControlName","parentRegionYn",1,"d-inline-flex","flex-fill",3,"options"],["formControlName","parentRegionName",1,"flex-fill"],["formControlName","parentRegionCode","valueType","number",1,"flex-fill"],[1,"form-button-area"],["type","submit","role","button",1,"btn","btn-primary","sm"],["type","button","role","button",1,"btn","btn-reset","sm",3,"click"]],template:function(e,t){1&e&&(fe.Wb(0,"form",0),fe.fc("ngSubmit",(function(){return t.onSubmit()})),fe.Wb(1,"div",1),fe.Wb(2,"div",2),fe.Wb(3,"div",3),fe.Wb(4,"span",4),fe.Wb(5,"sup"),fe.Pc(6,"Country Name"),fe.Vb(),fe.Vb(),fe.Rb(7,"app-auto-complete",5),fe.Vb(),fe.Wb(8,"div",3),fe.Wb(9,"span",4),fe.Pc(10,"Region Name"),fe.Vb(),fe.Rb(11,"app-input-text",6),fe.Vb(),fe.Wb(12,"div",3),fe.Wb(13,"span",4),fe.Pc(14,"Region Code"),fe.Vb(),fe.Rb(15,"app-input-text",7),fe.Vb(),fe.Wb(16,"div",3),fe.Wb(17,"span",4),fe.Pc(18,"Parent Region YN"),fe.Vb(),fe.Rb(19,"app-selectbox",8),fe.Vb(),fe.Vb(),fe.Wb(20,"div",2),fe.Wb(21,"div",3),fe.Wb(22,"span",4),fe.Pc(23,"Parent Region Name"),fe.Vb(),fe.Rb(24,"app-input-text",9),fe.Vb(),fe.Wb(25,"div",3),fe.Wb(26,"span",4),fe.Pc(27,"Parent Region Code"),fe.Vb(),fe.Rb(28,"app-input-text",10),fe.Vb(),fe.Vb(),fe.Vb(),fe.Wb(29,"div",11),fe.Wb(30,"button",12),fe.Pc(31,"Search"),fe.Vb(),fe.Wb(32,"button",13),fe.fc("click",(function(){return t.onReset()})),fe.Pc(33,"Reset"),fe.Vb(),fe.Vb(),fe.Vb()),2&e&&(fe.pc("formGroup",t.searchForm)("connectForm",t.searchFormData),fe.Cb(7),fe.pc("inputFieldValue",t.countryInput)("isInvalid",t.checkIsInvalid("countryCode"))("apiSearchTerm","keyword")("inputFieldFormatKeyList",fe.tc(7,we)),fe.Cb(12),fe.pc("options",t.useYnOptions))},directives:[a.B,a.s,a.k,Pe.a,Ce.a,a.r,a.i,We.a,Ee.a],encapsulation:2,changeDetection:0}),e})();var Fe=i("UIHd"),Le=i("EsKh"),_e=i("nj7W"),Ye=i("bMKz");let Te=(()=>{class e{constructor(e){this.alertService=e,this.clickAddEvent=new fe.n,this.clickDelEvent=new fe.n,this.changePageSizeEvent=new fe.n,this.pageSizeOptions=[{label:"20",value:20},{label:"40",value:40},{label:"60",value:60},{label:"80",value:80},{label:"100",value:100}]}ngOnInit(){}onClickAdd(){this.clickAddEvent.emit()}onClickDel(){this.clickDelEvent.emit()}onChangePageSize(e){this.changePageSizeEvent.emit(e.value)}}return e.\u0275fac=function(t){return new(t||e)(fe.Qb(Le.a))},e.\u0275cmp=fe.Kb({type:e,selectors:[["app-bs-region-control"]],inputs:{loading:"loading",currentPageSize:"currentPageSize",totalCount:"totalCount"},outputs:{clickAddEvent:"clickAddEvent",clickDelEvent:"clickDelEvent",changePageSizeEvent:"changePageSizeEvent"},decls:8,vars:4,consts:[[1,"grid-control-area"],[1,"grid-count"],[1,"ml-auto","d-inline-flex","flex-glow-0"],[1,"btn","btn-outline-dark","sm",3,"click"],[1,"select-box","sm","d-inline-flex","flex-glow-0"],[3,"options","ngModel","useAllOptionYn","onChange"]],template:function(e,t){1&e&&(fe.Wb(0,"div",0),fe.Wb(1,"strong",1),fe.Pc(2),fe.Vb(),fe.Wb(3,"div",2),fe.Wb(4,"button",3),fe.fc("click",(function(){return t.onClickAdd()})),fe.Pc(5,"New"),fe.Vb(),fe.Wb(6,"div",4),fe.Wb(7,"app-selectbox",5),fe.fc("onChange",(function(e){return t.onChangePageSize(e)})),fe.Vb(),fe.Vb(),fe.Vb(),fe.Vb()),2&e&&(fe.Cb(2),fe.Qc(t.loading?"":t.totalCount),fe.Cb(5),fe.pc("options",t.pageSizeOptions)("ngModel",t.currentPageSize)("useAllOptionYn",!1))},directives:[Ee.a,a.r,a.u],encapsulation:2,changeDetection:0}),e})();var xe=i("kDLv"),$e=i("Onn4");const ze=function(){return["countryCode"]},Ae=function(e){return{countryCode:e}},Ue=function(){return["regionCode","regionNameEn"]};let Be=(()=>{class e{constructor(e,t){this._dataService=e,this.fb=t,this.submitEvent=new fe.n,this.closeEvent=new fe.n,this._$unsubscribe=new R.a,this.regionList=[{value:"city",label:"city"},{value:"region",label:"region"}],this.upsertForm=this._dataService.generatePutForm()}get rowItem(){return this._rowitem}set rowItem(e){this._rowitem=e,this.upsertFormData=this._setPutFormData(e),e&&(this.upsertForm.get("parentRegionType").setValue(e.regionType),this.upsertFormData.parentRegionType=null==e?void 0:e.regionType),this._initThisState(e)}get countryCode(){return this.upsertForm.get("countryCode").value}ngAfterContentInit(){this._initSubscription()}ngOnDestroy(){this._$unsubscribe.next(),this._$unsubscribe.complete()}onSelectCityCode(e){(null==e?void 0:e.cityCodeIata)&&this.upsertForm.get("cityCodeIata").setValue(e.cityCodeIata)}onSubmit(){if(this.upsertForm.invalid)return void(this._checkValid=!0);const e=this._setPutCondition();this.submitEvent.emit(e),this._checkValid=!1}onClose(){this.closeEvent.emit()}checkIsInvalid(e){return this._checkValid&&this.upsertForm.get(e)&&this.upsertForm.get(e).invalid}_initThisState(e){this._checkValid=!1,e&&(this.cityInputField=e.cityCode||null,this.countryInputField=e.countryCode||null)}_setPutFormData(e){const t=this._dataService.initPutFormData();return E.isNil(e)?t:Object.assign({},t,E.pick(e,Object.keys(t)))}onSelect(e){this.upsertForm.get("parentRegionType").setValue(e.regionType)}_setPutCondition(){const e=this._dataService.initPutFormData(),t=this.upsertForm.getRawValue();let i=Object.assign({},E.pick(t,Object.keys(e)));return i=E.omit(i,"parentRegionType"),{condition:i}}_initSubscription(){}}return e.\u0275fac=function(t){return new(t||e)(fe.Qb(ke),fe.Qb(a.f))},e.\u0275cmp=fe.Kb({type:e,selectors:[["app-bs-region-form"]],inputs:{rowItem:"rowItem"},outputs:{submitEvent:"submitEvent",closeEvent:"closeEvent"},decls:125,vars:34,consts:[[1,"modal-body"],[3,"formGroup","connectForm","ngSubmit"],[1,"table","table-bordered"],["scope","row",1,"th-bg"],["formControlName","regionCode"],["formControlName","regionType",3,"options","useAllOptionYn"],["formControlName","regionNameEn",3,"isInvalid"],["formControlName","regionNameKo",3,"isInvalid"],["formControlName","regionNameJa",3,"isInvalid"],["formControlName","regionNameVi",3,"isInvalid"],["formControlName","regionNameZh",3,"isInvalid"],["formControlName","countryCode","apiUrl","admin/common/country","dataKey","countryCode","inputFieldFormat","{0}","placeholder","e.g.KR",3,"inputFieldValue","apiSearchTerm","inputFieldFormatKeyList","isInvalid"],["placeholder","e.g.SEL","formControlName","cityCodeIata",3,"isInvalid"],["formControlName","parentRegionCode","dataKey","regionCode","apiUrl","admin/basis/region","inputFieldFormat","{0} - &{1}","placeholder","Name",3,"apiCondition","apiSearchTerm","inputFieldFormatKeyList","disabled","onSelect"],["formControlName","parentRegionType",3,"options","useAllOptionYn"],["formControlName","hotelCount","valueType","number",3,"isInvalid"],["formControlName","displayOrder","valueType","number",3,"isInvalid"],[1,"form-group"],[1,"input"],["formControlName","latitude","valueType","number",1,"flex-fill",3,"isInvalid"],[1,"dash"],["formControlName","longitude","valueType","number",1,"flex-fill",3,"isInvalid"],["formControlName","updateProhibitYn","name","updateProhibitYn","label","Y",3,"value"],["formControlName","updateProhibitYn","name","updateProhibitYn","label","N",3,"value"],["formControlName","deleteYn","name","deleteYn","label","Y",3,"value"],["formControlName","deleteYn","name","deleteYn","label","N",3,"value"],["formControlName","regionNameSearch",3,"isInvalid"],["formControlName","controlRemark",3,"isInvalid"],[1,"button-area","align-r","mt10"],["type","submit",1,"btn","btn-secondary","sm"],["type","button",1,"btn","btn-light","sm",3,"click"]],template:function(e,t){1&e&&(fe.Wb(0,"div",0),fe.Wb(1,"form",1),fe.fc("ngSubmit",(function(){return t.onSubmit()})),fe.Wb(2,"div",2),fe.Wb(3,"table"),fe.Wb(4,"caption"),fe.Pc(5," Region Info "),fe.Vb(),fe.Wb(6,"colgroup"),fe.Rb(7,"col"),fe.Rb(8,"col"),fe.Vb(),fe.Wb(9,"tbody"),fe.Wb(10,"tr"),fe.Wb(11,"th",3),fe.Wb(12,"sup"),fe.Pc(13,"Region Code"),fe.Vb(),fe.Vb(),fe.Wb(14,"td"),fe.Rb(15,"app-input-text",4),fe.Vb(),fe.Vb(),fe.Wb(16,"tr"),fe.Wb(17,"th",3),fe.Wb(18,"sup"),fe.Pc(19,"Region Type"),fe.Vb(),fe.Vb(),fe.Wb(20,"td"),fe.Rb(21,"app-selectbox",5),fe.Vb(),fe.Vb(),fe.Wb(22,"tr"),fe.Wb(23,"th",3),fe.Wb(24,"sup"),fe.Pc(25,"Region Name(EN)"),fe.Vb(),fe.Vb(),fe.Wb(26,"td"),fe.Rb(27,"app-input-text",6),fe.Vb(),fe.Vb(),fe.Wb(28,"tr"),fe.Wb(29,"th",3),fe.Wb(30,"sup"),fe.Pc(31,"Region Name(KO)"),fe.Vb(),fe.Vb(),fe.Wb(32,"td"),fe.Rb(33,"app-input-text",7),fe.Vb(),fe.Vb(),fe.Wb(34,"tr"),fe.Wb(35,"th",3),fe.Pc(36,"Region Name(JA)"),fe.Vb(),fe.Wb(37,"td"),fe.Rb(38,"app-input-text",8),fe.Vb(),fe.Vb(),fe.Wb(39,"tr"),fe.Wb(40,"th",3),fe.Pc(41,"Region Name(VI)"),fe.Vb(),fe.Wb(42,"td"),fe.Rb(43,"app-input-text",9),fe.Vb(),fe.Vb(),fe.Wb(44,"tr"),fe.Wb(45,"th",3),fe.Pc(46,"Region Name(ZH)"),fe.Vb(),fe.Wb(47,"td"),fe.Rb(48,"app-input-text",10),fe.Vb(),fe.Vb(),fe.Wb(49,"tr"),fe.Wb(50,"th",3),fe.Wb(51,"sup"),fe.Pc(52,"Country Code"),fe.Vb(),fe.Vb(),fe.Wb(53,"td"),fe.Rb(54,"app-auto-complete",11),fe.Vb(),fe.Vb(),fe.Wb(55,"tr"),fe.Wb(56,"th",3),fe.Pc(57,"City Code Iata"),fe.Vb(),fe.Wb(58,"td"),fe.Rb(59,"app-input-text",12),fe.Vb(),fe.Vb(),fe.Wb(60,"tr"),fe.Wb(61,"th",3),fe.Pc(62,"Parent Region Code"),fe.Vb(),fe.Wb(63,"td"),fe.Wb(64,"app-auto-complete",13),fe.fc("onSelect",(function(e){return t.onSelect(e)})),fe.Vb(),fe.Vb(),fe.Vb(),fe.Wb(65,"tr"),fe.Wb(66,"th",3),fe.Pc(67,"Parent Region Type"),fe.Vb(),fe.Wb(68,"td"),fe.Rb(69,"app-selectbox",14),fe.Vb(),fe.Vb(),fe.Wb(70,"tr"),fe.Wb(71,"th",3),fe.Wb(72,"sup"),fe.Pc(73,"Hotel Count"),fe.Vb(),fe.Vb(),fe.Wb(74,"td"),fe.Rb(75,"app-input-text",15),fe.Vb(),fe.Vb(),fe.Wb(76,"tr"),fe.Wb(77,"th",3),fe.Wb(78,"sup"),fe.Pc(79,"Display Order"),fe.Vb(),fe.Vb(),fe.Wb(80,"td"),fe.Rb(81,"app-input-text",16),fe.Vb(),fe.Vb(),fe.Wb(82,"tr"),fe.Wb(83,"th",3),fe.Pc(84,"Latitide / Longitude"),fe.Vb(),fe.Wb(85,"td"),fe.Wb(86,"div",17),fe.Wb(87,"div",18),fe.Rb(88,"app-input-text",19),fe.Vb(),fe.Wb(89,"span",20),fe.Pc(90,"/"),fe.Vb(),fe.Wb(91,"div",18),fe.Rb(92,"app-input-text",21),fe.Vb(),fe.Vb(),fe.Vb(),fe.Vb(),fe.Wb(93,"tr"),fe.Wb(94,"th",3),fe.Wb(95,"sup"),fe.Pc(96,"Update Prohibit YN"),fe.Vb(),fe.Vb(),fe.Wb(97,"td"),fe.Wb(98,"div",17),fe.Rb(99,"app-radio",22),fe.Rb(100,"app-radio",23),fe.Vb(),fe.Vb(),fe.Vb(),fe.Wb(101,"tr"),fe.Wb(102,"th",3),fe.Wb(103,"sup"),fe.Pc(104,"Delete YN"),fe.Vb(),fe.Vb(),fe.Wb(105,"td"),fe.Wb(106,"div",17),fe.Rb(107,"app-radio",24),fe.Rb(108,"app-radio",25),fe.Vb(),fe.Vb(),fe.Vb(),fe.Wb(109,"tr"),fe.Wb(110,"th",3),fe.Wb(111,"sup"),fe.Pc(112,"Region Name Search"),fe.Vb(),fe.Vb(),fe.Wb(113,"td"),fe.Rb(114,"app-input-text",26),fe.Vb(),fe.Vb(),fe.Wb(115,"tr"),fe.Wb(116,"th",3),fe.Pc(117,"Control Remark"),fe.Vb(),fe.Wb(118,"td"),fe.Rb(119,"app-input-text",27),fe.Vb(),fe.Vb(),fe.Vb(),fe.Vb(),fe.Vb(),fe.Wb(120,"div",28),fe.Wb(121,"button",29),fe.Pc(122,"Save"),fe.Vb(),fe.Wb(123,"button",30),fe.fc("click",(function(){return t.onClose()})),fe.Pc(124,"Cancel"),fe.Vb(),fe.Vb(),fe.Vb(),fe.Vb()),2&e&&(fe.Cb(1),fe.pc("formGroup",t.upsertForm)("connectForm",t.upsertFormData),fe.Cb(20),fe.pc("options",t.regionList)("useAllOptionYn",!1),fe.Cb(6),fe.pc("isInvalid",t.checkIsInvalid("regionNameEn")),fe.Cb(6),fe.pc("isInvalid",t.checkIsInvalid("regionNameKo")),fe.Cb(5),fe.pc("isInvalid",t.checkIsInvalid("regionNameJa")),fe.Cb(5),fe.pc("isInvalid",t.checkIsInvalid("regionNameVi")),fe.Cb(5),fe.pc("isInvalid",t.checkIsInvalid("regionNameZh")),fe.Cb(6),fe.pc("inputFieldValue",t.countryInputField)("apiSearchTerm","keyword")("inputFieldFormatKeyList",fe.tc(30,ze))("isInvalid",t.checkIsInvalid("countryCode")),fe.Cb(5),fe.pc("isInvalid",t.checkIsInvalid("cityCodeIata")),fe.Cb(5),fe.pc("apiCondition",fe.uc(31,Ae,t.countryCode))("apiSearchTerm","regionName")("inputFieldFormatKeyList",fe.tc(33,Ue))("disabled",!t.countryCode),fe.Cb(5),fe.pc("options",t.regionList)("useAllOptionYn",!1),fe.Cb(6),fe.pc("isInvalid",t.checkIsInvalid("hotelCount")),fe.Cb(6),fe.pc("isInvalid",t.checkIsInvalid("displayOrder")),fe.Cb(7),fe.pc("isInvalid",t.checkIsInvalid("latitude")),fe.Cb(4),fe.pc("isInvalid",t.checkIsInvalid("longitude")),fe.Cb(7),fe.pc("value",!0),fe.Cb(1),fe.pc("value",!1),fe.Cb(7),fe.pc("value",!0),fe.Cb(1),fe.pc("value",!1),fe.Cb(6),fe.pc("isInvalid",t.checkIsInvalid("regionNameSearch")),fe.Cb(5),fe.pc("isInvalid",t.checkIsInvalid("controlRemark")))},directives:[a.B,a.s,a.k,Pe.a,We.a,a.r,a.i,Ee.a,Ce.a,$e.a],encapsulation:2,changeDetection:0}),e})();function Ke(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"Y"),fe.Vb())}function He(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"N"),fe.Vb())}function Ge(e,t){if(1&e&&(fe.Nc(0,Ke,2,0,"span",11),fe.Nc(1,He,2,0,"span",11)),2&e){const e=t.$implicit;fe.pc("ngIf",!0===e.dynamicSearchUseYn),fe.Cb(1),fe.pc("ngIf",!1===e.dynamicSearchUseYn)}}function Qe(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"Y"),fe.Vb())}function Je(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"N"),fe.Vb())}function Me(e,t){if(1&e&&(fe.Nc(0,Qe,2,0,"span",11),fe.Nc(1,Je,2,0,"span",11)),2&e){const e=t.$implicit;fe.pc("ngIf",!0===e.flightSearchUseYn),fe.Cb(1),fe.pc("ngIf",!1===e.flightSearchUseYn)}}function Xe(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"Y"),fe.Vb())}function qe(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"N"),fe.Vb())}function Ze(e,t){if(1&e&&(fe.Nc(0,Xe,2,0,"span",11),fe.Nc(1,qe,2,0,"span",11)),2&e){const e=t.$implicit;fe.pc("ngIf",!0===e.hotelSearchUseYn),fe.Cb(1),fe.pc("ngIf",!1===e.hotelSearchUseYn)}}function et(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"Y"),fe.Vb())}function tt(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"N"),fe.Vb())}function it(e,t){if(1&e&&(fe.Nc(0,et,2,0,"span",11),fe.Nc(1,tt,2,0,"span",11)),2&e){const e=t.$implicit;fe.pc("ngIf",!0===e.deleteYn),fe.Cb(1),fe.pc("ngIf",!1===e.deleteYn)}}function nt(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"Y"),fe.Vb())}function ot(e,t){1&e&&(fe.Wb(0,"span"),fe.Pc(1,"N"),fe.Vb())}function at(e,t){if(1&e&&(fe.Nc(0,nt,2,0,"span",11),fe.Nc(1,ot,2,0,"span",11)),2&e){const e=t.$implicit;fe.pc("ngIf",!0===e.updateProhibitYn),fe.Cb(1),fe.pc("ngIf",!1===e.updateProhibitYn)}}function ct(e,t){if(1&e){const e=fe.Xb();fe.Wb(0,"app-bs-region-form",12),fe.fc("submitEvent",(function(t){return fe.Fc(e),fe.hc().submitUpsertHandler(t)}))("closeEvent",(function(){return fe.Fc(e),fe.hc().closeUpsertHandler()})),fe.ic(1,"async"),fe.Vb()}if(2&e){const e=fe.hc();fe.pc("rowItem",fe.jc(1,1,e.selectedItem$))}}const rt=function(e,t,i,n,o){return{dynamicSearchUseYnTpl:e,flightSearchUseYnTpl:t,hotelSearchUseYnTpl:i,deleteYnTpl:n,updateProhibitYnTpl:o}};let st=(()=>{class e{constructor(e,t,i,n,o,a){this.store=e,this.authStore=t,this._dataService=i,this.alertService=n,this._disPlayOrder=o,this.UserConditionService=a,this.unsubscribe$=new R.a,this._isSearchClick=!1,this.loading$=e.pipe(Object(r.u)(ae)),this.reloadToggle$=e.pipe(Object(r.u)(ce)),this.searchCondition$=e.pipe(Object(r.u)(re)),this.otherSearchInfo$=e.pipe(Object(r.u)(se)),this.gridDataList$=e.pipe(Object(r.u)(ue)),this.listPageSize$=e.pipe(Object(r.u)(ge)),this.loginUserNo$=t.pipe(Object(r.u)(me.t)),this.isOpenDetailPopup$=e.pipe(Object(r.u)(de)),this.selectedItem$=e.pipe(Object(r.u)(le)),this.gridState$=e.pipe(Object(r.u)(be)),this.gridDataTotalCount$=e.pipe(Object(r.u)(pe)),this.gridCheckedRowids$=e.pipe(Object(r.u)(he)),this.columns=this._dataService.generateGridColumns(),this.storeId$=t.pipe(Object(r.u)(me.o)),this._initSubscription()}ngOnInit(){this.storeId$.subscribe(e=>this._storeId=e),this.initSearchCondition()}ngOnDestroy(){this.store.dispatch(n.initList());const e=E.isEmpty(this.gridEl.checkedRows)?null:E.cloneDeep(this.gridEl.checkedRows);this.store.dispatch(n.setGridCheckedRowidsAction({rowids:e})),this.unsubscribe$.next(),this.unsubscribe$.complete()}changePageSizeHandler(e){this.store.dispatch(n.changePageSize({pageSize:e})),this.searchFormEl.onSubmit()}clickAddHandler(){this.store.dispatch(n.openDetailPopup())}clickDelHandler(){var e;(null===(e=this.gridEl.checkedRows)||void 0===e?void 0:e.length)>0?this.alertService.confirm({message:"Are you sure you want to delete the selected items?",accept:()=>{this.store.dispatch(n.removeSelectedGridEntities({rowids:this.gridEl.checkedRows}))},reject:()=>{}}):this.alertService.alert("There are no items selected.")}clickSearchHandler({searchCondition:e,otherSearchInfo:t}){this._isSearchClick=!0,this.store.dispatch(n.changeSearchCondition({searchCondition:e,otherSearchInfo:t})),this.store.dispatch(n.changePageIndex({pageIndex:0})),this.UserConditionService.setSearchSettingSessionStorage(e,this._storeId,t)}clickResetHandler(){this.store.dispatch(n.changeSearchCondition({searchCondition:this._dataService.initListSearch(),otherSearchInfo:null}))}gridStateChangeHandler(e){this._isSearchClick=!0,this.store.dispatch(n.setGridStateAction({gridState:e}))}dbClickRowHandler(e){this.store.dispatch(n.addSelectedDetailRowInfo({selectedDetailRowInfo:E.cloneDeep(e)})),this.clickAddHandler()}submitUpsertHandler(e){let{condition:t}=e;t=E.isNil(t.regionCode)?E.omit(t,"regionCode"):t,this.store.dispatch(n.upsertItem({upsertCondition:t}))}closeUpsertHandler(){this.store.dispatch(n.closeDetailPopup()),this.store.dispatch(n.delSelectedDetailRowInfo())}_initSubscription(){this.reloadToggle$.pipe(Object(N.a)(1),Object(k.a)(this.unsubscribe$)).subscribe(()=>{this.searchFormEl.searchFormValid&&this.searchFormEl.onSubmit()}),Object(V.a)([this.searchCondition$,this.gridState$]).pipe(Object(P.a)(200),Object(W.a)(()=>!0===this._isSearchClick),Object(W.a)(([e,t])=>!E.isNil(e)),Object(k.a)(this.unsubscribe$)).subscribe(([e,{pageInfo:t}])=>{this._isSearchClick=!1;const i=Object.assign({},e,{limits:[t.skip,t.skip+t.take]});this.store.dispatch(n.loadList({condition:i}))})}initSearchCondition(){if(this.searchCondition$.subscribe(e=>this._searchCondition=e),this.gridDataList$.subscribe(e=>this._searchGridDataList=e),this.otherSearchInfo$.subscribe(e=>this._otherSearchInfo=e),0===E.size(this._searchCondition)&&0===E.size(this._searchGridDataList)){const e=this._dataService.initListSearch(),t=this.UserConditionService.selectSearchSetting(e,this._storeId,this._otherSearchInfo);this.store.dispatch(n.changeSearchCondition({searchCondition:t[0],otherSearchInfo:t[1]}))}}}return e.\u0275fac=function(t){return new(t||e)(fe.Qb(r.h),fe.Qb(r.h),fe.Qb(ke),fe.Qb(Le.a),fe.Qb(_e.a),fe.Qb(Ye.a))},e.\u0275cmp=fe.Kb({type:e,selectors:[["app-bs-region"]],viewQuery:function(e,t){var i;1&e&&(fe.Xc(De,!0),fe.Xc(Fe.a,!0)),2&e&&(fe.Dc(i=fe.gc())&&(t.searchFormEl=i.first),fe.Dc(i=fe.gc())&&(t.gridEl=i.first))},decls:27,vars:43,consts:[[3,"otherSearchInfo","searchCondition","clickSearchEvent","clickResetEvent"],[3,"loading","currentPageSize","totalCount","clickAddEvent","clickDelEvent","changePageSizeEvent"],["dynamicSearchUseYnTpl",""],["flightSearchUseYnTpl",""],["hotelSearchUseYnTpl",""],["deleteYnTpl",""],["updateProhibitYnTpl",""],[3,"gridLoading","columns","gridState","totalCount","checkboxUseYn","dataList","templates","stateChangeEvent","dbClickRowEvent"],["gridBasis",""],["modalSize","sm","modalContentClass","pd-all","header","Region Info",3,"visible","modal","visibleChange"],[3,"rowItem","submitEvent","closeEvent",4,"ngIf"],[4,"ngIf"],[3,"rowItem","submitEvent","closeEvent"]],template:function(e,t){if(1&e&&(fe.Wb(0,"app-bs-region-search",0),fe.fc("clickSearchEvent",(function(e){return t.clickSearchHandler(e)}))("clickResetEvent",(function(){return t.clickResetHandler()})),fe.ic(1,"async"),fe.ic(2,"async"),fe.Vb(),fe.Wb(3,"app-bs-region-control",1),fe.fc("clickAddEvent",(function(){return t.clickAddHandler()}))("clickDelEvent",(function(){return t.clickDelHandler()}))("changePageSizeEvent",(function(e){return t.changePageSizeHandler(e)})),fe.ic(4,"async"),fe.ic(5,"async"),fe.ic(6,"async"),fe.Vb(),fe.Nc(7,Ge,2,2,"ng-template",null,2,fe.Oc),fe.Nc(9,Me,2,2,"ng-template",null,3,fe.Oc),fe.Nc(11,Ze,2,2,"ng-template",null,4,fe.Oc),fe.Nc(13,it,2,2,"ng-template",null,5,fe.Oc),fe.Nc(15,at,2,2,"ng-template",null,6,fe.Oc),fe.Wb(17,"app-grid-simple",7,8),fe.fc("stateChangeEvent",(function(e){return t.gridStateChangeHandler(e)}))("dbClickRowEvent",(function(e){return t.dbClickRowHandler(e)})),fe.ic(19,"async"),fe.ic(20,"async"),fe.ic(21,"async"),fe.ic(22,"async"),fe.Vb(),fe.Wb(23,"app-dialog",9),fe.fc("visibleChange",(function(){return t.closeUpsertHandler()})),fe.ic(24,"async"),fe.Nc(25,ct,2,3,"app-bs-region-form",10),fe.ic(26,"async"),fe.Vb()),2&e){const e=fe.Ec(8),i=fe.Ec(10),n=fe.Ec(12),o=fe.Ec(14),a=fe.Ec(16);fe.pc("otherSearchInfo",fe.jc(1,15,t.otherSearchInfo$))("searchCondition",fe.jc(2,17,t.searchCondition$)),fe.Cb(3),fe.pc("loading",fe.jc(4,19,t.loading$))("currentPageSize",fe.jc(5,21,t.listPageSize$))("totalCount",fe.jc(6,23,t.gridDataTotalCount$)),fe.Cb(14),fe.pc("gridLoading",fe.jc(19,25,t.loading$))("columns",t.columns)("gridState",fe.jc(20,27,t.gridState$))("totalCount",fe.jc(21,29,t.gridDataTotalCount$))("checkboxUseYn",!1)("dataList",fe.jc(22,31,t.gridDataList$))("templates",fe.yc(37,rt,e,i,n,o,a)),fe.Cb(6),fe.pc("visible",fe.jc(24,33,t.isOpenDetailPopup$))("modal",!0),fe.Cb(2),fe.pc("ngIf",fe.jc(26,35,t.isOpenDetailPopup$))}},directives:[De,Te,Fe.a,xe.a,o.o,Be],pipes:[o.b],encapsulation:2,changeDetection:0}),e})();const lt=[{path:"",component:st,data:{title:"Region \uad00\ub9ac"}}];let dt=(()=>{class e{}return e.\u0275mod=fe.Ob({type:e}),e.\u0275inj=fe.Nb({factory:function(t){return new(t||e)},imports:[[y.f.forChild(lt)],y.f]}),e})();var ut=i("lJxs"),bt=i("JIr8"),pt=i("vkgz"),ht=i("Xb6A");let gt=(()=>{class e{constructor(e,t,i,o,a){this.actions$=e,this.service=t,this._errorService=i,this.store=o,this.alertService=a,this.loadList$=Object(c.c)(()=>this.actions$.pipe(Object(c.d)(n.loadList),Object(Se.a)(({condition:e})=>this.service.getList(e).pipe(Object(ut.a)(({dataList:e,totalCount:t})=>n.getListSuccess({dataList:e,totalCount:t})),Object(bt.a)(e=>{const t="List lookup failed. Please try again in a momentarily.",i=[n.getListFailure({error:this._errorService.apiErrorHandler(e,t)})];return this._catchErr(e,t,i),[]}))))),this.removeItems$=Object(c.c)(()=>this.actions$.pipe(Object(c.d)(n.removeSelectedGridEntities),Object(Se.a)(({rowids:e})=>this.service.removeItems({rowids:e}).pipe(Object(ut.a)(e=>({succeedYn:!0})),Object(bt.a)(e=>Object(ve.a)({succeedYn:!1,error:e})))),Object(pt.a)(({succeedYn:e,error:t})=>{if(e){const e=[n.reloadList(),n.delSelectedDetailRowInfo()];this._runPage("Your data has been deleted.",e)}else{const e=[n.removeItemsFailure({error:"Deletion failed."})];this._catchErr(t,"Deletion failed.",e)}})),{dispatch:!1}),this.upsertItem$=Object(c.c)(()=>this.actions$.pipe(Object(c.d)(n.upsertItem),Object(Se.a)(({upsertCondition:e})=>this.service.upsertItem(e).pipe(Object(ut.a)(({data:e})=>({data:e,succeedYn:!0})),Object(bt.a)(e=>Object(ve.a)({succeedYn:!1,error:e})))),Object(pt.a)(({succeedYn:e,error:t})=>{if(e){const e="Your data has been saved.",t=[n.reloadList(),n.upsertItemSuccess(),n.closeDetailPopup(),n.delSelectedDetailRowInfo()];this._runPage(e,t)}else{const e="Failed to save.",i=[n.upsertItemFailure({error:e})];this._catchErr(t,e,i)}})),{dispatch:!1})}_runPage(e,t){this.alertService.alert({message:e,accept:(null==t?void 0:t.length)>0?()=>{t.forEach(e=>{this.store.dispatch(e)})}:()=>{}})}_catchErr(e,t,i){const n=this._errorService.errorHandler(e,t);E.isNil(n)||(E.isNil(n.accept)&&(n.accept=(null==i?void 0:i.length)>0?()=>{i.forEach(e=>{this.store.dispatch(e)})}:()=>{}),this.alertService.alert(n))}}return e.\u0275fac=function(t){return new(t||e)(fe.bc(c.a),fe.bc(Ve),fe.bc(ht.a),fe.bc(r.h),fe.bc(Le.a))},e.\u0275prov=fe.Mb({token:e,factory:e.\u0275fac}),e})();const mt=[st],ft=[Te,Be,De];let Ct=(()=>{class e{}return e.\u0275mod=fe.Ob({type:e}),e.\u0275inj=fe.Nb({factory:function(t){return new(t||e)},imports:[[o.c,a.m,a.w,s.m,l.a,d.a,u.a,v.a,b.a,p.a,h.a,g.a,m.a,f.a,C.a,O.a,j.a,S.a,I.a,dt,r.j.forFeature("bsRegion",ie),c.b.forFeature([gt])]]}),e})()}}]);