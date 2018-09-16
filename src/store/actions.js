
export const SET_STATE = 'SET_STATE';

export const setState = (data) => {
    return {
        type: SET_STATE,
        data: data
    }
};