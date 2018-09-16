import {SET_INFO} from "../constants/actions";

const _ = window._;
const initialState = {
    visibleInfo: false,
    visibleVerdict: false,
    visibleZoomView: false,
};
export default function pop(state = initialState, action) {
    switch (action.type) {
        case SET_INFO: {
            return _.extend({}, state, action.data)
        }
        default:
            return state
    }
}