import axios from '../../lib/axios'

async function getGrade(token, id) {
  const response = await axios.get(`/grades/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
