/**
 * ==UserScript==
 * @name likeByButton
 * @description like anynone in seconds
 * @version 1
 * @author Panos
 * @license MIT
 * @source
 * @updateURL
 * @downloadURL
 * @match *://tinder.com/*
 * @grant none
 * ==/UserScript==
 */
function likeByButton() {
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
	}, 3000);
}

likeByButton();
