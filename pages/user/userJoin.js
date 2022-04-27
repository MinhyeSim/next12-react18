import React, {useEffect, useState} from 'react'
import UserJoin from 'react'
import {useDispatch} from 'react-redux'
//리덕스에게 {userid~address까지의) 값을 넘긴다 
import {userJoin} from "@/modules"

const UserJoinPage = () => {
  const  dispatch = useDispatch()
  const onSubmit = e =>{
    e.preventDefault()
    const {userid, name, email, phone, birth, address} = from
    alert("1단계" + JSON.stringify(from))
    dispatch(userJoin({userid, name, email, phone, birth, address}))
  }
  const onChange = e => {
    e.preventDefault()
  }
  return (<UserJoin onSubmit = {onSubmit} onChange={onChange} from={form}/>)
}

export default UserJoinPage