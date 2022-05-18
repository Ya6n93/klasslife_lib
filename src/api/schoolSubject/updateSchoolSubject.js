import axios from 'axios'
import { getAccessToken } from '../../utils/access_token'

async function updateSchoolSubject(id, data) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/school_subjects/` + id,
      { headers: { Authorization: `Bearer ${getAccessToken()}` }, data}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { updateSchoolSubject }