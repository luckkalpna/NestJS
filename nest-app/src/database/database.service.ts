import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  private isConnected = false;

  onModuleInit() {
    this.isConnected = true;
    console.log("Database Connected!");
  }

  onApplicationShutdown(signal: string) {
    this.isConnected = false;
    console.log(`Database Disconnected due to shutdown. Signal: ${signal}`);
  }

  getStatus() {
    return this.isConnected ? "Connected" : "Disconnected";
  }
}
