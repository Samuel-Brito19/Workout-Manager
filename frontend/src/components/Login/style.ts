import styled from 'styled-components'


export const Container = styled.div`
height: 100vh;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color: #008080;

& h2 {
    font-size: 30px;
    color: teal;
    margin-bottom: 20px;
}
`

export const LoginWrap = styled.form`

width: 300px;
background-color: #b9e7e7;
border-radius: 10px;
overflow: hidden;
height: 400px;

& > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 50px;
}

& input {
    padding: 10px;
    border: none;
    border-bottom: 1px solid gray;
    width: 250px;

}

& button {
    cursor: pointer;
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    width: 150px;
    height: 40px;

}

`