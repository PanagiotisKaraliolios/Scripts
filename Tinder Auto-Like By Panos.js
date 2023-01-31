// ==UserScript==
// @name         Tinder Auto-like By Panos
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Simple script to auto like users every 4 seconds
// @author       You
// @match        https://tinder.com/app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tinder.com
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	// Your code here...
	setInterval(function () {
		var buttons = document.getElementsByTagName("button");
		var button;

		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].innerText === "LIKE") {
				//console.log("found");
				button = buttons[i];
				break;
			}
		}

		if ((button = !null)) {
			document.getElementsByTagName("button")[i].click();
		} else {
			console.log("There is no like button");
		}
	}, 4000);
})().catch(console.error);
