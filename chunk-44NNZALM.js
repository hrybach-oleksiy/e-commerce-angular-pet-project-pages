import{a as Ne}from"./chunk-Y4SNWWQV.js";import{a as z,b as Z,c as H}from"./chunk-YCSQ3XTM.js";import{a as f,b as C,g as k,h as qe,j as h,k as $e}from"./chunk-RZ567DRM.js";import{a as pe}from"./chunk-KCKPNLR4.js";import{b as je,e as ze,g as Ze,h as He,j as D}from"./chunk-QOVDMTJV.js";import{c as Me,d as re,f as ne,h as ae,i as se,k as le}from"./chunk-F2X3VGZZ.js";import{a as de}from"./chunk-IJG6N763.js";import{P as Be,Q as $,a as ce,b as Oe,d as Qe,f as Re,t as Ve}from"./chunk-JO6M3IKZ.js";import{c as Le,e as Ee,g as De,i as Ae,p as Fe}from"./chunk-CENFN535.js";import{$ as Q,$b as Se,Ab as j,Bb as _e,Cb as Ce,D as M,Db as E,Eb as oe,Hb as ie,Ib as s,Jb as we,Kb as ye,Lb as v,Mb as q,Nb as g,Ob as _,Qb as be,Ra as c,Rb as xe,V as O,Yb as ve,_b as ke,a as d,aa as me,ab as V,b as p,bb as fe,cc as Te,d as Xe,eb as B,fa as m,fc as Ie,gb as u,mb as w,nb as a,oa as S,pa as T,pc as x,q as A,qa as ue,qb as he,qc as Pe,rb as L,sa as P,tb as ge,u as F,ya as R,yb as y,zb as b}from"./chunk-ZQUIM46K.js";var N=f("[Catalog] Load Products",C()),G=f("[Catalog] Load Products Success",C()),K=f("[Catalog] Load Products Failure",C()),U=f("[Catalog] Load Category Products",C()),J=f("[Catalog] Load Category Products Success",C()),W=f("[Catalog] Load Category Products Failure",C()),X=f("[Catalog] Load Categories"),Y=f("[Catalog] Load Categories Success",C()),ee=f("[Catalog] Load Categories Failure",C()),Ge=f("[Filters] Set Filters",C());var I=qe("catalog"),Rt=k(I,e=>e.categoryProducts||[]),Vt=k(I,e=>e.filteredProducts||[]),Bt=k(I,e=>e.loading),jt=k(I,e=>e.error),qt=k(I,e=>e.categories),$t=k(I,e=>e.filters);var Ue={categoryProducts:null,filteredProducts:null,loading:!1,error:null,categories:[],filters:{materials:[],sizes:[]}};var Gt=$e(Ue,h(U,e=>p(d({},e),{loading:!0})),h(N,e=>p(d({},e),{loading:!0})),h(J,(e,{products:o})=>p(d({},e),{categoryProducts:o,filteredProducts:o,loading:!1})),h(W,(e,{error:o})=>p(d({},e),{error:o,loading:!1})),h(G,(e,{response:o})=>p(d({},e),{filteredProducts:o.results,loading:!1})),h(K,(e,{error:o})=>p(d({},e),{error:o})),h(X,e=>p(d({},e),{loading:!0})),h(Y,(e,{categories:o})=>p(d({},e),{categories:o,loading:!1})),h(ee,(e,{error:o})=>p(d({},e),{error:o})),h(Ge,(e,{filters:o})=>p(d({},e),{filters:o})));var ot={};Xe(ot,{loadCategoriesEffect:()=>tt,loadCategoryProductsEffect:()=>Ye,queryProductsEffect:()=>et});var te=class e{apiUrl=de.url.api;projectKey=de.project.key;http=m(Fe);loadCategories(){let o=`${this.apiUrl}/${this.projectKey}/categories`;return this.http.get(o)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac,providedIn:"root"})};var Ye=z(()=>{let e=m(Z),o=m(pe);return e.pipe(H(U),O(({categoryId:t})=>o.queryProducts({filters:[`categories.id:"${t}"`]}).pipe(F(i=>J({products:i.results})),M(i=>A(W({error:i.message}))))))},{functional:!0}),et=z(()=>{let e=m(Z),o=m(pe);return e.pipe(H(N),O(({query:t})=>o.queryProducts(t).pipe(F(i=>G({response:i})),M(i=>A(K({error:i.message}))))))},{functional:!0}),tt=z(()=>{let e=m(Z),o=m(te);return e.pipe(H(X),O(()=>o.loadCategories().pipe(F(t=>Y({categories:t.results})),M(t=>A(ee({error:t.message}))))))},{functional:!0});var fo=(()=>{class e extends Ze{static \u0275fac=(()=>{let t;return function(r){return(t||(t=P(e)))(r||e)}})();static \u0275cmp=V({type:e,selectors:[["CheckIcon"]],features:[B],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,r){i&1&&(ue(),y(0,"svg",0),j(1,"path",1),b()),i&2&&(L(r.getClassNames()),w("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return e})();var it=["header"],rt=["footer"],nt=["content"],at=["closeicon"],st=["headless"],lt=["maskRef"],ct=["container"],dt=["closeButton"],pt=["*"],mt=(e,o,t,i,r,n)=>({"p-drawer":!0,"p-drawer-active":e,"p-drawer-left":o,"p-drawer-right":t,"p-drawer-top":i,"p-drawer-bottom":r,"p-drawer-full":n}),ut=(e,o)=>({transform:e,transition:o}),ft=e=>({value:"visible",params:e});function ht(e,o){e&1&&E(0)}function gt(e,o){if(e&1&&u(0,ht,1,0,"ng-container",4),e&2){let t=s(2);a("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)}}function _t(e,o){e&1&&E(0)}function Ct(e,o){if(e&1&&(y(0,"div"),be(1),b()),e&2){let t=s(3);L(t.cx("title")),c(),xe(t.header)}}function wt(e,o){e&1&&j(0,"TimesIcon"),e&2&&w("data-pc-section","closeicon")}function yt(e,o){}function bt(e,o){e&1&&u(0,yt,0,0,"ng-template")}function xt(e,o){if(e&1&&u(0,wt,1,1,"TimesIcon",8)(1,bt,1,0,null,4),e&2){let t=s(4);a("ngIf",!t.closeIconTemplate&&!t._closeIconTemplate),c(),a("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function vt(e,o){if(e&1){let t=oe();y(0,"p-button",9),ie("onClick",function(r){S(t);let n=s(3);return T(n.close(r))})("keydown.enter",function(r){S(t);let n=s(3);return T(n.close(r))}),u(1,xt,2,2,"ng-template",null,1,Ie),b()}if(e&2){let t=s(3);a("ngClass",t.cx("closeButton"))("buttonProps",t.closeButtonProps)("ariaLabel",t.ariaCloseLabel),w("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function kt(e,o){e&1&&E(0)}function St(e,o){e&1&&E(0)}function Tt(e,o){if(e&1&&(_e(0),y(1,"div",5),u(2,St,1,0,"ng-container",4),b(),Ce()),e&2){let t=s(3);c(),a("ngClass",t.cx("footer")),w("data-pc-section","footer"),c(),a("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}function It(e,o){if(e&1&&(y(0,"div",5),u(1,_t,1,0,"ng-container",4)(2,Ct,2,3,"div",6)(3,vt,3,5,"p-button",7),b(),y(4,"div",5),ye(5),u(6,kt,1,0,"ng-container",4),b(),u(7,Tt,3,3,"ng-container",8)),e&2){let t=s(2);a("ngClass",t.cx("header")),w("data-pc-section","header"),c(),a("ngTemplateOutlet",t.headerTemplate||t._headerTemplate),c(),a("ngIf",t.header),c(),a("ngIf",t.showCloseIcon&&t.closable),c(),a("ngClass",t.cx("content")),w("data-pc-section","content"),c(2),a("ngTemplateOutlet",t.contentTemplate||t._contentTemplate),c(),a("ngIf",t.footerTemplate||t._footerTemplate)}}function Pt(e,o){if(e&1){let t=oe();y(0,"div",3,0),ie("@panelState.start",function(r){S(t);let n=s();return T(n.onAnimationStart(r))})("@panelState.done",function(r){S(t);let n=s();return T(n.onAnimationEnd(r))})("keydown",function(r){S(t);let n=s();return T(n.onKeyDown(r))}),u(2,gt,1,1,"ng-container")(3,It,8,9),b()}if(e&2){let t=s();he(t.style),L(t.styleClass),a("ngClass",Te(9,mt,t.visible,t.position==="left"&&!t.fullScreen,t.position==="right"&&!t.fullScreen,t.position==="top"&&!t.fullScreen,t.position==="bottom"&&!t.fullScreen,t.fullScreen||t.position==="full"))("@panelState",ke(19,ft,Se(16,ut,t.transformOptions,t.transitionOptions))),w("data-pc-name","sidebar")("data-pc-section","root"),c(2),ge(t.headlessTemplate||t._headlessTemplate?2:3)}}var Lt=({dt:e})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${e("drawer.background")};
    color: ${e("drawer.color")};
    border: 1px solid ${e("drawer.border.color")};
    box-shadow: ${e("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${e("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${e("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${e("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${e("drawer.title.font.weight")};
    font-size: ${e("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,Et={mask:({instance:e})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"})},Dt={mask:({instance:e})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":e.modal,"p-drawer-open":e.containerVisible,"p-drawer-full":e.fullScreen,[`p-drawer-${e.position}`]:!!e.position}),root:({instance:e})=>({"p-drawer p-component":!0,"p-drawer-full":e.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},We=(()=>{class e extends je{name="drawer";theme=Lt;classes=Dt;inlineStyles=Et;static \u0275fac=(()=>{let t;return function(r){return(t||(t=P(e)))(r||e)}})();static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var At=se([ne({transform:"{{transform}}",opacity:0}),re("{{transition}}")]),Ft=se([re("{{transition}}",ne({transform:"{{transform}}",opacity:0}))]),Mt=(()=>{class e extends ze{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(t){this._visible=t}get position(){return this._position}set position(t){if(this._position=t,t==="full"){this.transformOptions="none";return}switch(t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new R;onHide=new R;visibleChange=new R;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=m(We);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onKeyDown(t){t.code==="Escape"&&this.hide(!1)}show(){this.container.setAttribute(this.attrSelector,""),this.autoZIndex&&D.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(t=!0){t&&this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){let t=this.document.querySelectorAll(".p-drawer-active"),i=t.length,r=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(t[i-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",r),Ve(this.mask,"style",this.maskStyle),ce(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",n=>{this.dismissible&&this.close(n)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Oe())}disableModality(){this.mask&&(ce(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Qe(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(t){switch(t.toState){case"void":this.hide(!1),D.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Re(this.appendTo,this.container))}bindDocumentEscapeListener(){let t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(t,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===D.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&D.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let t;return function(r){return(t||(t=P(e)))(r||e)}})();static \u0275cmp=V({type:e,selectors:[["p-drawer"]],contentQueries:function(i,r,n){if(i&1&&(v(n,it,4),v(n,rt,4),v(n,nt,4),v(n,at,4),v(n,st,4),v(n,Be,4)),i&2){let l;g(l=_())&&(r.headerTemplate=l.first),g(l=_())&&(r.footerTemplate=l.first),g(l=_())&&(r.contentTemplate=l.first),g(l=_())&&(r.closeIconTemplate=l.first),g(l=_())&&(r.headlessTemplate=l.first),g(l=_())&&(r.templates=l)}},viewQuery:function(i,r){if(i&1&&(q(lt,5),q(ct,5),q(dt,5)),i&2){let n;g(n=_())&&(r.maskRef=n.first),g(n=_())&&(r.containerViewChild=n.first),g(n=_())&&(r.closeButtonViewChild=n.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",x],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",Pe],modal:[2,"modal","modal",x],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",x],showCloseIcon:[2,"showCloseIcon","showCloseIcon",x],closeOnEscape:[2,"closeOnEscape","closeOnEscape",x],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",x]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[ve([We]),B],ngContentSelectors:pt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(i,r){i&1&&(we(),u(0,Pt,4,21,"div",2)),i&2&&a("ngIf",r.visible)},dependencies:[Ae,Le,Ee,De,Ne,He,$],encapsulation:2,data:{animation:[Me("panelState",[ae("void => visible",[le(At)]),ae("visible => void",[le(Ft)])])]},changeDetection:0})}return e})(),Ro=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=fe({type:e});static \u0275inj=me({imports:[Mt,$,$]})}return e})();export{N as a,U as b,X as c,Ge as d,Gt as e,Rt as f,Vt as g,qt as h,$t as i,ot as j,fo as k,Mt as l,Ro as m};
