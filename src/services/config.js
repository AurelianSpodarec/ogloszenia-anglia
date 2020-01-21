const apiUrl = process.env.NODE_ENV === 'production' ? process.NODE_ENV.API_URL : process.env.REACT_APP_API_URL;


export default {
    apiUrl,
};