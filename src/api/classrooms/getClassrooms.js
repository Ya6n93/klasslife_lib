import axios from '../../lib/axios'

const getClassrooms = async (url, token) => {
  const response = await axios.get(`${url}/classrooms`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getClassrooms }
