(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var Library = window.MusicPlayer.Library = function (options) {
    this.albums = options.albums;
  };

  // builds album entries
  Library.prototype.buildAlbums = function () {
    var albumList = [];
    this.each(function(album){
      albumList.push(album.makeEntry());
    });
    return albumList;
  };

  // utility methods

  Library.prototype.first = function () {
    return this.albums[0];
  };

  Library.prototype.each = function (func) {
    this.albums.forEach(function(album){
      func(album);
    });
  };
})();
