import axios from '../../lib/axios'

const getClassrooms = async (token) => {
  const response = await axios.get('/classrooms', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getClassrooms }
