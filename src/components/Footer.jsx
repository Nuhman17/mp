import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <>
<div className=' container-fluid bg-light py-3 px-5'>
        <Row>
          <Col sm={12} md={5}>
            <h3>Media Player 2024</h3>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit quhuas atque totam prhhaesentium error temyypore cupiditate magni? Ipsam cubbmque consequatur sapiehhhnte at rerum reprehenderit magni natus tenetur aut doloribus?</p>
          </Col>
          <Col sm={12} md={2}>
            <h3>Links</h3>
            <div className='d-flex flex-column'>
              <Link to={"/"}>Landing</Link>
              <Link to={"/home"}>Home</Link>
              <Link to={"/his"}>Watch History</Link>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <h3>Feedback</h3>
            <textarea name="" id="" className='form-control'></textarea>
            <button className='btn btn-warning mt-4'>Send</button>
          </Col>
        </Row>
        <p className='text-center mt-4'>All rights are reserved</p>
      </div>
  </>
  )
}

export default Footer
