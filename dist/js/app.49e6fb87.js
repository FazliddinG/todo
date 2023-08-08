(function(){"use strict";var e={6021:function(e,t,n){var o=n(9242),a=n(3396);function i(e,t,n,i,l,s){const r=(0,a.up)("Header"),d=(0,a.up)("Notes"),c=(0,a.up)("Modal"),u=(0,a.up)("AddButton");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{onGetSearch:t[0]||(t[0]=e=>l.search=e),lang:l.lang,onChangeLang:s.changeLang},null,8,["lang","onChangeLang"]),(0,a.Wm)(d,{notes:s.filterNotes,onDelNote:s.delNote,onChangeNote:s.changeNote,lang:l.lang},null,8,["notes","onDelNote","onChangeNote","lang"]),(0,a.wy)((0,a.Wm)(c,{onCloseModal:s.closeModal,currentId:l.currentId,onAddNote:s.addNote,edit:l.edit,editNote:l.editNote,onEditedNote:s.editedNote,lang:l.lang},null,8,["onCloseModal","currentId","onAddNote","edit","editNote","onEditedNote","lang"]),[[o.F8,l.modalOpen]]),(0,a.Wm)(u,{onOpenModal:s.openModal},null,8,["onOpenModal"])])}n(7658);var l=n(7139),s=n.p+"img/search.2c9e71ed.svg",r=n.p+"img/back.014b4ff1.svg",d=n.p+"img/close.1d4d165f.svg";const c={class:"header__content"},u={class:"header__title"},g=(0,a._)("img",{src:s,alt:""},null,-1),h=[g],_={class:"header__form"},p=(0,a._)("img",{src:r,alt:""},null,-1),m=[p],w=["placeholder"],f=(0,a._)("img",{src:d,alt:""},null,-1),b=[f];function v(e,t,n,i,s,r){return(0,a.wg)(),(0,a.iD)("header",{onKeydown:t[6]||(t[6]=(0,o.D2)((e=>s.header=!0),["esc"])),class:"header"},[(0,a.Wm)(o.uT,{name:"header"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",c,["ru"==n.lang?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>r.changeLang&&r.changeLang(...e)),class:"header__lang"},"uz")):((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:t[1]||(t[1]=(...e)=>r.changeLang&&r.changeLang(...e)),class:"header__lang"},"ru")),(0,a._)("h1",u,(0,l.zw)(r.words.appbartitle[n.lang]),1),(0,a._)("button",{onClick:t[2]||(t[2]=e=>s.header=!1),class:"header__search"},h)],512),[[o.F8,1==s.header]])])),_:1}),(0,a.Wm)(o.uT,{name:"header"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",_,[(0,a._)("button",{onClick:t[3]||(t[3]=e=>(s.header=!0,s.search="")),class:"header__back"},m),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>s.search=e),type:"text",class:"header__input container",placeholder:r.words.appbarseacrch[n.lang]},null,8,w),[[o.nr,s.search]]),(0,a._)("button",{onClick:t[5]||(t[5]=e=>s.search=""),class:"header__close"},b)],512),[[o.F8,0==s.header]])])),_:1})],32)}var N={props:{lang:String},data(){return{header:!0,search:""}},methods:{changeLang(){let e="ru"==this.lang?"uz":"ru";this.$emit("changeLang",e)}},created(){window.addEventListener("keyup",(e=>{"Escape"==e.key&&(this.header=!0)}))},watch:{search(e){this.$emit("getSearch",e)}},inject:["words"]},k=n(89);const C=(0,k.Z)(N,[["render",v]]);var y=C,z=n.p+"img/list.4ed3d4be.svg",D=n.p+"img/grid.dbae4039.svg";const O={class:"notes"},M={class:"container"},L={class:"notes__header"},S={class:"notes__title"},j={key:0,src:z,alt:""},I={key:1,src:D,alt:""};function T(e,t,n,o,i,s){const r=(0,a.up)("NotesCard");return(0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("div",M,[(0,a._)("section",L,[(0,a._)("h2",S,(0,l.zw)(n.notes.length>0?s.words.infobar[n.lang]:s.words.noinfobar[n.lang]),1),(0,a._)("button",{onClick:t[0]||(t[0]=e=>i.grid=!i.grid),class:"notes__btn"},[i.grid?((0,a.wg)(),(0,a.iD)("img",j)):((0,a.wg)(),(0,a.iD)("img",I)),(0,a._)("span",null,(0,l.zw)(i.grid?s.words.list[n.lang]:s.words.grid[n.lang]),1)])]),(0,a._)("section",{class:(0,l.C_)([{active:!i.grid},"notes__list"])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.notes,((t,o)=>((0,a.wg)(),(0,a.j4)(r,{grid:i.grid,key:t.id,note:t,onDelNote:n=>e.$emit("delNote",t.id),onChangeNote:n=>e.$emit("changeNote",t.id),lang:n.lang},null,8,["grid","note","onDelNote","onChangeNote","lang"])))),128))],2)])])}var x=n.p+"img/edit.092f5b23.svg",$=n.p+"img/delete.f04c87ff.svg";const E={class:"card"},A={class:"card__title"},Z={class:"card__date"},B={class:"card__desc"},W={class:"card__controls"},F=(0,a._)("img",{src:x,alt:""},null,-1),H=(0,a._)("img",{src:$,alt:""},null,-1);function R(e,t,n,o,i,s){return(0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("div",{class:(0,l.C_)({card__content:!n.grid})},[(0,a._)("h3",A,(0,l.zw)(n.note.title),1),(0,a._)("p",Z,(0,l.zw)(n.note.date),1)],2),(0,a._)("p",B,(0,l.zw)(n.note.desc),1),(0,a._)("div",W,[(0,a._)("button",{onClick:t[0]||(t[0]=t=>e.$emit("changeNote")),class:"card__btn"},[F,(0,a._)("span",null,(0,l.zw)(s.words.editbtn[n.lang]),1)]),(0,a._)("button",{onClick:t[1]||(t[1]=t=>e.$emit("delNote")),class:"card__btn card__btn_red"},[H,(0,a._)("span",null,(0,l.zw)(s.words.deledit[n.lang]),1)])])])}var V={props:{grid:Boolean,note:Object,lang:String},inject:["words"]};const q=(0,k.Z)(V,[["render",R]]);var U=q,G={components:{NotesCard:U},props:{notes:{default:[],type:Array},lang:String},data(){return{grid:!0}},inject:["words"]};const J=(0,k.Z)(G,[["render",T]]);var K=J;const P={class:"modal__title"},Q={class:"modal__content"},Y=(0,a._)("span",null,"Title",-1),X=(0,a._)("span",null,"Content",-1),ee={class:"modal__controls"};function te(e,t,n,i,s,r){return(0,a.wg)(),(0,a.j4)(o.uT,{name:"modal"},{default:(0,a.w5)((()=>[(0,a._)("div",{onClick:t[6]||(t[6]=(...e)=>r.closeModal&&r.closeModal(...e)),class:"modal"},[(0,a._)("div",{onClick:t[5]||(t[5]=(0,o.iM)((()=>{}),["stop"])),class:"modal__form"},[(0,a._)("h3",P,(0,l.zw)(n.edit?r.words.titlewindowedit[n.lang]:r.words.titlewindow[n.lang]),1),(0,a._)("div",Q,[(0,a._)("label",null,[Y,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.title=e),type:"text",placeholder:"Title"},null,512),[[o.nr,s.title]])]),(0,a._)("label",null,[X,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.desc=e),rows:"1",placeholder:"Content"},null,512),[[o.nr,s.desc]])])]),(0,a._)("div",ee,[(0,a._)("button",{onClick:t[2]||(t[2]=(...e)=>r.closeModal&&r.closeModal(...e)),class:"modal__btn modal__btn_red"},(0,l.zw)(r.words.closebtn[n.lang]),1),n.edit?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[3]||(t[3]=(...e)=>r.changeNote&&r.changeNote(...e)),class:"modal__btn"},(0,l.zw)(r.words.editwindowbtn[n.lang]),1)):((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:t[4]||(t[4]=(...e)=>r.addNote&&r.addNote(...e)),class:"modal__btn"},(0,l.zw)(r.words.addbtn[n.lang]),1))])])])])),_:1})}var ne={props:{currentId:Number,edit:Boolean,editNote:Object,lang:String},data(){return{title:"",desc:"",id:this.currentId}},methods:{closeModal(){this.$emit("closeModal")},addNote(){let e=this.title.trim(),t=this.desc.trim();if(e.length>0&&t.length>0){let n={id:this.id++,title:e,date:(new Date).toLocaleDateString(),desc:t};this.closeModal(),this.title=this.desc="",this.$emit("addNote",n)}},changeNote(){let e=this.title.trim(),t=this.desc.trim();if(e.length>0&&t.length>0){let n={id:this.editNote.id,title:e,date:(new Date).toLocaleDateString(),desc:t};this.closeModal(),this.title=this.desc="",this.$emit("editedNote",n)}}},watch:{edit(e){e?(this.title=this.editNote.title,this.desc=this.editNote.desc):this.title=this.desc=""}},inject:["words"]};const oe=(0,k.Z)(ne,[["render",te]]);var ae=oe;const ie=(0,a._)("img",{src:x,alt:""},null,-1),le=[ie];function se(e,t,n,o,i,l){return(0,a.wg)(),(0,a.iD)("button",{class:"add",onClick:t[0]||(t[0]=t=>e.$emit("openModal"))},le)}var re={};const de=(0,k.Z)(re,[["render",se]]);var ce=de;const ue={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarseacrch:{ru:"Поиск...",uz:"Qidirish..."},infobar:{ru:"Все заметки",uz:"Barcha eslatmalar"},noinfobar:{ru:"Нет заметок",uz:"Еslatmalar yoq"},list:{ru:"Список",uz:"Roʻyxat"},grid:{ru:"Сетка",uz:"Setka"},titlewindow:{ru:"Добавить заметку",uz:"Eslatma qo’shish"},titlewindowedit:{ru:"Изменить заметку",uz:"Elsatmani tahrirlash"},editbtn:{ru:"РЕДАКТИРОВАТЬ",uz:"O`ZGARTIRISH"},deledit:{ru:"Удалить",uz:"o'chirish"},closebtn:{ru:"Отмена",uz:"Bekor qilish"},addbtn:{ru:"Добавить",uz:"Qo’shish"},editwindowbtn:{ru:"изменить",uz:"o'zgartirish"}};var ge=ue,he={components:{Header:y,Notes:K,Modal:ae,AddButton:ce},data(){return{notes:[{id:1,title:"Vue",date:"07.03.2022",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},{id:2,title:"React",date:"15.08.2000",desc:"Lorem ipsum dolor sit amet"},{id:3,title:"Angular",date:"08.07.1981",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}],modalOpen:!1,currentId:1,edit:!1,editNote:{},search:"",lang:"ru",langwords:{}}},methods:{openModal(){this.modalOpen=!0},closeModal(){this.modalOpen=!1,setTimeout((()=>{this.edit=!1}),500)},addNote(e){this.notes.push(e)},delNote(e){let t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1),console.log(t)},getNotes(){let e=localStorage.getItem("notes");if(e){this.notes=JSON.parse(e);let t=this.notes.length-1;this.currentId=t>=0?this.notes[t].id+1:1}},changeNote(e){let t=this.notes.find((t=>t.id==e));this.editNote=t,this.modalOpen=this.edit=!0},editedNote(e){this.notes.forEach((t=>{t.id==e.id&&(console.log(e),t.title=e.title,t.desc=e.desc,t.date=e.date)}))},changeLang(e){this.lang=e,localStorage.setItem("lang",e)}},watch:{notes:{handler(e,t){localStorage.setItem("notes",JSON.stringify(this.notes))},deep:!0}},created(){this.getNotes(),this.langwords=ge,this.lang=localStorage.getItem("lang")||"ru"},computed:{filterNotes(){let e=this.notes.filter((e=>{let t=e.title.toLowerCase().includes(this.search.toLowerCase());return t}));return e}},provide:{words:ge}};const _e=(0,k.Z)(he,[["render",i]]);var pe=_e;(0,o.ri)(pe).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],i=e[c][2];for(var s=!0,r=0;r<o.length;r++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(s=!1,i<l&&(l=i));if(s){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,l=o[0],s=o[1],r=o[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var c=r(n)}for(t&&t(o);d<l.length;d++)i=l[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkToDo"]=self["webpackChunkToDo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6021)}));o=n.O(o)})();
//# sourceMappingURL=app.49e6fb87.js.map