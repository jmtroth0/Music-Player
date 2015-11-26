(function() {
  window.MusicPlayer = window.MusicPlayer || {};

  // songs
  var Hamilton1 = new window.MusicPlayer.Album({
    title: "Hamilton, disc 1",
    artist: "Lin-Manuel Miranda",

    songs: [
      new window.MusicPlayer.Song({
        title: "Alexander Hamilton",
        time: 237
      }),
      new window.MusicPlayer.Song({
        title: "Aaron Burr, Sir",
        time: 157
      }),
      new window.MusicPlayer.Song({
        title: "My Shot",
        time: 333
      }),
      new window.MusicPlayer.Song({
        title: "The Story of Tonight",
        time: 92
      }),
      new window.MusicPlayer.Song({
        title: "The Schuyler Sisters",
        time: 187
      }),
      new window.MusicPlayer.Song({
        title: "Farmer Refuted",
        time: 113
      }),
      new window.MusicPlayer.Song({
        title: "You'll Be Back",
        time: 208
      }),
      new window.MusicPlayer.Song({
        title: "Right Hand Man",
        time: 322
      }),
      new window.MusicPlayer.Song({
        title: "A Winter's Ball",
        time: 70
      }),
      new window.MusicPlayer.Song({
        title: "Helpless",
        time: 250
      }),
      new window.MusicPlayer.Song({
        title: "Satisfied",
        time: 329
      }),
      new window.MusicPlayer.Song({
        title: "Story of Tonight - Reprise",
        time: 116
      }),
      new window.MusicPlayer.Song({
        title: "Wait For It",
        time: 194
      }),
      new window.MusicPlayer.Song({
        title: "Stay Alive",
        time: 159
      }),
      new window.MusicPlayer.Song({
        title: "Ten Duel Commandments",
        time: 107
      }),
      new window.MusicPlayer.Song({
        title: "Meet Me Inside",
        time: 84
      }),
      new window.MusicPlayer.Song({
        title: "That Would Be Enough",
        time: 178
      }),
      new window.MusicPlayer.Song({
        title: "Guns and Ships",
        time: 128
      }),
      new window.MusicPlayer.Song({
        title: "History Has It's Eyes On You",
        time: 97
      }),
      new window.MusicPlayer.Song({
        title: "Yorktown(The World Turned Upside Down)",
        time: 243
      }),
      new window.MusicPlayer.Song({
        title: "What Comes Next?",
        time: 99
      }),
      new window.MusicPlayer.Song({
        title: "Dear Theodosia",
        time: 184
      }),
      new window.MusicPlayer.Song({
        title: "Non-Stop",
        time: 385
      }),
    ]
  });

  var Hamilton2 = new window.MusicPlayer.Album({
    title: "Hamilton, disc 2",
    artist: "Lin-Manuel Miranda",

    songs: [
      new window.MusicPlayer.Song({
        title: "What'd I Miss",
        time: 237
      }),
      new window.MusicPlayer.Song({
        title: "Cabinet Battle #1",
        time: 215
      }),
      new window.MusicPlayer.Song({
        title: "Take A Break",
        time: 286
      }),
      new window.MusicPlayer.Song({
        title: "Say No To This",
        time: 242
      }),
      new window.MusicPlayer.Song({
        title: "The Room Where It Happens",
        time: 318
      }),
      new window.MusicPlayer.Song({
        title: "Schuyler Defeated",
        time: 64
      }),
      new window.MusicPlayer.Song({
        title: "Cabinet Battle #2",
        time: 143
      }),
      new window.MusicPlayer.Song({
        title: "Washington On Your Side",
        time: 181
      }),
      new window.MusicPlayer.Song({
        title: "One Last Time",
        time: 296
      }),
      new window.MusicPlayer.Song({
        title: "I Know Him",
        time: 98
      }),
      new window.MusicPlayer.Song({
        title: "The Adams Administration",
        time: 55
      }),
      new window.MusicPlayer.Song({
        title: "We Know",
        time: 142
      }),
      new window.MusicPlayer.Song({
        title: "Hurricane",
        time: 144
      }),
      new window.MusicPlayer.Song({
        title: "The Reynolds Pamphlet",
        time: 128
      }),
      new window.MusicPlayer.Song({
        title: "Burn",
        time: 225
      }),
      new window.MusicPlayer.Song({
        title: "Blow Us All Away",
        time: 174
      }),
      new window.MusicPlayer.Song({
        title: "Stay Alive - Reprise",
        time: 112
      }),
      new window.MusicPlayer.Song({
        title: "It's Quiet Uptown",
        time: 270
      }),
      new window.MusicPlayer.Song({
        title: "The Election of 1800",
        time: 238
      }),
      new window.MusicPlayer.Song({
        title: "Your Obedient Servant",
        time: 150
      }),
      new window.MusicPlayer.Song({
        title: "Best of Wives and Best of Women",
        time: 48
      }),
      new window.MusicPlayer.Song({
        title: "The World Was Wide Enough",
        time: 302
      }),
      new window.MusicPlayer.Song({
        title: "Who Lives, Who Dies, Who Tells Your Story",
        time: 385
      }),
    ]
  });

  var Brothers = new window.MusicPlayer.Album({
    title: "Brothers",
    artist: "The Black Keys",

    songs: [
      new window.MusicPlayer.Song({
        title: "Everlasting Light",
        time: 204
      }),
      new window.MusicPlayer.Song({
        title: "Next Girl",
        time: 198
      }),
      new window.MusicPlayer.Song({
        title: "Tighten Up",
        time: 211
      }),
      new window.MusicPlayer.Song({
        title: "Howlin' For You",
        time: 192
      }),
      new window.MusicPlayer.Song({
        title: "She's Long Gone",
        time: 186
      }),
      new window.MusicPlayer.Song({
        title: "Black Mud",
        time: 129
      }),
      new window.MusicPlayer.Song({
        title: "The Only One",
        time: 300
      }),
      new window.MusicPlayer.Song({
        title: "Too Afraid To Love You",
        time: 205
      }),
      new window.MusicPlayer.Song({
        title: "Ten Cent Pistol",
        time: 269
      }),
      new window.MusicPlayer.Song({
        title: "Sinister Kid",
        time: 224
      }),
      new window.MusicPlayer.Song({
        title: "The Go Getter",
        time: 217
      }),
      new window.MusicPlayer.Song({
        title: "I'm Not The One",
        time: 229
      }),
      new window.MusicPlayer.Song({
        title: "Unknown Brother",
        time: 240
      }),
      new window.MusicPlayer.Song({
        title: "Never Gonna Give You Up",
        time: 219
      }),
      new window.MusicPlayer.Song({
        title: "These Days",
        time: 312
      })
    ]
  });

  var Rumours = new window.MusicPlayer.Album({
    title: "Rumours",
    artist: "Fleetwood Mac",

    songs: [
      new window.MusicPlayer.Song({
        title: "Second Hand News",
        time: 196
      }),
      new window.MusicPlayer.Song({
        title: "Dreams",
        time: 258
      }),
      new window.MusicPlayer.Song({
        title: "Never Going Back Again",
        time: 194
      }),
      new window.MusicPlayer.Song({
        title: "Don't Stop",
        time: 193
      }),
      new window.MusicPlayer.Song({
        title: "Go Your Own Way",
        time: 224
      }),
      new window.MusicPlayer.Song({
        title: "Songbird",
        time: 201
      }),
      new window.MusicPlayer.Song({
        title: "The Chain",
        time: 270
      }),
      new window.MusicPlayer.Song({
        title: "You Make Loving Fun",
        time: 214
      }),
      new window.MusicPlayer.Song({
        title: "I Don't Want To Know",
        time: 197
      }),
      new window.MusicPlayer.Song({
        title: "Oh Daddy",
        time: 236
      }),
      new window.MusicPlayer.Song({
        title: "Gold Dust Woman",
        time: 296
      })
    ]
  });

  var Bridge = new window.MusicPlayer.Album({
    title: "Bridge Over Troubled Water",
    artist: "Simon & Garfunkel",

    songs: [
      new window.MusicPlayer.Song({
        title: "Bridge Over Troubled Water",
        time: 293
      }),
      new window.MusicPlayer.Song({
        title: "El Condor Pasa (If I Could)",
        time: 187
      }),
      new window.MusicPlayer.Song({
        title: "Cecilia",
        time: 175
      }),
      new window.MusicPlayer.Song({
        title: "Keep the Customer Satisfied",
        time: 155
      }),
      new window.MusicPlayer.Song({
        title: "So Long, Frank Lloyd Wright",
        time: 222
      }),
      new window.MusicPlayer.Song({
        title: "The Boxer",
        time: 309
      }),
      new window.MusicPlayer.Song({
        title: "Baby Driver",
        time: 196
      }),
      new window.MusicPlayer.Song({
        title: "The Only Living Boy in New York",
        time: 238
      }),
      new window.MusicPlayer.Song({
        title: "Why Don't You Write Me",
        time: 166
      }),
      new window.MusicPlayer.Song({
        title: "Bye Bye Love",
        time: 173
      }),
      new window.MusicPlayer.Song({
        title: "Song for the Asking",
        time: 111
      })
    ]
  });

  var DemoLibrary = window.MusicPlayer.DemoLibrary = new window.MusicPlayer.Library({
    albums: [
      Brothers,
      Rumours,
      Hamilton1,
      Hamilton2,
      Bridge
    ]
  });
})();
