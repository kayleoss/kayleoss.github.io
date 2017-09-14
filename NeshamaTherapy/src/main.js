const video = document.getElementById('vid');
window.onload= function (){
    $('.container-fluid').show();
    $('.container-fluid').hide();
    $('.container-fluid').fadeIn(1000);
    video.play();
    $('video').on('ended', function () {
        this.load();
        this.play();
      });

}