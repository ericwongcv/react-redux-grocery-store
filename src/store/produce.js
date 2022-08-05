import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const LIKE = 'produce/LIKE'

export const getAllProduce = (state) => Object.values(state.produce);

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    };
};

export const like = (id) => {
    return {
        type: LIKE,
        id
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            return {...action.produce};
        case LIKE: 
            const likeState = {...state};
            likeState[action.id - 1].liked = !likeState[action.id - 1].liked;
            return likeState;
        default:
            return state;
    };
};
