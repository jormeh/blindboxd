function handleMessage(message) {
	if (
		message.action === 'HIDE_RATINGS' ||
		message.action === 'SHOW_RATINGS' ||
		message.action === 'HIDE_REVIEWS' ||
		message.action === 'SHOW_REVIEWS'
	) {
		chrome.tabs.query({}, (tabs) => {
			for (const tab of tabs) {
				if (!tab.url || !tab.id) continue;

				if (matchesHost(tab.url)) {
					chrome.scripting.executeScript({
						target: { tabId: tab.id },
						files: ['scripts/content.js'],
					});
				}
			}
		});
	}
}

function matchesHost(url) {
	try {
		const { hostname } = new URL(url);
		return hostname === 'letterboxd.com';
	} catch {
		return false;
	}
}

chrome.runtime.onMessage.addListener(handleMessage);
