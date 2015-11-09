/* 
MarfFrameWork 1.2
This is open-source, 
Offical github: https://github.com/Marfjeh/MarfFrameWork
LICENSE: GNU GENERAL PUBLIC LICENSE Version 2
 */
var mjversie = "1.2_2";
var mjdate = "9-11-2015";

// useragent Dectector
var useragent = null;
if(navigator.userAgent.indexOf("Chrome") != -1 ) 
{
    useragent = 'Chrome/Edge';
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
else if((navigator.userAgent.indexOf("Edge") != -1 ) || (!!document.documentMode == true )) //Edge, but edge uses Chrome?
{
    useragent = 'Microsoft Edge';
}
else 
{
    useragent =  '?';
}
// end

function log( tekst ) { console.log(tekst); }

function GoUrl(URL){ window.location.href = URL; }

function About() { return("This page uses MarfFrameWork Version: " + mjversie + " Versie date(DD-MM-YYYY): " + mjdate); }

function goBack() { window.history.back(); }

function GoHome() { // Ga naar default home pagina
    if (typeof window.home == 'function') { 
        window.home();
    } else if (document.all) { 
        window.location.href = "about:home";
    } else {
        window.location.replace('about:blank');
    }
}

function fullscreen(element) { // fullscreen(document.documentElement); Notice: this only works with user input such a button.
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

function PushPermission()
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

/* Disabled for "securty risks"...
function myIP()  { //Get a Ip with Xjax.
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

// SmoothScrolling, this works with a element that has a ID like: <p id="one">. To scroll to that element you can use a hyperlink such as <a href="#one">Scroll to one</a> This needs jqeury!
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

function footer() { //This adds a footer that is always visible. use ID=footer. like: <div id=footer></div>. This needs jqeury.

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

function playmusic(file, soort) // playmusic("music.mp3", "mp3"); this is not done yet.
{
	undefined;
}