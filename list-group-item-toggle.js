function updateVideos() {
  var videotoggle = $(".list-group-item");
  for (var i = 0; i < videotoggle.length; i++) {
    videotoggle.click(function() {
      $(".list-group-item.active:lt(" + i + ")").removeClass('active');
      $(".list-group-item.active:gt(" + i + ")").removeClass('active');
      $(this).addClass('active');
    });
  }
}

$(document).bind("DOMSubtreeModified", function() {
  updateVideos();
});




  // var videotoggle = $(".list-group-item");

  // var videoClicked = $(".list-group-item .active");
  // console.log($videotoggle + " is item");

  // var clicked = new Array();
  // var clicked = 0;
  // for (var i = 0; i <= videotoggle.length; i++) {
  //   // console.log(videotoggle);
  //   var $video = $(videotoggle[i]);
  //   $video.click(function(event) {
  //     clicked = $video; // Put an index on the clicked video
  //     console.log(clicked);
  //   });
  //
  //   if () // If previous index is clicked, unclick
  // }


  // var clicked = null;

    // var clicked = null;
    // for (var i = 0; i < videotoggle.length; i++) {
    //   if ($(videotoggle[i]).hasClass('active')) {
    //     clicked = i;
    //     $(videotoggle[i]).removeClass('active');
    //   }
    // }
  // if ($(this) === $('.list.group.item.active')) {
  //   console.log("Yeah");
  // }
  // var clicked = 0;
  // for (var i = 0; i < videotoggle.length; i++) {
  //   if ($(videotoggle[i]).hasClass('active')) {
  //     clicked = i;
  //   }
  // }
  // for (var i = 0; i < videotoggle.length; i++) {
  //   videotoggle.click(function() {
  //     $(".list-group-item.active:lt(" + i + ")").removeClass('active');
  //     $(".list-group-item.active:gt(" + i + ")").removeClass('active');
  //     $(this).addClass('active');
  //     // if ($(this).hasClass('active')) {
  //     //
  //     //   $(".list-group-item.active:lt(5)").removeClass('active');
  //     //   $(this).addClass('active');
  //     // }
  //     // else {
  //     //
  //     // }
  //   });
  // }

  // for (var i = 0; i < videotoggle.length; i++) {
  //   console.log(videotoggle);
  //   console.log($(videotoggle[i]).attr('class'));
    // var $video = videotoggle[i];
    // console.log();
    // console.log($video)
    // console.log($video.snippet.title);
    // var clicked = null;

    // var clicked = $video.clickfunction() {
    //   // lastClicked = $(this).attr('class');
    //   $(this).addClass('active');
    // };
    //
    // var unclicked = function() {
    //   $(this).removeClass('active');
    // };


    // $(videotoggle[i]).click(function() {
    //   if ($(this).hasClass('active')) {
    //     $(videotoggle[i]).removeClass('active');
    //     $(this).removeClass('active');
    //     console.log($(videotoggle[i]).attr('class') + " in unclick");
    //     console.log("Unclicked");
    //   }
    //   else {
    //
    //     $(this).addClass('active');
    //     clicked = $(this);
    //     console.log($(clicked).attr('class') + " in click");
    //     console.log("Clicked");
    //   }
    // });




      // if ($(this).hasClass('active')) {
      //   console.log(this + " is this");
      //
      //   $(clicked).removeClass('active');
      //   $(this).addClass('active');
      //   console.log("Unclicked");
      //
      //   // console.log($(this).attr('class'));
      // }
      // else {
      //   $(this).addClass('active');
      //   clicked = $(this);
      //   console.log("Clicked");
      // }
        // clicked.push($(this).attr('class'));
        // lastClicked = $(this).attr('class');
        // console.log(lastClicked);
        // console.log(lastClicked + " was last clicked");
        // event.stopPropagation();

      // }

    // });
    // $(document).click(function() {
    //   $('.list-group-item .active').removeClass('active');
    // })
  // }



      // if ($(videotoggle[i]).hasClass('active')) {
      //   $(videotoggle[i]).removeClass('active');
      //   $(videotoggle[i]).addClass('inactive');
      //   console.log("Unclicked");
      // }

  // $videotoggle.click(function() {
  //   $videotoggle.addClass('active');
  // })
  // $videotoggle.each(function() {
  //   if ($videotoggle.hasClass('active')) {
  //     $videotoggle.removeClass('active');
  //   }
    // else {
    //   $videotoggle.addClass('active');
    // }
  // });
  // $videotoggle.click(function() {
  //   if ($videotoggle.hasClass('active')) {
  //     // $videotoggle.addClass('inactive');
  //     $videotoggle.removeClass('active');
  //   }
  //   else {
  //     $videotoggle.addClass('active');
  //   }
  //   console.log('Deactivated');
  // });


  // $videotoggle.click(function() {
  //   if (($videotoggle).hasClass('active')) {
  //     console.log('clicked');
  //   }
    // if ($(videotoggle).hasClass('hover')) {
    //   console.log("clicked already");
    //   $videotoggle.addClass('unclicked');
    //   $videotoggle.removeClass('isActive');
    // }
    // if ($(this).hasClass('clicked')) {
    //   $(this).addClass('unclicked');
    //   $(this).removeClass('clicked');
    // }
    // else {
    //   $(this).removeClass('unclicked');
    //   $(this).addClass('clicked');
    // }
    // $videotoggle.removeClass('active');
    // $(this).addClass('active');
    // console.log("Switched!");
  // });
// });
