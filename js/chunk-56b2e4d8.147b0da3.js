(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56b2e4d8"],{"3a21":function(t,e,i){},"46ce":function(t,e,i){"use strict";var s=i("3a21"),r=i.n(s);r.a},f55d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"categories__wrapper",attrs:{id:"all-categories"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"categories__header row"},[i("ul",{staticClass:"list hide-scroll-bar"},t._l(t.categoriesInNav,function(e){return i("li",{key:e.cateegory_id,staticClass:"list__item"},[i("router-link",{staticClass:"link",attrs:{"active-class":"link--active",to:{name:"ViewAllCategories",hash:"#c"+e.category_id}},on:{click:function(){return t.hashClick("c"+e.category_id)}}},[t._v("\n            "+t._s(e.name)+"\n            "),i("span",{staticClass:"active-indicator"})])],1)}),0)]),i("div",{staticClass:"categories__section row"},[i("div",{staticClass:"col-xs-12 col-sm-8"},t._l(t.lv1Categories,function(e){return i("div",{key:e.category_id,staticClass:"categories__section-item"},[i("div",{staticClass:"categories__section-item-header"},[i("h4",{attrs:{id:"c"+e.category_id}},[t._v(t._s(e.name))])]),i("ul",{staticClass:"category__list row"},t._l(e.children,function(e){return i("li",{key:e.category_id,staticClass:"category__item col-xs-6 col-sm-4 col-md-3 ellipsis",attrs:{title:e.name}},[i("router-link",{staticClass:"link",attrs:{"active-class":"link--active",to:e.url_path}},[t._v("\n                "+t._s(e.name)+"\n              ")])],1)}),0),i("div",{staticClass:"categories__section-divider"})])}),0),i("div",{staticClass:"col-xs-12 col-sm-4"})])])])},r=[],a=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),c=i("2f62"),n=i("f23c");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,s)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var u={data:function(){return{filterLength:null,gridCol:4}},computed:l({},Object(c["c"])(["categoriesList"]),{lv1Categories:function(){var t=this.categoriesList;return Object(n["a"])(t,"children",[])},categoriesInNav:function(){var t=this.categoriesList,e=this.filterLength,i=null;return null!==e?(i=Object(n["a"])(t,"children",[]).slice(0,e),i.push({name:"More Categories",category_id:-1010})):i=Object(n["a"])(t,"children",[]),i}}),methods:l({},Object(c["b"])(["setNavBarTitle"]),{hashClick:function(t){var e=document.getElementById(t);e.scrollIntoView({behavior:"smooth"})}}),mounted:function(){this.setNavBarTitle({en:"All categories",is:"Allir flokkar"})}},d=u,g=(i("46ce"),i("2877")),_=Object(g["a"])(d,s,r,!1,null,"7bff0cbe",null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-56b2e4d8.147b0da3.js.map