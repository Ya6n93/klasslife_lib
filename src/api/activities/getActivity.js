import axios from '../../lib/axios'

async function getActivity(token, activityId) {
  const response = await axios.get(`/activities/${activityId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getActivity }
