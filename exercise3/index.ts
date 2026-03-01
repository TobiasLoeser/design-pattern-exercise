import { Playlist } from "./playlist";
import { Song } from "./song";

const myPlaylist = new Playlist();
myPlaylist.addSong(new Song("Stayin' Alive", "Bee Gees"));
myPlaylist.addSong(new Song("September", "Earth, Wind & Fire"));

// Wichtig: Songs ist ein Array
console.log("Spiele Playlist ab:");
for (let i = 0; i < myPlaylist.songs.length; i++) {
    const song = myPlaylist.songs[i];
    console.log(`🎶 Jetzt läuft: ${song.title} von ${song.artist}`);
}