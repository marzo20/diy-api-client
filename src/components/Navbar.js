import { Link } from 'react-router-dom'
export default function Navbar(){
    return(
        <div>
            <Link to='/'>Home</Link>{'  |  '}
            <Link to='/cars'>Used Car List</Link>{'  |  '}
            <Link to='/history'>Car History</Link>
        </div>
    )
}