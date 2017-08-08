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
