import axios from '../../lib/axios'

const updateGrade = async (url, token, id, data) => {
  const response = await axios.put(`${url}/grades/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateGrade }
