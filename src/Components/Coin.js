import React from 'react'
import './Coin.css'
const Coin = ({ name, image, symbol, price, volume, priceChange,marketcap }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>Цена:<br/> ${price}</p>
                    <p className='coin-volume'>Объем (за 24ч) <br/>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className='coin-persent red'>{priceChange.toFixed(2)}%</p>

                    ) : (<p className='coin-persent green'>{priceChange.toFixed(2)}%</p>)
                    }
                    <p className="coin-marketcap">
                        Рыночная капитализация : ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
