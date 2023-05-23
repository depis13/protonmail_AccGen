(()=>{"use strict";var a,o={8772:(a,o,m)=>{var e=m(5693);const t=a=>Object.fromEntries(Object.entries(a).map((([a,o])=>[a,"string"==typeof o?(0,e.Z)(o):t(o)]))),i=t,n="\np, ul, ol, td, th{\n  padding: 0;\n  margin: 0;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nul, ol{\n  list-style: none;\n}\n";var r=m(7718);const l=i({change:"change"});class d extends r.oi{static get properties(){return{country:{type:String},countryName:{type:String},rating:{type:Number}}}constructor(){super(),this.country="",this.countryName=""}render(){const a=window.language;return r.dy`
    <style>
    ${n}
    :host{
      display:block;
      cursor: pointer;
      border: 1px solid #bcbcbc;
      border-radius: 4px;
      text-align: justify;
      height: 58px;
      padding: 0 20px!important;
      cursor:pointer;
    }
    :host(:hover){
      background: #efefef;
    }
    :host > .In{
      display: table;
      height: 100%;
      width: 100%;
    }
    :host > .In > .E{
      display: table-cell;
      vertical-align: middle;
    }
    :host > .In > .E:first-child{
      width: 1px;
      padding-right: 12px;
    }
    :host > .In > .E:last-child{
      width: 1px;
    }
    img{
      display: block;
      border-radius: 4px;
      filter: saturate(135%);
      opacity:0.7;
      border: 1px solid rgba(0, 0, 0, 0.22);
    }
    .Active_Country_Name{
      font-size: 18px;
      text-align: left;
    }
  
    .ChangeButton{
      display:inline-block;
      vertical-align:top;
      font-size: 12px;
      border-radius: 4px;
      line-height: 18px;
      text-align: center;
      background: #fff;
      border: 1px solid #268328;
      color: #268328;
      padding: 0 8px;
    }
  
    .Rating{
      background: url( '/images/pings/1.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 23px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      margin-left: auto;
      border-right: 15px solid transparent;
    }
    .Rating.r2{
      background-image: url( '/images/pings/2.svg' );
    }
    .Rating.r3{
      background-image: url( '/images/pings/3.svg' );
    }
    .Rating.r4{
      background-image: url( '/images/pings/4.svg' );
    }
    .Rating.r5{
      background-image: url( '/images/pings/5.svg' );
    }
    </style>
    
    <div class="In">
    ${(()=>{return this.country?r.dy`
      <div class="E">
        <img src="${a=this.country,"usw"===a&&(a="us"),"uk"===a&&(a="gb"),a?`/images/flags/${a}.svg`:"/images/empty.png"}" width="30" height="20" />
      </div>`:"";var a})()}
      <div class="E">
        <div class="Active_Country_Name">${this.countryName}</div>
      </div>
    ${(()=>this.rating?r.dy`
      <div class="E">
        <div class="Rating r${this.rating}"></div>
      </div>`:"")()}
      <div class="E"><div class="ChangeButton">${"en"===a?l.change:"Сменить"}</div></div>
    </div>`}}customElements.define("active-country",d);var u=m(3357),c=m(6492),f=m.n(c);const v=a=>{switch(a){case"full domain":return 0;case"domain":return 1;case"regex":return 2;default:throw new Error("Incorrect format "+a)}},s=(a,o)=>{let m=v(a.format),e=v(o.format);if(m!==e){if(m>e)return 1;if(m<e)return-1}let t=a.value,i=o.value;if("string"==typeof t&&"string"==typeof i){let a={a:t.split(".").length,b:i.split(".").length};if(a.a>a.b)return-1;if(a.a<a.b)return 1;if(t>i)return 1;if(t<i)return-1}return 0},p=(a,o)=>a.find((a=>{if(a.disabled)return!1;switch(a.format){case"domain":return o.endsWith("."+a.value)||o===a.value;case"full domain":return o===a.value;case"regex":return a.value.test(o)}return!1}));var g=m(7350);const{_:b}=self,h=f().proxy.defaultCountry||"nl",y=async a=>{const{userPac:o}=await g.Z.getStateAsync(),m=Object.assign(b.cloneDeep(o),{mode:"proxy",country:a});return g.Z.dispatch({type:"User PAC: set",data:m}),m},k={add:async({country:a,domain:o,type:m})=>{const{userPac:e}=await g.Z.getStateAsync(),t=a||e.country||h,i=e.filters.slice();i.push({country:t,format:"domain",proxyMode:"proxy"===m,value:o}),i.sort(s);const n=Object.assign(b.cloneDeep(e),{filters:i});return g.Z.dispatch({type:"User PAC: set",data:n}),n},remove:async a=>{const{userPac:o}=await g.Z.getStateAsync(),m=o.filters.slice();b.remove(m,(o=>o.value===a));const e=Object.assign(b.cloneDeep(o),{filters:m});return g.Z.dispatch({type:"User PAC: set",data:e}),e},toggle:async a=>{const{userPac:o}=await g.Z.getStateAsync(),m=o.filters.find((o=>"regex"!==o.format&&o.value===a));if(!m)throw new Error(`Nonexistent domain ${a} passed to highLevelPac.toggle`);const e=m.proxyMode?null:m.country;return k.changeCountry({domain:a,country:e})},changeCountry:async({country:a,domain:o})=>{const{userPac:m}=await g.Z.getStateAsync(),e=b.cloneDeep(m.filters),t=p(e,o);if(t){a&&(t.country=a),t.proxyMode=Boolean(a);const o=Object.assign(b.cloneDeep(m),{filters:e});return g.Z.dispatch({type:"User PAC: set",data:o}),o}return a?k.add({country:a,domain:o,type:"proxy"}):k.add({domain:o,type:"proxy"})}},w={disable:async()=>{const{userPac:a}=await g.Z.getStateAsync(),o=Object.assign(b.cloneDeep(a),{mode:"direct"});return g.Z.dispatch({type:"User PAC: set",data:o}),o},enable:async()=>{const{userPac:a}=await g.Z.getStateAsync();return y(a.country||h)},setCountry:y,siteFilters:k};var x=m(5119),z=m(8098);const _=i({help:"help",addSettingFor:"add_smart_setting_for_X",deleteSettingFor:"delete_smart_setting_for_X",editSmartSettings:"edit_smart_settings"}),j=(a,o,m)=>("addSettingFor"===a?"ru"===m?"Добавить настройку для XXX":_[a]:"deleteSettingFor"===a&&"ru"===m?"Удалить настройку для XXX":_[a]).replace(/XXX/g,o);function q(){const a=window.language;return r.dy`
  <style>
  ${n}
  :host{
    display: block;
    position: absolute;
    /*bottom: 40px;*/
    font-size: 12px;
    color: var( --brand-blue );
  }
  :host > .In{
    position: relative;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #bcbcbc;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.35);
  }

  .Element{
    padding: 0 12px;
    line-height: 34px;
    white-space: nowrap;
    cursor: pointer;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Element:hover{
    background: var( --brand-blue );
    color: #fff;
  }
  .Element ~ .Element{
    border-top: 1px solid #e6e6e6;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .Element:last-child{
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  </style>

  <div class="In">
  ${(()=>this.domain?this.containsFilter?r.dy`
    <div class="Element" @click="${this.removeFilter}">
      ${j("deleteSettingFor",this.unicodeDomain,a)}
    </div>`:r.dy`
    <div class="Element" @click="${this.addFilter}">
      ${j("addSettingFor",this.unicodeDomain,a)}
    </div>`:"")()}

  ${(()=>this.showEditSmartSettings?r.dy`
    <div class="Element" @click="${this.editSettings}">${"en"===a?_.editSmartSettings:"Редактировать настройки"}</div>`:"")()}
    <div class="Element" @click="${this.openHelp}">${"en"===a?_.help:"Справка"}</div>
  </div>`}var E=m(8897),$=m(7679);class S extends((0,$.$)(g.Z)(r.oi)){render(){return q.call(this)}static get properties(){return{containsFilter:{type:Boolean},domain:{type:String},showEditSmartSettings:{type:Boolean},unicodeDomain:{type:String}}}constructor(){super(),this.containsFilter=null,this.domain="",this.unicodeDomain=""}async updated(a){if(a.has("domain")){if(!this.domain)return;this.unicodeDomain=z.ZP.toUnicode(this.domain)}}stateChanged({page:a}){const o=a.split(":");this.showEditSmartSettings="index"!==o[0]||"filters"!==o[1]}addFilter(){x.Z.track("smartSettings_menu_add");let{userPac:{filters:a},user:{premium:o}}=g.Z.getStateSync();o||!a.length?g.Z.dispatch({type:"Page: set",page:"index:filters:"+this.domain}):this.showPremiumPopup(),this.remove()}editSettings(){x.Z.track("smartSettings_menu_edit"),(0,E.Z)({type:"counters.increase",property:"popup: smart settings: open list"}),g.Z.dispatch({type:"Page: set",page:"index:filters"}),this.remove()}openHelp(){x.Z.track("smartSettings_menu_help"),(0,E.Z)({type:"counters.increase",property:"popup: smart settings: open help"}),(0,E.Z)({type:"create tab",options:"/pages/help/help.html"}),this.remove()}removeFilter(){w.siteFilters.remove(this.domain),this.remove()}async showPremiumPopup(){const a=document.createElement("popup-premium-onerule");a.style.cssText="top:-100%;",document.body.append(a),u.Z.partial({category:"premium",action:"show"});const o=a.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});await new Promise((a=>{o.onfinish=a})),a.style.cssText=""}}customElements.define("context-menu",S);class C extends r.oi{constructor(){super(),this.bottom=0}render(){return r.dy`
    <style>
    ${n}
    :host{
      display:block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }

    :host > .In{
      position: absolute;
      bottom: ${this.bottom}px;
      left: 0;
      right: 0;
      text-align: center;
    }
    :host > .In > .In{
      text-align: left;
      display: inline-block;
      vertical-align: top;
    }
    .Text{
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      color: #fff;
      margin-bottom: 0px;
    }
    .Arrow{
      background: url( '/images/tip_arrow.svg' ) 0 0 no-repeat;
      width: 50px;
      padding-top: 100px;
      height: 0;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      margin-left: auto;
    }

    .Close{
      width: 16px;
      height: 16px;
      position: absolute;
      cursor: pointer;
      font-size: 0;
      right: 20px;
      top: 20px;
      transform: rotate(45deg)
    }
    .Close::before,
    .Close::after{
      content: '';
      display: block;
      position: absolute;
      background: #fff;
      overflow: hidden;
    }
    .Close::before{
      top: 0;
      left: calc( 50% - 1px );
      height: 100%;
      width: 2px;
    }
    .Close::after{
      left: 0;
      top: calc( 50% - 1px );
      width: 100%;
      height: 2px;
    }
    .Close:hover::before,
    .Close:hover::after{
      background: #ddd;
    }
    </style>

    <div class="In"><div class="In">
      <div class="Text">
        To get the best speeds possible, you<br/>
        should change to a location closest to<br/>
        you geographically
      </div>
      <div class="Arrow"></div>
    </div></div>
    <div class="Close" @click="${this.close}"></div>`}close(){this.dispatchEvent(new CustomEvent("close"))}}customElements.define("first-start-tips-country-select",C);class P extends r.oi{constructor(){super(),this.bottom=0}render(){const a=window.language;return r.dy`
    <style>
    ${n}
    :host{
      display:block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }

    :host > .In{
      position: absolute;
      bottom: ${this.bottom}px;
      left: 0;
      right: 0;
      text-align: center;
    }
    :host > .In > .In{
      text-align: left;
      display: inline-block;
      vertical-align: top;
    }
    .Text{
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      color: #fff;
      margin-bottom: 0px;
    }
    .Arrow{
      background: url( '/images/tip_arrow.svg' ) 0 0 no-repeat;
      width: 50px;
      padding-top: 100px;
      height: 0;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      margin-left: auto;
    }

    .Close{
      width: 16px;
      height: 16px;
      position: absolute;
      cursor: pointer;
      font-size: 0;
      right: 20px;
      top: 20px;
      transform: rotate(45deg)
    }
    .Close::before,
    .Close::after{
      content: '';
      display: block;
      position: absolute;
      background: #fff;
      overflow: hidden;
    }
    .Close::before{
      top: 0;
      left: calc( 50% - 1px );
      height: 100%;
      width: 2px;
    }
    .Close::after{
      left: 0;
      top: calc( 50% - 1px );
      width: 100%;
      height: 2px;
    }
    .Close:hover::before,
    .Close:hover::after{
      background: #ddd;
    }
    </style>

    <div class="In"><div class="In">
      <div class="Text">
        ${"en"===a?r.dy`
            Click here<br/>
            to Start VPN`:r.dy`Нажми здесь,<br/>
          чтобы включить VPN`}
      </div>
      <div class="Arrow"></div>
    </div></div>
    <div class="Close" @click="${this.close}"></div>`}close(){this.dispatchEvent(new CustomEvent("close"))}}customElements.define("first-start-tips-start-vpn",P);class B extends r.oi{render(){return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      position: absolute;
    }
    :host > .Bg{
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    :host > .Bg::after{
      content: '';
      display: block;
      position: absolute;
      top:0px;left:0px;
      width: 100%;
      height: 100%;
      background: var( --brand-blue );
      border-radius: 4px;
      overflow: hidden;
      text-indent: -9999px;
    }
    :host > .Bg > .Corner{
      position: absolute;
      left: 16px;
      bottom: 100%;
      width: 10px;
      height: 5px;
      overflow: hidden;
    }
    :host > .Bg > .Corner::after{
      content: '';
      display: block;
      border: 5px solid transparent;
      border-bottom-color: var( --brand-blue );
      width: 0;
      height: 0;
      overflow: hidden;
      margin-top: -5px;
    }
    :host > .In{
      position: relative;
      padding: 5px 14px;
      color: #fff;
      font-size: 12px;
    }
    </style>

    <div class="Bg"><div class="Corner"></div></div>
    <div class="In">${this.text}</div>`}static get properties(){return{text:{type:String}}}constructor(){super(),this.text=""}}customElements.define("general-tooltip",B);const I={add:a=>(0,E.Z)({type:"actions.favorites.add",country:a}),remove:a=>(0,E.Z)({type:"actions.favorites.remove",country:a})},Z=async({email:a,password:o})=>{let m=await(0,E.Z)({type:"actions.login",data:{email:a,password:o}});if(m.success)return m.success;if(m.error){let{status:a,responseText:o,message:e}=m.error,t=new Error(e);throw void 0!==a&&(t.status=a),void 0!==o&&(t.responseText=o),t}},L=()=>(0,E.Z)({type:"actions.logout"}),T=i({goBack:"go_back",signIn:"sign_in",signOut:"sign_out"});function D(){const a=window.language;return r.dy`
  <style>
  ${n}
  :host{
    display: block;
    height: 56px;
    line-height: 56px;
    border: 1px solid var( --brand-blue );
    border-width: 0 5px 0 5px;
    background: var( --brand-blue );
    color: #fff;
    overflow: hidden;
    position: relative;
  }
  :host::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }
  :host > .In{
    overflow: hidden;
    height: 100%;
    text-align: right;
  }

  .GoBack{
    cursor: pointer;
    display:inline-block;
    vertical-align:middle;
    position:relative;
    color:#b3becf;
    font-size:14px;
    text-decoration: underline;
    padding: 0 5px 0 18px;
    background: url( '/images/back_hover.svg' ) no-repeat 0 -5000px;
  }
  .GoBack:hover{
    color: white;
    text-decoration: none;
  }

  .GoBack::before{
    content:'';
    background: url( '/images/back.svg' ) no-repeat 50% 50%;
    background-size: 100% 100%;
    width: 13px;
    height: 13px;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6px;
  }
  .GoBack:hover::before{
    background-image: url( '/images/back_hover.svg' );
  }

  .LoginGuest{
    color: #fff;
    cursor: pointer;
    text-decoration: underline;
    display: inline-block;
    vertical-align: top;
    padding: 0 5px 0 5px;
  }
  .LoginGuest:hover{
    text-decoration: none;
  }

  .Logined{
    height: 24px;
    line-height: 24px;
    width: 100%;
    display:inline-block;
    vertical-align:top;
    vertical-align: middle;
  }
  .Logined::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }

  .Logout{
    float: right;
    cursor: pointer;
    width: 20px;
    padding-top: 20px;
    overflow: hidden;
    height: 0;
    background: url( '/images/logout_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    border: 2px solid transparent;
    position: relative;
  }
  .Logout:hover{
    background-image: url( '/images/logout_white.svg' );
  }
  .Logout::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    background: url( '/images/logout_white.svg' ) 0 -5000px no-repeat;
  }

  .Mail{
    vertical-align: middle;
    padding: 0 8px 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  </style>

  <head-logo .premium="${this.user.premium}"></head-logo>
  <div class="In">
  ${(()=>this.indexPage?this.user.email?r.dy`
    <div class="Logined">
      <div class="Logout" @click="${this.logout}" title="${T.signOut}"></div>
      <div class="Mail" title="${this.user.email}">${this.user.email}</div>
    </div>`:r.dy`
      <div class="LoginGuest" @click="${this.login}">
        ${"en"===a?T.signIn:"Войти"}
      </div>`:r.dy`
      <div class="GoBack" @click="${this.back}">${"en"===a?T.goBack:"Назад"}</div>`)()}
  </div>`}class O extends r.oi{render(){return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      padding: 5px 5px 0 5px;
      float: left;
    }

    :host > .In{
      display: table;
    }
    :host > .In > .L{
      display: table-cell;
      vertical-align: middle;
    }
    :host > .In > .R{
      display: table-cell;
      vertical-align: middle;
      padding-left: 10px;
    }

    .Ball{
      background: url( '/images/logo_ball.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 46px;
      padding-top: 46px;
      height: 0;
      overflow: hidden;
    }

    .Premium,
    .NoPremium{
      height: 0;
      overflow: hidden;
    }
    .Premium{
      background: url( '/images/logo_text_premium.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 85px;
      padding-top: 29px;
    }
    .NoPremium{
      background: url( '/images/logo_text.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 85px;
      padding-top: 14px;
    }

    img{
      display: block;
    }
    </style>

    <div class="In">
      <div class="L"><div class="Ball"></div></div>
      <div class="R">
        <div class="${this.premium?"Premium":"NoPremium"}"></div>
      </div>
    </div>`}static get properties(){return{premium:{type:Boolean}}}constructor(){super(),this.premium=!1}}customElements.define("head-logo",O);class F extends((0,$.$)(g.Z)(r.oi)){render(){return D.call(this)}static get properties(){return{user:{type:Object},indexPage:{type:Boolean}}}stateChanged({user:a,page:o}){this.user=a,this.indexPage="index"===o.split(":")[0]}constructor(){super(),this.user={type:"guest",premium:!1},this.indexPage=!0}back(){x.Z.track("signin_back"),g.Z.dispatch({type:"Page: set",page:"index:home"})}login(){x.Z.track("signin"),g.Z.dispatch({type:"Page: set",page:"login"})}logout(){x.Z.track("signout"),L()}}customElements.define("main-head",F);const A=class{constructor(){this.listeners=[],this.word="",this.keydownListener=this.keydownListener.bind(this)}addChar(a){let o=this.word,m=performance.now();(!this.lastTimestamp||m-this.lastTimestamp>700)&&(o=""),o+=a,this.lastTimestamp=m,o!==this.word&&(this.word=o,this.listeners.forEach((a=>{a(o)})))}addListener(a){this.listeners.push(a)}removeListener(a){this.listeners=this.listeners.filter((o=>o!==a))}keydownListener(a){let{code:o,key:m}=a;" "===m&&a.preventDefault();let e=o?o.replace(/^key/i,""):m;"Space"===e&&(e=" "),e&&1===e.length&&/[ a-z]/i.test(e)&&(e=e.toLowerCase(),this.addChar(e))}},N=i({browsecOff:"browsec_off",off:"off"}),R=a=>("usw"===a&&(a="us"),"uk"===a&&(a="gb"),a?`/images/flags/${a}.svg`:"/images/empty.png");function M(){return r.dy`
  <style>
  ${n}
  :host{
    display: block;
    overflow: auto;
    position: absolute;
    background: #fff;
    border: 1px solid #bcbcbc;
    padding: 4px 0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  .E{
    padding: 4px 10px;
    cursor: pointer;
    user-select: none;
  }
  .E.highlighted{
    background: #f5f5f5;
  }
  .E > .In{
    display: table;
    width: 100%;
  }

  .Name{
    display: table-cell;
    vertical-align: middle;
  }
  .MarkTD{
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
    width: 1px;
  }
  .Flag{
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
    width: 1px;
  }
  .Flag img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .Flag_Off{
    width: ${"en"===this.language?"30":"39"}px;
    line-height: 20px;
    font-size: 14px;
    color: var( --brand-burgundy );
    text-align: center;
  }

  .Off{
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #cccccc;
  }

  .Mark{
    display: block;
    width: 23px;
    overflow:hidden;
    font-size:0;
    text-indent:-9999px;
    height:0;
    padding-top: 12px;
    background: url( '/images/pings/1.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    margin-top: -1px;
  }
  .Mark.mark2{
    background-image: url( '/images/pings/2.svg' );
  }
  .Mark.mark3{
    background-image: url( '/images/pings/3.svg' );
  }
  .Mark.mark4{
    background-image: url( '/images/pings/4.svg' );
  }
  .Mark.mark5{
    background-image: url( '/images/pings/5.svg' );
  }
  </style>

  <div class="Off">
    <div
      class="E${null===this.country?" highlighted":""}"
      @click="${this.offClick}"
      @mousemove="${this.elementHighlight(null)}">
      <div class="In">
        <div class="Name">${"en"===this.language?N.browsecOff:"Выключать VPN"}</div>
        <div class="Flag"><div class="Flag_Off">${"en"===this.language?N.off:"ВЫКЛ"}</div></div>
      </div>
    </div>
  </div>
  ${this.countries.map((a=>r.dy`
    <div
      class="E${this.country===a.code?" highlighted":""}"
      @click="${this.elementClick(a.code)}"
      @mousemove="${this.elementHighlight(a.code)}">
      <div class="In">
        <div class="Name">${a.name}</div>
        <div class="MarkTD">${a.mark?r.dy`
          <div class="Mark mark${a.mark}"></div>`:""}</div>
        <div class="Flag">
          <img src="${R(a.code)}" width="30" height="20" alt=""/>
        </div>
      </div>
    </div>`))}`}class V extends r.oi{render(){return M.call(this)}static get properties(){return{countries:{type:Array},country:{type:String}}}constructor(){super(),this.keydownListener=this.keydownListener.bind(this),this.countries=[],this.country=null,this.language=window.language}connectedCallback(){super.connectedCallback(),this.charsBuffer=new A,document.addEventListener("keydown",this.keydownListener)}firstUpdated(){var a,o,m;let e=this.countries.map((({code:a,name:o})=>({code:a,name:o.toLowerCase()})));const t=null===(a=this.shadowRoot)||void 0===a?void 0:a.children,i=[];for(const a of t)"div"===a.tagName.toLowerCase()&&i.push(a);this.namesList=i.slice(1).map(((a,o)=>{let{code:m,name:t}=e[o];return{element:a,code:m,name:t}})),this.namesList.unshift({code:null,element:null===(o=this.shadowRoot)||void 0===o||null===(m=o.querySelector)||void 0===m?void 0:m.call(o,"div.Off > div.E"),name:"OFF"}),this.charsBuffer.addListener((a=>{const o=this.namesList.find((({code:o,name:m})=>o&&m.startsWith(a)));if(!o)return;const{element:m,code:e}=o;this.country=e,this.scrollTop=m.offsetTop-2}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydownListener)}elementClick(a){return()=>{this.dispatchEvent(new CustomEvent("select",{detail:a})),this.remove()}}elementHighlight(a){return o=>{Boolean(o.movementX||o.movementY)&&(this.country=a)}}keydownListener(a){let{key:o}=a;if("ArrowDown"!==o&&"ArrowUp"!==o){if("Enter"===o)return this.country?this.dispatchEvent(new CustomEvent("select",{detail:this.country})):this.dispatchEvent(new CustomEvent("disable")),void this.remove();this.charsBuffer.keydownListener(a)}else{a.preventDefault();let m=(()=>{let a=this.namesList.length,m=this.namesList.findIndex((({code:a})=>a===this.country));return m+="ArrowDown"===o?1:-1,(m+a)%a})(),e=this.namesList[m];this.country=e.code;let t=this.scrollTop,i=this.offsetHeight,n=t+i,r=e.element.offsetHeight,l=e.element.offsetTop,d=l+r;if(l>=t&&d<=n)return;let u=l>=t?d-i+2:l-2;this.scrollTop=u}}offClick(){this.dispatchEvent(new CustomEvent("disable")),this.remove()}}customElements.define("filters-country-list",V);var U=m(1031);const H=({action:a=(a=>a),url:o,storeState:m})=>(0,U.Z)(o,(o=>Object.assign(a(o),{instd:m.daysAfterInstall})));var W=m(6194);function X(){const a=window.language;return r.dy`
  <style>
  ${n}
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  a:hover{
    text-decoration: none;
  }

  :host{
    display: block;
  }

  .Login{
    padding: 38px 12px 2px;
    font-size: 14px;
    min-height: 140px;
    height: 318px;
    font-size: 11px;
  }

  .Title{
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  .Title::after{
    display: block;
    content: '';
    width: 100px;
    margin: 0 auto;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:20px;
    border-bottom: 4px solid var( --brand-green );
  }

  .Notice {
    position: absolute;
    font-size: 13px;
    color: #090;
    top: -24px;
    width: 100%;
    left: -2px;
  }
  .Error {
    position: absolute;
    bottom: calc(100% + 6px);
    left: 20px;
    right: 20px;
    font-size: 13px;
    color: var( --brand-burgundy );
    text-align: center;
  }

  .Login input[type="text"],
  .Login input[type="password"] {
    display: block;
    box-sizing: border-box;
    font:100% arial,sans-serif;
    vertical-align:middle;
    outline:none;
    /*width: 315px;*/
    width: 100%;
    margin: 1px 0px;
    height: 40px;
    border-radius: 5px;
    padding: 1px 10px;
    font-size: 15px;
    outline: none;
    background: #f5f5f5;
    border: 1px #7b7c80 solid;
    color: #1c304e;
  }
  .Login input[type="text"]::placeholder,
  .Login input[type="password"]::placeholder {
    color: #9b9c9e;
  }
  .Login input[type="text"].invalid,
  .Login input[type="password"].invalid{
    border: 1px solid var( --brand-burgundy );
  }
  .Login input[type="text"].invalid:focus,
  .Login input[type="password"].invalid:focus{
    outline: none;
  }

  .Login_Form{
    margin:0;
    padding:0;
    border-style:none;
    margin-top: 46px;
    text-align: center;
    padding: 0 20px;
    position:relative;
  }
  @media( max-width: 401px ){
    .Login_Form{
      padding: 0 10px;
    }
  }

  .Login_Row{
    width:100%;
    padding: 0 0 14px;
  }
  .Login_Row::after{
    display:block;
    clear:both;
    content:'';
  }
  .Login_Row label{
    box-sizing: border-box;
    display: inline-block;
    min-width: 100px;
    padding: 6px 5px 0 0;
  }

  .Login_ForgotPassword {
    color: #1c304e;
    font-size: 12px;
    line-height: 1;
    margin-top: 3px;
    float: right;
  }

  .Login_Button{
    margin-top: 18px;
  }
  .Login_Button > .In{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .Login_Button.loading > .In::after{
    content: '';
    display: block;
    position: absolute;
    left: 12px;
    top: calc(50% - 12px);
    width: 24px;
    padding-top: 24px;
    overflow: hidden;
    height: 0;
  }
  .Login_Button_Overlay{
    display: none;
    position: absolute;
    left: 9px;
    top: calc(50% - 15px);
    width: 24px;
    padding-top: 24px;
    height: 0;
    overflow: hidden;
    background:
      #fff radial-gradient(circle at 80% 80%, #1c304e 0, #1c304e 13%, transparent 90%, transparent 100%);
    border-radius: 50%;
    border: 3px solid #1c304e;
    animation: rotating 1.2s linear infinite;
  }
  .Login_Button.loading .Login_Button_Overlay{
    display: block;
  }
  .Login_Button_Overlay::after{
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    padding-top: 16px;
    height: 0;
    overflow: hidden;
    top: calc( 50% - 16px / 2 );
    left: calc( 50% - 16px / 2 );
    background: #1c304e;
    border-radius: 50%;
  }

  .Login_Button button{
    box-sizing: border-box;
    display: inline-block;
    border: 0;
    border-radius: 5px;
    position:relative;
    background-color: #1c304e;
    color:#fff;
    text-align:center;
    font-family: inherit;
    font-weight: 400;
    padding: 2px 12px;
    font-size: 18px;
    line-height: 30px;
    height: 45px;
    cursor:pointer;
    min-width: 190px;
  }

  .Login_Register {
    margin-top: 7px;
    font-size: 12px;
  }
  .Login_Register a {
    color: #1c304e;
  }
  </style>

  <div class="Login">
    <div class="Title">${"en"===a?this.translations.signIn:"Вход"}</div>
    <form class="Login_Form" action="#" @submit="${this.formSubmit}">

    ${(()=>this.notice?r.dy`<div class="Notice">${this.notice}</div>`:"")()}
    ${(()=>this.error?r.dy`<div class="Error"></div>`:"")()}

      <div class="Login_Row">
        <input 
          type="text"
          class="${this.error?"invalid":""}" 
          size="30" 
          name="email" 
          autofocus 
          placeholder="${"en"===a?this.translations.email:"Почта"}"
        />
      </div>
      <div class="Login_Row">
        <input 
          type="password"
          class="${this.error?"invalid":""}" 
          size="30" 
          name="password" 
          placeholder="${"en"===a?this.translations.password:"Пароль"}"
        />
        <a href="${this.links.resetPassword}" class="Login_ForgotPassword" target="_blank" @click="${this.forgotPasswordClick}">${"en"===a?this.translations.forgotYourPassword:"Забыли пароль?"}</a>
      </div>

      <div class="Login_Row">
        <div class="Login_Button${this.loading?" loading":""}"><div class="In">
          <button>${"en"===a?this.translations.signIn:"Войти"}</button>
          <div class="Login_Button_Overlay"></div>
        </div></div>

        <div class="Login_Register">
          ${"en"===a?this.translations.dontHaveAnAccount:"Нет аккаунта"}
          <a href="${this.links.signUp}" target="_blank" @click="${this.registerClick}">${"en"===a?this.translations.signUp:"Создать"}</a>
        </div>
      </div>
    </form>
  </div>`}let G=i({dontHaveAnAccount:"dont_have_an_account",email:"email",forgotYourPassword:"forgot_your_password",logIn:"sign_in",password:"password",signIn:"sign_in",signUp:"sign_up",welcomeBack:"welcome_back",errors:{incorrectEmailOrPassword:"incorrect_email_or_password",noConnection:"authentication_error_no_connection",thisAccountIsLocked:"this_account_is_locked_please_contact_us"}});class Y extends((0,$.$)(g.Z)(r.oi)){render(){return X.call(this)}static get properties(){return{links:{type:Object},loading:{type:Boolean},translations:{type:Object},error:{type:Boolean},notice:{type:String}}}get links(){const a=g.Z.getStateSync();return{resetPassword:H({url:W.Z.resetPassword,storeState:a}),signUp:H({url:W.Z.newUser,storeState:a})}}get translations(){return G}constructor(){super(),this.loading=!1,this.error=!1}firstUpdated(a){var o,m;super.firstUpdated(a);const e=a=>{var o,m;return null===(o=this.shadowRoot)||void 0===o||null===(m=o.querySelector)||void 0===m?void 0:m.call(o,a)},t=e('input[type="text"][name="email"]'),i=e('input[type="password"][name="password"]');if(!t||!i)throw new Error("No input elements in main-login");this.elements={mail:t,password:i};const n=null===(o=this.shadowRoot)||void 0===o||null===(m=o.querySelectorAll)||void 0===m?void 0:m.call(o,"a");for(const a of n)a.addEventListener("click",(async()=>{var a;await new Promise((a=>{setTimeout(a,50)})),null!==(a=self)&&void 0!==a&&a.close&&self.close()}));this.elements.mail.focus()}forgotPasswordClick(){x.Z.track("signin_forgot")}async formSubmit(a){const o=window.language;if(a.preventDefault(),this.loading)return;if(x.Z.track("signin_submit"),this.loading=!0,this.errorView){Array.from(this.errorView.childNodes).forEach((a=>{this.errorView.removeChild(a)}))}this.error=!1,this.notice=null;let m=this.elements.mail.value,e=this.elements.password.value;try{await Z({email:m,password:e}),this.notice="en"===o?G.welcomeBack:"С возвращением!",(async()=>{var a,o;await this.requestUpdate();let m=null===(a=this.shadowRoot)||void 0===a||null===(o=a.querySelector)||void 0===o?void 0:o.call(a,"div.Notice");if(!m)throw new Error("No notiveCiew in main-login");m.style.cssText="opacity: 0";let e=m.animate([{opacity:0},{opacity:1}],{duration:200,easing:"linear"});await new Promise((a=>{e.onfinish=a})),m.style.cssText=""})(),await new Promise((a=>{setTimeout(a,1e3)})),g.Z.dispatch({type:"Page: set",page:"index:home"})}catch(a){var t,i;let{status:m,responseText:e}=a,n={};try{e&&(n=JSON.parse(e))}catch(a){}let r=401!==m?"noConnection":8===n.error_code?"thisAccountIsLocked":"incorrectEmailOrPassword",l=(()=>{const a=G.errors[r];return"en"===o?a:"noConnection"===r?"Ошибка авторизации: невозможно подключиться к серверу Browsec":"thisAccountIsLocked"===r?"Аккаунт заблокирован.\nПожалуйста, свяжитесь с нами для его разблокировки.":"incorrectEmailOrPassword"===r?"Неправильная почта или пароль":a})();this.error=!0,401===m&&(this.elements.password.value=""),x.Z.track("signin_error"),await this.requestUpdate();let d=null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelector)||void 0===i?void 0:i.call(t,"div.Error");if(!d)throw new Error("No errorView in main-login");this.errorView=d;l.split(/\n/g).flatMap(((a,o,m)=>{let e=[];return a.trim()&&e.push(document.createTextNode(a)),o!==m.length-1&&e.push(document.createElement("br")),e})).forEach((a=>{this.errorView.appendChild(a)}));this.errorView.style.cssText="opacity: 0";const u=this.errorView.animate([{opacity:0},{opacity:1}],{duration:200,easing:"linear"});await new Promise((a=>{u.onfinish=a})),this.errorView.style.cssText=""}this.loading=!1}onAnimationComplete(){this.elements.mail.focus()}registerClick(){x.Z.track("signin_signup")}}customElements.define("main-login",Y);var J=m(3116);const K=location.href.includes("background"),Q={};let aa=0;const oa=Math.floor(1e9*Math.random())+"_";var ma=m(2338);const ea=async()=>{const{user:a}=await g.Z.getStateAsync(),o=await(async()=>{const a=Date.now(),o=await ma.Z.get("daysAfterInstall")||a;return Math.round((a-o)/864e5)})();if(a.premium)return 0;const m=await ma.Z.get("freeServersOverloaded");if("number"==typeof m){const a=Date.now();if(a<m){const o=m-a;await new Promise((a=>{setTimeout(a,o)}))}}const e=(a=>{let o=.1*a;return o>.8&&(o=.8),o})(o);if(!(Math.random()<e))return 0;const t=(a=>{let o=a;o>8&&(o=8);const m=5+5*Math.random();return Math.round(m*o)})(o);return ma.Z.set("freeServersOverloaded",Date.now()+1e3*t),1e3*t},ta=async a=>{let o=Math.ceil(a/1e3);const m=document.createElement("free-servers-overloaded");m.timer=o;document.querySelector("div.MainContainer").append(m),await new Promise((a=>{const e=()=>{const t=o-1;if(t)return o--,m.timer=t,void setTimeout(e,1e3);a()};e()})),m.remove()},ia=a=>{if("number"!=typeof a)throw new Error(`Not numeric value ${a.toString()} passed to numberToAlphabetLetter function`);return String.fromCharCode(a+65)},na=i({help:"help"});function ra(){const a=window.language;return r.dy`
  <style>
  ${n}
  .Foot{
    height: 38px;
    padding: 0 10px;
    border-top: 1px solid #bcbcbc;
    background: #f5f5f5;
    position: absolute;
    right:0px;bottom:0px;left:0px;
  }
  .Foot::after{
    content:' ';
    display:block;
    clear:both;
    width:0;height:0;
    overflow:hidden;
    font-size:0;
  }
  .Foot c-switch{
    margin: 7px 0 0;
    float: right;
  }

  .Switch{
    position: absolute;
    top:0px;bottom:38px;left:0px;
    width: 100%;
    white-space: nowrap;
  }
  .Switch > *{
    display:inline-block;
    vertical-align:top;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    white-space: normal;
  }

  .Help{
    float: right;
    position: relative;
    margin-top: 12px;
    padding-left: 19px;
    cursor: pointer;
    font-size: 12px;
    line-height: 18px;
    color: var( --brand-green );
    background: url( '/images/menu/help_green.svg' ) 0 -5000px no-repeat;
  }
  .Help::after{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -7px;
    background: url( '/images/menu/help_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 14px;
    padding-top:14px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
  }
  .Help:hover::after{
    background-image: url( '/images/menu/help_green.svg' );
  }
  </style>

  <div class="Switch"></div>

  <div class="Foot">
  ${(()=>"help"===this.preMenuView?r.dy`
    <div class="Help" @click="${this.openHelp}">${"en"===a?na.help:"Справка"}</div>`:"switch"===this.preMenuView?r.dy`
    <c-switch @click="${this.switchClick}" .on="${this.switchOn}"></c-switch>`:"")()}
    <index-menu></index-menu>
  </div>`}const la={Australia:"Австралия",Austria:"Австрия",Belgium:"Бельгия",Brazil:"Бразилия",Bulgaria:"Болгария",Canada:"Канада",Chile:"Чили","Czech Republic":"Чехия",Denmark:"Дания",Finland:"Финляндия",France:"Франция",Germany:"Германия","Hong Kong":"Гонк КОнг",Hungary:"Венргия",Iceland:"Исландия",India:"Индия",Ireland:"Ирландия",Israel:"Израиль",Italy:"Италия",Japan:"Япония",Latvia:"Латвия",Lithuania:"Литва",Luxembourg:"Люксембург",Mexico:"Мексика",Netherlands:"Нидерланды","New Zealand":"Новая Зеландия",Norway:"Норвегия",Poland:"Польша",Romania:"Румыния",Russia:"Россия",Serbia:"Сербия",Singapore:"Сингапур",Slovenia:"Словения","South Africa":"Южная Африка","South Korea":"Южная корея",Spain:"Испания",Sweden:"Швеция",Switzerland:"Швейцария",Turkey:"Турция",Ukraine:"Украина","United Kingdom":"Великобритания","United States":"США","United States West":"США, запад"},da=a=>{if(!a.includes("("))return la[a];const o=a.split("(")[0].trim();return la[o]+" (Премиум)"},ua=a=>`\n  ${a}{\n    scrollbar-width: thin;\n  }\n  ${a}::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 8px;\n  }\n  ${a}::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color:ButtonFace;\n    box-shadow:inset 0px 0px 0px 20px rgba(128,128,128,0.3);\n    /*border-left:2px solid rgba(255,255,255,0.3);\n    border-right:2px solid rgba(255,255,255,0.3);*/\n  }\n  ${a}::-webkit-scrollbar-thumb:hover{\n    box-shadow:inset 0px 0px 0px 20px rgba(128,128,128,0.5);\n  }\n  ${a}::-webkit-scrollbar-thumb:active{\n    box-shadow:inset 0px 0px 0px 20px rgba(128,128,128,0.7);\n  }\n  ${a}::-webkit-scrollbar-track{\n    background-color:ButtonFace;\n    box-shadow:inset 0px 0px 0px 20px rgba(255,255,255,0.3);\n  }\n  `,ca=({deleted:a,disabled:o,value:m},e)=>{let t=[];return a&&t.push("deleted"),o&&t.push("disabled"),e&&t.push(m===e?"active":"inactive"),t.join(" ")},fa=({defaultCountry:a,country:o,countries:m})=>{let e=m.includes(o)?o:a;return"usw"===e&&(e="us"),"uk"===e&&(e="gb"),`/images/flags/${e}.svg`},va=a=>a?`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${a}&size=16`:"/images/empty.png",sa=f().proxy.defaultCountry||"nl";function pa(a){return r.dy`
  <style>
  ${n}
  .Off{
    width: ${"en"===this.language?"30":"40"}px;
    line-height: 22px;
    padding-left: 1px;
    color: var( --brand-burgundy );
    font-size: 14px;
    text-align: center;
  }

  .ChangeRule_Country{
    position: relative;
    width: ${"en"===this.language?"56":"58"}px;
    border: 1px solid #bcbcbc;
    height: 22px;
    border-radius: 4px;
    padding: 1px 2px;
    background: url( '/images/smart_settings/arrow_up.svg' ) 0 -5000px no-repeat;
  }
  .ChangeRule_Country img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .ChangeRule_Country::after{
    content: '';
    display: block;
    background: url( '/images/smart_settings/arrow_down.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 9px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 5px;
    position: absolute;
    top: 50%;
    right: 8px;
    margin-top: -2px;
  }
  .ChangeRule_Country.open{
    border-color: var( --brand-green );
  }
  .ChangeRule_Country.open::after{
    background-image: url( '/images/smart_settings/arrow_up.svg' );
    /* margin-top: -3px; */
  }

  .ChangeRule_Button{
    width: 46px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:24px;
    background: var( --brand-green ) url( '../images/smart_settings/agree_white.svg' ) 0 -5000px no-repeat;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }
  .ChangeRule_Button::after{
    content: '';
    display: block;
    width: 14px;
    overflow: hidden;
    font-size:0;
    text-indent: -9999px;
    height: 0;
    padding-top:14px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -7px 0 0 -7px;
    background: url( '/images/smart_settings/plus_white.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .ChangeRule_Button.save::after{
    width: 16px;
    padding-top: 11px;
    background-image: url( '/images/smart_settings/agree_white.svg' );
    margin: -5px 0 0 -8px;
  }

  .List{
    position: absolute;
    top:65px;
    right:0px;
    bottom:0px;
    left:0px;
    overflow: auto;
    background: url( '/images/smart_settings/trash_green.svg' ) 0 -5000px no-repeat;
  }
  ${ua(".List")}
  .List > .E{
    position: relative;
    line-height: 34px;
    transition: opacity 0.2s;
  }
  .List > .E:hover{
    background: #fafafa;
  }
  .List > .E.active,
  .List > .E.active:hover{
    background: #f5f5f5;
  }
  .List > .E.inactive,
  .List > .E.inactive:hover{
    background: transparent;
    opacity: 0.33;
  }
  .List > .E.inactive.disabled,
  .List > .E.inactive.disabled:hover{
    background: transparent;
    opacity: 1;
  }
  .List > .E > .In{
    padding: 0 7px 0 14px;
    cursor: pointer;
    height: 34px;
  }
  .List > .E > .In::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }

  .List_Remove{
    float: right;
    background: url( '/images/smart_settings/trash_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 11px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:14px;
    margin: 3px 0 0 6px;
    cursor: pointer;
    border: 7px solid transparent;
  }
  .List_Remove:hover{
    background-image: url( '/images/smart_settings/trash_green.svg' );
  }
  .List_Flag{
    float: right;
    width: ${"en"===this.language?"30":"40"}px;
    padding: 7px 0 0 13px;
  }
  .List_Flag img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }

  .ChangeRule{
    padding: 19px 14px;
    border-bottom: 1px solid #bcbcbc;
    display: flex;
    align-items: center;
  }
  .ChangeRule > .E{
    flex-grow: 0;
    flex-shrink: 0;
  }
  .ChangeRule > .E ~ .E{
    padding-left: 10px;
  }
  .ChangeRule > .E.input{
    flex-grow: 1;
  }

  .Mark_Out{
    float: right;
    padding: 0 0 0 13px;
  }
  .Mark{
    display:inline-block;
    vertical-align: middle;
    width: 23px;
    overflow:hidden;
    font-size:0;
    text-indent:-9999px;
    height:0;
    padding-top: 12px;
    background: url( '/images/pings/1.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .Mark.mark2{
    background-image: url( '/images/pings/2.svg' );
  }
  .Mark.mark3{
    background-image: url( '/images/pings/3.svg' );
  }
  .Mark.mark4{
    background-image: url( '/images/pings/4.svg' );
  }
  .Mark.mark5{
    background-image: url( '/images/pings/5.svg' );
  }

  .List_Favicon{
    width: 16px;
    float: left;
    padding: 9px 7px 0 0;
    transition: opacity 0.2s;
  }
  .List > .E.disabled .List_Favicon{
    opacity: 0.3;
  }
  .List_Favicon img{
    display: block;
  }

  .List_Name{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: opacity 0.2s;
  }
  .List > .E.disabled .List_Name{
    opacity: 0.3;
  }

  .List_Deleted{
    display: none;
    background: #fff;
    position: absolute;
    top:0px;right:0px;bottom:0px;left:0px;
    padding: 0 14px 0 22px;
    border-left: 14px solid transparent;
    color: var( --brand-green );
  }
  .List_Deleted::after{
    content: '';
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:12px;
    background: url('/images/smart_settings/check.svg') 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6px;
  }
  .List > .E.deleted .List_Deleted{
    display: block;
  }

  .List_Delete_Link{
    cursor: pointer;
    color: var( --brand-blue );
    border-bottom: 1px dashed var( --brand-blue );
  }
  .List_Delete_Link:hover{
    border-bottom-color: transparent;
  }

  .List_Select{
    float: right;
    padding: 4px 0 0 5px;
  }
  .List_Select_Button{
    line-height: 24px;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid var( --brand-green );
    color: var( --brand-green );
    padding: 0 8px;
    border-radius: 4px;
    font-size: 12px;
  }
  .List_Select_Button:hover{
    background: var( --brand-green );
    color: #fff;
  }

  .List_InactiveOverlay{
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    text-indent: -9999px;
  }
  .List > .E.inactive .List_InactiveOverlay{
    display: block;
  }
  </style>

  <div class="ChangeRule">
    ${(()=>"ru"===this.language?"":r.dy`
    <div class="E text">${a.on}</div>`)()}
    
    <div class="E input">
      <filters-domain
        .value="${this.domain}"
        @save="${this.save}"
        @value-changed="${this.inputListener}"
      ></filters-domain>
    </div>
    <div class="E text">${"en"===this.language?a.use:"→"}</div>
    <div class="E flag">
      <div 
        data-role="country selector"
        class="ChangeRule_Country" 
        @click="${this.openCountryList}"
      >
      ${(()=>{if(!this.country)return r.dy`
          <div class="Off">${"en"===this.language?a.off:"ВЫКЛ"}</div>`;const o=fa({countries:this.countries,country:this.country,defaultCountry:sa});return r.dy`
          <img src="${o}" width="30" height="20" alt=""/>`})()}
      </div>
    </div>
    <div class="E button">
      <div 
        class="ChangeRule_Button${this.selectedDomain?" save":""}" 
        @click="${this.save}"
      ></div>
    </div>
  </div>

  <div class="List" @click="${this.listClick}">
  ${this.filters.map((o=>r.dy`
    <div class="E ${ca(o,this.selectedDomain)}">
      <div class="In" @click="${this.listElementClick(o)}">
        <div class="List_Remove" title="${a.removeSmartSetting}"></div>
        ${(()=>o.disabled?r.dy`
        <div class="List_Select">
          <div class="List_Select_Button">${a.select}</div>
        </div>`:r.dy`
        <div class="List_Flag">
    ${(()=>{if(!o.country)return r.dy`
          <div class="Off">${"en"===this.language?a.off:"ВЫКЛ"}</div>`;const m=fa({countries:this.countries,country:o.country,defaultCountry:sa});return r.dy`
          <img src="${m}" width="30" height="20" alt=""/>`})()}
        </div>`)()}
        <div class="List_Favicon">
          <img src="${va(o.value)}" width="16" height="16" alt=""/>
        </div>
        <div class="List_Name">${o.view}</div>
      </div>
      <div class="List_Deleted">
        ${"en"===this.language?a.settingWasDeleted:"Настройка удалена"}
        <span class="List_Delete_Link" @click="${this.cancelRemove(o)}">
          ${"en"===this.language?a.undo:"Отменить"}
        </span>
      </div>
      <div class="List_InactiveOverlay" @click="${this.resetSelection}">&nbsp;</div>
    </div>`))}
  </div>`}const ga=i({pleaseEnterDomain:"please_enter_domain"});class ba extends HTMLElement{render(){const a=window.language,o=this.shadowRoot,m=document.createElement("style");m.textContent=`\n    ${n}\n    :host{\n      display: block;\n    }\n\n    input[type="text"]{\n      display: block;\n      width: 100%;\n      border: 1px solid #bcbcbc;\n      line-height: 24px;\n      height: 24px;\n      box-sizing: border-box;\n      padding: 0 8px;\n      border-radius: 4px;\n      outline: none;\n    }\n    input[type="text"]:focus{\n      border-color: var( --brand-blue );\n    }`;const e=document.createElement("input");e.type="text",e.placeholder="en"===a?ga.pleaseEnterDomain:"Введите домен",e.addEventListener("input",(({target:a})=>{let{value:o}=a;o=o.replace(/\s+/g,"").toLowerCase();const m=e.selectionEnd;e.value=o;const t=m>o.length?o.length:m;e.setSelectionRange(t,t),this.inputValue=o,this._value=o,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:o}}))})),e.addEventListener("paste",(a=>{a.stopPropagation(),a.preventDefault();const o=(a.clipboardData||window.clipboardData).getData("text/plain").trim();if(!o)return;let m;try{m=new URL(o).hostname}catch(a){m=o.toLowerCase()}this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:m}}))})),e.addEventListener("keypress",(a=>{let{code:o,which:m}=a;"Enter"!==o&&13!==m||(a.preventDefault(),this.dispatchEvent(new CustomEvent("save")),e.blur())})),this.input=e,o.append(m,e)}constructor(){super(),this._value="",this.inputValue="",this.attachShadow({mode:"open"}),this.render()}get value(){return this._value}set value(a){a!==this._value&&(this.inputValue=a,this._value=a,this.input.value=a)}}customElements.define("filters-domain",ba);const{_:ha}=self,ya="undefined"!=typeof browser?browser:chrome,ka=i({cancelEditing:"cancel_editing",off:"off",on:"on",pleaseEnterDomain:"please_enter_domain",pleaseEnterValidDomain:"please_enter_valid_domain",removeSmartSetting:"remove_smart_setting",select:"select",settingWasDeleted:"setting_was_deleted",thisDomainAlreadyInList:"this_domain_already_in_list",undo:"undo",use:"use"}),wa=({view:a},{view:o})=>a<o?-1:a>o?1:0,xa=({dimensionElement:a,text:o})=>{const m=document.createElement("tooltip-error");m.text=o;const e=a.getBoundingClientRect(),t=e.top+a.offsetHeight-1;m.style.cssText=`top:${t}px;left:${e.left}px;`,document.body.append(m);const i=(()=>{let a=!0;return()=>{a?a=!1:(m.remove(),document.removeEventListener("click",i))}})();document.addEventListener("click",i)};class za extends((0,$.$)(g.Z)(r.oi)){render(){return pa.call(this,ka)}static get properties(){return{country:{type:String},countries:{type:Array},domain:{type:String},filters:{type:Array},premium:{type:Boolean},selectedDomain:{type:String}}}constructor(){super(),this.countries=[],this.country=null,this.domain="",this.filters=[],this.premium=null,this.selectedDomain=null,this.language=window.language}disconnectedCallback(){var a;super.disconnectedCallback(),null===(a=this.removeStoreListener)||void 0===a||a.call(this),delete this.removeStoreListener,this.documentClick&&document.removeEventListener("mousedown",this.documentClick)}async firstUpdated(a){super.firstUpdated(a);const o=this.shadowRoot,m=o.querySelector("div.List");if(!m)throw new Error("No list element in index-filters");this.nodes={list:m};const{userPac:e}=g.Z.getStateSync();{const a=[];for(const o of e.filters){if("domain"!==o.format)continue;const m=o.proxyMode?o.country:null,{disabled:e,value:t}=o,i=z.ZP.toUnicode(t);a.push({country:m,deleted:!1,disabled:e,value:t,view:i})}this.filters=a.sort(wa)}const t=o.querySelector("div.ChangeRule filters-domain");if(!t)throw new Error("No domainInput element in index-filters");this.domainInput=t;const i=o.querySelector('[data-role="country selector"]');if(!i)throw new Error("No countryElement element in index-filters");this.countryElement=i,this.removeStoreListener=g.Z.onChange((({userPac:{filters:a}})=>a),(async(a,o,m)=>{if(a.length===o.length)return;const e=a.length>o.length?"addition":"deletion";if("addition"===e){const m=ha.differenceBy(a,o,ha.isEqual)[0];if(!m)return;if(this.filters.some((({value:a})=>a===m.value)))return;const e=ha.cloneDeep(this.filters);if("string"!=typeof m.value)throw new Error("Addition error for index-filters, not string provided before punicode");const t=z.ZP.toUnicode(m.value);return e.push({country:m.country,deleted:!1,value:m.value,view:t}),void(this.filters=e.sort(wa))}if("deletion"===e){if(!Boolean(m.user.email)&&!a.length&&o.length-a.length>=2)return void(this.filters=[]);const e=ha.differenceBy(o,a,ha.isEqual)[0];if(!e)return;if(!this.filters.some((({deleted:a,value:o})=>o===e.value&&!a)))return;const t=ha.cloneDeep(this.filters).filter((({value:a})=>a!==e.value));this.filters=t}}))}stateChanged({proxyServers:a,user:o}){this.countries=Array.from(o.premium?a.premiumCountries():a.freeCountries()),this.premium=o.premium}cancelRemove({country:a,value:o}){return()=>{if(this.filters.some((({deleted:a,disabled:o})=>!a&&!o))&&!g.Z.getStateSync().user.premium)return void this.showPremiumPopup();const m=ha.cloneDeep(this.filters),e=m.find((a=>a.value===o));e&&(e.deleted=!1),this.filters=m;const t={domain:o,type:a?"proxy":"direct"};a&&(t.country=a),w.siteFilters.add(t)}}inputListener({detail:{value:a}}){this.domain=a}listClick({target:a}){}listElementClick({country:a,disabled:o,value:m,view:e}){return({target:t})=>{if(t instanceof HTMLElement){if(t.classList.contains("List_Remove")){const a=ha.cloneDeep(this.filters),o=a.find((a=>a.value===m));return o&&(o.deleted=!0),this.filters=a,w.siteFilters.remove(m),void this.resetSelection()}if(t.classList.contains("List_Select_Button")){{const a=ha.cloneDeep(this.filters);{const o=a.find((({disabled:a})=>!a));o&&(o.disabled=!0)}{const o=a.find((({value:a})=>m===a));o&&delete o.disabled}this.filters=a}(0,E.Z)({type:"select disabled site filter",value:m})}else o?this.resetSelection():(this.country=a,this.domain=e,this.selectedDomain=m)}}}async openCountryList(){const a=window.language,{ping:o,user:m}=await g.Z.getStateAsync();this.countryElement.classList.add("open");const e=document.createElement("filters-country-list"),t=this.countries.map((e=>{var t;const i=null===(t=o.find((({country:a,premium:o})=>a===e&&o===m.premium)))||void 0===t?void 0:t.mark,n=ya.i18n.getMessage("country_name_"+e.toUpperCase());return{code:e,mark:i,name:"ru"===a&&da(n)||n}})).sort((({name:a},{name:o})=>a<o?-1:a>o?1:0));e.countries=t,e.country=this.country,e.addEventListener("select",(({detail:a})=>{this.country=a,this.countryElement.classList.remove("open")})),e.addEventListener("disable",(()=>{this.country=null,this.countryElement.classList.remove("open")}));const{left:i,top:n}=this.countryElement.getBoundingClientRect(),r=this.countryElement.offsetHeight,l=n+r,d=self.innerWidth-i-this.countryElement.offsetWidth,u=self.innerHeight-n-r;e.style.cssText=`top:${l}px;right:${d}px;max-height:${u}px;`,document.body.append(e),(async()=>{if(!this.country)return;await e.updateComplete;const a=t.findIndex((({code:a})=>a===this.country))||0,o=e.shadowRoot,m=Array.from(o.children).filter((a=>"div"===a.tagName.toLowerCase()&&a.classList.contains("E")))[a],i=m.offsetTop-m.offsetHeight;m.offsetTop+m.offsetHeight<=e.offsetHeight||(e.scrollTop=i)})(),this.documentClick=({target:a})=>{a instanceof HTMLElement&&(e.contains(a)||a===e)||(e.remove(),this.documentClick&&(document.removeEventListener("mousedown",this.documentClick),delete this.documentClick,this.countryElement.classList.remove("open")))},document.addEventListener("mousedown",this.documentClick)}resetSelection(){this.country=null,this.domain="",this.selectedDomain=null}async save(){const a=this.domain;if(!a)return void xa({dimensionElement:this.domainInput,text:ka.pleaseEnterDomain});const o=z.ZP.toASCII(a);if(void 0===o)return;if(1===o.split(".").length)return void xa({dimensionElement:this.domainInput,text:ka.pleaseEnterValidDomain});{const a=o.split("."),m=4===a.length&&a.every((a=>/^[0-9]+$/.test(a)&&Number(a)>=0&&Number(a)<=255));if(!m&&a.some((a=>!/^[a-zA-Z0-9-_]+$/.test(a))))return void xa({dimensionElement:this.domainInput,text:ka.pleaseEnterValidDomain});if(!m){const a=o.split(".").pop();if(!self.domainZoneList.includes(a))return void xa({dimensionElement:this.domainInput,text:ka.pleaseEnterValidDomain})}}if(!this.selectedDomain){if(this.filters.map((({value:a})=>a)).includes(o))return void xa({dimensionElement:this.domainInput,text:ka.thisDomainAlreadyInList})}const m=await g.Z.getStateAsync();if(this.selectedDomain){{const m=this.filters.filter((({value:a})=>a!==this.selectedDomain));m.push({country:this.country,deleted:!1,value:o,view:a}),m.sort(wa),this.filters=m}(0,E.Z)({type:"change site filter",country:this.country,domain:o,selectedDomain:this.selectedDomain})}else{if(this.filters.some((({deleted:a,disabled:o})=>!a&&!o))&&!m.user.premium)return void this.showPremiumPopup();(0,E.Z)({type:"counters.increase",property:"popup: smart settings: add rule"});const e=this.country?{country:this.country,domain:o,type:"proxy"}:{domain:o,type:"direct"},t=this.filters.slice();t.unshift({country:this.country,deleted:!1,value:o,view:a}),this.filters=t,w.siteFilters.add(e)}this.resetSelection()}async showPremiumPopup(){if(this.popupPremiumFreeze)return;this.popupPremiumFreeze=!0;const a=document.createElement("popup-premium-onerule");a.style.cssText="top:-100%;",document.body.append(a),u.Z.partial({category:"premium",action:"show"});const o=a.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});await new Promise((a=>{o.onfinish=a})),a.style.cssText="",this.popupPremiumFreeze=!1}}customElements.define("index-filters",za);const _a=async({experiments:a,promotions:o,showSpeedPromo:m,user:e})=>{if("logined"===e.type&&e.premium){const a=e.loginData.subscription.paidUntil,o=a?new Date(a):void 0,m=await ma.Z.get("userClosedWarnToPremiumEndDate");if(!(!o||e.loginData.subscription.auto_renewal||m===String(o)||Date.now()<o.getTime()-1728e5))return{type:"premium expiration"}}const t=e.premium,i=Date.now();if(2===await ma.Z.get("Experiment 254: phase")&&!t&&"1"===a[f().experiments.pollBanner.id])return{type:"poll banner"};const n=await(async()=>{const a=o.filter((({banner:a,from:o,till:m})=>a&&o<=i&&i<=m)).filter((({kind:a})=>"personal"===a||!t)).sort((({kind:a},{kind:o})=>a===o?0:"personal"===a?-1:1));if(!a.length)return;const{id:m}=a[0];return{id:m,banner:a[0].banner}})();if(n)return{banner:n.banner,promotionId:n.id,type:"custom"};return!!m&&!t?{type:"speed"}:void 0},{_:ja}=self,qa=new class{constructor(){this._activeBanner=void 0,this._listeners=[],this._ready=(async()=>{const a=await g.Z.getStateAsync(),o="proxy"===a.userPac.mode;this._showSpeedPromo=o;const m=this._activeBanner,e=await _a(Object.assign({showSpeedPromo:o},a));if(!ja.isEqual(m,e)){this._activeBanner=e;for(const a of this._listeners)a(e,m)}})(),g.Z.onChange((({promotions:a,user:o})=>({user:Boolean(o.email),promotions:a})),(()=>{this.refresh()}))}addListener(a){this._listeners.push(a)}get(){return this._activeBanner}async getAsync(){return await this._ready,this._activeBanner}async refresh(){const a=await g.Z.getStateAsync(),o=this._activeBanner,m=await _a(Object.assign({showSpeedPromo:this._showSpeedPromo},a));if(!ja.isEqual(o,m)){this._activeBanner=m;for(const a of this._listeners)a(m,o)}}removeListener(a){this._listeners=this._listeners.filter((o=>o!==a))}},Ea="undefined"!=typeof browser?browser:chrome,$a=new class{constructor(){this._state=[],this._callbacks=[],Ea.runtime.connect({name:"permissions"}).onMessage.addListener((a=>{this._state=a,this._callbacks.forEach((o=>{o(a)}))})),(async()=>{this._state=await(0,E.Z)({type:"permissions.get"})})()}addListener(a){this._callbacks.push(a)}get(){return this._state}includes(a){return this._state.includes(a)}},Sa=i({change:"change",connectionsNotEncrypted:"your_browsers_connections_are_not_encrypted",privacyProtected:"your_privacy_is_protected",protectionDisabled:"privacy_protection_disabled",startVpn:"start_vpn"});function Ca(){const a=window.language,{switchesView:o}=this;return r.dy`
  <style>
  ${n}
  :host > .In{
    width: 100%;
    height: 100%;
    white-space: nowrap;
    position: relative;
  }
  :host > .In.transition{
    transition: margin-left 0.25s;
  }
  :host > .In > .In{
    display: flex;
    width: 200%;
    height: 100%;
    align-items: center;
  }
  :host(.proxyEnabled) > .In{
    margin-left: -100%;
  }
  :host(.withPromo) > .In{
    height: auto;
  }

  :host index-home-switches{
    padding: 12px 22px 0;
    text-align: left;
  }
  :host index-home-promo{
    display: none;
  }
  :host(.withPromo) index-home-promo{
    display: block;
    border-bottom: 4px solid transparent;
  }

  .Inactive,
  .Active{
    flex: 1;
  }
  :host(.withPromo) .Inactive,
  :host(.withPromo) .Active{
    align-items: stretch;
  }

  .Inactive{
    text-align: center;
    white-space: normal;
  }
  :host(.withPromo) .Inactive{
    vertical-align: top;
  }
  .Inactive::before{
    content: '';
    display:block;
    background: url( '/images/global_protection_disabled.svg' ) 50% 0 no-repeat;
    background-size: auto 100%;
    width: 100%;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:114px;
  }
  :host(.withPromo) .Inactive::before{
    padding-top: 76px;
  }

  /** Active proxy */
  :host(.withPromo) .Active{
    padding-top: 9px;
  }
  .Active::before{
    content:' ';
    display:block;
    background: url( '/images/global_protection_enabled.svg' ) 50% 0 no-repeat;
    background-size: auto 100%;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:112px;
  }
  :host(.withPromo) .Active::before{
    padding-top: 91px;
  }

  .Inactive_Text{
    font-size: 14px;
    padding: 4px ${"en"===this.language?"28":"20"}px 0;
    line-height: 17px;
  }
  .Inactive_Title{
    font-size: 18px;
    font-weight: 600;
    padding-top: 10px;
    color: var( --brand-burgundy );
  }
  :host(.withPromo) .Inactive_Title{
    padding-top: 0;
  }
  .Inactive_ButtonOut{
    display: flex;
    justify-content: center;
    padding-top: 24px;
  }
  :host(.withPromo) .Inactive_ButtonOut{
    padding-top: 10px;
  }
  .Inactive_Button{
    flex-grow:0;
    flex-shrink:0;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    min-width: 208px;
    height: 45px;
    line-height: 42px;
    border-radius: 4px;
    background: var( --brand-green );
    font-size: 17px;
    text-align: center;
    padding: 0 10px;
  }


  .Active_Text{
    font-size:18px;
    line-height: 1;
    padding: 27px 28px 0;
    color: var( --brand-green );
    text-align: center;
  }
  :host(.withPromo) .Active_Text{
    padding-top: 7px;
  }

  .Active_Country_Out{
    padding: 28px 20px 0;
  }
  :host(.withPromo) .Active_Country_Out{
    padding-top: 20px;
  }

  .SettingsIcon{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
  }
  :host(.withPromo) .SettingsIcon{
    top: calc(88px + 12px);
  }
  .SettingsIcon > .In{
    position: relative;
    border: 1px solid #bcbcbc;
    width: 38px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:38px;
    border-radius: 4px;
  }
  .SettingsIcon > .In::after{
    content: '';
    display: block;
    background: url( '/images/settings_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 17px;
    overflow:hidden;text-indent:-9999px;height:0;
    padding-top: 17px;
    top: calc(50% - 17px / 2);
    left: calc(50% - 17px / 2);
  }
  .SettingsIcon_GreenCircle{
    width: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:16px;
    background: var( --brand-green );
    border: 4px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: -11px;
    bottom: -11px;
  }
  .SettingsIcon_ClickArea{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    text-indent: -9999px;
    cursor: pointer;
  }

  </style>

  <index-home-promo .activeBanner="${this.activeBanner}"></index-home-promo>

  <div class="In ${"simple"!==o.type?"":"transition"}">
    <div class="In">
      <div class="Inactive">
        <div class="Inactive_Title">${"en"===a?Sa.protectionDisabled:"Защита отключена"}</div>
        <div class="Inactive_Text">${"en"===a?Sa.connectionsNotEncrypted:r.dy`
          Соединение не шифруется.<br/>Ваш IP и местоположение доступны третьим лицам.`}</div>
  ${(()=>"simple"===o.type?r.dy`
        <div class="Inactive_ButtonOut">
          <div class="Inactive_Button" @click="${this.enableProxy}">
            ${"en"===a?Sa.startVpn:"Включить VPN"}
          </div>
        </div>`:r.dy`
        <index-home-switches
          .proxyEnabled="${this.proxyEnabled}"
          .proxyCountry="${this.country}"
          .view="${o}"
          @proxyswitch="${this.proxySwitch}"
          @domainproxyswitch="${this.domainProxySwitch}"
          @countrychange="${this.countryChange}"
          @domaincountrychange="${this.domainCountryChange}">
        </index-home-switches>`)()}
      </div>
      <div class="Active">
        <div class="Active_Text">${"en"===a?Sa.privacyProtected:"Защита включена"}</div>
  ${(()=>"simple"!==o.type?r.dy`
          <index-home-switches
            .proxyEnabled="${this.proxyEnabled}"
            .proxyCountry="${this.country}"
            .view="${o}"
            @proxyswitch="${this.proxySwitch}"
            @domainproxyswitch="${this.domainProxySwitch}"
            @countrychange="${this.countryChange}"
            @domaincountrychange="${this.domainCountryChange}">
          </index-home-switches>`:r.dy`
          <div class="Active_Country_Out">
            <active-country
              .country="${this.country}"
              .countryName="${this.countryName}"
              .rating="${o.rating}"
              @click="${this.openLocations}"
            ></active-country>
          </div>`)()}
      </div>
    </div>
  </div>

  <div class="SettingsIcon">
    <div class="In"></div>
  ${(()=>this.settingsIconNewFeature?r.dy`
    <div class="SettingsIcon_GreenCircle"></div>`:"")()}
    <div class="SettingsIcon_ClickArea" @click="${this.openSettings}"></div>
  </div>`}class Pa extends r.oi{render(){const a=(()=>{switch(this.state){case"bad":return"active";case"good":return"disabled";default:return""}})(),o=(()=>{switch(this.state){case"bad":return"disabled";case"good":return"active";default:return""}})();return r.dy`
    <style>
    :host{
      display: block;
      background: #3ab9ea; 
      top: 4px; 
      left: 4px;
      width: calc(100% - 8px); 
      height: 82px;
      position: absolute;
      z-index: 4;
      border-radius: 4px;
      color:#fff;
      text-align: center;
    }

    .PollBanner_Title{
      padding: 10px 5px 10px;
      font-size: 16px;
      font-weight: bold;
    }
    .PollBanner_Title a{
      color: #fff;
      text-decoration: underline;
    }
    .PollBanner_Title a:hover{
      text-decoration: none;
    }
    .PollBanner_Buttons{
      font-size: 13px;
      padding: 0 20px 0;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
    }
    .PollBanner_Button{
      min-width: 113px;
      text-transform: uppercase;
      cursor: pointer;
      border: 1px solid #fff;
      line-height: 24px;
      padding: 0 10px;
      border-radius: 4px;
      user-select: none;
    }
    .PollBanner_Button.active{
      background: #fff;
      color: #3ab9ea;
      cursor: default;
    }
    .PollBanner_Button.disabled{
      cursor: default;
      opacity: 0.5;
    }
    </style>

    <div class="PollBanner">
      <div class="PollBanner_Title">
        ${(()=>"bad"===this.state?r.dy`
            Oh no :( Please 
            <a 
              href="https://forms.gle/CEKgoPQTZqZEMQ427" 
              target="_blank"
              @click="${this.linkClick}"
            >tell us</a> 
            what’s wrong`:"good"===this.state?"Thank you for your feedback!":"How was your first experience with Browsec?")()}
      </div>
      <div class="PollBanner_Buttons">
        <div class="E"><div class="PollBanner_Button ${o}" @click="${this.clickGreat}">
          Great!
        </div></div>
        <div class="E"><div class="PollBanner_Button ${a}" @click="${this.clickBad}">
          Not so good
        </div></div>
      </div>
    </div>`}static get properties(){return{state:{type:String}}}constructor(){super(),this.state="open"}clickBad(){"open"===this.state&&(this.state="bad",u.Z.full({category:"Exp254_feedback_notgood"}))}clickGreat(){"open"===this.state&&(this.state="good",u.Z.full({category:"Exp254_feedback_great"}))}linkClick(){u.Z.full({category:"Exp254_feedback_tellus"})}}customElements.define("poll-banner",Pa);var Ba=m(8669);const Ia=Object.freeze(["autocomplete","colspan","height","href","name","rowspan","src","target","type","width"]);const Za=(a,o=(a=>a))=>{let m=(a=>Object.assign({},a,{type:"string"==typeof a.tag?"element":"node"}))(a);if("node"===m.type){if("string"!=typeof m.text)throw new Error("createElement called without text property");return document.createTextNode(m.text)}const{attributes:e,tag:t}=m;let i=document.createElement(t);if(m.class){let a=o(m.class);i.setAttribute("class",a)}if(m.style&&i.setAttribute("style",m.style),e)for(const[a,o]of Object.entries(e)){!Ia.includes(a)&&!a.startsWith("data-")||("src"===a&&"img"!==t||i.setAttribute(a,o))}if(m.node&&m.node(i),m.text&&(i.textContent=m.text),m.children){m.children.map((a=>Za(a,o))).forEach((a=>{i.appendChild(a)}))}return i},La=Za;class Ta extends HTMLElement{constructor(){super(),this.hasRenderedDom=!1;const a=this.attachShadow({mode:"open"}),o=Ba.dy`
    <style>
    ${n}
    :host{
      display:block;
      height: 82px;
      overflow: hidden;
      margin: 4px 4px 0;
      position: relative;
    }
    a{
      display: block;
      position: absolute;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 3;
    }
    </style>`;(0,Ba.sY)(o,a)}renderDomFromJson({jsonStructure:a,link:o,promotionId:m}){const e=this.shadowRoot;if(this.hasRenderedDom)for(const a of e.children)"style"!==a.tagName.toLowerCase()&&a.remove();this.hasRenderedDom=!0;const t=La(a),i=document.createElement("a");i.href=o,i.target="_blank",m&&i.addEventListener("click",(()=>{u.Z.partial({category:"banner",action:"click",label:"banner_promo_"+m})})),(async()=>{const{experiments:a}=await g.Z.getStateAsync(),o=a[f().experiments.pollBanner.id];if(o){const a=ia(Number(o));i.addEventListener("click",(()=>{u.Z.full({category:"Exp254_redbannerclick",action:a})}))}})(),e.append(t),e.append(i)}}customElements.define("downloadable-promo",Ta);const Da=i({continueUsing:"continue_using_premium",goAheadAndRenewIt:"go_ahead_and_renew_it",premiumIsAboutToExpire:"your_premium_is_about_to_expire"}),Oa=new Map;for(const[a,{id:o,taskNumber:m}]of Object.entries(f().experiments))Oa.set(o,{name:a,taskNumber:m});class Fa extends r.oi{render(){return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      margin: 1px 0 0;
      background: #fcd0cb;
      border-bottom: 1px solid var( --brand-burgundy );
      padding: 10px 10px 10px;
    }
    .Close{
      position: absolute;
      top: -5px;
      right: -1px;
      color: var( --brand-burgundy );
      cursor: pointer;
      width: 10px;
      padding-top: 10px;
      border: 11px solid transparent;
      height: 0;
      overflow: hidden;
      background: url( '/images/popup_close_2.svg#pink' ) 0 0 no-repeat;
      background-size: 100% 100%;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_2.svg#white' );
    }
    .Close::after{
      content: '';
      display: block;
      position: absolute;
      width: 1px;
      height: 1px;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
    }
  
    .Title{
      color: var( --brand-burgundy );
      font-size: 14px;
      text-align: center;
    }
    .Description{
      color: #1c304e;
      font-size: 12px;
      text-align: center;
    }
  
    .Link_Out{
      display:flex;
      justify-content: center;
      text-align: center;
      font-size: 12px;
      padding-top: 5px;
    }
    .Link{
      flex-glow: 0;
      flex-shrink: 0;
      vertical-align:top;
      cursor:pointer;
    }
    .Link:link,
    .Link:visited{
      text-decoration: none;
      border-bottom:1px #1c304e solid;
      color: #1c304e;
    }
    .Link:hover{
      color: #fff;
      border-bottom:1px solid #fff;
    }
    </style>
    
    <div class="Close" @click="${this.expirationClose}"></div>
    <div class="Title">${Da.premiumIsAboutToExpire}</div>
    <div class="Description">${Da.goAheadAndRenewIt}</div>
    <div class="Link_Out">
      <a class="Link" href="${this.expirationPremiumLink}" target="_blank">
        ${Da.continueUsing}
      </a>
    </div>`}static get properties(){return{expirationPremiumLink:{type:String}}}constructor(){super(),this.expirationPremiumLink="",(async()=>{const a=await g.Z.getStateAsync(),o=[];for(const[m,e]of Object.entries(a.experiments)){if(!Oa.has(m))continue;const{taskNumber:a}=Oa.get(m);o.push(`exp${a}_${e}`)}{const a=await ma.Z.get("Experiment 346: variant");"number"==typeof a&&o.push("exp346_"+a)}{const a=await ma.Z.get("Experiment 348: variant");"number"==typeof a&&o.push("exp348_"+a)}this.expirationPremiumLink=H({action:a=>Object.assign(a,{expvarid:o.join(","),utm_source:"chromium extension",utm_campaign:"default_campaign"}),storeState:a,url:W.Z.base+"/en/orders/new?plan_id=annual"})})()}expirationClose(){this.dispatchEvent(new CustomEvent("expirationclose"))}}customElements.define("premium-expiration-soon",Fa);const Aa=({prices:a,priceTrial:o})=>{const m=a.slice().sort(((a,o)=>a.value/a.duration-o.value/o.duration))[0],e=a.slice().sort(((a,o)=>o.value/o.duration-a.value/a.duration))[0];let{currency:t,oldValue:i}=e;"USD"===t&&(t="$");let n=Math.floor(100*m.value/m.duration)/100,r=i?Math.floor(100*i/e.duration)/100:0;const l=o||0;return{currency:t,duration:m.duration,oldPrice:r,price:n,trialDays:l}},Na=new Map;for(const{id:a,taskNumber:o}of Object.values(f().experiments))Na.set(a,o);let Ra;(async()=>{const a=await ma.Z.get("Experiment 348: variant");Ra=a})();const Ma=i({getTurboSpeed:"get_turbo_speed",moneyBackGuarantee:"7_days_money_back_guarantee",upgradeConnectionSpeed:"upgrade_connection_speed"});class Va extends((0,$.$)(g.Z)(r.oi)){render(){const a=(0,e.Z)("from_only_X_per_month").replace(/XXX/g,String(this.price));return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      position: relative;
      background: #c0392b;
      margin: 6px 6px 0 6px;
      border-radius: 4px;
      height: 82px;
      color: #fff;
      text-align: center;
      line-height: 1;
    }
    :host > .In{
      display: table;
      height: 100%;
      width: 100%;
    }
    :host > .In > .In{
      display: table-cell;
      vertical-align: middle;
      padding: 0 7px;
    }
    .Title{
      text-transform: uppercase;
      font-size: 23px;
      font-weight: bold;
    }
    .Price{
      color: #f1c40f;
      font-size: 18px;
      font-weight: bold;
      padding: 3px 0 7px;
    }
    .Days{
      color: #e1afab;
      font-size: 12px;
    }
    .Link{
      display: block;
      position: absolute;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
      white-space: nowrap;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
    }
    </style>
    
    <div class="In"><div class="In">
      <div class="Title">${Ma.upgradeConnectionSpeed}</div>
      <div class="Price">${a}</div>
      <div class="Days">${Ma.moneyBackGuarantee}</div>
    </div></div>
    <a class="Link" @click=${this.linkClick} href="${this.premiumLink}" target="_blank">
      ${Ma.getTurboSpeed}
    </a>`}static get properties(){return{price:{type:Number}}}get premiumLink(){const a=[],{experiments:o}=g.Z.getStateSync();for(const[m,e]of Object.entries(o)){if(!Na.has(m))continue;const o=Na.get(m);a.push(`exp${o}_${e}`)}"number"==typeof Ra&&a.push("exp348_"+Ra);const m=new URL(W.Z.premium);return a.length&&m.searchParams.set("expvarid",a.join(",")),H({action:a=>Object.assign(a,{utm_source:"chromium extension",utm_medium:"banner",utm_campaign:"default_campaign"}),storeState:g.Z.getStateSync(),url:m.toString()})}stateChanged({prices:a,priceTrial:o}){this.price=Aa({prices:a,priceTrial:o}).price}async linkClick(){var a,o;u.Z.partial({category:"banner",action:"click",label:"banner_speed_new"});const{experiments:m}=g.Z.getStateSync(),e=m[f().experiments.pollBanner.id];if(e){const a=ia(Number(e));u.Z.full({category:"Exp254_redbannerclick",action:a})}await new Promise((a=>{setTimeout(a,50)})),null===(a=self)||void 0===a||null===(o=a.close)||void 0===o||o.call(a)}}customElements.define("upgrade-speed-banner",Va);const{_:Ua}=self,Ha=new Map;for(const{id:a,taskNumber:o}of Object.values(f().experiments))Ha.set(a,o);class Wa extends HTMLElement{constructor(){super(),this._activeBanner=null,this.expirationClose=this.expirationClose.bind(this);const a=this.attachShadow({mode:"open"}),o=Ba.dy`
    <style>
    ${n}
    :host{
      display: block;
      height:82px;
    }
    </style>`;(0,Ba.sY)(o,a)}get activeBanner(){return this._activeBanner}set activeBanner(a){Ua.isEqual(this._activeBanner,a)||(this._activeBanner=a,this.renderActivePromo(this.activeBanner))}async expirationClose(){var a,o;const{user:m}=await g.Z.getStateAsync(),e=null===(a=m.loginData)||void 0===a||null===(o=a.subscription)||void 0===o?void 0:o.paidUntil;if(!e)return;let t=new Date(e);await ma.Z.set("userClosedWarnToPremiumEndDate",String(t)),qa.refresh()}async renderActivePromo(a){const o=this.shadowRoot,m=await g.Z.getStateAsync();for(const a of o.children)"style"!==a.tagName.toLowerCase()&&a.remove();const e=await(async()=>{if(a){if("premium expiration"===a.type){const a=document.createElement("premium-expiration-soon");return a.addEventListener("expirationclose",this.expirationClose),a}if("poll banner"===a.type){return document.createElement("poll-banner")}if("custom"===a.type){const t=document.createElement("downloadable-promo"),{promotionId:i,banner:{link:n,structure:r}}=a;x.Z.track("banner",{campaign:i});const l=new URL(n);l.searchParams.set("instd",String(m.daysAfterInstall));const d=[];for(const[a,o]of Object.entries(m.experiments)){if(!Ha.has(a))continue;const m=Ha.get(a);d.push(`exp${m}_${o}`)}{const a=await ma.Z.get("Experiment 348: variant");"number"==typeof a&&d.push("348_"+String(a))}d.length&&l.searchParams.set("expvarid",d.join(",")),t.renderDomFromJson({jsonStructure:r,link:l.toString(),promotionId:i});{var o,e;const a=null===(o=t.shadowRoot)||void 0===o||null===(e=o.querySelector)||void 0===e?void 0:e.call(o,"a");a&&a.addEventListener("click",(()=>{x.Z.track("banner_click",{campaign:i})}))}return t}return"speed"===a.type?document.createElement("upgrade-speed-banner"):void 0}})();if(e&&o.append(e),"poll banner"===(null==a?void 0:a.type)){const{experiments:a}=await g.Z.getStateAsync(),o=a[f().experiments.pollBanner.id];if(o){const a=ia(Number(o));u.Z.full({category:"Exp254_2ndopen",action:a})}ma.Z.set("Experiment 254: phase",3)}if("custom"===(null==a?void 0:a.type)){const{promotionId:o}=a;u.Z.partial({category:"banner",action:"show",label:"banner_promo_"+o})}"speed"===(null==a?void 0:a.type)&&u.Z.partial({category:"banner",action:"show",label:"banner_speed_new"})}}customElements.define("index-home-promo",Wa);const Xa=i({otherWebsites:"other_websites"}),Ga=a=>("usw"===a&&(a="us"),"uk"===a&&(a="gb"),a?`/images/flags/${a}.svg`:"/images/empty.png");class Ya extends r.oi{render(){return r.dy`
    <style>
    ${n}
    :host{
      display: block;
    }
    .Row::after{
      content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
    }
    .Row + .Row{
      padding-top: 8px;
    }

    .Switch,
    .Flag_Out{
      float: right;
      width: 61px;
      padding-left: 11px;
      min-height: 1px;
    }

    .Name{
      white-space: nowrap;
      overflow: hidden;
      line-height: 26px;
      text-overflow: ellipsis;
    }

    .Flag{
      border: 1px solid #bcbcbc;
      border-radius: 3px;
      padding: 2px 27px 2px 2px;
      cursor: pointer;
      position: relative;
    }
    .Flag:hover{
      border-color: #888;
    }
    .Flag::after{
      content: '';
      display: block;
      background: url( '/images/flag_arrow_right.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 5px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:9px;
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -4px;
    }
    .Flag img{
      display: block;
      border-radius: 4px;
      filter: saturate(135%);
      opacity:0.7;
      border: 1px solid rgba(0, 0, 0, 0.22);
    }
    </style>

    <div class="Row">
      <div class="Switch">
        <c-switch .on="${"complex on"===this.view.type}" @click="${this.domainProxySwitch}"></c-switch>
      </div>
      <div class="Flag_Out">
  ${(()=>{if(!("country"in this.view))return"";const a=this.view.country;return r.dy`
        <div class="Flag" @click="${this.domainCountryChange}">
          <img src="${Ga(a)}" width="30" height="20" alt="${a}"/>
        </div>`})()}
      </div>
      <div class="Name">${this.view.view}</div>
    </div>

    <div class="Row">
      <div class="Switch">
        <c-switch .on="${this.proxyEnabled}" @click="${this.proxySwitch}"></c-switch>
      </div>
      <div class="Flag_Out">
  ${(()=>this.proxyEnabled?r.dy`
        <div class="Flag" @click="${this.countryChange}">
          <img src="${Ga(this.proxyCountry)}" width="30" height="20" alt="${this.proxyCountry}"/>
        </div>`:"")()}
      </div>
      <div class="Name">${Xa.otherWebsites}</div>
    </div>`}static get properties(){return{proxyEnabled:{type:Boolean},proxyCountry:{type:String},view:{type:Object}}}constructor(){super(),this.view={}}proxySwitch(){this.dispatchEvent(new CustomEvent("proxyswitch"))}domainProxySwitch(){this.dispatchEvent(new CustomEvent("domainproxyswitch"))}countryChange(){this.dispatchEvent(new CustomEvent("countrychange"))}domainCountryChange(){this.dispatchEvent(new CustomEvent("domaincountrychange"))}}customElements.define("index-home-switches",Ya);const Ja=f().proxy.defaultCountry||"nl",Ka=async()=>{let a=await ma.Z.get("newSettingsFeatureTimezoneChange1");return!("boolean"==typeof a&&!a)||Boolean(g.Z.getStateSync().webrtcBlock&&!$a.includes("privacy"))};class Qa extends((0,$.$)(g.Z)(r.oi)){render(){return Ca.call(this)}static get properties(){return{activeBanner:{type:Object},countries:{type:Array},country:{type:String},countryName:{type:String},proxyEnabled:{type:Boolean},settingsIconNewFeature:{type:Boolean},switchesView:{type:Object}}}constructor(){super(),this.activeBanner=qa.get(),this.switchesView={type:"simple",rating:void 0},this.countries=[],this.proxyEnabled=!1,this.settingsIconNewFeature=!1,this.activeBannerListener=this.activeBannerListener.bind(this),this.language=window.language}async connectedCallback(){super.connectedCallback(),qa.addListener(this.activeBannerListener),this.settingsIconNewFeature=await Ka()}disconnectedCallback(){qa.removeListener(this.activeBannerListener)}firstUpdated(a){var o,m;if(super.firstUpdated(a),(async()=>{this.settingsIconNewFeature=await Ka()})(),!(null===(o=this.shadowRoot)||void 0===o||null===(m=o.querySelector)||void 0===m?void 0:m.call(o,"index-home-promo")))throw new Error("index-home: index-home-promo element does not exist");this.classList.toggle("proxyEnabled",this.proxyEnabled),this.classList.toggle("withPromo",Boolean(this.activeBanner))}updated(a){a.has("activeBanner")&&this.classList.toggle("withPromo",Boolean(this.activeBanner)),a.has("proxyEnabled")&&this.classList.toggle("proxyEnabled",this.proxyEnabled)}stateChanged({domain:a,proxyServers:o,userPac:m,ping:e,user:t}){const i=Array.from(t.premium?o.premiumCountries():o.freeCountries());this.countries=i,this.country=m.country,this.proxyEnabled="proxy"===m.mode,(()=>{const{country:o,filters:n}=m,{premium:r}=t,l=(()=>{var a;if(e.length&&o)return null===(a=e.find((({country:a,premium:m})=>a===o&&m===r)))||void 0===a?void 0:a.mark})();if(!a)return void(this.switchesView={type:"simple",rating:l});const d=p(n,a);if(d){const{country:a,proxyMode:o}=d,m=d.value instanceof RegExp?d.value.toString():d.value,e=z.ZP.toUnicode(m);if(!o)return void(this.switchesView={domain:m,type:"complex off",view:e});this.switchesView={country:i.includes(a)?a:Ja,domain:m,type:"complex on",view:e}}else this.switchesView={type:"simple",rating:l}})()}get countryName(){const a=window.language;if(!this.country)return"";const o=(0,e.Z)("country_name_"+this.country.toUpperCase());return"ru"===a&&da(o)||o}activeBannerListener(a){this.activeBanner=a||null}countryChange(){x.Z.track("main_country"),g.Z.dispatch({type:"Page: set",page:"index:locations"})}domainProxySwitch(){let{domain:a}=this.switchesView;w.siteFilters.toggle(a)}domainCountryChange(){let{domain:a}=this.switchesView;g.Z.dispatch({type:"Page: set",page:"index:locations:"+a})}async enableProxy(){const a=f().experiments.freeServersOverloaded.id,o=await g.Z.getStateAsync(),{userPac:m,user:e}=o,t=(()=>{const{experiments:a,ignoredExperiments:m}=o;return Object.fromEntries(Object.entries(a).filter((([a])=>!m.includes(a))))})(),i=await(async()=>{const a=Date.now(),o=await ma.Z.get("daysAfterInstall")||a;return Math.round((a-o)/864e5)})(),n=t[a];if("1"===n&&!e.premium&&"direct"===m.mode){const a=await ea();a&&(u.Z.full({category:"paywall_overload_330v2show",action:ia(Number(n)),label:String(i)}),await ta(a))}await w.enable()}openLocations(){x.Z.track("main_country"),g.Z.dispatch({type:"Page: set",page:"index:locations"})}async openSettings(){x.Z.track("main_settings"),await ma.Z.set("newSettingsFeatureTimezoneChange1",!1),g.Z.dispatch({type:"Page: set",page:"index:settings"})}proxySwitch(){this.proxyEnabled?w.disable():w.enable()}}customElements.define("index-home",Qa);const ao=(a,o,m)=>a.premium&&!o?"premium":a.code===m?"current":"change";function oo(a){let{key:o}=a;if("ArrowDown"!==o&&"ArrowUp"!==o)if("Enter"!==o)this.charsBuffer.keydownListener(a);else{if(!this.highlightedCountry)return;let{code:a}=this.highlightedCountry,o=ao(this.highlightedCountry,this.premiumUser,this.country);if("current"===o)return;this.countryClick({detail:{mode:o,country:a}})}else{a.preventDefault();let m=(()=>{let a=this.namesList.length;const m=this.highlightedCountry;if(!m)return"ArrowUp"===o?a-1:0;let e=this.namesList.findIndex((({code:a,premium:o})=>m.code===a&&m.premium===o));return e+="ArrowDown"===o?1:-1,(e+a)%a})(),e=this.namesList[m];this.highlightedCountry={code:e.code,premium:e.premium};let t=this.scrollElement.scrollTop,i=this.scrollElement.offsetHeight,n=t+i,r=e.element.offsetHeight,l=e.element.offsetTop,d=l+r;if(l>=t&&d<=n)return;let u=l>=t?d-i+4:l-2;this.scrollElement.scrollTop=u}}const mo=i({virtualLocations:"virtual_locations",serversInVirtualLocations:"N_servers_in_N_virtual_Locations"}),eo=(a,o)=>Boolean(o&&o.code===a.code&&o.premium===a.premium);function to(){const a=window.language,o=(()=>("en"===a?mo.serversInVirtualLocations:"Более AAA серверов в BBB странах").replace(/AAA/g,"en"===a?"600+":"600").replace(/BBB/g,String(this.countries.filter((({premium:a})=>a)).length)))();return r.dy`
  <style>
  ${n}
  :host > .In{
    overflow: auto;
    height: 100%;
  }
  ${ua(":host > .In")}

  .Head{
    display: flex;
    flex-wrap: wrap;
    padding: 11px 12px;
    text-align: center;
    position: relative;
  }
  .Head > .T{
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0 auto;
    position: relative;
  }
  .Head_Title{
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
  .ServerCount{
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    font-size: 12px;
    line-height: 1.25;
    padding-top: 2px;
  }

  .Back{
    position: absolute;
    left: 12px;
    top: 16px;
    font-size: 14px;
    line-height: 1.2;
    padding: 0 0 0 18px;
    cursor: pointer;
  }
  .Back::before{
    content: '';
    display: block;
    background: url('/images/arrow_left.svg') 0 0 no-repeat;
    background-size: 100% 100%;
    width: 9px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 16px;
    position: absolute;
    left: 0;
    top: calc(50% - 8px);
  }

  .Helper{
    position: absolute;
    left: calc(100% + 5px);
    top: calc(50% - 8px);
    background: url( '/images/information_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 16px;
    cursor: pointer;
    text-align: left;
  }
  .Helper:hover{
    background-image: url( '/images/information_green.svg' );
  }
  .Helper::after{
    content: '';
    display: block;
    background: url( '/images/information_green.svg' ) 0 -5000px no-repeat;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  .MissingLocation{
    color: var( --brand-green );
    padding: 5px 0 0;
    font-size: 13px;
  }
  .MissingLocation a{
    color: var( --brand-green );
    text-decoration: none;
    border-bottom: 1px solid var( --brand-green );
  }
  .MissingLocation a:hover{
    border-bottom-color: transparent;
  }

  .Sections{
    padding: 0px 12px 12px;
  }
  </style>

  <div class="In">
    <div class="Head">
      <div class="Back" @click="${this.back}">${"en"===a?"Back":"Назад"}</div>
      <div class="T">
        <div class="Head_Title">${"en"===a?mo.virtualLocations:"Виртуальные страны"}</div>
        <div class="Helper" @click="${this.openHelp}">?</div>
      </div>
      <div class="ServerCount">${o}</div>
    </div>
    <div class="Sections">
  ${this.countries.map((a=>r.dy`<index-locations-element
      @countryclick="${this.countryClick}"
      @favorite="${this.favorite}"
      @mousemove="${this.elementHighlight(a)}"
      .data="${a}"
      .highlighted="${eo(a,this.highlightedCountry)}"
      .mode="${ao(a,this.premiumUser,this.country)}"
    ></index-locations-element>`))}
    </div>
  </div>`}const io=a=>("usw"===a&&(a="us"),"uk"===a&&(a="gb"),a?`/images/flags/${a}.svg`:"/images/empty.png");function no(){return r.dy`
  <style>
  ${n}
  :host{
    display: block;
    padding: 0 7px 0 10px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  :host(.highlight){
    background: #f7f8fc;
  }
  :host(.current){
    cursor: default;
  }
  :host(.current),
  :host(.current.highlight){
    background: #f0f5f0;
  }
  
  :host > .In{
    display: flex;
    align-items: center;
    height: 40px;
    background: url( '/images/favorites/hovered.svg' ) 0 -5000px no-repeat;
  }
  :host > .In > .E:first-child{
    width: 32px;
    padding: 0 10px 0 0;
    flex-shrink: 0;
    flex-grow: 0;
  }
  :host > .In > .E.country{
    padding-right: 5px;
    flex-grow: 1;
  }
  :host > .In > .E.mark{
    width: 23px;
    padding-left: 10px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  :host > .In > .E.favorite{
    width: 19px;
    padding-left: 10px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .Flag{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .Country{
    font-size: 13px;
    line-height: 1.2;
    color: #333;
  }

  .Favorite{
    background: url( '/images/favorites/static.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 13px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 12px;
    cursor: pointer;
    border: 3px solid transparent;
  }
  .Favorite:hover{
    background-image: url( '/images/favorites/hovered.svg' );
  }
  .Favorite.favorited,
  .Favorite.favorited:hover{
    background-image: url( '/images/favorites/starred.svg' );
  }

  .Mark{
    width: 23px;
    overflow:hidden;
    font-size:0;
    text-indent:-9999px;
    height:0;
    padding-top: 12px;
    background: url( '/images/pings/1.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .Mark.mark2{
    background-image: url( '/images/pings/2.svg' );
  }
  .Mark.mark3{
    background-image: url( '/images/pings/3.svg' );
  }
  .Mark.mark4{
    background-image: url( '/images/pings/4.svg' );
  }
  .Mark.mark5{
    background-image: url( '/images/pings/5.svg' );
  }
  </style>

  <div class="In" @click="${this.fullElementClick}">
    <div class="E">
      <img class="Flag" src="${io(this.data.code)}" width="30" height="20"/>
    </div>
    <div class="E country">
      <div class="Country">${this.data.name}</div>
    </div>
  ${(()=>this.data.delay?r.dy`
    <div class="E mark">
      <div class="Mark mark${this.data.mark}">${this.data.mark}</div>
    </div>`:"")()}
  ${(()=>"boolean"!=typeof this.data.favorited?"":r.dy`
    <div class="E favorite">
      <div
        class="Favorite${this.data.favorited?" favorited":""}"
        @click="${this.favoritesClick}"></div>
    </div>`)()}
  </div>`}class ro extends r.oi{render(){return no.call(this)}static get properties(){return{data:{type:Object},highlighted:{type:Boolean},mode:{type:String}}}constructor(){super(),this.data={},this.highlighted=!1,this.mode=""}updated(a){if(a.has("highlighted")){let o=this.highlighted;o!==a.get("highlighted")&&this.classList.toggle("highlight",o)}a.has("mode")&&(this.classList.toggle("current","current"===this.mode),this.classList.toggle("premium","premium"===this.mode))}favoritesClick(){this.dispatchEvent(new CustomEvent("favorite",{detail:{country:this.data.code,favorited:!this.data.favorited}}))}fullElementClick(a){const o=a.target instanceof HTMLElement&&a.target.classList.contains("Favorite");"current"===this.mode||o||this.dispatchEvent(new CustomEvent("countryclick",{detail:{mode:this.mode,country:this.data.code}}))}}customElements.define("index-locations-element",ro);const{_:lo}=self,uo="undefined"!=typeof browser?browser:chrome,co=a=>{const o=(0,e.Z)("country_name_"+a.toUpperCase());if(o)return o;const m=uo.i18n.getUILanguage(),t=uo.runtime.getManifest().version,i="failed to look up country name for: "+a+" with locale: "+m+" at popup.js";return J.Z.warn(i),u.Z.partial({category:"error",action:t,label:i,value:"0",noninteraction:!1}),a.toUpperCase()||"N/A"};class fo extends((0,$.$)(g.Z)(r.oi)){render(){return to.call(this)}static get properties(){return{countries:{type:Array},country:{type:String},domain:{type:String},highlightedCountry:{type:Object},premiumUser:{type:Boolean},proxyCountry:{type:String},proxyList:{type:Array}}}constructor(){super(),this.elementHighlight=this.elementHighlight.bind(this),this.keydownListener=oo.bind(this),this.country=null,this.domain="",this.highlightedCountry=null,this.proxyCountry="",this.proxyList=[]}async connectedCallback(){super.connectedCallback();const a=this.shadowRoot;this.charsBuffer=new A,document.addEventListener("keydown",this.keydownListener),await this.forceRenderAndGenerateNamesList();const o=a.children,m=o[o.length-1];if(!m)throw new Error("index-locations: scrollElement does not exist");this.scrollElement=m,this.charsBuffer.addListener((a=>{const o=this.namesList.find((({name:o})=>o.startsWith(a)));if(!o)return;const{code:m,element:e,premium:t}=o;this.highlightedCountry={code:m,premium:t},this.scrollElement.scrollTop=e.offsetTop-2}));const e=(()=>{const o=a.querySelector("div.Head");if(!o)throw new Error("index-locations: div.Head does not exist");return o.offsetHeight})();{const o=a.querySelector("div.Sections");if(!o)throw new Error("index-locations: div.Sections does not exist");o.style.cssText=`top:${e}px;`}this.domain||(0,E.Z)({type:"counters.increase",property:"popup: location page shows"})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydownListener)}updated(a){var o;const m=Array.from(a.keys());if(a.has("countries")&&this.forceRenderAndGenerateNamesList(),!m.some((a=>["domain","proxyCountry","proxyList"].includes(a))))return;const{domain:e,proxyCountry:t,proxyList:i}=this;this.country=e?(null===(o=i.find((a=>a.value===e)))||void 0===o?void 0:o.country)||"":t}stateChanged(a){const o=window.language,{userPac:m,user:e}=a;this.countries=((a,o,m="en")=>{const{favorites:e,ping:t,proxyServers:i,user:n}=a,r=n.premium,l=[];for(const[a,n]of i){const i=(()=>{const e=o(a);return"ru"===m&&da(e)||e})();if(!r){const o=n.free;if(Array.isArray(o)&&o.length){const o={id:a,code:a,name:i,premium:!1},m=t.find((({country:o,premium:m})=>o===a&&!m));if(m){const{delay:a,mark:e}=m;Object.assign(o,{delay:a,mark:e})}l.push(o)}}{const o=n.premium;if(Array.isArray(o)&&o.length){const o={id:a+"_premium",code:a,name:i+("en"===m?" (Premium)":" (Премиум)"),premium:!0};r&&(o.favorited=e.includes(a));const n=t.find((({country:o,premium:m})=>o===a&&m));if(n){const{delay:a,mark:m}=n;Object.assign(o,{delay:a,mark:m})}l.push(o)}}}return l.sort(((a,o)=>Boolean(a.favorited)!==Boolean(o.favorited)?a.favorited?-1:1:a.premium!==o.premium?a.premium?1:-1:a.name<o.name?-1:a.name>o.name?1:0))})(a,co,o),this.premiumUser=e.premium,this.proxyCountry="proxy"===m.mode?m.country:null,this.proxyList=m.filters.filter((({disabled:a,proxyMode:o})=>!a&&o))}back(){g.Z.dispatch({type:"Page: set",page:"index:home"}),this.domain||x.Z.track("countries_back")}async countryClick({detail:{mode:a,country:o}}){if(!this.domain){const{userPac:a}=await g.Z.getStateAsync(),m={change_country_code:o};"proxy"===a.mode&&(m.change_countryfrom_code=a.country),x.Z.track("countries_select",m)}if("change"===a)this.domain?await w.siteFilters.changeCountry({domain:this.domain,country:o}):(await w.setCountry(o),u.Z.partial({category:"extension",action:"change_country",label:o}),x.Z.track("change_country",{new_country:o})),await new Promise((a=>{setTimeout(a,500)})),g.Z.dispatch({type:"Page: set",page:"index:home"});else if("premium"===a){const a=document.createElement("popup-premium");a.country=o,a.initiator="premium locations",a.style.cssText="top:-100%;",document.body.append(a),u.Z.partial({category:"premium",action:"show"});if(1===await ma.Z.get("Experiment 330.2: phase")){const a=await g.Z.getStateAsync(),{user:o}=a,m=(()=>{const{experiments:o,ignoredExperiments:m}=a;return Object.fromEntries(Object.entries(o).filter((([a])=>!m.includes(a))))})(),e=await(async()=>{const a=Date.now(),o=await ma.Z.get("daysAfterInstall")||a;return Math.round((a-o)/864e5)})(),t=m[f().experiments.freeServersOverloaded.id];t&&!o.premium&&u.Z.full({category:"premium_div_330v2show",action:ia(Number(t)),label:String(e)})}const m=a.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});await new Promise((a=>{m.onfinish=a})),a.style.cssText=""}}elementHighlight({premium:a,code:o}){return m=>{if(!Boolean(m.movementX||m.movementY))return;const e={premium:a,code:o};lo.isEqual(this.highlightedCountry,e)||(this.highlightedCountry=e)}}favorite({detail:{favorited:a,country:o}}){a?I.add(o):I.remove(o)}async forceRenderAndGenerateNamesList(){const a=this.shadowRoot;await this.requestUpdate(),this.namesList=(()=>{var o;const m=this.countries.map((({code:a,name:o,premium:m})=>({code:a,name:o.toLowerCase(),premium:m}))),e=null===(o=a.querySelector("div.Sections"))||void 0===o?void 0:o.children,t=[];for(const a of e)"index-locations-element"===a.tagName.toLowerCase()&&t.push(a);return m.map(((a,o)=>Object.assign({element:t[o]},a)))})()}async openHelp(){x.Z.track("countries_info");const a=document.querySelector("div.MainContainer");if(!a)return;const o=document.createElement("popup-locations-information");o.style.cssText="opacity:0",a.append(o);const m=o.animate([{opacity:0},{opacity:1}],{duration:400,easing:"linear"});await new Promise((a=>{m.onfinish=a})),o.style.cssText=""}}customElements.define("index-locations",fo);const vo=a=>(0,E.Z)({type:"ShowedOffers.includes",offer:a}),so=a=>(0,E.Z)({type:"ShowedOffers.push",offer:a}),po=i({changeLocation:"change_location",contactUs:"contact_us",home:"home",smartSettings:"smart_settings"});function go(){const a=window.language;return r.dy`
  <style>
  ${n}
  a:link,
  a:visited{
    text-decoration: none;
    cursor: pointer;
    color: #7a7c7f;
  }
  a:hover{
    text-decoration: none;
    color: var( --brand-green );
  }

  :host{
    display: flex;
    align-items: flex-start;
    padding-top: 6px;
    margin-right: 70px;
  }
  :host > .E{
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    color: #7a7c7f;
    cursor: pointer;
    font-size: 12px;
    line-height: 30px;
    margin: 0 0 0 17px;
  }
  @media( max-width: 401px ){
    :host > .E{
      margin-left: 8px;
    }
  }
  :host > .E:hover{
    color: var( --brand-green );
  }
  :host > .E:first-of-type{
    margin-left: 0;
  }
  :host > .E.selected{
    color: var( --brand-green );
    cursor: default;
  }

  :host > .E::before{
    font-size: 14px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 30px;
  }

  :host > .E.home::before{
    content: '';
    display:inline-block;
    vertical-align:middle;
    background: url( '/images/menu/home.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 10px;
    position: static;
    margin-top: -3px;
    border-right: 3px solid transparent;
  }
  :host > .E.home.selected::before,
  :host > .E.home:hover::before{
    background-image: url( '/images/menu/home.svg#green' );
  }

  :host > .E.smartSettings{
    position: relative;
    padding-right: 21px;
    background: url( '/images/menu/settings_green.svg' ) 0 -5000px no-repeat;
  }
  :host > .E.smartSettings::before{
    content: '';
    display:inline-block;vertical-align:middle;
    background: url( '/images/menu/settings_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 14px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:11px;
    position: static;
    margin-top: -3px;
    padding-right: 3px;
  }
  :host > .E.smartSettings:after{
    content: '';
    display: block;
    background: url( '/images/beta.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -16px;
    width: 18px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:18px;
  }
  :host > .E.smartSettings.selected::before,
  :host > .E.smartSettings:hover::before{
    background-image: url( '/images/menu/settings_green.svg' );
  }

  :host > .E.icon{
    width: 32px;
    min-height: 30px;
  }
  :host > .E.icon a{
    display: block;
    width: 32px;
    height: 0;
    padding-top: 32px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: calc(50% - 16px);
    margin-top: -1px;
    border-radius: 50%;
  }
  :host > .E.icon a::before{
    content: '';
    display: block;
    position: absolute;
  }
  :host > .E.icon a:focus{
    background-color: #e6e6e6;
  }

  :host > .E.support{
    margin-left: 7px;
    background: url( '/images/menu/mail_green.svg' ) 0 -5000px no-repeat;
  }
  :host > .E.support a::before{
    background: url('/images/menu/mail_grey.svg') 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow: hidden;
    padding-top: 9px;
    height: 0;
    top: calc(50% - 4px);
    left: calc(50% - 6px);
    margin-top: 1px;
  }
  :host > .E.support a:hover::before{
    background-image: url( '/images/menu/mail_green.svg' );
  }

  :host > .E.facebook{
    margin-left: 0;
    background: url( '/images/menu/facebook_green.svg' ) 0 -5000px no-repeat;
  }
  :host > .E.facebook a::before{
    background: url( '/images/menu/facebook_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 8px;
    overflow: hidden;
    padding-top: 14px;
    height: 0;
    position: absolute;
    top: calc(50% - 7px);
    left: calc(50% - 4px);
    margin-top: 1px;
  }
  :host > .E.facebook a:hover::before{
    background-image: url( '/images/menu/facebook_green.svg' );
  }
  </style>
  <div class="E home ${this.homePage?"selected":""}" @click="${this.goHome}">${"en"===a?po.home:"Начало"}</div>
  <div
    class="E smartSettings ${this.filtersPage?"selected":""}"
    @click="${this.openSettings}"
    @contextmenu="${this.openSettings}">${"en"===a?po.smartSettings:"Умные настройки"}</div>
  <div class="E icon support">
    <a href="${this.contactUsUrl}" target="_blank" @click="${this.contactUsClick}">${po.contactUs}</a>
  </div>
  <div class="E icon facebook">
    <a href="${this.facebookUrl}" target="_blank" @click="${this.facebookClick}">Facebook</a>
  </div>`}class bo extends((0,$.$)(g.Z)(r.oi)){render(){return go.call(this)}static get properties(){return{containsFilter:{type:Boolean},domain:{type:String},facebookUrl:{type:String},filtersPage:{type:Boolean},homePage:{type:Boolean}}}constructor(){super(),this.domain=null,this.filtersPage=!1,this.homePage=!1}connectedCallback(){super.connectedCallback();const a=this.shadowRoot;for(const o of a.childNodes)o.nodeType!==Node.ELEMENT_NODE&&o.remove();const o=a.querySelectorAll("a");for(const a of o)a.addEventListener("click",(async()=>{var a,o;await new Promise((a=>{setTimeout(a,50)})),null===(a=self)||void 0===a||null===(o=a.close)||void 0===o||o.call(a)}))}disconnectedCallback(){super.disconnectedCallback(),this.documentClick&&(document.removeEventListener("mousedown",this.documentClick),delete this.documentClick)}stateChanged({domain:a,userPac:o,page:m}){this.containsFilter=(()=>{if(!a)return!1;return o.filters.filter((a=>!a.disabled&&"regex"!==a.format)).map((a=>a.value)).some((o=>o===a||a.endsWith("."+o)))})(),this.domain=(()=>{if(!a)return null;let m=o.filters.filter((a=>{let{disabled:o,format:m}=a;return!o&&"regex"!==m}));if(m.some((({value:o})=>o===a)))return a;let e=m.find((({format:o,value:m})=>"domain"===o&&a.endsWith("."+m)));if(e)return e.value;let t=self.domainZoneList.find((o=>a.endsWith("."+o)));return t?a.slice(0,-(t.length+1)).split(".").pop()+"."+t:a})(),this.filtersPage=(()=>{const a=m.split(":");return"index"===a[0]&&"filters"===a[1]})(),this.homePage=(()=>{const a=m.split(":");return"index"===a[0]&&"home"===a[1]})()}get contactUsUrl(){return H({storeState:g.Z.getStateSync(),url:W.Z.contactUs})}get facebookUrl(){return"https://www.facebook.com/BrowsecVPN"}contactUsClick(){x.Z.track("mainmenu_mail")}facebookClick(){x.Z.track("mainmenu_facebook")}goHome(){this.homePage||g.Z.dispatch({type:"Page: set",page:"index:home"})}async openSettings(a){if(a.preventDefault(),this.documentClick)return;(0,E.Z)({type:"counters.increase",property:"popup: menu: smart settings click"}),x.Z.track("mainmenu_smartsetting"),(async()=>{if(await vo("smart settings"))return;so("smart settings");const{userPac:a}=await g.Z.getStateAsync();a.filters.length||(x.Z.track("smartSettings_intro"),document.body.append(document.createElement("popup-help")))})();const{left:o,top:m}=a.target.getBoundingClientRect(),e=document.body.clientWidth-o,t=document.createElement("context-menu");t.style.cssText=`left:-5000px;top:-5000px;max-width:${e}px;opacity:0;`,t.containsFilter=this.containsFilter,t.unicodeDomain=z.ZP.toUnicode(this.domain||""),t.domain=this.domain,document.body.append(t),await new Promise((a=>{setTimeout(a,0)}));const i=m-t.offsetHeight-8;t.style.cssText=`left:${o}px;max-width:${e}px;top:${i}px;`,this.documentClick=({target:a})=>{if(!(a instanceof HTMLElement))return;const o=!a.matches("div.Element");o&&(a===t||t.contains(a))||a.matches("popup-help, popup-help *")||(o&&t.remove(),this.documentClick&&(document.removeEventListener("mousedown",this.documentClick),delete this.documentClick))},document.addEventListener("mousedown",this.documentClick)}}customElements.define("index-menu",bo);var ho=m(5221),yo=m.n(ho);const ko=i({changeTimezoneByVirtualLocation:"change_timezone_according_to_virtual_location",dontShowPromoOffers:"dont_show_promo_offers",useBrowsecForWebrtcConnections:"use_browsec_for_webrtc_connections",webrtcSettingsControlledByAnotherExtension:"webrtc_settings_controlled_by_another_extension"});function wo(){const a=window.language;return r.dy`
  <style>
  ${n}
  .Checkboxes{
    padding: 17px 0 25px;
    font-size: 16px;
  }
  .Checkboxes > .E{
    position: relative;
    padding: 8px 20px;
  }
  .Checkboxes > .E.disabled{
    opacity: 0.5;
  }
  .Checkboxes > .E.highlighted{
    background: #f0f5f0;
  }
  .Checkboxes > .E > .In{
    display:inline-block;vertical-align:top;
  }
  .Checkboxes > .E > .In::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }
  .Checkboxes > .E > .In > checkbox-switch{
    float: left;
  }
  .Checkboxes > .E > .In > .R{
    margin-left: 55px;
  }
  .Checkboxes > .E > .In > .Crown + .R{
    padding-right: 25px;
  }
  .Checkboxes > .E.hasInfo > .In > .R{
    margin-right: 26px;
  }

  .Information{
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 0;
    height: 0;
  }
  .Information > .In{
    position: absolute;
    left: 0;
    top: 0;
    background: url( '/images/information_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 16px;
    padding-top: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    cursor: pointer;
    margin: 4px 0 0 10px;
  }
  .Information > .In:hover{
    background-image: url( '/images/information_green.svg' );
  }
  .Information > .In::after{
    content: '';
    display: block;
    background: url( '/images/information_green.svg' ) 0 -5000px no-repeat;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  .Crown{
    background: url( '/images/crown.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 18px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 18px;
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .Error{
    clear: both;
    padding: 2px 0 0 55px;
    color: #c00;
    font-size: 12px;
  }


  .HealthCheck{
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 25px;
    left: 25px;
    right: 25px;
    text-align: center;
  }
  .HealthCheck_Button{
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    font-size: 14px;
    line-height: 2.714;
    padding: 0 30px 0 50px;
    border: 1px solid var( --brand-blue );
    border-radius: 4px;
    color: #494b4d;
    cursor: pointer;
    text-align: left;
  }
  .HealthCheck_Button::after{
    content: '';
    display: block;
    background: url( '/images/diagnostics.svg#health_blue' ) 0 0 no-repeat;
    width: 19px;
    padding-top: 16px;
    height: 0;
    overflow: hidden;
    position: absolute;
    top: calc(50% - 16px / 2);
    left: 23px;
  }
  </style>

  <div class="Checkboxes">
  ${(()=>this.webrtcAvailable?r.dy`
    <div class="E hasInfo ${this.webrtcNotEnoughPermissions?"highlighted":""}"><div class="In">
      <checkbox-switch
        .checked="${this.webrtcBlocked}"
        @click="${this.changeWebrtc}">
      </checkbox-switch>
      <div class="R"><!--
     --><label @click="${this.changeWebrtc}">${"en"===a?ko.useBrowsecForWebrtcConnections:"Использовать Browsec для подключений WebRTC"}</label><!--
     --><div class="Information">
          <div class="In" @click="${this.showWebrtcHelp}"></div>
        </div><!--
   --></div>
        ${(()=>this.webrtcBlockedByOtherExtension?r.dy`
      <div class="Error">
        ${ko.webrtcSettingsControlledByAnotherExtension}
      </div>`:"")()}
    </div></div>`:"")()}

    <div class="E hasInfo ${this.changeDateDisabledClass} ${this.changeDateFirstTimeClass}"><div class="In">
      <checkbox-switch
        .checked="${this.hideDate}"
        data-changedate="true"
        @mouseover="${this.changeDateMouseover}"
        @click="${this.changeDate}">
      </checkbox-switch>
      <div class="Crown"></div>
      <div class="R"><!--
     --><label
          data-changedate="true"
          @mouseover="${this.changeDateMouseover}"
          @click="${this.changeDate}">${"en"===a?ko.changeTimezoneByVirtualLocation:"Менять часовой пояс браузера под текущий IP"}</label><!--
     --><div class="Information">
          <div class="In" @click="${this.showDateHelp}"></div>
        </div><!--
   --></div>
    </div></div>

    <div class="E"><div class="In">
      <checkbox-switch
        .checked="${this.blockPromos}"
        data-changedate="true"
        @click="${this.changeBlockPromos}">
      </checkbox-switch>
      <div class="R"><!--
     --><label
          data-changedate="true"
          @click="${this.changeBlockPromos}">${"en"===a?ko.dontShowPromoOffers:"Не показывать промо-предложения"}</label><!--
   --></div>
    </div></div>

    ${(()=>"undefined"!=typeof browser?"":r.dy`
    <div class="E"><div class="In">
      <checkbox-switch
        .checked="${this.cacheRemoval}"
        data-changedate="true"
        @click="${this.changeCacheRemoval}">
      </checkbox-switch>
      <div class="R"><!--
     --><label
          data-changedate="true"
          @click="${this.changeCacheRemoval}">${"en"===a?"Remove cache on authorization popups (experimental)":"Удалять кэш на диалогах авторизации"}</label><!--
   --></div>
    </div></div>`)()}

  </div>

  <div class="HealthCheck">
    <div class="HealthCheck_Button" @click="${this.openDiagnostics}">${"en"===a?"Health check":"Диагностика"}</div>
  </div>`}const xo=a=>(0,E.Z)({type:"timezoneChange.set",value:a}),zo=new class{constructor(){(async()=>{this.available=await(0,E.Z)({type:"webrtc.available"})})()}async disable(a){return a&&await a(),(0,E.Z)({type:"webrtc.disable"})}async enable(a){return a&&await a(),(0,E.Z)({type:"webrtc.enable"})}getControlState(){return(0,E.Z)({type:"webrtc.getControlState"})}};class _o extends r.oi{render(){return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      width: 41px;
      height: 24px;
      cursor: pointer;
      position: relative;
    }
    :host::before{
      content: '';
      display: block;
      background: #e6e6e6;
      position: absolute;
      top: 3px;
      left: 0;
      right: 3px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:16px;
      border-radius: 8px;
      transition: background-color 0.15s ease-out 0s;
      box-shadow: inset 0 1px 2px rgba( 0, 0, 0, 0.2 );
    }
    :host(.checked)::before{
      background: var( --brand-green );
    }

    :host::after{
      content: '';
      display: block;
      width: 20px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:20px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid #e8e8e8;
      box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 0;
      left: 0;
      transition: left 0.15s ease-out 0s;
    }
    :host(.checked)::after{
      left: 17px;
    }
    </style>`}static get properties(){return{checked:{type:Boolean}}}updated(a){a.has("checked")&&this.classList.toggle("checked",this.checked)}}customElements.define("checkbox-switch",_o);const jo=async()=>{if("undefined"!=typeof browser)return;if(!await new Promise(((a,o)=>{chrome.permissions.request({permissions:["privacy"]},(m=>{chrome.runtime.lastError?o(chrome.runtime.lastError):a(m)}))})))throw new Error("Management permission is not granted")};class qo extends((0,$.$)(g.Z)(r.oi)){render(){return wo.call(this)}static get properties(){return{blockPromos:{type:Boolean},cacheRemoval:{type:Boolean},changeDateDisabledClass:{type:String},changeDateFirstTimeClass:{type:String},hideDate:{type:Boolean},storeWebrtcBlocked:{type:Boolean},premiumUser:{type:Boolean},webrtcAvailable:{type:Boolean},webrtcBlocked:{type:Boolean},webrtcBlockedByOtherExtension:{type:Boolean},webrtcNotEnoughPermissions:{type:Boolean}}}stateChanged({cacheRemoval:a,promotionsBlock:o,timezoneChange:m,user:e,webrtcBlock:t}){this.changeDateDisabledClass=m&&!e.premium?"disabled":"",this.blockPromos=o,this.cacheRemoval=a,this.hideDate=m,this.premiumUser=e.premium,this.storeWebrtcBlocked=t}constructor(){super(),this.computeWebrtcNotEnoughPermissions=this.computeWebrtcNotEnoughPermissions.bind(this),this.changeDateFirstTimeClass="",(async()=>{let a=await ma.Z.get("newSettingsFeatureTimezoneChange2");this.changeDateFirstTimeClass=a?"":"highlighted"})(),this.storeWebrtcBlocked=null,this.premiumUser=null,this.webrtcAvailable=zo.available,this.webrtcBlocked=!1,this.webrtcBlockedByOtherExtension=!1,this.webrtcNotEnoughPermissions=!1}async connectedCallback(){super.connectedCallback(),await ma.Z.set("newSettingsFeatureTimezoneChange2",!0)}disconnectedCallback(){super.disconnectedCallback(),this.tooltipElement&&(this.tooltipElement.remove(),delete this.tooltipElement),this.documentMouseMove&&(document.removeEventListener("mousemove",this.documentMouseMove),delete this.documentMouseMove)}firstUpdated(a){var o,m;super.firstUpdated(a),this.changeDateElements=Array.from((null===(o=this.shadowRoot)||void 0===o||null===(m=o.querySelectorAll)||void 0===m?void 0:m.call(o,'[data-changedate="true"]'))||[]),(async()=>{"not controlled"===await zo.getControlState()&&(this.webrtcBlockedByOtherExtension=!0)})(),this.webrtcBlocked=!!g.Z.getStateSync().webrtcBlock&&$a.includes("privacy"),this.computeWebrtcNotEnoughPermissions($a.get()),$a.addListener(this.computeWebrtcNotEnoughPermissions)}updated(a){a.has("webrtcBlocked")&&this.computeWebrtcNotEnoughPermissions($a.get())}computeWebrtcNotEnoughPermissions(a){this.webrtcNotEnoughPermissions=(()=>null!==this.storeWebrtcBlocked&&(this.storeWebrtcBlocked&&!a.includes("privacy")))()}changeBlockPromos(){const a=!this.blockPromos;var o;x.Z.track(a?"settings_nopromo_on":"settings_nopromo_off"),o=a,(0,E.Z)({type:"promotionsBlock.set",value:o})}async changeCacheRemoval(){const a=!this.cacheRemoval;if(x.Z.track(a?"settings_remove_cache_on":"settings_remove_cache_off"),a){const{permissions:a}=await yo().permissions.getAll();if(!a.includes("browsingData")){if(!await new Promise((a=>{chrome.permissions.request({permissions:["browsingData"]},a)})))return;yo().resetAPI("browsingData")}}g.Z.dispatch({type:"Cache removal: set",data:a})}async changeDate(){if(!this.premiumUser&&this.hideDate)return;if(!this.premiumUser){const a=document.createElement("popup-premium");a.initiator="timezone change",a.style.cssText="top:-100%;",document.body.append(a),u.Z.partial({category:"premium",action:"show"});const o=a.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});return await new Promise((a=>{o.onfinish=a})),void(a.style.cssText="")}const a=!this.hideDate;x.Z.track(a?"settings_browser_tz_on":"settings_browser_tz_off"),await xo(a),this.hideDate=a}changeDateMouseover({target:a}){if(this.premiumUser||!this.hideDate)return;if(this.changeDateTooltipShown)return;if(!(a instanceof HTMLElement))return;this.changeDateTooltipShown=!0;let{top:o,left:m,height:t}=a.getBoundingClientRect();o+=t+7,m-=14,m<10&&(m=10);let i=document.createElement("general-tooltip");i.text=(0,e.Z)("this_option_is_available_only_for_premium"),i.style.cssText=`top:${o}px;left:${m}px;`,this.tooltipElement=i,document.body&&document.body.append(i);let n=this.changeDateElements.concat([i]);this.documentMouseMove=a=>{let o=a.composedPath?a.composedPath():a.deepPath?a.deepPath():a.path||[a.target];n.some((a=>o.includes(a)))||(i.remove(),document.removeEventListener("mousemove",this.documentMouseMove),delete this.documentMouseMove,delete this.tooltipElement,this.changeDateTooltipShown=!1)},document.addEventListener("mousemove",this.documentMouseMove)}async changeWebrtc(){if(this.webrtcBlockedByOtherExtension)return;const a=!this.webrtcBlocked;x.Z.track(a?"settings_webrtc_on":"settings_webrtc_off");try{a?await zo.enable(jo):await zo.disable(jo),this.webrtcBlocked=a}catch(a){J.Z.warn("WebRTC setup in popup failed")}}async openDiagnostics(){x.Z.track("settings_healthcheck"),await(0,E.Z)({type:"Diagnostics.open"}),"undefined"!=typeof browser&&self.close()}showDateHelp(){x.Z.track("settings_browser_tz_help"),this.showInformationPopup("date")}showWebrtcHelp(){x.Z.track("settings_webrtc_help"),this.showInformationPopup("webrtc")}async showInformationPopup(a){let o=document.querySelector("div.MainContainer");if(!o)return;const m=document.createElement("popup-description");m.theme=a,m.style.cssText="opacity:0",o.append(m);const e=m.animate([{opacity:0},{opacity:1}],{duration:400,easing:"linear"});await new Promise((a=>{e.onfinish=a})),m.style.cssText=""}}customElements.define("index-settings",qo);const Eo=i({on:"on",off:"off"});class $o extends r.oi{render(){return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      width: ${"en"===this.language?"61":"70"}px;
      height: 26px;
      cursor: pointer;
      position: relative;
    }
    :host *{
      cursor: pointer;
    }
    .BackgroundText{
      display: block;
      background: var( --brand-burgundy );
      border-radius: 13px;
      width: ${"en"===this.language?"61":"70"}px;
      height: 26px;
      line-height: 26px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset, 0 0 2px rgba(0, 0, 0, 0.15) inset;
      font-size: 13px;
      height: inherit;
      position: relative;
      text-transform: uppercase;
      transition: all 0.15s ease-out 0s;
    }
    .BackgroundText_Off,
    .BackgroundText_On{
      position: absolute;
      top: 0;
      transition: inherit;
    }
    .BackgroundText_Off{
      color: #fff;
      right: 8px;
    }
    .BackgroundText_On{
      color: white;
      left: 11px;
      opacity: 0;
      text-shadow: 0 1px rgba(0, 0, 0, 0.2);
    }
    :host(.on) .BackgroundText{
      background: var( --brand-green );
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15) inset, 0 0 3px rgba(0, 0, 0, 0.2) inset;
    }
    :host(.on) .BackgroundText_Off{
      opacity: 0;
    }
    :host(.on) .BackgroundText_On{
      opacity: 1;
    }

    .Circle{
      background: #fff;
      border-radius: 11px;
      height: 22px;
      width: 22px;
      left: 2px;
      position: absolute;
      top: 2px;
      transition: left 0.15s ease-out 0s;
    }
    .Circle:before{
      content: "";
      background: #f9f9f9 linear-gradient(to bottom, #eeeeee, white) repeat scroll 0 0;
      border-radius: 6px;
      box-shadow: 0 1px rgba(0, 0, 0, 0.02) inset;
      height: 12px;
      left: 50%;
      margin: -6px 0 0 -6px;
      position: absolute;
      top: 50%;
      width: 12px;
    }
    :host(.on) .Circle{
      box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
      left: ${"en"===this.language?"37":"46"}px; /* left: auto; right: 2px; */
    }
    </style>

    <div class="BackgroundText">
      <div class="BackgroundText_Off">${"en"===this.language?this.translations.off:"ВЫКЛ"}</div>
      <div class="BackgroundText_On">${"en"===this.language?this.translations.on:"ВКЛ"}</div>
    </div>
    <div class="Circle"></div>`}static get properties(){return{on:{type:Boolean,observer:"observeOn"},translations:{type:Object}}}get translations(){return Eo}constructor(){super(),this.language=window.language}updated(a){a.has("on")&&this.classList.toggle("on",this.on)}}customElements.define("c-switch",$o);const So=f().proxy.defaultCountry||"nl";class Co extends((0,$.$)(g.Z)(r.oi)){render(){return ra.call(this)}static get properties(){return{page:{type:String},preMenuView:{type:String},switchOn:{type:Boolean}}}constructor(){super(),this.page=g.Z.getStateSync().page,this.preMenuView="",this.switchOn=!1}firstUpdated(a){super.firstUpdated(a);const o=this.shadowRoot.querySelector("div.Switch");if(!o)throw new Error("main-index shadowRoot is empty");this.switch=o,this.switch.append(document.createElement(g.Z.getStateSync().page.replace(/\:/g,"-")))}async updated(a){if(!a.has("page"))return;const o=this.page,m=a.get("page");if(!m)return;const e=o.split(":"),t=m.split(":");if("index"!==e[0])return;const i=g.Z.getStateSync().userPac.mode,n=e.slice(1),r=t.slice(1),l="home"===n[0]?"left":"right",d=n[0]===r[0],u=this.switch.firstElementChild;if(!u)throw new Error("main-index has no child elements");if(d){if("filters"===n[0]&&n[1]){const a=n[1];u.country="proxy"===i?null:So,u.domain=a,u.selectedDomain=null}}else{const a=(()=>{switch(n[0]){case"filters":return"index-filters";case"home":return"index-home";case"locations":return"index-locations";case"settings":return"index-settings";case"smart settings hint":return"smart-settings-hint"}})();if(!a)return;const o=document.createElement(a);"locations"===n[0]&&n[1]&&(o.domain=n[1]),"filters"===n[0]&&n[1]&&(o.domain=n[1],o.country="proxy"===i?null:So),"left"===l?(this.switch.prepend(o),this.switch.style.cssText="margin-left:-100%;"):this.switch.append(o),"undefined"==typeof browser&&await new Promise((a=>{setTimeout(a,0)}));const m=this.switch.animate([{marginLeft:"left"===l?"-100%":"0%"},{marginLeft:"left"===l?"0%":"-100%"}],{duration:250,easing:"linear"});if(await new Promise(((a,o)=>{m.onfinish=a})),"locations"!==n[0]||n[1]||x.Z.track("countries"),u.remove(),this.switch.style.cssText="","undefined"!=typeof browser&&"index-locations"===a){var c,f,v;const a=null===(c=o.shadowRoot)||void 0===c||null===(f=c.querySelector)||void 0===f?void 0:f.call(c,".In");null==a||null===(v=a.focus)||void 0===v||v.call(a)}}}stateChanged({domain:a,userPac:o,page:m}){this.page=m,this.preMenuView=(()=>{const[e,t]=m.split(":");if("index"===e&&"filters"===t)return"help";if("index"===e&&"smart settings hint"===t)return"help";if(!a)return"switch";const i=[];for(const a of o.filters)a.disabled||"regex"===a.format||i.push(a.value);return i.includes(a)?"":"switch"})(),this.switchOn="proxy"===o.mode}openHelp(){(0,E.Z)({type:"counters.increase",property:"popup: smart settings: open help"}),(0,E.Z)({type:"create tab",options:"/pages/help/help.html"})}async switchClick(){const a=await g.Z.getStateAsync(),{userPac:o,user:m}=a,e=(()=>{const{experiments:o,ignoredExperiments:m}=a;return Object.fromEntries(Object.entries(o).filter((([a])=>!m.includes(a))))})(),t=await(async()=>{const a=Date.now(),o=await ma.Z.get("daysAfterInstall")||a;return Math.round((a-o)/864e5)})(),i=e[f().experiments.freeServersOverloaded.id];if("1"===i&&!m.premium&&"direct"===o.mode){const a=await ea();a&&(u.Z.full({category:"paywall_overload_330v2show",action:ia(Number(i)),label:String(t)}),await ta(a))}const n=new class{constructor(a){this._name=a;let o=K?Q[a]||0:aa++;this._id=o,K&&(Q[a]=o+1),K&&(0,J.Z)(`Delay. ${a} #${o} started`),K?this._startPoint=performance.now():(async()=>{this._startPoint=await(0,E.Z)({id:oa+o,name:a,type:"DelayRecord start"})})()}get startStamp(){return this._startPoint}end(){if(K){let a=Math.round(performance.now()-this._startPoint);return(0,J.Z)(`Delay. ${this._name} #${this._id} ended: ${a} milliseconds`),a}return(0,E.Z)({id:oa+this._id,name:this._name,type:"DelayRecord end"}),0}}("Big switch from "+(this.switchOn?"on":"off"));this.switchOn?await w.disable():await w.enable(),n.end()}}customElements.define("main-index",Co);class Po extends((0,$.$)(g.Z)(HTMLElement)){constructor(){super(),this.animation=!1,this.indexPage="index"===g.Z.getStateSync().page.split(":")[0];const a=this.attachShadow({mode:"open"}),o=Ba.dy`
    <style>
    ${n}
    :host{
      display: block;
      overflow: hidden;
      position: absolute;
      top:56px;
      width: 100%;
      bottom:0px;
      left:0px;
      text-align: left;
    }
    :host > .In{
      width: 100%;
      height: 100%;
      white-space: nowrap;
    }
    :host > .In > *{
      width: 100%;
      height: 100%;
      position: relative;
      display:inline-block;
      vertical-align:top;
      white-space:normal;
      overflow: hidden;
    }
    </style>

    <div class="In"></div>`;(0,Ba.sY)(o,a),this.ribbon=a.querySelector("div.In"),this.ribbon.append(document.createElement("main-index"))}async stateChanged({page:a}){const o=this.indexPage,m="index"===a.split(":")[0];if(m===o)return;var e,t;(this.indexPage=m,this.animation)?null===(e=this.animationObject)||void 0===e||null===(t=e.cancel)||void 0===t||t.call(e):this.animation=!0;for(const a of this.ribbon.children)"true"===a.dataset.old&&a.remove();const i=this.ribbon.lastElementChild;i.dataset.old="true";const n=document.createElement(m?"main-index":"main-login");n.style.cssText="visibility:hidden;",m?this.ribbon.prepend(n):this.ribbon.append(n),await n.updateComplete,m&&(this.ribbon.style.cssText="margin-left:-100%;"),await new Promise((a=>{setTimeout(a,0)})),n.style.cssText="";try{var r;const a=this.ribbon.animate([{marginLeft:m?"-100%":"0%"},{marginLeft:m?"0%":"-100%"}],{duration:250,easing:"linear"});this.animationObject=a,await new Promise(((o,m)=>{a.onfinish=o,a.oncancel=()=>{m(new Error("page-switch animation is broken"))}})),i.remove(),this.ribbon.style.cssText="",null===(r=n.onAnimationComplete)||void 0===r||r.call(n),this.animation=!1}catch(a){}}}customElements.define("page-switch",Po);const Bo=i({changeTimezone:{p1:"change_timezone_text_1",p2:"change_timezone_text_2",p3:"change_timezone_text_3"},whatIsWebrtc:{title:"what_is_webrtc_title",p1:"what_is_webrtc_text_1",p2:"what_is_webrtc_text_2",p3:"what_is_webrtc_text_3"}});class Io extends r.oi{render(){const a=window.language;return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      background: rgba(255, 255, 255, 0.5);
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }

    :host > .In > .In{
      position: relative;
      width: 100%;
      height: 100%;
    }
    :host > .In > .In > .In{
      position: absolute;
      left: 20px;
      right: 20px;
      top: 25px;
      bottom: 20px;
      overflow: auto;
    }
    :host > .In > .In > .In::-webkit-scrollbar{
      width: 6px;
    }
    :host > .In > .In > .In::-webkit-scrollbar-track{
      border-radius: 3px;
      background: rgba(255,255,255,0);
    }
    :host > .In > .In > .In::-webkit-scrollbar-thumb{
      border-radius: 3px;
      background: #aaa;
    }

    .Text{
      color: var( --brand-blue );
      font-size: 14px;
      line-height: 1.375;
    }
    .Title{
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .Text p + p{
      padding-top: 1em;
    }

    .Close{
      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 12px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      position: absolute;
      right: 11px;
      top: 11px;
      border: 5px solid transparent;
      cursor: pointer;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_black.svg' );
    }
    .Close::after{
      content: '';
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
    }
    </style>

    <div class="Overlay" @click="${this.close}">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In">
        <div class="In Text">
  ${(()=>"date"===this.theme?r.dy`
          <p>${"en"===a?Bo.changeTimezone.p1:"Эта опция изменяет часовой пояс браузера в соответствии с вашим виртуальным местоположением."}</p>
          <p>${"en"===a?Bo.changeTimezone.p2:"Некоторые веб-сайты определяют часовой пояс браузера с помощью функций Javascript. Если часовые пояса браузера и IP-адреса отличаются, это может быть признаком использования VPN-сервиса или других методов анонимизации."}</p>
          <p>${"en"===a?Bo.changeTimezone.p3:"При включенной опции сайты не могут определить разницу в часовых поясах."}</p>`:"webrtc"===this.theme?r.dy`
          <div class="Title">${"en"===a?Bo.whatIsWebrtc.title:"Что такое WebRTC?"}</div>
          <p>${"en"===a?Bo.whatIsWebrtc.p1:"WebRTC (web real time communication) - это протокол, позволяющий совершать аудио- и видеозвонки из браузера."}</p>
          <p>${"en"===a?Bo.whatIsWebrtc.p2:"Однако через WebRTC сайт также может узнать ваш реальный IP-адрес, даже если вы используете VPN (утечка WebRTC)."}</p>
          <p>${"en"===a?Bo.whatIsWebrtc.p3:"Эта опция предотвратит утечку WebRTC при включенном Browsec, но может снизить качество аудио- и видеозвонков. Вам решать, что для вас важнее."}</p>`:"")()}
        </div>
        <div class="Close" @click="${this.close}">X</div>
      </div>
    </div>
    `}static get properties(){return{theme:{type:String}}}constructor(){super(),this.theme=""}async close(){const a=this.animate([{opacity:1},{opacity:0}],{duration:400,easing:"linear"});await new Promise((o=>{a.onfinish=o})),this.remove()}}customElements.define("popup-description",Io);var Zo=m(4441);function Lo(){const a=this.timer||0;return Zo.dy`
  <style>
  ${n}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top: 56px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
  }
  :host > .In{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
  }
  :host > .In > .T{
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  :host > .In > .T > .In{
    width: 100%;
  }

  :host > .In > .B{
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0 0 25px;
  }
  :host > .In > .B > .In{
    width: 100%;
  }

  .Title{
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    padding: 25px 15px 0;
  }
  .Text{
    text-align: center;
    padding-bottom: 15px;
    font-size: 16px;
  }
  .Button_Out{
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .Button{
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    background-color: var( --brand-green );
    color: #fff;
    text-decoration: none;
    padding: 10px 30px;
    border-radius: 4px;
  }
  </style>

  <div class="In">
    <div class="T"><div class="In">
      <div class="Title">
        Sorry, our free servers are overloaded<br /><br />
        Please wait for ${a} seconds
      </div>
    </div></div>
    <div class="B"><div class="In">
      <div class="Text">or upgrade to Premium</div>
      <div class="Button_Out">
        <a 
          @click="${this.linkClick}"
          class="Button" 
          href="${this.premiumLink}"
          target="_blank"
        >Get Premium now!</a>
      </div>
   </div></div>
  </div>`}const To=new Map;for(const[a,{id:o,taskNumber:m}]of Object.entries(f().experiments))To.set(o,{name:a,taskNumber:m});class Do extends((0,$.$)(g.Z)(Zo.oi)){render(){return Lo.call(this)}static get properties(){return{timer:{type:Number}}}get premiumLink(){var a;const o=g.Z.getStateSync(),{experiments:m}=o,e=Date.now(),t=o.promotions.find((({from:a,till:o,tariffs:m})=>a<=e&&e<=o&&m)),i={plan_id:"biennial",utm_campaign:null!==(a=null==t?void 0:t.id)&&void 0!==a?a:"default_campaign",utm_medium:"paywall_overload",utm_source:"chromium extension"},n=[];for(const[a,o]of Object.entries(m)){if(!To.has(a))continue;const{taskNumber:m}=To.get(a);n.push(`exp${m}_${o}`)}return n.length&&(i.expvarid=n.join(",")),H({action:a=>Object.assign(a,i),storeState:o,url:W.Z.premium})}stateChanged({user:a}){a.premium&&this.remove()}constructor(){super(),(async()=>{const a=Date.now(),o=await ma.Z.get("daysAfterInstall")||a;this.daysAfterInstall=Math.round((a-o)/864e5)})()}linkClick(){const{experiments:a}=g.Z.getStateSync(),o=a[f().experiments.freeServersOverloaded.id];u.Z.full({category:"paywall_overload_330v2click",action:ia(Number(o)),label:String(this.daysAfterInstall)})}}customElements.define("free-servers-overloaded",Do);const Oo=i({okIGotIt:"ok_i_got_it",smartSettingsControl:"smart_settings_allow_you_to_control",smartSettingsFeatures1:"smart_settings_features_1",smartSettingsFeatures2:"smart_settings_features_2",smartSettingsFeatures3:"smart_settings_features_3",withSmartSettingsYouCan:"with_smart_settings_you_can"});class Fo extends r.oi{render(){const a=window.language;return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 4;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }
    :host > .In > .In{
      position: relative;
      padding: 27px 20px;
    }

    .Title{
      font-size: 18px;
      padding-bottom: 15px;
      font-weight: 600;
    }
    .Description{
      padding-bottom: 20px;
    }
    ul{
      list-style: none;
    }
    ul > li{
      padding-left: 20px;
      position: relative;
    }
    ul > li::after{
      content: '';
      display: block;
      background: url('/images/popup-help/check.svg') 0 0 no-repeat;
      background-size: 100% 100%;
      width: 14px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:10px;
      position: absolute;
      top: 5px;
      left: 0;
    }
    ul > li + li{
      border-top: 7px solid transparent;
    }
    .Button{
      text-align: center;
      padding-top: 15px;
    }
    .Button input{
      display: block;
      margin: 0 auto;
      box-sizing: content-box;
      height: 45px;
      line-height: 45px;
      border: 0;
      cursor: pointer;
      min-width: 200px;
      padding: 0 15px;
      background: var( --brand-green );
      text-align: center;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }

    .Close{
      position: absolute;
      top: 16px;
      right: 16px;
      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 12px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      cursor: pointer;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_black.svg' );
    }
    .Close::after{
      content: '';
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
    }
    </style>

    <div class="Overlay">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In">
        <div class="Title">${"en"===a?Oo.smartSettingsControl:"Умные настройки позволяют лучше контролировать Browsec"}</div>
        <div class="Description">${"en"===a?Oo.withSmartSettingsYouCan:"С Умными настройками вы можете:"}</div>
        <div class="Features">
          ${"en"===a?r.dy`
          <ul>
            <li>${Oo.smartSettingsFeatures1}</li>
            <li>${Oo.smartSettingsFeatures2}</li>
            <li>${Oo.smartSettingsFeatures3}</li>
          </ul>`:r.dy`
          <ul>
            <li>Включать Browsec для выбранных сайтов</li>
            <li>Включать Browsec для всех сайтов, кроме выбранных</li>
            <li>Включать разные страны для разных сайтов</li>
          </ul>`}
        </div>
        <div class="Button">
          <input 
            type="button" 
            value="${"en"===a?Oo.okIGotIt:"Понятно"}" 
            @click="${this.okClick}"
          />
        </div>
        <div class="Close" @click="${this.close}">X</div>
      </div>
    </div>`}close(a){a.stopPropagation(),x.Z.track("smartSettings_intro_close"),this.closePopup()}async closePopup(){const a=this.animate([{opacity:1},{opacity:0}],{duration:400,easing:"linear"});await new Promise((o=>{a.onfinish=o})),this.style.cssText="display:none"}okClick(a){a.stopPropagation(),x.Z.track("smartSettings_intro_ok"),this.closePopup()}}customElements.define("popup-help",Fo);const Ao=i({text1:"locations_help_1",text2:"locations_help_2",text3:"locations_help_3"});class No extends r.oi{render(){const a=window.language;return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      background: rgba(255, 255, 255, 0.5);
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }

    :host > .In > .In{
      position: relative;
      width: 100%;
      height: 100%;
    }
    :host > .In > .In > .In{
      position: absolute;
      left: 20px;
      right: 20px;
      top: 25px;
      bottom: 20px;
      overflow: auto;
    }
    :host > .In > .In > .In::-webkit-scrollbar{
      width: 6px;
    }
    :host > .In > .In > .In::-webkit-scrollbar-track{
      border-radius: 3px;
      background: rgba(255,255,255,0);
    }
    :host > .In > .In > .In::-webkit-scrollbar-thumb{
      border-radius: 3px;
      background: #aaa;
    }

    .Text{
      color: var( --brand-blue );
      font-size: 14px;
      line-height: 1.375;
    }
    .Title{
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .Text p + p{
      padding-top: 1em;
    }

    .Close{
      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 12px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      position: absolute;
      right: 11px;
      top: 11px;
      border: 5px solid transparent;
      cursor: pointer;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_black.svg' );
    }
    .Close::after{
      content: '';
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
    }
    </style>

    <div class="Overlay" @click="${this.close}">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In">
        <div class="In Text">
        ${"en"===a?r.dy`
          <p>${Ao.text1}</p>
          <p>${Ao.text2}</p>
          <p>${Ao.text3}</p>`:r.dy`
          <p>Browsec может установить безопасное соединение через свои серверы в любой из этих стран. С IP-адреса, принадлежащего выбранной стране, вы будете просматривать веб-страницы так, как будто действительно там находитесь.</p>
          <p>Чтобы получить доступ к содержимому, доступному только для определенной страны, выберите соответствующую страну из списка.</p>
          <p>Чтобы скрыть свое местоположение (для конфиденциальности или доступа к контенту, запрещенному в вашей стране), можно выбрать любую страну. Чем ближе виртуальная страна к реальной, тем выше скорость соединения.</p>`}
        </div>
        <div class="Close" @click="${this.close}">X</div>
      </div>
    </div>`}async close(){const a=this.animate([{opacity:1},{opacity:0}],{duration:400,easing:"linear"});await new Promise((o=>{a.onfinish=o})),this.remove()}}customElements.define("popup-locations-information",No);function Ro(){const a="v"+this.view;return r.dy`
  <style>
  ${n}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100%;
    background: rgba(255,255,255,0.7);
  }
  .Parent{
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .Parent.v1,
  .Parent.v4,
  .Parent.v7{
    background: linear-gradient(-20deg, #bedcbf, #f8fef8);
  }
  .Parent.v2,
  .Parent.v5{
    background: linear-gradient(-20deg, #f5d4c0, #b8b8b8);
  }
  .Parent.v3,
  .Parent.v6{
    background: #fff;
  }
  .Parent > .B{
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0 10px 5px;
  }

  .Title{
    flex-grow: 0;
    flex-shrink: 0;
    text-align: center;
    padding: 15px 10px 0px;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
  }

  .Close{
    position: absolute;
    top: 0px;
    right: 0;
    width: 10px;
    padding-top: 10px;
    border: 11px solid transparent;
    height: 0;
    overflow: hidden;
    background: url( '/images/popup_close_2.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_2.svg#white' );
  }
  .Close::after{
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
  }

  .Steps{
    padding: 0 50px;
  }
  .Steps > .E + .E{
    padding-top: 25px;
  }
  .StepTitle{
    font-size: 15px;
    font-weight: bold;
  }
  .StepText{
    font-size: 12px;
  }

  .DontRemind{
    overflow: hidden;
    padding: 0 0 5px;
  }
  .DontRemind > input[type="checkbox"]{
    float: left;
    margin: 3px 0 0;
    width: 13px;
    height: 13px;
    opacity: 0.5;
  }
  .DontRemind > label{
    display: block;
    margin: 0 0 0 20px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
  }

  .TwoButtons{
    display: flex;
    
    width: 100%;
    justify-content: space-between;
    padding: 0 0 5px;
  }

  .TwoButtons > .E{
    box-sizing: border-box;
  }
  .TwoButtons > .E:first-child{
    width: 50%;
    padding: 0 7px 0 0;
  }
  .TwoButtons > .E:last-child{
    width: 50%;
    padding: 0 0 0 7px;
  }

  .TwoButtons_Button{
    display: block;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
  .TwoButtons_Button.continue{
    border: 1px solid #69726a;
  }
  .TwoButtons_Button.upgrade{
    border: 1px solid var( --brand-green );
    color: #000;
    font-weight: bold;
    font-size: 16px;
  }
  .Parent.v1 .TwoButtons_Button.upgrade,
  .Parent.v6 .TwoButtons_Button.upgrade,
  .Parent.v7 .TwoButtons_Button.upgrade{
    background: var( --brand-green );
    border-color: var( --brand-green );
  }
  .Parent.v2 .TwoButtons_Button.upgrade{
    background: #efa524;
    border-color: #efa524;
  }
  .Parent.v6 .TwoButtons_Button.upgrade{
    color: #fff;
  }
  
  .OneButton{
    display: block;
    background: var( --brand-green );
    text-align: center;
    border-radius: 4px;
    position: relative;
    color: #fff;
    padding: 8px 0;
    cursor: pointer;
    text-decoration: none;
  }
  .Parent.v5 .OneButton{
    background: #efa524;
    color: #000;
  }

  .OneButton_Title{
    display: block;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
  }
  .OneButton_Price{
    display: block;
    font-size: 14px;
  }
  .Guarantee{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }

  .Features{
    padding: 0px 35px 0px 35px;
    color: #7a7c7f;
  }
  .Features > .E{
    min-height: 72px;
    box-sizing: border-box;
    padding: 2px 0 0px 90px;
    position: relative;
  }
  .Features > .E::before{
    content: "";
    overflow:hidden;
    font-size:0;
    text-indent:-9999px;
    height:0;
    width: 60px;
    padding-top:60px;
    position: absolute;
    left: 4px;
    top: 8px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .Features > .E.countries::before{
    background-image: url( '/images/promos/circles.svg#countries' );
  }
  .Features > .E.speed::before{
    background-image: url( '/images/promos/circles.svg#speed' );
  }
  .Features > .E.servers::before{
    background-image: url( '/images/promos/circles.svg#servers' );
  }

  .Feature_Name{
    color: #28334e;
    font-size: 15px;
    margin: 9px 0 2px;
    line-height: 1.29;
  }
  .Feature_Text{
    font-size: 13px;
    line-height: 1.25;
  }
  </style>

  <div class="Parent ${a}">
    <div class="Title">
      Upgrade to Browsec Premium
    </div>
    <div class="C">
      ${(()=>["1","2","4","5","7"].includes(this.view)?r.dy`
      <div class="Steps">
        <div class="E">
          <div class="StepTitle">Speed up your internet connection</div>
          <div class="StepText">${(()=>"7"===this.view?r.dy`enjoy your favorite shows and channels while abroad`:r.dy`to enjoy streaming services`)()}</div>
        </div>
        <div class="E">
          <div class="StepTitle">Get access to more virtual locations</div>
          <div class="StepText">to unblock more websites</div>
        </div>
        <div class="E">
          <div class="StepTitle">Get priority support</div>
          <div class="StepText">
            Requests from premium users are always processed first
          </div>
        </div>
      </div>`:r.dy`
      <div class="Features">
        <div class="E countries">
          <div class="Feature_Name">Premium locations</div>
          <div class="Feature_Text">
            Access the Internet via additional Premium locations.
          </div>
        </div>
        <div class="E speed">
          <div class="Feature_Name">Turbo speed</div>
          <div class="Feature_Text">
            Premium users enjoy dedicated traffic lanes.
          </div>
        </div>
        <div class="E servers">
          <div class="Feature_Name">Premium servers</div>
          <div class="Feature_Text">
            Our best-in-class servers guarantee top performance.
          </div>
        </div>
      </div>`)()}
    </div>
    
    <div class="B">
      <div class="DontRemind">
        <input 
          type="checkbox" 
          id="DontRemind" 
          ?checked="${this.dontRemindChecked}" 
          @change="${this.dontRemindClick}"/>
        <label for="DontRemind">Don't remind me again</label>
      </div>

      ${(()=>["1","2","6","7"].includes(this.view)?r.dy`
      <div class="TwoButtons">
        <div class="E">
          <div 
            class="TwoButtons_Button continue" 
            @click="${this.freeClick}"
          >Continue in free mode</div>
        </div>
        <div class="E">
          <a 
            class="TwoButtons_Button upgrade"
            href="${this.payLink}"
            target="_blank"
            @click="${this.premiumClick}"
          >Upgrade now</a>
        </div>
      </div>`:"")()}

      ${(()=>["3","4","5"].includes(this.view)?r.dy`
      <a
        class="OneButton"
        href="${this.payLink}"
        target="_blank"
        @click="${this.premiumClick}"
      >
        <span class="OneButton_Title">Get Premium Now!</span>
        <span class="OneButton_Price">only ${this.price} per month</span>
      </a>
      <div class="Guarantee">7 days money back guarantee</div>`:"")()}
      
    </div>

    <div class="Close" @click="${this.close}">x</div>
  </div>`}const Mo=f().experiments.premiumOverlayOnPopupOpen.id;class Vo extends((0,$.$)(g.Z)(r.oi)){render(){return Ro.call(this)}static get properties(){return{_showCount:{type:Number},dontRemindChecked:{type:Boolean},payLink:{type:String},price:{type:String},view:{type:String}}}get showCount(){return this._showCount}set showCount(a){this._showCount=a,(async()=>{const{daysAfterInstall:a,experiments:o}=g.Z.getStateSync(),m=o[Mo],e=m?ia(Number(m)):void 0;this.letterVariant=e;const t=e?"252"+e.toLowerCase():void 0,i={utm_source:"chromium extension",utm_campaign:"default_campaign",utm_medium:"premium_openoffer",plan_id:"biennial",instd:a,offernum:String(this.showCount)};t&&Object.assign(i,{expvarid:t}),this.payLink=((a,o=(a=>a))=>(0,U.Z)(a,(a=>Object.assign(o(a),{instd:g.Z.getStateSync().daysAfterInstall}))))(W.Z.premium,(a=>Object.assign(a,i)))})()}constructor(){super(),this.dontRemindChecked=!1,this.price="$2.99",this.view="1"}stateChanged({prices:a,priceTrial:o}){this.price="$"+Aa({prices:a,priceTrial:o}).price}async close(){await ma.Z.set("Experiment 252: checkbox checked",this.dontRemindChecked),this.remove()}dontRemindClick(){this.dontRemindChecked=!this.dontRemindChecked}async freeClick(){await ma.Z.set("Experiment 252: checkbox checked",this.dontRemindChecked),this.remove()}async premiumClick(){const a=this.letterVariant;"number"==typeof this.showCount&&a&&u.Z.full({category:"Exp252_Get_premium",action:a,label:String(this.showCount-1)}),await ma.Z.set("Experiment 252: checkbox checked",this.dontRemindChecked),self.close()}}customElements.define("onstart-premium-overlay",Vo);function Uo(){const a=g.Z.getStateSync(),o={expvarid:(()=>{switch(this.mode){case"standard":return"262b";case"with price":return"262c";case"continue":return"262d"}})(),utm_source:"chromium extension",utm_medium:"chooseplan",utm_campaign:"default_campaign",instd:a.daysAfterInstall},m=H({action:a=>Object.assign(a,o,{plan_id:"monthly"}),storeState:a,url:W.Z.premium}),e=H({action:a=>Object.assign(a,o,{plan_id:"annual"}),storeState:a,url:W.Z.premium}),t=H({action:a=>Object.assign(a,o,{plan_id:"biennial"}),storeState:a,url:W.Z.premium});return r.dy`
  <style>
  ${n}
  :host{
    display: block;
    font-size: 14px;
    line-height: 1.3;
    color: var( --brand-blue );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  :host > .Overlay{
    position: absolute;
    top:0px;right:0px;bottom:0px;left:0px;
    overflow: hidden;
    text-indent: -9999px;
    font-size: 0;
    background: rgba(255, 255, 255, 0.5);
  }
  :host > .In{
    position: absolute;
    top: 56px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border: 1px solid transparent;
    border-width: 6px 5px 5px;
  }
  :host > .In::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.99);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    font-size: 0;
    overflow: hidden;
  }

  :host > .In > .In{
    position: relative;
    height: 100%;
  }

  .Description{
    color: var( --brand-blue );
    font-size: 16px;
    line-height: 1.375;
    padding: 0 25px;
    text-align: center;
  }

  .Close{
    position: absolute;
    top: 16px;
    right: 16px;
    background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:12px;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_black.svg' );
  }
  .Close::after{
    content: '';
    display: block;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
  }

  .Title{
    text-align: center;
    padding: 10px 5px 15px;
    font-weight: bold;
    font-size: 18px;
  }

  .Columns{
    display: flex;
    padding: 0 0 0;
  }
  .Columns > .E{
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
    width: calc( 100% / 3 );
    padding: 0 5px;
  }
  .Columns > .E ~ .E{
    border-left: 1px solid #e6e6e6;
  }

  .Icon{
    margin: 0 auto;
    position: relative;
    box-sizing: content-box;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: calc( 204px * 0.2 );
  }
  .Icon::after{
    content: '';
    display: block;
    width: calc( 90px * 0.2 );
    padding-top: calc( 90px * 0.2 );
    height: 0;
    overflow: hidden;
    background: url('/images/buy_premium_sprite.svg#star') 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
  }

  .Icon.speed{
    background-image: url('/images/buy_premium_sprite.svg#speed');
    width: calc( 203px * 0.2 );
    border-right: calc( 6px * 0.2 ) solid transparent;
  }
  .Icon.speed::after{
    right: calc( -6px * 0.2 );
  }

  .Icon.servers{
    background-image: url('/images/buy_premium_sprite.svg#servers');
    width: calc( 208px * 0.2 );
    border-right: calc( 11px * 0.2 ) solid transparent;
  }
  .Icon.servers::after{
    right: calc( -11px * 0.2 );
  }

  .Icon.locations{
    background-image: url('/images/buy_premium_sprite.svg#locations');
    width: calc( 142px * 0.2 );
    border-right: calc( 39px * 0.2 ) solid transparent;
  }
  .Icon.locations::after{
    right: calc( -39px * 0.2 );
  }

  .ColumnTitle{
    font-weight: bold;
    text-align: center;
    padding: 10px 0 3px;
    font-size: 12px;
    letter-spacing: -0.5px;
    margin: 0 -5px;
    text-transform: uppercase;
  }
  .ColumnDescription{
    text-align: center;
    font-size: 11px;
    line-height: 1.3;
    min-height: 43px;
  }
  .Separator{
    width: calc( 100% / 3 );
    height: 1px;
    overflow: hidden;
    background: #1c304e;
    margin: 10px auto 10px;
  }

  .FreePremiumSpeed{
    margin-right: -5px;
  }
  .FreePremiumSpeed > table > tbody > tr:last-child > td{
    vertical-align: middle;
  }
  .FreePremiumSpeed > table > tbody > tr > td ~ td{
    padding-left: 3px;
  }
  .FreePremiumSpeed_Title{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 11px;
  }
  .FreePremiumSpeed_Title.feature{
    color: var( --brand-green );
  }

  .FreePremiumSpeed_Value_Number{
    display: inline-block;
    vertical-align: baseline;
    font-weight: bold;
    font-size: 15px;
  }
  .FreePremiumSpeed_Value_Text{
    display: inline-block;
    vertical-align: baseline;
    font-size: 11px;
    padding-left: 1px;
  }
  .FreePremiumSpeed_Value_Number.feature{
    color: var( --brand-green );
    font-size: 19px;
  }
  .FreePremiumSpeed_Value_Text.feature{
    color: var( --brand-green );
  }
  .FreePremiumSpeed_Arrow{
    width: calc( 45px * 0.35 );
    height: calc( 33px * 0.35 );
    background: url( '/images/buy_premium_sprite.svg#arrow_right' ) 0 0 no-repeat
  }

  .ServerCount{
    margin: 0 -2px;
    text-align: center;
  }
  .ServerCount > .E{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    width: 50%;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
  }
  .ServerCount > .E.free{
    padding-right: 2px;
  }
  .ServerCount > .E.premium{
    padding-left: 2px;
    color: var( --brand-green );
  }

  .Servers_Icons{
    margin-right: -5px;
  }
  .Servers_Icons > .E{
    display: inline-block;
    vertical-align: top;
  }
  .Servers_Icons > .E ~ .E{
    padding-left: 8px;
  }
  .Servers_Icons_Title{
    padding-bottom: 5px;
    font-size: 11px;
    line-height: 1;
    font-weight: bold;
    color: #494b4d;
    text-transform: uppercase;
  }
  .Servers_Icons_Title.premium{
    color: var( --brand-green );
  }
  .Servers_Icon{
    height: calc( 119px * 0.43 );
    display: flex;
    align-items: flex-end;
  }
  .Servers_Icon::after{
    content: '';
    display: block;
    width: calc( 120px * 0.43 );
    height: 0;
    overflow: hidden;
  }
  .Servers_Icon.free::after{
    background: url( '/images/buy_premium_sprite.svg#free_user' ) 0 0 no-repeat;
    background-size: 100% 100%;
    padding-top: calc( 109px * 0.43 );
  }
  .Servers_Icon.premium::after{
    background: url( '/images/buy_premium_sprite.svg#premium_user' ) 0 0 no-repeat;
    background-size: 100% 100%;
    padding-top: calc( 116px * 0.43 );
  }

  .ExtraDescription{
    font-size: 11px;
    line-height: 1.3;
    padding-top: 6px;
    text-align: center;
  }

  .Buttons{
    position: absolute;
    left: 15px;
    bottom: 15px;
    right: 15px;
    display: flex;
    justify-content: space-between;
  }
  .Buttons > .E{
    flex-grow: 0;
  }

  .ButtonFree{
    display: inline-flex;
    align-items: center;
    height: calc(100% - 2px);
    border: 1px solid transparent;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    color: #9b9b9b;
    border-color: #9b9b9b;
  }
  .ButtonFree > .In{}
  .ButtonPremium{
    display: inline-block;
    vertical-align: top;
    padding: 7px 21px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    line-height: 1.1;
    color: #fff;
    background: var( --brand-green );
    text-align: center;
    text-decoration: none;
  }
  .ButtonPremium_Price{
    display: block;
    font-size: 13px;
    font-weight: normal;
    padding-top: 2px;
  }

  .Plans{
    padding: 0 5px 0;
  }
  .Plans > .In{
    margin: 0 0 0 -2px;
    display: flex;
  }
  .Plans > .In > .E{
    width: calc(100% / 3 - 2px);
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0 0 0 2px;
  }

  .Plan{
    background: #E5EBEF;
    padding: 15px 10px 15px;
  }
  .Plan.monthly{
    margin: 26px 0 0;
  }
  .Plan.annual{
    border: 1px solid var( --brand-green );
    padding: 0 10px 15px;
    border-radius: 3px;
  }
  .Plan.biennial{
    margin: 26px 0 0;
  }

  .Plan_Head{
    margin: 0 -10px;
    overflow: hidden;
    text-align: center;
    padding: 0 0 15px;
  }
  .Plan_Head > .In{
    padding: 0 2px 0;
    background: var( --brand-green );
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 -3px 4px 5px rgba(0,0,0,0.3);
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
  }

  .Plan_Title{
    text-align: center;
    text-transform: uppercase;
    font-size: 17px;
    line-height: 1.3588;
    color: #494b4d;
  }
  .Plan.annual .Plan_Title{
    font-size: 21px;
    line-height: 1.1;
  }

  .Plan_Price{
    display:flex;
    align-items:center;
    text-align: center;
    padding: 12px 0 12px;
    margin: 0 -10px;
    line-height: 34px;
  }
  .Plan_Price_Value{
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 17px;
    color: var( --brand-green );
  }
  .Plan_Price_Period{
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 11px;
    padding: 4px 0 0 1px;
    color: var( --brand-green );
  }

  .Plan_Percent{
    display: inline-block;
    vertical-align: middle;
    width: 34px;
    background: url( '/images/discount_other.svg#green' ) 50% 50% no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-size: 11px;
    margin-right: 4px;
  }
  .Plan_Percent::after{
    content: '%';
  }

  .Plan_Button{
    display: block;
    text-align: center;
    color: #fff;
    background: #1C304E;
    border-radius: 2px;
    font-size: 14px;
    line-height: 28px;
    margin-top: 2px;
    text-decoration: none;
  }
  .Plan.annual .Plan_Button{
    background: var( --brand-green );
    line-height: 32px;
  }

  .SecurePayment{
    display: flex;
    justify-content: center;
    padding: 12px 0 0;
  }
  .SecurePayment_Text{
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-size: 11px;
  }
  .SecurePayment_Text::after{
    content: '';
    display: block;
    background: url( '/images/account_locked_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: calc( 40px * 0.27 );
    height: calc( 53px * 0.27 );
    overflow: hidden;
    position: absolute;
    top: calc( 50% - 53px * 0.27 / 2 - 2px );
    left: calc( -40px * 0.27 - 5px );
  }

  .PaymentSystems{
    display: inline-block;
    vertical-align: middle;
    padding: 0 0 0 6px;
    margin: -2px 0 0;
  }
  .PaymentSystems > .E{
    display: inline-block;
    vertical-align: middle;
    height: 0;
    overflow:hidden;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
  }
  .PaymentSystems > .E ~ .E{
    margin-left: 7px;
  }
  .PaymentSystems > .E.paypal{
    width: calc(100px * 0.45);
    padding-top: calc(27px * 0.45);
    background-image: url( '/images/payment_systems.svg#paypal' );
  }
  .PaymentSystems > .E.visa{
    width: calc(62px * 0.45);
    padding-top: calc(20px * 0.45);
    background-image: url( '/images/payment_systems.svg#visa' );
  }
  .PaymentSystems > .E.mastercard{
    width: calc(50px * 0.45);
    padding-top: calc(30px * 0.45);
    background-image: url( '/images/payment_systems.svg#mastercard' );
  }
  .PaymentSystems > .E.americanExpress{
    width: calc(30px * 0.45);
    padding-top: calc(30px * 0.45);
    background-image: url( '/images/payment_systems.svg#american_express' );
  }

  .YouWontBeCharged{
    text-align: center;
    padding: 12px 7px 0;
    font-size: 14px;
  }

  .Back{
    position: absolute;
    left: 15px;
    bottom: 15px;
    padding: 0 0 0 20px;
    cursor: pointer;
    font-size: 17px;
  }
  .Back::after{
    content: '';
    display: block;
    background: url( '/images/arrow_left.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: calc(50% - 16px / 2);
    width: 9px;
    height: 16px;
    overflow: hidden;
  }
  </style>

  <div class="Overlay">&nbsp;</div>
  <div class="In"><div class="In">
    ${(()=>"main"===this.view?r.dy`
        <div class="Title">
          Get the most out of Browsec<br/>
          with Premium account
        </div>
        <div class="Columns">
          <div class="E">
            <div class="Icon speed"></div>
            <div class="ColumnTitle">TURBO SPEED</div>
            <div class="ColumnDescription">
              Premium Users Enjoy Dedicated
              Traffic Lanes
            </div>
            <div class="Separator"></div>
            <div class="FreePremiumSpeed"><table><tbody>
              <tr>
                <td><div class="FreePremiumSpeed_Title">Free:</div></td>
                <td></td>
                <td><div class="FreePremiumSpeed_Title feature">Premium:</div></td>
              </tr>
              <tr>
                <td><div class="FreePremiumSpeed_Value"><!--
                --><div class="FreePremiumSpeed_Value_Number">1</div><!--
                --><div class="FreePremiumSpeed_Value_Text">mbps</div><!--
              --></div></td>
                <td><div class="FreePremiumSpeed_Arrow"></div></td>
                <td><div class="FreePremiumSpeed_Value"><!--
                --><div class="FreePremiumSpeed_Value_Number feature">100</div><!--
                --><div class="FreePremiumSpeed_Value_Text feature">mbps</div><!--
              --></div></td>
              </tr>
            </tbody></table></div>
          </div>
          <div class="E">
            <div class="Icon locations"></div>
            <div class="ColumnTitle">PREMIUM LOCATIONS</div>
            <div class="ColumnDescription">
              Access the Internet via Additional
              Premium Locations
            </div>
            <div class="Separator"></div>
            <div class="ServerCount"><!--
            --><div class="E">4<br/>free locations</div><!--
            --><div class="E premium">42<br/>premium locations</div><!--
          --></div>
          </div>
          <div class="E">
            <div class="Icon servers"></div>
            <div class="ColumnTitle">PREMIUM SERVERS</div>
            <div class="ColumnDescription">
              Our Best-in-Class Servers Guarantee
              Top Perfomance
            </div>
            <div class="Separator"></div>
            <div class="Servers_Icons"><!--
            --><div class="E">
                <div class="Servers_Icons_Title">Free:</div>
                <div class="Servers_Icon free"></div>
              </div><!--
            --><div class="E">
                <div class="Servers_Icons_Title premium">Premium:</div>
                <div class="Servers_Icon premium"></div>
              </div><!--
          --></div>
          </div>
        </div>
        <div class="Buttons">
          <div class="E L">
            <div class="ButtonFree" @click="${this.freeClick}"><div class="In">
              Start with free
            </div></div>
          </div>
          <div class="E R">
            ${(()=>"continue"===this.mode?r.dy`
            <div class="ButtonPremium" @click="${this.premiumClick}">
              Continue
            </div>`:r.dy`
            <a 
              href="${t}" 
              target="_blank"
              class="ButtonPremium" 
              @click="${this.premiumClick}"
            >
              <span>Get Premium</span>
              ${(()=>"standard"===this.mode?"":r.dy`
              <span class="ButtonPremium_Price">for $2.99 a month</span>`)()}
            </a>`)()}
          </div>
        </div>

        <div class="Close" @click="${this.close}">X</div>`:r.dy`
      <div class="Title">Pick the right Premium plan for you</div>
      <div class="Plans"><div class="In">
        <div class="E">
          <div class="Plan monthly">
            <div class="Plan_Title">Monthly</div>
            <div class="Plan_Price"><!--
           --><span class="Plan_Price_Value">$6.99</span><!--
           --><span class="Plan_Price_Period">/mo</span><!--
         --></div>
            <a 
              href="${m}" 
              target="_blank" 
              class="Plan_Button"
              @click="${this.planClick}"
            >Choose Plan</a>
          </div>
        </div>
        <div class="E">
          <div class="Plan annual">
            <div class="Plan_Head"><div class="In">Most Popular</div></div>
            <div class="Plan_Title">Annual</div>
            <div class="Plan_Price"><!--
           --><span class="Plan_Percent">-52</span><!--
           --><span class="Plan_Price_Value">$3.33</span><!--
           --><span class="Plan_Price_Period">/mo</span><!--
         --></div>
            <a 
              href="${e}" 
              target="_blank" 
              class="Plan_Button"
              @click="${this.planClick}"
            >Choose Plan</a>
          </div>
        </div>
        <div class="E">
          <div class="Plan biennial">
            <div class="Plan_Title">2 Years</div>
            <div class="Plan_Price"><!--
           --><span class="Plan_Percent">-57</span><!--
           --><span class="Plan_Price_Value">$2.99</span><!--
           --><span class="Plan_Price_Period">/mo</span><!--
         --></div>
            <a 
              href="${t}" 
              target="_blank" 
              class="Plan_Button"
              @click="${this.planClick}"
            >Choose Plan</a>
          </div>
        </div>
      </div></div>
      <div class="SecurePayment">
        <div class="SecurePayment_Text">Secure payment using:</div>
        <div class="PaymentSystems"><!--
       --><div class="E paypal"></div><!--
       --><div class="E visa"></div><!--
       --><div class="E mastercard"></div><!--
       --><div class="E americanExpress"></div><!--
     --></div>
      </div>
      <div class="YouWontBeCharged">
        You won’t be charged at this point. 
        Selecting one of the above will get you on our site for checkout.
      </div>
      <div class="Back" @click="${this.back}">Back</div>`)()}
  </div></div>`}const Ho=f().experiments.premiumComparisonOnFirstPopup.id;class Wo extends r.oi{render(){return Uo.call(this)}static get properties(){return{mode:{type:String},view:{type:String}}}constructor(){super(),this.mode="standard",this.view="main"}back(){this.view="main"}async close(){await ma.Z.set("Experiment 262: shown",!0),this.remove()}async freeClick(){await ma.Z.set("Experiment 262: shown",!0),this.remove()}async planClick(){const{experiments:a}=g.Z.getStateSync(),o=a[Ho];if(!o)return;const m=ia(Number(o));u.Z.full({category:"Exp262_Get_premium",action:m}),await ma.Z.set("Experiment 262: shown",!0),self.close()}async premiumClick(){const{experiments:a}=g.Z.getStateSync(),o=a[Ho];if(!o)return;const m=ia(Number(o));"continue"===this.mode?(u.Z.full({category:"Exp262_Screen1_continue",action:m}),this.view="prices"):(u.Z.full({category:"Exp262_Get_premium",action:m}),await ma.Z.set("Experiment 262: shown",!0),self.close())}}customElements.define("popup-buy-premium",Wo);const Xo=[{currency:"USD",value:71.99,duration:24}];let Go=i({browsecPremium:"browsec_premium",cancelSubscriptionAtAnyTime:"cancel_subscription_at_any_time",forOnly:"for_only",moneyBackGuarantee:"7_days_money_back_guarantee",oneSmartSettingDescription1:"one_smart_setting_description_1",oneSmartSettingDescription2:"one_smart_setting_description_2",oneSmartSettingDescriptionList1:"one_smart_setting_description_list_1",oneSmartSettingDescriptionList2:"one_smart_setting_description_list_2",youCanHaveOnlyOneSmartSetting:"you_can_have_only_1_smart_setting"});function Yo(){const a=window.language,o=(()=>("en"===a?(0,e.Z)("only_X_per_month"):"всего за XXX в месяц").replace(/XXX/g,this.currency+this.price))();return r.dy`
  <style>
  ${n}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top:0px;right:0px;left:0px;
    height: 100%;
    background: #fff;
  }

  .Head{
    background: var( --brand-blue );
    color: #fff;
    text-align: center;
    font-size: 17px;
    line-height: 36px;
    font-weight: 500;
    position: relative;
    padding: 9px 10px 9px;
  }

  .Close{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -16px;
    width: 10px;
    padding-top: 10px;
    border: 11px solid transparent;
    height: 0;
    overflow: hidden;
    background: url( '/images/popup_close_2.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_2.svg#white' );
  }
  .Close::after{
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
  }

  .Text{
    padding: 20px 25px;
    color: var( --brand-blue );
    line-height: 1.35;
  }
  .Title{
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 15px;
  }
  .Description{
    font-size: 16px;
  }
  .Description p{
    padding-bottom: 1em;
  }
  .Description ul{
    list-style: none;
  }
  .Description ul > li{
    position: relative;
    padding-left: 20px;
  }
  .Description ul > li::after{
    content: '';
    background: url( '/images/popup-help/check.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 9px;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    left: 0;
  }

  .Button_Out{
    /* position: absolute;right:5px;bottom:5px;left:5px; */
    padding: 0 5px;
  }
  .Button{
    display: table;
    width: 100%;
    height: 60px;
    background: var( --brand-green );
    text-align: center;
    border-radius: 4px;
    position: relative;
  }
  .Button:link,
  .Button:visited,
  .Button:hover,
  .Button:active{
    color: #fff;
    text-decoration: none;
  }
  .Button *{
    cursor: pointer;
  }
  .Button > .In{
    display: table-cell;
    vertical-align: middle;
  }

  .Button_Name{
    display: block;
    font-size: 16px;
    font-weight: 600;
  }
  .Button_Name.uppercase{
    text-transform: uppercase;
  }

  .Button_Price{
    display: block;
    font-size: 14px;
  }
  .Button_Price_Value{
    font-size: 14px;
    font-weight: bold;
  }
  .Button_Price_OldValue{
    font-size: 12px;
    text-decoration: line-through;
    color: #9aca9f;
    margin-left: 3px;
  }

  .Button_Discount{
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 25px;
  }
  .Button_Discount > .In{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    background: url( '/images/discount.svg' ) 0 0 no-repeat;
    position: absolute;
    right: 0;
    top: calc(50% - 54px / 2);
  }
  .Button_Discount_Minus{
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: bold;
  }
  .Button_Discount_Value{
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 23px;
    font-weight: bold;
  }
  .Button_Discount_Percent{
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 12px;
    font-weight: bold;
  }

  .ExtraText{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }
  </style>

  <div class="Head">
    ${Go.browsecPremium}
    <div class="Close" @click="${this.close}"></div>
  </div>
  <div class="Text">
    <div class="Title">${"en"===a?Go.youCanHaveOnlyOneSmartSetting:"В бесплатном варианте доступна только 1 Умная настройка."}</div>
    <div class="Description">
    ${"en"===a?r.dy`
      <p>${Go.oneSmartSettingDescription1}</p>
      <p>${Go.oneSmartSettingDescription2}</p>
      <ul>
        <li>${Go.oneSmartSettingDescriptionList1}</li>
        <li>${Go.oneSmartSettingDescriptionList2}</li>
      </ul>`:r.dy`
      <p>Перейдите на Premium, чтобы добавлять Умные настройки без ограничений и поддержать развитие Browsec.</p>
      <p>Также вы получите:</p>
      <ul>
        <li>Доступ к 40+ странам</li>
        <li>Турбо-скорость</li>
      </ul>`}
    </div>
  </div>
  <div class="Button_Out">
    <a href="${this.premiumLink}" class="Button" @click="${this.linkClick}" target="_blank">
      <span class="In">
        <span class="Button_Name ${this.trialDays&&!this.withPrice?"uppercase":""}">
          ${this.buttonText}
        </span>
      ${(()=>!this.withPrice||this.trialDays?"":r.dy`
        <span class="Button_Price">
        ${(()=>this.discount?r.dy`
          ${Go.forOnly}
          <span class="Button_Price_Value">${this.currency}${this.price}</span>
          <span class="Button_Price_OldValue">${this.currency}${this.oldPrice}</span>`:o)()}
        </span>`)()}
      </span>
      ${(()=>this.withPrice&&this.discount?r.dy`
      <span class="Button_Discount"><span class="In">
        <span class="Button_Discount_Minus">-</span>
        <span class="Button_Discount_Value">${this.discount}</span>
        <span class="Button_Discount_Percent">%</span>
      </span></span></span>`:"")()}
    </a>
  </div>
  ${(()=>{if(!this.withPrice)return"";const o=(()=>this.trialDays?"en"===a?Go.cancelSubscriptionAtAnyTime:"Подписку всегда можно отменить":"en"===a?Go.moneyBackGuarantee:"Гарантия возврата - 7 дней")();return r.dy`
    <div class="ExtraText">${o}</div>`})()}`}const Jo=new Map;for(const[a,{id:o,taskNumber:m}]of Object.entries(f().experiments))Jo.set(o,{name:a,taskNumber:m});let Ko;(async()=>{const a=await ma.Z.get("Experiment 348: variant");Ko=a})();class Qo extends((0,$.$)(g.Z)(r.oi)){render(){return Yo.call(this)}static get properties(){return{buttonText:{type:String},currency:{type:String},discount:{type:Number},ignoredExperiments:{type:Array},oldPrice:{type:Number},premiumLink:{type:String},price:{type:Number},trialDays:{type:Number}}}constructor(){super(),this.ignoredExperiments=[],this.removeStorageListener=ma.Z.onChange({for:["Experiment 262: ignore"],do:a=>{a["Experiment 262: ignore"]&&[].push(262)}}),this.withPrice=1===Math.floor(2*Math.random()),(async()=>{await ma.Z.get("Experiment 262: ignore")&&(this.ignoredExperiments=[262])})(),(async()=>{this.daysAfterInstall=await(async()=>{const a=Date.now(),o=await ma.Z.get("daysAfterInstall")||a;return Math.round((a-o)/864e5)})()})()}async connectedCallback(){if(super.connectedCallback(),this.firstConnect)return;this.firstConnect=!0;let a=this.extraText;a&&(a=". "+a);const{promotions:o}=await g.Z.getStateAsync(),m=Date.now(),e=o.find((({from:a,till:o})=>a<=m&&m<=o));u.Z.partial({category:"extension",action:"show_premium_div",label:"premium_div_"+this.buttonText+a}),x.Z.track("premium_div",{feature:"smartsettings",campaign:(null==e?void 0:e.id)||"default"}),(async()=>{const{experiments:a}=await g.Z.getStateAsync(),o=await(async()=>{const a=Date.now(),o=await ma.Z.get("daysAfterInstall")||a;return Math.round((a-o)/864e5)})(),m=a[f().experiments.freeServersOverloaded.id];m&&u.Z.full({category:"premium_div_330v2show",action:ia(Number(m)),label:String(o)})})()}disconnectedCallback(){super.disconnectedCallback(),this.removeStorageListener()}stateChanged({prices:a,priceTrial:o}){const{currency:m,price:e,oldPrice:t,trialDays:i}=Aa({prices:a,priceTrial:o});this.currency=m,this.price=e,this.oldPrice=t,this.trialDays=i}get buttonText(){const a=window.language;if(!this.withPrice)return"en"===a?(0,e.Z)("get_premium_now"):"Получи Premium прямо сейчас!";if(this.trialDays){return("en"===a?(0,e.Z)("get_N_days_free_premium_trial"):"Попробуй XXX дней премиума бесплатно").replace(/XXX/g,String(this.trialDays))}return this.discount?"en"===a?(0,e.Z)("get_monthly_premium"):"Возьми Premium с помесячной оплатой":"en"===a?(0,e.Z)("upgrade_to_premium"):"Получить Premium"}get discount(){return this.oldPrice?Math.floor(100*(this.oldPrice-this.price)/this.oldPrice):0}get extraText(){const a=window.language;if(!this.withPrice||this.trialDays)return"";if(!this.discount){return("en"===a?(0,e.Z)("only_X_per_month"):"всего за XXX в месяц").replace(/XXX/g,this.currency+this.price)}return("en"===a?(0,e.Z)("for_only"):"всего за")+" "+this.currency+this.price}get premiumLink(){var a;let o=this.extraText;o&&(o=". "+o);const m=g.Z.getStateSync(),{experiments:e}=m,t=Date.now(),i=m.promotions.find((({from:a,till:o,tariffs:m})=>a<=t&&t<=o&&m)),n=null!==(a=null==i?void 0:i.id)&&void 0!==a?a:"default_campaign",r=(()=>{if(!i)return Xo;const{tariffs:a}=i;if(!a)throw new Error('No "tariffs" property in tariff');return a.map((({price:{currency:a,value:o},duration:m})=>({currency:a,duration:m,value:o})))})(),l={feature:"smartsettings",plan_id:(()=>{const a=r.map((({duration:a,value:o})=>({duration:a,pricePerMonth:o/a}))).sort((({pricePerMonth:a},{pricePerMonth:o})=>a-o)),{duration:o}=a[0];switch(o){case 1:return"monthly";case 12:return"annual";case 24:return"biennial";default:throw new Error("Incorrect duration")}})(),utm_source:"chromium extension",utm_medium:"premium_div",utm_campaign:n,utm_term:this.buttonText+o},d=[];for(const[a,o]of Object.entries(e)){if(!Jo.has(a))continue;const{taskNumber:m}=Jo.get(a);this.ignoredExperiments.includes(m)||d.push(`exp${m}_${o}`)}return"number"==typeof Ko&&d.push("exp348_"+Ko),d.length&&(l.expvarid=d.join(",")),H({action:a=>Object.assign(a,l),storeState:m,url:(null==i?void 0:i.clickUrl)||W.Z.premium})}async close(){const a=this.animate([{top:0},{top:"-100%"}],{duration:800,easing:"linear"});await new Promise((o=>{a.onfinish=o})),this.remove()}async linkClick(){var a,o;(0,E.Z)({type:"popup-premium-onerule button click",promotionId:(()=>{const a=qa.get();if("custom"===(null==a?void 0:a.type))return a.promotionId})()}),await new Promise((a=>{setTimeout(a,50)})),null===(a=self)||void 0===a||null===(o=a.close)||void 0===o||o.call(a)}}customElements.define("popup-premium-onerule",Qo);const am=i({accessInternet:"access_internet_via_premium_locations",browsecPremium:"browsec_premium",cancelSubscriptionAtAnyTime:"cancel_subscription_at_any_time",dedicatedLanes:"dedicated_traffic_lanes",forOnly:"for_only",moneyBackGuarantee:"7_days_money_back_guarantee",premiumLocations:"premium_locations",premiumServers:"premium_servers",performanceGuaranteed:"top_performance_guaranteed",turboSpeed:"turbo_speed"});function om(){const a=window.language,o=(0,e.Z)("only_X_per_month").replace(/XXX/g,this.currency+this.price);return r.dy`
  <style>
  ${n}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top:0px;
    right:0px;
    left:0px;
    height: 100%;
    background: #fff;
  }

  .Head{
    background: var( --brand-blue );
    color: #fff;
    text-align: center;
    font-size: 17px;
    line-height: 36px;
    font-weight: 500;
    position: relative;
    padding: 9px 10px 9px;
    height: auto;
    overflow: visible;
  }

  .Close{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -16px;
    width: 10px;
    padding-top: 10px;
    border: 11px solid transparent;
    height: 0;
    overflow: hidden;
    background: url( '/images/popup_close_2.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_2.svg#white' );
  }
  .Close::after{
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
  }

  .Features{
    padding: 10px 35px 15px 10px;
    color: #7a7c7f;
  }
  .Features > .E{
    min-height: 95px;
    box-sizing: border-box;
    padding: 2px 0 0px 90px;
    position: relative;
  }
  :host(.withPrice) .Features > .E{
    min-height: 82px;
  }
  .Features > .E::before{
    content: "";
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    width: 67px;
    padding-top:67px;
    position: absolute;
    left: 4px;
    top: 8px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .Features > .E.countries::before{
    background-image: url( '/images/promos/circles.svg#countries' );
  }
  .Features > .E.speed::before{
    background-image: url( '/images/promos/circles.svg#speed' );
  }
  .Features > .E.servers::before{
    background-image: url( '/images/promos/circles.svg#servers' );
  }

  .Feature_Name{
    color: #28334e;
    font-size: 17px;
    margin: 9px 0 2px;
    line-height: 1.29;
  }
  .Feature_Text{
    font-size: 15px;
    line-height: 1.25;
  }

  .Button_Out{
    padding: 0 5px;
  }
  .Button{
    display: table;
    width: 100%;
    height: 45px;
    background: var( --brand-green );
    text-align: center;
    border-radius: 4px;
    position: relative;
  }
  :host(.withPrice) .Button{
    height: 60px;
  }
  .Button:link,
  .Button:visited,
  .Button:hover,
  .Button:active{
    color: #fff;
    text-decoration: none;
  }
  .Button *{
    cursor: pointer;
  }
  .Button > .In{
    display: table-cell;
    vertical-align: middle;
  }

  .Button_Name{
    display: block;
    font-size: 17px;
  }
  .Button_Name.uppercase{
    text-transform: uppercase;
  }
  :host(.withPrice) .Button_Name{
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
  }
  .Button_Price{
    display: block;
    font-size: 14px;
  }
  .Button_Price_Value{
    font-size: 14px;
    font-weight: bold;
  }
  .Button_Price_OldValue{
    font-size: 12px;
    text-decoration: line-through;
    color: #9aca9f;
    margin-left: 3px;
  }

  .Button_Discount{
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 25px;
  }
  .Button_Discount > .In{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    background: url( '/images/discount.svg' ) 0 0 no-repeat;
    position: absolute;
    right: 0;
    top: calc(50% - 54px / 2);
  }
  .Button_Discount_Minus{
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: bold;
  }
  .Button_Discount_Value{
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 23px;
    font-weight: bold;
  }
  .Button_Discount_Percent{
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 12px;
    font-weight: bold;
  }

  .ExtraText{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }
  </style>

  <div class="Head">
    Browsec Premium
    <div class="Close" @click="${this.close}"></div>
  </div>
  <div class="Features">
    <div class="E countries">
      <div class="Feature_Name">${"en"===a?am.premiumLocations:"Премиальные страны"}</div>
      <div class="Feature_Text">${"en"===a?am.accessInternet:"Доступ в интернет через дополнительные премиальные страны"}</div>
    </div>
    <div class="E speed">
      <div class="Feature_Name">${"en"===a?am.turboSpeed:"Турбо-скорость"}</div>
      <div class="Feature_Text">${"en"===a?am.dedicatedLanes:"Выделенные каналы для пользователей Premium"}</div>
    </div>
    <div class="E servers">
      <div class="Feature_Name">${"en"===a?am.premiumServers:"Премиальные серверы"}</div>
      <div class="Feature_Text">${"en"===a?am.performanceGuaranteed:"Лучшие в своем классе серверы гарантируют высочайшую производительность"}</div>
    </div>
  </div>
  <div class="Button_Out">
    <a href="${this.premiumLink}" class="Button" @click="${this.linkClick}" target="_blank">
      <span class="In">
        <span class="Button_Name ${this.trialDays&&!this.withPrice?"uppercase":""}">
          ${this.buttonText}
        </span>
  ${(()=>!this.withPrice||this.trialDays?"":r.dy`
        <span class="Button_Price">
        ${(()=>this.discount?r.dy`
          ${am.forOnly}
          <span class="Button_Price_Value">${this.currency}${this.price}</span>
          <span class="Button_Price_OldValue">${this.currency}${this.oldPrice}</span>`:o)()}
        </span>`)()}
      </span>
  ${(()=>this.withPrice&&this.discount?r.dy`
      <span class="Button_Discount"><span class="In">
        <span class="Button_Discount_Minus">-</span>
        <span class="Button_Discount_Value">${this.discount}</span>
        <span class="Button_Discount_Percent">%</span>
      </span></span>`:"")()}
    </a>
  </div>
  ${(()=>{if(!this.withPrice)return"";const o=(()=>this.trialDays?"en"===a?am.cancelSubscriptionAtAnyTime:"Подписку всегда можно отменить":"en"===a?am.moneyBackGuarantee:"Гарантия возврата - 7 дней")();return r.dy`
  <div class="ExtraText">${o}</div>`})()}`}const mm=new Map;for(const[a,{id:o,taskNumber:m}]of Object.entries(f().experiments))mm.set(o,{name:a,taskNumber:m});let em;(async()=>{const a=await ma.Z.get("Experiment 348: variant");em=a})();class tm extends((0,$.$)(g.Z)(r.oi)){render(){return om.call(this)}static get properties(){return{buttonText:{type:String},country:{type:String},currency:{type:String},discount:{type:Number},extraText:{type:String},gaCid:{type:String},ignoredExperiments:{type:Array},oldPrice:{type:Number},premiumLink:{type:String},price:{type:Number},trialDays:{type:Number},withPrice:{type:Boolean}}}constructor(){super(),this.country="",this.ignoredExperiments=[],this.gaCid=(()=>{if("undefined"!=typeof browser||!document.cookie)return"";let a=document.cookie.split("; ").find((a=>a.startsWith("_ga")));return a?a.slice(10):void 0})(),this.removeStorageListener=ma.Z.onChange({for:["Experiment 262: ignore"],do:a=>{a["Experiment 262: ignore"]&&[].push(262)}}),this.withPrice=1===Math.floor(2*Math.random()),(async()=>{await ma.Z.get("Experiment 262: ignore")&&(this.ignoredExperiments=[262])})(),(async()=>{this.daysAfterInstall=await(async()=>{const a=Date.now(),o=await ma.Z.get("daysAfterInstall")||a;return Math.round((a-o)/864e5)})()})()}async connectedCallback(){if(super.connectedCallback(),this.firstConnect)return;this.firstConnect=!0;let a=this.extraText;a&&(a=". "+a);const{promotions:o}=await g.Z.getStateAsync(),m=Date.now(),e=o.find((({from:a,till:o})=>a<=m&&m<=o));u.Z.partial({action:"show_premium_div",category:"extension",label:"premium_div_"+this.buttonText+a}),x.Z.track("premium_div",{feature:"timezone change"===this.initiator?"browser_tz":"countries",campaign:(null==e?void 0:e.id)||"default"}),(async()=>{const{experiments:a}=await g.Z.getStateAsync(),o=await(async()=>{const a=Date.now(),o=await ma.Z.get("daysAfterInstall")||a;return Math.round((a-o)/864e5)})(),m=a[f().experiments.freeServersOverloaded.id];m&&u.Z.full({category:"premium_div_330v2show",action:ia(Number(m)),label:String(o)})})()}disconnectedCallback(){super.disconnectedCallback(),this.removeStorageListener()}updated(a){if(a.has("withPrice")){let a=this.classList;this.withPrice?a.add("withPrice"):a.remove("withPrice")}}stateChanged({prices:a,priceTrial:o}){const{currency:m,price:e,oldPrice:t,trialDays:i}=Aa({prices:a,priceTrial:o});this.currency=m,this.price=e,this.oldPrice=t,this.trialDays=i}get buttonText(){const a=window.language;if(this.withPrice){if(this.trialDays){return("en"===a?(0,e.Z)("get_N_days_free_premium_trial"):"Попробуй XXX дней премиума бесплатно").replace(/XXX/g,String(this.trialDays))}if(this.discount)return"en"===a?(0,e.Z)("get_monthly_premium"):"Возьми Premium с помесячной оплатой"}return"en"===a?(0,e.Z)("get_premium_now"):"Получи Premium прямо сейчас!"}get discount(){return this.oldPrice?Math.floor(100*(this.oldPrice-this.price)/this.oldPrice):0}get extraText(){const a=window.language;if(!this.withPrice||this.trialDays)return"";if(!this.discount){return("en"===a?(0,e.Z)("only_X_per_month"):"всего за XXX в месяц").replace(/XXX/g,this.currency+this.price)}return("en"===a?(0,e.Z)("for_only"):"всего за")+" "+this.currency+this.price}get premiumLink(){var a;let o=this.extraText;o&&(o=". "+o);const m=g.Z.getStateSync(),e=Date.now(),t=m.promotions.find((({from:a,till:o,tariffs:m})=>a<=e&&e<=o&&m)),i=null!==(a=null==t?void 0:t.id)&&void 0!==a?a:"default_campaign",n=(()=>{if(!t)return Xo;const{tariffs:a}=t;if(!a)throw new Error('No "tariffs" property in tariff');return a.map((({price:{currency:a,value:o},duration:m})=>({currency:a,duration:m,value:o})))})(),r={plan_id:(()=>{const a=n.map((({duration:a,value:o})=>({duration:a,pricePerMonth:o/a}))).sort((({pricePerMonth:a},{pricePerMonth:o})=>a-o)),{duration:o}=a[0];switch(o){case 1:return"monthly";case 12:return"annual";case 24:return"biennial";default:throw new Error("Incorrect duration")}})(),utm_source:"chromium extension",utm_medium:"premium_div",utm_campaign:i,utm_term:this.buttonText+o};this.initiator&&(r.feature=(()=>{switch(this.initiator){case"premium locations":return"countries";case"smart settings":return"smartsettings";case"timezone change":return"browser_tz"}})());const l=[],{experiments:d}=m;for(const[a,o]of Object.entries(d)){if(!mm.has(a))continue;const{taskNumber:m}=mm.get(a);this.ignoredExperiments.includes(m)||l.push(`exp${m}_${o}`)}return"number"==typeof em&&l.push("exp348_"+em),l.length&&(r.expvarid=l.join(",")),H({action:a=>Object.assign(a,r),url:(null==t?void 0:t.clickUrl)||W.Z.premium,storeState:g.Z.getStateSync()})}async close(){const a=this.animate([{top:0},{top:"-100%"}],{duration:800,easing:"linear"});await new Promise((o=>{a.onfinish=o})),this.remove()}async linkClick(){var a,o;(0,E.Z)({type:"popup-premium button click",feature:"timezone change"===this.initiator?"browser_tz":"countries",promotionId:(()=>{const a=qa.get();if("custom"===(null==a?void 0:a.type))return a.promotionId})()}),await new Promise((a=>{setTimeout(a,50)})),null===(a=self)||void 0===a||null===(o=a.close)||void 0===o||o.call(a)}}customElements.define("popup-premium",tm);let im=i({cantStartBecauseYourProxySettingsBlocked:"cant_start_because_your_proxy_settings_blocked",fixIt:"fix_it"});class nm extends r.oi{render(){return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      background: rgba(255, 255, 255, 0.5);
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }

    :host > .In > .In{
      position: relative;
      display: table;
      width: 100%;
      height: 100%;
    }
    :host > .In > .In > .In{
      display: table-cell;
      vertical-align: middle;
    }

    .Description{
      color: var( --brand-blue );
      font-size: 16px;
      line-height: 1.375;
      padding: 0 25px;
      text-align: center;
    }
    .Button{
      text-align: center;
      padding-top: 25px;
    }
    .Button input{
      display: block;
      margin: 0 auto;
      box-sizing: content-box;
      height: 45px;
      line-height: 45px;
      border: 0;
      cursor: pointer;
      min-width: 200px;
      padding: 0 15px;
      background: #3b9946;
      text-align: center;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }
    </style>

    <div class="Overlay">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In"><div class="In">
        <div class="Description">
          ${im.cantStartBecauseYourProxySettingsBlocked}
        </div>
        <div class="Button">
          <input type="button" value="${im.fixIt}" @click="${this.fixIt}"/>
        </div>
      </div></div>
    </div>`}async fixIt(){await(0,E.Z)({type:"create tab",options:"/pages/unblock_proxy/unblock_proxy.html"}),self.close()}}customElements.define("popup-proxy-blocked",nm);class rm extends r.oi{render(){return r.dy`
    <style>
    ${n}
    :host{
      display: block;
      position: absolute;
    }
    :host > .Bg{
      position: absolute;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
      background: #faf5f5;
      border-radius: 4px;
      border: 1px solid #8e3c33;
      font-size: 0;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
    }
    :host > .Bg::before,
    :host > .Bg::after{
      content: '';
      display: block;
      position: absolute;
      left: 16px;
      width: 0;
      height: 0;
      overflow: hidden;
      border: 5px solid transparent;
    }
    :host > .Bg:before{
      top: -10px;
      border-bottom-color: #8e3c33;
    }
    :host > .Bg:after{
      top: -9px;
      border-bottom-color: #faf5f5;
    }
    :host > .In{
      position: relative;
      color: var( --brand-burgundy );
      font-size: 12px;
      padding: 4px 11px;
      line-height: 19px;
      min-height: 19px; /* NOTE border in .Bg */
      min-width: 12px;
    }
    </style>

    <div class="Bg"></div>
    <div class="In">${this.text}</div>`}static get properties(){return{text:{type:String}}}constructor(){super(),this.text=""}}customElements.define("tooltip-error",rm);const lm=({setValue:a,setEndValue:o})=>new Promise((m=>{const e=performance.now(),t=i=>{if(i-e>=300)return o(),void m();a(`filter: blur(${3*(1-(i-e)/300)}px);`),requestAnimationFrame(t)};requestAnimationFrame(t)})),dm=async a=>{const o=a.animate([{opacity:1},{opacity:0}],{duration:300,easing:"linear"});await new Promise((a=>{o.onfinish=a})),a.remove()},um=({block:a,rectangle:o})=>{const m="data:image/svg+xml;base64,"+btoa(`<svg viewBox="0 0 ${a.width} ${a.height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <mask id="clip">\n          <rect id="bg" x="0" y="0" width="100%" height="100%" fill="#fff"/>\n          <rect x="${o.x}" y="${o.y}" width="${o.width}" height="${o.height}" rx="10"/>\n        </mask>\n\n        <rect x="0" y="0" width="100%" height="100%" mask="url(#clip)" fill="#000"/>\n      </svg>\n      `.replace(/(\n|\r)/g,"").trim());return`-webkit-mask: url('${m}') 0 0 no-repeat;mask: url('${m}') 0 0 no-repeat;`},cm=async()=>{x.Z.track("onboarding1_show");const a=document.querySelector("div.MainContainer");let o;try{const a=document.querySelector("page-switch");await a.updateComplete;const m=a.shadowRoot.querySelector("main-index");await m.updateComplete,o=m.shadowRoot.querySelector("index-home"),await o.updateComplete}catch(a){return}const m=(()=>{try{return o.shadowRoot.querySelector(".Inactive_Button")}catch(a){return null}})();a&&m&&await(({button:a,parent:o})=>new Promise((m=>{const e=self.innerWidth,t=self.innerHeight,i=a.getBoundingClientRect(),n=a.offsetHeight,r=a.offsetWidth,l=a.offsetHeight+30,d=um({block:{width:e,height:t},rectangle:{x:e/2-a.offsetWidth/2-15,y:i.y-15,height:l,width:a.offsetWidth+30}}),u=document.createElement("div");u.textContent=a.textContent;const c=getComputedStyle(a);u.style.cssText=`background-color: ${c.getPropertyValue("background-color")};border-radius: ${c.getPropertyValue("border-radius")};color: ${c.getPropertyValue("color")};font-family: ${c.getPropertyValue("font-family")};font-size: ${c.getPropertyValue("font-size")};height: ${n}px;line-height: ${c.getPropertyValue("line-height")};width: ${r}px;text-align: center;position: absolute;top: ${i.y}px;left: ${(e-r)/2}px;cursor: pointer;`;const f=document.createElement("first-start-tips-start-vpn");f.style.cssText=d,f.bottom=t-i.y+(l-n)/2+6,u.addEventListener("click",(async()=>{x.Z.track("onboarding1_vpnon"),ma.Z.set("startup tips shown",!0),a.click(),o.style.cssText="",f.remove(),u.remove(),ma.Z.set("First start tips: phase",2),m(!1)})),f.addEventListener("close",(async()=>{x.Z.track("onboarding1_close"),await Promise.all([dm(f),lm({setValue:a=>{o.style.cssText=a+d},setEndValue:()=>{o.style.cssText=""}})]),u.remove(),ma.Z.set("First start tips: phase",2),m(!1)})),o.style.cssText="filter: blur(3px);"+d,document.body.append(f),document.body.append(u)})))({button:m,parent:a})};var fm=m(3355);const vm={},sm=class{constructor(a,o="log"){this._name=a,this._startPoint=performance.now(),this._type=o;const m=vm[a]||0;this._id=m,vm[a]=m+1}end(){const a=Math.round(performance.now()-this._startPoint),o=`Local delay. ${this._name} #${this._id}: ${a} milliseconds`;switch(this._type){case"log":(0,J.Z)(o);break;case"warn":J.Z.warn(o);break;case"error":J.Z.error(o)}return a}},pm=[[{format:"domain",value:"apple"},{format:"domain",value:"apple.ae"},{format:"domain",value:"apple.at"},{format:"domain",value:"apple.be"},{format:"domain",value:"apple.bg"},{format:"domain",value:"apple.bs"},{format:"domain",value:"apple.ca"},{format:"domain",value:"apple.ch"},{format:"domain",value:"apple.cl"},{format:"domain",value:"apple.cm"},{format:"domain",value:"apple.cn"},{format:"domain",value:"apple.co"},{format:"domain",value:"apple.co.cr"},{format:"domain",value:"apple.co.hu"},{format:"domain",value:"apple.co.jp"},{format:"domain",value:"apple.co.kr"},{format:"domain",value:"apple.co.mz"},{format:"domain",value:"apple.co.nz"},{format:"domain",value:"apple.co.th"},{format:"domain",value:"apple.co.uk"},{format:"domain",value:"apple.com"},{format:"domain",value:"apple.com.af"},{format:"domain",value:"apple.com.au"},{format:"domain",value:"apple.com.bo"},{format:"domain",value:"apple.com.br"},{format:"domain",value:"apple.com.cn"},{format:"domain",value:"apple.com.co"},{format:"domain",value:"apple.com.de"},{format:"domain",value:"apple.com.do"},{format:"domain",value:"apple.com.gr"},{format:"domain",value:"apple.com.gy"},{format:"domain",value:"apple.com.jm"},{format:"domain",value:"apple.com.lk"},{format:"domain",value:"apple.com.mg"},{format:"domain",value:"apple.com.mx"},{format:"domain",value:"apple.com.my"},{format:"domain",value:"apple.com.pa"},{format:"domain",value:"apple.com.pe"},{format:"domain",value:"apple.com.pl"},{format:"domain",value:"apple.com.pr"},{format:"domain",value:"apple.com.pt"},{format:"domain",value:"apple.com.py"},{format:"domain",value:"apple.com.sg"},{format:"domain",value:"apple.com.sv"},{format:"domain",value:"apple.com.tr"},{format:"domain",value:"apple.com.tw"},{format:"domain",value:"apple.com.uy"},{format:"domain",value:"apple.cz"},{format:"domain",value:"apple.de"},{format:"domain",value:"apple.dk"},{format:"domain",value:"apple.ee"},{format:"domain",value:"apple.es"},{format:"domain",value:"apple.eu"},{format:"domain",value:"apple.fi"},{format:"domain",value:"apple.fr"},{format:"domain",value:"apple.hamburg"},{format:"domain",value:"apple.hn"},{format:"domain",value:"apple.hr"},{format:"domain",value:"apple.hu"},{format:"domain",value:"apple.ie"},{format:"domain",value:"apple.in"},{format:"domain",value:"apple.is"},{format:"domain",value:"apple.it"},{format:"domain",value:"apple.jo"},{format:"domain",value:"apple.jp"},{format:"domain",value:"apple.kr"},{format:"domain",value:"apple.lk"},{format:"domain",value:"apple.lt"},{format:"domain",value:"apple.lv"},{format:"domain",value:"apple.me"},{format:"domain",value:"apple.my"},{format:"domain",value:"apple.net"},{format:"domain",value:"apple.net.gr"},{format:"domain",value:"apple.nl"},{format:"domain",value:"apple.no"},{format:"domain",value:"apple.pk"},{format:"domain",value:"apple.pl"},{format:"domain",value:"apple.pt"},{format:"domain",value:"apple.ro"},{format:"domain",value:"apple.rs"},{format:"domain",value:"apple.ru"},{format:"domain",value:"apple.sa"},{format:"domain",value:"apple.se"},{format:"domain",value:"apple.sg"},{format:"domain",value:"apple.si"},{format:"domain",value:"apple.sk"},{format:"domain",value:"apple.so"},{format:"domain",value:"apple.tt"},{format:"domain",value:"apple.tw"},{format:"domain",value:"apple.uk"},{format:"domain",value:"apple.us"},{format:"domain",value:"apple.xn--czr694b"},{format:"domain",value:"apple.xn--fiqs8s"},{format:"domain",value:"apple.xyz"},{format:"domain",value:"aplestore.com"},{format:"domain",value:"apple-store.cn"},{format:"domain",value:"apple-store.net"},{format:"domain",value:"apple-store.wang"},{format:"domain",value:"applestor.com"},{format:"domain",value:"applestore.bg"},{format:"domain",value:"applestore.cc"},{format:"domain",value:"applestore.ch"},{format:"domain",value:"applestore.cm"},{format:"domain",value:"applestore.cn"},{format:"domain",value:"applestore.co.hu"},{format:"domain",value:"applestore.co.jp"},{format:"domain",value:"applestore.co.ug"},{format:"domain",value:"applestore.co.uk"},{format:"domain",value:"applestore.com"},{format:"domain",value:"applestore.com.au"},{format:"domain",value:"applestore.com.bn"},{format:"domain",value:"applestore.com.cn"},{format:"domain",value:"applestore.com.ee"},{format:"domain",value:"applestore.com.eg"},{format:"domain",value:"applestore.com.gr"},{format:"domain",value:"applestore.com.hk"},{format:"domain",value:"applestore.com.hr"},{format:"domain",value:"applestore.com.jo"},{format:"domain",value:"applestore.com.my"},{format:"domain",value:"applestore.com.ph"},{format:"domain",value:"applestore.com.pl"},{format:"domain",value:"applestore.com.pt"},{format:"domain",value:"applestore.com.ro"},{format:"domain",value:"applestore.com.ru"},{format:"domain",value:"applestore.com.sn"},{format:"domain",value:"applestore.com.tw"},{format:"domain",value:"applestore.de"},{format:"domain",value:"applestore.hk"},{format:"domain",value:"applestore.kr"},{format:"domain",value:"applestore.me"},{format:"domain",value:"applestore.net"},{format:"domain",value:"applestore.net.gr"},{format:"domain",value:"applestore.ph"},{format:"domain",value:"applestore.qa"},{format:"domain",value:"applestore.sg"},{format:"domain",value:"applestore.wang"},{format:"domain",value:"applestoreonline.com"},{format:"domain",value:"applestorepro.eu"},{format:"domain",value:"onlineapplestore.com"},{format:"domain",value:"app-store.wang"},{format:"domain",value:"appe-store.com"},{format:"domain",value:"apple-appstore.cn"},{format:"domain",value:"appleappstore.cn"},{format:"domain",value:"appleappstore.net"},{format:"domain",value:"appleappstore.tv"},{format:"domain",value:"appsto.re"},{format:"domain",value:"appstore.co.id"},{format:"domain",value:"appstore.hk"},{format:"domain",value:"appstore.my"},{format:"domain",value:"appstore.ph"},{format:"domain",value:"appstoreapple.cn"},{format:"domain",value:"asto.re"},{format:"domain",value:"tvappstore.net"},{format:"domain",value:"apple-imac.com"},{format:"domain",value:"appleimac.com"},{format:"domain",value:"imac-apple.com"},{format:"domain",value:"imac-applecomputer.com"},{format:"domain",value:"imac.co"},{format:"domain",value:"imac.co.nz"},{format:"domain",value:"imac.com"},{format:"domain",value:"imac.eu"},{format:"domain",value:"imac.gr"},{format:"domain",value:"imac.one"},{format:"domain",value:"imac.rs"},{format:"domain",value:"imacapple.com"},{format:"domain",value:"imacapplecomputer.com"},{format:"domain",value:"ebookforipad.com"},{format:"domain",value:"euroipad.com"},{format:"domain",value:"findmyipad.com"},{format:"domain",value:"indiaipad.com"},{format:"domain",value:"ipad.co.kr"},{format:"domain",value:"ipad.de"},{format:"domain",value:"ipad.host"},{format:"domain",value:"ipad.wang"},{format:"domain",value:"ipad3.com"},{format:"domain",value:"ipadair.cl"},{format:"domain",value:"ipadair.cm"},{format:"domain",value:"ipadair.com.br"},{format:"domain",value:"ipadair.com.es"},{format:"domain",value:"ipadair.fr"},{format:"domain",value:"ipadair.hk"},{format:"domain",value:"ipadair.ie"},{format:"domain",value:"ipadair.jp"},{format:"domain",value:"ipadair.tw"},{format:"domain",value:"ipadaustralia.com"},{format:"domain",value:"ipadmini.cm"},{format:"domain",value:"ipadmini.com.lk"},{format:"domain",value:"ipadmini.lk"},{format:"domain",value:"ipadpro.buzz"},{format:"domain",value:"ukipad.com"},{format:"domain",value:"appleiphone.hu"},{format:"domain",value:"appleiphone.net"},{format:"domain",value:"appleiphonecell.com"},{format:"domain",value:"bestiphonestuff.com"},{format:"domain",value:"cooliphonecasesstore.com"},{format:"domain",value:"custom-iphonecase.com"},{format:"domain",value:"designeriphonescases.com"},{format:"domain",value:"dl-iphone.com"},{format:"domain",value:"fundaiphone5s.com"},{format:"domain",value:"hebiphone.com"},{format:"domain",value:"hf-iphone.com"},{format:"domain",value:"iphine.com"},{format:"domain",value:"iphone-8.com.cn"},{format:"domain",value:"iphone-cd.com"},{format:"domain",value:"iphone-cn.com"},{format:"domain",value:"iphone-sh.com"},{format:"domain",value:"iphone-vip1.com"},{format:"domain",value:"iphone-vip2.com"},{format:"domain",value:"iphone-vip3.com"},{format:"domain",value:"iphone-vip4.com"},{format:"domain",value:"iphone-vip5.com"},{format:"domain",value:"iphone-x.tv"},{format:"domain",value:"iphone-yh.com"},{format:"domain",value:"iphone-zh.com"},{format:"domain",value:"iphone.cm"},{format:"domain",value:"iphone.com"},{format:"domain",value:"iphone.com.au"},{format:"domain",value:"iphone.com.gr"},{format:"domain",value:"iphone.es"},{format:"domain",value:"iphone.host"},{format:"domain",value:"iphone.net.gr"},{format:"domain",value:"iphone.pt"},{format:"domain",value:"iphone.rs"},{format:"domain",value:"iphone.ru"},{format:"domain",value:"iphone.wang"},{format:"domain",value:"iphone4.com"},{format:"domain",value:"iphone4.com.br"},{format:"domain",value:"iphone4s.com"},{format:"domain",value:"iphone5.com"},{format:"domain",value:"iphone5casescovers.com"},{format:"domain",value:"iphone5s5case.com"},{format:"domain",value:"iphoneacessorios.com.br"},{format:"domain",value:"iphonecase2013.com"},{format:"domain",value:"iphonecase5.com"},{format:"domain",value:"iphonecases100.com"},{format:"domain",value:"iphonecases5.com"},{format:"domain",value:"iphoneclaro.com.br"},{format:"domain",value:"iphonecollcase.com"},{format:"domain",value:"iphonefc.com"},{format:"domain",value:"iphonegermany.com"},{format:"domain",value:"iphonehangzhou.com"},{format:"domain",value:"iphoneimessage.com"},{format:"domain",value:"iphoneplus.wang"},{format:"domain",value:"iphonerip.net"},{format:"domain",value:"iphonese.tv"},{format:"domain",value:"iphoneunlockimei.com"},{format:"domain",value:"iphonexs.tv"},{format:"domain",value:"onlyiphone5case.com"},{format:"domain",value:"aplleipods.com"},{format:"domain",value:"appleclassicipod.com"},{format:"domain",value:"downloadsforipod.com"},{format:"domain",value:"ipod.ca"},{format:"domain",value:"ipod.ch"},{format:"domain",value:"ipod.cm"},{format:"domain",value:"ipod.co"},{format:"domain",value:"ipod.co.nz"},{format:"domain",value:"ipod.co.uk"},{format:"domain",value:"ipod.co.za"},{format:"domain",value:"ipod.com"},{format:"domain",value:"ipod.com.au"},{format:"domain",value:"ipod.com.cn"},{format:"domain",value:"ipod.com.fr"},{format:"domain",value:"ipod.com.hk"},{format:"domain",value:"ipod.com.sg"},{format:"domain",value:"ipod.com.tw"},{format:"domain",value:"ipod.de"},{format:"domain",value:"ipod.es"},{format:"domain",value:"ipod.eu"},{format:"domain",value:"ipod.fr"},{format:"domain",value:"ipod.gr"},{format:"domain",value:"ipod.hk"},{format:"domain",value:"ipod.is"},{format:"domain",value:"ipod.net"},{format:"domain",value:"ipod.no"},{format:"domain",value:"ipod.pk"},{format:"domain",value:"ipod.rs"},{format:"domain",value:"ipod.ru"},{format:"domain",value:"ipod.tw"},{format:"domain",value:"ipodcentre.nl"},{format:"domain",value:"ipodcleaner.com"},{format:"domain",value:"ipoditouch.com"},{format:"domain",value:"ipodnano.com"},{format:"domain",value:"ipodnano.net"},{format:"domain",value:"ipodprices.com"},{format:"domain",value:"ipodrip.ca"},{format:"domain",value:"ipodrocks.com.au"},{format:"domain",value:"ipods.com"},{format:"domain",value:"ipodshop.com.au"},{format:"domain",value:"ipodtouch.co"},{format:"domain",value:"ipodtouch.com"},{format:"domain",value:"myipod.net"},{format:"domain",value:"offrezdesipods.com"},{format:"domain",value:"simplyipod.com"},{format:"domain",value:"wwwipodlounge.com"},{format:"domain",value:"imacsources.com"},{format:"domain",value:"launchpad.wang"},{format:"domain",value:"mac.wang"},{format:"domain",value:"macbook.co"},{format:"domain",value:"macbook.hk"},{format:"domain",value:"macbook.tw"},{format:"domain",value:"macbook.wang"},{format:"domain",value:"macbookair.cn"},{format:"domain",value:"macbookair.co.kr"},{format:"domain",value:"macbookair.co.uk"},{format:"domain",value:"macbookair.com"},{format:"domain",value:"macbookair.com.au"},{format:"domain",value:"macbookair.com.cn"},{format:"domain",value:"macbookair.com.es"},{format:"domain",value:"macbookair.es"},{format:"domain",value:"macbookair.hk"},{format:"domain",value:"macbookair.kr"},{format:"domain",value:"macbookair.jp"},{format:"domain",value:"macbookair.net"},{format:"domain",value:"macbookpro.co"},{format:"domain",value:"macbookpro.com"},{format:"domain",value:"macbookpro.com.au"},{format:"domain",value:"macbookpro.net"},{format:"domain",value:"macbookpro.us"},{format:"domain",value:"macbookpros.com"},{format:"domain",value:"macbooksale.com"},{format:"domain",value:"wwwmacbookair.com"},{format:"domain",value:"apple-watch.com.ru"},{format:"domain",value:"applewatch.hk"},{format:"domain",value:"applewatch.tv"},{format:"domain",value:"applewatch.tw"},{format:"domain",value:"applewatch.wang"},{format:"domain",value:"applewatchedition.com"},{format:"domain",value:"applewatchseries3.net"},{format:"domain",value:"applewatchsport.com"},{format:"domain",value:"applemusic.berlin"},{format:"domain",value:"applemusic.co"},{format:"domain",value:"applemusic.com"},{format:"domain",value:"applemusic.com.au"},{format:"domain",value:"applemusic.hamburg"},{format:"domain",value:"applemusic.wang"},{format:"domain",value:"applemusicconnect.com"},{format:"domain",value:"applemusicfestival.com"},{format:"domain",value:"musickit.net"},{format:"domain",value:"wwwapplemusic.com"},{format:"domain",value:"apple.comscoreresearch.com"},{format:"domain",value:"apple.news"},{format:"domain",value:"appleenews.com"},{format:"domain",value:"applenews.berlin"},{format:"domain",value:"applenews.hamburg"},{format:"domain",value:"applenews.tv"},{format:"domain",value:"applenewsformat.com"},{format:"domain",value:"apple-pay.com"},{format:"domain",value:"apple-pay.rs"},{format:"domain",value:"apple-pay.wang"},{format:"domain",value:"applepay.berlin"},{format:"domain",value:"applepay.co.rs"},{format:"domain",value:"applepay.com.tw"},{format:"domain",value:"applepay.hamburg"},{format:"domain",value:"applepay.hk"},{format:"domain",value:"applepay.info"},{format:"domain",value:"applepay.jp"},{format:"domain",value:"applepay.rs"},{format:"domain",value:"applepay.tv"},{format:"domain",value:"applepaycash.cn"},{format:"domain",value:"applepaycash.com.cn"},{format:"domain",value:"applepaycash.net"},{format:"domain",value:"applepaycash.tv"},{format:"domain",value:"applepaymerchantsupplies.info"},{format:"domain",value:"applepaysupplies.berlin"},{format:"domain",value:"applepaysupplies.cn"},{format:"domain",value:"applepaysupplies.com"},{format:"domain",value:"applepaysupplies.com.cn"},{format:"domain",value:"applepaysupplies.info"},{format:"domain",value:"applepaysupplies.net"},{format:"domain",value:"applepaysupplies.tv"},{format:"domain",value:"applewallet.com"},{format:"domain",value:"applewallet.tv"},{format:"domain",value:"i-book.com"},{format:"domain",value:"i-book.net"},{format:"domain",value:"ibook.co.nz"},{format:"domain",value:"ibook.com"},{format:"domain",value:"ibook.eu"},{format:"domain",value:"ibook.net"},{format:"domain",value:"ibookpartner.com"},{format:"domain",value:"ibooksauthor.com"},{format:"domain",value:"iphoto.eu"},{format:"domain",value:"iphoto.no"},{format:"domain",value:"iphoto.se"},{format:"domain",value:"iphoto.wang"},{format:"domain",value:"imovie.eu"},{format:"domain",value:"imoviegallery.com"},{format:"domain",value:"imoviestage.com"},{format:"domain",value:"applecare.berlin"},{format:"domain",value:"applecare.cc"},{format:"domain",value:"applecare.eu"},{format:"domain",value:"applecare.hamburg"},{format:"domain",value:"applecare.wang"},{format:"domain",value:"appledarwin.com"},{format:"domain",value:"appledarwin.net"},{format:"domain",value:"darwinsource.com"},{format:"domain",value:"darwinsource.org"},{format:"domain",value:"darwinsourcecode.com"},{format:"domain",value:"appleaccount.net"},{format:"domain",value:"appleid-applemx.com"},{format:"domain",value:"appleid-applemx.us"},{format:"domain",value:"appleid-iclou.com"},{format:"domain",value:"appleid-uk.us"},{format:"domain",value:"appleid.berlin"},{format:"domain",value:"appleid.com"},{format:"domain",value:"appleid.hamburg"},{format:"domain",value:"appleid.hk"},{format:"domain",value:"ids-apple.com"},{format:"domain",value:"myappleid.com"},{format:"domain",value:"appletv.com"},{format:"domain",value:"appletv.fr"},{format:"domain",value:"appletv.wang"},{format:"domain",value:"appletv4.cn"},{format:"domain",value:"appletv4.com.cn"},{format:"domain",value:"appletvapp.apple"},{format:"domain",value:"appleone.audio"},{format:"domain",value:"appleone.blog"},{format:"domain",value:"appleone.chat"},{format:"domain",value:"appleone.cloud"},{format:"domain",value:"appleone.club"},{format:"domain",value:"appleone.community"},{format:"domain",value:"appleone.film"},{format:"domain",value:"appleone.guide"},{format:"domain",value:"appleone.host"},{format:"domain",value:"appleone.space"},{format:"domain",value:"appleone.tech"},{format:"domain",value:"appleone.website"},{format:"domain",value:"shazam.com"},{format:"domain",value:"1to1computing.com.au"},{format:"domain",value:"1to1conference.com.au"},{format:"domain",value:"5lml.com"},{format:"domain",value:"a0pple.net"},{format:"domain",value:"aapl.tw"},{format:"domain",value:"airport.brussels"},{format:"domain",value:"airport.com"},{format:"domain",value:"airport.eu"},{format:"domain",value:"airsupportapp.com"},{format:"domain",value:"airtunes.com"},{format:"domain",value:"airtunes.info"},{format:"domain",value:"airtunes.net"},{format:"domain",value:"alchemysynth.com"},{format:"domain",value:"ap0le.com"},{format:"domain",value:"aple.com"},{format:"domain",value:"apole.com"},{format:"domain",value:"app0le.com"},{format:"domain",value:"appl-e.com"},{format:"domain",value:"appl.com"},{format:"domain",value:"appl4e.com"},{format:"domain",value:"appla.com"},{format:"domain",value:"apple-darwin.com"},{format:"domain",value:"apple-darwin.net"},{format:"domain",value:"apple-darwin.org"},{format:"domain",value:"apple-dns.cn"},{format:"domain",value:"apple-dns.com"},{format:"domain",value:"apple-dns.com.cn"},{format:"domain",value:"apple-dns.net"},{format:"domain",value:"apple-enews.com"},{format:"domain",value:"apple-expo.com"},{format:"domain",value:"apple-expo.eu"},{format:"domain",value:"apple-hk.com"},{format:"domain",value:"apple-ibooks.cn"},{format:"domain",value:"apple-inc.net"},{format:"domain",value:"apple-livephotoskit.com"},{format:"domain",value:"apple-maps.cn"},{format:"domain",value:"apple-online.com"},{format:"domain",value:"apple-usa.net"},{format:"domain",value:"appleafrica.com"},{format:"domain",value:"appleantilles.com"},{format:"domain",value:"appleaustralia.com"},{format:"domain",value:"appleaustralia.com.au"},{format:"domain",value:"appleaustralia.net.au"},{format:"domain",value:"applebk.net"},{format:"domain",value:"applecarbon.com"},{format:"domain",value:"applecard.tv"},{format:"domain",value:"applecentar.co.rs"},{format:"domain",value:"applecentar.rs"},{format:"domain",value:"applecenter.cn"},{format:"domain",value:"applecenter.com.cn"},{format:"domain",value:"applecentre.com.au"},{format:"domain",value:"applecentre.info"},{format:"domain",value:"appleclub.com.hk"},{format:"domain",value:"applecom.com"},{format:"domain",value:"applecomputer-imac.com"},{format:"domain",value:"applecomputer.cn"},{format:"domain",value:"applecomputer.co.in"},{format:"domain",value:"applecomputer.co.nz"},{format:"domain",value:"applecomputer.com"},{format:"domain",value:"applecomputer.com.cn"},{format:"domain",value:"applecomputer.com.hk"},{format:"domain",value:"applecomputer.com.tw"},{format:"domain",value:"applecomputer.hu"},{format:"domain",value:"applecomputer.kr"},{format:"domain",value:"applecomputerimac.com"},{format:"domain",value:"applecomputerinc.info"},{format:"domain",value:"applecomputers.co.nz"},{format:"domain",value:"applecoronavirus.com"},{format:"domain",value:"appledns.cn"},{format:"domain",value:"appledns.com.cn"},{format:"domain",value:"appleexpo.eu"},{format:"domain",value:"appleexpo.info"},{format:"domain",value:"applefilmaker.com"},{format:"domain",value:"applefilmmaker.com"},{format:"domain",value:"applefinalcutproworld.com"},{format:"domain",value:"applefinalcutproworld.net"},{format:"domain",value:"applefinalcutproworld.org"},{format:"domain",value:"applehongkong.com"},{format:"domain",value:"applehongkong.com.hk"},{format:"domain",value:"appleinclegal.com"},{format:"domain",value:"appleipodsettlement.com"},{format:"domain",value:"appleiservices.com"},{format:"domain",value:"applelink.com"},{format:"domain",value:"applemagickeyboard.com"},{format:"domain",value:"applemalaysia.com.my"},{format:"domain",value:"applemasters.info"},{format:"domain",value:"appleonline.com"},{format:"domain",value:"appleonline.net"},{format:"domain",value:"appleoriginalproductions.com"},{format:"domain",value:"appleos.tv"},{format:"domain",value:"applepencil.net"},{format:"domain",value:"applepodcasts.com"},{format:"domain",value:"applepremiumreseller.com.au"},{format:"domain",value:"applepremiumresellers.com.au"},{format:"domain",value:"applereach.com"},{format:"domain",value:"applereach.net"},{format:"domain",value:"apples-msk.ru"},{format:"domain",value:"applescreensavers.com"},{format:"domain",value:"applescript.info"},{format:"domain",value:"appleshare.info"},{format:"domain",value:"appleshop.co.uk"},{format:"domain",value:"applesiri.cn"},{format:"domain",value:"applesurveys.com"},{format:"domain",value:"appletaiwan.com"},{format:"domain",value:"appletips.net"},{format:"domain",value:"appleweb.net"},{format:"domain",value:"applexpo.net"},{format:"domain",value:"applezh.com"},{format:"domain",value:"applf.com"},{format:"domain",value:"applfe.com"},{format:"domain",value:"applle.com"},{format:"domain",value:"applw.com"},{format:"domain",value:"appmediagroup.com"},{format:"domain",value:"appule.com"},{format:"domain",value:"appye.com"},{format:"domain",value:"apyle.com"},{format:"domain",value:"beddit.tv"},{format:"domain",value:"braeburncapital.com"},{format:"domain",value:"burstly.net"},{format:"domain",value:"burstlyrewards.com"},{format:"domain",value:"buyaapl.com"},{format:"domain",value:"buyaapl.net"},{format:"domain",value:"buyaple.com"},{format:"domain",value:"camelphat.com"},{format:"domain",value:"camelspaceeffect.com"},{format:"domain",value:"carbon.com"},{format:"domain",value:"catalina.hk"},{format:"domain",value:"cdn-apple.com"},{format:"domain",value:"chomp.com"},{format:"domain",value:"coreml.net"},{format:"domain",value:"dashwood360.com"},{format:"domain",value:"desktopmovie.com"},{format:"domain",value:"desktopmovie.net"},{format:"domain",value:"desktopmovie.org"},{format:"domain",value:"desktopmovies.net"},{format:"domain",value:"desktopmovies.org"},{format:"domain",value:"developer-advisor.com"},{format:"domain",value:"device-manager.us"},{format:"domain",value:"digitalhub.com"},{format:"domain",value:"discussionsapple.com"},{format:"domain",value:"dot-mac.de"},{format:"domain",value:"dotmac.de"},{format:"domain",value:"dvdstudiopro.biz"},{format:"domain",value:"dvdstudiopro.com"},{format:"domain",value:"dvdstudiopro.info"},{format:"domain",value:"dvdstudiopro.net"},{format:"domain",value:"dvdstudiopro.org"},{format:"domain",value:"dvdstudiopro.us"},{format:"domain",value:"earpod.net"},{format:"domain",value:"ecgapp.com.cn"},{format:"domain",value:"ecgapp.net"},{format:"domain",value:"edu-research.org"},{format:"domain",value:"emac.co.in"},{format:"domain",value:"emac.in"},{format:"domain",value:"emagic.de"},{format:"domain",value:"eworld.com"},{format:"domain",value:"faceid99.com"},{format:"domain",value:"faceid99.net"},{format:"domain",value:"faceidglobal.com"},{format:"domain",value:"faceshift.cn"},{format:"domain",value:"facetime.net"},{format:"domain",value:"finalcutpro.com"},{format:"domain",value:"find-apple.com"},{format:"domain",value:"firewire.cl"},{format:"domain",value:"firewire.eu"},{format:"domain",value:"geoport.com"},{format:"domain",value:"homepod.cn"},{format:"domain",value:"hopstop.tv"},{format:"domain",value:"ichat.co.in"},{format:"domain",value:"idvd.eu"},{format:"domain",value:"ikids.com"},{format:"domain",value:"ilecture.co.nz"},{format:"domain",value:"ilife.eu"},{format:"domain",value:"ilife.gr"},{format:"domain",value:"ilife.wang"},{format:"domain",value:"imessage.tv"},{format:"domain",value:"insidear.cn"},{format:"domain",value:"insidemacintosh.com"},{format:"domain",value:"iosinthecar.com"},{format:"domain",value:"ipa-iphone.net"},{format:"domain",value:"ipple.com"},{format:"domain",value:"ischool.com"},{format:"domain",value:"itools.info"},{format:"domain",value:"iwork.com"},{format:"domain",value:"iwork.se"},{format:"domain",value:"iwork.wang"},{format:"domain",value:"jetfuelapp.com"},{format:"domain",value:"jetfuelapps.com"},{format:"domain",value:"latticedata.com"},{format:"domain",value:"livephotos.cn"},{format:"domain",value:"livephotos.com.cn"},{format:"domain",value:"livephotos.tv"},{format:"domain",value:"lojaiphone.com.br"},{format:"domain",value:"mac-mini.com"},{format:"domain",value:"mac.com"},{format:"domain",value:"mac.com.au"},{format:"domain",value:"mac.eu"},{format:"domain",value:"mac.rs"},{format:"domain",value:"macappsto.re"},{format:"domain",value:"macboxset.com"},{format:"domain",value:"mach-os.com"},{format:"domain",value:"mach-os.net"},{format:"domain",value:"machos.net"},{format:"domain",value:"macintosh.eu"},{format:"domain",value:"macintoshsoftware.com"},{format:"domain",value:"macmini.com"},{format:"domain",value:"macos.com.au"},{format:"domain",value:"macossierra.com"},{format:"domain",value:"macosx.info"},{format:"domain",value:"macosxlion.com"},{format:"domain",value:"macpazar.com"},{format:"domain",value:"macreach.com"},{format:"domain",value:"macreach.net"},{format:"domain",value:"mobileme.dk"},{format:"domain",value:"mr-apple.com.tw"},{format:"domain",value:"mzstatic.com"},{format:"domain",value:"newton.com"},{format:"domain",value:"next.com"},{format:"domain",value:"overapple.com"},{format:"domain",value:"powerbook.eu"},{format:"domain",value:"pullstring.net"},{format:"domain",value:"quatrowireless.com"},{format:"domain",value:"quicktime.cc"},{format:"domain",value:"quicktime.com"},{format:"domain",value:"quicktime.com.au"},{format:"domain",value:"quicktime.eu"},{format:"domain",value:"quicktime.net"},{format:"domain",value:"quicktime.tv"},{format:"domain",value:"reform-apple.com"},{format:"domain",value:"services-apple.net"},{format:"domain",value:"siri.com"},{format:"domain",value:"spektral.cc"},{format:"domain",value:"texture.com"},{format:"domain",value:"thinkdifferent.us"},{format:"domain",value:"touchid.tv"},{format:"domain",value:"touchid.wang"},{format:"domain",value:"tracking-location.com"},{format:"domain",value:"truedepth3d.com"},{format:"domain",value:"tryrating.com"},{format:"domain",value:"webobjects.co.uk"},{format:"domain",value:"webobjects.de"},{format:"domain",value:"webobjects.eu"},{format:"domain",value:"webobjects.net"},{format:"domain",value:"wuxiapple.com"},{format:"domain",value:"wwapple.net"},{format:"domain",value:"www-sms-apple.com"},{format:"domain",value:"wwwapple.com"},{format:"domain",value:"wwwapple.net"},{format:"domain",value:"wwwlapple.com"},{format:"domain",value:"xn--czrs0t4phtr3a.cn"},{format:"domain",value:"xn--fiqs8sxootzz.cn"},{format:"domain",value:"xn--fiqs8sxootzz.xn--hxt814e"},{format:"domain",value:"xn--gtvq61aiijy0b.xn--hxt814e"},{format:"domain",value:"xn--gtvz22d.wang"},{format:"domain",value:"xn--gtvz22d.xn--hxt814e"},{format:"domain",value:"xn--hxtr4rozx.xn--czr694b"},{format:"domain",value:"xn--kput3imi374g.xn--hxt814e"},{format:"domain",value:"xn--ohq11k7pl25iyo8a.cn"},{format:"domain",value:"xn--ruq8a011kt6y.xn--hxt814e"},{format:"full domain",value:"apple.com.akadns.net"},{format:"full domain",value:"courier-push-apple.com.akadns.net"},{format:"full domain",value:"push-apple.com.akadns.net"},{format:"full domain",value:"amp-api-search-edge.apps.apple.com"},{format:"full domain",value:"amp-api.apps.apple.com"},{format:"full domain",value:"aod.itunes.apple.com"},{format:"full domain",value:"api-edge.apps.apple.com"},{format:"full domain",value:"apptrailers.itunes.apple.com"},{format:"full domain",value:"bag.itunes.apple.com"},{format:"full domain",value:"bookkeeper.itunes.apple.com"},{format:"full domain",value:"client-api.itunes.apple.com"},{format:"full domain",value:"cma.itunes.apple.com"},{format:"full domain",value:"communities.apple.com"},{format:"full domain",value:"discussionschinese.apple.com"},{format:"full domain",value:"downloaddispatch.itunes.apple.com"},{format:"full domain",value:"fides-pol.apple.com"},{format:"full domain",value:"gspe11-2-cn-ssl.ls.apple.com"},{format:"full domain",value:"gspe12-cn-ssl.ls.apple.com"},{format:"full domain",value:"gspe85-cn-ssl.ls.apple.com"},{format:"full domain",value:"init.itunes.apple.com"},{format:"full domain",value:"iosapps.itunes.apple.com"},{format:"full domain",value:"js-cdn.music.apple.com"},{format:"full domain",value:"km.support.apple.com"},{format:"full domain",value:"maps.apple.com"},{format:"full domain",value:"osxapps.itunes.apple.com"},{format:"full domain",value:"pd.itunes.apple.com"},{format:"full domain",value:"play.itunes.apple.com"},{format:"full domain",value:"se-edge.itunes.apple.com"},{format:"full domain",value:"se2.itunes.apple.com"},{format:"full domain",value:"search.itunes.apple.com"},{format:"full domain",value:"sf-api-token-service.itunes.apple.com"},{format:"full domain",value:"sp.itunes.apple.com"},{format:"full domain",value:"streamingaudio.itunes.apple.com"},{format:"full domain",value:"su.itunes.apple.com"},{format:"full domain",value:"sync.itunes.apple.com"},{format:"full domain",value:"upp.itunes.apple.com"},{format:"domain",value:"regexp:^a[1-5]\\.mzstatic\\.com$"},{format:"domain",value:"regexp:^cdn(-cn)?[1-4]?\\.apple-mapkit\\.com$"},{format:"domain",value:"regexp:^cl[1-5]-cdn\\.origin-apple\\.com\\.akadns\\.net$"},{format:"domain",value:"regexp:^cl[1-5]\\.apple\\.com$"},{format:"domain",value:"regexp:^is[1-5](-ssl)?\\.mzstatic\\.com$"},{format:"domain",value:"regexp:^s[1-5]?\\.mzstatic\\.com$"},{format:"full domain",value:"a1.mzstatic.com"},{format:"full domain",value:"a2.mzstatic.com"},{format:"full domain",value:"a3.mzstatic.com"},{format:"full domain",value:"a4.mzstatic.com"},{format:"full domain",value:"a5.mzstatic.com"},{format:"full domain",value:"adcdownload.apple.com.akadns.net"},{format:"full domain",value:"adcdownload.apple.com"},{format:"full domain",value:"app-site-association.cdn-apple.com"},{format:"full domain",value:"appldnld.apple.com"},{format:"full domain",value:"appldnld.g.aaplimg.com"},{format:"full domain",value:"appleid.cdn-apple.com"},{format:"full domain",value:"apps.mzstatic.com"},{format:"full domain",value:"cdn-cn1.apple-mapkit.com"},{format:"full domain",value:"cdn-cn2.apple-mapkit.com"},{format:"full domain",value:"cdn-cn3.apple-mapkit.com"},{format:"full domain",value:"cdn-cn4.apple-mapkit.com"},{format:"full domain",value:"cdn.apple-mapkit.com"},{format:"full domain",value:"cdn1.apple-mapkit.com"},{format:"full domain",value:"cdn2.apple-mapkit.com"},{format:"full domain",value:"cdn3.apple-mapkit.com"},{format:"full domain",value:"cdn4.apple-mapkit.com"},{format:"full domain",value:"cds-cdn.v.aaplimg.com"},{format:"full domain",value:"cds.apple.com.akadns.net"},{format:"full domain",value:"cds.apple.com"},{format:"full domain",value:"cdsassets.apple.com"},{format:"full domain",value:"cl1-cdn.origin-apple.com.akadns.net"},{format:"full domain",value:"cl1.apple.com"},{format:"full domain",value:"cl2-cn.apple.com"},{format:"full domain",value:"cl2.apple.com"},{format:"full domain",value:"cl3-cdn.origin-apple.com.akadns.net"},{format:"full domain",value:"cl3.apple.com"},{format:"full domain",value:"cl4-cdn.origin-apple.com.akadns.net"},{format:"full domain",value:"cl4-cn.apple.com"},{format:"full domain",value:"cl4.apple.com"},{format:"full domain",value:"cl5-cdn.origin-apple.com.akadns.net"},{format:"full domain",value:"cl5.apple.com"},{format:"full domain",value:"clientflow.apple.com.akadns.net"},{format:"full domain",value:"clientflow.apple.com"},{format:"full domain",value:"configuration.apple.com.akadns.net"},{format:"full domain",value:"configuration.apple.com"},{format:"full domain",value:"cstat.apple.com"},{format:"full domain",value:"cstat.cdn-apple.com"},{format:"full domain",value:"dd-cdn.origin-apple.com.akadns.net"},{format:"full domain",value:"download.developer.apple.com"},{format:"full domain",value:"gs-loc-cn.apple.com"},{format:"full domain",value:"gs-loc.apple.com"},{format:"full domain",value:"gsp10-ssl-cn.ls.apple.com"},{format:"full domain",value:"gsp13-cn.ls.apple.com"},{format:"full domain",value:"gsp4-cn.ls.apple.com.edgekey.net.globalredir.akadns.net"},{format:"full domain",value:"gsp4-cn.ls.apple.com.edgekey.net"},{format:"full domain",value:"gsp4-cn.ls.apple.com"},{format:"full domain",value:"gsp5-cn.ls.apple.com"},{format:"full domain",value:"gsp85-cn-ssl.ls.apple.com"},{format:"full domain",value:"gspe19-cn-ssl.ls.apple.com"},{format:"full domain",value:"gspe19-cn.ls-apple.com.akadns.net"},{format:"full domain",value:"gspe19-cn.ls.apple.com"},{format:"full domain",value:"gspe21-ssl.ls.apple.com"},{format:"full domain",value:"gspe21.ls.apple.com"},{format:"full domain",value:"gspe35-ssl.ls.apple.com"},{format:"full domain",value:"guzzoni-apple-com.v.aaplimg.com"},{format:"full domain",value:"guzzoni.apple.com"},{format:"full domain",value:"iadsdk.apple.com"},{format:"full domain",value:"icloud-cdn.icloud.com.akadns.net"},{format:"full domain",value:"icloud.cdn-apple.com"},{format:"full domain",value:"images.apple.com.akadns.net"},{format:"full domain",value:"images.apple.com.edgekey.net.globalredir.akadns.net"},{format:"full domain",value:"images.apple.com"},{format:"full domain",value:"init-p01md-lb.push-apple.com.akadns.net"},{format:"full domain",value:"init-p01md.apple.com"},{format:"full domain",value:"init-p01st-lb.push-apple.com.akadns.net"},{format:"full domain",value:"init-p01st.push.apple.com"},{format:"full domain",value:"init-s01st-lb.push-apple.com.akadns.net"},{format:"full domain",value:"init-s01st.push.apple.com"},{format:"full domain",value:"iosapps.itunes.g.aaplimg.com"},{format:"full domain",value:"ipcdn.apple.com"},{format:"full domain",value:"iphone-ld.apple.com"},{format:"full domain",value:"is1-ssl.mzstatic.com"},{format:"full domain",value:"is1.mzstatic.com"},{format:"full domain",value:"is2-ssl.mzstatic.com"},{format:"full domain",value:"is2.mzstatic.com"},{format:"full domain",value:"is3-ssl.mzstatic.com"},{format:"full domain",value:"is3.mzstatic.com"},{format:"full domain",value:"is4-ssl.mzstatic.com"},{format:"full domain",value:"is4.mzstatic.com"},{format:"full domain",value:"is5-ssl.mzstatic.com"},{format:"full domain",value:"is5.mzstatic.com"},{format:"full domain",value:"itunes-apple.com.akadns.net"},{format:"full domain",value:"itunes.apple.com"},{format:"full domain",value:"itunesconnect.apple.com"},{format:"full domain",value:"mesu-cdn.apple.com.akadns.net"},{format:"full domain",value:"mesu-china.apple.com.akadns.net"},{format:"full domain",value:"mesu.apple.com"},{format:"full domain",value:"music.apple.com"},{format:"full domain",value:"ocsp-lb.apple.com.akadns.net"},{format:"full domain",value:"ocsp.apple.com"},{format:"full domain",value:"ocsp2.apple.com"},{format:"full domain",value:"oscdn.apple.com"},{format:"full domain",value:"oscdn.origin-apple.com.akadns.net"},{format:"full domain",value:"pancake.apple.com"},{format:"full domain",value:"pancake.cdn-apple.com.akadns.net"},{format:"full domain",value:"prod-support.apple-support.akadns.net"},{format:"full domain",value:"publicassets.cdn-apple.com"},{format:"full domain",value:"reserve-prime.apple.com"},{format:"full domain",value:"s.mzstatic.com"},{format:"full domain",value:"smp-device-content.apple.com"},{format:"full domain",value:"stocks-sparkline-lb.apple.com.akadns.net"},{format:"full domain",value:"stocks-sparkline.apple.com"},{format:"full domain",value:"store.apple.com.edgekey.net.globalredir.akadns.net"},{format:"full domain",value:"store.apple.com.edgekey.net"},{format:"full domain",value:"store.apple.com"},{format:"full domain",value:"store.storeimages.apple.com.akadns.net"},{format:"full domain",value:"store.storeimages.cdn-apple.com"},{format:"full domain",value:"support-china.apple-support.akadns.net"},{format:"full domain",value:"support.apple.com"},{format:"full domain",value:"swallow.apple.com"},{format:"full domain",value:"swcatalog-cdn.apple.com.akadns.net"},{format:"full domain",value:"swcatalog.apple.com"},{format:"full domain",value:"swcdn.apple.com"},{format:"full domain",value:"swcdn.g.aaplimg.com"},{format:"full domain",value:"swdist.apple.com.akadns.net"},{format:"full domain",value:"swdist.apple.com"},{format:"full domain",value:"swscan-cdn.apple.com.akadns.net"},{format:"full domain",value:"swscan.apple.com"},{format:"full domain",value:"updates-http.cdn-apple.com.akadns.net"},{format:"full domain",value:"updates-http.cdn-apple.com"},{format:"full domain",value:"updates.cdn-apple.com"},{format:"full domain",value:"valid.apple.com"},{format:"full domain",value:"valid.origin-apple.com.akadns.net"},{format:"full domain",value:"weather-data.apple.com"},{format:"full domain",value:"www.apple.com.edgekey.net.globalredir.akadns.net"},{format:"full domain",value:"www.apple.com.edgekey.net"},{format:"full domain",value:"www.apple.com"},{format:"full domain",value:"xp.apple.com"},{format:"domain",value:"iadsdk.apple.com"},{format:"domain",value:"iad.apple.com"},{format:"domain",value:"qwapi.com"},{format:"domain",value:"calendarserver.org"},{format:"domain",value:"apple-cloudkit.com"},{format:"domain",value:"cups.org"},{format:"domain",value:"developer.apple.com"},{format:"domain",value:"devimages-cdn.apple.com"},{format:"domain",value:"devstreaming-cdn.apple.com"},{format:"domain",value:"foundationdb.org"},{format:"domain",value:"macosforge.org"},{format:"domain",value:"macruby.com"},{format:"domain",value:"macruby.net"},{format:"domain",value:"macruby.org"},{format:"domain",value:"apple-mapkit.com"},{format:"domain",value:"playgrounds-cdn.apple.com"},{format:"domain",value:"carekit.org"},{format:"domain",value:"researchandcare.org"},{format:"domain",value:"researchkit.cn"},{format:"domain",value:"researchkit.com.cn"},{format:"domain",value:"researchkit.hk"},{format:"domain",value:"researchkit.net"},{format:"domain",value:"researchkit.org"},{format:"domain",value:"researchkit.tv"},{format:"domain",value:"servicetalk.io"},{format:"domain",value:"webkit.org"},{format:"domain",value:"webkitgtk.org"},{format:"domain",value:"wpewebkit.org"},{format:"domain",value:"webobjects.com"},{format:"full domain",value:"appleworldwidedeveloper.hb-api.omtrdc.net"},{format:"full domain",value:"appleworldwidedeveloper.sc.omtrdc.net"},{format:"full domain",value:"p-events-delivery.akamaized.net"},{format:"full domain",value:"certs-lb.apple.com.akadns.net"},{format:"full domain",value:"certs.apple.com"},{format:"full domain",value:"crl-lb.apple.com.akadns.net"},{format:"full domain",value:"crl.apple.com"},{format:"full domain",value:"ocsp2-lb.apple.com.akadns.net"},{format:"domain",value:"100beatscheap.com"},{format:"domain",value:"1monsterbeatsbydreus.com"},{format:"domain",value:"2013beatsbydrdreonline.com"},{format:"domain",value:"2013beatsbydrdreshop.com"},{format:"domain",value:"2013beatsbydreshop.com"},{format:"domain",value:"2013beatshdcybermonday.com"},{format:"domain",value:"2013cheapestbeats.com"},{format:"domain",value:"2013newbeatsworld.com"},{format:"domain",value:"2013pascherbeatsbydre.com"},{format:"domain",value:"2014cheapbeatsbydre.com"},{format:"domain",value:"2beatsdre.com"},{format:"domain",value:"2buybeatsbydre.com"},{format:"domain",value:"2drdrebeats.com"},{format:"domain",value:"40shopping.com"},{format:"domain",value:"4beatsbydre.com"},{format:"domain",value:"5beatsbydre.com"},{format:"domain",value:"aaagradeheadphones.com"},{format:"domain",value:"aanaan.com"},{format:"domain",value:"abcheadphones.com"},{format:"domain",value:"abeatsbydrdre.com"},{format:"domain",value:"aeasyshop.com"},{format:"domain",value:"airmay.com"},{format:"domain",value:"ajtalk.com"},{format:"domain",value:"albeats.com"},{format:"domain",value:"annstores.net"},{format:"domain",value:"aokwholesale.net"},{format:"domain",value:"aucheapbeats.com"},{format:"domain",value:"audiobeatsau.com"},{format:"domain",value:"audiobeatsbydre.com"},{format:"domain",value:"audiomonsterbeatsonline.com"},{format:"domain",value:"auricularemonsterbeats.com"},{format:"domain",value:"auricularesbeatsbaratosshop.com"},{format:"domain",value:"auricularesbeatsmarkt.com"},{format:"domain",value:"ausbeatsbydrdre.com"},{format:"domain",value:"bag-glasses1.com"},{format:"domain",value:"bandgirlz.com"},{format:"domain",value:"baxsound.com"},{format:"domain",value:"bbestmall.com"},{format:"domain",value:"beatbd.com"},{format:"domain",value:"beatbydre2013.com"},{format:"domain",value:"beatbydremonster.com"},{format:"domain",value:"beatbydreheadphonesonsale.com"},{format:"domain",value:"beatbydrekopen.com"},{format:"domain",value:"beatbydreuk2014.com"},{format:"domain",value:"beatdrdres.com"},{format:"domain",value:"beatfactoryoutlets.com"},{format:"domain",value:"beatmonstersaustralia.net"},{format:"domain",value:"beats-by-dre-australia.com"},{format:"domain",value:"beats-bydrdre.net"},{format:"domain",value:"beats-bydre-mall.com"},{format:"domain",value:"beats-bydrecheapsale.com"},{format:"domain",value:"beats-bydreoutletonline.com"},{format:"domain",value:"beats-bydreoutletsale.com"},{format:"domain",value:"beats-bydreoutletsale.net"},{format:"domain",value:"beats-bydreoutletssale.net"},{format:"domain",value:"beats-bydrestore.com"},{format:"domain",value:"beats-bydreuk.com"},{format:"domain",value:"beats-deal.com"},{format:"domain",value:"beats-dre-us.com"},{format:"domain",value:"beats-headphones-buy-cheap.com"},{format:"domain",value:"beats-headphones.us"},{format:"domain",value:"beats-sale.com"},{format:"domain",value:"beats-seller.com"},{format:"domain",value:"beats-soaho.com"},{format:"domain",value:"beats1.cc"},{format:"domain",value:"beats1.cn"},{format:"domain",value:"beats1.tv"},{format:"domain",value:"beats1.com.cn"},{format:"domain",value:"beats123.com"},{format:"domain",value:"beats2.com.cn"},{format:"domain",value:"beats4.cn"},{format:"domain",value:"beats4.net"},{format:"domain",value:"beats4outlets.com"},{format:"domain",value:"beats4salecheap.com"},{format:"domain",value:"beatsallsale.com"},{format:"domain",value:"beatsaudifonos.com"},{format:"domain",value:"beatsaudiobydre.com"},{format:"domain",value:"beatsaudiobydre.net"},{format:"domain",value:"beatsaudios.net"},{format:"domain",value:"beatsbeatsmonster.com"},{format:"domain",value:"beatsbestdeals.com"},{format:"domain",value:"beatsblackfridaydeals.net"},{format:"domain",value:"beatsblackfridayretails.com"},{format:"domain",value:"beatsboxingdayuksale.com"},{format:"domain",value:"beatsbydrdre-headphones.com"},{format:"domain",value:"beatsbydrdre-officials5.com"},{format:"domain",value:"beatsbydrdre-online.com"},{format:"domain",value:"beatsbydrdre-onsale.com"},{format:"domain",value:"beatsbydrdre-store.com"},{format:"domain",value:"beatsbydrdre-store.us"},{format:"domain",value:"beatsbydrdre4sale.com"},{format:"domain",value:"beatsbydrdrebiz.com"},{format:"domain",value:"beatsbydrdrecustom.com"},{format:"domain",value:"beatsbydrdredanmark.com"},{format:"domain",value:"beatsbydrdremall.com"},{format:"domain",value:"beatsbydrdreoutlet.com"},{format:"domain",value:"beatsbydrdres.com"},{format:"domain",value:"beatsbydrdresale.net"},{format:"domain",value:"beatsbydrdrestore.com"},{format:"domain",value:"beatsbydrdreus.com"},{format:"domain",value:"beatsbydre-beatsheadphone.com"},{format:"domain",value:"beatsbydre-chen.com"},{format:"domain",value:"beatsbydre-club.com"},{format:"domain",value:"beatsbydre-headphones.com"},{format:"domain",value:"beatsbydre-headphonesshop.com"},{format:"domain",value:"beatsbydre-mall.com"},{format:"domain",value:"beatsbydre-outlet.com"},{format:"domain",value:"beatsbydre-outletsale.net"},{format:"domain",value:"beatsbydre-outletstore.com"},{format:"domain",value:"beatsbydre-sell.com"},{format:"domain",value:"beatsbydre-store.com"},{format:"domain",value:"beatsbydre-studio.com"},{format:"domain",value:"beatsbydre-us.com"},{format:"domain",value:"beatsbydre.com"},{format:"domain",value:"beatsbydre.com.cn"},{format:"domain",value:"beatsbydre.jp"},{format:"domain",value:"beatsbydre2081.com"},{format:"domain",value:"beatsbydre411.com"},{format:"domain",value:"beatsbydre4usales.com"},{format:"domain",value:"beatsbydreauofficial.com"},{format:"domain",value:"beatsbydreausale.net"},{format:"domain",value:"beatsbydreaustralia-sale.com"},{format:"domain",value:"beatsbydreaustraliaonline.com"},{format:"domain",value:"beatsbydreaustraliaonlines.com"},{format:"domain",value:"beatsbydreaustraliasales.com"},{format:"domain",value:"beatsbydrebeatsby.com"},{format:"domain",value:"beatsbydreblackfriday2013.com"},{format:"domain",value:"beatsbydreblackfridaypro.com"},{format:"domain",value:"beatsbydreboxingdayca.com"},{format:"domain",value:"beatsbydrecasquesfr.com"},{format:"domain",value:"beatsbydrecheap-outletstore.com"},{format:"domain",value:"beatsbydrecheaper.com"},{format:"domain",value:"beatsbydrecheaponlinesales.com"},{format:"domain",value:"beatsbydrecolors.com"},{format:"domain",value:"beatsbydrecustomwireless.com"},{format:"domain",value:"beatsbydrecybermondaydeals2013.com"},{format:"domain",value:"beatsbydrecybermondaydeals2013.net"},{format:"domain",value:"beatsbydredanmarks.com"},{format:"domain",value:"beatsbydredealsblackfriday.com"},{format:"domain",value:"beatsbydredealscybermonday.com"},{format:"domain",value:"beatsbydrediscount.com"},{format:"domain",value:"beatsbydrediscountonline.net"},{format:"domain",value:"beatsbydredr.com"},{format:"domain",value:"beatsbydreexecutivesale.com"},{format:"domain",value:"beatsbydreformall2013-nl.com"},{format:"domain",value:"beatsbydreforsalesonline.com"},{format:"domain",value:"beatsbydreforshop2013-nl.com"},{format:"domain",value:"beatsbydreforstore.com"},{format:"domain",value:"beatsbydreforyououtlet.com"},{format:"domain",value:"beatsbydrefr.com"},{format:"domain",value:"beatsbydrefrcasquepascher.com"},{format:"domain",value:"beatsbydrefriday.com"},{format:"domain",value:"beatsbydregot.com"},{format:"domain",value:"beatsbydrehd.com"},{format:"domain",value:"beatsbydrehd.net"},{format:"domain",value:"beatsbydreheadphones-nz.com"},{format:"domain",value:"beatsbydreheadphonesolo.com"},{format:"domain",value:"beatsbydrehut.com"},{format:"domain",value:"beatsbydreinexpensive.com"},{format:"domain",value:"beatsbydreireland-sales.com"},{format:"domain",value:"beatsbydreirelandonlines.com"},{format:"domain",value:"beatsbydreirelandsale.com"},{format:"domain",value:"beatsbydreirelandsonline.com"},{format:"domain",value:"beatsbydremall2013.com"},{format:"domain",value:"beatsbydremonsteraustralia.com"},{format:"domain",value:"beatsbydrenls.com"},{format:"domain",value:"beatsbydrenorge1.net"},{format:"domain",value:"beatsbydreofficialdanmark.com"},{format:"domain",value:"beatsbydreoksale.com"},{format:"domain",value:"beatsbydreol.com"},{format:"domain",value:"beatsbydreonlie2013-nl.com"},{format:"domain",value:"beatsbydreonlines-ireland.com"},{format:"domain",value:"beatsbydreonlines-uk.com"},{format:"domain",value:"beatsbydreonlinesale-nz.com"},{format:"domain",value:"beatsbydreoordopjes.com"},{format:"domain",value:"beatsbydreoslo.com"},{format:"domain",value:"beatsbydreoutletsale.com"},{format:"domain",value:"beatsbydreoutletscheap.com"},{format:"domain",value:"beatsbydrerealstore.com"},{format:"domain",value:"beatsbydres-shop.com"},{format:"domain",value:"beatsbydresale-uk.com"},{format:"domain",value:"beatsbydresalemall2013.com"},{format:"domain",value:"beatsbydresales.us"},{format:"domain",value:"beatsbydresalesonline-australia.com"},{format:"domain",value:"beatsbydresaleonlines-nz.com"},{format:"domain",value:"beatsbydresdanmark.net"},{format:"domain",value:"beatsbydreshop-uk.com"},{format:"domain",value:"beatsbydreshops.net"},{format:"domain",value:"beatsbydresingapores.com"},{format:"domain",value:"beatsbydresingaporesale.com"},{format:"domain",value:"beatsbydrespeakers.com"},{format:"domain",value:"beatsbydresold.com"},{format:"domain",value:"beatsbydresolohdonline-canada.com"},{format:"domain",value:"beatsbydresonline-nz.com"},{format:"domain",value:"beatsbydrestorevip.com"},{format:"domain",value:"beatsbydressale.com"},{format:"domain",value:"beatsbydressolo.com"},{format:"domain",value:"beatsbydresstudio.com"},{format:"domain",value:"beatsbydrestudio-australia.com"},{format:"domain",value:"beatsbydrestudio.com"},{format:"domain",value:"beatsbydretoutlet.com"},{format:"domain",value:"beatsbydreuk.com"},{format:"domain",value:"beatsbydreuk.net"},{format:"domain",value:"beatsbydreus.com"},{format:"domain",value:"beatsbydrevipde.com"},{format:"domain",value:"beatsbydrew.com"},{format:"domain",value:"beatsbydrsmonsterinusa.com"},{format:"domain",value:"beatsbymusic.net"},{format:"domain",value:"beatsbysdrbre.com"},{format:"domain",value:"beatsbysdrdres.com"},{format:"domain",value:"beatscasque-france.com"},{format:"domain",value:"beatscheap-nz.com"},{format:"domain",value:"beatscheap-uk.com"},{format:"domain",value:"beatscheapforsale.com"},{format:"domain",value:"beatscollection2014.com"},{format:"domain",value:"beatscustomblackfriday.com"},{format:"domain",value:"beatsdanmark2013.com"},{format:"domain",value:"beatsdrdre-headphones.com"},{format:"domain",value:"beatsdrdre-it.com"},{format:"domain",value:"beatsdrdre-solo.com"},{format:"domain",value:"beatsdrdre2014.com"},{format:"domain",value:"beatsdrdrecuffie.net"},{format:"domain",value:"beatsdrdrekaufenschweiz.net"},{format:"domain",value:"beatsdrdreneon.com"},{format:"domain",value:"beatsdre-monster.com"},{format:"domain",value:"beatsdre.net"},{format:"domain",value:"beatsdre4cheap.com"},{format:"domain",value:"beatsdrecheap.com"},{format:"domain",value:"beatsdredreheadphones.com"},{format:"domain",value:"beatsdreforsale.com"},{format:"domain",value:"beatsdreinau.com"},{format:"domain",value:"beatsdremonster-uk.com"},{format:"domain",value:"beatsdrenewcolorful4usale.com"},{format:"domain",value:"beatsdreoutletsale.com"},{format:"domain",value:"beatsdresale2013.com"},{format:"domain",value:"beatsdresalestore.com"},{format:"domain",value:"beatsdresolo2013.com"},{format:"domain",value:"beatsdreus.com"},{format:"domain",value:"beatsearbudsheadphoness.com"},{format:"domain",value:"beatsfacstore.com"},{format:"domain",value:"beatsfactoroutlets.com"},{format:"domain",value:"beatsfactorycollection.com"},{format:"domain",value:"beatsfactoryoutles.com"},{format:"domain",value:"beatsforcheap-usa.com"},{format:"domain",value:"beatsforme.com"},{format:"domain",value:"beatsfranceofficiel.com"},{format:"domain",value:"beatselectronic.net"},{format:"domain",value:"beatselectronics.com"},{format:"domain",value:"beatsep.cn"},{format:"domain",value:"beatsep.com"},{format:"domain",value:"beatsep.net"},{format:"domain",value:"beatsheadphones-discount.com"},{format:"domain",value:"beatsheadphones1.com"},{format:"domain",value:"beatsheadphones2u.com"},{format:"domain",value:"beatsheadphonesale.com"},{format:"domain",value:"beatsheadphonesdealer.com"},{format:"domain",value:"beatsheadphonesforcheap.net"},{format:"domain",value:"beatsheadphonesonline.com"},{format:"domain",value:"beatsheadphoness.com"},{format:"domain",value:"beatsheadphonestudio.com"},{format:"domain",value:"beatsheadphonesusamall.com"},{format:"domain",value:"bestshoesale2014.net"},{format:"domain",value:"beatshopuk.com"},{format:"domain",value:"beatsincanada.com"},{format:"domain",value:"beatsinsingapore.com"},{format:"domain",value:"beatsireland.net"},{format:"domain",value:"beatsjoy.com"},{format:"domain",value:"beatsmonstersales.com"},{format:"domain",value:"beatsmusic.com"},{format:"domain",value:"beatsmusic.wang"},{format:"domain",value:"beatsneon.com"},{format:"domain",value:"beatsnzsale.com"},{format:"domain",value:"beatsodre.com"},{format:"domain",value:"beatsofdre-usa.com"},{format:"domain",value:"beatsonblackfriday2013.com"},{format:"domain",value:"beatsone.net"},{format:"domain",value:"beatsoutlet.net"},{format:"domain",value:"beatsoutletanytime.com"},{format:"domain",value:"beatsoutletonlines.com"},{format:"domain",value:"beatspascher-bydre.com"},{format:"domain",value:"beatspascher-fr.net"},{format:"domain",value:"beatspascher.net"},{format:"domain",value:"beatspaschers.net"},{format:"domain",value:"beatspillnewcolor.com"},{format:"domain",value:"beatspills.com"},{format:"domain",value:"beatspromonsterjp.com"},{format:"domain",value:"beatspromotions.com"},{format:"domain",value:"beatssales.com"},{format:"domain",value:"beatssaleus.com"},{format:"domain",value:"beatssaustraliabuy.com"},{format:"domain",value:"beatssbyaustralia.com"},{format:"domain",value:"beatssbydredanmark.com"},{format:"domain",value:"beatsshop-uk.com"},{format:"domain",value:"beatsshop-usa.com"},{format:"domain",value:"beatsshopstore.com"},{format:"domain",value:"beatssingapores.com"},{format:"domain",value:"beatssingaporeshop.com"},{format:"domain",value:"beatsstudiohodetelefoner.com"},{format:"domain",value:"beatsstudiosite.com"},{format:"domain",value:"beatstoreusa.com"},{format:"domain",value:"beatsua.com"},{format:"domain",value:"beatswholesale.us"},{format:"domain",value:"beatswirelesscheap.com"},{format:"domain",value:"beatswirelesscuffie.com"},{format:"domain",value:"begin-trade.com"},{format:"domain",value:"bestbeats4u.com"},{format:"domain",value:"biitii.com"},{format:"domain",value:"blackfridaydrebeatsnew.com"},{format:"domain",value:"blackfridaydrebeatsshop.com"},{format:"domain",value:"bloommicroventures.com"},{format:"domain",value:"bookonsky.net"},{format:"domain",value:"bossae.com"},{format:"domain",value:"brandeasygo.com"},{format:"domain",value:"brandelectronic.com"},{format:"domain",value:"brandproducts1688.com"},{format:"domain",value:"brands098.com"},{format:"domain",value:"businesswebwise.com"},{format:"domain",value:"buy-from-shanghai.com"},{format:"domain",value:"buybeatsbydre-uk.com"},{format:"domain",value:"buybeatsheadphonesbydre.com"},{format:"domain",value:"buycheapbeatsbus.com"},{format:"domain",value:"buycheapbeatsbydre.com"},{format:"domain",value:"buycheapbeatsbydreshop.com"},{format:"domain",value:"buycheapbeatsdreuk.com"},{format:"domain",value:"buydrdrebeatbox.com"},{format:"domain",value:"buyminibeatbox.com"},{format:"domain",value:"buyonlineheadphones.com"},{format:"domain",value:"buyshoponly.com"},{format:"domain",value:"buzzardflapper.com"},{format:"domain",value:"bybeatsdre.com"},{format:"domain",value:"bydrebeats.com"},{format:"domain",value:"canada-beatsbydre.com"},{format:"domain",value:"casque-fr.com"},{format:"domain",value:"casquebeatsbydrdresolohd.com"},{format:"domain",value:"casquebeatsdocteurdre.com"},{format:"domain",value:"casquebeatsdre2013.com"},{format:"domain",value:"casquebeatsenligne.com"},{format:"domain",value:"casquebeatsfracheter.com"},{format:"domain",value:"casquebeatsmer.net"},{format:"domain",value:"casquebeatsofficiel-fr.com"},{format:"domain",value:"casquebeatspascher2013.com"},{format:"domain",value:"casquebeatssolo.net"},{format:"domain",value:"casquedrdrebeatssfr.com"},{format:"domain",value:"casquemonsterbeats.com"},{format:"domain",value:"casquemonsterbeatsbydre2013.com"},{format:"domain",value:"casquesbeatsaudio.com"},{format:"domain",value:"cheap-beats-by-dre.net"},{format:"domain",value:"cheap-beatsbydre.com"},{format:"domain",value:"cheapbagshoes.com"},{format:"domain",value:"cheapbeats.us"},{format:"domain",value:"cheapbeats365.com"},{format:"domain",value:"cheapbeats4sale.net"},{format:"domain",value:"cheapbeatsaustraliasale.com"},{format:"domain",value:"cheapbeatsbus.com"},{format:"domain",value:"cheapbeatsbydr.com"},{format:"domain",value:"cheapbeatsbydrdrepro.com"},{format:"domain",value:"cheapbeatsbydre-au.com"},{format:"domain",value:"cheapbeatsbydre99.com"},{format:"domain",value:"cheapbeatsbydrefau.com"},{format:"domain",value:"cheapbeatsbydremall.com"},{format:"domain",value:"cheapbeatsbydremonster.com"},{format:"domain",value:"cheapbeatsbydrenz.net"},{format:"domain",value:"cheapbeatsbydreonsale.com"},{format:"domain",value:"cheapbeatsbydreoutlet-nz.com"},{format:"domain",value:"cheapbeatsbydreoutlet.com"},{format:"domain",value:"cheapbeatsbydreoutlets2013.com"},{format:"domain",value:"cheapbeatsbydresale.com"},{format:"domain",value:"cheapbeatsbydreshop.com"},{format:"domain",value:"cheapbeatsdrdresolo.com"},{format:"domain",value:"cheapbeatsbydrestudioedition.com"},{format:"domain",value:"cheapbeatsbydrestudioutlet.com"},{format:"domain",value:"cheapbeatsdrestudios.com"},{format:"domain",value:"cheapbeatsheadphone2014.com"},{format:"domain",value:"cheapbeatsheadphones.us"},{format:"domain",value:"cheapbeatsie.com"},{format:"domain",value:"cheapbeatsla.com"},{format:"domain",value:"cheapbeatssale4u.com"},{format:"domain",value:"cheapbeatsshopbydre.com"},{format:"domain",value:"cheapcustombeatsbydre.com"},{format:"domain",value:"cheapdrdrebeats8.com"},{format:"domain",value:"cheapdrdrebeatsca.com"},{format:"domain",value:"cheapdrebeats8.net"},{format:"domain",value:"cheaperbeatsbydresale.com"},{format:"domain",value:"cheapestbeatsdrdre.com"},{format:"domain",value:"cheapheadphonesland.com"},{format:"domain",value:"cheapheadphonessale.com"},{format:"domain",value:"cheapheadsetmall.com"},{format:"domain",value:"cheapheadsetshop.com"},{format:"domain",value:"cheapmonsterbeatsbydrdre.com"},{format:"domain",value:"cheapmonsterbeatsheadsets.com"},{format:"domain",value:"cheapmonstersbeatsonsale.com"},{format:"domain",value:"cheapmonsterbeatssale.com"},{format:"domain",value:"cheapmonsterbeatsusa.us"},{format:"domain",value:"cheapnewbeatsbydre.com"},{format:"domain",value:"cheapsalemonster.com"},{format:"domain",value:"cheapshoesvip.com"},{format:"domain",value:"cheapwireless04.com"},{format:"domain",value:"cheapwirelessbeats.com"},{format:"domain",value:"cheerwholesale.us"},{format:"domain",value:"chihair-straightener.com"},{format:"domain",value:"chinaclothesstore.com"},{format:"domain",value:"ciattackers.com"},{format:"domain",value:"cmhalq.com"},{format:"domain",value:"cnshopin.com"},{format:"domain",value:"coolmonster.net"},{format:"domain",value:"cozydrdrebeats.com"},{format:"domain",value:"cqcorea.com"},{format:"domain",value:"cuffiesaldi.com"},{format:"domain",value:"custombeatsbydrebuy.com"},{format:"domain",value:"custombeatsdeals.com"},{format:"domain",value:"custombeatsforcheap.com"},{format:"domain",value:"custombeatsny.com"},{format:"domain",value:"custombeatssbydreus.com"},{format:"domain",value:"customdrdrebeats.com"},{format:"domain",value:"customizedbeatbydre.com"},{format:"domain",value:"customizedbeatsbydre.com"},{format:"domain",value:"customizedbeatsdre.com"},{format:"domain",value:"cybermondaybeats4sale.com"},{format:"domain",value:"danemarket.com"},{format:"domain",value:"danmarkbeatsbydrdre.com"},{format:"domain",value:"dctbeatsbydre.com"},{format:"domain",value:"dealsbeatsblackfriday.com"},{format:"domain",value:"detaliczny.com"},{format:"domain",value:"discountbeatsbydre-us.com"},{format:"domain",value:"discountbeatsstore.com"},{format:"domain",value:"dkbeatsbydre.com"},{format:"domain",value:"drbeatsukmart.com"},{format:"domain",value:"drdre-beats.com"},{format:"domain",value:"drdrebeats-chen.com"},{format:"domain",value:"drdrebeats-headphone.com"},{format:"domain",value:"drdrebeats-usa.com"},{format:"domain",value:"drdrebeatsale.com"},{format:"domain",value:"drdrebeatsbillig.com"},{format:"domain",value:"drdrebeatsdesale.com"},{format:"domain",value:"drdrebeatsdiscount.com"},{format:"domain",value:"drdrebeatsforu.com"},{format:"domain",value:"drdrebeatsretail2013.com"},{format:"domain",value:"drdrebeatssale7.com"},{format:"domain",value:"drdrebeatsuk.com"},{format:"domain",value:"drdreheadphonebeats.com"},{format:"domain",value:"drdreheadphonekey.com"},{format:"domain",value:"drdreheadphonesusstore.com"},{format:"domain",value:"drdremonster-beats.com"},{format:"domain",value:"drdremonsterdre.com"},{format:"domain",value:"drdreprobeatssale.com"},{format:"domain",value:"drdrefnac.com"},{format:"domain",value:"drebeats-australia.com"},{format:"domain",value:"drebeats-france.com"},{format:"domain",value:"drebeats-monster.com"},{format:"domain",value:"drebeats-monsteraustralia.com"},{format:"domain",value:"drebeats-monsterusa.com"},{format:"domain",value:"drebeats-singapore.com"},{format:"domain",value:"drebeats-singapore.net"},{format:"domain",value:"drebeats-singaporecheap.com"},{format:"domain",value:"drebeats-singaporecheap.net"},{format:"domain",value:"drebeats-solo.com"},{format:"domain",value:"drebeats-studio.com"},{format:"domain",value:"drebeatsaustralia-cheap.com"},{format:"domain",value:"drebeatsaustralia-cheap.net"},{format:"domain",value:"drebeatsbuy.com"},{format:"domain",value:"drebeatsbydreoutlet.com"},{format:"domain",value:"drebeatscanada.com"},{format:"domain",value:"drebeatsdeutschland.net"},{format:"domain",value:"drebeatsforsaleus.com"},{format:"domain",value:"drebeatsheadphones-nz.com"},{format:"domain",value:"drebeatshome.com"},{format:"domain",value:"drebeatsoutletstore.com"},{format:"domain",value:"drebeatsoldes.com"},{format:"domain",value:"drebeatspill.com"},{format:"domain",value:"drebeatssite.com"},{format:"domain",value:"drebeatssolocybermondaysale.com"},{format:"domain",value:"drebeatsstudio2013.com"},{format:"domain",value:"drebeatstudio.com"},{format:"domain",value:"drebyby.com"},{format:"domain",value:"dremonsterbeatsoutlets.com"},{format:"domain",value:"dreprobeats.com"},{format:"domain",value:"dreprofy.com"},{format:"domain",value:"dtsell.com"},{format:"domain",value:"earphonescheapest.com"},{format:"domain",value:"ebuyheadphones.com"},{format:"domain",value:"esbeatsbydrebuy.com"},{format:"domain",value:"etheadphones.com"},{format:"domain",value:"famosascalvas.com"},{format:"domain",value:"findmybeats.com"},{format:"domain",value:"fr-beatsbydrestore.com"},{format:"domain",value:"francecasquebeatssolde.com"},{format:"domain",value:"frcasquesbeats.com"},{format:"domain",value:"free-aa.com"},{format:"domain",value:"free-sns.com"},{format:"domain",value:"frishoes.com"},{format:"domain",value:"gamebeforethegame.com"},{format:"domain",value:"getdrebeatssale.com"},{format:"domain",value:"gmnetworks.net"},{format:"domain",value:"gobeatsye.com"},{format:"domain",value:"gobuyonlinestore.net"},{format:"domain",value:"goodsdunk.net"},{format:"domain",value:"headphonepubs.com"},{format:"domain",value:"headphones-cool.com"},{format:"domain",value:"headphones-dre.com"},{format:"domain",value:"headphones-outlet-online.com"},{format:"domain",value:"headphonesbeatsaudio.com"},{format:"domain",value:"headphonesbeatsbydre.com"},{format:"domain",value:"headphoneses.com"},{format:"domain",value:"headphoneshome.com"},{format:"domain",value:"headphoneshotsales.com"},{format:"domain",value:"headphonesol.com"},{format:"domain",value:"headphonesretailer.com"},{format:"domain",value:"headphonessupply.com"},{format:"domain",value:"headphonezip.com"},{format:"domain",value:"headset987.com"},{format:"domain",value:"hellokittybeats.com"},{format:"domain",value:"highbolt.net"},{format:"domain",value:"highdefinitionbeatsbydre.com"},{format:"domain",value:"hipaa6020.com"},{format:"domain",value:"hipzoom.net"},{format:"domain",value:"honawalaan.com"},{format:"domain",value:"hotbeatsonsale.com"},{format:"domain",value:"hotmonsterbeats.com"},{format:"domain",value:"hottestheadphonesonline.com"},{format:"domain",value:"hrsaz.com"},{format:"domain",value:"ibeats-uk.com"},{format:"domain",value:"ibeatsbydre.cc"},{format:"domain",value:"ibeatsbydre.com"},{format:"domain",value:"igoshopping.net"},{format:"domain",value:"illianacomputerrecycling.com"},{format:"domain",value:"imonsterbeats.com"},{format:"domain",value:"incentivetravelgifts.com"},{format:"domain",value:"ioffergift.com"},{format:"domain",value:"islamiccenterofnewlondon.com"},{format:"domain",value:"italiabeatsbydrdre.com"},{format:"domain",value:"jkbeats.com"},{format:"domain",value:"kickshatchannel.com"},{format:"domain",value:"kobbeatssbydredk.com"},{format:"domain",value:"kopfhorergunstigshop.com"},{format:"domain",value:"leecountytimes.com"},{format:"domain",value:"lexuemei.com"},{format:"domain",value:"lovebeatsdr.com"},{format:"domain",value:"lovemarca.com"},{format:"domain",value:"luckyissue.com"},{format:"domain",value:"lyzsxx.com"},{format:"domain",value:"mairbeats.com"},{format:"domain",value:"makeeu.com"},{format:"domain",value:"mallheadphone.com"},{format:"domain",value:"mbeats-tech.com"},{format:"domain",value:"mbheadphone.com"},{format:"domain",value:"micstl.com"},{format:"domain",value:"mmonsterheadphones.net"},{format:"domain",value:"monbeats2013.com"},{format:"domain",value:"monster-beats-by-dr-dre.com"},{format:"domain",value:"monster-beats-headphones.com"},{format:"domain",value:"monsterbeats-cheap.com"},{format:"domain",value:"monsterbeats-headphone.com"},{format:"domain",value:"monsterbeats-onsale.com"},{format:"domain",value:"monsterbeats-solo.com"},{format:"domain",value:"monsterbeats-solo.net"},{format:"domain",value:"monsterbeats365buy.com"},{format:"domain",value:"monsterbeats8beatsbydre.com"},{format:"domain",value:"monsterbeatsale.com"},{format:"domain",value:"monsterbeatsalestore.com"},{format:"domain",value:"monsterbeatssalg.com"},{format:"domain",value:"monsterbeatsau.com"},{format:"domain",value:"monsterbeatsbydrdre-nz.com"},{format:"domain",value:"monsterbeatsbydrdre-usa.com"},{format:"domain",value:"monsterbeatsbydrdrecanada.com"},{format:"domain",value:"monsterbeatsbydrdrestudio.com"},{format:"domain",value:"monsterbeatsbydre-nz.com"},{format:"domain",value:"monsterbeatsbydre-usa.com"},{format:"domain",value:"monsterbeatsbydre2015.com"},{format:"domain",value:"monsterbeatsbydreaustraliacheap.com"},{format:"domain",value:"monsterbeatsbydrebilligde.com"},{format:"domain",value:"monsterbeatsbydrefactory.com"},{format:"domain",value:"monsterbeatsbydrenew.com"},{format:"domain",value:"monsterbeatsbydres.com"},{format:"domain",value:"monsterbeatsbydreshop.com"},{format:"domain",value:"monsterbeatscasques.com"},{format:"domain",value:"monsterbeatscommunity.com"},{format:"domain",value:"monsterbeatsdrdrecheap.com"},{format:"domain",value:"monsterbeatsfactory.net"},{format:"domain",value:"monsterbeatsfinland.com"},{format:"domain",value:"monsterbeatsforsale.com"},{format:"domain",value:"monsterbeatsheadphone.com"},{format:"domain",value:"monsterbeatsheadphones.net"},{format:"domain",value:"monsterbeatshere.com"},{format:"domain",value:"monsterbeatsitaly.com"},{format:"domain",value:"monsterbeatsmall.com"},{format:"domain",value:"monsterbeatsnegozi.net"},{format:"domain",value:"monsterbeatsok.com"},{format:"domain",value:"monsterbeatsonlinestoreuk.com"},{format:"domain",value:"monsterbeatsoutlet.us"},{format:"domain",value:"monsterbeatspascher.net"},{format:"domain",value:"monsterbeatsru.com"},{format:"domain",value:"monsterbeatssales.com"},{format:"domain",value:"monsterbeatsshops.net"},{format:"domain",value:"monsterbeatsstore.com"},{format:"domain",value:"monsterbeatssydneyaustralia.com"},{format:"domain",value:"monsterbeatstang.com"},{format:"domain",value:"monsterbeatstienda.com"},{format:"domain",value:"monsterbeatstudio.com"},{format:"domain",value:"monsterbydrebeat.com"},{format:"domain",value:"monstercasquebeatspascher.net"},{format:"domain",value:"monstercheapbeatss.com"},{format:"domain",value:"monsterdrebeats-canada.net"},{format:"domain",value:"monsterdrebeats-usa.com"},{format:"domain",value:"monsterdrebeats-usa.net"},{format:"domain",value:"monsterheadphone.net"},{format:"domain",value:"monsterproduct.net"},{format:"domain",value:"monstersbeatbydres.com"},{format:"domain",value:"monstersdebea.com"},{format:"domain",value:"monstershopcheapbeats.net"},{format:"domain",value:"moreheadphones.com"},{format:"domain",value:"ms4dre.com"},{format:"domain",value:"mybeatsbydrestudio.com"},{format:"domain",value:"mybeatsbydreuk.com"},{format:"domain",value:"mybeatscheapbydre.com"},{format:"domain",value:"myferrariheadphones.com"},{format:"domain",value:"namemybeats.com"},{format:"domain",value:"neborder.com"},{format:"domain",value:"negozimonsterbeats.com"},{format:"domain",value:"negoziomonsterbeats.com"},{format:"domain",value:"newbeatsblackfriday.com"},{format:"domain",value:"newbemany.com"},{format:"domain",value:"newdrediscount.com"},{format:"domain",value:"newestbeatsbydre.com"},{format:"domain",value:"newlysprung.net"},{format:"domain",value:"newmonst1erbeatsto1re.com"},{format:"domain",value:"newmonsterbeatsheadphones.com"},{format:"domain",value:"newschristmasshopping.com"},{format:"domain",value:"nflhotsalejerseys.com"},{format:"domain",value:"nicesshop.net"},{format:"domain",value:"offerairjordanlebron.com"},{format:"domain",value:"officialbeatsbydreshop.com"},{format:"domain",value:"officialbeatsbydrestore.com"},{format:"domain",value:"officialdrdre.com"},{format:"domain",value:"officialheadphone.com"},{format:"domain",value:"ogameblog.com"},{format:"domain",value:"onbeatsbydresale.com"},{format:"domain",value:"onlinemonsterbeatsonsale.com"},{format:"domain",value:"onsalekey.com"},{format:"domain",value:"onsaletrend.com"},{format:"domain",value:"outletbeatsshop.com"},{format:"domain",value:"pascherbeatsmonster.com"},{format:"domain",value:"paulsimon-music.com"},{format:"domain",value:"perfectkickz.net"},{format:"domain",value:"personeelsland.com"},{format:"domain",value:"picknicekicks.net"},{format:"domain",value:"pickshoesclothes.com"},{format:"domain",value:"pillbeatsblackfridaysale.com"},{format:"domain",value:"pocketbiketrader.com"},{format:"domain",value:"powerbeats2wireless.com"},{format:"domain",value:"powerbeatsbydrdre.com"},{format:"domain",value:"powerbeatsbydre.com"},{format:"domain",value:"promonsterbeatsbydre.com"},{format:"domain",value:"prostudiobeatscybersale.com"},{format:"domain",value:"rbsgr.com"},{format:"domain",value:"repsneakermall.com"},{format:"domain",value:"repswing.com"},{format:"domain",value:"salebeatslasteststyle4you.com"},{format:"domain",value:"saleblackfridaydrebeats.com"},{format:"domain",value:"salecheaphandbags.com"},{format:"domain",value:"samebags.com"},{format:"domain",value:"sanvaras.com"},{format:"domain",value:"scnshop.cc"},{format:"domain",value:"shoers.com"},{format:"domain",value:"shoestop2.com"},{format:"domain",value:"shop-headphones.net"},{format:"domain",value:"shopbeatsdre.com"},{format:"domain",value:"shopbydre.com"},{format:"domain",value:"shopcustomizedbeats.com"},{format:"domain",value:"shopdrebeats.com"},{format:"domain",value:"shopmonsterbeats.com"},{format:"domain",value:"shopping-days.net"},{format:"domain",value:"shoppinguheadphones.com"},{format:"domain",value:"sneaker666.com"},{format:"domain",value:"sneakerpage.net"},{format:"domain",value:"sneakerskick.com"},{format:"domain",value:"solostudioksale.com"},{format:"domain",value:"soso7778.com"},{format:"domain",value:"specialtyheadphones.com"},{format:"domain",value:"spiritclubs.com"},{format:"domain",value:"straightouttasomewhere.com"},{format:"domain",value:"studiobeatsbydrdre.com"},{format:"domain",value:"sulwerphoto.com"},{format:"domain",value:"sunglassessale2014.com"},{format:"domain",value:"superearsenjoy.com"},{format:"domain",value:"supplybestjerseys.com"},{format:"domain",value:"sustainthesound.com"},{format:"domain",value:"sverigebeatsbydrdre.com"},{format:"domain",value:"szcheapmonsterheadphones.com"},{format:"domain",value:"szwinnertechnology.com"},{format:"domain",value:"takegoto.com"},{format:"domain",value:"the-monster-beats.com"},{format:"domain",value:"thebeatsbydre.com"},{format:"domain",value:"thebeatsbydre.net"},{format:"domain",value:"thebeatsheadphonesale.com"},{format:"domain",value:"theuab.net"},{format:"domain",value:"topbeatsbydrdreoutlet.com"},{format:"domain",value:"topbeatsdealer.com"},{format:"domain",value:"topbeatsforsale.com"},{format:"domain",value:"tradevip1.com"},{format:"domain",value:"tteshop.com"},{format:"domain",value:"ubnw.net"},{format:"domain",value:"unstyle.us"},{format:"domain",value:"usa-beatsbydreheadphonesonsale.net"},{format:"domain",value:"v-has.com"},{format:"domain",value:"vip-beats.com"},{format:"domain",value:"vipbeatsbydre.com"},{format:"domain",value:"vipheadphones.com"},{format:"domain",value:"vipshoes2.com"},{format:"domain",value:"wasdj.com"},{format:"domain",value:"wholesale-exporter1.com"},{format:"domain",value:"wholesalediscountpurses.com"},{format:"domain",value:"wholesalefine.com"},{format:"domain",value:"wholesaleonlinemart.com"},{format:"domain",value:"worldcoinpay.com"},{format:"domain",value:"yourmonsterbeats.com"},{format:"full domain",value:"beatselectronicsllc.tt.omtrdc.net"},{format:"domain",value:"apple-icloud.cn"},{format:"domain",value:"appleicloud.cn"},{format:"domain",value:"applemx-icloud.com"},{format:"domain",value:"icloud-apple.cn"},{format:"domain",value:"icloud-content.com"},{format:"domain",value:"icloud-isupport.com"},{format:"domain",value:"icloud.ch"},{format:"domain",value:"icloud.com"},{format:"domain",value:"icloud.com.cn"},{format:"domain",value:"icloud.de"},{format:"domain",value:"icloud.ee"},{format:"domain",value:"icloud.fi"},{format:"domain",value:"icloud.fr"},{format:"domain",value:"icloud.hu"},{format:"domain",value:"icloud.ie"},{format:"domain",value:"icloud.is"},{format:"domain",value:"icloud.jp"},{format:"domain",value:"icloud.lv"},{format:"domain",value:"icloud.net.cn"},{format:"domain",value:"icloud.om"},{format:"domain",value:"icloud.org"},{format:"domain",value:"icloud.pt"},{format:"domain",value:"icloud.ro"},{format:"domain",value:"icloud.se"},{format:"domain",value:"icloud.si"},{format:"domain",value:"icloud.sk"},{format:"domain",value:"icloud.vn"},{format:"domain",value:"icloudads.net"},{format:"domain",value:"icloudapple.cn"},{format:"domain",value:"icloudbox.net"},{format:"domain",value:"icloudbrowser.net"},{format:"domain",value:"icloude.com"},{format:"domain",value:"icloudhome.com"},{format:"domain",value:"icloudmail.net"},{format:"domain",value:"icloudmusic.net"},{format:"domain",value:"icloudnet.net"},{format:"domain",value:"icloudpay.net"},{format:"domain",value:"icloudo.com"},{format:"domain",value:"icloudo.de"},{format:"domain",value:"icloudo.net"},{format:"domain",value:"icloudos.de"},{format:"domain",value:"icloudos.net"},{format:"domain",value:"icloudsecure.net"},{format:"domain",value:"icloudsetup.com"},{format:"domain",value:"ios-icloud.com"},{format:"domain",value:"me.com"},{format:"domain",value:"myicloud.net"},{format:"domain",value:"mylcloud.net"},{format:"domain",value:"wwwicloud.com"},{format:"full domain",value:"www-cdn.icloud.com.akadns.net"},{format:"domain",value:"12diasdepresentesdeitunes.com"},{format:"domain",value:"12diasderegalosdeitunes.cl"},{format:"domain",value:"12diasderegalosdeitunes.co"},{format:"domain",value:"12diasderegalosdeitunes.co.cr"},{format:"domain",value:"12diasderegalosdeitunes.co.ni"},{format:"domain",value:"12diasderegalosdeitunes.co.ve"},{format:"domain",value:"12diasderegalosdeitunes.com"},{format:"domain",value:"12diasderegalosdeitunes.com.co"},{format:"domain",value:"12diasderegalosdeitunes.com.hn"},{format:"domain",value:"12diasderegalosdeitunes.com.ni"},{format:"domain",value:"12diasderegalosdeitunes.com.ve"},{format:"domain",value:"12diasderegalosdeitunes.cr"},{format:"domain",value:"12diasderegalosdeitunes.gt"},{format:"domain",value:"12diasderegalosdeitunes.hn"},{format:"domain",value:"12diasderegalosdeitunes.pe"},{format:"domain",value:"12joursdecadeauxdeitunes.com"},{format:"domain",value:"apple-itunes.cn"},{format:"domain",value:"itun.es"},{format:"domain",value:"itunbes.com"},{format:"domain",value:"ituneas.com"},{format:"domain",value:"itunes-apple.cn"},{format:"domain",value:"itunes-apple.com.akadns.net"},{format:"domain",value:"itunes-radio.net"},{format:"domain",value:"itunes.ca"},{format:"domain",value:"itunes.co"},{format:"domain",value:"itunes.co.th"},{format:"domain",value:"itunes.com"},{format:"domain",value:"itunes.hk"},{format:"domain",value:"itunes.mx"},{format:"domain",value:"itunes.org"},{format:"domain",value:"itunes.rio"},{format:"domain",value:"itunes.us"},{format:"domain",value:"itunes12days.com"},{format:"domain",value:"itunesapple.cn"},{format:"domain",value:"itunesessentials.com"},{format:"domain",value:"itunesfestivals.com"},{format:"domain",value:"itunesiradio.com"},{format:"domain",value:"ituneslatino.com"},{format:"domain",value:"ituneslogin.net"},{format:"domain",value:"itunesmatch.com"},{format:"domain",value:"itunesparty.com"},{format:"domain",value:"itunesradio.cn"},{format:"domain",value:"itunesradio.com"},{format:"domain",value:"itunesradio.com.cn"},{format:"domain",value:"itunesradio.rio"},{format:"domain",value:"itunesradio.tv"},{format:"domain",value:"itunesradio.tw"},{format:"domain",value:"itunesstore.co"},{format:"domain",value:"itunesu.com"},{format:"domain",value:"itunesu.net"},{format:"domain",value:"iutunes.com"},{format:"domain",value:"wwwitunes.com"},{format:"domain",value:"appleswift.com"},{format:"domain",value:"swift.org"},{format:"domain",value:"swiftui.cn"},{format:"domain",value:"swiftui.com.cn"},{format:"domain",value:"mask-h2.icloud.com"},{format:"domain",value:"mask.icloud.com"}],[{format:"domain",value:"and"},{format:"domain",value:"chrome"},{format:"domain",value:"dclk"},{format:"domain",value:"gbiz"},{format:"domain",value:"gle"},{format:"domain",value:"gmail"},{format:"domain",value:"goo"},{format:"domain",value:"goog"},{format:"domain",value:"google"},{format:"domain",value:"guge"},{format:"domain",value:"hangout"},{format:"domain",value:"nexus"},{format:"domain",value:"xn--flw351e"},{format:"domain",value:"xn--qcka1pmc"},{format:"domain",value:"google.ad"},{format:"domain",value:"google.ae"},{format:"domain",value:"google.al"},{format:"domain",value:"google.am"},{format:"domain",value:"google.as"},{format:"domain",value:"google.at"},{format:"domain",value:"google.az"},{format:"domain",value:"google.ba"},{format:"domain",value:"google.be"},{format:"domain",value:"google.bf"},{format:"domain",value:"google.bg"},{format:"domain",value:"google.bi"},{format:"domain",value:"google.bj"},{format:"domain",value:"google.bs"},{format:"domain",value:"google.bt"},{format:"domain",value:"google.by"},{format:"domain",value:"google.ca"},{format:"domain",value:"google.cat"},{format:"domain",value:"google.cd"},{format:"domain",value:"google.cf"},{format:"domain",value:"google.cg"},{format:"domain",value:"google.ch"},{format:"domain",value:"google.ci"},{format:"domain",value:"google.cl"},{format:"domain",value:"google.cm"},{format:"domain",value:"google.cn"},{format:"domain",value:"google.co"},{format:"domain",value:"google.co.ao"},{format:"domain",value:"google.co.bw"},{format:"domain",value:"google.co.ck"},{format:"domain",value:"google.co.cr"},{format:"domain",value:"google.co.id"},{format:"domain",value:"google.co.il"},{format:"domain",value:"google.co.in"},{format:"domain",value:"google.co.jp"},{format:"domain",value:"google.co.ke"},{format:"domain",value:"google.co.kr"},{format:"domain",value:"google.co.ls"},{format:"domain",value:"google.co.ma"},{format:"domain",value:"google.co.mz"},{format:"domain",value:"google.co.nz"},{format:"domain",value:"google.co.th"},{format:"domain",value:"google.co.tz"},{format:"domain",value:"google.co.ug"},{format:"domain",value:"google.co.uk"},{format:"domain",value:"google.co.uz"},{format:"domain",value:"google.co.ve"},{format:"domain",value:"google.co.vi"},{format:"domain",value:"google.co.za"},{format:"domain",value:"google.co.zm"},{format:"domain",value:"google.co.zw"},{format:"domain",value:"google.com"},{format:"domain",value:"google.com.af"},{format:"domain",value:"google.com.ag"},{format:"domain",value:"google.com.ai"},{format:"domain",value:"google.com.ar"},{format:"domain",value:"google.com.au"},{format:"domain",value:"google.com.bd"},{format:"domain",value:"google.com.bh"},{format:"domain",value:"google.com.bn"},{format:"domain",value:"google.com.bo"},{format:"domain",value:"google.com.br"},{format:"domain",value:"google.com.bz"},{format:"domain",value:"google.com.co"},{format:"domain",value:"google.com.cu"},{format:"domain",value:"google.com.cy"},{format:"domain",value:"google.com.do"},{format:"domain",value:"google.com.ec"},{format:"domain",value:"google.com.eg"},{format:"domain",value:"google.com.et"},{format:"domain",value:"google.com.fj"},{format:"domain",value:"google.com.gh"},{format:"domain",value:"google.com.gi"},{format:"domain",value:"google.com.gt"},{format:"domain",value:"google.com.hk"},{format:"domain",value:"google.com.jm"},{format:"domain",value:"google.com.kh"},{format:"domain",value:"google.com.kw"},{format:"domain",value:"google.com.lb"},{format:"domain",value:"google.com.ly"},{format:"domain",value:"google.com.mm"},{format:"domain",value:"google.com.mt"},{format:"domain",value:"google.com.mx"},{format:"domain",value:"google.com.my"},{format:"domain",value:"google.com.na"},{format:"domain",value:"google.com.ng"},{format:"domain",value:"google.com.ni"},{format:"domain",value:"google.com.np"},{format:"domain",value:"google.com.om"},{format:"domain",value:"google.com.pa"},{format:"domain",value:"google.com.pe"},{format:"domain",value:"google.com.pg"},{format:"domain",value:"google.com.ph"},{format:"domain",value:"google.com.pk"},{format:"domain",value:"google.com.pr"},{format:"domain",value:"google.com.py"},{format:"domain",value:"google.com.qa"},{format:"domain",value:"google.com.sa"},{format:"domain",value:"google.com.sb"},{format:"domain",value:"google.com.sg"},{format:"domain",value:"google.com.sl"},{format:"domain",value:"google.com.sv"},{format:"domain",value:"google.com.tj"},{format:"domain",value:"google.com.tr"},{format:"domain",value:"google.com.tw"},{format:"domain",value:"google.com.ua"},{format:"domain",value:"google.com.uy"},{format:"domain",value:"google.com.vc"},{format:"domain",value:"google.com.vn"},{format:"domain",value:"google.cv"},{format:"domain",value:"google.cz"},{format:"domain",value:"google.de"},{format:"domain",value:"google.dj"},{format:"domain",value:"google.dk"},{format:"domain",value:"google.dm"},{format:"domain",value:"google.dz"},{format:"domain",value:"google.ee"},{format:"domain",value:"google.es"},{format:"domain",value:"google.fi"},{format:"domain",value:"google.fm"},{format:"domain",value:"google.fr"},{format:"domain",value:"google.ga"},{format:"domain",value:"google.ge"},{format:"domain",value:"google.gg"},{format:"domain",value:"google.gl"},{format:"domain",value:"google.gm"},{format:"domain",value:"google.gr"},{format:"domain",value:"google.gy"},{format:"domain",value:"google.hn"},{format:"domain",value:"google.hr"},{format:"domain",value:"google.ht"},{format:"domain",value:"google.hu"},{format:"domain",value:"google.ie"},{format:"domain",value:"google.im"},{format:"domain",value:"google.iq"},{format:"domain",value:"google.is"},{format:"domain",value:"google.it"},{format:"domain",value:"google.je"},{format:"domain",value:"google.jo"},{format:"domain",value:"google.kg"},{format:"domain",value:"google.ki"},{format:"domain",value:"google.kz"},{format:"domain",value:"google.la"},{format:"domain",value:"google.li"},{format:"domain",value:"google.lk"},{format:"domain",value:"google.lt"},{format:"domain",value:"google.lu"},{format:"domain",value:"google.lv"},{format:"domain",value:"google.md"},{format:"domain",value:"google.me"},{format:"domain",value:"google.mg"},{format:"domain",value:"google.mk"},{format:"domain",value:"google.ml"},{format:"domain",value:"google.mn"},{format:"domain",value:"google.ms"},{format:"domain",value:"google.mu"},{format:"domain",value:"google.mv"},{format:"domain",value:"google.mw"},{format:"domain",value:"google.ne"},{format:"domain",value:"google.nl"},{format:"domain",value:"google.no"},{format:"domain",value:"google.nr"},{format:"domain",value:"google.nu"},{format:"domain",value:"google.pl"},{format:"domain",value:"google.pn"},{format:"domain",value:"google.ps"},{format:"domain",value:"google.pt"},{format:"domain",value:"google.ro"},{format:"domain",value:"google.rs"},{format:"domain",value:"google.ru"},{format:"domain",value:"google.rw"},{format:"domain",value:"google.sc"},{format:"domain",value:"google.se"},{format:"domain",value:"google.sh"},{format:"domain",value:"google.si"},{format:"domain",value:"google.sk"},{format:"domain",value:"google.sm"},{format:"domain",value:"google.sn"},{format:"domain",value:"google.so"},{format:"domain",value:"google.sr"},{format:"domain",value:"google.st"},{format:"domain",value:"google.td"},{format:"domain",value:"google.tg"},{format:"domain",value:"google.tl"},{format:"domain",value:"google.tm"},{format:"domain",value:"google.tn"},{format:"domain",value:"google.to"},{format:"domain",value:"google.tt"},{format:"domain",value:"google.vg"},{format:"domain",value:"google.vu"},{format:"domain",value:"google.ws"},{format:"domain",value:"0emm.com"},{format:"domain",value:"1e100.net"},{format:"domain",value:"1ucrs.com"},{format:"domain",value:"466453.com"},{format:"domain",value:"abc.xyz"},{format:"domain",value:"adgoogle.net"},{format:"domain",value:"admeld.com"},{format:"domain",value:"angulardart.org"},{format:"domain",value:"api.ai"},{format:"domain",value:"apigee.com"},{format:"domain",value:"appbridge.ca"},{format:"domain",value:"appbridge.io"},{format:"domain",value:"appbridge.it"},{format:"domain",value:"appspot.com"},{format:"domain",value:"apture.com"},{format:"domain",value:"area120.com"},{format:"domain",value:"asp-cc.com"},{format:"domain",value:"autodraw.com"},{format:"domain",value:"bandpage.com"},{format:"domain",value:"baselinestudy.com"},{format:"domain",value:"baselinestudy.org"},{format:"domain",value:"bazel.build"},{format:"domain",value:"bdn.dev"},{format:"domain",value:"beatthatquote.com"},{format:"domain",value:"blink.org"},{format:"domain",value:"brocaproject.com"},{format:"domain",value:"brotli.org"},{format:"domain",value:"bumpshare.com"},{format:"domain",value:"bumptop.ca"},{format:"domain",value:"bumptop.com"},{format:"domain",value:"bumptop.net"},{format:"domain",value:"bumptop.org"},{format:"domain",value:"bumptunes.com"},{format:"domain",value:"campuslondon.com"},{format:"domain",value:"certificate-transparency.org"},{format:"domain",value:"chrome.com"},{format:"domain",value:"chromebook.com"},{format:"domain",value:"chromecast.com"},{format:"domain",value:"chromeos.dev"},{format:"domain",value:"chromium.org"},{format:"domain",value:"chronicle.security"},{format:"domain",value:"chroniclesec.com"},{format:"domain",value:"cloudburstresearch.com"},{format:"domain",value:"cloudfunctions.net"},{format:"domain",value:"cloudproxy.app"},{format:"domain",value:"cloudrobotics.com"},{format:"domain",value:"cobrasearch.com"},{format:"domain",value:"codespot.com"},{format:"domain",value:"conscrypt.com"},{format:"domain",value:"conscrypt.org"},{format:"domain",value:"cookiechoices.org"},{format:"domain",value:"coova.com"},{format:"domain",value:"coova.net"},{format:"domain",value:"coova.org"},{format:"domain",value:"crossmediapanel.com"},{format:"domain",value:"cs4hs.com"},{format:"domain",value:"dartsearch.net"},{format:"domain",value:"dataliberation.org"},{format:"domain",value:"debug.com"},{format:"domain",value:"debugproject.com"},{format:"domain",value:"deepmind.com"},{format:"domain",value:"devsitetest.how"},{format:"domain",value:"dialogflow.com"},{format:"domain",value:"digitalassetlinks.org"},{format:"domain",value:"episodic.com"},{format:"domain",value:"feedburner.com"},{format:"domain",value:"fflick.com"},{format:"domain",value:"financeleadsonline.com"},{format:"domain",value:"firebaseapp.com"},{format:"domain",value:"firebaseio.com"},{format:"domain",value:"foofle.com"},{format:"domain",value:"froogle.com"},{format:"domain",value:"fuchsia.dev"},{format:"domain",value:"g-tun.com"},{format:"domain",value:"g.cn"},{format:"domain",value:"g.co"},{format:"domain",value:"g.dev"},{format:"domain",value:"g.page"},{format:"domain",value:"gateway.dev"},{format:"domain",value:"gcr.io"},{format:"domain",value:"gerritcodereview.com"},{format:"domain",value:"getbumptop.com"},{format:"domain",value:"ggoogle.com"},{format:"domain",value:"gipscorp.com"},{format:"domain",value:"gkecnapps.cn"},{format:"domain",value:"globaledu.org"},{format:"domain",value:"gmail.com"},{format:"domain",value:"gmodules.com"},{format:"domain",value:"gogle.com"},{format:"domain",value:"gogole.com"},{format:"domain",value:"gonglchuangl.net"},{format:"domain",value:"goo.gl"},{format:"domain",value:"googel.com"},{format:"domain",value:"googil.com"},{format:"domain",value:"googl.com"},{format:"domain",value:"google-access.net"},{format:"domain",value:"google-syndication.com"},{format:"domain",value:"google.berlin"},{format:"domain",value:"google.dev"},{format:"domain",value:"google.net"},{format:"domain",value:"google.org"},{format:"domain",value:"google.ventures"},{format:"domain",value:"googleacquisitionmigration.com"},{format:"domain",value:"googleapis.cn"},{format:"domain",value:"googleapis.com"},{format:"domain",value:"googleapps.com"},{format:"domain",value:"googlearth.com"},{format:"domain",value:"googleblog.com"},{format:"domain",value:"googlebot.com"},{format:"domain",value:"googlecapital.com"},{format:"domain",value:"googlecert.net"},{format:"domain",value:"googlecnapps.cn"},{format:"domain",value:"googlecode.com"},{format:"domain",value:"googlecommerce.com"},{format:"domain",value:"googlecompare.co.uk"},{format:"domain",value:"googledanmark.com"},{format:"domain",value:"googledomains.com"},{format:"domain",value:"googledrive.com"},{format:"domain",value:"googlee.com"},{format:"domain",value:"googleearth.com"},{format:"domain",value:"googlefiber.com"},{format:"domain",value:"googlefiber.net"},{format:"domain",value:"googlefinland.com"},{format:"domain",value:"googlemail.com"},{format:"domain",value:"googlemaps.com"},{format:"domain",value:"googlepagecreator.com"},{format:"domain",value:"googlephotos.com"},{format:"domain",value:"googleplay.com"},{format:"domain",value:"googleplus.com"},{format:"domain",value:"googlesource.com"},{format:"domain",value:"googlestore.com"},{format:"domain",value:"googlesverige.com"},{format:"domain",value:"googleusercontent.com"},{format:"domain",value:"googleventures.com"},{format:"domain",value:"googlr.com"},{format:"domain",value:"goolge.com"},{format:"domain",value:"gooogle.com"},{format:"domain",value:"gridaware.app"},{format:"domain",value:"gsrc.io"},{format:"domain",value:"gstatic.cn"},{format:"domain",value:"gstatic.com"},{format:"domain",value:"gstaticcnapps.cn"},{format:"domain",value:"gsuite.com"},{format:"domain",value:"gv.com"},{format:"domain",value:"gvt0.com"},{format:"domain",value:"gvt1.com"},{format:"domain",value:"gvt2.com"},{format:"domain",value:"gvt3.com"},{format:"domain",value:"gvt5.com"},{format:"domain",value:"gvt6.com"},{format:"domain",value:"gvt7.com"},{format:"domain",value:"gvt9.com"},{format:"domain",value:"haplorrhini.com"},{format:"domain",value:"hdrplusdata.org"},{format:"domain",value:"hindiweb.com"},{format:"domain",value:"howtogetmo.co.uk"},{format:"domain",value:"html5rocks.com"},{format:"domain",value:"hwgo.com"},{format:"domain",value:"iamremarkable.org"},{format:"domain",value:"igoogle.com"},{format:"domain",value:"impermium.com"},{format:"domain",value:"itasoftware.com"},{format:"domain",value:"j2objc.org"},{format:"domain",value:"jibemobile.com"},{format:"domain",value:"keyhole.com"},{format:"domain",value:"keytransparency.com"},{format:"domain",value:"keytransparency.foo"},{format:"domain",value:"keytransparency.org"},{format:"domain",value:"lanternal.com"},{format:"domain",value:"like.com"},{format:"domain",value:"madewithcode.com"},{format:"domain",value:"material.io"},{format:"domain",value:"mdialog.com"},{format:"domain",value:"meet.new"},{format:"domain",value:"mfg-inspector.com"},{format:"domain",value:"mobileview.page"},{format:"domain",value:"moodstocks.com"},{format:"domain",value:"near.by"},{format:"domain",value:"nest.com"},{format:"domain",value:"nomulus.foo"},{format:"domain",value:"oauthz.com"},{format:"domain",value:"on.here"},{format:"domain",value:"on2.com"},{format:"domain",value:"onefifteen.net"},{format:"domain",value:"onefifteen.org"},{format:"domain",value:"oneworldmanystories.com"},{format:"domain",value:"openthread.io"},{format:"domain",value:"openweave.io"},{format:"domain",value:"orbitera.com"},{format:"domain",value:"page.link"},{format:"domain",value:"pagespeedmobilizer.com"},{format:"domain",value:"pageview.mobi"},{format:"domain",value:"panoramio.com"},{format:"domain",value:"partylikeits1986.org"},{format:"domain",value:"paxlicense.org"},{format:"domain",value:"picasa.com"},{format:"domain",value:"picasaweb.com"},{format:"domain",value:"picasaweb.net"},{format:"domain",value:"picasaweb.org"},{format:"domain",value:"picnik.com"},{format:"domain",value:"pittpatt.com"},{format:"domain",value:"pixate.com"},{format:"domain",value:"postini.com"},{format:"domain",value:"privacysandbox.com"},{format:"domain",value:"projectara.com"},{format:"domain",value:"projectbaseline.com"},{format:"domain",value:"publishproxy.com"},{format:"domain",value:"questvisual.com"},{format:"domain",value:"quickoffice.com"},{format:"domain",value:"quiksee.com"},{format:"domain",value:"revolv.com"},{format:"domain",value:"ridepenguin.com"},{format:"domain",value:"run.app"},{format:"domain",value:"savethedate.foo"},{format:"domain",value:"saynow.com"},{format:"domain",value:"schemer.com"},{format:"domain",value:"screenwisetrends.com"},{format:"domain",value:"screenwisetrendspanel.com"},{format:"domain",value:"snapseed.com"},{format:"domain",value:"solveforx.com"},{format:"domain",value:"stadia.dev"},{format:"domain",value:"stcroixmosquito.com"},{format:"domain",value:"stcroixmosquitoproject.com"},{format:"domain",value:"studywatchbyverily.com"},{format:"domain",value:"studywatchbyverily.org"},{format:"domain",value:"stxmosquito.com"},{format:"domain",value:"stxmosquitoproject.com"},{format:"domain",value:"stxmosquitoproject.net"},{format:"domain",value:"stxmosquitoproject.org"},{format:"domain",value:"synergyse.com"},{format:"domain",value:"tensorflow.org"},{format:"domain",value:"tfhub.dev"},{format:"domain",value:"thecleversense.com"},{format:"domain",value:"thegooglestore.com"},{format:"domain",value:"thinkquarterly.co.uk"},{format:"domain",value:"thinkquarterly.com"},{format:"domain",value:"thinkwithgoogle.com"},{format:"domain",value:"tiltbrush.com"},{format:"domain",value:"txcloud.net"},{format:"domain",value:"txvia.com"},{format:"domain",value:"unfiltered.news"},{format:"domain",value:"useplannr.com"},{format:"domain",value:"usvimosquito.com"},{format:"domain",value:"usvimosquitoproject.com"},{format:"domain",value:"velostrata.com"},{format:"domain",value:"verily.com"},{format:"domain",value:"verilylifesciences.com"},{format:"domain",value:"verilystudyhub.com"},{format:"domain",value:"verilystudywatch.com"},{format:"domain",value:"verilystudywatch.org"},{format:"domain",value:"wallet.com"},{format:"domain",value:"waymo.com"},{format:"domain",value:"waze.com"},{format:"domain",value:"web.app"},{format:"domain",value:"web.dev"},{format:"domain",value:"webappfieldguide.com"},{format:"domain",value:"webmproject.org"},{format:"domain",value:"webpkgcache.com"},{format:"domain",value:"webrtc.org"},{format:"domain",value:"weltweitwachsen.de"},{format:"domain",value:"whatbrowser.org"},{format:"domain",value:"widevine.com"},{format:"domain",value:"withgoogle.com"},{format:"domain",value:"womenwill.com"},{format:"domain",value:"womenwill.com.br"},{format:"domain",value:"womenwill.id"},{format:"domain",value:"womenwill.in"},{format:"domain",value:"womenwill.mx"},{format:"domain",value:"x.company"},{format:"domain",value:"x.team"},{format:"domain",value:"xn--9kr7l.com"},{format:"domain",value:"xn--9trs65b.com"},{format:"domain",value:"xn--flw351e.com"},{format:"domain",value:"xn--ggle-55da.com"},{format:"domain",value:"xn--gogl-0nd52e.com"},{format:"domain",value:"xn--gogl-1nd42e.com"},{format:"domain",value:"xn--ngstr-lra8j.com"},{format:"domain",value:"xplr.co"},{format:"domain",value:"zukunftswerkstatt.de"},{format:"full domain",value:"www.recaptcha.net"},{format:"full domain",value:"265.com"},{format:"full domain",value:"2mdn-cn.net"},{format:"full domain",value:"2mdn.net"},{format:"full domain",value:"accounts.googlers.com"},{format:"full domain",value:"accounts.xn--9trs65b.com"},{format:"full domain",value:"accounts.xn--ggle-55da.com"},{format:"full domain",value:"admob-cn.com"},{format:"full domain",value:"adservice.google.com"},{format:"full domain",value:"ai.ytimg.com"},{format:"full domain",value:"app-measurement-cn.com"},{format:"full domain",value:"app-measurement.com"},{format:"full domain",value:"apps5.oingo.com"},{format:"full domain",value:"avail.googleflights.net"},{format:"full domain",value:"beacons.gcp.gvt2.com"},{format:"full domain",value:"beacons.gvt2.com"},{format:"full domain",value:"beacons2.gvt2.com"},{format:"full domain",value:"beacons3.gvt2.com"},{format:"full domain",value:"borgmon.adz.google.com"},{format:"full domain",value:"c.admob.com"},{format:"full domain",value:"c.android.clients.google.com"},{format:"full domain",value:"cache-management-prod.google.com"},{format:"full domain",value:"cache.pack.google.com"},{format:"full domain",value:"checkin.gstatic.com"},{format:"full domain",value:"clickserve.cc-dt.com"},{format:"full domain",value:"clickserve.dartsearch.net"},{format:"full domain",value:"clickserver.googleads.com"},{format:"full domain",value:"clientservices.googleapis.com"},{format:"full domain",value:"cn.widevine.com"},{format:"full domain",value:"cnappinstall.googleadapis.com"},{format:"full domain",value:"connectivitycheck.gstatic.com"},{format:"full domain",value:"content.googleadapis.com"},{format:"full domain",value:"corp.google.com"},{format:"full domain",value:"corp.googleapis.com"},{format:"full domain",value:"crashlyticsreports-pa.googleapis.com"},{format:"full domain",value:"csi.gstatic.com"},{format:"full domain",value:"dartsearch-cn.net"},{format:"full domain",value:"dg-meta.video.google.com"},{format:"full domain",value:"distribution.qatp1.net"},{format:"full domain",value:"distribution.qcpp1.net"},{format:"full domain",value:"distribution.qpdp1.net"},{format:"full domain",value:"dl.google.com"},{format:"full domain",value:"dl.l.google.com"},{format:"full domain",value:"doubleclick-cn.net"},{format:"full domain",value:"doubleclick.net"},{format:"full domain",value:"download.mlcc.google.com"},{format:"full domain",value:"download.qatp1.net"},{format:"full domain",value:"download.qcpp1.net"},{format:"full domain",value:"download.qpdp1.net"},{format:"full domain",value:"download.tensorflow.google.com"},{format:"full domain",value:"emmapplecodevice.googleapis.com"},{format:"full domain",value:"firebase-settings.crashlytics.com"},{format:"full domain",value:"fontfiles.googleadapis.com"},{format:"full domain",value:"fontfiles.googleapis.com"},{format:"full domain",value:"fonts.googleadapis.com"},{format:"full domain",value:"fonts.googleapis.com"},{format:"full domain",value:"fonts.gstatic.com"},{format:"full domain",value:"g0.gstatic.com"},{format:"full domain",value:"g1.gstatic.com"},{format:"full domain",value:"g2.gstatic.com"},{format:"full domain",value:"g3.gstatic.com"},{format:"full domain",value:"gcpnode.com"},{format:"full domain",value:"gonglchuangl.net"},{format:"full domain",value:"gongyichuangyi.net"},{format:"full domain",value:"google-analytics-cn.com"},{format:"full domain",value:"google-analytics.com"},{format:"full domain",value:"googleadservices-cn.com"},{format:"full domain",value:"googleadservices.com"},{format:"full domain",value:"googleanalytics.com"},{format:"full domain",value:"googleapis-cn.com"},{format:"full domain",value:"googleapps-cn.com"},{format:"full domain",value:"googleflights-cn.net"},{format:"full domain",value:"googleoptimize-cn.com"},{format:"full domain",value:"googleoptimize.com"},{format:"full domain",value:"googleplex.com"},{format:"full domain",value:"googlesyndication-cn.com"},{format:"full domain",value:"googlesyndication.com"},{format:"full domain",value:"googletagmanager-cn.com"},{format:"full domain",value:"googletagmanager.com"},{format:"full domain",value:"googletagservices-cn.com"},{format:"full domain",value:"googletagservices.com"},{format:"full domain",value:"googletraveladservices-cn.com"},{format:"full domain",value:"googletraveladservices.com"},{format:"full domain",value:"googlevads-cn.com"},{format:"full domain",value:"goto.google.com"},{format:"full domain",value:"gstatic-cn.com"},{format:"full domain",value:"gstaticadssl.l.google.com"},{format:"full domain",value:"gtm.oasisfeng.com"},{format:"full domain",value:"gvt1-cn.com"},{format:"full domain",value:"gvt2-cn.com"},{format:"full domain",value:"imasdk.googleapis.com"},{format:"full domain",value:"monitoring.qatp1.net"},{format:"full domain",value:"monitoring.qcpp1.net"},{format:"full domain",value:"monitoring.qpdp1.net"},{format:"full domain",value:"pagead-googlehosted.l.google.com"},{format:"full domain",value:"performanceparameters.googleapis.com"},{format:"full domain",value:"play.1ucrs.com"},{format:"full domain",value:"prod-controlbe.floonet.goog"},{format:"full domain",value:"prod-databe.floonet.goog"},{format:"full domain",value:"prod.databe.floonet.goog"},{format:"full domain",value:"qagpublic.qatp1.net"},{format:"full domain",value:"qagpublic.qcpp1.net"},{format:"full domain",value:"qagpublic.qpdp1.net"},{format:"full domain",value:"qgadmin.qatp1.net"},{format:"full domain",value:"qgadmin.qcpp1.net"},{format:"full domain",value:"qgadmin.qpdp1.net"},{format:"full domain",value:"qpx.googleflights.net"},{format:"full domain",value:"qualysapi.qatp1.net"},{format:"full domain",value:"qualysapi.qcpp1.net"},{format:"full domain",value:"qualysapi.qpdp1.net"},{format:"full domain",value:"qualysguard.qatp1.net"},{format:"full domain",value:"qualysguard.qcpp1.net"},{format:"full domain",value:"qualysguard.qpdp1.net"},{format:"full domain",value:"recaptcha.net"},{format:"full domain",value:"redirector.bdn.dev"},{format:"full domain",value:"redirector.c.chat.google.com"},{format:"full domain",value:"redirector.c.docs.google.com"},{format:"full domain",value:"redirector.c.drive.google.com"},{format:"full domain",value:"redirector.c.mail.google.com"},{format:"full domain",value:"redirector.c.pack.google.com"},{format:"full domain",value:"redirector.c.play.google.com"},{format:"full domain",value:"redirector.c.youtubeeducation.com"},{format:"full domain",value:"redirector.gcpcdn.gvt1.com"},{format:"full domain",value:"redirector.gvt1.com"},{format:"full domain",value:"redirector.offline-maps.gvt1.com"},{format:"full domain",value:"redirector.snap.gvt1.com"},{format:"full domain",value:"redirector.xn--ngstr-lra8j.com"},{format:"full domain",value:"regioninfo-pa.googleapis.com"},{format:"full domain",value:"safebrowsing.googleapis.com"},{format:"full domain",value:"scanservice1.qatp1.net"},{format:"full domain",value:"scanservice1.qcpp1.net"},{format:"full domain",value:"scanservice1.qpdp1.net"},{format:"full domain",value:"service.urchin.com"},{format:"full domain",value:"settings.xn--9trs65b.com"},{format:"full domain",value:"ssl-google-analytics.l.google.com"},{format:"full domain",value:"ssl.gstatic.com"},{format:"full domain",value:"staging-controlbe.floonet.goog"},{format:"full domain",value:"staging-databe.floonet.goog"},{format:"full domain",value:"staging-regioninfo-pa.googleapis.com"},{format:"full domain",value:"staging.databe.floonet.goog"},{format:"full domain",value:"support.1ucrs.com"},{format:"full domain",value:"tac.googleapis.com"},{format:"full domain",value:"test.bugs-qa.chromium.org"},{format:"full domain",value:"test.gbugs-qa.chromium.org"},{format:"full domain",value:"tools.google.com"},{format:"full domain",value:"tools.l.google.com"},{format:"full domain",value:"up.corp.goog"},{format:"full domain",value:"up.gcp.googlers.com"},{format:"full domain",value:"update.crashlytics.com"},{format:"full domain",value:"update.googleapis.com"},{format:"full domain",value:"wear.googleapis.com"},{format:"full domain",value:"www-google-analytics.l.google.com"},{format:"full domain",value:"www-googletagmanager.l.google.com"},{format:"full domain",value:"www.destinationurl.com"},{format:"full domain",value:"www.googleadapis.com"},{format:"full domain",value:"www.gstatic.com"},{format:"full domain",value:"www.pxcc.com"},{format:"full domain",value:"xn--9kr7l.com"},{format:"full domain",value:"xn--flw351e.com"},{format:"domain",value:"android.com"},{format:"domain",value:"androidify.com"},{format:"domain",value:"blogger.com"},{format:"domain",value:"blogblog.com"},{format:"domain",value:"blogspot.ae"},{format:"domain",value:"blogspot.al"},{format:"domain",value:"blogspot.am"},{format:"domain",value:"blogspot.ba"},{format:"domain",value:"blogspot.be"},{format:"domain",value:"blogspot.bg"},{format:"domain",value:"blogspot.bj"},{format:"domain",value:"blogspot.ca"},{format:"domain",value:"blogspot.cf"},{format:"domain",value:"blogspot.ch"},{format:"domain",value:"blogspot.cl"},{format:"domain",value:"blogspot.co.at"},{format:"domain",value:"blogspot.co.id"},{format:"domain",value:"blogspot.co.il"},{format:"domain",value:"blogspot.co.ke"},{format:"domain",value:"blogspot.co.nz"},{format:"domain",value:"blogspot.co.uk"},{format:"domain",value:"blogspot.co.za"},{format:"domain",value:"blogspot.com"},{format:"domain",value:"blogspot.com.ar"},{format:"domain",value:"blogspot.com.au"},{format:"domain",value:"blogspot.com.br"},{format:"domain",value:"blogspot.com.by"},{format:"domain",value:"blogspot.com.co"},{format:"domain",value:"blogspot.com.cy"},{format:"domain",value:"blogspot.com.ee"},{format:"domain",value:"blogspot.com.eg"},{format:"domain",value:"blogspot.com.es"},{format:"domain",value:"blogspot.com.mt"},{format:"domain",value:"blogspot.com.ng"},{format:"domain",value:"blogspot.com.tr"},{format:"domain",value:"blogspot.com.uy"},{format:"domain",value:"blogspot.cv"},{format:"domain",value:"blogspot.cz"},{format:"domain",value:"blogspot.de"},{format:"domain",value:"blogspot.dk"},{format:"domain",value:"blogspot.fi"},{format:"domain",value:"blogspot.fr"},{format:"domain",value:"blogspot.gr"},{format:"domain",value:"blogspot.hk"},{format:"domain",value:"blogspot.hr"},{format:"domain",value:"blogspot.hu"},{format:"domain",value:"blogspot.ie"},{format:"domain",value:"blogspot.in"},{format:"domain",value:"blogspot.is"},{format:"domain",value:"blogspot.it"},{format:"domain",value:"blogspot.jp"},{format:"domain",value:"blogspot.kr"},{format:"domain",value:"blogspot.li"},{format:"domain",value:"blogspot.lt"},{format:"domain",value:"blogspot.lu"},{format:"domain",value:"blogspot.md"},{format:"domain",value:"blogspot.mk"},{format:"domain",value:"blogspot.mx"},{format:"domain",value:"blogspot.my"},{format:"domain",value:"blogspot.nl"},{format:"domain",value:"blogspot.no"},{format:"domain",value:"blogspot.pe"},{format:"domain",value:"blogspot.pt"},{format:"domain",value:"blogspot.qa"},{format:"domain",value:"blogspot.re"},{format:"domain",value:"blogspot.ro"},{format:"domain",value:"blogspot.rs"},{format:"domain",value:"blogspot.ru"},{format:"domain",value:"blogspot.se"},{format:"domain",value:"blogspot.sg"},{format:"domain",value:"blogspot.si"},{format:"domain",value:"blogspot.sk"},{format:"domain",value:"blogspot.sn"},{format:"domain",value:"blogspot.td"},{format:"domain",value:"blogspot.tw"},{format:"domain",value:"blogspot.ug"},{format:"domain",value:"blogspot.vn"},{format:"domain",value:"dart.dev"},{format:"domain",value:"dartlang.org"},{format:"domain",value:"dartpad.dev"},{format:"domain",value:"fastlane.ci"},{format:"domain",value:"fastlane.tools"},{format:"domain",value:"flutter.dev"},{format:"domain",value:"flutterapp.com"},{format:"domain",value:"go-lang.com"},{format:"domain",value:"go-lang.net"},{format:"domain",value:"go-lang.org"},{format:"domain",value:"go.dev"},{format:"domain",value:"godoc.org"},{format:"domain",value:"golang.com"},{format:"domain",value:"golang.net"},{format:"domain",value:"golang.org"},{format:"domain",value:"2mdn.net"},{format:"domain",value:"admob.com"},{format:"domain",value:"ads.youtube.com"},{format:"domain",value:"adsense.com"},{format:"domain",value:"adsensecustomsearchads.com"},{format:"domain",value:"adsenseformobileapps.com"},{format:"domain",value:"adservice.google.com"},{format:"domain",value:"advertisercommunity.com"},{format:"domain",value:"advertiserscommunity.com"},{format:"domain",value:"adwords-community.com"},{format:"domain",value:"adwords.com"},{format:"domain",value:"adwordsexpress.com"},{format:"domain",value:"app-measurement.com"},{format:"domain",value:"clickserver.googleads.com"},{format:"domain",value:"doubleclick.com"},{format:"domain",value:"doubleclick.net"},{format:"domain",value:"google-analytics.com"},{format:"domain",value:"googleadapis.com"},{format:"domain",value:"googleadservices.com"},{format:"domain",value:"googleanalytics.com"},{format:"domain",value:"googleoptimize.com"},{format:"domain",value:"googlesyndication.com"},{format:"domain",value:"googletagmanager.com"},{format:"domain",value:"googletagservices.com"},{format:"domain",value:"googletraveladservices.com"},{format:"domain",value:"urchin.com"},{format:"domain",value:"regexp:^adservice\\.google\\.([a-z]{2}|com?)(\\.[a-z]{2})?$"},{format:"domain",value:"charlestonroadregistry.com"},{format:"domain",value:"crr.com"},{format:"domain",value:"registry.google"},{format:"domain",value:"get.app"},{format:"domain",value:"get.dev"},{format:"domain",value:"get.how"},{format:"domain",value:"get.new"},{format:"domain",value:"get.page"},{format:"domain",value:"get.rsvp"},{format:"domain",value:"hey.boo"},{format:"domain",value:"iam.soy"},{format:"domain",value:"new.day"},{format:"domain",value:"xn--p8j9a0d9c9a.xn--q9jyb4c"},{format:"full domain",value:"scholar.google.ae"},{format:"full domain",value:"scholar.google.at"},{format:"full domain",value:"scholar.google.be"},{format:"full domain",value:"scholar.google.bg"},{format:"full domain",value:"scholar.google.ca"},{format:"full domain",value:"scholar.google.cat"},{format:"full domain",value:"scholar.google.ch"},{format:"full domain",value:"scholar.google.cl"},{format:"full domain",value:"scholar.google.cn"},{format:"full domain",value:"scholar.google.co.cr"},{format:"full domain",value:"scholar.google.co.id"},{format:"full domain",value:"scholar.google.co.il"},{format:"full domain",value:"scholar.google.co.in"},{format:"full domain",value:"scholar.google.co.jp"},{format:"full domain",value:"scholar.google.co.kr"},{format:"full domain",value:"scholar.google.co.nz"},{format:"full domain",value:"scholar.google.co.th"},{format:"full domain",value:"scholar.google.co.uk"},{format:"full domain",value:"scholar.google.co.ve"},{format:"full domain",value:"scholar.google.co.za"},{format:"full domain",value:"scholar.google.com"},{format:"full domain",value:"scholar.google.com.ar"},{format:"full domain",value:"scholar.google.com.au"},{format:"full domain",value:"scholar.google.com.bo"},{format:"full domain",value:"scholar.google.com.br"},{format:"full domain",value:"scholar.google.com.co"},{format:"full domain",value:"scholar.google.com.cu"},{format:"full domain",value:"scholar.google.com.do"},{format:"full domain",value:"scholar.google.com.ec"},{format:"full domain",value:"scholar.google.com.eg"},{format:"full domain",value:"scholar.google.com.gt"},{format:"full domain",value:"scholar.google.com.hk"},{format:"full domain",value:"scholar.google.com.ly"},{format:"full domain",value:"scholar.google.com.mx"},{format:"full domain",value:"scholar.google.com.my"},{format:"full domain",value:"scholar.google.com.ni"},{format:"full domain",value:"scholar.google.com.pa"},{format:"full domain",value:"scholar.google.com.pe"},{format:"full domain",value:"scholar.google.com.ph"},{format:"full domain",value:"scholar.google.com.pk"},{format:"full domain",value:"scholar.google.com.pr"},{format:"full domain",value:"scholar.google.com.py"},{format:"full domain",value:"scholar.google.com.sg"},{format:"full domain",value:"scholar.google.com.sv"},{format:"full domain",value:"scholar.google.com.tr"},{format:"full domain",value:"scholar.google.com.tw"},{format:"full domain",value:"scholar.google.com.ua"},{format:"full domain",value:"scholar.google.com.uy"},{format:"full domain",value:"scholar.google.com.vn"},{format:"full domain",value:"scholar.google.cz"},{format:"full domain",value:"scholar.google.de"},{format:"full domain",value:"scholar.google.dk"},{format:"full domain",value:"scholar.google.es"},{format:"full domain",value:"scholar.google.fi"},{format:"full domain",value:"scholar.google.fr"},{format:"full domain",value:"scholar.google.gr"},{format:"full domain",value:"scholar.google.hn"},{format:"full domain",value:"scholar.google.hr"},{format:"full domain",value:"scholar.google.hu"},{format:"full domain",value:"scholar.google.is"},{format:"full domain",value:"scholar.google.it"},{format:"full domain",value:"scholar.google.li"},{format:"full domain",value:"scholar.google.lt"},{format:"full domain",value:"scholar.google.lu"},{format:"full domain",value:"scholar.google.lv"},{format:"full domain",value:"scholar.google.nl"},{format:"full domain",value:"scholar.google.no"},{format:"full domain",value:"scholar.google.pl"},{format:"full domain",value:"scholar.google.pt"},{format:"full domain",value:"scholar.google.ro"},{format:"full domain",value:"scholar.google.ru"},{format:"full domain",value:"scholar.google.se"},{format:"full domain",value:"scholar.google.si"},{format:"full domain",value:"scholar.google.sk"},{format:"full domain",value:"scholar.l.google.com"},{format:"domain",value:"pki.goog"},{format:"full domain",value:"clients1.google.com"},{format:"full domain",value:"pki.google.com"},{format:"full domain",value:"crl.pki.goog"},{format:"full domain",value:"ocsp.pki.goog"},{format:"full domain",value:"pki-goog.l.google.com"},{format:"full domain",value:"alt1-mtalk.google.com"},{format:"full domain",value:"alt2-mtalk.google.com"},{format:"full domain",value:"alt3-mtalk.google.com"},{format:"full domain",value:"alt4-mtalk.google.com"},{format:"full domain",value:"alt5-mtalk.google.com"},{format:"full domain",value:"alt6-mtalk.google.com"},{format:"full domain",value:"alt7-mtalk.google.com"},{format:"full domain",value:"alt8-mtalk.google.com"},{format:"full domain",value:"mtalk.google.com"},{format:"domain",value:"kaggle.com"},{format:"domain",value:"kaggle.io"},{format:"domain",value:"deps.dev"},{format:"domain",value:"deps.info"},{format:"domain",value:"opensourceinsight.dev"},{format:"domain",value:"opensourceinsights.dev"},{format:"domain",value:"polymer-project.org"},{format:"domain",value:"polymerproject.org"},{format:"domain",value:"v8.dev"},{format:"domain",value:"v8project.org"},{format:"domain",value:"youtube"},{format:"domain",value:"ggpht.cn"},{format:"domain",value:"ggpht.com"},{format:"domain",value:"googlevideo.com"},{format:"domain",value:"wide-youtube.l.google.com"},{format:"domain",value:"withyoutube.com"},{format:"domain",value:"youtu.be"},{format:"domain",value:"youtube-nocookie.com"},{format:"domain",value:"youtube-ui.l.google.com"},{format:"domain",value:"youtube.ae"},{format:"domain",value:"youtube.al"},{format:"domain",value:"youtube.am"},{format:"domain",value:"youtube.at"},{format:"domain",value:"youtube.az"},{format:"domain",value:"youtube.ba"},{format:"domain",value:"youtube.be"},{format:"domain",value:"youtube.bg"},{format:"domain",value:"youtube.bh"},{format:"domain",value:"youtube.bo"},{format:"domain",value:"youtube.by"},{format:"domain",value:"youtube.ca"},{format:"domain",value:"youtube.cat"},{format:"domain",value:"youtube.ch"},{format:"domain",value:"youtube.cl"},{format:"domain",value:"youtube.co"},{format:"domain",value:"youtube.co.ae"},{format:"domain",value:"youtube.co.at"},{format:"domain",value:"youtube.co.cr"},{format:"domain",value:"youtube.co.hu"},{format:"domain",value:"youtube.co.id"},{format:"domain",value:"youtube.co.il"},{format:"domain",value:"youtube.co.in"},{format:"domain",value:"youtube.co.jp"},{format:"domain",value:"youtube.co.ke"},{format:"domain",value:"youtube.co.kr"},{format:"domain",value:"youtube.co.ma"},{format:"domain",value:"youtube.co.nz"},{format:"domain",value:"youtube.co.th"},{format:"domain",value:"youtube.co.tz"},{format:"domain",value:"youtube.co.ug"},{format:"domain",value:"youtube.co.uk"},{format:"domain",value:"youtube.co.ve"},{format:"domain",value:"youtube.co.za"},{format:"domain",value:"youtube.co.zw"},{format:"domain",value:"youtube.com"},{format:"domain",value:"youtube.com.ar"},{format:"domain",value:"youtube.com.au"},{format:"domain",value:"youtube.com.az"},{format:"domain",value:"youtube.com.bd"},{format:"domain",value:"youtube.com.bh"},{format:"domain",value:"youtube.com.bo"},{format:"domain",value:"youtube.com.br"},{format:"domain",value:"youtube.com.by"},{format:"domain",value:"youtube.com.co"},{format:"domain",value:"youtube.com.do"},{format:"domain",value:"youtube.com.ec"},{format:"domain",value:"youtube.com.ee"},{format:"domain",value:"youtube.com.eg"},{format:"domain",value:"youtube.com.es"},{format:"domain",value:"youtube.com.gh"},{format:"domain",value:"youtube.com.gr"},{format:"domain",value:"youtube.com.gt"},{format:"domain",value:"youtube.com.hk"},{format:"domain",value:"youtube.com.hn"},{format:"domain",value:"youtube.com.hr"},{format:"domain",value:"youtube.com.jm"},{format:"domain",value:"youtube.com.jo"},{format:"domain",value:"youtube.com.kw"},{format:"domain",value:"youtube.com.lb"},{format:"domain",value:"youtube.com.lv"},{format:"domain",value:"youtube.com.ly"},{format:"domain",value:"youtube.com.mk"},{format:"domain",value:"youtube.com.mt"},{format:"domain",value:"youtube.com.mx"},{format:"domain",value:"youtube.com.my"},{format:"domain",value:"youtube.com.ng"},{format:"domain",value:"youtube.com.ni"},{format:"domain",value:"youtube.com.om"},{format:"domain",value:"youtube.com.pa"},{format:"domain",value:"youtube.com.pe"},{format:"domain",value:"youtube.com.ph"},{format:"domain",value:"youtube.com.pk"},{format:"domain",value:"youtube.com.pt"},{format:"domain",value:"youtube.com.py"},{format:"domain",value:"youtube.com.qa"},{format:"domain",value:"youtube.com.ro"},{format:"domain",value:"youtube.com.sa"},{format:"domain",value:"youtube.com.sg"},{format:"domain",value:"youtube.com.sv"},{format:"domain",value:"youtube.com.tn"},{format:"domain",value:"youtube.com.tr"},{format:"domain",value:"youtube.com.tw"},{format:"domain",value:"youtube.com.ua"},{format:"domain",value:"youtube.com.uy"},{format:"domain",value:"youtube.com.ve"},{format:"domain",value:"youtube.cr"},{format:"domain",value:"youtube.cz"},{format:"domain",value:"youtube.de"},{format:"domain",value:"youtube.dk"},{format:"domain",value:"youtube.ee"},{format:"domain",value:"youtube.es"},{format:"domain",value:"youtube.fi"},{format:"domain",value:"youtube.fr"},{format:"domain",value:"youtube.ge"},{format:"domain",value:"youtube.googleapis.com"},{format:"domain",value:"youtube.gr"},{format:"domain",value:"youtube.gt"},{format:"domain",value:"youtube.hk"},{format:"domain",value:"youtube.hr"},{format:"domain",value:"youtube.hu"},{format:"domain",value:"youtube.ie"},{format:"domain",value:"youtube.in"},{format:"domain",value:"youtube.iq"},{format:"domain",value:"youtube.is"},{format:"domain",value:"youtube.it"},{format:"domain",value:"youtube.jo"},{format:"domain",value:"youtube.jp"},{format:"domain",value:"youtube.kr"},{format:"domain",value:"youtube.kz"},{format:"domain",value:"youtube.la"},{format:"domain",value:"youtube.lk"},{format:"domain",value:"youtube.lt"},{format:"domain",value:"youtube.lu"},{format:"domain",value:"youtube.lv"},{format:"domain",value:"youtube.ly"},{format:"domain",value:"youtube.ma"},{format:"domain",value:"youtube.md"},{format:"domain",value:"youtube.me"},{format:"domain",value:"youtube.mk"},{format:"domain",value:"youtube.mn"},{format:"domain",value:"youtube.mx"},{format:"domain",value:"youtube.my"},{format:"domain",value:"youtube.ng"},{format:"domain",value:"youtube.ni"},{format:"domain",value:"youtube.nl"},{format:"domain",value:"youtube.no"},{format:"domain",value:"youtube.pa"},{format:"domain",value:"youtube.pe"},{format:"domain",value:"youtube.ph"},{format:"domain",value:"youtube.pk"},{format:"domain",value:"youtube.pl"},{format:"domain",value:"youtube.pr"},{format:"domain",value:"youtube.pt"},{format:"domain",value:"youtube.qa"},{format:"domain",value:"youtube.ro"},{format:"domain",value:"youtube.rs"},{format:"domain",value:"youtube.ru"},{format:"domain",value:"youtube.sa"},{format:"domain",value:"youtube.se"},{format:"domain",value:"youtube.sg"},{format:"domain",value:"youtube.si"},{format:"domain",value:"youtube.sk"},{format:"domain",value:"youtube.sn"},{format:"domain",value:"youtube.soy"},{format:"domain",value:"youtube.sv"},{format:"domain",value:"youtube.tn"},{format:"domain",value:"youtube.tv"},{format:"domain",value:"youtube.ua"},{format:"domain",value:"youtube.ug"},{format:"domain",value:"youtube.uy"},{format:"domain",value:"youtube.vn"},{format:"domain",value:"youtubeeducation.com"},{format:"domain",value:"youtubeembeddedplayer.googleapis.com"},{format:"domain",value:"youtubefanfest.com"},{format:"domain",value:"youtubegaming.com"},{format:"domain",value:"youtubego.co.id"},{format:"domain",value:"youtubego.co.in"},{format:"domain",value:"youtubego.com"},{format:"domain",value:"youtubego.com.br"},{format:"domain",value:"youtubego.id"},{format:"domain",value:"youtubego.in"},{format:"domain",value:"youtubei.googleapis.com"},{format:"domain",value:"youtubekids.com"},{format:"domain",value:"youtubemobilesupport.com"},{format:"domain",value:"yt.be"},{format:"domain",value:"ytimg.com"}],[{format:"domain",value:"bmw"},{format:"domain",value:"approvedusedbmw.com"},{format:"domain",value:"baltimorebmw.com"},{format:"domain",value:"bayareabmw.com"},{format:"domain",value:"bmw-abudhabi.com"},{format:"domain",value:"bmw-adventskalender.com"},{format:"domain",value:"bmw-albania.com"},{format:"domain",value:"bmw-antilles.fr"},{format:"domain",value:"bmw-art-journey.com"},{format:"domain",value:"bmw-arts-design.com"},{format:"domain",value:"bmw-asia.com"},{format:"domain",value:"bmw-auslieferungszentrum.com"},{format:"domain",value:"bmw-authority-vehicles.com"},{format:"domain",value:"bmw-bahrain.com"},{format:"domain",value:"bmw-businessdrive.com"},{format:"domain",value:"bmw-calgary.ca"},{format:"domain",value:"bmw-carit.de"},{format:"domain",value:"bmw-classic.com"},{format:"domain",value:"bmw-clubs-international.com"},{format:"domain",value:"bmw-connected-drive.com"},{format:"domain",value:"bmw-connecteddrive.ae"},{format:"domain",value:"bmw-connecteddrive.at"},{format:"domain",value:"bmw-connecteddrive.be"},{format:"domain",value:"bmw-connecteddrive.bg"},{format:"domain",value:"bmw-connecteddrive.ca"},{format:"domain",value:"bmw-connecteddrive.ch"},{format:"domain",value:"bmw-connecteddrive.co.nz"},{format:"domain",value:"bmw-connecteddrive.co.uk"},{format:"domain",value:"bmw-connecteddrive.co.za"},{format:"domain",value:"bmw-connecteddrive.com"},{format:"domain",value:"bmw-connecteddrive.com.au"},{format:"domain",value:"bmw-connecteddrive.com.br"},{format:"domain",value:"bmw-connecteddrive.com.cy"},{format:"domain",value:"bmw-connecteddrive.com.hr"},{format:"domain",value:"bmw-connecteddrive.com.kw"},{format:"domain",value:"bmw-connecteddrive.com.mt"},{format:"domain",value:"bmw-connecteddrive.cz"},{format:"domain",value:"bmw-connecteddrive.de"},{format:"domain",value:"bmw-connecteddrive.dk"},{format:"domain",value:"bmw-connecteddrive.ee"},{format:"domain",value:"bmw-connecteddrive.es"},{format:"domain",value:"bmw-connecteddrive.fi"},{format:"domain",value:"bmw-connecteddrive.fr"},{format:"domain",value:"bmw-connecteddrive.gr"},{format:"domain",value:"bmw-connecteddrive.hu"},{format:"domain",value:"bmw-connecteddrive.ie"},{format:"domain",value:"bmw-connecteddrive.it"},{format:"domain",value:"bmw-connecteddrive.jp"},{format:"domain",value:"bmw-connecteddrive.kr"},{format:"domain",value:"bmw-connecteddrive.lt"},{format:"domain",value:"bmw-connecteddrive.lu"},{format:"domain",value:"bmw-connecteddrive.lv"},{format:"domain",value:"bmw-connecteddrive.mx"},{format:"domain",value:"bmw-connecteddrive.my"},{format:"domain",value:"bmw-connecteddrive.nl"},{format:"domain",value:"bmw-connecteddrive.no"},{format:"domain",value:"bmw-connecteddrive.pl"},{format:"domain",value:"bmw-connecteddrive.pt"},{format:"domain",value:"bmw-connecteddrive.ro"},{format:"domain",value:"bmw-connecteddrive.ru"},{format:"domain",value:"bmw-connecteddrive.se"},{format:"domain",value:"bmw-connecteddrive.sg"},{format:"domain",value:"bmw-connecteddrive.si"},{format:"domain",value:"bmw-connecteddrive.sk"},{format:"domain",value:"bmw-connecteddrive.tw"},{format:"domain",value:"bmw-corporate-sales.com"},{format:"domain",value:"bmw-diplomatic-sales.com"},{format:"domain",value:"bmw-driving-center.co.kr"},{format:"domain",value:"bmw-drivingexperience.com"},{format:"domain",value:"bmw-dubai.com"},{format:"domain",value:"bmw-eg.com"},{format:"domain",value:"bmw-fleet.net"},{format:"domain",value:"bmw-ghana.com"},{format:"domain",value:"bmw-golfsport.com"},{format:"domain",value:"bmw-group.com"},{format:"domain",value:"bmw-group.net"},{format:"domain",value:"bmw-grouparchiv.de"},{format:"domain",value:"bmw-grouparchives.com"},{format:"domain",value:"bmw-gta.ca"},{format:"domain",value:"bmw-i-pure-impulse.com"},{format:"domain",value:"bmw-i.jp"},{format:"domain",value:"bmw-int1.com"},{format:"domain",value:"bmw-iraq.com"},{format:"domain",value:"bmw-jordan.com"},{format:"domain",value:"bmw-konzernarchiv.de"},{format:"domain",value:"bmw-ksa.com"},{format:"domain",value:"bmw-kuwait.com"},{format:"domain",value:"bmw-lao.la"},{format:"domain",value:"bmw-lebanon.com"},{format:"domain",value:"bmw-m-safetycar.com"},{format:"domain",value:"bmw-m.com"},{format:"domain",value:"bmw-mdrivetour.com"},{format:"domain",value:"bmw-me.com"},{format:"domain",value:"bmw-military-sales.com"},{format:"domain",value:"bmw-motorcycle.com"},{format:"domain",value:"bmw-motorcycles.vn"},{format:"domain",value:"bmw-motorrad-abudhabi.com"},{format:"domain",value:"bmw-motorrad-authorities.com"},{format:"domain",value:"bmw-motorrad-dubai.com"},{format:"domain",value:"bmw-motorrad-motorsport.com"},{format:"domain",value:"bmw-motorrad-now-or-never.com"},{format:"domain",value:"bmw-motorrad-service-inclusive.com"},{format:"domain",value:"bmw-motorrad-test-ride.com"},{format:"domain",value:"bmw-motorrad.at"},{format:"domain",value:"bmw-motorrad.be"},{format:"domain",value:"bmw-motorrad.bg"},{format:"domain",value:"bmw-motorrad.bh"},{format:"domain",value:"bmw-motorrad.bo"},{format:"domain",value:"bmw-motorrad.ca"},{format:"domain",value:"bmw-motorrad.ch"},{format:"domain",value:"bmw-motorrad.cl"},{format:"domain",value:"bmw-motorrad.co"},{format:"domain",value:"bmw-motorrad.co.id"},{format:"domain",value:"bmw-motorrad.co.kr"},{format:"domain",value:"bmw-motorrad.co.nz"},{format:"domain",value:"bmw-motorrad.co.th"},{format:"domain",value:"bmw-motorrad.co.uk"},{format:"domain",value:"bmw-motorrad.co.za"},{format:"domain",value:"bmw-motorrad.com"},{format:"domain",value:"bmw-motorrad.com.ar"},{format:"domain",value:"bmw-motorrad.com.au"},{format:"domain",value:"bmw-motorrad.com.br"},{format:"domain",value:"bmw-motorrad.com.do"},{format:"domain",value:"bmw-motorrad.com.hr"},{format:"domain",value:"bmw-motorrad.com.mx"},{format:"domain",value:"bmw-motorrad.com.my"},{format:"domain",value:"bmw-motorrad.com.pe"},{format:"domain",value:"bmw-motorrad.com.py"},{format:"domain",value:"bmw-motorrad.com.tr"},{format:"domain",value:"bmw-motorrad.cr"},{format:"domain",value:"bmw-motorrad.cz"},{format:"domain",value:"bmw-motorrad.de"},{format:"domain",value:"bmw-motorrad.dk"},{format:"domain",value:"bmw-motorrad.dz"},{format:"domain",value:"bmw-motorrad.ec"},{format:"domain",value:"bmw-motorrad.ee"},{format:"domain",value:"bmw-motorrad.es"},{format:"domain",value:"bmw-motorrad.fi"},{format:"domain",value:"bmw-motorrad.fr"},{format:"domain",value:"bmw-motorrad.gr"},{format:"domain",value:"bmw-motorrad.gt"},{format:"domain",value:"bmw-motorrad.hu"},{format:"domain",value:"bmw-motorrad.in"},{format:"domain",value:"bmw-motorrad.it"},{format:"domain",value:"bmw-motorrad.jp"},{format:"domain",value:"bmw-motorrad.lu"},{format:"domain",value:"bmw-motorrad.ma"},{format:"domain",value:"bmw-motorrad.nl"},{format:"domain",value:"bmw-motorrad.no"},{format:"domain",value:"bmw-motorrad.pa"},{format:"domain",value:"bmw-motorrad.pl"},{format:"domain",value:"bmw-motorrad.pt"},{format:"domain",value:"bmw-motorrad.ro"},{format:"domain",value:"bmw-motorrad.rs"},{format:"domain",value:"bmw-motorrad.ru"},{format:"domain",value:"bmw-motorrad.sa"},{format:"domain",value:"bmw-motorrad.se"},{format:"domain",value:"bmw-motorrad.si"},{format:"domain",value:"bmw-motorrad.sk"},{format:"domain",value:"bmw-motorrad.sv"},{format:"domain",value:"bmw-motorrad.tw"},{format:"domain",value:"bmw-motorrad.ua"},{format:"domain",value:"bmw-motorrad.uy"},{format:"domain",value:"bmw-motorsport.com"},{format:"domain",value:"bmw-mountains.com"},{format:"domain",value:"bmw-museum.com"},{format:"domain",value:"bmw-museum.net"},{format:"domain",value:"bmw-nigeria.com"},{format:"domain",value:"bmw-oman.com"},{format:"domain",value:"bmw-ottawa.ca"},{format:"domain",value:"bmw-pakistan.com"},{format:"domain",value:"bmw-plant-munich.com"},{format:"domain",value:"bmw-pma.com.sg"},{format:"domain",value:"bmw-powertrain.com"},{format:"domain",value:"bmw-product-highlights.com"},{format:"domain",value:"bmw-qatar.com"},{format:"domain",value:"bmw-routes.com"},{format:"domain",value:"bmw-rp.com"},{format:"domain",value:"bmw-rrdays.com"},{format:"domain",value:"bmw-saudiarabia.com"},{format:"domain",value:"bmw-security-vehicles.com"},{format:"domain",value:"bmw-special-sales.com"},{format:"domain",value:"bmw-sports.com"},{format:"domain",value:"bmw-sudan.com"},{format:"domain",value:"bmw-tahiti.com"},{format:"domain",value:"bmw-tunisia.com"},{format:"domain",value:"bmw-vancouver.ca"},{format:"domain",value:"bmw-voli.me"},{format:"domain",value:"bmw-welt.com"},{format:"domain",value:"bmw-welt.net"},{format:"domain",value:"bmw-welt.tv"},{format:"domain",value:"bmw-werk-berlin.de"},{format:"domain",value:"bmw-world.com"},{format:"domain",value:"bmw-world.net"},{format:"domain",value:"bmw-world.tv"},{format:"domain",value:"bmw-worldfinal.com"},{format:"domain",value:"bmw-yachtsport.com"},{format:"domain",value:"bmw-yeg.ca"},{format:"domain",value:"bmw-yemen.com"},{format:"domain",value:"bmw.am"},{format:"domain",value:"bmw.at"},{format:"domain",value:"bmw.az"},{format:"domain",value:"bmw.ba"},{format:"domain",value:"bmw.bb"},{format:"domain",value:"bmw.be"},{format:"domain",value:"bmw.bg"},{format:"domain",value:"bmw.bm"},{format:"domain",value:"bmw.bs"},{format:"domain",value:"bmw.by"},{format:"domain",value:"bmw.ca"},{format:"domain",value:"bmw.cc"},{format:"domain",value:"bmw.ch"},{format:"domain",value:"bmw.cl"},{format:"domain",value:"bmw.co.ao"},{format:"domain",value:"bmw.co.cr"},{format:"domain",value:"bmw.co.id"},{format:"domain",value:"bmw.co.il"},{format:"domain",value:"bmw.co.jp"},{format:"domain",value:"bmw.co.ke"},{format:"domain",value:"bmw.co.kr"},{format:"domain",value:"bmw.co.nz"},{format:"domain",value:"bmw.co.th"},{format:"domain",value:"bmw.co.uk"},{format:"domain",value:"bmw.co.za"},{format:"domain",value:"bmw.com"},{format:"domain",value:"bmw.com.ar"},{format:"domain",value:"bmw.com.au"},{format:"domain",value:"bmw.com.bd"},{format:"domain",value:"bmw.com.bn"},{format:"domain",value:"bmw.com.bo"},{format:"domain",value:"bmw.com.br"},{format:"domain",value:"bmw.com.cn"},{format:"domain",value:"bmw.com.co"},{format:"domain",value:"bmw.com.cy"},{format:"domain",value:"bmw.com.do"},{format:"domain",value:"bmw.com.ec"},{format:"domain",value:"bmw.com.ge"},{format:"domain",value:"bmw.com.gt"},{format:"domain",value:"bmw.com.kh"},{format:"domain",value:"bmw.com.ky"},{format:"domain",value:"bmw.com.mk"},{format:"domain",value:"bmw.com.mo"},{format:"domain",value:"bmw.com.mt"},{format:"domain",value:"bmw.com.mx"},{format:"domain",value:"bmw.com.my"},{format:"domain",value:"bmw.com.ni"},{format:"domain",value:"bmw.com.pa"},{format:"domain",value:"bmw.com.pe"},{format:"domain",value:"bmw.com.ph"},{format:"domain",value:"bmw.com.py"},{format:"domain",value:"bmw.com.sg"},{format:"domain",value:"bmw.com.sv"},{format:"domain",value:"bmw.com.tr"},{format:"domain",value:"bmw.com.tw"},{format:"domain",value:"bmw.com.uy"},{format:"domain",value:"bmw.com.ve"},{format:"domain",value:"bmw.cw"},{format:"domain",value:"bmw.cz"},{format:"domain",value:"bmw.de"},{format:"domain",value:"bmw.dk"},{format:"domain",value:"bmw.dz"},{format:"domain",value:"bmw.ee"},{format:"domain",value:"bmw.es"},{format:"domain",value:"bmw.fi"},{format:"domain",value:"bmw.fr"},{format:"domain",value:"bmw.gp"},{format:"domain",value:"bmw.gr"},{format:"domain",value:"bmw.hn"},{format:"domain",value:"bmw.hr"},{format:"domain",value:"bmw.ht"},{format:"domain",value:"bmw.hu"},{format:"domain",value:"bmw.ie"},{format:"domain",value:"bmw.in"},{format:"domain",value:"bmw.is"},{format:"domain",value:"bmw.it"},{format:"domain",value:"bmw.kg"},{format:"domain",value:"bmw.kz"},{format:"domain",value:"bmw.lc"},{format:"domain",value:"bmw.lk"},{format:"domain",value:"bmw.lt"},{format:"domain",value:"bmw.lu"},{format:"domain",value:"bmw.lv"},{format:"domain",value:"bmw.ly"},{format:"domain",value:"bmw.ma"},{format:"domain",value:"bmw.md"},{format:"domain",value:"bmw.mn"},{format:"domain",value:"bmw.mq"},{format:"domain",value:"bmw.mu"},{format:"domain",value:"bmw.nc"},{format:"domain",value:"bmw.nl"},{format:"domain",value:"bmw.no"},{format:"domain",value:"bmw.pl"},{format:"domain",value:"bmw.ps"},{format:"domain",value:"bmw.pt"},{format:"domain",value:"bmw.re"},{format:"domain",value:"bmw.ro"},{format:"domain",value:"bmw.rs"},{format:"domain",value:"bmw.se"},{format:"domain",value:"bmw.si"},{format:"domain",value:"bmw.sk"},{format:"domain",value:"bmw.sn"},{format:"domain",value:"bmw.tm"},{format:"domain",value:"bmw.tt"},{format:"domain",value:"bmw.ua"},{format:"domain",value:"bmw.uz"},{format:"domain",value:"bmw.vn"},{format:"domain",value:"bmwarchiv.at"},{format:"domain",value:"bmwarchiv.de"},{format:"domain",value:"bmwartjourney.com"},{format:"domain",value:"bmwasia.com"},{format:"domain",value:"bmwauslieferungszentrum.com"},{format:"domain",value:"bmwbikes.com"},{format:"domain",value:"bmwbkk.de"},{format:"domain",value:"bmwccrc.ca"},{format:"domain",value:"bmwcenternet.com"},{format:"domain",value:"bmwchampionship.com"},{format:"domain",value:"bmwchampionshipusa.com"},{format:"domain",value:"bmwcharitygolf.com"},{format:"domain",value:"bmwcitychallenge.com"},{format:"domain",value:"bmwclassic.com"},{format:"domain",value:"bmwcolorado.com"},{format:"domain",value:"bmwconnecteddrive.com"},{format:"domain",value:"bmwcustomapparel.com"},{format:"domain",value:"bmwdcsnet.net"},{format:"domain",value:"bmwdealercareers.com"},{format:"domain",value:"bmwdealerdirect.com"},{format:"domain",value:"bmwdelawarevalley.com"},{format:"domain",value:"bmwfilms.com"},{format:"domain",value:"bmwgroup-classic-heart.com"},{format:"domain",value:"bmwgroup-classic.com"},{format:"domain",value:"bmwgroup-gaad.com"},{format:"domain",value:"bmwgroup-plants.com"},{format:"domain",value:"bmwgroup-posdigital.com"},{format:"domain",value:"bmwgroup-werke.com"},{format:"domain",value:"bmwgroup.at"},{format:"domain",value:"bmwgroup.com"},{format:"domain",value:"bmwgroup.net"},{format:"domain",value:"bmwgroup.jobs"},{format:"domain",value:"bmwgroupclassic.com"},{format:"domain",value:"bmwgroupdesignworks.com"},{format:"domain",value:"bmwgroupdirect.com"},{format:"domain",value:"bmwgroupfs.com"},{format:"domain",value:"bmwgroupinfobahn.com"},{format:"domain",value:"bmwgroupna.com"},{format:"domain",value:"bmwhk.com"},{format:"domain",value:"bmwi.ca"},{format:"domain",value:"bmwi.jp"},{format:"domain",value:"bmwiventures.com"},{format:"domain",value:"bmwjamaica.com"},{format:"domain",value:"bmwlat.com"},{format:"domain",value:"bmwlifestyle.ca"},{format:"domain",value:"bmwm.com"},{format:"domain",value:"bmwmagazine.com"},{format:"domain",value:"bmwmagazine.de"},{format:"domain",value:"bmwmass.com"},{format:"domain",value:"bmwmass.net"},{format:"domain",value:"bmwmc.net"},{format:"domain",value:"bmwmontreal.ca"},{format:"domain",value:"bmwmotorcycles.com"},{format:"domain",value:"bmwmotorcycleusa.com"},{format:"domain",value:"bmwmotorrad.co.kr"},{format:"domain",value:"bmwmotorrad.com.au"},{format:"domain",value:"bmwmotorrad.com.ph"},{format:"domain",value:"bmwmotorrad.com.sg"},{format:"domain",value:"bmwmotorradhk.com"},{format:"domain",value:"bmwmotorshowblog.com"},{format:"domain",value:"bmwmotorsport.com"},{format:"domain",value:"bmwmperformance.com"},{format:"domain",value:"bmwmuseum.net"},{format:"domain",value:"bmwmyanmar.com"},{format:"domain",value:"bmwofannapolis.com"},{format:"domain",value:"bmwofcentralpa.com"},{format:"domain",value:"bmwoftulsa.com"},{format:"domain",value:"bmwondemandusa.com"},{format:"domain",value:"bmworegon.com"},{format:"domain",value:"bmwperformancecenter.com"},{format:"domain",value:"bmwpittsburgh.com"},{format:"domain",value:"bmwproductnews.com"},{format:"domain",value:"bmwsafari.com"},{format:"domain",value:"bmwsfl.com"},{format:"domain",value:"bmwsfl.net"},{format:"domain",value:"bmwshop.ca"},{format:"domain",value:"bmwspecialoffers.ca"},{format:"domain",value:"bmwsports.com"},{format:"domain",value:"bmwstartupgarage.com"},{format:"domain",value:"bmwstep.com"},{format:"domain",value:"bmwstepconnections.com"},{format:"domain",value:"bmwsummerschool.com"},{format:"domain",value:"bmwtampabay.com"},{format:"domain",value:"bmwusa.com"},{format:"domain",value:"bmwusatires.com"},{format:"domain",value:"bmwusaservice.com"},{format:"domain",value:"bmwusfactory.com"},{format:"domain",value:"bmwusrideracademy.com"},{format:"domain",value:"bmwvalueservice.com"},{format:"domain",value:"bmwwholesaleconnect.com"},{format:"domain",value:"bmwworld.com"},{format:"domain",value:"bmwworld.net"},{format:"domain",value:"bmwworld.tv"},{format:"domain",value:"bmwzentrum.com"},{format:"domain",value:"brand-protection-team.com"},{format:"domain",value:"cencoastbmw.com"},{format:"domain",value:"chargenow.com"},{format:"domain",value:"chargenowusa.com"},{format:"domain",value:"chicagolandbmw.com"},{format:"domain",value:"connected-drive.com"},{format:"domain",value:"daytonbmw.com"},{format:"domain",value:"dealerspeed.net"},{format:"domain",value:"desertbmw.com"},{format:"domain",value:"dreambmw.ca"},{format:"domain",value:"grupobmw.com"},{format:"domain",value:"guambmw.com"},{format:"domain",value:"hackthedrive.com"},{format:"domain",value:"hawaiibmw.com"},{format:"domain",value:"iaablog.com"},{format:"domain",value:"lasvegasbmw.com"},{format:"domain",value:"m-power.com"},{format:"domain",value:"minneapolisbmw.com"},{format:"domain",value:"minneapolisbmw.net"},{format:"domain",value:"motorshowblog.com"},{format:"domain",value:"mybmw.ca"},{format:"domain",value:"mybmw.com"},{format:"domain",value:"newhampshirebmw.com"},{format:"domain",value:"nmbmw.com"},{format:"domain",value:"ocbmwdealers.com"},{format:"domain",value:"offresspecialesbmw.ca"},{format:"domain",value:"park-now.com"},{format:"domain",value:"parkinfo.com"},{format:"domain",value:"pdxbmw.com"},{format:"domain",value:"phxbmw.com"},{format:"domain",value:"pre-bmwgroup.jobs"},{format:"domain",value:"pugetsoundbmw.com"},{format:"domain",value:"rentaride.com"},{format:"domain",value:"rentaride.de"},{format:"domain",value:"rhodeislandbmw.com"},{format:"domain",value:"sdcountybmw.com"},{format:"domain",value:"shopbmwmotorcycles.com"},{format:"domain",value:"shopbmwusa.com"},{format:"domain",value:"socalbmw.com"},{format:"domain",value:"stlouisbmw.net"},{format:"domain",value:"the-m-festival.com"},{format:"domain",value:"tristatebmw.com"},{format:"domain",value:"vancouverbmwretailers.ca"},{format:"domain",value:"washingtondcbmw.com"},{format:"domain",value:"alfera.com.hk"},{format:"domain",value:"alfera.com.my"},{format:"domain",value:"alfera.in"},{format:"domain",value:"alfera.my"},{format:"domain",value:"alphera-finance.co.in"},{format:"domain",value:"alphera-finance.com.hk"},{format:"domain",value:"alphera-finance.in"},{format:"domain",value:"alphera.ca"},{format:"domain",value:"alphera.co.in"},{format:"domain",value:"alphera.co.nz"},{format:"domain",value:"alphera.com"},{format:"domain",value:"alphera.com.es"},{format:"domain",value:"alphera.com.hk"},{format:"domain",value:"alphera.com.my"},{format:"domain",value:"alphera.de"},{format:"domain",value:"alphera.es"},{format:"domain",value:"alphera.ie"},{format:"domain",value:"alphera.in"},{format:"domain",value:"alphera.my"},{format:"domain",value:"alphera.net"},{format:"domain",value:"alpherafinance.com.hk"},{format:"domain",value:"alpherafinancialservices.es"},{format:"domain",value:"alpherafinancialservices.in"},{format:"domain",value:"alpherafs.ca"},{format:"domain",value:"alpherafs.co.nz"},{format:"domain",value:"alpherafs.com.hk"},{format:"domain",value:"alpherafs.com.my"},{format:"domain",value:"alpherafs.ie"},{format:"domain",value:"alpherafs.in"},{format:"domain",value:"alpherafs.my"},{format:"domain",value:"premiumfs.de"},{format:"domain",value:"alphabet.asia"},{format:"domain",value:"alphabet.at"},{format:"domain",value:"alphabet.be"},{format:"domain",value:"alphabet.biz"},{format:"domain",value:"alphabet.ch"},{format:"domain",value:"alphabet.co.hu"},{format:"domain",value:"alphabet.co.uk"},{format:"domain",value:"alphabet.co.za"},{format:"domain",value:"alphabet.com"},{format:"domain",value:"alphabet.com.cn"},{format:"domain",value:"alphabet.com.es"},{format:"domain",value:"alphabet.com.lv"},{format:"domain",value:"alphabet.com.mx"},{format:"domain",value:"alphabet.com.pl"},{format:"domain",value:"alphabet.com.pt"},{format:"domain",value:"alphabet.cz"},{format:"domain",value:"alphabet.de"},{format:"domain",value:"alphabet.es"},{format:"domain",value:"alphabet.eu"},{format:"domain",value:"alphabet.fr"},{format:"domain",value:"alphabet.info"},{format:"domain",value:"alphabet.jp"},{format:"domain",value:"alphabet.lt"},{format:"domain",value:"alphabet.lu"},{format:"domain",value:"alphabet.lv"},{format:"domain",value:"alphabet.mx"},{format:"domain",value:"alphabet.net.cn"},{format:"domain",value:"alphabet.no"},{format:"domain",value:"alphabet.org.uk"},{format:"domain",value:"alphabet.pl"},{format:"domain",value:"alphabet.pt"},{format:"domain",value:"alphabet.uk"},{format:"domain",value:"alphabet.us"},{format:"domain",value:"alphabetfinance.net"},{format:"domain",value:"electricluxury.com"},{format:"domain",value:"rolls-roycecullinan.com"},{format:"domain",value:"rolls-roycemotorcars.com"},{format:"domain",value:"rolls-roycemotorcarsna.com"},{format:"domain",value:"rrtis.com"},{format:"domain",value:"spiritofecstasy.com"},{format:"domain",value:"mini"},{format:"domain",value:"4myminicard.com"},{format:"domain",value:"aboutyourmini.com"},{format:"domain",value:"atlantaminidealers.com"},{format:"domain",value:"greatergothammini.com"},{format:"domain",value:"midatlanticbmwmotorcycles.com"},{format:"domain",value:"mini-abudhabi.com"},{format:"domain",value:"mini-antilles.fr"},{format:"domain",value:"mini-bahrain.com"},{format:"domain",value:"mini-bosnia.com"},{format:"domain",value:"mini-clubs-international.com"},{format:"domain",value:"mini-connected.at"},{format:"domain",value:"mini-connected.be"},{format:"domain",value:"mini-connected.ch"},{format:"domain",value:"mini-connected.co.uk"},{format:"domain",value:"mini-connected.com"},{format:"domain",value:"mini-connected.cz"},{format:"domain",value:"mini-connected.de"},{format:"domain",value:"mini-connected.dk"},{format:"domain",value:"mini-connected.ee"},{format:"domain",value:"mini-connected.es"},{format:"domain",value:"mini-connected.fi"},{format:"domain",value:"mini-connected.fr"},{format:"domain",value:"mini-connected.ie"},{format:"domain",value:"mini-connected.it"},{format:"domain",value:"mini-connected.lt"},{format:"domain",value:"mini-connected.lu"},{format:"domain",value:"mini-connected.lv"},{format:"domain",value:"mini-connected.nl"},{format:"domain",value:"mini-connected.no"},{format:"domain",value:"mini-connected.pl"},{format:"domain",value:"mini-connected.pt"},{format:"domain",value:"mini-connected.se"},{format:"domain",value:"mini-corporate-sales.com"},{format:"domain",value:"mini-coupe.ca"},{format:"domain",value:"mini-dubai.com"},{format:"domain",value:"mini-e.com"},{format:"domain",value:"mini-egypt.com"},{format:"domain",value:"mini-georgia.com"},{format:"domain",value:"mini-grouparchiv.de"},{format:"domain",value:"mini-grouparchive.com"},{format:"domain",value:"mini-jordan.com"},{format:"domain",value:"mini-ksa.com"},{format:"domain",value:"mini-kuwait.com"},{format:"domain",value:"mini-lebanon.com"},{format:"domain",value:"mini-me.com"},{format:"domain",value:"mini-oman.com"},{format:"domain",value:"mini-qatar.com"},{format:"domain",value:"mini-srilanka.com"},{format:"domain",value:"mini-stjohns.ca"},{format:"domain",value:"mini-stjohns.com"},{format:"domain",value:"mini-tahiti.com"},{format:"domain",value:"mini-vietnam.com"},{format:"domain",value:"mini-windsor.ca"},{format:"domain",value:"mini-windsor.com"},{format:"domain",value:"mini.am"},{format:"domain",value:"mini.at"},{format:"domain",value:"mini.be"},{format:"domain",value:"mini.bg"},{format:"domain",value:"mini.by"},{format:"domain",value:"mini.ca"},{format:"domain",value:"mini.cc"},{format:"domain",value:"mini.ch"},{format:"domain",value:"mini.cl"},{format:"domain",value:"mini.co.cr"},{format:"domain",value:"mini.co.id"},{format:"domain",value:"mini.co.il"},{format:"domain",value:"mini.co.kr"},{format:"domain",value:"mini.co.me"},{format:"domain",value:"mini.co.th"},{format:"domain",value:"mini.co.uk"},{format:"domain",value:"mini.co.za"},{format:"domain",value:"mini.com"},{format:"domain",value:"mini.com.ar"},{format:"domain",value:"mini.com.bn"},{format:"domain",value:"mini.com.br"},{format:"domain",value:"mini.com.co"},{format:"domain",value:"mini.com.cy"},{format:"domain",value:"mini.com.do"},{format:"domain",value:"mini.com.ec"},{format:"domain",value:"mini.com.gr"},{format:"domain",value:"mini.com.gt"},{format:"domain",value:"mini.com.hr"},{format:"domain",value:"mini.com.mk"},{format:"domain",value:"mini.com.mo"},{format:"domain",value:"mini.com.mt"},{format:"domain",value:"mini.com.mx"},{format:"domain",value:"mini.com.pa"},{format:"domain",value:"mini.com.pe"},{format:"domain",value:"mini.com.ph"},{format:"domain",value:"mini.com.pl"},{format:"domain",value:"mini.com.py"},{format:"domain",value:"mini.com.sg"},{format:"domain",value:"mini.com.tr"},{format:"domain",value:"mini.com.tw"},{format:"domain",value:"mini.com.uy"},{format:"domain",value:"mini.cz"},{format:"domain",value:"mini.de"},{format:"domain",value:"mini.dk"},{format:"domain",value:"mini.dz"},{format:"domain",value:"mini.es"},{format:"domain",value:"mini.fi"},{format:"domain",value:"mini.fr"},{format:"domain",value:"mini.gp"},{format:"domain",value:"mini.hu"},{format:"domain",value:"mini.ie"},{format:"domain",value:"mini.in"},{format:"domain",value:"mini.is"},{format:"domain",value:"mini.it"},{format:"domain",value:"mini.jp"},{format:"domain",value:"mini.kz"},{format:"domain",value:"mini.lu"},{format:"domain",value:"mini.ma"},{format:"domain",value:"mini.md"},{format:"domain",value:"mini.mq"},{format:"domain",value:"mini.mu"},{format:"domain",value:"mini.my"},{format:"domain",value:"mini.nc"},{format:"domain",value:"mini.nl"},{format:"domain",value:"mini.no"},{format:"domain",value:"mini.pt"},{format:"domain",value:"mini.re"},{format:"domain",value:"mini.ro"},{format:"domain",value:"mini.rs"},{format:"domain",value:"mini.ru"},{format:"domain",value:"mini.se"},{format:"domain",value:"mini.si"},{format:"domain",value:"mini.sk"},{format:"domain",value:"mini.tm"},{format:"domain",value:"mini.tn"},{format:"domain",value:"mini.ua"},{format:"domain",value:"mini101.ca"},{format:"domain",value:"miniargentina.com"},{format:"domain",value:"minibrossard.ca"},{format:"domain",value:"minibrossard.com"},{format:"domain",value:"minicanada.ca"},{format:"domain",value:"minicaribbean.com"},{format:"domain",value:"miniccrc.ca"},{format:"domain",value:"minicooper.ca"},{format:"domain",value:"minidealer.com"},{format:"domain",value:"minidealernet.com"},{format:"domain",value:"minidowntown.ca"},{format:"domain",value:"minidowntown.com"},{format:"domain",value:"minidrivingexperienceusa.com"},{format:"domain",value:"minidurham.ca"},{format:"domain",value:"minidurham.com"},{format:"domain",value:"minie.com"},{format:"domain",value:"minifs.com"},{format:"domain",value:"minigeorgian.ca"},{format:"domain",value:"minigrandriver.com"},{format:"domain",value:"minihalifax.ca"},{format:"domain",value:"minihalifax.com"},{format:"domain",value:"minihk.com"},{format:"domain",value:"miniinvasion.ca"},{format:"domain",value:"miniitalianjob.com"},{format:"domain",value:"minikelowna.ca"},{format:"domain",value:"minikelowna.com"},{format:"domain",value:"minilangley.ca"},{format:"domain",value:"minilangley.com"},{format:"domain",value:"minilat.com"},{format:"domain",value:"minilaval.ca"},{format:"domain",value:"minilaval.com"},{format:"domain",value:"minilondon.ca"},{format:"domain",value:"minilondon.co"},{format:"domain",value:"minimarkham.ca"},{format:"domain",value:"minimarkham.com"},{format:"domain",value:"minimoncton.ca"},{format:"domain",value:"minimoncton.com"},{format:"domain",value:"minimontrealcentre.ca"},{format:"domain",value:"minimontroyal.ca"},{format:"domain",value:"minimontroyal.com"},{format:"domain",value:"minimotoringrewards.com"},{format:"domain",value:"minimotoringschool.com"},{format:"domain",value:"minimotorsport.com"},{format:"domain",value:"mininanaimo.ca"},{format:"domain",value:"mininanaimo.com"},{format:"domain",value:"minioakville.com"},{format:"domain",value:"miniofmonrovia.com"},{format:"domain",value:"minipetfriendly.com"},{format:"domain",value:"minirichmond.ca"},{format:"domain",value:"minirichmond.com"},{format:"domain",value:"minisaskatoon.ca"},{format:"domain",value:"minisaskatoon.com"},{format:"domain",value:"minishop.ca"},{format:"domain",value:"minispace.com"},{format:"domain",value:"minispecialoffers.ca"},{format:"domain",value:"minispygear.com"},{format:"domain",value:"ministcatharines.ca"},{format:"domain",value:"ministeagathe.com"},{format:"domain",value:"ministjohns.ca"},{format:"domain",value:"minitakesthestates.com"},{format:"domain",value:"minitoronto.ca"},{format:"domain",value:"minitroisrivieres.ca"},{format:"domain",value:"miniusa.com"},{format:"domain",value:"miniusaservice.com"},{format:"domain",value:"miniusatires.com"},{format:"domain",value:"minivalueservice.com"},{format:"domain",value:"minivancouver.ca"},{format:"domain",value:"minivaughanwest.ca"},{format:"domain",value:"minivaughanwest.com"},{format:"domain",value:"minivictoria.ca"},{format:"domain",value:"minivictoria.com"},{format:"domain",value:"minivilledequebec.ca"},{format:"domain",value:"minivilledequebec.com"},{format:"domain",value:"miniwholesaleconnect.com"},{format:"domain",value:"miniwidget.ca"},{format:"domain",value:"miniwindsor.com"},{format:"domain",value:"miniworkshop.com"},{format:"domain",value:"miniyaletown.ca"},{format:"domain",value:"pugetsoundmini.com"},{format:"domain",value:"shopminiusa.com"},{format:"domain",value:"southfloridamini.com"},{format:"domain",value:"trmini.com"},{format:"domain",value:"troisrivieresmini.com"},{format:"domain",value:"yours-customised.mini.com"}],[{format:"domain",value:"microsoft"},{format:"domain",value:"hotmail"},{format:"domain",value:"office"},{format:"domain",value:"skype"},{format:"domain",value:"windows"},{format:"domain",value:"microsoft.az"},{format:"domain",value:"microsoft.be"},{format:"domain",value:"microsoft.by"},{format:"domain",value:"microsoft.ca"},{format:"domain",value:"microsoft.cat"},{format:"domain",value:"microsoft.ch"},{format:"domain",value:"microsoft.cl"},{format:"domain",value:"microsoft.com"},{format:"domain",value:"microsoft.cz"},{format:"domain",value:"microsoft.de"},{format:"domain",value:"microsoft.dk"},{format:"domain",value:"microsoft.ee"},{format:"domain",value:"microsoft.es"},{format:"domain",value:"microsoft.eu"},{format:"domain",value:"microsoft.fi"},{format:"domain",value:"microsoft.ge"},{format:"domain",value:"microsoft.hu"},{format:"domain",value:"microsoft.io"},{format:"domain",value:"microsoft.is"},{format:"domain",value:"microsoft.it"},{format:"domain",value:"microsoft.jp"},{format:"domain",value:"microsoft.lt"},{format:"domain",value:"microsoft.lu"},{format:"domain",value:"microsoft.lv"},{format:"domain",value:"microsoft.md"},{format:"domain",value:"microsoft.net"},{format:"domain",value:"microsoft.pl"},{format:"domain",value:"microsoft.pt"},{format:"domain",value:"microsoft.red"},{format:"domain",value:"microsoft.ro"},{format:"domain",value:"microsoft.rs"},{format:"domain",value:"microsoft.ru"},{format:"domain",value:"microsoft.se"},{format:"domain",value:"microsoft.si"},{format:"domain",value:"microsoft.tv"},{format:"domain",value:"microsoft.ua"},{format:"domain",value:"microsoft.uz"},{format:"domain",value:"microsoft.vn"},{format:"domain",value:"femalefounderscomp.com"},{format:"domain",value:"m12.vc"},{format:"domain",value:"aka.ms"},{format:"domain",value:"ankarazirvesi2018.com"},{format:"domain",value:"applicationinsights.io"},{format:"domain",value:"applicationinsights.net"},{format:"domain",value:"aria.ms"},{format:"domain",value:"asp.net"},{format:"domain",value:"aspnetcdn.com"},{format:"domain",value:"binads.com"},{format:"domain",value:"bluehatil.com"},{format:"domain",value:"boswp.com"},{format:"domain",value:"brazilpartneruniversity.com"},{format:"domain",value:"breakdown.me"},{format:"domain",value:"centralvalidation.com"},{format:"domain",value:"ch9.ms"},{format:"domain",value:"charticulator.com"},{format:"domain",value:"cloudapp.net"},{format:"domain",value:"cloudappsecurity.com"},{format:"domain",value:"cortanaanalytics.com"},{format:"domain",value:"cortanaskills.com"},{format:"domain",value:"crmdynint-gcc.com"},{format:"domain",value:"crmdynint.com"},{format:"domain",value:"crossborderexpansion.com"},{format:"domain",value:"docs.com"},{format:"domain",value:"dynamics.cn"},{format:"domain",value:"dynamics.com"},{format:"domain",value:"efproject.net"},{format:"domain",value:"engkoo.com"},{format:"domain",value:"fasttrackreadysupport.com"},{format:"domain",value:"fluidpreview.com"},{format:"domain",value:"gameuxmasterguide.com"},{format:"domain",value:"gears5.com"},{format:"domain",value:"gearspop.com"},{format:"domain",value:"gearstactics.com"},{format:"domain",value:"gfx.ms"},{format:"domain",value:"gigjam.com"},{format:"domain",value:"hololens.com"},{format:"domain",value:"hotmail.co"},{format:"domain",value:"hotmail.com"},{format:"domain",value:"hotmail.eu"},{format:"domain",value:"hotmail.net"},{format:"domain",value:"hotmail.org"},{format:"domain",value:"hummingbird.ms"},{format:"domain",value:"ie8.co"},{format:"domain",value:"ie9.com"},{format:"domain",value:"ie10.com"},{format:"domain",value:"ie11.com"},{format:"domain",value:"internetexplorer.co"},{format:"domain",value:"internetexplorer.com"},{format:"domain",value:"imaginecup.pl"},{format:"domain",value:"ingads.com"},{format:"domain",value:"intunewiki.com"},{format:"domain",value:"iotinactionevents.com"},{format:"domain",value:"kidgrid.tv"},{format:"domain",value:"kumo.com"},{format:"domain",value:"latampartneruniversity.com"},{format:"domain",value:"live.com"},{format:"domain",value:"live.com.au"},{format:"domain",value:"live.eu"},{format:"domain",value:"live.net"},{format:"domain",value:"livingyourambition.com"},{format:"domain",value:"lync.cn"},{format:"domain",value:"makecode.org"},{format:"domain",value:"managedmeetingrooms.com"},{format:"domain",value:"meetfasttrack.com"},{format:"domain",value:"meetyourdevices.com"},{format:"domain",value:"mepn.com"},{format:"domain",value:"microsoft-falcon.io"},{format:"domain",value:"microsoft-int.com"},{format:"domain",value:"microsoft-ppe.com"},{format:"domain",value:"microsoft-sap-events.com"},{format:"domain",value:"microsoft-sbs-domains.com"},{format:"domain",value:"microsoft-smb.cn"},{format:"domain",value:"microsoft365.com"},{format:"domain",value:"microsoftaccountguard.com"},{format:"domain",value:"microsoftads.com"},{format:"domain",value:"microsoftadvertising.com"},{format:"domain",value:"microsoftadvertisingregionalawards.com"},{format:"domain",value:"microsoftaffiliates.com"},{format:"domain",value:"microsoftapp.net"},{format:"domain",value:"microsoftcloud.com"},{format:"domain",value:"microsoftcloudworkshop.com"},{format:"domain",value:"microsoftcommunitytraining.com"},{format:"domain",value:"microsoftedge.com"},{format:"domain",value:"microsofthouse.com"},{format:"domain",value:"microsofthouse.net"},{format:"domain",value:"microsoftinternetsafety.net"},{format:"domain",value:"microsoftlatamaitour.com"},{format:"domain",value:"microsoftlinc.com"},{format:"domain",value:"microsoftonline-i.cn"},{format:"domain",value:"microsoftonline-m-i.cn"},{format:"domain",value:"microsoftonline-m.cn"},{format:"domain",value:"microsoftonline-p-i.cn"},{format:"domain",value:"microsoftonline-p-i.net.cn"},{format:"domain",value:"microsoftonline-p.cn"},{format:"domain",value:"microsoftonline-p.com"},{format:"domain",value:"microsoftonline-p.net.cn"},{format:"domain",value:"microsoftonline.cn"},{format:"domain",value:"microsoftonline.com"},{format:"domain",value:"microsoftpartnercommunity.com"},{format:"domain",value:"microsoftready.com"},{format:"domain",value:"microsoftsiteselection.com"},{format:"domain",value:"microsoftstore.com"},{format:"domain",value:"microsoftstore.com.hk"},{format:"domain",value:"microsoftstream.com"},{format:"domain",value:"microsoftteams.com"},{format:"domain",value:"microsofttradein.com"},{format:"domain",value:"microsofttranslator-int.cn"},{format:"domain",value:"microsofttranslator.com"},{format:"domain",value:"microsoftuwp.com"},{format:"domain",value:"momentumms.com"},{format:"domain",value:"morphcharts.com"},{format:"domain",value:"mpnevolution.com"},{format:"domain",value:"ms-studiosmedia.com"},{format:"domain",value:"ms365surfaceoffer.com"},{format:"domain",value:"msads.net"},{format:"domain",value:"msauth.cn"},{format:"domain",value:"msauth.net"},{format:"domain",value:"msauthimages.cn"},{format:"domain",value:"mschallenge2018.com"},{format:"domain",value:"msecnd.net"},{format:"domain",value:"msedge.net"},{format:"domain",value:"msft.info"},{format:"domain",value:"msft.net"},{format:"domain",value:"msftauth.cn"},{format:"domain",value:"msftauth.net"},{format:"domain",value:"msftauthimages.cn"},{format:"domain",value:"msfteducation.ca"},{format:"domain",value:"msftnet.org"},{format:"domain",value:"msgamesresearch.com"},{format:"domain",value:"msocdn.com"},{format:"domain",value:"mspil.cn"},{format:"domain",value:"msra.cn"},{format:"domain",value:"msturing.org"},{format:"domain",value:"msudalosti.com"},{format:"domain",value:"mymicrosoft.com"},{format:"domain",value:"nextechafrica.net"},{format:"domain",value:"nxta.org"},{format:"domain",value:"o365cn.com"},{format:"domain",value:"o365files.cn"},{format:"domain",value:"o365weve-dev.com"},{format:"domain",value:"o365weve-ppe.com"},{format:"domain",value:"o365weve.com"},{format:"domain",value:"office.com"},{format:"domain",value:"office.net"},{format:"domain",value:"office365-net.cn"},{format:"domain",value:"office365.cn"},{format:"domain",value:"office365.com"},{format:"domain",value:"officewebapps.cn"},{format:"domain",value:"onenote.com"},{format:"domain",value:"onenote.net"},{format:"domain",value:"onestore.ms"},{format:"domain",value:"onmschina.cn"},{format:"domain",value:"opticsforthecloud.net"},{format:"domain",value:"outingsapp.com"},{format:"domain",value:"outlook.cn"},{format:"domain",value:"outlook.com"},{format:"domain",value:"passport.net"},{format:"domain",value:"pbiwebcontent.cn"},{format:"domain",value:"pixapp.net"},{format:"domain",value:"powerapps.cn"},{format:"domain",value:"powerappscdn.net"},{format:"domain",value:"powerappsportals.cn"},{format:"domain",value:"powerautomate.cn"},{format:"domain",value:"powerautomate.com"},{format:"domain",value:"powerbi.cn"},{format:"domain",value:"powerbi.com"},{format:"domain",value:"powershellgallery.com"},{format:"domain",value:"projectmurphy.net"},{format:"domain",value:"projectsangam.com"},{format:"domain",value:"pxt.io"},{format:"domain",value:"s-microsoft.com"},{format:"domain",value:"s-msft.com"},{format:"domain",value:"s-msn.com"},{format:"domain",value:"sfbassets.com"},{format:"domain",value:"sfbassets.net"},{format:"domain",value:"sfx.ms"},{format:"domain",value:"sharepoint.cn"},{format:"domain",value:"sharepoint.com"},{format:"domain",value:"sharepointonline.com"},{format:"domain",value:"skype.com"},{format:"domain",value:"skype.net"},{format:"domain",value:"skypeassets.com"},{format:"domain",value:"skypeassets.net"},{format:"domain",value:"staffhub.ms"},{format:"domain",value:"successwithteams.com"},{format:"domain",value:"surface.com"},{format:"domain",value:"svc.ms"},{format:"domain",value:"sway-cdn.com"},{format:"domain",value:"sway.com"},{format:"domain",value:"sysinternals.com"},{format:"domain",value:"tailwindtraders.com"},{format:"domain",value:"techhub.ms"},{format:"domain",value:"tfsallin.net"},{format:"domain",value:"translatetheweb.com"},{format:"domain",value:"unlocklimitlesslearning.com"},{format:"domain",value:"userpxt.io"},{format:"domain",value:"videobreakdown.com"},{format:"domain",value:"videoindexer.ai"},{format:"domain",value:"virtualearth.net"},{format:"domain",value:"vsallin.net"},{format:"domain",value:"wbd.ms"},{format:"domain",value:"what-fan.net"},{format:"domain",value:"windows-int.net"},{format:"domain",value:"windows.com"},{format:"domain",value:"windows.net"},{format:"domain",value:"windows.nl"},{format:"domain",value:"windows8.hk"},{format:"domain",value:"windowscommunity.net"},{format:"domain",value:"windowsmarketplace.com"},{format:"domain",value:"windowsphone-int.com"},{format:"domain",value:"windowsphone.com"},{format:"domain",value:"windowssearch.com"},{format:"domain",value:"windowsupdate.com"},{format:"domain",value:"winhec.com"},{format:"domain",value:"winhec.net"},{format:"domain",value:"yammer.com"},{format:"domain",value:"edge-skype-com.s-0001.s-msedge.net"},{format:"domain",value:"skype-edf.akadns.net"},{format:"domain",value:"skypedata.akadns.net"},{format:"domain",value:"dl.delivery.mp.microsoft.com"},{format:"domain",value:"download.windowsupdate.com"},{format:"full domain",value:"bg.v4.a.dl.ws.microsoft.com"},{format:"full domain",value:"bg4.v4.a.dl.ws.microsoft.com"},{format:"full domain",value:"cdn.marketplaceimages.windowsphone.com"},{format:"full domain",value:"cn.windowssearch.com"},{format:"full domain",value:"ctldl.windowsupdate.com"},{format:"full domain",value:"developer.microsoft.com"},{format:"full domain",value:"docs.microsoft.com"},{format:"full domain",value:"download.microsoft.com"},{format:"full domain",value:"download.visualstudio.microsoft.com"},{format:"full domain",value:"fs.microsoft.com"},{format:"full domain",value:"msgr.dlservice.microsoft.com"},{format:"full domain",value:"msgruser.dlservice.microsoft.com"},{format:"full domain",value:"officecdn.microsoft.com"},{format:"full domain",value:"qh.dlservice.microsoft.com"},{format:"full domain",value:"sdx.microsoft.com"},{format:"full domain",value:"silverlight.dlservice.microsoft.com"},{format:"full domain",value:"slupdate.dlservice.microsoft.com"},{format:"full domain",value:"storeedgefd.dsx.mp.microsoft.com"},{format:"full domain",value:"wl.dlservice.microsoft.com"},{format:"full domain",value:"wscont1.apps.microsoft.com"},{format:"full domain",value:"wscont2.apps.microsoft.com"},{format:"full domain",value:"xb.dlservice.microsoft.com"},{format:"full domain",value:"img-prod-cms-rt-microsoft-com.akamaized.net"},{format:"full domain",value:"img-s-msn-com.akamaized.net"},{format:"full domain",value:"mwf-service.akamaized.net"},{format:"full domain",value:"officecdn-microsoft-com.akamaized.net"},{format:"full domain",value:"statics-marketingsites-eas-ms-com.akamaized.net"},{format:"full domain",value:"statics-marketingsites-eus-ms-com.akamaized.net"},{format:"full domain",value:"statics-marketingsites-wcus-ms-com.akamaized.net"},{format:"domain",value:"azure"},{format:"domain",value:"21vbc.com"},{format:"domain",value:"21vbluecloud.com"},{format:"domain",value:"21vbluecloud.net"},{format:"domain",value:"aadrm.cn"},{format:"domain",value:"aggresmart.com"},{format:"domain",value:"apihub-internal.cn"},{format:"domain",value:"appserviceenvironment.cn"},{format:"domain",value:"azcrmc-test.cn"},{format:"domain",value:"azcrmc.cn"},{format:"domain",value:"azk8s.cn"},{format:"domain",value:"aznbcontent.cn"},{format:"domain",value:"aztask.cn"},{format:"domain",value:"azure-api.cn"},{format:"domain",value:"azure-apihub.cn"},{format:"domain",value:"azure-automation.cn"},{format:"domain",value:"azure-connectedvehicles-stage.cn"},{format:"domain",value:"azure-connectedvehicles.cn"},{format:"domain",value:"azure-devices-int.net"},{format:"domain",value:"azure-devices-provisioning.cn"},{format:"domain",value:"azure-devices.cn"},{format:"domain",value:"azure-devices.net"},{format:"domain",value:"azure-mobile.net"},{format:"domain",value:"azure-sphere.com"},{format:"domain",value:"azure-test.net"},{format:"domain",value:"azure.cn"},{format:"domain",value:"azure.com"},{format:"domain",value:"azure.net"},{format:"domain",value:"azurecomcdn.net"},{format:"domain",value:"azurecomm.net"},{format:"domain",value:"azurecontainer.io"},{format:"domain",value:"azurecosmos.net"},{format:"domain",value:"azurecosmosdb.com"},{format:"domain",value:"azurecosmosdb.info"},{format:"domain",value:"azurecosmosdb.net"},{format:"domain",value:"azurecr-test.cn"},{format:"domain",value:"azurecr.cn"},{format:"domain",value:"azuredatabricks.net"},{format:"domain",value:"azuredevopslaunch.com"},{format:"domain",value:"azuredigitaltwin.com"},{format:"domain",value:"azuredigitaltwins.com"},{format:"domain",value:"azuredigitaltwins.net"},{format:"domain",value:"azuredns-prd.info"},{format:"domain",value:"azuredns-prd.org"},{format:"domain",value:"azureedge-test.net"},{format:"domain",value:"azureedge.net"},{format:"domain",value:"azurehdinsight.cn"},{format:"domain",value:"azureiotcentral.com"},{format:"domain",value:"azureiotsolutions.com"},{format:"domain",value:"azureiotsuite.cn"},{format:"domain",value:"azureiotsuite.com"},{format:"domain",value:"azuremresolver.cn"},{format:"domain",value:"azureplanetscale.info"},{format:"domain",value:"azureplanetscale.net"},{format:"domain",value:"azureprivatedns.cn"},{format:"domain",value:"azurerms.cn"},{format:"domain",value:"azuresandbox.cn"},{format:"domain",value:"azureserviceprofiler.com"},{format:"domain",value:"azuresmartspaces.net"},{format:"domain",value:"azurestackvalidation.com"},{format:"domain",value:"azurewebsites.net"},{format:"domain",value:"b2clogin.cn"},{format:"domain",value:"b3itech.cn"},{format:"domain",value:"blueaggrestore.com"},{format:"domain",value:"bluecloudprod.com"},{format:"domain",value:"cegid-cloud.cn"},{format:"domain",value:"chinacloud-mobile.cn"},{format:"domain",value:"chinacloudapi.cn"},{format:"domain",value:"chinacloudapp.cn"},{format:"domain",value:"chinacloudsites.cn"},{format:"domain",value:"cosmosdb.info"},{format:"domain",value:"cosmosdb.net"},{format:"domain",value:"devopsms.com"},{format:"domain",value:"gotcosmos.com"},{format:"domain",value:"hdinsightservices.cn"},{format:"domain",value:"management-azure-devices-int.net"},{format:"domain",value:"management-azure-devices-provisioning.cn"},{format:"domain",value:"management-azure-devices.cn"},{format:"domain",value:"management-azure-devices.net"},{format:"domain",value:"mcchcdn.com"},{format:"domain",value:"mgmt-azure-api.cn"},{format:"domain",value:"microsoftazurestatus.cn"},{format:"domain",value:"microsofteca.com"},{format:"domain",value:"microsoftiotcentral.com"},{format:"domain",value:"microsoftmetrics.cn"},{format:"domain",value:"mncmsidlab1.cn"},{format:"domain",value:"msappproxy.cn"},{format:"domain",value:"mschcdn.com"},{format:"domain",value:"msftcloudes.cn"},{format:"domain",value:"msidentity.cn"},{format:"domain",value:"msidlabpbmc.cn"},{format:"domain",value:"msn.net"},{format:"domain",value:"serverlesslibrary.net"},{format:"domain",value:"trafficmanager.cn"},{format:"domain",value:"trafficmanager.net"},{format:"domain",value:"trustcenter.cn"},{format:"domain",value:"tryfunctions.com"},{format:"domain",value:"unity3dcloud.cn"},{format:"domain",value:"windowsazure.cn"},{format:"domain",value:"windowsazure.com"},{format:"domain",value:"windowsazurestatus.cn"},{format:"domain",value:"regexp:.+\\.azchcdn[a-s]\\.com$"},{format:"full domain",value:"azure.microsoft.com"},{format:"full domain",value:"azuremarketplace.microsoft.com"},{format:"domain",value:"azure-dns.cn"},{format:"domain",value:"azure-dns.com"},{format:"domain",value:"azure-dns.info"},{format:"domain",value:"azure-dns.net"},{format:"domain",value:"azure-dns.org"},{format:"domain",value:"regexp:.+\\.azure-dns-([1-9]|10)\\.cn$"},{format:"domain",value:"bing"},{format:"domain",value:"bing.com"},{format:"domain",value:"bing.com.cn"},{format:"domain",value:"bing.net"},{format:"domain",value:"bingads.com"},{format:"domain",value:"bingagencyawards.com"},{format:"domain",value:"bingapistatistics.com"},{format:"domain",value:"bingsandbox.com"},{format:"domain",value:"bingvisualsearch.com"},{format:"domain",value:"bingworld.com"},{format:"domain",value:"bluehatnights.com"},{format:"domain",value:"dictate.ms"},{format:"domain",value:"flipwithsurface.com"},{format:"domain",value:"masalladeloslimites.com"},{format:"domain",value:"microsoft-give.com"},{format:"domain",value:"microsoftcloudsummit.com"},{format:"domain",value:"microsoftdiplomados.com"},{format:"domain",value:"microsoftlatamholiday.com"},{format:"domain",value:"microsoftmxfilantropia.com"},{format:"domain",value:"microsoftpartnersolutions.com"},{format:"domain",value:"msunlimitedcloudsummit.com"},{format:"domain",value:"office365love.com"},{format:"domain",value:"office365tw.com"},{format:"domain",value:"renovacionoffice.com"},{format:"domain",value:"sprinklesapp.com"},{format:"domain",value:"cn.bing.com"},{format:"domain",value:"cn.bing.net"},{format:"domain",value:"ditu.live.com"},{format:"full domain",value:"bj1.api.bing.com"},{format:"full domain",value:"emoi-cncdn.bing.com"},{format:"domain",value:"atom.io"},{format:"domain",value:"dependabot.com"},{format:"domain",value:"ghcr.io"},{format:"domain",value:"git.io"},{format:"domain",value:"github.blog"},{format:"domain",value:"github.com"},{format:"domain",value:"github.community"},{format:"domain",value:"github.dev"},{format:"domain",value:"github.io"},{format:"domain",value:"githubapp.com"},{format:"domain",value:"githubassets.com"},{format:"domain",value:"githubhackathon.com"},{format:"domain",value:"githubpreview.dev"},{format:"domain",value:"githubstatus.com"},{format:"domain",value:"githubuniverse.com"},{format:"domain",value:"githubusercontent.com"},{format:"domain",value:"myoctocat.com"},{format:"domain",value:"opensource.guide"},{format:"domain",value:"repo.new"},{format:"domain",value:"thegithubshop.com"},{format:"full domain",value:"github-cloud.s3.amazonaws.com"},{format:"domain",value:"regexp:github-production-release-asset-[0-9a-zA-Z]{6}\\.s3\\.amazonaws\\.com"},{format:"domain",value:"adaptivecards.io"},{format:"domain",value:"api-extractor.com"},{format:"domain",value:"apisof.net"},{format:"domain",value:"appcenter.ms"},{format:"domain",value:"blazor.net"},{format:"domain",value:"botframework.com"},{format:"domain",value:"codethemicrobit.com"},{format:"domain",value:"devopsassessment.net"},{format:"domain",value:"dot.net"},{format:"domain",value:"gamesstack.com"},{format:"domain",value:"graphengine.io"},{format:"domain",value:"insiderdevtour.com"},{format:"domain",value:"jwt.ms"},{format:"domain",value:"microbit.org"},{format:"domain",value:"microsoftadc.com"},{format:"domain",value:"microsoftgamestack.com"},{format:"domain",value:"microsoftiotinsiderlabs.com"},{format:"domain",value:"microsoftreactor.cn"},{format:"domain",value:"microsoftreactor.com.cn"},{format:"domain",value:"microsoftreactor.info"},{format:"domain",value:"microsoftreactor.net"},{format:"domain",value:"microsoftreactor.org"},{format:"domain",value:"microsoftsilverlight.com"},{format:"domain",value:"microsoftsilverlight.org"},{format:"domain",value:"microsoftsilverlight.net"},{format:"domain",value:"microsoftsqlserver.com"},{format:"domain",value:"mmdnn.com"},{format:"domain",value:"mono-project.com"},{format:"domain",value:"msdn.com"},{format:"domain",value:"msinnovationchallenge.com"},{format:"domain",value:"mspairlift.com"},{format:"domain",value:"msropendata.com"},{format:"domain",value:"nuget.org"},{format:"domain",value:"nugettest.org"},{format:"domain",value:"opentranslatorstothings.org"},{format:"domain",value:"poshtestgallery.com"},{format:"domain",value:"pwabuilder.com"},{format:"domain",value:"reactorms.com.cn"},{format:"domain",value:"sankie.net"},{format:"domain",value:"sqlserveronlinux.com"},{format:"domain",value:"timelinestoryteller.com"},{format:"domain",value:"uwpcommunitytoolkit.com"},{format:"domain",value:"visualstudio-staging.com"},{format:"domain",value:"visualstudio.com"},{format:"domain",value:"visualstudio.co"},{format:"domain",value:"visualstudio.co.uk"},{format:"domain",value:"visualstudio.eu"},{format:"domain",value:"visualstudio.net"},{format:"domain",value:"vfsforgit.com"},{format:"domain",value:"vfsforgit.org"},{format:"domain",value:"vsassets.io"},{format:"domain",value:"vscode.dev"},{format:"domain",value:"vscode-cdn.net"},{format:"domain",value:"vscode-unpkg.net"},{format:"domain",value:"xamarin.com"},{format:"full domain",value:"az764295.vo.msecnd.net"},{format:"full domain",value:"bingsettingssearch.trafficmanager.net"},{format:"full domain",value:"default.exp-tas.com"},{format:"full domain",value:"dtlgalleryint.cloudapp.net"},{format:"full domain",value:"poshtestgallery.cloudapp.net"},{format:"full domain",value:"psg-int-centralus.cloudapp.net"},{format:"full domain",value:"psg-int-eastus.cloudapp.net"},{format:"full domain",value:"rink.hockeyapp.net"},{format:"full domain",value:"vscode-sync-insiders.trafficmanager.net"},{format:"full domain",value:"vscode-sync.trafficmanager.net"},{format:"full domain",value:"vscode.blob.core.windows.net"},{format:"full domain",value:"vscode.search.windows.net"},{format:"full domain",value:"vsmarketplacebadge.apphb.com"},{format:"domain",value:"msocsp.com"},{format:"full domain",value:"crl.microsoft.com"},{format:"full domain",value:"mscrl.microsoft.com"},{format:"full domain",value:"ocsp.microsoft.com"},{format:"full domain",value:"oneocsp.microsoft.com"},{format:"full domain",value:"www.microsoft.com"},{format:"domain",value:"microsoftnews.cc"},{format:"domain",value:"microsoftnews.cn"},{format:"domain",value:"microsoftnews.com"},{format:"domain",value:"microsoftnews.net"},{format:"domain",value:"microsoftnews.org"},{format:"domain",value:"microsoftnewsforkids.com"},{format:"domain",value:"microsoftnewsforkids.net"},{format:"domain",value:"microsoftnewsforkids.org"},{format:"domain",value:"microsoftnewskids.com"},{format:"domain",value:"microsoftnewskids.net"},{format:"domain",value:"microsoftnewskids.org"},{format:"domain",value:"msn.com"},{format:"domain",value:"msnewskids.com"},{format:"domain",value:"msnewskids.net"},{format:"domain",value:"msnewskids.org"},{format:"domain",value:"msnkids.com"},{format:"domain",value:"1drv.com"},{format:"domain",value:"1drv.ms"},{format:"domain",value:"livefilestore.com"},{format:"domain",value:"onedrive.co"},{format:"domain",value:"onedrive.co.uk"},{format:"domain",value:"onedrive.com"},{format:"domain",value:"onedrive.eu"},{format:"domain",value:"onedrive.net"},{format:"domain",value:"onedrive.org"},{format:"domain",value:"onedrive.live.com"},{format:"domain",value:"storage.live.com"},{format:"domain",value:"xbox"},{format:"domain",value:"forzamotorsport.net"},{format:"domain",value:"forzaracingchampionship.com"},{format:"domain",value:"forzarc.com"},{format:"domain",value:"orithegame.com"},{format:"domain",value:"renovacionxboxlive.com"},{format:"domain",value:"tellmewhygame.com"},{format:"domain",value:"xbox.co"},{format:"domain",value:"xbox.com"},{format:"domain",value:"xbox.eu"},{format:"domain",value:"xbox.org"},{format:"domain",value:"xbox360.co"},{format:"domain",value:"xbox360.com"},{format:"domain",value:"xbox360.eu"},{format:"domain",value:"xbox360.org"},{format:"domain",value:"xboxab.com"},{format:"domain",value:"xboxgamepass.com"},{format:"domain",value:"xboxgamestudios.com"},{format:"domain",value:"xboxlive.cn"},{format:"domain",value:"xboxlive.com"},{format:"domain",value:"xboxone.co"},{format:"domain",value:"xboxone.com"},{format:"domain",value:"xboxone.eu"},{format:"domain",value:"xboxplayanywhere.com"},{format:"domain",value:"xboxstudios.com"},{format:"domain",value:"xbx.lv"},{format:"domain",value:"npm.community"},{format:"domain",value:"npmjs.com"},{format:"domain",value:"npmjs.org"},{format:"domain",value:"beth.games"},{format:"domain",value:"bethesda.net"},{format:"domain",value:"bethesdagamestudios.com"},{format:"domain",value:"bethsoft.com"},{format:"domain",value:"doom.com"},{format:"domain",value:"elderscrolls.com"},{format:"domain",value:"callersbane.com"},{format:"domain",value:"minecraft.net"},{format:"domain",value:"minecraftshop.com"},{format:"domain",value:"mojang.com"}],[{format:"domain",value:"meta.com"},{format:"domain",value:"aboutfacebook.com"},{format:"domain",value:"accessfacebookfromschool.com"},{format:"domain",value:"acebooik.com"},{format:"domain",value:"acebook.com"},{format:"domain",value:"advancediddetection.com"},{format:"domain",value:"askfacebook.net"},{format:"domain",value:"askfacebook.org"},{format:"domain",value:"atdmt2.com"},{format:"domain",value:"atlasdmt.com"},{format:"domain",value:"atlasonepoint.com"},{format:"domain",value:"buyingfacebooklikes.com"},{format:"domain",value:"careersatfb.com"},{format:"domain",value:"celebgramme.com"},{format:"domain",value:"china-facebook.com"},{format:"domain",value:"click-url.com"},{format:"domain",value:"como-hackearfacebook.com"},{format:"domain",value:"crowdtangle.com"},{format:"domain",value:"dacebook.com"},{format:"domain",value:"dlfacebook.com"},{format:"domain",value:"dotfacebook.com"},{format:"domain",value:"dotfacebook.net"},{format:"domain",value:"expresswifi.com"},{format:"domain",value:"faacebok.com"},{format:"domain",value:"faacebook.com"},{format:"domain",value:"faasbook.com"},{format:"domain",value:"facbebook.com"},{format:"domain",value:"facbeok.com"},{format:"domain",value:"facboo.com"},{format:"domain",value:"facbook.com"},{format:"domain",value:"facbool.com"},{format:"domain",value:"facboox.com"},{format:"domain",value:"faccebook.com"},{format:"domain",value:"faccebookk.com"},{format:"domain",value:"facdbook.com"},{format:"domain",value:"facdebook.com"},{format:"domain",value:"face-book.com"},{format:"domain",value:"faceabook.com"},{format:"domain",value:"facebboc.com"},{format:"domain",value:"facebbook.com"},{format:"domain",value:"facebboook.com"},{format:"domain",value:"facebcook.com"},{format:"domain",value:"facebdok.com"},{format:"domain",value:"facebgook.com"},{format:"domain",value:"facebhook.com"},{format:"domain",value:"facebkkk.com"},{format:"domain",value:"facebo-ok.com"},{format:"domain",value:"faceboak.com"},{format:"domain",value:"facebock.com"},{format:"domain",value:"facebocke.com"},{format:"domain",value:"facebof.com"},{format:"domain",value:"faceboik.com"},{format:"domain",value:"facebok.com"},{format:"domain",value:"facebokbook.com"},{format:"domain",value:"facebokc.com"},{format:"domain",value:"facebokk.com"},{format:"domain",value:"facebokok.com"},{format:"domain",value:"faceboks.com"},{format:"domain",value:"facebol.com"},{format:"domain",value:"facebolk.com"},{format:"domain",value:"facebomok.com"},{format:"domain",value:"faceboo.com"},{format:"domain",value:"facebooa.com"},{format:"domain",value:"faceboob.com"},{format:"domain",value:"faceboobok.com"},{format:"domain",value:"facebooc.com"},{format:"domain",value:"faceboock.com"},{format:"domain",value:"facebood.com"},{format:"domain",value:"facebooe.com"},{format:"domain",value:"faceboof.com"},{format:"domain",value:"facebooi.com"},{format:"domain",value:"facebooik.com"},{format:"domain",value:"facebooik.org"},{format:"domain",value:"facebooj.com"},{format:"domain",value:"facebook-corp.com"},{format:"domain",value:"facebook-covid-19.com"},{format:"domain",value:"facebook-ebook.com"},{format:"domain",value:"facebook-forum.com"},{format:"domain",value:"facebook-hardware.com"},{format:"domain",value:"facebook-inc.com"},{format:"domain",value:"facebook-login.com"},{format:"domain",value:"facebook-newsroom.com"},{format:"domain",value:"facebook-newsroom.org"},{format:"domain",value:"facebook-pmdcenter.com"},{format:"domain",value:"facebook-pmdcenter.net"},{format:"domain",value:"facebook-pmdcenter.org"},{format:"domain",value:"facebook-privacy.com"},{format:"domain",value:"facebook-program.com"},{format:"domain",value:"facebook-studio.com"},{format:"domain",value:"facebook-support.org"},{format:"domain",value:"facebook-texas-holdem.com"},{format:"domain",value:"facebook-texas-holdem.net"},{format:"domain",value:"facebook.br"},{format:"domain",value:"facebook.ca"},{format:"domain",value:"facebook.cc"},{format:"domain",value:"facebook.com"},{format:"domain",value:"facebook.design"},{format:"domain",value:"facebook.net"},{format:"domain",value:"facebook.hu"},{format:"domain",value:"facebook.in"},{format:"domain",value:"fecebook.net"},{format:"domain",value:"facebook.nl"},{format:"domain",value:"facebook.org"},{format:"domain",value:"facebook.se"},{format:"domain",value:"facebook.shop"},{format:"domain",value:"facebook.tv"},{format:"domain",value:"facebook.us"},{format:"domain",value:"facebook.wang"},{format:"domain",value:"facebook123.org"},{format:"domain",value:"facebook30.com"},{format:"domain",value:"facebook30.net"},{format:"domain",value:"facebook30.org"},{format:"domain",value:"facebook4business.com"},{format:"domain",value:"facebookads.com"},{format:"domain",value:"facebookadvertisingsecrets.com"},{format:"domain",value:"facebookatschool.com"},{format:"domain",value:"facebookawards.com"},{format:"domain",value:"facebookblueprint.net"},{format:"domain",value:"facebookbrand.com"},{format:"domain",value:"facebookbrand.net"},{format:"domain",value:"facebookcanadianelectionintegrityinitiative.com"},{format:"domain",value:"facebookcareer.com"},{format:"domain",value:"facebookcheats.com"},{format:"domain",value:"facebookck.com"},{format:"domain",value:"facebookclub.com"},{format:"domain",value:"facebookcom.com"},{format:"domain",value:"facebookconsultant.org"},{format:"domain",value:"facebookcoronavirus.com"},{format:"domain",value:"facebookcovers.org"},{format:"domain",value:"facebookcredits.info"},{format:"domain",value:"facebookdating.net"},{format:"domain",value:"facebookdusexe.org"},{format:"domain",value:"facebookemail.com"},{format:"domain",value:"facebookenespanol.com"},{format:"domain",value:"facebookexchange.com"},{format:"domain",value:"facebookexchange.net"},{format:"domain",value:"facebookfacebook.com"},{format:"domain",value:"facebookflow.com"},{format:"domain",value:"facebookgames.com"},{format:"domain",value:"facebookgraphsearch.com"},{format:"domain",value:"facebookgraphsearch.info"},{format:"domain",value:"facebookgroups.com"},{format:"domain",value:"facebookhome.cc"},{format:"domain",value:"facebookhome.com"},{format:"domain",value:"facebookhome.info"},{format:"domain",value:"facebookhub.com"},{format:"domain",value:"facebooki.com"},{format:"domain",value:"facebookinc.com"},{format:"domain",value:"facebookland.com"},{format:"domain",value:"facebooklikeexchange.com"},{format:"domain",value:"facebooklive.com"},{format:"domain",value:"facebooklivestaging.net"},{format:"domain",value:"facebooklivestaging.org"},{format:"domain",value:"facebooklogin.com"},{format:"domain",value:"facebooklogin.info"},{format:"domain",value:"facebookloginhelp.net"},{format:"domain",value:"facebooklogs.com"},{format:"domain",value:"facebookmail.com"},{format:"domain",value:"facebookmail.tv"},{format:"domain",value:"facebookmanager.info"},{format:"domain",value:"facebookmarketing.info"},{format:"domain",value:"facebookmarketingpartner.com"},{format:"domain",value:"facebookmarketingpartners.com"},{format:"domain",value:"facebookmobile.com"},{format:"domain",value:"facebookmsn.com"},{format:"domain",value:"facebooknews.com"},{format:"domain",value:"facebooknfl.com"},{format:"domain",value:"facebooknude.com"},{format:"domain",value:"facebookofsex.com"},{format:"domain",value:"facebookook.com"},{format:"domain",value:"facebookpaper.com"},{format:"domain",value:"facebookpay.com"},{format:"domain",value:"facebookphonenumber.net"},{format:"domain",value:"facebookphoto.com"},{format:"domain",value:"facebookphotos.com"},{format:"domain",value:"facebookpmdcenter.com"},{format:"domain",value:"facebookpoke.net"},{format:"domain",value:"facebookpoke.org"},{format:"domain",value:"facebookpoker.info"},{format:"domain",value:"facebookpokerchips.info"},{format:"domain",value:"facebookporn.net"},{format:"domain",value:"facebookporn.org"},{format:"domain",value:"facebookporno.net"},{format:"domain",value:"facebookportal.com"},{format:"domain",value:"facebooks.com"},{format:"domain",value:"facebooksafety.com"},{format:"domain",value:"facebooksecurity.net"},{format:"domain",value:"facebookshop.com"},{format:"domain",value:"facebooksignup.net"},{format:"domain",value:"facebooksite.net"},{format:"domain",value:"facebookstories.com"},{format:"domain",value:"facebookstudios.net"},{format:"domain",value:"facebookstudios.org"},{format:"domain",value:"facebooksupplier.com"},{format:"domain",value:"facebooksuppliers.com"},{format:"domain",value:"facebookswagemea.com"},{format:"domain",value:"facebookswagstore.com"},{format:"domain",value:"facebooksz.com"},{format:"domain",value:"facebookthreads.net"},{format:"domain",value:"facebooktv.net"},{format:"domain",value:"facebooktv.org"},{format:"domain",value:"facebookvacation.com"},{format:"domain",value:"facebookw.com"},{format:"domain",value:"facebookworld.com"},{format:"domain",value:"facebool.com"},{format:"domain",value:"facebool.info"},{format:"domain",value:"facebooll.com"},{format:"domain",value:"faceboom.com"},{format:"domain",value:"faceboon.com"},{format:"domain",value:"faceboonk.com"},{format:"domain",value:"faceboooik.com"},{format:"domain",value:"faceboook.com"},{format:"domain",value:"faceboop.com"},{format:"domain",value:"faceboot.com"},{format:"domain",value:"faceboox.com"},{format:"domain",value:"facebopk.com"},{format:"domain",value:"facebpook.com"},{format:"domain",value:"facebuk.com"},{format:"domain",value:"facebuok.com"},{format:"domain",value:"facebvook.com"},{format:"domain",value:"facebyook.com"},{format:"domain",value:"facebzook.com"},{format:"domain",value:"facecbgook.com"},{format:"domain",value:"facecbook.com"},{format:"domain",value:"facecbook.org"},{format:"domain",value:"facecook.com"},{format:"domain",value:"facecook.org"},{format:"domain",value:"facedbook.com"},{format:"domain",value:"faceebok.com"},{format:"domain",value:"faceebook.com"},{format:"domain",value:"faceebot.com"},{format:"domain",value:"facegbok.com"},{format:"domain",value:"facegbook.com"},{format:"domain",value:"faceobk.com"},{format:"domain",value:"faceobok.com"},{format:"domain",value:"faceobook.com"},{format:"domain",value:"faceook.com"},{format:"domain",value:"facerbooik.com"},{format:"domain",value:"facerbook.com"},{format:"domain",value:"facesbooc.com"},{format:"domain",value:"facesounds.com"},{format:"domain",value:"facetook.com"},{format:"domain",value:"facevbook.com"},{format:"domain",value:"facewbook.co"},{format:"domain",value:"facewook.com"},{format:"domain",value:"facfacebook.com"},{format:"domain",value:"facfebook.com"},{format:"domain",value:"fackebook.com"},{format:"domain",value:"facnbook.com"},{format:"domain",value:"facrbook.com"},{format:"domain",value:"facvebook.com"},{format:"domain",value:"facwebook.com"},{format:"domain",value:"facxebook.com"},{format:"domain",value:"fadebook.com"},{format:"domain",value:"faebok.com"},{format:"domain",value:"faebook.com"},{format:"domain",value:"faebookc.com"},{format:"domain",value:"faeboook.com"},{format:"domain",value:"faecebok.com"},{format:"domain",value:"faesebook.com"},{format:"domain",value:"fafacebook.com"},{format:"domain",value:"faicbooc.com"},{format:"domain",value:"fasebokk.com"},{format:"domain",value:"fasebook.com"},{format:"domain",value:"faseboox.com"},{format:"domain",value:"favebook.com"},{format:"domain",value:"faycbok.com"},{format:"domain",value:"fb.careers"},{format:"domain",value:"fb.com"},{format:"domain",value:"fb.gg"},{format:"domain",value:"fb.me"},{format:"domain",value:"fb.watch"},{format:"domain",value:"fbacebook.com"},{format:"domain",value:"fbbmarket.com"},{format:"domain",value:"fbboostyourbusiness.com"},{format:"domain",value:"fbcdn.com"},{format:"domain",value:"fbcdn.net"},{format:"domain",value:"fbfeedback.com"},{format:"domain",value:"fbhome.com"},{format:"domain",value:"fbidb.io"},{format:"domain",value:"fbinc.com"},{format:"domain",value:"fbinnovation.com"},{format:"domain",value:"fbmarketing.com"},{format:"domain",value:"fbreg.com"},{format:"domain",value:"fbrpms.com"},{format:"domain",value:"fbsbx.com"},{format:"domain",value:"fbsbx.net"},{format:"domain",value:"fbsupport-covid.net"},{format:"domain",value:"fbthirdpartypixel.com"},{format:"domain",value:"fbthirdpartypixel.net"},{format:"domain",value:"fbthirdpartypixel.org"},{format:"domain",value:"fburl.com"},{format:"domain",value:"fbwat.ch"},{format:"domain",value:"fbworkmail.com"},{format:"domain",value:"fcacebook.com"},{format:"domain",value:"fcaebook.com"},{format:"domain",value:"fcebook.com"},{format:"domain",value:"fcebookk.com"},{format:"domain",value:"fcfacebook.com"},{format:"domain",value:"fdacebook.info"},{format:"domain",value:"feacboo.com"},{format:"domain",value:"feacbook.com"},{format:"domain",value:"feacbooke.com"},{format:"domain",value:"feacebook.com"},{format:"domain",value:"fecbbok.com"},{format:"domain",value:"fecbooc.com"},{format:"domain",value:"fecbook.com"},{format:"domain",value:"feceboock.com"},{format:"domain",value:"feceboox.com"},{format:"domain",value:"fececbook.com"},{format:"domain",value:"feook.com"},{format:"domain",value:"ferabook.com"},{format:"domain",value:"fescebook.com"},{format:"domain",value:"fesebook.com"},{format:"domain",value:"ffacebook.com"},{format:"domain",value:"fgacebook.com"},{format:"domain",value:"ficeboock.com"},{format:"domain",value:"fmcebook.com"},{format:"domain",value:"fnacebook.com"},{format:"domain",value:"fosebook.com"},{format:"domain",value:"fpacebook.com"},{format:"domain",value:"fqcebook.com"},{format:"domain",value:"fracebook.com"},{format:"domain",value:"freeb.com"},{format:"domain",value:"freebasics.com"},{format:"domain",value:"freebasics.net"},{format:"domain",value:"freebs.com"},{format:"domain",value:"freefacebook.com"},{format:"domain",value:"freefacebook.net"},{format:"domain",value:"freefacebookads.net"},{format:"domain",value:"freefblikes.com"},{format:"domain",value:"freindfeed.com"},{format:"domain",value:"friendbook.info"},{format:"domain",value:"friendfed.com"},{format:"domain",value:"friendfeed-api.com"},{format:"domain",value:"friendfeed-media.com"},{format:"domain",value:"friendfeed.com"},{format:"domain",value:"friendfeedmedia.com"},{format:"domain",value:"fsacebok.com"},{format:"domain",value:"fscebook.com"},{format:"domain",value:"fundraisingwithfacebook.com"},{format:"domain",value:"funnyfacebook.org"},{format:"domain",value:"futureofbusinesssurvey.org"},{format:"domain",value:"gacebook.com"},{format:"domain",value:"gameroom.com"},{format:"domain",value:"gfacecbook.com"},{format:"domain",value:"groups.com"},{format:"domain",value:"hackerfacebook.com"},{format:"domain",value:"hackfacebook.com"},{format:"domain",value:"hackfacebookid.com"},{format:"domain",value:"hifacebook.info"},{format:"domain",value:"howtohackfacebook-account.com"},{format:"domain",value:"hsfacebook.com"},{format:"domain",value:"httpfacebook.com"},{format:"domain",value:"httpsfacebook.com"},{format:"domain",value:"httpwwwfacebook.com"},{format:"domain",value:"i.org"},{format:"domain",value:"internet.org"},{format:"domain",value:"klik.me"},{format:"domain",value:"liverail.com"},{format:"domain",value:"liverail.tv"},{format:"domain",value:"login-account.net"},{format:"domain",value:"markzuckerberg.com"},{format:"domain",value:"midentsolutions.com"},{format:"domain",value:"mobilefacebook.com"},{format:"domain",value:"moneywithfacebook.com"},{format:"domain",value:"myfbfans.com"},{format:"domain",value:"newsfeed.com"},{format:"domain",value:"nextstop.com"},{format:"domain",value:"online-deals.net"},{format:"domain",value:"opencreate.org"},{format:"domain",value:"reachtheworldonfacebook.com"},{format:"domain",value:"rocksdb.org"},{format:"domain",value:"shopfacebook.com"},{format:"domain",value:"sportsfacebook.com"},{format:"domain",value:"sportstream.com"},{format:"domain",value:"supportfacebook.com"},{format:"domain",value:"terragraph.com"},{format:"domain",value:"thefacebook.com"},{format:"domain",value:"thefacebook.net"},{format:"domain",value:"thefind.com"},{format:"domain",value:"toplayerserver.com"},{format:"domain",value:"viewpointsfromfacebook.com"},{format:"domain",value:"whyfacebook.com"},{format:"domain",value:"worldhack.com"},{format:"domain",value:"www-facebook.com"},{format:"domain",value:"wwwfacebok.com"},{format:"domain",value:"wwwfacebook.com"},{format:"domain",value:"wwwmfacebook.com"},{format:"domain",value:"zuckerberg.com"},{format:"domain",value:"zuckerberg.net"},{format:"domain",value:"facebookwork.com"},{format:"domain",value:"redkix.com"},{format:"domain",value:"workplace.com"},{format:"domain",value:"workplaceusecases.com"},{format:"full domain",value:"fbcdn-a.akamaihd.net"},{format:"domain",value:"accountkit.com"},{format:"domain",value:"atscaleconference.com"},{format:"domain",value:"botorch.org"},{format:"domain",value:"buck.build"},{format:"domain",value:"buckbuild.com"},{format:"domain",value:"componentkit.org"},{format:"domain",value:"draftjs.org"},{format:"domain",value:"f8.com"},{format:"domain",value:"facebookappcenter.info"},{format:"domain",value:"facebookappcenter.net"},{format:"domain",value:"facebookappcenter.org"},{format:"domain",value:"facebookconnect.com"},{format:"domain",value:"facebookdevelopergarage.com"},{format:"domain",value:"faciometrics.com"},{format:"domain",value:"fasttext.cc"},{format:"domain",value:"fbf8.com"},{format:"domain",value:"fbinfer.com"},{format:"domain",value:"fblitho.com"},{format:"domain",value:"fbredex.com"},{format:"domain",value:"fbrell.com"},{format:"domain",value:"flow.dev"},{format:"domain",value:"flow.org"},{format:"domain",value:"flowtype.org"},{format:"domain",value:"frescolib.org"},{format:"domain",value:"hacklang.org"},{format:"domain",value:"hhvm.com"},{format:"domain",value:"makeitopen.com"},{format:"domain",value:"mcrouter.net"},{format:"domain",value:"mcrouter.org"},{format:"domain",value:"messengerdevelopers.com"},{format:"domain",value:"ogp.me"},{format:"domain",value:"opengraphprotocol.com"},{format:"domain",value:"opengraphprotocol.org"},{format:"domain",value:"parse.com"},{format:"domain",value:"pyrobot.org"},{format:"domain",value:"react.com"},{format:"domain",value:"reactjs.com"},{format:"domain",value:"reactjs.org"},{format:"domain",value:"recoiljs.org"},{format:"domain",value:"rocksdb.com"},{format:"domain",value:"rocksdb.net"},{format:"domain",value:"yogalayout.com"},{format:"full domain",value:"developers.facebook.com"},{format:"domain",value:"achat-followers-instagram.com"},{format:"domain",value:"acheter-followers-instagram.com"},{format:"domain",value:"acheterdesfollowersinstagram.com"},{format:"domain",value:"acheterfollowersinstagram.com"},{format:"domain",value:"bookstagram.com"},{format:"domain",value:"carstagram.com"},{format:"domain",value:"cdninstagram.com"},{format:"domain",value:"chickstagram.com"},{format:"domain",value:"ig.me"},{format:"domain",value:"igcdn.com"},{format:"domain",value:"igsonar.com"},{format:"domain",value:"igtv.com"},{format:"domain",value:"imstagram.com"},{format:"domain",value:"imtagram.com"},{format:"domain",value:"instaadder.com"},{format:"domain",value:"instachecker.com"},{format:"domain",value:"instafallow.com"},{format:"domain",value:"instafollower.com"},{format:"domain",value:"instagainer.com"},{format:"domain",value:"instagda.com"},{format:"domain",value:"instagify.com"},{format:"domain",value:"instagmania.com"},{format:"domain",value:"instagor.com"},{format:"domain",value:"instagram-brand.com"},{format:"domain",value:"instagram-engineering.com"},{format:"domain",value:"instagram-help.com"},{format:"domain",value:"instagram-press.com"},{format:"domain",value:"instagram-press.net"},{format:"domain",value:"instagram.com"},{format:"domain",value:"instagramci.com"},{format:"domain",value:"instagramcn.com"},{format:"domain",value:"instagramdi.com"},{format:"domain",value:"instagramhashtags.net"},{format:"domain",value:"instagramhilecim.com"},{format:"domain",value:"instagramhilesi.org"},{format:"domain",value:"instagramium.com"},{format:"domain",value:"instagramizlenme.com"},{format:"domain",value:"instagramkusu.com"},{format:"domain",value:"instagramlogin.com"},{format:"domain",value:"instagramm.com"},{format:"domain",value:"instagramn.com"},{format:"domain",value:"instagrampartners.com"},{format:"domain",value:"instagramphoto.com"},{format:"domain",value:"instagramq.com"},{format:"domain",value:"instagramsepeti.com"},{format:"domain",value:"instagramtakipcisatinal.net"},{format:"domain",value:"instagramtakiphilesi.com"},{format:"domain",value:"instagramtips.com"},{format:"domain",value:"instagramtr.com"},{format:"domain",value:"instagran.com"},{format:"domain",value:"instagranm.com"},{format:"domain",value:"instagrem.com"},{format:"domain",value:"instagrm.com"},{format:"domain",value:"instagtram.com"},{format:"domain",value:"instagy.com"},{format:"domain",value:"instamgram.com"},{format:"domain",value:"instangram.com"},{format:"domain",value:"instanttelegram.com"},{format:"domain",value:"instaplayer.net"},{format:"domain",value:"instastyle.tv"},{format:"domain",value:"instgram.com"},{format:"domain",value:"intagram.com"},{format:"domain",value:"intagrm.com"},{format:"domain",value:"intgram.com"},{format:"domain",value:"kingstagram.com"},{format:"domain",value:"lnstagram-help.com"},{format:"domain",value:"theinstagramhack.com"},{format:"domain",value:"oninstagram.com"},{format:"domain",value:"online-instagram.com"},{format:"domain",value:"onlineinstagram.com"},{format:"domain",value:"web-instagram.net"},{format:"domain",value:"wwwinstagram.com"},{format:"domain",value:"fbmessenger.com"},{format:"domain",value:"m.me"},{format:"domain",value:"messenger.com"},{format:"domain",value:"nbabot.net"},{format:"domain",value:"binoculus.com"},{format:"domain",value:"buyoculus.com"},{format:"domain",value:"ocul.us"},{format:"domain",value:"oculus-china.com"},{format:"domain",value:"oculus.com"},{format:"domain",value:"oculus2014.com"},{format:"domain",value:"oculus3d.com"},{format:"domain",value:"oculusblog.com"},{format:"domain",value:"oculusbrand.com"},{format:"domain",value:"oculuscasino.net"},{format:"domain",value:"oculuscdn.com"},{format:"domain",value:"oculusconnect.com"},{format:"domain",value:"oculusdiving.com"},{format:"domain",value:"oculusforbusiness.com"},{format:"domain",value:"oculusrift.com"},{format:"domain",value:"oculusvr.com"},{format:"domain",value:"powersunitedvr.com"},{format:"domain",value:"wa.me"},{format:"domain",value:"whatsapp-plus.info"},{format:"domain",value:"whatsapp-plus.me"},{format:"domain",value:"whatsapp-plus.net"},{format:"domain",value:"whatsapp.cc"},{format:"domain",value:"whatsapp.com"},{format:"domain",value:"whatsapp.info"},{format:"domain",value:"whatsapp.net"},{format:"domain",value:"whatsapp.org"},{format:"domain",value:"whatsapp.tv"},{format:"domain",value:"whatsappbrand.com"}],[{format:"domain",value:"qq.xn--fiqs8s"},{format:"domain",value:"xn--r70as2s.xn--fiqs8s"},{format:"domain",value:"apcdns.net"},{format:"domain",value:"foxmail.com"},{format:"domain",value:"foxmail.com.cn"},{format:"domain",value:"gtimg.cn"},{format:"domain",value:"gtimg.com"},{format:"domain",value:"gtimg.com.cn"},{format:"domain",value:"idqqimg.com"},{format:"domain",value:"imqq.com"},{format:"domain",value:"myapp.com"},{format:"domain",value:"qlogo.cn"},{format:"domain",value:"qpic.cn"},{format:"domain",value:"qq.cn.com"},{format:"domain",value:"qq.com"},{format:"domain",value:"qq.com.cn"},{format:"domain",value:"qq.wang"},{format:"domain",value:"qqmail.com"},{format:"domain",value:"qzone.com"},{format:"domain",value:"rtx.com.cn"},{format:"domain",value:"servicewechat.com"},{format:"domain",value:"tencent.cn"},{format:"domain",value:"tencent.co.id"},{format:"domain",value:"tencent.com"},{format:"domain",value:"tencent.com.cn"},{format:"domain",value:"tencent.com.hk"},{format:"domain",value:"tencent.net"},{format:"domain",value:"tencent.net.cn"},{format:"domain",value:"tencentmusic.com"},{format:"domain",value:"tenpay.com"},{format:"domain",value:"wechat.com"},{format:"domain",value:"weiyun.com"},{format:"domain",value:"alloyteam.com"},{format:"domain",value:"imweb.io"},{format:"domain",value:"ivweb.io"},{format:"domain",value:"fyeds.com"},{format:"domain",value:"fyeds0.com"},{format:"domain",value:"fyeds1.com"},{format:"domain",value:"fyeds3.com"},{format:"domain",value:"fyeds4.com"},{format:"domain",value:"fyeds5.com"},{format:"domain",value:"fyeds6.com"},{format:"domain",value:"fyeds7.com"},{format:"domain",value:"fyeds8.com"},{format:"domain",value:"fyeds9.com"},{format:"domain",value:"fymall0.com"},{format:"domain",value:"fymall1.com"},{format:"domain",value:"fymall4.com"},{format:"domain",value:"fymall7.com"},{format:"domain",value:"fymall9.com"},{format:"domain",value:"fymallqa0.com"},{format:"domain",value:"fymallqa1.com"},{format:"domain",value:"fymallqa2.com"},{format:"domain",value:"fymallqa3.com"},{format:"domain",value:"fymallqa4.com"},{format:"domain",value:"fymallqa7.com"},{format:"domain",value:"fymallqa9.com"},{format:"domain",value:"acctdns.com"},{format:"domain",value:"acctdns.net"},{format:"domain",value:"aitransfy.com"},{format:"domain",value:"apaas-zone-test.com"},{format:"domain",value:"apigwtencent.com"},{format:"domain",value:"bkapigw.com"},{format:"domain",value:"bkapps.com"},{format:"domain",value:"bkclouds.cc"},{format:"domain",value:"bktencent.com"},{format:"domain",value:"build9s.io"},{format:"domain",value:"byodonline.com"},{format:"domain",value:"cdn-go.cn"},{format:"domain",value:"cdndoctor.com"},{format:"domain",value:"cdngot.com"},{format:"domain",value:"cdntip.com"},{format:"domain",value:"cdntips.com"},{format:"domain",value:"cdntips.net"},{format:"domain",value:"cdnv1.cn"},{format:"domain",value:"cdnv2.cn"},{format:"domain",value:"cdnv3.cn"},{format:"domain",value:"cloud-industry-delivery.site"},{format:"domain",value:"cloudbase.cn"},{format:"domain",value:"cloudbase.net"},{format:"domain",value:"cloudidaas.com"},{format:"domain",value:"cloudsite.vip"},{format:"domain",value:"cncqcloud.com"},{format:"domain",value:"computeinit.com"},{format:"domain",value:"coolsite.vip"},{format:"domain",value:"dnsv1.com"},{format:"domain",value:"dnsv1.com.cn"},{format:"domain",value:"dothework.cn"},{format:"domain",value:"ectencent.cn"},{format:"domain",value:"ectencent.com.cn"},{format:"domain",value:"essurl.com"},{format:"domain",value:"exmailgz.com"},{format:"domain",value:"fsphere.cn"},{format:"domain",value:"gaapqcloud.com"},{format:"domain",value:"gitdrone.cn"},{format:"domain",value:"gmedev.cn"},{format:"domain",value:"govqcloud.com"},{format:"domain",value:"gsadds.com"},{format:"domain",value:"gtm.pub"},{format:"domain",value:"hr-welink.com"},{format:"domain",value:"idcgcloudcs.com"},{format:"domain",value:"iemiq.com"},{format:"domain",value:"igtm.pub"},{format:"domain",value:"intltencentcos.com"},{format:"domain",value:"isd.com"},{format:"domain",value:"ispqcloud.com"},{format:"domain",value:"itopsdk.com"},{format:"domain",value:"jrzk.net.cn"},{format:"domain",value:"my-qcloud.com"},{format:"domain",value:"myelasticsearch.com"},{format:"domain",value:"myqcloud.com"},{format:"domain",value:"onexmail.com"},{format:"domain",value:"openapp.run"},{format:"domain",value:"ovscdns.com"},{format:"domain",value:"ovscdns.net"},{format:"domain",value:"pn1waq.com"},{format:"domain",value:"qcloud-edumall.com"},{format:"domain",value:"qcloud.com"},{format:"domain",value:"qcloud.la"},{format:"domain",value:"qcloudapps.com"},{format:"domain",value:"qcloudcdn.com"},{format:"domain",value:"qcloudcdntest.cn"},{format:"domain",value:"qcloudclass.com"},{format:"domain",value:"qcloudcos.cn"},{format:"domain",value:"qcloudcos.com"},{format:"domain",value:"qcloudcos.com.cn"},{format:"domain",value:"qclouder.com"},{format:"domain",value:"qcloudgme.com"},{format:"domain",value:"qcloudimg.com"},{format:"domain",value:"qcloudipv6.com"},{format:"domain",value:"qcloudmarket.com"},{format:"domain",value:"qcloudns.com"},{format:"domain",value:"qcloudsmartiot.com"},{format:"domain",value:"qcloudtcic.com"},{format:"domain",value:"qcloudtiw.com"},{format:"domain",value:"qcloudtrip.com"},{format:"domain",value:"qcloudtt.com"},{format:"domain",value:"qcloudwaf.com"},{format:"domain",value:"qdwebim.com"},{format:"domain",value:"qeodns.com"},{format:"domain",value:"qeodns.net"},{format:"domain",value:"qqmra.cn"},{format:"domain",value:"qqmra.com"},{format:"domain",value:"qyunapp.com"},{format:"domain",value:"serverlesscloud.cn"},{format:"domain",value:"smtcdns.com"},{format:"domain",value:"smtcdns.net"},{format:"domain",value:"spcdntip.com"},{format:"domain",value:"spcdntipbak.com"},{format:"domain",value:"spcloudhw.com"},{format:"domain",value:"spcloudhw.net"},{format:"domain",value:"srmkp.cn"},{format:"domain",value:"starlakelab.com"},{format:"domain",value:"tamaegis.com"},{format:"domain",value:"tapd.cn"},{format:"domain",value:"tcdlive.com"},{format:"domain",value:"tcdnhw.com"},{format:"domain",value:"tcdnkcbak.com"},{format:"domain",value:"tcdnlive.com"},{format:"domain",value:"tcdnlivebak1.com"},{format:"domain",value:"tcdnlivebak2.com"},{format:"domain",value:"tcdnos.com"},{format:"domain",value:"tcdnos.net"},{format:"domain",value:"tcdntip.com"},{format:"domain",value:"tcdnvod.com"},{format:"domain",value:"tcdnvodbak.com"},{format:"domain",value:"tcloudbase.com"},{format:"domain",value:"tcloudbase.net"},{format:"domain",value:"tcloudbaseapp.com"},{format:"domain",value:"tcloudbi.com"},{format:"domain",value:"tclouddrive.com"},{format:"domain",value:"tcloudedu.com"},{format:"domain",value:"tcloudhw.com"},{format:"domain",value:"tcloudhw.net"},{format:"domain",value:"tcloudscdn.com"},{format:"domain",value:"tcloudscdn.net"},{format:"domain",value:"tdnsx1.com"},{format:"domain",value:"techo.chat"},{format:"domain",value:"tefscloud.com"},{format:"domain",value:"tefscloud.net"},{format:"domain",value:"tenant-zone-dev.com"},{format:"domain",value:"tencdns.net"},{format:"domain",value:"tencent-cloud.com"},{format:"domain",value:"tencent-cloud.net"},{format:"domain",value:"tencentapps.com"},{format:"domain",value:"tencentbyod.com"},{format:"domain",value:"tencentcdb.cn"},{format:"domain",value:"tencentcdb.com"},{format:"domain",value:"tencentcdb.com.cn"},{format:"domain",value:"tencentclb.com"},{format:"domain",value:"tencentcloud-aiot.com"},{format:"domain",value:"tencentcloudapi.com"},{format:"domain",value:"tencentcloudclub.com"},{format:"domain",value:"tencentcloudcr.com"},{format:"domain",value:"tencentcloudmarket.com"},{format:"domain",value:"tencentcloudns.com"},{format:"domain",value:"tencentcloudsec.com"},{format:"domain",value:"tencentcloudses.com"},{format:"domain",value:"tencentcos.cn"},{format:"domain",value:"tencentcos.com"},{format:"domain",value:"tencentcos.com.cn"},{format:"domain",value:"tencentcs.com"},{format:"domain",value:"tencentdayu.com"},{format:"domain",value:"tencentdb.com"},{format:"domain",value:"tencentdevices.com"},{format:"domain",value:"tencentdigitalassistant.com"},{format:"domain",value:"tencentdms.com"},{format:"domain",value:"tencenteiam.com"},{format:"domain",value:"tencentelasticsearch.com"},{format:"domain",value:"tencentid.com"},{format:"domain",value:"tencentidentity.com"},{format:"domain",value:"tencentproxy.com"},{format:"domain",value:"tencentrio.com"},{format:"domain",value:"tencenttid.com"},{format:"domain",value:"tencentwemeet.club"},{format:"domain",value:"tencentwepark.com"},{format:"domain",value:"tencentyun.com"},{format:"domain",value:"tendbcluster.com"},{format:"domain",value:"tendis.net"},{format:"domain",value:"testjrzk.net.cn"},{format:"domain",value:"testmeet.cn"},{format:"domain",value:"testwaf.com"},{format:"domain",value:"tgovcloud.com"},{format:"domain",value:"tidaas.com"},{format:"domain",value:"timatrix.com.cn"},{format:"domain",value:"timmerse.com"},{format:"domain",value:"tlivecdn.com"},{format:"domain",value:"tourismshow.cn"},{format:"domain",value:"tourismuser.cn"},{format:"domain",value:"tsparkling.com"},{format:"domain",value:"tx-exhibition.com"},{format:"domain",value:"txbyod.com"},{format:"domain",value:"txidc.wang"},{format:"domain",value:"txtyxg.com"},{format:"domain",value:"txyscdn.com"},{format:"domain",value:"txyscdn.net"},{format:"domain",value:"uncnn.cn"},{format:"domain",value:"vcloudstc.com"},{format:"domain",value:"vcloudstc.net"},{format:"domain",value:"vcloudvod.com"},{format:"domain",value:"vodtcbk.com"},{format:"domain",value:"vxo7tu.com"},{format:"domain",value:"wework-studio.com"},{format:"domain",value:"xqymuy.com"},{format:"domain",value:"yufuid.com"},{format:"domain",value:"yufuid.com.cn"},{format:"domain",value:"yufuid.net"},{format:"domain",value:"yunjitele.com"},{format:"domain",value:"regexp:.+\\.dnse[0-5]\\.(cn|com)$"},{format:"domain",value:"regexp:.+\\.tdnsv([1-9]|1[0-5])\\.(com|net)$"},{format:"domain",value:"regexp:\\.(.+-)?ap-beijing(-.+)?\\.myqcloud\\.com$"},{format:"domain",value:"regexp:\\.(.+-)?ap-nanjing(-.+)?\\.myqcloud\\.com$"},{format:"domain",value:"regexp:\\.(.+-)?ap-shanghai(-.+)?\\.myqcloud\\.com$"},{format:"domain",value:"regexp:\\.(.+-)?ap-guangzhou(-.+)?\\.myqcloud\\.com$"},{format:"domain",value:"regexp:\\.(.+-)?ap-chengdu(-.+)?\\.myqcloud\\.com$"},{format:"domain",value:"regexp:\\.(.+-)?ap-chongqing(-.+)?\\.myqcloud\\.com$"},{format:"domain",value:"regexp:\\.(.+-)?ap-shenzhen(-.+)?\\.myqcloud\\.com$"},{format:"domain",value:"ap-hongkong.myqcloud.com"},{format:"domain",value:"ap-singapore.myqcloud.com"},{format:"domain",value:"ap-mumbai.myqcloud.com"},{format:"domain",value:"ap-jakarta.myqcloud.com"},{format:"domain",value:"ap-seoul.myqcloud.com"},{format:"domain",value:"ap-bangkok.myqcloud.com"},{format:"domain",value:"ap-tokyo.myqcloud.com"},{format:"domain",value:"na-siliconvalley.myqcloud.com"},{format:"domain",value:"na-ashburn.myqcloud.com"},{format:"domain",value:"na-toronto.myqcloud.com"},{format:"domain",value:"sa-saopaulo.myqcloud.com"},{format:"domain",value:"eu-frankfurt.myqcloud.com"},{format:"domain",value:"eu-moscow.myqcloud.com"},{format:"domain",value:"regexp:\\.(.+-)?ap-beijing(-.+)?\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:\\.(.+-)?ap-nanjing(-.+)?\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:\\.(.+-)?ap-shanghai(-.+)?\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:\\.(.+-)?ap-guangzhou(-.+)?\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:\\.(.+-)?ap-chengdu(-.+)?\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:\\.(.+-)?ap-chongqing(-.+)?\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:\\.(.+-)?ap-shenzhen(-.+)?\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.ap-hongkong\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.ap-singapore\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.ap-mumbai\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.ap-jakarta\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.ap-seoul\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.ap-bangkok\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.ap-tokyo\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.na-siliconvalley\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.na-ashburn\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.na-toronto\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.sa-saopaulo\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.eu-frankfurt\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"regexp:.+\\.eu-moscow\\.tencentcos\\.(cn|com(\\.cn)?)$"},{format:"domain",value:"costj.myqcloud.com"},{format:"domain",value:"cosbj.myqcloud.com"},{format:"domain",value:"cossh.myqcloud.com"},{format:"domain",value:"cosgz.myqcloud.com"},{format:"domain",value:"coscd.myqcloud.com"},{format:"domain",value:"coshk.myqcloud.com"},{format:"domain",value:"cossgp.myqcloud.com"},{format:"domain",value:"cosca.myqcloud.com"},{format:"domain",value:"cosger.myqcloud.com"},{format:"domain",value:"tj.file.myqcloud.com"},{format:"domain",value:"bj.file.myqcloud.com"},{format:"domain",value:"sh.file.myqcloud.com"},{format:"domain",value:"gz.file.myqcloud.com"},{format:"domain",value:"cd.file.myqcloud.com"},{format:"domain",value:"hk.file.myqcloud.com"},{format:"domain",value:"sgp.file.myqcloud.com"},{format:"domain",value:"ca.file.myqcloud.com"},{format:"domain",value:"ger.file.myqcloud.com"},{format:"domain",value:"oracle-tencent.cn"},{format:"domain",value:"oracle-tencent.com"},{format:"domain",value:"oracle-tencent.com.cn"},{format:"domain",value:"oracle-tencent.net"},{format:"domain",value:"oracle-tencent.net.cn"},{format:"domain",value:"m1.run"},{format:"domain",value:"m6.run"},{format:"domain",value:"m9.run"},{format:"domain",value:"ma.run"},{format:"domain",value:"um.run"},{format:"domain",value:"ym.run"},{format:"domain",value:"ad.qq.com"},{format:"domain",value:"ad.qun.qq.com"},{format:"domain",value:"adfilter.imtt.qq.com"},{format:"domain",value:"adping.qq.com"},{format:"domain",value:"adpm.app.qq.com"},{format:"domain",value:"adsclick.qq.com"},{format:"domain",value:"adsfile.qq.com"},{format:"domain",value:"adshmmsg.qq.com"},{format:"domain",value:"adslvfile.qq.com"},{format:"domain",value:"adslvseed.qq.com"},{format:"domain",value:"adsmind.apdcdn.tc.qq.com"},{format:"domain",value:"adsqqclick.qq.com"},{format:"domain",value:"adstestview.qq.com"},{format:"domain",value:"adsview.qq.com"},{format:"domain",value:"adsview2.qq.com"},{format:"domain",value:"adv.app.qq.com"},{format:"domain",value:"adver.qq.com"},{format:"domain",value:"btrace.qq.com"},{format:"domain",value:"e.qq.com"},{format:"domain",value:"log.tbs.qq.com"},{format:"domain",value:"mpush.qq.com"},{format:"domain",value:"mtrace.qq.com"},{format:"domain",value:"push.qq.com"},{format:"domain",value:"pgdt.gtimg.cn"},{format:"domain",value:"ugdtimg.com"},{format:"domain",value:"openmidas.com"},{format:"domain",value:"qq.design"},{format:"domain",value:"qqgamedesign.com"},{format:"domain",value:"tencent.design"},{format:"domain",value:"tjstats.com"},{format:"domain",value:"wegamedeveloper.com"},{format:"domain",value:"weui.io"},{format:"domain",value:"battlecare.net"},{format:"domain",value:"gameitop.com"},{format:"domain",value:"gameloop.com"},{format:"domain",value:"gcloudcs.com"},{format:"domain",value:"gcloudcstest.com"},{format:"domain",value:"gcloudcstestonly.com"},{format:"domain",value:"gclouddolphin.com"},{format:"domain",value:"gcloudsdk.com"},{format:"domain",value:"gdtimg.com"},{format:"domain",value:"goto-game.com"},{format:"domain",value:"goto-game.mobi"},{format:"domain",value:"goto-game.net.cn"},{format:"domain",value:"goto-game.org"},{format:"domain",value:"happyhlddz.com"},{format:"domain",value:"hdyxgame.com"},{format:"domain",value:"hkgcloudcs.com"},{format:"domain",value:"ihappystudio.cn"},{format:"domain",value:"ihappystudio.com"},{format:"domain",value:"in.th"},{format:"domain",value:"ludosuperstar.cn"},{format:"domain",value:"ludoworld.net"},{format:"domain",value:"mahjongai.net"},{format:"domain",value:"mahjongcup.cn"},{format:"domain",value:"mahjongcup.com"},{format:"domain",value:"mahjongcup.net"},{format:"domain",value:"metalrevolution.com"},{format:"domain",value:"midasbuy.com"},{format:"domain",value:"nagcloudcs.com"},{format:"domain",value:"proximabeta.com"},{format:"domain",value:"pubghelper.com"},{format:"domain",value:"pubgno1.cn"},{format:"domain",value:"pubgtool.com"},{format:"domain",value:"qqgameapp.com"},{format:"domain",value:"rmwxgame.com"},{format:"domain",value:"skydweller.cn"},{format:"domain",value:"syxlgame.com"},{format:"domain",value:"tencent-gcloud.com"},{format:"domain",value:"tencentstart.com"},{format:"domain",value:"texasholdemcup.cn"},{format:"domain",value:"texasholdemcup.com"},{format:"domain",value:"texasholdemcup.net"},{format:"domain",value:"timibase.com"},{format:"domain",value:"videoxiaoyouxi.com"},{format:"domain",value:"wcbygame.com"},{format:"domain",value:"yxdmgame.com"},{format:"domain",value:"yximg.cn"},{format:"domain",value:"yxwsgame.com"},{format:"domain",value:"yzyxgame.com"},{format:"domain",value:"zcjbgame.com"},{format:"domain",value:"zhuoyuegame.com"},{format:"domain",value:"xn--owtw8cc49ajfl.cn"},{format:"domain",value:"roblox.cn"},{format:"domain",value:"roblox.qq.com"},{format:"domain",value:"robloxdev.cn"},{format:"domain",value:"nextstudios.com"},{format:"domain",value:"nextworkshop.net"},{format:"domain",value:"mszdld.cn"},{format:"domain",value:"mszdld.com"},{format:"domain",value:"mszdld.net"},{format:"domain",value:"gamebonfire.com"},{format:"domain",value:"gouhuo.qq.com"},{format:"domain",value:"ffbuddy.com"},{format:"domain",value:"gotolink.net"},{format:"domain",value:"gtgres.com"},{format:"domain",value:"realcybertron.com"},{format:"domain",value:"wegame.com"},{format:"domain",value:"wegame.com.cn"},{format:"domain",value:"wegameplus.com"},{format:"domain",value:"werepository.com.cn"},{format:"domain",value:"brawlstars.cn"},{format:"domain",value:"haydaypop.cn"},{format:"domain",value:"labycore.cn"},{format:"domain",value:"sccreator.cn"},{format:"domain",value:"sccreators.cn"},{format:"domain",value:"scescdn.cn"},{format:"domain",value:"scid.cn"},{format:"domain",value:"scsentry.cn"},{format:"domain",value:"supercell.com"},{format:"domain",value:"supercellcommunity.cn"},{format:"domain",value:"supercellsupport.cn"},{format:"domain",value:"codm.com"},{format:"domain",value:"bcfmglobal.com"},{format:"domain",value:"tcfmglobal.com"},{format:"domain",value:"anticheatexpert.com"},{format:"domain",value:"17roco.com"},{format:"domain",value:"roco.qq.com"},{format:"domain",value:"yuewen.com"},{format:"domain",value:"hongxiu.com"},{format:"domain",value:"lrts.me"},{format:"domain",value:"qdmm.com"},{format:"domain",value:"qidian.com"},{format:"domain",value:"readnovel.com"},{format:"domain",value:"tingbook.com"},{format:"domain",value:"webnovel.com"},{format:"domain",value:"xs8.cn"},{format:"domain",value:"xxsy.net"},{format:"domain",value:"comsenz.com"},{format:"domain",value:"discuz.net"},{format:"domain",value:"discuz.org"},{format:"domain",value:"dns.pub"},{format:"domain",value:"dnsapi.cn"},{format:"domain",value:"dnspod.cn"},{format:"domain",value:"dnspod.com"},{format:"domain",value:"dnspod.com.cn"},{format:"domain",value:"dnspod.mobi"},{format:"domain",value:"dnspod.net"},{format:"domain",value:"dnspod.org"},{format:"domain",value:"dnsv2.com"},{format:"domain",value:"dnsv3.com"},{format:"domain",value:"dnsv4.com"},{format:"domain",value:"dnsv5.com"},{format:"domain",value:"doh.pub"}],[{format:"domain",value:"digital-rb.com"},{format:"domain",value:"rb-crisis.com"},{format:"domain",value:"rb.com"},{format:"domain",value:"rb.net"},{format:"domain",value:"rbbusinessshop.com"},{format:"domain",value:"rbdigitalab.com"},{format:"domain",value:"rbdigitallab.com"},{format:"domain",value:"rbeuroinfo.com"},{format:"domain",value:"rbgrads.com"},{format:"domain",value:"rbgraduates.com"},{format:"domain",value:"rbmavericks.com"},{format:"domain",value:"rbnainternational.com"},{format:"domain",value:"rbplc.com"},{format:"domain",value:"rbrandlibrary.com"},{format:"domain",value:"rbspeakup.com"},{format:"domain",value:"reckitt.net"},{format:"domain",value:"reckittbenckiser.cn"},{format:"domain",value:"reckittbenckiser.com"},{format:"domain",value:"reckittbenckiser.com.cn"},{format:"domain",value:"reckittbenckiser.net"},{format:"domain",value:"reckittbenckiser.tv"},{format:"domain",value:"reckittprofessional.com"},{format:"domain",value:"aerogard.com.au"},{format:"domain",value:"aerogard.com.cn"},{format:"domain",value:"aerogardcn.com"},{format:"domain",value:"airwick.at"},{format:"domain",value:"airwick.be"},{format:"domain",value:"airwick.ca"},{format:"domain",value:"airwick.ch"},{format:"domain",value:"airwick.cl"},{format:"domain",value:"airwick.co.in"},{format:"domain",value:"airwick.co.nz"},{format:"domain",value:"airwick.co.uk"},{format:"domain",value:"airwick.co.za"},{format:"domain",value:"airwick.com"},{format:"domain",value:"airwick.com.au"},{format:"domain",value:"airwick.com.br"},{format:"domain",value:"airwick.com.cn"},{format:"domain",value:"airwick.com.mx"},{format:"domain",value:"airwick.com.tr"},{format:"domain",value:"airwick.cz"},{format:"domain",value:"airwick.de"},{format:"domain",value:"airwick.dk"},{format:"domain",value:"airwick.es"},{format:"domain",value:"airwick.fi"},{format:"domain",value:"airwick.fr"},{format:"domain",value:"airwick.hr"},{format:"domain",value:"airwick.hu"},{format:"domain",value:"airwick.ie"},{format:"domain",value:"airwick.it"},{format:"domain",value:"airwick.jp"},{format:"domain",value:"airwick.net"},{format:"domain",value:"airwick.nl"},{format:"domain",value:"airwick.no"},{format:"domain",value:"airwick.pl"},{format:"domain",value:"airwick.pt"},{format:"domain",value:"airwick.ro"},{format:"domain",value:"airwick.ru"},{format:"domain",value:"airwick.se"},{format:"domain",value:"airwick.si"},{format:"domain",value:"airwick.sk"},{format:"domain",value:"airwick.tv"},{format:"domain",value:"airwick.us"},{format:"domain",value:"airwickarabia.com"},{format:"domain",value:"vipoo.es"},{format:"domain",value:"calgon.at"},{format:"domain",value:"calgon.be"},{format:"domain",value:"calgon.ch"},{format:"domain",value:"calgon.cn"},{format:"domain",value:"calgon.co.uk"},{format:"domain",value:"calgon.com"},{format:"domain",value:"calgon.com.tr"},{format:"domain",value:"calgon.de"},{format:"domain",value:"calgon.es"},{format:"domain",value:"calgon.fr"},{format:"domain",value:"calgon.ie"},{format:"domain",value:"calgon.it"},{format:"domain",value:"calgon.nl"},{format:"domain",value:"calgon.pt"},{format:"domain",value:"calgon.ru"},{format:"domain",value:"calgon.tv"},{format:"domain",value:"calgoncarbon-china.com"},{format:"domain",value:"calgoncarbon.com"},{format:"domain",value:"calgonit.com"},{format:"domain",value:"clearasil.cn"},{format:"domain",value:"clearasil.com.cn"},{format:"domain",value:"clearasil.us"},{format:"domain",value:"dettol-prize.com"},{format:"domain",value:"dettol.at"},{format:"domain",value:"dettol.be"},{format:"domain",value:"dettol.ch"},{format:"domain",value:"dettol.cl"},{format:"domain",value:"dettol.co.id"},{format:"domain",value:"dettol.co.in"},{format:"domain",value:"dettol.co.ke"},{format:"domain",value:"dettol.co.nz"},{format:"domain",value:"dettol.co.uk"},{format:"domain",value:"dettol.com"},{format:"domain",value:"dettol.com.au"},{format:"domain",value:"dettol.com.bd"},{format:"domain",value:"dettol.com.br"},{format:"domain",value:"dettol.com.cn"},{format:"domain",value:"dettol.com.eg"},{format:"domain",value:"dettol.com.hk"},{format:"domain",value:"dettol.com.my"},{format:"domain",value:"dettol.com.ng"},{format:"domain",value:"dettol.com.sg"},{format:"domain",value:"dettol.cz"},{format:"domain",value:"dettol.fr"},{format:"domain",value:"dettol.hu"},{format:"domain",value:"dettol.ie"},{format:"domain",value:"dettol.net"},{format:"domain",value:"dettol.nl"},{format:"domain",value:"dettol.pk"},{format:"domain",value:"dettol.pl"},{format:"domain",value:"dettol.pt"},{format:"domain",value:"dettol.ru"},{format:"domain",value:"dettolarabia.com"},{format:"domain",value:"dettolcleannaija.com"},{format:"domain",value:"dettolsitishield.co.in"},{format:"domain",value:"dettolthailand.com"},{format:"domain",value:"espadoldettol.com.ar"},{format:"domain",value:"dewitwithdurex.com"},{format:"domain",value:"dotherex.com"},{format:"domain",value:"durex-shop.ch"},{format:"domain",value:"durex-shopline.com"},{format:"domain",value:"durex-slovenia.si"},{format:"domain",value:"durex.at"},{format:"domain",value:"durex.be"},{format:"domain",value:"durex.cl"},{format:"domain",value:"durex.co.id"},{format:"domain",value:"durex.co.il"},{format:"domain",value:"durex.co.nz"},{format:"domain",value:"durex.co.th"},{format:"domain",value:"durex.co.uk"},{format:"domain",value:"durex.co.za"},{format:"domain",value:"durex.com"},{format:"domain",value:"durex.com.au"},{format:"domain",value:"durex.com.bd"},{format:"domain",value:"durex.com.cn"},{format:"domain",value:"durex.com.co"},{format:"domain",value:"durex.com.hr"},{format:"domain",value:"durex.com.my"},{format:"domain",value:"durex.com.ng"},{format:"domain",value:"durex.com.pe"},{format:"domain",value:"durex.com.ph"},{format:"domain",value:"durex.com.pk"},{format:"domain",value:"durex.com.sg"},{format:"domain",value:"durex.com.tr"},{format:"domain",value:"durex.cz"},{format:"domain",value:"durex.de"},{format:"domain",value:"durex.dk"},{format:"domain",value:"durex.ee"},{format:"domain",value:"durex.es"},{format:"domain",value:"durex.fi"},{format:"domain",value:"durex.fr"},{format:"domain",value:"durex.hu"},{format:"domain",value:"durex.ie"},{format:"domain",value:"durex.it"},{format:"domain",value:"durex.jp"},{format:"domain",value:"durex.lv"},{format:"domain",value:"durex.mx"},{format:"domain",value:"durex.nl"},{format:"domain",value:"durex.no"},{format:"domain",value:"durex.pl"},{format:"domain",value:"durex.pt"},{format:"domain",value:"durex.ro"},{format:"domain",value:"durex.ru"},{format:"domain",value:"durex.se"},{format:"domain",value:"durex.us"},{format:"domain",value:"durexcam.com"},{format:"domain",value:"durexcanada.com"},{format:"domain",value:"durexchina.com"},{format:"domain",value:"durexchina.com.cn"},{format:"domain",value:"durexindia.com"},{format:"domain",value:"durexloveclub.com"},{format:"domain",value:"durexukraine.com"},{format:"domain",value:"durexusa.com"},{format:"domain",value:"lovesexdurex.cn"},{format:"domain",value:"lovesexdurex.com"},{format:"domain",value:"playbydurex.com"},{format:"domain",value:"shopdurex.com"},{format:"domain",value:"trydurex.net"},{format:"domain",value:"trydurex.tv"},{format:"domain",value:"bebepremium3.com.bo"},{format:"domain",value:"enfa.co.id"},{format:"domain",value:"enfa.com.vn"},{format:"domain",value:"enfaaplus.com"},{format:"domain",value:"enfababy.com"},{format:"domain",value:"enfabebe.com"},{format:"domain",value:"enfabebe.com.br"},{format:"domain",value:"enfabebe.com.co"},{format:"domain",value:"enfabebe.com.do"},{format:"domain",value:"enfabebe.com.ec"},{format:"domain",value:"enfabebe.com.mx"},{format:"domain",value:"enfabebe.com.pe"},{format:"domain",value:"enfabebe.com.ve"},{format:"domain",value:"enfabebe3.com.ar"},{format:"domain",value:"enfagrow.co.in"},{format:"domain",value:"enfagrow.com.bn"},{format:"domain",value:"enfagrow.com.my"},{format:"domain",value:"enfagrow.com.ph"},{format:"domain",value:"enfagrow.com.sg"},{format:"domain",value:"enfagrow4.com"},{format:"domain",value:"enfamama.com.ar"},{format:"domain",value:"enfamama.com.ph"},{format:"domain",value:"enfamil.ca"},{format:"domain",value:"enfamil.com"},{format:"domain",value:"enfamil.es"},{format:"domain",value:"enfamil.pl"},{format:"domain",value:"enfamil.pt"},{format:"domain",value:"enfasmart.com"},{format:"domain",value:"enspireformula.com"},{format:"domain",value:"nutramigen.net"},{format:"domain",value:"nutramigen.pl"},{format:"domain",value:"dishwashingexpert.com.cn"},{format:"domain",value:"finish.at"},{format:"domain",value:"finish.bg"},{format:"domain",value:"finish.co.kr"},{format:"domain",value:"finish.co.nz"},{format:"domain",value:"finish.co.uk"},{format:"domain",value:"finish.co.za"},{format:"domain",value:"finish.com.cn"},{format:"domain",value:"finish.com.hr"},{format:"domain",value:"finish.com.tr"},{format:"domain",value:"finish.de"},{format:"domain",value:"finish.es"},{format:"domain",value:"finish.fr"},{format:"domain",value:"finish.gr"},{format:"domain",value:"finish.hu"},{format:"domain",value:"finish.lv"},{format:"domain",value:"finish.pl"},{format:"domain",value:"finish.pt"},{format:"domain",value:"finish.ro"},{format:"domain",value:"finish.si"},{format:"domain",value:"finish.sk"},{format:"domain",value:"finisharabia.com"},{format:"domain",value:"finishbrasil.com.br"},{format:"domain",value:"finishdishwashing.ca"},{format:"domain",value:"finishdishwashing.com"},{format:"domain",value:"finishinfo.be"},{format:"domain",value:"finishinfo.cl"},{format:"domain",value:"finishinfo.com"},{format:"domain",value:"finishinfo.com.ar"},{format:"domain",value:"finishinfo.com.au"},{format:"domain",value:"finishinfo.cz"},{format:"domain",value:"finishinfo.fi"},{format:"domain",value:"finishinfo.it"},{format:"domain",value:"finishinfo.jp"},{format:"domain",value:"finishinfo.nl"},{format:"domain",value:"finishinfo.no"},{format:"domain",value:"finishinfo.ru"},{format:"domain",value:"finishinfo.se"},{format:"domain",value:"finishkilpailu.fi"},{format:"domain",value:"finishwin.be"},{format:"domain",value:"yarininsuyu.com"},{format:"domain",value:"lizol.co.in"},{format:"domain",value:"lysol.ca"},{format:"domain",value:"lysol.cl"},{format:"domain",value:"lysol.cn"},{format:"domain",value:"lysol.co.cr"},{format:"domain",value:"lysol.com"},{format:"domain",value:"lysol.com.cn"},{format:"domain",value:"lysol.com.mx"},{format:"domain",value:"lysol.net"},{format:"domain",value:"enfinitas.com.cn"},{format:"domain",value:"meadjohnson.com"},{format:"domain",value:"meadjohnson.com.cn"},{format:"domain",value:"meadjohnson.com.hk"},{format:"domain",value:"meadjohnson.com.tw"},{format:"domain",value:"meadjohnson.net"},{format:"domain",value:"mortein.cn"},{format:"domain",value:"mortein.co.in"},{format:"domain",value:"mortein.co.nz"},{format:"domain",value:"mortein.co.za"},{format:"domain",value:"mortein.com"},{format:"domain",value:"mortein.com.au"},{format:"domain",value:"mortein.com.br"},{format:"domain",value:"mortein.com.ng"},{format:"domain",value:"mortein.com.pk"},{format:"domain",value:"morteincam.com"},{format:"domain",value:"pifpafarabia.com"},{format:"domain",value:"keepmovingwithmovefree.com"},{format:"domain",value:"move-free.net"},{format:"domain",value:"movefree.cn"},{format:"domain",value:"movefrees.com"},{format:"domain",value:"movefreeoffers.com"},{format:"domain",value:"movefreerewards.com"},{format:"domain",value:"schiffvitamins.com"},{format:"domain",value:"mucinex.ca"},{format:"domain",value:"mucinex.cn"},{format:"domain",value:"mucinex.co.nz"},{format:"domain",value:"mucinex.com"},{format:"domain",value:"mucinex.com.cn"},{format:"domain",value:"mucinex.net"},{format:"domain",value:"mucinex.tv"},{format:"domain",value:"mucinexprofessional.com"},{format:"domain",value:"nurofen.at"},{format:"domain",value:"nurofen.bg"},{format:"domain",value:"nurofen.cn"},{format:"domain",value:"nurofen.co.il"},{format:"domain",value:"nurofen.co.nz"},{format:"domain",value:"nurofen.co.uk"},{format:"domain",value:"nurofen.co.za"},{format:"domain",value:"nurofen.com"},{format:"domain",value:"nurofen.com.au"},{format:"domain",value:"nurofen.com.cn"},{format:"domain",value:"nurofen.com.sg"},{format:"domain",value:"nurofen.cz"},{format:"domain",value:"nurofen.de"},{format:"domain",value:"nurofen.es"},{format:"domain",value:"nurofen.fr"},{format:"domain",value:"nurofen.hr"},{format:"domain",value:"nurofen.hu"},{format:"domain",value:"nurofen.ie"},{format:"domain",value:"nurofen.it"},{format:"domain",value:"nurofen.net"},{format:"domain",value:"nurofen.no"},{format:"domain",value:"nurofen.pl"},{format:"domain",value:"nurofen.pt"},{format:"domain",value:"nurofen.ro"},{format:"domain",value:"nurofen.sk"},{format:"domain",value:"nurofen.ru"},{format:"domain",value:"nurofengel.com"},{format:"full domain",value:"nurofensk-prod-env.eu-west-1.elasticbeanstalk.com"},{format:"domain",value:"cepacol.ca"},{format:"domain",value:"cepacol.com"},{format:"domain",value:"dobendan.de"},{format:"domain",value:"graneodin.com.mx"},{format:"domain",value:"repsils.no"},{format:"domain",value:"strepsils.at"},{format:"domain",value:"strepsils.ch"},{format:"domain",value:"strepsils.cn"},{format:"domain",value:"strepsils.co.kr"},{format:"domain",value:"strepsils.co.nz"},{format:"domain",value:"strepsils.co.za"},{format:"domain",value:"strepsils.com.ar"},{format:"domain",value:"strepsils.com.br"},{format:"domain",value:"strepsils.com.cn"},{format:"domain",value:"strepsils.com.co"},{format:"domain",value:"strepsils.com.au"},{format:"domain",value:"strepsils.com.hk"},{format:"domain",value:"strepsils.com.ph"},{format:"domain",value:"strepsils.com.tw"},{format:"domain",value:"strepsils.es"},{format:"domain",value:"strepsils.fi"},{format:"domain",value:"strepsils.fr"},{format:"domain",value:"strepsils.hr"},{format:"domain",value:"strepsils.hu"},{format:"domain",value:"strepsils.ie"},{format:"domain",value:"strepsils.net"},{format:"domain",value:"strepsils.pl"},{format:"domain",value:"strepsils.pt"},{format:"domain",value:"strepsils.ro"},{format:"domain",value:"strepsils.ru"},{format:"domain",value:"strepsils.si"},{format:"domain",value:"strepsils.us"},{format:"domain",value:"strepsilsarabia.com"},{format:"domain",value:"o2action.co.kr"},{format:"domain",value:"powerofresolve.ca"},{format:"domain",value:"powerofresolve.com"},{format:"domain",value:"spraynwash.com"},{format:"domain",value:"vanish.at"},{format:"domain",value:"vanish.be"},{format:"domain",value:"vanish.ch"},{format:"domain",value:"vanish.cl"},{format:"domain",value:"vanish.cn"},{format:"domain",value:"vanish.co.id"},{format:"domain",value:"vanish.co.il"},{format:"domain",value:"vanish.co.in"},{format:"domain",value:"vanish.co.nz"},{format:"domain",value:"vanish.co.uk"},{format:"domain",value:"vanish.co.za"},{format:"domain",value:"vanish.com.ar"},{format:"domain",value:"vanish.com.br"},{format:"domain",value:"vanish.com.co"},{format:"domain",value:"vanish.com.hr"},{format:"domain",value:"vanish.com.mx"},{format:"domain",value:"vanish.com.my"},{format:"domain",value:"vanish.com.pe"},{format:"domain",value:"vanish.com.sg"},{format:"domain",value:"vanish.com.tr"},{format:"domain",value:"vanish.de"},{format:"domain",value:"vanish.dk"},{format:"domain",value:"vanish.es"},{format:"domain",value:"vanish.fi"},{format:"domain",value:"vanish.fr"},{format:"domain",value:"vanish.hu"},{format:"domain",value:"vanish.ie"},{format:"domain",value:"vanish.it"},{format:"domain",value:"vanish.nl"},{format:"domain",value:"vanish.no"},{format:"domain",value:"vanish.pl"},{format:"domain",value:"vanish.pt"},{format:"domain",value:"vanish.ro"},{format:"domain",value:"vanish.ru"},{format:"domain",value:"vanish.se"},{format:"domain",value:"vanish.si"},{format:"domain",value:"vanish.sk"},{format:"domain",value:"vanisharabia.com"},{format:"domain",value:"vanishbancaseulook.com.br"},{format:"domain",value:"vanishcentroamerica.com"},{format:"domain",value:"vanishinfo.cz"},{format:"domain",value:"vanishstains.com"},{format:"domain",value:"vanishstains.com.au"},{format:"domain",value:"veet.at"},{format:"domain",value:"veet.be"},{format:"domain",value:"veet.ca"},{format:"domain",value:"veet.ch"},{format:"domain",value:"veet.cl"},{format:"domain",value:"veet.cn"},{format:"domain",value:"veet.co.id"},{format:"domain",value:"veet.co.in"},{format:"domain",value:"veet.co.kr"},{format:"domain",value:"veet.co.nz"},{format:"domain",value:"veet.co.uk"},{format:"domain",value:"veet.co.za"},{format:"domain",value:"veet.com"},{format:"domain",value:"veet.com.ar"},{format:"domain",value:"veet.com.au"},{format:"domain",value:"veet.com.bd"},{format:"domain",value:"veet.com.br"},{format:"domain",value:"veet.com.cn"},{format:"domain",value:"veet.com.co"},{format:"domain",value:"veet.com.hk"},{format:"domain",value:"veet.com.mx"},{format:"domain",value:"veet.com.my"},{format:"domain",value:"veet.com.ph"},{format:"domain",value:"veet.com.pk"},{format:"domain",value:"veet.com.sg"},{format:"domain",value:"veet.com.tr"},{format:"domain",value:"veet.de"},{format:"domain",value:"veet.dk"},{format:"domain",value:"veet.es"},{format:"domain",value:"veet.fi"},{format:"domain",value:"veet.fr"},{format:"domain",value:"veet.hu"},{format:"domain",value:"veet.jp"},{format:"domain",value:"veet.nl"},{format:"domain",value:"veet.no"},{format:"domain",value:"veet.pt"},{format:"domain",value:"veet.ro"},{format:"domain",value:"veet.ru"},{format:"domain",value:"veet.se"},{format:"domain",value:"veet.tv"},{format:"domain",value:"veet.us"},{format:"domain",value:"veetarabia.com"},{format:"domain",value:"veetbangladesh.com"},{format:"domain",value:"veetcentroamerica.com"},{format:"domain",value:"veetclub.it"},{format:"domain",value:"woolite.ca"},{format:"domain",value:"woolite.cn"},{format:"domain",value:"woolite.com"},{format:"domain",value:"woolite.com.cn"},{format:"domain",value:"woolite.pl"},{format:"domain",value:"woolite.us"},{format:"domain",value:"woolitecarpet.com"}],[{format:"domain",value:"21centuryaccess.com"},{format:"domain",value:"4ebaytraders.com"},{format:"domain",value:"adcommerce.cn"},{format:"domain",value:"adcommerce.tv"},{format:"domain",value:"appforebay.cn"},{format:"domain",value:"appsonebay.net"},{format:"domain",value:"asebay.com"},{format:"domain",value:"baazee.com"},{format:"domain",value:"bidbay.com"},{format:"domain",value:"bidorbuyindia.com"},{format:"domain",value:"billpoint.com"},{format:"domain",value:"billpoint.info"},{format:"domain",value:"billpoint.tv"},{format:"domain",value:"billpoint.us"},{format:"domain",value:"billpointnewzealand.com"},{format:"domain",value:"blogebay.com"},{format:"domain",value:"bookclubcorner.com"},{format:"domain",value:"builtfromebay.com"},{format:"domain",value:"buyitnow.com"},{format:"domain",value:"buyitnow.net"},{format:"domain",value:"buyitnow.org"},{format:"domain",value:"buyitnow.tv"},{format:"domain",value:"buyitnowshop.net"},{format:"domain",value:"cafr.ca"},{format:"domain",value:"carebay.com"},{format:"domain",value:"cargigileads.com"},{format:"domain",value:"cebay.com"},{format:"domain",value:"collective99.com"},{format:"domain",value:"commerceos.com"},{format:"domain",value:"connectcommerce.cn"},{format:"domain",value:"connectcommerce.com.cn"},{format:"domain",value:"connectcommerce.hk"},{format:"domain",value:"connectcommerce.info"},{format:"domain",value:"connectcommerce.tv"},{format:"domain",value:"connectedcommerce.cn"},{format:"domain",value:"connectedcommerce.com"},{format:"domain",value:"connectedcommerce.tv"},{format:"domain",value:"crececonebay.com"},{format:"domain",value:"creditcardsbay.com"},{format:"domain",value:"cyber-bay.cn"},{format:"domain",value:"cyber-bay.com.cn"},{format:"domain",value:"cyber-bay.info"},{format:"domain",value:"cyber-bay.org"},{format:"domain",value:"dba.dk"},{format:"domain",value:"dealbay.com"},{format:"domain",value:"dealtime.com"},{format:"domain",value:"didce.com"},{format:"domain",value:"douya.org"},{format:"domain",value:"dreamtoplay.com"},{format:"domain",value:"e-bay.com"},{format:"domain",value:"e-bay.it"},{format:"domain",value:"e-bay.net"},{format:"domain",value:"eachpay.com"},{format:"domain",value:"eachpay.net"},{format:"domain",value:"ebahy.com"},{format:"domain",value:"ebay-authenticate.net"},{format:"domain",value:"ebay-confirm.com"},{format:"domain",value:"ebay-course.com"},{format:"domain",value:"ebay-cz.com"},{format:"domain",value:"ebay-delivery.com"},{format:"domain",value:"ebay-discoveries.com"},{format:"domain",value:"ebay-fashion.com"},{format:"domain",value:"ebay-inc.com"},{format:"domain",value:"ebay-inc.net"},{format:"domain",value:"ebay-inc.org"},{format:"domain",value:"ebay-online.com"},{format:"domain",value:"ebay-sales.com"},{format:"domain",value:"ebay-stories.com"},{format:"domain",value:"ebay-us.com"},{format:"domain",value:"ebay-vacation.com"},{format:"domain",value:"ebay.at"},{format:"domain",value:"ebay.be"},{format:"domain",value:"ebay.ca"},{format:"domain",value:"ebay.ch"},{format:"domain",value:"ebay.cn"},{format:"domain",value:"ebay.co.nz"},{format:"domain",value:"ebay.co.uk"},{format:"domain",value:"ebay.co.ve"},{format:"domain",value:"ebay.co.za"},{format:"domain",value:"ebay.com"},{format:"domain",value:"ebay.com.ar"},{format:"domain",value:"ebay.com.au"},{format:"domain",value:"ebay.com.cn"},{format:"domain",value:"ebay.com.ec"},{format:"domain",value:"ebay.com.hk"},{format:"domain",value:"ebay.com.mt"},{format:"domain",value:"ebay.com.my"},{format:"domain",value:"ebay.com.ph"},{format:"domain",value:"ebay.com.sg"},{format:"domain",value:"ebay.de"},{format:"domain",value:"ebay.es"},{format:"domain",value:"ebay.fr"},{format:"domain",value:"ebay.ie"},{format:"domain",value:"ebay.in"},{format:"domain",value:"ebay.it"},{format:"domain",value:"ebay.jp"},{format:"domain",value:"ebay.lt"},{format:"domain",value:"ebay.mn"},{format:"domain",value:"ebay.net.cn"},{format:"domain",value:"ebay.nl"},{format:"domain",value:"ebay.org"},{format:"domain",value:"ebay.org.cn"},{format:"domain",value:"ebay.ph"},{format:"domain",value:"ebay.pk"},{format:"domain",value:"ebay.pl"},{format:"domain",value:"ebay.sg"},{format:"domain",value:"ebay.us"},{format:"domain",value:"ebay.vn"},{format:"domain",value:"ebay.yn.cn"},{format:"domain",value:"ebay.zj.cn"},{format:"domain",value:"ebay25.com"},{format:"domain",value:"ebay68.com"},{format:"domain",value:"ebaya.com"},{format:"domain",value:"ebayads.com"},{format:"domain",value:"ebayads.net"},{format:"domain",value:"ebayadvertising.cn"},{format:"domain",value:"ebayadvertising.com"},{format:"domain",value:"ebayanunsios.net"},{format:"domain",value:"ebayauction.com"},{format:"domain",value:"ebayaustralia.com"},{format:"domain",value:"ebayauthenticate.com.cn"},{format:"domain",value:"ebaybags.com"},{format:"domain",value:"ebaybank.com"},{format:"domain",value:"ebaybenefits.com"},{format:"domain",value:"ebayboutique.com"},{format:"domain",value:"ebayca.com"},{format:"domain",value:"ebayca.org"},{format:"domain",value:"ebaycafe.com"},{format:"domain",value:"ebaycar.com"},{format:"domain",value:"ebaycareers.com"},{format:"domain",value:"ebaycbt.co.kr"},{format:"domain",value:"ebaycdn.net"},{format:"domain",value:"ebaychina.net"},{format:"domain",value:"ebayclassifiedsgroup.com"},{format:"domain",value:"ebayclassifieds.cn"},{format:"domain",value:"ebayclassifieds.com"},{format:"domain",value:"ebayclassifieds.com.cn"},{format:"domain",value:"ebayclassifieds.info"},{format:"domain",value:"ebayclassifieds.org"},{format:"domain",value:"ebayclassifieds.tv"},{format:"domain",value:"ebayclassifiedsgroup.com"},{format:"domain",value:"ebayclassifiedsgroup.info"},{format:"domain",value:"ebayclassifiedsgroup.org"},{format:"domain",value:"ebayclassifies.com"},{format:"domain",value:"ebayclub.com"},{format:"domain",value:"ebaycoins.com"},{format:"domain",value:"ebaycom.com"},{format:"domain",value:"ebaycommercenetwork.com"},{format:"domain",value:"ebaycourse.com"},{format:"domain",value:"ebayd.com"},{format:"domain",value:"ebayde.com"},{format:"domain",value:"ebaydesc.cn"},{format:"domain",value:"ebaydesc.com.cn"},{format:"domain",value:"ebaydlassifieds.com"},{format:"domain",value:"ebaydns.cn"},{format:"domain",value:"ebaydts.com"},{format:"domain",value:"ebayedu.com"},{format:"domain",value:"ebayeletro.com"},{format:"domain",value:"ebayenterprise.cn"},{format:"domain",value:"ebayenterprise.com"},{format:"domain",value:"ebayenterprise.com.cn"},{format:"domain",value:"ebayenterprise.info"},{format:"domain",value:"ebayenterprise.net"},{format:"domain",value:"ebayenterprise.tv"},{format:"domain",value:"ebayetc.com"},{format:"domain",value:"ebayexpress.sg"},{format:"domain",value:"ebayfashion.com"},{format:"domain",value:"ebayfashion.net"},{format:"domain",value:"ebayforcharity.org"},{format:"domain",value:"ebayforeclosure.org"},{format:"domain",value:"ebayfrance.com"},{format:"domain",value:"ebayglobalshipping.com"},{format:"domain",value:"ebaygroup.com"},{format:"domain",value:"ebayhabit.com"},{format:"domain",value:"ebayheels.com"},{format:"domain",value:"ebayhots.com"},{format:"domain",value:"ebayimg.com"},{format:"domain",value:"ebayinc.com"},{format:"domain",value:"ebayinc.net"},{format:"domain",value:"ebayinc.org"},{format:"domain",value:"ebayincconnectedcommerce.net"},{format:"domain",value:"ebayinkblog.com"},{format:"domain",value:"ebayinternetsalestax.com"},{format:"domain",value:"ebayit.com"},{format:"domain",value:"ebayjewelry.com"},{format:"domain",value:"ebayjob.com"},{format:"domain",value:"ebayla.org"},{format:"domain",value:"ebaylisting.com"},{format:"domain",value:"ebaylocal.net"},{format:"domain",value:"ebaylocationsdevacances.com"},{format:"domain",value:"ebaymag.com"},{format:"domain",value:"ebaymainstreet.com"},{format:"domain",value:"ebaymall.com"},{format:"domain",value:"ebaymarketplace.net"},{format:"domain",value:"ebaymotors.ca"},{format:"domain",value:"ebaymotors.cn"},{format:"domain",value:"ebaymotors.com"},{format:"domain",value:"ebaymotors.com.cn"},{format:"domain",value:"ebaymotors.org"},{format:"domain",value:"ebaymotorsblog.com"},{format:"domain",value:"ebaynow.com"},{format:"domain",value:"ebaynyc.com"},{format:"domain",value:"ebayon.com"},{format:"domain",value:"ebayon.net"},{format:"domain",value:"ebayoncampus.com"},{format:"domain",value:"ebayopen.com"},{format:"domain",value:"ebayopensource.com"},{format:"domain",value:"ebayopensource.net"},{format:"domain",value:"ebaypakistan.net"},{format:"domain",value:"ebaypark.com"},{format:"domain",value:"ebayparts.com"},{format:"domain",value:"ebaypedia.cn"},{format:"domain",value:"ebaypedia.com.cn"},{format:"domain",value:"ebayprivacycenter.com"},{format:"domain",value:"ebayqq.com"},{format:"domain",value:"ebayradio.com"},{format:"domain",value:"ebayrtm.com"},{format:"domain",value:"ebayseller.com"},{format:"domain",value:"ebayshoesstore.com"},{format:"domain",value:"ebayshop.com"},{format:"domain",value:"ebayshop111.com"},{format:"domain",value:"ebayshopping.cn"},{format:"domain",value:"ebayshopping.com.cn"},{format:"domain",value:"ebayshopping.org"},{format:"domain",value:"ebaysocial.com"},{format:"domain",value:"ebaysocial.ru"},{format:"domain",value:"ebaysoho.com"},{format:"domain",value:"ebaysohos.com"},{format:"domain",value:"ebaystatic.cn"},{format:"domain",value:"ebaystatic.com"},{format:"domain",value:"ebaystore.com"},{format:"domain",value:"ebaystore77.com"},{format:"domain",value:"ebaystores.cn"},{format:"domain",value:"ebaystyle.com"},{format:"domain",value:"ebaysweden.com"},{format:"domain",value:"ebayt.com"},{format:"domain",value:"ebaytechblog.com"},{format:"domain",value:"ebaytopratedseller.net"},{format:"domain",value:"ebaytrading.com"},{format:"domain",value:"ebaytradingassistant.com"},{format:"domain",value:"ebaytv.org"},{format:"domain",value:"ebayuae.net"},{format:"domain",value:"ebayvakantiehuizen.com"},{format:"domain",value:"ebayvalet.com"},{format:"domain",value:"ebayvietnam.net"},{format:"domain",value:"ebayworlds.com"},{format:"domain",value:"ebayy.com"},{format:"domain",value:"edisebay.com"},{format:"domain",value:"eebay.com"},{format:"domain",value:"epinions.com"},{format:"domain",value:"eu-consumer-empowerment.com"},{format:"domain",value:"expertmaker.com"},{format:"domain",value:"fairmarket.com"},{format:"domain",value:"fragrancebay.com"},{format:"domain",value:"francemail.com"},{format:"domain",value:"half.com"},{format:"domain",value:"half.com.cn"},{format:"domain",value:"half.tv"},{format:"domain",value:"halfcanada.com"},{format:"domain",value:"halfjapan.com"},{format:"domain",value:"handbagsoutletebay.com"},{format:"domain",value:"iebay.com"},{format:"domain",value:"irribay.com"},{format:"domain",value:"itsbetterwhenyouwinit.com"},{format:"domain",value:"liketwice.com"},{format:"domain",value:"liveauction.com"},{format:"domain",value:"milofetch.com"},{format:"domain",value:"musicbay.net"},{format:"domain",value:"myconstructionworld.net"},{format:"domain",value:"myebay.com"},{format:"domain",value:"nebay.net"},{format:"domain",value:"paisapay.cc"},{format:"domain",value:"paisapay.info"},{format:"domain",value:"paisapay.tv"},{format:"domain",value:"premobay.com"},{format:"domain",value:"privatemarketplaces.net"},{format:"domain",value:"privatemarketplaces.us"},{format:"domain",value:"prostores.cn"},{format:"domain",value:"prostores.com"},{format:"domain",value:"prostores.com.cn"},{format:"domain",value:"rethink.net"},{format:"domain",value:"shopibay.net"},{format:"domain",value:"shoping.com"},{format:"domain",value:"sourcingforebay.com.cn"},{format:"domain",value:"sourcingforebay.net"},{format:"domain",value:"sourcingforebay.tv"},{format:"domain",value:"speybay.com"},{format:"domain",value:"storesense.com"},{format:"domain",value:"svpply.com"},{format:"domain",value:"telebay.com"},{format:"domain",value:"telesell.com"},{format:"domain",value:"texttobuy.org"},{format:"domain",value:"theebayshop.com"},{format:"domain",value:"theopportunityproject.org"},{format:"domain",value:"towerauction.com"},{format:"domain",value:"vendu.com"},{format:"domain",value:"weareebay.com"},{format:"domain",value:"watch-ebay.org"},{format:"domain",value:"wwwdecide.com"},{format:"domain",value:"wwwebay.com"},{format:"domain",value:"wwwebay.net"},{format:"domain",value:"wwwwebay.com"},{format:"domain",value:"xindelu.com"},{format:"domain",value:"xn--3et96bj49ahpq.com"},{format:"domain",value:"xn--4vq475g.com"},{format:"domain",value:"xn--4vq477m.com"},{format:"domain",value:"xn--7hv594h.com"},{format:"domain",value:"xn--7hvy28f.cn"},{format:"domain",value:"xn--hb4aw0g.com"},{format:"domain",value:"xn--q41am8x.com"},{format:"domain",value:"xn--qoq462m.com"},{format:"domain",value:"xn--tkry91n.com"},{format:"domain",value:"xn--ubt498knmf.com"},{format:"domain",value:"xn--xsq421m.com"},{format:"domain",value:"xn--xsq605n.com"},{format:"domain",value:"xn--xsq959n.com"},{format:"domain",value:"xn--yf1at58a.com"},{format:"domain",value:"xxbay.com"},{format:"domain",value:"yibei.org"},{format:"domain",value:"gittigidiyor.net"},{format:"domain",value:"gittigidiyorsikayet.com"},{format:"domain",value:"gumtree.sg"},{format:"domain",value:"jijiji.ca"},{format:"domain",value:"kiji.ca"},{format:"domain",value:"kijii.ca"},{format:"domain",value:"kijij.ca"},{format:"domain",value:"kijiji.ca"},{format:"domain",value:"kijijiauto.ca"},{format:"domain",value:"kijijiautos.ca"},{format:"domain",value:"kijijidns.cn"},{format:"domain",value:"kijijidns.com.cn"},{format:"domain",value:"kijijiforbusiness.ca"},{format:"domain",value:"kijijii.ca"},{format:"domain",value:"kijijiraps.ca"},{format:"domain",value:"kijji.ca"},{format:"domain",value:"kijjiji.ca"},{format:"domain",value:"automobile.fr"},{format:"domain",value:"mobile.de"},{format:"domain",value:"mobileinternational.com"},{format:"domain",value:"mobileinternational.com.cn"},{format:"domain",value:"q10.jp"},{format:"domain",value:"qoo10.jp"},{format:"domain",value:"achievementanalytics.com"},{format:"domain",value:"cdn-terapeak.com"},{format:"domain",value:"listinganalytics.net"},{format:"domain",value:"marketexecutive.net"},{format:"domain",value:"tearapeak.com"},{format:"domain",value:"terapeack.com"},{format:"domain",value:"terapeak.ca"},{format:"domain",value:"terapeak.cn"},{format:"domain",value:"terapeak.com"},{format:"domain",value:"terapeak.com.hk"},{format:"domain",value:"terapeak.hk"},{format:"domain",value:"terapeak.info"},{format:"domain",value:"teraperk.com"},{format:"domain",value:"terrapeak.com"},{format:"domain",value:"thebayuk.com"},{format:"domain",value:"nexcat.com"},{format:"domain",value:"nexpart.com"},{format:"domain",value:"nexpart.tv"},{format:"domain",value:"renchead.com"},{format:"domain",value:"whisolutions.com"},{format:"domain",value:"wrenchead.com"},{format:"full domain",value:"ebay-25-assets.s3-us-west-1.amazonaws.com"}],[{format:"domain",value:"alibaba"},{format:"domain",value:"alipay"},{format:"domain",value:"taobao"},{format:"domain",value:"tmall"},{format:"domain",value:"25pp.com"},{format:"domain",value:"56che.com"},{format:"domain",value:"95095.com"},{format:"domain",value:"9game.cn"},{format:"domain",value:"aliapp.org"},{format:"domain",value:"alibaba-inc.com"},{format:"domain",value:"alibaba.com"},{format:"domain",value:"alibabacapital.com"},{format:"domain",value:"alibabacorp.com"},{format:"domain",value:"alibabadoctor.com"},{format:"domain",value:"alibabafuturehotel.com"},{format:"domain",value:"alibabagroup.com"},{format:"domain",value:"alibabaplanet.com"},{format:"domain",value:"alibabaued.com"},{format:"domain",value:"alibabausercontent.com"},{format:"domain",value:"alifanyi.com"},{format:"domain",value:"alihealth.com.cn"},{format:"domain",value:"alihealth.hk"},{format:"domain",value:"aliimg.com"},{format:"domain",value:"alikmd.com"},{format:"domain",value:"alimama.com"},{format:"domain",value:"alimebot.com"},{format:"domain",value:"alimei.com"},{format:"domain",value:"alios.cn"},{format:"domain",value:"alipay.cn"},{format:"domain",value:"alipay.com"},{format:"domain",value:"alipay.com.cn"},{format:"domain",value:"alipaydns.com"},{format:"domain",value:"alipayobjects.com"},{format:"domain",value:"aliplus.com"},{format:"domain",value:"aliresearch.com"},{format:"domain",value:"alisoft.com"},{format:"domain",value:"alisports.com"},{format:"domain",value:"alitianji.com"},{format:"domain",value:"aliunicorn.com"},{format:"domain",value:"aliway.com"},{format:"domain",value:"aliwork.com"},{format:"domain",value:"alixiaomi.com"},{format:"domain",value:"alizhaopin.com"},{format:"domain",value:"alyms.cn"},{format:"domain",value:"asczwa.com"},{format:"domain",value:"asczxcefsv.com"},{format:"domain",value:"asmlink.cn"},{format:"domain",value:"atatech.org"},{format:"domain",value:"b2byao.com"},{format:"domain",value:"bazai.com"},{format:"domain",value:"bcvbw.com"},{format:"domain",value:"cheng.xin"},{format:"domain",value:"cloudeagle.cn"},{format:"domain",value:"damai.cn"},{format:"domain",value:"dayu.com"},{format:"domain",value:"dfkhgj.com"},{format:"domain",value:"doctoryou.ai"},{format:"domain",value:"doctoryou.cn"},{format:"domain",value:"dongting.com"},{format:"domain",value:"dratio.com"},{format:"domain",value:"emas-poc.com"},{format:"domain",value:"gongyi.xin"},{format:"domain",value:"ialicdn.com"},{format:"domain",value:"iconfont.cn"},{format:"domain",value:"ics.design"},{format:"domain",value:"jhgtgb.com"},{format:"domain",value:"kanbox.com"},{format:"domain",value:"lazada.com"},{format:"domain",value:"liangxinyao.com"},{format:"domain",value:"m-now.cn"},{format:"domain",value:"maitix.com"},{format:"domain",value:"mdeer.com"},{format:"domain",value:"mei.com"},{format:"domain",value:"miaostreet.com"},{format:"domain",value:"mshare.cc"},{format:"domain",value:"nic.xin"},{format:"domain",value:"philanthropy.xin"},{format:"domain",value:"phpwind.com"},{format:"domain",value:"phpwind.net"},{format:"domain",value:"qingtingtrip.com"},{format:"domain",value:"rexpos.cn"},{format:"domain",value:"saee.org.cn"},{format:"domain",value:"shenjing.com"},{format:"domain",value:"shuqi.com"},{format:"domain",value:"shuqireader.com"},{format:"domain",value:"sparenode.com"},{format:"domain",value:"supet.com"},{format:"domain",value:"ttpod.com"},{format:"domain",value:"wandoujia.com"},{format:"domain",value:"xin.xin"},{format:"domain",value:"xinlingshou.cn"},{format:"domain",value:"yowhale.com"},{format:"domain",value:"yunos-inc.com"},{format:"domain",value:"yunos.com"},{format:"domain",value:"yushanfang.com"},{format:"domain",value:"zuodao.com"},{format:"domain",value:"aliexpress.com"},{format:"domain",value:"aliexpress.ru"},{format:"domain",value:"alipayplus.com"},{format:"domain",value:"alipay.hk"},{format:"domain",value:"alipaymo.com"},{format:"domain",value:"alicloudccp.com"},{format:"domain",value:"aliyundrive.com"},{format:"domain",value:"cainiao.com"},{format:"domain",value:"cainiao.com.cn"},{format:"domain",value:"cainiao-inc.com"},{format:"domain",value:"freshhema.com"},{format:"domain",value:"hemamax.com"},{format:"domain",value:"hemaos.com"},{format:"domain",value:"hemashare.cn"},{format:"domain",value:"shyhhema.com"},{format:"domain",value:"antfortune.com"},{format:"domain",value:"fund123.cn"},{format:"domain",value:"antfin.com"},{format:"domain",value:"antgroup.com"},{format:"domain",value:"antgroup-inc.cn"},{format:"domain",value:"sm.cn"},{format:"domain",value:"1688.com"},{format:"domain",value:"etao.com"},{format:"domain",value:"juhuasuan.com"},{format:"domain",value:"lingshoujia.com"},{format:"domain",value:"mashort.cn"},{format:"domain",value:"pailitao.com"},{format:"domain",value:"taobao.com"},{format:"domain",value:"taobao.org"},{format:"domain",value:"taobaocdn.com"},{format:"domain",value:"taobizhong.com"},{format:"domain",value:"taopiaopiao.com"},{format:"domain",value:"tb.cn"},{format:"domain",value:"tbcache.com"},{format:"domain",value:"tburl.in"},{format:"domain",value:"tmall.com"},{format:"domain",value:"tmall.ru"},{format:"domain",value:"tmalltv.com"},{format:"domain",value:"tmjl.ai"},{format:"domain",value:"quark.cn"},{format:"domain",value:"alitrip.com"},{format:"domain",value:"feizhu.cn"},{format:"domain",value:"feizhu.com"},{format:"domain",value:"fliggy.com"},{format:"domain",value:"fliggy.hk"},{format:"domain",value:"iuynfg.com"},{format:"domain",value:"amap.com"},{format:"domain",value:"amapauto.com"},{format:"domain",value:"autonavi.com"},{format:"domain",value:"gaode.com"},{format:"domain",value:"xiami.com"},{format:"domain",value:"xiami.fm"},{format:"domain",value:"xiami.net"},{format:"domain",value:"koubei.com"},{format:"domain",value:"zhisheng.com"},{format:"domain",value:"npmmirror.com"},{format:"domain",value:"a.alimama.cn"},{format:"domain",value:"acjs.aliyun.com"},{format:"domain",value:"adash.m.taobao.com"},{format:"domain",value:"adashbc.m.taobao.com"},{format:"domain",value:"adashbc.ut.taobao.com"},{format:"domain",value:"adash-c.ut.taobao.com"},{format:"domain",value:"adashx.m.taobao.com"},{format:"domain",value:"adashx4ae.ut.taobao.com"},{format:"domain",value:"adashx4yt.m.taobao.com"},{format:"domain",value:"adashxgc.ut.taobao.com"},{format:"domain",value:"adsh.m.taobao.com"},{format:"domain",value:"afp.adchina.com"},{format:"domain",value:"afp.alicdn.com"},{format:"domain",value:"agoodm.m.taobao.com"},{format:"domain",value:"agoodm.wapa.taobao.com"},{format:"domain",value:"alipaylog.com"},{format:"domain",value:"amdc.alipay.com"},{format:"domain",value:"amdc.m.taobao.com"},{format:"domain",value:"api.wapa.taobao.com"},{format:"domain",value:"api.waptest.taobao.com"},{format:"domain",value:"apoll.m.taobao.com"},{format:"domain",value:"appdownload.alicdn.com"},{format:"domain",value:"atanx.alicdn.com"},{format:"domain",value:"atanx2.alicdn.com"},{format:"domain",value:"cdn0.mobmore.com"},{format:"domain",value:"click.aliyun.com"},{format:"domain",value:"click.mz.simba.taobao.com"},{format:"domain",value:"cm.ipinyou.com"},{format:"domain",value:"cm.mlt01.com"},{format:"domain",value:"dsp.simba.taobao.com"},{format:"domain",value:"err.taobao.com"},{format:"domain",value:"ex.mobmore.com"},{format:"domain",value:"ex.puata.info"},{format:"domain",value:"fav.simba.taobao.com"},{format:"domain",value:"feedback.whalecloud.com"},{format:"domain",value:"ff.win.taobao.com"},{format:"domain",value:"fm.p0y.cn"},{format:"domain",value:"g.click.taobao.com"},{format:"domain",value:"g.tbcdn.cn"},{format:"domain",value:"gma.alicdn.com"},{format:"domain",value:"gtms01.alicdn.com"},{format:"domain",value:"gtms02.alicdn.com"},{format:"domain",value:"gtms03.alicdn.com"},{format:"domain",value:"gtms04.alicdn.com"},{format:"domain",value:"hydra.alibaba.com"},{format:"domain",value:"hz.pre.tbusergw.taobao.net"},{format:"domain",value:"hz.tbusergw.taobao.net"},{format:"domain",value:"i.ipinyou.com"},{format:"domain",value:"init.phpwind.com"},{format:"domain",value:"intl.wapa.taobao.com"},{format:"domain",value:"intl.waptest.taobao.com"},{format:"domain",value:"jxlog.istreamsche.com"},{format:"domain",value:"log.umtrack.com"},{format:"domain",value:"m.intl.taobao.com"},{format:"domain",value:"m.simba.taobao.com"},{format:"domain",value:"match.p4p.1688.com"},{format:"domain",value:"material.istreamsche.com"},{format:"domain",value:"mlt01.com"},{format:"domain",value:"nbsdk-baichuan.alicdn.com"},{format:"domain",value:"nbsdk-baichuan.taobao.com"},{format:"domain",value:"osfota.cdn.aliyun.com"},{format:"domain",value:"osupdate.aliyun.com"},{format:"domain",value:"osupdateservice.yunos.com"},{format:"domain",value:"pindao.huoban.taobao.com"},{format:"domain",value:"push.wandoujia.com"},{format:"domain",value:"re.m.taobao.com"},{format:"domain",value:"re.taobao.com"},{format:"domain",value:"redirect.simba.taobao.com"},{format:"domain",value:"rj.m.taobao.co"},{format:"domain",value:"rj.m.taobao.com"},{format:"domain",value:"sdkinit.taobao.com"},{format:"domain",value:"show.re.taobao.com"},{format:"domain",value:"simaba.taobao.com"},{format:"domain",value:"simba.m.taobao.com"},{format:"domain",value:"srd.simba.taobao.com"},{format:"domain",value:"stats.ipinyou.com"},{format:"domain",value:"strip.taobaocdn.com"},{format:"domain",value:"tanxlog.istreamsche.com"},{format:"domain",value:"tejia.taobao.com"},{format:"domain",value:"temai.taobao.com"},{format:"domain",value:"tns.simba.taobao.com"},{format:"domain",value:"tongji.linezing.com"},{format:"domain",value:"tvupgrade.yunos.com"},{format:"domain",value:"tyh.taobao.com"},{format:"domain",value:"userimg.qunar.com"},{format:"domain",value:"w.m.taobao.com"},{format:"domain",value:"yiliao.hupan.com"},{format:"domain",value:"alibabacloud.co.in"},{format:"domain",value:"alibabacloud.com"},{format:"domain",value:"alibabacloud.com.au"},{format:"domain",value:"alibabacloud.com.hk"},{format:"domain",value:"alibabacloud.com.my"},{format:"domain",value:"alibabacloud.com.sg"},{format:"domain",value:"alibabacloud.com.tw"},{format:"domain",value:"alicloud.com"},{format:"domain",value:"alibabadns.com"},{format:"domain",value:"alicdn.com"},{format:"domain",value:"alicloudapi.com"},{format:"domain",value:"alidayu.com"},{format:"domain",value:"alidns.com"},{format:"domain",value:"alikunlun.com"},{format:"domain",value:"aliyun-inc.com"},{format:"domain",value:"aliyun-iot-share.com"},{format:"domain",value:"aliyun.com"},{format:"domain",value:"aliyuncdn.com"},{format:"domain",value:"cdngslb.com"},{format:"domain",value:"hichina.com"},{format:"domain",value:"ica-alliance.org"},{format:"domain",value:"kunlunaq.com"},{format:"domain",value:"kunlunar.com"},{format:"domain",value:"kunlunca.com"},{format:"domain",value:"kunluncan.com"},{format:"domain",value:"kunlunea.com"},{format:"domain",value:"kunlungem.com"},{format:"domain",value:"kunlungr.com"},{format:"domain",value:"kunlunhuf.com"},{format:"domain",value:"kunlunle.com"},{format:"domain",value:"kunlunli.com"},{format:"domain",value:"kunlunno.com"},{format:"domain",value:"kunlunpi.com"},{format:"domain",value:"kunlunra.com"},{format:"domain",value:"kunlunsa.com"},{format:"domain",value:"kunlunsc.com"},{format:"domain",value:"kunlunsl.com"},{format:"domain",value:"kunlunso.com"},{format:"domain",value:"kunlunta.com"},{format:"domain",value:"kunlunvi.com"},{format:"domain",value:"kunlunwe.com"},{format:"domain",value:"mxhichina.com"},{format:"domain",value:"myalicdn.com"},{format:"domain",value:"oss-ap-northeast-1.aliyuncs.com"},{format:"domain",value:"oss-ap-northeast-2.aliyuncs.com"},{format:"domain",value:"oss-ap-south-1.aliyuncs.com"},{format:"domain",value:"oss-ap-southeast-1.aliyuncs.com"},{format:"domain",value:"oss-ap-southeast-2.aliyuncs.com"},{format:"domain",value:"oss-ap-southeast-3.aliyuncs.com"},{format:"domain",value:"oss-ap-southeast-5.aliyuncs.com"},{format:"domain",value:"oss-ap-southeast-6.aliyuncs.com"},{format:"domain",value:"oss-ap-southeast-7.aliyuncs.com"},{format:"domain",value:"oss-cn-beijing.aliyuncs.com"},{format:"domain",value:"oss-cn-chengdu.aliyuncs.com"},{format:"domain",value:"oss-cn-guangzhou.aliyuncs.com"},{format:"domain",value:"oss-cn-hangzhou.aliyuncs.com"},{format:"domain",value:"oss-cn-heyuan.aliyuncs.com"},{format:"domain",value:"oss-cn-hongkong.aliyuncs.com"},{format:"domain",value:"oss-cn-huhehaote.aliyuncs.com"},{format:"domain",value:"oss-cn-nanjing.aliyuncs.com"},{format:"domain",value:"oss-cn-qingdao.aliyuncs.com"},{format:"domain",value:"oss-cn-shanghai.aliyuncs.com"},{format:"domain",value:"oss-cn-shenzhen.aliyuncs.com"},{format:"domain",value:"oss-cn-wulanchabu.aliyuncs.com"},{format:"domain",value:"oss-cn-zhangjiakou.aliyuncs.com"},{format:"domain",value:"oss-eu-central-1.aliyuncs.com"},{format:"domain",value:"oss-eu-west-1.aliyuncs.com"},{format:"domain",value:"oss-me-east-1.aliyuncs.com"},{format:"domain",value:"oss-us-east-1.aliyuncs.com"},{format:"domain",value:"oss-us-west-1.aliyuncs.com"},{format:"domain",value:"ddurl.to"},{format:"domain",value:"dingding.xin"},{format:"domain",value:"dingtalk.cn"},{format:"domain",value:"dingtalk.com"},{format:"domain",value:"dingtalk.net"},{format:"domain",value:"dingtalkapps.com"},{format:"domain",value:"laiwang.com"},{format:"domain",value:"lwurl.to"},{format:"domain",value:"ele.me"},{format:"domain",value:"elemecdn.com"},{format:"domain",value:"eleme.cn"},{format:"domain",value:"teambition.com"},{format:"domain",value:"teambition.net"},{format:"domain",value:"teambitionapis.com"},{format:"domain",value:"uc.cn"},{format:"domain",value:"ucweb.com"},{format:"domain",value:"mobmore.com"},{format:"domain",value:"umeng.com"},{format:"domain",value:"umengcloud.com"},{format:"domain",value:"umsns.com"},{format:"domain",value:"umtrack.com"},{format:"domain",value:"uyunad.com"},{format:"domain",value:"whalecloud.com"},{format:"domain",value:"alog.umeng.com"},{format:"domain",value:"alog.umengcloud.com"},{format:"domain",value:"w.cnzz.com"},{format:"domain",value:"z.gds.cnzz.com"},{format:"domain",value:"ad.intl.xiaomi.com"},{format:"domain",value:"ad.mi.com"},{format:"domain",value:"ad.xiaomi.com"},{format:"domain",value:"ad1.xiaomi.com"},{format:"domain",value:"admob.xiaomi.com"},{format:"domain",value:"adv.sec.intl.miui.com"},{format:"domain",value:"adv.sec.miui.com"},{format:"domain",value:"misc.in.duokanbox.com"},{format:"domain",value:"mistat.xiaomi.com"},{format:"domain",value:"tjqonline.cn"},{format:"domain",value:"tracking.miui.com"},{format:"domain",value:"ad.hpplay.cn"},{format:"domain",value:"adeng.hpplay.cn"},{format:"domain",value:"kuyun.com"}],[{format:"domain",value:"intel"},{format:"domain",value:"intel.ac"},{format:"domain",value:"intel.ae"},{format:"domain",value:"intel.af"},{format:"domain",value:"intel.ag"},{format:"domain",value:"intel.ai"},{format:"domain",value:"intel.ar"},{format:"domain",value:"intel.at"},{format:"domain",value:"intel.az"},{format:"domain",value:"intel.ba"},{format:"domain",value:"intel.bg"},{format:"domain",value:"intel.bh"},{format:"domain",value:"intel.bi"},{format:"domain",value:"intel.bo"},{format:"domain",value:"intel.bs"},{format:"domain",value:"intel.by"},{format:"domain",value:"intel.ca"},{format:"domain",value:"intel.cc"},{format:"domain",value:"intel.cg"},{format:"domain",value:"intel.ch"},{format:"domain",value:"intel.cl"},{format:"domain",value:"intel.cm"},{format:"domain",value:"intel.cn"},{format:"domain",value:"intel.co.ae"},{format:"domain",value:"intel.co.cr"},{format:"domain",value:"intel.co.id"},{format:"domain",value:"intel.co.il"},{format:"domain",value:"intel.co.jp"},{format:"domain",value:"intel.co.kr"},{format:"domain",value:"intel.co.uk"},{format:"domain",value:"intel.co.za"},{format:"domain",value:"intel.com"},{format:"domain",value:"intel.com.ar"},{format:"domain",value:"intel.com.au"},{format:"domain",value:"intel.com.bo"},{format:"domain",value:"intel.com.br"},{format:"domain",value:"intel.com.cn"},{format:"domain",value:"intel.com.co"},{format:"domain",value:"intel.com.ec"},{format:"domain",value:"intel.com.hk"},{format:"domain",value:"intel.com.jm"},{format:"domain",value:"intel.com.mx"},{format:"domain",value:"intel.com.my"},{format:"domain",value:"intel.com.pe"},{format:"domain",value:"intel.com.ph"},{format:"domain",value:"intel.com.pr"},{format:"domain",value:"intel.com.py"},{format:"domain",value:"intel.com.tr"},{format:"domain",value:"intel.com.tw"},{format:"domain",value:"intel.com.uy"},{format:"domain",value:"intel.com.ve"},{format:"domain",value:"intel.cr"},{format:"domain",value:"intel.cu"},{format:"domain",value:"intel.cz"},{format:"domain",value:"intel.de"},{format:"domain",value:"intel.dk"},{format:"domain",value:"intel.dz"},{format:"domain",value:"intel.ec"},{format:"domain",value:"intel.ee"},{format:"domain",value:"intel.eg"},{format:"domain",value:"intel.es"},{format:"domain",value:"intel.eu"},{format:"domain",value:"intel.fi"},{format:"domain",value:"intel.fr"},{format:"domain",value:"intel.ga"},{format:"domain",value:"intel.gd"},{format:"domain",value:"intel.ge"},{format:"domain",value:"intel.gl"},{format:"domain",value:"intel.gm"},{format:"domain",value:"intel.gr"},{format:"domain",value:"intel.gs"},{format:"domain",value:"intel.gt"},{format:"domain",value:"intel.gy"},{format:"domain",value:"intel.hk"},{format:"domain",value:"intel.hn"},{format:"domain",value:"intel.ht"},{format:"domain",value:"intel.hu"},{format:"domain",value:"intel.ie"},{format:"domain",value:"intel.in"},{format:"domain",value:"intel.io"},{format:"domain",value:"intel.it"},{format:"domain",value:"intel.je"},{format:"domain",value:"intel.jo"},{format:"domain",value:"intel.jp"},{format:"domain",value:"intel.ke"},{format:"domain",value:"intel.la"},{format:"domain",value:"intel.lc"},{format:"domain",value:"intel.lk"},{format:"domain",value:"intel.lt"},{format:"domain",value:"intel.lu"},{format:"domain",value:"intel.ly"},{format:"domain",value:"intel.ma"},{format:"domain",value:"intel.md"},{format:"domain",value:"intel.me"},{format:"domain",value:"intel.mg"},{format:"domain",value:"intel.mk"},{format:"domain",value:"intel.mn"},{format:"domain",value:"intel.mp"},{format:"domain",value:"intel.mt"},{format:"domain",value:"intel.mu"},{format:"domain",value:"intel.mw"},{format:"domain",value:"intel.mx"},{format:"domain",value:"intel.my"},{format:"domain",value:"intel.ng"},{format:"domain",value:"intel.nl"},{format:"domain",value:"intel.nu"},{format:"domain",value:"intel.nz"},{format:"domain",value:"intel.pa"},{format:"domain",value:"intel.pe"},{format:"domain",value:"intel.ph"},{format:"domain",value:"intel.pl"},{format:"domain",value:"intel.pn"},{format:"domain",value:"intel.re"},{format:"domain",value:"intel.ro"},{format:"domain",value:"intel.ru"},{format:"domain",value:"intel.rw"},{format:"domain",value:"intel.sa"},{format:"domain",value:"intel.sc"},{format:"domain",value:"intel.se"},{format:"domain",value:"intel.sg"},{format:"domain",value:"intel.si"},{format:"domain",value:"intel.sk"},{format:"domain",value:"intel.sn"},{format:"domain",value:"intel.sr"},{format:"domain",value:"intel.st"},{format:"domain",value:"intel.sv"},{format:"domain",value:"intel.sx"},{format:"domain",value:"intel.sy"},{format:"domain",value:"intel.tf"},{format:"domain",value:"intel.tj"},{format:"domain",value:"intel.tl"},{format:"domain",value:"intel.tm"},{format:"domain",value:"intel.tn"},{format:"domain",value:"intel.tt"},{format:"domain",value:"intel.tv"},{format:"domain",value:"intel.tw"},{format:"domain",value:"intel.ua"},{format:"domain",value:"intel.uk"},{format:"domain",value:"intel.us"},{format:"domain",value:"intel.uy"},{format:"domain",value:"intel.uz"},{format:"domain",value:"intel.vg"},{format:"domain",value:"intel.vn"},{format:"domain",value:"intel.vu"},{format:"domain",value:"intel.wf"},{format:"domain",value:"intel.yt"},{format:"domain",value:"altera.com"},{format:"domain",value:"alteraforum.com"},{format:"domain",value:"alteraforums.com"},{format:"domain",value:"alteraforums.net"},{format:"domain",value:"alterauserforum.com"},{format:"domain",value:"alterauserforum.net"},{format:"domain",value:"alterauserforums.com"},{format:"domain",value:"alterauserforums.net"},{format:"domain",value:"buyaltera.com"},{format:"domain",value:"celeron.com"},{format:"domain",value:"celeron.net"},{format:"domain",value:"centrino.com"},{format:"domain",value:"centrino.net"},{format:"domain",value:"chips.com"},{format:"domain",value:"cilk.com"},{format:"domain",value:"cilk.net"},{format:"domain",value:"cloudinsights.com"},{format:"domain",value:"clusterconnection.com"},{format:"domain",value:"coreduo.com"},{format:"domain",value:"coreextreme.com"},{format:"domain",value:"crosswalk-project.com"},{format:"domain",value:"crosswalk-project.net"},{format:"domain",value:"doceapower.com"},{format:"domain",value:"easic.com"},{format:"domain",value:"enpirion.com"},{format:"domain",value:"exascale-tech.com"},{format:"domain",value:"exploreintel.com"},{format:"domain",value:"gordonmoore.com"},{format:"domain",value:"insidefilms.com"},{format:"domain",value:"intc.com"},{format:"domain",value:"intel-research.net"},{format:"domain",value:"intel-university-collaboration.net"},{format:"domain",value:"intelamericasstore.com"},{format:"domain",value:"intelapacstore.com"},{format:"domain",value:"intelatom.net"},{format:"domain",value:"intelcapital.com"},{format:"domain",value:"intelcapital.net"},{format:"domain",value:"intelcloudbuilders.com"},{format:"domain",value:"intelcloudfinder.com"},{format:"domain",value:"intelemeastore.com"},{format:"domain",value:"inteleventexpress.com"},{format:"domain",value:"intelforchange.com"},{format:"domain",value:"intelfreepress.com"},{format:"domain",value:"intelgo.net"},{format:"domain",value:"intelinsight.com"},{format:"domain",value:"inteliotmarketplace.com"},{format:"domain",value:"intell.com"},{format:"domain",value:"intellearningseries.com"},{format:"domain",value:"intellinuxwireless.net"},{format:"domain",value:"intelnervana.com"},{format:"domain",value:"intelnet.Component"},{format:"domain",value:"intelplay.com"},{format:"domain",value:"intelquark.com"},{format:"domain",value:"intelrealsense.cn"},{format:"domain",value:"intelrealsense.com"},{format:"domain",value:"intelrxt.com"},{format:"domain",value:"intelsalestraining.com"},{format:"domain",value:"intelsecurity.com"},{format:"domain",value:"intelserveredge.com"},{format:"domain",value:"intelsoftwarenetwork.com"},{format:"domain",value:"intelstore.com"},{format:"domain",value:"inteltechnologyprovider.com"},{format:"domain",value:"intelvmwarecybersecurity.com"},{format:"domain",value:"itnel.com"},{format:"domain",value:"latencytop.com"},{format:"domain",value:"lookinside.com"},{format:"domain",value:"makebettercode.com"},{format:"domain",value:"makesenseofdata.com"},{format:"domain",value:"movidius.com"},{format:"domain",value:"movidius.net"},{format:"domain",value:"nervanasys.com"},{format:"domain",value:"nevex.com"},{format:"domain",value:"nextgenerationcenter.com"},{format:"domain",value:"niosii.com"},{format:"domain",value:"niosii.net"},{format:"domain",value:"omekinteractive.com"},{format:"domain",value:"omnitek.tv"},{format:"domain",value:"openamt.com"},{format:"domain",value:"opendroneid.org"},{format:"domain",value:"optanedifference.com"},{format:"domain",value:"pc.com"},{format:"domain",value:"pentium.com"},{format:"domain",value:"pentium.net"},{format:"domain",value:"pintool.com"},{format:"domain",value:"poweredbyintel.com"},{format:"domain",value:"reconinstruments.com"},{format:"domain",value:"reconjet.com"},{format:"domain",value:"researchintel.com"},{format:"domain",value:"saffrontech.com"},{format:"domain",value:"sensorynetworks.com"},{format:"domain",value:"siport.com"},{format:"domain",value:"smart-edge.com"},{format:"domain",value:"theintelstore.com"},{format:"domain",value:"thunderbolttechnology.net"},{format:"domain",value:"trustedanalytics.com"},{format:"domain",value:"trustedanalytics.net"},{format:"domain",value:"vokevr.com"},{format:"domain",value:"vpro.com"},{format:"domain",value:"vpro.net"},{format:"domain",value:"xeon.com"},{format:"domain",value:"xn--ztsq84g.cn"},{format:"domain",value:"xscale.com"},{format:"domain",value:"barefootnetworks.com"},{format:"domain",value:"01.org"},{format:"domain",value:"hyperscan.io"},{format:"domain",value:"intellinuxgraphics.com"},{format:"domain",value:"intellinuxgraphics.net"},{format:"domain",value:"oneapi.com"},{format:"domain",value:"openvinotoolkit.org"},{format:"domain",value:"snap-telemetry.io"},{format:"domain",value:"acpica.com"},{format:"domain",value:"clearlinux.org"},{format:"domain",value:"ospray.net"},{format:"domain",value:"ospray.org"}],[{format:"domain",value:"account-paypal.info"},{format:"domain",value:"account-paypal.net"},{format:"domain",value:"account-paypal.org"},{format:"domain",value:"accountpaypal.com"},{format:"domain",value:"accountpaypal.net"},{format:"domain",value:"accountpaypal.org"},{format:"domain",value:"anfutong.cn"},{format:"domain",value:"anfutong.com"},{format:"domain",value:"anfutong.com.cn"},{format:"domain",value:"beibao.cn"},{format:"domain",value:"beibao.com"},{format:"domain",value:"beibao.com.cn"},{format:"domain",value:"bill-safe.com"},{format:"domain",value:"billmelater.com"},{format:"domain",value:"billmelater.info"},{format:"domain",value:"billmelater.net"},{format:"domain",value:"bml.info"},{format:"domain",value:"buyfast-paysmart.net"},{format:"domain",value:"cashify.com"},{format:"domain",value:"devtools-paypal.com"},{format:"domain",value:"experiencebillmelater.com"},{format:"domain",value:"fundpaypal.com"},{format:"domain",value:"gmoney.org"},{format:"domain",value:"i-o-u.info"},{format:"domain",value:"login-paypal.com"},{format:"domain",value:"login-paypal.info"},{format:"domain",value:"mywaytopay.info"},{format:"domain",value:"mywaytopay.net"},{format:"domain",value:"pa9pal.com"},{format:"domain",value:"paaypal.com"},{format:"domain",value:"paily.net"},{format:"domain",value:"paily.org"},{format:"domain",value:"paipal.com"},{format:"domain",value:"pavpal.com"},{format:"domain",value:"paydiant.com"},{format:"domain",value:"paylike.com"},{format:"domain",value:"paypa1.com"},{format:"domain",value:"paypa1.org"},{format:"domain",value:"paypaal.com"},{format:"domain",value:"paypal-activate.com"},{format:"domain",value:"paypal-activate.info"},{format:"domain",value:"paypal-activate.org"},{format:"domain",value:"paypal-apac.com"},{format:"domain",value:"paypal-apps.com"},{format:"domain",value:"paypal-biz.com"},{format:"domain",value:"paypal-brandcentral.com"},{format:"domain",value:"paypal-business.com"},{format:"domain",value:"paypal-business.net"},{format:"domain",value:"paypal-business.org"},{format:"domain",value:"paypal-cardcash.com"},{format:"domain",value:"paypal-cash.com"},{format:"domain",value:"paypal-center.com"},{format:"domain",value:"paypal-center.info"},{format:"domain",value:"paypal-center.net"},{format:"domain",value:"paypal-center.org"},{format:"domain",value:"paypal-communication.com"},{format:"domain",value:"paypal-communications.com"},{format:"domain",value:"paypal-communications.net"},{format:"domain",value:"paypal-community.com"},{format:"domain",value:"paypal-community.net"},{format:"domain",value:"paypal-comunidad.com"},{format:"domain",value:"paypal-corp.com"},{format:"domain",value:"paypal-database.com"},{format:"domain",value:"paypal-database.us"},{format:"domain",value:"paypal-donations.com"},{format:"domain",value:"paypal-dynamic.com"},{format:"domain",value:"paypal-engineering.com"},{format:"domain",value:"paypal-europe.com"},{format:"domain",value:"paypal-excelinvoicing.com"},{format:"domain",value:"paypal-exchanges.com"},{format:"domain",value:"paypal-forward.com"},{format:"domain",value:"paypal-galactic.com"},{format:"domain",value:"paypal-gift.com"},{format:"domain",value:"paypal-gifts.com"},{format:"domain",value:"paypal-gpplus.com"},{format:"domain",value:"paypal-here.com"},{format:"domain",value:"paypal-hrsystem.com"},{format:"domain",value:"paypal-innovationlab.com"},{format:"domain",value:"paypal-integration.com"},{format:"domain",value:"paypal-japan.com"},{format:"domain",value:"paypal-knowledge.com"},{format:"domain",value:"paypal-labs.com"},{format:"domain",value:"paypal-latam.com"},{format:"domain",value:"paypal-learning.com"},{format:"domain",value:"paypal-login.com"},{format:"domain",value:"paypal-login.info"},{format:"domain",value:"paypal-login.org"},{format:"domain",value:"paypal-login.us"},{format:"domain",value:"paypal-luxury.com"},{format:"domain",value:"paypal-mainstreet.net"},{format:"domain",value:"paypal-marketing.com"},{format:"domain",value:"paypal-media.com"},{format:"domain",value:"paypal-merchantloyalty.com"},{format:"domain",value:"paypal-mobilemoney.com"},{format:"domain",value:"paypal-network.org"},{format:"domain",value:"paypal-notice.com"},{format:"domain",value:"paypal-notify.com"},{format:"domain",value:"paypal-online.info"},{format:"domain",value:"paypal-online.net"},{format:"domain",value:"paypal-online.org"},{format:"domain",value:"paypal-optimizer.com"},{format:"domain",value:"paypal-pages.com"},{format:"domain",value:"paypal-photocard.com"},{format:"domain",value:"paypal-plaza.com"},{format:"domain",value:"paypal-portal.com"},{format:"domain",value:"paypal-prepagata.com"},{format:"domain",value:"paypal-prepagata.net"},{format:"domain",value:"paypal-prepaid.com"},{format:"domain",value:"paypal-profile.com"},{format:"domain",value:"paypal-proserv.com"},{format:"domain",value:"paypal-qrshopping.org"},{format:"domain",value:"paypal-recargacelular.com"},{format:"domain",value:"paypal-redeem.com"},{format:"domain",value:"paypal-referral.com"},{format:"domain",value:"paypal-retail.com"},{format:"domain",value:"paypal-scoop.com"},{format:"domain",value:"paypal-search.com"},{format:"domain",value:"paypal-secure.net"},{format:"domain",value:"paypal-secure.org"},{format:"domain",value:"paypal-security.net"},{format:"domain",value:"paypal-security.org"},{format:"domain",value:"paypal-service.org"},{format:"domain",value:"paypal-signin.com"},{format:"domain",value:"paypal-signin.us"},{format:"domain",value:"paypal-special.com"},{format:"domain",value:"paypal-specialoffers.com"},{format:"domain",value:"paypal-sptam.com"},{format:"domain",value:"paypal-support.com"},{format:"domain",value:"paypal-survey.com"},{format:"domain",value:"paypal-survey.org"},{format:"domain",value:"paypal-status.com"},{format:"domain",value:"paypal-team.com"},{format:"domain",value:"paypal-viewpoints.net"},{format:"domain",value:"paypal.ca"},{format:"domain",value:"paypal.com"},{format:"domain",value:"paypal.com.cn"},{format:"domain",value:"paypal.com.hk"},{format:"domain",value:"paypal.com.sg"},{format:"domain",value:"paypal.hk"},{format:"domain",value:"paypal.info"},{format:"domain",value:"paypal.jp"},{format:"domain",value:"paypal.me"},{format:"domain",value:"paypal.net.cn"},{format:"domain",value:"paypal.org.cn"},{format:"domain",value:"paypal.so"},{format:"domain",value:"paypal.us"},{format:"domain",value:"paypalbeacon.com"},{format:"domain",value:"paypalbenefits.com"},{format:"domain",value:"paypalbrasil.com"},{format:"domain",value:"paypalcommunity.cn"},{format:"domain",value:"paypalcommunity.com"},{format:"domain",value:"paypalcommunity.net"},{format:"domain",value:"paypalcommunity.org"},{format:"domain",value:"paypalcorp.com"},{format:"domain",value:"paypalcredit.com"},{format:"domain",value:"paypalcreditcard.com"},{format:"domain",value:"paypalgivingfund.org"},{format:"domain",value:"paypalhere.cn"},{format:"domain",value:"paypalhere.com"},{format:"domain",value:"paypalhere.com.cn"},{format:"domain",value:"paypalhere.info"},{format:"domain",value:"paypalhere.net"},{format:"domain",value:"paypalhere.org"},{format:"domain",value:"paypalhere.tv"},{format:"domain",value:"paypali.net"},{format:"domain",value:"paypalinc.com"},{format:"domain",value:"paypalindia.com"},{format:"domain",value:"paypalinsuranceservices.org"},{format:"domain",value:"paypall.com"},{format:"domain",value:"paypallabs.com"},{format:"domain",value:"paypalme.com"},{format:"domain",value:"paypalnet.net"},{format:"domain",value:"paypalnet.org"},{format:"domain",value:"paypalnetwork.info"},{format:"domain",value:"paypalnetwork.net"},{format:"domain",value:"paypalnetwork.org"},{format:"domain",value:"paypalobjects.com"},{format:"domain",value:"paypalonline.net"},{format:"domain",value:"paypalonline.org"},{format:"domain",value:"paypalprepagata.com"},{format:"domain",value:"paypalprepagata.net"},{format:"domain",value:"paypalservice.com"},{format:"domain",value:"paypalshopping.com"},{format:"domain",value:"paypalshopping.net"},{format:"domain",value:"paypalsurvey.com"},{format:"domain",value:"paypalx.com"},{format:"domain",value:"paypaly.com"},{format:"domain",value:"payppal.com"},{format:"domain",value:"payypal.com"},{format:"domain",value:"pdncommunity.com"},{format:"domain",value:"pp-soc.com"},{format:"domain",value:"ppaypal.com"},{format:"domain",value:"pppds.com"},{format:"domain",value:"pypl.com"},{format:"domain",value:"pypl.info"},{format:"domain",value:"pypl.net"},{format:"domain",value:"pypl.tv"},{format:"domain",value:"secure-paypal.info"},{format:"domain",value:"securepaypal.info"},{format:"domain",value:"sslpaypal.org"},{format:"domain",value:"thepaypalshop.com"},{format:"domain",value:"theshoppingexpresslane.net"},{format:"domain",value:"www-paypal.info"},{format:"domain",value:"www-paypal.us"},{format:"domain",value:"xn--bnq297cix3a.cn"},{format:"domain",value:"braintreegateway.com"},{format:"domain",value:"braintreegateway.tv"},{format:"domain",value:"braintreepayments.com"},{format:"domain",value:"braintreepayments.info"},{format:"domain",value:"braintreepayments.org"},{format:"domain",value:"braintreepayments.tv"},{format:"domain",value:"braintreepaymentsolutions.com"},{format:"domain",value:"braintreeps.com"},{format:"domain",value:"briantreepayments.net"},{format:"domain",value:"briantreepayments.tv"},{format:"domain",value:"card.io"},{format:"domain",value:"getbraintree.com"},{format:"domain",value:"krakenjs.com"},{format:"domain",value:"loanbuilder.com"},{format:"domain",value:"swiftcapital.com"},{format:"domain",value:"simility.com"},{format:"domain",value:"cashify.net"},{format:"domain",value:"swiftbank.info"},{format:"domain",value:"swiftbank.us"},{format:"domain",value:"swiftfinancial.com"},{format:"domain",value:"swiftfinancial.info"},{format:"domain",value:"swiftfinancial.net"},{format:"domain",value:"venmo-touch.com"},{format:"domain",value:"venmo.com"},{format:"domain",value:"venmo.info"},{format:"domain",value:"venmo.net"},{format:"domain",value:"venmo.org"},{format:"domain",value:"cash2.com"},{format:"domain",value:"filipino-music.net"},{format:"domain",value:"s-xoom.com"},{format:"domain",value:"webmoneyinfo.com"},{format:"domain",value:"wiremoneytoirelandwithxoomeasierandcheaper.com"},{format:"domain",value:"wwwxoom.com"},{format:"domain",value:"xoom-experience.com"},{format:"domain",value:"xoom.com"},{format:"domain",value:"xoom.io"},{format:"domain",value:"xoom.net.cn"},{format:"domain",value:"xoom.us"},{format:"domain",value:"xoomcom.com"},{format:"full domain",value:"venmo.s3.amazonaws.com"}],[{format:"domain",value:"fox"},{format:"domain",value:"fox-corporation.com"},{format:"domain",value:"fox-news.com"},{format:"domain",value:"fox.com"},{format:"domain",value:"fox.tv"},{format:"domain",value:"fox10.tv"},{format:"domain",value:"fox10news.com"},{format:"domain",value:"fox10phoenix.com"},{format:"domain",value:"fox11.com"},{format:"domain",value:"fox13memphis.com"},{format:"domain",value:"fox13news.com"},{format:"domain",value:"fox23.com"},{format:"domain",value:"fox23maine.com"},{format:"domain",value:"fox247.com"},{format:"domain",value:"fox247.tv"},{format:"domain",value:"fox26.com"},{format:"domain",value:"fox26houston.com"},{format:"domain",value:"fox28media.com"},{format:"domain",value:"fox29.com"},{format:"domain",value:"fox2detroit.com"},{format:"domain",value:"fox2news.com"},{format:"domain",value:"fox32.com"},{format:"domain",value:"fox32chicago.com"},{format:"domain",value:"fox35orlando.com"},{format:"domain",value:"fox38corpuschristi.com"},{format:"domain",value:"fox42kptm.com"},{format:"domain",value:"fox46.com"},{format:"domain",value:"fox46charlotte.com"},{format:"domain",value:"fox47.com"},{format:"domain",value:"fox49.tv"},{format:"domain",value:"fox4news.com"},{format:"domain",value:"fox51tns.net"},{format:"domain",value:"fox5atlanta.com"},{format:"domain",value:"fox5dc.com"},{format:"domain",value:"fox5ny.com"},{format:"domain",value:"fox5storm.com"},{format:"domain",value:"fox6now.com"},{format:"domain",value:"fox7.com"},{format:"domain",value:"fox7austin.com"},{format:"domain",value:"fox9.com"},{format:"domain",value:"foxacrossamerica.com"},{format:"domain",value:"foxaffiliateportal.com"},{format:"domain",value:"foxandfriends.com"},{format:"domain",value:"foxbet.com"},{format:"domain",value:"foxbusiness.com"},{format:"domain",value:"foxbusiness.tv"},{format:"domain",value:"foxbusinessgo.com"},{format:"domain",value:"foxcanvasroom.com"},{format:"domain",value:"foxcareers.com"},{format:"domain",value:"foxcharlotte.com"},{format:"domain",value:"foxcincy.com"},{format:"domain",value:"foxcincy.jobs"},{format:"domain",value:"foxcincy.net"},{format:"domain",value:"foxcollegesports.com"},{format:"domain",value:"foxcorporation.com"},{format:"domain",value:"foxcreativeuniversity.com"},{format:"domain",value:"foxcredit.com"},{format:"domain",value:"foxcredit.org"},{format:"domain",value:"foxd.tv"},{format:"domain",value:"foxdcg.com"},{format:"domain",value:"foxdeportes.com"},{format:"domain",value:"foxdeportes.net"},{format:"domain",value:"foxdeportes.tv"},{format:"domain",value:"foxdigitalmovies.com"},{format:"domain",value:"foxdoua.com"},{format:"domain",value:"foxentertainment.com"},{format:"domain",value:"foxest.com"},{format:"domain",value:"foxfaq.com"},{format:"domain",value:"foxfdm.com"},{format:"domain",value:"foxfiles.com"},{format:"domain",value:"foxinc.com"},{format:"domain",value:"foxkansas.com"},{format:"domain",value:"foxla.com"},{format:"domain",value:"foxla.tv"},{format:"domain",value:"foxlexington.com"},{format:"domain",value:"foxmediacloud.com"},{format:"domain",value:"foxnation.com"},{format:"domain",value:"foxnebraska.com"},{format:"domain",value:"foxneo.com"},{format:"domain",value:"foxneodigital.com"},{format:"domain",value:"foxnetworks.info"},{format:"domain",value:"foxnetworksinfo.com"},{format:"domain",value:"foxnews.cc"},{format:"domain",value:"foxnews.com"},{format:"domain",value:"foxnews.net"},{format:"domain",value:"foxnews.org"},{format:"domain",value:"foxnews.tv"},{format:"domain",value:"foxnewsaffiliates.com"},{format:"domain",value:"foxnewsaroundtheworld.com"},{format:"domain",value:"foxnewsb2b.com"},{format:"domain",value:"foxnewschannel.com"},{format:"domain",value:"foxnewsgo.net"},{format:"domain",value:"foxnewsgo.org"},{format:"domain",value:"foxnewsgo.tv"},{format:"domain",value:"foxnewshealth.com"},{format:"domain",value:"foxnewslatino.com"},{format:"domain",value:"foxnewsmagazine.com"},{format:"domain",value:"foxnewsnetwork.com"},{format:"domain",value:"foxnewsopinion.com"},{format:"domain",value:"foxnewspodcasts.com"},{format:"domain",value:"foxnewspolitics.com"},{format:"domain",value:"foxnewsradio.com"},{format:"domain",value:"foxnewsrundown.com"},{format:"domain",value:"foxnewssunday.com"},{format:"domain",value:"foxon.com"},{format:"domain",value:"foxphiladelphia.com"},{format:"domain",value:"foxplus.com"},{format:"domain",value:"foxpoker.com"},{format:"domain",value:"foxrad.io"},{format:"domain",value:"foxredeem.com"},{format:"domain",value:"foxrelease.com"},{format:"domain",value:"foxrichmond.com"},{format:"domain",value:"foxrobots.com"},{format:"domain",value:"foxsmallbusinesscenter.com"},{format:"domain",value:"foxsmallbusinesscenter.net"},{format:"domain",value:"foxsmallbusinesscenter.org"},{format:"domain",value:"foxsoccer.net"},{format:"domain",value:"foxsoccer.tv"},{format:"domain",value:"foxsoccermatchpass.com"},{format:"domain",value:"foxsoccerplus.com"},{format:"domain",value:"foxsoccerplus.net"},{format:"domain",value:"foxsoccerplus.tv"},{format:"domain",value:"foxsoccershop.com"},{format:"domain",value:"foxsports-chicago.com"},{format:"domain",value:"foxsports-newyork.com"},{format:"domain",value:"foxsports-world.com"},{format:"domain",value:"foxsports.cl"},{format:"domain",value:"foxsports.co"},{format:"domain",value:"foxsports.co.ve"},{format:"domain",value:"foxsports.com"},{format:"domain",value:"foxsports.com.ar"},{format:"domain",value:"foxsports.com.bo"},{format:"domain",value:"foxsports.com.br"},{format:"domain",value:"foxsports.com.co"},{format:"domain",value:"foxsports.com.ec"},{format:"domain",value:"foxsports.com.gt"},{format:"domain",value:"foxsports.com.mx"},{format:"domain",value:"foxsports.com.pe"},{format:"domain",value:"foxsports.com.py"},{format:"domain",value:"foxsports.com.uy"},{format:"domain",value:"foxsports.com.ve"},{format:"domain",value:"foxsports.gt"},{format:"domain",value:"foxsports.info"},{format:"domain",value:"foxsports.net"},{format:"domain",value:"foxsports.net.br"},{format:"domain",value:"foxsports.pe"},{format:"domain",value:"foxsports.sv"},{format:"domain",value:"foxsports.uy"},{format:"domain",value:"foxsports2.com"},{format:"domain",value:"foxsportsflorida.com"},{format:"domain",value:"foxsportsgo.com"},{format:"domain",value:"foxsportsla.com"},{format:"domain",value:"foxsportsnetmilwaukee.com"},{format:"domain",value:"foxsportsneworleans.com"},{format:"domain",value:"foxsportsracing.com"},{format:"domain",value:"foxsportssupports.com"},{format:"domain",value:"foxsportsuniversity.com"},{format:"domain",value:"foxsportsworld.com"},{format:"domain",value:"foxstudiolot.com"},{format:"domain",value:"foxsuper6.com"},{format:"domain",value:"foxtel.com"},{format:"domain",value:"foxtel.com.au"},{format:"domain",value:"foxtelevisionstations.com"},{format:"domain",value:"foxtv.com"},{format:"domain",value:"foxtvdvd.com"},{format:"domain",value:"foxuv.com"},{format:"domain",value:"foxweatherwatch.com"},{format:"domain",value:"fssta.com"},{format:"domain",value:"fxn.ws"},{format:"domain",value:"fxnetwork.com"},{format:"domain",value:"fxnetworks.com"},{format:"domain",value:"bentobox.tv"},{format:"domain",value:"kicu.tv"},{format:"domain",value:"ktvu.com"},{format:"domain",value:"myfoxsanfran.com"},{format:"domain",value:"afewmomentswith.com"},{format:"domain",value:"anidom.com"},{format:"domain",value:"casoneexchange.com"},{format:"domain",value:"coronavirusnow.com"},{format:"domain",value:"fse.tv"},{format:"domain",value:"geraldoatlarge.com"},{format:"domain",value:"gooddaychicago.com"},{format:"domain",value:"joeswall.com"},{format:"domain",value:"kilmeadeandfriends.com"},{format:"domain",value:"maskedsingerfox.com"},{format:"domain",value:"my13la.com"},{format:"domain",value:"my20dc.com"},{format:"domain",value:"my20houston.com"},{format:"domain",value:"my29tv.com"},{format:"domain",value:"my45.com"},{format:"domain",value:"my9nj.com"},{format:"domain",value:"myfoxatlanta.com"},{format:"domain",value:"myfoxaustin.com"},{format:"domain",value:"myfoxboston.com"},{format:"domain",value:"myfoxcharlotte.com"},{format:"domain",value:"myfoxchicago.com"},{format:"domain",value:"myfoxdc.com"},{format:"domain",value:"myfoxdetroit.com"},{format:"domain",value:"myfoxdfw.com"},{format:"domain",value:"myfoxhouston.com"},{format:"domain",value:"myfoxhurricane.com"},{format:"domain",value:"myfoxla.com"},{format:"domain",value:"myfoxlosangeles.com"},{format:"domain",value:"myfoxlubbock.com"},{format:"domain",value:"myfoxmaine.com"},{format:"domain",value:"myfoxny.com"},{format:"domain",value:"myfoxorlando.com"},{format:"domain",value:"myfoxphilly.com"},{format:"domain",value:"myfoxphoenix.com"},{format:"domain",value:"myfoxtampa.com"},{format:"domain",value:"myfoxtampabay.com"},{format:"domain",value:"myfoxtwincities.com"},{format:"domain",value:"myfoxzone.com"},{format:"domain",value:"myq2.com"},{format:"domain",value:"newsnowfox.com"},{format:"domain",value:"orlandohurricane.com"},{format:"domain",value:"paradisehotelquizfox.com"},{format:"domain",value:"q13.com"},{format:"domain",value:"q13fox.com"},{format:"domain",value:"realamericanstories.com"},{format:"domain",value:"realamericanstories.info"},{format:"domain",value:"realamericanstories.net"},{format:"domain",value:"realamericanstories.org"},{format:"domain",value:"realamericanstories.tv"},{format:"domain",value:"realmilwaukeenow.com"},{format:"domain",value:"rprimelab.com"},{format:"domain",value:"shopspeedtv.com"},{format:"domain",value:"soccermatchpass.com"},{format:"domain",value:"speeddreamride.com"},{format:"domain",value:"speedfantasybid.com"},{format:"domain",value:"speedracegear.com"},{format:"domain",value:"speedxtra.com"},{format:"domain",value:"teenchoice.com"},{format:"domain",value:"testonfox.com"},{format:"domain",value:"theclasshroom.com"},{format:"domain",value:"thefoxnation.com"},{format:"domain",value:"thegeorgiascene.com"},{format:"domain",value:"whatthefox.com"},{format:"domain",value:"whosthehost.com"},{format:"domain",value:"wofl.tv"},{format:"domain",value:"woflthenewsstation.com"},{format:"domain",value:"wogx.com"},{format:"full domain",value:"foxnewsplayer-a.akamaihd.net"}],[{format:"domain",value:"1huizhan.com"},{format:"domain",value:"3.cn"},{format:"domain",value:"300hu.com"},{format:"domain",value:"360buy.cn"},{format:"domain",value:"360buy.com"},{format:"domain",value:"360buy.com.cn"},{format:"domain",value:"360buyimg.com"},{format:"domain",value:"360buyinternational.com"},{format:"domain",value:"360top.com"},{format:"domain",value:"7fresh.com"},{format:"domain",value:"baitiao.com"},{format:"domain",value:"blackdragon.com"},{format:"domain",value:"caiyu.com"},{format:"domain",value:"chicalot.cn"},{format:"domain",value:"chinabank.com.cn"},{format:"domain",value:"cloud-beijing.com"},{format:"domain",value:"cloud-hebi.com"},{format:"domain",value:"cloud-ningbo.com"},{format:"domain",value:"cloud-ordos.com"},{format:"domain",value:"cloud-shenzhen.com"},{format:"domain",value:"cloud-shiyan.com"},{format:"domain",value:"cloud-wuhan.com"},{format:"domain",value:"cloud-xian.com"},{format:"domain",value:"cloud-xm.com"},{format:"domain",value:"cloud-zhaoqing.com"},{format:"domain",value:"cloud-zhongwei.com"},{format:"domain",value:"cloudanqing.com"},{format:"domain",value:"cloudbaoshan.com"},{format:"domain",value:"cloudbeibei.com"},{format:"domain",value:"cloudbinzhou.com"},{format:"domain",value:"cloudchangde.com"},{format:"domain",value:"cloudchangsha.com"},{format:"domain",value:"cloudchangzhou.com"},{format:"domain",value:"cloudchaozhou.com"},{format:"domain",value:"cloudchengde.com"},{format:"domain",value:"cloudchengdu.com"},{format:"domain",value:"cloudchuzhou.com"},{format:"domain",value:"cloudczs.com"},{format:"domain",value:"clouddalian.com"},{format:"domain",value:"clouddatong.com"},{format:"domain",value:"clouddongying.com"},{format:"domain",value:"cloudfoshan.com"},{format:"domain",value:"cloudfuqing.com"},{format:"domain",value:"cloudganzhou.com"},{format:"domain",value:"cloudguangzhou.com"},{format:"domain",value:"cloudhaidong.com"},{format:"domain",value:"cloudhefei.com"},{format:"domain",value:"cloudhengshui.com"},{format:"domain",value:"cloudhuaihua.com"},{format:"domain",value:"cloudhuizhou.com"},{format:"domain",value:"cloudjinan.com"},{format:"domain",value:"cloudjinchang.com"},{format:"domain",value:"cloudjingzhou.com"},{format:"domain",value:"cloudjining.com"},{format:"domain",value:"cloudjiujiang.com"},{format:"domain",value:"cloudkunming.com"},{format:"domain",value:"cloudleshan.com"},{format:"domain",value:"cloudlijiang.com"},{format:"domain",value:"cloudlishui.com"},{format:"domain",value:"cloudluohe.com"},{format:"domain",value:"cloudluoyang.com"},{format:"domain",value:"cloudmeishan.com"},{format:"domain",value:"cloudnanan.com"},{format:"domain",value:"cloudnanjing.com"},{format:"domain",value:"cloudnanning.com"},{format:"domain",value:"cloudnantong.com"},{format:"domain",value:"cloudquanzhou.com"},{format:"domain",value:"cloudsanya.com"},{format:"domain",value:"cloudshanghai.com"},{format:"domain",value:"cloudshaoyang.com"},{format:"domain",value:"cloudshenfuxingqu.com"},{format:"domain",value:"cloudsiping.com"},{format:"domain",value:"cloudsuqian.com"},{format:"domain",value:"cloudtangshan.com"},{format:"domain",value:"cloudtianjin.com"},{format:"domain",value:"cloudtongchuan.com"},{format:"domain",value:"cloudtongliang.com"},{format:"domain",value:"cloudweinan.com"},{format:"domain",value:"cloudxiangtan.com"},{format:"domain",value:"cloudxianyou.com"},{format:"domain",value:"cloudxining.com"},{format:"domain",value:"cloudyanan.com"},{format:"domain",value:"cloudyancheng.com"},{format:"domain",value:"cloudyantai.com"},{format:"domain",value:"cloudyinchuan.com"},{format:"domain",value:"cloudyueyang.com"},{format:"domain",value:"cloudyuncheng.com"},{format:"domain",value:"cloudyuxi.com"},{format:"domain",value:"cloudzhongshan.com"},{format:"domain",value:"cloudzhuhai.com"},{format:"domain",value:"dao123.com"},{format:"domain",value:"duiou.com.cn"},{format:"domain",value:"goselling.com"},{format:"domain",value:"isvjcloud.com"},{format:"domain",value:"isvjd.com"},{format:"domain",value:"jcloud-cache.com"},{format:"domain",value:"jcloud-cache.net"},{format:"domain",value:"jcloud-cdn.com"},{format:"domain",value:"jcloud-live.com"},{format:"domain",value:"jcloud-oss.com"},{format:"domain",value:"jcloud.com"},{format:"domain",value:"jcloudcache.com"},{format:"domain",value:"jcloudcache.net"},{format:"domain",value:"jcloudcs.com"},{format:"domain",value:"jclouddn.com"},{format:"domain",value:"jclouddns.com"},{format:"domain",value:"jclouddns.net"},{format:"domain",value:"jcloudec.com"},{format:"domain",value:"jcloudedge.com"},{format:"domain",value:"jcloudedge.net"},{format:"domain",value:"jcloudgslb.com"},{format:"domain",value:"jcloudgslb.net"},{format:"domain",value:"jcloudimg.com"},{format:"domain",value:"jcloudimg.net"},{format:"domain",value:"jcloudlb.com"},{format:"domain",value:"jcloudlb.net"},{format:"domain",value:"jcloudlive.com"},{format:"domain",value:"jcloudlv.com"},{format:"domain",value:"jcloudoss.com"},{format:"domain",value:"jcloudresolve.com"},{format:"domain",value:"jcloudresolve.net"},{format:"domain",value:"jcloudss.com"},{format:"domain",value:"jcloudstatic.com"},{format:"domain",value:"jcloudstatic.net"},{format:"domain",value:"jcloudvideo.com"},{format:"domain",value:"jcloudvideo.net"},{format:"domain",value:"jclps.com"},{format:"domain",value:"jd-app.com"},{format:"domain",value:"jd-ex.cn"},{format:"domain",value:"jd-ex.com"},{format:"domain",value:"jd-ex.com.cn"},{format:"domain",value:"jd-ex.net"},{format:"domain",value:"jd.cn"},{format:"domain",value:"jd.co.th"},{format:"domain",value:"jd.com"},{format:"domain",value:"jd.com.cn"},{format:"domain",value:"jd.hk"},{format:"domain",value:"jd.id"},{format:"domain",value:"jd.ru"},{format:"domain",value:"jd.shop"},{format:"domain",value:"jdbusiness.com"},{format:"domain",value:"jdcache.com"},{format:"domain",value:"jdcdn.com"},{format:"domain",value:"jdcloud-api.com"},{format:"domain",value:"jdcloud-api.net"},{format:"domain",value:"jdcloud-edu.com"},{format:"domain",value:"jdcloud-elite.com"},{format:"domain",value:"jdcloud-elive.com"},{format:"domain",value:"jdcloud-livebuy.com"},{format:"domain",value:"jdcloud-mail.com"},{format:"domain",value:"jdcloud-openapi.com"},{format:"domain",value:"jdcloud-oss.com"},{format:"domain",value:"jdcloud.com"},{format:"domain",value:"jdcloudcache.com"},{format:"domain",value:"jdcloudcache.net"},{format:"domain",value:"jdcloudcdn.com"},{format:"domain",value:"jdcloudcdn.net"},{format:"domain",value:"jdcloudcs.com"},{format:"domain",value:"jdclouddns.com"},{format:"domain",value:"jdclouddns.net"},{format:"domain",value:"jdcloudedge.com"},{format:"domain",value:"jdcloudedge.net"},{format:"domain",value:"jdcloudlb.com"},{format:"domain",value:"jdcloudlb.net"},{format:"domain",value:"jdcloudlive.com"},{format:"domain",value:"jdcloudlive.net"},{format:"domain",value:"jdcloudresolve.com"},{format:"domain",value:"jdcloudresolve.net"},{format:"domain",value:"jdcloudsite.com"},{format:"domain",value:"jdcloudstatic.com"},{format:"domain",value:"jdcloudstatic.net"},{format:"domain",value:"jdcloudstatus.com"},{format:"domain",value:"jdcloudstatus.net"},{format:"domain",value:"jdcloudvideo.com"},{format:"domain",value:"jdcloudvideo.net"},{format:"domain",value:"jdcloudwaf.com"},{format:"domain",value:"jddapeigou.com"},{format:"domain",value:"jddebug.com"},{format:"domain",value:"jddglobal.com"},{format:"domain",value:"jdemall.com"},{format:"domain",value:"jdfw1.com"},{format:"domain",value:"jdgslb.com"},{format:"domain",value:"jdgslb.net"},{format:"domain",value:"jdjinrong.com"},{format:"domain",value:"jdl.cn"},{format:"domain",value:"jdl.com"},{format:"domain",value:"jdl.com.cn"},{format:"domain",value:"jdlike.cn"},{format:"domain",value:"jdpay.com"},{format:"domain",value:"jdpaydns.com"},{format:"domain",value:"jdwl.com"},{format:"domain",value:"jdx.com"},{format:"domain",value:"jhscm.com"},{format:"domain",value:"jingdong.com"},{format:"domain",value:"jingdongjinrong.com"},{format:"domain",value:"jingpinhui.com"},{format:"domain",value:"jingxi.com"},{format:"domain",value:"jkcsjd.com"},{format:"domain",value:"joybuy.com"},{format:"domain",value:"joybuy.es"},{format:"domain",value:"linglonglife.com"},{format:"domain",value:"logiseasy.com"},{format:"domain",value:"mayshijia.com"},{format:"domain",value:"minitiao.com"},{format:"domain",value:"missjia.net"},{format:"domain",value:"ocwms.com"},{format:"domain",value:"paidaojia.cn"},{format:"domain",value:"paipai.com"},{format:"domain",value:"prestodb.net.cn"},{format:"domain",value:"prestodb-china.com"},{format:"domain",value:"qianxun.com"},{format:"domain",value:"qingzhouip.com"},{format:"domain",value:"sgsic.com"},{format:"domain",value:"toplife.com"},{format:"domain",value:"vg.com"},{format:"domain",value:"wangyin.com"},{format:"domain",value:"wdfok.com"},{format:"domain",value:"wuliujie.cn"},{format:"domain",value:"wuliujie.com"},{format:"domain",value:"xianjiqun.com"},{format:"domain",value:"xjoycity.com"},{format:"domain",value:"yhd.com"},{format:"domain",value:"yihaodian.com"},{format:"domain",value:"yihaodianimg.com"},{format:"domain",value:"yiyaojd.com"},{format:"domain",value:"yizhitou.com"},{format:"domain",value:"ads.union.jd.com"},{format:"domain",value:"c-nfa.jd.com"},{format:"domain",value:"cps.360buy.com"},{format:"domain",value:"jzt.jd.com"},{format:"domain",value:"stat.m.jd.com"},{format:"domain",value:"img-x.jd.com"}],[{format:"domain",value:"volvo"},{format:"domain",value:"dynafleetonline.com"},{format:"domain",value:"escandinavia-arg.com"},{format:"domain",value:"independentoperatorcn.com"},{format:"domain",value:"road-crew.com"},{format:"domain",value:"udfs.com"},{format:"domain",value:"vfsco.at"},{format:"domain",value:"vfsco.be"},{format:"domain",value:"vfsco.bg"},{format:"domain",value:"vfsco.ca"},{format:"domain",value:"vfsco.ch"},{format:"domain",value:"vfsco.cl"},{format:"domain",value:"vfsco.co.uk"},{format:"domain",value:"vfsco.co.za"},{format:"domain",value:"vfsco.com"},{format:"domain",value:"vfsco.com.au"},{format:"domain",value:"vfsco.com.br"},{format:"domain",value:"vfsco.com.cn"},{format:"domain",value:"vfsco.com.tr"},{format:"domain",value:"vfsco.cz"},{format:"domain",value:"vfsco.de"},{format:"domain",value:"vfsco.dk"},{format:"domain",value:"vfsco.ee"},{format:"domain",value:"vfsco.es"},{format:"domain",value:"vfsco.fi"},{format:"domain",value:"vfsco.fr"},{format:"domain",value:"vfsco.hu"},{format:"domain",value:"vfsco.ie"},{format:"domain",value:"vfsco.in"},{format:"domain",value:"vfsco.it"},{format:"domain",value:"vfsco.jp"},{format:"domain",value:"vfsco.kr"},{format:"domain",value:"vfsco.lt"},{format:"domain",value:"vfsco.lv"},{format:"domain",value:"vfsco.mx"},{format:"domain",value:"vfsco.nl"},{format:"domain",value:"vfsco.no"},{format:"domain",value:"vfsco.pe"},{format:"domain",value:"vfsco.pl"},{format:"domain",value:"vfsco.ro"},{format:"domain",value:"vfsco.ru"},{format:"domain",value:"vfsco.se"},{format:"domain",value:"vfsco.sk"},{format:"domain",value:"vfsco.us"},{format:"domain",value:"vgcareers.net"},{format:"domain",value:"volvo-truck.nl"},{format:"domain",value:"volvo.ca"},{format:"domain",value:"volvo.cn"},{format:"domain",value:"volvo.com"},{format:"domain",value:"volvo.com.cn"},{format:"domain",value:"volvo.se"},{format:"domain",value:"volvobrandshop.com"},{format:"domain",value:"volvobuses.at"},{format:"domain",value:"volvobuses.be"},{format:"domain",value:"volvobuses.ca"},{format:"domain",value:"volvobuses.ch"},{format:"domain",value:"volvobuses.co"},{format:"domain",value:"volvobuses.co.nz"},{format:"domain",value:"volvobuses.co.uk"},{format:"domain",value:"volvobuses.co.za"},{format:"domain",value:"volvobuses.com"},{format:"domain",value:"volvobuses.com.ar"},{format:"domain",value:"volvobuses.com.au"},{format:"domain",value:"volvobuses.com.br"},{format:"domain",value:"volvobuses.com.kw"},{format:"domain",value:"volvobuses.com.pt"},{format:"domain",value:"volvobuses.com.tw"},{format:"domain",value:"volvobuses.de"},{format:"domain",value:"volvobuses.dk"},{format:"domain",value:"volvobuses.es"},{format:"domain",value:"volvobuses.fi"},{format:"domain",value:"volvobuses.fr"},{format:"domain",value:"volvobuses.hk"},{format:"domain",value:"volvobuses.hu"},{format:"domain",value:"volvobuses.in"},{format:"domain",value:"volvobuses.it"},{format:"domain",value:"volvobuses.jo"},{format:"domain",value:"volvobuses.kr"},{format:"domain",value:"volvobuses.ma"},{format:"domain",value:"volvobuses.mx"},{format:"domain",value:"volvobuses.my"},{format:"domain",value:"volvobuses.no"},{format:"domain",value:"volvobuses.om"},{format:"domain",value:"volvobuses.ph"},{format:"domain",value:"volvobuses.pk"},{format:"domain",value:"volvobuses.pl"},{format:"domain",value:"volvobuses.ru"},{format:"domain",value:"volvobuses.se"},{format:"domain",value:"volvobuses.sg"},{format:"domain",value:"volvobuses.tn"},{format:"domain",value:"volvobuses.us"},{format:"domain",value:"volvoce.com"},{format:"domain",value:"volvodefense.com"},{format:"domain",value:"volvogroup.be"},{format:"domain",value:"volvogroup.cn"},{format:"domain",value:"volvogroup.com"},{format:"domain",value:"volvogroup.com.br"},{format:"domain",value:"volvogroup.com.cn"},{format:"domain",value:"volvogroup.de"},{format:"domain",value:"volvogroup.fr"},{format:"domain",value:"volvogroup.jp"},{format:"domain",value:"volvogroup.kr"},{format:"domain",value:"volvogroup.mx"},{format:"domain",value:"volvogroup.nl"},{format:"domain",value:"volvogroup.pe"},{format:"domain",value:"volvogroup.pl"},{format:"domain",value:"volvogroup.ru"},{format:"domain",value:"volvogroup.se"},{format:"domain",value:"volvogrouptruckcenter.nl"},{format:"domain",value:"volvomerchandise.com"},{format:"domain",value:"volvopenta.com"},{format:"domain",value:"volvopenta.com.br"},{format:"domain",value:"volvopenta.de"},{format:"domain",value:"volvopenta.es"},{format:"domain",value:"volvopenta.fr"},{format:"domain",value:"volvopenta.it"},{format:"domain",value:"volvopenta.nl"},{format:"domain",value:"volvopenta.se"},{format:"domain",value:"volvopenta.us"},{format:"domain",value:"volvosaatio.fi"},{format:"domain",value:"volvospares.com"},{format:"domain",value:"volvotrucks.ae"},{format:"domain",value:"volvotrucks.al"},{format:"domain",value:"volvotrucks.am"},{format:"domain",value:"volvotrucks.at"},{format:"domain",value:"volvotrucks.az"},{format:"domain",value:"volvotrucks.ba"},{format:"domain",value:"volvotrucks.be"},{format:"domain",value:"volvotrucks.bg"},{format:"domain",value:"volvotrucks.by"},{format:"domain",value:"volvotrucks.ch"},{format:"domain",value:"volvotrucks.cl"},{format:"domain",value:"volvotrucks.co.ao"},{format:"domain",value:"volvotrucks.co.bw"},{format:"domain",value:"volvotrucks.co.il"},{format:"domain",value:"volvotrucks.co.mz"},{format:"domain",value:"volvotrucks.co.na"},{format:"domain",value:"volvotrucks.co.uk"},{format:"domain",value:"volvotrucks.co.nz"},{format:"domain",value:"volvotrucks.co.za"},{format:"domain",value:"volvotrucks.co.zm"},{format:"domain",value:"volvotrucks.co.zw"},{format:"domain",value:"volvotrucks.com"},{format:"domain",value:"volvotrucks.com.ar"},{format:"domain",value:"volvotrucks.com.au"},{format:"domain",value:"volvotrucks.com.bn"},{format:"domain",value:"volvotrucks.com.br"},{format:"domain",value:"volvotrucks.com.cn"},{format:"domain",value:"volvotrucks.com.co"},{format:"domain",value:"volvotrucks.com.kw"},{format:"domain",value:"volvotrucks.com.pt"},{format:"domain",value:"volvotrucks.com.tr"},{format:"domain",value:"volvotrucks.com.tw"},{format:"domain",value:"volvotrucks.com.ua"},{format:"domain",value:"volvotrucks.cz"},{format:"domain",value:"volvotrucks.de"},{format:"domain",value:"volvotrucks.dk"},{format:"domain",value:"volvotrucks.ee"},{format:"domain",value:"volvotrucks.es"},{format:"domain",value:"volvotrucks.fi"},{format:"domain",value:"volvotrucks.fr"},{format:"domain",value:"volvotrucks.ge"},{format:"domain",value:"volvotrucks.gr"},{format:"domain",value:"volvotrucks.hk"},{format:"domain",value:"volvotrucks.hr"},{format:"domain",value:"volvotrucks.hu"},{format:"domain",value:"volvotrucks.id"},{format:"domain",value:"volvotrucks.in"},{format:"domain",value:"volvotrucks.it"},{format:"domain",value:"volvotrucks.jp"},{format:"domain",value:"volvotrucks.kg"},{format:"domain",value:"volvotrucks.kr"},{format:"domain",value:"volvotrucks.kz"},{format:"domain",value:"volvotrucks.lt"},{format:"domain",value:"volvotrucks.lv"},{format:"domain",value:"volvotrucks.ma"},{format:"domain",value:"volvotrucks.md"},{format:"domain",value:"volvotrucks.mk"},{format:"domain",value:"volvotrucks.mn"},{format:"domain",value:"volvotrucks.my"},{format:"domain",value:"volvotrucks.net"},{format:"domain",value:"volvotrucks.nl"},{format:"domain",value:"volvotrucks.no"},{format:"domain",value:"volvotrucks.pe"},{format:"domain",value:"volvotrucks.ph"},{format:"domain",value:"volvotrucks.pk"},{format:"domain",value:"volvotrucks.pl"},{format:"domain",value:"volvotrucks.ps"},{format:"domain",value:"volvotrucks.qa"},{format:"domain",value:"volvotrucks.ro"},{format:"domain",value:"volvotrucks.rs"},{format:"domain",value:"volvotrucks.ru"},{format:"domain",value:"volvotrucks.se"},{format:"domain",value:"volvotrucks.sg"},{format:"domain",value:"volvotrucks.si"},{format:"domain",value:"volvotrucks.sk"},{format:"domain",value:"volvotrucks.tm"},{format:"domain",value:"volvotrucks.tn"},{format:"domain",value:"volvotrucks.uy"},{format:"domain",value:"volvotruckcenter.be"},{format:"domain",value:"volvotruckcenter.dk"},{format:"domain",value:"volvotruckcenter.es"},{format:"domain",value:"volvotruckcenter.fi"},{format:"domain",value:"volvotruckcenter.it"},{format:"domain",value:"volvotruckcenter.kr"},{format:"domain",value:"volvotruckcenter.kz"},{format:"domain",value:"volvotruckcenter.nl"},{format:"domain",value:"volvotruckcenter.no"},{format:"domain",value:"volvotruckcenter.se"},{format:"domain",value:"volvotruckrental.be"},{format:"domain",value:"udtrucksmeena.com"}],[{format:"domain",value:"amazon"},{format:"domain",value:"xn--cckwcxetd"},{format:"domain",value:"xn--jlq480n2rg"},{format:"domain",value:"yamaxun"},{format:"domain",value:"zappos"},{format:"domain",value:"a2z.com"},{format:"domain",value:"aboutamazon.cn"},{format:"domain",value:"aboutamazon.co.uk"},{format:"domain",value:"aboutamazon.com"},{format:"domain",value:"aboutamazon.com.au"},{format:"domain",value:"aboutamazon.de"},{format:"domain",value:"aboutamazon.es"},{format:"domain",value:"aboutamazon.eu"},{format:"domain",value:"aboutamazon.fr"},{format:"domain",value:"aboutamazon.in"},{format:"domain",value:"aboutamazon.it"},{format:"domain",value:"aboutamazon.jp"},{format:"domain",value:"aboutamazon.pl"},{format:"domain",value:"alexafund.cn"},{format:"domain",value:"alexafund.com.cn"},{format:"domain",value:"amaaozn.com"},{format:"domain",value:"amazon-fashions.com"},{format:"domain",value:"amazon-jp-recruiting.com"},{format:"domain",value:"amazon-lantern.com"},{format:"domain",value:"amazon-launchpad.com"},{format:"domain",value:"amazon.ae"},{format:"domain",value:"amazon.ca"},{format:"domain",value:"amazon.cn"},{format:"domain",value:"amazon.co.jp"},{format:"domain",value:"amazon.co.uk"},{format:"domain",value:"amazon.com"},{format:"domain",value:"amazon.com.au"},{format:"domain",value:"amazon.com.br"},{format:"domain",value:"amazon.com.mx"},{format:"domain",value:"amazon.com.tr"},{format:"domain",value:"amazon.de"},{format:"domain",value:"amazon.es"},{format:"domain",value:"amazon.fr"},{format:"domain",value:"amazon.in"},{format:"domain",value:"amazon.it"},{format:"domain",value:"amazon.jobs"},{format:"domain",value:"amazon.jp"},{format:"domain",value:"amazon.nl"},{format:"domain",value:"amazon.red"},{format:"domain",value:"amazon.sg"},{format:"domain",value:"amazonalexavoxcon.com"},{format:"domain",value:"amazonauthorinsights.com"},{format:"domain",value:"amazonbusiness.cn"},{format:"domain",value:"amazonbusiness.com.cn"},{format:"domain",value:"amazonbusiness.org"},{format:"domain",value:"amazonbusinessblog.com"},{format:"domain",value:"amazonchoice.cn"},{format:"domain",value:"amazonchoice.com.cn"},{format:"domain",value:"amazonchoices.cn"},{format:"domain",value:"amazonchoices.com.cn"},{format:"domain",value:"amazondevicesupport.com"},{format:"domain",value:"amazonfctours.com"},{format:"domain",value:"amazonianblog.com"},{format:"domain",value:"amazonimages.com"},{format:"domain",value:"amazoninspire.cn"},{format:"domain",value:"amazoninspire.com.cn"},{format:"domain",value:"amazonlaunchpad.cn"},{format:"domain",value:"amazonlaunchpad.com"},{format:"domain",value:"amazonlaunchpad.com.cn"},{format:"domain",value:"amazonlending.com.cn"},{format:"domain",value:"amazonliterarypartnership.com"},{format:"domain",value:"amazonlumberyard.wang"},{format:"domain",value:"amazonnow.cn"},{format:"domain",value:"amazonnow.com.cn"},{format:"domain",value:"amazonpay.com"},{format:"domain",value:"amazonpay.in"},{format:"domain",value:"amazonsdi.com"},{format:"domain",value:"amazonstudiosguilds.com"},{format:"domain",value:"amazonvideodirect.com"},{format:"domain",value:"amzn.asia"},{format:"domain",value:"amzn.com"},{format:"domain",value:"amzn.to"},{format:"domain",value:"amznl.com"},{format:"domain",value:"assoc-amazon.cn"},{format:"domain",value:"associates-amazon.com"},{format:"domain",value:"gameon-masters.com"},{format:"domain",value:"gdansk-amazon.com"},{format:"domain",value:"images-amazon.com"},{format:"domain",value:"media-amazon.com"},{format:"domain",value:"primeday.cn"},{format:"domain",value:"primeday.com.cn"},{format:"domain",value:"primeday.info"},{format:"domain",value:"siege-amazon.com"},{format:"domain",value:"ssl-images-amazon.com"},{format:"domain",value:"ueberamazon.de"},{format:"domain",value:"yamaxun.cn"},{format:"domain",value:"yamaxun.com"},{format:"domain",value:"z.cn"},{format:"domain",value:"alexa.com"},{format:"domain",value:"audible.com"},{format:"domain",value:"createspace.com"},{format:"full domain",value:"images-cn.ssl-images-amazon.com"},{format:"full domain",value:"images-cn-8.ssl-images-amazon.com"},{format:"domain",value:"amazon-adsystem.com"},{format:"domain",value:"serving-sys.com"},{format:"domain",value:"amazontrust.com"},{format:"domain",value:"awstrust.com"},{format:"domain",value:"ss2.us"},{format:"domain",value:"aws"},{format:"domain",value:"acmvalidations.com"},{format:"domain",value:"acmvalidationsaws.com"},{format:"domain",value:"aesworkshops.com"},{format:"domain",value:"amazonaws-china.com"},{format:"domain",value:"amazonaws.co.uk"},{format:"domain",value:"amazonaws.com"},{format:"domain",value:"amazonaws.tv"},{format:"domain",value:"amazonses.com"},{format:"domain",value:"amazonworkdocs.com"},{format:"domain",value:"amplifyapp.com"},{format:"domain",value:"amplifyframework.com"},{format:"domain",value:"aws-iot-hackathon.com"},{format:"domain",value:"awsautopilot.com"},{format:"domain",value:"awsautoscaling.com"},{format:"domain",value:"awsbraket.com"},{format:"domain",value:"awscommandlineinterface.com"},{format:"domain",value:"awsedstart.com"},{format:"domain",value:"awseducate.com"},{format:"domain",value:"awseducate.net"},{format:"domain",value:"awseducate.org"},{format:"domain",value:"awsglobalaccelerator.com"},{format:"domain",value:"awsloft-johannesburg.com"},{format:"domain",value:"awsloft-stockholm.com"},{format:"domain",value:"awssecworkshops.com"},{format:"domain",value:"awsstatic.com"},{format:"domain",value:"awsthinkbox.com"},{format:"domain",value:"awstrack.me"},{format:"domain",value:"cdkworkshop.com"},{format:"domain",value:"cloudfront.net"},{format:"domain",value:"containersonaws.com"},{format:"domain",value:"elasticbeanstalk.com"},{format:"domain",value:"thinkboxsoftware.com"},{format:"domain",value:"regexp:.+\\.awsdns-[0-9][0-9]\\.co\\.uk$"},{format:"domain",value:"regexp:.+\\.awsdns-[0-9][0-9]\\.com$"},{format:"domain",value:"regexp:.+\\.awsdns-[0-9][0-9]\\.net$"},{format:"domain",value:"regexp:.+\\.awsdns-[0-9][0-9]\\.org$"},{format:"domain",value:"imdb"},{format:"domain",value:"boxofficemojo.com"},{format:"domain",value:"imdb.com"},{format:"domain",value:"imdb.to"},{format:"domain",value:"media-imdb.com"},{format:"domain",value:"kindle"},{format:"domain",value:"kindle.cn"},{format:"domain",value:"kindle.co.jp"},{format:"domain",value:"kindle.co.uk"},{format:"domain",value:"kindle.com"},{format:"domain",value:"kindle.de"},{format:"domain",value:"kindle.es"},{format:"domain",value:"kindle.fr"},{format:"domain",value:"kindle.in"},{format:"domain",value:"kindle.it"},{format:"domain",value:"kindle.jp"},{format:"domain",value:"kindleoasis.cn"},{format:"domain",value:"kindleoasis.com"},{format:"domain",value:"kindleoasis.com.cn"},{format:"domain",value:"kindleoasis.info"},{format:"domain",value:"kindleoasis.jp"},{format:"domain",value:"kindleoasis.org"},{format:"domain",value:"kindleoasis.us"},{format:"domain",value:"kindleoasisnews.com"},{format:"domain",value:"kindleproject.com"},{format:"domain",value:"aiv-cdn.net"},{format:"domain",value:"amazonprimevideo.cn"},{format:"domain",value:"amazonprimevideo.com.cn"},{format:"domain",value:"amazonprimevideos.com"},{format:"domain",value:"amazonvideo.cc"},{format:"domain",value:"amazonvideo.com"},{format:"domain",value:"prime-video.com"},{format:"domain",value:"primevideo.cc"},{format:"domain",value:"primevideo.com"},{format:"domain",value:"primevideo.info"},{format:"domain",value:"primevideo.org"},{format:"domain",value:"primevideo.tv"},{format:"domain",value:"wfm.com"},{format:"domain",value:"wholecitiesfoundation.org"},{format:"domain",value:"wholefoods.com"},{format:"domain",value:"wholefoodsmarket.co.uk"},{format:"domain",value:"wholefoodsmarket.com"},{format:"domain",value:"wholekidsfoundation.org"},{format:"domain",value:"wholeplanetfoundation.org"},{format:"domain",value:"a2z.org.cn"},{format:"domain",value:"amazonaws.cn"},{format:"domain",value:"amazonaws.com.cn"},{format:"domain",value:"amazonwebservices.com.cn"},{format:"domain",value:"amazonworkdocs.cn"},{format:"domain",value:"amazonworkdocs.com.cn"},{format:"domain",value:"asfiovnxocqpcry.com.cn"},{format:"domain",value:"aws-border.cn"},{format:"domain",value:"aws-icp-domain-manager.cn"},{format:"domain",value:"awsapps.cn"},{format:"domain",value:"awsapps.com.cn"},{format:"domain",value:"awsstatic.cn"},{format:"domain",value:"cloudfront-cn.net"},{format:"domain",value:"cloudfront-test.cn"},{format:"domain",value:"cloudfront.cn"},{format:"domain",value:"nwcdcloud.cn"},{format:"domain",value:"nwcdcloud.com.cn"},{format:"domain",value:"nwcddns.cn"},{format:"domain",value:"nwcdinfosec.cn"},{format:"domain",value:"route53.cn"},{format:"domain",value:"sagemaker.com.cn"},{format:"domain",value:"regexp:.+\\.awsdns-cn-[0-9][0-9]\\.biz$"},{format:"domain",value:"regexp:.+\\.awsdns-cn-[0-9][a-e0-9]\\.cn$"},{format:"domain",value:"regexp:.+\\.awsdns-cn-[0-9][0-9]\\.com$"},{format:"domain",value:"regexp:.+\\.awsdns-cn-[0-9][0-9]\\.net$"},{format:"domain",value:"regexp:.+\\.awsdns-cn-[0-9][0-9]\\.top$"}],[{format:"domain",value:"abhouses.com"},{format:"domain",value:"agconnect.link"},{format:"domain",value:"dbank.com"},{format:"domain",value:"dbankcdn.com"},{format:"domain",value:"dbankcloud.com"},{format:"domain",value:"hicloud.com"},{format:"domain",value:"hihonor.com"},{format:"domain",value:"honor.cn"},{format:"domain",value:"huawei.cn"},{format:"domain",value:"huawei.com"},{format:"domain",value:"huawei.com.cn"},{format:"domain",value:"huaweiacad.com"},{format:"domain",value:"huaweiief.cn"},{format:"domain",value:"huaweiief.com"},{format:"domain",value:"huaweistatic.com"},{format:"domain",value:"hwccpc.cn"},{format:"domain",value:"hwccpc.com"},{format:"domain",value:"hwht.cn"},{format:"domain",value:"hwocloud.com"},{format:"domain",value:"hwtrip.com"},{format:"domain",value:"shanhaitujian.com"},{format:"domain",value:"vmall.com"},{format:"domain",value:"vmallres.com"},{format:"domain",value:"bisheng.cn"},{format:"domain",value:"bishengcompiler.cn"},{format:"domain",value:"devui.design"},{format:"domain",value:"gneec.com"},{format:"domain",value:"gneec.com.cn"},{format:"domain",value:"gneec3.com"},{format:"domain",value:"gneec4.com"},{format:"domain",value:"gneec7.com"},{format:"domain",value:"harmonyos.com"},{format:"domain",value:"hiascend.cn"},{format:"domain",value:"hiascend.com"},{format:"domain",value:"hiclc.com"},{format:"domain",value:"hikunpeng.cn"},{format:"domain",value:"hikunpeng.com"},{format:"domain",value:"hikunpeng.com.cn"},{format:"domain",value:"hikunpeng.net"},{format:"domain",value:"hisilicon.com"},{format:"domain",value:"hisilicon.com.cn"},{format:"domain",value:"huaweiapaas.com"},{format:"domain",value:"mindspore.cn"},{format:"domain",value:"owsgo.com"},{format:"domain",value:"teleows.com"},{format:"domain",value:"saasops.tech"},{format:"domain",value:"hc-cdn.cn"},{format:"domain",value:"huaweicloud-dns.cn"},{format:"domain",value:"huaweicloud-dns.com"},{format:"domain",value:"huaweicloud-dns.net"},{format:"domain",value:"huaweicloud-dns.org"},{format:"domain",value:"huaweicloud-smn.cn"},{format:"domain",value:"huaweicloud-smn.com"},{format:"domain",value:"huaweicloud-smn.net"},{format:"domain",value:"huaweicloud.com"},{format:"domain",value:"huaweicloudapis.cn"},{format:"domain",value:"huaweicloudapis.com"},{format:"domain",value:"huaweicloudlive.com"},{format:"domain",value:"huaweimarketplace.com"},{format:"domain",value:"huaweisafedns.cn"},{format:"domain",value:"huaweisafehub.cn"},{format:"domain",value:"huaweiyun.cn"},{format:"domain",value:"huaweiyun.com"},{format:"domain",value:"hwcdnsre.com"},{format:"domain",value:"hwclouds-dns.cn"},{format:"domain",value:"hwclouds-dns.com"},{format:"domain",value:"hwclouds-dns.net"},{format:"domain",value:"hwclouds.cn"},{format:"domain",value:"hwclouds.mobi"},{format:"domain",value:"hwclouds.org.cn"},{format:"domain",value:"hwcloudvis.cn"},{format:"domain",value:"hwcloudvis.com"},{format:"domain",value:"imc-oneaccess.cn"},{format:"domain",value:"imcapptest.com"},{format:"domain",value:"km6g.cn"},{format:"domain",value:"km7g.cn"},{format:"domain",value:"km8g.cn"},{format:"domain",value:"km9g.cn"},{format:"domain",value:"livehwc3.cn"},{format:"domain",value:"myhuaweicloud.cn"},{format:"domain",value:"myhwcdn.cn"},{format:"domain",value:"myhwcdn.com"},{format:"domain",value:"myhwcloudlive.com"},{format:"domain",value:"myhwclouds.com"},{format:"domain",value:"pagescube.cn"},{format:"domain",value:"pagescube.com"},{format:"domain",value:"powerapp.io"},{format:"domain",value:"af-south-1.myhuaweicloud.com"},{format:"domain",value:"ap-southeast-1.myhuaweicloud.com"},{format:"domain",value:"ap-southeast-2.myhuaweicloud.com"},{format:"domain",value:"ap-southeast-3.myhuaweicloud.com"},{format:"domain",value:"cn-east-2.myhuaweicloud.com"},{format:"domain",value:"cn-east-3.myhuaweicloud.com"},{format:"domain",value:"cn-north-1.myhuaweicloud.com"},{format:"domain",value:"cn-north-2.myhuaweicloud.com"},{format:"domain",value:"cn-north-3.myhuaweicloud.com"},{format:"domain",value:"cn-north-4.myhuaweicloud.com"},{format:"domain",value:"cn-north-5.myhuaweicloud.com"},{format:"domain",value:"cn-north-6.myhuaweicloud.com"},{format:"domain",value:"cn-north-9.myhuaweicloud.com"},{format:"domain",value:"cn-northeast-1.myhuaweicloud.com"},{format:"domain",value:"cn-south-1.myhuaweicloud.com"},{format:"domain",value:"cn-south-2.myhuaweicloud.com"},{format:"domain",value:"cn-south-4.myhuaweicloud.com"},{format:"domain",value:"cn-southwest-2.myhuaweicloud.com"},{format:"domain",value:"eu-west-0.myhuaweicloud.com"},{format:"domain",value:"la-north-2.myhuaweicloud.com"},{format:"domain",value:"la-south-2.myhuaweicloud.com"},{format:"domain",value:"na-mexico-1.myhuaweicloud.com"},{format:"domain",value:"ru-northwest-2.myhuaweicloud.com"},{format:"domain",value:"sa-brazil-1.myhuaweicloud.com"},{format:"domain",value:"cdnhwchcg02.com"},{format:"domain",value:"cdnhwcurq03.com"},{format:"domain",value:"cdnhwczba04.com"},{format:"domain",value:"cdnhwclxw05.com"},{format:"domain",value:"cdnhwcupf06.com"},{format:"domain",value:"cdnhwcxcy07.com"},{format:"domain",value:"cdnhwcatq08.com"},{format:"domain",value:"cdnhwcztu09.com"},{format:"domain",value:"cdnhwcedi10.com"},{format:"domain",value:"cdnhwcoem01.com"},{format:"domain",value:"cdnhwcllh11.com"},{format:"domain",value:"cdnhwcjog12.com"},{format:"domain",value:"cdnhwcpsd13.com"},{format:"domain",value:"cdnhwcqwg14.com"},{format:"domain",value:"cdnhwcqir15.com"},{format:"domain",value:"cdnhwcvix16.com"},{format:"domain",value:"cdnhwcajk17.com"},{format:"domain",value:"cdnhwcchh18.com"},{format:"domain",value:"cdnhwcohm19.com"},{format:"domain",value:"cdnhwczjt20.com"},{format:"domain",value:"cdnhwcggk22.com"},{format:"domain",value:"cdnhwczth23.com"},{format:"domain",value:"cdnhwctxz24.com"},{format:"domain",value:"cdnhwcgrb01.cn"},{format:"domain",value:"cdnhwcyxb02.cn"},{format:"domain",value:"cdnhwcywp03.cn"},{format:"domain",value:"cdnhwclkl04.cn"},{format:"domain",value:"cdnhwcjbj05.cn"},{format:"domain",value:"cdnhwconz06.cn"},{format:"domain",value:"cdnhwcgqa21.com"},{format:"domain",value:"cdnhwckbw08.cn"},{format:"domain",value:"cdnhwcsjs09.cn"},{format:"domain",value:"cdnhwcjkl10.cn"},{format:"domain",value:"cdnhwctmz11.cn"},{format:"domain",value:"cdnhwcrpp12.cn"},{format:"domain",value:"cdnhwcpqh13.cn"},{format:"domain",value:"cdnhwcxsi14.cn"},{format:"domain",value:"cdnhwcfzp15.cn"},{format:"domain",value:"cdnhwcgvs16.cn"},{format:"domain",value:"cdnhwcrgg07.cn"},{format:"domain",value:"cdnhwceft18.cn"},{format:"domain",value:"cdnhwccvo19.cn"},{format:"domain",value:"cdnhwcbvo20.cn"},{format:"domain",value:"cdnhwcdkd21.cn"},{format:"domain",value:"cdnhwcdvg22.cn"},{format:"domain",value:"cdnhwclnh23.cn"},{format:"domain",value:"cdnhwckfd24.cn"},{format:"domain",value:"cdnhwczxh101.com"},{format:"domain",value:"cdnhwcbzj102.com"},{format:"domain",value:"cdnhwcjqv17.cn"},{format:"domain",value:"cdnhwcljk104.com"},{format:"domain",value:"cdnhwclxu105.com"},{format:"domain",value:"cdnhwcbqs106.com"},{format:"domain",value:"cdnhwctnm107.com"},{format:"domain",value:"cdnhwcbni108.com"},{format:"domain",value:"cdnhwczks109.com"},{format:"domain",value:"cdnhwcick110.com"},{format:"domain",value:"cdnhwcead111.com"},{format:"domain",value:"cdnhwcjlg112.com"},{format:"domain",value:"cdnhwckon103.com"},{format:"domain",value:"cdnhwczmn114.com"},{format:"domain",value:"cdnhwcqgw115.com"},{format:"domain",value:"cdnhwckfz116.com"},{format:"domain",value:"cdnhwcqve117.com"},{format:"domain",value:"cdnhwcgnc118.com"},{format:"domain",value:"cdnhwcuim119.com"},{format:"domain",value:"cdnhwcjsb120.com"},{format:"domain",value:"cdnhwccmz121.com"},{format:"domain",value:"cdnhwcibv122.com"},{format:"domain",value:"cdnhwcprh113.com"},{format:"domain",value:"cdnhwcedt124.com"},{format:"domain",value:"cdnhwcofl101.cn"},{format:"domain",value:"cdnhwclrd102.cn"},{format:"domain",value:"cdnhwcurr103.cn"},{format:"domain",value:"cdnhwczid104.cn"},{format:"domain",value:"cdnhwcqvk105.cn"},{format:"domain",value:"cdnhwczoy106.cn"},{format:"domain",value:"cdnhwcuwd107.cn"},{format:"domain",value:"cdnhwcogx108.cn"},{format:"domain",value:"cdnhwcoph123.com"},{format:"domain",value:"cdnhwceod109.cn"},{format:"domain",value:"cdnhwcpcw110.cn"},{format:"domain",value:"cdnhwczic111.cn"},{format:"domain",value:"cdnhwcozb112.cn"},{format:"domain",value:"cdnhwcqrr114.cn"},{format:"domain",value:"cdnhwcaoc115.cn"},{format:"domain",value:"cdnhwctyd116.cn"},{format:"domain",value:"cdnhwcidu117.cn"},{format:"domain",value:"cdnhwclsl119.cn"},{format:"domain",value:"cdnhwcsux118.cn"},{format:"domain",value:"cdnhwcbie120.cn"},{format:"domain",value:"cdnhwcuxc121.cn"},{format:"domain",value:"cdnhwcaip122.cn"},{format:"domain",value:"cdnhwcwqz113.cn"},{format:"domain",value:"cdnhwcojn124.cn"},{format:"domain",value:"cdnhwcscc123.cn"},{format:"domain",value:"regexp:.+\\.cdnhwc([1-9]|10)\\.(cn|com)$"}],[{format:"domain",value:"baidu"},{format:"domain",value:"91.com"},{format:"domain",value:"aipage.com"},{format:"domain",value:"apollo.auto"},{format:"domain",value:"baidu.cn"},{format:"domain",value:"baidu.com"},{format:"domain",value:"baidu.com.cn"},{format:"domain",value:"baidubce.com"},{format:"domain",value:"baiducontent.com"},{format:"domain",value:"baidupcs.com"},{format:"domain",value:"baidustatic.com"},{format:"domain",value:"baifae.com"},{format:"domain",value:"baifubao.com"},{format:"domain",value:"bcebos.com"},{format:"domain",value:"bdcloudapi.com"},{format:"domain",value:"bdimg.com"},{format:"domain",value:"bdstatic.com"},{format:"domain",value:"bdtjrcv.com"},{format:"domain",value:"bdydns.cn"},{format:"domain",value:"bdydns.com"},{format:"domain",value:"bdydns.net"},{format:"domain",value:"chuanke.com"},{format:"domain",value:"dlnel.com"},{format:"domain",value:"dlnel.org"},{format:"domain",value:"duapps.com"},{format:"domain",value:"dwz.cn"},{format:"domain",value:"hao123.com"},{format:"domain",value:"hao123img.com"},{format:"domain",value:"hao222.com"},{format:"domain",value:"haokan.com"},{format:"domain",value:"jomocdn.net"},{format:"domain",value:"jomodns.com"},{format:"domain",value:"mipcdn.com"},{format:"domain",value:"nuomi.com"},{format:"domain",value:"quyaoya.com"},{format:"domain",value:"shifen.com"},{format:"domain",value:"smartapps.cn"},{format:"domain",value:"tieba.com"},{format:"domain",value:"tiebaimg.com"},{format:"domain",value:"xianfae.com"},{format:"domain",value:"xiaodutv.com"},{format:"domain",value:"a.baidu.com"},{format:"domain",value:"ad.duapps.com"},{format:"domain",value:"ad.player.baidu.com"},{format:"domain",value:"adm.baidu.com"},{format:"domain",value:"adscdn.baidu.com"},{format:"domain",value:"adx.xiaodutv.com"},{format:"domain",value:"ae.bdstatic.com"},{format:"domain",value:"afd.baidu.com"},{format:"domain",value:"als.baidu.com"},{format:"domain",value:"api.mobula.sdk.duapps.com"},{format:"domain",value:"api.tuisong.baidu.com"},{format:"domain",value:"appc.baidu.com"},{format:"domain",value:"b.bdstatic.com"},{format:"domain",value:"baichuan.baidu.com"},{format:"domain",value:"baidutv.baidu.com"},{format:"domain",value:"banlv.baidu.com"},{format:"domain",value:"bar.baidu.com"},{format:"domain",value:"bdimg.share.baidu.com"},{format:"domain",value:"bdplus.baidu.com"},{format:"domain",value:"bj.bcebos.com"},{format:"domain",value:"btlaunch.baidu.com"},{format:"domain",value:"c.baidu.com"},{format:"domain",value:"cb.baidu.com"},{format:"domain",value:"cbjs.baidu.com"},{format:"domain",value:"cjhq.baidu.com"},{format:"domain",value:"cleaner.baidu.com"},{format:"domain",value:"click.bes.baidu.com"},{format:"domain",value:"click.hm.baidu.com"},{format:"domain",value:"click.qianqian.com"},{format:"domain",value:"cm.baichuan.baidu.com"},{format:"domain",value:"cm.baidu.com"},{format:"domain",value:"cm.pos.baidu.com"},{format:"domain",value:"cpro.baidu.cn"},{format:"domain",value:"cpro.baidu.com"},{format:"domain",value:"cpro.baidustatic.com"},{format:"domain",value:"cpro.tieba.baidu.com"},{format:"domain",value:"cpro.zhidao.baidu.com"},{format:"domain",value:"cpro2.baidu.com"},{format:"domain",value:"cpro2.baidustatic.com"},{format:"domain",value:"crs.baidu.com"},{format:"domain",value:"datax.baidu.com"},{format:"domain",value:"dd713.bj.bcebos.com"},{format:"domain",value:"dl.client.baidu.com"},{format:"domain",value:"dl.ops.baidu.com"},{format:"domain",value:"dl1sw.baidu.com"},{format:"domain",value:"dl2.bav.baidu.com"},{format:"domain",value:"dlsw.baidu.com"},{format:"domain",value:"dlsw.br.baidu.com"},{format:"domain",value:"dl-vip.bav.baidu.com"},{format:"domain",value:"dl-vip.pcfaster.baidu.co.th"},{format:"domain",value:"download.bav.baidu.com"},{format:"domain",value:"download.sd.baidu.com"},{format:"domain",value:"drmcmm.baidu.com"},{format:"domain",value:"dup.baidustatic.com"},{format:"domain",value:"dxp.baidu.com"},{format:"domain",value:"dzl.baidu.com"},{format:"domain",value:"e.baidu.com"},{format:"domain",value:"eclick.baidu.com"},{format:"domain",value:"ecma.bdimg.com"},{format:"domain",value:"ecmb.bdimg.com"},{format:"domain",value:"ecmc.bdimg.com"},{format:"domain",value:"eiv.baidu.com"},{format:"domain",value:"em.baidu.com"},{format:"domain",value:"entry.baidu.com"},{format:"domain",value:"ers.baidu.com"},{format:"domain",value:"f10.baidu.com"},{format:"domain",value:"fc-feed.cdn.bcebos.com"},{format:"domain",value:"fclick.baidu.com"},{format:"domain",value:"feed.baidu.com"},{format:"domain",value:"fexclick.baidu.com"},{format:"domain",value:"g.baidu.com"},{format:"domain",value:"gimg.baidu.com"},{format:"domain",value:"guanjia.baidu.com"},{format:"domain",value:"hc.baidu.com"},{format:"domain",value:"hm.baidu.com"},{format:"domain",value:"hmma.baidu.com"},{format:"domain",value:"hpd.baidu.com"},{format:"domain",value:"idm.bce.baidu.com"},{format:"domain",value:"idm-su.baidu.com"},{format:"domain",value:"iebar.baidu.com"},{format:"domain",value:"ikcode.baidu.com"},{format:"domain",value:"img.taotaosou.cn"},{format:"domain",value:"img01.taotaosou.cn"},{format:"domain",value:"j.br.baidu.com"},{format:"domain",value:"kstj.baidu.com"},{format:"domain",value:"log.music.baidu.com"},{format:"domain",value:"m1.baidu.com"},{format:"domain",value:"ma.baidu.com"},{format:"domain",value:"mobads.baidu.com"},{format:"domain",value:"mobads-logs.baidu.com"},{format:"domain",value:"mpro.baidu.com"},{format:"domain",value:"msite.baidu.com"},{format:"domain",value:"neirong.baidu.com"},{format:"domain",value:"nsclick.baidu.com"},{format:"domain",value:"nsclickvideo.baidu.com"},{format:"domain",value:"openrcv.baidu.com"},{format:"domain",value:"pc.videoclick.baidu.com"},{format:"domain",value:"pos.baidu.com"},{format:"domain",value:"pups.bdimg.com"},{format:"domain",value:"push.zhanzhang.baidu.com"},{format:"domain",value:"qianclick.baidu.com"},{format:"domain",value:"release.baidu.com"},{format:"domain",value:"res.mi.baidu.com"},{format:"domain",value:"rigel.baidustatic.com"},{format:"domain",value:"river.zhidao.baidu.com"},{format:"domain",value:"rj.baidu.com"},{format:"domain",value:"rplog.baidu.com"},{format:"domain",value:"s.baidu.com"},{format:"domain",value:"s.cpro.baidu.com"},{format:"domain",value:"sa.tuisong.baidu.com"},{format:"domain",value:"sclick.baidu.com"},{format:"domain",value:"sestat.baidu.com"},{format:"domain",value:"shadu.baidu.com"},{format:"domain",value:"share.baidu.com"},{format:"domain",value:"snippet.pos.baidu.com"},{format:"domain",value:"sobar.baidu.com"},{format:"domain",value:"sobartop.baidu.com"},{format:"domain",value:"spcode.baidu.com"},{format:"domain",value:"stat.v.baidu.com"},{format:"domain",value:"su.bdimg.com"},{format:"domain",value:"su.bdstatic.com"},{format:"domain",value:"tk.baidu.com"},{format:"domain",value:"tkweb.baidu.com"},{format:"domain",value:"tob-cms.bj.bcebos.com"},{format:"domain",value:"tongji.baidu.com"},{format:"domain",value:"toolbar.baidu.com"},{format:"domain",value:"tracker.baidu.com"},{format:"domain",value:"tuijian.baidu.com"},{format:"domain",value:"uat1.bfsspadserver.8le8le.com"},{format:"domain",value:"ubmcmm.baidustatic.com"},{format:"domain",value:"ucstat.baidu.com"},{format:"domain",value:"ulic.baidu.com"},{format:"domain",value:"ulog.imap.baidu.com"},{format:"domain",value:"union.baidu.com"},{format:"domain",value:"unionimage.baidu.com"},{format:"domain",value:"utility.baidu.com"},{format:"domain",value:"utk.baidu.com"},{format:"domain",value:"videopush.baidu.com"},{format:"domain",value:"vv84.bj.bcebos.com"},{format:"domain",value:"w.gdown.baidu.com"},{format:"domain",value:"w.x.baidu.com"},{format:"domain",value:"wangmeng.baidu.com"},{format:"domain",value:"weishi.baidu.com"},{format:"domain",value:"wenku-cms.bj.bcebos.com"},{format:"domain",value:"wisepush.video.baidu.com"},{format:"domain",value:"wm.baidu.com"},{format:"domain",value:"wn.pos.baidu.com"},{format:"domain",value:"znsv.baidu.com"},{format:"domain",value:"zz.bdstatic.com"},{format:"domain",value:"zzy1.quyaoya.com"},{format:"domain",value:"zuoyebang.cc"},{format:"domain",value:"zuoyebang.com"},{format:"domain",value:"zybang.com"}],[{format:"domain",value:"nike"},{format:"domain",value:"air-nike-shoes.com"},{format:"domain",value:"airmax360.com"},{format:"domain",value:"beijingnike.com"},{format:"domain",value:"betternike.com"},{format:"domain",value:"buynikechina.com"},{format:"domain",value:"cheap-nike.com"},{format:"domain",value:"cheapnikedunks.com"},{format:"domain",value:"cheapnikeoutlet.com"},{format:"domain",value:"classicnike.com"},{format:"domain",value:"cnnikebrand.com"},{format:"domain",value:"customnikeshoes.com"},{format:"domain",value:"easynike.com"},{format:"domain",value:"eenike.com"},{format:"domain",value:"fashionnike.com"},{format:"domain",value:"finenike.com"},{format:"domain",value:"foampositeshoes.com"},{format:"domain",value:"goldnikeclub.com"},{format:"domain",value:"gonike.com"},{format:"domain",value:"handbags-nike.com"},{format:"domain",value:"hightopnikes.com"},{format:"domain",value:"idnike.com"},{format:"domain",value:"inikesneakers.com"},{format:"domain",value:"just-do-it.cn"},{format:"domain",value:"justdoit.us"},{format:"domain",value:"kicksnike1.com"},{format:"domain",value:"kidsnikeshoes.com"},{format:"domain",value:"mynike.com"},{format:"domain",value:"nike-air-max.com"},{format:"domain",value:"nike-dunksb.com"},{format:"domain",value:"nike-fr.com"},{format:"domain",value:"nike-org.com"},{format:"domain",value:"nike-shox.cn"},{format:"domain",value:"nike-uk.com"},{format:"domain",value:"nike-us.com"},{format:"domain",value:"nike-usa.com"},{format:"domain",value:"nike.ci"},{format:"domain",value:"nike.cn"},{format:"domain",value:"nike.com"},{format:"domain",value:"nike.com.br"},{format:"domain",value:"nike.com.hk"},{format:"domain",value:"nike.gy"},{format:"domain",value:"nike.hk"},{format:"domain",value:"nike.shop"},{format:"domain",value:"nike.us"},{format:"domain",value:"nike.xn--hxt814e"},{format:"domain",value:"nike0594.com"},{format:"domain",value:"nike23.com"},{format:"domain",value:"nikeadidas.com"},{format:"domain",value:"nikeairhuarache.com"},{format:"domain",value:"nikeairmax.com"},{format:"domain",value:"nikeairmaxs.com"},{format:"domain",value:"nikeairmaxshoes.com"},{format:"domain",value:"nikeairrift.com"},{format:"domain",value:"nikeasia.com"},{format:"domain",value:"nikeaustralia.com"},{format:"domain",value:"nikeaw77.com"},{format:"domain",value:"nikeb.com"},{format:"domain",value:"nikebbn.com"},{format:"domain",value:"nikebetrue.com"},{format:"domain",value:"nikebetterworld.cn"},{format:"domain",value:"nikebetterworld.com"},{format:"domain",value:"nikebetterworld.com.cn"},{format:"domain",value:"nikebetterworld.info"},{format:"domain",value:"nikebetterworld.net"},{format:"domain",value:"nikebetterworld.org"},{format:"domain",value:"nikebiz.info"},{format:"domain",value:"nikebuy.com"},{format:"domain",value:"nikeby.com"},{format:"domain",value:"nikecdn.com"},{format:"domain",value:"nikecompany.com"},{format:"domain",value:"nikeconfluence.com"},{format:"domain",value:"nikechina.cn"},{format:"domain",value:"nikechosen.com"},{format:"domain",value:"nikecloud.com"},{format:"domain",value:"nikeclub.com"},{format:"domain",value:"nikecraft.com"},{format:"domain",value:"nikedawn.com"},{format:"domain",value:"nikedunks.net"},{format:"domain",value:"nikedunksshoes.com"},{format:"domain",value:"nikeelite.com"},{format:"domain",value:"nikefactorystore.com"},{format:"domain",value:"nikefind.com"},{format:"domain",value:"nikefirm.com"},{format:"domain",value:"nikefoamposites.com"},{format:"domain",value:"nikefoampositeshoes.com"},{format:"domain",value:"nikefootballcleats.com"},{format:"domain",value:"nikefootballgloves.com"},{format:"domain",value:"nikefootballjersey.com"},{format:"domain",value:"nikefoundation.org"},{format:"domain",value:"nikefr.com"},{format:"domain",value:"nikefrance.com"},{format:"domain",value:"nikefree.com"},{format:"domain",value:"nikefreeshoes.com"},{format:"domain",value:"nikefuelband.com"},{format:"domain",value:"nikegadgets.com"},{format:"domain",value:"nikegenealogy.com"},{format:"domain",value:"nikegolf.ca"},{format:"domain",value:"nikegolf.cn"},{format:"domain",value:"nikegrid.com"},{format:"domain",value:"nikehelp.com"},{format:"domain",value:"nikehightops.com"},{format:"domain",value:"nikehyperdunk.com"},{format:"domain",value:"nikeid.cn"},{format:"domain",value:"nikeid.com.cn"},{format:"domain",value:"nikeidshoes.com"},{format:"domain",value:"nikeinc.com"},{format:"domain",value:"nikeinc.com.cn"},{format:"domain",value:"nikeincchemistry.com"},{format:"domain",value:"nikeinstock.com"},{format:"domain",value:"nikeit.com"},{format:"domain",value:"nikeitalia.com"},{format:"domain",value:"nikeitaly.com"},{format:"domain",value:"nikekd.com"},{format:"domain",value:"nikekid.com"},{format:"domain",value:"nikelab.cn"},{format:"domain",value:"nikelab.com.cn"},{format:"domain",value:"nikelink.com"},{format:"domain",value:"nikeliuxiang.cn"},{format:"domain",value:"nikeliuxiang.com"},{format:"domain",value:"nikeliuxiang.com.cn"},{format:"domain",value:"nikelives.com"},{format:"domain",value:"nikelunarglide.com"},{format:"domain",value:"nikemall.cn"},{format:"domain",value:"nikemall.com.cn"},{format:"domain",value:"nikemarketing.com"},{format:"domain",value:"nikenews.com"},{format:"domain",value:"niken7.com"},{format:"domain",value:"nikeonlinestore.com"},{format:"domain",value:"nikeoutletstore.com"},{format:"domain",value:"nikeoutletstores.com"},{format:"domain",value:"nikepioneer.com"},{format:"domain",value:"nikeplus.com"},{format:"domain",value:"nikeplus.org"},{format:"domain",value:"nikepress.com"},{format:"domain",value:"nikeprice.com"},{format:"domain",value:"nikeproduct.com"},{format:"domain",value:"nikepromax.com"},{format:"domain",value:"nikeresponsibility.com"},{format:"domain",value:"nikereuseashoe.com"},{format:"domain",value:"nikerunclub.cn"},{format:"domain",value:"nikerunclub.com.cn"},{format:"domain",value:"nikerunner.com"},{format:"domain",value:"nikerunning.com.cn"},{format:"domain",value:"nikerunningshoes.com"},{format:"domain",value:"nikesb.com"},{format:"domain",value:"nikesbdunks.net"},{format:"domain",value:"nikeseason.com"},{format:"domain",value:"nikeselling.com"},{format:"domain",value:"nikesellorder.com"},{format:"domain",value:"nikeshoemarket.com"},{format:"domain",value:"nikeshoes-store.com"},{format:"domain",value:"nikeshoes21.com"},{format:"domain",value:"nikeshoes4u.com"},{format:"domain",value:"nikeshoescity.com"},{format:"domain",value:"nikeshoesgroup.com"},{format:"domain",value:"nikeshoesinc.com"},{format:"domain",value:"nikeshoesmarket.com"},{format:"domain",value:"nikeshoesretro.com"},{format:"domain",value:"nikeshoeswon.com"},{format:"domain",value:"nikeshoponline.com"},{format:"domain",value:"nikeshoxsale.com"},{format:"domain",value:"nikesku.com"},{format:"domain",value:"nikesnowboarding.com"},{format:"domain",value:"nikesoccercleats.com"},{format:"domain",value:"nikesportswear.com"},{format:"domain",value:"nikestares.com"},{format:"domain",value:"nikestore.cn"},{format:"domain",value:"nikestore.com"},{format:"domain",value:"nikestore.com.au"},{format:"domain",value:"nikestyles.com"},{format:"domain",value:"nikeswim.com"},{format:"domain",value:"niketaiwan.net"},{format:"domain",value:"niketracking.com"},{format:"domain",value:"niketradeweb.com"},{format:"domain",value:"niketrainer.com"},{format:"domain",value:"niketrainers.com"},{format:"domain",value:"niketraining.com"},{format:"domain",value:"nikeusa.com"},{format:"domain",value:"nikewear.com"},{format:"domain",value:"nikey.com"},{format:"domain",value:"nikezoom.com"},{format:"domain",value:"nke6.com"},{format:"domain",value:"outletnike.com"},{format:"domain",value:"runnike.com"},{format:"domain",value:"runningnike.com"},{format:"domain",value:"sale-nikeshoes.com"},{format:"domain",value:"static-nike.com"},{format:"domain",value:"swoo.sh"},{format:"domain",value:"swoosh.com"},{format:"domain",value:"swoosh.tv"},{format:"domain",value:"thedailysnkr.com"},{format:"domain",value:"verygoodnike.com"},{format:"domain",value:"womensnikeshox.com"},{format:"domain",value:"xn--74q035i.xn--hxt814e"}],[{format:"domain",value:"oath.cloud"},{format:"domain",value:"oath.com"},{format:"domain",value:"ouroath.com"},{format:"domain",value:"static-verizon.com"},{format:"domain",value:"uplynk.com"},{format:"domain",value:"verizon.com"},{format:"domain",value:"verizon.net"},{format:"domain",value:"verizonbusinessfios.com"},{format:"domain",value:"verizondigitalmedia.com"},{format:"domain",value:"verizonenterprise.com"},{format:"domain",value:"verizonfios.com"},{format:"domain",value:"verizonmedia.com"},{format:"domain",value:"verizonwireless.com"},{format:"domain",value:"vzw.com"},{format:"domain",value:"xo.com"},{format:"domain",value:"omniroot.com"},{format:"domain",value:"yahoo"},{format:"domain",value:"yahoo.ae"},{format:"domain",value:"yahoo.am"},{format:"domain",value:"yahoo.as"},{format:"domain",value:"yahoo.at"},{format:"domain",value:"yahoo.az"},{format:"domain",value:"yahoo.ba"},{format:"domain",value:"yahoo.be"},{format:"domain",value:"yahoo.bg"},{format:"domain",value:"yahoo.bi"},{format:"domain",value:"yahoo.bs"},{format:"domain",value:"yahoo.bt"},{format:"domain",value:"yahoo.by"},{format:"domain",value:"yahoo.ca"},{format:"domain",value:"yahoo.cat"},{format:"domain",value:"yahoo.cd"},{format:"domain",value:"yahoo.cg"},{format:"domain",value:"yahoo.ch"},{format:"domain",value:"yahoo.cl"},{format:"domain",value:"yahoo.cm"},{format:"domain",value:"yahoo.cn"},{format:"domain",value:"yahoo.co.ao"},{format:"domain",value:"yahoo.co.bw"},{format:"domain",value:"yahoo.co.ck"},{format:"domain",value:"yahoo.co.cr"},{format:"domain",value:"yahoo.co.id"},{format:"domain",value:"yahoo.co.il"},{format:"domain",value:"yahoo.co.in"},{format:"domain",value:"yahoo.co.jp"},{format:"domain",value:"yahoo.co.kr"},{format:"domain",value:"yahoo.co.mz"},{format:"domain",value:"yahoo.co.nz"},{format:"domain",value:"yahoo.co.th"},{format:"domain",value:"yahoo.co.tz"},{format:"domain",value:"yahoo.co.uk"},{format:"domain",value:"yahoo.co.uz"},{format:"domain",value:"yahoo.co.ve"},{format:"domain",value:"yahoo.co.vi"},{format:"domain",value:"yahoo.co.za"},{format:"domain",value:"yahoo.com"},{format:"domain",value:"yahoo.com.af"},{format:"domain",value:"yahoo.com.ag"},{format:"domain",value:"yahoo.com.ai"},{format:"domain",value:"yahoo.com.ar"},{format:"domain",value:"yahoo.com.au"},{format:"domain",value:"yahoo.com.bd"},{format:"domain",value:"yahoo.com.bo"},{format:"domain",value:"yahoo.com.br"},{format:"domain",value:"yahoo.com.bz"},{format:"domain",value:"yahoo.com.cn"},{format:"domain",value:"yahoo.com.co"},{format:"domain",value:"yahoo.com.do"},{format:"domain",value:"yahoo.com.ec"},{format:"domain",value:"yahoo.com.eg"},{format:"domain",value:"yahoo.com.es"},{format:"domain",value:"yahoo.com.fj"},{format:"domain",value:"yahoo.com.gi"},{format:"domain",value:"yahoo.com.gt"},{format:"domain",value:"yahoo.com.hk"},{format:"domain",value:"yahoo.com.kw"},{format:"domain",value:"yahoo.com.lb"},{format:"domain",value:"yahoo.com.ly"},{format:"domain",value:"yahoo.com.mt"},{format:"domain",value:"yahoo.com.mx"},{format:"domain",value:"yahoo.com.my"},{format:"domain",value:"yahoo.com.na"},{format:"domain",value:"yahoo.com.nf"},{format:"domain",value:"yahoo.com.om"},{format:"domain",value:"yahoo.com.pa"},{format:"domain",value:"yahoo.com.pe"},{format:"domain",value:"yahoo.com.ph"},{format:"domain",value:"yahoo.com.pk"},{format:"domain",value:"yahoo.com.pr"},{format:"domain",value:"yahoo.com.py"},{format:"domain",value:"yahoo.com.sa"},{format:"domain",value:"yahoo.com.sb"},{format:"domain",value:"yahoo.com.sg"},{format:"domain",value:"yahoo.com.sv"},{format:"domain",value:"yahoo.com.tj"},{format:"domain",value:"yahoo.com.tr"},{format:"domain",value:"yahoo.com.tw"},{format:"domain",value:"yahoo.com.ua"},{format:"domain",value:"yahoo.com.uy"},{format:"domain",value:"yahoo.com.vc"},{format:"domain",value:"yahoo.com.vn"},{format:"domain",value:"yahoo.cz"},{format:"domain",value:"yahoo.de"},{format:"domain",value:"yahoo.dj"},{format:"domain",value:"yahoo.dk"},{format:"domain",value:"yahoo.dm"},{format:"domain",value:"yahoo.ee"},{format:"domain",value:"yahoo.es"},{format:"domain",value:"yahoo.fi"},{format:"domain",value:"yahoo.fm"},{format:"domain",value:"yahoo.fr"},{format:"domain",value:"yahoo.ge"},{format:"domain",value:"yahoo.gg"},{format:"domain",value:"yahoo.gl"},{format:"domain",value:"yahoo.gm"},{format:"domain",value:"yahoo.gp"},{format:"domain",value:"yahoo.gr"},{format:"domain",value:"yahoo.gy"},{format:"domain",value:"yahoo.hk"},{format:"domain",value:"yahoo.hr"},{format:"domain",value:"yahoo.hu"},{format:"domain",value:"yahoo.ie"},{format:"domain",value:"yahoo.im"},{format:"domain",value:"yahoo.in"},{format:"domain",value:"yahoo.is"},{format:"domain",value:"yahoo.it"},{format:"domain",value:"yahoo.je"},{format:"domain",value:"yahoo.jo"},{format:"domain",value:"yahoo.la"},{format:"domain",value:"yahoo.lt"},{format:"domain",value:"yahoo.lu"},{format:"domain",value:"yahoo.lv"},{format:"domain",value:"yahoo.md"},{format:"domain",value:"yahoo.me"},{format:"domain",value:"yahoo.mk"},{format:"domain",value:"yahoo.mw"},{format:"domain",value:"yahoo.mx"},{format:"domain",value:"yahoo.net"},{format:"domain",value:"yahoo.nl"},{format:"domain",value:"yahoo.no"},{format:"domain",value:"yahoo.nu"},{format:"domain",value:"yahoo.ph"},{format:"domain",value:"yahoo.pl"},{format:"domain",value:"yahoo.pn"},{format:"domain",value:"yahoo.ps"},{format:"domain",value:"yahoo.pt"},{format:"domain",value:"yahoo.ro"},{format:"domain",value:"yahoo.ru"},{format:"domain",value:"yahoo.rw"},{format:"domain",value:"yahoo.se"},{format:"domain",value:"yahoo.sg"},{format:"domain",value:"yahoo.sh"},{format:"domain",value:"yahoo.si"},{format:"domain",value:"yahoo.sk"},{format:"domain",value:"yahoo.sm"},{format:"domain",value:"yahoo.sn"},{format:"domain",value:"yahoo.so"},{format:"domain",value:"yahoo.sr"},{format:"domain",value:"yahoo.st"},{format:"domain",value:"yahoo.tg"},{format:"domain",value:"yahoo.tk"},{format:"domain",value:"yahoo.tl"},{format:"domain",value:"yahoo.tm"},{format:"domain",value:"yahoo.tn"},{format:"domain",value:"yahoo.vg"},{format:"domain",value:"yahoo.ws"},{format:"domain",value:"maktoob.com"},{format:"domain",value:"myguide.hk"},{format:"domain",value:"techcrunch.com"},{format:"domain",value:"yahoo-news.com.hk"},{format:"domain",value:"yahooapis.com"},{format:"domain",value:"yahoodns.net"},{format:"domain",value:"yahoofinance.com"},{format:"domain",value:"yahoohealth.com"},{format:"domain",value:"yahoomusic.com"},{format:"domain",value:"yahoosandbox.com"},{format:"domain",value:"yahoosportsbook.com"},{format:"domain",value:"yho.com"},{format:"domain",value:"yimg.com"},{format:"domain",value:"yimg.jp"},{format:"domain",value:"ymail.com"},{format:"domain",value:"flickr"},{format:"domain",value:"flic.kr"},{format:"domain",value:"flickr.com"},{format:"domain",value:"flickr.net"},{format:"domain",value:"staticflickr.com"},{format:"domain",value:"ads.yahoo.com"},{format:"domain",value:"gemini.yahoo.com"},{format:"domain",value:"ysm.yahoo.com"}],[{format:"domain",value:"mastercard.ae"},{format:"domain",value:"mastercard.at"},{format:"domain",value:"mastercard.az"},{format:"domain",value:"mastercard.ba"},{format:"domain",value:"mastercard.be"},{format:"domain",value:"mastercard.bg"},{format:"domain",value:"mastercard.by"},{format:"domain",value:"mastercard.ca"},{format:"domain",value:"mastercard.ch"},{format:"domain",value:"mastercard.cl"},{format:"domain",value:"mastercard.cn"},{format:"domain",value:"mastercard.co.id"},{format:"domain",value:"mastercard.co.il"},{format:"domain",value:"mastercard.co.in"},{format:"domain",value:"mastercard.co.jp"},{format:"domain",value:"mastercard.co.ke"},{format:"domain",value:"mastercard.co.kr"},{format:"domain",value:"mastercard.co.nz"},{format:"domain",value:"mastercard.co.th"},{format:"domain",value:"mastercard.co.uk"},{format:"domain",value:"mastercard.co.ve"},{format:"domain",value:"mastercard.co.za"},{format:"domain",value:"mastercard.com"},{format:"domain",value:"mastercard.com.ar"},{format:"domain",value:"mastercard.com.au"},{format:"domain",value:"mastercard.com.bh"},{format:"domain",value:"mastercard.com.br"},{format:"domain",value:"mastercard.com.bz"},{format:"domain",value:"mastercard.com.cn"},{format:"domain",value:"mastercard.com.co"},{format:"domain",value:"mastercard.com.cy"},{format:"domain",value:"mastercard.com.eg"},{format:"domain",value:"mastercard.com.ge"},{format:"domain",value:"mastercard.com.gt"},{format:"domain",value:"mastercard.com.hk"},{format:"domain",value:"mastercard.com.kw"},{format:"domain",value:"mastercard.com.lb"},{format:"domain",value:"mastercard.com.mx"},{format:"domain",value:"mastercard.com.my"},{format:"domain",value:"mastercard.com.ng"},{format:"domain",value:"mastercard.com.pe"},{format:"domain",value:"mastercard.com.ph"},{format:"domain",value:"mastercard.com.sa"},{format:"domain",value:"mastercard.com.sg"},{format:"domain",value:"mastercard.com.tr"},{format:"domain",value:"mastercard.com.tw"},{format:"domain",value:"mastercard.com.ve"},{format:"domain",value:"mastercard.com.vn"},{format:"domain",value:"mastercard.cz"},{format:"domain",value:"mastercard.de"},{format:"domain",value:"mastercard.dk"},{format:"domain",value:"mastercard.es"},{format:"domain",value:"mastercard.eu"},{format:"domain",value:"mastercard.fi"},{format:"domain",value:"mastercard.fr"},{format:"domain",value:"mastercard.gr"},{format:"domain",value:"mastercard.hr"},{format:"domain",value:"mastercard.hu"},{format:"domain",value:"mastercard.ie"},{format:"domain",value:"mastercard.inc"},{format:"domain",value:"mastercard.it"},{format:"domain",value:"mastercard.jo"},{format:"domain",value:"mastercard.ke"},{format:"domain",value:"mastercard.kz"},{format:"domain",value:"mastercard.lu"},{format:"domain",value:"mastercard.md"},{format:"domain",value:"mastercard.my"},{format:"domain",value:"mastercard.nl"},{format:"domain",value:"mastercard.no"},{format:"domain",value:"mastercard.om"},{format:"domain",value:"mastercard.pl"},{format:"domain",value:"mastercard.pt"},{format:"domain",value:"mastercard.qa"},{format:"domain",value:"mastercard.ro"},{format:"domain",value:"mastercard.rs"},{format:"domain",value:"mastercard.ru"},{format:"domain",value:"mastercard.se"},{format:"domain",value:"mastercard.si"},{format:"domain",value:"mastercard.sk"},{format:"domain",value:"mastercard.ua"},{format:"domain",value:"mastercard.us"},{format:"domain",value:"areyoucreditwise.com"},{format:"domain",value:"borderlessprepaid.com"},{format:"domain",value:"branchportal.com"},{format:"domain",value:"idservice.inc"},{format:"domain",value:"inclusivegrowthscore.com"},{format:"domain",value:"findacard.com"},{format:"domain",value:"mastercad.com"},{format:"domain",value:"mastercard-email.com"},{format:"domain",value:"mastercardacademy.com"},{format:"domain",value:"mastercardadvisors.com"},{format:"domain",value:"mastercardcenter.com"},{format:"domain",value:"mastercardcenter.org"},{format:"domain",value:"mastercardcenterforinclusivegrowth.org"},{format:"domain",value:"mastercardconnect.com"},{format:"domain",value:"mastercardezsavings.com"},{format:"domain",value:"mastercardidtheftalerts.com"},{format:"domain",value:"mastercardrestaurant.com"},{format:"domain",value:"mastercardservices.com"},{format:"domain",value:"mastercardworldwide.com"},{format:"domain",value:"masterpassteststore.com"},{format:"domain",value:"masterintelligence.com"},{format:"domain",value:"mcpeaceofmind.com"},{format:"domain",value:"myaccountglobalcash.com"},{format:"domain",value:"mycardbenefits.com"},{format:"domain",value:"onedinesfree.com"},{format:"domain",value:"paypass.net"},{format:"domain",value:"pieceofplastic.com"},{format:"domain",value:"predictivetechnologies.com"},{format:"domain",value:"priceless.com"},{format:"domain",value:"pricelessmarketingengine.com"},{format:"domain",value:"sbitravelcard.com"},{format:"domain",value:"shoppercentre.com"},{format:"domain",value:"smartcommunitiescoalition.com"},{format:"domain",value:"smartcommunitiescoalition.org"},{format:"domain",value:"startpath.com"},{format:"domain",value:"taptotokyo.com"},{format:"domain",value:"tasteofpremium.jp"},{format:"domain",value:"travelcontroller.com"},{format:"domain",value:"wwwpaypass.com"},{format:"domain",value:"becomeindex.com"},{format:"domain",value:"cashpassport.ca"},{format:"domain",value:"cashpassport.co.za"},{format:"domain",value:"cashpassport.com"},{format:"domain",value:"cashpassport.com.br"},{format:"domain",value:"cashpassport.net"},{format:"domain",value:"corporatecashpassport.com"},{format:"domain",value:"icashpassport.com.mx"},{format:"domain",value:"intercamcashpassport.com.mx"},{format:"domain",value:"multicurrencycashpassport.com"},{format:"domain",value:"shinhangmc.com"},{format:"domain",value:"mastercardbiz.ca"},{format:"domain",value:"mastercardbiz.com"},{format:"domain",value:"mastercardbusinessnetwork.com"},{format:"domain",value:"nab.com.au"},{format:"domain",value:"nabtravellercard.com.au"},{format:"domain",value:"53world.com"},{format:"domain",value:"53worldsweeps.com"},{format:"domain",value:"lovethiscity.com"},{format:"domain",value:"mastercardmoments.com"},{format:"domain",value:"pahabicilemezsurprizler.com"},{format:"domain",value:"priceless.com"},{format:"domain",value:"priceless.com.cn"},{format:"domain",value:"priceless.org"},{format:"domain",value:"pricelessafrica.com"},{format:"domain",value:"pricelessarabia.com"},{format:"domain",value:"pricelessaruba.com"},{format:"domain",value:"pricelessbeijing.cn"},{format:"domain",value:"pricelessbeijing.com"},{format:"domain",value:"pricelessbeijing.com.cn"},{format:"domain",value:"pricelesshongkong.com"},{format:"domain",value:"pricelesshonolulu.com"},{format:"domain",value:"pricelesspick.com"},{format:"domain",value:"pricelesssantiago.com"},{format:"domain",value:"pricelesssydney.com"},{format:"domain",value:"pricelesssurprises.com"},{format:"domain",value:"pricelesstoronto.ca"},{format:"domain",value:"pricelesstv.com"},{format:"domain",value:"simplify.com"},{format:"domain",value:"simplifycommerce.com"},{format:"domain",value:"cashpassportglobe.com"},{format:"domain",value:"gwktravelex.nl"},{format:"domain",value:"travelex.be"},{format:"domain",value:"travelex.bh"},{format:"domain",value:"travelex.ca"},{format:"domain",value:"travelex.co.in"},{format:"domain",value:"travelex.co.jp"},{format:"domain",value:"travelex.co.nz"},{format:"domain",value:"travelex.co.uk"},{format:"domain",value:"travelex.com"},{format:"domain",value:"travelex.com.au"},{format:"domain",value:"travelex.com.cn"},{format:"domain",value:"travelex.com.hk"},{format:"domain",value:"travelex.com.my"},{format:"domain",value:"travelex.com.om"},{format:"domain",value:"travelex.com.tr"},{format:"domain",value:"travelex.de"},{format:"domain",value:"travelex.fr"},{format:"domain",value:"travelex.it"},{format:"domain",value:"travelex.qa"},{format:"domain",value:"travelexae.com"},{format:"domain",value:"travelexch.com"},{format:"domain",value:"travelexmoneycard.com"},{format:"domain",value:"bidvestbank.co.za"},{format:"domain",value:"worldcurrencycard.co.za"},{format:"full domain",value:"nab.demdex.net"},{format:"full domain",value:"nationalaustraliaban.tt.omtrdc.net"}],[{format:"domain",value:"awayoutgame.com"},{format:"domain",value:"battlefieldbadcompany2.com"},{format:"domain",value:"battlefront2.com"},{format:"domain",value:"battlefrontii.com"},{format:"domain",value:"bejewled-stars.com"},{format:"domain",value:"bejeweledstars.com"},{format:"domain",value:"capitalgames.com"},{format:"domain",value:"chillingo.com"},{format:"domain",value:"commandandconquer.com"},{format:"domain",value:"conquerwithcharacter.com"},{format:"domain",value:"crysis.jp"},{format:"domain",value:"dawngate.com"},{format:"domain",value:"dawngatechronicles.com"},{format:"domain",value:"dicela.com"},{format:"domain",value:"dicela.net"},{format:"domain",value:"ea-anz-press.com"},{format:"domain",value:"ea.com"},{format:"domain",value:"eaaccess.com"},{format:"domain",value:"eacashcard.com"},{format:"domain",value:"eacodigos.com"},{format:"domain",value:"eakorea.co.kr"},{format:"domain",value:"eamobile.com"},{format:"domain",value:"eanordic.com"},{format:"domain",value:"eaplay.com"},{format:"domain",value:"easports.com"},{format:"domain",value:"easports.jp"},{format:"domain",value:"easportsactive.com"},{format:"domain",value:"easportsactiveonline.com"},{format:"domain",value:"easportsfootball.com"},{format:"domain",value:"easportsfootballclub.com"},{format:"domain",value:"easportsmma.com"},{format:"domain",value:"easportsworld.com"},{format:"domain",value:"electronicarts.com"},{format:"domain",value:"electronicarts.fr"},{format:"domain",value:"futpromos.com"},{format:"domain",value:"futunited.com"},{format:"domain",value:"ghostgames.com"},{format:"domain",value:"heroesofdragonage.com"},{format:"domain",value:"hutpromos.com"},{format:"domain",value:"maddenchampionship.com"},{format:"domain",value:"maddenrewards.com"},{format:"domain",value:"maddenseason.info"},{format:"domain",value:"maddenseason.net"},{format:"domain",value:"maddenseason.org"},{format:"domain",value:"maxis.com"},{format:"domain",value:"mysimsracing.com"},{format:"domain",value:"play4free.com"},{format:"domain",value:"playapex.com"},{format:"domain",value:"pogo.com"},{format:"domain",value:"pogobeta.com"},{format:"domain",value:"popcap.com"},{format:"domain",value:"projectapex.com"},{format:"domain",value:"pvzheroes.com"},{format:"domain",value:"spearhead.kr"},{format:"domain",value:"speedhunters.com"},{format:"domain",value:"spore.com"},{format:"domain",value:"ssx3.com"},{format:"domain",value:"starwarsbattlefront.com"},{format:"domain",value:"starwarsbattlefront2.com"},{format:"domain",value:"tiberiumalliances.com"},{format:"domain",value:"tiburon.com"},{format:"domain",value:"tnt-ea.com"},{format:"domain",value:"ultimaforever.com"},{format:"domain",value:"unravel2.com"},{format:"domain",value:"unraveltwo.com"},{format:"domain",value:"visceralgames.com"},{format:"domain",value:"yogify.com"},{format:"domain",value:"anthemgame.com"},{format:"domain",value:"anthemthegame.com"},{format:"domain",value:"apexlegends.com"},{format:"domain",value:"battlefield.com"},{format:"domain",value:"battlefield1943.com"},{format:"domain",value:"battlefield3.com"},{format:"domain",value:"battlefield4.com"},{format:"domain",value:"battlefield5.com"},{format:"domain",value:"battlefieldheroes.com"},{format:"domain",value:"battlefieldv.com"},{format:"domain",value:"battlelog.com"},{format:"domain",value:"bioware.com"},{format:"domain",value:"biowarestore.com"},{format:"domain",value:"eamythic.com"},{format:"domain",value:"eamythic.net"},{format:"domain",value:"cncrivals.com"},{format:"domain",value:"camelot-europe.com"},{format:"domain",value:"camelotherald.com"},{format:"domain",value:"camelotherald.net"},{format:"domain",value:"daoc.net"},{format:"domain",value:"darkageofcamelot.com"},{format:"domain",value:"darkness-risen.com"},{format:"domain",value:"deadspacegame.com"},{format:"domain",value:"dice.se"},{format:"domain",value:"dragonage.com"},{format:"domain",value:"dragonagekeep.com"},{format:"domain",value:"dragonagemovie.com"},{format:"domain",value:"thedreadwolfrises.com"},{format:"domain",value:"dungeonkeeper.cn"},{format:"domain",value:"dungeonkeeper.com"},{format:"domain",value:"dungeonkeeper.com.cn"},{format:"domain",value:"eafootballworld.com"},{format:"domain",value:"fifastreet.com"},{format:"domain",value:"fifastreet3.com"},{format:"domain",value:"frostbite.com"},{format:"domain",value:"industrialtoys.com"},{format:"domain",value:"masseffect.com"},{format:"domain",value:"masseffectarchives.com"},{format:"domain",value:"eamirrorsedge.com"},{format:"domain",value:"mirrorsedge.com"},{format:"domain",value:"mirrorsedge.jp"},{format:"domain",value:"mirrorsedge.net"},{format:"domain",value:"mirrorsedge2.com"},{format:"domain",value:"mirrorsedge2d.com"},{format:"domain",value:"blackboxgames.com"},{format:"domain",value:"eablackbox.com"},{format:"domain",value:"needforspeed.com"},{format:"domain",value:"needforspeedboost.com"},{format:"domain",value:"needforspeeddriftkings.com"},{format:"domain",value:"needforspeedeliminator.com"},{format:"domain",value:"needforspeedlightning.com"},{format:"domain",value:"needforspeedoverdrive.com"},{format:"domain",value:"needforspeedproven.com"},{format:"domain",value:"needforspeedredline.com"},{format:"domain",value:"needforspeedshowdown.com"},{format:"domain",value:"needforspeedstreetkings.com"},{format:"domain",value:"needforspeedtakedown.com"},{format:"domain",value:"needforspeedtherun.com"},{format:"domain",value:"needforspeedtimeattack.com"},{format:"domain",value:"needforspeedundergroundeast.com"},{format:"domain",value:"nfsworld.com"},{format:"domain",value:"teamneedforspeed.com"},{format:"domain",value:"plantsvszombies2.com"},{format:"domain",value:"pvzgw2.com"},{format:"domain",value:"seaofsolitude.com"},{format:"domain",value:"simcity-buildit.com"},{format:"domain",value:"simcity.com"},{format:"domain",value:"skate2.com"},{format:"domain",value:"starwarsfallenorder.com"},{format:"domain",value:"starwarsjedifallenorder.com"},{format:"domain",value:"starwarstheoldrepublic.com"},{format:"domain",value:"swjedifallenorder.com"},{format:"domain",value:"swjfo.com"},{format:"domain",value:"swtor.com"},{format:"domain",value:"swtor.net"},{format:"domain",value:"mysims.com"},{format:"domain",value:"thesims.com"},{format:"domain",value:"thesims3.com"},{format:"domain",value:"thesims4.com"},{format:"domain",value:"thesimssocial.com"},{format:"domain",value:"titanfall.com"},{format:"domain",value:"mythicentertainment.com"},{format:"domain",value:"mythicentertainment.net"},{format:"domain",value:"mythicgames.com"},{format:"domain",value:"ultimaonline.com"},{format:"domain",value:"uo.com"},{format:"domain",value:"uoherald.com"},{format:"domain",value:"xdsummit.com"},{format:"full domain",value:"ea.tt.omtrdc.net"},{format:"full domain",value:"eaassets-a.akamaihd.net"},{format:"domain",value:"eastore.com"},{format:"domain",value:"lordofultima.com"},{format:"domain",value:"origin.com"},{format:"domain",value:"origin.tv"},{format:"full domain",value:"cloudsync-prod.s3.amazonaws.com"},{format:"full domain",value:"origin-a.akamaihd.net"},{format:"full domain",value:"rtm.tnt-ea.com"},{format:"full domain",value:"ssl-lvlt.cdn.ea.com"}],[{format:"domain",value:"disney.asia"},{format:"domain",value:"disney.be"},{format:"domain",value:"disney.bg"},{format:"domain",value:"disney.ca"},{format:"domain",value:"disney.ch"},{format:"domain",value:"disney.co.il"},{format:"domain",value:"disney.co.jp"},{format:"domain",value:"disney.co.kr"},{format:"domain",value:"disney.co.th"},{format:"domain",value:"disney.co.uk"},{format:"domain",value:"disney.co.za"},{format:"domain",value:"disney.com"},{format:"domain",value:"disney.com.au"},{format:"domain",value:"disney.com.br"},{format:"domain",value:"disney.com.hk"},{format:"domain",value:"disney.com.tw"},{format:"domain",value:"disney.cz"},{format:"domain",value:"disney.de"},{format:"domain",value:"disney.dk"},{format:"domain",value:"disney.es"},{format:"domain",value:"disney.fi"},{format:"domain",value:"disney.fr"},{format:"domain",value:"disney.gr"},{format:"domain",value:"disney.hu"},{format:"domain",value:"disney.id"},{format:"domain",value:"disney.in"},{format:"domain",value:"disney.io"},{format:"domain",value:"disney.it"},{format:"domain",value:"disney.my"},{format:"domain",value:"disney.nl"},{format:"domain",value:"disney.no"},{format:"domain",value:"disney.ph"},{format:"domain",value:"disney.pl"},{format:"domain",value:"disney.pt"},{format:"domain",value:"disney.ro"},{format:"domain",value:"disney.ru"},{format:"domain",value:"disney.se"},{format:"domain",value:"disney.sg"},{format:"domain",value:"20thcenturystudios.com.au"},{format:"domain",value:"20thcenturystudios.com.br"},{format:"domain",value:"20thcenturystudios.jp"},{format:"domain",value:"adventuresbydisney.com"},{format:"domain",value:"babble.com"},{format:"domain",value:"babyzone.com"},{format:"domain",value:"bamgrid.com"},{format:"domain",value:"beautyandthebeastmusical.co.uk"},{format:"domain",value:"dilcdn.com"},{format:"domain",value:"disney-asia.com"},{format:"domain",value:"disney-discount.com"},{format:"domain",value:"disney-plus.net"},{format:"domain",value:"disney-portal.my.onetrust.com"},{format:"domain",value:"disney-studio.com"},{format:"domain",value:"disney-studio.net"},{format:"domain",value:"disney.my.sentry.io"},{format:"domain",value:"disneyadsales.com"},{format:"domain",value:"disneyarena.com"},{format:"domain",value:"disneyaulani.com"},{format:"domain",value:"disneybaby.com"},{format:"domain",value:"disneycareers.com"},{format:"domain",value:"disneychannelonstage.com"},{format:"domain",value:"disneychannelroadtrip.com"},{format:"domain",value:"disneycruisebrasil.com"},{format:"domain",value:"disneyenconcert.com"},{format:"domain",value:"disneyiejobs.com"},{format:"domain",value:"disneyinflight.com"},{format:"domain",value:"disneyinternational.com"},{format:"domain",value:"disneyinternationalhd.com"},{format:"domain",value:"disneyjunior.com"},{format:"domain",value:"disneyjuniortreataday.com"},{format:"domain",value:"disneylatino.com"},{format:"domain",value:"disneymagicmoments.co.il"},{format:"domain",value:"disneymagicmoments.co.uk"},{format:"domain",value:"disneymagicmoments.co.za"},{format:"domain",value:"disneymagicmoments.de"},{format:"domain",value:"disneymagicmoments.es"},{format:"domain",value:"disneymagicmoments.fr"},{format:"domain",value:"disneymagicmoments.gen.tr"},{format:"domain",value:"disneymagicmoments.gr"},{format:"domain",value:"disneymagicmoments.it"},{format:"domain",value:"disneymagicmoments.pl"},{format:"domain",value:"disneymagicmomentsme.com"},{format:"domain",value:"disneyme.com"},{format:"domain",value:"disneymeetingsandevents.com"},{format:"domain",value:"disneymovieinsiders.com"},{format:"domain",value:"disneymusicpromotion.com"},{format:"domain",value:"disneynewseries.com"},{format:"domain",value:"disneynow.com"},{format:"domain",value:"disneypeoplesurveys.com"},{format:"domain",value:"disneyplus.bn5x.net"},{format:"domain",value:"disneyplus.com"},{format:"domain",value:"disneyplus.com.ssl.sc.omtrdc.net"},{format:"domain",value:"disneyredirects.com"},{format:"domain",value:"disneysrivieraresort.com"},{format:"domain",value:"disneystore.com"},{format:"domain",value:"disneystreaming.com"},{format:"domain",value:"disneysubscription.com"},{format:"domain",value:"disneytickets.co.uk"},{format:"domain",value:"disneyturkiye.com.tr"},{format:"domain",value:"disneytvajobs.com"},{format:"domain",value:"disneyworld-go.com"},{format:"domain",value:"dssott.com"},{format:"domain",value:"go-disneyworldgo.com"},{format:"domain",value:"go.com"},{format:"domain",value:"mickey.tv"},{format:"domain",value:"moviesanywhere.com"},{format:"domain",value:"nomadlandmovie.ch"},{format:"domain",value:"playmation.com"},{format:"domain",value:"shopdisney.com"},{format:"domain",value:"shops-disney.com"},{format:"domain",value:"sorcerersarena.com"},{format:"domain",value:"spaindisney.com"},{format:"domain",value:"star-brasil.com"},{format:"domain",value:"star-latam.com"},{format:"domain",value:"starwars.com"},{format:"domain",value:"starwarsgalacticstarcruiser.com"},{format:"domain",value:"starwarskids.com"},{format:"domain",value:"streamingdisney.net"},{format:"domain",value:"thestationbymaker.com"},{format:"domain",value:"thisispolaris.com"},{format:"domain",value:"watchdisneyfe.com"},{format:"domain",value:"abc-studios.com"},{format:"domain",value:"abc.com"},{format:"domain",value:"edgedatg.com"},{format:"domain",value:"dmed.technology"},{format:"domain",value:"dtci.co"},{format:"domain",value:"dtci.technology"},{format:"domain",value:"espn.co.uk"},{format:"domain",value:"espn.com"},{format:"domain",value:"espn.net"},{format:"domain",value:"espncdn.com"},{format:"domain",value:"espnqa.com"},{format:"domain",value:"watchespn.com"},{format:"full domain",value:"espn.api.edge.bamgrid.com"},{format:"full domain",value:"espn.hb.omtrdc.net"},{format:"full domain",value:"espndotcom.tt.omtrdc.net"},{format:"domain",value:"hotstar.com"},{format:"domain",value:"hotstar-cdn.net"},{format:"domain",value:"hotstarext.com"},{format:"domain",value:"hsprepack.akamaized.net"},{format:"domain",value:"regexp:^hses[1-7]?.akamaized.net$"},{format:"domain",value:"marvel.com"},{format:"domain",value:"marvel10thanniversary.com"},{format:"domain",value:"marveldimensionofheroes.com"},{format:"domain",value:"marvelparty.net"},{format:"domain",value:"marvelpinball.com"},{format:"domain",value:"marvelsdoubleagent.com"},{format:"domain",value:"marvelspotlightplays.com"},{format:"domain",value:"marvelsuperheroseptember.com"},{format:"domain",value:"marvelsuperwar.com"},{format:"domain",value:"themarvelexperiencetour.com"},{format:"domain",value:"natgeomaps.com"},{format:"domain",value:"nationalgeographic.com"},{format:"domain",value:"nationalgeographicpartners.com"},{format:"domain",value:"ngeo.com"},{format:"domain",value:"starott.com"},{format:"domain",value:"starplus.com"},{format:"domain",value:"star.api.edge.bamgrid.com"},{format:"domain",value:"star.connections.edge.bamgrid.com"},{format:"domain",value:"star.content.edge.bamgrid.com"},{format:"domain",value:"star.playback.edge.bamgrid.com"}],[{format:"domain",value:"visa.be"},{format:"domain",value:"visa.ca"},{format:"domain",value:"visa.cl"},{format:"domain",value:"visa.cn"},{format:"domain",value:"visa.co.ao"},{format:"domain",value:"visa.co.cr"},{format:"domain",value:"visa.co.id"},{format:"domain",value:"visa.co.il"},{format:"domain",value:"visa.co.in"},{format:"domain",value:"visa.co.jp"},{format:"domain",value:"visa.co.ke"},{format:"domain",value:"visa.co.ni"},{format:"domain",value:"visa.co.nz"},{format:"domain",value:"visa.co.th"},{format:"domain",value:"visa.co.uk"},{format:"domain",value:"visa.co.ve"},{format:"domain",value:"visa.co.za"},{format:"domain",value:"visa.com"},{format:"domain",value:"visa.com.ag"},{format:"domain",value:"visa.com.ai"},{format:"domain",value:"visa.com.ar"},{format:"domain",value:"visa.com.au"},{format:"domain",value:"visa.com.az"},{format:"domain",value:"visa.com.bo"},{format:"domain",value:"visa.com.br"},{format:"domain",value:"visa.com.bs"},{format:"domain",value:"visa.com.bz"},{format:"domain",value:"visa.com.cn"},{format:"domain",value:"visa.com.co"},{format:"domain",value:"visa.com.cy"},{format:"domain",value:"visa.com.dm"},{format:"domain",value:"visa.com.do"},{format:"domain",value:"visa.com.ec"},{format:"domain",value:"visa.com.ge"},{format:"domain",value:"visa.com.gt"},{format:"domain",value:"visa.com.gy"},{format:"domain",value:"visa.com.hk"},{format:"domain",value:"visa.com.hn"},{format:"domain",value:"visa.com.hr"},{format:"domain",value:"visa.com.jm"},{format:"domain",value:"visa.com.kh"},{format:"domain",value:"visa.com.kn"},{format:"domain",value:"visa.com.kz"},{format:"domain",value:"visa.com.lc"},{format:"domain",value:"visa.com.lk"},{format:"domain",value:"visa.com.ms"},{format:"domain",value:"visa.com.mx"},{format:"domain",value:"visa.com.my"},{format:"domain",value:"visa.com.ng"},{format:"domain",value:"visa.com.pa"},{format:"domain",value:"visa.com.pe"},{format:"domain",value:"visa.com.ph"},{format:"domain",value:"visa.com.pr"},{format:"domain",value:"visa.com.py"},{format:"domain",value:"visa.com.ru"},{format:"domain",value:"visa.com.sg"},{format:"domain",value:"visa.com.sv"},{format:"domain",value:"visa.com.tr"},{format:"domain",value:"visa.com.tt"},{format:"domain",value:"visa.com.tw"},{format:"domain",value:"visa.com.ua"},{format:"domain",value:"visa.com.uy"},{format:"domain",value:"visa.com.vc"},{format:"domain",value:"visa.com.vi"},{format:"domain",value:"visa.com.vn"},{format:"domain",value:"visa.cz"},{format:"domain",value:"visa.de"},{format:"domain",value:"visa.dk"},{format:"domain",value:"visa.es"},{format:"domain",value:"visa.fi"},{format:"domain",value:"visa.fr"},{format:"domain",value:"visa.gd"},{format:"domain",value:"visa.gp"},{format:"domain",value:"visa.gr"},{format:"domain",value:"visa.hk"},{format:"domain",value:"visa.hu"},{format:"domain",value:"visa.ie"},{format:"domain",value:"visa.is"},{format:"domain",value:"visa.ky"},{format:"domain",value:"visa.lt"},{format:"domain",value:"visa.lv"},{format:"domain",value:"visa.mn"},{format:"domain",value:"visa.mq"},{format:"domain",value:"visa.nl"},{format:"domain",value:"visa.no"},{format:"domain",value:"visa.pl"},{format:"domain",value:"visa.pt"},{format:"domain",value:"visa.ro"},{format:"domain",value:"visa.se"},{format:"domain",value:"visa.sk"},{format:"domain",value:"visa.so"},{format:"domain",value:"visa.sx"},{format:"domain",value:"visa.tc"},{format:"domain",value:"visabg.com"},{format:"domain",value:"visaeurope.at"},{format:"domain",value:"visaeurope.ch"},{format:"domain",value:"visaeurope.lu"},{format:"domain",value:"visaeurope.si"},{format:"domain",value:"visaitalia.com"},{format:"domain",value:"visakorea.com"},{format:"domain",value:"visamiddleeast.com"},{format:"domain",value:"visasoutheasteurope.com"},{format:"domain",value:"finlitsummit.org"},{format:"domain",value:"myvisaluxuryhotels.com"},{format:"domain",value:"visainfinite.ca"},{format:"domain",value:"visainfiniteluxuryhotels.ca"},{format:"domain",value:"visaluxuryhotelcollection.com"},{format:"domain",value:"visaluxuryhotelcollection.com.br"},{format:"domain",value:"visaluxuryhotelcollection.com.mx"},{format:"domain",value:"visaluxuryhotels.com"},{format:"domain",value:"visaluxuryhotels.com.ar"},{format:"domain",value:"visasignaturehotels.com"},{format:"domain",value:"connaissancesfinancierespratiques.ca"},{format:"domain",value:"dnsvisa.com"},{format:"domain",value:"eubluecardvisa.com"},{format:"domain",value:"financialsoccer.ca"},{format:"domain",value:"financialsoccer.com.cn"},{format:"domain",value:"lightbridge.com"},{format:"domain",value:"miamifintechfestival.com"},{format:"domain",value:"mhshosting.com"},{format:"domain",value:"practicalbusinessskills.com"},{format:"domain",value:"practicalmoneyskills.ca"},{format:"domain",value:"practicalmoneyskills.cn"},{format:"domain",value:"practicalmoneyskills.com.cn"},{format:"domain",value:"practicalmoneyskills.jp"},{format:"domain",value:"soccerfinancier.ca"},{format:"domain",value:"torcidadeouro.com"},{format:"domain",value:"vaultify.com"},{format:"domain",value:"vaultify.info"},{format:"domain",value:"vaultify.net"},{format:"domain",value:"visa-atm.com"},{format:"domain",value:"visa-news.jp"},{format:"domain",value:"visabank.org"},{format:"domain",value:"visabusinessinsights.com"},{format:"domain",value:"visacarddesignlab.com"},{format:"domain",value:"visacards.com"},{format:"domain",value:"visacheckout.net"},{format:"domain",value:"visacheckout.org"},{format:"domain",value:"visaconciergelac.com"},{format:"domain",value:"visadigital.com"},{format:"domain",value:"visadigitalconcierge.com"},{format:"domain",value:"visadns.com"},{format:"domain",value:"visadpsonline.us"},{format:"domain",value:"visaeverywhereshop.com"},{format:"domain",value:"visafintechfasttrack.com"},{format:"domain",value:"visafulfillment.com"},{format:"domain",value:"visagiftcard.us"},{format:"domain",value:"visaglobalfinance.com"},{format:"domain",value:"visaicsdirect.com"},{format:"domain",value:"visainfinite.ca"},{format:"domain",value:"visainfinite.cn"},{format:"domain",value:"visanet.net"},{format:"domain",value:"visapay.cn"},{format:"domain",value:"visapcsdirect.com"},{format:"domain",value:"visaplatinum.cn"},{format:"domain",value:"visaplatinum.com.cn"},{format:"domain",value:"visaplus.com"},{format:"domain",value:"visasavingsedge.ca"},{format:"domain",value:"visasignature.co.kr"},{format:"domain",value:"visb.org"}],[{format:"domain",value:"123-hp.com"},{format:"domain",value:"123hplaserjet.com"},{format:"domain",value:"8008206616.com"},{format:"domain",value:"as-hp.ca"},{format:"domain",value:"baterias-hp.com"},{format:"domain",value:"campushp.com"},{format:"domain",value:"colorprotechnology.com"},{format:"domain",value:"compaq.org"},{format:"domain",value:"david-laserscanner.com"},{format:"domain",value:"demoprint.com"},{format:"domain",value:"digitalpack.com"},{format:"domain",value:"eprintsw.com"},{format:"domain",value:"gaming-notebooks.com"},{format:"domain",value:"getprintersupports.com"},{format:"domain",value:"hp-imagine.com"},{format:"domain",value:"hp-infolab.com"},{format:"domain",value:"hp-invent.com"},{format:"domain",value:"hp-invent.info"},{format:"domain",value:"hp-mns.com"},{format:"domain",value:"hp-printing.com"},{format:"domain",value:"hp-webplatform.com"},{format:"domain",value:"hp-ww.com"},{format:"domain",value:"hp.com"},{format:"domain",value:"hp.company"},{format:"domain",value:"hp.io"},{format:"domain",value:"hp3d.com"},{format:"domain",value:"hp3dmetals.com"},{format:"domain",value:"hp3dprinter.com"},{format:"domain",value:"hp3dsamplepromo.com"},{format:"domain",value:"hpallinoneprinter.com"},{format:"domain",value:"hpapplicationscenter.com"},{format:"domain",value:"hpbestbuy.com"},{format:"domain",value:"hpbluecarpet.com"},{format:"domain",value:"hpbluecarpet.net"},{format:"domain",value:"hpbuiltforlearning.com"},{format:"domain",value:"hpbundle.com"},{format:"domain",value:"hpcampus.com"},{format:"domain",value:"hpcatridge.com"},{format:"domain",value:"hpccp.com"},{format:"domain",value:"hpceo.com"},{format:"domain",value:"hpcmw.net"},{format:"domain",value:"hpcodewarsbcn.com"},{format:"domain",value:"hpcomputers.com"},{format:"domain",value:"hpcomputerservices.com"},{format:"domain",value:"hpconnected.com"},{format:"domain",value:"hpconnected.net"},{format:"domain",value:"hpconnected.org"},{format:"domain",value:"hpconnected.us"},{format:"domain",value:"hpconnectedstage.com"},{format:"domain",value:"hpcontinuum.com"},{format:"domain",value:"hpcpi.com"},{format:"domain",value:"hpcu.org"},{format:"domain",value:"hpcustomersupport.com"},{format:"domain",value:"hpcustomersupport.net"},{format:"domain",value:"hpdaas.com"},{format:"domain",value:"hpdesignjetl25500.com"},{format:"domain",value:"hpdesktopcomputer.com"},{format:"domain",value:"hpdownloadstore.com"},{format:"domain",value:"hpdreamcolor.com"},{format:"domain",value:"hpdriver.com"},{format:"domain",value:"hpdrivers.com"},{format:"domain",value:"hpdrivers.org"},{format:"domain",value:"hpeclipse.com"},{format:"domain",value:"hpengage.com"},{format:"domain",value:"hpeprint.com"},{format:"domain",value:"hpeprintcenter.com"},{format:"domain",value:"hpeurope.com"},{format:"domain",value:"hpeventcenter.com"},{format:"domain",value:"hpfaqs.com"},{format:"domain",value:"hpfeedback.com"},{format:"domain",value:"hpgift.com"},{format:"domain",value:"hpgpas.com"},{format:"domain",value:"hpgraphicspartners.com"},{format:"domain",value:"hpiie.org"},{format:"domain",value:"hpinc.info"},{format:"domain",value:"hpinc.net"},{format:"domain",value:"hpindigopress.com"},{format:"domain",value:"hpinkjet.com"},{format:"domain",value:"hpinstantink.ca"},{format:"domain",value:"hpinstantink.com"},{format:"domain",value:"hpkeyboard.com"},{format:"domain",value:"hplaptop.com"},{format:"domain",value:"hplaptopbattery.com"},{format:"domain",value:"hplargeformatremote.com"},{format:"domain",value:"hplatexknowledgecenter.com"},{format:"domain",value:"hplfmedia.com"},{format:"domain",value:"hplip.net"},{format:"domain",value:"hplipopensource.com"},{format:"domain",value:"hpmarketplace.com"},{format:"domain",value:"hpmemorychips.com"},{format:"domain",value:"hpmicrcartridge.com"},{format:"domain",value:"hpmini.com"},{format:"domain",value:"hpmobile.com"},{format:"domain",value:"hpofficejetprinter.com"},{format:"domain",value:"hponlinehelp.com"},{format:"domain",value:"hponlineprinting.com"},{format:"domain",value:"hppage5000.com"},{format:"domain",value:"hppavillionlaptop.com"},{format:"domain",value:"hpphotoscanners.com"},{format:"domain",value:"hpprinterdrivers.com"},{format:"domain",value:"hpprinterinstalls.com"},{format:"domain",value:"hpprintersupplies.com"},{format:"domain",value:"hpsalescentral.com"},{format:"domain",value:"hpserver.com"},{format:"domain",value:"hpservices.com"},{format:"domain",value:"hpshooping.com"},{format:"domain",value:"hpshop.com"},{format:"domain",value:"hpshoping.com"},{format:"domain",value:"hpshopping.hk"},{format:"domain",value:"hpsignage.com"},{format:"domain",value:"hpsmart.com"},{format:"domain",value:"hpsmarts.com"},{format:"domain",value:"hpsmartstage.com"},{format:"domain",value:"hpsmartupdate.com"},{format:"domain",value:"hpsoftware.com"},{format:"domain",value:"hpspeaker.com"},{format:"domain",value:"hpsprocket.com"},{format:"domain",value:"hpsso.com"},{format:"domain",value:"hpstore-china.com"},{format:"domain",value:"hpstore-emea.com"},{format:"domain",value:"hpstore.cn"},{format:"domain",value:"hpstore.com"},{format:"domain",value:"hpstorethailand.com"},{format:"domain",value:"hpsupport.com"},{format:"domain",value:"hpsuresupply.com"},{format:"domain",value:"hptechventures.com"},{format:"domain",value:"hpto.net"},{format:"domain",value:"hptouch.com"},{format:"domain",value:"hptouchpointmanager.com"},{format:"domain",value:"hptrainingcenter.com"},{format:"domain",value:"hpuae.com"},{format:"domain",value:"hpuniversity.info"},{format:"domain",value:"hpusertraining.com"},{format:"domain",value:"hpveer.com"},{format:"domain",value:"hpvirtualthin.com"},{format:"domain",value:"hpwallart.com"},{format:"domain",value:"hpwellnesscentral.com"},{format:"domain",value:"hpwsn.com"},{format:"domain",value:"i-123-hp.com"},{format:"domain",value:"inkchoice.com"},{format:"domain",value:"instantink.com"},{format:"domain",value:"leavinghpinc.com"},{format:"domain",value:"life-global.org"},{format:"domain",value:"myhpsupport.com"},{format:"domain",value:"printeron.com"},{format:"domain",value:"printersetupsupport.com"},{format:"domain",value:"printspots.com"},{format:"domain",value:"printspots.net"},{format:"domain",value:"serviceshp.com"},{format:"domain",value:"thecompaqstore.com"},{format:"domain",value:"touchsmartpc.com"},{format:"domain",value:"touchsmartpc.net"},{format:"domain",value:"touchsmartpc.org"},{format:"domain",value:"workstations.tv"},{format:"domain",value:"www8-hp.com"},{format:"domain",value:"xn--6eup7j.com"},{format:"domain",value:"xn--6eup7j.net"},{format:"full domain",value:"hpstore.corpmerchandise.com"}],[{format:"domain",value:"1degree.com.au"},{format:"domain",value:"adelaidenow.com.au"},{format:"domain",value:"adhelpnews.com"},{format:"domain",value:"api.news"},{format:"domain",value:"bestrecipes.com.au"},{format:"domain",value:"bigcharts.com"},{format:"domain",value:"bodyandsoul.com.au"},{format:"domain",value:"bridge-studio.co.uk"},{format:"domain",value:"cairnspost.com.au"},{format:"domain",value:"cnivogue.com.au"},{format:"domain",value:"couriermail.com.au"},{format:"domain",value:"dailytelegraph.com.au"},{format:"domain",value:"delicious.com.au"},{format:"domain",value:"escape.com.au"},{format:"domain",value:"fnlondon.com"},{format:"domain",value:"geelongadvertiser.com.au"},{format:"domain",value:"goldcoastbulletin.com.au"},{format:"domain",value:"heraldsun.com.au"},{format:"domain",value:"huanyuju.com"},{format:"domain",value:"intheknow.com.au"},{format:"domain",value:"kidspot.com.au"},{format:"domain",value:"mansionglobal.com"},{format:"domain",value:"marketwatch.com"},{format:"domain",value:"nativeincolour.com.au"},{format:"domain",value:"newcastlenewslocal.com.au"},{format:"domain",value:"news.co.uk"},{format:"domain",value:"news.com.au"},{format:"domain",value:"news.net.au"},{format:"domain",value:"newsadds.com.au"},{format:"domain",value:"newsamerica.com"},{format:"domain",value:"newsapi.com.au"},{format:"domain",value:"newscareers.co.uk"},{format:"domain",value:"newscdn.com.au"},{format:"domain",value:"newscommercial.co.uk"},{format:"domain",value:"newsconcierge.com.au"},{format:"domain",value:"newscorp.com"},{format:"domain",value:"newscorpaustralia.com"},{format:"domain",value:"newslicensing.co.uk"},{format:"domain",value:"newsprestigenetwork.com.au"},{format:"domain",value:"newsprinters.co.uk"},{format:"domain",value:"newssyndication.com"},{format:"domain",value:"newsukadops.com"},{format:"domain",value:"newsxtend.com.au"},{format:"domain",value:"nlm.io"},{format:"domain",value:"ntnews.com.au"},{format:"domain",value:"placemyad.com.au"},{format:"domain",value:"savvyshopper.net.au"},{format:"domain",value:"storyful.com"},{format:"domain",value:"supercoach.com.au"},{format:"domain",value:"taste.com.au"},{format:"domain",value:"theaustralian.com.au"},{format:"domain",value:"thechronicle.com.au"},{format:"domain",value:"themercury.com.au"},{format:"domain",value:"themessengeradelaide.com.au"},{format:"domain",value:"townsvillebulletin.com.au"},{format:"domain",value:"weeklytimesnow.com.au"},{format:"domain",value:"whereilive.com.au"},{format:"domain",value:"whimn.com.au"},{format:"domain",value:"wireless.radio"},{format:"domain",value:"wirelessgroup.co.uk"},{format:"domain",value:"barrons-advisor.com"},{format:"domain",value:"barrons-conferences.com"},{format:"domain",value:"barrons.com"},{format:"domain",value:"wsjbarrons.com"},{format:"domain",value:"djreprints.com"},{format:"domain",value:"dowjones.com"},{format:"domain",value:"dowjones.io"},{format:"domain",value:"dowjoneson.com"},{format:"domain",value:"bookclubgirl.com"},{format:"domain",value:"collins.co.uk"},{format:"domain",value:"collins.in"},{format:"domain",value:"egmontbooks.co.uk"},{format:"domain",value:"epicreads.com"},{format:"domain",value:"harperacademic.com"},{format:"domain",value:"harperapps.com"},{format:"domain",value:"harpercollins.ca"},{format:"domain",value:"harpercollins.co.in"},{format:"domain",value:"harpercollins.co.uk"},{format:"domain",value:"harpercollins.com"},{format:"domain",value:"harpercollins.com.au"},{format:"domain",value:"harpercollinsadvantage.com"},{format:"domain",value:"harpercollinschildrensbooks.co.uk"},{format:"domain",value:"harpercollinschristian.com"},{format:"domain",value:"harpercollinsspeakersbureau.com"},{format:"domain",value:"hcpdts.com"},{format:"domain",value:"librarylovefest.com"},{format:"domain",value:"natgeokidsbooks.co.uk"},{format:"domain",value:"shelfstuff.com"},{format:"domain",value:"nypost.com"},{format:"domain",value:"nypost.help"},{format:"domain",value:"nypostreprints.com"},{format:"domain",value:"flatmates.com.au"},{format:"domain",value:"hackday.com.au"},{format:"domain",value:"hometrack.com.au"},{format:"domain",value:"housing.com"},{format:"domain",value:"housingcdn.com"},{format:"domain",value:"inventorship.com.au"},{format:"domain",value:"ippstatic.com"},{format:"domain",value:"iproperty.com"},{format:"domain",value:"iproperty.com.my"},{format:"domain",value:"iproperty.com.sg"},{format:"domain",value:"makaan.com"},{format:"domain",value:"move.com"},{format:"domain",value:"moveaws.com"},{format:"domain",value:"myfun.com"},{format:"domain",value:"property.com.au"},{format:"domain",value:"proptiger.com"},{format:"domain",value:"rea-asia.com"},{format:"domain",value:"rea-group.com"},{format:"domain",value:"rea.design"},{format:"domain",value:"rea.global"},{format:"domain",value:"rea.io"},{format:"domain",value:"rea.tech"},{format:"domain",value:"realcommercial.com.au"},{format:"domain",value:"realestate.com.au"},{format:"domain",value:"realtor.com"},{format:"domain",value:"reastatic.net"},{format:"domain",value:"rumah123.com"},{format:"domain",value:"smartexpos.com"},{format:"domain",value:"smartline.com.au"},{format:"domain",value:"spacely.com.au"},{format:"domain",value:"squarefoot.com.hk"},{format:"domain",value:"thinkofliving.com"},{format:"domain",value:"dreamteamfc.com"},{format:"domain",value:"page3.com"},{format:"domain",value:"sunbingo.co.uk"},{format:"domain",value:"talksport.com"},{format:"domain",value:"thescottishsun.co.uk"},{format:"domain",value:"thesun.co.uk"},{format:"domain",value:"thesun.ie"},{format:"domain",value:"driving.co.uk"},{format:"domain",value:"mytimesplus.co.uk"},{format:"domain",value:"sportswomanoftheyear.co.uk"},{format:"domain",value:"sportswomenoftheyear.co.uk"},{format:"domain",value:"the-tls.co.uk"},{format:"domain",value:"thesundaytimes.co.uk"},{format:"domain",value:"thetimes.co.uk"},{format:"domain",value:"thetimes.ie"},{format:"domain",value:"timesmembership.com"},{format:"domain",value:"careerjournal.com"},{format:"domain",value:"collegejournal.com"},{format:"domain",value:"opinionjournal.com"},{format:"domain",value:"realestatejournal.com"},{format:"domain",value:"startupjournal.com"},{format:"domain",value:"wsj.com"},{format:"domain",value:"wsj.jobs"},{format:"domain",value:"wsj.net"},{format:"domain",value:"wsjmediakit.com"},{format:"domain",value:"wsjplus.com"},{format:"domain",value:"wsjshop.com"},{format:"domain",value:"wsjwine.com"}],[{format:"full domain",value:"3dns-1.adobe.com"},{format:"full domain",value:"3dns-2.adobe.com"},{format:"full domain",value:"3dns-3.adobe.com"},{format:"full domain",value:"3dns-4.adobe.com"},{format:"full domain",value:"3dns-5.adobe.com"},{format:"full domain",value:"3dns.adobe.com"},{format:"full domain",value:"activate-sea.adobe.com"},{format:"full domain",value:"activate-sjc0.adobe.com"},{format:"full domain",value:"activate.adobe.com"},{format:"full domain",value:"activate.wip1.adobe.com"},{format:"full domain",value:"activate.wip2.adobe.com"},{format:"full domain",value:"activate.wip3.adobe.com"},{format:"full domain",value:"activate.wip4.adobe.com"},{format:"full domain",value:"adobe-dns-1.adobe.com"},{format:"full domain",value:"adobe-dns-2.adobe.com"},{format:"full domain",value:"adobe-dns-3.adobe.com"},{format:"full domain",value:"adobe-dns-4.adobe.com"},{format:"full domain",value:"adobe-dns.adobe.com"},{format:"full domain",value:"adobeereg.com"},{format:"full domain",value:"crl.versign.net"},{format:"full domain",value:"ereg.adobe.com"},{format:"full domain",value:"ereg.wip.adobe.com"},{format:"full domain",value:"ereg.wip1.adobe.com"},{format:"full domain",value:"ereg.wip2.adobe.com"},{format:"full domain",value:"ereg.wip3.adobe.com"},{format:"full domain",value:"ereg.wip4.adobe.com"},{format:"full domain",value:"hl2rcv.adobe.com"},{format:"full domain",value:"hlrcv.stage.adobe.com"},{format:"full domain",value:"lm.licenses.adobe.com"},{format:"full domain",value:"lmlicenses.wip4.adobe.com"},{format:"full domain",value:"na1r.services.adobe.com"},{format:"full domain",value:"ood.opsource.net"},{format:"full domain",value:"practivate.adobe"},{format:"full domain",value:"practivate.adobe.com"},{format:"full domain",value:"practivate.adobe.ipp"},{format:"full domain",value:"practivate.adobe.newoa"},{format:"full domain",value:"practivate.adobe.ntp"},{format:"full domain",value:"wip.adobe.com"},{format:"full domain",value:"wip1.adobe.com"},{format:"full domain",value:"wip2.adobe.com"},{format:"full domain",value:"wip3.adobe.com"},{format:"full domain",value:"wip4.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip100.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip101.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip102.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip103.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip104.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip105.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip106.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip107.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip108.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip109.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip110.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip111.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip112.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip113.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip114.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip115.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip116.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip117.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip118.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip119.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip120.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip121.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip122.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip123.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip124.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip125.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip30.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip31.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip32.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip33.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip34.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip35.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip36.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip37.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip38.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip39.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip40.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip41.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip42.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip43.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip44.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip45.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip46.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip47.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip48.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip49.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip50.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip51.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip52.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip53.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip54.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip55.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip56.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip57.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip58.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip59.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip60.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip61.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip62.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip63.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip64.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip65.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip66.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip67.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip68.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip69.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip70.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip71.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip72.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip73.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip74.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip75.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip76.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip77.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip78.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip79.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip80.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip81.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip82.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip83.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip84.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip85.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip86.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip87.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip88.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip89.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip90.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip91.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip92.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip93.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip94.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip95.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip96.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip97.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip98.adobe.com"},{format:"full domain",value:"wwis-dubc1-vip99.adobe.com"}],[{format:"domain",value:"accbusiness.com"},{format:"domain",value:"atandt.com"},{format:"domain",value:"att-bundles.com"},{format:"domain",value:"att-japan.com"},{format:"domain",value:"att-mail.com"},{format:"domain",value:"att-promotions.com"},{format:"domain",value:"att-rsvp.com"},{format:"domain",value:"att.cn"},{format:"domain",value:"att.com"},{format:"domain",value:"att.jobs"},{format:"domain",value:"att.net"},{format:"domain",value:"att.tv"},{format:"domain",value:"attalascom.com"},{format:"domain",value:"attbelieves.com"},{format:"domain",value:"attbusiness.net"},{format:"domain",value:"attcenter.com"},{format:"domain",value:"attcollaborate.com"},{format:"domain",value:"attcorp.cn"},{format:"domain",value:"attexperts.com"},{format:"domain",value:"attglobal.net"},{format:"domain",value:"attinnovationspace.com"},{format:"domain",value:"attinternetservice.com"},{format:"domain",value:"attjoy.com"},{format:"domain",value:"attnetclient.com"},{format:"domain",value:"attonlineoffers.com"},{format:"domain",value:"attproxy.com"},{format:"domain",value:"attpublicpolicy.com"},{format:"domain",value:"attpurchasing.com"},{format:"domain",value:"attsavings.com"},{format:"domain",value:"attspecial.com"},{format:"domain",value:"attssl.com"},{format:"domain",value:"attstadium.com"},{format:"domain",value:"attsuppliers.com"},{format:"domain",value:"atttvnow.com"},{format:"domain",value:"attuverseoffers.com"},{format:"domain",value:"attuverseonline.com"},{format:"domain",value:"attvoip.com"},{format:"domain",value:"attwifi.com"},{format:"domain",value:"attwirelessinternet.com"},{format:"domain",value:"attwirelessonline.com"},{format:"domain",value:"attwirelesssolutions.com"},{format:"domain",value:"bellsouth.net"},{format:"domain",value:"budatt.com"},{format:"domain",value:"cobatt.com"},{format:"domain",value:"currently.com"},{format:"domain",value:"currently.net"},{format:"domain",value:"directvbusinessmarket.com"},{format:"domain",value:"enterprisepaging.com"},{format:"domain",value:"itcanwait.com"},{format:"domain",value:"mymmode.com"},{format:"domain",value:"naturalvoices.com"},{format:"domain",value:"nettyinternet.com"},{format:"domain",value:"openapiplatform.com"},{format:"domain",value:"openapiservice.com"},{format:"domain",value:"patentgold.net"},{format:"domain",value:"paygonline.com"},{format:"domain",value:"raponlinereview.com"},{format:"domain",value:"signalbar.com"},{format:"domain",value:"sundayready.com"},{format:"domain",value:"synaptic.net"},{format:"domain",value:"thanksloyalty.com"},{format:"domain",value:"tvpromise.com"},{format:"domain",value:"uverse.com"},{format:"domain",value:"webhosting.com"},{format:"domain",value:"att-idns.net"},{format:"domain",value:"attdns.com"},{format:"domain",value:"attdns.net"},{format:"domain",value:"na-att-idns.net"},{format:"domain",value:"audiencenetwork.com"},{format:"domain",value:"audiencenetwork.tv"},{format:"domain",value:"cabletvdirectv.com"},{format:"domain",value:"dierectv.com"},{format:"domain",value:"dirctv.com"},{format:"domain",value:"direcpath.com"},{format:"domain",value:"direcpath.net"},{format:"domain",value:"directtv-deals.tv"},{format:"domain",value:"directtv-dish.com"},{format:"domain",value:"dkrecttv.com"},{format:"domain",value:"directtv.net"},{format:"domain",value:"directtvdeals.tv"},{format:"domain",value:"directtvreviews.com"},{format:"domain",value:"directv-4-you.com"},{format:"domain",value:"directv-newyork.com"},{format:"domain",value:"directv.com"},{format:"domain",value:"directvadsales.com"},{format:"domain",value:"directvatlantaga.com"},{format:"domain",value:"directvboston.com"},{format:"domain",value:"directvbundles.com"},{format:"domain",value:"directvbusiness.com"},{format:"domain",value:"directvcincinnatioh.com"},{format:"domain",value:"directvcinema.com"},{format:"domain",value:"directvconnect.com"},{format:"domain",value:"directvcookevilletn.com"},{format:"domain",value:"directvcrossvilletn.com"},{format:"domain",value:"directvdealer.com"},{format:"domain",value:"directvdeals.com"},{format:"domain",value:"directvdealsnow.com"},{format:"domain",value:"directvdsl.tv"},{format:"domain",value:"directvforhotels.com"},{format:"domain",value:"directvgrandslam.com"},{format:"domain",value:"directvhouston.com"},{format:"domain",value:"directvinternet.com"},{format:"domain",value:"directvkentucky.com"},{format:"domain",value:"directvlebanontn.com"},{format:"domain",value:"directvlosangeles.com"},{format:"domain",value:"directvmetropolisil.com"},{format:"domain",value:"directvmonitoring.com"},{format:"domain",value:"directvmurfreesborotn.com"},{format:"domain",value:"directvnewhampshire.com"},{format:"domain",value:"directvnow.com"},{format:"domain",value:"directvoffercodes.com"},{format:"domain",value:"directvonline.com"},{format:"domain",value:"directvplans.com"},{format:"domain",value:"directvpomise.com"},{format:"domain",value:"directvpromise.com"},{format:"domain",value:"directvpromotions.com"},{format:"domain",value:"directvrebate.com"},{format:"domain",value:"directvrichmond.com"},{format:"domain",value:"directvsavings.com"},{format:"domain",value:"directvsports.com"},{format:"domain",value:"directvsundayticket.com"},{format:"domain",value:"direectv.com"},{format:"domain",value:"diretv.com"},{format:"domain",value:"dtv2009offers.com"},{format:"domain",value:"freedirecttvspecial.com"},{format:"domain",value:"getdirect.tv"},{format:"domain",value:"hddirectv.com"},{format:"domain",value:"le-direct.tv"},{format:"domain",value:"mydirectgroove.com"},{format:"domain",value:"mydirectvchannels.com"},{format:"domain",value:"redzonechannel.com"},{format:"domain",value:"txdirectv.com"},{format:"domain",value:"xandr.com"},{format:"domain",value:"attwatchtv.com"},{format:"domain",value:"dtvce.com"}],[{format:"domain",value:"10xfotolia.com"},{format:"domain",value:"2o7.net"},{format:"domain",value:"acrobat.com"},{format:"domain",value:"adbecrsl.com"},{format:"domain",value:"adobe-aemassets-value.com"},{format:"domain",value:"adobe-audience-finder.com"},{format:"domain",value:"adobe-video-partner-finder.com"},{format:"domain",value:"adobe.com"},{format:"domain",value:"adobe.ly"},{format:"domain",value:"adobeaemcloud.com"},{format:"domain",value:"adobeaemcloud.net"},{format:"domain",value:"adobeawards.com"},{format:"domain",value:"adobecontent.io"},{format:"domain",value:"adobecreativityawards.com"},{format:"domain",value:"adobedc.cn"},{format:"domain",value:"adobedc.net"},{format:"domain",value:"adobedemo.com"},{format:"domain",value:"adobedtm.com"},{format:"domain",value:"adobeexchange.com"},{format:"domain",value:"adobeexperienceawards.com"},{format:"domain",value:"adobegov.com"},{format:"domain",value:"adobehiddentreasures.com"},{format:"domain",value:"adobejanus.com"},{format:"domain",value:"adobeku.com"},{format:"domain",value:"adobelanding.com"},{format:"domain",value:"adobelogin.com"},{format:"domain",value:"adobeoobe.com"},{format:"domain",value:"adobeplatinumclub.com"},{format:"domain",value:"adobeprojectm.com"},{format:"domain",value:"adobesc.com"},{format:"domain",value:"adobesign.com"},{format:"domain",value:"adobesigncdn.com"},{format:"domain",value:"adobespark.com"},{format:"domain",value:"adobess.com"},{format:"domain",value:"adobestock.com"},{format:"domain",value:"adobetag.com"},{format:"domain",value:"adobetarget.com"},{format:"domain",value:"adobetcstrialdvd.com"},{format:"domain",value:"adobetechcomm.com"},{format:"domain",value:"adobetechcommcallback.com"},{format:"domain",value:"adobetechcommdemo.com"},{format:"domain",value:"adobexdplatform.com"},{format:"domain",value:"assetsadobe.com"},{format:"domain",value:"authorxml.com"},{format:"domain",value:"businesscatalyst.com"},{format:"domain",value:"ccnsite.com"},{format:"domain",value:"ccpsx.com"},{format:"domain",value:"demdex.net"},{format:"domain",value:"dollarfotoclub.com"},{format:"domain",value:"dollarphotoclub.com"},{format:"domain",value:"dollarphotosclub.com"},{format:"domain",value:"douwriteright.com"},{format:"domain",value:"echocdn.com"},{format:"domain",value:"echosign.com"},{format:"domain",value:"edgefonts.net"},{format:"domain",value:"enablementadobe.com"},{format:"domain",value:"ftcdn.net"},{format:"domain",value:"gostorego.com"},{format:"domain",value:"imagineecommerce.com"},{format:"domain",value:"macromedia.com"},{format:"domain",value:"magentoliveconference.com"},{format:"domain",value:"marketing-nirvana.com"},{format:"domain",value:"omniture.com"},{format:"domain",value:"omtrdc.net"},{format:"domain",value:"photoshop.com"},{format:"domain",value:"placesdocs.com"},{format:"domain",value:"sundanceignite2016.com"},{format:"domain",value:"worldsecureemail.com"},{format:"domain",value:"worldsecuresystems.com"},{format:"domain",value:"adobe.io"},{format:"domain",value:"developria.com"},{format:"domain",value:"behance.net"},{format:"domain",value:"s2stagehance.com"},{format:"domain",value:"adobecc.com"},{format:"domain",value:"adobecce.com"},{format:"domain",value:"adobeccstatic.com"},{format:"domain",value:"creativecloud.com"},{format:"domain",value:"creativesdk.com"},{format:"domain",value:"cotolia.com"},{format:"domain",value:"ffotolia.com"},{format:"domain",value:"fiotolia.com"},{format:"domain",value:"foftolia.com"},{format:"domain",value:"fonolia.com"},{format:"domain",value:"fotiolia.com"},{format:"domain",value:"fotoiia.com"},{format:"domain",value:"fotolia-noticias.com"},{format:"domain",value:"fotolia.cc"},{format:"domain",value:"fotolia.com"},{format:"domain",value:"fotolia.tv"},{format:"domain",value:"fotolja.com"},{format:"domain",value:"fptolia.com"},{format:"domain",value:"gfotolia.com"},{format:"domain",value:"motolia.com"},{format:"domain",value:"photolia.net"},{format:"domain",value:"tenbyfotolia.com"},{format:"domain",value:"votolia.com"},{format:"domain",value:"bluefootcms.com"},{format:"domain",value:"mageconf.com"},{format:"domain",value:"mageconf.com.ua"},{format:"domain",value:"magento.com"},{format:"domain",value:"magento.net"},{format:"domain",value:"magentocommerce.com"},{format:"domain",value:"magentomobile.com"},{format:"domain",value:"marketing-cloud.com"},{format:"domain",value:"marketo.co.uk"},{format:"domain",value:"marketo.com"},{format:"domain",value:"marketo.net"},{format:"domain",value:"marketo.tv"},{format:"domain",value:"marketodesigner.com"},{format:"domain",value:"marketolive.com"},{format:"domain",value:"mktdns.com"},{format:"domain",value:"mkto-c0100.com"},{format:"domain",value:"mktorest.com"},{format:"domain",value:"mktroute.com"},{format:"domain",value:"mobilemarketo.com"},{format:"domain",value:"revenue-performance-management.com"},{format:"domain",value:"toutapp.com"},{format:"domain",value:"compresspdf.new"},{format:"domain",value:"pdf.new"},{format:"domain",value:"sign.new"},{format:"domain",value:"scene7.com"},{format:"domain",value:"advertising.adobe.com"},{format:"domain",value:"tubemogul.com"},{format:"domain",value:"typekit.com"},{format:"domain",value:"typekit.net"}],[{format:"domain",value:"100classicbooks.com"},{format:"domain",value:"amiibo.com"},{format:"domain",value:"ayudanintendo.com"},{format:"domain",value:"bowsersinsidestory.com"},{format:"domain",value:"excitebots.com"},{format:"domain",value:"flipnotestudio.com"},{format:"domain",value:"gloryofheracles.com"},{format:"domain",value:"hackyourconsole.com"},{format:"domain",value:"kirbysuperstarultra.com"},{format:"domain",value:"kirbysepicyarn.com"},{format:"domain",value:"legendofzelda.cn"},{format:"domain",value:"legendofzelda.com.cn"},{format:"domain",value:"miitomo.com"},{format:"domain",value:"miitomo.com.cn"},{format:"domain",value:"miiverse.com"},{format:"domain",value:"nentindo.net"},{format:"domain",value:"nintendo-europe-sales.com"},{format:"domain",value:"nintendo-europe.com"},{format:"domain",value:"nintendo.at"},{format:"domain",value:"nintendo.be"},{format:"domain",value:"nintendo.ch"},{format:"domain",value:"nintendo.co.jp"},{format:"domain",value:"nintendo.co.kr"},{format:"domain",value:"nintendo.co.uk"},{format:"domain",value:"nintendo.co.za"},{format:"domain",value:"nintendo.com"},{format:"domain",value:"nintendo.com.hk"},{format:"domain",value:"nintendo.com.pt"},{format:"domain",value:"nintendo.de"},{format:"domain",value:"nintendo.dk"},{format:"domain",value:"nintendo.es"},{format:"domain",value:"nintendo.eu"},{format:"domain",value:"nintendo.fi"},{format:"domain",value:"nintendo.fr"},{format:"domain",value:"nintendo.it"},{format:"domain",value:"nintendo.net"},{format:"domain",value:"nintendo.nl"},{format:"domain",value:"nintendo.no"},{format:"domain",value:"nintendo.pt"},{format:"domain",value:"nintendo.ru"},{format:"domain",value:"nintendo.se"},{format:"domain",value:"nintendo.tw"},{format:"domain",value:"nintendo3ds.com"},{format:"domain",value:"nintendodsi.com"},{format:"domain",value:"nintendoeurope.com"},{format:"domain",value:"nintendolabo.cn"},{format:"domain",value:"nintendonetwork.net"},{format:"domain",value:"nintendonyc.com"},{format:"domain",value:"nintendostore.com"},{format:"domain",value:"nintendoswitch.cn"},{format:"domain",value:"nintendoswitch.com"},{format:"domain",value:"nintendoswitch.com.cn"},{format:"domain",value:"nintendoswitch.net"},{format:"domain",value:"nintendoswitchtogether.com"},{format:"domain",value:"personaltrainermath.com"},{format:"domain",value:"playnintendo.com"},{format:"domain",value:"supersmashbros.cn"},{format:"domain",value:"supersmashbros.com.cn"},{format:"domain",value:"thelegendarystarfy.com"},{format:"domain",value:"thewonderful101.com"},{format:"domain",value:"wariolandshakeit.com"},{format:"domain",value:"wariowarediy.com"},{format:"domain",value:"yoshisnewisland.com"},{format:"domain",value:"ac-pocketcamp.com"},{format:"domain",value:"diddykongracing.com"},{format:"domain",value:"dkr.com"},{format:"domain",value:"donkeykongcountryreturns.com"},{format:"domain",value:"fire-emblem-heroes.com"},{format:"domain",value:"fireemblemawakening.com"},{format:"domain",value:"dialga.com"},{format:"domain",value:"giratina.com"},{format:"domain",value:"kyurem.com"},{format:"domain",value:"pokedex3d.com"},{format:"domain",value:"pokemon-moon.com"},{format:"domain",value:"pokemon-sun.com"},{format:"domain",value:"pokemon-sunmoon.com"},{format:"domain",value:"pokemon.com"},{format:"domain",value:"pokemonbank.com"},{format:"domain",value:"pokemonblackwhite.com"},{format:"domain",value:"pokemonbw.com"},{format:"domain",value:"pokemonchampionships.com"},{format:"domain",value:"pokemongoldsilver.com"},{format:"domain",value:"pokemonhome.com"},{format:"domain",value:"pokemonletsgoeevee.com"},{format:"domain",value:"pokemonletsgopikachu.com"},{format:"domain",value:"pokemonmysterydungeon.com"},{format:"domain",value:"pokemonpicross.com"},{format:"domain",value:"pokemonplatinum.com"},{format:"domain",value:"pokemonrubysapphire.com"},{format:"domain",value:"pokemonsunmoon.com"},{format:"domain",value:"pokemonswordshield.com"},{format:"domain",value:"pokemonultrasunmoon.com"},{format:"domain",value:"pokemonvgc.com"},{format:"domain",value:"pokemonwifi.net"},{format:"domain",value:"xn--mts47c3w9b1qr.cn"},{format:"domain",value:"xn--mts47c3w9b1qr.net"},{format:"domain",value:"splatoon2tournament.com"},{format:"domain",value:"starfox.com"},{format:"domain",value:"drmario-world.com"},{format:"domain",value:"marioandluigidreamteam.com"},{format:"domain",value:"mariobroswii.com"},{format:"domain",value:"mariokart.cn"},{format:"domain",value:"mariokart.com.cn"},{format:"domain",value:"mariokart7.com"},{format:"domain",value:"mariokart8.com"},{format:"domain",value:"mariosupersluggers.com"},{format:"domain",value:"newsupermariobrosu.com"},{format:"domain",value:"supermario.com"},{format:"domain",value:"supermario3dworld.com"},{format:"domain",value:"supermariobros.com.cn"},{format:"domain",value:"supermariogalaxy.com"},{format:"domain",value:"supermariorun.com"},{format:"domain",value:"superpapermario.com"},{format:"domain",value:"nintendowii.com"},{format:"domain",value:"wii-u.com"},{format:"domain",value:"wiifit.com"},{format:"domain",value:"wiifitu.com"},{format:"domain",value:"wiipartyu.com"},{format:"domain",value:"wiisports.com"},{format:"domain",value:"wiisportsresort.com"},{format:"domain",value:"wiiugamepad.com"},{format:"domain",value:"wiivc.net"},{format:"domain",value:"xenoblade.com"}],[{format:"domain",value:"cisco"},{format:"domain",value:"academynetriders.com"},{format:"domain",value:"cciernslabs.com"},{format:"domain",value:"cciesecuritylabs.com"},{format:"domain",value:"ccievoicelabs.com"},{format:"domain",value:"ccna5.net"},{format:"domain",value:"cisco-returns.com"},{format:"domain",value:"cisco-warrantyfinder.com"},{format:"domain",value:"cisco.cn"},{format:"domain",value:"cisco.com"},{format:"domain",value:"cisco.com.cn"},{format:"domain",value:"cisco.mobi"},{format:"domain",value:"ciscoccservice.com"},{format:"domain",value:"ciscoconnectcloud.com"},{format:"domain",value:"ciscoconnectcloud.net"},{format:"domain",value:"ciscoconnectcloud.org"},{format:"domain",value:"ciscocontest.com"},{format:"domain",value:"ciscoerate.com"},{format:"domain",value:"ciscofax.com"},{format:"domain",value:"ciscoinvestments.com"},{format:"domain",value:"ciscojabbervideo.net"},{format:"domain",value:"ciscokinetic.com"},{format:"domain",value:"ciscoknowledgenetwork.com"},{format:"domain",value:"ciscolearningsociety.org"},{format:"domain",value:"ciscolearningsystem.com"},{format:"domain",value:"ciscolive.com"},{format:"domain",value:"cisconetspace.com"},{format:"domain",value:"cisconetspace.info"},{format:"domain",value:"cisconetspace.net"},{format:"domain",value:"cisconetapp.com"},{format:"domain",value:"ciscopartnermarketing.com"},{format:"domain",value:"ciscopowercube.com"},{format:"domain",value:"ciscoprice.com"},{format:"domain",value:"ciscoresearch.com"},{format:"domain",value:"ciscosoftware.com"},{format:"domain",value:"ciscospark.ca"},{format:"domain",value:"ciscospark.com"},{format:"domain",value:"ciscospark.jp"},{format:"domain",value:"ciscotaccc.com"},{format:"domain",value:"ciscotr.com"},{format:"domain",value:"ciscoturk.net"},{format:"domain",value:"ciscovideo.com"},{format:"domain",value:"ciscowebseminars.com"},{format:"domain",value:"cloudlock.com"},{format:"domain",value:"cloupia.com"},{format:"domain",value:"cloupia.net"},{format:"domain",value:"connect-in-canada.com"},{format:"domain",value:"coreoptics.net"},{format:"domain",value:"cs.co"},{format:"domain",value:"devm2m.com"},{format:"domain",value:"dnaspaces.io"},{format:"domain",value:"flipshare.com"},{format:"domain",value:"gpstheseries.com"},{format:"domain",value:"inlethd.com"},{format:"domain",value:"internetofeverything.com"},{format:"domain",value:"ioe.com"},{format:"domain",value:"kscisco.com"},{format:"domain",value:"m2m.com"},{format:"domain",value:"mcisco.com"},{format:"domain",value:"mediafiles-cisco.com"},{format:"domain",value:"metacloud.com"},{format:"domain",value:"mindmeld.com"},{format:"domain",value:"multiplydiversity.com"},{format:"domain",value:"myciscobenefits.com"},{format:"domain",value:"mysdn.com"},{format:"domain",value:"mysdn.info"},{format:"domain",value:"mysdn.net"},{format:"domain",value:"netacad.com"},{format:"domain",value:"netacad.net"},{format:"domain",value:"network-auth.cn"},{format:"domain",value:"observable.net"},{format:"domain",value:"obsrvbl.com"},{format:"domain",value:"parstream.com"},{format:"domain",value:"parstream.net"},{format:"domain",value:"parstream.org"},{format:"domain",value:"services-exchange.com"},{format:"domain",value:"static-cisco.com"},{format:"domain",value:"tandberg-china.com"},{format:"domain",value:"tandberg.com"},{format:"domain",value:"versly.com"},{format:"domain",value:"videochampion.com"},{format:"domain",value:"virtuata.com"},{format:"domain",value:"wballiance.com"},{format:"domain",value:"whyiwantciscotelepresence.com"},{format:"domain",value:"wifi-mx.com"},{format:"domain",value:"youtubecisco.com"},{format:"domain",value:"app-dynamics.com"},{format:"domain",value:"appdynamics.co.uk"},{format:"domain",value:"appdynamics.com"},{format:"domain",value:"appdynamics.de"},{format:"domain",value:"appdynamics.fr"},{format:"domain",value:"appdynamics.info"},{format:"domain",value:"appdynamics.jp"},{format:"domain",value:"appdynamics.org"},{format:"domain",value:"mearki.com"},{format:"domain",value:"meraki-go.com"},{format:"domain",value:"meraki.hk"},{format:"domain",value:"merakigo.com"},{format:"domain",value:"tail-f.com"},{format:"domain",value:"tailf.com"},{format:"full domain",value:"cisco.evergage.com"},{format:"full domain",value:"ciscolivehls-i.akamaihd.net"},{format:"domain",value:"webex.ca"},{format:"domain",value:"webex.co.in"},{format:"domain",value:"webex.co.it"},{format:"domain",value:"webex.co.jp"},{format:"domain",value:"webex.co.kr"},{format:"domain",value:"webex.co.nz"},{format:"domain",value:"webex.co.uk"},{format:"domain",value:"webex.com"},{format:"domain",value:"webex.com.au"},{format:"domain",value:"webex.com.br"},{format:"domain",value:"webex.com.cn"},{format:"domain",value:"webex.com.hk"},{format:"domain",value:"webex.com.mx"},{format:"domain",value:"webex.de"},{format:"domain",value:"webex.es"},{format:"domain",value:"webex.fr"}],[{format:"domain",value:"sony"},{format:"domain",value:"ginzasonypark.jp"},{format:"domain",value:"sony-africa.com"},{format:"domain",value:"sony-asia.com"},{format:"domain",value:"sony-europe.com"},{format:"domain",value:"sony-hes.co.jp"},{format:"domain",value:"sony-latin.com"},{format:"domain",value:"sony-mea.com"},{format:"domain",value:"sony-olympus-medical.com"},{format:"domain",value:"sony-promotion.eu"},{format:"domain",value:"sony-semicon.co.jp"},{format:"domain",value:"sony.at"},{format:"domain",value:"sony.ba"},{format:"domain",value:"sony.be"},{format:"domain",value:"sony.bg"},{format:"domain",value:"sony.ca"},{format:"domain",value:"sony.ch"},{format:"domain",value:"sony.cl"},{format:"domain",value:"sony.co.cr"},{format:"domain",value:"sony.co.id"},{format:"domain",value:"sony.co.in"},{format:"domain",value:"sony.co.jp"},{format:"domain",value:"sony.co.kr"},{format:"domain",value:"sony.co.nz"},{format:"domain",value:"sony.co.th"},{format:"domain",value:"sony.co.uk"},{format:"domain",value:"sony.com"},{format:"domain",value:"sony.com.ar"},{format:"domain",value:"sony.com.au"},{format:"domain",value:"sony.com.bo"},{format:"domain",value:"sony.com.br"},{format:"domain",value:"sony.com.co"},{format:"domain",value:"sony.com.do"},{format:"domain",value:"sony.com.ec"},{format:"domain",value:"sony.com.gt"},{format:"domain",value:"sony.com.hk"},{format:"domain",value:"sony.com.hn"},{format:"domain",value:"sony.com.mk"},{format:"domain",value:"sony.com.mx"},{format:"domain",value:"sony.com.my"},{format:"domain",value:"sony.com.ni"},{format:"domain",value:"sony.com.pa"},{format:"domain",value:"sony.com.pe"},{format:"domain",value:"sony.com.ph"},{format:"domain",value:"sony.com.sg"},{format:"domain",value:"sony.com.sv"},{format:"domain",value:"sony.com.tr"},{format:"domain",value:"sony.com.tw"},{format:"domain",value:"sony.com.vn"},{format:"domain",value:"sony.cz"},{format:"domain",value:"sony.de"},{format:"domain",value:"sony.dk"},{format:"domain",value:"sony.ee"},{format:"domain",value:"sony.es"},{format:"domain",value:"sony.eu"},{format:"domain",value:"sony.fi"},{format:"domain",value:"sony.fr"},{format:"domain",value:"sony.gr"},{format:"domain",value:"sony.hr"},{format:"domain",value:"sony.hu"},{format:"domain",value:"sony.ie"},{format:"domain",value:"sony.it"},{format:"domain",value:"sony.kz"},{format:"domain",value:"sony.lt"},{format:"domain",value:"sony.lu"},{format:"domain",value:"sony.lv"},{format:"domain",value:"sony.net"},{format:"domain",value:"sony.nl"},{format:"domain",value:"sony.no"},{format:"domain",value:"sony.pl"},{format:"domain",value:"sony.pt"},{format:"domain",value:"sony.ro"},{format:"domain",value:"sony.rs"},{format:"domain",value:"sony.ru"},{format:"domain",value:"sony.se"},{format:"domain",value:"sony.si"},{format:"domain",value:"sony.sk"},{format:"domain",value:"sony.ua"},{format:"domain",value:"sonybo.co.jp"},{format:"domain",value:"sonybsc.com"},{format:"domain",value:"sonybuilding.jp"},{format:"domain",value:"sonydesign.com"},{format:"domain",value:"sonydna.com"},{format:"domain",value:"sonyglobalsolutions.jp"},{format:"domain",value:"sonykigyo.jp"},{format:"domain",value:"sonylatvija.com"},{format:"domain",value:"sonypcl.jp"},{format:"domain",value:"sonyprotechnosupport.co.jp"},{format:"domain",value:"sonystoragemedia.co.jp"},{format:"domain",value:"sonytc.co.jp"},{format:"domain",value:"sovec.net"},{format:"domain",value:"playstation"},{format:"domain",value:"playstation.com"},{format:"domain",value:"playstation.net"},{format:"domain",value:"sonyentertainmentnetwork.com"},{format:"domain",value:"imageworks.com"},{format:"domain",value:"motionpictureser.com"},{format:"domain",value:"playshow.io"},{format:"domain",value:"playshowtv.com"},{format:"domain",value:"sonyclassics.com"},{format:"domain",value:"sonypictures.com"},{format:"domain",value:"sonypicturesanimation.com"},{format:"domain",value:"sonypicturesmuseum.com"},{format:"domain",value:"sonypicturesstudios.com"},{format:"domain",value:"sonypicturestelevision.com"},{format:"domain",value:"sonypicturestelevisiongames.com"},{format:"domain",value:"wheelpop.com"},{format:"domain",value:"wwtbam.com"},{format:"domain",value:"yourfantasybeginsnow.com"}],[{format:"domain",value:"dell"},{format:"domain",value:"dell-brand.com"},{format:"domain",value:"dell.com"},{format:"domain",value:"dellcdn.com"},{format:"domain",value:"cfblob.com"},{format:"domain",value:"cloudchoose.com"},{format:"domain",value:"cloudvolumes.com"},{format:"domain",value:"cmpaas.com"},{format:"domain",value:"cpedge.com"},{format:"domain",value:"crit-staging.com"},{format:"domain",value:"experience-vmware.com"},{format:"domain",value:"gemfire.net"},{format:"domain",value:"geodesummit.com"},{format:"domain",value:"getboxer.com"},{format:"domain",value:"gitstar.com"},{format:"domain",value:"gitstar.net"},{format:"domain",value:"gopivotal.net"},{format:"domain",value:"greenplum.net"},{format:"domain",value:"hwslabs.com"},{format:"domain",value:"immidio.com"},{format:"domain",value:"itfromtheinside.com"},{format:"domain",value:"latamvmwareforum.com"},{format:"domain",value:"pivotalinitiative.com"},{format:"domain",value:"snapvolumes.com"},{format:"domain",value:"ssdevrd.com"},{format:"domain",value:"vcanedge.com"},{format:"domain",value:"vcloudair.net"},{format:"domain",value:"vfabric.net"},{format:"domain",value:"vidmpreview.com"},{format:"domain",value:"virsto.com"},{format:"domain",value:"virsto.net"},{format:"domain",value:"vmglobal.net"},{format:"domain",value:"vmmark.com"},{format:"domain",value:"vmtestdrive.com"},{format:"domain",value:"vmw.com"},{format:"domain",value:"vmware-cloudmanagement.com"},{format:"domain",value:"vmware-techcenter.com"},{format:"domain",value:"vmware.com"},{format:"domain",value:"vmware20mosaic.com"},{format:"domain",value:"vmwareausnews.com"},{format:"domain",value:"vmwarecertificationvideos.com"},{format:"domain",value:"vmwarecloud.com"},{format:"domain",value:"vmwaredemandcenter.com"},{format:"domain",value:"vmwareemeablog.com"},{format:"domain",value:"vmwaregrid.com"},{format:"domain",value:"vmwarehorizon.com"},{format:"domain",value:"vmwareidentity.com"},{format:"domain",value:"vmwarelearning.com"},{format:"domain",value:"vmwarelearningplatform.com"},{format:"domain",value:"vmwarestuff.com"},{format:"domain",value:"vmwareusergroupstore.com"},{format:"domain",value:"vmwareviewpoint.com"},{format:"domain",value:"vmwarevmc.com"},{format:"domain",value:"vmwdemo.com"},{format:"domain",value:"vmwgcomms.com"},{format:"domain",value:"vmwhorizonair.com"},{format:"domain",value:"vmwidm-ads.com"},{format:"domain",value:"vmwidm.com"},{format:"domain",value:"vmwlabconnect.com"},{format:"domain",value:"vmwlearningplatform.com"},{format:"domain",value:"vmworld.com"},{format:"domain",value:"vmworld2010.com"},{format:"domain",value:"vmworld2013.com"},{format:"domain",value:"vmwsalesrewards.com"},{format:"domain",value:"vmwservices.com"},{format:"domain",value:"vnware.net"},{format:"domain",value:"whychoosehorizon.com"},{format:"domain",value:"whychooseview.com"},{format:"domain",value:"whychoosevmwareeuc.com"},{format:"domain",value:"windowsuem.com"},{format:"domain",value:"workspaceair.com"},{format:"domain",value:"xlstudio.com"},{format:"domain",value:"avinetworks.com"},{format:"domain",value:"badaas.com"},{format:"domain",value:"bitnami.com"},{format:"domain",value:"bitnamiapp.com"},{format:"domain",value:"bitnamistudio.com"},{format:"domain",value:"dockerizer.com"},{format:"domain",value:"cloudcredibility.com"},{format:"domain",value:"cloudhealthtech.com"},{format:"domain",value:"cloudlive.com"},{format:"domain",value:"kubeacademy.com"},{format:"domain",value:"kubeapps.com"},{format:"domain",value:"nyansa.com"},{format:"domain",value:"velocloud.com"},{format:"domain",value:"gopivotal.com"},{format:"domain",value:"heptio.cn"},{format:"domain",value:"heptio.com"},{format:"domain",value:"aliveipc.com"},{format:"domain",value:"aliveitsm.com"},{format:"domain",value:"aliveprofiler.com"},{format:"domain",value:"alivercm.com"},{format:"domain",value:"aliverewind.com"},{format:"domain",value:"alivertsm.com"},{format:"domain",value:"alivevm.com"},{format:"domain",value:"alivevmax.com"},{format:"domain",value:"alivevue.com"},{format:"domain",value:"vsphere.com"},{format:"domain",value:"vsphere.net"},{format:"domain",value:"air-watch.com"},{format:"domain",value:"airwatchexpress.com"},{format:"domain",value:"airwatchqa.com"},{format:"domain",value:"getws1.com"},{format:"domain",value:"getwsone.com"},{format:"domain",value:"whatisairwatch.com"},{format:"domain",value:"whatisworkspaceone.com"},{format:"domain",value:"workspaceone.com"},{format:"full domain",value:"vmware.tt.omtrdc.net"}],[{format:"domain",value:"amemv.com"},{format:"domain",value:"bytecdn.cn"},{format:"domain",value:"byted-static.com"},{format:"domain",value:"byted.org"},{format:"domain",value:"bytedance.com"},{format:"domain",value:"bytedance.net"},{format:"domain",value:"bytedanceapi.com"},{format:"domain",value:"bytedns.net"},{format:"domain",value:"bytednsdoc.com"},{format:"domain",value:"bytedns1.com"},{format:"domain",value:"bytefcdn.com"},{format:"domain",value:"bytegoofy.com"},{format:"domain",value:"bytegslb.com"},{format:"domain",value:"byteimg.com"},{format:"domain",value:"bytelb.net"},{format:"domain",value:"byteoversea.com"},{format:"domain",value:"bytescm.com"},{format:"domain",value:"bytetcc.com"},{format:"domain",value:"bytetos.com"},{format:"domain",value:"bytexservice.com"},{format:"domain",value:"feelgood.cn"},{format:"domain",value:"huaxiong.com"},{format:"domain",value:"ibytedapm.com"},{format:"domain",value:"ibytedtos.com"},{format:"domain",value:"ibyteimg.com"},{format:"domain",value:"pstatp.com"},{format:"domain",value:"snssdk.com"},{format:"domain",value:"wtturl.cn"},{format:"domain",value:"zijieapi.com"},{format:"domain",value:"zijiecdn.com"},{format:"domain",value:"zijiecdn.net"},{format:"domain",value:"zjbyte.cn"},{format:"domain",value:"zjcdn.com"},{format:"domain",value:"toutiao.com"},{format:"domain",value:"toutiaoapi.com"},{format:"domain",value:"toutiaocdn.com"},{format:"domain",value:"toutiaocloud.com"},{format:"domain",value:"toutiaocloud.net"},{format:"domain",value:"toutiaohao.com"},{format:"domain",value:"toutiaohao.net"},{format:"domain",value:"toutiaoimg.cn"},{format:"domain",value:"toutiaoimg.com"},{format:"domain",value:"toutiaoimg.net"},{format:"domain",value:"toutiaopage.com"},{format:"domain",value:"toutiaostatic.com"},{format:"domain",value:"toutiaovod.com"},{format:"domain",value:"douyin.com"},{format:"domain",value:"douyincdn.com"},{format:"domain",value:"douyinliving.com"},{format:"domain",value:"douyinpic.com"},{format:"domain",value:"douyinstatic.com"},{format:"domain",value:"douyinvod.com"},{format:"domain",value:"huoshan.com"},{format:"domain",value:"huoshanstatic.com"},{format:"domain",value:"huoshanzhibo.com"},{format:"domain",value:"ixigua.com"},{format:"domain",value:"ixiguavideo.com"},{format:"domain",value:"ixgvideo.com"},{format:"domain",value:"bdxiguaimg.com"},{format:"domain",value:"bdxiguastatic.com"},{format:"domain",value:"baike.com"},{format:"domain",value:"feishu.cn"},{format:"domain",value:"feishucdn.com"},{format:"domain",value:"wukong.com"},{format:"domain",value:"wukongwenda.cn"},{format:"domain",value:"wukongwenda.com"},{format:"domain",value:"dcarapi.com"},{format:"domain",value:"dcarimg.com"},{format:"domain",value:"dcarlive.com"},{format:"domain",value:"dcarstatic.com"},{format:"domain",value:"dcarvod.com"},{format:"domain",value:"dcdapp.com"},{format:"domain",value:"dongchedi.com"},{format:"domain",value:"dongchediapp.com"},{format:"domain",value:"365yg.com"},{format:"domain",value:"gogokid.com.cn"},{format:"domain",value:"gogokid.com"},{format:"domain",value:"pipix.com"},{format:"domain",value:"muyewx.com"},{format:"domain",value:"changdunovel.com"},{format:"domain",value:"faceu.com"},{format:"domain",value:"ulikecam.com"},{format:"domain",value:"bcy.net"},{format:"domain",value:"bcyimg.com"},{format:"domain",value:"lf-rc1.yhgfb-cn-static.com"},{format:"domain",value:"juejin.cn"},{format:"domain",value:"juejin.im"},{format:"domain",value:"xitu.io"},{format:"full domain",value:"p1-juejin.byteimg.com"},{format:"full domain",value:"p2-juejin.byteimg.com"},{format:"full domain",value:"p3-juejin.byteimg.com"},{format:"full domain",value:"p4-juejin.byteimg.com"},{format:"full domain",value:"p5-juejin.byteimg.com"},{format:"full domain",value:"p6-juejin.byteimg.com"},{format:"full domain",value:"p7-juejin.byteimg.com"},{format:"full domain",value:"p8-juejin.byteimg.com"},{format:"full domain",value:"p9-juejin.byteimg.com"},{format:"domain",value:"larksuite.com"},{format:"domain",value:"larksuitecdn.com"},{format:"domain",value:"muscdn.com"},{format:"domain",value:"musical.ly"},{format:"domain",value:"tik-tokapi.com"},{format:"domain",value:"tiktok.com"},{format:"domain",value:"tiktokcdn.com"},{format:"domain",value:"tiktokv.com"},{format:"full domain",value:"p16-tiktokcdn-com.akamaized.net"}],[{format:"domain",value:"97973.com"},{format:"domain",value:"picself.cn"},{format:"domain",value:"sina.cn"},{format:"domain",value:"sina.com"},{format:"domain",value:"sina.com.cn"},{format:"domain",value:"sina.net"},{format:"domain",value:"sinaapp.com"},{format:"domain",value:"sinaedge.com"},{format:"domain",value:"sinaimg.cn"},{format:"domain",value:"sinaimg.com"},{format:"domain",value:"sinajs.cn"},{format:"domain",value:"sinajs.com"},{format:"domain",value:"t.cn"},{format:"domain",value:"videoself.cn"},{format:"domain",value:"wbimg.com"},{format:"domain",value:"wbimg.cn"},{format:"domain",value:"wcdn.cn"},{format:"domain",value:"weibo.cn"},{format:"domain",value:"weibo.com"},{format:"domain",value:"weibo.com.cn"},{format:"domain",value:"weibocdn.com"},{format:"domain",value:"xhaiwai.com"},{format:"domain",value:"2016.sina.cn"},{format:"domain",value:"ad.sina.com.cn"},{format:"domain",value:"adbox.sina.com.cn"},{format:"domain",value:"adimages.sina.com.hk"},{format:"domain",value:"adimg.mobile.sina.cn"},{format:"domain",value:"adimg.uve.weibo.com"},{format:"domain",value:"adm.leju.sina.com.cn"},{format:"domain",value:"ads.sina.com"},{format:"domain",value:"alitui.weibo.com"},{format:"domain",value:"api.apps.sina.cn"},{format:"domain",value:"appgift.sinaapp.com"},{format:"domain",value:"appsupdate.sinaapp.com"},{format:"domain",value:"atm.sina.com"},{format:"domain",value:"beacon.sina.com.cn"},{format:"domain",value:"biz.weibo.com"},{format:"domain",value:"c.biz.weibo.com"},{format:"domain",value:"c.wcpt.biz.weibo.com"},{format:"domain",value:"click.uve.mobile.sina.cn"},{format:"domain",value:"click.uve.weibo.com"},{format:"domain",value:"cm.dmp.sina.cn"},{format:"domain",value:"contentrecommend-out.mobile.sina.cn"},{format:"domain",value:"count.video.sina.com.cn"},{format:"domain",value:"counter.sina.com.cn"},{format:"domain",value:"cre.dp.sina.cn"},{format:"domain",value:"cre-dp.sina.cn"},{format:"domain",value:"d00.sina.com.cn"},{format:"domain",value:"dcads.sina.com.cn"},{format:"domain",value:"dl.kjava.sina.cn"},{format:"domain",value:"dmp.sina.cn"},{format:"domain",value:"dp.im.weibo.cn"},{format:"domain",value:"game.weibo.cn"},{format:"domain",value:"game.weibo.com"},{format:"domain",value:"gw5.push.mcp.weibo.cn"},{format:"domain",value:"gw6.push.mcp.weibo.cn"},{format:"domain",value:"img.adbox.sina.com.cn"},{format:"domain",value:"img.amp.ad.sina.com.cn"},{format:"domain",value:"int.dpool.sina.com.cn"},{format:"domain",value:"interest.mix.sina.com.cn"},{format:"domain",value:"log.interest.mix.sina.com.cn"},{format:"domain",value:"log.mix.sina.com.cn"},{format:"domain",value:"log.sina.cn"},{format:"domain",value:"m.beacon.sina.com.cn"},{format:"domain",value:"m.game.weibo.cn"},{format:"domain",value:"mg.games.sina.com.cn"},{format:"domain",value:"motu.p4p.sina.com.cn"},{format:"domain",value:"newspush.sinajs.cn"},{format:"domain",value:"oascentral.sina.com"},{format:"domain",value:"oascentral.sina.com.hk"},{format:"domain",value:"p4p.sina.com.cn"},{format:"domain",value:"palmnews.sina.cn"},{format:"domain",value:"pay.mobile.sina.cn"},{format:"domain",value:"pfp.sina.com.cn"},{format:"domain",value:"pfpip.sina.com"},{format:"domain",value:"promote.biz.weibo.cn"},{format:"domain",value:"r.dmp.sina.cn"},{format:"domain",value:"rm.sina.com.cn"},{format:"domain",value:"rs.sinajs.cn"},{format:"domain",value:"s.alitui.weibo.com"},{format:"domain",value:"s.img.mix.sina.com.cn"},{format:"domain",value:"sapi.sina.cn"},{format:"domain",value:"sax.sina.cn"},{format:"domain",value:"sax.sina.com.cn"},{format:"domain",value:"saxn.sina.com.cn"},{format:"domain",value:"saxs.sina.com.cn"},{format:"domain",value:"sbeacon.sina.com.cn"},{format:"domain",value:"sdkapp.mobile.sina.cn"},{format:"domain",value:"sdkapp.uve.weibo.com"},{format:"domain",value:"sdkclick.mobile.sina.cn"},{format:"domain",value:"slog.sina.cn"},{format:"domain",value:"slog.sina.com.cn"},{format:"domain",value:"staticadm.leju.sina.com.cn"},{format:"domain",value:"tjs.sjs.sinajs.cn"},{format:"domain",value:"trends.mobile.sina.cn"},{format:"domain",value:"u1.img.mobile.sina.cn"},{format:"domain",value:"wapwbclick.mobile.sina.cn"},{format:"domain",value:"wbapp.mobile.sina.cn"},{format:"domain",value:"wbapp.uve.weibo.com"},{format:"domain",value:"wbclick.mobile.sina.cn"},{format:"domain",value:"wbpctips.mobile.sina.cn"},{format:"domain",value:"widget.weibo.com"},{format:"domain",value:"woocall.sina.com.cn"},{format:"domain",value:"zc.biz.weibo.com"},{format:"domain",value:"zymo.mps.weibo.com"}],[{format:"domain",value:"bridgestone"},{format:"domain",value:"bandag.cc"},{format:"domain",value:"bandag.com"},{format:"domain",value:"blizzak-juken.jp"},{format:"domain",value:"bookmybridgestonetyre.com"},{format:"domain",value:"bridgestone-asiapacific.com"},{format:"domain",value:"bridgestone-bandag.com"},{format:"domain",value:"bridgestone-brand.com"},{format:"domain",value:"bridgestone-business-service.jp"},{format:"domain",value:"bridgestone-korea.co.kr"},{format:"domain",value:"bridgestone-plt-eng.com"},{format:"domain",value:"bridgestone-tac-oman.com"},{format:"domain",value:"bridgestone.cl"},{format:"domain",value:"bridgestone.cn"},{format:"domain",value:"bridgestone.co.cr"},{format:"domain",value:"bridgestone.co.id"},{format:"domain",value:"bridgestone.co.in"},{format:"domain",value:"bridgestone.co.jp"},{format:"domain",value:"bridgestone.co.th"},{format:"domain",value:"bridgestone.com"},{format:"domain",value:"bridgestone.com.ar"},{format:"domain",value:"bridgestone.com.br"},{format:"domain",value:"bridgestone.com.cn"},{format:"domain",value:"bridgestone.com.co"},{format:"domain",value:"bridgestone.com.mx"},{format:"domain",value:"bridgestone.com.sg"},{format:"domain",value:"bridgestone.com.tw"},{format:"domain",value:"bridgestone.com.vn"},{format:"domain",value:"bridgestoneamericas.com"},{format:"domain",value:"bridgestonearena.com"},{format:"domain",value:"bridgestonecntc.com"},{format:"domain",value:"bridgestonecomercial.cl"},{format:"domain",value:"bridgestonecomercial.co.cr"},{format:"domain",value:"bridgestonecomercial.com.ar"},{format:"domain",value:"bridgestonecomercial.com.br"},{format:"domain",value:"bridgestonecomercial.com.co"},{format:"domain",value:"bridgestonecomercial.com.mx"},{format:"domain",value:"bridgestonegolf.com"},{format:"domain",value:"bridgestonegz.com"},{format:"domain",value:"bridgestonela.com"},{format:"domain",value:"bridgestonemarketing.com"},{format:"domain",value:"bridgestonemerchandise.com"},{format:"domain",value:"bridgestonenationalfleet.com"},{format:"domain",value:"bridgestoneperformance.com"},{format:"domain",value:"bridgestoneperformancemedia.net"},{format:"domain",value:"bridgestonerapiddelivery.com"},{format:"domain",value:"bridgestonerewards.com"},{format:"domain",value:"bridgestonesyb.com"},{format:"domain",value:"bridgestonetire.ca"},{format:"domain",value:"bridgestonetire.com"},{format:"domain",value:"bridgestonetyre.com.my"},{format:"domain",value:"bridgestonevan.com"},{format:"domain",value:"bridgestonewx.com"},{format:"domain",value:"bs-adreview.com"},{format:"domain",value:"bs-awh.ne.jp"},{format:"domain",value:"bsw.co.jp"},{format:"domain",value:"bsw.jp"},{format:"domain",value:"carcare-and-tireshop.jp"},{format:"domain",value:"daytontrucktires.com"},{format:"domain",value:"ecoforme.jp"},{format:"domain",value:"gcrtires.com"},{format:"domain",value:"jsbridgestone.com"},{format:"domain",value:"menshin-channel.com"},{format:"domain",value:"monitrix.net"},{format:"domain",value:"mr-tireman.jp"},{format:"domain",value:"mybridgestoneeducation.com"},{format:"domain",value:"playz.jp"},{format:"domain",value:"potenza.jp"},{format:"domain",value:"prodrive-japan.com"},{format:"domain",value:"store-bridgestonesports.com"},{format:"domain",value:"thetread.com"},{format:"domain",value:"tiresplus.com"},{format:"domain",value:"cfna.com"},{format:"domain",value:"bastropfirestone.com"},{format:"domain",value:"crossfitfirestone.com"},{format:"domain",value:"firestone.cl"},{format:"domain",value:"firestone.co.cr"},{format:"domain",value:"firestone.com.ar"},{format:"domain",value:"firestone.com.br"},{format:"domain",value:"firestone.com.co"},{format:"domain",value:"firestone.com.mx"},{format:"domain",value:"firestonebpco.com"},{format:"domain",value:"firestonecomercial.cl"},{format:"domain",value:"firestonecomercial.co.cr"},{format:"domain",value:"firestonecomercial.com.ar"},{format:"domain",value:"firestonecomercial.com.br"},{format:"domain",value:"firestonecomercial.com.co"},{format:"domain",value:"firestonecomercial.com.mx"},{format:"domain",value:"firestonecompleteautocare.com"},{format:"domain",value:"firestonedrivestore.com"},{format:"domain",value:"firestoneip.com"},{format:"domain",value:"firestonerewards.com"},{format:"domain",value:"firestonetire.ca"},{format:"domain",value:"firestonetire.com"},{format:"domain",value:"hibdontire.com"},{format:"domain",value:"wheelworks.net"},{format:"domain",value:"nokiantyres.cn"},{format:"domain",value:"nokiantyres.com"}],[{format:"domain",value:"18eighteen.com"},{format:"domain",value:"40somethingmag.com"},{format:"domain",value:"50plusmilfs.com"},{format:"domain",value:"60plusmilfs.com"},{format:"domain",value:"analqts.com"},{format:"domain",value:"ashleysageellison.com"},{format:"domain",value:"autumn-jade.com"},{format:"domain",value:"beascoremodel.com"},{format:"domain",value:"bigboobbundle.com"},{format:"domain",value:"bigboobspov.com"},{format:"domain",value:"bigtitangelawhite.com"},{format:"domain",value:"bigtithitomi.com"},{format:"domain",value:"bigtithooker.com"},{format:"domain",value:"bigtitterrynova.com"},{format:"domain",value:"bigtitvenera.com"},{format:"domain",value:"blackandstacked.com"},{format:"domain",value:"bonedathome.com"},{format:"domain",value:"bootyliciousmag.com"},{format:"domain",value:"bustyangelique.com"},{format:"domain",value:"bustyarianna.com"},{format:"domain",value:"bustydanniashe.com"},{format:"domain",value:"bustydustystash.com"},{format:"domain",value:"bustyinescudna.com"},{format:"domain",value:"bustykellykay.com"},{format:"domain",value:"bustykerrymarie.com"},{format:"domain",value:"bustylornamorgan.com"},{format:"domain",value:"bustymerilyn.com"},{format:"domain",value:"bustyoldsluts.com"},{format:"domain",value:"bustysammieblack.com"},{format:"domain",value:"cherrybrady.com"},{format:"domain",value:"chloesworld.com"},{format:"domain",value:"christymarks.com"},{format:"domain",value:"cock4stepmom.com"},{format:"domain",value:"codivorexxx.com"},{format:"domain",value:"creampieforgranny.com"},{format:"domain",value:"crystalgunnsworld.com"},{format:"domain",value:"daylenerio.com"},{format:"domain",value:"desiraesworld.com"},{format:"domain",value:"dianepoppos.com"},{format:"domain",value:"eboobstore.com"},{format:"domain",value:"evanottyvideos.com"},{format:"domain",value:"feedherfuckher.com"},{format:"domain",value:"flatandfuckedmilfs.com"},{format:"domain",value:"getscorecash.com"},{format:"domain",value:"grannygetsafacial.com"},{format:"domain",value:"grannylovesbbc.com"},{format:"domain",value:"grannylovesyoungcock.com"},{format:"domain",value:"homealonemilfs.com"},{format:"domain",value:"ibonedyourmom.com"},{format:"domain",value:"ifuckedtheboss.com"},{format:"domain",value:"jessicaturner.com"},{format:"domain",value:"joanabliss.com"},{format:"domain",value:"juliamiles.com"},{format:"domain",value:"juliamiles.com"},{format:"domain",value:"karinahart.com"},{format:"domain",value:"karlajames.com"},{format:"domain",value:"leannecrowvideos.com"},{format:"domain",value:"legsex.com"},{format:"domain",value:"linseysworld.com"},{format:"domain",value:"megatitsminka.com"},{format:"domain",value:"mickybells.com"},{format:"domain",value:"milfbundle.com"},{format:"domain",value:"milfthreesomes.com"},{format:"domain",value:"milftugs.com"},{format:"domain",value:"millymarks.com"},{format:"domain",value:"mommystoytime.com"},{format:"domain",value:"nataliefiore.com"},{format:"domain",value:"naughtyfootjobs.com"},{format:"domain",value:"naughtymag.com"},{format:"domain",value:"naughtytugs.com"},{format:"domain",value:"nicolepeters.com"},{format:"domain",value:"oldhornymilfs.com"},{format:"domain",value:"pickinguppussy.com"},{format:"domain",value:"pornloser.com"},{format:"domain",value:"pornmegaload.com"},{format:"domain",value:"reneerossvideos.com"},{format:"domain",value:"sarennasworld.com"},{format:"domain",value:"scoreclassics.com"},{format:"domain",value:"scoregroup.com"},{format:"domain",value:"scoreland.com"},{format:"domain",value:"scoreland2.com"},{format:"domain",value:"scorepass.com"},{format:"domain",value:"scoretv.tv"},{format:"domain",value:"scoreuniverse.com"},{format:"domain",value:"scorevideos.com"},{format:"domain",value:"sharizelvideos.com"},{format:"domain",value:"silversluts.com"},{format:"domain",value:"stacyvandenbergboobs.com"},{format:"domain",value:"susiewildin.com"},{format:"domain",value:"tawny-peaks.com"},{format:"domain",value:"tiffany-towers.com"},{format:"domain",value:"titsandtugs.com"},{format:"domain",value:"tnatryouts.com"},{format:"domain",value:"valoryirene.com"},{format:"domain",value:"xlgirls.com"},{format:"domain",value:"yourmomlovesanal.com"},{format:"domain",value:"yourmomsgotbigtits.com"},{format:"domain",value:"yourwifemymeat.com"}],[{format:"domain",value:"ikea.ae"},{format:"domain",value:"ikea.at"},{format:"domain",value:"ikea.au"},{format:"domain",value:"ikea.be"},{format:"domain",value:"ikea.bg"},{format:"domain",value:"ikea.bh"},{format:"domain",value:"ikea.ca"},{format:"domain",value:"ikea.ch"},{format:"domain",value:"ikea.cl"},{format:"domain",value:"ikea.cn"},{format:"domain",value:"ikea.co.at"},{format:"domain",value:"ikea.co.ca"},{format:"domain",value:"ikea.co.de"},{format:"domain",value:"ikea.co.id"},{format:"domain",value:"ikea.co.il"},{format:"domain",value:"ikea.co.jp"},{format:"domain",value:"ikea.co.kr"},{format:"domain",value:"ikea.co.om"},{format:"domain",value:"ikea.co.ph"},{format:"domain",value:"ikea.co.pl"},{format:"domain",value:"ikea.co.th"},{format:"domain",value:"ikea.co.uk"},{format:"domain",value:"ikea.com.au"},{format:"domain",value:"ikea.com.cy"},{format:"domain",value:"ikea.com.de"},{format:"domain",value:"ikea.com.do"},{format:"domain",value:"ikea.com.eg"},{format:"domain",value:"ikea.com.gr"},{format:"domain",value:"ikea.com.hk"},{format:"domain",value:"ikea.com.in"},{format:"domain",value:"ikea.com.kw"},{format:"domain",value:"ikea.com.lv"},{format:"domain",value:"ikea.com.mx"},{format:"domain",value:"ikea.com.my"},{format:"domain",value:"ikea.com.om"},{format:"domain",value:"ikea.com.pl"},{format:"domain",value:"ikea.com.pr"},{format:"domain",value:"ikea.com.pt"},{format:"domain",value:"ikea.com.ro"},{format:"domain",value:"ikea.com.ru"},{format:"domain",value:"ikea.com.sa"},{format:"domain",value:"ikea.com.sg"},{format:"domain",value:"ikea.com.tr"},{format:"domain",value:"ikea.com.tw"},{format:"domain",value:"ikea.com.ua"},{format:"domain",value:"ikea.cz"},{format:"domain",value:"ikea.de"},{format:"domain",value:"ikea.dk"},{format:"domain",value:"ikea.do"},{format:"domain",value:"ikea.ee"},{format:"domain",value:"ikea.eg"},{format:"domain",value:"ikea.es"},{format:"domain",value:"ikea.fi"},{format:"domain",value:"ikea.fr"},{format:"domain",value:"ikea.gr"},{format:"domain",value:"ikea.hk"},{format:"domain",value:"ikea.hr"},{format:"domain",value:"ikea.hu"},{format:"domain",value:"ikea.ie"},{format:"domain",value:"ikea.in"},{format:"domain",value:"ikea.is"},{format:"domain",value:"ikea.it"},{format:"domain",value:"ikea.jo"},{format:"domain",value:"ikea.jp"},{format:"domain",value:"ikea.kr"},{format:"domain",value:"ikea.lt"},{format:"domain",value:"ikea.lv"},{format:"domain",value:"ikea.ma"},{format:"domain",value:"ikea.mx"},{format:"domain",value:"ikea.my"},{format:"domain",value:"ikea.nl"},{format:"domain",value:"ikea.no"},{format:"domain",value:"ikea.om"},{format:"domain",value:"ikea.ph"},{format:"domain",value:"ikea.pl"},{format:"domain",value:"ikea.pr"},{format:"domain",value:"ikea.pt"},{format:"domain",value:"ikea.qa"},{format:"domain",value:"ikea.ro"},{format:"domain",value:"ikea.rs"},{format:"domain",value:"ikea.ru"},{format:"domain",value:"ikea.sa"},{format:"domain",value:"ikea.sg"},{format:"domain",value:"ikea.si"},{format:"domain",value:"ikea.sk"},{format:"domain",value:"ikea.ua"},{format:"domain",value:"ikea.us"},{format:"domain",value:"ikea.com"},{format:"domain",value:"ikea.net"},{format:"domain",value:"ingka-dt.cn"},{format:"domain",value:"ingka-internal.cn"},{format:"domain",value:"ingka-system.cn"},{format:"domain",value:"ingka.com"},{format:"domain",value:"ingka.dev"},{format:"domain",value:"ingkacentres.com"}],[{format:"domain",value:"activelearnprimary.co.uk"},{format:"domain",value:"activelearnprimary.com.au"},{format:"domain",value:"activeteachonline.com"},{format:"domain",value:"addison-wesley.ch"},{format:"domain",value:"adobepress.ch"},{format:"domain",value:"btec.co.uk"},{format:"domain",value:"ciscopress.ch"},{format:"domain",value:"connectionsacademy.com"},{format:"domain",value:"connectionseducation.com"},{format:"domain",value:"connectionslearning.com"},{format:"domain",value:"dombosco.com.br"},{format:"domain",value:"ecpa.fr"},{format:"domain",value:"escapestudios.co.uk"},{format:"domain",value:"ilongman.com"},{format:"domain",value:"integral7.com"},{format:"domain",value:"internationalconnectionsacademy.com"},{format:"domain",value:"longman.ch"},{format:"domain",value:"mut.ch"},{format:"domain",value:"myhelpinglab.com"},{format:"domain",value:"mylogiclab.com"},{format:"domain",value:"mypearson.com"},{format:"domain",value:"mypearsonenglish.ch"},{format:"domain",value:"mypearsonshop.com.mx"},{format:"domain",value:"mypearsonshop.mx"},{format:"domain",value:"mysocialworklab.com"},{format:"domain",value:"netname.com.br"},{format:"domain",value:"pearson-anaya.com"},{format:"domain",value:"pearson-intl.com"},{format:"domain",value:"pearson-schule.ch"},{format:"domain",value:"pearson-studium.ch"},{format:"domain",value:"pearson.ch"},{format:"domain",value:"pearson.cl"},{format:"domain",value:"pearson.co.in"},{format:"domain",value:"pearson.co.jp"},{format:"domain",value:"pearson.com"},{format:"domain",value:"pearson.com.ar"},{format:"domain",value:"pearson.com.au"},{format:"domain",value:"pearson.com.cn"},{format:"domain",value:"pearson.com.hk"},{format:"domain",value:"pearson.com.uy"},{format:"domain",value:"pearson.es"},{format:"domain",value:"pearson.fr"},{format:"domain",value:"pearson.pl"},{format:"domain",value:"pearsonactivelearn.com"},{format:"domain",value:"pearsonassessment.be"},{format:"domain",value:"pearsonassessment.de"},{format:"domain",value:"pearsonassessment.dk"},{format:"domain",value:"pearsonassessment.fr"},{format:"domain",value:"pearsonassessment.nl"},{format:"domain",value:"pearsonassessment.no"},{format:"domain",value:"pearsonassessment.se"},{format:"domain",value:"pearsonassessments.com"},{format:"domain",value:"pearsoncanada.ca"},{format:"domain",value:"pearsonclinical.be"},{format:"domain",value:"pearsonclinical.ca"},{format:"domain",value:"pearsonclinical.co.uk"},{format:"domain",value:"pearsonclinical.com.au"},{format:"domain",value:"pearsonclinical.com.br"},{format:"domain",value:"pearsonclinical.de"},{format:"domain",value:"pearsonclinical.dk"},{format:"domain",value:"pearsonclinical.es"},{format:"domain",value:"pearsonclinical.eu"},{format:"domain",value:"pearsonclinical.fr"},{format:"domain",value:"pearsonclinical.in"},{format:"domain",value:"pearsonclinical.nl"},{format:"domain",value:"pearsonclinical.no"},{format:"domain",value:"pearsonclinical.se"},{format:"domain",value:"pearsoncmg.com"},{format:"domain",value:"pearsoncred.com"},{format:"domain",value:"pearsoned.co.nz"},{format:"domain",value:"pearsoned.com"},{format:"domain",value:"pearsoneducacion.net"},{format:"domain",value:"pearsoneducationbooks.com"},{format:"domain",value:"pearsonelt.ch"},{format:"domain",value:"pearsonelt.com"},{format:"domain",value:"pearsonenespanol.com"},{format:"domain",value:"pearsonhighered.com"},{format:"domain",value:"pearsoninstitute.ac.za"},{format:"domain",value:"pearsonlongman.ch"},{format:"domain",value:"pearsononlineacademy.com"},{format:"domain",value:"pearsonperu.pe"},{format:"domain",value:"pearsonplaces.com.au"},{format:"domain",value:"pearsonschoolsandfecolleges.co.uk"},{format:"domain",value:"pearsonvue.com"},{format:"domain",value:"pearsonvue.net"},{format:"domain",value:"pobl-content.com"},{format:"domain",value:"pvue1.com"},{format:"domain",value:"pvue2.com"},{format:"domain",value:"quatrum.com.br"},{format:"domain",value:"stark-verlag.ch"},{format:"domain",value:"talentlens.com"},{format:"domain",value:"themathsfactor.com"},{format:"domain",value:"xn--pearsonenespaol-brb.com"}],[{format:"domain",value:"bby.com"},{format:"domain",value:"bbycastatic.ca"},{format:"domain",value:"bbycloud.com"},{format:"domain",value:"bbycontent.com"},{format:"domain",value:"bbycontent.net"},{format:"domain",value:"bbyintl.com"},{format:"domain",value:"bbystatic.com"},{format:"domain",value:"bbyurl.us"},{format:"domain",value:"bestbhy.com"},{format:"domain",value:"bestbuy-audio.com"},{format:"domain",value:"bestbuy-communityrelations.com"},{format:"domain",value:"bestbuy-giftcard.info"},{format:"domain",value:"bestbuy-int.com"},{format:"domain",value:"bestbuy-jobs.com"},{format:"domain",value:"bestbuy.ca"},{format:"domain",value:"bestbuy.cn"},{format:"domain",value:"bestbuy.com"},{format:"domain",value:"bestbuy.com.cn"},{format:"domain",value:"bestbuy.com.mx"},{format:"domain",value:"bestbuy.info"},{format:"domain",value:"bestbuy24x7solutions.com"},{format:"domain",value:"bestbuybusiness.com"},{format:"domain",value:"bestbuybusinessadvantageaccount.com"},{format:"domain",value:"bestbuycanada.ca"},{format:"domain",value:"bestbuycanada.com"},{format:"domain",value:"bestbuycanadaltd.ca"},{format:"domain",value:"bestbuycharityclassic.com"},{format:"domain",value:"bestbuycoffeemakers.com"},{format:"domain",value:"bestbuyethics.com"},{format:"domain",value:"bestbuyforbusiness.ca"},{format:"domain",value:"bestbuygsm.com"},{format:"domain",value:"bestbuyideax.com"},{format:"domain",value:"bestbuyphotoworkshoptours.com"},{format:"domain",value:"bestbuyrewards.com"},{format:"domain",value:"bestbuyrewardzone.ca"},{format:"domain",value:"bestbuys.com"},{format:"domain",value:"bestbuysgeeksquad.com"},{format:"domain",value:"bestbuysolutions.net"},{format:"domain",value:"bestbuystores.com"},{format:"domain",value:"bestbuytradein.com"},{format:"domain",value:"bestbuyus.com"},{format:"domain",value:"besztbuy.com"},{format:"domain",value:"bextbuy.com"},{format:"domain",value:"bienvenuechezbestbuy.ca"},{format:"domain",value:"cowboom.com"},{format:"domain",value:"futureshop.ca"},{format:"domain",value:"initproducts.com"},{format:"domain",value:"magnoliaav.com.cn"},{format:"domain",value:"mybestbuy.com"},{format:"domain",value:"mybestbuyclaims.com"},{format:"domain",value:"myrewardzone.com"},{format:"domain",value:"myrz.com"},{format:"domain",value:"pacifickitchenandhome.com"},{format:"domain",value:"tiendabestbuy.com"},{format:"domain",value:"unbrandedproducts.com"},{format:"domain",value:"welcometobestbuy.ca"},{format:"domain",value:"wolfatbestbuy.com"},{format:"domain",value:"wolfatbestbuy.net"},{format:"domain",value:"www-bestbuystores.com"},{format:"domain",value:"geek-squad-support.com"},{format:"domain",value:"geek-squad.net"},{format:"domain",value:"geek-squad.org"},{format:"domain",value:"geek-squads.net"},{format:"domain",value:"geeksquad.ca"},{format:"domain",value:"geeksquad.cc"},{format:"domain",value:"geeksquad.com"},{format:"domain",value:"geeksquad.net"},{format:"domain",value:"geeksquad.tv"},{format:"domain",value:"geeksquadcares.com"},{format:"domain",value:"geeksquadcentral.com"},{format:"domain",value:"geeksquadforums.com"},{format:"domain",value:"geeksquadonline.com"},{format:"domain",value:"geeksquadprotectionplan.org"},{format:"domain",value:"geeksquadservices.org"},{format:"domain",value:"geeksquadwebroot.org"},{format:"domain",value:"gscanada.info"},{format:"domain",value:"gsccdn.com"},{format:"domain",value:"gslink.us"},{format:"domain",value:"onlinegeeksquad.com"},{format:"domain",value:"rocketfishproducts.com"},{format:"domain",value:"dealtree.org"},{format:"domain",value:"techliquidators.com"}],[{format:"domain",value:"bannedbook.net"},{format:"domain",value:"bannedbook.org"},{format:"domain",value:"dafahao.com"},{format:"domain",value:"dongtaiwang.com"},{format:"domain",value:"falundafa.org"},{format:"domain",value:"falundafa.org.tw"},{format:"domain",value:"ganjing.com"},{format:"domain",value:"ganjingworld.com"},{format:"domain",value:"mhradio.org"},{format:"domain",value:"ninecommentaries.com"},{format:"domain",value:"shenyun.com"},{format:"domain",value:"shenyunperformingarts.org"},{format:"domain",value:"wujieliulan.com"},{format:"domain",value:"zhengjian.org"},{format:"domain",value:"dajiyuan.com"},{format:"domain",value:"dajiyuan.eu"},{format:"domain",value:"edninfo.com"},{format:"domain",value:"epoch.cloud"},{format:"domain",value:"epoch.org.il"},{format:"domain",value:"epochbuy.com"},{format:"domain",value:"epochcar.com"},{format:"domain",value:"epochhk.com"},{format:"domain",value:"epochmall.com"},{format:"domain",value:"epochmediagroup.com"},{format:"domain",value:"epochshop.com"},{format:"domain",value:"epochstories.com"},{format:"domain",value:"epochtime.com"},{format:"domain",value:"epochtimes-bg.com"},{format:"domain",value:"epochtimes-romania.com"},{format:"domain",value:"epochtimes.co.il"},{format:"domain",value:"epochtimes.co.kr"},{format:"domain",value:"epochtimes.co.uk"},{format:"domain",value:"epochtimes.com"},{format:"domain",value:"epochtimes.com.au"},{format:"domain",value:"epochtimes.com.br"},{format:"domain",value:"epochtimes.com.sg"},{format:"domain",value:"epochtimes.com.tw"},{format:"domain",value:"epochtimes.com.ua"},{format:"domain",value:"epochtimes.cz"},{format:"domain",value:"epochtimes.de"},{format:"domain",value:"epochtimes.eu"},{format:"domain",value:"epochtimes.fr"},{format:"domain",value:"epochtimes.it"},{format:"domain",value:"epochtimes.jp"},{format:"domain",value:"epochtimes.nl"},{format:"domain",value:"epochtimes.pl"},{format:"domain",value:"epochtimes.ru"},{format:"domain",value:"epochtimes.se"},{format:"domain",value:"epochtimeshk.org"},{format:"domain",value:"epochtimestr.com"},{format:"domain",value:"epochweek.com"},{format:"domain",value:"epochweekly.com"},{format:"domain",value:"erabaru.net"},{format:"domain",value:"etviet.com"},{format:"domain",value:"lagranepoca.com"},{format:"domain",value:"minghui.org"},{format:"domain",value:"ntd.com"},{format:"domain",value:"ntd.tv"},{format:"domain",value:"ntdca.com"},{format:"domain",value:"ntdimg.com"},{format:"domain",value:"ntdtv.ca"},{format:"domain",value:"ntdtv.co.kr"},{format:"domain",value:"ntdtv.com"},{format:"domain",value:"ntdtv.com.tw"},{format:"domain",value:"ntdtv.jp"},{format:"domain",value:"ntdtv.kr"},{format:"domain",value:"ntdtv.org"},{format:"domain",value:"ntdtv.ru"},{format:"domain",value:"ntdtv-dc.com"},{format:"domain",value:"ntdtvla.com"},{format:"domain",value:"ntdvn.com"},{format:"domain",value:"persianepochtimes.com"},{format:"domain",value:"renminbao.com"},{format:"domain",value:"theepochtimes.com"},{format:"domain",value:"theepochtimessubscribe.com"},{format:"domain",value:"velkaepocha.cz"}],[{format:"domain",value:"canon"},{format:"domain",value:"c-ij.com"},{format:"domain",value:"canon-cee.com"},{format:"domain",value:"canon-cmos-sensors.com"},{format:"domain",value:"canon-cna.com"},{format:"domain",value:"canon-ebm.com.hk"},{format:"domain",value:"canon-emea.com"},{format:"domain",value:"canon-emirates.ae"},{format:"domain",value:"canon-europa.com"},{format:"domain",value:"canon-europe.com"},{format:"domain",value:"canon-me.com"},{format:"domain",value:"canon-ois.qa"},{format:"domain",value:"canon-se.com.tw"},{format:"domain",value:"canon.am"},{format:"domain",value:"canon.at"},{format:"domain",value:"canon.az"},{format:"domain",value:"canon.ba"},{format:"domain",value:"canon.be"},{format:"domain",value:"canon.bg"},{format:"domain",value:"canon.ca"},{format:"domain",value:"canon.ch"},{format:"domain",value:"canon.cn"},{format:"domain",value:"canon.co.il"},{format:"domain",value:"canon.co.uk"},{format:"domain",value:"canon.co.za"},{format:"domain",value:"canon.com"},{format:"domain",value:"canon.com.al"},{format:"domain",value:"canon.com.au"},{format:"domain",value:"canon.com.by"},{format:"domain",value:"canon.com.cn"},{format:"domain",value:"canon.com.cy"},{format:"domain",value:"canon.com.hk"},{format:"domain",value:"canon.com.mk"},{format:"domain",value:"canon.com.mt"},{format:"domain",value:"canon.com.my"},{format:"domain",value:"canon.com.tr"},{format:"domain",value:"canon.com.tw"},{format:"domain",value:"canon.cz"},{format:"domain",value:"canon.de"},{format:"domain",value:"canon.dk"},{format:"domain",value:"canon.ee"},{format:"domain",value:"canon.es"},{format:"domain",value:"canon.fi"},{format:"domain",value:"canon.fr"},{format:"domain",value:"canon.ge"},{format:"domain",value:"canon.gr"},{format:"domain",value:"canon.hr"},{format:"domain",value:"canon.hu"},{format:"domain",value:"canon.ie"},{format:"domain",value:"canon.it"},{format:"domain",value:"canon.kz"},{format:"domain",value:"canon.lt"},{format:"domain",value:"canon.lu"},{format:"domain",value:"canon.lv"},{format:"domain",value:"canon.me"},{format:"domain",value:"canon.net"},{format:"domain",value:"canon.nl"},{format:"domain",value:"canon.no"},{format:"domain",value:"canon.pl"},{format:"domain",value:"canon.pt"},{format:"domain",value:"canon.ro"},{format:"domain",value:"canon.rs"},{format:"domain",value:"canon.ru"},{format:"domain",value:"canon.se"},{format:"domain",value:"canon.si"},{format:"domain",value:"canon.sk"},{format:"domain",value:"canon.tj"},{format:"domain",value:"canon.ua"},{format:"domain",value:"canon.uz"},{format:"domain",value:"canonfoundation.org"},{format:"domain",value:"canonproprinters.com"}],[{format:"domain",value:"sbux.com.my"},{format:"domain",value:"sbuxcard.com"},{format:"domain",value:"starbucks-stars.com"},{format:"domain",value:"starbucks.ad"},{format:"domain",value:"starbucks.at"},{format:"domain",value:"starbucks.be"},{format:"domain",value:"starbucks.bg"},{format:"domain",value:"starbucks.ca"},{format:"domain",value:"starbucks.ch"},{format:"domain",value:"starbucks.co.id"},{format:"domain",value:"starbucks.co.jp"},{format:"domain",value:"starbucks.co.nz"},{format:"domain",value:"starbucks.co.th"},{format:"domain",value:"starbucks.co.uk"},{format:"domain",value:"starbucks.co.za"},{format:"domain",value:"starbucks.com"},{format:"domain",value:"starbucks.com.ar"},{format:"domain",value:"starbucks.com.bn"},{format:"domain",value:"starbucks.com.cn"},{format:"domain",value:"starbucks.com.co"},{format:"domain",value:"starbucks.com.cy"},{format:"domain",value:"starbucks.com.gr"},{format:"domain",value:"starbucks.com.hk"},{format:"domain",value:"starbucks.com.kh"},{format:"domain",value:"starbucks.com.kz"},{format:"domain",value:"starbucks.com.mx"},{format:"domain",value:"starbucks.com.my"},{format:"domain",value:"starbucks.com.pe"},{format:"domain",value:"starbucks.com.sg"},{format:"domain",value:"starbucks.com.tr"},{format:"domain",value:"starbucks.com.uy"},{format:"domain",value:"starbucks.de"},{format:"domain",value:"starbucks.dk"},{format:"domain",value:"starbucks.es"},{format:"domain",value:"starbucks.fr"},{format:"domain",value:"starbucks.hu"},{format:"domain",value:"starbucks.ie"},{format:"domain",value:"starbucks.in"},{format:"domain",value:"starbucks.it"},{format:"domain",value:"starbucks.nl"},{format:"domain",value:"starbucks.no"},{format:"domain",value:"starbucks.ph"},{format:"domain",value:"starbucks.pl"},{format:"domain",value:"starbucks.pt"},{format:"domain",value:"starbucks.rs"},{format:"domain",value:"starbucks.ru"},{format:"domain",value:"starbucks.se"},{format:"domain",value:"starbucks.tt"},{format:"domain",value:"starbucks.vn"},{format:"domain",value:"starbucksathome.com"},{format:"domain",value:"starbucksavie.ca"},{format:"domain",value:"starbuckscard.ph"},{format:"domain",value:"starbuckscardb2b.com"},{format:"domain",value:"starbuckscoffee.cz"},{format:"domain",value:"starbuckscoffeegear.com"},{format:"domain",value:"starbuckscoffeegearstore.com"},{format:"domain",value:"starbucksforlife.ca"},{format:"domain",value:"starbucksforlife.com"},{format:"domain",value:"starbuckspoq.com"},{format:"domain",value:"starbucksreserve.com"},{format:"domain",value:"starbucksrewardsstarland.ca"},{format:"domain",value:"starbucksrewardsstarland.com"},{format:"domain",value:"starbucksromania.ro"},{format:"domain",value:"starbucksrtd.com"},{format:"domain",value:"starbucksslovakia.sk"},{format:"domain",value:"starbuckssummergame.ca"},{format:"domain",value:"starbuckssummergame.com"}],[{format:"domain",value:"ak1.net"},{format:"domain",value:"aka-ai.com"},{format:"domain",value:"aka-ai.net"},{format:"domain",value:"akacrypto.net"},{format:"domain",value:"akadeem.net"},{format:"domain",value:"akadns.com"},{format:"domain",value:"akadns6.net"},{format:"domain",value:"akaeai.com"},{format:"domain",value:"akafms.net"},{format:"domain",value:"akahost.net"},{format:"domain",value:"akaint.net"},{format:"domain",value:"akam.net"},{format:"domain",value:"akamaa.com"},{format:"domain",value:"akamah.com"},{format:"domain",value:"akamak.com"},{format:"domain",value:"akamam.com"},{format:"domain",value:"akamai-access.com"},{format:"domain",value:"akamai-access.net"},{format:"domain",value:"akamai-cdn.com"},{format:"domain",value:"akamai-platform-internal.net"},{format:"domain",value:"akamai-platform-staging.com"},{format:"domain",value:"akamai-platform.net"},{format:"domain",value:"akamai-regression.net"},{format:"domain",value:"akamai-staging.net"},{format:"domain",value:"akamai-sucks.net"},{format:"domain",value:"akamai-thailand.com"},{format:"domain",value:"akamai-thailand.net"},{format:"domain",value:"akamai-trials.com"},{format:"domain",value:"akamai.co.kr"},{format:"domain",value:"akamai.com"},{format:"domain",value:"akamai.net"},{format:"domain",value:"akamaientrypoint.net"},{format:"domain",value:"akamaietpcnctest.com"},{format:"domain",value:"akamaietpcompromisedcnctest.com"},{format:"domain",value:"akamaietpcompromisedmalwaretest.com"},{format:"domain",value:"akamaietpmalwaretest.com"},{format:"domain",value:"akamaietpphishingtest.com"},{format:"domain",value:"akamaihd-staging.net"},{format:"domain",value:"akamaihd.com"},{format:"domain",value:"akamaihd.net"},{format:"domain",value:"akamaimagicmath.net"},{format:"domain",value:"akamainewzealand.com"},{format:"domain",value:"akamaiphillipines.com"},{format:"domain",value:"akamaiphillipines.net"},{format:"domain",value:"akamaitech.com"},{format:"domain",value:"akamaitech.net"},{format:"domain",value:"akamaitechnologies.com"},{format:"domain",value:"akamaitechnologies.net"},{format:"domain",value:"akamaisingapore.net"},{format:"domain",value:"akamaized-staging.net"},{format:"domain",value:"akamaized.net"},{format:"domain",value:"akamaizercentral.com"},{format:"domain",value:"akamci.com"},{format:"domain",value:"akami.com"},{format:"domain",value:"akami.net"},{format:"domain",value:"akamii.com"},{format:"domain",value:"akamqi.com"},{format:"domain",value:"akastream.com"},{format:"domain",value:"akastream.net"},{format:"domain",value:"akatns.net"},{format:"domain",value:"iamakamai.com"},{format:"domain",value:"iamakamai.net"},{format:"domain",value:"soasta-dswb.com"},{format:"domain",value:"srtcdn.net"},{format:"domain",value:"abema.tv"}],[{format:"domain",value:"bloomberg"},{format:"domain",value:"bbgevent.com"},{format:"domain",value:"bbhub.io"},{format:"domain",value:"bbthat.com"},{format:"domain",value:"bgov.com"},{format:"domain",value:"bloomberg.cn"},{format:"domain",value:"bloomberg.co.jp"},{format:"domain",value:"bloomberg.co.kr"},{format:"domain",value:"bloomberg.com"},{format:"domain",value:"bloomberg.com.br"},{format:"domain",value:"bloomberg.fm"},{format:"domain",value:"bloomberg.tv"},{format:"domain",value:"bloombergapps.com"},{format:"domain",value:"bloombergarcade.com"},{format:"domain",value:"bloombergbeta.com"},{format:"domain",value:"bloombergbna.com"},{format:"domain",value:"bloombergbreakaway.com"},{format:"domain",value:"bloombergbriefs.com"},{format:"domain",value:"bloombergchina.com"},{format:"domain",value:"bloombergenvironment.com"},{format:"domain",value:"bloombergforeducation.com"},{format:"domain",value:"bloomberggovernment.com"},{format:"domain",value:"bloombergindices.com"},{format:"domain",value:"bloombergindustry.com"},{format:"domain",value:"bloomberglabs.com"},{format:"domain",value:"bloomberglaw.com"},{format:"domain",value:"bloomberglive.com"},{format:"domain",value:"bloomberglp.com"},{format:"domain",value:"bloombergmedia.com"},{format:"domain",value:"bloombergnext.com"},{format:"domain",value:"bloombergpolarlake.com"},{format:"domain",value:"bloombergprep.com"},{format:"domain",value:"bloombergquint.com"},{format:"domain",value:"bloombergradio.com"},{format:"domain",value:"bloombergsef.com"},{format:"domain",value:"bloombergspace.com"},{format:"domain",value:"bloombergstatus.com"},{format:"domain",value:"bloombergsurvey.com"},{format:"domain",value:"bloombergtax.com"},{format:"domain",value:"bloombergtax1.com"},{format:"domain",value:"bloombergtaxtech.com"},{format:"domain",value:"bloombergtradingchallenge.com"},{format:"domain",value:"bloombergtv.mn"},{format:"domain",value:"bloombergvault.com"},{format:"domain",value:"bloombergview.com"},{format:"domain",value:"blpcareers.com"},{format:"domain",value:"blpevents.com"},{format:"domain",value:"blpprofessional.com"},{format:"domain",value:"bmia.org"},{format:"domain",value:"bnef.com"},{format:"domain",value:"businessweek.com"},{format:"domain",value:"businessweekmag.com"},{format:"domain",value:"bwbx.io"},{format:"domain",value:"citylab.com"},{format:"domain",value:"gotraffic.net"},{format:"domain",value:"londonmithraeum.com"},{format:"domain",value:"neweconomyforum.com"},{format:"domain",value:"newenergyfinance.com"},{format:"domain",value:"quicktake.video"},{format:"domain",value:"techatbloomberg.com"},{format:"domain",value:"tictoc.video"}],[{format:"domain",value:"geforce.cn"},{format:"domain",value:"geforce.co.kr"},{format:"domain",value:"geforce.co.uk"},{format:"domain",value:"geforce.com"},{format:"domain",value:"geforce.com.tw"},{format:"domain",value:"gputechconf.cn"},{format:"domain",value:"gputechconf.co.kr"},{format:"domain",value:"gputechconf.com"},{format:"domain",value:"gputechconf.com.au"},{format:"domain",value:"gputechconf.com.tw"},{format:"domain",value:"gputechconf.eu"},{format:"domain",value:"gputechconf.in"},{format:"domain",value:"gputechconf.jp"},{format:"domain",value:"nvidia.asia"},{format:"domain",value:"nvidia.at"},{format:"domain",value:"nvidia.be"},{format:"domain",value:"nvidia.ch"},{format:"domain",value:"nvidia.cn"},{format:"domain",value:"nvidia.co.at"},{format:"domain",value:"nvidia.co.in"},{format:"domain",value:"nvidia.co.jp"},{format:"domain",value:"nvidia.co.kr"},{format:"domain",value:"nvidia.co.uk"},{format:"domain",value:"nvidia.com"},{format:"domain",value:"nvidia.com.au"},{format:"domain",value:"nvidia.com.br"},{format:"domain",value:"nvidia.com.mx"},{format:"domain",value:"nvidia.com.pe"},{format:"domain",value:"nvidia.com.pl"},{format:"domain",value:"nvidia.com.tr"},{format:"domain",value:"nvidia.com.tw"},{format:"domain",value:"nvidia.com.ua"},{format:"domain",value:"nvidia.com.ve"},{format:"domain",value:"nvidia.cz"},{format:"domain",value:"nvidia.de"},{format:"domain",value:"nvidia.dk"},{format:"domain",value:"nvidia.es"},{format:"domain",value:"nvidia.eu"},{format:"domain",value:"nvidia.fi"},{format:"domain",value:"nvidia.fr"},{format:"domain",value:"nvidia.in"},{format:"domain",value:"nvidia.it"},{format:"domain",value:"nvidia.jp"},{format:"domain",value:"nvidia.lu"},{format:"domain",value:"nvidia.mx"},{format:"domain",value:"nvidia.nl"},{format:"domain",value:"nvidia.no"},{format:"domain",value:"nvidia.pl"},{format:"domain",value:"nvidia.ro"},{format:"domain",value:"nvidia.ru"},{format:"domain",value:"nvidia.se"},{format:"domain",value:"nvidia.tw"},{format:"domain",value:"nvidiaforhp.com"},{format:"domain",value:"nvidiagrid.net"},{format:"domain",value:"shotwithgeforce.com"},{format:"domain",value:"tegrazone.co"},{format:"domain",value:"tegrazone.co.kr"},{format:"domain",value:"tegrazone.com"},{format:"domain",value:"tegrazone.jp"},{format:"domain",value:"tegrazone.kr"},{format:"full domain",value:"nvidia.tt.omtrdc.net"}],[{format:"domain",value:"360.cn"},{format:"domain",value:"360.com"},{format:"domain",value:"360.net"},{format:"domain",value:"360-jr.com"},{format:"domain",value:"360chou.com"},{format:"domain",value:"360daikuan.com"},{format:"domain",value:"360huzhubao.com"},{format:"domain",value:"360jie.com"},{format:"domain",value:"360jinrong.net"},{format:"domain",value:"360kan.com"},{format:"domain",value:"360kuai.com"},{format:"domain",value:"360os.com"},{format:"domain",value:"360panyun.cn"},{format:"domain",value:"360safe.com"},{format:"domain",value:"360shouji.com"},{format:"domain",value:"360taojin.com"},{format:"domain",value:"360totalsecurity.com"},{format:"domain",value:"360tpcdn.com"},{format:"domain",value:"360tres.com"},{format:"domain",value:"360webcache.com"},{format:"domain",value:"360zqaq.com"},{format:"domain",value:"anquanke.com"},{format:"domain",value:"haoso.com"},{format:"domain",value:"haosou.com"},{format:"domain",value:"haosou.com.cn"},{format:"domain",value:"haosou.net"},{format:"domain",value:"i360mall.com"},{format:"domain",value:"ludashi.com"},{format:"domain",value:"nicaifu.com"},{format:"domain",value:"nzwgs.com"},{format:"domain",value:"qhimg.com"},{format:"domain",value:"qhimgs0.com"},{format:"domain",value:"qhimgs1.com"},{format:"domain",value:"qhimgs2.com"},{format:"domain",value:"qhimgs3.com"},{format:"domain",value:"qhimgs4.com"},{format:"domain",value:"qhimgs5.com"},{format:"domain",value:"qhimgs6.com"},{format:"domain",value:"qhmsg.com"},{format:"domain",value:"qhres.com"},{format:"domain",value:"qhres2.com"},{format:"domain",value:"qhstatic.com"},{format:"domain",value:"qhupdate.com"},{format:"domain",value:"qihuapi.cn"},{format:"domain",value:"qihucdn.com"},{format:"domain",value:"qihoo.com"},{format:"domain",value:"qihoo.net"},{format:"domain",value:"qikucdn.com"},{format:"domain",value:"so.com"},{format:"domain",value:"sou.com"},{format:"domain",value:"urlqh.cn"},{format:"domain",value:"xiaoluyouxuan.com"},{format:"domain",value:"xiaoluzhidian.com"},{format:"domain",value:"xjietiao.com"},{format:"domain",value:"youhua.com"},{format:"domain",value:"yunpan.cn"},{format:"domain",value:"75.team"},{format:"domain",value:"75team.com"},{format:"domain",value:"baomitu.com"}],[{format:"domain",value:"icbc"},{format:"domain",value:"95588.com"},{format:"domain",value:"95588.com.cn"},{format:"domain",value:"dccnet.com.cn"},{format:"domain",value:"icbc-at.com"},{format:"domain",value:"icbc-cz.com"},{format:"domain",value:"icbc-ltd.com"},{format:"domain",value:"icbc-uk.com"},{format:"domain",value:"icbc-us.com"},{format:"domain",value:"icbc.ae"},{format:"domain",value:"icbc.be"},{format:"domain",value:"icbc.co.id"},{format:"domain",value:"icbc.co.jp"},{format:"domain",value:"icbc.co.kr"},{format:"domain",value:"icbc.co.nl"},{format:"domain",value:"icbc.com.au"},{format:"domain",value:"icbc.com.cn"},{format:"domain",value:"icbc.com.es"},{format:"domain",value:"icbc.com.kh"},{format:"domain",value:"icbc.com.kw"},{format:"domain",value:"icbc.com.la"},{format:"domain",value:"icbc.com.mm"},{format:"domain",value:"icbc.com.mo"},{format:"domain",value:"icbc.com.mx"},{format:"domain",value:"icbc.com.pe"},{format:"domain",value:"icbc.com.pk"},{format:"domain",value:"icbc.com.qa"},{format:"domain",value:"icbc.com.sg"},{format:"domain",value:"icbc.com.vn"},{format:"domain",value:"icbc.de"},{format:"domain",value:"icbc.eu"},{format:"domain",value:"icbc.lu"},{format:"domain",value:"icbcalmaty.kz"},{format:"domain",value:"icbcasia.com"},{format:"domain",value:"icbcbr.com.br"},{format:"domain",value:"icbccs.com.cn"},{format:"domain",value:"icbccstz.com.cn"},{format:"domain",value:"icbci.com.hk"},{format:"domain",value:"icbcina.com"},{format:"domain",value:"icbcindia.com"},{format:"domain",value:"icbcit.com"},{format:"domain",value:"icbclondon.com"},{format:"domain",value:"icbcmanila.com.cn"},{format:"domain",value:"icbcme.ae"},{format:"domain",value:"icbcmoscow.ru"},{format:"domain",value:"icbcmy.com"},{format:"domain",value:"icbcnz.com"},{format:"domain",value:"icbcpanama.com"},{format:"domain",value:"icbcparis.fr"},{format:"domain",value:"icbcpl.com"},{format:"domain",value:"icbcstandard.com"},{format:"domain",value:"icbcstandardbank.com"},{format:"domain",value:"icbcstandardresources.com"},{format:"domain",value:"icbcstandardsecurities.com"},{format:"domain",value:"icbcswiss.com"},{format:"domain",value:"icbcthai.com"},{format:"domain",value:"icbkfs.com"},{format:"domain",value:"icbkus.com"}],[{format:"domain",value:"3304399.com"},{format:"domain",value:"3304399.net"},{format:"domain",value:"3839.com"},{format:"domain",value:"3839apk.com"},{format:"domain",value:"3839app.com"},{format:"domain",value:"3839app.net"},{format:"domain",value:"3839img.com"},{format:"domain",value:"3839pay.com"},{format:"domain",value:"3839pic.com"},{format:"domain",value:"3839vc.com"},{format:"domain",value:"3839video.com"},{format:"domain",value:"4399.cn"},{format:"domain",value:"4399.com"},{format:"domain",value:"4399.net"},{format:"domain",value:"4399api.com"},{format:"domain",value:"4399api.net"},{format:"domain",value:"4399biule.com"},{format:"domain",value:"4399dmw.com"},{format:"domain",value:"4399er.com"},{format:"domain",value:"4399hhh.com"},{format:"domain",value:"4399inc.com"},{format:"domain",value:"4399mail.com"},{format:"domain",value:"4399pk.com"},{format:"domain",value:"4399sj.cn"},{format:"domain",value:"4399sj.com"},{format:"domain",value:"4399swf.com"},{format:"domain",value:"4399wanju.com"},{format:"domain",value:"4399youpai.com"},{format:"domain",value:"4399youxi.com"},{format:"domain",value:"4399yyy.com"},{format:"domain",value:"5054399.com"},{format:"domain",value:"5054399.net"},{format:"domain",value:"71acg.com"},{format:"domain",value:"71acg.net"},{format:"domain",value:"appeeres.com"},{format:"domain",value:"bx1k.com"},{format:"domain",value:"edu4399.com"},{format:"domain",value:"funnycore.com"},{format:"domain",value:"guoping123.com"},{format:"domain",value:"i3839.com"},{format:"domain",value:"ihykb.com"},{format:"domain",value:"img4399.com"},{format:"domain",value:"mail4399.com"},{format:"domain",value:"me4399.com"},{format:"domain",value:"my4399.com"},{format:"domain",value:"mysiteres.com"},{format:"domain",value:"nzsiteres.com"},{format:"domain",value:"qq163.com"},{format:"domain",value:"qq163.net"},{format:"domain",value:"tuer123.com"},{format:"domain",value:"wanwan4399.com"},{format:"domain",value:"we4399.com"},{format:"domain",value:"webgame163.com"},{format:"domain",value:"youba.com"},{format:"domain",value:"yxhhdl.com"}],[{format:"domain",value:"ieee.org"},{format:"domain",value:"ieee.tv"},{format:"domain",value:"tryengineering.org"},{format:"domain",value:"ieee-ccnc.org"},{format:"domain",value:"ieee-ecce.org"},{format:"domain",value:"ieeemce.org"},{format:"domain",value:"standardsuniversity.org"},{format:"domain",value:"ieee-region6.org"},{format:"domain",value:"ieee.ca"},{format:"domain",value:"ieeer10.org"},{format:"domain",value:"ieeer5.org"},{format:"domain",value:"ieeer8.org"},{format:"domain",value:"ieeeusa.org"},{format:"domain",value:"ieeefoundation.org"},{format:"domain",value:"ieee-into-focus.org"},{format:"domain",value:"ieee-vics.org"},{format:"domain",value:"ieeeday.org"},{format:"domain",value:"datasheets360.com"},{format:"domain",value:"globalspec.com"},{format:"domain",value:"ieee-isto.org"},{format:"domain",value:"techstreet.com"},{format:"domain",value:"computer.org"},{format:"domain",value:"comsoc.org"},{format:"domain",value:"embs.org"},{format:"domain",value:"emcs.org"},{format:"domain",value:"grss-ieee.org"},{format:"domain",value:"ieee-aess.org"},{format:"domain",value:"ieee-cas.org"},{format:"domain",value:"ieee-ceda.org"},{format:"domain",value:"ieee-edusociety.org"},{format:"domain",value:"ieee-ies.org"},{format:"domain",value:"ieee-ims.org"},{format:"domain",value:"ieee-npss.org"},{format:"domain",value:"ieee-pels.org"},{format:"domain",value:"ieee-pes.org"},{format:"domain",value:"ieee-ras.org"},{format:"domain",value:"ieee-sensors.org"},{format:"domain",value:"ieee-tems.org"},{format:"domain",value:"ieee-uffc.org"},{format:"domain",value:"ieeeaps.org"},{format:"domain",value:"ieeecsc.org"},{format:"domain",value:"ieeecss.org"},{format:"domain",value:"ieeedeis.org"},{format:"domain",value:"ieeemagnetics.org"},{format:"domain",value:"ieeenano.org"},{format:"domain",value:"ieeeoes.org"},{format:"domain",value:"ieeesmc.org"},{format:"domain",value:"ieeesystemscouncil.org"},{format:"domain",value:"itsoc.org"},{format:"domain",value:"mtt.org"},{format:"domain",value:"photonicssociety.org"},{format:"domain",value:"signalprocessingsociety.org"},{format:"domain",value:"technologyandsociety.org"},{format:"domain",value:"vtsociety.org"}],[{format:"domain",value:"historyofdota.com"},{format:"domain",value:"historyofdota.net"},{format:"domain",value:"historyofdota.org"},{format:"domain",value:"instituteofwar.org"},{format:"domain",value:"molesports.com"},{format:"domain",value:"rgpub.io"},{format:"domain",value:"riot-games.com"},{format:"domain",value:"riot.com"},{format:"domain",value:"riot.net"},{format:"domain",value:"riotcdn.net"},{format:"domain",value:"riotgames.co.kr"},{format:"domain",value:"riotgames.com"},{format:"domain",value:"riotgames.info"},{format:"domain",value:"riotgames.jp"},{format:"domain",value:"riotgames.net"},{format:"domain",value:"riotgames.tv"},{format:"domain",value:"riotpin.com"},{format:"domain",value:"riotpoints.com"},{format:"domain",value:"rstatic.net"},{format:"domain",value:"supremacy.com"},{format:"domain",value:"supremacy.net"},{format:"domain",value:"championshipseriesleague.com"},{format:"domain",value:"lcsmerch.com"},{format:"domain",value:"leaguehighschool.com"},{format:"domain",value:"leagueoflegends.ca"},{format:"domain",value:"leagueoflegends.cn"},{format:"domain",value:"leagueoflegends.co.kr"},{format:"domain",value:"leagueoflegends.com"},{format:"domain",value:"leagueoflegends.info"},{format:"domain",value:"leagueoflegends.kr"},{format:"domain",value:"leagueoflegends.net"},{format:"domain",value:"leagueoflegends.org"},{format:"domain",value:"leagueoflegendsscripts.com"},{format:"domain",value:"leaguesharp.info"},{format:"domain",value:"leaguoflegends.com"},{format:"domain",value:"learnwithleague.com"},{format:"domain",value:"lol-europe.com"},{format:"domain",value:"lolclub.org"},{format:"domain",value:"lolespor.com"},{format:"domain",value:"lolesports.com"},{format:"domain",value:"lolfanart.net"},{format:"domain",value:"lolpcs.com"},{format:"domain",value:"lolshop.co.kr"},{format:"domain",value:"lolstatic.com"},{format:"domain",value:"lolusercontent.com"},{format:"domain",value:"lpl.com.cn"},{format:"domain",value:"pvp.net"},{format:"domain",value:"pvp.tv"},{format:"domain",value:"ulol.com"},{format:"full domain",value:"lolstatic-a.akamaihd.net"},{format:"domain",value:"playvalorant.com"},{format:"domain",value:"riotforgegames.com"},{format:"domain",value:"ruinedking.com"},{format:"domain",value:"convrgencegame.com"}],[{format:"domain",value:"apimkt.net"},{format:"domain",value:"cdndo.com"},{format:"domain",value:"clk1.cn"},{format:"domain",value:"clk1.top"},{format:"domain",value:"ecloud-gdu.com"},{format:"domain",value:"fshark.cn"},{format:"domain",value:"globalrdp.cn"},{format:"domain",value:"globalssh.cn"},{format:"domain",value:"iprdp.net"},{format:"domain",value:"ipssh.net"},{format:"domain",value:"me1.ltd"},{format:"domain",value:"slk1.net"},{format:"domain",value:"u-cdn.net"},{format:"domain",value:"ucgslb.cn"},{format:"domain",value:"ucgslb.com"},{format:"domain",value:"ucgslb.info"},{format:"domain",value:"ucgslb.net"},{format:"domain",value:"ucgslb.top"},{format:"domain",value:"ucloud-edm.com"},{format:"domain",value:"ucloud.cn"},{format:"domain",value:"ucloud.com.cn"},{format:"domain",value:"ucloud365.com"},{format:"domain",value:"ucloudadmin.com"},{format:"domain",value:"ucloudapi.com"},{format:"domain",value:"ucloudgda.com"},{format:"domain",value:"ucloudnaming.cn"},{format:"domain",value:"ucloudnaming.com"},{format:"domain",value:"ucloudnaming.info"},{format:"domain",value:"ucloudnaming.net"},{format:"domain",value:"ucloudoss.com"},{format:"domain",value:"ucloudstack.cn"},{format:"domain",value:"ucloudstack.com"},{format:"domain",value:"ucloudstack.net"},{format:"domain",value:"ucloudstor.com"},{format:"domain",value:"ucloudufile.com"},{format:"domain",value:"ucnaming.cn"},{format:"domain",value:"ucnaming.com"},{format:"domain",value:"ucnaming.info"},{format:"domain",value:"ucnaming.net"},{format:"domain",value:"uewaf.com"},{format:"domain",value:"ufileos.com"},{format:"domain",value:"ugslb.cn"},{format:"domain",value:"ugslb.com"},{format:"domain",value:"ugslb.info"},{format:"domain",value:"ugslb.net"},{format:"domain",value:"ugslb.top"},{format:"domain",value:"ugslb2.net"},{format:"domain",value:"uhasadmin.com"},{format:"domain",value:"unaming.cn"},{format:"domain",value:"unaming.info"},{format:"domain",value:"unaming.net"},{format:"domain",value:"urtc.com.cn"},{format:"domain",value:"uslk.net"},{format:"domain",value:"uucl.vip"}],[{format:"domain",value:"pin.it"},{format:"domain",value:"pinimg.com"},{format:"domain",value:"pinterest.at"},{format:"domain",value:"pinterest.be"},{format:"domain",value:"pinterest.ca"},{format:"domain",value:"pinterest.ch"},{format:"domain",value:"pinterest.cl"},{format:"domain",value:"pinterest.co"},{format:"domain",value:"pinterest.co.at"},{format:"domain",value:"pinterest.co.in"},{format:"domain",value:"pinterest.co.kr"},{format:"domain",value:"pinterest.co.nz"},{format:"domain",value:"pinterest.co.uk"},{format:"domain",value:"pinterest.com"},{format:"domain",value:"pinterest.com.au"},{format:"domain",value:"pinterest.com.bo"},{format:"domain",value:"pinterest.com.ec"},{format:"domain",value:"pinterest.com.mx"},{format:"domain",value:"pinterest.com.pe"},{format:"domain",value:"pinterest.com.py"},{format:"domain",value:"pinterest.com.uy"},{format:"domain",value:"pinterest.com.vn"},{format:"domain",value:"pinterest.de"},{format:"domain",value:"pinterest.dk"},{format:"domain",value:"pinterest.ec"},{format:"domain",value:"pinterest.engineering"},{format:"domain",value:"pinterest.es"},{format:"domain",value:"pinterest.fr"},{format:"domain",value:"pinterest.hu"},{format:"domain",value:"pinterest.id"},{format:"domain",value:"pinterest.ie"},{format:"domain",value:"pinterest.in"},{format:"domain",value:"pinterest.info"},{format:"domain",value:"pinterest.it"},{format:"domain",value:"pinterest.jp"},{format:"domain",value:"pinterest.kr"},{format:"domain",value:"pinterest.mx"},{format:"domain",value:"pinterest.nl"},{format:"domain",value:"pinterest.nz"},{format:"domain",value:"pinterest.pe"},{format:"domain",value:"pinterest.ph"},{format:"domain",value:"pinterest.pt"},{format:"domain",value:"pinterest.ru"},{format:"domain",value:"pinterest.se"},{format:"domain",value:"pinterest.th"},{format:"domain",value:"pinterest.tw"},{format:"domain",value:"pinterest.uk"},{format:"domain",value:"pinterest.vn"},{format:"domain",value:"pinterestmail.com"}],[{format:"domain",value:"112263.com"},{format:"domain",value:"callhulu.com"},{format:"domain",value:"findyourlimits.com"},{format:"domain",value:"freehulu.com"},{format:"domain",value:"hooloo.tv"},{format:"domain",value:"hoolu.com"},{format:"domain",value:"hoolu.tv"},{format:"domain",value:"hu1u.com"},{format:"domain",value:"huloo.cc"},{format:"domain",value:"huloo.tv"},{format:"domain",value:"hulu.com"},{format:"domain",value:"hulu.jp"},{format:"domain",value:"hulu.tv"},{format:"domain",value:"hulu.us"},{format:"domain",value:"huluaction.com"},{format:"domain",value:"huluad.com"},{format:"domain",value:"huluapp.com"},{format:"domain",value:"huluasks.com"},{format:"domain",value:"hulucall.com"},{format:"domain",value:"hulufree.com"},{format:"domain",value:"hulugans.com"},{format:"domain",value:"hulugermany.com"},{format:"domain",value:"hulugo.com"},{format:"domain",value:"huluim.com"},{format:"domain",value:"huluinstantmessenger.com"},{format:"domain",value:"huluitaly.com"},{format:"domain",value:"hulunet.com"},{format:"domain",value:"hulunetwork.com"},{format:"domain",value:"huluplus.com"},{format:"domain",value:"hulupremium.com"},{format:"domain",value:"hulupurchase.com"},{format:"domain",value:"huluqa.com"},{format:"domain",value:"hulurussia.com"},{format:"domain",value:"huluspain.com"},{format:"domain",value:"hulusports.com"},{format:"domain",value:"hulustream.com"},{format:"domain",value:"huluteam.com"},{format:"domain",value:"hulutv.com"},{format:"domain",value:"huluusa.com"},{format:"domain",value:"joinmaidez.com"},{format:"domain",value:"mushymush.tv"},{format:"domain",value:"myhulu.com"},{format:"domain",value:"originalhulu.com"},{format:"domain",value:"payhulu.com"},{format:"domain",value:"registerhulu.com"},{format:"domain",value:"thehulubraintrust.com"},{format:"domain",value:"wwwhuluplus.com"},{format:"full domain",value:"hulu.playback.edge.bamgrid.com"}],[{format:"domain",value:"amerikaninsesi.com"},{format:"domain",value:"amerikaninsesi.org"},{format:"domain",value:"amerikaovozi.com"},{format:"domain",value:"amerikayidzayn.com"},{format:"domain",value:"amerikiskhma.com"},{format:"domain",value:"bbg.gov"},{format:"domain",value:"dandalinvoa.com"},{format:"domain",value:"darivoa.com"},{format:"domain",value:"dengeamerika.com"},{format:"domain",value:"dengiamerika.com"},{format:"domain",value:"glasamerike.net"},{format:"domain",value:"golos-ameriki.ru"},{format:"domain",value:"golosameriki.com"},{format:"domain",value:"insidevoa.com"},{format:"domain",value:"pashtovoa.com"},{format:"domain",value:"persagg.com"},{format:"domain",value:"radiyoyacuvoa.com"},{format:"domain",value:"urduvoa.com"},{format:"domain",value:"voa.gov"},{format:"domain",value:"voaafaanoromoo.com"},{format:"domain",value:"voaafrique.com"},{format:"domain",value:"voabambara.com"},{format:"domain",value:"voabangla.com"},{format:"domain",value:"voacambodia.com"},{format:"domain",value:"voacantonese.com"},{format:"domain",value:"voachinese.com"},{format:"domain",value:"voadeewanews.com"},{format:"domain",value:"voadeewaradio.com"},{format:"domain",value:"voahausa.com"},{format:"domain",value:"voaindonesia.com"},{format:"domain",value:"voakorea.com"},{format:"domain",value:"voalingala.com"},{format:"domain",value:"voandebele.com"},{format:"domain",value:"voanews.com"},{format:"domain",value:"voanews.eu"},{format:"domain",value:"voanoticias.com"},{format:"domain",value:"voanouvel.com"},{format:"domain",value:"voaportugues.com"},{format:"domain",value:"voashona.com"},{format:"domain",value:"voasomali.com"},{format:"domain",value:"voaswahili.com"},{format:"domain",value:"voathai.com"},{format:"domain",value:"voatibetan.com"},{format:"domain",value:"voatibetanenglish.com"},{format:"domain",value:"voatiengviet.com"},{format:"domain",value:"voatour.com"},{format:"domain",value:"voazimbabwe.com"},{format:"domain",value:"zeriamerikes.com"}],[{format:"domain",value:"mindgeek.com"},{format:"domain",value:"babes.com"},{format:"domain",value:"men.com"},{format:"domain",value:"porniq.com"},{format:"domain",value:"pornmd.com"},{format:"domain",value:"seancody.com"},{format:"domain",value:"thumbzilla.com"},{format:"domain",value:"twistys.com"},{format:"domain",value:"webcams.tv"},{format:"domain",value:"whynotbi.com"},{format:"domain",value:"brazzer.com"},{format:"domain",value:"brazzers.com"},{format:"domain",value:"brazzers.xxx"},{format:"domain",value:"brazzersnetwork.com"},{format:"domain",value:"mofos.com"},{format:"domain",value:"digitalplayground.com"},{format:"domain",value:"digitalplaygroundnetwork.com"},{format:"domain",value:"mydirtyhobby.com"},{format:"domain",value:"mdhcdn.com"},{format:"domain",value:"nutaku.com"},{format:"domain",value:"nutaku.net"},{format:"domain",value:"gaytube.com"},{format:"domain",value:"phncdn.com"},{format:"domain",value:"phprcdn.com"},{format:"domain",value:"porngub.com"},{format:"domain",value:"pornhub-deutsch.net"},{format:"domain",value:"pornhubapparel.com"},{format:"domain",value:"pornhub.com"},{format:"domain",value:"pornhub.org"},{format:"domain",value:"pornhubpremium.com"},{format:"domain",value:"realitykings.com"},{format:"domain",value:"rk.com"},{format:"domain",value:"livehdcams.com"},{format:"domain",value:"redtube.com"},{format:"domain",value:"redtube.com.br"},{format:"domain",value:"redtubepremium.com"},{format:"domain",value:"rdtcdn.com"},{format:"domain",value:"tube8.com"},{format:"domain",value:"tube8.fr"},{format:"domain",value:"extremetube.com"},{format:"domain",value:"keezmovies.com"},{format:"domain",value:"youporn.com"},{format:"domain",value:"youporngay.com"},{format:"domain",value:"youpornpremium.com"},{format:"domain",value:"youpornru.com"},{format:"domain",value:"yopornshop.com"},{format:"domain",value:"ypncdn.com"}],[{format:"domain",value:"playartifact.com"},{format:"domain",value:"s.team"},{format:"domain",value:"steam-api.com"},{format:"domain",value:"steam-chat.com"},{format:"domain",value:"steamcommunity.com"},{format:"domain",value:"steamcontent.com"},{format:"domain",value:"steamdeck.com"},{format:"domain",value:"steamgames.com"},{format:"domain",value:"steampowered.com"},{format:"domain",value:"steamserver.net"},{format:"domain",value:"steamstatic.com"},{format:"domain",value:"steamusercontent.com"},{format:"domain",value:"underlords.com"},{format:"domain",value:"valvesoftware.com"},{format:"domain",value:"edge.steam-dns.top.comcast.net"},{format:"domain",value:"steam.apac.qtlglb.com"},{format:"domain",value:"steam.eca.qtlglb.com"},{format:"domain",value:"steam.naeu.qtlglb.com"},{format:"domain",value:"steam.ru.qtlglb.com"},{format:"full domain",value:"f3b7q2p3.ssl.hwcdn.net"},{format:"domain",value:"steam.cdn.on.net"},{format:"domain",value:"steam.cdn.orcon.net.nz"},{format:"domain",value:"steam.cdn.slingshot.co.nz"},{format:"domain",value:"steam.cdn.webra.ru"},{format:"full domain",value:"steambroadcast.akamaized.net"},{format:"full domain",value:"steamcdn-a.akamaihd.net"},{format:"full domain",value:"steamcommunity-a.akamaihd.net"},{format:"full domain",value:"steampipe-kr.akamaized.net"},{format:"full domain",value:"steampipe-partner.akamaized.net"},{format:"full domain",value:"steampipe.akamaized.net"},{format:"full domain",value:"steamstore-a.akamaihd.net"},{format:"full domain",value:"steamusercontent-a.akamaihd.net"},{format:"full domain",value:"steamuserimages-a.akamaihd.net"},{format:"full domain",value:"steamvideo-a.akamaihd.net"},{format:"domain",value:"csgo.wmsj.cn"},{format:"domain",value:"dota2.wmsj.cn"},{format:"domain",value:"wmsjsteam.com"},{format:"domain",value:"dl.steam.clngaa.com"},{format:"domain",value:"dl.steam.ksyna.com"},{format:"domain",value:"st.dl.bscstorage.net"},{format:"domain",value:"st.dl.eccdnx.com"},{format:"domain",value:"st.dl.pinyuncloud.com"},{format:"domain",value:"steampipe.steamcontent.tnkjmec.com"},{format:"domain",value:"steampowered.com.8686c.com"},{format:"domain",value:"steamstatic.com.8686c.com"},{format:"full domain",value:"xz.pphimalayanrt.com"},{format:"domain",value:"steamchina.com"}],[{format:"domain",value:"actives.youku.com"},{format:"domain",value:"ad.api.3g.youku.com"},{format:"domain",value:"ad.api.mobile.youku.com"},{format:"domain",value:"ad.mobile.youku.com"},{format:"domain",value:"a-dxk.play.api.3g.youku.com"},{format:"domain",value:"atm.youku.com"},{format:"domain",value:"b.smartvideo.youku.com"},{format:"domain",value:"c.yes.youku.com"},{format:"domain",value:"das.api.youku.com"},{format:"domain",value:"das.mobile.youku.com"},{format:"domain",value:"dev-push.m.youku.com"},{format:"domain",value:"dl.g.youku.com"},{format:"domain",value:"dmapp.youku.com"},{format:"domain",value:"e.stat.ykimg.com"},{format:"domain",value:"gamex.mobile.youku.com"},{format:"domain",value:"guanggaoad.youku.com"},{format:"domain",value:"hudong.pl.youku.com"},{format:"domain",value:"huodong.pl.youku.com"},{format:"domain",value:"huodong.vip.youku.com"},{format:"domain",value:"hz.youku.com"},{format:"domain",value:"iyes.youku.com"},{format:"domain",value:"l.ykimg.com"},{format:"domain",value:"lstat.youku.com"},{format:"domain",value:"mobilemsg.youku.com"},{format:"domain",value:"msg.youku.com"},{format:"domain",value:"myes.youku.com"},{format:"domain",value:"p.l.youku.com"},{format:"domain",value:"pl.youku.com"},{format:"domain",value:"passport-log.youku.com"},{format:"domain",value:"p-log.ykimg.com"},{format:"domain",value:"push.m.youku.com"},{format:"domain",value:"r.l.youku.com"},{format:"domain",value:"s.p.youku.com"},{format:"domain",value:"sdk.m.youku.com"},{format:"domain",value:"stat.youku.com"},{format:"domain",value:"statis.api.3g.youku.com"},{format:"domain",value:"store.tv.api.3g.youku.com"},{format:"domain",value:"store.xl.api.3g.youku.com"},{format:"domain",value:"tdrec.youku.com"},{format:"domain",value:"test.ott.youku.com"},{format:"domain",value:"test.sdk.m.youku.com"},{format:"domain",value:"v.l.youku.com"},{format:"domain",value:"val.api.youku.com"},{format:"domain",value:"wan.youku.com"},{format:"domain",value:"ykatr.youku.com"},{format:"domain",value:"ykrec.youku.com"}],[{format:"domain",value:"airgonetworks.com"},{format:"domain",value:"berkanawireless.com"},{format:"domain",value:"cdmatech.com"},{format:"domain",value:"dragoniscoming.com"},{format:"domain",value:"gobianywhere.com"},{format:"domain",value:"gpsonextra.net"},{format:"domain",value:"hellosmartbook.com"},{format:"domain",value:"imod.com"},{format:"domain",value:"ipleadership.org"},{format:"domain",value:"iskoot.com"},{format:"domain",value:"izatcloud.net"},{format:"domain",value:"meetsmartbook.com"},{format:"domain",value:"patenttruth.org"},{format:"domain",value:"pixtronix.com"},{format:"domain",value:"qceventscenter.com.cn"},{format:"domain",value:"qctconnect.com"},{format:"domain",value:"qprize.com"},{format:"domain",value:"qualcomm-email.com"},{format:"domain",value:"qualcomm.cn"},{format:"domain",value:"qualcomm.co.id"},{format:"domain",value:"qualcomm.co.in"},{format:"domain",value:"qualcomm.co.jp"},{format:"domain",value:"qualcomm.co.kr"},{format:"domain",value:"qualcomm.co.uk"},{format:"domain",value:"qualcomm.com"},{format:"domain",value:"qualcomm.com.br"},{format:"domain",value:"qualcomm.com.tw"},{format:"domain",value:"qualcomm.de"},{format:"domain",value:"qualcomm.fr"},{format:"domain",value:"qualcommhalo.com"},{format:"domain",value:"qualcommlabs.com"},{format:"domain",value:"qualcommmea.com"},{format:"domain",value:"qualcommretail.com"},{format:"domain",value:"qualcommventures.cn"},{format:"domain",value:"qualcommventures.com"},{format:"domain",value:"qualphone.com"},{format:"domain",value:"quicinc.com"},{format:"domain",value:"snapdragon.cn"},{format:"domain",value:"snapdragonbooth.com"},{format:"domain",value:"uplinq.com"},{format:"domain",value:"wipower.com"},{format:"domain",value:"wirelessreach.com"},{format:"domain",value:"xtracloud.cn"},{format:"domain",value:"brewmp.com"},{format:"full domain",value:"qualcomm.sc.omtrdc.net"}],[{format:"domain",value:"argotunnel.com"},{format:"domain",value:"cf-ipfs.com"},{format:"domain",value:"cloudflare-dns.com"},{format:"domain",value:"cloudflare-ipfs.com"},{format:"domain",value:"cloudflare-quic.com"},{format:"domain",value:"cloudflare.com"},{format:"domain",value:"cloudflare.net"},{format:"domain",value:"cloudflare.tv"},{format:"domain",value:"cloudflareaccess.com"},{format:"domain",value:"cloudflareapps.com"},{format:"domain",value:"cloudflarebolt.com"},{format:"domain",value:"cloudflareclient.com"},{format:"domain",value:"cloudflareinsights.com"},{format:"domain",value:"cloudflareok.com"},{format:"domain",value:"cloudflarepreview.com"},{format:"domain",value:"cloudflareresolve.com"},{format:"domain",value:"cloudflaressl.com"},{format:"domain",value:"cloudflarestatus.com"},{format:"domain",value:"cloudflarestorage.com"},{format:"domain",value:"cloudflarestream.com"},{format:"domain",value:"cloudflaretest.com"},{format:"domain",value:"cloudflarewarp.com"},{format:"domain",value:"every1dns.net"},{format:"domain",value:"one.one.one"},{format:"domain",value:"pacloudflare.com"},{format:"domain",value:"pages.dev"},{format:"domain",value:"trycloudflare.com"},{format:"domain",value:"videodelivery.net"},{format:"domain",value:"warp.plus"},{format:"domain",value:"workers.dev"},{format:"domain",value:"cf-ns.com"},{format:"domain",value:"cf-ns.net"},{format:"domain",value:"cf-ns.site"},{format:"domain",value:"cf-ns.tech"},{format:"domain",value:"cftest5.cn"},{format:"domain",value:"cftest6.cn"},{format:"domain",value:"cftest7.com"},{format:"domain",value:"cftest8.com"},{format:"domain",value:"cloudflare-cn.com"},{format:"domain",value:"cloudflarecn.net"},{format:"domain",value:"cloudflareinsights-cn.com"},{format:"domain",value:"cloudflareprod.com"},{format:"domain",value:"cloudflarestaging.com"},{format:"domain",value:"cloudflarestoragegw.com"}],[{format:"domain",value:"acg.tv"},{format:"domain",value:"acgvideo.com"},{format:"domain",value:"animetamashi.cn"},{format:"domain",value:"animetamashi.com"},{format:"domain",value:"anitama.cn"},{format:"domain",value:"anitama.net"},{format:"domain",value:"b23.tv"},{format:"domain",value:"bigfun.cn"},{format:"domain",value:"bili22.cn"},{format:"domain",value:"bili2233.cn"},{format:"domain",value:"bili23.cn"},{format:"domain",value:"bili33.cn"},{format:"domain",value:"biliapi.com"},{format:"domain",value:"biliapi.net"},{format:"domain",value:"bilibili.cc"},{format:"domain",value:"bilibili.com"},{format:"domain",value:"bilibili.net"},{format:"domain",value:"bilibili.tv"},{format:"domain",value:"bilibiligame.cn"},{format:"domain",value:"bilibiligame.co"},{format:"domain",value:"bilibiligame.net"},{format:"domain",value:"bilibilipay.cn"},{format:"domain",value:"bilibilipay.com"},{format:"domain",value:"bilicdn1.com"},{format:"domain",value:"bilicdn2.com"},{format:"domain",value:"bilicdn3.com"},{format:"domain",value:"bilicdn4.com"},{format:"domain",value:"bilicdn5.com"},{format:"domain",value:"biligame.co"},{format:"domain",value:"biligame.com"},{format:"domain",value:"biligame.net"},{format:"domain",value:"biligo.com"},{format:"domain",value:"biliintl.com"},{format:"domain",value:"bilivideo.cn"},{format:"domain",value:"bilivideo.com"},{format:"domain",value:"bilivideo.net"},{format:"domain",value:"dreamcast.hk"},{format:"domain",value:"hdslb.com"},{format:"domain",value:"hdslb.org"},{format:"domain",value:"im9.com"},{format:"domain",value:"maoercdn.com"},{format:"domain",value:"mincdn.com"},{format:"domain",value:"yo9.com"},{format:"full domain",value:"upos-hz-mirrorakam.akamaized.net"}],[{format:"domain",value:"cispaletter.com"},{format:"domain",value:"cispaletter.org"},{format:"domain",value:"cometotheduckside.com"},{format:"domain",value:"ddg.co"},{format:"domain",value:"ddg.gg"},{format:"domain",value:"ddh.gg"},{format:"domain",value:"dgg.gg"},{format:"domain",value:"dontbubble.us"},{format:"domain",value:"donttrack.us"},{format:"domain",value:"duck.co"},{format:"domain",value:"duck.com"},{format:"domain",value:"duckduckco.com"},{format:"domain",value:"duckduckco.de"},{format:"domain",value:"duckduckgo.ca"},{format:"domain",value:"duckduckgo.co"},{format:"domain",value:"duckduckgo.co.uk"},{format:"domain",value:"duckduckgo.com"},{format:"domain",value:"duckduckgo.com.mx"},{format:"domain",value:"duckduckgo.com.tw"},{format:"domain",value:"duckduckgo.de"},{format:"domain",value:"duckduckgo.dk"},{format:"domain",value:"duckduckgo.in"},{format:"domain",value:"duckduckgo.jp"},{format:"domain",value:"duckduckgo.ke"},{format:"domain",value:"duckduckgo.mx"},{format:"domain",value:"duckduckgo.nl"},{format:"domain",value:"duckduckgo.org"},{format:"domain",value:"duckduckgo.pl"},{format:"domain",value:"duckduckgo.sg"},{format:"domain",value:"duckduckgo.uk"},{format:"domain",value:"duckduckhack.com"},{format:"domain",value:"duckgo.com"},{format:"domain",value:"ducksear.ch"},{format:"domain",value:"duckside.com"},{format:"domain",value:"dukgo.com"},{format:"domain",value:"enteentegeh.de"},{format:"domain",value:"fixtracking.com"},{format:"domain",value:"goduckgo.com"},{format:"domain",value:"hacksear.ch"},{format:"domain",value:"justduckit.com"},{format:"domain",value:"privacysimplified.com"},{format:"domain",value:"privatebrowsingmyths.com"},{format:"domain",value:"spreadprivacy.com"}],[{format:"domain",value:"blizzard.cn"},{format:"domain",value:"blizzard.com"},{format:"domain",value:"blizzardgames.cn"},{format:"domain",value:"blizzardgearstore.com"},{format:"domain",value:"blz-contentstack.com"},{format:"domain",value:"blzstatic.cn"},{format:"domain",value:"battle.net"},{format:"domain",value:"battlenet.com.cn"},{format:"domain",value:"bnet.163.com"},{format:"full domain",value:"blizzard.nefficient.co.kr"},{format:"full domain",value:"blzddist1-a.akamaihd.net"},{format:"full domain",value:"blzddistkr1-a.akamaihd.net"},{format:"full domain",value:"bnetcmsus-a.akamaihd.net"},{format:"full domain",value:"bnetproduct-a.akamaihd.net"},{format:"full domain",value:"bnetshopus.akamaized.net"},{format:"domain",value:"diablo3.com"},{format:"domain",value:"diabloimmortal.com"},{format:"full domain",value:"di.res.netease.com"},{format:"full domain",value:"diablo3.nosdn.127.net"},{format:"domain",value:"firesidegatherings.com"},{format:"domain",value:"playhearthstone.com"},{format:"full domain",value:"hearthstone.nosdn.127.net"},{format:"domain",value:"heroesofthestorm.com"},{format:"full domain",value:"hearthstone.nosdn.127.net"},{format:"full domain",value:"heroes.nos.netease.com"},{format:"domain",value:"playoverwatch.com"},{format:"full domain",value:"overwatch.nosdn.127.net"},{format:"domain",value:"starcraft.com"},{format:"domain",value:"starcraft2.com"},{format:"full domain",value:"sc2.nosdn.127.net"},{format:"domain",value:"playwarcraft3.com"},{format:"domain",value:"worldofwarcraft.com"},{format:"domain",value:"wowchina.com"},{format:"full domain",value:"wow.nosdn.127.net"},{format:"full domain",value:"blizzcon-a.akamaihd.net"},{format:"full domain",value:"blz.nosdn.127.net"},{format:"full domain",value:"blzmedia-a.akamaihd.net"},{format:"full domain",value:"blznav.akamaized.net"},{format:"full domain",value:"cn.actual.battle.net"}],[{format:"domain",value:"appcloud.com"},{format:"domain",value:"appexchange.com"},{format:"domain",value:"attic.io"},{format:"domain",value:"beyondcore.com"},{format:"domain",value:"buddymedia.com"},{format:"domain",value:"chatter.com"},{format:"domain",value:"cloudcraze.com"},{format:"domain",value:"cotweet.com"},{format:"domain",value:"data.com"},{format:"domain",value:"demandware.com"},{format:"domain",value:"desk.com"},{format:"domain",value:"documentforce.com"},{format:"domain",value:"dreamforce.com"},{format:"domain",value:"einstein.com"},{format:"domain",value:"exacttarget.com"},{format:"domain",value:"force.com"},{format:"domain",value:"govforce.com"},{format:"domain",value:"gravitytank.com"},{format:"domain",value:"heywire.com"},{format:"domain",value:"krux.com"},{format:"domain",value:"marketingcloud.com"},{format:"domain",value:"metamind.io"},{format:"domain",value:"pardot.com"},{format:"domain",value:"quotable.com"},{format:"domain",value:"radian6.com"},{format:"domain",value:"relateiq.com"},{format:"domain",value:"salesforce.com"},{format:"domain",value:"salesforce.org"},{format:"domain",value:"salesforceiq.com"},{format:"domain",value:"salesforceliveagent.com"},{format:"domain",value:"salesforcemarketingcloud.com"},{format:"domain",value:"sequence.com"},{format:"domain",value:"sfdcstatic.com"},{format:"domain",value:"sforce.com"},{format:"domain",value:"site.com"},{format:"domain",value:"social.com"},{format:"domain",value:"steelbrick.com"},{format:"domain",value:"twinprime.com"},{format:"domain",value:"weinvoiceit.com"}],[{format:"domain",value:"1lib.cloud"},{format:"domain",value:"1lib.domains"},{format:"domain",value:"1lib.education"},{format:"domain",value:"1lib.eu"},{format:"domain",value:"1lib.limited"},{format:"domain",value:"1lib.pl"},{format:"domain",value:"1lib.to"},{format:"domain",value:"1lib.tw"},{format:"domain",value:"2lib.org"},{format:"domain",value:"3lib.net"},{format:"domain",value:"art1lib.com"},{format:"domain",value:"b-ok.africa"},{format:"domain",value:"b-ok.asia"},{format:"domain",value:"b-ok.cc"},{format:"domain",value:"b-ok.global"},{format:"domain",value:"b-ok.org"},{format:"domain",value:"book4you.org"},{format:"domain",value:"bookfi.net"},{format:"domain",value:"booksc.eu"},{format:"domain",value:"booksc.me"},{format:"domain",value:"booksc.org"},{format:"domain",value:"booksc.xyz"},{format:"domain",value:"bookshome.info"},{format:"domain",value:"bookshome.net"},{format:"domain",value:"bookshome.world"},{format:"domain",value:"de1lib.org"},{format:"domain",value:"hk1lib.org"},{format:"domain",value:"libsolutions.app"},{format:"domain",value:"libsolutions.domains"},{format:"domain",value:"libsolutions.net"},{format:"domain",value:"ma1lib.org"},{format:"domain",value:"sg1lib.org"},{format:"domain",value:"singlelogin.app"},{format:"domain",value:"singlelogin.me"},{format:"domain",value:"z-lib.org"},{format:"domain",value:"zlib.life"},{format:"domain",value:"zlibcdn.com"},{format:"domain",value:"zlibcdn2.com"}],[{format:"domain",value:"58.com"},{format:"domain",value:"58.com.cn"},{format:"domain",value:"5858.com"},{format:"domain",value:"58antenna.cn"},{format:"domain",value:"58antenna.com"},{format:"domain",value:"58cdn.com.cn"},{format:"domain",value:"58che.com"},{format:"domain",value:"58control.cn"},{format:"domain",value:"58corp.com"},{format:"domain",value:"58dns.org"},{format:"domain",value:"58lovepet.com"},{format:"domain",value:"58uxd.com"},{format:"domain",value:"58v5.cn"},{format:"domain",value:"58xinghuo.cn"},{format:"domain",value:"58xinghuo.com"},{format:"domain",value:"58xueche.com"},{format:"domain",value:"anjuke.com"},{format:"domain",value:"anjukestatic.com"},{format:"domain",value:"chinahr.com"},{format:"domain",value:"chrstatic.com"},{format:"domain",value:"daojia.com"},{format:"domain",value:"diandao.org"},{format:"domain",value:"fang.com"},{format:"domain",value:"sofun.com"},{format:"domain",value:"soufunimg.com"},{format:"domain",value:"jxedt.com"},{format:"domain",value:"jxksw.net"},{format:"domain",value:"roomeet.cn"},{format:"domain",value:"xinchong.com"},{format:"domain",value:"zhuancorp.com"},{format:"domain",value:"zhuanspirit.com"},{format:"domain",value:"zhuanzhuan.com"},{format:"domain",value:"58ganji.com"},{format:"domain",value:"58ganji-corp.com"},{format:"domain",value:"ganji.com"},{format:"domain",value:"ganjistatic1.com"}],[{format:"domain",value:"cctv.cn"},{format:"domain",value:"cctv.com"},{format:"domain",value:"cctvpic.com"},{format:"domain",value:"chinaepg.cn"},{format:"domain",value:"chinalive.com"},{format:"domain",value:"citv.net.cn"},{format:"domain",value:"cnms.net.cn"},{format:"domain",value:"cntv.cn"},{format:"domain",value:"cntv.com.cn"},{format:"domain",value:"cctvlib.cn"},{format:"domain",value:"cctvlibrary.cn"},{format:"domain",value:"cctvlib.com.cn"},{format:"domain",value:"cctvlibrary.com.cn"},{format:"domain",value:"cctvpro.cn"},{format:"domain",value:"cctvpro.com.cn"},{format:"domain",value:"cntvwb.cn"},{format:"domain",value:"gjgbdszt.cn"},{format:"domain",value:"gjgbdszt.com.cn"},{format:"domain",value:"gjgbdszt.net.cn"},{format:"domain",value:"ipanda.cn"},{format:"domain",value:"ipanda.com"},{format:"domain",value:"ipanda.com.cn"},{format:"domain",value:"ipanda.net"},{format:"domain",value:"livechina.cn"},{format:"domain",value:"livechina.com"},{format:"domain",value:"olympicchannelchina.cn"},{format:"domain",value:"tvcc.cn"},{format:"domain",value:"tvcc.com.cn"},{format:"domain",value:"xn--fiq53l6wcx3kp9bc7joo6apn8a.cn"},{format:"domain",value:"xn--fiq53l90et9fpncc7joo6apn8a.cn"},{format:"domain",value:"xn--fiq53l6wcx3kp9bc7joo6apn8a.xn--fiqs8s"},{format:"domain",value:"xn--kprv4ewxfr9cpxcc7joo6apn8a.cn"},{format:"domain",value:"xn--kprv4ewxfr9cpxcc7joo6apn8a.xn--fiqs8s"},{format:"domain",value:"zggbdszt.cn"},{format:"domain",value:"zggbdszt.com.cn"},{format:"domain",value:"zggbdszt.net.cn"},{format:"domain",value:"zygbdszt.net.cn"}],[{format:"domain",value:"loveminiso.com.br"},{format:"domain",value:"miniso-au.com"},{format:"domain",value:"miniso-bh.com"},{format:"domain",value:"miniso-np.com"},{format:"domain",value:"miniso-nz.com"},{format:"domain",value:"miniso.by"},{format:"domain",value:"miniso.ca"},{format:"domain",value:"miniso.cn"},{format:"domain",value:"miniso.co"},{format:"domain",value:"miniso.co.id"},{format:"domain",value:"miniso.co.tz"},{format:"domain",value:"miniso.com"},{format:"domain",value:"miniso.com.es"},{format:"domain",value:"miniso.com.gr"},{format:"domain",value:"miniso.com.mx"},{format:"domain",value:"miniso.com.pl"},{format:"domain",value:"miniso.com.py"},{format:"domain",value:"miniso.com.tr"},{format:"domain",value:"miniso.ge"},{format:"domain",value:"miniso.ie"},{format:"domain",value:"miniso.jp"},{format:"domain",value:"miniso.ma"},{format:"domain",value:"miniso.my"},{format:"domain",value:"miniso.pe"},{format:"domain",value:"miniso.pk"},{format:"domain",value:"miniso.ua"},{format:"domain",value:"miniso.uz"},{format:"domain",value:"minisohome.cn"},{format:"domain",value:"minisoindia.com"},{format:"domain",value:"minisojordan.com"},{format:"domain",value:"minisokorea.com"},{format:"domain",value:"minisolife.co.za"},{format:"domain",value:"minisothailand.com"},{format:"domain",value:"minisovietam.vn"},{format:"domain",value:"minsio.cn"},{format:"domain",value:"myminiso.com"}],[{format:"domain",value:"yandex"},{format:"domain",value:"xn--d1acpjx3f.xn--p1ai"},{format:"domain",value:"ya.ru"},{format:"domain",value:"yandex.aero"},{format:"domain",value:"yandex.az"},{format:"domain",value:"yandex.by"},{format:"domain",value:"yandex.co.il"},{format:"domain",value:"yandex.com"},{format:"domain",value:"yandex.com.am"},{format:"domain",value:"yandex.com.ge"},{format:"domain",value:"yandex.com.ru"},{format:"domain",value:"yandex.com.tr"},{format:"domain",value:"yandex.com.ua"},{format:"domain",value:"yandex.de"},{format:"domain",value:"yandex.ee"},{format:"domain",value:"yandex.eu"},{format:"domain",value:"yandex.fi"},{format:"domain",value:"yandex.fr"},{format:"domain",value:"yandex.jobs"},{format:"domain",value:"yandex.kg"},{format:"domain",value:"yandex.kz"},{format:"domain",value:"yandex.lt"},{format:"domain",value:"yandex.lv"},{format:"domain",value:"yandex.md"},{format:"domain",value:"yandex.net"},{format:"domain",value:"yandex.org"},{format:"domain",value:"yandex.pl"},{format:"domain",value:"yandex.ru"},{format:"domain",value:"yandex.st"},{format:"domain",value:"yandex.sx"},{format:"domain",value:"yandex.tj"},{format:"domain",value:"yandex.tm"},{format:"domain",value:"yandex.ua"},{format:"domain",value:"yandex.uz"},{format:"domain",value:"yandexcloud.net"},{format:"domain",value:"yastatic.net"}],[{format:"domain",value:"verisign.asia"},{format:"domain",value:"verisign.biz"},{format:"domain",value:"verisign.ch"},{format:"domain",value:"verisign.co.in"},{format:"domain",value:"verisign.co.uk"},{format:"domain",value:"verisign.com"},{format:"domain",value:"verisign.com.au"},{format:"domain",value:"verisign.com.br"},{format:"domain",value:"verisign.com.cn"},{format:"domain",value:"verisign.com.es"},{format:"domain",value:"verisign.com.hk"},{format:"domain",value:"verisign.com.sg"},{format:"domain",value:"verisign.com.tw"},{format:"domain",value:"verisign.com.vn"},{format:"domain",value:"verisign.de"},{format:"domain",value:"verisign.dk"},{format:"domain",value:"verisign.es"},{format:"domain",value:"verisign.fr"},{format:"domain",value:"verisign.hk"},{format:"domain",value:"verisign.in"},{format:"domain",value:"verisign.info"},{format:"domain",value:"verisign.jobs"},{format:"domain",value:"verisign.mobi"},{format:"domain",value:"verisign.name"},{format:"domain",value:"verisign.net"},{format:"domain",value:"verisign.org"},{format:"domain",value:"verisign.pro"},{format:"domain",value:"verisign.se"},{format:"domain",value:"verisign.sg"},{format:"domain",value:"verisign.tw"},{format:"domain",value:"verisign.us"},{format:"domain",value:"verisign.vn"},{format:"domain",value:"verisigninc.com"}],[{format:"domain",value:"aranzadi.es"},{format:"domain",value:"corepublishingsolutions.com"},{format:"domain",value:"elite.com"},{format:"domain",value:"legaltracker.com"},{format:"domain",value:"livrariart.com.br"},{format:"domain",value:"reutersagency.cn"},{format:"domain",value:"sweetandmaxwell.co.uk"},{format:"domain",value:"thomsonreuters.ca"},{format:"domain",value:"thomsonreuters.cn"},{format:"domain",value:"thomsonreuters.co.jp"},{format:"domain",value:"thomsonreuters.co.kr"},{format:"domain",value:"thomsonreuters.co.nz"},{format:"domain",value:"thomsonreuters.co.uk"},{format:"domain",value:"thomsonreuters.com"},{format:"domain",value:"thomsonreuters.com.ar"},{format:"domain",value:"thomsonreuters.com.au"},{format:"domain",value:"thomsonreuters.com.br"},{format:"domain",value:"thomsonreuters.com.hk"},{format:"domain",value:"thomsonreuters.com.my"},{format:"domain",value:"thomsonreuters.com.pe"},{format:"domain",value:"thomsonreuters.com.sg"},{format:"domain",value:"thomsonreuters.com.tr"},{format:"domain",value:"thomsonreuters.es"},{format:"domain",value:"thomsonreuters.in"},{format:"domain",value:"thomsonreuters.ru"},{format:"domain",value:"thomsonreutersmexico.com"},{format:"domain",value:"tmsnrt.rs"},{format:"domain",value:"tr.com"},{format:"domain",value:"reut.rs"},{format:"domain",value:"reuters.com"},{format:"domain",value:"reuters.tv"},{format:"domain",value:"reutersmedia.net"}],[{format:"domain",value:"appledaily.com"},{format:"domain",value:"appledaily.com.hk"},{format:"domain",value:"appledaily.com.tw"},{format:"domain",value:"appledaily.hk"},{format:"domain",value:"applefruity.com"},{format:"domain",value:"applehealth.com.hk"},{format:"domain",value:"atnext.com"},{format:"domain",value:"bestmallawards.com"},{format:"domain",value:"deluxe.com.hk"},{format:"domain",value:"eracom.com.tw"},{format:"domain",value:"next.hk"},{format:"domain",value:"nextdigital.com.hk"},{format:"domain",value:"nextdigital.com.tw"},{format:"domain",value:"nextfilm.com.hk"},{format:"domain",value:"nextmag.com.tw"},{format:"domain",value:"nextmedia.com"},{format:"domain",value:"nextmedia.com.tw"},{format:"domain",value:"nextmgz.com"},{format:"domain",value:"nextplus.com.hk"},{format:"domain",value:"nexttv.com.tw"},{format:"domain",value:"nextwork.com.hk"},{format:"domain",value:"nextwork.com.tw"},{format:"domain",value:"nextwork.hk"},{format:"domain",value:"nextwork.tw"},{format:"domain",value:"nxtdig.com.hk"},{format:"domain",value:"nxtdig.com.tw"},{format:"domain",value:"omoplanet.com"},{format:"domain",value:"privilege.hk"},{format:"domain",value:"privilege.tw"},{format:"domain",value:"sharpdaily.tw"},{format:"domain",value:"tomonews.net"},{format:"domain",value:"twnextdigital.com"}],[{format:"domain",value:"16q.cn"},{format:"domain",value:"5read.com"},{format:"domain",value:"aichaoxing.com"},{format:"domain",value:"chaoxing.cc"},{format:"domain",value:"chaoxing.com"},{format:"domain",value:"chaoxingv.com"},{format:"domain",value:"cxbiji.com"},{format:"domain",value:"hongbo100.com"},{format:"domain",value:"lnlib.net"},{format:"domain",value:"mndqlib.net"},{format:"domain",value:"mti100.com"},{format:"domain",value:"nihaoafrica.org"},{format:"domain",value:"nihaorwanda.cn"},{format:"domain",value:"sslawy.com"},{format:"domain",value:"sslibrary.com"},{format:"domain",value:"ssreader.cn"},{format:"domain",value:"ssreader.com.cn"},{format:"domain",value:"ssvideo.cn"},{format:"domain",value:"ssvideo.com.cn"},{format:"domain",value:"study360.com.cn"},{format:"domain",value:"superlib.com"},{format:"domain",value:"superlib.net"},{format:"domain",value:"uonline-sh.com"},{format:"domain",value:"uonline-sh.net"},{format:"domain",value:"xuexi365.com"},{format:"domain",value:"xuexi365.com.cn"},{format:"domain",value:"xuexi365.net"},{format:"domain",value:"xxtmail.com"},{format:"domain",value:"ylike.net"},{format:"domain",value:"zaifan.com"},{format:"domain",value:"zaifan.com.cn"},{format:"domain",value:"zhihang100.com"}],[{format:"domain",value:"acgcf.com"},{format:"domain",value:"acgdg.com"},{format:"domain",value:"acgdv.com"},{format:"domain",value:"acgfabu.com"},{format:"domain",value:"acgfbw.com"},{format:"domain",value:"acgvipss.com"},{format:"domain",value:"acgwr.com"},{format:"domain",value:"aishegw.com"},{format:"domain",value:"clincha.cn"},{format:"domain",value:"fabuyemian.com"},{format:"domain",value:"illusion111.com"},{format:"domain",value:"illusionas.com"},{format:"domain",value:"illusionchn.com"},{format:"domain",value:"illusionfb.cn"},{format:"domain",value:"illusiongw.com"},{format:"domain",value:"illusionh.com"},{format:"domain",value:"illusionl.com"},{format:"domain",value:"illusionn2.com"},{format:"domain",value:"illusionn3.com"},{format:"domain",value:"illusionn4.com"},{format:"domain",value:"illusionn5.com"},{format:"domain",value:"illusionxz.com"},{format:"domain",value:"illusiony.com"},{format:"domain",value:"illusionze.com"},{format:"domain",value:"illusnoi.com"},{format:"domain",value:"isgame365.cc"},{format:"domain",value:"isheppc.com"},{format:"domain",value:"lliusno.com"},{format:"domain",value:"noisullifb.com"},{format:"domain",value:"wnoaissulli1.com"},{format:"domain",value:"yiqilai99.cn"},{format:"domain",value:"zzycdz.com"}],[{format:"domain",value:"cbs"},{format:"domain",value:"showtime"},{format:"domain",value:"cbs.com"},{format:"domain",value:"cbscorporation.com"},{format:"domain",value:"cbsi.com"},{format:"domain",value:"cbsi.video"},{format:"domain",value:"cbsiam.com"},{format:"domain",value:"cbsig.net"},{format:"domain",value:"cbsimg.net"},{format:"domain",value:"cbsinteractive.com"},{format:"domain",value:"cbsistatic.com"},{format:"domain",value:"cbsivideo.com"},{format:"domain",value:"cbsnews.com"},{format:"domain",value:"cbspressexpress.com"},{format:"domain",value:"cbssports.com"},{format:"domain",value:"cbsstatic.com"},{format:"domain",value:"cbssvideo.com"},{format:"domain",value:"viacbs.com"},{format:"domain",value:"viacom.com"},{format:"domain",value:"viacomcbs.com"},{format:"domain",value:"viacomcbspressexpress.com"},{format:"domain",value:"paramount.com"},{format:"domain",value:"amlg.io"},{format:"domain",value:"cbsaavideo.com"},{format:"domain",value:"mtvnservices.com"},{format:"domain",value:"paramountplus.com"},{format:"domain",value:"pplusstatic.com"},{format:"full domain",value:"cbsi.live.ott.irdeto.com"},{format:"full domain",value:"cbsplaylistserver.aws.syncbak.com"},{format:"full domain",value:"cbsservice.aws.syncbak.com"},{format:"full domain",value:"link.theplatform.com"}],[{format:"domain",value:"digital-id.ch"},{format:"domain",value:"digitalid.ch"},{format:"domain",value:"managed-pki.ch"},{format:"domain",value:"managed-pki.de"},{format:"domain",value:"pki-post.ch"},{format:"domain",value:"pki-posta.ch"},{format:"domain",value:"pki-poste.ch"},{format:"domain",value:"root-signing.ch"},{format:"domain",value:"rootsigning.com"},{format:"domain",value:"ssl-certificate.ch"},{format:"domain",value:"swissid.ch"},{format:"domain",value:"swissign.com"},{format:"domain",value:"swissign.li"},{format:"domain",value:"swisssign-group.ch"},{format:"domain",value:"swisssign-group.com"},{format:"domain",value:"swisssign-group.li"},{format:"domain",value:"swisssign.ch"},{format:"domain",value:"swisssign.com"},{format:"domain",value:"swisssign.li"},{format:"domain",value:"swisssign.net"},{format:"domain",value:"swisssign.org"},{format:"domain",value:"swisssigner.ch"},{format:"domain",value:"swisssigner.com"},{format:"domain",value:"swisssigngroup.ch"},{format:"domain",value:"swisssigngroup.com"},{format:"domain",value:"swissstick.com"},{format:"domain",value:"swisstsa.ch"},{format:"domain",value:"swisstsa.li"},{format:"domain",value:"trustdoc.ch"},{format:"domain",value:"trustsign.ch"},{format:"domain",value:"zert.ch"}],[{format:"domain",value:"126.com"},{format:"domain",value:"126.link"},{format:"domain",value:"126.net"},{format:"domain",value:"127.com"},{format:"domain",value:"127.net"},{format:"domain",value:"163.com"},{format:"domain",value:"163cn.tv"},{format:"domain",value:"163industry.com"},{format:"domain",value:"163mail.com"},{format:"domain",value:"163qiyukf.com"},{format:"domain",value:"163yun.com"},{format:"domain",value:"166.com"},{format:"domain",value:"166.net"},{format:"domain",value:"haowu.link"},{format:"domain",value:"icourse163.org"},{format:"domain",value:"kaola.com"},{format:"domain",value:"lofter.com"},{format:"domain",value:"nease.net"},{format:"domain",value:"netease-inc.com"},{format:"domain",value:"netease.com"},{format:"domain",value:"netease.im"},{format:"domain",value:"qiyukf.com"},{format:"domain",value:"ydstatic.com"},{format:"domain",value:"yeah.net"},{format:"domain",value:"youdao.com"},{format:"domain",value:"zhuanzfx.com"},{format:"domain",value:"analytics.163.com"},{format:"domain",value:"crash.163.com"},{format:"domain",value:"crashlytics.163.com"},{format:"domain",value:"g.163.com"}],[{format:"domain",value:"rferl.org"},{format:"domain",value:"azadiradio.com"},{format:"domain",value:"azadliq.org"},{format:"domain",value:"azathabar.com"},{format:"domain",value:"azatliq.org"},{format:"domain",value:"azattyk.org"},{format:"domain",value:"azattyq.org"},{format:"domain",value:"azatutyun.am"},{format:"domain",value:"currenttime.tv"},{format:"domain",value:"ekhokavkaza.com"},{format:"domain",value:"europalibera.org"},{format:"domain",value:"evropaelire.org"},{format:"domain",value:"factograph.info"},{format:"domain",value:"idelreal.org"},{format:"domain",value:"kavkazr.com"},{format:"domain",value:"krymr.com"},{format:"domain",value:"mashaalradio.com"},{format:"domain",value:"ozodi.org"},{format:"domain",value:"ozodlik.org"},{format:"domain",value:"radiofarda.com"},{format:"domain",value:"radiomarsho.com"},{format:"domain",value:"radiosvoboda.org"},{format:"domain",value:"radiotavisupleba.ge"},{format:"domain",value:"severreal.org"},{format:"domain",value:"sibreal.org"},{format:"domain",value:"slobodnaevropa.mk"},{format:"domain",value:"svaboda.org"},{format:"domain",value:"svoboda.org"},{format:"domain",value:"svobodnaevropa.bg"},{format:"domain",value:"szabadeuropa.hu"}],[{format:"domain",value:"business-i.jp"},{format:"domain",value:"ign.jp"},{format:"domain",value:"innovations-i.com"},{format:"domain",value:"ironna.jp"},{format:"domain",value:"iza.ne.jp"},{format:"domain",value:"japan-forward.com"},{format:"domain",value:"keiba.net"},{format:"domain",value:"knowswho.co.jp"},{format:"domain",value:"metropolitana.tokyo"},{format:"domain",value:"mostly.jp"},{format:"domain",value:"sankei-ad-info.com"},{format:"domain",value:"sankei-ad.net"},{format:"domain",value:"sankei-books.co.jp"},{format:"domain",value:"sankei-call.jp"},{format:"domain",value:"sankei-digital.co.jp"},{format:"domain",value:"sankei-eiga.co.jp"},{format:"domain",value:"sankei-kaihatsu.co.jp"},{format:"domain",value:"sankei-kurashi.com"},{format:"domain",value:"sankei-shougakukai.jp"},{format:"domain",value:"sankei-tours.com"},{format:"domain",value:"sankei.co.jp"},{format:"domain",value:"sankei.com"},{format:"domain",value:"sankei.jp"},{format:"domain",value:"sankeibiz.jp"},{format:"domain",value:"sankeishop.jp"},{format:"domain",value:"sanspo.com"},{format:"domain",value:"seasidestory.tokyo"},{format:"domain",value:"seiron-sankei.com"},{format:"domain",value:"tvnaviweb.jp"},{format:"domain",value:"zakzak.co.jp"}],[{format:"domain",value:"pccw.com"},{format:"domain",value:"pccwglobal.com"},{format:"domain",value:"pccwsolutions.com"},{format:"domain",value:"moov.hk"},{format:"domain",value:"1010.com.hk"},{format:"domain",value:"esmarthealth.com"},{format:"domain",value:"hkcsl.com"},{format:"domain",value:"hkt-enterprise.com"},{format:"domain",value:"hkt-eye.com"},{format:"domain",value:"hkt.com"},{format:"domain",value:"hkteducation.com"},{format:"domain",value:"hktpremier.com"},{format:"domain",value:"hktshop.com"},{format:"domain",value:"netvigator.com"},{format:"domain",value:"theclub.com.hk"},{format:"domain",value:"uhub.com"},{format:"domain",value:"now.com"},{format:"domain",value:"now.com.hk"},{format:"domain",value:"nowe.com"},{format:"domain",value:"nowe.hk"},{format:"domain",value:"now-tv.com"},{format:"domain",value:"now-ashare.com"},{format:"domain",value:"viu.tv"},{format:"full domain",value:"api.viu.now.com"},{format:"domain",value:"regexp:^ewcdn[0-9]{2}\\.nowe\\.com$"},{format:"domain",value:"viu.com"},{format:"full domain",value:"dfp6rglgjqszk.cloudfront.net"},{format:"full domain",value:"d1k2us671qcoau.cloudfront.net"},{format:"full domain",value:"d2anahhhmp1ffz.cloudfront.net"}],[{format:"domain",value:"c-ctrip.com"},{format:"domain",value:"colinker.com"},{format:"domain",value:"ctrip.cn"},{format:"domain",value:"ctrip.co.id"},{format:"domain",value:"ctrip.co.kr"},{format:"domain",value:"ctrip.co.th"},{format:"domain",value:"ctrip.com"},{format:"domain",value:"ctrip.com.hk"},{format:"domain",value:"ctrip.my"},{format:"domain",value:"ctrip.sg"},{format:"domain",value:"ctripbiz.com"},{format:"domain",value:"ctripbuy.hk"},{format:"domain",value:"ctripteam.com"},{format:"domain",value:"doticloud.com"},{format:"domain",value:"easytrip.com"},{format:"domain",value:"hhtravel.com"},{format:"domain",value:"hhtravel.com.tw"},{format:"domain",value:"izuchebao.com"},{format:"domain",value:"lvtds.com"},{format:"domain",value:"shuntu.cn"},{format:"domain",value:"skysea.com"},{format:"domain",value:"suanya.cn"},{format:"domain",value:"suanya.com"},{format:"domain",value:"tieyou.com"},{format:"domain",value:"toptown.cn"},{format:"domain",value:"toursbms.com"},{format:"domain",value:"trip.com"},{format:"domain",value:"tripcdn.com"},{format:"domain",value:"vipdlt.com"}],[{format:"domain",value:"amamanualofstyle.com"},{format:"domain",value:"anb.org"},{format:"domain",value:"blackstonespoliceservice.com"},{format:"domain",value:"epigeum.com"},{format:"domain",value:"oed.com"},{format:"domain",value:"omscr.com"},{format:"domain",value:"oup.com"},{format:"domain",value:"ouplaw.com"},{format:"domain",value:"ox.ac.uk"},{format:"domain",value:"oxfordaasc.com"},{format:"domain",value:"oxfordartonline.com"},{format:"domain",value:"oxfordbibliographies.com"},{format:"domain",value:"oxfordclinicalpsych.com"},{format:"domain",value:"oxforddnb.com"},{format:"domain",value:"oxfordfirstsource.com"},{format:"domain",value:"oxfordhandbooks.com"},{format:"domain",value:"oxfordlawtrove.com"},{format:"domain",value:"oxfordmedicine.com"},{format:"domain",value:"oxfordmusiconline.com"},{format:"domain",value:"oxfordpoliticstrove.com"},{format:"domain",value:"oxfordre.com"},{format:"domain",value:"oxfordreference.com"},{format:"domain",value:"oxfordscholarlyeditions.com"},{format:"domain",value:"oxfordscholarship.com"},{format:"domain",value:"oxfordwesternmusic.com"},{format:"domain",value:"sipriyearbook.org"},{format:"domain",value:"ukwhoswho.com"},{format:"domain",value:"universitypressscholarship.com"},{format:"domain",value:"veryshortintroductions.com"}],[{format:"domain",value:"grafolio.com"},{format:"domain",value:"naver.com"},{format:"domain",value:"naver.jp"},{format:"domain",value:"naver.net"},{format:"domain",value:"navercorp.com"},{format:"domain",value:"plug.game"},{format:"domain",value:"pstatic.net"},{format:"domain",value:"webtoons.com"},{format:"domain",value:"gcld-line.com"},{format:"domain",value:"lin.ee"},{format:"domain",value:"line-apps-beta.com"},{format:"domain",value:"line-apps-rc.com"},{format:"domain",value:"line-apps.com"},{format:"domain",value:"line-beta.me"},{format:"domain",value:"line-cdn.net"},{format:"domain",value:"line-scdn.net"},{format:"domain",value:"line.biz"},{format:"domain",value:"line.me"},{format:"domain",value:"line.naver.jp"},{format:"domain",value:"linecorp.com"},{format:"domain",value:"linefriends.com"},{format:"domain",value:"linefriends.com.tw"},{format:"domain",value:"linegame.jp"},{format:"domain",value:"linemobile.com"},{format:"domain",value:"linemyshop.com"},{format:"domain",value:"lineshoppingseller.com"},{format:"domain",value:"linetv.tw"},{format:"domain",value:"nhncorp.jp"}],[{format:"domain",value:"binance.cc"},{format:"domain",value:"binance.charity"},{format:"domain",value:"binance.cloud"},{format:"domain",value:"binance.co"},{format:"domain",value:"binance.com"},{format:"domain",value:"binance.info"},{format:"domain",value:"binance.me"},{format:"domain",value:"binance.net"},{format:"domain",value:"binance.org"},{format:"domain",value:"binance.us"},{format:"domain",value:"binance.vision"},{format:"domain",value:"binancezh.be"},{format:"domain",value:"binancezh.biz"},{format:"domain",value:"binancezh.cc"},{format:"domain",value:"binancezh.co"},{format:"domain",value:"binancezh.com"},{format:"domain",value:"binancezh.info"},{format:"domain",value:"binancezh.ink"},{format:"domain",value:"binancezh.kim"},{format:"domain",value:"binancezh.link"},{format:"domain",value:"binancezh.live"},{format:"domain",value:"binancezh.mobi"},{format:"domain",value:"binancezh.net"},{format:"domain",value:"binancezh.pro"},{format:"domain",value:"binancezh.sh"},{format:"domain",value:"binancezh.top"},{format:"domain",value:"binanceapi.com"},{format:"domain",value:"bnbstatic.com"}],[{format:"domain",value:"71.am"},{format:"domain",value:"iq.com"},{format:"domain",value:"iqiyi.com"},{format:"domain",value:"iqiyipic.com"},{format:"domain",value:"pps.tv"},{format:"domain",value:"ppsimg.com"},{format:"domain",value:"qiyi.com"},{format:"domain",value:"qiyipic.com"},{format:"domain",value:"qy.net"},{format:"domain",value:"71edge.com"},{format:"domain",value:"a.ckm.iqiyi.com"},{format:"domain",value:"ad.m.iqiyi.com"},{format:"domain",value:"afp.iqiyi.com"},{format:"domain",value:"c.uaa.iqiyi.com"},{format:"domain",value:"cloudpush.iqiyi.com"},{format:"domain",value:"cm.passport.iqiyi.com"},{format:"domain",value:"cupid.iqiyi.com"},{format:"domain",value:"emoticon.sns.iqiyi.com"},{format:"domain",value:"gamecenter.iqiyi.com"},{format:"domain",value:"hotchat-im.iqiyi.com"},{format:"domain",value:"ifacelog.iqiyi.com"},{format:"domain",value:"mbdlog.iqiyi.com"},{format:"domain",value:"msg.71.am"},{format:"domain",value:"msg.video.qiyi.com"},{format:"domain",value:"msg2.video.qiyi.com"},{format:"domain",value:"policy.video.iqiyi.com"},{format:"domain",value:"yuedu.iqiyi.com"}],[{format:"domain",value:"dis.gd"},{format:"domain",value:"discord.co"},{format:"domain",value:"discord.com"},{format:"domain",value:"discord.design"},{format:"domain",value:"discord.dev"},{format:"domain",value:"discord.gg"},{format:"domain",value:"discord.gift"},{format:"domain",value:"discord.gifts"},{format:"domain",value:"discord.media"},{format:"domain",value:"discord.new"},{format:"domain",value:"discord.store"},{format:"domain",value:"discord.tools"},{format:"domain",value:"discord-activities.com"},{format:"domain",value:"discordactivities.com"},{format:"domain",value:"discordapp.com"},{format:"domain",value:"discordapp.net"},{format:"domain",value:"discordmerch.com"},{format:"domain",value:"discordpartygames.com"},{format:"domain",value:"discordsays.com"},{format:"domain",value:"discordstatus.com"},{format:"domain",value:"airhorn.solutions"},{format:"domain",value:"airhornbot.com"},{format:"domain",value:"bigbeans.solutions"},{format:"domain",value:"watchanimeattheoffice.com"},{format:"domain",value:"discordapp.io"},{format:"domain",value:"discordcdn.com"},{format:"full domain",value:"hammerandchisel.ssl.zendesk.com"}],[{format:"domain",value:"kimg.cn"},{format:"domain",value:"kingsoft.com"},{format:"domain",value:"ksmobile.com"},{format:"domain",value:"ks-cdn.com"},{format:"domain",value:"ks-cdn1.com"},{format:"domain",value:"ksyun.com"},{format:"domain",value:"ksyuncdn.com"},{format:"domain",value:"ksyungslb.com"},{format:"domain",value:"cmcm.com"},{format:"domain",value:"cmcmcdn.com"},{format:"domain",value:"liebao.cn"},{format:"domain",value:"duba.com"},{format:"domain",value:"duba.net"},{format:"domain",value:"ijinshan.com"},{format:"domain",value:"seasungames.com"},{format:"domain",value:"xishanju.com"},{format:"domain",value:"xoyo.com"},{format:"domain",value:"testplus.cn"},{format:"domain",value:"wps.cn"},{format:"domain",value:"wps.com"},{format:"domain",value:"51dzt.com"},{format:"domain",value:"iciba.com"},{format:"domain",value:"docer.com"},{format:"domain",value:"kdocs.cn"},{format:"domain",value:"papocket.com"},{format:"domain",value:"wpspdf.cn"}],[{format:"domain",value:"bbc"},{format:"domain",value:"bbc.co.uk"},{format:"domain",value:"bbc.com"},{format:"domain",value:"bbc.in"},{format:"domain",value:"bbc.net.uk"},{format:"domain",value:"bbci.co.uk"},{format:"domain",value:"bbcfmt.s.llnwi.net"},{format:"domain",value:"bbcmedia.co.uk"},{format:"domain",value:"bbcpersian.com"},{format:"domain",value:"bbcverticals.com"},{format:"domain",value:"bidi.net.uk"},{format:"full domain",value:"aod-pod-uk-live.akamaized.net"},{format:"full domain",value:"as-dash-uk-live.akamaized.net"},{format:"full domain",value:"as-hls-uk-live.akamaized.net"},{format:"full domain",value:"ve-dash-uk-live.akamaized.net"},{format:"full domain",value:"ve-uhd-push-uk-live.akamaized.net"},{format:"full domain",value:"vod-dash-uk-live.akamaized.net"},{format:"full domain",value:"vod-dash-ww-live.akamaized.net"},{format:"full domain",value:"vod-hls-uk-live.akamaized.net"},{format:"full domain",value:"vod-sub-uk-live.akamaized.net"},{format:"full domain",value:"vod-thumb-uk-live.akamaized.net"},{format:"full domain",value:"vod-thumb-ww-live.akamaized.net"},{format:"full domain",value:"vs-cmaf-push-uk-live.akamaized.net"},{format:"full domain",value:"vs-cmaf-pushb-ww-live.akamaized.net"},{format:"full domain",value:"vs-hls-push-uk-live.akamaized.net"},{format:"full domain",value:"vs-hls-pushb-uk-live.akamaized.net"},{format:"regex",value:"-dash-uk-live\\.bbcfmt\\.s\\.llnwi\\.net$"},{format:"regex",value:"-dash-uk-live\\.akamaized\\.net$"}],[{format:"domain",value:"mcd"},{format:"domain",value:"mcdonalds"},{format:"domain",value:"4008-517-517.cn"},{format:"domain",value:"aboutmcdonalds.com"},{format:"domain",value:"happymeal.co.nz"},{format:"domain",value:"happymeal.com.au"},{format:"domain",value:"mcd.com"},{format:"domain",value:"mcdelivery.co.id"},{format:"domain",value:"mcdelivery.co.kr"},{format:"domain",value:"mcdelivery.com.au"},{format:"domain",value:"mcdelivery.com.my"},{format:"domain",value:"mcdelivery.com.sg"},{format:"domain",value:"mcdelivery.com.tw"},{format:"domain",value:"mcdindonesia.com"},{format:"domain",value:"mcdonalds.ca"},{format:"domain",value:"mcdonalds.co.uk"},{format:"domain",value:"mcdonalds.com"},{format:"domain",value:"mcdonalds.com.hk"},{format:"domain",value:"mcdonalds.hk"},{format:"domain",value:"mcdonalds.it"},{format:"domain",value:"mcdonalds.no"},{format:"domain",value:"mcdonalds.se"},{format:"domain",value:"mcdonaldsarabia.com"},{format:"domain",value:"mcdonaldsparties.co.nz"},{format:"domain",value:"mcdonaldsparties.com.au"},{format:"domain",value:"xn--qhrx81fxh2a.xn--55qx5d.hk"}],[{format:"domain",value:"gettyimages.ae"},{format:"domain",value:"gettyimages.at"},{format:"domain",value:"gettyimages.be"},{format:"domain",value:"gettyimages.ca"},{format:"domain",value:"gettyimages.ch"},{format:"domain",value:"gettyimages.co.jp"},{format:"domain",value:"gettyimages.co.nz"},{format:"domain",value:"gettyimages.co.uk"},{format:"domain",value:"gettyimages.com"},{format:"domain",value:"gettyimages.com.au"},{format:"domain",value:"gettyimages.com.br"},{format:"domain",value:"gettyimages.com.mx"},{format:"domain",value:"gettyimages.de"},{format:"domain",value:"gettyimages.dk"},{format:"domain",value:"gettyimages.es"},{format:"domain",value:"gettyimages.fi"},{format:"domain",value:"gettyimages.fr"},{format:"domain",value:"gettyimages.hk"},{format:"domain",value:"gettyimages.ie"},{format:"domain",value:"gettyimages.in"},{format:"domain",value:"gettyimages.it"},{format:"domain",value:"gettyimages.nl"},{format:"domain",value:"gettyimages.no"},{format:"domain",value:"gettyimages.pt"},{format:"domain",value:"gettyimages.se"}],[{format:"domain",value:"fast.com"},{format:"domain",value:"netflix.ca"},{format:"domain",value:"netflix.com"},{format:"domain",value:"netflix.net"},{format:"domain",value:"netflixinvestor.com"},{format:"domain",value:"netflixtechblog.com"},{format:"domain",value:"nflxext.com"},{format:"domain",value:"nflximg.com"},{format:"domain",value:"nflximg.net"},{format:"domain",value:"nflxsearch.net"},{format:"domain",value:"nflxso.net"},{format:"domain",value:"nflxvideo.net"},{format:"domain",value:"netflixdnstest1.com"},{format:"domain",value:"netflixdnstest2.com"},{format:"domain",value:"netflixdnstest3.com"},{format:"domain",value:"netflixdnstest4.com"},{format:"domain",value:"netflixdnstest5.com"},{format:"domain",value:"netflixdnstest6.com"},{format:"domain",value:"netflixdnstest7.com"},{format:"domain",value:"netflixdnstest8.com"},{format:"domain",value:"netflixdnstest9.com"},{format:"domain",value:"netflixdnstest10.com"},{format:"domain",value:"regexp:(^|\\.)dualstack\\.apiproxy-.+\\.amazonaws\\.com$"},{format:"domain",value:"regexp:(^|\\.)dualstack\\.ichnaea-web-.+\\.amazonaws\\.com$"},{format:"full domain",value:"netflix.com.edgesuite.net"}],[{format:"domain",value:"baidupan.com"},{format:"domain",value:"lanzou.com"},{format:"domain",value:"lanzoub.com"},{format:"domain",value:"lanzouc.com"},{format:"domain",value:"lanzoue.com"},{format:"domain",value:"lanzouf.com"},{format:"domain",value:"lanzoug.com"},{format:"domain",value:"lanzouh.com"},{format:"domain",value:"lanzoui.com"},{format:"domain",value:"lanzouj.com"},{format:"domain",value:"lanzouk.com"},{format:"domain",value:"lanzoul.com"},{format:"domain",value:"lanzoum.com"},{format:"domain",value:"lanzouo.com"},{format:"domain",value:"lanzoup.com"},{format:"domain",value:"lanzouq.com"},{format:"domain",value:"lanzous.com"},{format:"domain",value:"lanzout.com"},{format:"domain",value:"lanzouu.com"},{format:"domain",value:"lanzouv.com"},{format:"domain",value:"lanzouw.com"},{format:"domain",value:"lanzoux.com"},{format:"domain",value:"lanzouy.com"},{format:"domain",value:"woozooo.com"}],[{format:"domain",value:"err.sh"},{format:"domain",value:"hyper.is"},{format:"domain",value:"nextjs.org"},{format:"domain",value:"now.sh"},{format:"domain",value:"static.fun"},{format:"domain",value:"title.sh"},{format:"domain",value:"turborepo.org"},{format:"domain",value:"vercel-dns.com"},{format:"domain",value:"vercel-status.com"},{format:"domain",value:"vercel.app"},{format:"domain",value:"vercel.blog"},{format:"domain",value:"vercel.com"},{format:"domain",value:"vercel.events"},{format:"domain",value:"vercel.live"},{format:"domain",value:"vercel.pub"},{format:"domain",value:"vercel.sh"},{format:"domain",value:"vercel.store"},{format:"domain",value:"zeit-world.co.uk"},{format:"domain",value:"zeit-world.com"},{format:"domain",value:"zeit-world.net"},{format:"domain",value:"zeit-world.org"},{format:"domain",value:"zeit.co"},{format:"domain",value:"zeit.sh"},{format:"domain",value:"zeitworld.com"}],[{format:"domain",value:"g-technology.com"},{format:"domain",value:"sandisk.ae"},{format:"domain",value:"sandisk.it"},{format:"domain",value:"sandisk.cn"},{format:"domain",value:"sandisk.co.jp"},{format:"domain",value:"sandisk.co.kr"},{format:"domain",value:"sandisk.co.uk"},{format:"domain",value:"sandisk.com"},{format:"domain",value:"sandisk.com.au"},{format:"domain",value:"sandisk.com.br"},{format:"domain",value:"sandisk.com.tr"},{format:"domain",value:"sandisk.com.tw"},{format:"domain",value:"sandisk.de"},{format:"domain",value:"sandisk.es"},{format:"domain",value:"sandisk.fr"},{format:"domain",value:"sandisk.hk"},{format:"domain",value:"sandisk.id"},{format:"domain",value:"sandisk.in"},{format:"domain",value:"sandisk.nl"},{format:"domain",value:"sandisk.sg"},{format:"domain",value:"wd.com"},{format:"domain",value:"wdc.com"},{format:"domain",value:"westerndigital.com"}],[{format:"domain",value:"agendaweek.com"},{format:"domain",value:"excedo.com"},{format:"domain",value:"exec-appointments.com"},{format:"domain",value:"fdiintelligence.com"},{format:"domain",value:"financialadvisoriq.com"},{format:"domain",value:"ft.com"},{format:"domain",value:"ftadviser.com"},{format:"domain",value:"ftchinese.com"},{format:"domain",value:"ftiecla.com"},{format:"domain",value:"fundfire.com"},{format:"domain",value:"gisplanning.com"},{format:"domain",value:"globalriskregulator.com"},{format:"domain",value:"ignites.com"},{format:"domain",value:"ignitesasia.com"},{format:"domain",value:"igniteseurope.com"},{format:"domain",value:"investorschronicle.co.uk"},{format:"domain",value:"mandatewire.com"},{format:"domain",value:"pensions-expert.com"},{format:"domain",value:"pwmnet.com"},{format:"domain",value:"thebanker.com"},{format:"domain",value:"thebankerdatabase.com"},{format:"domain",value:"thenextweb.com"}],[{format:"domain",value:"ads-twitter.com"},{format:"domain",value:"cms-twdigitalassets.com"},{format:"domain",value:"periscope.tv"},{format:"domain",value:"pscp.tv"},{format:"domain",value:"t.co"},{format:"domain",value:"tellapart.com"},{format:"domain",value:"tweetdeck.com"},{format:"domain",value:"twimg.com"},{format:"domain",value:"twitpic.com"},{format:"domain",value:"twitter.biz"},{format:"domain",value:"twitter.com"},{format:"domain",value:"twitter.jp"},{format:"domain",value:"twittercommunity.com"},{format:"domain",value:"twitterflightschool.com"},{format:"domain",value:"twitterinc.com"},{format:"domain",value:"twitteroauth.com"},{format:"domain",value:"twitterstat.us"},{format:"domain",value:"twtrdns.net"},{format:"domain",value:"twttr.com"},{format:"domain",value:"twttr.net"},{format:"domain",value:"twvid.com"},{format:"domain",value:"vine.co"}],[{format:"domain",value:"uug22.com"},{format:"domain",value:"uug23.com"},{format:"domain",value:"uug25.com"},{format:"domain",value:"uug26.com"},{format:"domain",value:"uug27.com"},{format:"domain",value:"uuk28.com"},{format:"domain",value:"uun78.com"},{format:"domain",value:"uun79.com"},{format:"domain",value:"uun82.com"},{format:"domain",value:"uun83.com"},{format:"domain",value:"uun85.com"},{format:"domain",value:"uun86.com"},{format:"domain",value:"uun87.com"},{format:"domain",value:"uun89.com"},{format:"domain",value:"uun92.com"},{format:"domain",value:"uun93.com"},{format:"domain",value:"uun95.com"},{format:"domain",value:"uun96.com"},{format:"domain",value:"uun97.com"},{format:"domain",value:"uun98.com"},{format:"domain",value:"uun99.com"},{format:"domain",value:"uux68.com"}],[{format:"domain",value:"bgr.in"},{format:"domain",value:"bollywoodlife.com"},{format:"domain",value:"careerfundas.com"},{format:"domain",value:"cricketcountry.com"},{format:"domain",value:"dnai.in"},{format:"domain",value:"dnaindia.com"},{format:"domain",value:"earngeek.com"},{format:"domain",value:"ekhindi.com"},{format:"domain",value:"ind.sh"},{format:"domain",value:"india.com"},{format:"domain",value:"indiancolleges.com"},{format:"domain",value:"itripto.com"},{format:"domain",value:"oncars.in"},{format:"domain",value:"prepsure.com"},{format:"domain",value:"thehealthsite.com"},{format:"domain",value:"wionews.com"},{format:"domain",value:"yo1health.com"},{format:"domain",value:"zee.com"},{format:"domain",value:"zeebiz.com"},{format:"domain",value:"zeeentertainment.com"},{format:"domain",value:"zeenews.com"},{format:"full domain",value:"zeenews-fonts.s3.amazonaws.com"}],[{format:"domain",value:"8008205555.cn"},{format:"domain",value:"8008205555.com"},{format:"domain",value:"cignacmb-ipmi.com"},{format:"domain",value:"cignacmb.com"},{format:"domain",value:"cignacmbamc.com"},{format:"domain",value:"cmb-leasing.com"},{format:"domain",value:"cmbchina.biz"},{format:"domain",value:"cmbchina.cn"},{format:"domain",value:"cmbchina.com"},{format:"domain",value:"cmbi.com.hk"},{format:"domain",value:"cmbimg.cn"},{format:"domain",value:"cmbimg.com"},{format:"domain",value:"cmbt.cn"},{format:"domain",value:"cmbuat.com"},{format:"domain",value:"cmburl.cn"},{format:"domain",value:"cmbwinglungbank.com"},{format:"domain",value:"cmf.biz"},{format:"domain",value:"cmf.ltd"},{format:"domain",value:"cmfchina.com"},{format:"domain",value:"cmfunds.cn"},{format:"domain",value:"test-cignacmb.com"}],[{format:"domain",value:"g-tvapp.com"},{format:"domain",value:"gclubs.com"},{format:"domain",value:"gettr.com"},{format:"domain",value:"gfashion.com"},{format:"domain",value:"gnews.org"},{format:"domain",value:"gtv.org"},{format:"domain",value:"gtv1.org"},{format:"domain",value:"gtvmediagroupfairfund.com"},{format:"domain",value:"guo.media"},{format:"domain",value:"gwiki.net"},{format:"domain",value:"gwins.org"},{format:"domain",value:"himalaya.exchange"},{format:"domain",value:"hpayshop.com"},{format:"domain",value:"nfsc.global"},{format:"domain",value:"nfscdict.com"},{format:"domain",value:"nfscofficial.com"},{format:"domain",value:"rexcha.com"},{format:"domain",value:"rolfoundation.org"},{format:"domain",value:"rolsociety.org"},{format:"domain",value:"yiqiedoushiganggangkaishi.org"},{format:"full domain",value:"himalaya-exchange.zendesk.com"}],[{format:"domain",value:"cinemax.com"},{format:"domain",value:"forthethrone.com"},{format:"domain",value:"hbo.com"},{format:"domain",value:"hboasia.com"},{format:"domain",value:"hbogo.co.th"},{format:"domain",value:"hbogo.com"},{format:"domain",value:"hbogo.eu"},{format:"domain",value:"hbogoasia.com"},{format:"domain",value:"hbogoasia.hk"},{format:"domain",value:"hbogoasia.id"},{format:"domain",value:"hbogoasia.ph"},{format:"domain",value:"hbogoasia.sg"},{format:"domain",value:"hbogoasia.tw"},{format:"domain",value:"hbomax.com"},{format:"domain",value:"hbomaxcdn.com"},{format:"domain",value:"hbonow.com"},{format:"domain",value:"maxgo.com"},{format:"domain",value:"hbo.com.c.footprint.net"},{format:"domain",value:"hbo.com.edgesuite.net"},{format:"domain",value:"hbo.map.fastly.net"},{format:"domain",value:"hbomaxdash.s.llnwi.net"}],[{format:"domain",value:"mediachinese.com"},{format:"domain",value:"mysinchew.com"},{format:"domain",value:"sinchew.com.my"},{format:"domain",value:"sinchew.my"},{format:"domain",value:"soccerfanz.com.my"},{format:"domain",value:"enanyang.my"},{format:"domain",value:"chinapress.com.my"},{format:"domain",value:"guangming.com.my"},{format:"domain",value:"mingpao.com"},{format:"domain",value:"mingpaocanada.com"},{format:"domain",value:"mingpaomonthly.com"},{format:"domain",value:"mingpaotor.com"},{format:"domain",value:"mingpaovan.com"},{format:"domain",value:"mingshengbao.com"},{format:"domain",value:"mingwatch.com"},{format:"domain",value:"mpfinance.com"},{format:"domain",value:"mpweekly.com"},{format:"domain",value:"yzzk.com"},{format:"domain",value:"omghk.com"},{format:"domain",value:"mings.hk"},{format:"domain",value:"mings-fashion.com"}],[{format:"domain",value:"shopee.cl"},{format:"domain",value:"shopee.cn"},{format:"domain",value:"shopee.co.id"},{format:"domain",value:"shopee.co.th"},{format:"domain",value:"shopee.com"},{format:"domain",value:"shopee.com.br"},{format:"domain",value:"shopee.com.co"},{format:"domain",value:"shopee.com.mx"},{format:"domain",value:"shopee.com.my"},{format:"domain",value:"shopee.es"},{format:"domain",value:"shopee.fr"},{format:"domain",value:"shopee.id"},{format:"domain",value:"shopee.in"},{format:"domain",value:"shopee.io"},{format:"domain",value:"shopee.ph"},{format:"domain",value:"shopee.sg"},{format:"domain",value:"shopee.tw"},{format:"domain",value:"shopee.vn"},{format:"domain",value:"shopeemobile.com"},{format:"domain",value:"shopeesz.com"},{format:"domain",value:"shp.ee"}],[{format:"domain",value:"genshinimpact.com"},{format:"domain",value:"honkaiimpact3.com"},{format:"domain",value:"honkaistarrail.com"},{format:"domain",value:"hoyo.link"},{format:"domain",value:"hoyolab.com"},{format:"domain",value:"hoyoverse.com"},{format:"domain",value:"n0vadesktop.com"},{format:"domain",value:"mhyurl.cn"},{format:"domain",value:"mihayo.com"},{format:"domain",value:"mihayou.com"},{format:"domain",value:"mihoyo.com"},{format:"domain",value:"mihoyocg.com"},{format:"domain",value:"mihoyogift.com"},{format:"domain",value:"mihoyomall.com"},{format:"domain",value:"miyoushe.com"},{format:"domain",value:"benghuai.com"},{format:"domain",value:"bh3.com"},{format:"domain",value:"themisweeps.com"},{format:"domain",value:"yuanshen.com"},{format:"domain",value:"regexp:^.+-mihayo\\.akamaized\\.net$"}],[{format:"domain",value:"abema.io"},{format:"domain",value:"abema.tv"},{format:"domain",value:"abema-tv.com"},{format:"domain",value:"adx.promo"},{format:"domain",value:"ameba.jp"},{format:"domain",value:"amebame.com"},{format:"domain",value:"amebaownd.com"},{format:"domain",value:"amebaowndme.com"},{format:"domain",value:"ameblo.jp"},{format:"domain",value:"bucketeer.jp"},{format:"domain",value:"dokusho-ojikan.jp"},{format:"domain",value:"hayabusa.dev"},{format:"domain",value:"hayabusa.io"},{format:"domain",value:"hayabusa.media"},{format:"domain",value:"winticket.jp"},{format:"full domain",value:"abematv.akamaized.net"},{format:"full domain",value:"ds-linear-abematv.akamaized.net"},{format:"full domain",value:"ds-vod-abematv.akamaized.net"},{format:"full domain",value:"linear-abematv.akamaized.net"},{format:"full domain",value:"vod-abematv.akamaized.net"}],[{format:"domain",value:"boc.cn"},{format:"domain",value:"bank-of-china.com"},{format:"domain",value:"bankofchina.com"},{format:"domain",value:"bocfullertonbank.com"},{format:"domain",value:"bocamchina.com"},{format:"domain",value:"bocaviation.com"},{format:"domain",value:"boccfc.cc"},{format:"domain",value:"boccfc.cn"},{format:"domain",value:"bocgi.com"},{format:"domain",value:"bocgins.com"},{format:"domain",value:"bochk.com"},{format:"domain",value:"bocichina.cn"},{format:"domain",value:"bocichina.com"},{format:"domain",value:"bocichina.com.cn"},{format:"domain",value:"bocifunds.cn"},{format:"domain",value:"bocifunds.com"},{format:"domain",value:"bocifunds.com.cn"},{format:"domain",value:"bocigroup.com"},{format:"domain",value:"bocim.com"},{format:"domain",value:"bocservices.com.cn"}],[{format:"domain",value:"coloros.com"},{format:"domain",value:"finzfin.com"},{format:"domain",value:"heytap.com"},{format:"domain",value:"heytapcs.com"},{format:"domain",value:"heytapdownload.com"},{format:"domain",value:"heytapimage.com"},{format:"domain",value:"heytapmobi.com"},{format:"domain",value:"myoppo.com"},{format:"domain",value:"nearme.com.cn"},{format:"domain",value:"oppo.cn"},{format:"domain",value:"oppo.com"},{format:"domain",value:"oppo.mobi"},{format:"domain",value:"oppodigital.com"},{format:"domain",value:"oppoer.me"},{format:"domain",value:"oppomobile.com"},{format:"domain",value:"oppopay.com"},{format:"domain",value:"opposhop.cn"},{format:"domain",value:"realme.com"},{format:"domain",value:"realmebbs.com"},{format:"domain",value:"realmemobile.com"}],[{format:"domain",value:"softbank"},{format:"domain",value:"sb-mobile.jp"},{format:"domain",value:"sb-telecom.net"},{format:"domain",value:"softbank-ipo.com"},{format:"domain",value:"softbank-jp.com"},{format:"domain",value:"softbank-robotics.com"},{format:"domain",value:"softbank-telecom.com"},{format:"domain",value:"softbank-telecom.net"},{format:"domain",value:"softbank.jp"},{format:"domain",value:"softbank.tv"},{format:"domain",value:"softbankbb.com"},{format:"domain",value:"softbankbb.net"},{format:"domain",value:"softbankci.com"},{format:"domain",value:"softbankhawksstore.jp"},{format:"domain",value:"softbankmobile.net"},{format:"domain",value:"softbankrobotics.com"},{format:"domain",value:"softbanktelecom.com"},{format:"domain",value:"softbankusa.net"},{format:"domain",value:"softbankventuresasia.com"},{format:"domain",value:"softbankworld.com"}],[{format:"domain",value:"byspotify.com"},{format:"domain",value:"pscdn.co"},{format:"domain",value:"scdn.co"},{format:"domain",value:"spoti.fi"},{format:"domain",value:"spotify-everywhere.com"},{format:"domain",value:"spotify.com"},{format:"domain",value:"spotify.design"},{format:"domain",value:"spotifycdn.com"},{format:"domain",value:"spotifycdn.net"},{format:"domain",value:"spotifycharts.com"},{format:"domain",value:"spotifycodes.com"},{format:"domain",value:"spotifyforbrands.com"},{format:"domain",value:"spotifyjobs.com"},{format:"full domain",value:"audio-ak-spotify-com.akamaized.net"},{format:"full domain",value:"audio4-ak-spotify-com.akamaized.net"},{format:"full domain",value:"heads-ak-spotify-com.akamaized.net"},{format:"full domain",value:"heads4-ak-spotify-com.akamaized.net"},{format:"full domain",value:"spotify.com.edgesuite.net"},{format:"full domain",value:"spotify.map.fastly.net"},{format:"full domain",value:"spotify.map.fastlylb.net"}],[{format:"domain",value:"askubuntu.com"},{format:"domain",value:"blogoverflow.com"},{format:"domain",value:"codeforaliving.io"},{format:"domain",value:"mathoverflow.net"},{format:"domain",value:"serverfault.com"},{format:"domain",value:"sstatic.net"},{format:"domain",value:"stackapps.com"},{format:"domain",value:"stackauth.com"},{format:"domain",value:"stackexchange.com"},{format:"domain",value:"stackmod.blog"},{format:"domain",value:"stackoverflow.blog"},{format:"domain",value:"stackoverflow.co"},{format:"domain",value:"stackoverflow.com"},{format:"domain",value:"stackoverflow.email"},{format:"domain",value:"stackoverflowbusiness.com"},{format:"domain",value:"stackoverflowcareers.com"},{format:"domain",value:"stacksnippets.net"},{format:"domain",value:"superuser.com"},{format:"domain",value:"tex-talk.net"},{format:"domain",value:"thesffblog.com"}],[{format:"domain",value:"mvk.com"},{format:"domain",value:"userapi.com"},{format:"domain",value:"vk-cdn.me"},{format:"domain",value:"vk-cdn.net"},{format:"domain",value:"vk-portal.net"},{format:"domain",value:"vk.cc"},{format:"domain",value:"vk.com"},{format:"domain",value:"vk.design"},{format:"domain",value:"vk.link"},{format:"domain",value:"vk.me"},{format:"domain",value:"vkcache.com"},{format:"domain",value:"vkgo.app"},{format:"domain",value:"vklive.app"},{format:"domain",value:"vkmessenger.com"},{format:"domain",value:"vkmessenger.app"},{format:"domain",value:"vkontakte.ru"},{format:"domain",value:"vkuseraudio.com"},{format:"domain",value:"vkuserlive.net"},{format:"domain",value:"vkuservideo.com"},{format:"domain",value:"vkuservideo.net"},{format:"domain",value:"vkuseraudio.net"}],[{format:"domain",value:"mozilla.com"},{format:"domain",value:"mozilla.community"},{format:"domain",value:"mozilla.net"},{format:"domain",value:"mozilla.org"},{format:"domain",value:"extensionworkshop.com"},{format:"domain",value:"bugzilla.org"},{format:"domain",value:"getpocket.com"},{format:"domain",value:"seamonkey-project.org"},{format:"domain",value:"thunderbird.net"},{format:"domain",value:"firefox.com"},{format:"domain",value:"firefoxusercontent.com"},{format:"domain",value:"mdn.mozit.cloud"},{format:"full domain",value:"developer.mozilla.org"},{format:"full domain",value:"interactive-examples.mdn.mozilla.net"},{format:"full domain",value:"mdn.mozillademos.org"},{format:"domain",value:"rust-lang.org"},{format:"domain",value:"rustup.rs"},{format:"domain",value:"crates.io"},{format:"domain",value:"docs.rs"}],[{format:"domain",value:"adidas.at"},{format:"domain",value:"adidas.be"},{format:"domain",value:"adidas.ch"},{format:"domain",value:"adidas.co.in"},{format:"domain",value:"adidas.co.uk"},{format:"domain",value:"adidas.com"},{format:"domain",value:"adidas.com.cn"},{format:"domain",value:"adidas.com.sa"},{format:"domain",value:"adidas.com.tw"},{format:"domain",value:"adidas.cz"},{format:"domain",value:"adidas.de"},{format:"domain",value:"adidas.dk"},{format:"domain",value:"adidas.hu"},{format:"domain",value:"adidas.ie"},{format:"domain",value:"adidas.it"},{format:"domain",value:"adidas.nl"},{format:"domain",value:"adidas.pl"},{format:"domain",value:"adidas.ru"},{format:"domain",value:"adidas.se"}],[{format:"domain",value:"appldnld.apple.com"},{format:"domain",value:"gg.apple.com"},{format:"domain",value:"gnf-mdn.apple.com"},{format:"domain",value:"gnf-mr.apple.com"},{format:"domain",value:"gs.apple.com"},{format:"domain",value:"ig.apple.com"},{format:"domain",value:"mesu.apple.com"},{format:"domain",value:"ns.itunes.apple.com"},{format:"domain",value:"oscdn.apple.com"},{format:"domain",value:"osrecovery.apple.com"},{format:"domain",value:"skl.apple.com"},{format:"domain",value:"swcdn.apple.com"},{format:"domain",value:"swdist.apple.com"},{format:"domain",value:"swdownload.apple.com"},{format:"domain",value:"swpost.apple.com"},{format:"domain",value:"swscan.apple.com"},{format:"domain",value:"updates-http.cdn-apple.com"},{format:"domain",value:"updates.cdn-apple.com"},{format:"domain",value:"xp.apple.com"}],[{format:"domain",value:"alphassl.com"},{format:"domain",value:"globalsign-media.com"},{format:"domain",value:"globalsign.be"},{format:"domain",value:"globalsign.ch"},{format:"domain",value:"globalsign.co.uk"},{format:"domain",value:"globalsign.com"},{format:"domain",value:"globalsign.com.au"},{format:"domain",value:"globalsign.com.hk"},{format:"domain",value:"globalsign.com.sg"},{format:"domain",value:"globalsign.es"},{format:"domain",value:"globalsign.eu"},{format:"domain",value:"globalsign.fr"},{format:"domain",value:"globalsign.net"},{format:"domain",value:"globalsign.nl"},{format:"full domain",value:"crl2.alphassl.com"},{format:"full domain",value:"ocsp.globalsign.com"},{format:"full domain",value:"ocsp2.globalsign.com"},{format:"full domain",value:"secure.globalsign.com"},{format:"full domain",value:"secure2.alphassl.com"}],[{format:"domain",value:"adnet.sohu.com"},{format:"domain",value:"ads.sohu.com"},{format:"domain",value:"adv-sv-show.focus.cn"},{format:"domain",value:"aty.sohu.com"},{format:"domain",value:"data.vod.itc.cn"},{format:"domain",value:"epro.sogou.com"},{format:"domain",value:"go.sohu.com"},{format:"domain",value:"golden1.sogou.com"},{format:"domain",value:"imp.optaim.com"},{format:"domain",value:"inte.sogou.com"},{format:"domain",value:"inte.sogoucdn.com"},{format:"domain",value:"lu.sogoucdn.com"},{format:"domain",value:"pv.sohu.com"},{format:"domain",value:"theta.sogoucdn.com"},{format:"domain",value:"track.sohu.com"},{format:"domain",value:"uranus.sogou.com"},{format:"domain",value:"v2.reachmax.cn"},{format:"full domain",value:"e8aeb8bbdbbd7.cdn.sohucs.com"},{format:"full domain",value:"643108e7617ef.cdn.sohucs.com"}],[{format:"domain",value:"avstar01.me"},{format:"domain",value:"avstar02.me"},{format:"domain",value:"avstar03.me"},{format:"domain",value:"avstar04.com"},{format:"domain",value:"avstar04.me"},{format:"domain",value:"avstar05.me"},{format:"domain",value:"avstar06.me"},{format:"domain",value:"avstar07.com"},{format:"domain",value:"avstar07.me"},{format:"domain",value:"avstar09.com"},{format:"domain",value:"avstar09.me"},{format:"domain",value:"avstar1.com"},{format:"domain",value:"avstar2.com"},{format:"domain",value:"avstar3.com"},{format:"domain",value:"avstar4.com"},{format:"domain",value:"avstar5.com"},{format:"domain",value:"avstar6.com"},{format:"domain",value:"avstar8.com"},{format:"domain",value:"avstar9.com"}],[{format:"domain",value:"clickedu.co.uk"},{format:"domain",value:"deepfreeze.co.uk"},{format:"domain",value:"deepfreeze.com"},{format:"domain",value:"deepfreeze.com.br"},{format:"domain",value:"deepfreeze.eu"},{format:"domain",value:"deepfreeze.net"},{format:"domain",value:"deepfreeze.tech"},{format:"domain",value:"faronics.ca"},{format:"domain",value:"faronics.co.uk"},{format:"domain",value:"faronics.com"},{format:"domain",value:"faronics.com.au"},{format:"domain",value:"faronics.com.sg"},{format:"domain",value:"faronics.eu"},{format:"domain",value:"faronics.tech"},{format:"domain",value:"faronicslabs.com"},{format:"domain",value:"faronicswise.co.uk"},{format:"domain",value:"faronicswise.com"},{format:"full domain",value:"faronics.kayako.com"}],[{format:"domain",value:"huffingtonpost.ca"},{format:"domain",value:"huffingtonpost.co.uk"},{format:"domain",value:"huffingtonpost.co.za"},{format:"domain",value:"huffingtonpost.com"},{format:"domain",value:"huffingtonpost.com.au"},{format:"domain",value:"huffingtonpost.com.mx"},{format:"domain",value:"huffingtonpost.de"},{format:"domain",value:"huffingtonpost.es"},{format:"domain",value:"huffingtonpost.fr"},{format:"domain",value:"huffingtonpost.gr"},{format:"domain",value:"huffingtonpost.in"},{format:"domain",value:"huffingtonpost.it"},{format:"domain",value:"huffingtonpost.jp"},{format:"domain",value:"huffingtonpost.kr"},{format:"domain",value:"huffpost.com"},{format:"domain",value:"huffpostarabi.com"},{format:"domain",value:"huffpostbrasil.com"},{format:"domain",value:"huffpostmaghreb.com"}],[{format:"domain",value:"singtaonewscorp.com"},{format:"domain",value:"sing68.com"},{format:"domain",value:"singtao.com"},{format:"domain",value:"singtaobooks.com"},{format:"domain",value:"singtaola.com"},{format:"domain",value:"singtaousa.com"},{format:"domain",value:"stheadline.com"},{format:"domain",value:"singtaoopo.com"},{format:"domain",value:"hkheadline.com"},{format:"domain",value:"thestandard.com.hk"},{format:"domain",value:"eastweek.com.hk"},{format:"domain",value:"easttouch.com.hk"},{format:"domain",value:"bastillepost.com"},{format:"domain",value:"eduplus.hk"},{format:"domain",value:"headlinejobs.hk"},{format:"domain",value:"jobmarket.com.hk"},{format:"domain",value:"my-magazine.me"},{format:"domain",value:"pcmarket.com.hk"}],[{format:"domain",value:"mediawiki.org"},{format:"domain",value:"wikibooks.org"},{format:"domain",value:"wikidata.org"},{format:"domain",value:"wikimediafoundation.org"},{format:"domain",value:"wikimedia.org"},{format:"domain",value:"wikinews.org"},{format:"domain",value:"wikipedia.org"},{format:"domain",value:"wikiquote.org"},{format:"domain",value:"wikisource.org"},{format:"domain",value:"wikiversity.org"},{format:"domain",value:"wikivoyage.org"},{format:"domain",value:"wiktionary.org"},{format:"domain",value:"wmfusercontent.org"},{format:"domain",value:"w.wiki"},{format:"domain",value:"toolforge.org"},{format:"domain",value:"wikimediacloud.org"},{format:"domain",value:"wmcloud.org"},{format:"domain",value:"wmflabs.org"}],[{format:"domain",value:"dmm.com"},{format:"domain",value:"dmm-extension.com"},{format:"domain",value:"dmmapis.com"},{format:"full domain",value:"api-p.videomarket.jp"},{format:"domain",value:"ad.games.dmm.com"},{format:"domain",value:"bluekai.com"},{format:"domain",value:"fout.jp"},{format:"domain",value:"gmossp-sp.jp"},{format:"domain",value:"i-mobile.co.jp"},{format:"domain",value:"im-apps.net"},{format:"domain",value:"impact-ad.jp"},{format:"domain",value:"ladsp.com"},{format:"domain",value:"microad.co.jp"},{format:"domain",value:"microad.jp"},{format:"domain",value:"socdm.com"},{format:"domain",value:"dmm.co.jp"},{format:"domain",value:"dmmrex.com"}],[{format:"domain",value:"oracle"},{format:"domain",value:"oracle.com"},{format:"domain",value:"oraclecloud.com"},{format:"domain",value:"oraclefoundation.org"},{format:"domain",value:"oracleimg.com"},{format:"domain",value:"oracleinfinity.io"},{format:"domain",value:"ateam-oracle.com"},{format:"domain",value:"bronto.com"},{format:"domain",value:"covid19-rx.org"},{format:"domain",value:"covid19rx.org"},{format:"domain",value:"sun.com"},{format:"domain",value:"addthis.com"},{format:"domain",value:"addthiscdn.com"},{format:"domain",value:"addthisedge.com"},{format:"domain",value:"java"},{format:"domain",value:"java.com"},{format:"domain",value:"java.net"}],[{format:"domain",value:"lfai.foundation"},{format:"domain",value:"linuxfoundation.org"},{format:"domain",value:"kernel.org"},{format:"domain",value:"linux.org"},{format:"domain",value:"openjsf.org"},{format:"domain",value:"amp.dev"},{format:"domain",value:"ampproject.com"},{format:"domain",value:"ampproject.net"},{format:"domain",value:"ampproject.org"},{format:"full domain",value:"cdn.ampproject.org"},{format:"full domain",value:"amp.akamaized.net"},{format:"domain",value:"electronjs.org"},{format:"domain",value:"jquery.com"},{format:"domain",value:"jquerymobile.com"},{format:"domain",value:"jqueryui.com"},{format:"domain",value:"mochajs.org"},{format:"domain",value:"nodejs.org"}],[{format:"domain",value:"anm.co.uk"},{format:"domain",value:"dailym.ai"},{format:"domain",value:"dailymail.co.uk"},{format:"domain",value:"dailymail.com"},{format:"domain",value:"dailymail.com.au"},{format:"domain",value:"dailymail.dk"},{format:"domain",value:"dailymailonline.com"},{format:"domain",value:"dmgmediaprivacy.co.uk"},{format:"domain",value:"mailhealth.com"},{format:"domain",value:"mailonline.co.uk"},{format:"domain",value:"mailonline.com"},{format:"domain",value:"mailonsunday.co.uk"},{format:"domain",value:"mailonsunday.ie"},{format:"domain",value:"metro.co.uk"},{format:"domain",value:"mol.im"},{format:"domain",value:"thisismoney.co.uk"},{format:"domain",value:"thismon.ee"}],[{format:"domain",value:"42r.cn"},{format:"domain",value:"5566ua.com"},{format:"domain",value:"aurorapush.cn"},{format:"domain",value:"e0n.cn"},{format:"domain",value:"japps.cn"},{format:"domain",value:"jchat.io"},{format:"domain",value:"jiguang.cn"},{format:"domain",value:"jmlk.co"},{format:"domain",value:"jpush.cn"},{format:"domain",value:"jpush.io"},{format:"domain",value:"jpushoa.com"},{format:"domain",value:"jsurvey.cn"},{format:"domain",value:"jvoice.cn"},{format:"domain",value:"kc9.cn"},{format:"domain",value:"n0q.cn"},{format:"domain",value:"pushcfg.com"},{format:"domain",value:"s0n.cn"}],[{format:"domain",value:"dreamworks.com"},{format:"domain",value:"cnbc.com"},{format:"domain",value:"cnbcfm.com"},{format:"domain",value:"msnbc.com"},{format:"domain",value:"nbc.co"},{format:"domain",value:"nbc.com"},{format:"domain",value:"nbcnews.com"},{format:"domain",value:"nbcolympics.com"},{format:"domain",value:"nbcsports.com"},{format:"domain",value:"nbcuni.com"},{format:"domain",value:"nbcuniversal.com"},{format:"domain",value:"s-nbcnews.com"},{format:"domain",value:"peacocktv.com"},{format:"domain",value:"universalorlando.com"},{format:"domain",value:"universalpictures.com"},{format:"domain",value:"universalpicturesinternational.com"},{format:"domain",value:"universalstudioshollywood.com"},{format:"domain",value:"nbcudigitaladops.com"}],[{format:"domain",value:"dyncdn.me"},{format:"domain",value:"rarbg.me"},{format:"domain",value:"rarbg.to"},{format:"domain",value:"proxyrarbg.org"},{format:"domain",value:"rarbg.is"},{format:"domain",value:"rarbgaccess.org"},{format:"domain",value:"rarbgaccessed.org"},{format:"domain",value:"rarbgget.org"},{format:"domain",value:"rarbggo.org"},{format:"domain",value:"rarbgmirror.com"},{format:"domain",value:"rarbgmirror.org"},{format:"domain",value:"rarbgproxy.org"},{format:"domain",value:"rarbgprx.org"},{format:"domain",value:"rarbgto.org"},{format:"domain",value:"rarbgunblock.com"},{format:"domain",value:"rarbgunblock.org"},{format:"domain",value:"rarbgway.org"}],[{format:"domain",value:"realclear.com"},{format:"domain",value:"realclearbooks.com"},{format:"domain",value:"realcleardefense.com"},{format:"domain",value:"realcleareducation.com"},{format:"domain",value:"realclearenergy.org"},{format:"domain",value:"realclearfoundation.org"},{format:"domain",value:"realclearhealth.com"},{format:"domain",value:"realclearhistory.com"},{format:"domain",value:"realclearinvestigations.com"},{format:"domain",value:"realclearlife.com"},{format:"domain",value:"realclearmarkets.com"},{format:"domain",value:"realclearpolicy.com"},{format:"domain",value:"realclearpolitics.com"},{format:"domain",value:"realclearpublicaffairs.com"},{format:"domain",value:"realclearreligion.org"},{format:"domain",value:"realclearscience.com"},{format:"domain",value:"realclearworld.com"}],[{format:"domain",value:"comments.app"},{format:"domain",value:"contest.com"},{format:"domain",value:"graph.org"},{format:"domain",value:"quiz.directory"},{format:"domain",value:"t.me"},{format:"domain",value:"tdesktop.com"},{format:"domain",value:"telega.one"},{format:"domain",value:"telegra.ph"},{format:"domain",value:"telegram-cdn.org"},{format:"domain",value:"telegram.dog"},{format:"domain",value:"telegram.me"},{format:"domain",value:"telegram.org"},{format:"domain",value:"telegram.space"},{format:"domain",value:"telesco.pe"},{format:"domain",value:"tg.dev"},{format:"domain",value:"tx.me"},{format:"domain",value:"usercontent.dev"},{format:"domain",value:"web.telegram.org"},{format:"domain",value:"aurora.web.telegram.org"},{format:"domain",value:"aurora-1.web.telegram.org"},{format:"domain",value:"flora.web.telegram.org"},{format:"domain",value:"flora-1.web.telegram.org"},{format:"domain",value:"pluto.web.telegram.org"},{format:"domain",value:"pluto-1.web.telegram.org"},{format:"domain",value:"venus.web.telegram.org"},{format:"domain",value:"venus-1.web.telegram.org"},{format:"domain",value:"vesta.web.telegram.org"},{format:"domain",value:"vesta-1.web.telegram.org"}],[{format:"domain",value:"vhx.tv"},{format:"domain",value:"vhxqa1.com"},{format:"domain",value:"vhxqa2.com"},{format:"domain",value:"vhxqa3.com"},{format:"domain",value:"vhxqa4.com"},{format:"domain",value:"vhxqa6.com"},{format:"domain",value:"vimeo-staging.com"},{format:"domain",value:"vimeo-staging2.com"},{format:"domain",value:"vimeo.com"},{format:"domain",value:"vimeo.fr"},{format:"domain",value:"vimeobusiness.com"},{format:"domain",value:"vimeocdn.com"},{format:"domain",value:"vimeogoods.com"},{format:"domain",value:"vimeoondemand.com"},{format:"domain",value:"vimeostatus.com"},{format:"domain",value:"livestream.com"},{format:"domain",value:"regexp:^[0-9]+vod-adaptive\\.akamaized\\.net$"}],[{format:"domain",value:"ccb-life.com.cn"},{format:"domain",value:"ccb.cn"},{format:"domain",value:"ccb.com"},{format:"domain",value:"ccb.com.cn"},{format:"domain",value:"ccbcos.com"},{format:"domain",value:"ccbfund.cn"},{format:"domain",value:"ccbfund.com"},{format:"domain",value:"ccbfund.com.cn"},{format:"domain",value:"ccbfutures.cn"},{format:"domain",value:"ccbfutures.com"},{format:"domain",value:"ccbintl.com.hk"},{format:"domain",value:"ccbleasing.com"},{format:"domain",value:"ccblife-test.com.cn"},{format:"domain",value:"ccbseoul.com"},{format:"domain",value:"ccbtrust.com.cn"},{format:"domain",value:"ccbxt.com"}],[{format:"domain",value:"10086.cn"},{format:"domain",value:"139.com"},{format:"domain",value:"chinamobile.com"},{format:"domain",value:"chinamobileltd.com"},{format:"domain",value:"migucloud.com"},{format:"domain",value:"migu.cn"},{format:"domain",value:"cmvideo.cn"},{format:"domain",value:"miguvideo.com"},{format:"domain",value:"andfx.cn"},{format:"domain",value:"andfx.net"},{format:"domain",value:"cmicrwx.cn"},{format:"domain",value:"cmpassport.com"},{format:"domain",value:"fetion-portal.com"},{format:"domain",value:"fetionpic.com"},{format:"domain",value:"mmarket.com"},{format:"domain",value:"mmarket6.com"}],[{format:"domain",value:"db.tt"},{format:"domain",value:"dropbox-dns.com"},{format:"domain",value:"dropbox.com"},{format:"domain",value:"dropbox.tech"},{format:"domain",value:"dropboxapi.com"},{format:"domain",value:"dropboxbusiness.com"},{format:"domain",value:"dropboxcaptcha.com"},{format:"domain",value:"dropboxforum.com"},{format:"domain",value:"dropboxforums.com"},{format:"domain",value:"dropboxinsiders.com"},{format:"domain",value:"dropboxmail.com"},{format:"domain",value:"dropboxpartners.com"},{format:"domain",value:"dropboxstatic.com"},{format:"domain",value:"dropboxusercontent.com"},{format:"domain",value:"getdropbox.com"},{format:"full domain",value:"paper-attachments.s3.amazonaws.com"}],[{format:"domain",value:"battlebreakers.com"},{format:"domain",value:"eac-cdn.com"},{format:"domain",value:"easy.ac"},{format:"domain",value:"easyanticheat.net"},{format:"domain",value:"epicgames.com"},{format:"domain",value:"fortnite.com"},{format:"domain",value:"paragon.com"},{format:"domain",value:"playparagon.com"},{format:"domain",value:"roborecall.com"},{format:"domain",value:"shadowcomplex.com"},{format:"domain",value:"spyjinx.com"},{format:"domain",value:"unrealengine.com"},{format:"domain",value:"unrealtournament.com"},{format:"domain",value:"regexp:^cdn\\d-epicgames-\\d+\\.file\\.myqcloud\\.com$"},{format:"domain",value:"regexp:^epicgames-download\\d\\.akamaized\\.net$"},{format:"domain",value:"regexp:^epicgames-download\\d-\\d+\\.file\\.myqcloud\\.com$"}],[{format:"full domain",value:"avatargarenanow-a.akamaihd.net"},{format:"full domain",value:"cdngarenanow-a.akamaihd.net"},{format:"full domain",value:"dlgarenanow-a.akamaihd.net"},{format:"full domain",value:"dlmobilegarena-a.akamaihd.net"},{format:"domain",value:"garena.co.id"},{format:"domain",value:"garena.co.th"},{format:"domain",value:"garena.com"},{format:"domain",value:"garena.live"},{format:"domain",value:"garena.my"},{format:"domain",value:"garena.ph"},{format:"domain",value:"garena.sg"},{format:"domain",value:"garena.tv"},{format:"domain",value:"garena.tw"},{format:"domain",value:"garena.vn"},{format:"domain",value:"garenanow.com"},{format:"domain",value:"seagroup.com"}],[{format:"domain",value:"businessinsider.co.za"},{format:"domain",value:"businessinsider.com"},{format:"domain",value:"businessinsider.com.au"},{format:"domain",value:"businessinsider.com.pl"},{format:"domain",value:"businessinsider.de"},{format:"domain",value:"businessinsider.es"},{format:"domain",value:"businessinsider.fr"},{format:"domain",value:"businessinsider.in"},{format:"domain",value:"businessinsider.jp"},{format:"domain",value:"businessinsider.mx"},{format:"domain",value:"businessinsider.my"},{format:"domain",value:"businessinsider.nl"},{format:"domain",value:"businessinsider.sg"},{format:"domain",value:"insider-intelligence.com"},{format:"domain",value:"insider.com"},{format:"domain",value:"insiderintelligence.com"}],[{format:"domain",value:"es-visiontimes.com"},{format:"domain",value:"kannewyork.com"},{format:"domain",value:"kanzhongguo.com"},{format:"domain",value:"kanzhongguo.eu"},{format:"domain",value:"secretchina.com"},{format:"domain",value:"trithucvn.net"},{format:"domain",value:"trithucvn.org"},{format:"domain",value:"vct.news"},{format:"domain",value:"visiontimes.com"},{format:"domain",value:"visiontimes.de"},{format:"domain",value:"visiontimes.fr"},{format:"domain",value:"visiontimes.it"},{format:"domain",value:"visiontimes.net"},{format:"domain",value:"visiontimesjp.com"},{format:"domain",value:"vtvan.com"},{format:"domain",value:"watchinese.com"}],[{format:"domain",value:"cstatic.net"},{format:"domain",value:"curbed.com"},{format:"domain",value:"eater.com"},{format:"domain",value:"funnyordie.com"},{format:"domain",value:"meridian.net"},{format:"domain",value:"polygon.com"},{format:"domain",value:"racked.com"},{format:"domain",value:"recode.net"},{format:"domain",value:"sbnation.com"},{format:"domain",value:"theverge.com"},{format:"domain",value:"vox-cdn.com"},{format:"domain",value:"vox.com"},{format:"domain",value:"voxcreative.com"},{format:"domain",value:"voxfieldguide.com"},{format:"domain",value:"voxmedia.com"},{format:"domain",value:"voxops.net"}],[{format:"domain",value:"citic"},{format:"domain",value:"chinaamc.com"},{format:"domain",value:"citic-prudential.com.cn"},{format:"domain",value:"citicbank.com"},{format:"domain",value:"citiccapital.com"},{format:"domain",value:"citiciam.com"},{format:"domain",value:"citicifh.com"},{format:"domain",value:"citicprufunds.com.cn"},{format:"domain",value:"citics.com.hk"},{format:"domain",value:"citicsf.com"},{format:"domain",value:"clsa.com"},{format:"domain",value:"cncbinternational.com"},{format:"domain",value:"csc108.com"},{format:"domain",value:"csci.hk"},{format:"domain",value:"ecitic.com"}],[{format:"domain",value:"codechina.net"},{format:"domain",value:"csdn.com"},{format:"domain",value:"csdn.net"},{format:"domain",value:"csdn.net.cn"},{format:"domain",value:"csdnimg.cn"},{format:"domain",value:"csto.com"},{format:"domain",value:"datasea.cn"},{format:"domain",value:"gitbook.cn"},{format:"domain",value:"gitchat.cn"},{format:"domain",value:"gitcode.com"},{format:"domain",value:"gitcode.net"},{format:"domain",value:"iteye.com"},{format:"domain",value:"kaifayun.com"},{format:"domain",value:"programmer.com.cn"},{format:"domain",value:"programmer.net.cn"}],[{format:"domain",value:"cebbank.com"},{format:"domain",value:"ceblease.com"},{format:"domain",value:"eb-ind.com"},{format:"domain",value:"ebasset.com"},{format:"domain",value:"ebchina.com"},{format:"domain",value:"ebchinaintl.com"},{format:"domain",value:"ebf.com.cn"},{format:"domain",value:"ebfcn.com"},{format:"domain",value:"ebfortune.com"},{format:"domain",value:"ebtrust.com"},{format:"domain",value:"ebscn-am.com"},{format:"domain",value:"ebscn.com"},{format:"domain",value:"everbright.com"},{format:"domain",value:"secec.com"},{format:"domain",value:"sunlife-everbright.com"}],[{format:"domain",value:"api.game.letvstore.com"},{format:"domain",value:"ark.letv.com"},{format:"domain",value:"dc.letv.com"},{format:"domain",value:"dev.dc.letv.com"},{format:"domain",value:"fz.letv.com"},{format:"domain",value:"g3.letv.com"},{format:"domain",value:"letv.allyes.com"},{format:"domain",value:"minisite.letv.com"},{format:"domain",value:"msg.m.letv.com"},{format:"domain",value:"n.mark.letv.com"},{format:"domain",value:"plog.dc.letv.com"},{format:"domain",value:"pro.hoye.letv.com"},{format:"domain",value:"pro.letv.com"},{format:"domain",value:"stat.letv.com"},{format:"domain",value:"static.app.m.letv.com"}],[{format:"domain",value:"enterprisessl.com"},{format:"domain",value:"hackerguardian.com"},{format:"domain",value:"instantssl.com"},{format:"domain",value:"oemssl.cn"},{format:"domain",value:"optimumssl.com"},{format:"domain",value:"positivessl.com"},{format:"domain",value:"sectigo.com"},{format:"domain",value:"sectigochina.com"},{format:"domain",value:"trust-provider.cn"},{format:"domain",value:"trust-provider.com"},{format:"domain",value:"usertrust.com"},{format:"domain",value:"aoc.cat"},{format:"domain",value:"catcert.cat"},{format:"domain",value:"incommon-rsa.org"},{format:"domain",value:"netsolssl.com"}],[{format:"domain",value:"barkadahansasmartone.com"},{format:"domain",value:"healthreach.hk"},{format:"domain",value:"hkcircleapp.com"},{format:"domain",value:"homephoneplus.com"},{format:"domain",value:"ip73.com"},{format:"domain",value:"s-cashonmobile.com"},{format:"domain",value:"s-rewards.hk"},{format:"domain",value:"sahabatsetiasmartone.com"},{format:"domain",value:"smartone.com"},{format:"domain",value:"smartoneholdings.com"},{format:"domain",value:"smartonerobotics.com"},{format:"domain",value:"smartonesolutions.com.hk"},{format:"domain",value:"smartonesolutions.hk"},{format:"domain",value:"valuegb.com"},{format:"domain",value:"wise-research.com"}],[{format:"domain",value:"monotype.com"},{format:"domain",value:"monotypeimaging.com"},{format:"domain",value:"bitstream.com"},{format:"domain",value:"itcfonts.com"},{format:"domain",value:"fontexplorerx.com"},{format:"domain",value:"fonts.com"},{format:"domain",value:"fonts.net"},{format:"domain",value:"fontbook.com"},{format:"domain",value:"fontshop.com"},{format:"domain",value:"fstopimages.com"},{format:"full domain",value:"fontshop-prod-responsive-images.s3.amazonaws.com"},{format:"domain",value:"linotype.com"},{format:"domain",value:"myfonts.com"},{format:"domain",value:"myfonts.net"}],[{format:"domain",value:"bigbigchannel.com.hk"},{format:"domain",value:"bigbigshop.com"},{format:"domain",value:"encoretvb.com"},{format:"domain",value:"tvb.com"},{format:"domain",value:"tvb.com.au"},{format:"domain",value:"tvbanywhere.com"},{format:"domain",value:"tvbanywhere.com.sg"},{format:"domain",value:"tvbc.com.cn"},{format:"domain",value:"tvbeventpower.com.hk"},{format:"domain",value:"tvbusa.com"},{format:"domain",value:"tvbweekly.com"},{format:"domain",value:"tvmedia.net.au"},{format:"domain",value:"mytvsuper.com"}],[{format:"domain",value:"9cdn.net"},{format:"domain",value:"9nation.com.au"},{format:"domain",value:"9news.com.au"},{format:"domain",value:"9now.com.au"},{format:"domain",value:"freeviewplus.net.au"},{format:"domain",value:"mi9.com.au"},{format:"domain",value:"mi9cdn.com"},{format:"domain",value:"nine.com.au"},{format:"domain",value:"nineentertainment.com.au"},{format:"domain",value:"nineentertainmentco.com.au"},{format:"domain",value:"ninemediaroom.com.au"},{format:"domain",value:"ninemsn.com.au"},{format:"domain",value:"static9.net.au"},{format:"domain",value:"yourtv.com.au"}],[{format:"domain",value:"bcove.video"},{format:"domain",value:"bcovlive.io"},{format:"domain",value:"bcvp0rtal.com"},{format:"domain",value:"boltdns.net"},{format:"domain",value:"brightcove.com"},{format:"domain",value:"brightcove.net"},{format:"domain",value:"brightcove.services"},{format:"domain",value:"brightcovecdn.com"},{format:"domain",value:"videojs.com"},{format:"domain",value:"zencdn.net"},{format:"domain",value:"zencoder.com"},{format:"full domain",value:"bcovlive-a.akamaihd.net"},{format:"full domain",value:"bcsecure01-a.akamaihd.net"},{format:"full domain",value:"brightcove.imgix.net"},{format:"domain",value:"tver.jp"},{format:"domain",value:"stream.ne.jp"},{format:"domain",value:"ktv-smart.jp"},{format:"domain",value:"video.tv-tokyo.co.jp"},{format:"domain",value:"ytv.co.jp"},{format:"domain",value:"fastly.com"},{format:"domain",value:"fastly.net"},{format:"domain",value:"fastlylabs.com"},{format:"domain",value:"fastlylb.net"},{format:"domain",value:"fastly-terrarium.com"}],[{format:"domain",value:"dcocsp.cn"},{format:"domain",value:"digicert-cn.com"},{format:"domain",value:"digicert-validation.com"},{format:"domain",value:"digicert.cn"},{format:"domain",value:"digicert.com"},{format:"domain",value:"digitalcertvalidation.com"},{format:"domain",value:"freessl.com"},{format:"domain",value:"geotrust.com"},{format:"domain",value:"rapidssl.com"},{format:"domain",value:"thawte.com"},{format:"domain",value:"thawte.de"},{format:"domain",value:"thawte.fr"},{format:"domain",value:"quovadisglobal.com"},{format:"domain",value:"public-trust.com"}],[{format:"domain",value:"acadn.cn"},{format:"domain",value:"acadn.com"},{format:"domain",value:"bbbcdns.com"},{format:"domain",value:"dlgslb.cn"},{format:"domain",value:"dlgslb.net"},{format:"domain",value:"dwion.com"},{format:"domain",value:"fastcdn.com"},{format:"domain",value:"fastcdn.com.cn"},{format:"domain",value:"flxdns.cn"},{format:"domain",value:"flxdns.com"},{format:"domain",value:"globalcdn.cn"},{format:"domain",value:"mcadn.cn"},{format:"domain",value:"tlgslb.cn"},{format:"domain",value:"tlgslb.com"}],[{format:"domain",value:"cell.com"},{format:"domain",value:"clinicalkey.com"},{format:"domain",value:"els-cdn.com"},{format:"domain",value:"elsevier-ae.com"},{format:"domain",value:"elsevier.com"},{format:"domain",value:"elsevier.io"},{format:"domain",value:"engineeringvillage.com"},{format:"domain",value:"evise.com"},{format:"domain",value:"fundinginstitutional.com"},{format:"domain",value:"knovel.com"},{format:"domain",value:"mendeley.com"},{format:"domain",value:"reaxys.com"},{format:"domain",value:"scival.com"},{format:"domain",value:"scopus.com"}],[{format:"domain",value:"samsung"},{format:"domain",value:"xn--cg4bki"},{format:"domain",value:"galaxyappstore.com"},{format:"domain",value:"galaxymobile.jp"},{format:"domain",value:"game-platform.net"},{format:"domain",value:"knoxemm.com"},{format:"domain",value:"samsung.com"},{format:"domain",value:"samsungapps.com"},{format:"domain",value:"samsungcloud.com"},{format:"domain",value:"samsungdm.com"},{format:"domain",value:"samsungeshop.com.cn"},{format:"domain",value:"samsunggalaxyfriends.com"},{format:"domain",value:"samsungknox.com"},{format:"domain",value:"samsungqbe.com"}],[{format:"domain",value:"abow.jp"},{format:"domain",value:"angelbeats.jp"},{format:"domain",value:"anigema.jp"},{format:"domain",value:"charlotte-anime.jp"},{format:"domain",value:"clannad-movie.jp"},{format:"domain",value:"heaven-burns-red.com"},{format:"domain",value:"kamisama-day.jp"},{format:"domain",value:"kamisama-maeda-lab.com"},{format:"domain",value:"koubaibu.jp"},{format:"domain",value:"litbus-anime.com"},{format:"domain",value:"product.co.jp"},{format:"domain",value:"rewrite-anime.tv"},{format:"domain",value:"visualarts.gr.jp"},{format:"domain",value:"visual-arts.jp"}],[{format:"domain",value:"51cdn.com"},{format:"domain",value:"8686c.com"},{format:"domain",value:"cdn30.org"},{format:"domain",value:"chinanetcenter.com"},{format:"domain",value:"lxdns.com"},{format:"domain",value:"lxdns.info"},{format:"domain",value:"lxdns.org"},{format:"domain",value:"ourdvsss.com"},{format:"domain",value:"speedws.info"},{format:"domain",value:"speedws.org"},{format:"domain",value:"wangsu.com"},{format:"domain",value:"wscdns.com"},{format:"domain",value:"wscdns.info"},{format:"domain",value:"wscdns.org"}],[{format:"domain",value:"want-media.com"},{format:"domain",value:"chinatimes.com"},{format:"domain",value:"chinatimes.com.tw"},{format:"domain",value:"infotimes.com.tw"},{format:"domain",value:"ctwant.com"},{format:"domain",value:"ctee.com.tw"},{format:"domain",value:"ctv.com.tw"},{format:"domain",value:"ctitv.com.tw"},{format:"domain",value:"wantblogger.com"},{format:"domain",value:"zwtvusa.com"},{format:"domain",value:"benliton.com"},{format:"domain",value:"lecoin.cc"},{format:"domain",value:"loveparents.org"},{format:"domain",value:"superstation.com.tw"}],[{format:"domain",value:"chuokoron.jp"},{format:"domain",value:"fujinkoron.jp"},{format:"domain",value:"hochi.news"},{format:"domain",value:"ryokoyomiuri.co.jp"},{format:"domain",value:"the-japan-news.com"},{format:"domain",value:"ync.ne.jp"},{format:"domain",value:"yomikyo.or.jp"},{format:"domain",value:"yomilogi.com"},{format:"domain",value:"yomiuri-johkai.co.jp"},{format:"domain",value:"yomiuri-johkai.co.jp"},{format:"domain",value:"yomiuri-ryokou.co.jp"},{format:"domain",value:"yomiuri-shimbun.pressreader.com"},{format:"domain",value:"yomiuri-systec.co.jp"},{format:"domain",value:"yomiuri.co.jp"}],[{format:"domain",value:"9anime.cz"},{format:"domain",value:"9anime.id"},{format:"domain",value:"9anime.to"},{format:"domain",value:"9anime.ws"},{format:"domain",value:"animedao-tv.com"},{format:"domain",value:"crunchyroll.com"},{format:"domain",value:"funimation.com"},{format:"domain",value:"gogo-load.com"},{format:"domain",value:"gogoanime.vc"},{format:"domain",value:"gogoanime.wiki"},{format:"domain",value:"gogocdn.net"},{format:"domain",value:"hidive.com"},{format:"domain",value:"vrv.co"}],[{format:"domain",value:"apexprint.com.hk"},{format:"domain",value:"eprc.com.hk"},{format:"domain",value:"etbc.com.hk"},{format:"domain",value:"etnet.com.cn"},{format:"domain",value:"etnet.com.hk"},{format:"domain",value:"etnetchina.com.cn"},{format:"domain",value:"etpress.com.hk"},{format:"domain",value:"ettrade.com.hk"},{format:"domain",value:"etwealth.com"},{format:"domain",value:"hket.com"},{format:"domain",value:"hketgroup.com"},{format:"domain",value:"ulifestyle.com.hk"},{format:"domain",value:"umagazine.com.hk"}],[{format:"domain",value:"logi.com"},{format:"domain",value:"logicool.co.jp"},{format:"domain",value:"logicoolg.com"},{format:"domain",value:"logitech.biz"},{format:"domain",value:"logitech.com"},{format:"domain",value:"logitech.com.cn"},{format:"domain",value:"logitech.fr"},{format:"domain",value:"logitech.io"},{format:"domain",value:"logitechg.com"},{format:"domain",value:"logitechg.com.cn"},{format:"domain",value:"logitechg.fr"},{format:"domain",value:"logitechio.com.cn"},{format:"domain",value:"worldsfastestgamer.net"}],[{format:"domain",value:"ecimg.tw"},{format:"domain",value:"pchome.com.tw"},{format:"domain",value:"pchomeec.tw"},{format:"domain",value:"pchomeonline.com.tw"},{format:"domain",value:"pchomepay.com.tw"},{format:"domain",value:"pcloud.tw"},{format:"domain",value:"pcstore.com.tw"},{format:"domain",value:"piapp.com.tw"},{format:"domain",value:"rakuya.com.tw"},{format:"domain",value:"tagapie.com.tw"},{format:"domain",value:"toget.com.tw"},{format:"full domain",value:"ecapi-pchome.cdn.hinet.net"},{format:"full domain",value:"pchomeonline.com.tw"}],[{format:"domain",value:"solarcity.com"},{format:"domain",value:"tesla.cn"},{format:"domain",value:"tesla.com"},{format:"domain",value:"tesla.com.cn"},{format:"domain",value:"tesla.services"},{format:"domain",value:"teslaenergy.services"},{format:"domain",value:"teslamotors.cn"},{format:"domain",value:"teslamotors.com"},{format:"domain",value:"teslamotors.com.cn"},{format:"domain",value:"teslazta.net"},{format:"domain",value:"ts.la"},{format:"full domain",value:"tesla-cdn.thron.cn"},{format:"full domain",value:"tesla-cdn.thron.com"}],[{format:"domain",value:"zoho.com"},{format:"domain",value:"zoho.com.au"},{format:"domain",value:"zoho.eu"},{format:"domain",value:"zoho.in"},{format:"domain",value:"zohocdn.com"},{format:"domain",value:"zohomeetups.com"},{format:"domain",value:"zohomerchandise.com"},{format:"domain",value:"zohopublic.com"},{format:"domain",value:"zohoschools.com"},{format:"domain",value:"zohostatic.com"},{format:"domain",value:"zohostatic.in"},{format:"domain",value:"zohouniversity.com"},{format:"domain",value:"zohowebstatic.com"}],[{format:"domain",value:"cdnst.net"},{format:"domain",value:"cellmaps.com"},{format:"domain",value:"ekahau.cloud"},{format:"domain",value:"ekahau.com"},{format:"domain",value:"ookla.com"},{format:"domain",value:"ooklaserver.net"},{format:"domain",value:"pingtest.net"},{format:"domain",value:"speedtest.co"},{format:"domain",value:"speedtest.net"},{format:"domain",value:"speedtestcustom.com"},{format:"domain",value:"webtest.net"},{format:"domain",value:"regexp:^speed\\.(coe|open)\\.ad\\.[a-z]{2,6}\\.prod\\.hosts\\.ooklaserver\\.net$"}],[{format:"domain",value:"cursecdn.com"},{format:"domain",value:"fandom.com"},{format:"domain",value:"wikia.com"},{format:"domain",value:"wikia.org"},{format:"domain",value:"dndbeyond.com"},{format:"domain",value:"futhead.com"},{format:"domain",value:"gamepedia.com"},{format:"domain",value:"muthead.com"},{format:"domain",value:"cortexrpg.com"},{format:"domain",value:"fanatical.com"},{format:"domain",value:"wikia.nocookie.net"},{format:"full domain",value:"fandom.zendesk.com"}],[{format:"domain",value:"heroku.co"},{format:"domain",value:"heroku.com"},{format:"domain",value:"heroku.me"},{format:"domain",value:"herokuapp.com"},{format:"domain",value:"herokucdn.com"},{format:"domain",value:"herokucharge.com"},{format:"domain",value:"herokussl.com"},{format:"domain",value:"heroku-app.com"},{format:"domain",value:"heroku-charge.com"},{format:"domain",value:"codei.sh"},{format:"domain",value:"codeish.co"},{format:"domain",value:"codeish.io"}],[{format:"domain",value:"ibm"},{format:"domain",value:"weatherchannel"},{format:"domain",value:"weather"},{format:"domain",value:"appdomain.cloud"},{format:"domain",value:"bluemix.com"},{format:"domain",value:"bluemix.net"},{format:"domain",value:"ibm.com"},{format:"domain",value:"ibm.eu"},{format:"domain",value:"ibm.net"},{format:"domain",value:"ibm.us"},{format:"domain",value:"s-bluemix.net"},{format:"domain",value:"s81c.com"}],[{format:"domain",value:"bizographics.com"},{format:"domain",value:"l-0005.dc-msedge.net"},{format:"domain",value:"l-0005.l-msedge.net"},{format:"domain",value:"licdn.com"},{format:"domain",value:"linkedin.at"},{format:"domain",value:"linkedin.com"},{format:"domain",value:"lnkd.in"},{format:"domain",value:"licdn.cn"},{format:"domain",value:"linkedin.cn"},{format:"full domain",value:"e122475.dscg.akamaiedge.net"},{format:"full domain",value:"licdn.cn.cdn20.com"},{format:"full domain",value:"linkedin.sc.omtrdc.net"}],[{format:"domain",value:"malayalamanorama.com"},{format:"domain",value:"manorama.com"},{format:"domain",value:"manoramanews.com"},{format:"domain",value:"manoramaonline.com"},{format:"domain",value:"manoramayearbook.in"},{format:"domain",value:"onmanorama.com"},{format:"domain",value:"radiomango.fm"},{format:"domain",value:"theman.in"},{format:"domain",value:"theweek.in"},{format:"domain",value:"vanitaonline.com"},{format:"domain",value:"vanitha.in"},{format:"domain",value:"vanithaveedu.com"}],[{format:"domain",value:"cash.app"},{format:"domain",value:"cashbycashapp.com"},{format:"domain",value:"gosq.co"},{format:"domain",value:"gosq.com"},{format:"domain",value:"issquaredown.com"},{format:"domain",value:"issquareup.com"},{format:"domain",value:"mkt.com"},{format:"domain",value:"sellercommunity.com"},{format:"domain",value:"squarecapital.com"},{format:"domain",value:"squarecdn.com"},{format:"domain",value:"squarecloudservices.com"},{format:"domain",value:"squareup.com"}],[{format:"domain",value:"95516.com"},{format:"domain",value:"95516.net"},{format:"domain",value:"chinaunionpay.com"},{format:"domain",value:"chinaunionpay.com.cn"},{format:"domain",value:"chinaunionpay.net"},{format:"domain",value:"cup.com.cn"},{format:"domain",value:"cup62.cn"},{format:"domain",value:"unionpay.com"},{format:"domain",value:"unionpay.net"},{format:"domain",value:"unionpaysecure.com"},{format:"domain",value:"unionpayintl.cn"},{format:"domain",value:"unionpayintl.com"}],[{format:"domain",value:"zcmbc.com.cn"},{format:"domain",value:"zdns.cn"},{format:"domain",value:"zdns.net.cn"},{format:"domain",value:"zdns.org.cn"},{format:"domain",value:"zdnscloud.biz"},{format:"domain",value:"zdnscloud.cn"},{format:"domain",value:"zdnscloud.com"},{format:"domain",value:"zdnscloud.com.cn"},{format:"domain",value:"zdnscloud.info"},{format:"domain",value:"zdnscloud.net"},{format:"domain",value:"zdnscloud.net.cn"},{format:"domain",value:"zdnscloud.org.cn"}],[{format:"domain",value:"canonical.com"},{format:"domain",value:"launchpad.net"},{format:"domain",value:"launchpadlibrarian.com"},{format:"domain",value:"launchpadlibrarian.net"},{format:"domain",value:"launchpadlibrarian.org"},{format:"domain",value:"snapcraft.io"},{format:"domain",value:"snapstore.io"},{format:"domain",value:"ubuntu.com"},{format:"domain",value:"ubuntu.net"},{format:"domain",value:"ubuntuforums.org"},{format:"domain",value:"ubuntu-touch.io"}],[{format:"domain",value:"18comic.cc"},{format:"domain",value:"18comic.company"},{format:"domain",value:"18comic.org"},{format:"domain",value:"18comic.vip"},{format:"domain",value:"jmcomic.me"},{format:"domain",value:"jmcomic.mobi"},{format:"domain",value:"jmcomic.moe"},{format:"domain",value:"jmcomic1.city"},{format:"domain",value:"jmcomic1.me"},{format:"domain",value:"jmcomic1.mobi"},{format:"domain",value:"jmcomic2.moe"}],[{format:"domain",value:"bds.snssdk.com"},{format:"domain",value:"ctobsnssdk.com"},{format:"domain",value:"dig.bdurl.net"},{format:"domain",value:"extlog.snssdk.com"},{format:"domain",value:"i.snssdk.com"},{format:"domain",value:"is.snssdk.com"},{format:"domain",value:"mcs.snssdk.com"},{format:"domain",value:"pangolin.snssdk.com"},{format:"domain",value:"pangolin-sdk-toutiao.com"},{format:"domain",value:"pglstatp-toutiao.com"},{format:"domain",value:"sf3-ttcdn-tos.pstatp.com"}],[{format:"domain",value:"gog.com"},{format:"domain",value:"gog-statics.com"},{format:"full domain",value:"gog.qtlglb.com"},{format:"full domain",value:"gogalaxy.gog-statics.com"},{format:"full domain",value:"menu-static.gog-statics.com"},{format:"full domain",value:"productcard.gog-statics.com"},{format:"full domain",value:"static-login.gog-statics.com"},{format:"full domain",value:"www4-static.gog-statics.com"},{format:"domain",value:"regexp:^cdn-akamai-.+\\.gog-services\\.com$"},{format:"domain",value:"regexp:^gog-cdn-.+\\.footprint\\.net$"},{format:"domain",value:"regexp:^images(-\\d)?\\.gog-statics\\.com$"}],[{format:"domain",value:"r10s.com"},{format:"domain",value:"r10s.jp"},{format:"domain",value:"rakuten-static.com"},{format:"domain",value:"rakuten.ca"},{format:"domain",value:"rakuten.co.jp"},{format:"domain",value:"rakuten.com"},{format:"domain",value:"rakuten.com.tw"},{format:"domain",value:"rakuten.ne.jp"},{format:"domain",value:"rakuten.tw"},{format:"domain",value:"rclon.com"},{format:"domain",value:"rebates.jp"}],[{format:"domain",value:"feng1.com"},{format:"domain",value:"rongechain.com"},{format:"domain",value:"sf-airlines.com"},{format:"domain",value:"sf-cityrush.com"},{format:"domain",value:"sf-express.com"},{format:"domain",value:"sf-financial.com"},{format:"domain",value:"sf-saas.com"},{format:"domain",value:"sf-tech.com.cn"},{format:"domain",value:"sfcar.hk"},{format:"domain",value:"sffix.cn"},{format:"domain",value:"sfgy.org"}],[{format:"domain",value:"sky"},{format:"domain",value:"sky.com"},{format:"domain",value:"skyassets.com"},{format:"domain",value:"skyoceanrescue.com"},{format:"domain",value:"skyoceanrescue.de"},{format:"domain",value:"skyoceanrescue.it"},{format:"domain",value:"skysports.com"},{format:"domain",value:"skysports.fr"},{format:"domain",value:"skysports.ie"},{format:"domain",value:"skysportsonline.com"},{format:"domain",value:"skysportsracing.com"}],[{format:"domain",value:"slack-core.com"},{format:"domain",value:"slack-edge.com"},{format:"domain",value:"slack-files.com"},{format:"domain",value:"slack-imgs.com"},{format:"domain",value:"slack-msgs.com"},{format:"domain",value:"slack-redir.net"},{format:"domain",value:"slack.com"},{format:"domain",value:"slackb.com"},{format:"domain",value:"slackcertified.com"},{format:"domain",value:"slackdemo.com"},{format:"domain",value:"slackhq.com"}],[{format:"domain",value:"189.cn"},{format:"domain",value:"chinatelecom-h.com"},{format:"domain",value:"chinatelecom.com.cn"},{format:"domain",value:"chinatelecomglobal.com"},{format:"domain",value:"chntel.com"},{format:"domain",value:"ctexcel.ca"},{format:"domain",value:"ctexcel.com"},{format:"domain",value:"ctexcel.com.hk"},{format:"domain",value:"ctexcel.fr"},{format:"domain",value:"ctexcel.us"}],[{format:"domain",value:"1337x.to"},{format:"domain",value:"1337x.gd"},{format:"domain",value:"1337x.is"},{format:"domain",value:"1337x.st"},{format:"domain",value:"1337x.tw"},{format:"domain",value:"1337xto.to"},{format:"domain",value:"1337xx.to"},{format:"domain",value:"x1337x.eu"},{format:"domain",value:"x1337x.se"},{format:"domain",value:"x1337x.ws"}],[{format:"domain",value:"lg.com"},{format:"domain",value:"lgappstv.com"},{format:"domain",value:"lge.co.kr"},{format:"domain",value:"lge.com"},{format:"domain",value:"lgecareers.com"},{format:"domain",value:"lghvac.com"},{format:"domain",value:"lghvacstory.com"},{format:"domain",value:"lgrecyclingprogram.com"},{format:"domain",value:"lgsalesportal.com"},{format:"full domain",value:"lgelectronics.122.2o7.net"}],[{format:"domain",value:"machigoto.jp"},{format:"domain",value:"mainichi-athletepartners.jp"},{format:"domain",value:"mainichi.jp"},{format:"domain",value:"mainichibooks.com"},{format:"domain",value:"meijinsen.jp"},{format:"domain",value:"mirailab.tech"},{format:"domain",value:"mottainai.info"},{format:"domain",value:"newsgawakaru.com"},{format:"domain",value:"sponichi.co.jp"},{format:"domain",value:"weekly-economist.com"}],[{format:"domain",value:"biggggg.com"},{format:"domain",value:"mudvod.tv"},{format:"domain",value:"nbys.tv"},{format:"domain",value:"nbys1.tv"},{format:"domain",value:"nbyy.tv"},{format:"domain",value:"newpppp.com"},{format:"domain",value:"nivod.tv"},{format:"domain",value:"nivodi.tv"},{format:"domain",value:"nivodz.com"},{format:"domain",value:"vod360.net"}],[{format:"domain",value:"gongqingyun.cn"},{format:"domain",value:"jzfz.net"},{format:"domain",value:"sumkoo.cn"},{format:"domain",value:"sumkoo.com"},{format:"domain",value:"sumkoo.net"},{format:"domain",value:"veeqi.net"},{format:"domain",value:"wenmingban.com"},{format:"domain",value:"zhiyuanhe.cn"},{format:"domain",value:"zhiyuanyun.com.cn"},{format:"domain",value:"zyhe.com.cn"}],[{format:"domain",value:"qbox.me"},{format:"domain",value:"qiniu.com"},{format:"domain",value:"qiniucdn.com"},{format:"domain",value:"qiniudn.com"},{format:"domain",value:"qiniudns.com"},{format:"domain",value:"qiniup.com"},{format:"domain",value:"qnsdk.com"},{format:"domain",value:"qnssl.com"},{format:"domain",value:"staticfile.org"}],[{format:"domain",value:"xhamster.com"},{format:"domain",value:"xhamster.desi"},{format:"domain",value:"xhamster.xxx"},{format:"domain",value:"xhamster18.com"},{format:"domain",value:"xhamster18.desi"},{format:"domain",value:"xhamsterlive.com"},{format:"domain",value:"xhcdn.com"},{format:"full domain",value:"widgets.stripst.com"},{format:"domain",value:"collector.xhamster.com"}],[{format:"domain",value:"115.com"},{format:"domain",value:"115cdn.com"},{format:"domain",value:"115cdn.net"},{format:"domain",value:"115img.com"},{format:"domain",value:"116cd.cn"},{format:"domain",value:"116cd.com"},{format:"domain",value:"116cd.net"},{format:"domain",value:"anxia.com"},{format:"domain",value:"sq.cc"}],[{format:"domain",value:"cnn.com"},{format:"domain",value:"cnn.io"},{format:"domain",value:"cnn.it"},{format:"domain",value:"cnnarabic.com"},{format:"domain",value:"cnnlabs.com"},{format:"domain",value:"cnnmoney.ch"},{format:"domain",value:"cnnmoney.com"},{format:"domain",value:"cnnmoneystream.com"},{format:"domain",value:"cnnpolitics.com"}],[{format:"domain",value:"hbabit.com"},{format:"domain",value:"hbfile.net"},{format:"domain",value:"huobi.com"},{format:"domain",value:"huobi.me"},{format:"domain",value:"huobi.pro"},{format:"domain",value:"huobi.sc"},{format:"domain",value:"huobiasia.vip"},{format:"domain",value:"huobigroup.com"},{format:"domain",value:"huobitoken.com"}],[{format:"domain",value:"intellij.com"},{format:"domain",value:"intellij.net"},{format:"domain",value:"intellij.org"},{format:"domain",value:"jetbrains.com"},{format:"domain",value:"jetbrains.net"},{format:"domain",value:"jetbrains.space"},{format:"domain",value:"jetbrains.team"},{format:"domain",value:"datalore.io"},{format:"domain",value:"kotlinlang.org"}],[{format:"domain",value:"47gyosei.jp"},{format:"domain",value:"47news.jp"},{format:"domain",value:"kyodo-d.info"},{format:"domain",value:"kyodo-d.jp"},{format:"domain",value:"kyodoimages.jp"},{format:"domain",value:"kyodonews.jp"},{format:"domain",value:"kyodonews.net"},{format:"domain",value:"newsmart.jp"},{format:"domain",value:"nna.jp"}],[{format:"domain",value:"nyt.com"},{format:"domain",value:"nyt.net"},{format:"domain",value:"nytchina.com"},{format:"domain",value:"nytcn.me"},{format:"domain",value:"nytco.com"},{format:"domain",value:"nyti.ms"},{format:"domain",value:"nytimes.com"},{format:"domain",value:"nytstyle.com"},{format:"domain",value:"timestalks.com"}],[{format:"domain",value:"openmaps.org"},{format:"domain",value:"openstreetmap.com"},{format:"domain",value:"openstreetmap.net"},{format:"domain",value:"openstreetmap.org"},{format:"domain",value:"openstreetmaps.org"},{format:"domain",value:"osm.org"},{format:"domain",value:"osmfoundation.org"},{format:"domain",value:"stateofthemap.com"},{format:"domain",value:"stateofthemap.org"}],[{format:"domain",value:"pimg.tw"},{format:"domain",value:"pixanalytics.com"},{format:"domain",value:"pixfs.net"},{format:"domain",value:"pixinsight.com.tw"},{format:"domain",value:"pixnet.cc"},{format:"domain",value:"pixnet.net"},{format:"domain",value:"pixnet.pro"},{format:"domain",value:"pixnet.tw"},{format:"domain",value:"pixplug.in"}],[{format:"domain",value:"theguardian"},{format:"domain",value:"dev-guardianapis.com"},{format:"domain",value:"dev-theguardian.com"},{format:"domain",value:"gu-web.net"},{format:"domain",value:"guardianapis.com"},{format:"domain",value:"guardianapps.co.uk"},{format:"domain",value:"guim.co.uk"},{format:"domain",value:"theguardian.com"},{format:"domain",value:"theguardiandns.com"}],[{format:"domain",value:"vilavpn.com"},{format:"domain",value:"vilavpn.xyz"},{format:"domain",value:"vilavpn1.xyz"},{format:"domain",value:"vilavpn2.xyz"},{format:"domain",value:"vilavpn3.xyz"},{format:"domain",value:"vilavpn4.xyz"},{format:"domain",value:"vilavpn5.xyz"},{format:"domain",value:"vilavpn6.xyz"},{format:"domain",value:"vilavpn7.xyz"}],[{format:"domain",value:"editorx.com"},{format:"domain",value:"parastorage.com"},{format:"domain",value:"wix-code.com"},{format:"domain",value:"wix.com"},{format:"domain",value:"wixanswers.com"},{format:"domain",value:"wixapps.net"},{format:"domain",value:"wixmp.com"},{format:"domain",value:"wixsite.com"},{format:"domain",value:"wixstatic.com"}],[{format:"domain",value:"mi.com"},{format:"domain",value:"mi-img.com"},{format:"domain",value:"mifile.cn"},{format:"domain",value:"miui.com"},{format:"domain",value:"miwifi.com"},{format:"domain",value:"xiaomi.cn"},{format:"domain",value:"xiaomi.com"},{format:"domain",value:"xiaomi.net"},{format:"domain",value:"xiaomiyoupin.com"}],[{format:"domain",value:"sandai.net"},{format:"domain",value:"thunderurl.com"},{format:"domain",value:"xunlei.com"},{format:"domain",value:"00cdn.com"},{format:"domain",value:"88cdn.com"},{format:"domain",value:"p2cdn.com"},{format:"domain",value:"thundercdn.com"},{format:"domain",value:"xycloud.com"},{format:"domain",value:"xycdn.com"}],[{format:"domain",value:"z5.app"},{format:"domain",value:"z5.com"},{format:"domain",value:"zee5.com"},{format:"domain",value:"zee5.in"},{format:"domain",value:"zee5.tv"},{format:"domain",value:"zeebioskop.com"},{format:"domain",value:"zeetv.co.uk"},{format:"domain",value:"zeetv.com"},{format:"domain",value:"zeeuk.com"}],[{format:"domain",value:"10099.com.cn"},{format:"domain",value:"chn.cn"},{format:"domain",value:"ahitv.com"},{format:"domain",value:"cqccn.com"},{format:"domain",value:"gcable.com.cn"},{format:"domain",value:"sc96655.com"},{format:"domain",value:"isxtv.com"},{format:"domain",value:"sdgdwljt.com"}],[{format:"domain",value:"10010.com"},{format:"domain",value:"10010.com.cn"},{format:"domain",value:"chinaunicom.com"},{format:"domain",value:"chinaunicom.com.cn"},{format:"domain",value:"chinaunicom.com.hk"},{format:"domain",value:"chinaunicomglobal.com"},{format:"domain",value:"mychinaunicom.com"},{format:"domain",value:"wo.com.cn"}],[{format:"domain",value:"biji.com"},{format:"domain",value:"ddmogo.com"},{format:"domain",value:"igetget.cn"},{format:"domain",value:"igetget.com"},{format:"domain",value:"luojilab.com"},{format:"domain",value:"mogoo.com"},{format:"domain",value:"sao.cn"},{format:"domain",value:"saolife.com"}],[{format:"domain",value:"1234567.com.cn"},{format:"domain",value:"18.cn"},{format:"domain",value:"18.com.cn"},{format:"domain",value:"dfcfw.com"},{format:"domain",value:"eastmoney.com"},{format:"domain",value:"eastmoneyfutures.com"},{format:"domain",value:"emsec.hk"},{format:"domain",value:"guba.com.cn"}],[{format:"domain",value:"e-hentai.org"},{format:"domain",value:"ehgt.org"},{format:"domain",value:"ehtracker.org"},{format:"domain",value:"ehwiki.org"},{format:"domain",value:"exhentai.org"},{format:"domain",value:"hath.network"},{format:"domain",value:"hentaiathome.net"},{format:"domain",value:"hentaiverse.org"}],[{format:"domain",value:"ero-labs.com"},{format:"domain",value:"ero-labs.net"},{format:"domain",value:"ero-labs.online"},{format:"domain",value:"ero-labs.site"},{format:"domain",value:"erolabs.cloud"},{format:"domain",value:"erolabs.com"},{format:"domain",value:"erolabs.game"},{format:"domain",value:"erolabs.net"}],[{format:"domain",value:"farfetch-apps.com"},{format:"domain",value:"farfetch-contents.com"},{format:"domain",value:"farfetch.cn"},{format:"domain",value:"farfetch.com"},{format:"domain",value:"farfetch.com.cn"},{format:"domain",value:"farfetch.net"},{format:"domain",value:"farfetch.net.cn"},{format:"domain",value:"fflnk.net"}],[{format:"full domain",value:"apl-hamivideo.cdn.hinet.net"},{format:"full domain",value:"hamivideo.hinet.net"},{format:"full domain",value:"mobilelive-hamivideo.cdn.hinet.net"},{format:"full domain",value:"pvr-hamivideo.cdn.hinet.net"},{format:"full domain",value:"scc.ott.hinet.net"},{format:"full domain",value:"static-hamivideo.cdn.hinet.net"},{format:"full domain",value:"tvcastlive-hamivideo.cdn.hinet.net"},{format:"full domain",value:"weblive-hamivideo.cdn.hinet.net"}],[{format:"domain",value:"consul.io"},{format:"domain",value:"hashicorp.com"},{format:"domain",value:"nomadproject.io"},{format:"domain",value:"packer.io"},{format:"domain",value:"terraform.io"},{format:"domain",value:"vagrantcloud.com"},{format:"domain",value:"vagrantup.com"},{format:"domain",value:"vaultproject.io"}],[{format:"domain",value:"cuntempire.com"},{format:"domain",value:"cuntwars.com"},{format:"domain",value:"dirtyleague.com"},{format:"domain",value:"faptitans.com"},{format:"domain",value:"hooligapps.com"},{format:"domain",value:"slotbitches.com"},{format:"domain",value:"smutstone.com"},{format:"domain",value:"townofsins.com"}],[{format:"domain",value:"delvenetworks.com"},{format:"domain",value:"limelight.com"},{format:"domain",value:"lldns.net"},{format:"domain",value:"llnw-trials.com"},{format:"domain",value:"llnw.com"},{format:"domain",value:"llnw.net"},{format:"domain",value:"llnwd.net"},{format:"domain",value:"llnwi.net"}],[{format:"domain",value:"muji.com"},{format:"domain",value:"muji.com.cn"},{format:"domain",value:"muji.com.hk"},{format:"domain",value:"muji.eu"},{format:"domain",value:"muji.net"},{format:"domain",value:"muji.tw"},{format:"domain",value:"muji.us"},{format:"domain",value:"mujikorea.net"}],[{format:"domain",value:"nico"},{format:"domain",value:"nicodic.jp"},{format:"domain",value:"nicomanga.jp"},{format:"domain",value:"niconico.com"},{format:"domain",value:"nicoseiga.jp"},{format:"domain",value:"nicovideo.jp"},{format:"domain",value:"nimg.jp"},{format:"domain",value:"simg.jp"}],[{format:"domain",value:"haiwaikan.com"},{format:"domain",value:"iole.tv"},{format:"domain",value:"olehd.com"},{format:"domain",value:"olelive.com"},{format:"domain",value:"olevod.com"},{format:"domain",value:"olevod.io"},{format:"domain",value:"olevod.tv"},{format:"domain",value:"olevodtv.com"}],[{format:"domain",value:"bikaa.xyz"},{format:"domain",value:"bikac.xyz"},{format:"domain",value:"bikaios.xyz"},{format:"domain",value:"manhuabika.com"},{format:"domain",value:"picacn.xyz"},{format:"domain",value:"picacomic.com"},{format:"domain",value:"picacomic.xyz"},{format:"domain",value:"wikawika.xyz"}],[{format:"domain",value:"6655.com"},{format:"domain",value:"cooldock.com"},{format:"domain",value:"ithome.com"},{format:"domain",value:"lapin365.com"},{format:"domain",value:"ruanmei.com"},{format:"domain",value:"saayaa.com"},{format:"domain",value:"win7china.com"},{format:"domain",value:"win8china.com"}],[{format:"domain",value:"myshopify.com"},{format:"domain",value:"shop.app"},{format:"domain",value:"shopify.com"},{format:"domain",value:"shopify.dev"},{format:"domain",value:"shopifycdn.com"},{format:"domain",value:"shopifycloud.com"},{format:"domain",value:"shopifystatus.com"},{format:"domain",value:"shopifysvc.com"}],[{format:"domain",value:"tmtpost.com"},{format:"domain",value:"chaindd.com"},{format:"domain",value:"72whys.com"},{format:"domain",value:"checkzeit.com"},{format:"domain",value:"tivitv.com"},{format:"domain",value:"tigeek.net.cn"},{format:"domain",value:"tmtsmartlife.com"},{format:"domain",value:"tmtsmartrun.com"}],[{format:"domain",value:"40017.cn"},{format:"domain",value:"17u.cn"},{format:"domain",value:"17u.net"},{format:"domain",value:"17usoft.com"},{format:"domain",value:"17usoft.net"},{format:"domain",value:"elong.com"},{format:"domain",value:"elongstatic.com"},{format:"domain",value:"ly.com"}],[{format:"domain",value:"ubi.com"},{format:"domain",value:"ubisoft.com"},{format:"domain",value:"ubisoftconnect.com"},{format:"domain",value:"uplay.com"},{format:"full domain",value:"ubisoft-uplay-savegames.s3.amazonaws.com"},{format:"full domain",value:"ubisoft-orbit-savegames.s3.amazonaws.com"},{format:"full domain",value:"ubistatic3-a.akamaihd.net"},{format:"full domain",value:"uplaypc-s-ubisoft.cdn.ubi.com"}],[{format:"domain",value:"myvodafone.com.au"},{format:"domain",value:"myvodafone.com.ws"},{format:"domain",value:"vodafone.co.uk"},{format:"domain",value:"vodafone.com"},{format:"domain",value:"vodafone.com.au"},{format:"domain",value:"vodafone.com.tr"},{format:"domain",value:"vodafone.de"},{format:"domain",value:"vodafone.it"}],[{format:"domain",value:"walmart"},{format:"domain",value:"wal-mart.com"},{format:"domain",value:"wal.co"},{format:"domain",value:"walmart-content.com"},{format:"domain",value:"walmart.com"},{format:"domain",value:"walmart.pharmacy"},{format:"domain",value:"walmartimages.com"},{format:"domain",value:"wmt.co"}],[{format:"domain",value:"videopress.com"},{format:"domain",value:"w.org"},{format:"domain",value:"wordpress.com"},{format:"domain",value:"wordpress.org"},{format:"domain",value:"wordpress.tv"},{format:"domain",value:"wp-themes.com"},{format:"domain",value:"wp.com"},{format:"domain",value:"wpvip.com"}],[{format:"domain",value:"yfcache.com"},{format:"domain",value:"yfcalc.com"},{format:"domain",value:"yfcdn.net"},{format:"domain",value:"yfcloud.com"},{format:"domain",value:"yfdts.net"},{format:"domain",value:"yfp2p.net"},{format:"domain",value:"yfscdn.net"},{format:"domain",value:"yunfancdn.com"}],[{format:"domain",value:"atlassian.com"},{format:"domain",value:"atlassian.net"},{format:"domain",value:"bitbucket.io"},{format:"domain",value:"bitbucket.org"},{format:"domain",value:"statuspage.io"},{format:"domain",value:"trello.com"},{format:"domain",value:"trellocdn.com"}],[{format:"domain",value:"cht.com.tw"},{format:"domain",value:"chtf.org.tw"},{format:"domain",value:"emome.net"},{format:"domain",value:"hinet.net"},{format:"domain",value:"xuite.net"},{format:"domain",value:"eca.hinet.net"},{format:"domain",value:"gtlsca.nat.gov.tw"}],[{format:"domain",value:"9to5google.com"},{format:"domain",value:"9to5mac.com"},{format:"domain",value:"9to5terminal.com"},{format:"domain",value:"9to5toys.com"},{format:"domain",value:"dronedj.com"},{format:"domain",value:"electrek.co"},{format:"domain",value:"spaceexplored.com"}],[{format:"domain",value:"ajplus.net"},{format:"domain",value:"aljazeera.com"},{format:"domain",value:"aljazeera.net"},{format:"domain",value:"palestineremix.com"},{format:"domain",value:"sarajevopodopsadom.com"},{format:"domain",value:"srebrenica360.com"},{format:"domain",value:"syhacked.com"}],[{format:"domain",value:"aiasahi.jp"},{format:"domain",value:"asagaku.com"},{format:"domain",value:"asahi.com"},{format:"domain",value:"asahicom.jp"},{format:"domain",value:"asakonet.co.jp"},{format:"domain",value:"nikkansports.com"},{format:"full domain",value:"asahishimbun.sc.omtrdc.net"}],[{format:"domain",value:"avxhm.se"},{format:"domain",value:"avh.world"},{format:"domain",value:"avxde.org"},{format:"domain",value:"avxhm.is"},{format:"domain",value:"avxlive.icu"},{format:"domain",value:"xsava.xyz"},{format:"domain",value:"zavat.pw"}],[{format:"domain",value:"cern"},{format:"domain",value:"ams02.space"},{format:"domain",value:"cern.ch"},{format:"domain",value:"cixp.net"},{format:"domain",value:"dotcernpilot.info"},{format:"domain",value:"ippog.org"},{format:"domain",value:"linearcollider.org"}],[{format:"domain",value:"blogjava.net"},{format:"domain",value:"cnblogs.com"},{format:"domain",value:"cnitblog.com"},{format:"domain",value:"cnweblog.com"},{format:"domain",value:"cppblog.com"},{format:"domain",value:"phpweblog.net"},{format:"domain",value:"teachblog.net"}],[{format:"domain",value:"didi-food.com"},{format:"domain",value:"didiaustralia.blog"},{format:"domain",value:"didichuxing.com"},{format:"domain",value:"didiglobal.com"},{format:"domain",value:"didimobility.co.jp"},{format:"domain",value:"didistatic.com"},{format:"domain",value:"xiaojukeji.com"}],[{format:"domain",value:"chobit.cc"},{format:"domain",value:"ci-en.net"},{format:"domain",value:"dlsite.com"},{format:"domain",value:"dlsite.com.tw"},{format:"domain",value:"dlsitestudio.com"},{format:"domain",value:"nijiyome.jp"},{format:"domain",value:"triokini.com"}],[{format:"domain",value:"ebi.ac.uk"},{format:"domain",value:"embl-hamburg.de"},{format:"domain",value:"embl.de"},{format:"domain",value:"embl.fr"},{format:"domain",value:"embl.it"},{format:"domain",value:"embl.org"},{format:"domain",value:"emblstatic.net"}],[{format:"domain",value:"entrust.net"},{format:"domain",value:"entrustdatacard.com"},{format:"domain",value:"affirmtrust.com"},{format:"domain",value:"atos.net"},{format:"domain",value:"myatos.net"},{format:"domain",value:"certificat2.com"},{format:"domain",value:"trendmicro.com"}],[{format:"domain",value:"famifun.com.tw"},{format:"domain",value:"family.co.jp"},{format:"domain",value:"family.com.tw"},{format:"domain",value:"familymart.com.cn"},{format:"domain",value:"familymart.com.my"},{format:"domain",value:"familymart.com.ph"},{format:"domain",value:"famima.vn"}],[{format:"domain",value:"aorus.com"},{format:"domain",value:"aoruszone.cn"},{format:"domain",value:"gigabyte.cn"},{format:"domain",value:"gigabyte.com"},{format:"full domain",value:"gigabyte2.azureedge.net"},{format:"full domain",value:"sa78gs.wpc.edgecastcdn.net"},{format:"full domain",value:"sni1dcb6gl.wpc.edgecastcdn.net"}],[{format:"domain",value:"gucci"},{format:"domain",value:"chimeforchange.org"},{format:"domain",value:"gucci.cn"},{format:"domain",value:"gucci.com"},{format:"domain",value:"guccimuseo.com"},{format:"domain",value:"guccitimeless.com"},{format:"domain",value:"regiongold.com"}],[{format:"domain",value:"click.hunantv.com"},{format:"domain",value:"da.hunantv.com"},{format:"domain",value:"da.mgtv.com"},{format:"domain",value:"log.hunantv.com"},{format:"domain",value:"log.v2.hunantv.com"},{format:"domain",value:"res.hunantv.com"},{format:"domain",value:"v2.log.hunantv.com"}],[{format:"domain",value:"kfs.io"},{format:"domain",value:"kk.stream"},{format:"domain",value:"kkbox.com"},{format:"domain",value:"kkbox.com.tw"},{format:"domain",value:"kktix.com"},{format:"domain",value:"kktv.com.tw"},{format:"domain",value:"kktv.me"}],[{format:"domain",value:"libgen.life"},{format:"domain",value:"libgen.fun"},{format:"domain",value:"gen.lib.rus.ec"},{format:"domain",value:"libgen.is"},{format:"domain",value:"libgen.me"},{format:"domain",value:"libgen.rs"},{format:"domain",value:"libgen.st"}],[{format:"domain",value:"arewereadyyet.com"},{format:"domain",value:"element.io"},{format:"domain",value:"matrix.org"},{format:"domain",value:"matrix.to"},{format:"domain",value:"modular.im"},{format:"domain",value:"riot.im"},{format:"domain",value:"vector.im"}],[{format:"domain",value:"dianping.com"},{format:"domain",value:"maoyan.com"},{format:"domain",value:"meituan.com"},{format:"domain",value:"meituan.net"},{format:"domain",value:"mtyun.com"},{format:"domain",value:"neixin.cn"},{format:"domain",value:"sankuai.com"}],[{format:"domain",value:"booth.pm"},{format:"domain",value:"fanbox.cc"},{format:"domain",value:"pixiv.net"},{format:"domain",value:"pixiv.org"},{format:"domain",value:"pixiv.co.jp"},{format:"domain",value:"pixiv.me"},{format:"domain",value:"pximg.net"}],[{format:"domain",value:"dns.sb"},{format:"domain",value:"ip.sb"},{format:"domain",value:"loli.net"},{format:"domain",value:"sb.sb"},{format:"domain",value:"sm.ms"},{format:"domain",value:"u.nu"},{format:"domain",value:"www.sb"}],[{format:"domain",value:"snapads.com"},{format:"domain",value:"sc-cdn.net"},{format:"domain",value:"snap-dev.net"},{format:"domain",value:"snap.com"},{format:"domain",value:"snapchat.com"},{format:"domain",value:"snapkit.co"},{format:"full domain",value:"impala-media-production.s3.amazonaws.com"}],[{format:"domain",value:"bayvoice.net"},{format:"domain",value:"ozvoice.org"},{format:"domain",value:"sohcradio.com"},{format:"domain",value:"sohfrance.org"},{format:"domain",value:"soundofhope.kr"},{format:"domain",value:"soundofhope.org"},{format:"domain",value:"wanokokorosoh.com"}],[{format:"domain",value:"porndude2.com"},{format:"domain",value:"porndudecasting.com"},{format:"domain",value:"pornsites.com"},{format:"domain",value:"pornwebmasters.com"},{format:"domain",value:"theporndude.cc"},{format:"domain",value:"theporndude.com"},{format:"domain",value:"theporndude.vip"}],[{format:"domain",value:"hanyi.com.cn"},{format:"domain",value:"fontstar.com.cn"},{format:"domain",value:"hellofont.cn"},{format:"domain",value:"hellowebfont.com"},{format:"full domain",value:"hellofontpreview.oss-cn-beijing.aliyuncs.com"},{format:"full domain",value:"hellowebfonts.oss-cn-beijing.aliyuncs.com"}],[{format:"domain",value:"gifshow.com"},{format:"domain",value:"ksapisrv.com"},{format:"domain",value:"kuaishou.com"},{format:"domain",value:"yximgs.com"},{format:"full domain",value:"log-sdk.gifshow.com"},{format:"full domain",value:"wlog.kuaishou.com"}],[{format:"domain",value:"braventures.com"},{format:"domain",value:"braveux.com"},{format:"domain",value:"compass.is"},{format:"domain",value:"fightforux.com"},{format:"domain",value:"forthebadge.com"},{format:"domain",value:"stockagainstphotography.com"}],[{format:"domain",value:"cambridge.org"},{format:"domain",value:"cambridgeschoolshakespeare.com"},{format:"domain",value:"cambridgedigital.net"},{format:"domain",value:"cambridgemaths.org"},{format:"domain",value:"ccdc.cam.ac.uk"},{format:"domain",value:"dlib.eastview.com"}],[{format:"domain",value:"comodo.com"},{format:"domain",value:"comodo.net"},{format:"domain",value:"comodoca.com"},{format:"domain",value:"comodoca2.com"},{format:"domain",value:"comodoca3.com"},{format:"domain",value:"comodoca4.com"}],[{format:"domain",value:"deepin.cn"},{format:"domain",value:"deepin.com"},{format:"domain",value:"deepin.io"},{format:"domain",value:"deepin.org"},{format:"domain",value:"chinauos.com"},{format:"domain",value:"uniontech.com"}],[{format:"domain",value:"douyu.com"},{format:"domain",value:"douyu.tv"},{format:"domain",value:"douyucdn.cn"},{format:"domain",value:"douyucdn2.cn"},{format:"domain",value:"douyuscdn.com"},{format:"domain",value:"douyutv.com"}],[{format:"domain",value:"fury.blog"},{format:"domain",value:"fury.co"},{format:"domain",value:"fury.dev"},{format:"domain",value:"fury.help"},{format:"domain",value:"fury.io"},{format:"domain",value:"gemfury.com"}],[{format:"domain",value:"csifund.org"},{format:"domain",value:"hkbn.com.hk"},{format:"domain",value:"hkbn.net"},{format:"domain",value:"hkbnes.net"},{format:"domain",value:"jos.com"},{format:"domain",value:"speedtest.com.hk"}],[{format:"domain",value:"coolbuy.com"},{format:"domain",value:"ifanr.com"},{format:"domain",value:"ifanr.in"},{format:"domain",value:"ifanrusercontent.com"},{format:"domain",value:"ifanrx.com"},{format:"domain",value:"minapp.com"}],[{format:"domain",value:"jwpcdn.com"},{format:"domain",value:"jwplatform.com"},{format:"domain",value:"jwplayer.com"},{format:"domain",value:"jwpltx.com"},{format:"domain",value:"jwpsrv.com"},{format:"domain",value:"longtailvideo.com"}],[{format:"domain",value:"le.com"},{format:"domain",value:"lecloud.com"},{format:"domain",value:"lemall.com"},{format:"domain",value:"letv.com"},{format:"domain",value:"letvcdn.com"},{format:"domain",value:"letvimg.com"}],[{format:"domain",value:"nikkei-cnbc.co.jp"},{format:"domain",value:"nikkei.co.jp"},{format:"domain",value:"nikkei.com"},{format:"domain",value:"nikkei.jp"},{format:"domain",value:"nikkei4946.com"},{format:"domain",value:"nikkeibp.co.jp"}],[{format:"domain",value:"oneplus.com"},{format:"domain",value:"oneplus.cn"},{format:"domain",value:"oneplus.net"},{format:"domain",value:"opstatics.com"},{format:"domain",value:"oneplusbbs.com"},{format:"domain",value:"h2os.com"}],[{format:"domain",value:"oreil.ly"},{format:"domain",value:"oreilly.com"},{format:"domain",value:"oreilly.com.cn"},{format:"domain",value:"oreilly.review"},{format:"domain",value:"oreillystatic.com"},{format:"domain",value:"orl.ly"}],[{format:"domain",value:"fengcx.com"},{format:"domain",value:"ifeng.com"},{format:"domain",value:"ifengimg.com"},{format:"domain",value:"phoenixcenter.cn"},{format:"domain",value:"fengedu.com"},{format:"domain",value:"ifengweekly.com"}],[{format:"domain",value:"pics.ee"},{format:"domain",value:"picsee.co"},{format:"domain",value:"picsee.pro"},{format:"domain",value:"pise.pw"},{format:"domain",value:"pros.ee"},{format:"domain",value:"pse.is"}],[{format:"domain",value:"pycon.org"},{format:"domain",value:"pypa.io"},{format:"domain",value:"pypi.io"},{format:"domain",value:"pypi.org"},{format:"domain",value:"python.org"},{format:"domain",value:"pythonhosted.org"}],[{format:"domain",value:"frontwize.com"},{format:"domain",value:"qingcache.com"},{format:"domain",value:"qingcloud.com"},{format:"domain",value:"qingstor.com"},{format:"domain",value:"routewize.com"},{format:"domain",value:"yunify.com"}],[{format:"domain",value:"fandango.com"},{format:"domain",value:"mgo.com"},{format:"domain",value:"mgo-images.com"},{format:"domain",value:"ravm.tv"},{format:"domain",value:"roku.com"},{format:"domain",value:"rokutime.com"}],[{format:"domain",value:"sci-hub.se"},{format:"domain",value:"sci-hub.ee"},{format:"domain",value:"sci-hub.it.nf"},{format:"domain",value:"sci-hub.mksa.top"},{format:"domain",value:"sci-hub.st"},{format:"domain",value:"sci.hubg.org"}],[{format:"domain",value:"ext-twitch.tv"},{format:"domain",value:"jtvnw.net"},{format:"domain",value:"ttvnw.net"},{format:"domain",value:"twitch.tv"},{format:"domain",value:"twitchcdn.net"},{format:"domain",value:"twitchsvc.net"}],[{format:"domain",value:"aicdn.com"},{format:"domain",value:"upai.com"},{format:"domain",value:"upaiyun.com"},{format:"domain",value:"upcdn.net"},{format:"domain",value:"upyun.com"},{format:"domain",value:"oncdp.com"}],[{format:"domain",value:"kumiao.com"},{format:"domain",value:"youku.com"},{format:"domain",value:"ykimg.com"},{format:"domain",value:"mmstat.com"},{format:"domain",value:"soku.com"},{format:"domain",value:"cibntv.net"}],[{format:"domain",value:"banmaaike.com"},{format:"domain",value:"xiaoyuankousuan.com"},{format:"domain",value:"ybccode.com"},{format:"domain",value:"yuanfudao.com"},{format:"domain",value:"yuansouti.com"},{format:"domain",value:"yuantiku.com"}],[{format:"domain",value:"doure.net"},{format:"domain",value:"kuaipa.net"},{format:"domain",value:"miaopa.net"},{format:"domain",value:"yunlaopo.cc"},{format:"domain",value:"yunlaopo.com"},{format:"domain",value:"yunlaopo.net"}],[{format:"domain",value:"outbound.io"},{format:"domain",value:"zdassets.com"},{format:"domain",value:"zdusercontent.com"},{format:"domain",value:"zendesk.com"},{format:"domain",value:"zndsk.com"},{format:"domain",value:"zopim.com"}],[{format:"domain",value:"clarivate.com"},{format:"domain",value:"webofknowledge.com"},{format:"domain",value:"webofscience.com"},{format:"domain",value:"newisiknowledge.com"},{format:"domain",value:"isiknowledge.com"}],[{format:"domain",value:"51job.com"},{format:"domain",value:"51jobcdn.com"},{format:"domain",value:"yingjiesheng.com"},{format:"domain",value:"yingjiesheng.net"},{format:"domain",value:"zhiding.com.cn"}],[{format:"domain",value:"8btc.com"},{format:"domain",value:"bystack.com"},{format:"domain",value:"chainnode.com"},{format:"domain",value:"matpool.com"},{format:"domain",value:"matpool.net"}],[{format:"domain",value:"amd.com"},{format:"domain",value:"amd.com.cn"},{format:"domain",value:"amdfanstore.com"},{format:"domain",value:"radeon.com"},{format:"full domain",value:"www.amd.com"}],[{format:"domain",value:"awempire.com"},{format:"domain",value:"dditsadn.com"},{format:"domain",value:"dditscdn.com"},{format:"domain",value:"docleradn.com"},{format:"domain",value:"doclercdn.com"}],[{format:"domain",value:"bahamut.akamaized.net"},{format:"domain",value:"bahamut.com.tw"},{format:"domain",value:"gamer.com.tw"},{format:"full domain",value:"gamer2-cds.cdn.hinet.net"},{format:"full domain",value:"gamer-cds.cdn.hinet.net"}],[{format:"domain",value:"bitauto.com"},{format:"domain",value:"bitautoimg.com"},{format:"domain",value:"cheyisou.com"},{format:"domain",value:"yiche.com"},{format:"domain",value:"yccdn.com"}],[{format:"domain",value:"boylove.cc"},{format:"domain",value:"boylove.live"},{format:"domain",value:"boylove1.cc"},{format:"domain",value:"boyloves.cc"},{format:"domain",value:"fuhouse.club"}],[{format:"domain",value:"buypass-ssl.com"},{format:"domain",value:"buypass.com"},{format:"domain",value:"buypass.no"},{format:"domain",value:"buypass.se"},{format:"domain",value:"minid.no"}],[{format:"domain",value:"chatwhores.com"},{format:"domain",value:"chatwhores.net"},{format:"domain",value:"chatwhores.org"},{format:"domain",value:"chatwhores.sex"},{format:"domain",value:"chatwhores.tv"}],[{format:"domain",value:"cygames.jp"},{format:"domain",value:"cygames.co.jp"},{format:"domain",value:"worldflipper.jp"},{format:"domain",value:"worldflipper.akamaized.net"},{format:"domain",value:"umamusume.akamaized.net"}],[{format:"domain",value:"dazn-api.com"},{format:"domain",value:"dazn.com"},{format:"domain",value:"dazndn.com"},{format:"domain",value:"indazn.com"},{format:"domain",value:"indaznlab.com"}],[{format:"domain",value:"dynacw.co.jp"},{format:"domain",value:"dynacw.com"},{format:"domain",value:"dynacw.com.cn"},{format:"domain",value:"dynacw.com.hk"},{format:"domain",value:"dynacw.com.tw"}],[{format:"domain",value:"gannett-cdn.com"},{format:"domain",value:"gannett.com"},{format:"domain",value:"gannettdigital.com"},{format:"domain",value:"usatoday.com"},{format:"domain",value:"usatodaynetworkservice.com"}],[{format:"domain",value:"gitlab.com"},{format:"domain",value:"gitlab.io"},{format:"domain",value:"gitlab.net"},{format:"domain",value:"gitlab-static.net"},{format:"full domain",value:"gitlab-assets.oss-cn-hongkong.aliyuncs.com"}],[{format:"domain",value:"applecensorship.com"},{format:"domain",value:"freebrowser.org"},{format:"domain",value:"freewechat.com"},{format:"domain",value:"freeweibo.com"},{format:"domain",value:"greatfire.org"}],[{format:"domain",value:"cctalk.com"},{format:"domain",value:"hjapi.com"},{format:"domain",value:"hjfile.cn"},{format:"domain",value:"hujiang.com"},{format:"domain",value:"yeshj.com"}],[{format:"domain",value:"iflytek.com"},{format:"domain",value:"xunfei.cn"},{format:"domain",value:"ets100.com"},{format:"domain",value:"zhixue.com"},{format:"domain",value:"changyan.com"}],[{format:"domain",value:"metart.com"},{format:"domain",value:"metartnetwork.com"},{format:"domain",value:"metcams.com"},{format:"domain",value:"naiadsystems.com"},{format:"domain",value:"nsimg.net"}],[{format:"domain",value:"bitballoon.com"},{format:"domain",value:"netlify.app"},{format:"domain",value:"netlify.com"},{format:"domain",value:"netlifystatus.com"},{format:"full domain",value:"d33wubrfki0l68.cloudfront.net"}],[{format:"domain",value:"notion-static.com"},{format:"domain",value:"notion.com"},{format:"domain",value:"notion.new"},{format:"domain",value:"notion.site"},{format:"domain",value:"notion.so"}],[{format:"domain",value:"aweencore.com"},{format:"domain",value:"awetv.com"},{format:"domain",value:"herringnetwork.com"},{format:"domain",value:"oanencore.com"},{format:"domain",value:"oann.com"}],[{format:"domain",value:"panasonic"},{format:"domain",value:"panasonic.cn"},{format:"domain",value:"panasonic.com"},{format:"domain",value:"panasonic.jp"},{format:"domain",value:"technics.com"}],[{format:"domain",value:"pm.me"},{format:"domain",value:"proton.me"},{format:"domain",value:"protonmail.ch"},{format:"domain",value:"protonmail.com"},{format:"domain",value:"protonstatus.com"}],[{format:"domain",value:"razer.com"},{format:"domain",value:"razersupport.com"},{format:"domain",value:"razerzone.com"},{format:"domain",value:"razerzone.jp"},{format:"domain",value:"respawnbyrazer.com"}],[{format:"domain",value:"reddit.com"},{format:"domain",value:"redditstatic.com"},{format:"domain",value:"redditmail.com"},{format:"domain",value:"redditmedia.com"},{format:"domain",value:"redd.it"}],[{format:"domain",value:"rockstargames.com"},{format:"domain",value:"rsg.sc"},{format:"full domain",value:"gamedownloads-rockstargames-com.akamaized.net"},{format:"full domain",value:"media-rockstargames-com.akamaized.net"},{format:"full domain",value:"videos-rockstargames-com.akamaized.net"}],[{format:"domain",value:"secom.co.jp"},{format:"domain",value:"secomtrust.net"},{format:"domain",value:"cybertrust.co.jp"},{format:"domain",value:"cybertrust.ne.jp"},{format:"domain",value:"managedpki.ne.jp"}],[{format:"domain",value:"sinopec-usa.com"},{format:"domain",value:"sinopec.com"},{format:"domain",value:"sinopecgroup.com"},{format:"domain",value:"sinopecnews.com.cn"},{format:"domain",value:"sinopecsales.com"}],[{format:"domain",value:"dishworld.com"},{format:"domain",value:"slinginternational.com"},{format:"domain",value:"sling.com"},{format:"domain",value:"movenetworks.com"},{format:"domain",value:"movetv.com"}],[{format:"domain",value:"apress.com"},{format:"domain",value:"springer.com"},{format:"domain",value:"springerlink.com"},{format:"domain",value:"springernature.com"},{format:"domain",value:"wkap.nl"}],[{format:"domain",value:"cnsuning.com"},{format:"domain",value:"suning.com"},{format:"domain",value:"suningcloud.com"},{format:"domain",value:"suningestate.com"},{format:"domain",value:"suningholdings.com"}],[{format:"domain",value:"dogatch.jp"},{format:"domain",value:"gorin.jp"},{format:"domain",value:"screens-lab.jp"},{format:"domain",value:"tver.co.jp"},{format:"domain",value:"tver.jp"}],[{format:"domain",value:"xnxx-cdn.com"},{format:"domain",value:"xnxx.com"},{format:"domain",value:"xnxx.net"},{format:"domain",value:"xnxx.tv"},{format:"domain",value:"xnxx3.com"}],[{format:"domain",value:"aiganggu.com"},{format:"domain",value:"danjuanfunds.com"},{format:"domain",value:"imedao.com"},{format:"domain",value:"snowballsecurities.com"},{format:"domain",value:"xueqiu.com"}],[{format:"domain",value:"168sex.top"},{format:"domain",value:"a7sex.com"},{format:"domain",value:"ctotires.com"},{format:"domain",value:"ferryclean.com"},{format:"domain",value:"zhimeishe888.com"}],[{format:"domain",value:"unity.com"},{format:"domain",value:"unity3d.com"},{format:"domain",value:"unityads.unity3d.com"},{format:"domain",value:"unityads.unitychina.cn"}],[{format:"domain",value:"yy.com"},{format:"domain",value:"yystatic.com"},{format:"domain",value:"duowan.com"},{format:"domain",value:"dwstatic.com"}],[{format:"domain",value:"2k.com"},{format:"domain",value:"2kcoretech.online"},{format:"domain",value:"2kgames.com"},{format:"domain",value:"take2games.com"}],[{format:"domain",value:"36dianping.com"},{format:"domain",value:"36kr.com"},{format:"domain",value:"36krcdn.com"},{format:"domain",value:"36krcnd.com"}],[{format:"domain",value:"54647.global"},{format:"domain",value:"54647.io"},{format:"domain",value:"54647.online"},{format:"domain",value:"54647.org"}],[{format:"domain",value:"6park.com"},{format:"domain",value:"6parkbbs.com"},{format:"domain",value:"6parknews.com"},{format:"domain",value:"cool18.com"}],[{format:"domain",value:"anaconda.cloud"},{format:"domain",value:"anaconda.com"},{format:"domain",value:"anaconda.org"},{format:"domain",value:"conda.io"}],[{format:"domain",value:"apkpure.com"},{format:"domain",value:"cdnpure.com"},{format:"domain",value:"pureapk.com"},{format:"domain",value:"winudf.com"}],[{format:"domain",value:"ao3.org"},{format:"domain",value:"archiveofourown.org"},{format:"domain",value:"archiveofourown.com"},{format:"domain",value:"archiveofourown.net"}],[{format:"domain",value:"arphic.com"},{format:"domain",value:"arphic.com.cn"},{format:"domain",value:"arphic.com.tw"},{format:"domain",value:"ifontcloud.com"}],[{format:"domain",value:"bandwagonhost.com"},{format:"domain",value:"bwh1.net"},{format:"domain",value:"bwh8.net"},{format:"domain",value:"bwh88.net"}],[{format:"domain",value:"bili2.cc"},{format:"domain",value:"bili888.com"},{format:"domain",value:"bili999.com"},{format:"domain",value:"regexp:(^|\\.)bilibili3(0[1-9]|1[0-2])\\.xyz$"}],[{format:"domain",value:"bjyouth.gov.cn"},{format:"domain",value:"bjyouth.net"},{format:"domain",value:"sqqnh.cn"},{format:"domain",value:"sqqnh.org"}],[{format:"domain",value:"boboporn.com"},{format:"domain",value:"boboporn.net"},{format:"domain",value:"bobovip.cc"},{format:"domain",value:"sesez.com"}],[{format:"domain",value:"btt804.com"},{format:"domain",value:"btt904.com"},{format:"domain",value:"bttzyw.com"},{format:"domain",value:"bttzyw.net"}],[{format:"domain",value:"chinanews.com"},{format:"domain",value:"chinanews.com.cn"},{format:"domain",value:"cns.com.cn"},{format:"domain",value:"ecns.cn"}],[{format:"domain",value:"clco.cc"},{format:"domain",value:"cloudc.one"},{format:"domain",value:"cloudcone.com"},{format:"domain",value:"cloudcone.net"}],[{format:"domain",value:"collabora.co.uk"},{format:"domain",value:"collabora.com"},{format:"domain",value:"collabora.org"},{format:"domain",value:"collaboraoffice.com"}],[{format:"domain",value:"coursera-for-business.org"},{format:"domain",value:"coursera.community"},{format:"domain",value:"coursera.help"},{format:"domain",value:"coursera.org"}],[{format:"domain",value:"ccstatic.org"},{format:"domain",value:"creativecommons.org"},{format:"domain",value:"creativecommons.engineering"},{format:"domain",value:"licensebuttons.net"}],[{format:"domain",value:"dcard.cc"},{format:"domain",value:"dcard.io"},{format:"domain",value:"dcard.link"},{format:"domain",value:"dcard.tw"}],[{format:"domain",value:"digitalocean.com"},{format:"domain",value:"digitaloceanspaces.com"},{format:"domain",value:"do.co"},{format:"domain",value:"nginxconfig.io"}],[{format:"domain",value:"dlercloud.com"},{format:"domain",value:"dlercloud.org"},{format:"domain",value:"dlercloud.me"},{format:"domain",value:"dleris.best"}],[{format:"domain",value:"economist.com"},{format:"domain",value:"economistgroup.com"},{format:"domain",value:"economistgroupcareers.com"},{format:"domain",value:"eiu.com"}],[{format:"domain",value:"emojipedia.org"},{format:"domain",value:"worldemojiawards.com"},{format:"domain",value:"worldemojiday.com"},{format:"domain",value:"xn--yt8h.la"}],[{format:"domain",value:"devcon.org"},{format:"domain",value:"ethereum.foundation"},{format:"domain",value:"ethereum.org"},{format:"domain",value:"etherscan.io"}],[{format:"domain",value:"getfedora.org"},{format:"domain",value:"fedoraforum.org"},{format:"domain",value:"fedoraproject.org"},{format:"domain",value:"fedoramagazine.org"}],[{format:"domain",value:"gimy.cc"},{format:"domain",value:"gimy.co"},{format:"domain",value:"gimy.to"},{format:"domain",value:"gimy.tv"}],[{format:"domain",value:"hainanairlines.com"},{format:"domain",value:"hnacargo.com"},{format:"domain",value:"hnair.com"},{format:"domain",value:"10044.cn"}],[{format:"domain",value:"hentaivn.de"},{format:"domain",value:"hentaivn.la"},{format:"domain",value:"hentaivn.net"},{format:"domain",value:"htvncdn.net"}],[{format:"domain",value:"hetzner.cloud"},{format:"domain",value:"hetzner.com"},{format:"domain",value:"hetzner.de"},{format:"domain",value:"your-server.de"}],[{format:"domain",value:"hoopchina.com.cn"},{format:"domain",value:"hupu.com"},{format:"domain",value:"hupucdn.com"},{format:"domain",value:"shihuo.cn"}],[{format:"domain",value:"ic.ac.uk"},{format:"domain",value:"imperial.ac.uk"},{format:"domain",value:"imperialbusiness.school"},{format:"full domain",value:"imperial.insendi.com"}],[{format:"domain",value:"intercom.com"},{format:"domain",value:"intercom.io"},{format:"domain",value:"intercomassets.com"},{format:"domain",value:"intercomcdn.com"}],[{format:"domain",value:"x18r.co"},{format:"domain",value:"x18r.com"},{format:"domain",value:"z18r.co"},{format:"domain",value:"z18r.com"}],[{format:"domain",value:"jfrog.com"},{format:"domain",value:"jfrog.org"},{format:"domain",value:"bintray.com"},{format:"full domain",value:"d29vzk4ow07wi7.cloudfront.net"}],[{format:"domain",value:"jkface.net"},{format:"domain",value:"jkforum.net"},{format:"domain",value:"jr24h.com"},{format:"domain",value:"jvid.com"}],[{format:"domain",value:"jsdelivr.com"},{format:"domain",value:"jsdelivr.net"},{format:"domain",value:"esm.run"},{format:"full domain",value:"cdn.jsdelivr.net"}],[{format:"domain",value:"justmysocks.net"},{format:"domain",value:"justmysocks1.net"},{format:"domain",value:"justmysocks2.net"},{format:"domain",value:"justmysocks4.net"}],[{format:"domain",value:"lancdn.com"},{format:"domain",value:"landiannews.com"},{format:"domain",value:"wsoso.com"},{format:"domain",value:"landian.vip"}],[{format:"domain",value:"madshi.net"},{format:"domain",value:"madvr.com"},{format:"domain",value:"madvr.net"},{format:"domain",value:"madvrlabs.llc"}],[{format:"domain",value:"flyme.cn"},{format:"domain",value:"meizu.cn"},{format:"domain",value:"meizu.com"},{format:"domain",value:"mzres.com"}],[{format:"domain",value:"mit"},{format:"domain",value:"mit.edu"},{format:"domain",value:"mit.net"},{format:"domain",value:"mitpressjournals.org"}],[{format:"domain",value:"momo.dm"},{format:"domain",value:"momo5188.com"},{format:"domain",value:"momomall.com.tw"},{format:"domain",value:"momoshop.com.tw"}],[{format:"domain",value:"andysparis.com"},{format:"domain",value:"newsmax.com"},{format:"domain",value:"newsmax.in"},{format:"domain",value:"newsmaxtv.com"}],[{format:"domain",value:"nga.cn"},{format:"domain",value:"178.com"},{format:"domain",value:"ngabbs.com"},{format:"domain",value:"ngacn.cc"}],[{format:"domain",value:"patreon.com"},{format:"domain",value:"patreoncommunity.com"},{format:"domain",value:"patreonusercontent.com"},{format:"full domain",value:"live-patreon-marketing.pantheonsite.io"}],[{format:"domain",value:"pingan.com"},{format:"domain",value:"pingan.com.cn"},{format:"domain",value:"pingan.com.hk"},{format:"domain",value:"yqb.com"}],[{format:"domain",value:"pirates-forum.org"},{format:"domain",value:"torrindex.net"},{format:"domain",value:"thepiratebay.org"},{format:"domain",value:"apibay.org"}],[{format:"domain",value:"qwant.com"},{format:"domain",value:"qwant.de"},{format:"domain",value:"qwant.fr"},{format:"domain",value:"qwant.it"}],[{format:"domain",value:"readthedocs-hosted.com"},{format:"domain",value:"readthedocs.com"},{format:"domain",value:"readthedocs.io"},{format:"domain",value:"readthedocs.org"}],[{format:"domain",value:"signal.art"},{format:"domain",value:"signal.org"},{format:"domain",value:"signalusers.org"},{format:"domain",value:"whispersystems.org"}],[{format:"domain",value:"go2map.com"},{format:"domain",value:"sogo.com"},{format:"domain",value:"sogou.com"},{format:"domain",value:"sogoucdn.com"}],[{format:"domain",value:"sourceforge.com"},{format:"domain",value:"sourceforge.net"},{format:"domain",value:"sf.net"},{format:"domain",value:"fsdn.com"}],[{format:"domain",value:"supersonic.com"},{format:"domain",value:"supersonicads.com"},{format:"domain",value:"ssacdn.com"},{format:"domain",value:"supersonicads-a.akamaihd.net"}],[{format:"domain",value:"managedpki.com"},{format:"domain",value:"symantec.com"},{format:"domain",value:"symcb.com"},{format:"domain",value:"symcd.com"}],[{format:"domain",value:"taikang.com"},{format:"domain",value:"taikanglife.com"},{format:"domain",value:"taikangzhijia.com"},{format:"domain",value:"tkhealthcare.com"}],[{format:"domain",value:"tandf.co.uk"},{format:"domain",value:"tandfonline.com"},{format:"domain",value:"taylorandfrancis.com"},{format:"domain",value:"taylorfrancis.com"}],[{format:"domain",value:"ctan.org"},{format:"domain",value:"latex-project.org"},{format:"domain",value:"miktex.org"},{format:"domain",value:"tug.org"}],[{format:"domain",value:"udn.com"},{format:"domain",value:"udn.com.tw"},{format:"domain",value:"udndata.com"},{format:"domain",value:"udnfunlife.com"}],[{format:"domain",value:"wisecoin.com"},{format:"domain",value:"wiseid.com"},{format:"domain",value:"wisekey.com"},{format:"domain",value:"wisekey.com.hk"}],[{format:"domain",value:"sojump.com"},{format:"domain",value:"wjx.cn"},{format:"domain",value:"wjx.com"},{format:"domain",value:"wjx.top"}],[{format:"domain",value:"zb.app"},{format:"domain",value:"zb.com"},{format:"domain",value:"zb.io"},{format:"domain",value:"zb.live"}],[{format:"domain",value:"acfun.cn"},{format:"domain",value:"aixifan.com"},{format:"full domain",value:"apilog-web.acfun.cn"}],[{format:"domain",value:"oschina.net"},{format:"domain",value:"gitee.com"},{format:"domain",value:"gitee.io"}],[{format:"domain",value:"pubmatic.com"},{format:"domain",value:"pubmatic.co.jp"},{format:"domain",value:"ads.pubmatic.com"}],[{format:"domain",value:"17zuoye.cn"},{format:"domain",value:"17zuoye.com"},{format:"domain",value:"17zuoye.net"}],[{format:"domain",value:"4cdn.org"},{format:"domain",value:"4chan.org"},{format:"domain",value:"4channel.org"}],[{format:"domain",value:"acer-group.com"},{format:"domain",value:"acer.com"},{format:"domain",value:"acer.com.cn"}],[{format:"domain",value:"agora.io"},{format:"domain",value:"agoraio.cn"},{format:"domain",value:"agoralab.co"}],[{format:"domain",value:"atom-data.io"},{format:"domain",value:"analytics-data.io"},{format:"domain",value:"ironbeast.io"}],[{format:"domain",value:"avmoo.click"},{format:"domain",value:"avmoo.com"},{format:"domain",value:"tellme.pw"}],[{format:"domain",value:"517lppz.com"},{format:"domain",value:"lppz.com"},{format:"domain",value:"lppzimg.com"}],[{format:"domain",value:"bit.ly"},{format:"domain",value:"bitly.com"},{format:"domain",value:"bitly.is"}],[{format:"domain",value:"bisq.io"},{format:"domain",value:"bisq.network"},{format:"domain",value:"bitsquare.io"}],[{format:"domain",value:"bigbuckbunny.org"},{format:"domain",value:"blender.org"},{format:"domain",value:"elephantsdream.org"}],[{format:"domain",value:"bcicdn.com"},{format:"domain",value:"bcrncdn.com"},{format:"domain",value:"bongacams.com"}],[{format:"domain",value:"booking.cn"},{format:"domain",value:"booking.com"},{format:"domain",value:"bstatic.com"}],[{format:"domain",value:"bootcss.com"},{format:"domain",value:"bootcdn.cn"},{format:"domain",value:"phpcomposer.com"},{format:"domain",value:"bootcdn.net"}],[{format:"domain",value:"csdl.ac.cn"},{format:"domain",value:"iscas.ac.cn"},{format:"domain",value:"las.ac.cn"}],[{format:"domain",value:"certum.pl"},{format:"domain",value:"ocsp-certum.com"},{format:"domain",value:"ocsp-responder.com"}],[{format:"domain",value:"ciweimao.com"},{format:"domain",value:"hbooker.com"},{format:"domain",value:"kuangxiangit.com"}],[{format:"domain",value:"ck101.com"},{format:"domain",value:"ckcdn.com"},{format:"domain",value:"ckck.fun"}],[{format:"domain",value:"c4slive.com"},{format:"domain",value:"clips4sale.com"},{format:"domain",value:"videos4sale.com"}],[{format:"domain",value:"coinone.co.kr"},{format:"domain",value:"coinonecore.com"},{format:"domain",value:"coinonecorp.com"}],[{format:"domain",value:"coolapk.com"},{format:"domain",value:"coolapkmarket.com"},{format:"domain",value:"coolapkmarket.net"}],[{format:"domain",value:"costco-static.com"},{format:"domain",value:"costco.com"},{format:"domain",value:"costcobusinessdelivery.com"}],[{format:"domain",value:"deviantart.com"},{format:"domain",value:"deviantart.net"},{format:"domain",value:"da-files.com"}],[{format:"domain",value:"content-ause1-ur-discovery1.uplynk.com"},{format:"domain",value:"disco-api.com"},{format:"domain",value:"discoveryplus.com"}],[{format:"domain",value:"disqus.com"},{format:"domain",value:"disquscdn.com"},{format:"domain",value:"disqusservice.com"}],[{format:"domain",value:"compose-spec.io"},{format:"domain",value:"docker.com"},{format:"domain",value:"docker.io"}],[{format:"domain",value:"douban.com"},{format:"domain",value:"douban.fm"},{format:"domain",value:"doubanio.com"}],[{format:"domain",value:"broadbandreports.com"},{format:"domain",value:"dslr.net"},{format:"domain",value:"dslreports.com"}],[{format:"domain",value:"embed.ly"},{format:"domain",value:"embedly.com"},{format:"domain",value:"playerjs.io"}],[{format:"domain",value:"espressif.com"},{format:"domain",value:"esp32.com"},{format:"domain",value:"esp8266.com"}],[{format:"domain",value:"arcgis.com"},{format:"domain",value:"arcgisonline.com"},{format:"domain",value:"esri.com"}],[{format:"domain",value:"4gtv.tv"},{format:"domain",value:"ftv.com.tw"},{format:"domain",value:"ftvnews.com.tw"}],[{format:"domain",value:"godaddy.com"},{format:"domain",value:"x.co"},{format:"domain",value:"godaddy"}],[{format:"domain",value:"haskell.org"},{format:"domain",value:"haskellstack.org"},{format:"domain",value:"stackage.org"}],[{format:"domain",value:"botstop.com"},{format:"domain",value:"hcaptcha.com"},{format:"domain",value:"hcaptchastatus.com"}],[{format:"domain",value:"edcity.hk"},{format:"domain",value:"hkedcity.net"},{format:"domain",value:"hkreadingcity.net"}],[{format:"domain",value:"identrust.com"},{format:"domain",value:"identrust.co.uk"},{format:"domain",value:"identrust.net"}],[{format:"domain",value:"imagecurl.com"},{format:"domain",value:"imagecurl.org"},{format:"domain",value:"imgcrl.org"}],[{format:"domain",value:"ibb.co"},{format:"domain",value:"imgbb.com"},{format:"domain",value:"simgbb.com"}],[{format:"domain",value:"banned.video"},{format:"domain",value:"infowars.com"},{format:"domain",value:"infowarsmedia.com"}],[{format:"domain",value:"javbus.com"},{format:"domain",value:"javbus22.com"},{format:"domain",value:"javcdn.cc"}],[{format:"domain",value:"javdb.com"},{format:"domain",value:"jdbimgs.com"},{format:"domain",value:"jdbstatic.com"}],[{format:"domain",value:"jbcz.tv"},{format:"domain",value:"jibencaozuo.com"},{format:"domain",value:"media.paperclipclub.net"}],[{format:"domain",value:"hkporn.net"},{format:"domain",value:"justav.net"},{format:"domain",value:"twporn.net"}],[{format:"domain",value:"koocdn.com"},{format:"domain",value:"koolearn.com"},{format:"domain",value:"koopass.com"}],[{format:"domain",value:"ku6.com"},{format:"domain",value:"ku6cdn.com"},{format:"domain",value:"ku6img.com"}],[{format:"domain",value:"dengguobi.com"},{format:"domain",value:"houyicaiji.com"},{format:"domain",value:"jinglingbiaozhu.com"}],[{format:"domain",value:"ads.service.kugou.com"},{format:"domain",value:"adserviceretry.kglink.cn"},{format:"domain",value:"adserviceretry.kugou.com"}],[{format:"domain",value:"lencr.org"},{format:"domain",value:"letsencrypt.com"},{format:"domain",value:"letsencrypt.org"}],[{format:"domain",value:"liepin.com"},{format:"domain",value:"lietou.com"},{format:"domain",value:"lietou-static.com"}],[{format:"domain",value:"lkcoffee.com"},{format:"domain",value:"luckincoffeecdn.com"},{format:"domain",value:"yyds.co"}],[{format:"domain",value:"localizecdn.com"},{format:"domain",value:"localizejs.com"},{format:"domain",value:"localizestatus.com"}],[{format:"domain",value:"mafengwo.cn"},{format:"domain",value:"mafengwo.com"},{format:"domain",value:"mafengwo.net"}],[{format:"domain",value:"imgsmail.ru"},{format:"domain",value:"mail.ru"},{format:"domain",value:"mycdn.me"},{format:"domain",value:"ok.ru"}],[{format:"domain",value:"maoyun.com"},{format:"domain",value:"maoyuncloud.cn"},{format:"domain",value:"maoyuncloud.com"}],[{format:"domain",value:"mega.co.nz"},{format:"domain",value:"mega.io"},{format:"domain",value:"mega.nz"}],[{format:"domain",value:"meitu.com"},{format:"domain",value:"meitudata.com"},{format:"domain",value:"meitustat.com"}],[{format:"domain",value:"mogu.com"},{format:"domain",value:"mogucdn.com"},{format:"domain",value:"mogujie.com"}],[{format:"domain",value:"n3ro.lol"},{format:"domain",value:"n3ro.net"},{format:"domain",value:"n3ro.wtf"}],[{format:"domain",value:"nexitally.com"},{format:"domain",value:"nexitallysafe.com"},{format:"domain",value:"nexitcore.com"}],[{format:"domain",value:"newcoder.com"},{format:"domain",value:"nowcoder.com"},{format:"domain",value:"nowcoder.org"}],[{format:"domain",value:"ogury.com"},{format:"domain",value:"presage.io"},{format:"domain",value:"ogury.co"}],[{format:"domain",value:"okex.com"},{format:"domain",value:"okx.com"},{format:"domain",value:"oklink.com"}],[{format:"domain",value:"ai.com"},{format:"domain",value:"openai.com"},{format:"full domain",value:"openaiapi-site.azureedge.net"}],[{format:"domain",value:"perl.org"},{format:"domain",value:"cpan.org"},{format:"domain",value:"metacpan.org"}],[{format:"domain",value:"pgyer.com"},{format:"domain",value:"tracup.com"},{format:"domain",value:"frontjs.com"}],[{format:"domain",value:"pddpic.com"},{format:"domain",value:"pinduoduo.com"},{format:"domain",value:"yangkeduo.com"}],[{format:"domain",value:"pplive.cn"},{format:"domain",value:"pplive.com"},{format:"domain",value:"pptv.com"}],[{format:"domain",value:"ptt.cc"},{format:"domain",value:"ptt2.cc"},{format:"domain",value:"ptt3.cc"}],[{format:"domain",value:"pugpig-dev.com"},{format:"domain",value:"pugpig-stage.com"},{format:"domain",value:"pugpig.com"}],[{format:"domain",value:"api-priconne-redive.cygames.jp"},{format:"domain",value:"omotenashi.cygames.jp"},{format:"full domain",value:"prd-priconne-redive.akamaized.net"}],[{format:"domain",value:"quip-cdn.com"},{format:"domain",value:"quip.com"},{format:"domain",value:"quipelements.com"}],[{format:"domain",value:"quora.com"},{format:"domain",value:"quoracdn.net"},{format:"domain",value:"qr.ae"}],[{format:"domain",value:"scaleflex.com"},{format:"domain",value:"cloudimage.io"},{format:"domain",value:"cloudimg.io"}],[{format:"domain",value:"scp-wiki.net"},{format:"domain",value:"scpdb.org"},{format:"domain",value:"scpwiki.com"}],[{format:"domain",value:"slideshare.com"},{format:"domain",value:"slideshare.net"},{format:"domain",value:"slidesharecdn.com"}],[{format:"domain",value:"szbdyd.com"},{format:"domain",value:"snodehome.com"},{format:"domain",value:"snodehome.cn"}],[{format:"domain",value:"sohu.com"},{format:"domain",value:"sohucs.com"},{format:"domain",value:"itc.cn"}],[{format:"full domain",value:"adeventtracker.spotify.com"},{format:"full domain",value:"adstudio-assets.scdn.co"},{format:"full domain",value:"bloodhound.spotify.com"}],[{format:"domain",value:"airport-gov-cn.com"},{format:"domain",value:"cnix-gov-cn.com"},{format:"domain",value:"xn--d4ty0ojsqzfd.com"}],[{format:"domain",value:"mystrikingly.com"},{format:"domain",value:"strikingly.com"},{format:"domain",value:"strikinglycdn.com"}],[{format:"domain",value:"stripe.com"},{format:"domain",value:"stripe.network"},{format:"domain",value:"stripecdn.com"}],[{format:"domain",value:"mysxl.cn"},{format:"domain",value:"sxl.cn"},{format:"domain",value:"sxlcdn.cn"}],[{format:"domain",value:"telekom.com"},{format:"domain",value:"telekom.de"},{format:"domain",value:"telesec.de"}],[{format:"domain",value:"termux.com"},{format:"domain",value:"termux.dev"},{format:"domain",value:"termux.org"}],[{format:"domain",value:"thetype.cloud"},{format:"domain",value:"thetype.com"},{format:"domain",value:"typeisbeautiful.com"}],[{format:"domain",value:"tidal.com"},{format:"domain",value:"tidalhifi.com"},{format:"domain",value:"wimpmusic.com"}],[{format:"domain",value:"tokyo-tosho.net"},{format:"domain",value:"tokyotosho.info"},{format:"domain",value:"tokyotosho.se"}],[{format:"domain",value:"internetdownloadmanager.com"},{format:"domain",value:"registeridm.com"},{format:"domain",value:"tonec.com"}],[{format:"domain",value:"exit"},{format:"domain",value:"onion"},{format:"domain",value:"tor"}],[{format:"domain",value:"truyen-hentai.com"},{format:"domain",value:"truyen-hentai.fr"},{format:"domain",value:"truyen-hentai.ru"}],[{format:"domain",value:"u17.com"},{format:"domain",value:"u17i.com"},{format:"domain",value:"u17t.com"}],[{format:"domain",value:"uber-assets.com"},{format:"domain",value:"uber.com"},{format:"domain",value:"ubereats.com"}],[{format:"domain",value:"v2ray.com"},{format:"domain",value:"v2ray.cool"},{format:"domain",value:"v2fly.org"}],[{format:"domain",value:"vancl.com"},{format:"domain",value:"vanclimg.com"},{format:"domain",value:"vcimg.com"}],[{format:"domain",value:"opengw.net"},{format:"domain",value:"vpngate.jp"},{format:"domain",value:"vpngate.net"}],[{format:"domain",value:"feng.com"},{format:"domain",value:"fengimg.com"},{format:"domain",value:"wfdata.club"}],[{format:"domain",value:"wolai.com"},{format:"domain",value:"wol.tv"},{format:"domain",value:"wostatic.cn"}],[{format:"domain",value:"adbehavior.ximalaya.com"},{format:"domain",value:"adse.wsa.ximalaya.com"},{format:"domain",value:"adse.ximalaya.com"}],[{format:"domain",value:"speiyou.com"},{format:"domain",value:"xesimg.com"},{format:"domain",value:"xueersi.com"}],[{format:"domain",value:"ynet.cn"},{format:"domain",value:"ynet.com"},{format:"domain",value:"ynet.com.cn"}],[{format:"domain",value:"youzan.com"},{format:"domain",value:"yzcdn.cn"},{format:"domain",value:"youzanyun.com"}],[{format:"domain",value:"zaobao.com"},{format:"domain",value:"zaobao.com.sg"},{format:"domain",value:"zaobao.sg"}],[{format:"domain",value:"zoom.com"},{format:"domain",value:"zoom.com.cn"},{format:"domain",value:"zoom.us"}],[{format:"domain",value:"2ch.net"},{format:"domain",value:"5ch.net"}],[{format:"domain",value:"928.plus"},{format:"domain",value:"zind.cloud"}],[{format:"domain",value:"acplay.net"},{format:"domain",value:"dandanplay.com"}],[{format:"domain",value:"actalis.com"},{format:"domain",value:"actalis.it"}],[{format:"domain",value:"adguard-vpn.com"},{format:"domain",value:"adguard.com"}],[{format:"domain",value:"afdian.net"},{format:"domain",value:"afdiancdn.com"}],[{format:"domain",value:"afp.com"},{format:"domain",value:"afpforum.com"}],[{format:"domain",value:"airchina.com.cn"},{format:"domain",value:"airchinacargo.com"}],[{format:"domain",value:"aixcoder.com"},{format:"domain",value:"nnthink.com"}],[{format:"domain",value:"anon-v.com"},{format:"domain",value:"anon-v.lol"}],[{format:"domain",value:"ap.org"},{format:"domain",value:"apnews.com"}],[{format:"domain",value:"apa.org"},{format:"domain",value:"psyccareers.com"}],[{format:"domain",value:"applovin.com"},{format:"domain",value:"applvn.com"}],[{format:"domain",value:"applysquare.com"},{format:"domain",value:"applysquare.net"}],[{format:"domain",value:"archlinux.org"},{format:"domain",value:"archlinuxarm.org"}],[{format:"domain",value:"artstation.com"},{format:"domain",value:"artstationmedia.com"}],[{format:"domain",value:"asproex.com"},{format:"domain",value:"asproexapi.com"}],[{format:"domain",value:"asus.com"},{format:"domain",value:"asus.com.cn"}],[{format:"domain",value:"bandcamp.com"},{format:"domain",value:"bcbits.com"}],[{format:"domain",value:"bdsm123.xyz"},{format:"domain",value:"bondagesm.xyz"}],[{format:"domain",value:"bitflyer.com"},{format:"domain",value:"bitflyer.jp"}],[{format:"domain",value:"book.com.tw"},{format:"domain",value:"books.com.tw"}],[{format:"domain",value:"boomerang.com"},{format:"domain",value:"wbdnbo.net"}],[{format:"domain",value:"bootstrapcdn.com"},{format:"domain",value:"getbootstrap.com"}],[{format:"domain",value:"boslife.biz"},{format:"domain",value:"boslife.net"}],[{format:"domain",value:"boxun.com"},{format:"domain",value:"bowenpress.com"}],[{format:"domain",value:"buymeacoff.ee"},{format:"domain",value:"buymeacoffee.com"}],[{format:"domain",value:"c-span.org"},{format:"domain",value:"c-spanvideo.org"}],[{format:"domain",value:"cabletv.com.hk"},{format:"domain",value:"i-cable.com"}],[{format:"domain",value:"camwhores.tv"},{format:"domain",value:"camwhores.video"}],[{format:"domain",value:"capitalonline.net"},{format:"domain",value:"mirrors.yun-idc.com"}],[{format:"domain",value:"cdn77.com"},{format:"domain",value:"cdn77.org"}],[{format:"domain",value:"certinomis.com"},{format:"domain",value:"certinomis.fr"}],[{format:"domain",value:"chinaso.com"},{format:"domain",value:"pg0.cn"}],[{format:"domain",value:"chinaz.com"},{format:"domain",value:"chinaz.net"}],[{format:"domain",value:"citizenlab.ca"},{format:"domain",value:"citizenlab.org"}],[{format:"domain",value:"cloudinary.com"},{format:"domain",value:"cloudinary.net"}],[{format:"domain",value:"clubhouseapi.com"},{format:"domain",value:"joinclubhouse.com"}],[{format:"domain",value:"cnki.com.cn"},{format:"domain",value:"cnki.net"}],[{format:"domain",value:"coding.me"},{format:"domain",value:"coding.net"}],[{format:"domain",value:"caiyunai.com"},{format:"domain",value:"caiyunapp.com"}],[{format:"domain",value:"contentful.com"},{format:"domain",value:"ctfassets.net"}],[{format:"domain",value:"coupang.com"},{format:"domain",value:"coupangcdn.com"}],[{format:"domain",value:"cowlevel.net"},{format:"domain",value:"cdncl.net"}],[{format:"domain",value:"c-t.work"},{format:"domain",value:"cowtransfer.com"}],[{format:"domain",value:"csis.org"},{format:"full domain",value:"csis-prod.s3.amazonaws.com"}],[{format:"domain",value:"curseforge.com"},{format:"domain",value:"forgecdn.net"}],[{format:"domain",value:"cylink.pro"},{format:"domain",value:"cylink0122.icu"}],[{format:"domain",value:"dandanzan.cc"},{format:"domain",value:"nunuyy.cc"}],[{format:"domain",value:"dangdang.com"},{format:"domain",value:"ddimg.cn"}],[{format:"domain",value:"debian.org"},{format:"domain",value:"dotdeb.org"}],[{format:"domain",value:"docin.com"},{format:"domain",value:"douding.cn"}],[{format:"domain",value:"doi.org"},{format:"domain",value:"doi.info"}],[{format:"domain",value:"drbl.in"},{format:"domain",value:"dribbble.com"}],[{format:"domain",value:"dtstatic.com"},{format:"domain",value:"duitang.com"}],[{format:"domain",value:"duyaoss.com"},{format:"domain",value:"duyaossr.com"}],[{format:"domain",value:"dw.com"},{format:"full domain",value:"deutschewelle.h-cdn.com"}],[{format:"domain",value:"easylist.to"},{format:"domain",value:"lanik.us"}],[{format:"domain",value:"edx.org"},{format:"domain",value:"edx-cdn.org"}],[{format:"domain",value:"entermediadb.net"},{format:"domain",value:"entermediadb.org"}],[{format:"domain",value:"fansta.me"},{format:"full domain",value:"misa-prod.s3.ap-northeast-1.amazonaws.com"}],[{format:"domain",value:"flathub.org"},{format:"domain",value:"flatpak.org"}],[{format:"domain",value:"allflow.cn"},{format:"domain",value:"flowus.cn"}],[{format:"domain",value:"fontawesome.com"},{format:"domain",value:"fortawesome.com"}],[{format:"domain",value:"forbes.com"},{format:"domain",value:"forbesimg.com"}],[{format:"domain",value:"fzdm.com"},{format:"domain",value:"fffdm.com"}],[{format:"domain",value:"geetest.com"},{format:"full domain",value:"geetest.datasink.sensorsdata.cn"}],[{format:"domain",value:"gitbook.com"},{format:"domain",value:"gitbook.io"}],[{format:"domain",value:"gitv.cn"},{format:"domain",value:"gitv.tv"}],[{format:"domain",value:"globalvoices.org"},{format:"domain",value:"globalvoicesonline.org"}],[{format:"domain",value:"goodreads.com"},{format:"domain",value:"gr-assets.com"}],[{format:"domain",value:"gracg.com"},{format:"domain",value:"procg.cn"}],[{format:"domain",value:"hacpai.com"},{format:"domain",value:"ld246.com"}],[{format:"domain",value:"haveibeenpwned.com"},{format:"domain",value:"pwnedpasswords.com"}],[{format:"domain",value:"heydoga.com"},{format:"domain",value:"heyzo.com"}],[{format:"domain",value:"mlog.hiido.com"},{format:"domain",value:"ylog.hiido.com"}],[{format:"domain",value:"hitun.io"},{format:"domain",value:"xn--90wwvt03e.com"}],[{format:"domain",value:"hkgolden.com"},{format:"domain",value:"hkgolden.media"}],[{format:"domain",value:"hkopentv.com"},{format:"domain",value:"fantv.hk"}],[{format:"domain",value:"hm.com"},{format:"domain",value:"hm.com.cn"}],[{format:"domain",value:"brew.sh"},{format:"full domain",value:"homebrew.bintray.com"}],[{format:"domain",value:"homedepot-static.com"},{format:"domain",value:"homedepot.com"}],[{format:"domain",value:"hongkongpost.gov.hk"},{format:"domain",value:"ecert.gov.hk"}],[{format:"domain",value:"huya.com"},{format:"domain",value:"msstatic.com"}],[{format:"domain",value:"ihuman.com"},{format:"domain",value:"hongen.com"}],[{format:"domain",value:"illusion.co.jp"},{format:"domain",value:"illusion.jp"}],[{format:"domain",value:"imageshack.com"},{format:"domain",value:"imageshack.us"}],[{format:"domain",value:"imgix.com"},{format:"domain",value:"imgix.net"}],[{format:"domain",value:"imgur.com"},{format:"domain",value:"imgurinc.com"}],[{format:"domain",value:"ipip.net"},{format:"domain",value:"myip.la"}],[{format:"domain",value:"is.gd"},{format:"domain",value:"v.gd"}],[{format:"domain",value:"cdnlab.live"},{format:"domain",value:"jable.tv"}],[{format:"domain",value:"javcc.cc"},{format:"domain",value:"javcc.com"}],[{format:"domain",value:"javwide.com"},{format:"domain",value:"javwide.tv"}],[{format:"domain",value:"jianshu.com"},{format:"domain",value:"jianshu.io"}],[{format:"domain",value:"jiemian.com"},{format:"domain",value:"jiemian.com.cn"}],[{format:"domain",value:"jinshuju.net"},{format:"domain",value:"jinshujucdn.com"}],[{format:"domain",value:"johren.games"},{format:"domain",value:"johren.net"}],[{format:"domain",value:"kechuang.org"},{format:"full domain",value:"kc.kexinshe.com"}],[{format:"domain",value:"gotokeep.com"},{format:"domain",value:"keepcdn.com"}],[{format:"domain",value:"khanacademy.org"},{format:"domain",value:"kastatic.org"}],[{format:"domain",value:"kingkong.com.tw"},{format:"domain",value:"kingkongapp.com"}],[{format:"domain",value:"kodi.tv"},{format:"domain",value:"kodi.wiki"}],[{format:"domain",value:"konachan.com"},{format:"domain",value:"konachan.net"}],[{format:"domain",value:"kkmh.com"},{format:"domain",value:"kuaikanmanhua.com"}],[{format:"domain",value:"kubakuba.global"},{format:"domain",value:"kubakuba1996.com"}],[{format:"domain",value:"kubernetes.io"},{format:"domain",value:"k8s.io"}],[{format:"domain",value:"kgimg.com"},{format:"domain",value:"kugou.com"}],[{format:"domain",value:"lagou.com"},{format:"domain",value:"lgstatic.com"}],[{format:"domain",value:"getlantern.org"},{format:"domain",value:"lantern.io"}],[{format:"domain",value:"lethalhardcore.com"},{format:"domain",value:"lethalhardcorevr.com"}],[{format:"domain",value:"lianjia.com"},{format:"domain",value:"ljcdn.com"}],[{format:"domain",value:"liberapay.com"},{format:"domain",value:"liberapay.org"}],[{format:"domain",value:"lih.kg"},{format:"domain",value:"lihkg.com"}],[{format:"domain",value:"linguee.com"},{format:"domain",value:"deepl.com"}],[{format:"domain",value:"lisiku.com"},{format:"domain",value:"lisiku1.com"}],[{format:"domain",value:"lizhi.fm"},{format:"domain",value:"lizhifm.com"}],[{format:"domain",value:"localbitcoins.com"},{format:"domain",value:"localbitcoinschain.com"}],[{format:"domain",value:"freedomplatform.tv"},{format:"domain",value:"londonreal.tv"}],[{format:"domain",value:"ltn.com.tw"},{format:"domain",value:"yes123.com.tw"}],[{format:"domain",value:"manoto1.tv"},{format:"domain",value:"manototv.com"}],[{format:"domain",value:"mapbox.cn"},{format:"domain",value:"mapbox.com"}],[{format:"domain",value:"matters.news"},{format:"domain",value:"matters.one"}],[{format:"domain",value:"medium.com"},{format:"domain",value:"medium.systems"}],[{format:"domain",value:"miaomiaoz.com"},{format:"domain",value:"miaomiaozhe.com"}],[{format:"domain",value:"5i01.com"},{format:"domain",value:"mobile01.com"}],[{format:"domain",value:"moji.com"},{format:"domain",value:"mojichina.com"}],[{format:"domain",value:"mongodb.com"},{format:"domain",value:"mongodb.org"}],[{format:"domain",value:"morisawa.co.jp"},{format:"domain",value:"typesquare.com"}],[{format:"domain",value:"moxing.mobi"},{format:"domain",value:"moxing.news"}],[{format:"domain",value:"musixmatch.com"},{format:"domain",value:"mxmcdn.net"}],[{format:"domain",value:"myradio.hk"},{format:"domain",value:"myradio.com.hk"}],[{format:"domain",value:"neow.in"},{format:"domain",value:"neowin.net"}],[{format:"domain",value:"netflav.com"},{format:"domain",value:"netflav1.com"}],[{format:"domain",value:"nginx.com"},{format:"domain",value:"nginx.org"}],[{format:"domain",value:"gendai.net"},{format:"domain",value:"nikkan-gendai.com"}],[{format:"domain",value:"nist.gov"},{format:"domain",value:"time.gov"}],[{format:"domain",value:"nordstrom.com"},{format:"domain",value:"nordstrommedia.com"}],[{format:"domain",value:"nyaa.net"},{format:"domain",value:"nyaa.si"}],[{format:"domain",value:"domain:okaapps.com"},{format:"domain",value:"regexp:^(.+\\.)*zh\\.okaapps\\.com$"}],[{format:"domain",value:"op.gg"},{format:"full domain",value:"opgg-static.akamaized.net"}],[{format:"domain",value:"openweather.co.uk"},{format:"domain",value:"openweathermap.org"}],[{format:"domain",value:"openwrt.org"},{format:"domain",value:"lede-project.org"}],[{format:"domain",value:"omaps.app"},{format:"domain",value:"organicmaps.app"}],[{format:"domain",value:"pagecdn.com"},{format:"domain",value:"pagecdn.io"}],[{format:"domain",value:"joyjoy.net"},{format:"domain",value:"pandanet-igs.com"}],[{format:"domain",value:"paofu.cloud"},{format:"domain",value:"paofuyun.me"}],[{format:"domain",value:"pinkcore.com"},{format:"domain",value:"pinkcore.net"}],[{format:"domain",value:"playcover.io"},{format:"domain",value:"playcover.workers.dev"}],[{format:"domain",value:"pluto.tv"},{format:"domain",value:"plutotv.net"}],[{format:"domain",value:"pca.st"},{format:"domain",value:"pocketcasts.com"}],[{format:"domain",value:"cdn.pocoiq.cn"},{format:"domain",value:"oct.pocoiq.cn"}],[{format:"domain",value:"polyv.net"},{format:"domain",value:"videocc.net"}],[{format:"domain",value:"pornpros.com"},{format:"domain",value:"pornprosnetwork.com"}],[{format:"domain",value:"postimages.org"},{format:"domain",value:"postimg.cc"}],[{format:"domain",value:"serialssolutions.com"},{format:"domain",value:"proquest.com"}],[{format:"domain",value:"qcc.com"},{format:"domain",value:"qichacha.com"}],[{format:"domain",value:"qt.io"},{format:"domain",value:"qt-project.org"}],[{format:"domain",value:"reabble.cn"},{format:"domain",value:"reabble.com"}],[{format:"domain",value:"realtype.co.jp"},{format:"domain",value:"realtype.jp"}],[{format:"domain",value:"rb.gy"},{format:"domain",value:"rebrandly.com"}],[{format:"domain",value:"redis.io"},{format:"domain",value:"redislabs.com"}],[{format:"domain",value:"renren.com"},{format:"domain",value:"renren-inc.com"}],[{format:"domain",value:"etvonline.hk"},{format:"domain",value:"rthk.hk"}],[{format:"domain",value:"ruby-lang.org"},{format:"domain",value:"rubygems.org"}],[{format:"domain",value:"ruby-china.org"},{format:"domain",value:"rubyconfchina.org"}],[{format:"domain",value:"rmbl.ws"},{format:"domain",value:"rumble.com"}],[{format:"domain",value:"rimg.com.tw"},{format:"domain",value:"ruten.com.tw"}],[{format:"domain",value:"scala-lang.org"},{format:"domain",value:"scala-sbt.org"}],[{format:"domain",value:"scenesource.me"},{format:"domain",value:"scnsrc.me"}],[{format:"domain",value:"sciencedirect.com"},{format:"domain",value:"sciencedirectassets.com"}],[{format:"domain",value:"scmp.com"},{format:"domain",value:"i-scmp.com"}],[{format:"domain",value:"segmentfault.com"},{format:"domain",value:"sifou.com"}],[{format:"domain",value:"setn.com"},{format:"domain",value:"settv.com.tw"}],[{format:"domain",value:"shadowsocks.com"},{format:"domain",value:"shadowsocks.nl"}],[{format:"domain",value:"baydn.com"},{format:"domain",value:"shanbay.com"}],[{format:"domain",value:"shireyishunjian.com"},{format:"domain",value:"yingpianqu.com"}],[{format:"domain",value:"showtimeanytime.com"},{format:"domain",value:"showtime.com"}],[{format:"domain",value:"jhxl.org"},{format:"domain",value:"xn--sgt856gbjl.cc"}],[{format:"domain",value:"smzdm.com"},{format:"domain",value:"zdmimg.com"}],[{format:"domain",value:"softether.org"},{format:"domain",value:"softether-download.com"}],[{format:"domain",value:"soundcloud.com"},{format:"domain",value:"sndcdn.com"}],[{format:"domain",value:"spiceworks.com"},{format:"domain",value:"spiceworksstatic.com"}],[{format:"domain",value:"squirrelvpn.com"},{format:"domain",value:"squirrelgroup.net"}],[{format:"domain",value:"ssl.com"},{format:"domain",value:"sslcom.cn"}],[{format:"domain",value:"stackpath.com"},{format:"domain",value:"stackpath.dev"}],[{format:"domain",value:"startpage.com"},{format:"domain",value:"ixquick.com"}],[{format:"domain",value:"embed-cdn.com"},{format:"domain",value:"streamable.com"}],[{format:"domain",value:"subscene.com"},{format:"full domain",value:"i.jeded.com"}],[{format:"domain",value:"surflite.co"},{format:"domain",value:"surflite.net"}],[{format:"domain",value:"suruga-ya.com"},{format:"domain",value:"suruga-ya.jp"}],[{format:"domain",value:"g1.tagtic.cn"},{format:"domain",value:"xy-log.tagtic.cn"}],[{format:"domain",value:"61.com"},{format:"domain",value:"taomee.com"}],[{format:"domain",value:"tapimg.com"},{format:"domain",value:"taptap.com"}],[{format:"domain",value:"ted.com"},{format:"domain",value:"tedcdn.com"}],[{format:"domain",value:"boringcompany.com"},{format:"domain",value:"x.com"}],[{format:"domain",value:"theinitium.com"},{format:"domain",value:"init.shop"}],[{format:"domain",value:"tiancity.com"},{format:"domain",value:"tiancitycdn.com"}],[{format:"domain",value:"jindidata.com"},{format:"domain",value:"tianyancha.com"}],[{format:"domain",value:"themoviedb.org"},{format:"domain",value:"tmdb.org"}],[{format:"domain",value:"tokyo-sports.co.jp"},{format:"domain",value:"tospo-keiba.jp"}],[{format:"domain",value:"translatewiki.net"},{format:"domain",value:"translatewiki.org"}],[{format:"domain",value:"tuta.io"},{format:"domain",value:"tutanota.com"}],[{format:"domain",value:"openkylin.top"},{format:"domain",value:"ubuntukylin.com"}],[{format:"domain",value:"udemy.com"},{format:"domain",value:"udemycdn.com"}],[{format:"domain",value:"vaptcha.com"},{format:"domain",value:"vaptcha.net"}],[{format:"domain",value:"mox.moe"},{format:"domain",value:"vol.moe"}],[{format:"domain",value:"wanfangdata.com.cn"},{format:"domain",value:"wf.pub"}],[{format:"domain",value:"watchout.tw"},{format:"domain",value:"waa.tw"}],[{format:"domain",value:"wdfiles.com"},{format:"domain",value:"wikidot.com"}],[{format:"domain",value:"wamawama.com"},{format:"domain",value:"wiwide.com"}],[{format:"domain",value:"wwe.com"},{format:"domain",value:"wwe9.com"}],[{format:"domain",value:"xda-developers.com"},{format:"domain",value:"xda-cdn.com"}],[{format:"domain",value:"xhscdn.com"},{format:"domain",value:"xiaohongshu.com"}],[{format:"domain",value:"ximalaya.com"},{format:"domain",value:"xmcdn.com"}],[{format:"domain",value:"xvideos-cdn.com"},{format:"domain",value:"xvideos.com"}],[{format:"domain",value:"startupschool.org"},{format:"domain",value:"ycombinator.com"}],[{format:"domain",value:"yjcontentdelivery.com"},{format:"domain",value:"youjizz.com"}],[{format:"domain",value:"zeplin.dev"},{format:"domain",value:"zeplin.io"}],[{format:"domain",value:"zhihu.com"},{format:"domain",value:"zhimg.com"}],[{format:"domain",value:"ziroom.com"},{format:"domain",value:"ziroomapartment.com"}],[{format:"domain",value:"zynga.com"},{format:"domain",value:"zyngaplayersupport.com"}],[{format:"domain",value:"kinopoisk.ru"},{format:"domain",value:"kp.yandex.net"}],[{format:"domain",value:"rutracker.org"},{format:"domain",value:"static.t-ru.org"}],[{format:"domain",value:"target.com"},{format:"domain",value:"targetimg1.com"}],[{format:"domain",value:"zattoo.com"},{format:"domain",value:"zahs.tv"}]].map((a=>{const o=[],m=[],e=[];for(const{format:t,value:i}of a)switch(t){case"domain":o.push(i);break;case"full domain":m.push(i);break;case"regex":e.push(new RegExp(i))}return{domain:o,fullDomain:m,regex:e}})),{_:gm}=self,bm=Object.freeze(["corp","dns","eth","home","ip","intra","intranet","local","onion","tenet","discordapp.io","edit.boxlocalhost.com","localhost.megasyncloopback.mega.nz","localhost.wwbizsrv.alibaba.com","localtest.me","lvh.me","spotilocal.com","vcap.me","www.amazonmusiclocal.com","bmetrics.org","google-analytics.com","secure.gate2shop.com","cdn.safecharge.com","paddle.com"]),hm=({availableServerUrls:a,proxyDomains:o,servers:m})=>{const e=a.map((a=>(a=>{if(!a)return null;if(a.startsWith("about:"))return null;try{let{protocol:o,hostname:m}=new URL(a);return["http:","https:"].includes(o)?m:null}catch(a){return null}})(a))),t=new Set;for(const a of m.values())for(const{host:o}of a)t.add(o.split(".").slice(-2).join("."));for(const a of e)"browsec.com"!==a&&t.add(a);for(const a of o)t.add(a);return bm.concat(Array.from(t))},{_:ym}=self,km=(a,o)=>{const m=ym.groupBy(a,(({host:a})=>{if(!o.length)return"unchecked";let m=o.find((o=>o.host===a));return m?m.valid?"working":"non-working":"unchecked"})),e={"non-working":ym.shuffle(m["non-working"]||[]),unchecked:ym.shuffle(m.unchecked||[]),working:ym.shuffle(m.working||[])};let t=[].concat(e.working,e.unchecked,e["non-working"]).map((({port:a,host:o})=>`HTTPS ${o}:${a}`));return"undefined"==typeof browser&&(t=t.slice(0,10)),t},wm=async()=>{const a=await g.Z.getStateAsync(),{proxyServers:o,user:m,userPac:e}=a,t="proxy"===e.mode?e.country:null,i=await ma.Z.get("availableServerList")||f().apiServerUrls.map((a=>a+"v1")),n=await ma.Z.get("pingsRaw")||[],r=m.premium?a.proxyDomains.premium:a.proxyDomains.free,l=new Map,d={};for(const[e,t]of o){if(t.premium){const o=[];for(const m of a.proxyDomains.premium)for(const{prefix:a,port:e}of t.premium)o.push({host:a+"."+m,port:e});d[e]=km(o,n)}const o=m.premium?t.premium:t.free;if(!o)continue;const i=[];for(const a of r)for(const{prefix:m,port:e}of o)i.push({host:m+"."+a,port:e});l.set(e,i)}const u=hm({availableServerUrls:i,proxyDomains:a.proxyDomains.free.concat(a.proxyDomains.premium),servers:l}),c={};for(const[a,o]of l)c[a]=km(o,n);const v=(({countries:a,defaultCountry:o,filters:m})=>{const e=[];for(const{disabled:t,country:i,format:n,proxyMode:r,value:l}of m)t||e.push({format:n,value:l instanceof RegExp?l.toString().slice(1,-1):l,country:r?a.includes(i)?i:o:void 0});const t=e.map((({format:a,value:o,country:m})=>({format:a,value:o,country:m,priority:1})));for(const{value:a,country:o}of e)if("string"==typeof a)for(const{domain:m,fullDomain:e,regex:i}of pm)if(m.includes(a)||e.includes(a)){for(const e of m)e!==a&&t.push({format:"domain",value:e,country:o,priority:0});for(const m of e)m!==a&&t.push({format:"full domain",value:m,country:o,priority:0});for(const a of i)t.push({format:"regex",value:a.toString().slice(1,-1),country:o,priority:0})}t.sort(((a,o)=>o.priority-a.priority));const i=gm.uniqBy(t,(({value:a})=>a)).sort(s);for(const a of i)delete a.priority;return i})({countries:Object.keys(c),defaultCountry:"fi",filters:e.filters});g.Z.dispatch({type:"Low level PAC: update",data:{countries:c,globalReturn:t,ignoredDomains:u,premiumCountries:d,siteFilters:v}})};m(8363);const xm="/*global dnsDomainIs, isPlainHostName, isInNet, isInNetEx, __Countries__, __IgnoreDomains__, __SiteFilters__, __GlobalReturn__ */\n/**\nNOTE Never use dnsResolve!*/\nconst countries = __Countries__;\nconst globalReturn = __GlobalReturn__;\nconst siteFilters = __SiteFilters__.map(({\n  format,\n  value,\n  country\n}) => {\n  if (format === 'regex') value = new RegExp(value);\n  return {\n    format,\n    value,\n    country\n  };\n});\nconst ipRanges = [['0.0.0.0', '255.0.0.0'], ['10.0.0.0', '255.0.0.0'], ['127.0.0.0', '255.0.0.0'], ['169.254.0.0', '255.255.0.0'], ['172.16.0.0', '255.240.0.0'], ['192.0.2.0', '255.255.255.0'], ['192.88.99.0', '255.255.255.0'], ['192.168.0.0', '255.255.0.0'], ['198.18.0.0', '255.254.0.0'], ['224.0.0.0', '240.0.0.0'], ['240.0.0.0', '240.0.0.0']];\nfunction FindProxyForURL(url, host) {\n  // eslint-disable-line\n  host = host.toLowerCase();\n\n  /** @type {string} */\n  const domain = host.split(':')[0]; // By docs it could contain port, in FF does not contain port\n\n  const domainIs = function (host, domain) {\n    return host === domain || dnsDomainIs(host, '.' + domain);\n  };\n  const directCondition /*: boolean*/ = (() => {\n    if (isPlainHostName(host)) return true;\n    if (typeof isInNetEx !== 'undefined') {\n      if (isInNetEx(host, 'fc00::/7') || isInNetEx(host, 'fe80::/10')) {\n        return true;\n      }\n    }\n    if (!/^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$/.test(host)) {\n      return false;\n    }\n\n    // Don't proxy non-routable addresses (RFC 3330)\n    return ipRanges.some(([start, end]) => isInNet(host, start, end));\n  })();\n  if (directCondition) return 'DIRECT';\n  if (__IgnoreDomains__.some(item => domainIs(host, item))) {\n    return 'DIRECT';\n  }\n\n  // Site filters looping\n  const siteFilter = siteFilters.find(filter => {\n    switch (filter.format) {\n      case 'domain':\n        return domain === filter.value || domain.endsWith('.' + filter.value);\n      case 'full domain':\n        return domain === filter.value;\n      case 'regex':\n        return filter.value.test(domain);\n      default:\n        return false;\n    }\n  });\n  if (!siteFilter) {\n    return globalReturn ? countries[globalReturn] : 'DIRECT';\n  }\n  return siteFilter.country ? countries[siteFilter.country] : 'DIRECT';\n}".replace(/\/\/.*/g,"").replace(/\/\*[\s\S]*?\*\//g,"").replace(/\r/g,"").replace(/\n/g," ").replace(/\s{2,}/g," ").trim(),zm={type:"direct"},_m=a=>{const o=a.split(".").map((a=>Number(a)));return(255&o[0])<<24|(255&o[1])<<16|(255&o[2])<<8|255&o[3]},jm=a=>{if(!/^[0-9a-f:]+$/.test(a))return!1;const o=a.match(/::/g);if(o&&o.length>=2)return!1;return!a.replace(/^::/,"").replace(/::$/,"").replace("::",":").split(":").some((a=>!/^[0-9a-f]{1,4}$/.test(a)))},qm=(a,o,m)=>{let e=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(a);if(null===e)return!1;let t=e.map((a=>Number(a)));if(t[1]>255||t[2]>255||t[3]>255||t[4]>255)return!1;const i=_m(a),n=_m(o),r=_m(m);return(i&r)==(n&r)},Em=(a,o)=>{if(!jm(a))return!1;if(!o.includes("/"))return!1;let[m,e]=o.split("/");if(!jm(m))return!1;let t=Number(e);return!(!t||t<0||t>128)&&(a=$m(a).slice(0,t),m=$m(m).slice(0,t),a===m)},$m=a=>{let o=a=>parseInt(a,16).toString(2).padStart(16,"0");if(!a.includes("::"))return a.split(":").map((a=>o(a))).join("");if(a.endsWith("::")){let m=a.replace(/::$/,"").split(":").map((a=>o(a)));const e=Array(8-m.length).fill("0000000000000000");return m.concat(e).join("")}let m=a.split("::").map((a=>a.split(":").map((a=>o(a)))));const e=m.reduce(((a,o)=>a+o.length),0);m.splice(1,0,Array(8-e).fill("0000000000000000"));return m.flat().join("")},Sm=(()=>{if("undefined"==typeof browser)return a=>{};let a=[],o={},m=zm,e=[];return yo().proxy.onRequest.addListener((({fromCache:t,url:i})=>{let n;try{n=new URL(i)}catch(a){return zm}let{hostname:r,protocol:l}=n;if(!["ftp:","http:","https:","wss:"].includes(l))return zm;const d=(()=>{const a=(a=>-1===a.search("\\."))(r),o=/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(r)?r:null,m=o&&(qm(o,"0.0.0.0","255.0.0.0")||qm(o,"10.0.0.0","255.0.0.0")||qm(o,"127.0.0.0","255.0.0.0")||qm(o,"169.254.0.0","255.255.0.0")||qm(o,"172.16.0.0","255.240.0.0")||qm(o,"192.0.2.0","255.255.255.0")||qm(o,"192.88.99.0","255.255.255.0")||qm(o,"192.168.0.0","255.255.0.0")||qm(o,"198.18.0.0","255.254.0.0")||qm(o,"224.0.0.0","240.0.0.0")||qm(o,"240.0.0.0","240.0.0.0")),e=Em(r,"fc00::/7")||Em(r,"fe80::/10");return Boolean(a||m||e)})();if(d)return zm;if(t)return zm;if(a.some((a=>((a,o)=>a===o||((a,o)=>a.length>=o.length&&a.substring(a.length-o.length)===o)(a,"."+o))(r,a))))return zm;const u=p(e,r);return u&&u.country?o[u.country]:m}),{urls:["<all_urls>"]}),t=>{const{browsecCountry:i}=t;a=t.ignoredDomains,o=Object.fromEntries(Object.entries(Object.assign({},t.premiumCountries,t.countries)).map((([a,o])=>{const m=[];for(const a of o){let[o,e]=a.split(" ");const t=o.toLowerCase();if("https"!==t&&"proxy"!==t&&"socks"!==t)continue;const[i,n]=e.split(":");m.push({type:t,host:i,port:n,failoverTimeout:15})}return[a,m]}))),e=t.siteFilters.slice(),i&&e.push({format:"domain",country:i,value:"browsec.com"}),m=t.globalReturn?o[t.globalReturn]:zm}})(),Cm=a=>{"undefined"==typeof browser?(async a=>{const{browsecCountry:o,countries:m,globalReturn:e,ignoredDomains:t,premiumCountries:i,siteFilters:n}=a;if(o||e||n.length){const a=Object.fromEntries(Object.entries(Object.assign({},i,m)).map((([a,o])=>[a,o.join("; ")]))),r=n.slice();o&&r.push({format:"domain",country:o,value:"browsec.com"});const l=xm.replace(/__Countries__/g,JSON.stringify(a)).replace(/__IgnoreDomains__/g,JSON.stringify(t)).replace(/__GlobalReturn__/g,JSON.stringify(e)).replace(/__SiteFilters__/g,JSON.stringify(r));await yo().proxy.settings.set({scope:"regular",value:{mode:"pac_script",pacScript:{data:l}}})}else await yo().proxy.settings.clear({scope:"regular"})})(a):Sm(a)},{_:Pm}=self,Bm=Object.freeze(["controllable_by_this_extension","controlled_by_this_extension"]),Im=async()=>{if("undefined"!=typeof browser)return!0;const{levelOfControl:a}=await yo().proxy.settings.get({incognito:!1});return Bm.includes(a)},Zm=async()=>{const{lowLevelPac:a}=await g.Z.getStateAsync();await Cm(a)};window.addCountrySelectMask=async()=>{x.Z.track("onboarding_countries");const a=document.querySelector("div.MainContainer");let o;try{const a=document.querySelector("page-switch");await a.updateComplete;const m=a.shadowRoot.querySelector("main-index");await m.updateComplete,o=m.shadowRoot.querySelector("index-home"),await o.updateComplete}catch(a){return}const m=(()=>{try{return o.shadowRoot.querySelector("active-country")}catch(a){return null}})();if(!a||!m)return;const t=self.innerWidth,i=self.innerHeight,n=m.getBoundingClientRect(),r=m.offsetHeight,l=m.offsetWidth,d=m.offsetHeight+30,u=um({block:{width:t,height:i},rectangle:{x:t/2-m.offsetWidth/2-15,y:n.y-15,height:d,width:m.offsetWidth+30}}),{userPac:c,ping:f}=await g.Z.getStateAsync(),v=c.country,s=document.createElement("active-country");s.country=v,s.countryName=v?(0,e.Z)("country_name_"+v.toUpperCase()):"",s.rating=(()=>{var a;if(f.length&&v)return null===(a=f.find((({country:a,premium:o})=>a===v&&!o)))||void 0===a?void 0:a.mark})(),s.style.cssText=`text-align: center;position: absolute;top: ${n.y}px;left: ${(t-l)/2}px;right: ${(t-l)/2}px;cursor: pointer;`;const p=document.createElement("first-start-tips-country-select");p.style.cssText=u,p.bottom=i-n.y+(d-r)/2+6,s.addEventListener("click",(async()=>{x.Z.track("onboarding_countries_click"),ma.Z.set("startup tips: country select: phase",2),m.click(),a.style.cssText="",p.remove(),s.remove()})),p.addEventListener("close",(async()=>{x.Z.track("onboarding_countries_close"),ma.Z.set("startup tips: country select: phase",2),await Promise.all([dm(p),lm({setValue:o=>{a.style.cssText=o+u},setEndValue:()=>{a.style.cssText=""}})]),s.remove()})),a.style.cssText="filter: blur(3px);"+u,document.body.append(p),document.body.append(s)},window.language="en";const Lm=(async()=>{if("ru"!==navigator.language.slice(0,2))return"en";const[a,o]=await Promise.all([ma.Z.get("Experiment 348: variant"),ma.Z.get("Experiment 348: phase")]);return 0!==o||1!==a?"en":(window.language="ru",document.documentElement.setAttribute("lang","ru"),document.documentElement.lang="ru","ru")})();x.Z.track("popup_open");if((()=>{const a="ontouchstart"in window||navigator.maxTouchPoints>0,o=/android [0-9]/i.test(navigator.userAgent)||/iphone;/i.test(navigator.userAgent)||/ipad;/i.test(navigator.userAgent)||/ipod;/i.test(navigator.userAgent);return a&&o})()){const a=document.querySelector(".MainContainer");if(document.body.classList.add("fullScreen"),a)if("undefined"!=typeof browser)a.classList.add("fullScreen");else{const o=window.screen.width*window.devicePixelRatio;a.style.cssText=`width:${o}px;`}}{const a=String(Math.floor(1e9*Math.random()));yo().runtime.connect({name:"popup connection "+a}).onMessage.addListener((a=>{"close"===a&&window.close()}))}(async()=>{const a=new sm("Popup: page load"),o={domainZoneList:new fm.Z,storeState:g.Z.ready};{const a=new sm("Popup: domainZoneList");o.domainZoneList.then((()=>{a.end()}))}{const a=new sm("Popup: store.ready");o.storeState.then((()=>{a.end()}))}let m;(async()=>{const a=await yo().storage.local.get(null);m=a,Array.isArray(a.domainZoneList)&&o.domainZoneList.resolve(a.domainZoneList),g.Z.initiate({type:"storage",value:a})})(),(async()=>{const a=await(0,E.Z)({type:"domain zone list"});o.domainZoneList.resolve(a)})(),(async()=>{const a=await(0,E.Z)({type:"store: get state"});g.Z.initiate({type:"store state",value:a})})();const e=await o.domainZoneList,t=await o.storeState;Object.assign(self,{domainZoneList:e});const i=new sm("Popup: firstPopupOpen"),n=m?m.firstPopupOpen:await ma.Z.get("firstPopupOpen");i.end();const r=new sm("Popup: get control state"),l=await(async()=>{if("undefined"!=typeof browser||!t.proxyIsBroken)return!0;return!!await Im()&&(await wm(),await Zm(),!0)})();if(r.end(),(0,E.Z)({type:"popup open"}),"index:home"!==g.Z.getStateSync().page&&g.Z.dispatch({type:"Page: set",page:"index:home"}),"installed"===n){u.Z.partial({category:"extension",action:"first_popup_open"});const a=m?m.installVersion:await ma.Z.get("installVersion");if("string"==typeof a&&((a,o,m)=>{const e=(()=>{if(a===m)return 0;let o=a.split(".").map((a=>Number(a))),e=m.split(".").map((a=>Number(a))),t=Math.min(o.length,e.length);for(let a=0;a<t;a++){if(o[a]>e[a])return 1;if(o[a]<e[a])return-1}return o.length>e.length?1:o.length<e.length?-1:0})();switch(o){case"<":return e<0;case">":return e>0;case"<=":return e<=0;case">=":return e>=0;case"===":return 0===e}})(a,">=","3.28.6")){u.Z.full({category:"onboarding",action:"first_popup_open",label:yo().runtime.getManifest().version}),x.Z.track("first_popup_open");const{experiments:a}=t;(async()=>{0===await ma.Z.get("First start tips: phase")&&ma.Z.set("First start tips: phase",1)})();{const o=a[f().experiments.premiumComparisonOnFirstPopup.id],m=await ma.Z.get("Experiment 262: ignore");o&&!m&&u.Z.full({category:"Exp262_first_popup_open",action:ia(Number(o)),label:yo().runtime.getManifest().version})}}ma.Z.set("firstPopupOpen","fulfilled")}(async()=>{(m?m.emptyReserveDomains:await ma.Z.get("emptyReserveDomains"))&&ma.Z.set("emptyReserveDomains",!1)})(),await Lm,(()=>{const o=document.querySelector("div.MainContainer");if(!o)return;const m=new sm("Popup: append elements"),e=["main-head","page-switch"];l||e.push("popup-proxy-blocked"),e.forEach((a=>{o.append(document.createElement(a))})),(async()=>{if(!l)return!1;const a="number"==typeof await ma.Z.get("First start tips: phase");!await ma.Z.get("startup tips shown")&&a&&"installed"===n&&cm()})(),m.end(),a.end(),(async()=>{const{experiments:a,userPac:m}=t,e=a[f().experiments.premiumOverlayOnPopupOpen.id];if(!e)return;const i=e?ia(Number(e)):void 0,{"Experiment 252: checkbox checked":n,"Experiment 252: ignore":r}=await yo().storage.local.get(["Experiment 252: ignore","Experiment 252: checkbox checked"]);if(r)return;if("direct"!==m.mode)return;let l=await ma.Z.get("Experiment 252: show count")||0;if(l++,ma.Z.set("Experiment 252: show count",l),u.Z.full({category:"Exp252_Popup_open",action:i}),n)return;if(l<2)return;if("0"===e)return;u.Z.full({category:"Exp252_Openoffer_show",action:i,label:String(l-1)});const d=document.createElement("onstart-premium-overlay");d.view=e,d.showCount=l,o.append(d)})(),(async()=>{const a=f().experiments.premiumComparisonOnFirstPopup.id,{experiments:m}=t,e=m[a];if(!e||"0"===e)return;if(await ma.Z.get("Experiment 262: ignore"))return;if(await ma.Z.get("Experiment 262: shown"))return;const i=ia(Number(e));u.Z.full({category:"Exp262_Screen1_show",action:i});const n=document.createElement("popup-buy-premium");n.mode=(()=>{switch(e){case"1":return"standard";case"2":return"with price";case"3":return"continue"}})(),o.append(n)})(),(async()=>{const a=f().experiments.freeServersOverloaded.id,o=(()=>{const{experiments:a,ignoredExperiments:o}=t;return Object.fromEntries(Object.entries(a).filter((([a])=>!o.includes(a))))})(),m=o[a];if(!m)return;const{user:e}=t;if("1"!==m||e.premium)return;const i=await ma.Z.get("freeServersOverloaded");if(g.Z.onChange((({page:a})=>a),(async(a,o,{user:m})=>{if("login"===a){const a=document.querySelector("free-servers-overloaded");a&&a.remove()}if("index:home"===a&&"login"===o){if(m.premium)return;const a=await ma.Z.get("freeServersOverloaded");if("number"==typeof a){const o=Date.now();if(o<a){const m=a-o;await ta(m)}}}})),"number"==typeof i){const a=Date.now();if(a<i){const o=i-a;await ta(o),await w.enable()}}})()})()})(),self.onerror=(a,o,m)=>((0,E.Z)({type:"popup error",data:{message:a,fileName:o,lineNumber:m}}),!1),qa.addListener((a=>{(async a=>{"custom"===(null==a?void 0:a.type)&&(await new Promise((a=>{setTimeout(a,2e3)})),(0,E.Z)({type:"personal banner view",id:a.promotionId}))})(a)}))}},m={};function e(a){var t=m[a];if(void 0!==t)return t.exports;var i=m[a]={exports:{}};return o[a](i,i.exports,e),i.exports}e.m=o,a=[],e.O=(o,m,t,i)=>{if(!m){var n=1/0;for(u=0;u<a.length;u++){for(var[m,t,i]=a[u],r=!0,l=0;l<m.length;l++)(!1&i||n>=i)&&Object.keys(e.O).every((a=>e.O[a](m[l])))?m.splice(l--,1):(r=!1,i<n&&(n=i));if(r){a.splice(u--,1);var d=t();void 0!==d&&(o=d)}}return o}i=i||0;for(var u=a.length;u>0&&a[u-1][2]>i;u--)a[u]=a[u-1];a[u]=[m,t,i]},e.n=a=>{var o=a&&a.__esModule?()=>a.default:()=>a;return e.d(o,{a:o}),o},e.d=(a,o)=>{for(var m in o)e.o(o,m)&&!e.o(a,m)&&Object.defineProperty(a,m,{enumerable:!0,get:o[m]})},e.o=(a,o)=>Object.prototype.hasOwnProperty.call(a,o),e.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.j=42,(()=>{var a={42:0};e.O.j=o=>0===a[o];var o=(o,m)=>{var t,i,[n,r,l]=m,d=0;if(n.some((o=>0!==a[o]))){for(t in r)e.o(r,t)&&(e.m[t]=r[t]);if(l)var u=l(e)}for(o&&o(m);d<n.length;d++)i=n[d],e.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return e.O(u)},m=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];m.forEach(o.bind(null,0)),m.push=o.bind(null,m.push.bind(m))})();var t=e.O(void 0,[592],(()=>e(8772)));t=e.O(t)})();