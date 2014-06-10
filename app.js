jQuery(function(jq) {

  'use strict';

  var lcl = {};

  lcl.pageSwitch = function(pageStr) {
    var pageOn, pageOff;
    pageOn = jq('[data-kj-page="' + pageStr + '"]');
    if (pageOn.length === 1) {
      // Turn on target page first, then turn off page or pages being left
      pageOff = jq('[data-kj-page]').filter(":visible");
      pageOn.show();
      pageOff.hide();
    }
  };

  jq('button').addTouch();
  jq('[data-kj-page-go]').addTouch();
  jq('input').addTouch();

  jq('body').on('click', '[data-kj-page-go]', function(evt) {
    lcl.pageSwitch(jq(evt.target).attr('data-kj-page-go'));
  });

});