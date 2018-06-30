const homeReducer = (state = {
    results: [],
    isFetching: false
}, action,) => {
    switch (action.type) {
        case 'SEARCH_RESULTS_RECEIVED':
            const retrievedResults = action.results;
            const {total_count} = retrievedResults;
            const items = retrievedResults.items || retrievedResults;
            
            const minimalData = items.map(item => ({
                url: item.avatar_url, 
                login: item.login
                })
            );
            
            return {
                ...state,
                isFetching: false,
                results: minimalData,
                total_count
            };
        case 'TRIGGER_FETCH':
            return {
                ...state,
                results: []
            };
        case 'FETCHING_DATA':
            return {
                ...state,
                isFetching: true
            }

        default:
            return state;
    }
};

export default homeReducer;