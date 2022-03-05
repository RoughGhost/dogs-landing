import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiCrossedBones } from 'react-icons/gi'
import Image from 'next/image'
import images from '../constants/images'

const style = {
  app__navbar: `w-full flex justify-between items-center bg-blue p-[1rem 2rem] sm:p-4`,
  app__navbarlogo: `flex justify-start items-center`,
  app__navbarimg: `w-[150px]`,
  app__navbarlinks: `flex flex-1 justify-center items-center 2xl:hidden`,
  app__navbarlist: `p__opensans my-0 mx-4 cursor-pointer hover:text-crimson`,
  app__navbarlogin: `flex justify-end items-center md:hidden sm:hidden `,
  app__navbarsmallscreen: `hidden xl:flex md:flex 2xl:flex`,
  app__navbarsmallscreenoverlay: `fixed top-0 left-0 w-[100%] h-[100vh] bg-blue delay-100 ease flex-col z-10 flex__center slide-bottom`,
  app__smallscreennavbarlinks: ` `,
  app__navbarlistlinks: `m-8 cursor-pointer text-white text-xl p__opensans hover:text-wite`,
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={style.app__navbar}>
      <div className={style.app__navbarlogo}>
        <Image
          src={images.logo}
          className={style.app__navbarimg}
          width={70}
          height={70}
        />
      </div>
      <ul className={style.app__navbarlinks}>
        <li className={style.app__navbarlist}>
          <a href="#home">Home</a>
        </li>
        <li className={style.app__navbarlist}>
          <a href="#about">About</a>
        </li>
        <li className={style.app__navbarlist}>
          <a href="#breeds">Breeds</a>
        </li>
        <li className={style.app__navbarlist}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={style.app__navbarlogin}>
        <a
          href="#login"
          className="p__opensans ease hover:border-b-solid mx-2 my-4 transition delay-100 hover:border-b-2 hover:border-b-gray"
        >
          Login
        </a>
        <div className="mr-5 h-[30px] w-[1px] bg-grey" />
        <a
          href="#login"
          className="p__opensans ease hover:border-b-solid mx-2 my-4 transition delay-100 hover:border-b-2 hover:border-b-gray"
        >
          Sign up
        </a>
      </div>
      <div className={style.app__navbarsmallscreen}>
        <GiHamburgerMenu
          fontSize={27}
          className="text-bold absolute top-5 right-5 cursor-pointer bg-blue"
          onClick={() => setToggle(true)}
          color="#fff"
        />
        {toggle && (
          <div className={style.app__navbarsmallscreenoverlay}>
            <GiCrossedBones
              fontSize={27}
              className="text-bold absolute top-5 right-5 cursor-pointer bg-blue"
              onClick={() => setToggle(false)}
              color="#fff"
            />
            <ul className={style.app__smallscreennavbarlinks}>
              <li className={style.app__navbarlistlinks}>
                <a href="#home">Home</a>
              </li>
              <li className={style.app__navbarlistlinks}>
                <a href="#about">About</a>
              </li>
              <li className={style.app__navbarlistlinks}>
                <a href="#breeds">Breeds</a>
              </li>
              <li className={style.app__navbarlistlinks}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
