import axios from '../../lib/axios'

const getStudentActivities = async (url, filters) => {
  const response = await axios.get(`${url}/activities${filters}`)

  return response
}

export { getStudentActivities }
