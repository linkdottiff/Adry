/*###################### SCROLL ANIMATION ##############*/
$(function () {
    //Animation when scrolling
    new WOW().init();
});

/*###################### MAGNIFIC GLASS GALLERY ##############*/

$(function () {

    $("#rgalleryjs").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});



/*###################### SMOOTH SCROLLING ##############*/

$(function () {

    $("a.smooth-scrolling").click(function (event) {

        event.preventDefault();

        //get section ID (home, recent gallery, etc)....

        var section = $(this).attr("href");

            $('html, body').animate({
                scrollTop: $(section).offset().top - 39
            }, 1300, "easeInOutExpo");

    });
});


/*###################### FADE-IN / FADE-OUT BACK-TO-TOP BUTTON ##############*/

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide back-to-top button
            $("#back-to-top").fadeOut();
        } else {
            //show back-to-top button
            $("#back-to-top").fadeIn();
        }
    });

});


/*###################### NO AUTO SLIDE CAROUSEL ##############*/

$('.carousel').carousel({
    interval: false
}); 

/*###################### AUDIO ##############*/

var songs = ["songs/SNA.mp3"];
var poster = ["Poster1.jpg"];

var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0; // it point to the current song

window.onload = playSong; // it will call the function playSong when window is load

function playSong() {

    song.src = songs[currentSong]; //set the source of 0th song 


}

function playOrPauseSong() {

    if (song.paused) {
        song.play();
        $("#play img").attr("src", "Pause.png");
    } else {
        song.pause();
        $("#play img").attr("src", "Play.png");
    }
}

song.addEventListener('timeupdate', function () {

    var position = song.currentTime / song.duration;

    fillBar.style.width = position * 100 + '%';
});