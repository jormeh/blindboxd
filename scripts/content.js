// Inject or remove CSS depending on state
chrome.storage.local.get(['ratings-hidden'], (result) => {
	if (result['ratings-hidden'] === 'true') {
		if (!document.getElementById('blindboxd-css')) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = chrome.runtime.getURL('styles/hide-ratings.css');
			link.id = 'blindboxd-css';
			document.head.appendChild(link);
		}
	} else {
		const existingLink = document.getElementById('blindboxd-css');
		if (existingLink) {
			existingLink.remove();
		}
	}
});
