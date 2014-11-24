$(function() {
  'use strict';

  var app = {
    init: function() {
      this.initHeight();
    },

    initHeight: function() {
      $('.table-cell').height($(document).height());
    }
  };

  app.init();
});
