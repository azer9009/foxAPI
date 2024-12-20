import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RandomFox = () => {
  const MAIN_URL = 'https://randomfox.ca/floof/'
  const [imageSrc, setImgSrc] = useState('')

  const getFoxImage = async () => {
    const response = await axios.get(MAIN_URL)
    setImgSrc(response.data.image)
    console.log(imageSrc);
    
  }

  useEffect(()=> {
    getFoxImage();
  },[])

  return (
    <div>
      <button onClick={getFoxImage} >Click for fox images</button>
      <img src={imageSrc} alt="" />
    </div>
  )
}

export default RandomFox
