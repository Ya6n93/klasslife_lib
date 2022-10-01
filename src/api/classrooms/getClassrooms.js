import axios from '../../lib/axios'

const getClassrooms = async (url) => {
  const response = await axios.get(`${url}/classrooms`)

  return response
}

export { getClassrooms }
