import './index.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'

function App() {
  const [logins, setLogins] = useState([])

  useEffect(() => {

		const getUsers = async () => {
			const UsersFromServer = await fetchUsers()
			setLogins(UsersFromServer)
		}

		getUsers()
		
  }, [])

  // Busca o usuário
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()
    //console.log(data)
  }
  
	// Adiciona o usuário 
  const addUser = async (user) => {
		const res = await fetch('http://localhost:5000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		})

		const data = await res.json()

		setLogins([...logins, data])
		console.log(...logins)
    // const id = Math.ceil(Math.random()*10000+1)
    // const newLogin = {id, ...login}
    // setLogins([...logins, newLogin])
    // console.log(...logins)
  } 

	
  return (
    <Router>
      <Route exact path="/" render={() => (
        <div className="container">
        	<Header />
        	<Login onAdd={addUser}/>
        </div>
      )} />
      <Route path="/main" exact render={() => (
				<>
				<Main />
				</>
			)}/>
    </Router>
    
  );
}

export default App;
