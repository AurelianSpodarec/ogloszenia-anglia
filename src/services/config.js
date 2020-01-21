const apiUrl = process.env.NODE_ENV === 'production' ? 'https://example.com' : process.env.REACT_APP_API_URL;


export default {
    apiUrl,
};