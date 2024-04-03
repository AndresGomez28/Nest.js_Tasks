import { Injectable } from '@nestjs/common';
import { Task } from './tasks.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: Task): Task {
    this.tasks.push(task);
    return task;
  }

  updateTask(id: number, updatedTask: Task): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
      return this.tasks[taskIndex];
    }
    return null;
  }

  deleteTask(id: number): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const deletedTask = this.tasks.splice(taskIndex, 1);
      return deletedTask[0];
    }
    return null;
  }
}
