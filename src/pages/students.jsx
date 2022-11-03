import React from 'react'
import Header from '../components/Header'
import Table from '../components/table'

export default function Students() {
  return (
    <>
    <Header />
    <div className='d-flex justify-content-between'>
      <h2 className='ms-5 mt-5'>Students Details</h2>
      <div className='btn'>Add new student</div>
    </div>
    <div className='m-5'>
      <Table />
    </div>
    </>
  )
}
