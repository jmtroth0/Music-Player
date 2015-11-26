(function () {
  window.MusicPlayer = window.MusicPlayer || {};

  var secondsToString = window.MusicPlayer.secondsToString = function (seconds) {
    var secondsPlace = "" + (seconds % 60);
    if (secondsPlace.length === 1) { secondsPlace = "0" + secondsPlace; }
    return Math.floor(seconds / 60) + ":" + secondsPlace;
  };
})();
