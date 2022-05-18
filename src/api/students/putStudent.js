import axios from 'axios'
import { getAccessToken } from '../../utils/access_token'

const putStudent = async (studentId, data) => {
  const { res } = await axios.put(
    `${process.env.REACT_APP_API_URL}/students/${studentId}`,
    data,
    { headers: { Authorization: `Bearer ${getAccessToken()}` } }
  )
  return res
}

export { putStudent }
