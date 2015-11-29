(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var AlbumView = window.MusicPlayer.AlbumView = function (options) {
    this.album = options.album;
  };

  // creates a typical section for this album
  AlbumView.prototype.render = function () {
    this.$el = this.makeEntry();
    this.$el.on('click', this.clickHandler.bind(this));
    return this;
  };

  AlbumView.prototype.clickHandler = function (e) {
    if ($(e.target).parent().data('type') === 'song') {
      // if you cmd-/ctrl- click on a song, add the song to the end of the playlist
      if (e.ctrlKey || e.metaKey) {
        window.MusicPlayer.playlistView.addSong(
          this.album.song($(e.target).parent().data('id'))
        );
      // if it is just a normal click, replace the playlist with this album, starting
      // with this song
      } else {
        window.MusicPlayer.playlistView.replacePlaylist(
          this.album,
          $(e.target).parent().data('id')
        );
      }
    } else if ($(e.target).data('type') === 'title'){
      // if you click the title, then do the same procedure, just with the entire album
      if (e.ctrlKey || e.metaKey) {
        window.MusicPlayer.playlistView.addAlbum(
          this.album
        );
      } else {
        window.MusicPlayer.playlistView.replacePlaylist(
          this.album
        );
      }
    }
  };

  // creates a typical section for this album
  AlbumView.prototype.makeEntry = function () {
    var $album = $('<article class="album">');

    var $info = $('<div class="album-info group">');
    var $title = $('<h1 class="album-title group">');
    $title.data('type', 'title');
    var $artist = $('<h2 class="album-artist group">');

    var $form = $(
      '<form class="song">' +
        '<input class="title" type="text" name="song[title]" placeholder="Title">' +
        '<input class="minutes" type="text" name="song[minutes]" placeholder="M">:' +
        '<input class="seconds" type="text" name="song[seconds]" placeholder="SS">' +
        '<button class="create">Create</button>' +
      '</form>'
    );

    $title.text(this.album.title);
    $artist.text(this.album.artist);
    $info.append($title).append($artist);
    $album.append($info).append($form);

    $album.append(this.makeSongList());

    $album.find('form.song').on('submit', this.createSong.bind(this));
    return $album;
  };

  // create a list of songs
  AlbumView.prototype.makeSongList = function (album, initialIdx) {
    var $songsList = $('<ul class="songs">');
    (album || this.album).each(function (song, idx) {
      if (initialIdx && initialIdx > idx) { return; }
      var $song = song.makeEntry();
      $song.data({ 'id': idx, type: 'song' });
      $songsList.append($song);
    });
    return $songsList;
  };

  // method on submit of form
  AlbumView.prototype.createSong = function (e) {
    e.preventDefault();
    var formData = $(e.currentTarget).serializeJSON();

    // validate that minutes and seconds are both numbers
    var minutes = parseInt(formData.song.minutes);
    var seconds = parseInt(formData.song.seconds);
    if (minutes !== minutes) {
      $(e.currentTarget).find('input.minutes').css('background', 'red');
      return;
    }
    if (seconds !== seconds) {
      $(e.currentTarget).find('input.seconds').css('background', 'red');
      return;
    }

    var song = new window.MusicPlayer.Song({
      title: formData.song.title,
      time: parseInt(minutes) * 60 + parseInt(seconds)
    });

    // reset the form
    $(e.currentTarget).find('input').val("");
    $(e.currentTarget).find('input').css("background", "");

    // add it to the bottom
    var $song = song.makeEntry();
    $song.data({ 'id': this.album.songs.length, type: 'song' });
    this.$el.find('ul.songs').append($song);
    this.$el.scroll();
    this.$el.animate({ scrollTop: this.$el.find('ul').height() }, 500);
    this.album.songs.push(song);
  };
})();
