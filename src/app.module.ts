import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Products } from './entities/products.entity';
import { Dishes } from './entities/dishes.entity';
import { Comments } from './entities/comments.entity';
import { CommentsService } from './comments/comments.service';
import { CommentsController } from './comments/comments.controller';
import { DishesService } from './dishes/dishes.service';
import { DishesController } from './dishes/dishes.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'root',
      database: 'food_project',
      entities: [
        Products, Dishes, Comments
      ],
      // entities: ['../typeorm/entities/*.ts'],

      synchronize: true,
    }),
    TypeOrmModule.forFeature([Comments, Dishes]),
  ],
  controllers: [AppController, CommentsController, DishesController],
  providers: [AppService, CommentsService, DishesService],
})
export class AppModule {}

