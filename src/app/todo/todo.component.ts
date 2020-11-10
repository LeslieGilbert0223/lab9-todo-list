import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  //properties of a class go ABOVE the constructor
  todos: Todo[] = [
    {
      task: 'Eat Dinner',
      completed: false,
    },
    {
      task: 'Do Laundry',
      completed: true,
    },
    {
      task: 'Feed Guinea Pig',
      completed: true,
    },
    {
      task: 'Put Clothes Away',
      completed: false,
    },
    {
      task: 'Make Dinner',
      completed: false,
    },
  ];

  taskSearchTerm: string = '';

  constructor() {}
  // methods go AFTER the constructor

  ngOnInit(): void {}

  // Adds a new task to the list/array
  addTask = (form: NgForm): void => {
    let newTask: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.todos.push(newTask);
    form.reset();
  }; // End of addTask function

  // Removing a task from the list
  removeTask = (index: number): void => {
    this.todos.splice(index, 1);
  };

  // Complete task button
  completeTask = (index: number): void => {
    this.todos[index].completed = true;
  };

  // Filtering thru the task list
  filterTasks = (): Todo[] => {
    if (!this.taskSearchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentTask = todo.task.toLowerCase().trim();
        return currentTask.includes(this.taskSearchTerm.toLowerCase().trim());
      });
    }
  }; // End of filterTasks

  setTaskSearchTerm = (form: NgForm): void => {
    this.taskSearchTerm = form.value.searchTerm;
  };
} // End of main export function
