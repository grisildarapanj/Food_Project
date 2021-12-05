import { DishesService } from './dishes.service';
import { Dishes } from '../entities/dishes.entity';
export declare class DishesController {
    private dishesService;
    constructor(dishesService: DishesService);
    read(): Promise<Dishes[]>;
    create(dishes: Dishes): Promise<any>;
    update(id: any, dishes: Dishes): Promise<any>;
    delete(id: any): Promise<any>;
}
