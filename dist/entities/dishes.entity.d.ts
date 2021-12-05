import { Comments } from './comments.entity';
import { Products } from './products.entity';
export declare class Dishes {
    id: number;
    dish_name: string;
    preparation_desc: string;
    image: string;
    comments: Comments[];
    rating: number;
    products: Products[];
}
