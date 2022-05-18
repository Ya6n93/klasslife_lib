import axios from 'axios'
import { getAccessToken } from '../../utils/access_token'

async function deleteSchoolSubject(id) {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/school_subjects/` + id,
      { headers: { Authorization: `Bearer ${getAccessToken()}` }}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { deleteSchoolSubject }