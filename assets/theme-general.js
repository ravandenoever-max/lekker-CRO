// JavaScript Document
if (window.location.host == 'thelekkercompany.com') {
  window.current_domain = 'thelekkercompany.com';
} else if (window.location.host == 'www.thelekkercompany.com') {
  window.current_domain = 'thelekkercompany.com';
} else if (window.location.host == 'shop.thelekkercompany.com') {
  window.current_domain = 'thelekkercompany.com';
} else if (window.location.host == '127.0.0.1:9292') {
  window.current_domain = '127.0.0.1';
} else {
  window.current_domain = 'lekker-company-shop.myshopify.com';
}
window.ajax_domain = '/';

function cl(print_me){console.log(''+print_me)}
function makeRandID(){for(var r="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=0;t < 8;t++)r+=a.charAt(Math.floor(Math.random()*a.length));return r}
function setIntervalX(callback,delay,repetitions){var x=0, intervalID=window.setInterval(function(){callback(); if (++x === repetitions) { window.clearInterval(intervalID); }}, delay)}
function getFullPageWidthPageLoad(){ setIntervalX(function () { var xx = getFullPageWidth(); }, 16, 20); }
function getFullPageWidth(){
  "use strict";
  window.windoww = window.innerWidth!=null?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body!=null?document.body.clientWidth:null
  $('.js-website-windoww').attr('value',window.windoww);
  return window.windoww
}
function getPageWidth(){ return getFullPageWidth(); }
function getFullPageHeight(){
  "use strict";
  window.windowh = window.innerHeight!=null?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body!=null?document.body.clientHeight:null
  return window.windowh
}
function getPageHeight(){ return getFullPageHeight(); }
function forceUrl(goto_url){
  var gotopx = 0;
  $('html,body').animate({scrollTop:gotopx},10);
  window.location.replace(goto_url);
  return false
}
function gotoUrl(goto_url){window.location.href=goto_url;return false}
function openUrl(this_url){var win=window.open(this_url, "_blank"); win.focus();return false}
function openUrlPopup(this_url){var win= window.open(this_url,"_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=640,height=400");win.focus();return false}
function submitForm(form_el){form_el.submit();return false}
function submitFormID(form_id){$('#'+form_id).submit();return false}
function isFunction(possibleFunction){return typeof(possibleFunction)===typeof(Function)}
function disableBodyScroll(){$('html,body').css('overflow','hidden')}
function enableBodyScroll(){$('html,body').css('overflow','')}
function triggerMouseEvent(node,eventType){var clickEvent=document.createEvent('MouseEvents');clickEvent.initEvent(eventType,true,true);node.dispatchEvent(clickEvent)}
function js_array_shuffle(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue;}return array}
function js_array_range(start,end){return Array(end-start+1).fill().map((_,idx)=>start+idx)}
function getUrlParameter(sParam){var sPageURL=window.location.search.substring(1),sURLVariables=sPageURL.split('&'),sParameterName,i;for(i=0;i<sURLVariables.length; i++) {sParameterName=sURLVariables[i].split('=');if(sParameterName[0]===sParam){return typeof sParameterName[1]===undefined?true:decodeURIComponent(sParameterName[1]);}}return false}
function capitalizeFirstLetter(string){return string.charAt(0).toUpperCase()+string.slice(1)}
function isEmpty(value){return typeof value=='string'&&!value.trim()||typeof value=='undefined'||value===null}
function ValidateEmail(given_mail){if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,12})+$/.test(given_mail)){return(true)}return(false)}

function InitAnnouncement() {
  if ( $('.announcement-bar__element-left').length ) {
    var outer_length = $('.announcement-bar__element-left').outerWidth();
    var inner_length = $('.announcement-bar__message').outerWidth();
    if (inner_length > outer_length) {
      var bar__message = $('.--announcement-marquee__inner').html(),
          new_bar__message = bar__message + ' ' + bar__message + ' ' + bar__message;
      $('.--announcement-marquee__inner').html( new_bar__message );
      $('.--announcement-marquee').addClass('announcement-marquee').removeClass('--announcement-marquee');
      $('.--announcement-marquee__inner').addClass('announcement-marquee__inner').removeClass('--announcement-marquee__inner');
    }
  }
}

function addTextareaAutoResize() { /* textarea auto resize height */
	if ( $('body').hasClass('browser-ie') === true || $('body').hasClass('browser-msie') === true ) {
		if ( document.querySelector("#contact_message") ) {
			document.querySelector("#contact_message").style.height = "200px";
		}
	} else {
		if ( document.querySelectorAll('[data-autoresize]').length ) {
			document.querySelectorAll('[data-autoresize]').forEach(function (element) {
				element.style.boxSizing = 'border-box';
				var offset = element.offsetHeight - element.clientHeight;
				element.addEventListener('input', function (event) {
					event.target.style.height = 'auto';
					event.target.style.height = event.target.scrollHeight + offset + 'px';
				});
				element.style.height = element.scrollHeight + offset + "px";
				element.removeAttribute('data-autoresize');
			});
		}
	}
}

function clickOrigin(e){
  var target = e.target; var tag = [];
  tag.tagType = target.tagName.toLowerCase();
  if (tag.tagType != 'svg') {
   if (target.className != undefined) {
    var target_className = target.className;
    var parent_className = target.parentNode.className;
    if ( target_className !== null && target_className.includes(" ") ) {
      tag.tagClass = target_className.split(' ');
    } else {
      tag.tagClass = target_className
    }
    if ( parent_className !== null && parent_className.includes(" ") ) {
      tag.parent_tagClass = parent_className.split(' ');
    } else {
      tag.parent_tagClass = parent_className
    }
    tag.id = target.id;
    tag.href = target.getAttribute('href');
    tag.parent_href = target.parentNode.getAttribute('href');
    tag.parent = target.parentNode.tagName.toLowerCase();
    tag.target = target.getAttribute('target');
    tag.parent_target = target.parentNode.getAttribute('target');
   }
  }
  return tag;
}

function InitMakeLinks() {
	"use strict";
  $(".js-makelink").each(function(index, element) {
    $(this).click(function(e) {
      if (window.allow_js_click == true) {
          ShowPageLoader('make_empty');
          var goto_url = $(this).attr('data-url');
          gotoUrl(goto_url);
          return false;
      }
		});
    $(this).removeClass('js-makelink');
    $(this).addClass('js-link-created');
	});
	$(".js-makelink-new").each(function(index, element) {
		$(this).click(function(e){
      HidePageLoader();
      if (window.allow_js_click == true) {
        var goto_url = $(this).attr('data-url');
        window.open(goto_url, '_blank');
        return false;
      }
		});
    $(this).removeClass('js-makelink-new');
    $(this).addClass('js-link-created');
	});
}

function SetRatio() {
  "use strict";
	/* js-set-ratio" data-ratio="16/9" */
	$(".js-set-ratio").each(function () {
		var this_ratio = $(this).attr('data-ratio');
    var this_w = $(this).outerWidth();
		this_w = Math.ceil(this_w);
    var this_ratio_array = this_ratio.split(":");
    var ratio_w = this_ratio_array[0];
    var ratio_h = this_ratio_array[1];
    var this_h = (this_w * ratio_h) / ratio_w;
		//this_h = Math.ceil(this_h);
		$(this).css({'height':this_h+'px'});
		$(this).attr({'data-based-on-width':this_w+'px'});
	});
	$(".js-set-ratio-once").each(function () {
		var this_ratio = $(this).attr('data-ratio');
    var this_w = $(this).outerWidth();
		this_w = Math.ceil(this_w);
    var this_ratio_array = this_ratio.split(":");
    var ratio_w = this_ratio_array[0];
    var ratio_h = this_ratio_array[1];
    var this_h = (this_w * ratio_h) / ratio_w;
		//this_h = Math.ceil(this_h);
		$(this).css({'height':this_h+'px'});
		$(this).attr({'data-based-on-width':this_w+'px'});
    $(this).removeClass("js-set-ratio-once");
    $(this).addClass("js-ratio-done");
	});
}

function InitToggleVideo() {
	"use strict";
  $('.vimeo-player-sound').each(function() {
    var video_id = $(this).attr('id');
    setToggleVideo(video_id);
  });
}
function setToggleVideo(video_id) {
  $('.js-toggle-video').on('click',function () { ToggleVideo(video_id); });
}
function ToggleVideo(video_id) {
  var this_video_el = $('#'+video_id+'');
  var this_video_id = this_video_el.attr('data-videoid');
  var onPlaySound = function() { console.log('onPlaySound'); };
  var options_sound = { id:this_video_id, loop:true, autoplay:false, responsive:true, playsinline:false, background:false };
  var player_sound = new Vimeo.Player('vimeo_player_sound',options_sound);
  player_sound.on('play', onPlaySound);

  if ( this_video_el.hasClass('js-video-is-paused') === true ) {
    this_video_el.removeClass('js-video-is-paused');
    player_sound.play().then(function() { });

    $('body').addClass('reloadcheck-disabled');

  } else {
    this_video_el.addClass('js-video-is-paused');
    player_sound.pause().then(function() { });
  }
}

function AlignFullpageVideo() {
  "use strict";
  if ( $('.project-el-has-video').length ) {
    $('.project-el-has-video').each(function(){
      window.windoww = getPageWidth();
      var parent_w = $(this).find('.portfolio-el--content').outerWidth() + 2;
      var parent_h = $(this).find('.portfolio-el--content').outerHeight() + 2;
      var parent_ratio = parent_w / parent_h;
      var this_size = $(this).find('.portfolio-el--content .portfolio_video iframe').attr('org-video-data-size');

      if (this_size !== undefined) {

        var sizes = this_size.split("x");
        var w = sizes[0];
        var h = sizes[1];
        var video_ratio = parseInt(w) / parseInt(h);

        if (parent_ratio > video_ratio) {
          var video_new_w = parent_w;
          var video_new_h = (parent_w / video_ratio);
          var video_margin_top = ((parent_h - video_new_h) / 2);
          $(this).find('.portfolio_video').css('margin-top',video_margin_top+'px');
          //$(this).find('.portfolio_video').css('margin-left','-1px');
          //$(this).find('.portfolio_video').css('width','calc(100% + 2px)');
        } else {
          var video_new_h = parent_h;
          var video_new_w = (parent_h * video_ratio);
          var video_margin_left = ((parent_w - video_new_w) / 2);
          $(this).find('.portfolio-el--content .portfolio_video iframe').css('margin-left',video_margin_left+'px');
          $(this).find('.portfolio-el--content .portfolio_video iframe').css('margin-top','-1px');
        }
        $(this).find('.portfolio-el--content .portfolio_video iframe').css('width',video_new_w+'px');
        $(this).find('.portfolio-el--content .portfolio_video iframe').css('height',video_new_h+'px');
      }
    });
  }
};

function AlignVideoBgCover() {
  "use strict";
  if ( $('.js-video-set-as-bg-cover-true').length ) {
    $('.js-video-set-as-bg-cover-true').each(function(){

      window.windoww = getPageWidth();
      var parent_w = $(this).outerWidth() + 2;
      var parent_h = $(this).outerHeight() + 2;
      var parent_ratio = parent_w / parent_h;

      var this_size = $(this).attr('org-video-data-size');
      if (this_size !== undefined) {
        var sizes = this_size.split(":");
        var w = sizes[0];
        var h = sizes[1];

        var video_ratio = parseInt(w) / parseInt(h);

        if (parent_ratio > video_ratio) {
          var video_new_w = parent_w;
          var video_new_h = (parent_w / video_ratio);
          var video_margin_top = ((parent_h - video_new_h) / 2);
          $(this).find('iframe').css('margin-top',video_margin_top+'px');
        } else {
          var video_new_h = parent_h;
          var video_new_w = (parent_h * video_ratio);
          var video_margin_left = ((parent_w - video_new_w) / 2);
          $(this).find('iframe').css('margin-left',video_margin_left+'px');
          $(this).find('iframe').css('margin-top','-1px');
        }
        $(this).find('iframe').css('width',video_new_w+'px');
        $(this).find('iframe').css('height',video_new_h+'px');
      }
    });
  }
};

function LazyLoadScript() {
  "use strict";
  /* cl('{LazyLoadScript}'); */
  if( $('.js-lazy-load-script').length ){
		$('.js-lazy-load-script').each(function(){
			if ( $(this).attr('data-script-delay') ) {
        var delay = parseInt($(this).attr('data-script-delay'), 10) || 1000;
        var $this_id = 'load-script-delay_' + makeRandID();
        $(this).attr('id', $this_id);
        setTimeout(function() {
          var new_src = $('#' + $this_id).attr('data-script-src');
          $('#' + $this_id).attr('src', new_src);
        }, delay);
      } else {
        var new_src = $(this).attr('data-script-src');
        $(this).attr('src',new_src);
      }
		});
  }
}

function LazyLoadIframe() {
  "use strict";
  /*  
    const script = document.createElement("script");
    script.src = 'https://dutchdesignagency.com/js/vimeo-player-2130.min.js';
    script.type = 'text/javascript';
    script.addEventListener('load', () => { InitToggleVideo(); ToggleHelpVideo(); });
    document.head.appendChild(script);
  */

  AlignVideoBgCover();

  if( $('.js-lazy-load-iframe').length ){
		$('.js-lazy-load-iframe').each(function(){
			if ( $(this).attr('data-video-delay') ) {
        var delay = parseInt($(this).attr('data-video-delay'), 10) || 1000;
        var $this_id = 'load-iframe-delay_' + makeRandID();
        $(this).attr('id', $this_id);
        setTimeout(function() {
          var new_src = $('#' + $this_id).attr('data-video-src');
          $('#' + $this_id).attr('src', new_src);
        }, delay);
      } else {
        var new_src = $(this).attr('data-video-src');
        $(this).attr('src',new_src);
      }
		});
  }
	if( $('.js-waypoint-load-iframe').length ){
    $('.js-waypoint-load-iframe').each(function(){
      var $this_id = 'load-iframe-waypoint-'+makeID();
      $(this).attr('id',$this_id);
    });
		$('.js-waypoint-load-iframe').each(function(){
      var this_id = $(this).attr('id');
      LazyIframeWaypoints(this_id);
		});
	}
}
function LazyIframeWaypoints(way_point_id) {
	"use strict";
  var $this_waypoint = $('#'+way_point_id);
	if ($this_waypoint.length){
    var offset_in = '130%';
		$this_waypoint.waypoint({
			handler: function(direction) {
        var new_src = $this_waypoint.attr('data-src');
        $this_waypoint.attr('src',new_src);
        SetRatio();
        this.destroy();
			}, offset: offset_in
		});
  }
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function RandomCollection() {
  "use strict";
  if ( $('.product-list-randomize').length ) {
    $('.product-list-randomize').each(function() {
      $(this).find('.product-item').ShuffleHtml();
      var c = 0;
      $(this).find('.product-item').each(function() {
        if (c > 5) { $(this).remove(); }
        c = c + 1;
      });
    });
  }
}
/* ////////////////////////////////// */
/* ///////////// Scroll */
/* ////////////////////////////////// */

function InitScrollTo() {
 "use strict";
  if ( $('.quick-menu').length ) {
    $('.quick-menu li').on('click', function () {
      var goto_name = $(this).attr('data-goto');
      var goto_speed = $(this).attr('data-speed');
      if ($('#scroll-to-'+goto_name+'').length) {
        var goto_offset = $('#scroll-to-'+goto_name+'').offset();
        var goto_offset_top = goto_offset.top;
        $('html,body').animate({scrollTop : goto_offset_top }, goto_speed);
      } else {
        //console.log( 'goto_offset_top not found' );
      }
    });
  }
  $('.js-scroll-to').click(function(e){
    e.preventDefault();
		var scrollto_title = $(this).attr('data-scrollto-title');
		var scrollto_url = ''+window.location.pathname+'#'+$(this).attr('data-scrollto-el');
		var scrollto_el = 'js-scrollto-'+$(this).attr('data-scrollto-el')+'';
		window.history.pushState("", scrollto_title, scrollto_url);
		document.title = capitalizeFirstLetter(scrollto_title)+" - "+ $('.js-website-shop-name').val();
		console.log('a '+scrollto_title);
		console.log('b '+scrollto_url);
		console.log('c '+scrollto_el);
		setTimeout(function(){ scrollToClassname(scrollto_el,'0'); }, 20);
  });
	var has_hash = false;
  var window_hash = window.location.hash.replace('#', '');
	if(!isEmpty(window_hash) && window_hash !== has_hash) {
		var scrollto_el = 'js-scrollto-'+window_hash.replace('#', '')+'';
		console.log('get_hash '+scrollto_el);
		setTimeout(function(){
			scrollToClassname(scrollto_el,'0');
		}, 300);
	}
}
function scrollToAnchor(aid,correction){
  "use strict";
	if (correction === undefined) { correction = 0; }
  var aTag=$("a[name='"+aid+"']");
	if (aTag.length) {
		var gotopx=parseInt(aTag.offset().top)-parseInt(correction);
		$('html,body').animate({scrollTop:gotopx},'slow');
	}
}
function scrollToIndex(iid,correction){
	"use strict";
  if (correction === undefined) { correction = 0; }
  var aTag=$("#"+iid);
	if (aTag.length) {
		var gotopx=parseInt(aTag.offset().top)-parseInt(correction);
		$('html,body').animate({scrollTop:gotopx},1200);
	}
}
function scrollToClassname(given_classname,correction){
	"use strict";
  if (correction === undefined) { correction = 0; }
  var aTag=$("."+given_classname);
	if (aTag.length) {
		var gotopx=parseInt(aTag.offset().top)-parseInt(correction);
		$('html,body').animate({scrollTop:gotopx},1200);
	}
}
/* eof - scroll */


/* ////////////////////////////////// */
/* ///////////// check lang + page */
/* ////////////////////////////////// */

function SetLanguageByUser(given_new_url,language_short){
	"use strict";
  SetCookie('store-user-preferred-language',language_short,'year');
  ShowPageLoader();
  gotoUrl(given_new_url);
}

function RedirectUserLanguage() {
	"use strict";
  var user_system_language = GetCookie('store-user-system-language');
  var user_preferred_language = GetCookie('store-user-preferred-language');
  //cl('user_preferred_language '+user_preferred_language);
  if (Shopify.designMode) {
    $('.footer-language').hide();
    //alert('Designer window.current_lang '+window.current_lang);
    if(window.current_lang == 'nl') {
      //goto_url = window.designer_std_url;
      //gotoUrl(goto_url);
    }
  } else if( !isEmpty(user_preferred_language) ) {
    //cl('isEmpty user_preferred_language');
    if (user_preferred_language !== window.current_lang) {
      if (user_preferred_language == 'en') {
        var goto_url = $('footer .footer-lang-en').attr('data-href');
      } else {
        var goto_url = $('footer .footer-lang-nl').attr('data-href');
      }
      ShowPageLoader();
      gotoUrl(goto_url);
    }
  } else if( isEmpty(user_system_language) ) {
    /* first time visitor or no preference given */
    var language = window.navigator.userLanguage || window.navigator.language;
    if (language == 'nl-NL') {
      var user_system_language = 'nl'
    } else if (language == 'en-GB' || language == 'en-US') {
      var user_system_language = 'en'
    }
    //cl('user_system_language: '+user_system_language);


/*
    $.get("https://ipinfo.io", function(response) {
      var user_system_language = response.country.toLowerCase();
      SetCookie('store-user-system-language',user_system_language,'year');
      if (user_system_language !== window.current_lang) {
        if(user_system_language == 'nl') {
          var goto_url = $('footer .footer-lang-nl').attr('data-href');
          ShowPageLoader();
          gotoUrl(goto_url);
        } else {
          var new_goto_url = $('footer .footer-lang-en').attr('href');
          var popup_this_title = $('.js-website-language-switch-title').val();
          var popup_message = $('.js-website-language-switch-message').val();
          var popup_agree_label = $('.js-website-language-switch-agree').val();
          var popup_disagree_label = $('.js-website-language-switch-disagree').val();
          var goto_url = new_goto_url; goto_url = goto_url.replace("//","/");
          CustomAlertConfirm.open({
            this_template: 'popup-confirm',
            this_title: popup_this_title,
            this_message: popup_message,
            this_okText: popup_agree_label,
            this_cancelText: popup_disagree_label,
            this_onok: () => {
              ShowPageLoader();
              gotoUrl(goto_url);
            },
            this_oncancel: () => { }
          });
        }
      }
    }, "jsonp");
*/

  }
}

function CheckLanguage() {
	"use strict";
  var lang = '';
	if ( $('html').attr('lang') ) {
		lang = $('html').attr('lang');
    $('body').addClass('lang-'+lang+'');
		$('.footer-language .footer-lang-'+lang+'').addClass('active list-menu__item--active');
    window.current_lang = '';
	} else {
		lang = 'nl';
		$('html').attr('lang',lang);
		$('body').addClass('lang-'+lang+'');
		$('.footer-language .footer-lang-nl').addClass('active list-menu__item--active');
	}
  window.current_lang = lang;
  RedirectUserLanguage();
}

function CheckActivePage() {
	"use strict";
  var current_page_url = window.location.href.toString().split(window.location.host)[1];
  current_page_url = current_page_url.substring(1); /* remove leading slash */
  current_page_url = current_page_url.replace('nl/','');
  /* cl('current_page_url: "'+current_page_url+'"'); */

  if ( current_page_url.includes("products") ) {
    var current_page_url_array = current_page_url.split('/');
    $('body').addClass('page-active-product-detail');
    var current_category_name = current_page_url_array[ current_page_url_array.length - 3 ];
    var current_product_name = current_page_url_array[ current_page_url_array.length - 1 ];
    $('body').addClass('category-active-'+current_category_name);
    $('body').addClass('product-active-'+current_product_name);
    $('nav.header .list-menu #related-shop > a').addClass('active');
    $('.foldable-menu-wrapper ul.menu-foldable__menu li#shop a').addClass('menu-foldable__menu-item--active');
    $('body').addClass('page-child-from-products');

    /*
      $('#desktop-menu-0-1').find('.mega-menu__linklist li a').each(function(index){
        var this_link = $(this).attr('href');
        this_link = this_link.replace('/collections/', 'collections/');
        this_link = this_link.replace('/nl', '');
        ///cl('this_link '+this_link+' vs '+current_page_url);
        if (current_page_url.indexOf(this_link) >= 0) {
          $(this).addClass('active is-active');
          $('#related-mega-menu-shop a.header__menu-item').addClass('active is-active');
        }
      });
    */

  } else if ( current_page_url.includes("collections") ) {
    var current_category_name = current_page_url.replace('collections/','');
    $('body').addClass('page-active-category');
    $('body').addClass('category-active-'+current_category_name);
    $('body').addClass('page-child-from-collection');
    $('nav.header .list-menu #related-shop > a').addClass('active');
    $('.foldable-menu-wrapper ul.menu-foldable__menu li#shop a').addClass('menu-foldable__menu-item--active');

  } else if ( current_page_url.includes("pages") ) {
    /*
    var about_us_links_arr = new Array();
    if(jQuery.inArray(current_page_url, about_us_links_arr) !== -1) {
      $('nav.desktop-main-menu .list-menu #related-about > a').addClass('active');
      $('.header-foldable-mobile ul li#about').addClass('fold-menu-mobile-active');
      $('body').addClass('page-child-from-about');
      $('#related-mega-menu-about a.header__menu-item').addClass('active is-active');
    }
    */
    current_page_url = current_page_url.replace('pages/','');
    $('body').addClass('page-active-'+current_page_url);
  } else if ( current_page_url.includes("account") ) {
    current_page_url = current_page_url.replace('account/','');
    $('body').addClass('page-active-account subpage-active-'+current_page_url);
    $('.header__label--account').addClass('active');
  } else if ( current_page_url.includes("blogs/journal") ) {
    current_page_url = current_page_url.replace('blogs/journal/','');
    $('body').addClass('page-active-journal subpage-active-'+current_page_url);
    $('.header__label--account').addClass('active');
    $('#related-journal a.header__menu-item').addClass('active');
  } else if ( current_page_url.includes("policies") ) {
    current_page_url = current_page_url.replace('policies/','');
    $('body').addClass('page-active-policies subpage-active-'+current_page_url);
  } else if ( current_page_url.includes("challenge") ) {
    $('body').addClass('page-active-challenge');
  } else if (current_page_url === '') {
    $('body').addClass('page-active-home');
  } else {
    //cl('{CheckActivePage} - undefined');
    $('body').addClass('page-active-'+current_page_url);
  }
  if ( current_page_url.includes("cart") ) {
    $('.header__icon--cart').addClass('active');
  }
  var try_current_page_url = '/' + current_page_url;
  $('.nav-bar__linklist .nav-bar__link').each(function() {
    var this_cat_href = $(this).attr('href').toLowerCase();
    var this_cat_name = $(this).attr('data-category-name').toLowerCase();
    if ( try_current_page_url.includes(this_cat_name) || try_current_page_url.includes(this_cat_href) ) {
      $(this).parent().addClass('active');
    }
  });
  $('header-foldable ul.menu-foldable__menu li').each(function() {
    var this_link_handle = $(this).attr('id').toLowerCase();
    if ( try_current_page_url == '/'+this_link_handle ) {
      $(this).addClass('active');
    }
  });
  $('.footer__linklist li a').each(function() {
    var this_cat_href = $(this).attr('href').toLowerCase();
    var this_cat_name = $(this).attr('data-category-name').toLowerCase();
    if ( try_current_page_url.includes(this_cat_name) || try_current_page_url.includes(this_cat_href) ) {
      $(this).parent().addClass('active');
    }
  });
}
/* eof - check lang + page */

/* ////////////////////////////////// */
/* ///////////// BOF - pageloader */
/* ////////////////////////////////// */
$('.js-show-loader').on('click',function (e) {
  ShowPageLoader();
});

function ShowPageLoader(load_version) {
  "use strict";
  if ( $('.page-loader').length > 0) {
    if (load_version == 'make_empty') { $('.page-loader span img').remove(); }
    $('body').addClass('page-loader-visible');
  }
}

function HidePageLoader() {
  "use strict";
  if ( $('.page-loader').length > 0) {
    $('body').addClass('page-loader-fadeout');
    setTimeout(function(){
      $('body').removeClass('page-loader-fadeout');
      $('body').removeClass('page-loader-visible');
      AfterLoader();
    }, 100);
  }
}

function PageLoaderListner() {
  "use strict";

  var tagsToIdentify = ['img','a','span'];
  document.body.onclick = function(e){
    var elem = clickOrigin(e);
    if (elem.tagType != 'svg') {
      for (var i=0; i<tagsToIdentify.length; i++){
        var hit = 'false';
        if (elem.href !== null) {
          hit = 'true';
        } else if (elem.parent_href !== null){
          hit = 'true';
        }
        if (elem.href !== null) {
          if (elem.href === 'page-menu'){ hit = 'false'; }
          if (elem.href === '#'){ hit = 'false'; }
          if (elem.href.includes("/cart/")){ hit = 'false'; }
        }
        if (elem.parent_href !== null) { if (elem.parent_href.includes("#")){ hit = 'false'; } }
        if (elem.tagClass.includes("add-to-favorites")){ hit = 'false'; }
        if (elem.tagClass.includes("no-loader")){ hit = 'false'; }
        if (elem.tagClass.includes("left-menu-circle")){ hit = 'false'; }
        if (elem.tagClass.includes("theme-button")){
          if (elem.tagClass.includes("button-checkout")){ hit = 'true'; } else { hit = 'false'; }
        }
        if (elem.parent_tagClass.includes("left-menu-circle")){ hit = 'false'; }
        if (elem.parent_tagClass.includes("site-control__inner")){ hit = 'false'; }
        if (elem.target === '_blank') { hit = 'false'; }
        if (elem.parent_target === '_blank') { hit = 'false'; }
        if (hit === 'true') {
          ShowPageLoader();
          /*
          console.log('elem.href '+elem.href);
          console.log('elem.target '+elem.target);
          console.log('elem.parent_target '+elem.parent_target);
          console.log('elem.parent_href '+elem.parent_href);
          console.log('elem.tagClass '+elem.tagClass);
          console.log('elem.parent_tagClass '+elem.parent_tagClass);
          */
          break;
        }
      }
    }
  }
}


/* ////////////////////////////////// */
/* ///////////// breakpoint/resizing */
/* ////////////////////////////////// */
window.prev_windoww = getPageWidth();
window.prev_windowh = getPageHeight();
window.prev_breakp = getBreakpoint();

function ReloadBreakpoint() {
  "use strict";
  if (window.windoww > 549) {
    ShowPageLoader();
  } else {
    cl('ReloadBreakpoint, turned off');
  }
}
function isBreakpoint( alias ) { /* var isBreakpoint('xs')) {$('.someClass').css('property', 'value');}	 */ return $('.device-' + alias).is(':visible'); }
function getBreakpoint(count) {
  "use strict";
  if (count === undefined) {
    var count = 0; }	var class_name = '', class_name_current = '';
    var classes = new Array('xxs','xs','sm','md','lg','xl','xxl');
    window.windoww = getPageWidth();
    if (window.windoww < 550) {
      var c_count = parseInt(count) + 0; class_name_current = classes[c_count];
    } else if (window.windoww < 768) {
      var c_count = parseInt(count) + 1; class_name_current = classes[c_count];
    } else if (window.windoww < 992) {
      var c_count = parseInt(count) + 2; class_name_current = classes[c_count];
    } else if (window.windoww < 1280) {
      var c_count = parseInt(count) + 3; class_name_current = classes[c_count];
    } else if (window.windoww < 1350) {
      var c_count = parseInt(count) + 4; class_name_current = classes[c_count];
    } else if (window.windoww < 1700) {
      var c_count = parseInt(count) + 5; class_name_current = classes[c_count];
    } else if (window.windoww >= 1700) {
      var c_count = parseInt(count) + 6; class_name_current = classes[c_count];
    }
  /* cl('window.windoww '+window.windoww); */
  /* cl('class_name_current '+class_name_current); */
  return class_name_current;
}
function getImageBreakpoint(type,count) { "use strict"; if (count === undefined) { var count = 0; } var class_name = '', class_name_current = ''; var classes = new Array('xxs','xs','sm','md','lg','xl','xxl'); window.windoww = getPageWidth(); if (window.windoww < 550) { var c_count = parseInt(count) + 0; class_name_current = classes[c_count]; } else if (window.windoww < 768) { var c_count = parseInt(count) + 1; class_name_current = classes[c_count]; } else if (window.windoww < 992) { var c_count = parseInt(count) + 2; class_name_current = classes[c_count];} else if (window.windoww < 1280) { var c_count = parseInt(count) + 3; class_name_current = classes[c_count]; } else if (window.windoww < 1350) { var c_count = parseInt(count) + 4; class_name_current = classes[c_count]; } else if (window.windoww < 1700) { var c_count = parseInt(count) + 5; class_name_current = classes[c_count]; } else if (window.windoww >= 1700) { var c_count = parseInt(count) + 6; class_name_current = classes[c_count]; } if (type == 'retina') { class_name = class_name_current; } if (type == 'normal') { class_name = class_name_current; } return class_name;}
function addCss(file_name) { "use strict"; var css_file_link = $("<link />",{ rel:"stylesheet", type:"text/css", href: file_name }); $('head').append(css_file_link); }
function CheckDevice() { checkBrowser('safari'); var device_check = ['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document); if (device_check === true) { $('body').addClass('device-check-ios')} }
function checkBrowser(browsername) { var userAgent = navigator.userAgent.toLowerCase(); if (userAgent.indexOf(browsername) != -1 && userAgent.indexOf('chrome') == -1) { $('body').addClass('browser-check-safari'); } else { $('body').addClass('browser-check-not-safari'); } }
function isAppleDevice(){ return ( (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) || (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) || (navigator.userAgent.toLowerCase().indexOf("ipod") > -1) ); }
function rgbToHex(r,g,b){return "#"+componentToHex(r)+componentToHex(g)+componentToHex(b)}
function componentToHex(c){let hex=c.toString(16);return hex.length === 1 ? "0"+hex:hex}
function isIosSafari(){"use strict"; var ua = (window.navigator && navigator.userAgent) || '', iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i), webkit = !!ua.match(/WebKit/i), iOSSafari = iOS && webkit && !ua.match(/CriOS/i); return iOSSafari}
function removeHTMLSafariIOS(){"use strict";if (!isIosSafari()) return;window.windoww=getPageWidth();if(window.windoww<1280){$('.product__card .add-to-favorites-wrapper').remove();}}

function AddBodyColClass() {
  "use strict";
  var current_breakp = getBreakpoint();
  window.prev_breakp = current_breakp;

  if (!isEmpty(window.prev_breakp) && current_breakp != window.prev_breakp) {
    window.prev_breakp = current_breakp;
    $('body').removeClass('bp-xxs bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl');
    $('body').addClass('bp-'+current_breakp+'');
    /* More usefull when serverside can read cookies */
    SetCookie('store-breakpoint','bp-'+current_breakp+'','short');
  } else {
    $('body').addClass('bp-'+current_breakp+'');
    SetCookie('store-breakpoint','bp-'+current_breakp+'','short');
  }
}

function CheckSpacingCSS() {
  "use strict";
  var current_breakp = getBreakpoint();
  if (window.current_domain == '127.0.0.1') {
    var extra_css_filename = '/assets/theme-spacing-'+current_breakp+'.css';
  } else {
    var assets_url = $('.js-website-asset-url').val();
    var extra_css_filename = assets_url + 'theme-spacing-'+current_breakp+'.css';
  }
  window.windoww = getPageWidth();
  addCss(extra_css_filename);
}
function RemoveHtmlBreakpoint() {
  "use strict"; window.windoww = getPageWidth();
  if( window.windoww > 479) { $('.js-hide-above-480, .hide-above-480').remove(); $('.js-show-below-480, .show-below-480').remove(); } else { $('.js-hide-below-480, .hide-below-480').remove(); $('.js-show-above-480, .show-above-480').remove(); }
  if( window.windoww > 549) { $('.js-hide-above-550, .hide-above-550').remove(); $('.js-show-below-550, .show-below-550').remove(); } else { $('.js-hide-below-550, .hide-below-550').remove(); $('.js-show-above-550, .show-above-550').remove(); }
  if( window.windoww > 767) { $('.js-hide-above-768, .hide-above-xs').remove(); $('.js-show-below-768, .show-below-768').remove(); } else { $('.js-hide-below-768, .hide-below-768').remove(); $('.js-show-above-768, .show-above-xs').remove(); }
  if( window.windoww > 991) { $('.js-hide-above-992, .hide-above-992').remove(); $('.js-show-below-992, .show-below-992').remove(); } else { $('.js-hide-below-992, .hide-below-992').remove(); $('.js-show-above-992, .show-above-992').remove(); }
  if( window.windoww > 1279) { $('.js-hide-above-1280, .hide-above-1280').remove(); $('.js-show-below-1280, .show-below-1280').remove(); } else { $('.js-hide-below-1280, .hide-below-1280').remove(); $('.js-show-above-1280, .show-above-1280').remove(); }
  var c_breakpoint = getBreakpoint();
  if( c_breakpoint == 'xxs' ) { $('.col-hidden-xs').remove(); } else
  if( c_breakpoint == 'xs' ) { /* $('.col-hidden-xxs.col-hidden-xs').remove(); */ $('.col-hidden-xs').remove(); } else
  if( c_breakpoint == 'sm' ) { /* $('.col-hidden-xxs.col-hidden-xs.col-hidden-sm').remove(); */ $('.col-hidden-sm').remove(); } else
  if( c_breakpoint == 'md' ) { /* $('.col-hidden-xxs.col-hidden-xs.col-hidden-sm.col-hidden-md').remove(); */ $('.col-hidden-md').remove(); } else
  if( c_breakpoint == 'lg' ) { /* $('.col-hidden-xxs.col-hidden-xs.col-hidden-sm.col-hidden-md.col-hidden-lg').remove();	 */ $('.col-hidden-lg').remove(); } else
  if( c_breakpoint == 'xl' ) { $('.col-hidden-xl').remove(); } else
  if( c_breakpoint == 'xxl' ) { $('.col-hidden-xxl').remove(); }



  $('.rich-text-content__normal p:empty').remove();
  $('.rich-text-content__manual p:empty').remove();
  $('.rich-text-content__rich p:empty').remove();



}

function CheckReloadBreakpoint() {
  "use strict";
  var rl_continue = 'true';
  if (window.current_domain == '127.0.0.1') { rl_continue = 'true' }
  if (Shopify.designMode) { rl_continue = 'false' }
  if ($('body').hasClass('reloadcheck-disabled') === true) { rl_continue = 'false'; }
  if (rl_continue == 'true') {

    window.windoww = getFullPageWidth(), windowh = getFullPageHeight();
    var diff_w = Math.abs(window.prev_windoww - window.windoww);
    var diff_h = Math.abs(window.prev_windowh - windowh);
    var current_breakp = getBreakpoint();

    /*
      cl('current_breakp: '+current_breakp);
      cl('window.prev_breakp: '+window.prev_breakp);
      cl('window.windoww: '+window.windoww);
      cl('window.prev_windoww: '+window.prev_windoww);
      cl('windowh: '+windowh);
      cl('window.prev_windowh: '+window.prev_windowh);
      cl('diff_w: '+diff_w);
      cl('diff_h: '+diff_h);
      cl('window.windoww: '+getFullPageWidth());
    */

    if (!isEmpty(window.prev_breakp) && current_breakp != window.prev_breakp) {
      window.prev_breakp = current_breakp;
      ReloadBreakpoint();
    } else if (!isEmpty(window.prev_windoww) && parseInt(diff_w) > 100) {
      window.prev_windoww = window.windoww;
      ReloadBreakpoint();
    } else if (!isEmpty(window.prev_windowh) && parseInt(diff_h) > 100) {
      window.prev_windowh = windowh;
      ReloadBreakpoint();
    } else {
      if (window.windoww > 549 && $("body").hasClass("bp-xxs")) { ReloadBreakpoint(); }
      if (window.windoww < 549 && $("body").hasClass("bp-xs")) { ReloadBreakpoint(); }
      if (window.windoww > 767 && $("body").hasClass("bp-xs")) { ReloadBreakpoint(); }
      if (window.windoww < 767 && $("body").hasClass("bp-sm")) { ReloadBreakpoint(); }
      if (window.windoww > 991 && $("body").hasClass("bp-sm")) { ReloadBreakpoint(); }
      if (window.windoww < 991 && $("body").hasClass("bp-md")) { ReloadBreakpoint(); }
      if (window.windoww > 1279 && $("body").hasClass("bp-md")) { ReloadBreakpoint(); }
      if (window.windoww < 1279 && $("body").hasClass("bp-lg")) { ReloadBreakpoint(); }
      if (window.windoww > 1349 && $("body").hasClass("bp-lg")) { ReloadBreakpoint(); }
      if (window.windoww < 1349 && $("body").hasClass("bp-xl")) { ReloadBreakpoint(); }
      if (window.windoww > 1699 && $("body").hasClass("bp-xl")) { ReloadBreakpoint(); }
      if (window.windoww < 1699 && $("body").hasClass("bp-xxl")) { ReloadBreakpoint(); }
    }
  }
}

function InitEqualCols(type) { "use strict"; window.windoww = getPageWidth(); var body_border_color = $('body').css("border-color"); if (body_border_color !== 'rgb(0, 128, 0)') { $('[style*="--aspect-ratio"]').css( 'min-height', '250px' ); $('[style*="--aspect-ratio"]:before').css( 'padding-bottom', '100%' ); } $('.js-equal-height').each(function(index) { var _continue = 'true'; if (window.windoww < 550) { if( $(this).hasClass('js-equal-height-above-549') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } } if (window.windoww < 768) { if( $(this).hasClass('js-equal-height-above-767') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } } if (window.windoww < 992) { if( $(this).hasClass('js-equal-height-above-991') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } } if (window.windoww < 1100) { if( $(this).hasClass('js-equal-height-above-1099') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } } if (window.windoww < 1200) { if( $(this).hasClass('js-equal-height-above-1199') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } } if (window.windoww < 1280) { if( $(this).hasClass('js-equal-height-above-1279') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } } if (window.windoww < 1350) { if( $(this).hasClass('js-equal-height-above-1349') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } }
  if (window.windoww > 550) { if( $(this).hasClass('js-equal-height-below-550') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } }
  if (window.windoww > 768) { if( $(this).hasClass('js-equal-height-below-768') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } }
  if (window.windoww > 992) { if( $(this).hasClass('js-equal-height-below-992') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } }
  if (window.windoww > 1280) { if( $(this).hasClass('js-equal-height-below-1280') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } }
  if (window.windoww > 1350) {if( $(this).hasClass('js-equal-height-below-1350') === true ) { var _continue = 'false'; $(this).removeClass('js-equal-height'); } }
  if(_continue == 'true') { var this_max_w = 0; if (parseFloat($(this).data('ehcolmaxw')) > 10) { var this_max_w = $(this).data('ehcolmaxw'); }
  if (parseFloat(this_max_w) == 0 || parseFloat(this_max_w) <= parseFloat(window.windoww)) {
    if ( $(this).attr('data-equal-height-child') ) { var child_select_id = $(this).attr('data-equal-height-child'); } else { var child_select_id = '.js-eh-col'; } var a = child_select_id.split(","); var i; for (i = 0; i < a.length; i++) { var $_child = a[i]; $(this).find($_child).each(function(index) { var this_h = $(this)[0].getBoundingClientRect().height; $(this).attr('data-org-height',this_h); }); } } } });
    $('.js-equal-height').each(function(index) { var this_max_w = 0; if (parseFloat($(this).data('ehcolmaxw')) > 10) { var this_max_w = $(this).data('ehcolmaxw'); } if (parseFloat(this_max_w) == 0 || parseFloat(this_max_w) <= parseFloat(window.windoww)) { var max_h = 0; if ( $(this).attr('data-equal-height-child') ) { var child_select_id = $(this).attr('data-equal-height-child'); } else { var child_select_id = '.js-eh-col'; } var a = child_select_id.split(","); var i; for (i = 0; i < a.length; i++) { var max_h = 0; var $_child = a[i]; $(this).find($_child).each(function(index) { var this_h = $(this).attr('data-org-height'); if (parseFloat(this_h) > parseFloat(max_h)) { max_h = this_h; } max_h = parseFloat(max_h); }); $(this).find($_child).each(function(index) { var this_h = $(this).attr('data-org-height'); if (parseFloat(this_h) != parseFloat(max_h)) { $(this).css('min-height',max_h+'px'); } else { $(this).css('min-height',this_h+'px'); } }); } } }); }

function SetFavicon() {
  "use strict";
  if ( $('html').hasClass('favi-set') === false ) {
    $('html').addClass('favi-set');
    var assets_url = $('.js-website-asset-url').val(),favi_url = assets_url + "mstile-150x150.png";
    $('#favicon').attr('href',favi_url);
    $('#favicon-32').remove(); $('#favicon-16').remove();
    var faviconIndex = 0; setInterval(function() {
      faviconIndex++; var favi_url = assets_url + "favicon-frame-0" + faviconIndex + ".png";
      //cl('favi_url: '+favi_url);
      $('#favicon').attr('href',favi_url); faviconIndex %= 6;
    },500);
  }
}

/* ////////////////////////////////// */
/* ///////////// JS Cookies vs Social */
/* ////////////////////////////////// */

function FireAnalytics() { FireGoogleAnalytics() }
function FireGoogleAnalytics() {
  var ga_tag = $('.js-website-ga-tag').val();
  if( !isEmpty(ga_tag) ) {
    //cl('GoogleAnalytics > ' + ga_tag);
    var i = document.createElement('script');
    i.type = 'text/javascript'; i.async = true;
    i.src = 'https://www.googletagmanager.com/gtag/js?id='+ga_tag; document.head.appendChild(i);
    window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date()); gtag('config', ''+ga_tag+'');
  } else {
    //cl('GoogleAnalytics');
  }
}

function FirePinterest() { !function(e){if(!window.pintrk){window.pintrk = function () { window.pintrk.queue.push(Array.prototype.slice.call(arguments))}; var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0]; r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js"); pintrk('load', '1234567890', {em: '<user_email_address>'}); pintrk('page'); }
function SetCookie(this_key,this_value,settime) { "use strict"; var date_now = Date.now(), date = new Date(date_now); if ( settime == 'year' || settime == '12months' ) { /* one year */ date.setTime(date.getTime()+(3600*24*30.5*12)*(1000)); } else if( settime == '6months' ) { /* 6 month */ date.setTime(date.getTime()+(3600*24*30.5*6)*(1000)); } else if( settime == '3months' ) { /* 3 month */ date.setTime(date.getTime()+(3600*24*30.5*3)*(1000)); } else if( settime == '2months' ) { /* 2 months */ date.setTime(date.getTime()+(3600*24*30.5*2)*(1000)); } else if( settime == 'short' || settime == '1months' || settime == '1month' ) { /* 1 month */ date.setTime(date.getTime()+(3600*24*30.5*1)*(1000)); } else { /* one week */ date.setTime(date.getTime()+(3600*24*7*1)*(1000)); } document.cookie = this_key+'='+this_value+'; expires='+date.toUTCString()+'; domain='+window.current_domain+'; path=/; SameSite=Strict; path=/'; }
function GetCookie(name) { "use strict"; var value = "; " + document.cookie; var parts = value.split("; " + name + "="); if (parts.length == 2) return parts.pop().split(";").shift(); }
function HideCookieAlert() { if ($('.c-analytics-value').is(":checked")) { SetCookieAlert('agreed_all'); } else { SetCookieAlert('seen'); } $('.cookies_header').addClass('hidden'); }
function SetCookieAlert(given_value) { "use strict"; if (given_value == 'agreed_all') { SetCookie('store-cookies','yes','year'); } else if (given_value == 'seen') { SetCookie('store-cookies','no','year'); } else {  SetCookie('store-cookies','no','year'); } var cookie_agreed_all = GetCookie('store-cookies'); if (cookie_agreed_all == 'yes') { FireAnalytics(); } }
function CorrectCookieAlert() {
  "use strict"; 
  var _TRANS_ACCEPT = 'Accept',
      _TRANS_MANAGE = 'Manage settings',
      _TRANS_WEUSE_LINK = '/privacy-policy',
      _TRANS_WEUSE = 'We use cookies',
      _TRANS_ANA = 'Analytics',
      _TRANS_NES = 'Strictly necessary'; 
  if( $('body').hasClass('lang-nl') === true ) {
    var _TRANS_ACCEPT = 'Akkoord',
        _TRANS_MANAGE = 'Instellingen',
        _TRANS_WEUSE_LINK = '/nl/privacy-policy',
        _TRANS_WEUSE = 'Wij gebruiken cookies',
        _TRANS_ANA = 'Analytisch',
        _TRANS_NES = 'Alleen noodzakelijk'; 
  } 
  var rp = $(".cookies_header").html().replace(/TRANS_ACCEPT/g,''+_TRANS_ACCEPT+'');
  $(".cookies_header").html(rp); 
  rp = $(".cookies_header").html().replace(/TRANS_MANAGE/g,''+_TRANS_MANAGE+'');
  $(".cookies_header").html(rp);
  rp = $(".cookies_header").html().replace(/TRANS_WEUSE_LINK/g,''+_TRANS_WEUSE_LINK+'');
  $(".cookies_header").html(rp);
  rp = $(".cookies_header").html().replace(/TRANS_WEUSE/g,''+_TRANS_WEUSE+'');
  $(".cookies_header").html(rp);
  rp = $(".cookies_header").html().replace(/TRANS_ANA/g,''+_TRANS_ANA+'');
  $(".cookies_header").html(rp);
  rp = $(".cookies_header").html().replace(/TRANS_NES/g,''+_TRANS_NES+'');
  $(".cookies_header").html(rp);
  rp = $(".cookies_header").html().replace('data-href','href');
  $(".cookies_header").html(rp);
}
function CheckCookieAlert() {
  "use strict";
  cl('{CheckCookieAlert}');
  var cookie_agreed = GetCookie('store-cookies');
  if(cookie_agreed === undefined) {
    CorrectCookieAlert();
    $('.js-cookie-settings-toggle-switch').on('click',function() { $('.js-cookie-settings-toggle').removeClass('inactive'); });
    $('.cookies_header').removeClass('hidden');
  } else {
    $('.cookies_header').addClass('hidden');
    $('.cookies_header').remove();
  }
  if (cookie_agreed == 'yes') { FireAnalytics(); }
}

/* ////////////////////////////////// */
/* ///////////// Shopping Cart Drawer */
/* ////////////////////////////////// */
function DisableClickCartDrawer(action, $this) {
  "use strict";
  /* cl('{DisableClickCartDrawer}'); */
  $('#shopping-cart-drawer').addClass('click-disabled');
  if (action == 'remove'){
    $this.closest('.sc-cart-item').css({'transform':'translateX(600px)'});
    setTimeout(function(){ $this.closest('.sc-cart-item').remove(); }, 800);
  }
}
function EnableClickCartDrawer() {
  "use strict";
  //cl('{EnableClickCartDrawer}');
  $('#shopping-cart-drawer').removeClass('click-disabled');
}
function ShuffleDrawerProducts() {
  "use strict";
  if ( $('.sc-drawer-shuffle-products').length ) { 
    /* cl('{ShuffleDrawerProducts}'); */
    var $source = $('#collection-product-cart-add-ons-extra');
    var show_prod = $source.attr('data-show');
    var products_arr = new Array();
    $source.find('.li').each(function(idx, li) {
      var this_prod_html = $(this).html();
      products_arr.push(this_prod_html);
    });
    var rand_prod = js_array_shuffle(products_arr);
    var final_products = rand_prod.splice(0, show_prod );
    var new_html = final_products.join('');
    $('#collection-product-cart-add-ons').html(new_html);
    $('#collection-product-cart-add-ons').animate({opacity:1}, 800);

    $('#collection-product-cart-add-ons').find('.js-trigger-add-product').each(function () {
      $(this).addClass('js-trigger-add-product-inactive');
      $(this).removeClass('js-trigger-add-product');
    });
    /* InitCartDrawerActions(); */
    /* InitProductAddCartSubmit(); */
    InitAddToCartButtons();

  }
}
window.shopping_cart_content_has_changed = 'false';

/* ////////////////////////////////// */
/* ///////////// Shopping Cart drawer */
/* ///////////// Add to cart alert ajax */
/* ////////////////////////////////// */

function UpdateShoppingCartDrawer(action) {
  "use strict";
  cl('{UpdateShoppingCartDrawer} action:'+action+' ->> '+window.shopping_cart_content_has_changed);
  if (action == 'empty') {
    $('#shopping-cart-drawer').addClass('loaded');
    $('#shopping-cart-drawer').attr('aria-hidden','false');
    $('.shopping-cart-drawer .cart-empty-alert').removeClass('visually-hidden');
    $('.shopping-cart-drawer .sc-checkout-buttons .button-checkout').addClass('disabled');    
    $('.shopping-cart-drawer .sc-totals-total span').css({'opacity':'0'});
    ShuffleDrawerProducts();
  } else {
    if (action == 'update') {
      $('#shopping-cart-drawer').attr('aria-hidden','true');
      $('.shopping-cart-drawer .sc-checkout-buttons .button-checkout').removeClass('disabled');
    }
    if (window.shopping_cart_content_has_changed == 'true') {
        window.shopping_cart_content_has_changed = 'no-longer-true';
        var get_shopping_drawer = window.ajax_domain+'collections/shopping-cart-drawer?_='+new Date().getTime();
        $('.shopping-cart-drawer .cart-empty-alert').addClass('visually-hidden');
        $('.shopping-cart-drawer .sc-checkout-buttons .button-checkout').removeClass('disabled');
        $('.shopping-cart-drawer .sc-totals-total span').css({'opacity':'1'});
        if (action == 'open') {
          $('#collection-product-cart-add-ons').css({'opacity':'0'});
        }
        cl('get_shopping_drawer:'+get_shopping_drawer + ' action:' + action);
        $.ajax({url:get_shopping_drawer,type:'GET',cache:false}).done(function(new_html_content) {
            var temp_page_html_holder = document.createElement('div');
            temp_page_html_holder.innerHTML = new_html_content; 

            if (action == 'remove') { 
              var product_total = temp_page_html_holder.querySelector('.sc-totals-total').innerHTML;
              $('.shopping-cart-drawer .sc-totals-total').html( product_total );
            } else { 
              var product_list = temp_page_html_holder.querySelector('.sc-prod-items').innerHTML;
              $('.shopping-cart-drawer .sc-prod-items').html( product_list );
              var product_total = temp_page_html_holder.querySelector('.sc-totals-total').innerHTML;
              $('.shopping-cart-drawer .sc-totals-total').html( product_total );
            } 
            
            /* prod in cart count */
            var product_quantity = temp_page_html_holder.querySelector('.total_prod_items_in_cart').value;
            $('header .cart-count-bubble span:nth-child(1)').html( product_quantity );

            if (product_quantity == 0) {
              $('.shopping-cart-drawer .cart-empty-alert').removeClass('visually-hidden');
              $('.shopping-cart-drawer .sc-checkout-buttons .button-checkout').addClass('disabled');
              $('.shopping-cart-drawer .sc-totals-total span').css({'opacity':'0'});
            } else {
              $('.shopping-cart-drawer .cart-empty-alert').addClass('visually-hidden');
              $('.shopping-cart-drawer .sc-checkout-buttons .button-checkout').removeClass('disabled');
              $('.shopping-cart-drawer .sc-totals-total span').css({'opacity':'1'});
            }

            if (action == 'open') { ShuffleDrawerProducts()}
            if (action == 'update') { ShuffleDrawerProducts()}
            if (action == 'remove') { /* ShuffleDrawerProducts() */ }
            EnableClickCartDrawer();
            /* UpdateHeaderIconBubble('get-new-count'); */

            setTimeout(function(){
              $('#shopping-cart-drawer').addClass('loaded');
              $('#shopping-cart-drawer').attr('aria-hidden','false');
              OpenShoppingCartDrawer();
              /* InitRemoveCartOption(); */
            }, 100);

            UpdateHeaderIconBubble('get-new-count');

          }).fail(function (jqXHR, textStatus) {
            cl('Fail');
          });
    } else {
      $('#shopping-cart-drawer').addClass('loaded');
      $('#shopping-cart-drawer').attr('aria-hidden','false');
      ShuffleDrawerProducts();
      setTimeout(function(){
        $('.drawer-underlay').removeClass('show-spinner');
      }, 250);
    }
  }
  InitCartDrawerActions();
  CheckDrawerHeight();
}

function CheckDrawerHeight() {
  var trackedClasses = ['sc-section-top','sc-section-bottom','-sc-wrapper'];
  const getViewportHeight = () => { return Math.max( document.documentElement.clientHeight, window.innerHeight || 0 ); };
  const calculateElementsHeight = () => {
    let totalHeight = 0;
    const elementDetails = {};
    trackedClasses.forEach(className => {
      const elements = document.getElementsByClassName(className);
      elementDetails[className] = {
        count: elements.length,
        total: 0
      };
      Array.from(elements).forEach(el => {
        const height = el.getBoundingClientRect().height;
        totalHeight += height;
        /* cl('height: '+height); */
        elementDetails[className].total += height;
      });
    });
    return { totalHeight, elementDetails };
  };
  const viewportHeight = getViewportHeight();
  const { totalHeight, elementDetails } = calculateElementsHeight();
  const remainingSpace = viewportHeight - totalHeight;
  $('.sc-section-middle').css({'max-height':remainingSpace+'px'});
}


function ChangeCartDrawerProductQTY($this,action,new_qty) {
  "use strict";
  cl('{ChangeCartDrawerProductQTY} action:'+action+' -- '+new_qty);
  var this_product_id = $this.closest('.sc-cart-item').attr('data-prod-id');
  var this_product_key = $this.closest('.sc-cart-item').attr('data-prod-key');
  if (new_qty != '') { var prod_new_qty = new_qty } else { var prod_new_qty = $this.val() }
  window.shopping_cart_content_has_changed = 'true';

  $.ajax({
    url:'/cart/change.js', type:'POST', dataType:'json',
    data:{ 
      'id': this_product_id, 
      'key': this_product_key, /* important!! */
      'quantity': prod_new_qty
    },
    success: function() { 
      UpdateShoppingCartDrawer(action);
    },
    error: function(data) { 
      cl('[works only online!] {ChangeCartDrawerProductQTY}. went wrong:');
      cl('or are we out off stock?  /reached max');
      cl(JSON.stringify(data));
      window.location.reload();
      return false;
    } 
  });
}

function AddProductToCart(form_id) {
  "use strict";
  cl('{AddProductToCart}');
  var this_product_id = $('#'+form_id).find('.pid').val();
  window.shopping_cart_content_has_changed = 'true';
  DisableClickCartDrawer('update',$(this));
  $.ajax({
    url:'/cart/add.js', type:'POST', dataType: 'json',
    data:{ 'id': this_product_id },
    success: function() { UpdateShoppingCartDrawer('update'); },
    error: function(data) { cl('{AddProductToCart}. went wrong: '+data); }
  });
}

function InitCartDrawerActions() {
  "use strict";
  /* cl('{InitCartDrawerActions}'); */
  var drawer__remove_button = $('.js-website-use-shopping-cart-drawer-remove').val();
  if (drawer__remove_button == 'inline') {
    $('body').addClass('sc-drawer-remove-button-true');
    /* remove product - switching classes prevents double triggers */
    $('.shopping-cart-drawer .js-cart-remove-button-inactive').each(function () {
      $(this).addClass('js-cart-remove-button-active'); 
      $(this).removeClass('js-cart-remove-button-inactive');
      $(this).on('click', function(e) {
        e.preventDefault();
        CartDrawerRemoveProd( $(this) );
        return false;
      });
    });
  } else {
    $('body').addClass('sc-drawer-remove-button-false');
    $('.shopping-cart-drawer .cart-remove-button').remove();
  }

  /* change product qty - switching classes prevents double triggers */
  $('.shopping-cart-drawer .js-quantity__select-inactive').each(function () {
    $(this).addClass('js-quantity__select-active');
    $(this).removeClass('js-quantity__select-inactive');
    $(this).on('change', function() {
      window.shopping_cart_content_has_changed = 'true';
      var prod_new_qty = $(this).val();
      if (prod_new_qty == 0) {
        var sure_delete_alert = $('.sure_delete_alert').val();
        var sure_delete_alert_yes = $('.sure_delete_alert_yes').val();
        var sure_delete_alert_no = $('.sure_delete_alert_no').val();
        $(this).val('1');
        CustomAlertConfirm.open({
          this_template: 'popup-confirm',
          this_apply_on_id:'',
          this_title: '',
          this_message: '<br>'+sure_delete_alert,
          this_okText: sure_delete_alert_yes,
          this_cancelText: sure_delete_alert_no,
          this_onok: () => {
            CartDrawerRemoveProd( $(this) );
          },
          this_oncancel: () => { }
        });
      } else {
        DisableClickCartDrawer('change',$(this));
        ChangeCartDrawerProductQTY($(this),'update',prod_new_qty);
      }
    });
  });

  /* change product qty - switching classes prevents double triggers */
  $('.shopping-cart-drawer .js-quantity__input-inactive').each(function () {
    $(this).addClass('js-quantity__input-active');
    $(this).removeClass('js-quantity__input-inactive');
    $(this).on('change', function() {
      window.shopping_cart_content_has_changed = 'true';
      var prod_new_qty = $(this).val();
      if (prod_new_qty == 0) {
        var sure_delete_alert = $('.sure_delete_alert').val();
        var sure_delete_alert_yes = $('.sure_delete_alert_yes').val();
        var sure_delete_alert_no = $('.sure_delete_alert_no').val();
        $(this).val('1');
        if (drawer__remove_button == 'popup') {
          CustomAlertConfirm.open({
            this_template: 'popup-confirm',
            this_apply_on_id:'',
            this_title: '',
            this_message: '<br>'+sure_delete_alert,
            this_okText: sure_delete_alert_yes,
            this_cancelText: sure_delete_alert_no,
            this_onok: () => {
              CartDrawerRemoveProd( $(this) );
            },
            this_oncancel: () => { }
          });
        } else {
          $(this).closest('.sc-cart-item').addClass('remove-agree-show');
        }
      } else {
        DisableClickCartDrawer('change',$(this));
        ChangeCartDrawerProductQTY($(this),'update','');
      }
    });
  });
  CheckDrawerHeight();
}
function CartDrawerRemoveProd($this) {
  "use strict";
  cl('{CartDrawerRemoveProd}');
  DisableClickCartDrawer('remove',$this);
  ChangeCartDrawerProductQTY($this,'remove','0');
}

/* ////////////////////////////////// */
/* ///////////// Checkbox Beautify */
/* ////////////////////////////////// */

function InitCheckbox() {
  "use strict";
  $('.checkbox-wrapper').on('click',function () {
    $(this).removeClass('error');
    var checkbox_name = $(this).attr('data-checkbox-name');
    var checkbox = $("input[name='"+checkbox_name+"']");
    if( checkbox.prop("checked") === true ) {
      checkbox.val('false').prop("checked", false);
      $(this).removeClass('agreed');
    } else {
      checkbox.val('true').prop("checked", true);
      $(this).addClass('agreed');
    }
  });
}

/* ////////////////////////////////// */
/* ///////////// Accordion */
/* ////////////////////////////////// */

function CheckDetailsHeightToggle() {
  "use strict";
  /* cl('{CheckDetailsHeightToggle}'); */
  var extra_css = '';
  $('.accordion details').each(function(index){
    var this_id = 'details-toggle-'+makeID(); $(this).attr('id',this_id);
    document.getElementById(this_id).open = true;
    var data_min_height = $(this).find('summary').outerHeight(), data_max_height = $(this).outerHeight();
    document.getElementById(this_id).open = false;
    extra_css = extra_css + 'details#'+this_id+':not([open]) { height: '+data_min_height+'px; }';
    extra_css = extra_css + 'details#'+this_id+'[open] { height: '+data_max_height+'px; }';
  });
  $('body').append('<style id="accordion-css">'+extra_css+'</style>');
}

/* ////////////////////////////////// */
/* ///////////// Second Prod Image */
/* ////////////////////////////////// */

function InitSecondProductImage() {
  "use strict";
  $('.card-wrapper .card-wrapper-flex__media').on('mouseenter',function () { $(this).parent().parent().addClass('show-second-image'); });
  $('.card-wrapper .card-wrapper-flex__media').on('mouseleave',function () { $(this).parent().parent().removeClass('show-second-image'); });
}

/* ////////////////////////////////// */
/* ///////////// Recently Viewed Products */
/* ////////////////////////////////// */

window.recently_cookie_name = 'store-recently-viewed';
window.use_recently_empty_fallback = 'true';
function PopulateRecentlyViewed() {
  "use strict";
  if ( $('#recently-viewed-products').length ) {
    var cookie_name = window.recently_cookie_name;
    var products_string = GetCookie(cookie_name);
    var show_recently_products = 'true';
    if (isEmpty(products_string) && window.use_recently_empty_fallback === 'true') {
      var products_string = $('.js-website-recently-product-string-backup').val();
      var show_recently_products = 'true';
      if ( $('body').hasClass('lang-en') ) {
        $('section:has(#recently-viewed-products) h2 span').html('You might like');
      } else {
        $('section:has(#recently-viewed-products) h2 span').html('Iets voor jou?');
      }
    }
    if (isEmpty(products_string)) {
      var show_recently_products = 'false';
    }
    var products_arr = products_string.split(":::");
    if (products_arr.length < 2) {
      var show_recently_products = 'false';
    }

    if (show_recently_products == 'true') {
      /* var products_arr = products_string.split(":::"); */
      var current_handle = $('.js-website-product-handle').val();
      var max_show = $('.js-website-recently-product-display').val();
      var max_show = parseInt( max_show ) - 1;

      $.each( products_arr,function(key,product_string) {
        if(key > max_show) { return false; }
        var product_string_arr = product_string.split("=");
        var product_id = product_string_arr[0];
        var product_handle = product_string_arr[1];

        if (product_string !== current_handle && product_handle !== undefined) {
          var get_product_card = '/products/'+product_handle+'/product-card?_=' + new Date().getTime();
          /* cl('get_product_card:'+get_product_card); */
          $.ajax({url:get_product_card,type:'GET',cache:false})
          .done(function(data) {
            $('#recently-viewed-products .js-elements__wrapper').append( data );
            var num_prod = $('#recently-viewed-products .js-elements__wrapper li').length;
            $('#recently-viewed-products .scrollbar-wrapper').removeClass( function (index, className) { return (className.match (/(^|\s)element-count-\S+/g) || []).join(' '); });
            $('#recently-viewed-products .scrollbar-wrapper').addClass('element-count-'+num_prod);
            $('#recently-viewed-products .js-elements__wrapper').removeClass( function (index, className) { return (className.match (/(^|\s)element-count-\S+/g) || []).join(' '); });
            $('#recently-viewed-products .js-elements__wrapper').addClass('element-count-'+num_prod);

            SVGInject(document.querySelectorAll("img.injectable-svg"));
            InitAddToCartButtons();
            InitSecondProductImage();
            /* InitAddFavoritesHeart(); */
          });
        }
      });
    } else {
      $('section:has(#recently-viewed-products)').remove();
    }
  }
}

function InitPopulateRecentlyViewed() {
  "use strict";
  var use_cookie_alert_val = $('.js-website-use-cookie-alert').val();
  if (use_cookie_alert_val == 'true') {
    var cookie_agreed_all = GetCookie('store-cookies');
    if (cookie_agreed_all == 'yes') {
      PopulateRecentlyViewed();
    } else {
      PopulateRecentlyViewed();
      /* $('.section-recently-viewed-products').remove(); */
    }
  } else {
    PopulateRecentlyViewed();
  }
}

/* ////////////////////////////////// */
/* ///////////// Featured Collections */
/* ////////////////////////////////// */

function PopulateFeaturedCollections() {
  "use strict";
  if ( $('.js-website-featured-collection-display').length ) {
    var show_featured_collections = 'true'
    var products_string = $('.js-website-featured-collection-display').val();
    if (isEmpty(products_string)) { var show_featured_collections = 'false'; }

    if (show_featured_collections == 'true') {
      var collections = products_string.split("]]]");
      var max_col_show = 2;
      var max_col_show = parseInt( max_col_show ) - 1;
      $.each( collections,function(col_key,collection_string) {
        if(col_key <= max_col_show) {
          var collection_arr = collection_string.split("[[[");
          var collection_title = collection_arr[0];
          var col_product_string_all = collection_arr[1]+'THENEND';

          if (!isEmpty(col_product_string_all)) {

            var col_products_remove_last = col_product_string_all.split(":::THENEND");
            var col_products_arr = col_products_remove_last[0].split(":::");
            var col_products_arr = col_products_arr.sort(() => Math.random() - 0.5)
            var final_product_string = col_products_arr[0];

            var product_string_arr = final_product_string.split("=");
            var product_id = product_string_arr[0];
            var product_handle = product_string_arr[1];
            if (product_handle !== undefined) {
              var get_product_card = '/products/'+product_handle+'/product-card?_=' + new Date().getTime() + '&cardtype=xxl';
              cl('get_product_card: '+get_product_card);
              $.ajax({url:get_product_card,type:'GET',cache:false})
              .done(function(data) {
                  var product_card_html  = '';
                  product_card_html += '<div>';
                  product_card_html += '  <h2 class="collection__title font-fam-normal font-size-xl txt-lowercase margin-b-sm"><span>'+collection_title+'</span></h2>';
                  product_card_html += '  <div>'+data+'</div>';
                  product_card_html += '</div>';
                  //cl('product_card_html::'+product_card_html);
                  $('#featured-collections .js-elements__wrapper').append( product_card_html );
                  SVGInject(document.querySelectorAll("img.injectable-svg"));
                  InitAddToCartButtons();
                  InitSecondProductImage();
                  //InitAddFavoritesHeart();
              });
            }
          }
        }
      });

    } else {
      $('section:has(#featured-collections)').remove();
    }
  } else {
    $('section:has(#featured-collections)').remove();
  }
}


/* ////////////////////////////////// */
/* ///////////// Init Header Menu options */
/* ////////////////////////////////// */

function InitHeader() {
  "use strict";
  //cl('InitHeader');
  var use_desktop_submenu_menu_mega = $('.js-website-use-desktop-submenu-menu-mega').val();
  var use_desktop_submenu_foldable = $('.js-website-use-desktop-submenu-foldable').val();
  var use_mobile_menu_foldable = $('.js-website-use-mobile-menu-foldable').val();
  var use_shopping_cart_drawer = $('.js-website-use-shopping-cart-drawer').val();
  var use_shopping_cart_mini = $('.js-website-use-shopping-cart-mini').val();
  var use_shopping_cart_alert = $('.js-website-use-shopping-cart-alert').val();
  var use_location_search = $('.js-website-location-search').val();
  window.windoww = getPageWidth();

  if (window.windoww >= 768) {
    $('.header-foldable').remove();
    $('.hamburger-foldable').remove();
  } else {
    if (use_mobile_menu_foldable == 'true') {
      $('.shopify-section-header .header__inline-menu__left').remove();
      $('.shopify-section-header .header__inline-menu__right').remove();
      InitMainFoldMenu();
    }
  }
  if (use_desktop_submenu_menu_mega == 'true'){

    if (window.windoww > 767) {
      var setminHeight = -1;
      $('.menu-mega__inner--large .menu-mega__column_wrapper').each(function() {
        if ($(this).height() > setminHeight) { setminHeight = $(this).height();}
      });
      $('.menu-mega__inner--large .menu-mega__column_wrapper').css({'min-height':setminHeight+'px'});
      $('.menu-mega__inner--large .menu-mega__promo_wrapper').css({'height':setminHeight+'px'});
      /* $('body').append('<div class="main-menu__underlay no-se"></div>'); */
      /* $('body').append('<div class="main-menu__background no-pe no-se"></div>'); */
      var mega_menu_min_h_a = $('#desktop-menu-0-1').outerHeight();
      var mega_menu_min_h_b = $('#desktop-menu-0-2').outerHeight();
      var mega_menu_min_h_c = $('#desktop-menu-0-3').outerHeight();
      var mega_menu_min_h_d = $('#desktop-menu-0-4').outerHeight();
      var mega_menu_min_h = mega_menu_min_h_d;
      if (mega_menu_min_h_a > mega_menu_min_h) { var mega_menu_min_h = mega_menu_min_h_a; }
      if (mega_menu_min_h_b > mega_menu_min_h) { var mega_menu_min_h = mega_menu_min_h_b; }
      if (mega_menu_min_h_c > mega_menu_min_h) { var mega_menu_min_h = mega_menu_min_h_c; }

      $('.main-menu__background').css({'min-height':mega_menu_min_h+'px'});
      if ( $('html').hasClass('lang-en') ) {
        $('#related-mode .menu-mega-title').text('fashion');
      }
      $('ul.list-menu--inline li.has-menu-mega').on('mouseenter',function () {
        /* close search */
        if ( $('body').hasClass('search-header-open') ) {
          $('body').removeClass('search-header-open');
          $('.header__search-wrapper details').removeAttr('open');
          /* enableBodyScroll(); */
        }
        /* hide other mega menu hide mega menu */
        HideMenuMega();    
        var menu_id = $(this).find('a').attr('data-category-name');
        /*cl('menu_id:'+menu_id);*/
        $(this).find('.js-menuid-'+menu_id).addClass('menu-mega-visible');
        $(this).find('.js-menuid-'+menu_id).removeClass('menu-mega-invisible');
        $(this).find('a.header__menu-item').attr('aria-expanded','true');
        $(this).find('a.header__menu-item').addClass('active');
        $(this).find('.js-menuid-'+menu_id).attr('aria-hidden','false');
        $('body').addClass('header__menu-mega-visible');
        return false;
      });
    
      if (Shopify.designMode) {       
        $('.js-hide-menu-mega').on('mouseenter',function () { HideMenuMega(); });
      } else {
        $('header').on('mouseleave',function () { HideMenuMega(); });
        $('.js-hide-menu-mega').on('mouseenter',function () { HideMenuMega(); });
      }
    }
  }

  if (use_shopping_cart_drawer == 'true') {
    /* shopping cart drawer AND/OR cart alert */
    //cl('use_shopping_cart_drawer '+use_shopping_cart_drawer);
    $('body').addClass('sc-drawer-invisible');
    EnableClickCartDrawer();
    $('#shopping-cart-drawer').before('<div class="drawer-underlay drawer-underlay_dark inactive"><div class="load-more-spinner"><svg class="spinner" viewBox="0 0 60 60"><circle class="path" cx="30" cy="30" r="24" fill="none" stroke-width="5"></circle></svg></div></div>');
    $('.drawer-underlay').on('click',function(){$('.js-close-sc').trigger('click');});
    $('.js-trigger-shopping-cart').on('click',function(){
      if ( $('body').hasClass('template-cart') ) {
        window.location.reload();
      } else {
        OpenShoppingCartDrawer();
      }        
      return false;
    });
    $('.js-close-sc').on('click',function () {
      if ( $('body').hasClass('template-cart') === true ) {
        window.location.reload();
      } else {   
        $('body').removeClass('sc-drawer-visible');
        $('.drawer-underlay').addClass('inactive');
        $('body').addClass('sc-drawer-invisible');
        //$('#shopping-drawer').attr('aria-hidden','false');
        setTimeout(function(){
          $('#shopping-cart-drawer').removeClass('loaded');
          //$('#shopping-cart-drawer').attr('aria-hidden','true');
        }, 1000);
        enableBodyScroll();
      }
      return false;
    });

  } else if (use_shopping_cart_mini == 'true') {
    /* shopping cart mini */
    var windoww = getPageWidth();
    if (windoww > 40) {
        $('body').addClass('mini-cart-invisible');
        $('.js-trigger-shopping-cart').on('click',function () {
          if ( $('body').hasClass('mini-cart-visible') === true ) { 
            HideShoppingCartMini(); 
          } else { 
            ShowShoppingCartMini(); 
          }
          return false;
        });
    } else {
      $('#mini-cart-box').remove();
    }
  }
  if (use_location_search != 'none') {
    $('body').append('<div class="search-overlay"></div>');
    $('.search-overlay').on('click',function () { $('header .icon-search').trigger('click'); });
    $('header .search-modal__content .js-submit-search').on('click',function() { checkHeaderSearchSubmit(); });
    $('header .icon-search').on('click',function() {
      if ( $('body').hasClass('search-header-open') ) {
        $('body').removeClass('search-header-open');
        enableBodyScroll();
      } else {
        $('body').addClass('search-header-open');
        setTimeout(function (){
          $('.search-modal .field__input').focus();
        }, 200);
        disableBodyScroll();
      }
    });
  }
  $('.js-has-header-drop-down').each(function(e){
    $(this).on('mouseenter',function () { $('body').addClass('header-drop-down-active'); $(this).addClass('active'); });
    $(this).on('mouseleave',function () { $('body').removeClass('header-drop-down-active'); $(this).removeClass('active'); });
  });

}


function HideMenuMega() { 
  "use strict";
  if ( $('body').hasClass('header__menu-mega-visible') ) {
    $('header').find('.menu-mega').addClass('menu-mega-invisible');
    $('header').find('.menu-mega').removeClass('menu-mega-visible');
    $('header').find('a.header__menu-item').attr('aria-expanded','false');
    $('header').find('a.header__menu-item').removeClass('active');
    $('header').find('.menu-mega').attr('aria-hidden','true');
    $('body').removeClass('header__menu-mega-visible');  
  }
}  

function HideSubMenu() {
  "use strict";
  enableBodyScroll();
  $('body').addClass('menu-foldable-closed');
  $('body').removeClass('menu-foldable-open');
  $('.header-foldable').removeClass('open');
  $('.header-foldable').attr('aria-expanded','false');

  $('.header-foldable-level-b .foldable-child-menu').attr('aria-expanded','false');
  $('.header-foldable-level-b .foldable-child-menu').removeClass('active');
  $('.header-foldable-level-b').attr('aria-expanded','false');
  $('.header-foldable-level-b').removeClass('active');

  $('.header-foldable-level-a').removeClass('move-out-the-way');

  /*
    $('.header-foldable-level-c .foldable-child-menu').attr('aria-expanded','false');
    $('.header-foldable-level-c .foldable-child-menu').removeClass('active');
    $('.header-foldable-level-c').attr('aria-expanded','false');
    $('.header-foldable-level-c').removeClass('active');
  */
}
function ShowSubMenu() {
  "use strict";
  //$('html, body').animate({scrollTop:0}, 20);
  disableBodyScroll();
  $('body').addClass('menu-foldable-open');
  $('body').removeClass('menu-foldable-closed');
  $('.header-foldable').addClass('open');
  $('.header-foldable').attr('aria-expanded','true');
}


function CheckSubMenuHeight() { 
  //cl('{ShowSubMenu}');
  var windowh = getPageHeight();
  var sub_menu_height = $('.foldable-menu__wrapper').outerHeight();
  if (windowh > sub_menu_height) { 
    //$('.foldable-menu__wrapper').addClass('foldable-menu__wrapper-bottom');
    //$('.foldable-menu__wrapper').addClass('foldable-menu__wrapper-top');
    //cl('submenu -> bottom');
  } else {
    $('.foldable-menu__wrapper').addClass('foldable-menu__wrapper-top');
    //cl('submenu -> top');
  }
}

function InitMainFoldMenu() {
  "use strict";
  CheckSubMenuHeight();
  HideSubMenu();
  $(".js-trigger__menu-foldable").click(function(e){
    if( $('body').hasClass('collection-filter-open') === true) {
      CollectionFiltersHideAll();
    } else if( $('body').hasClass('menu-foldable-open') === true) {
      HideSubMenu();
    } else {
      ShowSubMenu();
      return false;
    }
  });
  $('.header-foldable-version__accordion .level_c').each(function() {
    var data_max_h = $(this).outerHeight();
    $(this).attr('data-maxheight',data_max_h+'px');
    $(this).removeClass('level_c_visible');
    $(this).addClass('level_c_invisible');
    $(this).attr('aria-expanded','false');
  });
  /*  activate mobile menu title-a */
  //$('#collection__mode:has(.foldable-menu__ul .foldable-menu__ul-item.active) .foldable-menu__ul-item__first').addClass('active');

  $('.js-trigger-level__c .level-a').click(function(e){
    var this_submenu = $(this).parent().parent().find('.level_c');
    if ( this_submenu.hasClass('level_c_visible') === true ) {
      this_submenu.removeClass('level_c_visible');
      this_submenu.addClass('level_c_invisible');
      this_submenu.attr('aria-expanded','false');
    } else { 
      this_submenu.addClass('level_c_visible');
      this_submenu.removeClass('level_c_invisible');
      this_submenu.attr('aria-expanded','true');
    }
  });
  $('.js-trigger-foldable-menu-b').click(function(e){
    var open_rel = $(this).attr('data-menu-b');
    $('.child-menu-b-related-'+open_rel).attr('aria-expanded','true');
    $('.child-menu-b-related-'+open_rel).addClass('active');
    $('.header-foldable-level-b').attr('aria-expanded','true');
    $('.header-foldable-level-b').addClass('active');
    $('.header-foldable-level-a').addClass('move-out-the-way');
  });
  $('.js-collapse-sub-menu .foldable-menu__ul-item').click(function(e){
    if ( $(this).parent().hasClass('nonactive') === true) {
      /* close others */
      $('.js-collapse-sub-menu').addClass('nonactive');
      $('.js-collapse-sub-menu').removeClass('active');
      $('.js-collapse-sub-menu').find('.collapse-sub-menu__child').attr('aria-expanded','false');
      /* close others */
      $(this).parent().removeClass('nonactive');
      $(this).parent().addClass('active');
      $(this).parent().find('.collapse-sub-menu__child').attr('aria-expanded','true');
    } else {
      $(this).parent().addClass('nonactive');
      $(this).parent().removeClass('active');
      $(this).parent().find('.collapse-sub-menu__child').attr('aria-expanded','false');
    }
  });
  $('.js-trigger-foldable-menu-arrow-back-a').click(function(e){
    $('.header-foldable-level-b .foldable-child-menu').attr('aria-expanded','false');
    $('.header-foldable-level-b .foldable-child-menu').removeClass('active');
    $('.header-foldable-level-b').attr('aria-expanded','false');
    $('.header-foldable-level-b').removeClass('active');
    $('.header-foldable-level-a').removeClass('move-out-the-way');
  });
  $('.menu-bar-mobile').show();
  $('.menu-bar-mobile').removeClass('theme-visibility-hidden');
  $('.menu-bar-mobile').attr('aria-hidden','false');
  $(".js-trigger-foldable-menu-close").click(function(e){ HideSubMenu()});
  $(".header-foldable-underlay").click(function(e){ HideSubMenu()});
}



function __InitMainFoldMenu() {
  "use strict";
  HideSubMenu();
  $(".js-trigger-hamburger-foldable").click(function(e){
    if( $('body').hasClass('menu-foldable-open') === true) {
      HideSubMenu();
    } else {
      ShowSubMenu();
      return false;
    }
  });
  $(".js-trigger-foldable-menu-close").click(function(e){ HideSubMenu(); });
  $(".header-foldable-underlay").click(function(e){ HideSubMenu(); });
}
function InitLargeVisualCycle() {
  "use strict";
  if (Shopify.designMode) {
    cl('DESIGN MODE : Cycle disabled');
    return false;
  }
  if ( $('.theme-section__visual').length ) {
    $('.theme-section__visual').each(function() {
      var this_id = $(this).attr('id');
      window.slide_count = 1;
      var min_slide_height = 0;
      $('#'+this_id+'.theme-section__visual').find('.visual-slide-inner .visual__box').each(function () {
        window.slide_count = window.slide_count + 1;
        var slide_h = $(this).outerHeight();
        var padding_t = $('#'+this_id+'.theme-section__visual').find('.visual-text-content').css('padding-top');
        var padding_b = $('#'+this_id+'.theme-section__visual').find('.visual-text-content').css('padding-bottom');
        slide_h = parseInt(slide_h) + parseInt(padding_t) + parseInt(padding_b) + 100;
        //cl('['+this_id+'] slide:' + window.slide_count + ' -> ' +slide_h);
        if (slide_h > min_slide_height) { min_slide_height = slide_h; }
      });
      $('#'+this_id+'.theme-section__visual > div:not(.section-visual-theme-custom)').find('.visual-slide-inner').css({'min-height':min_slide_height+'px'});

      /* set banner animations */
      $('#'+this_id+'.theme-section__visual').find('.visual-slide').each(function() {
        var $this_slide = $(this);
        var data_delay = 0;
        $this_slide.find('.cycle-animation-trigger').each(function() {
          var $this = $(this);
          if ( !$this.attr('data-animation-in') ) $this.attr('data-animation-in','fadeInUp');
          if ( !$this.attr('data-dur-in') ) $this.attr('data-dur-in','300');
          if ( !$this.attr('data-delay-in') ) $this.attr('data-delay-in',''+data_delay+'');
          data_delay = data_delay + 200;
        });
      });

      /* trigger first slide */
      $('#'+this_id+'.theme-section__visual').find('.visual-slide:first-child').each(function() {
        var $this_slide = $(this);
        $this_slide.find('.cycle-animation-trigger').each(function() {
          var $this = $(this);
          $this.removeClass('animation-trigger');
          doSingleAnimation__In($this,'cycle-banner');
        });
      });

      $('#'+this_id+'.theme-section__visual .cycle-slideshow-inactive').addClass('cycle-slideshow');
      $('#'+this_id+'.theme-section__visual .cycle-slideshow').removeClass('cycle-slideshow-inactive');
      $('#'+this_id+'.theme-section__visual .cycle-slideshow').cycle();

      if ( $('html').hasClass('reduced-media-true') === true ) {
        $('#'+this_id+'.theme-section__visual .cycle-slideshow').cycle('pause');
      } else {
        var slideshowHome = $('#'+this_id+'.theme-section__visual .cycle-slideshow');
        slideshowHome.on('cycle-initialized cycle-before', function(e, opts, outgoingSlideEl, incomingSlideEl) {
          //cl('cycle-before');
          var $elemparent = $(outgoingSlideEl);
          $elemparent.find('.cycle-animation-trigger').each(function() {
            var $this = $(this);
            $this.removeClass('animation-trigger');
            $this.addClass('animation-trigger-out');
          });
          $elemparent.find('.animation-trigger-out').each(function() {
            var $this = $(this); doSingleAnimation__Out($this,'cycle-banner');
          });
        });
        slideshowHome.on('cycle-initialized cycle-after', function(e, opts, outgoingSlideEl, incomingSlideEl) {
          /* cycle-after */
          //cl('cycle-after');
          var $elemparent = $(incomingSlideEl);
          $elemparent.find('.animation-trigger-out').each(function() {
            var $this = $(this);
            $this.removeClass('animation-trigger-out');
            $this.addClass('animation-trigger');
          });
          $elemparent.find('.cycle-animation-trigger').each(function() {
            var $this = $(this);
            $this.removeClass('animation-trigger');
            doSingleAnimation__In($this,'cycle-banner');
          });
        });
        slideshowHome.on('cycle-initialized cycle-update-view', function(event, optionHash, slideOptionsHash, currentSlideEl) {
          //cl('cycle-update-view');
          var $elemparent = $(currentSlideEl);

          var change_ux_color = '';
          if ( $elemparent.hasClass('color-dgreen') ) { change_ux_color = 'dgreen' }
          if ( $elemparent.hasClass('color-white') ) { change_ux_color = 'white' }
          if ( $elemparent.hasClass('color-black') ) { change_ux_color = 'black' }
          if ( $elemparent.hasClass('color-green') ) { change_ux_color = 'green' }
          if ( $elemparent.hasClass('color-red') ) { change_ux_color = 'red' }

          slideshowHome.removeClass('cycle-ux-color-dgreen cycle-ux-color-white cycle-ux-color-black cycle-ux-color-green cycle-ux-color-red');
          slideshowHome.addClass('cycle-ux-color-'+change_ux_color);

        });
      }
    });
  }
}

function InitProductVisualCycle() {
  "use strict";
  if (Shopify.designMode) {
    cl('DESIGN MODE : Cycle disabled');
    return false;
  }
  if ( $('.product-media-carousel-wrapper').length ) {
    $('.product-media-carousel-wrapper').each(function() {

      var min_slide_height = 0;
      $('.product-media-carousel-wrapper .cycle-slideshow-inactive').find('.product-media-slide').each(function () {
        window.slide_count = window.slide_count + 1;
        var slide_h = $(this).outerHeight();
        var padding_t = $('.product-media-carousel-wrapper .cycle-slideshow-inactive').find('.product-media-slide').css('padding-top');
        var padding_b = $('.product-media-carousel-wrapper .cycle-slideshow-inactive').find('.product-media-slide').css('padding-bottom');
        slide_h = parseInt(slide_h) + parseInt(padding_t) + parseInt(padding_b);
        //cl('['+this_id+'] slide:' + window.slide_count + ' -> ' +slide_h);
        if (slide_h > min_slide_height) { min_slide_height = slide_h; }
      });
      $('.product-media-carousel-wrapper .cycle-slideshow-inactive').find('.product-media-slide').css({'min-height':min_slide_height+'px'});
      $('.product-media-carousel-wrapper .cycle-slideshow-inactive').addClass('cycle-slideshow');
      $('.product-media-carousel-wrapper .cycle-slideshow').removeClass('cycle-slideshow-inactive');
      $('.product-media-carousel-wrapper .cycle-slideshow').cycle();

      if ( $('html').hasClass('reduced-media-true') === true ) {
        $('.product-media-carousel-wrapper .cycle-slideshow').cycle('pause');
      } else {
        var slideshowHome = $('.product-media-carousel-wrapper .cycle-slideshow');
        slideshowHome.on('cycle-initialized cycle-before', function(e, opts, outgoingSlideEl, incomingSlideEl) {
          //cl('cycle-before');
          var $elemparent = $(outgoingSlideEl);
        });
        slideshowHome.on('cycle-initialized cycle-after', function(e, opts, outgoingSlideEl, incomingSlideEl) {
          //cl('cycle-after');
          var $elemparent = $(incomingSlideEl);
        });
        slideshowHome.on('cycle-initialized cycle-update-view', function(event, optionHash, slideOptionsHash, currentSlideEl) {
          //cl('cycle-update-view');
          var $elemparent = $(currentSlideEl);
        });
      }
    });
  }

}

/* track visible slider/cycle */
window.active_cycle_el = 'none';
function CheckVisibleSections() {
  "use strict";
  //cl('{CheckVisibleSections}');
  window.section_hit = 'false';
  window.section_first_hit = 'false'
  $('section').each(function () {
    if(elementIsInView($(this)[0])){
      if ( $(this).find('.section-inner').length ) {
        var section_class = $(this).find('.section-inner').attr('class');
      } else {
        var section_class = $(this).attr('class');
      }
      /* cl('class:' +section_class); */
      if (!isEmpty(section_class) && window.section_first_hit == 'false') {
        window.section_first_hit = 'true';

        window.windoww = getPageWidth();
        if (window.windoww >= 550) {

          if (section_class.indexOf("header-logo-white") >= 0) {
            $('header').removeClass('header-logo-black');
            $('header').addClass('header-logo-white');
          } else if (section_class.indexOf("header-logo-black") >= 0) {
            $('header').removeClass('header-logo-white');
            $('header').addClass('header-logo-black');
          } else {
            $('header').removeClass('header-logo-black');
            $('header').addClass('header-logo-white');
          }
          if (section_class.indexOf("header-hamburger-white") >= 0) {
            $('header').removeClass('header-hamburger-black');
            $('header').addClass('header-hamburger-white');
          } else if (section_class.indexOf("header-hamburger-black") >= 0) {
            $('header').removeClass('header-hamburger-white');
            $('header').addClass('header-hamburger-black');
          } else {
            $('header').removeClass('header-hamburger-black');
            $('header').addClass('header-hamburger-white');
          }

        } else {

          if (section_class.indexOf("header-logo-white") >= 0) {
            $('header').removeClass('header-logo-black');
            $('header').addClass('header-logo-white');
            $('header').removeClass('header-hamburger-black');
            $('header').addClass('header-hamburger-white');
          } else if (section_class.indexOf("header-logo-black") >= 0) {
            $('header').removeClass('header-logo-white');
            $('header').addClass('header-logo-black');
            $('header').removeClass('header-hamburger-white');
            $('header').addClass('header-hamburger-black');
          } else {
            $('header').removeClass('header-logo-black');
            $('header').addClass('header-logo-white');
            $('header').removeClass('header-hamburger-black');
            $('header').addClass('header-hamburger-white');
          }
        }
      }

      $(this).addClass('section-visible');
      if (!isEmpty(section_class)) {
        if (section_class.indexOf("section-testimonials") >= 0) {
          window.active_cycle_el = $('.section-testimonials .cycle-slideshow');
          if ( $('html').hasClass('reduced-media-false') === true ) { window.active_cycle_el.cycle('resume'); }
          $('.section-header-banner .cycle-slideshow').cycle('pause');
          window.section_hit = 'true';
        } else if (section_class.indexOf("theme-section__visual") >= 0) {
          window.active_cycle_el = $('.theme-section__visual .cycle-slideshow');
          if ( $('html').hasClass('reduced-media-false') === true ) { window.active_cycle_el.cycle('resume'); }
          window.section_hit = 'true';
        } else if (window.section_hit === 'false') {
          window.active_cycle_el = 'none';
          $('.theme-section__visual .cycle-slideshow').cycle('pause');
        }
      }
    } else {
      $(this).removeClass('section-visible');
    }
  });

  if (window.section_first_hit == 'false') {
    $('header').removeClass('header-logo-white');
    $('header').addClass('header-logo-black');
    $('header').removeClass('header-hamburger-white');
    $('header').addClass('header-hamburger-black');
  }

}
/* Keys navigation binder; left + right arrows */
$(document).keydown(function(e) {
  if (window.active_cycle_el !== 'none') {
    if (e.keyCode == 39 && window.active_cycle_el.data('cycle.opts').busy !== true) { window.active_cycle_el.cycle("next"); }
    if (e.keyCode == 37 && window.active_cycle_el.data('cycle.opts').busy !== true) { window.active_cycle_el.cycle('prev'); }
  }
});

function CheckVisibleHeader() {
  "use strict";
  //{CheckVisibleHeader}');

  window.windoww = getPageWidth();
  if (window.windoww >= 768) {
    var trigger_sticky_header_pixels_top = '500';
  } else {
    var trigger_sticky_header_pixels_top = '200';
  }
  $('.announcement-bar').each(function () {
    if(elementIsInView($(this)[0])){
      $('body').addClass('announcement-is-visible');
      $('body').removeClass('announcement-not-visible');
    } else {
      $('body').removeClass('announcement-is-visible');
      $('body').addClass('announcement-not-visible');
    }
  });
  $('#shopify-section-element-header-theme').each(function () {
    if(elementIsInView($(this)[0])){
      $('body').addClass('header-is-visible');
      $('body').removeClass('header-not-visible');
    } else {
      $('body').removeClass('header-is-visible');
      $('body').addClass('header-not-visible');
    }

    var _body = $('body');
    var visibility_method = 'always_sticky';
    if (visibility_method == 'always_sticky') {
      if ( _body.hasClass('header-sticky-allowed') !== true ) { _body.addClass('header-sticky-allowed'); }
      if ( _body.hasClass('header-is-sticky') !== true ) { _body.addClass('header-is-sticky'); }
    } else {

      if ( lastScrollPos > trigger_sticky_header_pixels_top ) {
        if ( _body.hasClass('header-sticky-allowed') !== true ) {
          _body.addClass('header-sticky-allowed');
        }
        if (lastScrollDirection === 'up') {
          if ( _body.hasClass('header-is-sticky') !== true ) {
            _body.addClass('header-is-sticky');
          }
          if ( _body.hasClass('header-is-normal') === true ) {
            _body.removeClass('header-is-normal');
          }
        } else {
          if ( _body.hasClass('header-is-sticky') === true ) {
            _body.removeClass('header-is-sticky');
            if ( _body.hasClass('header-sticky-animate-back') === false ) {
              _body.addClass('header-sticky-animate-back');
              setTimeout(function() {
                _body.removeClass('header-sticky-animate-back');
              }, 800);
            }
          }
          if ( _body.hasClass('header-is-normal') === false ) {
            _body.addClass('header-is-normal');
          }
        }
      } else {
        if ( _body.hasClass('header-sticky-allowed') === true ) {
          if ( _body.hasClass('header-sticky-animate-back') === false ) {
            _body.addClass('header-sticky-animate-back');
            setTimeout(function() {
              _body.removeClass('header-sticky-animate-back');
              _body.removeClass('header-sticky-allowed');
              if ( _body.hasClass('header-is-sticky') === true ) {
                _body.removeClass('header-is-sticky');
              }
              if ( _body.hasClass('header-is-normal') === false ) {
                _body.addClass('header-is-normal');
              }
            }, 400);
          }
        }
      }
    }
  });
}

function CheckVisibleElements() {
  "use strict";
  /* CheckVisibleHeader(); */
  CheckVisibleSections();
}

window.windoww = getPageWidth();
window.windowh = getPageHeight();
window.lastScrollDirection = 'down'
window.lastScrollPos = 0;
window.scrollY = 0;

function InitGeneralWindowScroll() {
  "use strict";
  window.windoww = getPageWidth();
  window.windowh = getPageHeight();
  CheckGeneralWindowScroll();

  document.addEventListener('mousemove', event => {
    //check show-header)
    if (event.clientY < 60) {
      if ( $('body').hasClass('menu-scroll-top') === false ) {
        $('body').addClass('menu-scroll-top');
      }
    } else {
      if ( $('body').hasClass('menu-scroll-started') === true ) {
        $('body').removeClass('menu-scroll-started');
      }
    }
  });
}

function CheckGeneralWindowScroll() {
  "use strict";
  //cl('{CheckGeneralWindowScroll}');
  window.scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var st = $(window).scrollTop();
  if (window.scrollY > (window.lastScrollPos)) {
    window.lastScrollDirection = 'down';
    if ( $('body').hasClass('scroll-direction-down') === false ) {
      $('body').addClass('scroll-direction-down');
      $('body').removeClass('scroll-direction-up');
    }
  } else {
    window.lastScrollDirection = 'up';
    if ( $('body').hasClass('scroll-direction-up') === false ) {
      $('body').addClass('scroll-direction-up');
      $('body').removeClass('scroll-direction-down');
    }
  }
  if (window.scrollY < 300) {
    if ( $('body').hasClass('menu-scroll-top') === false ) {
      $('body').addClass('menu-scroll-top');
      $('body').removeClass('menu-scroll-started');
    }
  } else {
    if ( $('body').hasClass('menu-scroll-started') === false ) {
      $('body').addClass('menu-scroll-started');
      $('body').removeClass('menu-scroll-top');
    }
  }
  if (window.scrollY < 80) {
    if ( $('body').hasClass('announcement-visible') === false ) {
      $('body').addClass('announcement-visible');
      $('body').removeClass('announcement-invisible');
    }
  } else {
    if ( $('body').hasClass('announcement-invisible') === false ) {
      $('body').addClass('announcement-invisible');
      $('body').removeClass('announcement-visible');
    }
  }
  window.lastScrollPos = window.scrollY;
  CheckVisibleElements();
}

/* ////////////////////////////////// */
/* ///////////// Scrollbar Element */
/* ////////////////////////////////// */
window.allow_js_click = true;
window.HorScrollDragIsActive = false;
window.click_one = 0;
window.click_two = 0;

function ScrollBarHorMouseIsDown(e,parent) {
  cl('ScrollBarHorMouseIsDown');
  window.click_one = Date.now();
  //cl('window.click_one ' +window.click_one);
  window.HorScrollDragIsActive = true;
  window.allow_js_click = false;
  window.startX = e.pageX - parent.offsetLeft;
  scrollLeft = parent.scrollLeft;
}
function ScrollBarHorMouseUp(e,parent) {
  //cl('ScrollBarHorMouseUp');
  /* on release check time between events, if smaller x, then act like click, otherwise like drag. allow no click action using timeout */
  window.click_two = Date.now();
  //cl('window.click_two ' +window.click_two);
  if (window.click_one > 0 && ( window.click_one < window.click_two )) {
    var difference = click_two - click_one;
    //cl('difference:  '+difference);
    if (difference > 200) {
      /* let loose after dragg action */
      //cl('let loose after dragg action');
      window.HorScrollDragIsActive = false;
      window.click_one = 0
      setTimeout(function(){
        window.allow_js_click = true;
      }, 300);
    } else {
      //cl('user click, follow link');
      /* user click, follow link */
      window.HorScrollDragIsActive = false;
      window.allow_js_click = true;
      window.click_one = 0
    }
  } else {
    window.HorScrollDragIsActive = false;
    window.allow_js_click = true;
    window.click_one = 0
  }

  e.preventDefault();
}
function ScrollBarHorMouseLeave(e) {
  //cl('ScrollBarHorMouseLeave');
  window.HorScrollDragIsActive = false;
  window.allow_js_click = true;
  var this_el = $('.shopify-section:has(.js-scrollbar-wrapper)');
  e.preventDefault();
}
function ScrollBarHorMouseMove(e,parent) {
  e.preventDefault();
  if (window.HorScrollDragIsActive == true) {
     const x = e.pageX - parent.offsetLeft;
      const walkX = (x - window.startX) * 1;
      var parent_scrollLeft = scrollLeft - walkX;
      parent.scrollLeft = parent_scrollLeft;
  }
}

function SetScrollBarHorNav(this_section_el) {
  "use strict";
  if ( this_section_el.find('.js-scrollbar-nav').length ) {
    this_section_el.find('.js-scrollbar-nav-left').addClass('inactive');
    this_section_el.find('.js-scrollbar-nav').on('click',function (e) {

        ResetScrollBarHor__AutoScroll();

        var parent = this_section_el;
        var this_list_el = this_section_el.find('.elements__items-list');
        var this_list_el_gap = this_list_el.css("column-gap").replace(/px/,"");
        var hor_scroll_move_px = parseFloat( this_section_el.find('.grid__item').outerWidth() ) + parseFloat( this_list_el_gap );
        var max_scroll_left_start = $(".section-use-carousel-true .scrollbar-wrapper .scrollbar-inner").outerWidth() - window.windoww - 100;

        if ( $(this).hasClass('js-scrollbar-nav-right') === true ) {
          var current_pos = $(".scrollbar-wrapper").scrollLeft();
          var current_slide_num = Math.floor( current_pos / hor_scroll_move_px );
          var new_slide_num = (current_slide_num + 1);
        } else {
          var current_pos = $(".scrollbar-wrapper").scrollLeft();
          var current_slide_num = Math.ceil( current_pos / hor_scroll_move_px );
          var new_slide_num = (current_slide_num - 1);
        }

        var new_parent_scrollLeft = ( new_slide_num * hor_scroll_move_px );

        if (new_slide_num < 1) {
          this_section_el.find('.js-scrollbar-nav-left').addClass('inactive');
        } else {
          this_section_el.find('.js-scrollbar-nav-left').removeClass('inactive');
        }
        if (new_parent_scrollLeft > max_scroll_left_start) {
          this_section_el.find('.js-scrollbar-nav-right').addClass('inactive');
        } else {
          this_section_el.find('.js-scrollbar-nav-right').removeClass('inactive');
        }


        $(".scrollbar-wrapper").animate({scrollLeft: new_parent_scrollLeft}, 300);
    });
  }
}

function InitScrollBarHor() {
  "use strict";
  //cl('InitScrollBarHor');
  if ( $('.shopify-section:has(.js-scrollbar-wrapper)').length ) {
    $('.shopify-section:has(.js-scrollbar-wrapper)').each(function() {
      var this_section_el = $(this);
      var this_scrollbar_el = this_section_el.find('.js-scrollbar-wrapper');
      var content_w = $('.header.page-width').outerWidth();
      window.windoww = $('main').outerWidth();
      window.windoww = getPageWidth();
      if (window.windoww >= 1280) {
        var padding_side = ((window.windoww - content_w) / 2) + 20;
        this_scrollbar_el.find('.scrollbar-inner').css({'padding-left':padding_side+'px'});
        this_scrollbar_el.find('.scrollbar-inner').css({'padding-right':padding_side+'px'});
        /* cl('content_w:: ( ( ' + window.windoww + ' - ' + content_w + ') / 2 ) = padding_side ' + padding_side); */
      }
      this_scrollbar_el.find('.article-card__info a').addClass('no-pointer');

      /* START - HorScrollDrag */
      const parent = document.querySelector(".scrollbar-wrapper");
      parent.addEventListener("mousedown", (e) => ScrollBarHorMouseIsDown(e,parent));
      parent.addEventListener("mouseup", (e) => ScrollBarHorMouseUp(e,parent));
      parent.addEventListener("mouseleave", (e) => ScrollBarHorMouseLeave(e,parent));
      parent.addEventListener("mousemove", (e) => ScrollBarHorMouseMove(e,parent));
      /* START - HorScrollDrag -- Arrows */
      SetScrollBarHorNav( this_section_el );

      var num_prod = this_scrollbar_el.find('li').length;
      //cl('num_prod: '+num_prod);
      this_scrollbar_el.removeClass( function (index, className) { return (className.match (/(^|\s)element-count-\S+/g) || []).join(' '); });
      this_scrollbar_el.addClass('element-count-'+num_prod);
      this_scrollbar_el.find('ul.js-elements__wrapper').removeClass( function (index, className) { return (className.match (/(^|\s)element-count-\S+/g) || []).join(' '); });
      this_scrollbar_el.find('ul.js-elements__wrapper').addClass('element-count-'+num_prod);

    });
  }
  InitScrollBarHor__AutoScroll();
}

var scroll_bar_hor_ani;
window.scroll_bar_hor_ani_timeout = 3000;
window.new_parent_scrollLeft;
window.scrollLeftAllow = true;
function InitScrollBarHor__AutoScroll() {
  "use strict";
  if ( $(".section-use-carousel-true").length ) {
    //cl('InitScrollBarHor__AutoScroll');
    SetScrollBarHor__AutoScroll();
    $('.section-use-carousel-true:not(.section-use-carousel-manual-scroll-false)').keypress(function() { ResetScrollBarHor__AutoScroll(); });
    $('.section-use-carousel-true:not(.section-use-carousel-manual-scroll-false)').mousemove(function() { ResetScrollBarHor__AutoScroll(); });
    $('.section-use-carousel-true:not(.section-use-carousel-manual-scroll-false) .scrollbar-wrapper').on('wheel',function() { ResetScrollBarHor__AutoScroll(); });
  }
}
function SetScrollBarHor__AutoScroll() {
  "use strict";
  $(".section-use-carousel-true").addClass('scroll-ani-enabled');

  if(window.scrollLeftAllow == true){
    var scroll_left_start = $(".section-use-carousel-true.section-use-carousel-auto-scroll-true .scrollbar-wrapper").scrollLeft();
    var max_scroll_left_start = $(".section-use-carousel-true.section-use-carousel-auto-scroll-true .scrollbar-wrapper .scrollbar-inner").outerWidth() - window.windoww;
    window.new_parent_scrollLeft = scroll_left_start;
    window.speeeeeeed = $('.section-use-carousel-true .js-set-carousel-speed').val() / 10;

    window.scroll_bar_hor_ani_interval = setInterval(function(){
      window.new_parent_scrollLeft = parseInt(window.new_parent_scrollLeft) + window.speeeeeeed;
      if (window.new_parent_scrollLeft > max_scroll_left_start) {
        window.new_parent_scrollLeft = 0;
        $(".section-use-carousel-true.section-use-carousel-auto-scroll-true").find('.js-scrollbar-nav-right').removeClass('inactive');
        $(".section-use-carousel-true.section-use-carousel-auto-scroll-true .scrollbar-wrapper").animate({scrollLeft: window.new_parent_scrollLeft}, 0, "linear");
      } else {
        $(".section-use-carousel-true.section-use-carousel-auto-scroll-true").find('.js-scrollbar-nav-left').removeClass('inactive');
        $(".section-use-carousel-true.section-use-carousel-auto-scroll-true .scrollbar-wrapper").animate({scrollLeft: window.new_parent_scrollLeft}, 100, "linear");
      }
      //cl(window.new_parent_scrollLeft);
    }, 100);
  }
};

function ResetScrollBarHor__AutoScroll() {
  "use strict";
  //cl('ResetScrollBarHor__AutoScroll');
  clearTimeout(window.scroll_bar_hor_ani);
  clearInterval(window.scroll_bar_hor_ani_interval);
  window.new_parent_scrollLeft = '';
  $(".section-use-carousel-auto-scroll-true").removeClass('scroll-ani-enabled');
  window.scrollLeftAllow = false;
  scroll_bar_hor_ani = setTimeout(function(){
    window.scrollLeftAllow = true;
    SetScrollBarHor__AutoScroll();
  }, window.scroll_bar_hor_ani_timeout);
}


/* ////////////////////////////////// */
/* ///////////// Product Review */
/* ////////////////////////////////// */

function CheckProductReview() {
  "use strict";
  if ( $('#shopify-product-reviews').length ) {
    if ( $('#shopify-product-reviews .spr-starrating').length ) {
      var star_html = $('#shopify-product-reviews .spr-starrating').wrap('<span>').parent().html();
      $('.product-details__review-placeholder').html(star_html);
      $('.product-details__review-placeholder').addClass('review-loaded');
    }
  }
}

/* ////////////////////////////////// */
/* ///////////// Save Recently viewed */
/* ////////////////////////////////// */

function InitSaveProductRecent() {
  "use strict";
  var use_cookie_alert_val = $('.js-website-use-cookie-alert').val();
  if (use_cookie_alert_val == 'true') {
    var cookie_agreed_all = GetCookie('store-cookies');
    if (cookie_agreed_all == 'yes') { SaveProductRecent(); }
  } else {
    SaveProductRecent();
  }
}

function SaveProductRecent() {
  "use strict";
  var cookie_name = window.recently_cookie_name;
  var current_handle = $('.js-website-product-handle').val();
  var recent_products_string = GetCookie(cookie_name);
  if (isEmpty(recent_products_string)) {
    SetCookie(cookie_name,current_handle,'short');
  } else {
    var recent_products_arr = recent_products_string.split(":::");
    if($.inArray(current_handle, recent_products_arr) !== -1) {
      /* do nothing */
    } else {
      var new_products_string = current_handle + ':::' + recent_products_string;
      SetCookie(cookie_name,new_products_string,'short');
    }
  }
}

function InitFullPageHeight() {
  "use strict";
  //cl('{InitFullPageHeight}');
  if ( $('body.page-active-challenge .shopify-challenge__container').length ) {
    $('body.page-active-challenge .shopify-challenge__container').addClass('full-page-wrapper-maxed');
    $('body.page-active-challenge .shopify-challenge__container').addClass('full-page-max-h');

    $('body.page-active-challenge .shopify-challenge__button').addClass('theme-button__red-white-red');
    $('body.page-active-challenge .shopify-challenge__button').addClass('theme-button-hover__blue-grey-blue');

    $('#main_content').addClass('bg-slgrey');
  }
  if ( $('.full-page-max-h').length ) {
    var rest_h = getPageHeight();
    if ( $('.announcement-bar').length ) { rest_h = rest_h - $('.announcement-bar').outerHeight(); }
    if ( $('.header').length ) { rest_h = rest_h - $('.header').outerHeight(); }
    if ( $('.footer').length ) { rest_h = rest_h - $('.footer').outerHeight(); }
    $('.full-page-max-h').css({'min-height': rest_h+'px'});
  }
  if ( $('.full-page-max-h-excl-footer').length ) {
    var rest_h = getPageHeight();
    if ( $('.announcement-bar').length ) { rest_h = rest_h - $('.announcement-bar').outerHeight(); }
    if ( $('.header').length ) { rest_h = rest_h - $('.header').outerHeight(); }
    $('.full-page-max-h-excl-footer').css({'min-height': rest_h+'px'});
  }
}

function AlignPopup(from, popup_el, position) {
  "use strict";
  //cl('{AlignPopup}');
  window.windoww = getPageWidth();
  var windowh = getPageHeight();
  var self_w = $(popup_el).outerWidth();
  var self_h = $(popup_el).outerHeight();

  if (position == 'center-center') {
    var self_top = (( windowh - self_h) / 2 );
    var self_left = (( window.windoww - self_w) / 2 );
    if (self_top < 2) { self_top = 2; }
    if (self_left < 2) { self_left = 2; }

    $(popup_el).css({'top':self_top+'px'});
    $(popup_el).css({'left':self_left+'px'});
  } else {
    //cl('popup align position invalid');
  }
  if (from == 'init') {
    $(window).resize(function() { AlignPopup('resize', popup_el, position); });
  }
}



/* ////////////////////////////////// */
/* ///////////// Newletter alert */
/* ////////////////////////////////// */

function CheckNewsletterAlert() {
  "use strict";
  //cl('{CheckNewsletterAlert}');
  var form_el = $('#newsletter-alert-box');
  form_el.find('.js-newsletter_email').on('click',function() {
    form_el.find('.field-move-label').addClass('field-move-label-up');
    $(this).removeClass('invalid');
    form_el.find('.ajax-message').remove();
  });

  form_el.find('button').on('click',function(event) {
    event.preventDefault();
    window.form_passed = 't';
    form_el.find('button').prop("disabled", true);
    form_el.find('.ajax-message').remove();
    form_el.find('.js-required').removeClass('invalid');
    form_el.find('.js-required').each(function() {
      var given_value = $(this).val();
      if (given_value.length < 1) {
        $(this).addClass('invalid');
        window.form_passed = 'f';
      }
    });
    if (window.form_passed === 'f') {
      var popup_message = form_el.find('#all_required_error').val();
    }
    if (window.form_passed === 't') {
      var given_mail = form_el.find('.js-newsletter_email').val();
      var given_mail_valid = ValidateEmail(given_mail);
      if (given_mail === '' || given_mail_valid === false) {
        form_el.find('.js-newsletter_email').addClass('invalid');
        var popup_message = form_el.find('#input_email_error').val();
        window.form_passed = 'f';
      }
    }

    if (window.form_passed === 'f') {
      form_el.find('form').append('<p class="margin-t-xs font-fam-light font-size-xs ajax-message ajax-message-errror">'+popup_message+'</p>');
      form_el.find('button').prop("disabled", false);
      return false;
    } else {
      var data = form_el.find('form').serialize();
      $.ajax({
        type: "POST",
        url: "/contact#contact_form",
        data: data,
        success: function(data_callback) {
          var popup_message = 'Bedankt voor je aanmelding!';
          if ( $('body').hasClass('lang-en') ) {
            var popup_message = 'We will keep you up to date!';
          }
          form_el.find('.newsletter-alert__inner h3').html(''+popup_message+'');
          form_el.find('.newsletter-alert__inner h3').parent().removeClass('margin-b-sm');
          form_el.find('.newsletter-alert__inner p').hide();
          form_el.find('.newsletter-alert__inner .row-flex-hor').hide();

          form_el.find('button').prop("disabled", false);
            var cookie_name = window.newsletter_cookie_name;
            SetCookie(cookie_name,'7000','short');
        },
        error: function(data_callback) {
          cl('NEWSLETTER POPUP ERROR: data_callback '+data_callback);
          var popup_message = 'There was an error while submitting the form.';
          form_el.find('form').append('<p class="font-fam-light font-size-sm txtuppercase ajax-message ajax-message-errror bg-purple padding-4">'+popup_message+'</p>');
          form_el.find('button').prop("disabled", false);
        }
      });
    }
  });
}

function RemoveNewsletterAlert() {
  "use strict";
  //cl('RemoveNewsletterAlert');
  $('.newsletter-alert-box-wrapper').remove();
}

function HideNewsletterAlert() {
  "use strict";
  //cl('{HideNewsletterAlert}');
  $('body').removeClass('newsletter-alert-visible');
  $('body').addClass('newsletter-alert-invisible');
  $('.newsletter-alert-box-wrapper').attr('aria-hidden','true');
  RemoveNewsletterAlert();
}

function InitNewsletterPopup() {
  "use strict";
  //cl('{InitNewsletterPopup}');
  var use_cookie_alert_val = $('.js-website-use-cookie-alert').val();
  if (use_cookie_alert_val == 'true') {
    var cookie_agreed_all = GetCookie('store-cookies');
    if (cookie_agreed_all == 'yes') {
      /* cl('{InitNewsletterPopup} A'); */
      CheckNewsletterPopup();
    } else {
      /* cl('{InitNewsletterPopup} B'); */
      RemoveNewsletterAlert();
    }
  } else {
    /* cl('{InitNewsletterPopup} C'); */
    CheckNewsletterPopup();
  }
}

function CheckNewsletterPopup() {
  "use strict";
  //cl('{CheckNewsletterPopup}');
  var cookie_name = window.newsletter_cookie_name;
  var cookie_value = GetCookie(cookie_name);
  var show_popup_num = $('.js-website-use-newsletter-popup-page-count').val();
  /*DEV setting*/
  /* var show_popup_num = 12; var cookie_value = 11; */

  $('body').addClass('newsletter-alert-invisible');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const show_newsletter_alert = urlParams.get('show_newsletter_alert');
  if (show_newsletter_alert == 'true') {
    var show_popup_num = 2;
    var cookie_value = 1;
  }
  if (isEmpty(cookie_value)) {
    /* cl('{CheckNewsletterPopup} A'); */
    SetCookie(cookie_name,'1','short');
    RemoveNewsletterAlert();
  } else if ( parseInt(cookie_value) === parseInt(show_popup_num - 1) ) {
    /* cl('{CheckNewsletterPopup} B'); */
    setTimeout(function(){
      ShowNewsletterAlert();
    }, 2000);
  } else if ( parseInt(cookie_value) < parseInt(show_popup_num - 1) ) {
    /* cl('{CheckNewsletterPopup} C'); */
    var cookie_value_new = parseInt(cookie_value) + 1;
    SetCookie(cookie_name,cookie_value_new,'short');
    RemoveNewsletterAlert();
  } else {
    /* cl('{CheckNewsletterPopup} D'); */
    RemoveNewsletterAlert();
  }
}

function ShowNewsletterAlert() {
  "use strict";
  //cl('{ShowNewsletterAlert}');
  $('body').append('<div class="newsletter-alert-overlay"></div>');
  $('.newsletter-alert-overlay').on('click',function () {
    $('.js-close-newsletter-alert').trigger('click');
  });
  $('.js-close-newsletter-alert').on('click',function(event){
    event.preventDefault();
    var cookie_name = window.newsletter_cookie_name;
    SetCookie(cookie_name,'9000','short');
    HideNewsletterAlert();
  })
  $('body').addClass('newsletter-alert-visible');
  $('body').removeClass('newsletter-alert-invisible');
  $('.newsletter-alert-box-wrapper').attr('aria-hidden','false');
  CheckNewsletterAlert();
}


/* ////////////////////////////////// */
/* ///////////// Footer Newsletter */
/* ////////////////////////////////// */
function InitNewsletterForm() {
  "use strict";
  //cl('{InitNewsletterForm}');

  $('.theme-section__visual-form .js-newsletter_email').on('click',function() { $(this).removeClass('invalid'); });
  $('.theme-section__visual-form .newsletter-form__field-wrapper .css-arrow').on('click',function() {
    window.form_passed = 't';
    var form_el = $('.theme-section__visual-form #contact_form');
    form_el.prop("disabled", true);
    form_el.find('.js-required').removeClass('invalid');
    form_el.find('.js-required').each(function() {
      var given_value = $(this).val();
      if (given_value.length < 1) {
        $(this).addClass('invalid');
        window.form_passed = 'f';
      }
    });
    if (window.form_passed === 'f') {
      var popup_message = $('.footer-theme #all_required_error').val();
    }
    if (window.form_passed === 't') {
      var given_mail = form_el.find('.js-newsletter_email').val();
      var given_mail_valid = ValidateEmail(given_mail);
      if (given_mail === '' || given_mail_valid === false) {
        form_el.find('.js-newsletter_email').addClass('invalid');
        var popup_message = $('.footer-theme #input_email_error').val();
        window.form_passed = 'f';
      }
    }

    if ( $('body').hasClass('lang-en') ) {
      var popup_this_title = 'Something went wrong';
    } else {
      var popup_this_title = 'Er ging iets mis';
    }

    if (window.form_passed === 'f') {
      CustomAlertConfirm.open({
        this_template: 'popup-message',
        this_title: popup_this_title,
        this_message: popup_message,
        this_okText: 'Sluiten',
        this_onok: () => {
          $('#contact_form button').prop("disabled", false);
          return false; }
      });
      return false;
    } else {
      ShowPageLoader();
      submitForm(form_el);
      $('#contact_form button').prop("disabled", false);
    }

  });

  $('.footer-theme .js-newsletter_email').on('click',function() { $(this).removeClass('invalid'); });
  $('.footer-theme .newsletter-form__field-wrapper .css-arrow').on('click',function() {



    window.form_passed = 't';
    var form_el = $('.footer-theme #contact_form');
    form_el.prop("disabled", true);
    form_el.find('.js-required').removeClass('invalid');
    form_el.find('.js-required').each(function() {
      var given_value = $(this).val();
      if (given_value.length < 1) {
        $(this).addClass('invalid');
        window.form_passed = 'f';
      }
    });
    if (window.form_passed === 'f') {
      var popup_message = $('.footer-theme #all_required_error').val();
    }
    if (window.form_passed === 't') {
      var given_mail = form_el.find('.js-newsletter_email').val();
      var given_mail_valid = ValidateEmail(given_mail);
      if (given_mail === '' || given_mail_valid === false) {
        form_el.find('.js-newsletter_email').addClass('invalid');
        var popup_message = $('.footer-theme #input_email_error').val();
        window.form_passed = 'f';
      }
    }

    if ( $('body').hasClass('lang-en') ) {
      var popup_this_title = 'Something went wrong';
    } else {
      var popup_this_title = 'Er ging iets mis';
    }

    if (window.form_passed === 'f') {
      CustomAlertConfirm.open({
        this_template: 'popup-message',
        this_title: popup_this_title,
        this_message: popup_message,
        this_okText: 'Sluiten',
        this_onok: () => {
          $('#contact_form button').prop("disabled", false);
          return false; }
      });
      return false;
    } else {
      ShowPageLoader();
      submitForm(form_el);
      $('#contact_form button').prop("disabled", false);
    }
  });
}



/* ////////////////////////////////// */
/* ///////////// Shopping cart alert */
/* ////////////////////////////////// */

function ShowCartAlert(product_title,product_variant,product_qty,product_image) {
  "use strict";
  cl('{ShowCartAlert}');
  window.shopping_cart_content_has_changed = 'true';
  var product_variant_arr = product_variant.split("::");
  var product_variant_size = product_variant_arr[0];
  var product_variant_items = product_variant_arr[1];
  var product_image = product_image.replace('_100x100.jpg','_500x500.jpg');

  $('.cart-alert-box .alert-prod-item__image img').attr('src',product_image);
  $('.cart-alert-box .alert-prod-item__image img').attr('alt',product_title);
  $('.cart-alert-box .alert-prod-item__title span.prod-title').html(product_qty + ' x ' +product_title);

  if ( product_variant_items !== undefined ) {
    $('.cart-alert-box .alert-prod-item__title span.prod-details').html(product_variant_size + ', ' + product_variant_items);
  } else {
    $('.cart-alert-box .alert-prod-item__title span.prod-details').html(product_variant_size );
  }

  if ( $('body').hasClass('lang-en') ) {
    if (product_qty == '1') { $('.cart-alert-box .alert-title h2 span').html('1 item ');
    } else { $('.cart-alert-box .alert-title h2 span').html(''+product_qty+' items '); }
  } else {
    if (product_qty == '1') { $('.cart-alert-box .alert-title h2 span').html('1 item ');
    } else { $('.cart-alert-box .alert-title h2 span').html(''+product_qty+' items '); }
  }

  $('.shopping-cart-drawer .cart-empty-alert').addClass('visually-hidden');
  $('.shopping-cart-drawer .sc-totals-total span').css({'opacity':'1'});

  $('body').addClass('cart-alert-visible');
  $('body').removeClass('cart-alert-invisible');
  $('.cart-alert-box').attr('aria-hidden','false');
}

function UpdateHeaderIconBubble(given_quantity) { 
  "use strict";
  /* cl('[theme-general] {UpdateHeaderIconBubble}'); */
  /* cl('[theme-general] {UpdateHeaderIconBubble} given_quantity: ' + given_quantity); */
  var new_number = $('.shopping-cart-drawer .sc-cart-items').attr('data-cart-items');
  /* cl('[theme-general] {UpdateHeaderIconBubble} new_number: '+new_number); */
  $('#related-shopping-cart a').attr('data-count',new_number);
  SetHeaderIconBubble();
}
function OpenShoppingCartDrawer() {
  "use strict";
  /* cl('{OpenShoppingCartDrawer}'); */
  disableBodyScroll();
  if ( $('body').hasClass('cart-alert-visible') === true) { $('.js-close-alert').trigger('click'); }
  $('#shopping-cart-drawer').removeClass('loaded');
  /* $('#shopping-cart-drawer').attr('aria-hidden','true'); */
  $('body').addClass('sc-drawer-visible');
  $('body').removeClass('sc-drawer-invisible');
  $('.drawer-underlay').removeClass('inactive');

  var product_quantity = $('header .cart-count-bubble span:nth-child(1)').text();
  if (product_quantity == 0) {
    UpdateShoppingCartDrawer('empty');
  } else { 
    UpdateShoppingCartDrawer('update');
  }
}

function getCartProdNumber () {
  if ( $('.main_total_prod_items_in_cart').length ) { 
    var set_number = $('.main_total_prod_items_in_cart').val();
  } else { 
    var set_number = $('.shopping-cart-drawer .sc-cart-items').attr('data-cart-items');
  }
  return set_number;
}

function SetHeaderIconBubble() { 
  "use strict";
  var set_number = getCartProdNumber();
  if (set_number < 1) { 
    set_number = 0;
    $('header .cart-count-bubble').addClass('visually-hidden');
  } else {
    $('header .cart-count-bubble').removeClass('visually-hidden');
  }
  $('header .cart-count-bubble span.show-cart-count').text(set_number);  
  $('#shop-heading-qty-total').text(set_number);  
  /* cl('{SetHeaderIconBubble} set_number: '+set_number); */
}
function InitCartAlert() { 
  "use strict";
  /* cl('[theme-general] {InitCartAlert}'); */
  $('.js-close-alert').on('click',function () {
    $('body').removeClass('cart-alert-visible'); 
    $('body').addClass('cart-alert-invisible');
    $('.cart-alert-box').attr('aria-hidden','true');
  });
}

function showDrawerPreLoader(from) { 
  $('.drawer-underlay').addClass('show-spinner');
  $('.drawer-underlay').removeClass('inactive');
}
function hideDrawerPreLoader () { 
  cl('hideDrawerPreLoader');
}

function InitAddToCartButtons() {
  /* cl('[theme-general] {InitAddToCartButtons} ') */
  /* switching classes prevents double triggers */
  /* sticky-add-to-cart */
  $('.theme--sticky-add-to-cart .js-set-variant.js-inactive').each(function () {
    $(this).removeClass('js-inactive');
    $(this).on('click', function(e) {
      cl('CLICKKK A');
      e.preventDefault(); e.stopPropagation();
      $('.theme--sticky-add-to-cart .js-set-variant').removeClass('variant-active');
      $(this).addClass('variant-active');
      var form_id = $(this).attr('data-form-id');
      var variant_id = Number($(this).attr('data-variant-id'));
      if (variant_id) { 
        $('#'+form_id).find('[name="id"]').val(variant_id);
      }
    });
  });
  /* card - product - variant sizes atc */
  $('.js-add-quick-variant.js-inactive').each(function () {
    $(this).removeClass('js-inactive');
    $(this).on('click', function(e) {
      cl('CLICKKK B');
      e.preventDefault(); e.stopPropagation();
      var form_id = $(this).attr('data-form-id');
      var variant_id = Number($(this).attr('data-variant-id'));
      if (variant_id) { 
        $('#'+form_id).find('[name="id"]').val(variant_id);
        $('#'+form_id).submit();
      }
    });
  });

  $('.js-trigger-add-product-inactive').each(function () {
    $(this).addClass('js-trigger-add-product');
    $(this).removeClass('js-trigger-add-product-inactive');
    $(this).on('click', function() {
      cl('Trigger js-trigger-add-product');
      showDrawerPreLoader('js-trigger-add-product');
      window.shopping_cart_content_has_changed = 'true';
      var product_id = $(this).attr('data-pid');
      var product_form_id = 'pid-'+product_id;
      var product_details_found = false;
      var this_prod_card = $('#product-'+product_id+'');
      var product_title = this_prod_card.find('.card-information__title span').text();
      var product_variant = 'size::items';
      var product_image = this_prod_card.find('.product-image img').attr('src');
      var product_details_found = true;

      var submitButton = this;
      var form = document.getElementById(''+product_form_id+'');
      submitButton.setAttribute('disabled', true);
      submitButton.classList.add('loading');
      var body = JSON.stringify({
        ...JSON.parse(serializeForm(form)),
      });
      fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), body })
        .then((response) => response.json())
        .then((parsedState) => {
          if (product_details_found == true) {
            UpdateShoppingCartDrawer('update');
            //ShowCartAlert(product_id,product_title,product_variant,'1',product_image);
          }
          UpdateHeaderIconBubble(1);
        })
        .catch((e) => { console.error(e); cl('ERROR'); })
        .finally(() => {
          submitButton.classList.remove('loading');
          submitButton.removeAttribute('disabled');
        });
    });
  });
}

/* ////////////////////////////////// */
/* ///////////// Shopify Common JS */
/* ////////////////////////////////// */

if ((typeof window.Shopify) == 'undefined') { window.Shopify = {}; }
Shopify.bind = function(fn, scope) { return function() { return fn.apply(scope, arguments); } };

Shopify.setSelectorByValue = function(selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];
    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
};

Shopify.addListener = function(target, eventName, callback) {
  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on'+eventName, callback);
};

Shopify.postLink = function(path, options) {
  options = options || {};
  var method = options['method'] || 'post';
  var params = options['parameters'] || {};

  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);

  for(var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

Shopify.CountryProvinceSelector = function(country_domid, province_domid, options) {
  this.countryEl = document.getElementById(country_domid);
  this.provinceEl = document.getElementById(province_domid);
  this.provinceContainer = document.getElementById(options['hideElement'] || province_domid);
  Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler,this));
  this.initCountry(); this.initProvince();
};

Shopify.CountryProvinceSelector.prototype = {
  initCountry: function() { var value = this.countryEl.getAttribute('data-default'); Shopify.setSelectorByValue(this.countryEl, value); this.countryHandler(); },
  initProvince: function() {
    var value = this.provinceEl.getAttribute('data-default');
    if (value && this.provinceEl.options.length > 0) { Shopify.setSelectorByValue(this.provinceEl, value); }
  },
  countryHandler: function(e) {
    var opt = this.countryEl.options[this.countryEl.selectedIndex], raw = opt.getAttribute('data-provinces'), provinces = JSON.parse(raw);
    this.clearOptions(this.provinceEl);
    if (provinces && provinces.length == 0) {
      this.provinceContainer.style.display = 'none';
    } else {
      for (var i = 0; i < provinces.length; i++) { var opt = document.createElement('option'); opt.value = provinces[i][0]; opt.innerHTML = provinces[i][1]; this.provinceEl.appendChild(opt); }
      this.provinceContainer.style.display = "";
    }
  },
  clearOptions: function(selector) {
    while (selector.firstChild) { selector.removeChild(selector.firstChild); }
  },
  setOptions: function(selector, values) {
    for (var i = 0, count = values.length; i < values.length; i++) { var opt = document.createElement('option'); opt.value = values[i]; opt.innerHTML = values[i]; selector.appendChild(opt); }
  }
};

/*! modernizr 3.3.1 !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),d.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,d,c,f="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)d=i("div"),d.id=s?s[o]:f+(o+1),p.appendChild(d);return a=i("style"),a.type="text/css",a.id="s"+f,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=f,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var d=[],c=[],f={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr; var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=f._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];f._prefixes=h,Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=i("a");return t.style.cssText=e+h.join(n+e),!!t.style.length});var m=f.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),m("#modernizr { height: 50vh; }",function(n){var t=parseInt(e.innerHeight/2,10),o=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).height,10); Modernizr.addTest("cssvhunit",o==t)}),m("#modernizr { width: 50vw; }",function(n){var t=parseInt(e.innerWidth/2,10),o=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10); Modernizr.addTest("svg", !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect); Modernizr.addTest("cssvwunit",o==t)}),s(),a(d),delete f.addTest,delete f.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);
/*! Waypoints - 4.0.1 !*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*! Lazysizes */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=a===!0)&&(g=33),b||(b=!0,d=e-(f.now()-c),0>d&&(d=0),a||9>d?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){ var b,c={lazyClass:"js-lazy-sizes",loadedClass:"lazy-sizes-loaded",loadingClass:"lazy-sizes-loading",preloadClass:"lazy-sizes-preload",errorClass:"lazy-sizes-error",autosizesClass:"lazy-sizes-autosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});
/* SVGInject */
!function(o,l){var r,a,s="createElement",g="getElementsByTagName",b="length",E="style",d="title",y="undefined",k="setAttribute",w="getAttribute",x=null,A="__svgInject",C="--inject-",S=new RegExp(C+"\\d+","g"),I="LOAD_FAIL",t="SVG_NOT_SUPPORTED",L="SVG_INVALID",v=["src","alt","onload","onerror"],j=l[s]("a"),G=typeof SVGRect!=y,f={useCache:!0,copyAttributes:!0,makeIdsUnique:!0},N={clipPath:["clip-path"],"color-profile":x,cursor:x,filter:x,linearGradient:["fill","stroke"],marker:["marker","marker-end","marker-mid","marker-start"],mask:x,pattern:["fill","stroke"],radialGradient:["fill","stroke"]},u=1,c=2,O=1;function T(e){return(r=r||new XMLSerializer).serializeToString(e)}function P(e,r){var t,n,i,o,a=C+O++,f=/url\("?#([a-zA-Z][\w:.-]*)"?\)/g,u=e.querySelectorAll("[id]"),c=r?[]:x,l={},s=[],d=!1;if(u[b]){for(i=0;i<u[b];i++)(n=u[i].localName)in N&&(l[n]=1);for(n in l)(N[n]||[n]).forEach(function(e){s.indexOf(e)<0&&s.push(e)});s[b]&&s.push(E);var v,p,m,h=e[g]("*"),y=e;for(i=-1;y!=x;){if(y.localName==E)(m=(p=y.textContent)&&p.replace(f,function(e,r){return c&&(c[r]=1),"url(#"+r+a+")"}))!==p&&(y.textContent=m);else if(y.hasAttributes()){for(o=0;o<s[b];o++)v=s[o],(m=(p=y[w](v))&&p.replace(f,function(e,r){return c&&(c[r]=1),"url(#"+r+a+")"}))!==p&&y[k](v,m);["xlink:href","href"].forEach(function(e){var r=y[w](e);/^\s*#/.test(r)&&(r=r.trim(),y[k](e,r+a),c&&(c[r.substring(1)]=1))})}y=h[++i]}for(i=0;i<u[b];i++)t=u[i],c&&!c[t.id]||(t.id+=a,d=!0)}return d}function V(e,r,t,n){if(r){r[k]("data-inject-url",t);var i=e.parentNode;if(i){n.copyAttributes&&function c(e,r){for(var t,n,i,o=e.attributes,a=0;a<o[b];a++)if(n=(t=o[a]).name,-1==v.indexOf(n))if(i=t.value,n==d){var f,u=r.firstElementChild;u&&u.localName.toLowerCase()==d?f=u:(f=l[s+"NS"]("http://www.w3.org/2000/svg",d),r.insertBefore(f,u)),f.textContent=i}else r[k](n,i)}(e,r);var o=n.beforeInject,a=o&&o(e,r)||r;i.replaceChild(a,e),e[A]=u,m(e);var f=n.afterInject;f&&f(e,a)}}else D(e,n)}function p(){for(var e={},r=arguments,t=0;t<r[b];t++){var n=r[t];for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e}function _(e,r){if(r){var t;try{t=function i(e){return(a=a||new DOMParser).parseFromString(e,"text/xml")}(e)}catch(o){return x}return t[g]("parsererror")[b]?x:t.documentElement}var n=l.createElement("div");return n.innerHTML=e,n.firstElementChild}function m(e){e.removeAttribute("onload")}function n(e){console.error("SVGInject: "+e)}function i(e,r,t){e[A]=c,t.onFail?t.onFail(e,r):n(r)}function D(e,r){m(e),i(e,L,r)}function F(e,r){m(e),i(e,t,r)}function M(e,r){i(e,I,r)}function q(e){e.onload=x,e.onerror=x}function R(e){n("no img element")}var e=function z(e,r){var t=p(f,r),h={};function n(a,f){f=p(t,f);var e=function(r){var e=function(){var e=f.onAllFinish;e&&e(),r&&r()};if(a&&typeof a[b]!=y){var t=0,n=a[b];if(0==n)e();else for(var i=function(){++t==n&&e()},o=0;o<n;o++)u(a[o],f,i)}else u(a,f,e)};return typeof Promise==y?e():new Promise(e)}function u(u,c,e){if(u){var r=u[A];if(r)Array.isArray(r)?r.push(e):e();else{if(q(u),!G)return F(u,c),void e();var t=c.beforeLoad,n=t&&t(u)||u[w]("src");if(!n)return""===n&&M(u,c),void e();var i=[];u[A]=i;var l=function(){e(),i.forEach(function(e){e()})},s=function f(e){return j.href=e,j.href}(n),d=c.useCache,v=c.makeIdsUnique,p=function(r){d&&(h[s].forEach(function(e){e(r)}),h[s]=r)};if(d){var o,a=function(e){if(e===I)M(u,c);else if(e===L)D(u,c);else{var r,t=e[0],n=e[1],i=e[2];v&&(t===x?(t=P(r=_(n,!1),!1),e[0]=t,e[2]=t&&T(r)):t&&(n=function o(e){return e.replace(S,C+O++)}(i))),r=r||_(n,!1),V(u,r,s,c)}l()};if(typeof(o=h[s])!=y)return void(o.isCallbackQueue?o.push(a):a(o));(o=[]).isCallbackQueue=!0,h[s]=o}!function m(e,r,t){if(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState){var e=n.status;200==e?r(n.responseXML,n.responseText.trim()):400<=e?t():0==e&&t()}},n.open("GET",e,!0),n.send()}}(s,function(e,r){var t=e instanceof Document?e.documentElement:_(r,!0),n=c.afterLoad;if(n){var i=n(t,r)||t;if(i){var o="string"==typeof i;r=o?i:T(t),t=o?_(i,!0):i}}if(t instanceof SVGElement){var a=x;if(v&&(a=P(t,!1)),d){var f=a&&T(t);p([a,r,f])}V(u,t,s,c)}else D(u,c),p(L);l()},function(){M(u,c),p(I),l()})}}else R()}return G&&function i(e){var r=l[g]("head")[0];if(r){var t=l[s](E);t.type="text/css",t.appendChild(l.createTextNode(e)),r.appendChild(t)}}('img[onload^="'+e+'("]{visibility:hidden;}'),n.setOptions=function(e){t=p(t,e)},n.create=z,n.err=function(e,r){e?e[A]!=c&&(q(e),G?(m(e),M(e,t)):F(e,t),r&&(m(e),e.src=r)):R()},o[e]=n}("SVGInject");"object"==typeof module&&"object"==typeof module.exports&&(module.exports=e)}(window,document);SVGInject(document.querySelectorAll("img.injectable-svg"));

/* jQuery Cycle2; version: 2.1.6 build: 20141007 * http://jquery.malsup.com/cycle2/ * Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL */
function getCyclePageWidth(){return null!=window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:null!=document.body?document.body.clientWidth:null}
function getCycleBreakpoint(e){var i=new Array("xxs","xs","sm","md","lg","xl","xxl"),t=getCyclePageWidth();if(t<550){var n=parseInt(0)+0;class_name_normal=i[n]}else if(t<768){n=parseInt(0)+1;class_name_normal=i[n]}else if(t<992){n=parseInt(0)+2;class_name_normal=i[n]}else if(t<1280){n=parseInt(0)+3;class_name_normal=i[n]}else if(t<1350){n=parseInt(0)+4;class_name_normal=i[n]}else if(t<1700){n=parseInt(0)+5;class_name_normal=i[n]}else if(t>=1700){n=parseInt(0)+6;class_name_normal=i[n]}return"class"==e?class_name_normal:"number"==e?n:void 0}!function(e){"use strict";function i(e){return(e||"").toLowerCase()}e.fn.cycle=function(t){var n;return 0!==this.length||e.isReady?this.each(function(){var n,s,o,r,l=e(this),c=e.fn.cycle.log;if(e(this).attr("id"))var a=e(this).attr("id");else{a=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);e(this).attr("id",a)}if($("#"+a).attr("data-cycle-carousel-visible-responsive")){getCycleBreakpoint("class");var d=getCycleBreakpoint("number"),u=$("#"+a).attr("data-cycle-carousel-visible-responsive").split(":")[d];$("#"+a).attr("data-cycle-carousel-visible",u)}if(!l.data("cycle.opts")){for(var p in(!1===l.data("cycle-log")||t&&!1===t.log||s&&!1===s.log)&&(c=e.noop),c("--c2 init--"),n=l.data())n.hasOwnProperty(p)&&/^cycle[A-Z]+/.test(p)&&(r=n[p],c((o=p.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,i))+":",r,"("+typeof r+")"),n[o]=r);(s=e.extend({},e.fn.cycle.defaults,n,t||{})).timeoutId=0,s.paused=s.paused||!1,s.container=l,s._maxZ=s.maxZ,s.API=e.extend({_container:l},e.fn.cycle.API),s.API.log=c,s.API.trigger=function(e,i){return s.container.trigger(e,i),s.API},l.data("cycle.opts",s),l.data("cycle.API",s.API),s.API.trigger("cycle-bootstrap",[s,s.API]),s.API.addInitialSlides(),s.API.preInitSlideshow(),s.slides.length&&s.API.initSlideshow()}}):(n={s:this.selector,c:this.context},e.fn.cycle.log("requeuing slideshow (dom not ready)"),e(function(){e(n.s,n.c).cycle(t)}),this)},e.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var i=this.opts(),t=i.slides;i.slideCount=0,i.slides=e(),t=t.jquery?t:i.container.find(t),i.random&&t.sort(function(){return Math.random()-.5}),i.API.add(t)},preInitSlideshow:function(){var i=this.opts();i.API.trigger("cycle-pre-initialize",[i]);var t=e.fn.cycle.transitions[i.fx];t&&e.isFunction(t.preInit)&&t.preInit(i),i._preInitialized=!0},postInitSlideshow:function(){var i=this.opts();i.API.trigger("cycle-post-initialize",[i]);var t=e.fn.cycle.transitions[i.fx];t&&e.isFunction(t.postInit)&&t.postInit(i)},initSlideshow:function(){var i,t=this.opts(),n=t.container;t.API.calcFirstSlide(),"static"==t.container.css("position")&&t.container.css("position","relative"),e(t.slides[t.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),t.API.stackSlides(t.slides[t.currSlide],t.slides[t.nextSlide],!t.reverse),t.pauseOnHover&&(!0!==t.pauseOnHover&&(n=e(t.pauseOnHover)),n.hover(function(){t.API.pause(!0)},function(){t.API.resume(!0)})),t.timeout&&(i=t.API.getSlideOpts(t.currSlide),t.API.queueTransition(i,i.timeout+t.delay)),t._initialized=!0,t.API.updateView(!0),t.API.trigger("cycle-initialized",[t]),t.API.postInitSlideshow()},pause:function(i){var t=this.opts(),n=t.API.getSlideOpts(),s=t.hoverPaused||t.paused;i?t.hoverPaused=!0:t.paused=!0,s||(t.container.addClass("cycle-paused"),t.API.trigger("cycle-paused",[t]).log("cycle-paused"),n.timeout&&(clearTimeout(t.timeoutId),t.timeoutId=0,t._remainingTimeout-=e.now()-t._lastQueue,(t._remainingTimeout<0||isNaN(t._remainingTimeout))&&(t._remainingTimeout=void 0)))},resume:function(e){var i=this.opts(),t=!i.hoverPaused&&!i.paused;e?i.hoverPaused=!1:i.paused=!1,t||(i.container.removeClass("cycle-paused"),0===i.slides.filter(":animated").length&&i.API.queueTransition(i.API.getSlideOpts(),i._remainingTimeout),i.API.trigger("cycle-resumed",[i,i._remainingTimeout]).log("cycle-resumed"))},add:function(i,t){var n,s=this.opts(),o=s.slideCount;"string"==e.type(i)&&(i=e.trim(i)),e(i).each(function(){var i,n=e(this);t?s.container.prepend(n):s.container.append(n),s.slideCount++,i=s.API.buildSlideOpts(n),s.slides=t?e(n).add(s.slides):s.slides.add(n),s.API.initSlide(i,n,--s._maxZ),n.data("cycle.opts",i),s.API.trigger("cycle-slide-added",[s,i,n])}),s.API.updateView(!0),s._preInitialized&&2>o&&s.slideCount>=1&&(s._initialized?s.timeout&&(n=s.slides.length,s.nextSlide=s.reverse?n-1:1,s.timeoutId||s.API.queueTransition(s)):s.API.initSlideshow())},calcFirstSlide:function(){var e,i=this.opts();((e=parseInt(i.startingSlide||0,10))>=i.slides.length||0>e)&&(e=0),i.currSlide=e,i.reverse?(i.nextSlide=e-1,i.nextSlide<0&&(i.nextSlide=i.slides.length-1)):(i.nextSlide=e+1,i.nextSlide==i.slides.length&&(i.nextSlide=0))},calcNextSlide:function(){var e,i=this.opts();i.reverse?(e=i.nextSlide-1<0,i.nextSlide=e?i.slideCount-1:i.nextSlide-1,i.currSlide=e?0:i.nextSlide+1):(e=i.nextSlide+1==i.slides.length,i.nextSlide=e?0:i.nextSlide+1,i.currSlide=e?i.slides.length-1:i.nextSlide-1)},calcTx:function(i,t){var n,s=i;return s._tempFx?n=e.fn.cycle.transitions[s._tempFx]:t&&s.manualFx&&(n=e.fn.cycle.transitions[s.manualFx]),n||(n=e.fn.cycle.transitions[s.fx]),s._tempFx=null,this.opts()._tempFx=null,n||(n=e.fn.cycle.transitions.fade,s.API.log('Transition "'+s.fx+'" not found.  Using fade.')),n},prepareTx:function(e,i){var t,n,s,o,r,l=this.opts();return l.slideCount<2?void(l.timeoutId=0):(!e||l.busy&&!l.manualTrump||(l.API.stopTransition(),l.busy=!1,clearTimeout(l.timeoutId),l.timeoutId=0),void(l.busy||(0!==l.timeoutId||e)&&(n=l.slides[l.currSlide],s=l.slides[l.nextSlide],o=l.API.getSlideOpts(l.nextSlide),r=l.API.calcTx(o,e),l._tx=r,e&&void 0!==o.manualSpeed&&(o.speed=o.manualSpeed),l.nextSlide!=l.currSlide&&(e||!l.paused&&!l.hoverPaused&&l.timeout)?(l.API.trigger("cycle-before",[o,n,s,i]),r.before&&r.before(o,n,s,i),t=function(){l.busy=!1,l.container.data("cycle.opts")&&(r.after&&r.after(o,n,s,i),l.API.trigger("cycle-after",[o,n,s,i]),l.API.queueTransition(o),l.API.updateView(!0))},l.busy=!0,r.transition?r.transition(o,n,s,i,t):l.API.doTransition(o,n,s,i,t),l.API.calcNextSlide(),l.API.updateView()):l.API.queueTransition(o))))},doTransition:function(i,t,n,s,o){var r=i,l=e(t),c=e(n),a=function(){c.animate(r.animIn||{opacity:1},r.speed,r.easeIn||r.easing,o)};c.css(r.cssBefore||{}),l.animate(r.animOut||{},r.speed,r.easeOut||r.easing,function(){l.css(r.cssAfter||{}),r.sync||a()}),r.sync&&a()},queueTransition:function(i,t){var n=this.opts(),s=void 0!==t?t:i.timeout;return 0===n.nextSlide&&0==--n.loop?(n.API.log("terminating; loop=0"),n.timeout=0,s?setTimeout(function(){n.API.trigger("cycle-finished",[n])},s):n.API.trigger("cycle-finished",[n]),void(n.nextSlide=n.currSlide)):void 0!==n.continueAuto&&(!1===n.continueAuto||e.isFunction(n.continueAuto)&&!1===n.continueAuto())?(n.API.log("terminating automatic transitions"),n.timeout=0,void(n.timeoutId&&clearTimeout(n.timeoutId))):void(s&&(n._lastQueue=e.now(),void 0===t&&(n._remainingTimeout=i.timeout),n.paused||n.hoverPaused||(n.timeoutId=setTimeout(function(){n.API.prepareTx(!1,!n.reverse)},s))))},stopTransition:function(){var e=this.opts();e.slides.filter(":animated").length&&(e.slides.stop(!1,!0),e.API.trigger("cycle-transition-stopped",[e])),e._tx&&e._tx.stopTransition&&e._tx.stopTransition(e)},advanceSlide:function(e){var i=this.opts();return clearTimeout(i.timeoutId),i.timeoutId=0,i.nextSlide=i.currSlide+e,i.nextSlide<0?i.nextSlide=i.slides.length-1:i.nextSlide>=i.slides.length&&(i.nextSlide=0),i.API.prepareTx(!0,e>=0),!1},buildSlideOpts:function(t){var n,s,o=this.opts(),r=t.data()||{};for(var l in r)r.hasOwnProperty(l)&&/^cycle[A-Z]+/.test(l)&&(n=r[l],s=l.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,i),o.API.log("["+(o.slideCount-1)+"]",s+":",n,"("+typeof n+")"),r[s]=n);(r=e.extend({},e.fn.cycle.defaults,o,r)).slideNum=o.slideCount;try{delete r.API,delete r.slideCount,delete r.currSlide,delete r.nextSlide,delete r.slides}catch(e){}return r},getSlideOpts:function(i){var t=this.opts();void 0===i&&(i=t.currSlide);var n=t.slides[i],s=e(n).data("cycle.opts");return e.extend({},t,s)},initSlide:function(i,t,n){var s=this.opts();t.css(i.slideCss||{}),n>0&&t.css("zIndex",n),isNaN(i.speed)&&(i.speed=e.fx.speeds[i.speed]||e.fx.speeds._default),i.sync||(i.speed=i.speed/2),t.addClass(s.slideClass)},updateView:function(e,i){var t=this.opts();if(t._initialized){var n=t.API.getSlideOpts(),s=t.slides[t.currSlide];!e&&!0!==i&&(t.API.trigger("cycle-update-view-before",[t,n,s]),t.updateView<0)||(t.slideActiveClass&&t.slides.removeClass(t.slideActiveClass).eq(t.currSlide).addClass(t.slideActiveClass),e&&t.hideNonActive&&t.slides.filter(":not(."+t.slideActiveClass+")").css("visibility","hidden"),0===t.updateView&&setTimeout(function(){t.API.trigger("cycle-update-view",[t,n,s,e])},n.speed/(t.sync?2:1)),0!==t.updateView&&t.API.trigger("cycle-update-view",[t,n,s,e]),e&&t.API.trigger("cycle-update-view-after",[t,n,s]))}},getComponent:function(i){var t=this.opts(),n=t[i];return"string"==typeof n?/^\s*[\>|\+|~]/.test(n)?t.container.find(n):e(n):n.jquery?n:e(n)},stackSlides:function(i,t,n){var s=this.opts();i||(i=s.slides[s.currSlide],t=s.slides[s.nextSlide],n=!s.reverse),e(i).css("zIndex",s.maxZ);var o,r=s.maxZ-2,l=s.slideCount;if(n){for(o=s.currSlide+1;l>o;o++)e(s.slides[o]).css("zIndex",r--);for(o=0;o<s.currSlide;o++)e(s.slides[o]).css("zIndex",r--)}else{for(o=s.currSlide-1;o>=0;o--)e(s.slides[o]).css("zIndex",r--);for(o=l-1;o>s.currSlide;o--)e(s.slides[o]).css("zIndex",r--)}e(t).css("zIndex",s.maxZ-1)},getSlideIndex:function(e){return this.opts().slides.index(e)}},e.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},e.fn.cycle.version=function(){return"Cycle2: 2.1.6"},e.fn.cycle.transitions={custom:{},none:{before:function(e,i,t,n){e.API.stackSlides(t,i,n),e.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(i,t,n,s){var o=i.API.getSlideOpts(i.nextSlide).slideCss||{};i.API.stackSlides(t,n,s),i.cssBefore=e.extend(o,{opacity:0,visibility:"visible",display:"block"}),i.animIn={opacity:1},i.animOut={opacity:0}}},fadeout:{before:function(i,t,n,s){var o=i.API.getSlideOpts(i.nextSlide).slideCss||{};i.API.stackSlides(t,n,s),i.cssBefore=e.extend(o,{opacity:1,visibility:"visible",display:"block"}),i.animOut={opacity:0}}},scrollHorz:{before:function(e,i,t,n){e.API.stackSlides(i,t,n);var s=e.container.css("overflow","hidden").width();e.cssBefore={left:n?s:-s,top:0,opacity:1,visibility:"visible",display:"block"},e.cssAfter={zIndex:e._maxZ-2,left:0},e.animIn={left:0},e.animOut={left:n?-s:s}}}},e.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},e(document).ready(function(){e(e.fn.cycle.defaults.autoSelector).cycle()})}(jQuery),
/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(e){"use strict";function i(i,t){var n,s,o,r=t.autoHeight;if("container"==r)s=e(t.slides[t.currSlide]).outerHeight(),t.container.height(s);else if(t._autoHeightRatio)t.container.height(t.container.width()/t._autoHeightRatio);else if("calc"===r||"number"==e.type(r)&&r>=0){if((o="calc"===r?function(i,t){var n=0,s=-1;return t.slides.each(function(i){var t=e(this).height();t>s&&(s=t,n=i)}),n}(0,t):r>=t.slides.length?0:r)==t._sentinelIndex)return;t._sentinelIndex=o,t._sentinel&&t._sentinel.remove(),(n=e(t.slides[o].cloneNode(!0))).removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),n.css({position:"static",visibility:"hidden",display:"block"}).prependTo(t.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),n.find("*").css("visibility","hidden"),t._sentinel=n}}function t(i,t,n,s){var o=e(s).outerHeight();t.container.animate({height:o},t.autoHeightSpeed,t.autoHeightEasing)}function n(s,o){o._autoHeightOnResize&&(e(window).off("resize orientationchange",o._autoHeightOnResize),o._autoHeightOnResize=null),o.container.off("cycle-slide-added cycle-slide-removed",i),o.container.off("cycle-destroyed",n),o.container.off("cycle-before",t),o._sentinel&&(o._sentinel.remove(),o._sentinel=null)}e.extend(e.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),e(document).on("cycle-initialized",function(s,o){function r(){i(0,o)}var l,c=o.autoHeight,a=e.type(c),d=null;("string"===a||"number"===a)&&(o.container.on("cycle-slide-added cycle-slide-removed",i),o.container.on("cycle-destroyed",n),"container"==c?o.container.on("cycle-before",t):"string"===a&&/\d+\:\d+/.test(c)&&(l=(l=c.match(/(\d+)\:(\d+)/))[1]/l[2],o._autoHeightRatio=l),"number"!==a&&(o._autoHeightOnResize=function(){clearTimeout(d),d=setTimeout(r,50)},e(window).on("resize orientationchange",o._autoHeightOnResize)),setTimeout(r,30))})}(jQuery),
/*! Caption plugin for Cycle2;  version: 20130306 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),e(document).on("cycle-update-view",function(i,t,n,s){"caption"===t.captionModule&&e.each(["caption","overlay"],function(){var e=n[this+"Template"],i=t.API.getComponent(this);i.length&&e?(i.html(t.API.tmpl(e,n,t,s)),i.show()):i.hide()})}),e(document).on("cycle-destroyed",function(i,t){e.each(["caption","overlay"],function(){var e=t[this+"Template"];t[this]&&e&&t.API.getComponent("caption").empty()})})}(jQuery),
/*! Command plugin for Cycle2;  version: 20140415 */
function(e){"use strict";var i=e.fn.cycle;e.fn.cycle=function(t){var n,s,o,r=e.makeArray(arguments);return"number"==e.type(t)?this.cycle("goto",t):"string"==e.type(t)?this.each(function(){var l;return n=t,void 0===(o=e(this).data("cycle.opts"))?void i.log('slideshow must be initialized before sending commands; "'+n+'" ignored'):(n="goto"==n?"jump":n,s=o.API[n],e.isFunction(s)?((l=e.makeArray(r)).shift(),s.apply(o.API,l)):void i.log("unknown command: ",n))}):i.apply(this,arguments)},e.extend(e.fn.cycle,i),e.extend(i.API,{next:function(){var e=this.opts();if(!e.busy||e.manualTrump){var i=e.reverse?-1:1;!1===e.allowWrap&&e.currSlide+i>=e.slideCount||(e.API.advanceSlide(i),e.API.trigger("cycle-next",[e]).log("cycle-next"))}},prev:function(){var e=this.opts();if(!e.busy||e.manualTrump){var i=e.reverse?1:-1;!1===e.allowWrap&&e.currSlide+i<0||(e.API.advanceSlide(i),e.API.trigger("cycle-prev",[e]).log("cycle-prev"))}},destroy:function(){this.stop();var i=this.opts(),t=e.isFunction(e._data)?e._data:e.noop;clearTimeout(i.timeoutId),i.timeoutId=0,i.API.stop(),i.API.trigger("cycle-destroyed",[i]).log("cycle-destroyed"),i.container.removeData(),t(i.container[0],"parsedAttrs",!1),i.retainStylesOnDestroy||(i.container.removeAttr("style"),i.slides.removeAttr("style"),i.slides.removeClass(i.slideActiveClass)),i.slides.each(function(){var n=e(this);n.removeData(),n.removeClass(i.slideClass),t(this,"parsedAttrs",!1)})},jump:function(e,i){var t,n=this.opts();if(!n.busy||n.manualTrump){var s=parseInt(e,10);if(isNaN(s)||0>s||s>=n.slides.length)return void n.API.log("goto: invalid slide index: "+s);if(s==n.currSlide)return void n.API.log("goto: skipping, already on slide",s);n.nextSlide=s,clearTimeout(n.timeoutId),n.timeoutId=0,n.API.log("goto: ",s," (zero-index)"),t=n.currSlide<n.nextSlide,n._tempFx=i,n.API.prepareTx(!0,t)}},stop:function(){var i=this.opts(),t=i.container;clearTimeout(i.timeoutId),i.timeoutId=0,i.API.stopTransition(),i.pauseOnHover&&(!0!==i.pauseOnHover&&(t=e(i.pauseOnHover)),t.off("mouseenter mouseleave")),i.API.trigger("cycle-stopped",[i]).log("cycle-stopped")},reinit:function(){var e=this.opts();e.API.destroy(),e.container.cycle()},remove:function(i){for(var t,n,s=this.opts(),o=[],r=1,l=0;l<s.slides.length;l++)t=s.slides[l],l==i?n=t:(o.push(t),e(t).data("cycle.opts").slideNum=r,r++);n&&(s.slides=e(o),s.slideCount--,e(n).remove(),i==s.currSlide?s.API.advanceSlide(1):i<s.currSlide?s.currSlide--:s.currSlide++,s.API.trigger("cycle-slide-removed",[s,i,n]).log("cycle-slide-removed"),s.API.updateView())}}),e(document).on("click.cycle","[data-cycle-cmd]",function(i){i.preventDefault();var t=e(this),n=t.data("cycle-cmd"),s=t.data("cycle-context")||".cycle-slideshow";e(s).cycle(n,t.data("cycle-arg"))})}(jQuery),
/*! Hash plugin for Cycle2;  version: 20130905 */
function(e){"use strict";function i(i,t){var n;return i._hashFence?void(i._hashFence=!1):(n=window.location.hash.substring(1),void i.slides.each(function(s){if(e(this).data("cycle-hash")==n){if(!0===t)i.startingSlide=s;else{var o=i.currSlide<s;i.nextSlide=s,i.API.prepareTx(!0,o)}return!1}}))}e(document).on("cycle-pre-initialize",function(t,n){i(n,!0),n._onHashChange=function(){i(n,!1)},e(window).on("hashchange",n._onHashChange)}),e(document).on("cycle-update-view",function(e,i,t){t.hash&&"#"+t.hash!=window.location.hash&&(i._hashFence=!0,window.location.hash=t.hash)}),e(document).on("cycle-destroyed",function(i,t){t._onHashChange&&e(window).off("hashchange",t._onHashChange)})}(jQuery),
/*! Loader plugin for Cycle2;  version: 20131121 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{loader:!1}),e(document).on("cycle-bootstrap",function(i,t){var n;t.loader&&(n=t.API.add,t.API.add=function(i,s){function o(i){var o;"wait"==t.loader?(l.push(i),0===a&&(l.sort(r),n.apply(t.API,[l,s]),t.container.removeClass("cycle-loading"))):(o=e(t.slides[t.currSlide]),n.apply(t.API,[i,s]),o.show(),t.container.removeClass("cycle-loading"))}function r(e,i){return e.data("index")-i.data("index")}var l=[];if("string"==e.type(i))i=e.trim(i);else if("array"===e.type(i))for(var c=0;c<i.length;c++)i[c]=e(i[c])[0];var a=(i=e(i)).length;a&&(i.css("visibility","hidden").appendTo("body").each(function(i){function r(){0==--c&&(--a,o(d))}var c=0,d=e(this),u=d.is("img")?d:d.find("img");return d.data("index",i),(u=u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])')).length?(c=u.length,void u.each(function(){this.complete?r():e(this).load(function(){r()}).on("error",function(){0==--c&&(t.API.log("slide skipped; img not loaded:",this.src),0==--a&&"wait"==t.loader&&n.apply(t.API,[l,s]))})})):(--a,void l.push(d))}),a&&t.container.addClass("cycle-loading"))})})}(jQuery),
/*! Pager plugin for Cycle2;  version: 20140415 */
function(e){"use strict";function i(i,t,n){var s;i.API.getComponent("pager").each(function(){var o=e(this);if(t.pagerTemplate){var r=i.API.tmpl(t.pagerTemplate,t,i,n[0]);s=e(r).appendTo(o)}else s=o.children().eq(i.slideCount-1);s.on(i.pagerEvent,function(e){i.pagerEventBubble||e.preventDefault(),i.API.page(o,e.currentTarget)})})}function t(e,i){var t=this.opts();if(!t.busy||t.manualTrump){var n=e.children().index(i),s=t.currSlide<n;t.currSlide!=n&&(t.nextSlide=n,t._tempFx=t.pagerFx,t.API.prepareTx(!0,s),t.API.trigger("cycle-pager-activated",[t,e,i]))}}e.extend(e.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),e(document).on("cycle-bootstrap",function(e,t,n){n.buildPagerLink=i}),e(document).on("cycle-slide-added",function(e,i,n,s){i.pager&&(i.API.buildPagerLink(i,n,s),i.API.page=t)}),e(document).on("cycle-slide-removed",function(i,t,n){t.pager&&t.API.getComponent("pager").each(function(){var i=e(this);e(i.children()[n]).remove()})}),e(document).on("cycle-update-view",function(i,t){t.pager&&t.API.getComponent("pager").each(function(){e(this).children().removeClass(t.pagerActiveClass).eq(t.currSlide).addClass(t.pagerActiveClass)})}),e(document).on("cycle-destroyed",function(e,i){var t=i.API.getComponent("pager");t&&(t.children().off(i.pagerEvent),i.pagerTemplate&&t.empty())})}(jQuery),
/*! Prevnext plugin for Cycle2;  version: 20140408 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),e(document).on("cycle-initialized",function(e,i){if(i.API.getComponent("next").on(i.nextEvent,function(e){e.preventDefault(),i.API.next()}),i.API.getComponent("prev").on(i.prevEvent,function(e){e.preventDefault(),i.API.prev()}),i.swipe){var t=i.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",n=i.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";i.container.on(t,function(){i._tempFx=i.swipeFx,i.API.next()}),i.container.on(n,function(){i._tempFx=i.swipeFx,i.API.prev()})}}),e(document).on("cycle-update-view",function(e,i){if(!i.allowWrap){var t=i.disabledClass,n=i.API.getComponent("next"),s=i.API.getComponent("prev"),o=i._prevBoundry||0,r=void 0!==i._nextBoundry?i._nextBoundry:i.slideCount-1;i.currSlide==r?n.addClass(t).prop("disabled",!0):n.removeClass(t).prop("disabled",!1),i.currSlide===o?s.addClass(t).prop("disabled",!0):s.removeClass(t).prop("disabled",!1)}}),e(document).on("cycle-destroyed",function(e,i){i.API.getComponent("prev").off(i.nextEvent),i.API.getComponent("next").off(i.prevEvent),i.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),
/*! Progressive loader plugin for Cycle2;  version: 20130315 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{progressive:!1}),e(document).on("cycle-pre-initialize",function(i,t){if(t.progressive){var n,s,o=t.API,r=o.next,l=o.prev,c=o.prepareTx,a=e.type(t.progressive);if("array"==a)n=t.progressive;else if(e.isFunction(t.progressive))n=t.progressive(t);else if("string"==a){if(s=e(t.progressive),!(n=e.trim(s.html())))return;if(/^(\[)/.test(n))try{n=e.parseJSON(n)}catch(e){return void o.log("error parsing progressive slides",e)}else(n=n.split(new RegExp(s.data("cycle-split")||"\n")))[n.length-1]||n.pop()}c&&(o.prepareTx=function(e,i){var s,o;return e||0===n.length?void c.apply(t.API,[e,i]):void(i&&t.currSlide==t.slideCount-1?(o=n[0],n=n.slice(1),t.container.one("cycle-slide-added",function(e,i){setTimeout(function(){i.API.advanceSlide(1)},50)}),t.API.add(o)):i||0!==t.currSlide?c.apply(t.API,[e,i]):(s=n.length-1,o=n[s],n=n.slice(0,s),t.container.one("cycle-slide-added",function(e,i){setTimeout(function(){i.currSlide=1,i.API.advanceSlide(-1)},50)}),t.API.add(o,!0)))}),r&&(o.next=function(){var e=this.opts();if(n.length&&e.currSlide==e.slideCount-1){var i=n[0];n=n.slice(1),e.container.one("cycle-slide-added",function(e,i){r.apply(i.API),i.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(i)}else r.apply(e.API)}),l&&(o.prev=function(){var e=this.opts();if(n.length&&0===e.currSlide){var i=n.length-1,t=n[i];n=n.slice(0,i),e.container.one("cycle-slide-added",function(e,i){i.currSlide=1,i.API.advanceSlide(-1),i.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(t,!0)}else l.apply(e.API)})}})}(jQuery),
/*! Tmpl plugin for Cycle2;  version: 20121227 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),e.extend(e.fn.cycle.API,{tmpl:function(i,t){var n=new RegExp(t.tmplRegex||e.fn.cycle.defaults.tmplRegex,"g"),s=e.makeArray(arguments);return s.shift(),i.replace(n,function(i,t){var n,o,r,l,c=t.split(".");for(n=0;n<s.length;n++)if(r=s[n]){if(c.length>1)for(l=r,o=0;o<c.length;o++)r=l,l=l[c[o]]||t;else l=r[t];if(e.isFunction(l))return l.apply(r,s);if(null!=l&&l!=t)return l}return t})}})}(jQuery),function(){var e=jQuery,i="jQuery.pause",t=1,n=e.fn.animate,s={};function o(){return(new Date).getTime()}e.fn.animate=function(r,l,c,a){var d=e.speed(l,c,a);return d.complete=d.old,this.each(function(){this[i]||(this[i]=t++);var l=e.extend({},d);n.apply(e(this),[r,e.extend({},l)]),s[this[i]]={run:!0,prop:r,opt:l,start:o(),done:0}})},e.fn.pause=function(){return this.each(function(){this[i]||(this[i]=t++);var n=s[this[i]];n&&n.run&&(n.done+=o()-n.start,n.done>n.opt.duration?delete s[this[i]]:(e(this).stop(),n.run=!1))})},e.fn.resume=function(){return this.each(function(){this[i]||(this[i]=t++);var r=s[this[i]];r&&!r.run&&(r.opt.duration-=r.done,r.done=0,r.run=!0,r.start=o(),n.apply(e(this),[r.prop,e.extend({},r.opt)]))})}}(),$(document).on("cycle-paused",function(e,i){"carousel"===i.fx&&i._carouselWrap.pause()}),$(document).on("cycle-resumed",function(e,i){"carousel"===i.fx&&i._carouselWrap.resume()}),function(e){"use strict";e(document).on("cycle-bootstrap",function(e,i,t){"carousel"===i.fx&&(t.getSlideIndex=function(e){var i=this.opts()._carouselWrap.children();return i.index(e)%i.length},t.next=function(){var e=i.reverse?-1:1;!1===i.allowWrap&&i.currSlide+e>i.slideCount-i.carouselVisible||(i.API.advanceSlide(e),i.API.trigger("cycle-next",[i]).log("cycle-next"))})}),e.fn.cycle.transitions.carousel={preInit:function(i){i.hideNonActive=!1,i.container.on("cycle-destroyed",e.proxy(this.onDestroy,i.API)),i.API.stopTransition=this.stopTransition;for(var t=0;t<i.startingSlide;t++)i.container.append(i.slides[0])},postInit:function(i){var t,n,s,o,r=i.carouselVertical;i.carouselVisible=$(".cycle-slideshow-ourculture").attr("data-cycle-carousel-visible");var l=i.carouselVisible||i.slides.length,c={display:r?"block":"inline-block",position:"static"};if(i.container.css({position:"relative",overflow:"hidden"}),i.slides.css(c),i._currSlide=i.currSlide,o=e('<div class="cycle-carousel-wrap"></div>').prependTo(i.container).css({margin:0,padding:0,top:0,left:0,position:"absolute"}).append(i.slides),i._carouselWrap=o,r||o.css("white-space","nowrap"),!1!==i.allowWrap){for(n=0;n<(void 0===i.carouselVisible?2:1);n++){for(t=0;t<i.slideCount;t++)o.append(i.slides[t].cloneNode(!0));for(t=i.slideCount;t--;)o.prepend(i.slides[t].cloneNode(!0))}o.find(".cycle-slide-active").removeClass("cycle-slide-active"),i.slides.eq(i.startingSlide).addClass("cycle-slide-active")}i.pager&&!1===i.allowWrap&&(s=i.slideCount-l,e(i.pager).children().filter(":gt("+s+")").hide()),i._nextBoundry=i.slideCount-i.carouselVisible,this.prepareDimensions(i)},prepareDimensions:function(i){var t,n,s,o,r=i.carouselVertical,l=i.carouselVisible||i.slides.length;if(i.carouselFluid&&i.carouselVisible?i._carouselResizeThrottle||this.fluidSlides(i):i.carouselVisible&&i.carouselSlideDimension?(t=l*i.carouselSlideDimension,i.container[r?"height":"width"](t)):i.carouselVisible&&(t=l*e(i.slides[0])[r?"outerHeight":"outerWidth"](!0),i.container[r?"height":"width"](t)),n=i.carouselOffset||0,!1!==i.allowWrap)if(i.carouselSlideDimension)n-=(i.slideCount+i.currSlide)*i.carouselSlideDimension;else for(s=i._carouselWrap.children(),o=0;o<i.slideCount+i.currSlide;o++)n-=e(s[o])[r?"outerHeight":"outerWidth"](!0);i._carouselWrap.css(r?"top":"left",n)},fluidSlides:function(i){function t(){clearTimeout(s),s=setTimeout(n,20)}function n(){i._carouselWrap.stop(!1,!0);var e=i.container.width()/i.carouselVisible;e=Math.ceil(e-r),i._carouselWrap.children().width(e),i._sentinel&&i._sentinel.width(e),l(i)}var s,o=i.slides.eq(0),r=o.outerWidth()-o.width(),l=this.prepareDimensions;e(window).on("resize",t),i._carouselResizeThrottle=t,n()},transition:function(i,t,n,s,o){var r,l={},c=i.nextSlide-i.currSlide,a=i.carouselVertical,d=i.speed;if(!1===i.allowWrap){s=c>0;var u=i._currSlide,p=i.slideCount-i.carouselVisible;c>0&&i.nextSlide>p&&u==p?c=0:c>0&&i.nextSlide>p?c=i.nextSlide-u-(i.nextSlide-p):0>c&&i.currSlide>p&&i.nextSlide>p?c=0:0>c&&i.currSlide>p?c+=i.currSlide-p:u=i.currSlide,r=this.getScroll(i,a,u,c),i.API.opts()._currSlide=i.nextSlide>p?p:i.nextSlide}else s&&0===i.nextSlide?(r=this.getDim(i,i.currSlide,a),o=this.genCallback(i,s,a,o)):s||i.nextSlide!=i.slideCount-1?r=this.getScroll(i,a,i.currSlide,c):(r=this.getDim(i,i.currSlide,a),o=this.genCallback(i,s,a,o));l[a?"top":"left"]=s?"-="+r:"+="+r,i.throttleSpeed&&(d=r/e(i.slides[0])[a?"height":"width"]()*i.speed),i._carouselWrap.animate(l,d,i.easing,o)},getDim:function(i,t,n){return e(i.slides[t])[n?"outerHeight":"outerWidth"](!0)},getScroll:function(e,i,t,n){var s,o=0;if(n>0)for(s=t;t+n>s;s++)o+=this.getDim(e,s,i);else for(s=t;s>t+n;s--)o+=this.getDim(e,s,i);return o},genCallback:function(i,t,n,s){return function(){var t=0-e(i.slides[i.nextSlide]).position()[n?"top":"left"]+(i.carouselOffset||0);i._carouselWrap.css(i.carouselVertical?"top":"left",t),s()}},stopTransition:function(){var e=this.opts();e.slides.stop(!1,!0),e._carouselWrap.stop(!1,!0)},onDestroy:function(){var i=this.opts();i._carouselResizeThrottle&&e(window).off("resize",i._carouselResizeThrottle),i.slides.prependTo(i.container),i._carouselWrap.remove()}}}(jQuery),function(e){"use strict";e.event.special.swipe=e.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var i=e(this);i.bind("touchstart",function(t){function n(i){if(r){var t=i.originalEvent.touches?i.originalEvent.touches[0]:i;s={time:(new Date).getTime(),coords:[t.pageX,t.pageY]},Math.abs(r.coords[0]-s.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&i.preventDefault()}}var s,o=t.originalEvent.touches?t.originalEvent.touches[0]:t,r={time:(new Date).getTime(),coords:[o.pageX,o.pageY],origin:e(t.target)};i.bind("touchmove",n).one("touchend",function(){i.unbind("touchmove",n),r&&s&&s.time-r.time<e.event.special.swipe.durationThreshold&&Math.abs(r.coords[0]-s.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(r.coords[1]-s.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&r.origin.trigger("swipe").trigger(r.coords[0]>s.coords[0]?"swipeleft":"swiperight"),r=s=void 0})})}},e.event.special.swipeleft=e.event.special.swipeleft||{setup:function(){e(this).bind("swipe",e.noop)}},e.event.special.swiperight=e.event.special.swiperight||e.event.special.swipeleft}(jQuery);
/*! Goto slide Cycle */
function Gts(a,b){$('.cycle-slideshow-'+a+'').cycle('goto',b);$('.cycle-slideshow-'+a+'-navi ul li a').removeClass('active');$('.cycle-slideshow-'+a+'-navi ul li a.js-navi-'+b).addClass('active');return false;}
/*! Swipe - Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a.event.special.swipe=a.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=a(this);b.bind("touchstart",function(c){function d(b){if(g){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;e={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}}var e,f=c.originalEvent.touches?c.originalEvent.touches[0]:c,g={time:(new Date).getTime(),coords:[f.pageX,f.pageY],origin:a(c.target)};b.bind("touchmove",d).one("touchend",function(){b.unbind("touchmove",d),g&&e&&e.time-g.time<a.event.special.swipe.durationThreshold&&Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(g.coords[1]-e.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&g.origin.trigger("swipe").trigger(g.coords[0]>e.coords[0]?"swipeleft":"swiperight"),g=e=void 0})})}},a.event.special.swipeleft=a.event.special.swipeleft||{setup:function(){a(this).bind("swipe",a.noop)}},a.event.special.swiperight=a.event.special.swiperight||a.event.special.swipeleft}(jQuery);
