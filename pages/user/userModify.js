import React,{useEffect, useState} from 'react'
import UserModify from 'react'
import {useSelector} from 'react-redux'

const UserModifyPage = () => {
    return (<UserModify onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}

export default UserModifyPage