import axios from '../../lib/axios'

async function createGrade(token, data) {
  const response = await axios.post('/grades', data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createGrade }
