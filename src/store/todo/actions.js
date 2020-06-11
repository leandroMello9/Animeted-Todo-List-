export function addTodo(todo) {
  return {
    type: 'CREATE/TODO',
    payload: { todo },
  };
}
export function updatedTodo(oldId, newTodo) {
  return {
    type: 'UPDATED/TODO',
    payload: { oldId, newTodo },
  };
}
export function deleteTodo(todo) {
  const { id } = todo;
  return {
    type: 'REMOVE/TODO',
    payload: { id },
  };
}
export function isFavority(todo) {
  return {
    type: 'FAVORITE/TODO',
    payload: { todo },
  };
}
