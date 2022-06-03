import axios from '../../lib/axios'

const getActivity = async (url, token, activityId) => {
  const response = await axios.get(`${url}/activities/${activityId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getActivity }
