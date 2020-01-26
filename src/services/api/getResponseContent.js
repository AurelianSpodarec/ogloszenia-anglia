const getResponseContent = async function (response) {
    const contentType = response.headers.get('Content-Type')

    if (contentType) {
        if (contentType.match('image')) {
            return await response.blob()
        }

        if (contentType.match('application/json')) {
            return await response.json()
        }

        if (contentType.match('application/zip')) {
            return await response.blob()
        }
    }
}
export default getResponseContent;


// export function createApiGetAll(endpoint, query = '') {
//     return function apiGetAll() {
//       return api.get(`${endpoint}${query}`)
//     }
//   }


//   const ENDPOINT = 'users'

//   export const getUsers = createApiGetAll(ENDPOINT)