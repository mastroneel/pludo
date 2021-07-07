



$( ".showPlayer1" ).click(function() {
  $(".player2, .player3").css('display', 'none');
  $(".player1").fadeIn();

    if($(window).width() < 767) {
        document.getElementById("player1").scrollIntoView({behavior: 'smooth'});
    }
});

$( ".showPlayer2" ).click(function() {
  $(".player1, .player3").css('display', 'none');
  $(".player2").fadeIn();
  if($(window).width() < 767) {
      document.getElementById("player2").scrollIntoView({behavior: 'smooth'});
  }
});

$( ".showPlayer3" ).click(function() {
  $(".player1, .player2").css('display', 'none');
  $(".player3").fadeIn();
  if($(window).width() < 767) {
      document.getElementById("player3").scrollIntoView({behavior: 'smooth'});
  }
});







$( "#li1" ).click(function() {
  $( ".play-button" ).css("display", "none");
  $( ".pause-button" ).fadeIn();



  $( "#progressbar1" ).css("width", "100px");


  document.getElementById("audio2").pause();
   document.getElementById("audio3").pause();
   document.getElementById("audio2").currentTime = 0;
    document.getElementById("audio3").currentTime = 0;
   document.getElementById("audio1").play();
});

$( "#play" ).click(function() {
  $( ".play-button" ).css("display", "none");
  $( ".pause-button" ).fadeIn();

  $( "#progressbar1" ).css("width", "100px");


  document.getElementById("audio2").pause();
   document.getElementById("audio3").pause();
   document.getElementById("audio1").play();
});



$( "#li2" ).click(function() {
  $( ".play-button" ).css("display", "none");
  $( ".pause-button" ).fadeIn();

  document.getElementById("audio1").pause();
   document.getElementById("audio3").pause();
   document.getElementById("audio1").currentTime = 0;
    document.getElementById("audio3").currentTime = 0;
   document.getElementById("audio2").play();
});

$( "#play2" ).click(function() {
  $( ".play-button" ).css("display", "none");
  $( ".pause-button" ).fadeIn();


  document.getElementById("audio1").pause();
   document.getElementById("audio3").pause();
   document.getElementById("audio2").play();
});


$( "#li3" ).click(function() {
  $( ".play-button" ).css("display", "none");
  $( ".pause-button" ).fadeIn();

  document.getElementById("audio1").pause();
   document.getElementById("audio2").pause();
   document.getElementById("audio1").currentTime = 0;
    document.getElementById("audio2").currentTime = 0;
   document.getElementById("audio3").play();
});

$( "#play3" ).click(function() {
  $( ".play-button" ).css("display", "none");
  $( ".pause-button" ).fadeIn();



  document.getElementById("audio1").pause();
   document.getElementById("audio2").pause();
   document.getElementById("audio3").play();
});


$( "#stop" ).click(function() {
  document.getElementById("audio1").pause();
});

$( "#stop2" ).click(function() {
  document.getElementById("audio2").pause();
});

$( "#stop3" ).click(function() {
  document.getElementById("audio3").pause();
});

$( ".play-button" ).click(function() {
  $( ".play-button" ).css("display", "none");
  $( ".pause-button" ).fadeIn();
});

$( ".pause-button" ).click(function() {
  $( ".pause-button" ).css("display", "none");
  $( ".play-button" ).fadeIn();
});




audio1.addEventListener('timeupdate', function() {
  window.requestAnimationFrame(function() {
    document.getElementById('progress1').value = audio1.currentTime / audio1.duration;
  });
});

audio2.addEventListener('timeupdate', function() {
  window.requestAnimationFrame(function() {
    document.getElementById('progress2').value = audio2.currentTime / audio2.duration;
  });
});

audio3.addEventListener('timeupdate', function() {
  window.requestAnimationFrame(function() {
    document.getElementById('progress3').value = audio3.currentTime / audio3.duration;
  });
});
