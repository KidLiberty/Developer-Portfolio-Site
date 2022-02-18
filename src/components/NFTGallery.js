import React, { useState, useEffect } from 'react'
import '../css/NFTGallery.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function NFTGallery() {
  const [gallery, setGallery] = useState([])
  const [savedGallery, setSavedGallery] = useState([])
  const [id, setId] = useState(savedGallery.length)
  const [photoNumber, setPhotoNumber] = useState(getRandomInt(1, 5))

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  function savePhotos() {
    let newGallery = gallery.map(image => ({ ...image, isLoading: true }))
    setSavedGallery([...newGallery, ...savedGallery])
    newGallery = gallery.map(image => ({ ...image, isLoading: false }))
    setTimeout(() => {
      setSavedGallery(
        [...newGallery, ...savedGallery].sort((a, b) => {
          return b.id - a.id
        })
      )
    }, 1000)
    setGallery([])
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  return (
    <div className='NFTGallery__container'>
      <div className='NFTGallery__main'>
        <div className='NFTGallery__title'>NFTs</div>
        <div className='NFTGallery__description-text'>
          Non-Fungible Tokens have gained staggering popularity. Below are some
          of the Samoyed Coin NFTs that I have acquired existing on the Solana
          blockchain.
        </div>
        <button
          className='btn-1'
          data-aos='fade-left'
          data-aos-once='true'
          onClick={() => {
            setPhotoNumber(getRandomInt(1, 5))
            const sort = [
              ...gallery,
              {
                id: id,
                photoNumber: photoNumber,
                image: (
                  <img
                    src={require(`../images/samo_${photoNumber}.png`)}
                    alt='Samo Pic'
                  />
                )
              }
            ].sort((a, b) => {
              return b.id - a.id
            })
            setGallery(sort)
            setId(id + 1)
          }}
        >
          Get NFT!
        </button>
        <button
          className='btn-2'
          data-aos='fade-right'
          data-aos-once='true'
          onClick={() => savePhotos()}
        >
          Save NFTs
        </button>
        <div className='resource-link' data-aos='fade' data-aos-once='true'>
          <a
            href='https://github.com/KidLiberty'
            target='_blank'
            rel='noreferrer'
          >
            Resources
          </a>
        </div>
      </div>
      <div className='NFTGallery__photo-reel'>
        {gallery.map(object => (
          <div key={object.id} className='photo-container'>
            <div className='photo-id-container'>
              <div className='photo-id'>{object.id + 1}</div>
            </div>
            <img
              src={require(`../images/samo_${object.photoNumber}.png`)}
              alt='Samo Pic'
            />
          </div>
        ))}
        {savedGallery.map(object => (
          <div key={object.id} className='photo-container'>
            <div className='photo-id-container'>
              <span className='photo-id'>{object.id + 1}</span>
            </div>
            <img
              src={require(`../images/samo_${object.photoNumber}.png`)}
              alt='Samo Pic'
              style={
                object.isLoading
                  ? { border: '2px solid #fddc6d', borderRadius: '3px' }
                  : { border: '2px solid #25f09b', borderRadius: '3px' }
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}
