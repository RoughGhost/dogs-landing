import Head from 'next/head'
import Image from 'next/image'
import {Navbar} from "../components"
import {AboutUs, Breeds, CareTaker, Header, Intros} from "../container"

export default function Home(){
   return (
    <div >
    <Navbar />
    <Header />
    <AboutUs />
    <Breeds />
    <CareTaker />
    <Intros />
  </div>
     ) 
     
}
 

