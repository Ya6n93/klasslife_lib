import axios from '../../lib/axios'

const getGrades = async (url, token) => {
  const response = await axios.get(`${url}/grades`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getGrades }
