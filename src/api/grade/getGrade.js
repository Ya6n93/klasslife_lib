import axios from '../../lib/axios'

const getGrade = async (url, token, id) => {
  const response = await axios.get(`${url}/grades/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
