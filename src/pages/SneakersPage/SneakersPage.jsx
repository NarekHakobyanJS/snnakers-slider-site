import React from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from "react-redux"
import Sneakers from '../../components/Sneakers/Sneakers'

function SneakersPage() {
    const id = useParams()
    const sneakers = useSelector(state => state.sneakersPage.sneakers)
    let sneakersItem = sneakers.map(sn => <Sneakers key={sn.id} sneakers={sn}/>)
    return (
        <div>
           {sneakersItem}
        </div>
    )
}

export default SneakersPage