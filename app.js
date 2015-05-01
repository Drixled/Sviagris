var angle = 0;

$(".card").click(function(event) {
  angle += -180;
  var element = $(event.currentTarget);
  if ($.browser.webkit) {
    element.css('webkitTransition', '-webkit-transform 600ms cubic-bezier(0,.75,.25,1)');
    element.css('webkitTransform', 'rotateY(' + angle + 'deg)');
  } else if ($.browser.mozilla) {
    element.css('MozTransform', '-moz-transform 600ms cubic-bezier(0,.75,.25,1)');
    element.css('MozTransform', 'rotateY(' + angle + 'deg)');
  } else if ($.browser.msie) {
    element.css('msTransform', '-ms-transform 600ms cubic-bezier(0,.75,.25,1)');
    element.css('msTransform', 'rotateY(' + angle + 'deg)');
  } else if ($.browser.opera) {
    element.css('oTransform', '-o-transform 600ms cubic-bezier(0,.75,.25,1)');
    element.css('oTransform', 'rotateY(' + angle + 'deg)');
  }
});