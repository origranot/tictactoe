(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{22:function(e,t,r){e.exports=r(39)},28:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},33:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(15),i=r.n(l),c=r(10),s=(r(27),r(28),r(5)),u=r(6),o=r(8),p=r(7),f=r(9),h=(r(29),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"box"},this.props.children)}}]),t}(a.Component)),m=r(20),y=(r(30),r(31),function(e){function t(){var e,r;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(r=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(e){var t=e.target.parentElement.rowIndex,a=e.target.cellIndex;r.props.handleClick(t,a)},r}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("td",{className:this.props.value,onClick:this.handleClick})}}]),t}(a.Component)),b=function(e){function t(){var e,r;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(r=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={squareArray:new Array(r.props.size).fill(null).map((function(){return new Array(r.props.size).fill(null)}))},r.handleSquareClick=function(e,t){if(r.props.gameStarted&&null==r.state.squareArray[e][t]&&null==r.props.winner){var a=Object(m.a)(r.state.squareArray);a[e][t]=r.props.isFirstPlayerTurn?"xSign":"oSign",r.setState({squareArray:a}),r.checkWinner()?r.props.gameEnded("win"):r.checkTie()&&r.props.gameEnded("tie"),r.props.handleClick(e,t)}},r.initBoard=function(){r.setState({squareArray:new Array(r.props.size).fill(null).map((function(){return new Array(r.props.size).fill(null)}))})},r.checkTie=function(){var e=!0,t=!1,a=void 0;try{for(var n,l=r.state.squareArray[Symbol.iterator]();!(e=(n=l.next()).done);e=!0){if(-1!==n.value.indexOf(null))return!1}}catch(i){t=!0,a=i}finally{try{e||null==l.return||l.return()}finally{if(t)throw a}}return!0},r.checkWinner=function(){for(var e=r.state.squareArray,t=0;t<r.props.size;t++)for(var a=e[t][0],n=1;n<r.props.size&&(null!=a&&e[t][n]===a);n++)if(n===r.props.size-1)return!0;for(var l=0;l<r.props.size;l++)for(var i=e[0][l],c=1;c<r.props.size&&(null!=i&&e[c][l]===i);c++)if(c===r.props.size-1)return!0;for(var s=e[0][0],u=0;u<r.props.size&&(null!=s&&e[u][u]===s);u++)if(u===r.props.size-1)return!0;s=e[0][r.props.size-1];for(var o=r.props.size-1;o>=0&&(null!=s&&e[r.props.size-1-o][o]===s);o--)if(0===o)return!0;return!1},r.createTable=function(){for(var e=[],t=0;t<r.props.size;t++){for(var a=[],l=0;l<r.props.size;l++){var i=l+t*r.props.size;a.push(n.a.createElement(y,{key:i,place:i,value:r.state.squareArray[t][l],handleClick:r.handleSquareClick}))}e.push(n.a.createElement("tr",{key:t},a))}return e},r}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("table",{className:"squaresTable"},n.a.createElement("tbody",null,this.createTable()))}}]),t}(a.Component),d=r(11),v=r.n(d),O=r(17),j=(r(33),r(41)),E=r(40),k=r(19),w=r(42),A=function(e){function t(){var e,r;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(r=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={error:null},r.handleClick=function(){var e=Object(O.a)(v.a.mark((function e(t){var a,n,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r.setState({error:null});case 3:if(a=r.refs.firstPlayer.value,n=r.refs.secondPlayer.value,""!==a.trim()&&""!==n.trim()){e.next=8;break}return e.next=8,r.setState({error:"PUT A NAME YOU SON OF A BITCH!"});case 8:if(null==r.state.error){e.next=10;break}return e.abrupt("return");case 10:l=[r.refs.firstPlayer.value,r.refs.secondPlayer.value],r.props.handleStart(l);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(j.a,null,n.a.createElement(E.a,null,n.a.createElement(k.a,null,n.a.createElement(j.a.Control,{placeholder:"First player",ref:"firstPlayer"})),n.a.createElement(k.a,null,n.a.createElement(j.a.Control,{placeholder:"Second player",ref:"secondPlayer"}))),n.a.createElement(E.a,null,n.a.createElement(w.a,{variant:"info",type:"submit",className:"play-button",onClick:this.handleClick},"Play!")),null===this.state.error?"":n.a.createElement("div",{className:"err"},this.state.error))}}]),t}(a.Component),C=(r(38),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"info"},null!==this.props.winner?n.a.createElement(n.a.Fragment,null,void 0===this.props.winner?n.a.createElement("h1",null," It's a tie ..."):n.a.createElement("h1",null," ",this.props.winner," is the Winner!"),n.a.createElement(w.a,{variant:"info",type:"submit",className:"play-button",onClick:this.props.playAgain},"Again?")):n.a.createElement("span",null,"It's ",n.a.createElement("b",null,this.props.players[this.props.isFirstPlayerTurn?0:1])," Turn!"))}}]),t}(a.Component));var z=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),r=t[0],l=t[1],i=Object(a.useState)(!1),s=Object(c.a)(i,2),u=s[0],o=s[1],p=Object(a.useState)(null),f=Object(c.a)(p,2),m=f[0],y=f[1],d=Object(a.useState)(!0),v=Object(c.a)(d,2),O=v[0],j=v[1],E=n.a.createRef();return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null,n.a.createElement(b,{size:3,isFirstPlayerTurn:O,handleClick:function(){j(!O)},gameStarted:u,winner:m,gameEnded:function(e){switch(e){case"win":var t=r[O?0:1];y(t);break;default:y(void 0)}},ref:E})),u?n.a.createElement(C,{players:r,isFirstPlayerTurn:O,winner:m,playAgain:function(){y(null),E.current.initBoard()}}):n.a.createElement(A,{winner:m,handleStart:function(e){l(e),o(!0),y(null)}}))};i.a.render(n.a.createElement(z,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.9ade80d6.chunk.js.map