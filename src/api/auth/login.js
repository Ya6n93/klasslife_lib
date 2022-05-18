import axios from 'axios'
import { setAccessToken } from '../../utils/access_token'

async function Login(data) {
  try {
    console.log(data)
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      data
    )
    setAccessToken(response.data.token)
    return response.data
  } catch (error) {
    return { error: error.response.data.message }
  }
}

export { Login }
