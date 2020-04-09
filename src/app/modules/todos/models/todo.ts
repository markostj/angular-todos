export class Todo {
  constructor(
    public name: string,
    public date: string,
    public completed: boolean,
    public id: string
  ) {}
}

export interface Todo {
  name: string;
  date: string;
  completed: boolean;
  id: string;
}
