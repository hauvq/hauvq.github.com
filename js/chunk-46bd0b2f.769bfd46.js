(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46bd0b2f"],{1799:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isShowPagination?e("div",{staticClass:"pagination-container"},[e("div",{staticClass:"pagination-paginate"},[t.renderPage.length>5?e("div",[e("ul",{staticClass:"pagiantion-paginate-container"},[e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--left",class:{"no-cursor":1===t.currentPage},on:{click:function(n){return t.changePage(t.currentPage-1)}}},[e("i",{staticClass:"icon icon--arrow-left"})]),e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--index",class:{"pagiantion-paginate__item--index--actived":1===t.currentPage,"no-cursor":1===t.currentPage},on:{click:function(n){1!==t.currentPage&&t.changePage(1)}}},[e("span",[t._v("1")])]),t.currentPage>=t.renderPage.length-2||t.renderPage.length>5&&t.currentPage>=3?e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--three-dot no-cursor"},[e("i",{staticClass:"icon icon--three-dot-horizontal"})]):t._e(),t.currentPage>1&&t.renderPage.length-1>t.currentPage?e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--index",class:{"pagiantion-paginate__item--index--actived":!0,"no-cursor":!0}},[e("span",[t._v(t._s(t.currentPage))])]):t._e(),t.currentPage<t.renderPage.length?e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--index",class:{"pagiantion-paginate__item--index--actived":t.currentPage===t.renderPage.length-1},on:{click:function(n){t.changePage(t.getCurrentPage(t.currentPage))}}},[e("span",[t._v(t._s(t.getCurrentPage(t.currentPage)))])]):t._e(),t.currentPage<t.renderPage.length-2?e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--three-dot no-cursor"},[e("i",{staticClass:"icon icon--three-dot-horizontal"})]):t._e(),e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--index",class:{"pagiantion-paginate__item--index--actived":t.currentPage>=t.renderPage.length,"no-cursor":t.currentPage===t.renderPage.length},on:{click:function(n){t.currentPage!==t.renderPage.length&&t.changePage(t.renderPage.length)}}},[e("span",[t._v(t._s(t.renderPage.length))])]),e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--right",class:{"no-cursor":t.currentPage>=t.renderPage.length},on:{click:function(n){return t.changePage(t.currentPage+1)}}},[e("i",{staticClass:"icon icon--arrow-right"})])])]):e("div",[e("ul",{staticClass:"pagiantion-paginate-container"},[e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--left",class:{"no-cursor":1===t.currentPage},on:{click:function(n){return t.changePage(t.currentPage-1)}}},[e("i",{staticClass:"icon icon--arrow-left"})]),t._l(t.renderPage,function(n,a){return e("li",{key:a,staticClass:"pagiantion-paginate__item pagiantion-paginate__item--index",class:{"pagiantion-paginate__item--index--actived":t.currentPage===n||t.currentPage>n&&n===t.renderPage.length},on:{click:function(e){return t.changePage(n)}}},[e("span",[t._v(t._s(n))])])}),e("li",{staticClass:"pagiantion-paginate__item pagiantion-paginate__item--right",class:{"no-cursor":t.currentPage>=t.renderPage.length},on:{click:function(n){return t.changePage(t.currentPage+1)}}},[e("i",{staticClass:"icon icon--arrow-right"})])],2)])])]):t._e()},i=[],o=(e("c5f6"),e("f23c")),s={name:"Pagination",data:function(){return{renderPage:[],totalPage:1}},props:{totalItems:{type:Number,default:0},showEntries:{type:Number,default:10},showPagination:Function},computed:{isShowPagination:function(){return this.totalItems>0},currentPage:function(){return Number(Object(o["a"])(this.$route,"query.page",1))}},methods:{pageNumber:function(t){var n=(t/this.showEntries).toFixed(0);this.totalPage=0==n?1:n,this.showRenderPage()},showRenderPage:function(){for(var t=[],n=1;n<=this.totalPage;n++)t.push(n);this.renderPage=t},changePage:function(t){var n=this.showPagination;n(t,this.showEntries),this.$router.push("?page=".concat(t))},getCurrentPage:function(t){var n=this.currentPage,e=this.renderPage;return n===e.length&&t-1||n===e.length-1&&t||t+1}},mounted:function(){var t=this.totalItems,n=this.pageNumber;n(t)}},r=s,u=(e("b774"),e("2877")),c=Object(u["a"])(r,a,i,!1,null,"3096f482",null);n["a"]=c.exports},"1f33":function(t,n,e){"use strict";var a=e("36f0"),i=e.n(a);n["default"]=i.a},2787:function(t,n,e){},"36f0":function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"is":{"couponImg":"Image","couponDetails":"Coupon Details","showPerPage":" ","viewDetails":"Skoða"},"en":{"couponImg":"Image","couponDetails":"Coupon Details","showPerPage":"Show per page","viewDetails":"View details"}}'),delete t.options._Ctor}},7078:function(t,n,e){},"747d":function(t,n,e){"use strict";var a=e("979c"),i=e.n(a);i.a},"8f97":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"account-coupons__container account-page"},[e("div",{staticClass:"account-page__title"},[e("h2",[t._v(t._s(t.$t("pageTitle")))])]),e("LoadingWrapper",{attrs:{loadingKeys:[t.LOADING_KEY_FETCHING_COUPON]}},[t.unUsedCouponsData?t._e():e("div",{staticClass:"account-coupons__blank"}),t.unUsedCouponsData?e("DataTableCoupons",t._b({attrs:{data:t.unUsedCouponsData,showPagination:t.getUnusedCoupons,onClick:t.handleClickUnUsedCoupons}},"DataTableCoupons",t.unUsedCouponsPageInfo,!1)):t._e()],1),e("div",{staticClass:"account-coupons__used-coupons-title"},[e("span",[t._v(t._s(t.$t("usedCoupons")))])]),e("LoadingWrapper",{attrs:{loadingKeys:[t.LOADING_KEY_FETCHING_COUPON]}},[t.unUsedCouponsData?t._e():e("div",{staticClass:"account-coupons__blank"}),t.usedCouponsData?e("DataTableCoupons",t._b({attrs:{data:t.usedCouponsData,showPagination:t.getUsedCoupons,onClick:t.handleClickUsedCoupons}},"DataTableCoupons",t.usedCouponsPageInfo,!1)):t._e()],1)],1)},i=[],o=(e("8e6e"),e("c5f6"),e("96cf"),e("3b8d")),s=(e("7514"),e("ac6a"),e("456d"),e("bd86")),r=e("2f62"),u=e("f23c"),c=e("935a"),p=e("9505"),l=e("022f"),g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"data-table-coupons__container"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(t._s(t.$t("couponImg")))]),e("th",{staticClass:"text-left"},[t._v(t._s(t.$t("couponDetails")))])])]),e("tbody",t._l(t.data,function(n){return e("tr",{key:n.recordId,staticClass:"data-table-coupons__row-container"},[e("td",{staticClass:"w-20"},[e("ImageViewer",{staticClass:"deal__image img img-responsive img-thumbnail",attrs:{src:n.product_image,loading:"lazy"}})],1),e("td",{staticClass:"deal__details-row"},[e("div",{staticClass:"deal__details-row-container"},[e("div",{staticClass:"deal__item-coupon-name"},[t._v("\n              #"+t._s(n.couponId)+" "+t._s(n.product_name)+"\n            ")]),e("div",{staticClass:"deal__item-coupon-code"},[t._v("\n              "+t._s(n.coupon_code)+"\n              "+t._s(t._f("formatDate")(n.valid_from))+" -\n              "+t._s(t._f("formatDate")(n.valid_to))+"\n            ")]),e("base-button",{staticClass:"tertiary btn--px-20 deal__item-view-detail-btn",nativeOn:{click:function(e){return t.onClick(n.recordId)}}},[t._v("\n              "+t._s(t.$t("viewDetails")))])],1)])])}),0)]),e("div",{staticClass:"data-table-coupons__bottom"},[e("Pagination",{attrs:{totalItems:t.totalItems,showPagination:t.showPagination}})],1)])},d=[],h=e("1799"),_=e("e700"),f=e("82ea"),C={name:"DataTableCoupons",props:{data:Array,onClick:Function,totalItems:{type:Number,default:0},showPagination:Function},components:{Pagination:h["a"],ImageViewer:_["a"],BaseButton:f["a"]},data:function(){return{}},computed:{},methods:{}},m=C,P=(e("747d"),e("2877")),v=e("1f33"),b=Object(P["a"])(m,g,d,!1,null,"62b3553d",null);"function"===typeof v["default"]&&Object(v["default"])(b);var w=b.exports,U=e("fce9"),O=e("1503");function k(t){return y.apply(this,arguments)}function y(){return y=Object(o["a"])(regeneratorRuntime.mark(function t(n){var e,a,i,o,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.skip,a=void 0===e?a||O["l"].skip:e,i=n.limit,o=void 0===i?o||O["l"].limit:i,s="/api/rest/order/list/otype/unused/".concat(o,"/").concat(a),t.next=4,U["a"].get(s);case 4:return r=t.sent,t.abrupt("return",Object(u["a"])(r,"data",{}));case 6:case"end":return t.stop()}},t)})),y.apply(this,arguments)}function D(t){return I.apply(this,arguments)}function I(){return I=Object(o["a"])(regeneratorRuntime.mark(function t(n){var e,a,i,o,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.skip,a=void 0===e?a||O["l"].skip:e,i=n.limit,o=void 0===i?o||O["l"].limit:i,s="/api/rest/order/list/otype/used/".concat(o,"/").concat(a),t.next=4,U["a"].get(s);case 4:return r=t.sent,t.abrupt("return",Object(u["a"])(r,"data",{}));case 6:case"end":return t.stop()}},t)})),I.apply(this,arguments)}function j(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function x(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?j(e,!0).forEach(function(n){Object(s["a"])(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var E={name:"ViewMyAccountCoupons",components:{DataTableCoupons:w,LoadingWrapper:l["a"]},data:function(){return{currentPage:1,showEntriesUnused:void 0,showEntriesUsed:void 0,LOADING_KEY_FETCHING_COUPON:p["j"],unUsedCoupons:{},usedCoupons:{}}},computed:{unUsedCouponsPageInfo:function(){return{totalItems:this.unUsedCouponsCount,showEntries:this.showEntriesUnused||10}},usedCouponsPageInfo:function(){return{totalItems:this.usedCouponsCount,showEntries:this.showEntriesUnused||10}},unUsedCouponsCount:function(){return this.unUsedCoupons.totalCount||0},usedCouponsCount:function(){return this.usedCoupons.totalCount||0},unUsedCouponsData:function(){return this.unUsedCoupons.data},usedCouponsData:function(){return this.usedCoupons.data}},methods:x({},Object(r["b"])(["toggleModal","setPrintData","toggleLoading"]),{transformCouponsRawToData:function(t){var n=Object.keys(t[0]).map(function(n){var e=Object.keys(t[0][n])[0];return x({recordId:n,couponId:e},t[0][n][e])});return n},handleLoading:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.toggleLoading;return n({loadingKey:p["j"],isLoading:t})},handleClickUnUsedCoupons:function(t){var n=this.unUsedCouponsData.find(function(n){return n.recordId===t});return this.openModal(n)},handleClickUsedCoupons:function(t){var n=this.usedCouponsData.find(function(n){return n.recordId===t});return this.openModal(n)},openModal:function(t){return this.setPrintData(t),this.toggleModal(x({modalKey:c["o"]},t))},loadUnusedCoupons:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(n){var e,a,i,o,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.skip,a=n.limit,t.next=3,k({skip:e,limit:a});case 3:i=t.sent,o=i.records,s=i.total_count,r=this.transformCouponsRawToData(o),this.unUsedCoupons={data:r,totalCount:s[0]};case 8:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),loadUsedCoupons:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(n){var e,a,i,o,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.skip,a=n.limit,t.next=3,D({skip:e,limit:a});case 3:i=t.sent,o=i.records,s=i.total_count,r=this.transformCouponsRawToData(o),this.usedCoupons={data:r,totalCount:s[0]};case 8:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),getUsedCoupons:function(t,n){this.showEntriesUsed=n,this.handleLoading(),this.loadUsedCoupons({skip:t,limit:n})},getUnusedCoupons:function(t,n){this.showEntriesUnused=n,this.handleLoading(),this.loadUnusedCoupons({skip:t,limit:n})}}),mounted:function(){var t=Number(Object(u["a"])(this.$route,"query.page",1));this.getUsedCoupons(t||1,20),this.getUnusedCoupons(t||1,20)},beforeUpdate:function(){var t=Number(Object(u["a"])(this.$route,"query.page",1));t!==this.currentPage&&(this.currentPage=t,this.getUsedCoupons(t,this.showEntriesUsed),this.getUnusedCoupons(t,this.showEntriesUnused))},watch:{usedCouponsData:function(){this.handleLoading(!1)},unUsedCouponsData:function(){this.handleLoading(!1)}}},N=E,T=(e("a2ab"),e("d49b")),L=Object(P["a"])(N,a,i,!1,null,"615a9a06",null);"function"===typeof T["default"]&&Object(T["default"])(L);n["default"]=L.exports},"979c":function(t,n,e){},a2ab:function(t,n,e){"use strict";var a=e("7078"),i=e.n(a);i.a},b774:function(t,n,e){"use strict";var a=e("2787"),i=e.n(a);i.a},c4b5:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"is":{"pageTitle":"Gjafabréf","usedCoupons":"Notaðir miðar"},"en":{"pageTitle":"Your Coupons","usedCoupons":"Used coupons"}}'),delete t.options._Ctor}},d49b:function(t,n,e){"use strict";var a=e("c4b5"),i=e.n(a);n["default"]=i.a}}]);
//# sourceMappingURL=chunk-46bd0b2f.769bfd46.js.map