import React from 'react'
import "./Products.scss"
import { useDispatch } from 'react-redux'
import { AiFillPlusCircle } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { getSneakersAC } from '../../redux/snakersReducer'
import axios from 'axios'

function Products({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToSneakersPage = (sneakers) => {
    const id = sneakers.id
    //dispatch(getSneakersAC(sneakers))
    axios.get(`https://6384b0ac3fa7acb14ffd7b94.mockapi.io/items/${id}`)
    .then(response => dispatch(getSneakersAC(response.data)))
    return navigate(`/products/${id}`)
  }

  return (
    <div className='product' onClick={() => goToSneakersPage(product)}>
      <img src={product.img} />
      <h3>{product.name}</h3>
      <div className='product-description'>
        <p>price : <b>{product.price}$</b></p>
        <AiFillPlusCircle />
      </div>
    </div>
  )
}

export default Products