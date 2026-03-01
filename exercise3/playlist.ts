import { Song } from "./song";


export class Playlist {
    // PROBLEM: Die interne Struktur ist 'public' und diktiert, 
    // wie der Client auf die Daten zugreifen muss.
    public songs: Song[] = [];

    addSong(song: Song) {
        this.songs.push(song);
    }
}
