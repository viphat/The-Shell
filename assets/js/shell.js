$(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $.ajax({
    url: "http://api.viphat.work/tags/",
    method: 'GET',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  }).done( function(data) {
    word_array = data.tags
    $("#tagCloud").jQCloud(word_array);
  });

  if ($('section h4').length > 0) {
    $('#toc').toc({
      container: 'section', //element to find all selectors in
      selectors: 'h4,h5,h6', //elements to use as headings
      smoothScroller: true, //enable or disable smooth scrolling on click
      prefix: 'toc', //prefix for anchor tags and class names
      onHighlight: function(el) {
        //called when a new section is highlighted
      },

      highlightOnScroll: true, //add class to heading that is currently in focus
      highlightOffset: 100, //offset to trigger the next headline
      anchorName: function(i, heading, prefix) { //custom function for anchor name
        return prefix + i;
      },

      headerText: function(i, heading, $heading) { //custom function building the header-item text
        text = $heading.text();
        shortText = jQuery.trim(text).substring(0,25).split(" ").join(" ") + "...";
        return shortText;
      },
<<<<<<< HEAD

=======
>>>>>>> Add Ghost Tags Cloud
      itemClass: function(i, heading, $heading, prefix) { // custom function for item class
        return $heading[0].tagName.toLowerCase();
      }
    });
  } else {
    $('#toc').css('display','none');
  }


});
