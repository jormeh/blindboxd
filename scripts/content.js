// Inject or remove CSS depending on state
chrome.storage.local.get(['ratings-hidden'], (result) => {
	if (result['ratings-hidden'] === 'true') {
		injectCSS('blindboxd-css', 'styles/hide-ratings.css');
	} else {
		removeCSS('blindboxd-css');
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
