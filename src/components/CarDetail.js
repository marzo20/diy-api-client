export default function CarDetail({ car }){
    return (
        <div>
            <h2>Make: {car.make}</h2>
            <h3>Model: {car.model}</h3>
            <h3>Year: {car.year}</h3>
            <h3>Type: {car.type}</h3>
        </div>
    )
}