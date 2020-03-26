import {FETCH_TRACKS} from '../actions/Type';

export default (state=[],action) => {
    const {type,payload} = action;

    switch(type) {
        case FETCH_TRACKS:
            return payload;
        default:
            return state;
    }
}