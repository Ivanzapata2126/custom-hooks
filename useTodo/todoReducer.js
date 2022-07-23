export const todoReducer = (initialState,action = {}) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...initialState,action.payload];
        case '[TODO] delete todo':
            return initialState.filter(todo=>todo.id !== action.payload);
        case '[TODO] toggle todo':
            return initialState.map(todo=>{
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }

}