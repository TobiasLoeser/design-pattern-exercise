export class EmailService {
    sendConfirmation(orderId: number) {
        console.log(`📧 Email: Bestellung #${orderId} bestätigt.`);
    }
}
