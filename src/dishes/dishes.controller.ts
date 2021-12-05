import { Controller, Get, Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { DishesService } from './dishes.service';
import { Dishes } from  '../entities/dishes.entity';

@Controller('dishes')
export class DishesController {
    constructor(private dishesService: DishesService){
    }
    @Get()
    read(): Promise<Dishes[]> {
      return this.dishesService.readAll();
    }
    
    @Post('create')
    async create(@Body() dishes: Dishes): Promise<any> {
      return this.dishesService.create(dishes);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() dishes: Dishes): Promise<any> {
        dishes.id = Number(id);
        return this.dishesService.update(dishes);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.dishesService.delete(id);
    }
}
