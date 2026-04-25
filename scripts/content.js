// Inject or remove CSS depending on state
chrome.storage.local.get(['ratings-hidden'], (result) => {
	if (result['ratings-hidden'] === 'true') {
		injectCSS('blindboxd-ratings-css', 'styles/hide-ratings.css');
	} else {
		removeCSS('blindboxd-ratings-css');
	}
});

// Inject or remove CSS for reviews depending on state
chrome.storage.local.get(['reviews-hidden'], (result) => {
	if (result['reviews-hidden'] === 'true') {
		injectCSS('blindboxd-reviews-css', 'styles/hide-reviews.css');
	} else {
		removeCSS('blindboxd-reviews-css');
	}
});

function injectCSS(targetId, styleUrl) {
	if (document.getElementById(targetId)) return;

	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = chrome.runtime.getURL(styleUrl);
	link.id = targetId;
	document.head.appendChild(link);
}

function removeCSS(targetId) {
	const existingLink = document.getElementById(targetId);
	if (existingLink) {
		existingLink.remove();
	}
}
