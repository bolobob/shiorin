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

google.load("feeds", "1");
function initialize() {
  var feed = new google.feeds.Feed("http://feedblog.ameba.jp/rss/ameblo/tamai-sd");
  var $link = $('.latest');
  var $title = $('.latest .title');
  feed.setNumEntries(1);
  feed.load(function(result) {
    if (!result.error) {
      var entry = result.feed.entries.pop();
      $title.text(entry.title)
      $link.attr('href', entry.link)
    }
  });
}
google.setOnLoadCallback(initialize);
