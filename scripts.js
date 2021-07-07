// $.fn.gotoAnchor = function(anchor) {
//     location.href = this.selector;
// }




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






// var timer1;
// var percent1 = 0;
// var audio1 = document.getElementById("audio1");
// audio1.addEventListener("playing", function(_event) {
//   var duration = _event.target.duration;
//   advance1(duration, audio);
// });
// audio1.addEventListener("pause", function(_event) {
//   clearTimeout(timer1);
// });
// var advance1 = function(duration, element) {
//   var progress1 = document.getElementById("progress1");
//   increment = 10/duration
//   percent = Math.min(increment * element.currentTime * 10, 100);
//   progress1.style.width = percent+'%'
//   startTimer1(duration, element);
// }
// var startTimer1 = function(duration, element){
//   if(percent < 100) {
//     timer1 = setTimeout(function (){advance1(duration, element)}, 100);
//   }
// }
//
// function togglePlay1 (e) {
//   e = e || window.event;
//   var btn = e.target;
//   if (!audio1.paused) {
//     btn.classList.remove('active');
//     audio1.pause();
//     isPlaying = false;
//   } else {
//     btn.classList.add('active');
//     audio1.play();
//     isPlaying = true;
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
//
// var timer;
// var percent = 0;
// var audio = document.getElementById("audio");
// audio.addEventListener("playing", function(_event) {
//   var duration = _event.target.duration;
//   advance(duration, audio);
// });
// audio.addEventListener("pause", function(_event) {
//   clearTimeout(timer);
// });
// var advance = function(duration, element) {
//   var progress = document.getElementById("progress");
//   increment = 10/duration
//   percent = Math.min(increment * element.currentTime * 10, 100);
//   progress.style.width = percent+'%'
//   startTimer(duration, element);
// }
// var startTimer = function(duration, element){
//   if(percent < 100) {
//     timer = setTimeout(function (){advance(duration, element)}, 100);
//   }
// }

// function togglePlay (e) {
//   e = e || window.event;
//   var btn = e.target;
//   if (!audio.paused) {
//     btn.classList.remove('active');
//     audio.pause();
//     isPlaying = false;
//   } else {
//     btn.classList.add('active');
//     audio.play();
//     isPlaying = true;
//   }
// }


















//
//
// //
//
//
// var playBtn = document.getElementById('play');
// var stopBtn = document.getElementById('stop');
//
// var playBtn2 = document.getElementById('play2');
// var stopBtn2 = document.getElementById('stop2');
//
// var playBtn3 = document.getElementById('play3');
// var stopBtn3 = document.getElementById('stop3');
//
// var playSound = function() {
// document.getElementById("audio2").pause();
// document.getElementById("audio3").pause();
// 	document.getElementById("audio").play();
// };
//
// var playSound2 = function() {
// 	document.getElementById("audio").pause();
//  document.getElementById("audio3").pause();
//   document.getElementById("audio2").play();
// };
//
// var playSound3 = function() {
// 	document.getElementById("audio").pause();
//  document.getElementById("audio2").pause();
//   document.getElementById("audio3").play();
// };
//
// playBtn.addEventListener('click', playSound, false);
// stopBtn.addEventListener('click', function(){audio.pause()}, false);
//
// playBtn2.addEventListener('click', playSound2, false);
// stopBtn2.addEventListener('click', function(){audio2.pause()}, false);
//
// playBtn3.addEventListener('click', playSound3, false);
// stopBtn3.addEventListener('click', function(){audio3.pause()}, false);
//
//
// var playSound3 = function() {
//  document.getElementById("audio2").pause();
//   document.getElementById("audio3").pause();
// };

// $( function() {
//     $( "#progressbar1" ).css("width", "100px;");
//   } );



// $( "#li1, #play" ).click(function() {
//   $( ".play-button" ).css("display", "none");
//   $( ".pause-button" ).fadeIn();
//
//
//
//   $( "#progressbar1" ).css("width", "100px");
//
//
//   document.getElementById("audio2").pause();
//    document.getElementById("audio3").pause();
//    document.getElementById("audio1").play();
// });

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

// $( "#li2, #play2" ).click(function() {
//   $( ".play-button" ).css("display", "none");
//   $( ".pause-button" ).fadeIn();
//   document.getElementById("audio1").pause();
//    document.getElementById("audio3").pause();
//    document.getElementById("audio2").play();
// });

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

// $( "#li3, #play3" ).click(function() {
//   $( ".play-button" ).css("display", "none");
//   $( ".pause-button" ).fadeIn();
//   document.getElementById("audio1").pause();
//    document.getElementById("audio2").pause();
//    document.getElementById("audio3").play();
// });

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


// document.getElementById('audio1');
//document.getElementById('progress1');

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



// document.getElementById('audio2');
// document.getElementById('progress2');
//
// audio2.addEventListener('timeupdate', function() {
//   window.requestAnimationFrame(function() {
//     progress.value = audio2.currentTime / audio2.duration;
//   });
// });




// $( "#submitButton" ).click(function() {
//
//   $(".success-message").fadeIn();
//
// });
