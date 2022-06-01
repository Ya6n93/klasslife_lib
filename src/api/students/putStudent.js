import axios from '../../lib/axios'

const putStudent = async (token, studentId, data) => {
  const response = await axios.put(`/students/${studentId}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { putStudent }
