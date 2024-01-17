import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <nav>
        {/* Left side */}
        <ul>
            <li>
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink to='/all'>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/clothes'>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics'>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/furnitures'>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/toys'>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/others'>
                    Others
                </NavLink>
            </li>
        </ul>


        {/* Right Side */}
        <ul>
            <li>
                email@email.com
            </li>
            <li>
                <NavLink to='/my-orders'>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/sign-in'>
                    Sign In
                </NavLink>
            </li>
            <li>
                🛒 0
            </li>
        </ul>
    </nav>
  )
}

export default navbar