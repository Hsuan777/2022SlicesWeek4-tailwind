"use strict";

console.log('Hello!');
$(function () {
  $('#menu-mobile-btn').on('click', function () {
    $('#menu-mobile').toggleClass('hidden');
  });
  $('#agree').on('click', function () {
    console.log(1);
    $('#agreeFalse').toggleClass('hidden');
    $('#agreeTrue').toggleClass('hidden');
  });
});
//# sourceMappingURL=all.js.map
