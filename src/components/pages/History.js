import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function History(){
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchCars = async() => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/history`)
                // console.log(response.data)
                setCars(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchCars()
    },[])
    const carList = cars.map((car, i) => {
        return (
        <p key={`car${i}`}>{car.model} : {car._id}</p>
        )
    })
    return(
        <div>
            {carList}
        </div>
    )
}