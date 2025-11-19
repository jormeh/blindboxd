const toggle = document.getElementById('toggle-switch');
toggle.addEventListener('change', notifyBackground);

async function notifyBackground() {
	try {
		const action = toggle.checked ? 'HIDE_RATINGS' : 'SHOW_RATINGS';
		await chrome.runtime.sendMessage({ action });
	} catch (error) {
		console.log(`Oops! Something went wrong. ${error.message}`);
	}
}
