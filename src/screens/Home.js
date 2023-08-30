import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card';
import Header from '../component/Header';
import Deals from '../component/Deals';
import { SignUp } from '../screens/SignUp';
import Awards from '../component/Awards';
import { useState } from 'react';
import About from './About';
import { Feature } from './Feature';
import Login from './Login';

export default function Home() {
  let [show, setshow] = useState(false)
  return (<>
      <Navbar send={(e) => setshow(e)} />
      {show && <SignUp open={(e) => setshow(e)} />}
      <Header />
      <Deals />
      <About/> 
      <Card />
      {/* <Feature/> */}
      <Awards />
      <Footer />

  </>
  )
}
