import { File } from "./File";


export class Directory {
    public files: File[] = [];
    public subDirectories: Directory[] = [];

    constructor(public name: string) { }

    addFile(file: File) { this.files.push(file); }
    addSubDir(dir: Directory) { this.subDirectories.push(dir); }
}
