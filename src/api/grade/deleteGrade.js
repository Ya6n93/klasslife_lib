import axios from '../../lib/axios'

async function deleteGrade(token, id) {
  const response = await axios.delete(`/grades/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteGrade }
