(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(164),l=a.n(o),c=a(158),d=a(160),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(d.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("article",{className:"post-content "+(e.frontmatter.thumbnail||"no-image")},s.a.createElement("header",{className:"post-content-header"},s.a.createElement("h1",{className:"post-content-title"},e.frontmatter.title)),e.frontmatter.description&&s.a.createElement("p",{class:"post-content-excerpt"},e.frontmatter.description),e.frontmatter.thumbnail&&s.a.createElement("div",{className:"post-content-image"},s.a.createElement(l.a,{className:"kg-image",fluid:e.frontmatter.thumbnail.childImageSharp.fluid,alt:e.frontmatter.title})),s.a.createElement("div",{className:"post-content-body",dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("footer",{className:"post-content-footer"})))},t}(s.a.Component);t.default=u;var f="3008354207"},156:function(e,t,a){var r;e.exports=(r=a(159))&&r.default||r},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(156);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},158:function(e,t,a){"use strict";a(74);var r=a(0),i=a.n(r),n=a(157);t.a=function(e){var t="undefined"!=typeof window?window.location.pathname:"",a="nav-home",r="nav-about";t.match(/\/about/)?(r="nav-about nav-current",a="nav-home"):"/"===t&&(r="nav-about",a="nav-home nav-current"),console.log("path",t);var s=e.title,o=e.children,l=i.a.useState(!1),c=l[0],d=l[1];return i.a.createElement("div",{className:"site-wrapper "+(c?"site-head-open":"")},i.a.createElement("header",{className:"site-head"},i.a.createElement("div",{className:"site-head-container"},i.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return d(!c)}},i.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},i.a.createElement("div",{className:"hamburger-box"},i.a.createElement("div",{className:"hamburger-inner"})))),i.a.createElement("nav",{id:"swup",class:"site-head-left"},i.a.createElement("ul",{className:"nav",role:"menu"},i.a.createElement("li",{className:a,role:"menuitem"},i.a.createElement(n.a,{to:"/"},"Home")),i.a.createElement("li",{className:r,role:"menuitem"},i.a.createElement(n.a,{to:"/about"},"About")))),i.a.createElement("div",{className:"site-head-center"},i.a.createElement(n.a,{className:"site-head-logo",to:"/"},s)),i.a.createElement("div",{className:"site-head-right"},i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"https://github.com/sntx/react-native-reflect",title:"GitHub",target:"_blank",rel:"noopener noreferrer"},"Facebook"),i.a.createElement("a",{href:"https://twitter.com/sntx_dev",title:"Twitter",target:"_blank",rel:"noopener noreferrer"},"Twitter"))))),i.a.createElement("main",{id:"site-main",className:"site-main"},i.a.createElement("div",{id:"swup",className:"transition-fade"},o)),i.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",i.a.createElement(n.a,{to:"/"},s)," — Built with"," ",i.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")))}},159:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,a){"use strict";var r=a(161),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(162),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Santiago Ferreira",description:"Highly motivated, detail-oriented software developer, designer and musician.",author:"Santiago Ferreira"}}}}},164:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(76)),l=r(a(77)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,w=e.Tag,E=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,N=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:S?1:0,transition:N?"opacity "+y+"ms":"none"},o),R="boolean"==typeof v?"lightgray":v,I={transitionDelay:y+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},N&&I,o,f),O={title:t,alt:this.state.isVisible?"":a,style:k,className:p};if(m){var z=m;return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),R&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&I)}),z.base64&&c.default.createElement(b,(0,l.default)({src:z.base64},O)),z.tracedSVG&&c.default.createElement(b,(0,l.default)({src:z.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},z))}}))}if(h){var T=h,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete j.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},R&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:R,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},N&&I)}),T.base64&&c.default.createElement(b,(0,l.default)({src:T.base64},O)),T.tracedSVG&&c.default.createElement(b,(0,l.default)({src:T.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,T.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),c.default.createElement(b,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},T))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:y,sizes:w,fixed:y,fluid:w,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=v;t.default=E}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-029232ea6c769b733354.js.map