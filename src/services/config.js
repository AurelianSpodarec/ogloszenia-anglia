const apiUrl = process.env.NODE_ENV === 'production' ? process.env.API_URL : process.env.REACT_APP_API_URL;

console.log("API URL: " apiUrl)
export default {
    apiUrl,
};