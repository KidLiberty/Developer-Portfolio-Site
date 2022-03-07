import React, { useState, useEffect, useMemo } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import Navbar from './Navbar'
import CoinMarket from './CoinMarket'
import NFTGallery from './NFTGallery'

const URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

export default function Crypto() {
  const [offsetY, setOffsetY] = useState(0)
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const handleScrollY = () => setOffsetY(window.scrollY)

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setCoins(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY)

    return () => {
      window.removeEventListener('scroll', handleScrollY)
    }
  }, [])

  function handleChange(e) {
    setSearch(e.target.value)
  }

  const filteredCoins = useMemo(
    () =>
      coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      ),
    [coins, search]
  )

  return (
    <>
      <Navbar />
      <div className='crypto__container'>
        <div className='crypto__title-component'>
          <span
            className='title-text-container-1'
            data-aos='fade'
            data-aos-delay='750'
            data-aos-once='true'
          >
            Crypto
          </span>
          <span
            style={{ transform: `translateX(${offsetY * 0.05}px)` }}
            className='title-text-container-2'
          ></span>
          <span
            className='title-text-container-3'
            style={{ transform: `translateX(${offsetY * -0.025}px)` }}
          ></span>
          <span
            className='title-text-container-4'
            style={{ transform: `translateX(${offsetY * -0.75}px)` }}
          ></span>
          <span
            style={{ transform: `translateX(${offsetY * 0.25}px)` }}
            className='title-text-container-5'
          ></span>
          <div
            className='BTC-logo'
            style={{ transform: `translateY(${offsetY * 0.65}px)` }}
          >
            <img
              src={require('../images/BTC_logo.png')}
              data-aos='fade'
              alt='BTC Logo'
            />
          </div>
          <div
            className='ETH-logo'
            style={{ transform: `translateY(${offsetY * 0.85}px)` }}
          >
            <img
              src={require('../images/ETH_logo.png')}
              data-aos='fade'
              alt='ETH Logo'
            />
          </div>
          <div
            className='SOL-logo'
            style={{
              transform: `translateY(${offsetY * 0.15}px)`
            }}
          >
            <img
              className='SOL-logo'
              src={require('../images/SOL_logo.png')}
              data-aos='fade'
              alt='SOL Logo'
            />
          </div>
          <div
            className='AVAX-logo'
            style={{
              transform: `translateY(${offsetY * 0.25}px)`
            }}
          >
            <img
              className='AVAX-logo'
              src={require('../images/AVAX_logo.png')}
              data-aos='fade'
              alt='AVAX Logo'
              style={{ transform: `rotate(${offsetY * -0.05}deg)` }}
            />
          </div>
          <div
            className='DOT-logo'
            style={{
              transform: `translateY(${offsetY * 0.9}px)`
            }}
          >
            <img
              className='DOT-logo'
              src={require('../images/DOT_logo.png')}
              data-aos='fade'
              alt='DOT Logo'
              style={{ transform: `rotate(${offsetY * 1}deg)` }}
            />
          </div>
        </div>
        <div className='crypto__main-content-container'>
          <div
            className='crypto__main-content-card-1'
            data-aos='fade'
            data-aos-once='true'
          >
            <div className='crypto__main-content-card-1-text'>
              The concept of Decentralized Finance has fascinated me from the
              beginning.
            </div>
            <div className='crypto__main-content-card-1-title'>DeFi</div>
          </div>
          <div
            className='crypto__main-content-card-2'
            data-aos='fade'
            data-aos-once='true'
          >
            <div className='crypto__main-content-card-2-text'>
              Secure transactions and unified ledger on the blockchain have
              sparked inspiration for a new era of investing possibilities.
            </div>
            <div className='crypto__main-content-card-2-title'>Blockchain</div>
          </div>
          <div
            className='crypto__main-content-card-3'
            data-aos='fade'
            data-aos-once='true'
          >
            <div className='crypto__main-content-card-3-text'>
              From Ethereum dapps to full-fledged NFT exchanges, blockchain
              ecosystems motivate me to keep learning.
            </div>
            <div className='crypto__main-content-card-3-title'>Ecosystem</div>
          </div>
        </div>
        <div className='crypto__coin-market-container'>
          <h1 className='market-header'>Current Market Metrics</h1>
          <div className='coin-search-bar'>
            <input
              type='text'
              placeholder='Search'
              onChange={e => handleChange(e)}
            />
          </div>
          {filteredCoins.map(coin => {
            return <CoinMarket key={coin.id} coin={coin} />
          })}
        </div>
        <div className='crypto__NFT-gallery-container'>
          <NFTGallery />
        </div>
      </div>
    </>
  )
}
