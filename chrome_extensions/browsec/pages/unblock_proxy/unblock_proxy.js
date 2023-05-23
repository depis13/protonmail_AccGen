(()=>{"use strict";var e,t={2499:(e,t,n)=>{var o=n(8897);const i=Object.assign(((...e)=>{(0,o.Z)({type:"log",data:e}),console.log.apply(console,e)}),{warn:(...e)=>{(0,o.Z)({type:"log.warn",data:e}),console.warn.apply(console,e)},error:(...e)=>{(0,o.Z)({type:"log.error",data:e}),console.error.apply(console,e)}});var s=n(6194),r=n(7350),a=n(5693),c=n(7718);const d=Object.fromEntries(Object.entries({becauseYourProxySettingsAreBlocked:"because_your_proxy_settings_are_blocked",browsecIsEnabled:"browsec_is_enabled",cantSetupSecureConnection:"cant_setup_secure_connection",contactSupport:"contact_support",continueUsingBrowsecToOpenWebsites:"continue_using_browsec_to_open_websites",disableSelectedExtensions:"disable_selected_extensions",fixProxySettings:"fix_proxy_settings",pleaseTryAgainOrContactSupport:"please_try_again_or_contact_support",selectAllowInPopupWindow:"select_allow_in_popup_window",somethingWentWrong:"something_went_wrong",tryAgain:"try_again",yourProxySettingsAreBlocked:"your_proxy_settings_are_blocked"}).map((([e,t])=>[e,(0,a.Z)(t)])));function l(){const e=window.language;return c.dy`
  <style>
  :host{
    display: block;
    min-height: 100%;
    height: 100%;
  }

  table{
    border-collapse: collapse;
  }
  td, th{
    padding: 0;
  }

  a{
    color:#1c304e;
    text-decoration: none;
  }
  a:hover,
  a:focus{
    color:#1c304e;
    text-decoration: underline;
  }

  p{
    padding: 0;
    margin: 0 0 20px;
  }

  .Head{
    background:#1c304e;
    color:#fff;
    border-bottom: 2px solid #eeeeee;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .Head > .In{
    padding:14px 20px;
    margin: 0 auto;
  }
  .Head > .In::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }
  @media (min-width: 768px){
    .Head > .In{
      width: 750px;
    }
  }
  @media (min-width: 992px){
    .Head > .In{
      width: 970px;
    }
  }
  @media (min-width: 1200px){
    .Head > .In{
      width: 1170px;
    }
  }

  .Logo{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .Logo > .In{
    display: table;
  }
  .Logo > .In > .L{
    display: table-cell;
    vertical-align: middle;
  }
  .Logo > .In > .R{
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
  }
  .Logo a{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    text-indent: -9999px;
    font-size: 0;
  }
  .Logo_Ball{
    background: url( '/images/logo_ball.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 46px;
    padding-top: 46px;
    height: 0;
    overflow: hidden;
  }
  .Logo_Text{
    height: 0;
    overflow: hidden;
    background: url( '/images/logo_text.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 85px;
    padding-top: 14px;
  }

  .Body{
    display: table;
    width: 100%;
    height: 100%;
  }
  .Body > .In{
    display: table-cell;
    vertical-align: middle;
    padding: 0 72px;
  }

  .Box{
    width: 820px;
    max-width: 90%;
    box-sizing: border-box;
    padding: 45px;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: 0 auto;
  }
  .Box.warning{
    border-color: #a9b0b5;
  }

  /** All successfully saved */
  .Box.success{
    border-color: var( --brand-green );
    text-align: center;
  }
  .Box_Success_Ok{
    font-size: 22px;
    line-height: 50px;
    padding-bottom: 15px;
    color: var( --brand-green );
    text-transform: uppercase;
  }
  .Box_Success_Ok > .In{
    display: inline-block;
    padding-left: 70px;
    position: relative;
  }
  .Box_Success_Ok > .In::after{
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 24px);
    left: 0;
    width: 48px;
    padding-top: 48px;
    height: 0;
    overflow: hidden;
    background: url( '/images/unblock_proxy/checked.svg' ) no-repeat 0 0;
    background-size: 100% 100%;
  }
  .Box_Success_Text{
    color: #7a7c7f;
  }

  .Box.error{
    border-color: var( --brand-burgundy );
    text-align: center;
  }
  .Box_Error_ErrorText{
    font-size: 22px;
    line-height: 50px;
    text-transform: uppercase;
    padding-bottom: 15px;
    color: var( --brand-burgundy );
  }
  .Box_Error_ErrorText > .In{
    display: inline-block;
    position: relative;
    padding-left: 70px;
  }
  .Box_Error_ErrorText > .In::after{
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 24px);
    left: 0;
    width: 48px;
    padding-top: 48px;
    height: 0;
    overflow: hidden;
    background: url( '/images/unblock_proxy/error.svg' ) no-repeat 0 0;
    background-size: 100% 100%;
  }
  .Box_Error_Text{
    color: #7a7c7f;
  }
  

  .SettingsBlocked{
    color: #7a7c7f;
    text-align: center;
  }
  .SettingsBlocked_Title{
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight:400;
    text-transform: uppercase;
    font-size: 22px;
    color: #7a7c7f;
    text-align: center;
    padding: 0 0 30px;
  }
  .SettingsBlocked_Title:after{
    content: '';
    display: block;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:4px;
    width: 100px;
    margin: 15px auto 0;
    background: var( --brand-green );
  }
  .SettingsBlocked_Advice{
    padding-top: 20px;
    font-size: 14px;
  }

  .Extensions table{
    margin: 0 auto;
  }
  .Extensions table>tbody>tr+tr>td{
    padding-top: 7px;
  }
  .Extensions td.Extensions_Square{
    width: 1px;
    padding-right: 10px;
  }
  .Extensions_Square>.In{
    display: table;
    height: 38px;
  }
  .Extensions_Square>.In>.In{
    display: table-cell;
    vertical-align: middle;
  }
  .Extensions_Square input[type="checkbox"]{
    display: block;
    width: 13px;
    height: 13px;
    margin: 0 auto;
  }
  .Extensions_Square img{
    display: block;
    margin: 0 auto;
  }
  .Extensions_Name{
    font-size: 14px;
  }
  .Extensions_Button{
    text-align: center;
    padding-top: 30px;
  }

  .ContactSupport{
    font-size: 12px;
    margin-bottom: -10px;
  }
  .ContactSupport a{
    position: relative;
    padding-left: 30px;
    text-decoration: underline;
  }
  .ContactSupport a::after{
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 15px / 2);
    left: 0;
    background: url( '/images/unblock_proxy/email.svg' ) no-repeat 0 center;
    background-size: 100% 100%;
    width: 20px;
    padding-top: 15px;
    height: 0;
    overflow: hidden;
  }

  .btn{
    box-shadow: none;
    box-sizing: border-box;
    display: inline-block;
    font-weight: normal;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background: none;
    background-color: var( --brand-green );
    padding: 10px 30px;
    border-radius: 4px;
    border: none;
    -webkit-user-select: none;
    user-select: none;
    color: #66717e;
    font-size: 18px;
    color: #FFF;
    cursor: pointer;
    transition: background-color .3s;
  }
  .btn:focus{
    outline: none;
  }
  .btn.try-again{
    background: #1c304e;
    margin: 20px 0 10px;
    width: 300px;
  }
  </style>

  <div class="Head"><div class="In">
    <div class="Logo">
      <div class="In">
        <div class="L"><div class="Logo_Ball"></div></div>
        <div class="R"><div class="Logo_Text"></div></div>
      </div>
      <a href="${this.logoUrl}">Browsec</a>
    </div>
  </div></div>

  <div class="Body"><div class="In">
    ${(()=>{switch(this.mode){case"information":return c.dy`
    <div class="Box warning">
    ${(()=>this.hasManagement?c.dy`
      <div class="Extensions">
        <table><tbody>
      ${this.extensions.map((e=>c.dy`
          <tr>
            <td class="Extensions_Square"><div class="In"><div class="In">
              <input type="checkbox" ?checked="${e.checked}" @change="${this.extensionCheckbox}"/>
            </div></div></td>
            <td class="Extensions_Square"><div class="In"><div class="In">
              ${e.icon?c.dy`<img src="${e.icon}" />`:""}
            </div></div></td>
            <td><div class="Extensions_Name">${e.name}</div></td>
          </tr>`))}
        </tbody></table>
        <div class="Extensions_Button"><button class="btn" @click="${this.disableExtensions}">${"en"===e?d.disableSelectedExtensions:"Отключить выбранные расширения"}</button></div>
      </div>`:c.dy`
      <div class="SettingsBlocked">
        <div class="SettingsBlocked_Title">${"en"===e?d.yourProxySettingsAreBlocked:"Ваши настройки прокси блокируются другим расширением"}</div>
        <p>
          ${"en"===e?d.cantSetupSecureConnection:"Browsec не может установить безопасное соединение в вашем браузере."}<br/>
          ${"en"===e?d.becauseYourProxySettingsAreBlocked:"Доступ к настройкам прокси блокируются другим расширением."}
        </p>

        <div>
          <div><button class="btn" @click="${this.scanExtensions}">${"en"===e?d.fixProxySettings:"Исправить настройки прокси"}</button></div>
          <div class="SettingsBlocked_Advice">${"en"===e?d.selectAllowInPopupWindow:'Нажмите "Разрешить" во всплывающем окне'}</div>
        </div>
      </div>`)()}
    </div>`;case"success":return c.dy`
    <div class="Box success">
      <div class="Box_Success_Ok"><div class="In">${"en"===e?d.browsecIsEnabled:"Browsec снова работает"}</div></div>
      <div class="Box_Success_Text">${"en"===e?d.continueUsingBrowsecToOpenWebsites:"Вы можете продолжить использование Browsec. Спасибо!"}</div>
    </div>`;case"error":return c.dy`
    <div class="Box error">
      <div class="Box_Error_ErrorText"><div class="In">${"en"===e?d.somethingWentWrong:"Что-то пошло не так..."}</div></div>
      <div class="Box_Error_Text">${"en"===e?d.pleaseTryAgainOrContactSupport:"Попробуй ещё раз или напиши в поддержку Browsec."}</div>
      <div><button class="try-again btn" @click="${this.scanExtensions}">${"en"===e?d.tryAgain:"Повторить"}</button></div>
      <div class="ContactSupport">
        <a href="${this.contactSupportUrl}" target="_blank">${"en"===e?d.contactSupport:"Написать в поддержку Browsec"}</a>
      </div>
    </div>`;default:return""}})()}
  </div></div>`}var p=n(1031);const{_:g}=self,u=async()=>{if(!await new Promise((e=>{chrome.permissions.request({permissions:["management"]},e)})))throw new Error("Management permission is not granted");if("function"!=typeof chrome.management.getAll){const e=document.createElement("iframe");e.id="managementIframe",await new Promise((t=>{e.addEventListener("load",(()=>{t()})),e.style.cssText="position:absolute;top:-5000px;left:-5000px;width:1px;height:1px;",e.src="/pages/management/management.html",document.body.append(e)}))}},x=async()=>{let{success:e,error:t}=await(0,o.Z)({type:"proxy disable broken mode"});if(e)return e;let{message:n}=t,i=new Error(n);throw Object.keys(t).forEach((e=>{i[e]=t[e]})),i};class m extends c.oi{render(){return l.call(this)}static get properties(){return{contactSupportUrl:{type:String},extensions:{type:Array},hasManagement:{type:Boolean},logoUrl:{type:String},mode:{type:String}}}get contactSupportUrl(){return this.browsecLink(s.Z.contactUs)}constructor(){super(),this.extensions=[],this.hasManagement=!1,this.logoUrl="",this.mode="information",(async()=>{let e=await r.Z.getStateAsync();this.browsecLink=(t,n=(e=>e))=>(0,p.Z)(t,(t=>Object.assign(n(t),{instd:e.daysAfterInstall}))),this.logoUrl=this.browsecLink("https://browsec.com/?utm_source=chromium+extension&utm_medium=logo_link&utm_campaign=default_campaign")})()}async firstUpdated(e){super.firstUpdated(e);let{permissions:t}=await new Promise((e=>{chrome.permissions.getAll(e)}));t.includes("management")&&(this.hasManagement=!0,this.getExtensionsList())}async disableExtensions(){let e=this.extensions.filter((({checked:e})=>e));if(0===e.length)return void(0===this.extensions.length&&(x(),this.mode="success"));await u();let t=e.map((({id:e})=>new Promise((t=>{const n=(()=>{if("function"==typeof chrome.management.setEnabled)return chrome;const e=document.querySelector("#managementIframe");return e?e.contentWindow.chrome:void 0})();n&&n.management.setEnabled(e,!1,t)}))));try{await Promise.all(t);try{await x(),this.mode="success"}catch(e){this.mode="error"}}catch(e){this.mode="error",i.error("Unblock proxy error: ",e)}}extensionCheckbox({model:e,target:{checked:t}}){let n=e.get("item"),o=this.extensions.indexOf(n),i=g.cloneDeep(this.extensions);i[o].checked=t,this.extensions=i}async getExtensionsList(){let e=await new Promise((e=>{const t=(()=>{if("function"==typeof chrome.management.getAll)return chrome;const e=document.querySelector("#managementIframe");return e?e.contentWindow.chrome:void 0})();t&&t.management.getAll(e)}));const t=[];for(const{enabled:n,icons:o,id:i,name:s,permissions:r}of e){if(!r.includes("proxy"))continue;if(chrome.runtime.id===i)continue;if(!n)continue;const e={checked:!0,id:i,name:s},a=o[1]||o[0];null!=a&&a.url&&(e.icon=`chrome://favicon/size/38/chrome-extension://${i}/`),t.push(e)}this.extensions=t}async scanExtensions(){let e=async()=>{await u(),"information"!==this.mode&&(this.mode="information"),this.hasManagement=!0,this.getExtensionsList()};if(await(0,o.Z)({type:"proxy.isControlled"}))try{await x(),this.mode="success"}catch(t){e()}else e()}}customElements.define("main-block",m);var h=n(2338);document.title=(0,a.Z)("your_proxy_settings_are_blocked"),(async()=>{var e;await r.Z.initiate();const t=await(async()=>{if("ru"!==navigator.language.slice(0,2))return"en";const[e,t]=await Promise.all([h.Z.get("Experiment 348: variant"),h.Z.get("Experiment 348: phase")]);return 0!==t||1!==e?"en":"ru"})();window.language=t,"ru"===t&&(document.documentElement.setAttribute("lang","ru"),document.title="Ваши настройки прокси блокируются другим расширением");const n=document.querySelector("div.main");null==n||null===(e=n.append)||void 0===e||e.call(n,document.createElement("main-block"))})()}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,n,i,s)=>{if(!n){var r=1/0;for(l=0;l<e.length;l++){for(var[n,i,s]=e[l],a=!0,c=0;c<n.length;c++)(!1&s||r>=s)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(a=!1,s<r&&(r=s));if(a){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,i,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=988,(()=>{var e={988:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,s,[r,a,c]=n,d=0;if(r.some((t=>0!==e[t]))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(c)var l=c(o)}for(t&&t(n);d<r.length;d++)s=r[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(l)},n=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[592],(()=>o(2499)));i=o.O(i)})();