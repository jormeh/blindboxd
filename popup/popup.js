// Target toggle input
const ratingsToggle = document.getElementById('ratings-toggle');

// Initialize toggle state based on stored value
chrome.storage.local.get(['ratings-hidden'], (result) => {
	ratingsToggle.checked = result['ratings-hidden'] === 'true';
});

// Notify background script when toggle changes
async function notifyRatingsBackground() {
	try {
		const action = ratingsToggle.checked ? 'HIDE_RATINGS' : 'SHOW_RATINGS';

		// Update state in local storage
		chrome.storage.local.set({
			'ratings-hidden': String(ratingsToggle.checked),
		});

		// Send message to background script
		await chrome.runtime.sendMessage({ action });
	} catch (error) {
		console.log(`Oops! Something went wrong. ${error.message}`);
	}
}

ratingsToggle.addEventListener('change', notifyRatingsBackground);

// Target reviews toggle input
const reviewsToggle = document.getElementById('reviews-toggle');

// Initialize reviews toggle state based on stored value
chrome.storage.local.get(['reviews-hidden'], (result) => {
	reviewsToggle.checked = result['reviews-hidden'] === 'true';
});

// Notify background script when reviews toggle changes
async function notifyReviewsBackground() {
	try {
		const action = reviewsToggle.checked ? 'HIDE_REVIEWS' : 'SHOW_REVIEWS';

		// Update state in local storage
		chrome.storage.local.set({
			'reviews-hidden': String(reviewsToggle.checked),
		});

		// Send message to background script
		await chrome.runtime.sendMessage({ action });
	} catch (error) {
		console.log(`Oops! Something went wrong. ${error.message}`);
	}
}

reviewsToggle.addEventListener('change', notifyReviewsBackground);
