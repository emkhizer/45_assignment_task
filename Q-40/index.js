"use strict";
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Atif Aslam", "Hits of atif Aslam", 1));
console.log(make_album("Arijit Singh", "Best of Arijit Singh"));
console.log(make_album("Utada Hikaru", "Fantôme"));
