(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{UVSK:function(t,e,i){"use strict";i.r(e),i.d(e,"CONTAINERS",(function(){return re})),i.d(e,"COMPONENTS",(function(){return le})),i.d(e,"BsPolygonModule",(function(){return de}));var n={};i.r(n),i.d(n,"initComponentStateAction",(function(){return W})),i.d(n,"loadSourceTypeList",(function(){return _})),i.d(n,"loadSourceTypeListSuccess",(function(){return N})),i.d(n,"changeSearchCondition",(function(){return R})),i.d(n,"reloadList",(function(){return $})),i.d(n,"loadList",(function(){return T})),i.d(n,"getListSuccess",(function(){return x})),i.d(n,"getListFailure",(function(){return z})),i.d(n,"setGridStateAction",(function(){return A})),i.d(n,"setGridCheckStateAction",(function(){return M})),i.d(n,"changePageIndex",(function(){return B})),i.d(n,"changePageSize",(function(){return G})),i.d(n,"addSelectedDetailRowInfo",(function(){return U})),i.d(n,"delSelectedDetailRowInfo",(function(){return Y})),i.d(n,"openDetailPopup",(function(){return H})),i.d(n,"closeDetailPopup",(function(){return K})),i.d(n,"upsertPolygon",(function(){return q})),i.d(n,"upsertPolygonSuccess",(function(){return X})),i.d(n,"upsertPolygonFailure",(function(){return Q})),i.d(n,"removePolygons",(function(){return J}));var o=i("ofXK"),c=i("3Pt+"),s=i("snw9"),a=i("kt0X"),r=i("pxUr"),l=i("WG3B"),d=i("xoAz"),u=i("wPo9"),p=i("7rOj"),b=i("+NQf"),h=i("6LsY"),g=i("l1P7"),m=i("v7zA"),f=i("7UZF"),O=i("hHe4"),y=i("1OXJ"),v=i("5hwk"),S=i("kKjH"),j=i("eXiR"),C=i("w8np"),P=i("vu/V"),I=i("tyNb"),k=i("XNiG"),L=i("itXk"),V=i("zP0r"),D=i("1G5W"),E=i("Kj3r"),w=i("pLZG"),F=i("LvDl");const W=Object(a.o)("[BsPolygon/List] init component state"),_=Object(a.o)("[BsPolygon/List] load source type list"),N=Object(a.o)("[BsPolygon/List] load source type list success",Object(a.t)()),R=Object(a.o)("[BsPolygon/List] change search condition",Object(a.t)()),$=Object(a.o)("[BsPolygon/List] reload grid data list"),T=Object(a.o)("[BsPolygon/List] load grid data list",Object(a.t)()),x=Object(a.o)("[BsPolygon/List] get list success",Object(a.t)()),z=Object(a.o)("[BsPolygon/List] get list failure",Object(a.t)()),A=Object(a.o)("[BsPolygon/List] set grid state",Object(a.t)()),M=Object(a.o)("[BsPolygon/List] set grid check state",Object(a.t)()),B=Object(a.o)("[BsPolygon/List] change page index",Object(a.t)()),G=Object(a.o)("[BsPolygon/List] change page size",Object(a.t)()),U=Object(a.o)("[BsPolygon/Detail] \uc0c1\uc138\ud31d\uc5c5\uc5d0\uc11c \ubcf4\uc5ec\uc9c8 \ud56d\ubaa9 \uc120\ud0dd",Object(a.t)()),Y=Object(a.o)("[BsPolygon/Detail] \uc0c1\uc138\ud31d\uc5c5\uc5d0\uc11c \ubcf4\uc5ec\uc9c8 \ud56d\ubaa9 \uc81c\uac70"),H=Object(a.o)("[BsPolygon/Detail] polygon \ud31d\uc5c5 \uc5f4\uae30"),K=Object(a.o)("[BsPolygon/Detail] polygon \ud31d\uc5c5 \ub2eb\uae30"),q=Object(a.o)("[BsPolygon/Detail] polygon \uc815\ubcf4 \uc800\uc7a5",Object(a.t)()),X=Object(a.o)("[BsPolygon/List] upsert polygon success",Object(a.t)()),Q=Object(a.o)("[BsPolygon/List] upsert polygon failure",Object(a.t)()),J=Object(a.o)("[BsPolygon/List] \uc0ad\uc81c\ubc84\ud2bc \ud074\ub9ad \uc561\uc158",Object(a.t)());var Z=i("EVqC");const tt=Object(Z.a)({selectId:t=>t.id,sortComparer:!1}),et=tt.getInitialState({sourceTypeList:null,loading:null,reloadToggle:null,searchCondition:null,otherSearchInfo:null,gridDataTotal:null,gridState:{pageInfo:{skip:0,take:20},sortInfo:[{field:"firstInsertDatetime",dir:"desc"}]},gridCheckedState:null,isOpenDetailPopup:null,selectedDetailRowInfo:null}),it=Object(a.q)(et,Object(a.s)(n.initComponentStateAction,t=>Object.assign(Object.assign({},t),{loading:null,isOpenDetailPopup:null})),Object(a.s)(n.loadSourceTypeListSuccess,(t,{dataList:e})=>Object.assign(Object.assign({},t),{sourceTypeList:e})),Object(a.s)(n.reloadList,t=>Object.assign(Object.assign({},t),{reloadToggle:!t.reloadToggle})),Object(a.s)(n.changeSearchCondition,(t,{searchCondition:e,otherSearchInfo:i})=>Object.assign(Object.assign({},t),{searchCondition:e,otherSearchInfo:i})),Object(a.s)(n.loadList,t=>Object.assign(Object.assign({},t),{loading:!0})),Object(a.s)(n.getListSuccess,(t,{dataList:e,totalCount:i})=>tt.setAll(e,Object.assign(Object.assign({},t),{loading:!1,gridDataTotal:i}))),Object(a.s)(n.getListFailure,t=>Object.assign(Object.assign({},t),{loading:!1})),Object(a.s)(n.setGridStateAction,(t,{gridState:e})=>Object.assign(Object.assign({},t),{GridState:e})),Object(a.s)(n.setGridCheckStateAction,(t,{gridCheckedState:e})=>Object.assign(Object.assign({},t),{masterGridCheckedState:e})),Object(a.s)(n.changePageIndex,(t,{pageIndex:e})=>Object.assign(Object.assign({},t),{gridState:F.set(F.cloneDeep(t.gridState),["pageInfo","skip"],e)})),Object(a.s)(n.changePageIndex,(t,{pageIndex:e})=>Object.assign(Object.assign({},t),{gridState:F.set(F.cloneDeep(t.gridState),["pageInfo","skip"],e)})),Object(a.s)(n.openDetailPopup,t=>Object.assign(Object.assign({},t),{isOpenDetailPopup:!0})),Object(a.s)(n.closeDetailPopup,t=>Object.assign(Object.assign({},t),{isOpenDetailPopup:!1})),Object(a.s)(n.addSelectedDetailRowInfo,(t,{info:e})=>Object.assign(Object.assign({},t),{selectedDetailRowInfo:e})),Object(a.s)(n.delSelectedDetailRowInfo,t=>Object.assign(Object.assign({},t),{selectedDetailRowInfo:null})),Object(a.s)(n.upsertPolygonSuccess,(t,{upsertItem:e})=>tt.upsertOne(e,Object.assign({},t))));function nt(t,e){return Object(a.m)({bsPolygonList:it})(t,e)}const ot=Object(a.p)("bsPolygon"),ct=Object(a.r)(ot,t=>t.bsPolygonList),st=Object(a.r)(ct,t=>t.sourceTypeList),at=Object(a.r)(ct,t=>t.loading),rt=Object(a.r)(ct,t=>t.reloadToggle),lt=Object(a.r)(ct,t=>t.searchCondition),dt=Object(a.r)(ct,t=>t.otherSearchInfo),ut=tt.getSelectors(ct).selectAll,pt=Object(a.r)(ct,t=>t.gridState),bt=Object(a.r)(ct,t=>t.gridCheckedState),ht=Object(a.r)(ct,t=>t.gridDataTotal),gt=Object(a.r)(pt,t=>F.get(t,["pageInfo","take"],20)),mt=Object(a.r)(ct,t=>t.selectedDetailRowInfo),ft=Object(a.r)(ct,t=>t.isOpenDetailPopup);var Ot=i("fXoL"),yt=i("pfiq"),vt=i("LRne"),St=i("z6cu"),jt=i("eIep"),Ct=i("AytR");const{API_URL:Pt}=Ct.a,It={selectDetailCodes:`${Pt}/common/detail-code`,selectEntities:`${Pt}/admin/basis/polygon`,putRegionPolygon:`${Pt}/admin/basis/polygon`,deleteRegionPolygon:`${Pt}/admin/basis/polygon`};var kt=i("tpT/"),Lt=i("VMfx");let Vt=(()=>{class t{constructor(t,e){this.api=t,this.languageService=e}getCommonDetailCodeList(t){const e=F.assign({},this.api.defaultParams,{condition:t});return this.api.post(It.selectDetailCodes,e).pipe(Object(jt.a)(t=>t.succeedYn?Object(vt.a)(t.result.list.map(t=>({label:`${"KO"===this.languageService.currentLanguage?t.detailCodeNameLn:t.detailCodeNameEn}`,value:t.detailCode}))):Object(St.a)(t||"api response error")))}getList(t){const e=F.assign({},this.api.defaultParams,{condition:t});return this.api.post(It.selectEntities,e).pipe(Object(jt.a)(t=>{var e,i;if(t.succeedYn&&t.result){const n=(null===(i=null===(e=t.result)||void 0===e?void 0:e.list)||void 0===i?void 0:i.length)>0?t.result.list.map(t=>Object.assign({id:t.rowid},t)):[],o=t.result.totalCount;return Object(vt.a)({list:n,totalCount:o})}return Object(St.a)(t||"api response error")}))}putRegionPolygon(t){const e=F.assign({},this.api.defaultParams,{condition:t});return this.api.put(It.putRegionPolygon,e).pipe(Object(jt.a)(t=>{if(t.succeedYn&&t.result){const e=Object.assign({id:t.result.rowid},t.result);return Object(vt.a)(e)}return Object(St.a)(t||"api response error")}))}removeItems(t){const e=F.assign({},this.api.defaultParams,{condition:t});return this.api.delete(It.deleteRegionPolygon,e).pipe(Object(jt.a)(t=>t.succeedYn?Object(vt.a)(!0):Object(St.a)(t||"api response error")))}}return t.\u0275fac=function(e){return new(e||t)(Ot.bc(kt.a),Ot.bc(Lt.a))},t.\u0275prov=Ot.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Dt=(()=>{class t{constructor(t){this.fb=t,this.generateGridColumns=()=>[{field:"regionCode",title:"\uc9c0\uc5ed\ucf54\ub4dc",width:100},{field:"regionNameLn",title:"\uc9c0\uc5ed\uc774\ub984(\ud55c\uad6d\uc5b4)",width:120},{field:"regionNameEn",title:"\uc9c0\uc5ed\uc774\ub984(\uc601\uc5b4)",width:120},{field:"polygonSeq",title:"\ud3f4\ub9ac\uace4 \uc21c\ubc88",width:100},{field:"sourceTypeName",title:"\uc18c\uc2a4\uad6c\ubd84",width:120},{field:"polygonDataOrigin",title:"Polygon\ub370\uc774\ud130"},{field:"lastUpdateName",title:"\ucd5c\uc885\uc785\ub825\uc790",width:120},{field:"lastUpdateDatetime",title:"\ucd5c\uc885\uc785\ub825\ub0a0\uc9dc",width:180},{field:"firstInsertName",title:"\ucd5c\ucd08\uc785\ub825\uc790",width:120},{field:"firstInsertDatetime",title:"\ucd5c\ucd08\uc785\ub825\ub0a0\uc9dc",width:180}],this.generateListSearchForm=()=>this.fb.group({countryCode:[null,[c.z.required]],regionCode:[null]}),this.initListSearch=()=>({countryCode:null,regionCode:null}),this.generatePolygonUpsertForm=()=>this.fb.group({rowid:[null],polygonSeq:[null],regionCode:[null,[c.z.required]],polygonNameEn:[null,[c.z.required]],polygonNameLn:[null,[c.z.required]],sourceTypeCode:[null,[c.z.required]],polygonDataOrigin:[null],multiPolygonYn:[null]}),this.initPolygonUpsertFormData=()=>({rowid:null,polygonSeq:null,regionCode:null,polygonNameEn:null,polygonNameLn:null,sourceTypeCode:null,polygonDataOrigin:null,multiPolygonYn:!1})}}return t.\u0275fac=function(e){return new(e||t)(Ot.bc(c.f))},t.\u0275prov=Ot.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Et=i("+Sob");const wt=function(){return["countryCode","countryNameLn","countryNameEn"]},Ft=function(){return{itemCategoryCode:"IC02"}},Wt=function(){return["regions"]},_t=function(){return["regionNameEn","regionNameLn","countryNameLn","stateCode"]};let Nt=(()=>{class t{constructor(t){this._dataService=t,this.clickSearchEvent=new Ot.n,this.clickResetEvent=new Ot.n,this.searchForm=this._dataService.generateListSearchForm()}get otherSearchInfo(){return this._otherSearchInfo}set otherSearchInfo(t){this._otherSearchInfo=t,this._setOtherSearchInfo(t)}get searchCondition(){return this._searchCondition}set searchCondition(t){this._searchCondition=t,this.searchFormData=this._setSearchFormData(t),this._initThisState(t)}get searchFormValid(){return this.searchForm.valid}onSubmit(){if(this.searchForm.invalid)return void(this._checkValid=!0);const t=this.setSearchCondition(),e=this._setOtherSearchCondition();this.clickSearchEvent.emit({searchCondition:t,otherSearchInfo:e}),this._checkValid=!1}checkIsInvalid(t){return this._checkValid&&this.searchForm.get(t)&&this.searchForm.get(t).invalid}setSearchCondition(){return F.omitBy(this.searchForm.value,F.isNil)}_initThisState(t){this._checkValid=!1}_setSearchFormData(t){const e=this._dataService.initListSearch();return F.isEmpty(t)?e:t}_setOtherSearchInfo(t){this.countryInput=(null==t?void 0:t.countryInput)||null,this.regionInput=(null==t?void 0:t.regionInput)||null}_setOtherSearchCondition(){const t={};return this.autoCompletes.forEach(e=>{Object.assign(t,e.getInputValue())}),t}}return t.\u0275fac=function(e){return new(e||t)(Ot.Qb(Dt))},t.\u0275cmp=Ot.Kb({type:t,selectors:[["app-bs-polygon-search"]],viewQuery:function(t,e){var i;1&t&&Ot.Xc(yt.a,!0),2&t&&Ot.Dc(i=Ot.gc())&&(e.autoCompletes=i)},inputs:{otherSearchInfo:"otherSearchInfo",searchCondition:"searchCondition"},outputs:{clickSearchEvent:"clickSearchEvent",clickResetEvent:"clickResetEvent"},decls:17,vars:18,consts:[[1,"grid-search-box","multi",3,"formGroup","connectForm","ngSubmit"],[1,"form-option-area"],[1,"row"],[1,"col-1"],[1,"form-label"],["formControlName","countryCode","dataKey","countryCode","inputFieldFormat","{0}& - {1}&_{2}","apiUrl","admin/common/country","placeholder","\uad6d\uac00\uac80\uc0c9",1,"d-inline-flex","flex-fill",3,"inputFieldValue","inputId","apiSearchTerm","inputFieldFormatKeyList","isInvalid"],["formControlName","regionCode","apiUrl","common/destination","dataKey","regionCode","inputFieldFormat","{0}, {1}&, {2}&, {3}","placeholder","\uc9c0\uc5ed\uc774\ub984 \uac80\uc0c9",1,"d-inline-flex","flex-fill",3,"inputFieldValue","inputId","apiCondition","apiSearchTerm","searchResultPath","inputFieldFormatKeyList","isInvalid"],[1,"form-button-area"],["type","submit","role","button",1,"btn","btn-primary","sm"],["type","button","role","button",1,"btn","btn-reset","sm",3,"click"]],template:function(t,e){1&t&&(Ot.Wb(0,"form",0),Ot.fc("ngSubmit",(function(){return e.onSubmit()})),Ot.Wb(1,"div",1),Ot.Wb(2,"div",2),Ot.Wb(3,"div",3),Ot.Wb(4,"span",4),Ot.Wb(5,"sup"),Ot.Pc(6,"\uad6d\uac00\uba85"),Ot.Vb(),Ot.Vb(),Ot.Rb(7,"app-auto-complete",5),Ot.Vb(),Ot.Wb(8,"div",3),Ot.Wb(9,"span",4),Ot.Pc(10,"\uc9c0\uc5ed\uc774\ub984"),Ot.Vb(),Ot.Rb(11,"app-auto-complete",6),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Wb(12,"div",7),Ot.Wb(13,"button",8),Ot.Pc(14,"\uac80\uc0c9"),Ot.Vb(),Ot.Wb(15,"button",9),Ot.fc("click",(function(){return e.clickResetEvent.emit()})),Ot.Pc(16,"Reset"),Ot.Vb(),Ot.Vb(),Ot.Vb()),2&t&&(Ot.pc("formGroup",e.searchForm)("connectForm",e.searchFormData),Ot.Cb(7),Ot.pc("inputFieldValue",e.countryInput)("inputId","countryInput")("apiSearchTerm","keyword")("inputFieldFormatKeyList",Ot.tc(14,wt))("isInvalid",e.checkIsInvalid("countryCode")),Ot.Cb(4),Ot.pc("inputFieldValue",e.regionInput)("inputId","regionInput")("apiCondition",Ot.tc(15,Ft))("apiSearchTerm","keyword")("searchResultPath",Ot.tc(16,Wt))("inputFieldFormatKeyList",Ot.tc(17,_t))("isInvalid",e.checkIsInvalid("regionCode")))},directives:[c.B,c.s,c.k,Et.a,yt.a,c.r,c.i],styles:[""],changeDetection:0}),t})();var Rt=i("UIHd"),$t=i("EsKh"),Tt=i("U6NN");let xt=(()=>{class t{constructor(){this.clickAddEvent=new Ot.n,this.clickDelEvent=new Ot.n,this.changePageSizeEvent=new Ot.n,this.pageSizeOptions=[{label:"20",value:20},{label:"40",value:40},{label:"60",value:60},{label:"80",value:80},{label:"100",value:100}]}ngOnInit(){}onClickAdd(){this.clickAddEvent.emit()}onClickDel(){this.clickDelEvent.emit()}onChangePageSize(t){this.changePageSizeEvent.emit(t.value)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Ot.Kb({type:t,selectors:[["app-bs-polygon-control"]],inputs:{loading:"loading",currentPageSize:"currentPageSize",totalCount:"totalCount"},outputs:{clickAddEvent:"clickAddEvent",clickDelEvent:"clickDelEvent",changePageSizeEvent:"changePageSizeEvent"},decls:10,vars:4,consts:[[1,"grid-control-area"],[1,"grid-count"],[1,"ml-auto","d-inline-flex","flex-glow-0"],[1,"btn","btn-outline-dark","sm",3,"click"],[1,"select-box","sm","d-inline-flex","flex-glow-0"],[3,"options","ngModel","useAllOptionYn","onChange"]],template:function(t,e){1&t&&(Ot.Wb(0,"div",0),Ot.Wb(1,"strong",1),Ot.Pc(2),Ot.Vb(),Ot.Wb(3,"div",2),Ot.Wb(4,"button",3),Ot.fc("click",(function(){return e.onClickAdd()})),Ot.Pc(5,"\ucd94\uac00"),Ot.Vb(),Ot.Wb(6,"button",3),Ot.fc("click",(function(){return e.onClickDel()})),Ot.Pc(7,"\uc0ad\uc81c"),Ot.Vb(),Ot.Wb(8,"div",4),Ot.Wb(9,"app-selectbox",5),Ot.fc("onChange",(function(t){return e.onChangePageSize(t)})),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Vb()),2&t&&(Ot.Cb(2),Ot.Qc(e.loading?"":e.totalCount),Ot.Cb(7),Ot.pc("options",e.pageSizeOptions)("ngModel",e.currentPageSize)("useAllOptionYn",!1))},directives:[Tt.a,c.r,c.u],styles:[""],changeDetection:0}),t})();var zt=i("kDLv"),At=i("gbCm");function Mt(t,e){if(1&t){const t=Ot.Xb();Ot.Ub(0),Ot.Wb(1,"agm-marker",27),Ot.fc("dragEnd",(function(e){return Ot.Fc(t),Ot.hc().onDragEndMaker(e)})),Ot.Vb(),Ot.Tb()}if(2&t){const t=Ot.hc();Ot.Cb(1),Ot.pc("latitude",t.markerInfo.lat)("longitude",t.markerInfo.lng)("markerDraggable",!0)}}function Bt(t,e){if(1&t){const t=Ot.Xb();Ot.Wb(0,"div",31),Ot.Wb(1,"span",32),Ot.fc("click",(function(){Ot.Fc(t);const i=e.index;return Ot.hc(2).onClickPath(i)})),Ot.Pc(2),Ot.Vb(),Ot.Wb(3,"a",33),Ot.fc("click",(function(){Ot.Fc(t);const i=e.index;return Ot.hc(2).onRemovePath(i)})),Ot.Pc(4,"\uc0ad\uc81c"),Ot.Vb(),Ot.Vb()}if(2&t){const t=e.$implicit,i=e.index,n=Ot.hc(2);Ot.Gb("active",i===n.selectedPathIndex),Ot.Cb(2),Ot.Sc("",t.lat,", ",t.lng,"")}}function Gt(t,e){if(1&t&&(Ot.Ub(0),Ot.Wb(1,"div",28),Ot.Wb(2,"div",29),Ot.Nc(3,Bt,5,4,"div",30),Ot.Vb(),Ot.Vb(),Ot.Tb()),2&t){const t=Ot.hc();Ot.Cb(3),Ot.pc("ngForOf",t.paths)}}function Ut(t,e){1&t&&(Ot.Wb(0,"div",34),Ot.Pc(1,"\ub4f1\ub85d\ub41c \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),Ot.Vb())}const Yt=function(){return{itemCategoryCode:"IC02"}},Ht=function(){return["regions"]},Kt=function(){return["regionNameLn","regionNameEn","countryNameLn","stateCode"]},qt=function(){return{standalone:!0}};let Xt=(()=>{class t{constructor(t,e,i){this._dataService=t,this.alertService=e,this.cd=i,this.submitEvent=new Ot.n,this.closeEvent=new Ot.n,this.zoom=12,this.centerLatitude=37.5723309,this.centerLongitude=127.0142533,this.paths=[],this._$unsubscribe=new k.a,this.putForm=this._dataService.generatePolygonUpsertForm(),this._initSubscription()}get rowItem(){return this._rowitem}set rowItem(t){this._rowitem=t,this.putFormData=this._setPutFormData(t),this.paths=this._setPaths(t),this._initThisState(t)}get polygonSeqValue(){return this.putForm.get("polygonSeq").value}get markerInfo(){return F.isEmpty(this.paths)||F.isNil(this.selectedPathIndex)?null:this.paths[this.selectedPathIndex]}ngAfterContentInit(){}ngOnDestroy(){this._$unsubscribe.next(),this._$unsubscribe.complete()}onSelectRegion({regionNameEn:t,regionNameLn:e}){this.putForm.patchValue({polygonNameEn:t||null,polygonNameLn:e||null})}onSubmit(){if(this.putForm.invalid)return void(this._checkValid=!0);if(F.isEmpty(this.paths))return void this.alertService.alert("\ud3f4\ub9ac\uace4\uc815\ubcf4\ub97c \ub4f1\ub85d\ud574 \uc8fc\uc138\uc694.");const t=this._setPutCondition();this.submitEvent.emit(t),this._checkValid=!1}onDragEndMaker({coords:t}){const{lat:e,lng:i}=t;F.isEmpty(this.paths[this.selectedPathIndex])||(this.paths=this.paths.map((t,n)=>n===this.selectedPathIndex?{lat:e,lng:i}:Object.assign({},t)))}onClickPath(t){const e=this.paths[t];if(F.isEmpty(e))return;const{lat:i,lng:n}=e;this.selectedPathIndex=t,this.addLatitude=i,this.addLongitude=n,this._setGoogleMapCenter({lat:i,lng:n})}onRemovePath(t){F.isEmpty(this.paths[t])||(this.paths=this.paths.filter((e,i)=>i!==t),this.selectedPathIndex=null,this.addLatitude=null,this.addLongitude=null)}onAddPath(){if(F.isNil(this.addLatitude)||F.isNil(this.addLongitude))return void this.alertService.alert("\uc704\ub3c4 \ubc0f \uacbd\ub3c4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.");const t=this.addLatitude,e=this.addLongitude;this.paths=F.concat(this.paths,[{lat:t,lng:e}]),this._setGoogleMapCenter({lat:t,lng:e})}onClearPath(){this.paths=[]}checkIsInvalid(t){return this._checkValid&&this.putForm.get(t)&&this.putForm.get(t).invalid}_initThisState(t){this._checkValid=!1,this.regionCodeInput=(null==t?void 0:t.regionNameLn)||null}_setPutFormData(t){const e=this._dataService.initPolygonUpsertFormData();return F.isEmpty(t)?e:F.pick(t,Object.keys(e))}_setPutCondition(){const t=this.putForm.value,e=`POLYGON((${this.paths.map(t=>`${t.lng} ${t.lat}`).join(",")}))`;let i=Object.assign({},t,{polygonDataOrigin:e});return F.isNil(i.rowid)&&(i=F.omit(i,["rowid","polygonSeq"])),i}_setPaths(t){const e=null==t?void 0:t.polygonDataOrigin;return F.isNil(e)?[]:e.replace(/[POLYGON(())]/gi,"").split(",").map((t,e)=>{const i=t.indexOf(" "),n=parseFloat(t.substring(i+1)),o=parseFloat(t.substring(0,i));return 0===e&&this._setGoogleMapCenter({lat:n,lng:o}),{lat:n,lng:o}})}_initSubscription(){}_setGoogleMapCenter({lat:t,lng:e}){this.centerLatitude=t,this.centerLongitude=e}}return t.\u0275fac=function(e){return new(e||t)(Ot.Qb(Dt),Ot.Qb($t.a),Ot.Qb(Ot.h))},t.\u0275cmp=Ot.Kb({type:t,selectors:[["app-bs-polygon-form"]],inputs:{polygonSourceTypeList:"polygonSourceTypeList",rowItem:"rowItem"},outputs:{submitEvent:"submitEvent",closeEvent:"closeEvent"},decls:74,vars:34,consts:[[1,"modal-body"],[3,"formGroup","connectForm","ngSubmit"],[1,"table","table-bordered"],["width","15%"],["width","35%"],["scope","row",1,"th-bg"],[1,"form-group"],["formControlName","regionCode","apiUrl","common/destination","dataKey","regionCode","inputFieldFormat","{0}, {1}&, {2}&, {3}","placeholder","\uc9c0\uc5ed\uc774\ub984 \uac80\uc0c9",3,"inputFieldValue","apiCondition","apiSearchTerm","searchResultPath","inputFieldFormatKeyList","isInvalid","onSelect"],[1,"dash"],[3,"ngModel","ngModelOptions","disabled"],["formControlName","sourceTypeCode",3,"options","isInvalid","useAllOptionName"],["colspan","3"],["formControlName","polygonNameLn",3,"isInvalid"],["formControlName","polygonNameEn",3,"isInvalid"],["colspan","4"],[1,"googlemap-area"],[2,"width","100%","height","100%",3,"latitude","longitude","zoom","disableDefaultUI"],[4,"ngIf"],[3,"paths"],["valueType","number","inputFormat","numberOnly","placeholder","\uc704\ub3c4 \uc785\ub825",3,"ngModel","ngModelOptions","ngModelChange"],["valueType","number","inputFormat","numberOnly","placeholder","\uacbd\ub3c4 \uc785\ub825",3,"ngModel","ngModelOptions","ngModelChange"],["type","button",1,"btn","btn-light","sm",3,"click"],["type","button",1,"btn","btn-light","sm","mt5",3,"click"],[4,"ngIf","ngIfElse"],["emptyPaths",""],[1,"button-area","align-r","mt10"],["type","submit",1,"btn","btn-secondary","sm"],[3,"latitude","longitude","markerDraggable","dragEnd"],[1,"auto-complete"],[1,"selected-label-area"],["class","selected-label",3,"active",4,"ngFor","ngForOf"],[1,"selected-label"],[1,"cursor-pointer",3,"click"],[1,"btn-label-del",3,"click"],[1,"align-c"]],template:function(t,e){if(1&t&&(Ot.Wb(0,"div",0),Ot.Wb(1,"form",1),Ot.fc("ngSubmit",(function(){return e.onSubmit()})),Ot.Wb(2,"div",2),Ot.Wb(3,"table"),Ot.Wb(4,"caption"),Ot.Pc(5," Polygon \uc815\ubcf4 "),Ot.Vb(),Ot.Wb(6,"colgroup"),Ot.Rb(7,"col",3),Ot.Rb(8,"col",4),Ot.Rb(9,"col",3),Ot.Rb(10,"col",4),Ot.Vb(),Ot.Wb(11,"tbody"),Ot.Wb(12,"tr"),Ot.Wb(13,"th",5),Ot.Wb(14,"sup"),Ot.Pc(15,"\uc9c0\uc5ed\ucf54\ub4dc/ \ud3f4\ub9ac\uace4\uc21c\ubc88"),Ot.Vb(),Ot.Vb(),Ot.Wb(16,"td"),Ot.Wb(17,"div",6),Ot.Wb(18,"app-auto-complete",7),Ot.fc("onSelect",(function(t){return e.onSelectRegion(t)})),Ot.Vb(),Ot.Wb(19,"span",8),Ot.Pc(20,"/"),Ot.Vb(),Ot.Rb(21,"app-input-text",9),Ot.Vb(),Ot.Vb(),Ot.Wb(22,"th",5),Ot.Wb(23,"sup"),Ot.Pc(24,"\uc18c\uc2a4\ud0c0\uc785"),Ot.Vb(),Ot.Vb(),Ot.Wb(25,"td"),Ot.Rb(26,"app-selectbox",10),Ot.Vb(),Ot.Vb(),Ot.Wb(27,"tr"),Ot.Wb(28,"th",5),Ot.Wb(29,"sup"),Ot.Pc(30,"\ud3f4\ub9ac\uace4\uc774\ub984(\ud55c\uad6d\uc5b4)"),Ot.Vb(),Ot.Vb(),Ot.Wb(31,"td",11),Ot.Rb(32,"app-input-text",12),Ot.Vb(),Ot.Vb(),Ot.Wb(33,"tr"),Ot.Wb(34,"th",5),Ot.Wb(35,"sup"),Ot.Pc(36,"\ud3f4\ub9ac\uace4\uc774\ub984(\uc601\uc5b4)"),Ot.Vb(),Ot.Vb(),Ot.Wb(37,"td",11),Ot.Rb(38,"app-input-text",13),Ot.Vb(),Ot.Vb(),Ot.Wb(39,"tr"),Ot.Wb(40,"td",14),Ot.Wb(41,"div",15),Ot.Wb(42,"agm-map",16),Ot.Nc(43,Mt,2,3,"ng-container",17),Ot.Rb(44,"agm-polygon",18),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Wb(45,"tr"),Ot.Wb(46,"th",5),Ot.Pc(47,"\ucd94\uac00"),Ot.Vb(),Ot.Wb(48,"td",11),Ot.Wb(49,"div",6),Ot.Wb(50,"app-input-text",19),Ot.fc("ngModelChange",(function(t){return e.addLatitude=t})),Ot.Vb(),Ot.Wb(51,"span",8),Ot.Pc(52,","),Ot.Vb(),Ot.Wb(53,"app-input-text",20),Ot.fc("ngModelChange",(function(t){return e.addLongitude=t})),Ot.Vb(),Ot.Rb(54,"span",8),Ot.Wb(55,"button",21),Ot.fc("click",(function(){return e.onAddPath()})),Ot.Pc(56,"\ud3f4\ub9ac\uace4 \ucd94\uac00"),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Wb(57,"tr"),Ot.Wb(58,"th",5),Ot.Wb(59,"span"),Ot.Wb(60,"sup"),Ot.Pc(61,"Polygon\uc815\ubcf4"),Ot.Vb(),Ot.Vb(),Ot.Rb(62,"br"),Ot.Wb(63,"button",22),Ot.fc("click",(function(){return e.onClearPath()})),Ot.Pc(64,"Reset"),Ot.Vb(),Ot.Vb(),Ot.Wb(65,"td",11),Ot.Nc(66,Gt,4,1,"ng-container",23),Ot.Nc(67,Ut,2,0,"ng-template",null,24,Ot.Oc),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Wb(69,"div",25),Ot.Wb(70,"button",26),Ot.Pc(71,"\uc800\uc7a5"),Ot.Vb(),Ot.Wb(72,"button",21),Ot.fc("click",(function(){return e.closeEvent.emit()})),Ot.Pc(73,"\ucde8\uc18c"),Ot.Vb(),Ot.Vb(),Ot.Vb(),Ot.Vb()),2&t){const t=Ot.Ec(68);Ot.Cb(1),Ot.pc("formGroup",e.putForm)("connectForm",e.putFormData),Ot.Cb(17),Ot.pc("inputFieldValue",e.regionCodeInput)("apiCondition",Ot.tc(28,Yt))("apiSearchTerm","keyword")("searchResultPath",Ot.tc(29,Ht))("inputFieldFormatKeyList",Ot.tc(30,Kt))("isInvalid",e.checkIsInvalid("regionCode")),Ot.Cb(3),Ot.pc("ngModel",e.polygonSeqValue)("ngModelOptions",Ot.tc(31,qt))("disabled",!0),Ot.Cb(5),Ot.pc("options",e.polygonSourceTypeList)("isInvalid",e.checkIsInvalid("sourceTypeCode"))("useAllOptionName","_\uc120\ud0dd_"),Ot.Cb(6),Ot.pc("isInvalid",e.checkIsInvalid("polygonNameLn")),Ot.Cb(6),Ot.pc("isInvalid",e.checkIsInvalid("polygonNameEn")),Ot.Cb(4),Ot.pc("latitude",e.centerLatitude)("longitude",e.centerLongitude)("zoom",e.zoom)("disableDefaultUI",!1),Ot.Cb(1),Ot.pc("ngIf",e.markerInfo),Ot.Cb(1),Ot.pc("paths",e.paths),Ot.Cb(6),Ot.pc("ngModel",e.addLatitude)("ngModelOptions",Ot.tc(32,qt)),Ot.Cb(3),Ot.pc("ngModel",e.addLongitude)("ngModelOptions",Ot.tc(33,qt)),Ot.Cb(13),Ot.pc("ngIf",(null==e.paths?null:e.paths.length)>0)("ngIfElse",t)}},directives:[c.B,c.s,c.k,Et.a,yt.a,c.r,c.i,At.a,c.u,Tt.a,r.b,o.o,r.d,r.c,o.n],encapsulation:2,changeDetection:0}),t})();function Qt(t,e){if(1&t){const t=Ot.Xb();Ot.Wb(0,"app-bs-polygon-form",6),Ot.fc("submitEvent",(function(e){return Ot.Fc(t),Ot.hc().submitPolygonHandler(e)}))("closeEvent",(function(){return Ot.Fc(t),Ot.hc().closeDetailPopup()})),Ot.ic(1,"async"),Ot.ic(2,"async"),Ot.Vb()}if(2&t){const t=Ot.hc();Ot.pc("rowItem",Ot.jc(1,2,t.selectedItem$))("polygonSourceTypeList",Ot.jc(2,4,t.sourceTypeList$))}}let Jt=(()=>{class t{constructor(t,e,i){this.store=t,this._dataServive=e,this.alertService=i,this.unsubscribe$=new k.a,this.sourceTypeList$=t.pipe(Object(a.u)(st)),this.loading$=t.pipe(Object(a.u)(at)),this.reloadToggle$=t.pipe(Object(a.u)(rt)),this.searchCondition$=t.pipe(Object(a.u)(lt)),this.otherSearchInfo$=t.pipe(Object(a.u)(dt)),this.gridDataList$=t.pipe(Object(a.u)(ut)),this.listPageSize$=t.pipe(Object(a.u)(gt)),this.gridState$=t.pipe(Object(a.u)(pt)),this.gridCheckedState$=t.pipe(Object(a.u)(bt)),this.gridDataTotalCount$=t.pipe(Object(a.u)(ht)),this.isOpenDetailPopup$=t.pipe(Object(a.u)(ft)),this.selectedItem$=t.pipe(Object(a.u)(mt)),this.columns=this._dataServive.generateGridColumns(),this._initSubscription()}ngOnInit(){this.store.dispatch(n.loadSourceTypeList())}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete(),this.store.dispatch(n.initComponentStateAction()),this.store.dispatch(n.setGridCheckStateAction({gridCheckedState:this.gridEl.checkedStateOutput}))}changePageSizeHandler(t){this.store.dispatch(n.changePageSize({pageSize:t}))}clickSearchHandler({searchCondition:t,otherSearchInfo:e}){this.store.dispatch(n.changeSearchCondition({searchCondition:t,otherSearchInfo:e})),this.store.dispatch(n.changePageIndex({pageIndex:0}))}clickResetHandler(){this.store.dispatch(n.changeSearchCondition({searchCondition:{},otherSearchInfo:null}))}gridStateChangeHandler(t){this.store.dispatch(n.setGridStateAction({gridState:t}))}openDetailPopup(){this.store.dispatch(n.openDetailPopup())}closeDetailPopup(){this.store.dispatch(n.closeDetailPopup()),this.store.dispatch(n.delSelectedDetailRowInfo())}clickAddHandler(){this.store.dispatch(n.delSelectedDetailRowInfo()),this.openDetailPopup()}dbClickRowHandler(t){this.store.dispatch(n.addSelectedDetailRowInfo({info:F.cloneDeep(t)})),this.openDetailPopup()}submitPolygonHandler(t){this.store.dispatch(n.upsertPolygon({condition:Object.assign({},t)}))}clickDelHandler(){const t=this.gridEl.checkedDataList;if((null==t?void 0:t.length)<1)return void this.alertService.alert("No data is selected.");const e=t.map(t=>t.rowid);this.store.dispatch(n.removePolygons({rowids:e}))}_initSubscription(){this.reloadToggle$.pipe(Object(V.a)(1),Object(D.a)(this.unsubscribe$)).subscribe(()=>{this.searchFormEl.searchFormValid&&this.searchFormEl.onSubmit()}),Object(L.a)([this.searchCondition$,this.gridState$]).pipe(Object(V.a)(1),Object(E.a)(200),Object(w.a)(([t,e])=>!F.isEmpty(t)),Object(D.a)(this.unsubscribe$)).subscribe(([t,{pageInfo:e,sortInfo:i}])=>{const o=this._setSortOrder(i),c=Object.assign({},t,{limits:[e.skip,e.skip+e.take],sortOrder:o});this.store.dispatch(n.loadList({condition:c}))})}_setSortOrder(t){return t.filter(t=>!F.isNil(t.dir)).map(t=>({keyName:t.field,sort:t.dir}))}}return t.\u0275fac=function(e){return new(e||t)(Ot.Qb(a.h),Ot.Qb(Dt),Ot.Qb($t.a))},t.\u0275cmp=Ot.Kb({type:t,selectors:[["app-bs-polygon"]],viewQuery:function(t,e){var i;1&t&&(Ot.Xc(Nt,!0),Ot.Xc(Rt.a,!0)),2&t&&(Ot.Dc(i=Ot.gc())&&(e.searchFormEl=i.first),Ot.Dc(i=Ot.gc())&&(e.gridEl=i.first))},decls:18,vars:39,consts:[[3,"searchCondition","otherSearchInfo","clickSearchEvent","clickResetEvent"],[3,"loading","currentPageSize","totalCount","clickAddEvent","clickDelEvent"],[3,"gridLoading","columns","gridState","checkedState","totalCount","dataList","checkboxUseYn","stateChangeEvent","dbClickRowEvent"],["grid",""],["modalSize","lg","modalContentClass","pd-all","header","Polygon \uc815\ubcf4",3,"visible","modal","visibleChange"],[3,"rowItem","polygonSourceTypeList","submitEvent","closeEvent",4,"ngIf"],[3,"rowItem","polygonSourceTypeList","submitEvent","closeEvent"]],template:function(t,e){1&t&&(Ot.Wb(0,"app-bs-polygon-search",0),Ot.fc("clickSearchEvent",(function(t){return e.clickSearchHandler(t)}))("clickResetEvent",(function(){return e.clickResetHandler()})),Ot.ic(1,"async"),Ot.ic(2,"async"),Ot.Vb(),Ot.Wb(3,"app-bs-polygon-control",1),Ot.fc("clickAddEvent",(function(){return e.clickAddHandler()}))("clickDelEvent",(function(){return e.clickDelHandler()})),Ot.ic(4,"async"),Ot.ic(5,"async"),Ot.ic(6,"async"),Ot.Vb(),Ot.Wb(7,"app-grid-simple",2,3),Ot.fc("stateChangeEvent",(function(t){return e.gridStateChangeHandler(t)}))("dbClickRowEvent",(function(t){return e.dbClickRowHandler(t)})),Ot.ic(9,"async"),Ot.ic(10,"async"),Ot.ic(11,"async"),Ot.ic(12,"async"),Ot.ic(13,"async"),Ot.Vb(),Ot.Wb(14,"app-dialog",4),Ot.fc("visibleChange",(function(){return e.closeDetailPopup()})),Ot.ic(15,"async"),Ot.Nc(16,Qt,3,6,"app-bs-polygon-form",5),Ot.ic(17,"async"),Ot.Vb()),2&t&&(Ot.pc("searchCondition",Ot.jc(1,15,e.searchCondition$))("otherSearchInfo",Ot.jc(2,17,e.otherSearchInfo$)),Ot.Cb(3),Ot.pc("loading",Ot.jc(4,19,e.loading$))("currentPageSize",Ot.jc(5,21,e.listPageSize$))("totalCount",Ot.jc(6,23,e.gridDataTotalCount$)),Ot.Cb(4),Ot.pc("gridLoading",Ot.jc(9,25,e.loading$))("columns",e.columns)("gridState",Ot.jc(10,27,e.gridState$))("checkedState",Ot.jc(11,29,e.gridCheckedState$))("totalCount",Ot.jc(12,31,e.gridDataTotalCount$))("dataList",Ot.jc(13,33,e.gridDataList$))("checkboxUseYn",!0),Ot.Cb(7),Ot.pc("visible",Ot.jc(15,35,e.isOpenDetailPopup$))("modal",!0),Ot.Cb(2),Ot.pc("ngIf",Ot.jc(17,37,e.isOpenDetailPopup$)))},directives:[Nt,xt,Rt.a,zt.a,o.o,Xt],pipes:[o.b],encapsulation:2,changeDetection:0}),t})();const Zt=[{path:"",component:Jt,data:{title:"Polygon \uad00\ub9ac"}}];let te=(()=>{class t{}return t.\u0275mod=Ot.Ob({type:t}),t.\u0275inj=Ot.Nb({factory:function(e){return new(e||t)},imports:[[I.f.forChild(Zt)],I.f]}),t})();var ee=i("bOdf"),ie=i("zp1y"),ne=i("lJxs"),oe=i("JIr8"),ce=i("vkgz"),se=i("Xb6A");let ae=(()=>{class t{constructor(t,e,i,o,c){this._actions$=t,this._service=e,this._errorService=i,this.alertService=o,this.store=c,this.loadSourceTypeList$=Object(s.c)(()=>this._actions$.pipe(Object(s.d)(n.loadSourceTypeList),Object(ee.a)(t=>Object(vt.a)(t).pipe(Object(ie.a)(this.sourceTypeList$))),Object(jt.a)(([t,e])=>F.isNil(e)?this._service.getCommonDetailCodeList({masterCode:"BS013"}).pipe(Object(ne.a)(t=>n.loadSourceTypeListSuccess({dataList:t})),Object(oe.a)(t=>(this._catchErr(t,"\uc18c\uc2a4\ud0c0\uc785 \uc870\ud68c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),[]))):[]))),this.loadList$=Object(s.c)(()=>this._actions$.pipe(Object(s.d)(n.loadList),Object(jt.a)(({condition:t})=>this._service.getList(t).pipe(Object(ne.a)(({list:t,totalCount:e})=>n.getListSuccess({dataList:t,totalCount:e})),Object(oe.a)(t=>{const e="Polygon \ub9ac\uc2a4\ud2b8 \uc870\ud68c\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",i=[n.getListFailure({error:e})];return this._catchErr(t,e,i),[]}))))),this.upsertPolygon$=Object(s.c)(()=>this._actions$.pipe(Object(s.d)(n.upsertPolygon),Object(jt.a)(({condition:t})=>this._service.putRegionPolygon(t).pipe(Object(ne.a)(t=>({succeedYn:!0,upsertItem:t})),Object(oe.a)(t=>Object(vt.a)({succeedYn:!1,error:t})))),Object(ce.a)(({succeedYn:t,error:e,upsertItem:i})=>{if(t){const t="Polygon \uc815\ubcf4\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",e=[n.upsertPolygonSuccess({upsertItem:i}),n.closeDetailPopup()];this._runPage(t,e)}else{const t="Polygon \uc815\ubcf4 \uc800\uc7a5\uc744 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.",i=[n.upsertPolygonFailure({error:t})];this._catchErr(e,t,i)}})),{dispatch:!1}),this.removePolygons$=Object(s.c)(()=>this._actions$.pipe(Object(s.d)(n.removePolygons),Object(jt.a)(({rowids:t})=>this._service.removeItems({rowids:t}).pipe(Object(ne.a)(()=>({succeedYn:!0})),Object(oe.a)(t=>Object(vt.a)({succeedYn:!1,error:t})))),Object(ce.a)(({succeedYn:t,error:e})=>{if(t){const t=[n.reloadList()];this._runPage("Your data has been deleted.",t)}else this._catchErr(e,"Deletion failed.")})),{dispatch:!1}),this.sourceTypeList$=c.pipe(Object(a.u)(st))}_runPage(t,e){this.alertService.alert({message:t,accept:(null==e?void 0:e.length)>0?()=>{e.forEach(t=>{this.store.dispatch(t)})}:()=>{}})}_catchErr(t,e,i){const n=this._errorService.errorHandler(t,e);F.isNil(n)||(F.isNil(n.accept)&&(n.accept=(null==i?void 0:i.length)>0?()=>{i.forEach(t=>{this.store.dispatch(t)})}:()=>{}),this.alertService.alert(n))}}return t.\u0275fac=function(e){return new(e||t)(Ot.bc(s.a),Ot.bc(Vt),Ot.bc(se.a),Ot.bc($t.a),Ot.bc(a.h))},t.\u0275prov=Ot.Mb({token:t,factory:t.\u0275fac}),t})();const re=[Jt],le=[xt,Nt,Xt];let de=(()=>{class t{}return t.\u0275mod=Ot.Ob({type:t}),t.\u0275inj=Ot.Nb({factory:function(e){return new(e||t)},imports:[[o.c,c.m,c.w,l.m,d.a,u.a,p.a,v.a,b.a,h.a,g.a,m.a,f.a,O.a,y.a,S.a,C.a,j.a,P.a,te,r.a,a.j.forFeature("bsPolygon",nt),s.b.forFeature([ae])]]}),t})()}}]);