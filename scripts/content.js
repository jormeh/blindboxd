import injectCSS from '../utils/injectCSS';
import removeCSS from '../utils/removeCSS';

// Inject or remove CSS depending on state
chrome.storage.local.get(['ratings-hidden'], (result) => {
	if (result['ratings-hidden'] === 'true') {
		injectCSS('blindboxd-css', 'styles/hide-ratings.css');
	} else {
		removeCSS('blindboxd-css');
	}
});
