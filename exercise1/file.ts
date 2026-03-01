
export class File {
    constructor(public name: string, public size: number) { }

    displayInfo() {
        console.log(`Datei: ${this.name} (${this.size}kb)`);
    }
}
