export default function removeCSS(targetId) {
	const existingLink = document.getElementById(targetId);
	if (existingLink) {
		existingLink.remove();
	}
}
