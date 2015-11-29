(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var LibraryView = window.MusicPlayer.LibraryView = function (options) {
    this.library = options.library;
    this.$rootEl = options.$rootEl;
    this.placeAlbums();

    this.bindEvents();
    this.checkSize();
  };

  LibraryView.prototype.bindEvents = function () {
    this.$rootEl.find('button.new-album').on('click', this.newAlbumForm.bind(this));
    $(window).on('resize', this.adjustSize.bind(this));
  };

  LibraryView.prototype.adjustSize = function (e) {
    if (window.innerWidth < 600) {
      this.$rootEl.css({
        'float': 'none',
        'width': '300px',
        'margin': '0 0 0 30px',
      });
    } else {
      this.$rootEl.css({
        'float': 'right',
        'margin': '0 auto',
        'transform': 'none'
      });
    }
  };

  // places the album entries onto the page in the library section
  LibraryView.prototype.placeAlbums = function () {
    this.library.each(function(album){
      this.placeAlbum(album);
    }.bind(this));
  };

  // creates and places a single album view on the page
  LibraryView.prototype.placeAlbum = function (album) {
    var albumView = new window.MusicPlayer.AlbumView({
      album: album
    });
    this.$rootEl.append(albumView.render().$el);
  };

  // creates the modal and places it on the page. then binds submit and close events
  LibraryView.prototype.newAlbumForm = function (e) {
    var albumModal = this.createModal(
      '<form class="album">' +
        '<input type="text" name="album[title]" placeholder="Title">' +
        '<input type="text" name="album[artist]" placeholder="Artist">' +
        '<button class="create">Create</button>' +
      '</form>'
    );
    $('div.container').append(albumModal);

    albumModal.find('button.close-modal').on('click', this.closeModal.bind(this, albumModal));
    albumModal.find('form.album').on('submit', this.createAlbum.bind(this));
  };

  LibraryView.prototype.createAlbum = function (e) {
    e.preventDefault();
    var formData = $(e.currentTarget).serializeJSON();
    var album = new window.MusicPlayer.Album({
      title: formData.album.title,
      artist: formData.album.artist
    });
    this.library.push(album);
    this.placeAlbum(album);
    this.closeModal($(e.currentTarget).parent().parent());
  };

  LibraryView.prototype.createModal = function (content) {
    var modal = $(
      '<section class="modal">' +
        '<article class="content">' +
          content +
          '<button class="close-modal">X</button>' +
        '</article>' +
        '<div class="modal-screen"></div>' +
      '</section>'
    );
    return modal;
  };

  LibraryView.prototype.closeModal = function (albumModal, e) {
    albumModal.remove();
  };
})();
