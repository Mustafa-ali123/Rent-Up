import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import HeaderBar from '../component/HeaderBar'
import Footer from '../component/Footer'

export default function Location() {
    let [data, setdata] = useState([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQn1MM7rXjJNnjZLx3YUTKe8IQwJVlOCdozT_UuNchIKDEvtsnnR4S_-7pI9Bu6R5Wwk&usqp=CAU',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTV1EXfcYjhrJTHQTPE-dL4deLcgyMf1s0_eBbZQJg8R8goHYL25p__cKLReksXUGvwI&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-aMqHKSxOJxBtI2caJsmRJZNeuftGBfM7utT_lAKGhNjQ6qdGRdrtlMpiwiECdeBIKks&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0R-ar9lyQo88c-SNpCl_A3RyEJQMu5FgemQBZ3lERMi8-FGiGgMOguPtrwgeh_t1s3I&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEU-1Eb4YhU5mdNqOlfAtEnGo3AEZk5eSd4XAkEbynJ3lVdiXrF8-AQ33r92TDOPK6Iw&usqp=CAU',
      ])
    
  return (  <>
      <HeaderBar label="Location"/>
    <div className='container py-4 location'>
      <div className='row'>
        <div className='text-center header mt-5 py-4'>
          <h1>Explore by Location</h1>
          <h5 className='mt-3'> classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at </h5>
          <h5>from 45 BC, makiliterature from 45 BC, makiCollege in Virgini </h5>
        </div>

        {
          data.map((x, i) => (
            <div key={i} className='col-lg-4 col-md-4 col-sm-12 mt-3 hider'>
              <img className='' src={x} />
              <div className='textover'>
                <h5>Califonia USA</h5>
                <p> makiCollege in Vi</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}
