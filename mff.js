/* MADE BY MARVIN FERWERDA 


*/


var mjversie = "1.2_1";
var mjdate = "9-11-2015";

// useragent Dectector
var useragent = null;
if(navigator.userAgent.indexOf("Chrome") != -1 ) 
{
    useragent = 'Chrome';
}
else if(navigator.userAgent.indexOf("Opera") != -1 )
{
    useragent = 'Opera';
}
else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
{
    useragent = 'Firefox';
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
{
    useragent = 'Internet Explorer';
}
else if((navigator.userAgent.indexOf("Edge") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
{
    useragent = 'Microsoft Edge';
}
else 
{
    useragent =  '?';
}
// end

function log( tekst ) { console.log(tekst); }

function GaNaarSite(URL){ window.location.href = URL; }

function overmij() { return("Deze pagina maakt gebruik van MarfFrameWork Reboot 2015! Versie: " + mjversie + " Versie Datum: " + mjdate); }

function gahomepagina() { // Ga naar default home pagina
    if (typeof window.home == 'function') { 
        window.home();
    } else if (document.all) { 
        window.location.href = "about:home";
    } else {
        window.location.replace('about:blank');
    }
}

function vollescherm(element) { // vollescherm(document.documentElement); LETOP: alleen werkend met knopjes en links vanwege veiligheids redenen. 
  log("Volledigsherm geopend.");
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// **** PUSH API START ****

function pushapitoestemming()
{
	if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
    log ("Push permissions granted");
  } else {
    window.webkitNotifications.requestPermission();
  }
}

function pushsupport()
{
	if (window.webkitNotifications) {
 		log("Notifications are supported!");
	}
	else {
  		log("Notifications are not supported for this Browser/OS version yet.");
	}
}

// **** PUSH API END ****

function menubalk() // jquery verplicht!
{
      $(document).ready(function() {
        var stickyNavTop = $('.nav').offset().top;
        var stickyNav = function(){
          var scrollTop = $(window).scrollTop();
          if (scrollTop > stickyNavTop) { 
              $('.nav').addClass('sticky');
          } else {
              $('.nav').removeClass('sticky'); 
          }
      };
      stickyNav();
      $(window).scroll(function() {
        stickyNav();
      });
    });
}

/* Disabled for "securty risks"...
function myIP()  { //Geef het ip van de client door middel van Xjax
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }
    return false;
}
*/
function goBack() {
    window.history.back();
}

// smooth scrollen naar een id gebruik bijvoorbeeld <h1 id="one"> om te scrollen gebruik dan een link bijvoorbeeld <a href="#one">One</a> naar id one te scrollen
// Deze code is geladen en hoef niet opgeroepen worden.
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

function footer() { //Hierbij word jquary gebruikt om de footer beneden te houden, gebruik Id=footer om het gebruiken.

    $(window).bind("load", function () {

        var footerHeight = 0,
            footerTop = 0,
            $footer = $("#footer");

        positionFooter();

        function positionFooter() {

            footerHeight = $footer.height();
            footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";

            if (($(document.body).height() + footerHeight) < $(window).height()) {
                $footer.css({
                    position: "absolute"
                })
            } else {
                $footer.css({
                    position: "static"
                })
            }

        }

        $(window)
            .scroll(positionFooter)
            .resize(positionFooter)

    });
}

function playmusic(file, soort) // playmusic("music.mp3", "mp3");
{
	undefined;
}