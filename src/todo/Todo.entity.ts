import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

/**
 * ### 
 *  - Entity is a class that maps to a database table (or collection when using MongoDB). You can create an entity by defining a new class and mark it with @Entity():
 *  ----
 *  @example 
 *  import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

      @Entity()
      export class User {
          @PrimaryGeneratedColumn()
          id: number

          @Column()
          firstName: string

          @Column()
          lastName: string

          @Column()
          isActive: boolean
      }
 *  ----
 *  @version 22.09.13
 *  -  *Brief changelog*
 *  @author  NL
 *  
 **/

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 158 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  title: string;

  @Column()
  @MinLength(1)
  @IsString()
  description: string;

  @Column()
  @IsBoolean()
  todoStatus?: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
