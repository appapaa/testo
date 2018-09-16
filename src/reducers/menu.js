import {SET_MEMU} from "../constants/actions";

const _ = window._;
const initialState = {
    list:[
        {
            id: 1,
            name: 'комната1',
            type: 1 //--0 закрыто, 1 - лькоыьл 2 - пройдено
        },
        {
            id: 2,
            name: 'комната2',
            type: 1 //--0 закрыто, 1 - лькоыьл 2 - пройдено
        },
        {
            id: 3,
            name: 'комната3',
            type: 0 //--0 закрыто, 1 - лькоыьл 2 - пройдено
        },
        {
            id: 4,
            name: 'комната4',
            type: 0 //--0 закрыто, 1 - лькоыьл 2 - пройдено
        },
        {
            id: 5,
            name: 'комната5',
            type: 0 //--0 закрыто, 1 - лькоыьл 2 - пройдено
        },
        {
            id: 6,
            name: 'комната6',
            type: 0 //--0 закрыто, 1 - лькоыьл 2 - пройдено
        }
    ]

};
export default function menu(state = initialState, action) {
    switch (action.type) {
        case SET_MEMU: {
            return _.extend({}, state, action.data)
        }
        default:
            return state
    }
}