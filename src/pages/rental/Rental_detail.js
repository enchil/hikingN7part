import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Rental_detail = () => {
  const { rental_product_sid } = useParams()
  let [Detail, setDetail] = useState({})

  const rental_url = `http://localhost:3001/rental//getDetailData/${rental_product_sid}`

  async function get_rental_detail() {
    const response = await axios.get(rental_url)
    console.log(response.data.rows[0])
    setDetail(response.data.rows[0])
  }

  useEffect(() => {
    get_rental_detail()
  }, [])
  return (
    <>
      <div>Rental_detail</div>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      {/* <h1>{Detail}</h1>*/}
      <h1>{Detail.rental_product_name}</h1> 
      {/* <h1>{data[0].rental_product_sid}</h1> */}
    </>
  )
}

export default Rental_detail