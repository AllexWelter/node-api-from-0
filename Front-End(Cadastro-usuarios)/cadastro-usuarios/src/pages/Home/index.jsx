import { useEffect, useState, useRef } from 'react'   //React Hooks
import './style.css'
import Trash from '../../assets/trash.png'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAddress = useRef()
  const inputEmail = useRef()


  async function getUsers() {

    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  async function createUsers() {

    await api.post('/usuarios', {
      name: inputName.current.value,
      address: inputAddress.current.value,
      email: inputEmail.current.value
    })
    
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text' ref={inputName} />
        <input placeholder='Endereço' name='endereço' type='text' ref={inputAddress} />
        <input placeholder='Email' name='email' type='email' ref={inputEmail} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Endereço: <span>{user.address}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>

  )
}

export default Home
