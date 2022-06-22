import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CarDetail from '../CarDetail'
import CarForm from '../../CarForm'

export default function Car() {
    let navigate = useNavigate()
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [showForm, setShowForm] = useState(false)
    // retrive the bouty from the server
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/cars/${id}`)
            .then(response => {
                console.log(response)
                setCar(response.data)
            })
            .catch(console.warn)
    }, [id])
    const handleSubmit = (e, form, setForm) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SERVER_URL}/cars/${id}`, form)
            .then(response => {
                console.log(response.data)
                setCar(response.data)
                setShowForm(false)
            })
            .catch(console.warn)
    }
    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/cars/${id}`)
            .then(response => {
                navigate('/cars')
            })
            .catch(console.warn)
    }
    return (
        <div>
            { showForm ?
               <CarForm 
               initialForm={car}
               handleSubmit={handleSubmit} /> :
               <CarDetail 
               car={car}
               /> 
               
            }
            
            <button onClick={e => setShowForm(!showForm)}>
                { showForm ? 'Cancel' : 'Edit'}
                </button>
            { showForm ? <button onClick={handleDelete}>Delete</button> : ''}
        </div>
    )
}