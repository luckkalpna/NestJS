import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from './env/env.service';
import { EnvController } from './env/env.controller';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController, UserController, ProductController, MynameController, UserRolesController, ExceptionController, DatabaseController, EnvController],
  providers: [AppService, ProductService, DatabaseService, EnvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
