import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CarDetail from '../CarDetail'

export default function Car() {
    const { id } = useParams()
    const [car, setCar] = useState({})
    // retrive the bouty from the server
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/cars/${id}`)
            .then(response => {
                console.log(response)
                setCar(response.data)
            })
            .catch(console.warn)
    }, [id])
    return (
        <div>
            <CarDetail 
            car={car}
            />
            <button>Edit</button>
        </div>
    )
}