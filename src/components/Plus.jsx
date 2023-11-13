import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/ActionCreators'

export default function Plus() {
    
    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(increment())}>Incrementer</button>
    </div>
  )
}
