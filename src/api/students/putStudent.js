import axios from '../../lib/axios'

const putStudent = async (url, token, studentId, data) => {
  const response = await axios.put(`${url}/students/${studentId}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { putStudent }
