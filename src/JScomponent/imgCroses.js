$(document).ready(function() {

  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
      scrolling = true;

      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");

      setTimeout(function() {
          scrolling = false;
      }, animTime);
  }

  function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
  }

  function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
  }

  $(document).on("mousewheel DOMMouseScroll", function(e) {
      if (scrolling) return;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
          navigateUp();
      } else {
          navigateDown();
      }
  });

  $(document).on("keydown", function(e) {
      if (scrolling) return;
      if (e.which === 38) { // Up Arrow key
          navigateUp();
      } else if (e.which === 40) { // Down Arrow key
          navigateDown();
      } else if(e.which === 35){ //End key
        curPage = numOfPages;
        pagination();
      } else if (e.which === 36){ //Home key
          curPage = 1;
          pagination();
      }
  });
});