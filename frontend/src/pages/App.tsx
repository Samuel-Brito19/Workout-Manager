import * as Styled from '../styles/style'
import { useState } from 'react'
import { api } from '../services/api'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await api.post('/auth', {
        email,
        password
      })
      console.log(response.data)
      const { user, token } = response.data
      console.log(user, token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Styled.Container>
      <div>

        <Styled.LoginWrap onSubmit={handleLogin}>
          <div>
            <h2>LOGIN</h2>
            <div>

              <input type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Email" />
            </div>
            <div>

              <input type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Password" />
            </div>
            <button type="submit">Login</button>
          </div>
        </Styled.LoginWrap>


      </div>
    </Styled.Container >

  )
}

export default App
