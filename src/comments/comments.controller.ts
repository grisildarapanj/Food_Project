import { Controller, Get, Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comments } from  '../entities/comments.entity';


@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService){
    }
    @Get()
    read(): Promise<Comments[]> {
      return this.commentsService.readAll();
    }
    
    @Post('create')
    async create(@Body() comments: Comments): Promise<any> {
      return this.commentsService.create(comments);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() comments: Comments): Promise<any> {
        comments.id = Number(id);
        return this.commentsService.update(comments);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.commentsService.delete(id);
    }
}
