!function(t,e,n){"use strict";Foundation.libs.topbar={name:"topbar",version:"4.3.2",settings:{index:0,stickyClass:"sticky",custom_back_text:!0,back_text:"Back",is_hover:!0,mobile_show_parent_link:!1,scrolltop:!0,init:!1},init:function(n,r,i){Foundation.inherit(this,"data_options addCustomRule");var a=this;return"object"==typeof r?t.extend(!0,this.settings,r):"undefined"!=typeof i&&t.extend(!0,this.settings,i),"string"!=typeof r?(t(".top-bar, [data-topbar]").each(function(){t.extend(!0,a.settings,a.data_options(t(this))),a.settings.$w=t(e),a.settings.$topbar=t(this),a.settings.$section=a.settings.$topbar.find("section"),a.settings.$titlebar=a.settings.$topbar.children("ul").first(),a.settings.$topbar.data("index",0);var n=a.settings.$topbar.parent();n.hasClass("fixed")||n.hasClass(a.settings.stickyClass)?(a.settings.$topbar.data("height",a.outerHeight(n)),a.settings.$topbar.data("stickyoffset",n.offset().top)):a.settings.$topbar.data("height",a.outerHeight(a.settings.$topbar));var r=t("<div class='top-bar-js-breakpoint'/>").insertAfter(a.settings.$topbar);a.settings.breakPoint=r.width(),r.remove(),a.assemble(),a.settings.is_hover&&a.settings.$topbar.find(".has-dropdown").addClass("not-click"),a.addCustomRule(".f-topbar-fixed { padding-top: "+a.settings.$topbar.data("height")+"px }"),a.settings.$topbar.parent().hasClass("fixed")&&t("body").addClass("f-topbar-fixed")}),a.settings.init||this.events(),this.settings.init):this[r].call(this,i)},toggle:function(){var n=this,r=t(".top-bar, [data-topbar]"),i=r.find("section, .section");n.breakpoint()&&(n.rtl?(i.css({right:"0%"}),i.find(">.name").css({right:"100%"})):(i.css({left:"0%"}),i.find(">.name").css({left:"100%"})),i.find("li.moved").removeClass("moved"),r.data("index",0),r.toggleClass("expanded").css("height","")),n.settings.scrolltop?r.hasClass("expanded")?r.parent().hasClass("fixed")&&(n.settings.scrolltop?(r.parent().removeClass("fixed"),r.addClass("fixed"),t("body").removeClass("f-topbar-fixed"),e.scrollTo(0,0)):r.parent().removeClass("expanded")):r.hasClass("fixed")&&(r.parent().addClass("fixed"),r.removeClass("fixed"),t("body").addClass("f-topbar-fixed")):(r.parent().hasClass(n.settings.stickyClass)&&r.parent().addClass("fixed"),r.parent().hasClass("fixed")&&(r.hasClass("expanded")?(r.addClass("fixed"),r.parent().addClass("expanded")):(r.removeClass("fixed"),r.parent().removeClass("expanded"),n.updateStickyPositioning())))},timer:null,events:function(){var r=this;t(this.scope).off(".fndtn.topbar").on("click.fndtn.topbar",".top-bar .toggle-topbar, [data-topbar] .toggle-topbar",function(t){t.preventDefault(),r.toggle()}).on("click.fndtn.topbar",".top-bar li.has-dropdown",function(e){var n=t(this),i=t(e.target),a=n.closest("[data-topbar], .top-bar");return a.data("topbar"),i.data("revealId")?(r.toggle(),void 0):(r.breakpoint()||(!r.settings.is_hover||Modernizr.touch)&&(e.stopImmediatePropagation(),"A"===i[0].nodeName&&i.parent().hasClass("has-dropdown")&&e.preventDefault(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):n.addClass("hover")),void 0)}).on("click.fndtn.topbar",".top-bar .has-dropdown>a, [data-topbar] .has-dropdown>a",function(n){if(r.breakpoint()&&t(e).width()!=r.settings.breakPoint){n.preventDefault();var i=t(this),a=i.closest(".top-bar, [data-topbar]"),o=a.find("section, .section"),s=(i.next(".dropdown").outerHeight(),i.closest("li"));a.data("index",a.data("index")+1),s.addClass("moved"),r.rtl?(o.css({right:-(100*a.data("index"))+"%"}),o.find(">.name").css({right:100*a.data("index")+"%"})):(o.css({left:-(100*a.data("index"))+"%"}),o.find(">.name").css({left:100*a.data("index")+"%"})),a.css("height",r.outerHeight(i.siblings("ul"),!0)+r.settings.$topbar.data("height"))}}),t(e).on("resize.fndtn.topbar",function(){if("undefined"!=typeof r.settings.$topbar){var e,i=r.settings.$topbar.parent("."+this.settings.stickyClass);if(!r.breakpoint()){var a=r.settings.$topbar.hasClass("expanded");t(".top-bar, [data-topbar]").css("height","").removeClass("expanded").find("li").removeClass("hover"),a&&r.toggle()}i.length>0&&(i.hasClass("fixed")?(i.removeClass("fixed"),e=i.offset().top,t(n.body).hasClass("f-topbar-fixed")&&(e-=r.settings.$topbar.data("height")),r.settings.$topbar.data("stickyoffset",e),i.addClass("fixed")):(e=i.offset().top,r.settings.$topbar.data("stickyoffset",e)))}}.bind(this)),t("body").on("click.fndtn.topbar",function(e){var n=t(e.target).closest("li").closest("li.hover");n.length>0||t(".top-bar li, [data-topbar] li").removeClass("hover")}),t(this.scope).on("click.fndtn",".top-bar .has-dropdown .back, [data-topbar] .has-dropdown .back",function(e){e.preventDefault();var n=t(this),i=n.closest(".top-bar, [data-topbar]"),a=i.find("section, .section"),o=n.closest("li.moved"),s=o.parent();i.data("index",i.data("index")-1),r.rtl?(a.css({right:-(100*i.data("index"))+"%"}),a.find(">.name").css({right:100*i.data("index")+"%"})):(a.css({left:-(100*i.data("index"))+"%"}),a.find(">.name").css({left:100*i.data("index")+"%"})),0===i.data("index")?i.css("height",""):i.css("height",r.outerHeight(s,!0)+r.settings.$topbar.data("height")),setTimeout(function(){o.removeClass("moved")},300)})},breakpoint:function(){return t(n).width()<=this.settings.breakPoint||t("html").hasClass("lt-ie9")},assemble:function(){var e=this;this.settings.$section.detach(),this.settings.$section.find(".has-dropdown>a").each(function(){var n=t(this),r=n.siblings(".dropdown"),i=n.attr("href");if(e.settings.mobile_show_parent_link&&i&&i.length>1)var a=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="'+i+'">'+n.text()+"</a></li>");else var a=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');1==e.settings.custom_back_text?a.find("h5>a").html(e.settings.back_text):a.find("h5>a").html("&laquo; "+n.html()),r.prepend(a)}),this.settings.$section.appendTo(this.settings.$topbar),this.sticky()},height:function(e){var n=0,r=this;return e.find("> li").each(function(){n+=r.outerHeight(t(this),!0)}),n},sticky:function(){var n=t(e),r=this;n.scroll(function(){r.updateStickyPositioning()})},updateStickyPositioning:function(){var n="."+this.settings.stickyClass,r=t(e);if(t(n).length>0){var i=this.settings.$topbar.data("stickyoffset");t(n).hasClass("expanded")||(r.scrollTop()>i?t(n).hasClass("fixed")||(t(n).addClass("fixed"),t("body").addClass("f-topbar-fixed")):r.scrollTop()<=i&&t(n).hasClass("fixed")&&(t(n).removeClass("fixed"),t("body").removeClass("f-topbar-fixed")))}},off:function(){t(this.scope).off(".fndtn.topbar"),t(e).off(".fndtn.topbar")},reflow:function(){}}}(Foundation.zj,this,this.document);