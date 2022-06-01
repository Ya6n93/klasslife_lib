import axios from '../../lib/axios'

const createClassroom = async (token, data) => {
  const response = await axios.post('/classrooms', data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createClassroom }
