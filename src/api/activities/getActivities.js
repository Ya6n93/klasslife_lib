import axios from '../../lib/axios'

async function getActivities(token) {
  const response = await axios.get('/activities', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getActivities }
