(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),s=n.n(a),i=n(7),r=n(8),o=n(9),d=n(11),b=n(10),l=n(4),u=n.n(l),j=n(0),f=function(e){var t=e.options,n=e.onLeaveFeedback,c=Object.keys(t);return Object(j.jsx)("div",{className:u.a.btns,children:c.map((function(e,t){return Object(j.jsx)("button",{className:u.a.btn,type:"button",onClick:function(){return n(e)},children:e},t)}))})},p=n(2),h=n.n(p),O=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positiveFeedPercentage;return Object(j.jsxs)("div",{className:h.a.feed,children:[Object(j.jsxs)("span",{className:h.a.feedType,children:["Good: ",t]}),Object(j.jsxs)("span",{className:h.a.feedType,children:[" Neutral: ",n]}),Object(j.jsxs)("span",{className:h.a.feedType,children:[" Bad: ",c]}),Object(j.jsxs)("span",{className:h.a.feedType,children:[" Total: ",a]}),Object(j.jsxs)("span",{className:h.a.feedType,children:["Positive feedback: ",t>0?s:"0","%"]})]})},v=n(5),_=n.n(v),x=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{className:_.a.section,children:[Object(j.jsx)("h2",{className:_.a.title,children:t}),n]})},k=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})},m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.btnIncrement=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(e,t,n){return e+t+n},e.countPositiveFeedbackPercentage=function(t,n,c){return Math.round(100*t/e.countTotalFeedback(t,n,c))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(t,c,n),s=this.countPositiveFeedbackPercentage(t,n,c);return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{title:"Please leave your feedback",children:Object(j.jsx)(f,{options:this.state,onLeaveFeedback:this.btnIncrement})}),Object(j.jsx)(x,{title:"Statictics",children:a>0?Object(j.jsx)(O,{good:t,neutral:n,bad:c,total:a,positiveFeedPercentage:s}):Object(j.jsx)(k,{message:"No feedback given"})})]})}}]),n}(c.Component),g=function(){return Object(j.jsx)(m,{})};s.a.render(Object(j.jsx)(g,{}),document.querySelector("#root"))},2:function(e,t,n){e.exports={feedType:"Statistics_feedType__36sP_",feed:"Statistics_feed__Csvpf"}},4:function(e,t,n){e.exports={btns:"FeedbackOption_btns__1h_8s",btn:"FeedbackOption_btn__2a1mZ"}},5:function(e,t,n){e.exports={gradient:"Section_gradient__2ujiD",section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}}},[[17,1,2]]]);
//# sourceMappingURL=main.47de1f53.chunk.js.map