import {SET_MEMU} from "../constants/actions";

export const setState = (data) => {
    return {
        type: SET_MEMU,
        data: data
    }
};