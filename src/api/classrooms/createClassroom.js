import axios from '../../lib/axios'

const createClassroom = async (url, token, data) => {
  const response = await axios.post(`${url}/classrooms`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createClassroom }
