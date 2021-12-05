import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Comments } from '../entities/comments.entity';
export declare class CommentsService {
    private commentsRepository;
    constructor(commentsRepository: Repository<Comments>);
    create(comments: Comments): Promise<Comments>;
    readAll(): Promise<Comments[]>;
    update(comments: Comments): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
