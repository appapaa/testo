import {SET_INFO} from "../constants/actions";

// const _ = window._;
// const t = 1;
export const setState = (data) => {
    return {
        type: SET_INFO,
        data: data
    }
};
export const testHidePops = (data) => {
    return (dispatch, getState) => {
        const {visibleInfo, visibleVerdict} = getState().pop;
        if (visibleInfo || visibleVerdict) {
            dispatch(hideInfo());
            setTimeout(() =>
                dispatch({
                    type: SET_INFO,
                    data
                }).t * 1000);
        }
        else{
            dispatch({
                type: SET_INFO,
                data
            })
        }
    }

}
export const toggleVisibleInfo = () => {
    return (dispatch, getState) => {
        const {visibleInfo} = getState().pop;
        dispatch(testHidePops({visibleInfo: !visibleInfo}));
    }
};
export const toggleVisibleVerdict = () => {
    return (dispatch, getState) => {
        const {visibleVerdict} = getState().pop;
        dispatch(testHidePops({visibleVerdict: !visibleVerdict}));
    }
};
export const hideInfo = () => {
    return {
        type: SET_INFO,
        data: {
            visibleInfo: false,
            visibleVerdict: false,

        }
    }
};
export const showZoomView = () => {
    return {
        type: SET_INFO,
        data: {
            visibleZoomView: true,

        }
    }
};
export const hideZoomView = () => {
    return {
        type: SET_INFO,
        data: {
            visibleZoomView: false,

        }
    }
};