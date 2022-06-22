import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home(){
    const [cars, setCars] =useState([])
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
        <div key={`car${i}`}>{car.make}</div>
        )
    })
    return(
        <div>
            {carList}
        </div>
    )
}