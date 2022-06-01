import axios from '../../lib/axios'

async function getStudents(token) {
  const response = await axios.get('/students', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getStudents }
