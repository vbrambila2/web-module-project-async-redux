import axios from 'axios';
import { 
    FETCH_ACT
} from './types';

export const fetchAct = () => dispatch => {
    axios.get('https://www.boredapi.com/api/activity')
        .then(res => {
            dispatch({ type: FETCH_ACT, payload: res.data })
        })
        .catch(err => console.error(err))
}