import React from 'react'
import images from '../constants/images'
import { SubHeading } from '../components'
import Image from 'next/image'

const style = {
  app__header: `app__wrapper section__padding bg-blue`,
}

const Header = () => {
  return (
    <div className={style.app__header} id="home">
      <div className={style.app__wrapperinfo}>
        <SubHeading title="Get your dream dog" />
        <h1 className="font-base text-8xl uppercase tracking-widest text-white">
          Welcome to Wendy's Kennels
        </h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          We are always at the service of making sure that all pets are in goods
          hands and well cared for.
        </p>
        <button type="button" className="custom__button">
          Explore
        </button>
      </div>

      <div className={style.app__wrapperimage}>
        <Image src={images.HeroPic} />
      </div>
    </div>
  )
}

export default Header
