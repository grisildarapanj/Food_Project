import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from  'typeorm';
import { Dishes } from '../entities/dishes.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DishesService {
    constructor(
        @InjectRepository(Dishes)
        private dishesRepository: Repository<Dishes>
    ) { }
    async create(dishes: Dishes): Promise<Dishes> {
        return await this.dishesRepository.save(dishes);
    }
    
    async  readAll(): Promise<Dishes[]> {
        return await this.dishesRepository.find();
    }

    async update(dishes: Dishes): Promise<UpdateResult> {

        return await this.dishesRepository.update(dishes.id,dishes);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.dishesRepository.delete(id);
    }
}
