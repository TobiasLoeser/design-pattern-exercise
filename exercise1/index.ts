import { Directory } from "./directory";
import { File } from "./file";

function printStructure(dir: Directory) {
    console.log(`Ordner: ${dir.name}`);

    // Dateien und Unterordner getrennt behandeln
    for (const file of dir.files) {
        file.displayInfo();
    }

    for (const subDir of dir.subDirectories) {
        console.log(`  Unterordner: ${subDir.name}`);
        for (const f of subDir.files) {
            f.displayInfo();
        }
    }
}

const root = new Directory("Root");
root.addFile(new File("config.json", 1));

const music = new Directory("Musik");
music.addFile(new File("song.mp3", 5000));

root.addSubDir(music);
printStructure(root);