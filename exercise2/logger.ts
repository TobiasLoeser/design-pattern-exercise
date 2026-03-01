import { DatabaseConfig } from "./databaseConfig.ts";

export class Logger {
    logAction(action: string) {
        const config = new DatabaseConfig(); // Erstellt neue Instanz
        console.log(`Logge "${action}" an ${config.connectionString}`);
    }
}