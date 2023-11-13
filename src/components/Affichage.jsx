import React from 'react'
import { useSelector } from 'react-redux'

export default function Affichage() {

    const val  = useSelector(state => state.counter)
    return (
        <div>
            <h1>{val}</h1>
        </div>
    )
}
