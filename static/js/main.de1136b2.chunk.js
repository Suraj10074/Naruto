(this.webpackJsonpphotowall=this.webpackJsonpphotowall||[]).push([[0],{16:function(e,t,o){e.exports=o(27)},21:function(e,t,o){},27:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),i=o(9),r=o.n(i),c=o(10),s=o(11),l=o(3),u=o(15),m=o(14),p=function(e){return a.a.createElement("h1",null,e.title)},h=function(e){var t=e.post;return a.a.createElement("figure",{className:"figure"},a.a.createElement("img",{className:"photo-img",src:t.imageLink,alt:t.description}),a.a.createElement("figcaption",null,a.a.createElement("p",null,t.description)),a.a.createElement("div",{className:"button-container"},a.a.createElement("button",{className:"remove-container",onClick:function(){e.onRemovePhoto(t)}},"Remove")))},f=function(e){return a.a.createElement("div",{className:"photo-grid"},e.posts.map((function(t,o){return a.a.createElement(h,{key:o,post:t,onRemovePhoto:e.onRemovePhoto})})))},v=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(){var e;return Object(c.a)(this,o),(e=t.call(this)).state={posts:[{id:"0",description:"Naruto Uzumaki",imageLink:"../Photos/Naruto Uzumaki.jpg"},{id:"1",description:"Sasuke Uchiha",imageLink:"../Photos/sasuke.gif"},{id:"2",description:"Kakashi Hatake",imageLink:"../Photos/Kakashi Hatake.jpg"}]},e.removePhoto=e.removePhoto.bind(Object(l.a)(e)),e}return Object(s.a)(o,[{key:"removePhoto",value:function(e){console.log(e.description),this.setState((function(t){return{posts:t.posts.filter((function(t){return t!==e}))}}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(p,{title:"Naruto"}),a.a.createElement(f,{posts:this.state.posts,onRemovePhoto:this.removePhoto}))}}]),o}(n.Component),d=(o(21),o(13));r.a.render(a.a.createElement(d.a,null,a.a.createElement(v,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.de1136b2.chunk.js.map