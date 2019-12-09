import config from './../config';

export const getCars = async () => {
    const res = await fetch(`${config.apiUrl}cars`)
    return await res.json();
}