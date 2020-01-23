const request = (method, data) => {
    return {
        method,
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
};

export default request;