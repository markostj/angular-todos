import { TodosShowPipe } from './todos-show.pipe';

describe('TodosShowPipe', () => {
  it('create an instance', () => {
    const pipe = new TodosShowPipe();
    expect(pipe).toBeTruthy();
  });
});
