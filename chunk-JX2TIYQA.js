import{a as Ze}from"./chunk-QPMHDJVR.js";import{a as Oe,b as Ge,c as Ke}from"./chunk-GB56JY67.js";import{a as U,b as Be,d as H,e as Pe,g as Ae,h as De,i as W,j as Z,k as G}from"./chunk-3AOIOMK5.js";import{a as je,b as Re}from"./chunk-4ITQMOGF.js";import"./chunk-VN6NU2JI.js";import{f as I}from"./chunk-6OZH3X3Y.js";import"./chunk-WNFVJ36S.js";import"./chunk-ODEPVFOA.js";import"./chunk-CZLCKDYT.js";import{b as Ee,e as Ne,g as Le}from"./chunk-PAO6XI4Q.js";import"./chunk-F2X3VGZZ.js";import"./chunk-IJG6N763.js";import{P as ze,Q as q,x as Ve,y as Te}from"./chunk-I5R4UTLN.js";import{a as qe,d as Qe,e as Ue,h as He,m as We}from"./chunk-WOA5SYUM.js";import{a as Q}from"./chunk-WFULGBLC.js";import{c as Ie,e as Fe,g as Me,i as j,s as R,v as $e}from"./chunk-HUTEGT6H.js";import{$ as ue,Ab as g,Ba as ee,Bb as ie,Cb as oe,Da as be,Eb as C,F as se,Hb as b,Ib as d,Lb as ne,Mb as ke,Nb as A,Ob as D,Qb as p,Ra as s,Rb as re,Sb as T,Vb as xe,Wb as _e,Xb as Ce,Yb as ye,Zb as ve,_ as pe,_b as N,a as ce,aa as de,ab as x,b as ae,bb as fe,eb as B,fa as k,fc as Se,gb as _,k as le,mb as y,na as me,nb as u,oa as m,pa as h,pb as ge,pc as v,qa as he,qb as te,qc as we,rb as $,sa as M,sc as L,tb as P,tc as O,u as z,ub as V,wb as S,xb as w,ya as E,yb as r,zb as a}from"./chunk-GJPGZF7E.js";var Xe=(()=>{class e extends Le{static \u0275fac=(()=>{let t;return function(i){return(t||(t=M(e)))(i||e)}})();static \u0275cmp=x({type:e,selectors:[["MinusIcon"]],features:[B],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,i){o&1&&(he(),r(0,"svg",0),g(1,"path",1),a()),o&2&&($(i.getClassNames()),y("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var it=["checkboxicon"],ot=["input"],nt=()=>({"p-checkbox-input":!0}),rt=e=>({checked:e,class:"p-checkbox-icon"});function ct(e,n){if(e&1&&g(0,"span",8),e&2){let t=d(3);u("ngClass",t.checkboxIcon),y("data-pc-section","icon")}}function at(e,n){e&1&&g(0,"CheckIcon",9),e&2&&(u("styleClass","p-checkbox-icon"),y("data-pc-section","icon"))}function lt(e,n){if(e&1&&(ie(0),_(1,ct,1,2,"span",7)(2,at,1,2,"CheckIcon",6),oe()),e&2){let t=d(2);s(),u("ngIf",t.checkboxIcon),s(),u("ngIf",!t.checkboxIcon)}}function st(e,n){e&1&&g(0,"MinusIcon",9),e&2&&(u("styleClass","p-checkbox-icon"),y("data-pc-section","icon"))}function pt(e,n){if(e&1&&(ie(0),_(1,lt,3,2,"ng-container",4)(2,st,1,2,"MinusIcon",6),oe()),e&2){let t=d();s(),u("ngIf",t.checked),s(),u("ngIf",t._indeterminate())}}function ut(e,n){}function dt(e,n){e&1&&_(0,ut,0,0,"ng-template")}var mt=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,ht={root:({instance:e,props:n})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Je=(()=>{class e extends Ee{name="checkbox";theme=mt;classes=ht;static \u0275fac=(()=>{let t;return function(i){return(t||(t=M(e)))(i||e)}})();static \u0275prov=ue({token:e,factory:e.\u0275fac})}return e})();var bt={provide:qe,useExisting:pe(()=>X),multi:!0},X=(()=>{class e extends Ne{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new E;onFocus=new E;onBlur=new E;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Te(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=be(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=k(Je);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let o,i=this.injector.get(Qe,null,{optional:!0,self:!0}),c=i&&!this.formControl?i.value:this.model;this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(this.checked||this._indeterminate()?o=c.filter(l=>!Ve(l,this.value)):o=c?[...c,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=M(e)))(i||e)}})();static \u0275cmp=x({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,i,c){if(o&1&&(ne(c,it,4),ne(c,ze,4)),o&2){let l;A(l=D())&&(i.checkboxIconTemplate=l.first),A(l=D())&&(i.templates=l)}},viewQuery:function(o,i){if(o&1&&ke(ot,5),o&2){let c;A(c=D())&&(i.inputViewChild=c.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",v],binary:[2,"binary","binary",v],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",we],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",v],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",v],required:[2,"required","required",v],autofocus:[2,"autofocus","autofocus",v],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[ye([bt,Je]),B,me],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(o,i){if(o&1){let c=C();r(0,"div",1)(1,"input",2,0),b("focus",function(f){return m(c),h(i.onInputFocus(f))})("blur",function(f){return m(c),h(i.onInputBlur(f))})("change",function(f){return m(c),h(i.handleChange(f))}),a(),r(3,"div",3),_(4,pt,3,2,"ng-container",4)(5,dt,1,0,null,5),a()()}o&2&&(te(i.style),$(i.styleClass),u("ngClass",i.containerClass),y("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.disabled),s(),te(i.inputStyle),$(i.inputClass),u("value",i.value)("checked",i.checked)("disabled",i.disabled)("readonly",i.readonly)("ngClass",ve(26,nt)),y("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required?!0:null)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),s(3),u("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),s(),u("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",N(27,rt,i.checked)))},dependencies:[j,Ie,Fe,Me,Oe,Xe,q],encapsulation:2,changeDetection:0})}return e})(),Ye=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=fe({type:e});static \u0275inj=de({imports:[X,q,q]})}return e})();var gt=e=>["/collections",e],kt=(e,n)=>n.id;function xt(e,n){if(e&1){let t=C();r(0,"div",24)(1,"p-button",25),b("click",function(){m(t);let i=d();return h(i.visible=!1)}),a()(),r(2,"ul",26)(3,"li")(4,"a",27),b("click",function(){m(t);let i=d();return h(i.visible=!1)}),r(5,"span",28),p(6," Men "),a()()(),r(7,"li")(8,"a",29),b("click",function(){m(t);let i=d();return h(i.visible=!1)}),r(9,"span",28),p(10," Women "),a()()(),r(11,"li")(12,"a",30),b("click",function(){m(t);let i=d();return h(i.visible=!1)}),r(13,"span",28),p(14," New Arrivals "),a()()(),r(15,"li")(16,"a",31),b("click",function(){m(t);let i=d();return h(i.visible=!1)}),r(17,"span",32),p(18," About Us "),a()()()()}}function _t(e,n){if(e&1&&(r(0,"li")(1,"a",33),p(2),a()()),e&2){let t=n.$implicit;s(),u("routerLink",N(2,gt,t.slug)),s(),re(t.name)}}function Ct(e,n){if(e&1){let t=C();r(0,"button",34),b("click",function(){m(t);let i=d();return h(i.clearAllFilters())}),p(1," Clear All "),a()}}function yt(e,n){if(e&1){let t=C();r(0,"span",15),p(1),r(2,"button",35),b("click",function(){let i=m(t).$implicit,c=d();return h(c.onMaterialClick(i))}),p(3," \xD7 "),a()()}if(e&2){let t=n.$implicit;s(),T(" ",t," ")}}function vt(e,n){if(e&1){let t=C();r(0,"span",15),p(1),r(2,"button",36),b("click",function(){let i=m(t).$implicit,c=d();return h(c.onSizeClick(i))}),p(3," \xD7 "),a()()}if(e&2){let t=n.$implicit;s(),T(" ",t," ")}}function St(e,n){if(e&1){let t=C();r(0,"button",37),b("click",function(){let i=m(t).$implicit,c=d();return h(c.onSizeClick(i))}),p(1),a()}if(e&2){let t=n.$implicit,o=d();ge("bg-gray-200",o.selectedSizes.includes(t)),s(),T(" ",t," ")}}function wt(e,n){if(e&1){let t=C();r(0,"div",23)(1,"p-checkbox",38),b("onChange",function(){let i=m(t).$implicit,c=d();return h(c.onMaterialClick(i.name))}),a(),r(2,"label",39),p(3),a()()}if(e&2){let t=n.$implicit,o=d();s(),u("inputId",t.key)("value",t)("binary",!0)("ngModel",o.selectedMaterials.includes(t.name)),s(),u("for",t.key),s(),T(" ",t.name," ")}}var J=class e{store=k(I);route=k(R);categories=ee();allProducts=ee();categorySlug=Q(this.route.paramMap.pipe(z(n=>n.get("category"))),{initialValue:null});categoryName=null;visible=!1;selectedSizes=[];selectedMaterials=[];subCategories=L(()=>{let n=this.categories(),t=this.categorySlug();if(!n||!t)return[];let o=n.find(c=>c.slug["en-US"]===t);if(!o)return[];let i=new Set;return n.reduce((c,l)=>{if(l.parent?.id===o.id){let f=l.name["en-US"];i.has(f)||(i.add(f),c.push({id:l.id,name:f,slug:l.slug["en-US"],parentId:l.parent.id}))}return c},[])});sizes=L(()=>{let n=this.allProducts();if(!n)return[];let t=new Set;for(let o of n){let i=o.masterVariant.attributes?.find(c=>c.name==="size")?.value;i&&t.add(i);for(let c of o.variants||[]){let l=c.attributes?.find(f=>f.name==="size")?.value;l&&t.add(l)}}return Array.from(t).sort((o,i)=>o-i)});materials=L(()=>{let n=this.allProducts();if(!n)return[];let t=new Set;for(let o of n){let i=o.masterVariant.attributes?.find(c=>c.name==="material")?.value;i&&t.add(i);for(let c of o.variants||[]){let l=c.attributes?.find(f=>f.name==="material")?.value;l&&t.add(l)}}return Array.from(t).map(o=>({name:o,key:String(o).charAt(0).toUpperCase()}))});filtersChange$=new le;constructor(){O(()=>{let n=this.categorySlug(),t=this.categories();if(!t||!n||t.length===0)return;let o=t.find(i=>i.slug["en-US"]===n);o&&(this.categoryName=o.name["en-US"])}),this.filtersChange$.pipe(se(1e3)).subscribe(n=>{this.store.dispatch(H({filters:n}))})}onFiltersChange(n){let t=this.categorySlug(),o=this.categories(),i;if(o&&t){let c=o.find(l=>l.slug["en-US"]===t);c&&(i=c.id)}this.filtersChange$.next(ae(ce({},n),{categoryId:i}))}onSizeClick(n){this.selectedSizes.includes(n)?this.selectedSizes=this.selectedSizes.filter(t=>t!==n):this.selectedSizes=[...this.selectedSizes,n],this.onFiltersChange({materials:this.selectedMaterials,sizes:this.selectedSizes})}onMaterialClick(n){this.selectedMaterials.includes(n)?this.selectedMaterials=this.selectedMaterials.filter(t=>t!==n):this.selectedMaterials=[...this.selectedMaterials,n],this.onFiltersChange({materials:this.selectedMaterials,sizes:this.selectedSizes})}clearAllFilters(){this.selectedSizes=[],this.selectedMaterials=[],this.onFiltersChange({materials:[],sizes:[]})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-filters-block"]],inputs:{categories:[1,"categories"],allProducts:[1,"allProducts"]},decls:42,vars:4,consts:[["headless",""],["blockScroll","true","styleClass","!w-full md:!w-80 !flex !flex-col",3,"visibleChange","visible"],[1,"flex-1","lg:hidden"],["rounded","","icon","pi pi-bars","size","large",3,"click","text"],[1,"flex"],[1,"w-72","border-r","border-gray-200","p-6"],[1,"mb-6","text-sm","text-gray-700"],[1,"mb-2"],["routerLink","/",1,"text-gray-500","hover:underline"],[1,"mb-4","text-lg","font-bold"],[1,"mb-6","space-y-1"],[1,"mb-4","flex","items-center","justify-between"],[1,"text-lg","font-semibold"],[1,"text-brand-dark","cursor-pointer","text-base","underline"],[1,"mb-4","flex","flex-wrap","gap-2"],[1,"inline-flex","items-center","rounded-full","border","bg-gray-100","px-3","py-1","text-sm"],[1,"mb-4"],[1,"mb-6"],[1,"mb-1","font-semibold"],[1,"mb-2","text-xs","text-gray-500"],[1,"flex","flex-wrap","gap-2"],[1,"cursor-pointer","rounded","border","px-3","py-1","hover:bg-gray-100",3,"bg-gray-200"],[1,"flex","flex-col","gap-4"],[1,"flex","items-center"],[1,"drawer-header","flex","items-center","justify-between","p-6"],["rounded","","icon","pi pi-times","styleClass","!text-gray-800 dark:!text-gray-400 !border-none !bg-gray-100/0 hover:!bg-gray-400/10 dark:hover:!bg-gray-100/10",3,"click"],[1,"drawer-nav","flex","h-full","flex-col","justify-center","gap-5","p-6","text-center","font-medium","tracking-[1.5px]","uppercase","md:justify-start","md:text-start"],["routerLink","/collections/men",1,"group","relative","inline-block","px-3","py-4","md:inline-block",3,"click"],[1,"relative","block","after:absolute","after:bottom-0","after:left-1/2","after:h-[1.5px]","after:w-0","after:rounded-full","after:bg-current","after:transition-all","after:duration-250","after:content-['']","group-hover:after:left-[-5%]","group-hover:after:w-[110%]"],["routerLink","/collections/women",1,"group","relative","inline-block","px-3","py-4","md:inline-block",3,"click"],["routerLink","/collections/new-arrivals",1,"group","relative","inline-block","px-3","py-4","md:inline-block",3,"click"],["routerLink","/about",1,"group","relative","inline-block","px-3","py-4","md:inline-block",3,"click"],[1,"relative","block","after:absolute","after:bottom-0","after:left-1/2","after:h-[1.5px]","after:w-0","after:bg-current","after:transition-all","after:duration-250","after:content-['']","group-hover:after:left-[-5%]","group-hover:after:w-[110%]"],[1,"hover:underline",3,"routerLink"],[1,"text-brand-dark","cursor-pointer","text-base","underline",3,"click"],["aria-label","Remove material","type","button",1,"ml-2","cursor-pointer","text-gray-500","hover:text-black",3,"click"],["aria-label","Remove size","type","button",1,"ml-2","cursor-pointer","text-gray-500","hover:text-black",3,"click"],[1,"cursor-pointer","rounded","border","px-3","py-1","hover:bg-gray-100",3,"click"],["name","group",3,"onChange","inputId","value","binary","ngModel"],[1,"ml-2",3,"for"]],template:function(t,o){if(t&1){let i=C();r(0,"p-drawer",1),Ce("visibleChange",function(l){return m(i),_e(o.visible,l)||(o.visible=l),h(l)}),_(1,xt,19,0,"ng-template",null,0,Se),a(),r(3,"div",2)(4,"p-button",3),b("click",function(){return m(i),h(o.visible=!0)}),a()(),r(5,"section",4)(6,"aside",5)(7,"nav",6)(8,"div",7)(9,"a",8),p(10,"Home"),a(),p(11," /"),a(),r(12,"div",9),p(13),a(),r(14,"ul",10),S(15,_t,3,4,"li",null,kt),a()(),r(17,"div")(18,"div",11)(19,"span",12),p(20,"Filter By:"),a(),_(21,Ct,2,0,"button",13),a(),r(22,"div",14),S(23,yt,4,1,"span",15,V),S(25,vt,4,1,"span",15,V),a(),g(27,"hr",16),r(28,"div",17)(29,"div",18),p(30,"SIZES"),a(),r(31,"div",19),p(32," Most of our shoes only come in full sizes. If you're a half size, select your nearest whole size too. "),a(),r(33,"div",20),S(34,St,2,3,"button",21,V),a()(),r(36,"div",17)(37,"div",18),p(38,"MATERIAL"),a(),r(39,"div",22),S(40,wt,4,6,"div",23,V),a()()()()()}t&2&&(xe("visible",o.visible),s(4),u("text",!0),s(9),re(o.categoryName),s(2),w(o.subCategories()),s(6),P(o.selectedSizes.length||o.selectedMaterials.length?21:-1),s(2),w(o.selectedMaterials),s(2),w(o.selectedSizes),s(9),w(o.sizes()),s(6),w(o.materials()))},dependencies:[Ke,Ge,Re,je,$e,We,Ue,He,Ye,X,j],encapsulation:2})};var Y=class e{store=k(I);sort=this.store.selectSignal(G);filters=this.store.selectSignal(Z);categories=this.store.selectSignal(W);onSortChange(n){let t=n.target.value;this.store.dispatch(Pe({sortOrder:t})),this.loadProductsWithSort()}loadProductsWithSort(){let n=this.filters(),t=[];n.categoryId&&t.push(`categories.id:"${n.categoryId}"`),n.materials?.length&&t.push(`variants.attributes.material:${n.materials.map(i=>`"${i}"`).join(",")}`),n.sizes?.length&&t.push(`variants.attributes.size:${n.sizes.map(i=>`"${i}"`).join(",")}`);let o={sort:this.sort(),filters:t};this.store.dispatch(U({query:o}))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-sort-block"]],decls:12,vars:1,consts:[[1,"mb-4","flex","items-center","justify-end"],["for","sort",1,"mr-2","font-medium"],["id","sort",1,"rounded","border","px-2","py-1",3,"change","value"],["value","name.en-US asc"],["value","name.en-US desc"],["value","price asc"],["value","price desc"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"label",1),p(2,"Sort by:"),a(),r(3,"select",2),b("change",function(c){return o.onSortChange(c)}),r(4,"option",3),p(5,"Name (A-Z)"),a(),r(6,"option",4),p(7,"Name (Z-A)"),a(),r(8,"option",5),p(9,"Price (Low to High)"),a(),r(10,"option",6),p(11,"Price (High to Low)"),a()()()),t&2&&(s(3),u("value",o.sort()))},encapsulation:2})};function It(e,n){if(e&1&&g(0,"app-product-list",3),e&2){let t=d();u("products",t.filteredProducts())}}var tt=class e{route=k(R);store=k(I);categorySlug=Q(this.route.paramMap.pipe(z(n=>n.get("category"))),{initialValue:null});categories=this.store.selectSignal(W);categoryProducts=this.store.selectSignal(Ae);filteredProducts=this.store.selectSignal(De);filters=this.store.selectSignal(Z);ngOnInit(){let n=this.categorySlug(),t=this.categories();if(!n||t.length===0)return;let o=t.find(i=>i.slug["en-US"]===n);o&&this.store.dispatch(H({filters:{materials:[],sizes:[],categoryId:o.id}}))}constructor(){O(()=>{let n=this.categorySlug(),t=this.categories(),o=this.filters(),i=this.store.selectSignal(G);if(!n||t.length===0)return;let c=t.find(F=>F.slug["en-US"]===n);if(!c)return;if(!o.materials.length&&!o.sizes.length){this.store.dispatch(Be({categoryId:c.id,sortOrder:i()}));return}let l=[`categories.id:"${c.id}"`];o.materials.length&&l.push(`variants.attributes.material:${o.materials.map(F=>`"${F}"`).join(",")}`),o.sizes.length&&l.push(`variants.attributes.size:${o.sizes.map(F=>`"${F}"`).join(",")}`);let f={limit:10,sort:"name.en-US asc",filters:l};this.store.dispatch(U({query:f}))})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-catalog"]],decls:5,vars:3,consts:[[1,"catalog","flex","gap-4"],[3,"categories","allProducts"],[1,"best-sellers","p-8"],[3,"products"]],template:function(t,o){t&1&&(g(0,"app-sort-block"),r(1,"div",0),g(2,"app-filters-block",1),r(3,"section",2),_(4,It,1,1,"app-product-list",3),a()()),t&2&&(s(2),u("categories",o.categories())("allProducts",o.categoryProducts()),s(2),P(o.filteredProducts()?4:-1))},dependencies:[Ze,J,Y],encapsulation:2})};export{tt as CatalogComponent};
