function hideElement(element) {
	element.style.display = 'none';
}

function showElement(element) {
	content.style.display = '';
}

(function() {
	let content = document.getElementById('content');

	hideElement(content);

	// re-display the content when the user searches
	document.getElementById('search-btn').addEventListener('click', function(event) {
		showElement(content);
	});

	let ENTER_KEY = 13;

	document.getElementById('masthead-search-term').addEventListener('keydown', function(event) {
		if (event.keyCode === ENTER_KEY) {
			showElement(content);
		}
	});

})();
