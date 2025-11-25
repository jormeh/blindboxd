export default function injectCSS(targetId, styleUrl) {
	if (document.getElementById(targetId)) return;

	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = chrome.runtime.getURL(styleUrl);
	link.id = targetId;
	document.head.appendChild(link);
}
