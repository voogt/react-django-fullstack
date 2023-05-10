import axios from "axios";
import {GET_LEADS} from './types';

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
    .then(res => {
        console.log(res.data)
        dispatch({
            type: GET_LEADS,
            payload: res.data
        })
    }).catch( err => console.log(err));
}