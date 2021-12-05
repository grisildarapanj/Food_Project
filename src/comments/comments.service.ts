import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from  'typeorm';
import { Comments } from '../entities/comments.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comments)
        private commentsRepository: Repository<Comments>
    ) { }
    async create(comments: Comments): Promise<Comments> {
        return await this.commentsRepository.save(comments);
    }
    
    async  readAll(): Promise<Comments[]> {
        return await this.commentsRepository.find();
    }

    async update(comments: Comments): Promise<UpdateResult> {

        return await this.commentsRepository.update(comments.id,comments);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.commentsRepository.delete(id);
    }
}
