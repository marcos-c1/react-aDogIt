import './index.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './frontend/components/Header'
import Login from './frontend/components/Login'
import Main from './frontend/components/Main'

function App() {
  const [logins, setLogins] = useState([])

  useEffect(() => {
    

    fetchUsers()
  }, [])

  // Busca o usuário
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()
    console.log(data)
  }
  const addUser = (login) => {
    const id = Math.ceil(Math.random()*10000+1)
    const newLogin = {id, ...login}
    setLogins([...logins, newLogin])
    console.log(...logins)
  } 
  return (
    <Router>
      <Route exact path="/" render={() => (
        <div className="container">
        <Header />
        <Login onAdd={addUser}/>
        </div>
      )} />
      <Route path="/main" component={Main}/>
    </Router>
    
  );
}

export default App;
