(this["webpackJsonpoperations-monitor"]=this["webpackJsonpoperations-monitor"]||[]).push([[0],{135:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),r=a(16),n=a.n(r),o=a(83),c=a(37),s=a(38),h=a(49),d=a(39),u=a(50),g=a(10);var m=function(e){return i.a.createElement(g.Group,null,i.a.createElement(g.Rect,{x:e.x,y:e.y,width:e.width,height:e.height,fillRadialGradientStartPoint:{x:e.width/2,y:e.height/2},fillRadialGradientEndPoint:{x:e.width/2,y:e.height/2},fillRadialGradientStartRadius:e.width>e.height?e.height:e.width,fillRadialGradientColorStops:e.available?[0,"rgba(63,145,60)",1,"rgba(103,233,98)"]:[0,"rgba(141,38,38)",1,"rgba(230,67,67)"],shadowBlur:5,stroke:"black",strokeWidth:3}),i.a.createElement(g.Text,{x:e.x+e.width/2-5,y:e.y+e.height/2-10,text:e.id,fontSize:20}))};var b=function(e){var t=e.horizontal?e.cellSize.width:e.cellSize.height,a=e.horizontal?e.cellSize.height:e.cellSize.width,l=e.slice[0],r=[];return e.parkingPointers.forEach((function(n){l++,r.push(i.a.createElement(m,{key:l,id:l,available:!0,x:e.offset.x+10+t*(n.i-1),y:e.offset.y+a*n.j,width:t,height:a}))})),i.a.createElement(i.a.Fragment,null,r)};var p=function(e){var t,a,l=[];for(t=0;t<e.debugGridDimensions.columns;t++){var r=function(){var r=a+e.debugGridDimensions.rows*t,n=e.parkingLotOffset.x+t*e.debugGridCellSize.width,o=e.parkingLotOffset.y+a*e.debugGridCellSize.height,c=e.debugCellTypes.road;n<e.parkingLotOffset.x+e.upperLeftSquareSide&&e.parkingLotOffset.y+o<e.upperLeftSquareSide&&(c=e.debugCellTypes.blockingSpace);var s=t,h=a;e.parkingPointers.forEach((function(t){t.i===s&&t.j===h&&(c=e.debugCellTypes.availableParking)})),0===t&&5===a&&(c=e.debugCellTypes.carAwaitingPickup),0===t&&4===a&&(c=e.debugCellTypes.carAwaitingOwner),0!==t||2!==a&&3!==a||(c=e.debugCellTypes.availableDropoff),4===t&&2===a&&(c=e.debugCellTypes.robotLocation),l.push(i.a.createElement(g.Rect,{key:r,x:n,y:o,width:e.debugGridCellSize.width,height:e.debugGridCellSize.height,fill:c,shadowBlur:3,stroke:"black",strokeWidth:.5}))};for(a=0;a<e.debugGridDimensions.rows;a++)r()}return i.a.createElement(i.a.Fragment,null,l)},f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={time:(new Date).toLocaleString()},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({time:(new Date).toLocaleString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return i.a.createElement("h3",null," ",this.state.time," ")}}]),t}(i.a.Component),E=a(143);var k=function(e){var t={height:750,width:401.4/288*750},a={x:380,y:10},l={height:t.height/6,width:t.width/4},r=[{i:2,j:1},{i:2,j:2},{i:3,j:1},{i:3,j:2},{i:2,j:3},{i:3,j:3},{i:2,j:4},{i:3,j:4}];return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(E.a,null,i.a.createElement(f,null)),i.a.createElement(g.Stage,{width:1900,height:825},i.a.createElement(g.Layer,null,i.a.createElement(g.Shape,{x:a.x,y:a.y,sceneFunc:function(e,a){e.beginPath(),e.moveTo(250,0),e.lineTo(250,250),e.lineTo(0,250),e.lineTo(0,t.height),e.lineTo(t.width,t.height),e.lineTo(t.width,0),e.closePath(),e.fillStrokeShape(a)},fill:"white",stroke:"black",strokeWidth:5}),i.a.createElement(b,{cellSize:l,parkingPointers:r,horizontal:!0,offset:{x:a.x+250,y:a.y},spaces:e.spacesAvailable,slice:[0,8]}),e.debugMode?i.a.createElement(p,{debugGridCellSize:l,debugGridDimensions:{rows:6,columns:4},parkingPointers:r,debugCellTypes:e.debugCellTypes,upperLeftSquareSide:250,parkingLotSize:t,parkingLotOffset:a}):null))))},y=a(148),w=a(146),v=a(144);var x=function(e){var t=i.a.createElement(y.a,{id:"popover-basic"},i.a.createElement(y.a.Title,{as:"h3"},"Legend"),i.a.createElement(y.a.Content,null,i.a.createElement(g.Stage,{width:240,height:280},i.a.createElement(g.Layer,null,i.a.createElement(g.Group,null,i.a.createElement(g.Rect,{x:5,y:5,width:30,height:30,fill:e.debugCellTypes.blockingSpace,shadowBlur:3,stroke:"black",strokeWidth:.5}),i.a.createElement(g.Text,{x:45,y:10,text:"Blocking Space",fontSize:20})),i.a.createElement(g.Group,null,i.a.createElement(g.Rect,{x:5,y:45,width:30,height:30,fill:e.debugCellTypes.road,shadowBlur:3,stroke:"black",strokeWidth:.5}),i.a.createElement(g.Text,{x:45,y:50,text:"Road",fontSize:20})),i.a.createElement(g.Group,null,i.a.createElement(g.Rect,{x:5,y:85,width:30,height:30,fill:e.debugCellTypes.availableParking,shadowBlur:3,stroke:"black",strokeWidth:.5}),i.a.createElement(g.Text,{x:45,y:90,text:"Available Parking",fontSize:20})),i.a.createElement(g.Group,null,i.a.createElement(g.Rect,{x:5,y:125,width:30,height:30,fill:e.debugCellTypes.availableDropoff,shadowBlur:3,stroke:"black",strokeWidth:.5}),i.a.createElement(g.Text,{x:45,y:130,text:"Available Dropoff",fontSize:20})),i.a.createElement(g.Group,null,i.a.createElement(g.Rect,{x:5,y:165,width:30,height:30,fill:e.debugCellTypes.carAwaitingPickup,shadowBlur:3,stroke:"black",strokeWidth:.5}),i.a.createElement(g.Text,{x:45,y:170,text:"Car Awaiting Pickup",fontSize:20})),i.a.createElement(g.Group,null,i.a.createElement(g.Rect,{x:5,y:205,width:30,height:30,fill:e.debugCellTypes.carAwaitingOwner,shadowBlur:3,stroke:"black",strokeWidth:.5}),i.a.createElement(g.Text,{x:45,y:210,text:"Car Awaiting Owner",fontSize:20})),i.a.createElement(g.Group,null,i.a.createElement(g.Rect,{x:5,y:245,width:30,height:30,fill:e.debugCellTypes.robotLocation,shadowBlur:3,stroke:"black",strokeWidth:.5}),i.a.createElement(g.Text,{x:45,y:250,text:"Robot Location",fontSize:20}))))));return i.a.createElement(w.a,{placement:"right",delay:{show:150,hide:150},overlay:t},i.a.createElement(v.a.Item,null,"Debug Legend"))},S=a(79),C=a.n(S);var T=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h3",{className:"mb-3"}," CCTV camera "),i.a.createElement(C.a,{audio:!1,videoConstraints:{width:1280,height:720,facingMode:"user"}})))};var A=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h3",null," Live stream from onboard Raspberry Pi cameras to be placed here")))},z=(a(135),a(80)),O=a(23),j=a(145),G=a(147),L=(a(136),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).debugCellTypes=Object.freeze({blockingSpace:"rgba(228, 27, 65, 0.2)",road:"rgba(255, 255, 255, 0.2)",availableParking:"rgba(103, 233, 98, 0.2)",availableDropoff:"rgba(34, 81, 221, 0.2)",carAwaitingPickup:"rgba(236, 140, 19, 0.2)",carAwaitingOwner:"rgba(94, 0, 255, 0.2)",robotLocation:"rgba(50, 50, 50, 0.2)"}),e.state={spacesAvailable:new Array(8).fill(!0),debugMode:!1},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toggleSpaceAvailable",value:function(e){var t=Object(o.a)(this.state.spacesAvailable);t[e]=!t[e],this.setState({spacesAvailable:t})}},{key:"toggleDebugMode",value:function(){this.setState({debugMode:!this.state.debugMode})}},{key:"componentDidMount",value:function(){this.toggleSpaceAvailable(4)}},{key:"render",value:function(){var e=this;return i.a.createElement(z.a,null,i.a.createElement(j.a,{bg:"primary",variant:"dark",sticky:"top"},i.a.createElement(j.a.Brand,null,"Finitech Operations Monitor"),i.a.createElement(G.a,{className:"mr-auto"},i.a.createElement(v.a,{title:"Parking Lot",id:"collasible-nav-dropdown"},i.a.createElement(v.a.Item,{href:"#/"},"View"),i.a.createElement(v.a.Divider,null),i.a.createElement(v.a.Item,{onClick:function(){e.toggleDebugMode()}},"Debug Mode"),i.a.createElement(x,{debugCellTypes:this.debugCellTypes})),i.a.createElement(v.a,{title:"Cameras",id:"collasible-nav-dropdown"},i.a.createElement(v.a.Item,{href:"#/overhead"},"CCTV"),i.a.createElement(v.a.Item,{href:"#/onboard"},"Onboard")))),i.a.createElement(O.c,null,i.a.createElement(O.a,{path:"/overhead"},i.a.createElement(T,null)),i.a.createElement(O.a,{path:"/onboard"},i.a.createElement(A,null)),i.a.createElement(O.a,{path:"/"},i.a.createElement(k,{debugMode:this.state.debugMode,debugCellTypes:this.debugCellTypes,spacesAvailable:this.state.spacesAvailable}))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,a){e.exports=a(141)}},[[84,1,2]]]);
//# sourceMappingURL=main.e5b6883c.chunk.js.map