(self.webpackChunkwebpacktemplate=self.webpackChunkwebpacktemplate||[]).push([[891],{891:(a,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>g});var l=t(3963),n=t(1727);function i(){return(i=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a}).apply(this,arguments)}var s={update:function(){var a=this,e=a.rtl,t=a.params.pagination;if(t.el&&a.pagination.el&&a.pagination.$el&&0!==a.pagination.$el.length){var n,i=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,s=a.pagination.$el,r=a.params.loop?Math.ceil((i-2*a.loopedSlides)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?((n=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup))>i-1-2*a.loopedSlides&&(n-=i-2*a.loopedSlides),n>r-1&&(n-=r),n<0&&"bullets"!==a.params.paginationType&&(n=r+n)):n=void 0!==a.snapIndex?a.snapIndex:a.activeIndex||0,"bullets"===t.type&&a.pagination.bullets&&a.pagination.bullets.length>0){var o,p,u,d=a.pagination.bullets;if(t.dynamicBullets&&(a.pagination.bulletSize=d.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),s.css(a.isHorizontal()?"width":"height",a.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==a.previousIndex&&(a.pagination.dynamicBulletIndex+=n-a.previousIndex,a.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?a.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:a.pagination.dynamicBulletIndex<0&&(a.pagination.dynamicBulletIndex=0)),o=n-a.pagination.dynamicBulletIndex,u=((p=o+(Math.min(d.length,t.dynamicMainBullets)-1))+o)/2),d.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),s.length>1)d.each((function(a){var e=(0,l.Z)(a),i=e.index();i===n&&e.addClass(t.bulletActiveClass),t.dynamicBullets&&(i>=o&&i<=p&&e.addClass(t.bulletActiveClass+"-main"),i===o&&e.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),i===p&&e.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var c=d.eq(n),g=c.index();if(c.addClass(t.bulletActiveClass),t.dynamicBullets){for(var m=d.eq(o),y=d.eq(p),v=o;v<=p;v+=1)d.eq(v).addClass(t.bulletActiveClass+"-main");if(a.params.loop)if(g>=d.length-t.dynamicMainBullets){for(var b=t.dynamicMainBullets;b>=0;b-=1)d.eq(d.length-b).addClass(t.bulletActiveClass+"-main");d.eq(d.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else m.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),y.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else m.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),y.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var C=Math.min(d.length,t.dynamicMainBullets+4),h=(a.pagination.bulletSize*C-a.pagination.bulletSize)/2-u*a.pagination.bulletSize,f=e?"right":"left";d.css(a.isHorizontal()?f:"top",h+"px")}}if("fraction"===t.type&&(s.find("."+t.currentClass).text(t.formatFractionCurrent(n+1)),s.find("."+t.totalClass).text(t.formatFractionTotal(r))),"progressbar"===t.type){var x;x=t.progressbarOpposite?a.isHorizontal()?"vertical":"horizontal":a.isHorizontal()?"horizontal":"vertical";var w=(n+1)/r,B=1,A=1;"horizontal"===x?B=w:A=w,s.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+B+") scaleY("+A+")").transition(a.params.speed)}"custom"===t.type&&t.renderCustom?(s.html(t.renderCustom(a,n+1,r)),a.emit("paginationRender",s[0])):a.emit("paginationUpdate",s[0]),s[a.params.watchOverflow&&a.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var a=this,e=a.params.pagination;if(e.el&&a.pagination.el&&a.pagination.$el&&0!==a.pagination.$el.length){var t=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,l=a.pagination.$el,n="";if("bullets"===e.type){for(var i=a.params.loop?Math.ceil((t-2*a.loopedSlides)/a.params.slidesPerGroup):a.snapGrid.length,s=0;s<i;s+=1)e.renderBullet?n+=e.renderBullet.call(a,s,e.bulletClass):n+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";l.html(n),a.pagination.bullets=l.find("."+e.bulletClass.replace(/ /g,"."))}"fraction"===e.type&&(n=e.renderFraction?e.renderFraction.call(a,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',l.html(n)),"progressbar"===e.type&&(n=e.renderProgressbar?e.renderProgressbar.call(a,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',l.html(n)),"custom"!==e.type&&a.emit("paginationRender",a.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=(0,l.Z)(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&t.length>1&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass.replace(/ /g,"."),(function(e){e.preventDefault();var t=(0,l.Z)(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)})),(0,n.l7)(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var a=this,e=a.params.pagination;if(e.el&&a.pagination.el&&a.pagination.$el&&0!==a.pagination.$el.length){var t=a.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),a.pagination.bullets&&a.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass.replace(/ /g,"."))}}};const r={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(a){return a},formatFractionTotal:function(a){return a},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){(0,n.cR)(this,{pagination:i({dynamicBulletIndex:0},s)})},on:{init:function(a){a.pagination.init(),a.pagination.render(),a.pagination.update()},activeIndexChange:function(a){(a.params.loop||void 0===a.snapIndex)&&a.pagination.update()},snapIndexChange:function(a){a.params.loop||a.pagination.update()},slidesLengthChange:function(a){a.params.loop&&(a.pagination.render(),a.pagination.update())},snapGridLengthChange:function(a){a.params.loop||(a.pagination.render(),a.pagination.update())},destroy:function(a){a.pagination.destroy()},click:function(a,e){a.params.pagination.el&&a.params.pagination.hideOnClick&&a.pagination.$el.length>0&&!(0,l.Z)(e.target).hasClass(a.params.pagination.bulletClass)&&(!0===a.pagination.$el.hasClass(a.params.pagination.hiddenClass)?a.emit("paginationShow"):a.emit("paginationHide"),a.pagination.$el.toggleClass(a.params.pagination.hiddenClass))}}};var o=t(2644);function p(){return(p=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a}).apply(this,arguments)}var u={run:function(){var a=this,e=a.slides.eq(a.activeIndex),t=a.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(t=e.attr("data-swiper-autoplay")||a.params.autoplay.delay),clearTimeout(a.autoplay.timeout),a.autoplay.timeout=(0,n.Y3)((function(){var e;a.params.autoplay.reverseDirection?a.params.loop?(a.loopFix(),e=a.slidePrev(a.params.speed,!0,!0),a.emit("autoplay")):a.isBeginning?a.params.autoplay.stopOnLastSlide?a.autoplay.stop():(e=a.slideTo(a.slides.length-1,a.params.speed,!0,!0),a.emit("autoplay")):(e=a.slidePrev(a.params.speed,!0,!0),a.emit("autoplay")):a.params.loop?(a.loopFix(),e=a.slideNext(a.params.speed,!0,!0),a.emit("autoplay")):a.isEnd?a.params.autoplay.stopOnLastSlide?a.autoplay.stop():(e=a.slideTo(0,a.params.speed,!0,!0),a.emit("autoplay")):(e=a.slideNext(a.params.speed,!0,!0),a.emit("autoplay")),(a.params.cssMode&&a.autoplay.running||!1===e)&&a.autoplay.run()}),t)},start:function(){var a=this;return void 0===a.autoplay.timeout&&!a.autoplay.running&&(a.autoplay.running=!0,a.emit("autoplayStart"),a.autoplay.run(),!0)},stop:function(){var a=this;return!!a.autoplay.running&&void 0!==a.autoplay.timeout&&(a.autoplay.timeout&&(clearTimeout(a.autoplay.timeout),a.autoplay.timeout=void 0),a.autoplay.running=!1,a.emit("autoplayStop"),!0)},pause:function(a){var e=this;e.autoplay.running&&(e.autoplay.paused||(e.autoplay.timeout&&clearTimeout(e.autoplay.timeout),e.autoplay.paused=!0,0!==a&&e.params.autoplay.waitForTransition?(e.$wrapperEl[0].addEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].addEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd)):(e.autoplay.paused=!1,e.autoplay.run())))},onVisibilityChange:function(){var a=this,e=(0,o.Me)();"hidden"===e.visibilityState&&a.autoplay.running&&a.autoplay.pause(),"visible"===e.visibilityState&&a.autoplay.paused&&(a.autoplay.run(),a.autoplay.paused=!1)},onTransitionEnd:function(a){var e=this;e&&!e.destroyed&&e.$wrapperEl&&a.target===e.$wrapperEl[0]&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}};const d={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){(0,n.cR)(this,{autoplay:p({},u,{running:!1,paused:!1})})},on:{init:function(a){a.params.autoplay.enabled&&(a.autoplay.start(),(0,o.Me)().addEventListener("visibilitychange",a.autoplay.onVisibilityChange))},beforeTransitionStart:function(a,e,t){a.autoplay.running&&(t||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(e):a.autoplay.stop())},sliderFirstMove:function(a){a.autoplay.running&&(a.params.autoplay.disableOnInteraction?a.autoplay.stop():a.autoplay.pause())},touchEnd:function(a){a.params.cssMode&&a.autoplay.paused&&!a.params.autoplay.disableOnInteraction&&a.autoplay.run()},destroy:function(a){a.autoplay.running&&a.autoplay.stop(),(0,o.Me)().removeEventListener("visibilitychange",a.autoplay.onVisibilityChange)}}};var c=t(1432);c.Z.use([r,d]);const g=function(a){return a.forEach((function(a){var e={slidesPerView:1,pagination:{el:a.querySelector(".header-popup-slider__pagination"),type:"bullets",clickable:!0,bulletClass:"header-popup-slider__pagination-bullet",bulletActiveClass:"header-popup-slider__pagination-bullet_active",renderBullet:function(a,e){return'<span class="'.concat(e,'">\n                                <span class="header-popup-slider__pagination-circle">\n                                    <span class="header-popup-slider__pagination-circle-half"></span>\n                                    <span class="header-popup-slider__pagination-circle-half header-popup-slider__pagination-circle-half_right"></span>\n                                </span>\n                                </span>')}},loop:!0,autoplay:{delay:3e3}};new c.Z(a,e)}))}}}]);