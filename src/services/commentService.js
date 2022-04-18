import {constants} from '../constants/constants';

export const commentService = {
    getAllComments: () => fetch(constants.apiUrl + 'comments').then(value => value.json())
}