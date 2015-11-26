(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var Song = window.MusicPlayer.Song = function (options) {
    this.title = options.title;
    this.time = options.time;
    var seconds = "" + (this.time % 60);
    if (seconds.length === 1) { seconds = "0" + seconds; }
    this.timeString = Math.floor(this.time / 60) + ":" + seconds;
  };

  Song.prototype.makeEntry = function () {
    var $li = $('<li class="song">');
    var $title = $('<span class="song-title group">');
    var $time = $('<span class="song-length group">');
    $title.text(this.title);
    $time.text(this.timeString);
    $li.append($title).append($time);
    return $li;
  };

})();
