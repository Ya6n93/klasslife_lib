import axios from '../../lib/axios'

async function updateGrade(token, id, data) {
  const response = await axios.put(`/grades/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateGrade }
