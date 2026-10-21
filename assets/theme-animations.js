
function makeRandID(){for(var r="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=0;t < 8;t++)r+=a.charAt(Math.floor(Math.random()*a.length));return r}
function isObject(obj) {return obj === Object(obj);}
window.make_id_start=0;function makeID(){window.make_id_start++;var r=window.make_id_start;return r;}
function whichTransitionEvent(){"use strict";var n,i=document.createElement("fakeelement"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(n in t)if(void 0!==i.style[n])return t[n]}
function whichAnimationEvent(){"use strict";var n,i=document.createElement("fakeelement"),t={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(n in t)if(void 0!==i.style[n])return t[n]}

function doSingleAnimation__In(element,wherefrom) {
  "use strict";
  var element_str = JSON.stringify(element);
  //cl('{doSingleAnimation__In} > wherefrom:'+wherefrom);
  //cl('{doSingleAnimation__In} > element:'+element_str+' > wherefrom:'+wherefrom);
  var $this = element;
  if ( $this.hasClass('animated-animation-out') === false ) {
      $this.addClass('animated-animation-in');

      if ( !$this.attr('data-animation-in') ) $this.attr('data-animation-in','fadeInLeft');
      if ( !$this.attr('data-dur-in') ) $this.attr('data-dur-in','300');
      if ( !$this.attr('data-delay-in') ) $this.attr('data-delay-in','0');

      var transEndEv = whichTransitionEvent();
      var animEndEv = whichAnimationEvent();
      var $animationType = $this.attr('data-animation-in'),
          $animDur = parseInt($this.attr('data-dur-in')),
          $animDelay = parseInt($this.attr('data-delay-in'));

      if (window.direction == 'init') { $animDelay = 1000; }

      $this.removeClass('animation-trigger-init');
      var data_style = $this.attr('data-style');
      if ( (data_style) ) { 
        $this.attr({'style':'' + data_style + '; animation-duration:'+$animDur+'ms; animation-delay:'+$animDelay+'ms; animation-fill-mode:both;' });
      } else { 
        $this.css({"animation-duration": $animDur + "ms", "animation-delay": $animDelay + "ms", "animation-fill-mode": "both"});
      }
      $this.addClass($animationType);
      $this.one(animEndEv, function (e) {
        if ( $this.hasClass('animated-animation-out') === false ) {
            if (wherefrom == 'cycle-banner' || wherefrom == 'in-and-out') {
              $this.removeClass('animation-trigger');
              $this.addClass('animation-trigger-out');
            }
            $this.removeClass($animationType);
            $this.attr('style','');
            var data_style = $this.attr('data-style');
            if ( (data_style) ) {
              $this.attr({'style':'' + data_style + ''});
            }
            $this.removeClass('animated-animation-in');
        }
      });
  }
}
function doSingleAnimation__Out(element,wherefrom) {
  "use strict";

  //var element_str = JSON.stringify(element);
  //cl('{doSingleAnimation__Out} > wherefrom:'+wherefrom);
  //cl('{doSingleAnimation__Out} > element:'+element_str+' > wherefrom:'+wherefrom);

  var $this = element;
  if ( $this.hasClass('animated-animation-in') === false ) {

      if ( !$this.attr('data-animation-out') ) $this.attr('data-animation-out','fadeOutDown');
      if ( !$this.attr('data-dur-out') ) $this.attr('data-dur-out','300');
      if ( !$this.attr('data-delay-out') ) $this.attr('data-delay-out','0');

      var transEndEv = whichTransitionEvent();
      var animEndEv = whichAnimationEvent();
      if (wherefrom == 'submenu') {
        var $animationType = $this.attr('data-animation-out'),
            $animDur = parseInt($this.attr('data-dur-in') / 2),
            $animDelay = parseInt($this.attr('data-delay-in') / 3);
      } else if (wherefrom == 'cycle-banner') {
        var $animationType = $this.attr('data-animation-out'),
            $animDur = parseInt(0),
            $animDelay = parseInt(0);
      } else {
        var $animationType = $this.attr('data-animation-out'),
            $animDur = 300,
            $animDelay = 50;
      }

      if (window.direction == 'init') { $animDelay = 1000; }
      $this.addClass('animated-animation-out');
      var data_style = $this.attr('data-style');
      if ( (data_style) ) {
        $this.attr({'style':'' + data_style + '; animation-duration:'+$animDur+'ms; animation-delay:'+$animDelay+'ms; animation-fill-mode:both;' });
      } else {
        //cl('{doSingleAnimation__Out} OUT - SET CSS');
        $this.css({"animation-duration": $animDur + "ms", "animation-delay": $animDelay + "ms", "animation-fill-mode": "both"});
      }
      $this.removeClass('animated');
      $this.addClass($animationType);
      $this.one(animEndEv, function (e) {
        if ( $this.hasClass('animated-animation-in') === false ) {
            $this.removeClass('animated-animation-out');
            $this.removeClass($animationType);
            $this.attr('style','');
            var data_style = $this.attr('data-style');
            if ( (data_style) ) { 
              $this.attr({'style':'' + data_style + ''}); 
            }
            if (wherefrom == 'in-and-out' || wherefrom == 'submenu' || wherefrom == 'cycle-banner') {
              //cl('CC wherefrom'+wherefrom);
              //cl('{doSingleAnimation__Out} > wherefrom:'+wherefrom)+' END';
              //cl('{doSingleAnimation__Out} > element:'+element_str+' > wherefrom:'+wherefrom);
              $this.removeClass('animation-triggered');
              $this.addClass('animation-trigger');
            }
        }
      });
  }

}

window.css_animations = 'false';

function PrepareCssAnimations() {
  "use strict";
  window.windoww = getPageWidth();
  var use_animations = 'false';
  if (window.windoww >= 550 ) { use_animations = 'true'; } else { use_animations = 'false'; }
	if ( $('body').hasClass('browser-version-msie8') ) { use_animations = 'false'; }
	if ( $('body').hasClass('browser-version-msie9') ) { use_animations = 'false'; }
	if ( $('body').hasClass('browser-version-msie10') ) { use_animations = 'false'; }
	if ( $('body').hasClass('browser-version-msie11') ) { use_animations = 'false'; }
	if ( $('html').hasClass('reduced-media-true') ) { use_animations = 'false'; }
  if (Shopify.designMode) { use_animations = 'false'; }
	/* cl('use_animations = '+use_animations); */
  if (use_animations == 'false') {
        window.css_animations = 'false';
        /* remove css animtion triggers from DOM */
        $('.js-generate-animate-childs').each(function() {
            if ( $(this).find('.js-ani-me').length ) {
                $(this).find('.js-ani-me').each(function() {
                    var unwrapme = $(this);
                    if ( unwrapme.parent().is(".js-generate-animate-childs") ) {
                        unwrapme.unwrap();
                    } else if ( unwrapme.parent().parent().is(".js-generate-animate-childs") ) {
                        unwrapme.parent().unwrap();
                    } else if ( unwrapme.parent().parent().parent().is(".js-generate-animate-childs") ) {
                        unwrapme.parent().parent().unwrap();
                    } else if ( unwrapme.parent().parent().parent().parent().is(".js-generate-animate-childs") ) {
                        unwrapme.parent().parent().parent().unwrap();
                    } else if ( unwrapme.parent().parent().parent().parent().parent().is(".js-generate-animate-childs") ) {
                        unwrapme.parent().parent().parent().parent().unwrap();
                    } else if ( unwrapme.parent().parent().parent().parent().parent().parent().is(".js-generate-animate-childs") ) {
                        unwrapme.parent().parent().parent().parent().parent().unwrap();
                    } else {
                        $(this).removeClass('js-generate-animate-childs');
                        $(this).removeClass('invisible');
                    }
                });
            } else {
                $(this).contents().unwrap();
                //console.log('unwrap _self, no child animation elements found');
            }
        });
        $('body').find('.animation-trigger').removeClass('animation-trigger');
        $('body').find('.animation-trigger-once').removeClass('animation-trigger-once');
        $('body').find('.animation-trigger-init').removeClass('animation-trigger-init');
        $('body').find('.animation-trigger-in-and-out').removeClass('animation-trigger-in-and-out');
        $('body').find('.animation-trigger-waypoint').removeClass('animation-trigger-waypoint');
        $('body').find('.animation-trigger-waypoint-multi').removeClass('animation-trigger-waypoint-multi');
        $('body').find('.animation-trigger-waypoint-single').removeClass('animation-trigger-waypoint-single');
        $('body').find('.js-reveal-on-scroll').removeClass('js-reveal-on-scroll'); 

  } else if (use_animations == 'true') {
    window.css_animations = 'true';
    /* keep DOM html clean - auto add child delay */
    $('.js-generate-animate-childs').each(function() {
          var this_parent_animation_in = $(this).attr('data-set-animation-in');
          var this_parent_animation_out = $(this).attr('data-set-animation-out');
          var this_delay = $(this).attr('data-set-delay');
          var this_delay_step = $(this).attr('data-set-delay-step');
          var this_duration = $(this).attr('data-set-dur');
          var this_counter = 1;
          $(this).find('.js-ani-me').each(function() {
            if ($(this).attr('data-animation-in')) {
              var this_animation_in = $(this).attr('data-animation-in');
            } else {
              var this_animation_in = this_parent_animation_in;
            }
            if ($(this).attr('data-animation-out')) {
              var this_animation_out = $(this).attr('data-animation-out');
            } else {
              var this_animation_out = this_parent_animation_out;
            }
            //cl('this_animation_in '+this_animation_in);
            //cl('this_animation_out '+this_animation_out);
            var this_el_delay = parseFloat(this_delay) + (parseFloat(this_delay_step) * parseFloat(this_counter));
            var this_html = '<div class="animation-trigger-init animation-trigger-waypoint-child" ';
                this_html += ' data-animation-in="animated '+this_animation_in+'" data-animation-out="animated '+this_animation_out+'" data-delay-in="'+this_el_delay+'" ';
                this_html += ' data-dur-in="'+this_duration+'">';
                this_html += '</div>';
            $(this).wrap(this_html);
            this_counter++;
          });

          if (this_counter > 1) {
              /* remove '.js-generate-animate-childs' as parent wrapper */
              var unwrapme = $(this).find('.animation-trigger-waypoint-child');
              if ( unwrapme.parent().is(".js-generate-animate-childs") ) {
                unwrapme.unwrap();
              } else if ( unwrapme.parent().parent().is(".js-generate-animate-childs") ) {
                unwrapme.parent().unwrap();
              } else if ( unwrapme.parent().parent().parent().is(".js-generate-animate-childs") ) {
                unwrapme.parent().parent().unwrap();
              } else if ( unwrapme.parent().parent().parent().parent().is(".js-generate-animate-childs") ) {
                unwrapme.parent().parent().parent().unwrap();
              } else {
                $(this).removeClass('js-generate-animate-childs');
                $(this).removeClass('invisible');
              }
          } else {
            $(this).contents().unwrap();
            //console.log('unwrap _self, no child animation elements found');
          }
    });
	}
}

function Init__CssAnimations(given_direction) {
  "use strict";
  window.direction = given_direction;
  var $elemparent = $('body');

  $elemparent.find('.animation-trigger-once').each(function() {
    var $this = $(this);
    if ($this.hasClass('animation-triggered-once') !== true) {
      if ($this.hasClass('animation-trigger-waypoint') !== true) {
        doSingleAnimation__In($this,'once');
        $this.removeClass('animation-trigger-once');
        $this.addClass('animation-triggered-once');
      }
    }
  });
  $elemparent.find('.animation-wrap-overflow').each(function() {
  	$(this).wrap("<div style=\"overflow:hidden;\">");
  });
  $elemparent.find('.animation-trigger-waypoint').each(function() {
		if ($(this).hasClass('animation-trigger-class-toggle-once') === true) {
			if ($(this).hasClass('animation-triggered-once') !== true) {
				var this_class = 'wp-js-class-toggle-once-'+makeID();
				$(this).addClass(this_class);
				Animation__SetWaypoint(this_class,'class-toggle-once');
			}
		}
		if ($(this).hasClass('animation-trigger-in-and-out') === true) {
			if ($(this).hasClass('animation-triggered-once') !== true) {
				var this_class = 'wp-js-inandout-'+makeID();
				$(this).addClass(this_class);
				Animation__SetWaypoint(this_class,'in-and-out');
			}
		}
  });
	$elemparent.find('.animation-trigger-waypoint-single').each(function() {
	 	if ($(this).hasClass('animation-triggered-once') !== true) {
      var this_class = 'wp-js-single-'+makeID();
      $(this).addClass(this_class);
      Animation__SetWaypoint(this_class,'single');
    }
  });
  $elemparent.find('.animation-trigger-waypoint-multi').each(function() {
    if ($(this).hasClass('animation-triggered-once') !== true) {
      var this_class = 'wp-js-multi-'+makeID(); $(this).addClass(this_class);
      if ( $(this).hasClass('animation-trigger-waypoint-multi-in-and-out') === true ) {
        Animation__SetWaypoint(this_class,'multi-in-and-out');
      } else { 
        Animation__SetWaypoint(this_class,'multiple');
      }
    }
  });
  

  /*
  if ( $('.sticky-buy-now__wrap').length ) { 
    var full_len = $('main').outerHeight();
    $('.__sticky-buy-now__wrap').css({'height': full_len+'px'});
    var visible_top = $('.section-package-strategy').offset().top;
    $('.sticky-buy-now').attr({'data-visible-top': visible_top+'px'});
    var visible_bottom = $('.section-package-outro').offset().top - window.windowh + 200;
    $('.sticky-buy-now').attr({'data-visible-bottom': visible_bottom+'px'});
    
    $(window).scroll(function() {
      window.scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (window.scrollY > visible_top && window.scrollY < visible_bottom) {
        if ( $('.sticky-buy-now__wrap').hasClass('sticky-buy-now__visible') === false ) { $('.sticky-buy-now__wrap').addClass('sticky-buy-now__visible'); }
      } else {
        if ( $('.sticky-buy-now__wrap').hasClass('sticky-buy-now__visible') === true ) { $('.sticky-buy-now__wrap').removeClass('sticky-buy-now__visible'); }
      }
    });
  }
  */

  $elemparent.find('.---js-reveal-on-scroll').each(function() {
    if ($(this).hasClass('animation-triggered-once') !== true) {
      var _continue = 'true';
      window.scrollY = window.pageYOffset || document.documentElement.scrollTop;
      var this_offset_top = $(this).offset().top;
      if ( ( window.scrollY + window.windowh ) > this_offset_top) {
          /* onload already "scrolled" past element */
          var _continue = 'false';
          $(this).removeClass('js-reveal-on-scroll');
          $(this).addClass('onload-scrolled-past');
      }
      if ( _continue == 'true' ) {
          var this_class = 'wp-js-class-toggle-reveal-'+makeID();
          var data_offset = $(this).attr('data-offset');
          var data_style = $(this).attr('style');
          if ( (data_style) ) { $(this).attr('data-style', data_style); }
          if (window.scrollY < 100 && $(this).offset().top < window.windowh) {
            //on page load trigger all visible elements earlier
            if ( !data_offset ) $(this).attr('data-offset','120%');
          } else {
            if ( !data_offset ) $(this).attr('data-offset','85%');
          }
          if ( !$(this).attr('data-animation-in') ) $(this).attr('data-animation-in','fadeInUp');
          if ( !$(this).attr('data-dur-in') ) $(this).attr('data-dur-in','300');
          if ( !$(this).attr('data-delay-in') ) $(this).attr('data-delay-in','0');
          if ( !$(this).attr('data-animation-out') ) $(this).attr('data-animation-out','fadeOutDown');
          if ( !$(this).attr('data-dur-out') ) $(this).attr('data-dur-out','300');
          if ( !$(this).attr('data-delay-out') ) $(this).attr('data-delay-out','0');
          $(this).addClass('animated animation-trigger-init animation-trigger-in-and-out '+this_class);
          Animation__SetWaypoint(this_class,'in-and-out');
      }
    }
  });
}
function Animation__SetWaypoint(way_point_class,type) {
  "use strict";
  var $this_waypoint = $('.'+way_point_class);
  if ($this_waypoint.length){
    var $waypointOffset = '90%';
    if ($this_waypoint.attr('data-offset')) {
      var $waypointOffset = $this_waypoint.attr('data-offset');
    }
    window.windoww = getPageWidth();
    var waypoint_var = new Waypoint({
      element: $this_waypoint,
      handler: function(direction) {
          if (type == 'single') {
            if ($this_waypoint.hasClass('animation-triggered-once') !== true) {
              TriggerWayPoint__Animation($this_waypoint,waypoint_var,'yes');
            }
            $this_waypoint.removeClass('animation-trigger-waypoint-multi');
            if(isObject(waypoint_var)) { cl('des'+type); waypoint_var.destroy(); }
          } else if (type == 'multiple') {
            $this_waypoint.find('.animation-trigger-waypoint-child').each(function(e) {
              if ($(this).hasClass('__animation-triggered-once') !== true) {
                var child_waypoint = $(this);
                TriggerWayPoint__Animation(child_waypoint);
              }
            });
            $this_waypoint.removeClass('animation-trigger-waypoint-multi');
            if(isObject(waypoint_var)) { cl('des'+type); waypoint_var.destroy(); }
          } else if (type == 'multi-in-and-out') {
            $this_waypoint.find('.animation-trigger-waypoint-child').each(function(e) {
              if ($(this).hasClass('__animation-triggered-once') !== true) {
                var child_waypoint = $(this);
                if (direction == 'down') {
                  doSingleAnimation__In(child_waypoint,'in-and-out');
                } else { 
                  doSingleAnimation__Out(child_waypoint,'in-and-out');
                }
              }
            });
          } else if (type == 'in-and-out') {
            var child_waypoint = $this_waypoint;
            if ( child_waypoint.hasClass('__animation-triggered-once') !== true) {
              if (direction == 'down') {
                doSingleAnimation__In(child_waypoint,'in-and-out');
              } else { 
                doSingleAnimation__Out(child_waypoint,'in-and-out');
              }
            }
          }
      }, offset: $waypointOffset
    });
  }
}
function TriggerWayPoint__Animation($this_waypoint, waypoint_var, destroywaypoint) {
  "use strict";
  if (destroywaypoint == 'yes') {
  	$this_waypoint.removeClass('animation-trigger-waypoint');
    if(isObject(waypoint_var)) { waypoint_var.destroy(); }
  }
  TriggerAnimation($this_waypoint);
}
function TriggerAnimation($this_waypoint) {
  "use strict";
  if ($this_waypoint.hasClass('animation-triggered-once') !== true) {
    doSingleAnimation__In($this_waypoint,'');
    //$this_waypoint.removeClass('animation-trigger-once');
    //$this_waypoint.addClass('animation-triggered-once');
  }
}