import React from 'react'

import { ExampleComponent, Login } from 'klasslife_lib'
import 'klasslife_lib/dist/index.css'

const App = () => {
  const data = {
    email : "test",
    password : "test"
  }
  return <>
    <ExampleComponent text="Create React Library Example 😄" />
    <button onClick={ () => Login("https://klasslifegpeetna.loophole.site/api/login", data)}>test</button>
  </>
}

export default App
