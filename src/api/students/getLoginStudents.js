import axios from '../../lib/axios'

const getLoginStudents = async (url, filters) => {
  const response = await axios.get(`${url}/students${filters}`)

  return response
}

export { getLoginStudents }
