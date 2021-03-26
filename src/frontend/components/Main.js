import { useState, useEffect } from 'react'

const Main = () => {
	const [id, setId] = useState()
  const [name, setName] = useState('')
  const [race, setRace] = useState('')
  const [price, setPrice] = useState('')
	const [animals, setAnimals] = useState([])

	useEffect(() => {
			const getAnimals = async () => {
				const AnimalsFromServer = await fetchAnimals()
				setAnimals(AnimalsFromServer)
			}

			getAnimals()
	})

	// Busca animais
	const fetchAnimals = async () => {
		const res = await fetch('http://localhost:5000/animals')
		const data = await res.json()

		return data
	}

	// Busca animais pelo ID
	const fetchAnimalsById = async (id) => {
		const res = await fetch(`http://localhost:5000/animals/${id}`)
		const data = await res.json()

		return data
	}

	// Adiciona animais
	const addAnimals = async (animal) => {
		const res = await fetch('http://localhost:5000/animals', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(animal)
		})

		const data = await res.json()

		setAnimals([...animals, data])
		console.log(...animals)
	}

	//Atualiza animal pelo o ID
	const updAnimals = async (id, animal) => {
		const animalToChange = await fetchAnimals(id)
		const upd = {...animalToChange, id: animal.id, name: animal.name, race: animal.race, price: animal.price}

		const res = await fetchAnimals(`http://localhost:5000/animals/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type' : 'application/json',
			},
			body: JSON.stringify(upd)
		})

		const data = res.json()

		setAnimals(
			animals.map((animal) => animal.id === id ? {
				...animal,  id: data.id, name: data.name, race: data.race, price: data.price
			} : animal)
		)
	}

	//Deleta animal pelo ID
	const deleteAnimals = async (id) => {
		await fetch(`http://localhost:5000/animals/${id}`, {
			method: 'DELETE'
		})

		setAnimals(animals.filter((animal) => animal.id !== id))
	}

	const addEvent = (e) => {
		if(!id || !name || !race || !price){
			alert('Há campos vazios')
			return
		}
		addAnimals({ id, name, race, price })
		alert('Animal adicionado!')
	}

	const updEvent = (e) => {
		if(!id || !name || !race || !price){
			alert('Há campos vazios')
			return
		}
		updAnimals( { id} , { id, name, race, price })
		alert(`Animal ${id} - ${name} atualizado!`)
	}

	const delEvent = (e) => {
		if(!id || !name || !race || !price){
			alert('Há campos vazios')
			return
		}
		deleteAnimals({ id })
		alert('Animal deletado!')
	}

	const findEvent = (e) => {
		if(!id || !name || !race || !price){
			alert('Há campos vazios')
			return
		}
		const animal = fetchAnimalsById( { id })
		alert(animal)
	}
  return (
    <form className='add-form'>
			<div className='form-control'>
        <label>Id</label>
        <input
          type='number'
          placeholder='Id'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Animal</label>
        <input
          type='text'
          placeholder='Nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Raça</label>
        <input
          type='text'
          placeholder='Raça'
          value={race}
          onChange={(e) => setRace(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Preço</label>
        <input
          type='text'
					placeholder='Preço'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button value='Adicionar'  onClick={addEvent} className='btn btn-add'>Adicionar</button>
			<button value='Atualizar' onClick={updEvent} className='btn btn-att'>Atualizar</button>
			<button value='Deletar' onClick={delEvent} className='btn btn-del'>Deletar</button>
			<button value='Procurar' onClick={findEvent} className='btn btn-find'>Procurar</button>
    </form>
  )
      
}

export default Main
