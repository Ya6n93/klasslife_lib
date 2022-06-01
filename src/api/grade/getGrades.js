import axios from '../../lib/axios'

async function getGrades(token) {
  const response = await axios.get('/grades', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getGrades }
