import { CommentsService } from './comments.service';
import { Comments } from '../entities/comments.entity';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    read(): Promise<Comments[]>;
    create(comments: Comments): Promise<any>;
    update(id: any, comments: Comments): Promise<any>;
    delete(id: any): Promise<any>;
}
