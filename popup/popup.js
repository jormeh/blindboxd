// Target toggle input
const toggle = document.getElementById('toggle-switch');

// Initialize toggle state based on stored value
chrome.storage.local.get(['ratings-hidden'], (result) => {
	toggle.checked = result['ratings-hidden'] === 'true';
});

// Notify background script when toggle changes
async function notifyBackground() {
	try {
		const action = toggle.checked ? 'HIDE_RATINGS' : 'SHOW_RATINGS';

		// Update state in local storage
		chrome.storage.local.set({ 'ratings-hidden': String(toggle.checked) });

		// Send message to background script
		await chrome.runtime.sendMessage({ action });
	} catch (error) {
		console.log(`Oops! Something went wrong. ${error.message}`);
	}
}

toggle.addEventListener('change', notifyBackground);
