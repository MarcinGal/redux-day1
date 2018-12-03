const ADD_TODO = 'ADD_TODO'
const FILTERED_TODO = 'FILTERED=TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const INITIAL_STATE = {
    allTodos: [],
    visibleTodos: []
}

export const addTodo = text => ({
    type: ADD_TODO,
    text
})

export const filterTodos = text => ({
type: FILTERED_TODO,
input: text
})

export const toggleTodo = text => ({
    type: TOGGLE_TODO,
    input: text
})

export const deletedTodos = text => ({
    type: DELETE_TODO,
    input: text
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = { text: action.text, completed: false }
            // [...state, newTodo]
            return {
                ...state,
                allTodos: [...state.allTodos, newTodo]
            }
            case FILTERED_TODO:
            return {
                ...state,
                visibleTodos: state.allTodos.filter(todo => todo.text.includes(action.input))
            }
            case TOGGLE_TODO:
            return {
                ...state,
                allTodos: state.allTodos.map((todo, index) =>(index === action.input) ?
                {...todo, completed: !todo.completed }
                   : todo
                )
            }
            case DELETE_TODO:
            return {
                ...state,
                allTodos: state.allTodos.filter((todo, index) => !(index === action.input))
            }
        default:
            return state
    }
}