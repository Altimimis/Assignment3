$(document).ready(function() {
var isLoading;
var page = 0;


/* var listView;
$('#list-view').change(function() {
         listView = parseInt(this.value);
}).change();
alert(listView);
var rpp = listView;//$('#list-view option:selected').val(),
  console.log(listView); 
*/

var params = {
        'tag': 'toronto',
        'consumer_key': 'UwYxXKmkEzRIhK4EykqRRlItxrdij6eo0Igwz3Wc',
        'rpp': 20, //$('#list-view option:selected').val(),
        'image_size': [1,2,3,4],
        'exclude': 'nude',
};
function getPage() {
        if (isLoading) return;
        isLoading = true;
        ++params['page'];
        $.get('https://api.500px.com/v1/photos/search?tag=toronto&' + $.param(params), function(data) {

                markup = '';
                $.each(data.photos, function(key, photo) {
                  
                        console.log(data);
                        var url = photo.id;

                        url = "http://500px.com/photo/" + url;
                        
                        markup += '<a data-toggle="modal" data-target="#myModal" data-large-image="' + photo.image_url[2] + '">';
                        markup += '<img src ="' + photo.image_url[2] + '"/>'
                        markup += '</img>'
                        markup += '</a>'
                        markup += '<p>' + photo.name + '</p>';
                        markup += '</div>';
                });
                if (params['page'] == 1) {
                        $('.photostream').html(markup);

                } else {
                        $('.photostream').append(markup);
                }
                isLoading = false;
                });

                          

}

$(function() {

        $('.photostream').on('click', 'a', imageClickHandler);

        function imageClickHandler () {
                var largeImageUrl = $(this).data('large-image');


                $('.modal-body').html('<img src =' + largeImageUrl + '>');

        }



});

$(window).on('hashchange', function() {
                                params['rpp'] = 20;
                                getPage(page);
                                var rpp = location.hash.replace('#', '');
                                console.log(rpp);
                                //params['rpp'] = rpp;
                                //getPage(page);
                                $('.hash-trigger a').removeClass('active');
                                $('.hash-trigger a[href="#' + rpp + '"]').addClass('active');

                                });


//$(window).on('scroll', function() {
  //      var threshold = 100;
    //    if (window.innerHeight + document.body.scrollTop > document.body.clientHeight - threshold) {
      //          getPage();
        //}
//});

$(document).ready(function() {
                                getPage(page);
                                $(window).trigger('hashchange');
                        
});
});
