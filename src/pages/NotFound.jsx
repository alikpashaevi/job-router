import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa facere, delectus non et voluptatibus eveniet magni! Debitis, dignissimos? Magnam labore, perspiciatis deserunt reiciendis aperiam sed aspernatur consectetur debitis culpa.</p>

      <p>Go to the <Link to='/'>Home Page</Link>.</p>
    </div>
    
  )
}

export default NotFound