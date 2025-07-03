import axios from 'axios';
//axios wrapper for API requests
 const apiClient = axios.create({
    baseURL: 'https://petstore.swagger.io/v2',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient
