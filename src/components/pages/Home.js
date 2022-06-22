import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CarForm from '../../CarForm'

export default function Home(){
    const [cars, setCars] =useState([])
    const [err, setErr] = useState('')
    useEffect (() => {
        const fetchCars = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/cars`)
                console.log(response)
                setCars(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchCars()
    },[])
    const carList = cars.map((car, i) => {
        return(
        <div key={`car${i}`}><Link to={`/cars/${car._id}`}>{car.make} : {car._id}</Link></div>
        )
    })
    const handleSubmit = async (e, form, setForm) => {
        e.preventDefault()
        try{
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/cars`,form)
            console.log(response)
            setCars([...cars, response.data])
            setForm({
                make: '',
                model: '',
                type: '',
                year: ''
            })
            setErr('')
        }catch(err){
            console.log(err)
            if (err.response) {
                if (err.response.status === 400) {
                    // this error is a validation error from our backend
                    setErr(err.response.data.msg)
                }
            }
        }
    }
    return(
        <div>
            <h2>Create new car</h2>
            <p>{err}</p>
            <CarForm 
            handleSubmit={handleSubmit}
            />
            {carList}
        </div>
    )
}