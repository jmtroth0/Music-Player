(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var PlaylistView = window.MusicPlayer.PlaylistView = function (options) {
    this.$rootEl = options.$rootEl;

    // sets up the variables for the page
    this.replacePlaylist(options.initialAlbum);
    this.currentSong = options.initialAlbum.first();
    this.currentSongIndex = 0;
    this.currentTime = 0;
    this.history = [];
    this.bindEvents();
    this.checkSize();
  };

  PlaylistView.prototype.bindEvents = function () {
    this.$rootEl.find('img.skip').on('click', this.nextSong.bind(this));
    this.$rootEl.find('img.rewind').on('click', this.previousSong.bind(this));
    $(window).on('resize', this.checkSize.bind(this));
  };

  PlaylistView.prototype.checkSize = function (e) {
    if (window.innerWidth < 600) {
      this.$rootEl.css({
        'position': 'relative',
        'margin-left': '30px'
      });
    } else {
      this.$rootEl.css({
        'position': 'fixed',
        'margin-left': 'none'
      });
    }
  };

  // playlist functions to adjust contents

  // removes current playlist and replaces it with this album
  PlaylistView.prototype.replacePlaylist = function (album, initialSongIdx) {
    // takes everything from the album starting from that song and replaces the playlist with that
    initialSongIdx = initialSongIdx || 0;
    this.playlist = album.songs.slice(initialSongIdx);
    var $songs = window.MusicPlayer.AlbumView.prototype
      .makeSongList.call(this, album, initialSongIdx);

    this.currentSong = album.song((initialSongIdx));
    this.currentSongIndex = initialSongIdx;

    this.$rootEl.find('article.playlist').html($songs);
    this.$rootEl.find('article.playlist ul.songs').on('click', this.chooseSong.bind(this));
    this.play();
  };

  // adds an album to the end of the playlist
  PlaylistView.prototype.addAlbum = function (album) {
    this.playlist = this.playlist.concat(album.songs);
    var $songs = window.MusicPlayer.AlbumView.prototype.makeSongList.call(this, album);
    this.$rootEl.find('article.playlist ul.songs').append($songs);
  };

  // adds a song to the beginning or end of the playlist
  PlaylistView.prototype.addSong = function (song, prepend) {
    var $song = song.makeEntry();
    if (prepend) {
      this.playlist.unshift(song);
      this.$rootEl.find('article.playlist ul.songs').prepend($song);
    } else {
      this.playlist.push(song);
      this.$rootEl.find('article.playlist ul.songs').append($song);
    }
  };

  // removes a song from target idx
  PlaylistView.prototype.removeSong = function (playlistIdx) {
    this.playlist.splice(playlistIdx, 1); // removes from playlist object
    this.$rootEl.find('article.playlist ul.songs li')
      .eq(playlistIdx).remove(); // and UI
  };

  // control player

  // general play function
  PlaylistView.prototype.play = function () {
    clearTimeout(this.refreshTimerId); // turn off previous clock

    // make sure the info box is up to date
    var $playingBox = this.$rootEl.find('.playing');
    $playingBox.find('.song-title').text(this.currentSong.title);
    $playingBox.find('span.total-time').text(this.currentSong.timeString);

    // make sure the time is up to date
    var $time = $playingBox.find('span.current-time');
    this.currentTime = this.paused ? this.currentTime : 0;
    this.adjustClock($time);

    // hide the play button, show the pause button, and adjust listeners accordingly
    this.$rootEl.find('img.play')[0].hidden = true;
    this.$rootEl.find('img.play').off('click', this.play.bind(this));
    this.$rootEl.find('img.pause')[0].hidden = false;
    this.$rootEl.find('img.pause').on('click', this.pause.bind(this));

    // start the timer
    this.paused = false;
    this.setTimer($time);
  };

  PlaylistView.prototype.pause = function () {
    clearTimeout(this.refreshTimerId); // turn off the clock

    // show the play button, hide the pause button, and adjust listeners accordingly
    this.$rootEl.find('img.play')[0].hidden = false;
    this.$rootEl.find('img.play').on('click', this.play.bind(this));
    this.$rootEl.find('img.pause')[0].hidden = true;
    this.$rootEl.find('img.pause').off('click', this.pause.bind(this));

    this.paused = true;
  };

  PlaylistView.prototype.nextSong = function () {
    // removes the finished song
    if (this.playlist.length >= 1) {
      this.addToHistory(this.playlist.shift());
      this.$rootEl.find('article.playlist li.song').eq(0).remove();
    }

    if (this.playlist.length === 0) {
      this.setInfoToDefault();
      return;
    }

    // finds the next song; if there is one, goes to it... otherwise resets the UI
    this.currentSong = this.playlist[0];
    this.paused = false;
    this.play();
  };

  PlaylistView.prototype.previousSong = function () {
    // finds if there are previous songs
    var previousSong = this.history[this.history.length - 1];
    if (this.currentTime > 3 || !previousSong) {
      // if you just started the song or you can't go back any further,
      // just plays the current one from the beginning
      this.play();
    } else {
      // otherwise goes to history, removes the last one from both history UI and array,
      // and then puts that onto the front of the playlist ui and array.
      this.history.pop();
      this.$rootEl.find('article.history li.song').eq(0).remove();
      this.addSong(previousSong, true);

      this.currentSong = previousSong;
      this.play();
    }
  };

  // directs what happens when a song is chosen from the playlist
  PlaylistView.prototype.chooseSong = function (e) {
    debugger
    if (e.ctrlkey || e.metaKey) {
      // if the cmd key is pressed, remove that song
      this.removeSong($(e.target).parent().index());
    } else {
      // otherwise skip to that song
      for (var i = 0, elIdx = $(e.target).parent().index(); i < elIdx; i++) {
        this.removeSong(0);
      }
      this.currentSong = this.playlist[0];
      this.play();
    }
  };

  // useful functions

  // utility function to add a song to both the history array and UI box
  PlaylistView.prototype.addToHistory = function (song) {
    var $song = song.makeEntry();
    this.history.push(song);
    this.$rootEl.find('article.history ul.songs').prepend($song);
  };

  // creates a self-reseting timer that ends when the song is over
  PlaylistView.prototype.setTimer = function ($time) {
    this.refreshTimerId = setTimeout(function(){
      this.currentTime += 1;
      this.adjustClock($time);

      if (this.currentTime < this.currentSong.time) {
        this.setTimer($time);
      } else {
        this.nextSong();
      }
    }.bind(this), 1000);
  };

  PlaylistView.prototype.adjustClock = function ($time) {
    // resets the clock
    $time.text(window.MusicPlayer.secondsToString(this.currentTime));
    var percent = this.currentTime / this.currentSong.time * 100;
    // sets the timer bar
    this.$rootEl.find('div.song-length-bar').css({
      width: percent + "%",
      transition: "width 1s"
    });
  };

  PlaylistView.prototype.setInfoToDefault = function () {
    // utility function to clear the player
    clearTimeout(this.refreshTimerId);
    var $playing = this.$rootEl.find('.playing');
    $playing.find('span.song-title').text('XXXXXX');
    $playing.find('span.current-time').text('0:00');
    $playing.find('span.total-time').text('0:00');
  };
})();
