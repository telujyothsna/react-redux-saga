export const defaultFetchUsers = () => ({
    type: 'TRIGGER_FETCH',
    url: 'https://api.github.com/users',
    params: {
        params: {
            since: '1005'
        }
    }
});

export const triggerFetch = q => ({
    type: 'TRIGGER_FETCH',
    url: 'https://api.github.com/search/users',
    params: {
        params: {
            q
        }
    }
});

export const triggerFetchMore = () => ({
    type: 'TRIGGER_FETCH_MORE'
});


export const textChanged = (text) => ({
    type: 'TEXT_CHANGED',
    text
})