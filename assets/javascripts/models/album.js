(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var Album = window.MusicPlayer.Album = function (options) {
    this.title = options.title;
    this.artist = options.artist;
    this.songs = options.songs;
  };

  // creates a typical section for this album
  Album.prototype.makeEntry = function () {
    var $album = $('<article class="album">');

    var $info = $('<div class="album-info group">');
    var $title = $('<h1 class="album-title group">');
    var $artist = $('<h2 class="album-artist group">');
    $title.text(this.title);
    $artist.text(this.artist);
    $info.append($title).append($artist);
    $album.append($info);

    $album.append(this.makeSongList());

    return $album;
  };

  // create a list of songs
  Album.prototype.makeSongList = function () {
    var $songsList = $('<ul class="songs">');
    this.each(function (song) {
      $songsList.append(song.makeEntry());
    });
    return $songsList;
  };

  // create a basic form for a new song
  Album.prototype.makeForm = function () {
    // var $('<input type="text">')
  };

  // utility methods

  Album.prototype.first = function () {
    return this.songs[0];
  };

  Album.prototype.next = function (currentSong) {
    for (var i = 0; i < this.songs.length; i++) {
      if (currentSong === this.songs[i]) {
        return this.songs[i + 1];
      }
    }
  };

  Album.prototype.previous = function (currentSong) {
    for (var i = 1; i < this.songs.length; i++) {
      if (currentSong === this.songs[i]) {
        return this.songs[i - 1];
      }
    }
  };

  Album.prototype.each = function (func) {
    this.songs.forEach(function(song){
      func(song);
    });
  };
})();
