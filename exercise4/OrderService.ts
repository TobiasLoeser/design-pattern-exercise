import { InventoryService } from './inventoryService';
import { EmailService } from './emailService';

export class OrderService {
    private emailService = new EmailService();
    private inventoryService = new InventoryService();

    createOrder(id: number) {
        console.log(`--- Neue Bestellung #${id} wird verarbeitet ---`);

        this.emailService.sendConfirmation(id);
        this.inventoryService.updateStock(id);
        // ... weitere Services aufrufen, wenn Sie ergänzt werden :(
    }
}
