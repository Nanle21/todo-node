import {
  Body, Controller, Delete,
  Get,
  Param, ParseIntPipe, Patch,
  Post
} from '@nestjs/common';
import { Todo } from './Todo.entity';
import { TodoService } from './todo.service';

/**
 * ### 
 *  - Controllers are responsible for handling incoming requests and returning responses to the client.


 *  ----
 *  @example 
 *  Copy and paste function is the best...
 *  ----
 *  @version 22.09.13
 *  -  *Brief changelog*
 *  @author  NL
 *  
 **/
@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.getTodos();
  }

  @Get(`:id`)
  findOne(@Param('id', ParseIntPipe) id) {
    return this.todoService.findOne(id);
  }

  @Post() create(@Body() todo: Todo) {
    return this.todoService.createTodo(todo);
  }

  @Patch(':id')
  async editTodo(@Body() todo: Todo, @Param('id') id: number): Promise<Todo> {
    const todoEdited = await this.todoService.editTodo(id, todo);

    return todoEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.todoService.remove(id);
  }
}
