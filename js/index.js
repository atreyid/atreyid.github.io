$(document).ready(function() {
  $(window).on('hashchange', hashchanged);
  hashchanged();
	initMiscCollage();
});

function initMiscCollage() {
	// changed .hover to .each
    $('.photo').each(function() {
        var rotation = Math.random() * 51 - 10;
        var depth = Math.floor(Math.random() * 256);
        $(this).css({
          'transform' : 'rotateZ(' + rotation + 'deg)',
          'z-index' : depth
        });
    });
}

function hashchanged() {
  removeAllListSelection();
  var section = window.location.href.split("#")[1];
  if (section) {
    var $link = $(".menu a[href='#" + section + "']");
    $link.addClass('selected');
  } else {
    var $link = $(".menu a[href='#']");
    $link.addClass('selected');
  }
  hideAllSections();
  var $id = (typeof section === "undefined" || section === "") ? "#home" : "#"+section;
  $($id).fadeIn(400);
}

$(".menu").on('click', "a", function(event){
  removeAllListSelection();
  $(this).addClass('selected');
  hideAllSections();
  var $id = $(this).attr('href') === "#" ? "#home" : $(this).attr('href');
  $($id).fadeIn(400);
});

function removeAllListSelection() {
  $(".menu > a").each(function(idx, elem) {
    $(elem).removeClass('selected');
  });
}

function hideAllSections() {
  $("section.views:visible").each(function(idx, elem) {
    $(elem).hide();
  });
}