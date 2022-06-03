import axios from '../../lib/axios'

const createGrade = async (url, token, data) => {
  const response = await axios.post(`${url}/grades`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createGrade }
