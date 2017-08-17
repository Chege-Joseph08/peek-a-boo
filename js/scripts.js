jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
    alert("I told you, THIS IS A HEADER!");
  });

  $(document).ready(function() {
       $("p").click(function() {
         $("img").show();
       });
     });
     $(document).ready(function() {
      $(".clickable").click(function() {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
      });
    });

});
