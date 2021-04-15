/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from 'react'
import './App.css'
import './Components/Coin.css'
import axios from 'axios';
import Coin from './Components/Coin';


export default function App() {


  const [coins, setcoins] = useState([])
  const [search, setsearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

      .then(res => {
        setcoins(res.data)
        console.log(res.data)

      })
      .catch(err => {
        alert('Сервер не найден!')
      })
  }, [])


  // Поиск товара
  const handleChange = e => {
    setsearch(e.target.value)
  }


  // Филтрация
  const filterCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className='coin-app'>
      <div className='coin-searcher'>
        <h1 className='coint-text'>Трекер цен на криптовалюту!</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input'
            onChange={handleChange}
          />
        </form>
      </div>
      {filterCoins.map(coin => {
        return (
          <Coin key={coin.id}
            name={coin.name} image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </div>
  )
}