import axios from 'axios'

async function getActivity(token, activityId) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/activities/${activityId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { getActivity }
