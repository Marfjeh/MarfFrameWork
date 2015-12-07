/* 
MarfFrameWork 1.3.3
This is a open-source project,
Offical github: https://github.com/Marfjeh/MarfFrameWork
LICENSE: GNU GENERAL PUBLIC LICENSE Version 2
 */
var mjversie = "1.3.3";
var mjdate = "7-12-2015";
var mjactive = 1;

// useragent Dectector
function useragent() {
    var useragent = null;
    if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        useragent = "Chrome/Edge";
    }
    else if(navigator.userAgent.indexOf("Opera") != -1 )
    {
        useragent = "Opera";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 )
    {
        useragent = "Firefox";
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        useragent = "Internet Explorer";
    }
    else if(navigator.userAgent.indexOf("AppleWebKit") != -1 )
    {
        useragent = "Safari";
    }
    else
    {
        useragent =  "?";
    }
    return (useragent);
}
// end

function log( tekst ) {
    console.log("["+ datenow("-") + " " + timenow(":") +" | MarfFrameWork Log] "+tekst);
}

function goUrl(URL){ window.location.href = URL; }

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

// **** PUSH API START **** WIP

function PushPermission()
{
	if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
    log ("Push permissions granted");
        return true;
  } else {
    window.webkitNotifications.requestPermission();
  }
}

function pushsupport()
{
	if (window.webkitNotifications) {
 		log("Notifications are supported!");
        return true;
	}
	else {
  		log("Notifications are not supported for this Browser/OS version yet.");
        return false;
	}
}

// **** PUSH API END ****

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

        var footerHeight = 100,
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
function playmusic(file, type) // playmusic("music.mp3", "mp3"); This needs jquery!
{
    $("body").append("<audio autoplay id='audioplayer'> <source src='" + file + "' type='audio/"+ type + "'></audio>");
    var aud = document.getElementById("audioplayer");
    aud.onended = function()
    {
        delelement("audioplayer");
    };
    return true;
}

function datenow(format) // Returns Day Month year. Syntax: datenow("-"); returns as for example: 1-1-2015 defaults: "-"
{
    if (format == null) //fallback to default when there is no value.
    {
        format = "-";
    }
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return (day + format + month + format + year);
}

function timenow(format) // Returns Hour minute and seconds. Syntax: timenow(":"); returns as for example: 12:00:00 defaults: ":"
{
    if (format == null) //fallback to default when there is no value.
    {
        format = ":";
    }
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var mins = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    return (hour + format + mins + format + sec);
}

function addtoelement(div, text) // Add to ID Element. and keeping the existing text.
{
    var divvar = document.getElementById(div);
    divvar.innerHTML = divvar.innerHTML + text;

}
function addtoelementln(div, text) // Add to ID Element. and keeping the existing text.
{
    var divvar = document.getElementById(div);
    divvar.innerHTML = divvar.innerHTML + text + "<br>";

}

function settoelement(div, text) // set text to a element and removing the old one.
{
    var divvar = document.getElementById(div);
    divvar.innerHTML = text;
}

function clearelement(div) // clear the element.
{
    var divvar = document.getElementById(div);
    divvar.innerHTML = "";
}

function delelement(div) // delete the element completely
{
    var divvar = document.getElementById(div);
    divvar.outerHTML = "";
    delete divvar;
}

function makeiframe(id, url, height, width)
{
    addtoelementln(id,"<iframe src='" + url + "' scrolling='no' frameborder='0' marginheight='0px' marginwidth='0px' height='" + height +"' width='" + width + "'></iframe>");
}
