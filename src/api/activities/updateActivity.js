import axios from '../../lib/axios'

const updateActivity = async (token, activityId, data) => {
  const response = await axios.put(`/activities/${activityId}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateActivity }
