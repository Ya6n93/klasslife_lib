import axios from '../../lib/axios'

const deleteGrade = async (url, token, id) => {
  const response = await axios.delete(`${url}/grades/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteGrade }
