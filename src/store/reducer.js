import { combineReducers } from 'redux'
import menu from '../reducers/menu'
import pop from '../reducers/pop'

export default combineReducers({
    menu,
    pop
})