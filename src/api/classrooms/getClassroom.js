import axios from '../../lib/axios'

const getClassroom = async (url, classroomId) => {
  const response = await axios.get(`${url}/classrooms/${classroomId}`)

  return response
}

export { getClassroom }
