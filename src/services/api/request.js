import { RequestError } from './RequestError';

import config from './../config';
import getResponseContent from './getResponseContent';

const request = async function (endpoint, method, data) {
    const response = await fetch(`${config.API_URL}/${endpoint}`, {
        method,
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const content = await getResponseContent(response)

    if (response.ok) {
        return content
    }

    throw new RequestError(response.statusText, response.status, content)
}

export default request;