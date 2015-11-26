(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var LibraryView = window.MusicPlayer.LibraryView = function (options) {
    this.library = options.library;
    this.$rootEl = options.$rootEl;
  };

  LibraryView.prototype.placeAlbums = function () {
    var $albumList = this.library.buildAlbums();
    var $libraryEl = this.$rootEl;

    $albumList.forEach(function($albumEntry){
      $libraryEl.append($albumEntry);
    });
  };
})();
