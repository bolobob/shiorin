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

moment.locale('ja');
google.load("feeds", "1");
function getElapsedTime(date) {
  return moment().diff(moment(date), 'years') ||
      moment().diff(moment(date), 'days') ||
      moment().diff(moment(date), 'hours') ||
      moment().diff(moment(date), 'minutes');
}
function getTimeUnit(date) {
  var timeUnit = '';
  if (moment().diff(moment(date), 'years')) {
    timeUnit = '年';
  } else if (moment().diff(moment(date), 'days')) {
    timeUnit = '日';
  } else if (moment().diff(moment(date), 'hours')) {
    timeUnit = '時間';
  } else if (moment().diff(moment(date), 'minutes')) {
    timeUnit = '分';
  }

  return timeUnit;
}
function initialize() {
  var feed = new google.feeds.Feed("http://feedblog.ameba.jp/rss/ameblo/tamai-sd");
  var $link = $('.latest');
  var $title = $('.latest .title');
  var $elapsedTime = $('.elapsed-time');
  feed.setNumEntries(1);
  feed.load(function(result) {
    var elapsedTime = '';
    if (!result.error) {
      var entry = result.feed.entries.pop();
      $title.text(entry.title);
      $link.attr('href', entry.link);
      elapsedTime = getElapsedTime(entry.publishedDate) + getTimeUnit(entry.publishedDate);
      $elapsedTime.text(elapsedTime);
    }
  });
}
google.setOnLoadCallback(initialize);
