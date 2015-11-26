(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var Library = window.MusicPlayer.Library = function (options) {
    this.albums = options.albums;
  };

  Library.prototype.buildAlbums = function () {
    var albumList = [];
    this.each(function(album){
      albumList.push(album.makeEntry());
    });
    return albumList;
  };

  Library.prototype.each = function (func) {
    this.albums.forEach(function(album){
      func(album);
    });
  };
})();
