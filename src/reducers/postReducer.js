export default function postReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_POST':
            return [...state,
                Object.assign({}, action.post)
            ];

        default:
            return state;
    }
}