(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var Album = window.MusicPlayer.Album = function (options) {
    this.title = options.title;
    this.artist = options.artist;
    this.songs = options.songs;
  };

  Album.prototype.makeEntry = function () {
    var $album = $('<article class="album">');

    var $title = $('<h1 class="album-title">');
    $title.text(this.title);
    $album.append($title);

    var $songsList = $('<ul class="songs">');
    this.each(function (song) {
      $songsList.append(song.makeEntry());
    });
    $album.append($songsList);

    return $album;
  };

  Album.prototype.each = function (func) {
    this.songs.forEach(function(song){
      func(song);
    });
  };
})();
