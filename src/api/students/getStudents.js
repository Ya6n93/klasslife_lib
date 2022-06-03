import axios from '../../lib/axios'

const getStudents = async (url, token) => {
  const response = await axios.get(`${url}/students`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getStudents }
