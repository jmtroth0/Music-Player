(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var Song = window.MusicPlayer.Song = function (options) {
    this.title = options.title;
    this.time = options.time;
    this.timeString = window.MusicPlayer.secondsToString(this.time);
  };

  // creates a typical entry for a song
  Song.prototype.makeEntry = function () {
    var $li = $('<li class="song">');
    var $title = $('<span class="song-title group">');
    var $time = $('<span class="song-length group">');
    $title.text(this.title);
    $time.text(this.timeString);
    $li.append($title).append($time);
    return $li;
  };

  Song.prototype.makeForm = function () {
    var $title = $('<input type="text" name="song[title]"');
    var $minutes = $('<input type="number" name="song[minutes]">');
    var $seconds = $('<input type="number" name="song[seconds]">');
    var $form = $('<form>').append($title).append($minutes).append($seconds);
    return $form;
  };

})();
