import './style.css'
import Trash from '../../assets/trash.png'

function Home() {

  const users = [
    {
      id: '233fdsgsg',
      name: 'Allex',
      address: 'rua 33',
      email: 'allex@hotmail.com'
    },
    {
      id: '244faeysg',
      name: 'Lulu',
      address: 'rua 44',
      email: 'lulu@hotmail.com'
    },
    {
      id: '255ftogsg',
      name: 'Joao',
      address: 'rua 55',
      email: 'joao@hotmail.com'
    },
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Endereço' name='endereço' type='text' />
        <input placeholder='Email' name='email' type='email' />
        <button type='button'>Cadastrar</button>
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
