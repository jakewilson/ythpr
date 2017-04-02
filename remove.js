let content = document.getElementById('content');
(function() {
	content.style.display = 'none';
	document.getElementById('search-btn').addEventListener('click', function() {
		content.style.display = ''; // what it was initially
	});
})();
