import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running! 🚀\n Please check https://smartize-store-back-m4-production.up.railway.app/docs for Swagger docs...';
  }
}
