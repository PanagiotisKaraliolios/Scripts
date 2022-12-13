// ==UserScript==
// @name     Tinder Auto-Like By Panos
// @version  1
// @grant    none
// @match    *://tinder.com/*
// @description like anynone in second
// ==/UserScript==
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
