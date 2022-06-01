import axios from '../../lib/axios'

async function getStudent(token, studentId) {
  const response = await axios.get(`/students/${studentId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getStudent }
