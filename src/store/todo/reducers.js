import produce from 'immer';

const INITIAL_STATE = {
  todo: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'CREATE/TODO': {
        const c = [...draft.todo, action.payload];
        draft.todo = c;

        break;
      }
      case 'REMOVE/TODO': {
        const c = draft.todo.filter(
          (element) => element.todo.id !== action.payload.id
        );

        draft.todo = c;

        break;
      }
      case 'FAVORITE/TODO': {
        const l = draft.todo.findIndex(
          (element) => element.todo.id === action.payload.todo.id
        );
        if (draft.todo[l].todo.status) {
          draft.todo[l].todo.status = false;
        } else {
          draft.todo[l].todo.status = true;
        }
        break;
      }
      case 'UPDATED/TODO': {
        const { newTodo, oldId } = action.payload;
        const todo = {
          todo: {
            ...newTodo,
          },
        };

        const a = draft.todo.findIndex((element) => element.todo.id === oldId);

        if (a < 0) {
          break;
        } else {
          draft.todo[a] = todo;
        }
        break;
      }

      default:
        return state;
    }
  });
}
