import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './Todo.entity';

/**
 * ### 
 *  - Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a dependency; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system.


 *  ----
 *  @example 
 *  Copy and paste function is the best...
 *  ----
 *  @version 22.09.13
 *  -  *Brief changelog*
 *  @author  NL
 *  
 **/
@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private TodosRepository: Repository<Todo>,
  ) {}
  async getTodos(): Promise<Todo[]> {
    return await this.TodosRepository.find();
  }

  findOne(id: any | string): Promise<Todo> {
    return this.TodosRepository.findOne({ where: { id: id } });
  }

  async createTodo(todo: Todo) {
    this.TodosRepository.save(todo);
  }

  async remove(id: string) {
    await this.TodosRepository.delete(id);
  }

  async editTodo(id: any | number, todo: Todo) {
    const editedTodo = await this.TodosRepository.findOne({ where: { id: id } });

    if (!editedTodo) {
      throw new NotFoundException('Todo is not found');
    }

    editedTodo.description = todo.description;
    editedTodo.title = todo.title;
    editedTodo.todoStatus = todo.todoStatus;

    await editedTodo.save();

    return editedTodo;
  }
}
