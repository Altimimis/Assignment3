$(document).ready(function() {


	$.get('https://api.500px.com/v1/photos/search?tag=toronto&rpp=20&&image_size=3&consumer_key=UwYxXKmkEzRIhK4EykqRRlItxrdij6eo0Igwz3Wc', function(data) {
		console.log(data);
		var html = '';
		$.each(data.photos, function(key, photo) {
			var img = '';
			var div = '';
			var p = '';
			img += '<img src="';
			img += photo.image_url;
			img += '"/>';
			p += '<p>';
			p += photo.name || 'Untitled';
			p += '</p>';
			div += '<div>';
			div += img + p;
			div += '</div>';
			html += div;
		});
		$('.photostream').append(html);
	});
});


