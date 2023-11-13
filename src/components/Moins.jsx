import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../redux/ActionCreators'

export default function Moins() {
    
    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(decrement())}>Incrementer</button>
    </div>
  )
}
