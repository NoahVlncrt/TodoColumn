import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import TaskColumn from '../components/TaskColumn'

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Home() {
  let [person, setPerson] = useState('')
  const { data: fetchedPerson, fetchedPersonError } = useSWR('/api/allPeople', fetcher, { refreshInterval: 500 })


  let createPerson = () => {
    const body = { name: person }
    fetch(`http://localhost:3000/api/newPerson`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
    setPerson('')
  }


  if (fetchedPersonError) return <div>failed to load</div>

  return (
    <div>
      <h1>Scuffed ToDo list but there is columns</h1>
      <div>
        <input type="text" value={person} onChange={e => setPerson(e.target.value)} />
        <button onClick={() => createPerson()}>Create person</button>
      </div>
      <div className='flex flex-row'>
        {fetchedPerson.map(person => {
          return <TaskColumn data={person}/>
        })}
      </div>
    </div>
  )
}