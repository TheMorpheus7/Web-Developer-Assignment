$(document).ready(function(){
    // Contact Us Modal
    var modal = $('#contactFormModal');
    var btn = $('#contactUsBtn');
    var span = $('.close');

    btn.click(function() {
        modal.show();
    });

    span.click(function() {
        modal.hide();
    });

    $(window).click(function(event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });

    // Project Section Image Change
    $('.project-content').click(function() {
        var newImage = $(this).data('image');
        $('#projectImage').attr('src', newImage);
        $('.project-content').removeClass('active');
        $(this).addClass('active');
    });
});
 // Initialize carousel
$('#servicesCarousel').carousel({
    interval: 3000 // Change slide every 3 seconds
});