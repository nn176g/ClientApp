import { createStore } from 'redux';
import listReducer from './redux/estados'
function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocaStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const persistedState = loadFromLocaStorage()

const store = createStore(
    listReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store