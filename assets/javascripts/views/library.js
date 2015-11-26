(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var LibraryView = window.MusicPlayer.LibraryView = function (options) {
    this.library = options.library;
    this.$rootEl = options.$rootEl;
    this.placeAlbums();
  };

  // places the album entries onto the page in the library section
  LibraryView.prototype.placeAlbums = function () {
    var $libraryEl = this.$rootEl;
    this.library.each(function(album){
      var albumView = new window.MusicPlayer.AlbumView({
        album: album
      });
      $libraryEl.append(albumView.render().$el);
    });
  };

  LibraryView.prototype.newSong = function () {

  };
})();
