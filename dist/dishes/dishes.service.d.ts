import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Dishes } from '../entities/dishes.entity';
export declare class DishesService {
    private dishesRepository;
    constructor(dishesRepository: Repository<Dishes>);
    create(dishes: Dishes): Promise<Dishes>;
    readAll(): Promise<Dishes[]>;
    update(dishes: Dishes): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
