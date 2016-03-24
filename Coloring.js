// ==UserScript==
// @name         LESA Colors
// @namespace    https://www.liferay.com/web/*/support
// @version      0.1
// @require      http://code.jquery.com/jquery-1.12.2.min.js
// @require      https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
// @description  Simple Script to change LESA Colors based on discussion tab selection
// @author       Vilmos Papp
// @grant        none
// @match        https://www.liferay.com/web/*/support*
// ==/UserScript==
/* jshint -W097 */
'use strict';

/*************************************************************/
/* Color definitions                                         */
/*************************************************************/
var publicColor="rgb(255, 240, 200)"
var publicColorDark="rgb(255, 230, 160)"
var privateColor="rgb(210, 255, 200)"
var privateColorDark="rgb(170, 255, 150)"

/*************************************************************/
/* Coloring code                                             */
/*************************************************************/

waitForKeyElements ("#_2_WAR_osbportlet_editor0", actionFunction);

function actionFunction (jNode) {
     var span = $("#_2_WAR_osbportlet_public")
     if (span.hasClass("selected")) {
        recolor(publicColor, publicColorDark)
     }  
}

$('#_2_WAR_osbportlet_public').click(function() {
    recolor(publicColor, publicColorDark)
});

$('#_2_WAR_osbportlet_workers').click(function() {
    recolor(privateColor, privateColorDark)
});

$('#_2_WAR_osbportlet_liferay').click(function() {
    recolor(privateColor, privateColorDark)
});

$('#_2_WAR_osbportlet_all-comments').click(function() {
    resetColors()
});

$('#_2_WAR_osbportlet_history').click(function() {
    resetColors()
});

$('#_2_WAR_osbportlet_solutions').click(function() {
    resetColors()
});

function recolor(color, darkColor) {
    $("#actualContent").css("background-color", color)
    $("#_2_WAR_osbportlet_ticketFilter").css("background-color", color)
    $(".sidebar").css("background-color", darkColor)
}

function resetColors() {
    $("#actualContent").css("background-color", "white")
    $("#_2_WAR_osbportlet_ticketFilter").css("background-color", "white")
    $(".sidebar").css("background-color", "white")
}