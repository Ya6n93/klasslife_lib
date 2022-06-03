import axios from '../../lib/axios'

const getActivities = async (url, token) => {
  const response = await axios.get(`${url}/activities`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getActivities }
