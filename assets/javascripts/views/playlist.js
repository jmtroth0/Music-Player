(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var PlaylistView = window.MusicPlayer.PlaylistView = function (options) {
    this.library = options.library;
    this.$rootEl = options.$rootEl;
  };

  PlaylistView.prototype.addAlbum = function () {
    var $albumList = this.library.buildAlbums();
    var $libraryEl = this.$rootEl;

    $albumList.forEach(function($albumEntry){
      $libraryEl.append($albumEntry);
    });
  };
})();
