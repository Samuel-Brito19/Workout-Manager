import * as Styled from './styles/style'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (

    <Styled.Container>
      <div>

        <Styled.LoginWrap>
          <form>
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
            <button>Login</button>
          </form>
        </Styled.LoginWrap>


      </div>
    </Styled.Container >

  )
}

export default App
