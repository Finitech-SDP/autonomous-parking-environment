(this["webpackJsonpoperations-monitor"]=this["webpackJsonpoperations-monitor"]||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/car.83d2582b.svg"},130:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(25),l=a.n(r),o=a(78),h=a(34),c=a(35),d=a(42),s=a(36),u=a(43),y=a(12);var p=function(e){var t=e.robotPath,a=e.parkingLotOffset,i=e.debugGridCellSize,r=[];return t.forEach((function(e){var t=a.x+e.i*i.width+i.width/2,n=a.y+e.j*i.height+i.height/2;r.push(t),r.push(n)})),n.a.createElement(n.a.Fragment,null,n.a.createElement(y.Arrow,{points:r,shadowBlur:3,stroke:"black",strokeWidth:1.5}))},g=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(s.a)(t).call(this))).state={time:(new Date).toLocaleString()},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({time:(new Date).toLocaleString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return n.a.createElement("h3",null," ",this.state.time," ")}}]),t}(n.a.Component),m=a(79),b=a(66),x=a(67),w=a.n(x),k=a(129);var v=function(e){var t=e.spacesAvailable,a=e.debugGridCellSize,i=e.offset,r=e.debugMode,l=w()(k),o=Object(m.a)(l,1)[0];return b.map((function(e,l){var h=null,c=null,d=!1;switch(e.type){case"parking":h=n.a.createElement(y.Group,{key:l},n.a.createElement(y.Rect,{x:i.x+e.x*a.width,y:i.y+e.y*a.height,width:a.width,height:a.height,fillRadialGradientStartPoint:{x:a.width/2,y:a.height/2},fillRadialGradientEndPoint:{x:a.width/2,y:a.height/2},fillRadialGradientStartRadius:a.width>a.height?a.height:a.width,fillRadialGradientColorStops:t.includes("R"+e.y+"C"+e.x)?[0,"rgba(63,145,60)",1,"rgba(103,233,98)"]:[0,"rgba(141,38,38)",1,"rgba(230,67,67)"],shadowBlur:5,stroke:"black",strokeWidth:3}),t.includes("R"+e.y+"C"+e.x)?null:n.a.createElement(y.Image,{x:i.x+e.x*a.width,y:i.y+e.y*a.height-65,scale:{x:.5,y:.5},image:o,shadowBlur:5})),c="Parking space",d=!0;break;case"hub":h=n.a.createElement(n.a.Fragment,null,n.a.createElement(y.Rect,{x:i.x+e.x*a.width,y:i.y+e.y*a.height,width:a.width,height:a.height,fillRadialGradientStartPoint:{x:a.width/2,y:a.height/2},fillRadialGradientEndPoint:{x:a.width/2,y:a.height/2},fillRadialGradientStartRadius:a.width>a.height?a.height:a.width,fillRadialGradientColorStops:[0,"rgb(14, 82, 165)",1,"rgb(19, 115, 236)"],shadowBlur:5,stroke:"black",strokeWidth:3}),t.includes("R"+e.y+"C"+e.x)?null:n.a.createElement(y.Image,{x:i.x+e.x*a.width,y:i.y+e.y*a.height-65,scale:{x:.5,y:.5},image:o,shadowBlur:5})),c="Hub",d=!0;break;case"road":c="Road";break;case"blocked":c="Blocked space"}return n.a.createElement(y.Group,{key:l},h,r?n.a.createElement(y.Group,null,n.a.createElement(y.Rect,{x:i.x+e.x*a.width,y:i.y+e.y*a.height,width:a.width,height:a.height,fill:"rgba(255, 255, 255, 0.2)",shadowBlur:5,stroke:"black",strokeWidth:3}),n.a.createElement(y.Text,{x:i.x+e.x*a.width+a.width/10,y:i.y+e.y*a.height+a.height/5,text:"R"+e.y+"C"+e.x+" ("+c+")",fontSize:20}),n.a.createElement(y.Text,{x:i.x+e.x*a.width+a.width/10,y:i.y+e.y*a.height+a.height/2+30,text:d?"Status: "+("hub"===e.type?t.includes("R"+e.y+"C"+e.x)?"Available":"Awaiting Parking":"parking"===e.type?t.includes("R"+e.y+"C"+e.x)?"Available":"Occupied":null):null,fontSize:20})):null)}))};var f=function(e){var t=e.spacesAvailable,a=e.debugMode,i=e.robotPath,r={height:750,width:401.4/288*750},l={x:(window.innerWidth-30)/2-r.width/2,y:30},o={height:r.height/6,width:r.width/4};return n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement(y.Stage,{width:1800,height:835},n.a.createElement(y.Layer,null,n.a.createElement(y.Shape,{x:l.x,y:l.y,sceneFunc:function(e,t){e.beginPath(),e.moveTo(250,0),e.lineTo(250,250),e.lineTo(0,250),e.lineTo(0,r.height),e.lineTo(r.width,r.height),e.lineTo(r.width,0),e.closePath(),e.fillStrokeShape(t)},fill:"white",stroke:"black",strokeWidth:5}),n.a.createElement(v,{spacesAvailable:t,debugMode:a,debugGridCellSize:o,offset:l}),n.a.createElement(p,{debugGridCellSize:o,robotPath:i,parkingLotOffset:l}))))};var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h3",{className:"mb-3"}," CCTV camera ")))};var R=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h3",null," Live stream from onboard Raspberry Pi cameras to be placed here")))},C=(a(130),a(68)),S=a(21),j=a(143),A=a(144),O=a(142),P=(a(131),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(s.a)(t).call(this))).state={spacesAvailable:["R0C1","R1C1","R0C3","R1C3","R2C0","R3C0"],robotPath:[{i:0,j:5},{i:2,j:5},{i:2,j:4},{i:2,j:3},{i:2,j:2},{i:2,j:1},{i:3,j:1}],debugMode:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleSpaceAvailable",value:function(e){var t=Object(o.a)(this.state.spacesAvailable);t[e]=!t[e],this.setState({spacesAvailable:t})}},{key:"toggleDebugMode",value:function(){this.setState({debugMode:!this.state.debugMode})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement(C.a,null,n.a.createElement(j.a,{bg:"primary",variant:"dark",sticky:"top"},n.a.createElement(j.a.Brand,null,"Finitech Operations Monitor"),n.a.createElement(A.a,{className:"mr-auto"},n.a.createElement(O.a,{title:"Parking Lot",id:"collasible-nav-dropdown"},n.a.createElement(O.a.Item,{href:"#/"},"View"),n.a.createElement(O.a.Divider,null),n.a.createElement(O.a.Item,{onClick:function(){e.toggleDebugMode()}},"Debug Mode")),n.a.createElement(O.a,{title:"Cameras",id:"collasible-nav-dropdown"},n.a.createElement(O.a.Item,{href:"#/overhead"},"CCTV"),n.a.createElement(O.a.Item,{href:"#/onboard"},"Onboard")))),n.a.createElement(S.c,null,n.a.createElement(S.a,{path:"/overhead"},n.a.createElement(E,null)),n.a.createElement(S.a,{path:"/onboard"},n.a.createElement(R,null)),n.a.createElement(S.a,{path:"/"},n.a.createElement(f,{robotPath:this.state.robotPath,debugMode:this.state.debugMode,spacesAvailable:this.state.spacesAvailable}))))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e){e.exports=JSON.parse('[{"x":0,"y":0,"type":"blocked"},{"x":1,"y":0,"type":"parking"},{"x":2,"y":0,"type":"road"},{"x":3,"y":0,"type":"parking"},{"x":0,"y":1,"type":"blocked"},{"x":1,"y":1,"type":"parking"},{"x":2,"y":1,"type":"road"},{"x":3,"y":1,"type":"parking"},{"x":0,"y":2,"type":"hub"},{"x":1,"y":2,"type":"road"},{"x":2,"y":2,"type":"road"},{"x":3,"y":2,"type":"parking"},{"x":0,"y":3,"type":"hub"},{"x":1,"y":3,"type":"road"},{"x":2,"y":3,"type":"road"},{"x":3,"y":3,"type":"parking"},{"x":0,"y":4,"type":"hub"},{"x":1,"y":4,"type":"road"},{"x":2,"y":4,"type":"road"},{"x":3,"y":4,"type":"parking"},{"x":0,"y":5,"type":"hub"},{"x":1,"y":5,"type":"road"},{"x":2,"y":5,"type":"road"},{"x":3,"y":5,"type":"parking"}]')},80:function(e,t,a){e.exports=a(139)}},[[80,1,2]]]);
//# sourceMappingURL=main.5542a8db.chunk.js.map