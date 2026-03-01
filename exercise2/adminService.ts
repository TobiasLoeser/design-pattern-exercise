import { DatabaseConfig } from "./databaseConfig";

export class AdminService {
    updateSettings(newUrl: string) {
        const config = new DatabaseConfig(); // Erstellt noch eine Instanz!
        config.setConnectionString(newUrl);
        console.log(`Admin hat URL geändert auf: ${config.connectionString}`);
    }
}