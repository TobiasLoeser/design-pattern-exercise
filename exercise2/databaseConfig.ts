export class DatabaseConfig {
    connectionString: string;
    timeout: number;
    
    constructor() {
        this.connectionString = "localhost:5432";
        this.timeout = 5000;
        console.log("--- Verbindung zur Datenbank wird aufgebaut... (teure Operation) ---");
    }

    setConnectionString(url: string) {
        this.connectionString = url;
    }
}