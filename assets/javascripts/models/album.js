(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var Album = window.MusicPlayer.Album = function (options) {
    this.title = options.title;
    this.artist = options.artist;
    this.songs = options.songs || [];
  };

  // utility methods

  Album.prototype.first = function () {
    return this.songs[0];
  };

  Album.prototype.song = function (num) {
    return this.songs[num];
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
    this.songs.forEach(function(song, idx){
      func(song, idx);
    });
  };
})();
