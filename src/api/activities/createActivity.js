import axios from 'axios'

const createActivity = async (token, data) => {
  const { res } = await axios.post(
    `${process.env.REACT_APP_API_URL}/activities`,
    data,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return res
}

export { createActivity }
