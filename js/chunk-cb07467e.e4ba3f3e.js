(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb07467e"],{2847:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"is":{"billingAddress":"Heimilisfang","paymentMethod":"Greiðslumáti","printOrder":"Prenta pöntun","creditCardType":"Tegund korts: ","creditCardNumber":"Kortanúmer: "},"en":{"billingAddress":"Billing address","paymentMethod":"Payment method","printOrder":"Print Order","creditCardType":"Credit Card Type: ","creditCardNumber":"Credit Card Number: "}}'),delete t.options._Ctor}},"2a18":function(t,e,r){"use strict";var s=r("6f48"),a=r.n(s);a.a},"2bd0":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orders-detail-suborders__container"},t._l(t.orderedStores,function(e,s){return r("div",{key:s},[t.isInvoices||!t.isInvoices&&0===s?r("div",{staticClass:"orders-detail-suborders__title-text-container"},[r("h1",{staticClass:"orders-detail-suborders__title-text"},[t._v(t._s(t.$t("itemsOrdered")))]),t.isInvoices?r("div",{staticClass:"orders-detail-suborders__tile-print",on:{click:t.printOrder}},[t._v("\n        "+t._s(t.$t("printReceipt"))+"\n      ")]):t._e()]):t._e(),r("div",{staticClass:"orders-detail-suborders__content"},[r("div",{staticClass:"orders-detail-suborders__content-header"},[r("div",{staticClass:"orders-detail-suborders__content-header-left"},[r("div",{staticClass:"orders-detail-suborders__content-header-title"},[t._v(t._s(e.store))]),r("div",{class:["orders-detail-suborders__status","color__status--"+t.statusColor(e.order_status)]},[t._v("\n            "+t._s(e.order_status)+"\n          ")])]),r("div",{staticClass:"orders-detail-suborders__content-header-right"},[t._v("\n          "+t._s(t.$t("referenceNumber"))+": \n          "+t._s("#"+e.order_ref_number)+"\n        ")])]),r("div",{staticClass:"orders-detail-suborders__content-body"},[r("table",{staticClass:"orders-detail-suborders__table",attrs:{id:"my-orders-table"}},[r("thead",[r("tr",{staticClass:"orders-detail-suborders__table-tr"},[r("th",{staticClass:"orders-detail-suborders__table-th left"},[t._v(t._s(t.$t("productName")))]),r("th",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t.$t("price")))]),r("th",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t.$t("quantity")))]),r("th",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t.$t("subTotal")))])])]),r("tbody",t._l(Object.values(e.items),function(e){return r("tr",{key:e.item_id,staticClass:"orders-detail-suborders__table-tr"},[r("td",{staticClass:"orders-detail-suborders__table-th left"},[r("div",{staticClass:"orders-detail-suborders__table-th-name"},[t._v(t._s(e.name))]),r("div",{staticClass:"orders-detail-suborders__table-th-sku"},[t._v(t._s(e.sku))])]),r("td",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t._f("formatISK")(+e.price)))]),r("td",{staticClass:"orders-detail-suborders__table-th"},[r("strong",[t._v(t._s(parseInt(e.qty_ordered)))])]),r("td",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t._f("formatISK")(+e.row_total_incl_tax)))])])}),0)])])])])}),0)},a=[],n=(r("ac6a"),r("8615"),r("bfc0")),i={name:"OrdersDetailSubOrders",props:{subOrders:Object,subPath:String,isInvoices:Boolean},computed:{orderedStores:function(){return Object.values(this.subOrders)}},methods:{statusColor:function(t){return Object(n["a"])(t)},printOrder:function(){}}},d=i,o=(r("a003"),r("2877")),c=Object(o["a"])(d,s,a,!1,null,"1a153bb1",null);e["a"]=c.exports},4499:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orders-detail-info__container"},[r("div",{staticClass:"orders-detail-info__billing-address"},[r("h3",{staticClass:"orders-detail-info__billing-address-title"},[t._v("\n      "+t._s(t.$t("billingAddress"))+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.fullName)+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.street)+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.address)+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.countryName)+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.phoneNumber)+"\n    ")])]),r("div",{staticClass:"orders-detail-info__payment-info"},[r("h3",{staticClass:"orders-detail-info__billing-address-title"},[t._v("\n      "+t._s(t.$t("paymentMethod"))+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content bold"},[t._v("\n      "+t._s(t.paymentInfo.title)+"\n    ")]),t.creditCardType?r("div",{staticClass:"orders-detail-info__billing-address-content"},[r("span",{attrs:{id:"card-title"}},[t._v(t._s(t.$t("creditCardType")))]),r("span",{attrs:{id:"card-value"}},[t._v(t._s(t.creditCardType))])]):t._e(),t.creditCardNumber?r("div",{staticClass:"orders-detail-info__billing-address-content"},[r("span",{attrs:{id:"card-title"}},[t._v(t._s(t.$t("creditCardNumber")))]),r("span",{attrs:{id:"card-value"}},[t._v(t._s(t.creditCardNumber))])]):t._e(),t.isInvoices?r("div",{staticClass:"orders-detail-info__billing-address-print",on:{click:t.printOrder}},[t._v("\n      "+t._s(t.$t("printOrder"))+"\n    ")]):t._e()])])},a=[],n=(r("ac6a"),r("8615"),r("f23c")),i=r("1503"),d={name:"OrdersDetailInformation",props:{billingAddress:Object,paymentInfo:Object,subPath:String,isInvoices:Boolean},computed:{fullName:function(){var t=this.billingAddress,e=t.firstname,r=t.lastname,s="";return e&&r&&(s="".concat(e," ").concat(r)),s},street:function(){return"".concat(Object(n["a"])(this.billingAddress,"street",""))},address:function(){var t=this.billingAddress,e=t.city,r=t.postcode,s="";return e&&r&&(s="".concat(e,", ").concat(r)),s},countryName:function(){var t=Object(n["a"])(this.billingAddress,"country_id");return t?Object(n["a"])(i["c"],"".concat(t.toLowerCase()),"Unknow"):""},phoneNumber:function(){var t=Object(n["a"])(this.billingAddress,"telephone");return t?"T: ".concat(t.charAt()?t.substring(4,t.length):t):""},creditCardType:function(){var t=Object(n["a"])(this.paymentInfo,"additional");return t?Object.values(t[0])[0]:""},creditCardNumber:function(){var t=Object(n["a"])(this.paymentInfo,"additional");return t?Object.values(t[1])[0]:""}},methods:{printOrder:function(){}}},o=d,c=(r("e3ea"),r("2877")),l=r("a1db"),u=Object(c["a"])(o,s,a,!1,null,"218ba960",null);"function"===typeof l["default"]&&Object(l["default"])(u);e["a"]=u.exports},51687:function(t,e,r){},"6f48":function(t,e,r){},"7e61":function(t,e,r){"use strict";r.d(e,"b",function(){return d}),r.d(e,"a",function(){return c});r("96cf");var s=r("3b8d"),a=r("fce9"),n=r("f23c"),i=r("1503");function d(t){return o.apply(this,arguments)}function o(){return o=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r,s,d,o,c,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.skip,s=void 0===r?s||i["l"].skip:r,d=e.limit,o=void 0===d?o||i["l"].limit:d,c="/api/rest/order/list/".concat(o,"/").concat(s),t.next=4,a["a"].get(c);case 4:return l=t.sent,t.abrupt("return",Object(n["a"])(l,"data",{}));case 6:case"end":return t.stop()}},t)})),o.apply(this,arguments)}function c(t){return l.apply(this,arguments)}function l(){return l=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return r="/api/rest/order/id/".concat(e),t.next=5,a["a"].get(r);case 5:return s=t.sent,t.abrupt("return",Object(n["a"])(s,"data",{}));case 7:case"end":return t.stop()}},t)})),l.apply(this,arguments)}},"97f1":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orders-detail-summary__container"},[r("div",{staticClass:"orders-detail-summary__title"},[t._v(t._s(t.$t("orderSummary")))]),r("div",{staticClass:"orders-detail-summary__content"},[r("table",{staticClass:"orders-detail-summary__table",attrs:{border:"1"}},[r("tbody",[r("tr",{staticClass:"orders-detail-summary__table-tr"},[r("td",{staticClass:"orders-detail-summary__table-label"},[t._v(t._s(t.$t("subTotal")))]),r("td",{staticClass:"orders-detail-summary__table-content"},[t._v(t._s(t._f("formatISK")(+t.ordersSummary.subtotal)))])]),r("tr",{staticClass:"orders-detail-summary__table-tr"},[r("td",{staticClass:"orders-detail-summary__table-label"},[t._v(t._s(t.$t("grandTotal")))]),r("td",{staticClass:"orders-detail-summary__table-content"},[t._v(t._s(t._f("formatISK")(+t.ordersSummary.grand_total)))])])])])])])},a=[],n={name:"OrdersDetailSummary",props:{ordersSummary:Object,subPath:String}},i=n,d=(r("e9ba"),r("2877")),o=Object(d["a"])(i,s,a,!1,null,"0dbeea18",null);e["a"]=o.exports},a003:function(t,e,r){"use strict";var s=r("51687"),a=r.n(s);a.a},a1db:function(t,e,r){"use strict";var s=r("2847"),a=r.n(s);e["default"]=a.a},a66f:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isReady?r("div",{staticClass:"account-orders-detail__wrapper"},[r("div",{staticClass:"account-order-detail__container"},[r("div",[r("div",{staticClass:"account-orders-detail__order-title"},[r("h1",{staticClass:"account-orders-detail__title"},[t._v("\n          "+t._s(t.$t("orderTitle"))+t._s(t.ordersInfo.mainOrderIncId)+"\n        ")]),r("div",{class:["account-order-detail__status","color__status--"+t.statusColor(t.ordersInfo.orderStatus)]},[t._v("\n          "+t._s(t.ordersInfo.orderStatus)+"\n        ")])]),r("div",{staticClass:"account-orders-detail__order-date"},[t._v("\n        "+t._s(t.$t("orderDate"))+": "+t._s(t._f("formatDateTime")(t.ordersInfo.orderDate))+"\n      ")])]),r("div",{staticClass:"account-orders-detail__print",on:{click:t.printOrder}},[r("router-link",{attrs:{to:"/customer/account/orders/printOrders?id="+t.orderId,target:"_blank"}},[t._v("\n        "+t._s(t.$t("printOrder"))+"\n      ")])],1)]),r("div",{staticClass:"account-orders-detail__page-container"},t._l(t.defaultPage,function(e,s){return r("div",{key:e.id,class:{"account-orders-detail__page":!0,"account-orders-detail__mgrr15":0===s,"account-orders-detail__page--unactived":e.id!==t.subPath},on:{click:function(r){e.id!==t.subPath&&t.redirectPage(e.id)}}},[t._v("\n      "+t._s(t.$t(e.value))+"\n    ")])}),0),r("OrdersDetailInformation",t._b({attrs:{billingAddress:t.billingAddress,paymentInfo:t.paymentInfo}},"OrdersDetailInformation",t.ordersDetailProps,!1)),r("OrdersDetailSubOrders",t._b({attrs:{subOrders:t.subOrders}},"OrdersDetailSubOrders",t.ordersDetailProps,!1)),t.ordersDetailProps.isInvoices?t._e():r("OrdersDetailSummary",t._b({attrs:{ordersSummary:t.ordersSummary}},"OrdersDetailSummary",t.ordersDetailProps,!1))],1):t._e()},a=[],n=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),i=r("bd86"),d=(r("6762"),r("2fdb"),r("2f62")),o=r("4499"),c=r("2bd0"),l=r("97f1"),u=r("7e61"),_=r("f23c"),b=r("bfc0");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach(function(e){Object(i["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var m={name:"ViewMyAccountOrdersDetail",components:{OrdersDetailInformation:o["a"],OrdersDetailSubOrders:c["a"],OrdersDetailSummary:l["a"]},data:function(){return{defaultPage:[{id:"view",value:"orderInformation"},{id:"invoices",value:"invoices"}],isReady:!1,ordersInfo:void 0,billingAddress:void 0,paymentInfo:void 0,subOrders:void 0,ordersSummary:void 0}},computed:{orderId:function(){return Object(_["a"])(this.$route,"params.id")},subPath:function(){return Object(_["a"])(this.$route,"params.subPath")},ordersDetailProps:function(){return{isInvoices:this.$route.path.includes("invoices")}}},methods:v({},Object(d["b"])(["setPrintData"]),{statusColor:function(t){return Object(b["a"])(t)},printOrder:function(){var t=this.setPrintData,e=this.orderId,r=this.ordersInfo,s=this.billingAddress,a=this.paymentInfo,n=this.subOrders,i=this.ordersSummary;t({orderId:e,ordersInfo:r,billingAddress:s,paymentInfo:a,subOrders:n,ordersSummary:i})},redirectPage:function(t){var e=this.orderId;this.$router.push("/customer/account/orders/".concat(t,"/id/").concat(e))}}),mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["a"])(this.orderId);case 2:e=t.sent,"success"===e.status&&(r=Object(_["a"])(e,"data",{}),this.billingAddress=r.billing_address,this.paymentInfo=r.payment_info,this.subOrders=r.suborders,this.ordersInfo={orderStatus:r.order_status,orderDate:r.order_date,mainOrderIncId:r.main_order_inc_id},this.ordersSummary=r.order_totals,this.isReady=!0);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},p=m,h=(r("2a18"),r("2877")),O=r("e35e"),y=Object(h["a"])(p,s,a,!1,null,"df17bd30",null);"function"===typeof O["default"]&&Object(O["default"])(y);e["default"]=y.exports},a718:function(t,e,r){},bfc0:function(t,e,r){"use strict";r("7f7f"),r("7514");var s=[{name:"Tilbúið",value:"ready"},{name:"Staðfest",value:"complete"},{name:"Í vinnslu",value:"processing"},{name:"Lokið",value:"closed"},{name:"Afhent",value:"delivered"},{name:"Hætt við",value:"canceled"}],a=s,n=r("f23c");function i(t){var e=a.find(function(e){var r=e.name;return r===t});return Object(n["a"])(e,"value","")}r.d(e,"a",function(){return i})},cfc4:function(t,e,r){},e35e:function(t,e,r){"use strict";var s=r("e768"),a=r.n(s);e["default"]=a.a},e3ea:function(t,e,r){"use strict";var s=r("cfc4"),a=r.n(s);a.a},e768:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"is":{"orderInformation":"Upplýsingar um pöntun","invoices":"Reikningar","orderTitle":"Pöntun #","orderDate":"Dagsetning","printOrder":"Prenta pöntun"},"en":{"orderInformation":"Order Information","invoices":"Invoices","orderTitle":"Order #","orderDate":"Order Date","printOrder":"Print Order"}}'),delete t.options._Ctor}},e9ba:function(t,e,r){"use strict";var s=r("a718"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-cb07467e.e4ba3f3e.js.map