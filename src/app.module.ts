import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [ProductsModule, UsersModule, ProductModule, MeetingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
