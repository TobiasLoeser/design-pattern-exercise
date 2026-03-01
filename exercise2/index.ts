import { Logger } from "./logger.ts";
import { AdminService } from "./adminService.ts";

var logger = new Logger();
var adminService = new AdminService();

// Ablauf in der App
logger.logAction("User Login"); 
adminService.updateSettings("192.168.1.50");
logger.logAction("User Logout");