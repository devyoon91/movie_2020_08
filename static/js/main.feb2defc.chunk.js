(this.webpackJsonpmovie_2020_08=this.webpackJsonpmovie_2020_08||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),o=a(7),m=a(1);var s=function(e){return l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement("strong",null,"\ud83d\udcda\ucd08\ubcf4\ubc29 \uc624\ud504\ub77c\uc778 \uc2a4\ud130\ub514")),l.a.createElement("p",null,l.a.createElement("strong",null,"\u2b50\ufe0f\uc8fc\uc81c")),l.a.createElement("ul",null,l.a.createElement("li",null,"\uc6f9 \uac1c\ubc1c\uc790 \uc2a4\ud130\ub514(FRONT, BACK)")),l.a.createElement("p",null,l.a.createElement("strong",null,"\ud83c\udfeb\uc2a4\ud130\ub514 \uc7a5\uc18c")),l.a.createElement("ul",null,l.a.createElement("li",null,"\uc11c\uc6b8 ( \uac74\ub300\uc785\uad6c\uc5ed ) (\uce74\ud398, \uc2a4\ud130\ub514\ub8f8)")),l.a.createElement("p",null,l.a.createElement("strong",null,"\ud83d\udc49\uc9c4\ud589\uc911 \uc2a4\ud130\ub514")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"[2020.08] \ub098\ub3c4 \ub9ac\uc5d1\ud2b8 \ub530\ub77c\ud574\ubcf4\uc790"))),l.a.createElement("p",null,l.a.createElement("strong",null,"\ud83d\udce2\uc2ac\ub799(Slack) \ucd08\ub300\ubc1b\uae30")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Slack - Chobobang"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,l.a.createElement("a",{href:"https://chobobang.slack.com/"},"chobobang.slack.com"))),l.a.createElement("li",null,"Slack \ucd08\ub300\ub294 ",l.a.createElement("code",null,"kimbyungyoun91@gmail.com")," \uba54\uc77c\ub85c \ubb38\uc758 \uc8fc\uc138\uc694"),l.a.createElement("li",null,"Slack \ub2c9\ub124\uc784\uc740 ",l.a.createElement("code",null,"\uc2e4\uba85")," \ub610\ub294 ",l.a.createElement("code",null,"\ud55c\uae00 \ub2c9\ub124\uc784")," \uc73c\ub85c \ubcc0\uacbd \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4")))))},i=a(10),u=a(11),E=a(13),v=a(12),p=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props,t=e.location;e.history;return t.state?l.a.createElement("span",null,t.state.title):null}}]),a}(l.a.Component),d=a(15),g=a.n(d),h=a(29),y=a(30),b=a.n(y),_=a(31);a(56);var f=function(e){var t=e.id,a=e.year,n=e.title,r=e.summary,c=e.poster,m=e.genres;return l.a.createElement(o.b,{to:{pathname:"/movie/".concat(t),state:Object(_.a)({year:a,title:n,genres:m,summary:r,poster:c},"genres",m)}},l.a.createElement("div",{className:"movie"},l.a.createElement("img",{src:c,alt:n,title:n}),l.a.createElement("div",{className:"movie_data"},l.a.createElement("h3",{className:"movie_title"},n),l.a.createElement("h5",{className:"movie_year"},a),l.a.createElement("ul",{className:"genres"},m&&m.map((function(e,t){return l.a.createElement("li",{key:t,className:"genres__genre"},e)}))),l.a.createElement("p",{className:"movie_summary"},r.slice(0,140),"..."))))},k=(a(62),function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isLoading:!0,movies:[]},e.getMovies=Object(h.a)(g.a.mark((function t(){var a,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return l.a.createElement("section",{className:"container"},t?l.a.createElement("div",{className:"loader"},l.a.createElement("span",{className:"loader__text"},"Loading...")):l.a.createElement("div",{className:"movies"},a.map((function(e){return l.a.createElement(f,{key:e.id,id:e.year,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(l.a.Component));a(63);var N=function(){return l.a.createElement("div",{className:"nav"},l.a.createElement(o.b,{to:"/movie_2020_08/"},"Home"),l.a.createElement(o.b,{to:"/movie_2020_08/about"},"About"))};var j=function(){return l.a.createElement(o.a,null,l.a.createElement(N,null),l.a.createElement(m.a,{path:"/movie_2020_08/",exact:!0,component:k}),l.a.createElement(m.a,{path:"/movie_2020_08/about",component:s}),l.a.createElement(m.a,{path:"/movie_2020_08/movie/:id",component:p}))};c.a.render(l.a.createElement(j,null),document.getElementById("potato"))}},[[33,1,2]]]);
//# sourceMappingURL=main.feb2defc.chunk.js.map