import axios from '../../lib/axios'

const getStudent = async (url, token, studentId) => {
  const response = await axios.get(`${url}/students/${studentId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getStudent }
