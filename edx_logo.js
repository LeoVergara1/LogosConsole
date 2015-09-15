/**
* Created by Shrhawk
* https://github.com/Shrhawk
* Thanks for console.image
* https://github.com/adriancooney/console.image
*/
(function(console) {
  "use strict";
  var edx_logo_red = 'color: rgba(187,38,105, 0.9);font-size: 55px;font-weight: bolder;font-family: "Microsoft sans serif", "sans-serif", "Arial";line-height: 60%;';
  var edx_logo_grey = 'color: rgba(140,143,146, 0.7);font-size: 64px;font-weight: bold;margin-left: -13px;font-family: "FreeMono", "Courier New", "Courier";line-height: 60%;';
  var edx_logo_blue = 'color: rgba(0,165,236, 0.8);font-size: 69px;font-weight: bold;margin-left: -10px;font-family: "FreeMono", "Courier New", "Courier";line-height: 60%;' ;
  var edx_open_blue = 'color: rgba(0,165,236, 1);font-size: 41px;margin-right: -13px;font-family: "Microsoft sans serif", "sans-serif", "Arial";' ;
  var edx_powered_by_light_grey = 'color: rgb(214,215,216); font-size: 19px;font-weight: lighter;';
  var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  var ua = navigator.userAgent.toLowerCase();
  var defaults = {
    type: 'auto',
    edx_logo_text: 'Want to contribute to edX-platform ? Visit at https://github.com/edx/edx-platform',
    edx_logo_url: 'https://d37djvu3ytnwxt.cloudfront.net/static/images/edx-theme/edx-header-logo.517a627deaad.png',
    open_edx_logo_text: 'POWERED BY OPEN edX',
    open_edx_logo_url: 'https://files.edx.org/openedx-logos/edx-openedx-logo-tag.png',
    log_text: false,
    open_edx_only: false
  };

  var check_string = function(r) {
    return r.test(ua);
  };
  var os = function(){
    var isWindows = check_string(/windows|win32/);
    var isMac = check_string(/macintosh|mac os x/);
    var isAir = check_string(/adobeair/);
    var isLinux = check_string(/linux/);
    return isWindows ? 'Windows' :
    isMac ? 'Mac' :
    isAir ? 'Mac' :
    isLinux ? 'Linux' : 'Other';
  };
  var browser = function() {
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    var isFirefox = typeof InstallTrigger !== 'undefined';// Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isChrome = !!window.chrome && !isOpera;// Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
    return isOpera ? 'Opera' :
    isFirefox ? 'Firefox' :
    isSafari ? 'Safari' :
    isChrome ? 'Chrome' :
    isIE ? 'IE' : 'Browser';
  };
  function auto_type(case_type){
    var os_ver = os();
    var browser_ver = browser();
    if (browser_ver == 'Firefox' || browser_ver == 'IE' || browser_ver == 'Browser' && case_type == 'image'){
      console.log(browser_ver + ' does not support images at console.')
    }else if(browser_ver == 'IE' || browser_ver == 'Browser' && case_type == 'image'){
      console.log(browser_ver + ' does not support styling at console.')
    }
    if (case_type == 'auto'){
      if (browser_ver == 'IE' || browser_ver == 'Browser'){
        case_type = 'smalltext';
      }else if(browser_ver == 'Chrome' || browser_ver == 'Safari' || browser_ver == 'Opera'){
        case_type = 'image';
      }else {
        case_type = 'css';
      }
    }
    return case_type;
  }
  console.edx_logo = function(settings, text) {
    var settings = settings || defaults;
    var text = text || defaults.edx_logo_text;
    var log_text = settings.log_text == true ? true : defaults.log_text;
    switch (auto_type(settings.type)) {
      case 'css':
      console.log('%ce%cd%cX', edx_logo_red, edx_logo_grey, edx_logo_blue);
      break;
      case 'image':
      console.image(settings.url || defaults.edx_logo_url, settings.scale || 1, log_text, text);
      log_text = false;
      break;
      case 'smalltext':
      console.log('        _ __  __\n  _   _| |\\ \\/ /\n/ -_) _` | >  < \n\\___\\__,_|/_/\\_\\');
      break;
      case 'bigtext':
      console.log('          ___  __\n  ___  __| \\ \\/ /\n / _ \\/ _` |\\  / \n|  __/ (_| |/  \\ \n \\___|\\__,_/_/\\_\\');
      break;
      default:
      console.log('Invalid type argument Options are image, css, bigtext, smalltext');
      break;
    }
    log_text_console(log_text, text)
    return '';
  };

  console.open_edx_logo = function(settings, text) {
    var settings = settings || defaults;
    var text = text || defaults.open_edx_logo_text;
    var log_text = settings.log_text == true ? true : defaults.log_text;
    var open_edx_only = settings.open_edx_only == true ? true: defaults.open_edx_only;
    switch (auto_type(settings.type)) {
      case 'css':
      if(open_edx_only){
        console.log('%cOPEN %ce%cd%cX', edx_open_blue, edx_logo_red, edx_logo_grey, edx_logo_blue);
      }else{
        console.log('%cPOWERED BY \n%cOPEN %ce%cd%cX', edx_powered_by_light_grey, edx_open_blue, edx_logo_red, edx_logo_grey, edx_logo_blue);
      }
      break;
      case 'image':
      console.image(settings.url || defaults.open_edx_logo_url, settings.scale || 0.7, log_text, text);
      log_text = false;
      break;
      case 'smalltext':
      if(open_edx_only){
        console.log('  ___  ___ ___ _  _          ___  __\n / _ \\| _ \\ __| \\| |  ___ __| \\ \\/ /\n| (_) |  _/ _|| .` | / -_) _` |>  < \n \\___/|_| |___|_|\\_| \\___\\__,_/_/\\_\\');
      }else{
        console.log(' POWERED BY                        \n  ___  ___ ___ _  _          ___  __\n / _ \\| _ \\ __| \\| |  ___ __| \\ \\/ /\n| (_) |  _/ _|| .` | / -_) _` |>  < \n \\___/|_| |___|_|\\_| \\___\\__,_/_/\\_\\');
      }

      break;
      case 'bigtext':
      if(open_edx_only){
        console.log('  ___  ____  _____ _   _            ___  __\n / _ \\|  _ \\| ____| \\ | |   ___  __| \\ \\/ /\n| | | | |_) |  _| |  \\| |  / _ \\/ _` |\\  / \n| |_| |  __/| |___| |\\  | |  __/ (_| |/  \\ \n \\___/|_|   |_____|_| \\_|  \\___|\\__,_/_/\\_\\');
      }else{
        console.log(' POWERED BY                                \n  ___  ____  _____ _   _            ___  __\n / _ \\|  _ \\| ____| \\ | |   ___  __| \\ \\/ /\n| | | | |_) |  _| |  \\| |  / _ \\/ _` |\\  / \n| |_| |  __/| |___| |\\  | |  __/ (_| |/  \\ \n \\___/|_|   |_____|_| \\_|  \\___|\\__,_/_/\\_\\');
      }
      break;
      default:
      console.log('Invalid type argument Options are image, css, bigtext, smalltext');
      break;
    }
    log_text_console(log_text, text)
    return '';
  };
  /**
  * @param  {bool} log_text  Show output to console
  * @param  {string} text Text to show on console
  */
  function log_text_console(log_text, text) {
    if (log_text){
      console.log(text);
    }
  }
  /**
  * @param  {int} width  The height of the box
  * @param  {int} height The width of the box
  * @return {object}     {string, css
  */
  function getBox(width, height) {
    return {
      string: "+",
      style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: " + height + "px;"
    }
  }
  console.image = function(url, scale, log_text, text) {
    scale = scale || 1;
    var img = new Image();

    img.onload = function() {
      var dim = getBox(this.width * scale, this.height * scale);
      console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;background-repeat: no-repeat;");
      log_text_console(log_text, text);
    };

    img.src = url;
  };
})(console);
