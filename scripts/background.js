function handleMessage(message) {
	switch (message.action) {
		case 'HIDE_RATINGS':
			console.log('Hide Ratings');
			break;
		case `SHOW_RATINGS`:
			console.log('Show Ratings');
			break;
	}
}

chrome.runtime.onMessage.addListener(handleMessage);
