import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/?key=16686655-4ef7ec615da889351893ebc22&image_type=photo&orientation=horizontal'
export const addImages = async (value, page = 1) => {
    const response = await axios.get(`&q=${value}&page=${page}&per_page=20`)
    return response.data
}