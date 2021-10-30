import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setAllCoins, setNumberOfRows, setSearch} from '../redux/actions/actions'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Markets.css';

const Markets = () => {
    const allCoins = useSelector(state => state.setAllCoinsReducer.payload);
    const numberOfRows = useSelector(state => state.setNumberOfRowsReducer);
    const searchValue = useSelector(state => state.setSearchReducer)
    const dispatch = useDispatch();

    const fetchAllCoins = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false').catch(err => console.log('This is an error', err)).then(response => dispatch(setAllCoins(response)));
    }

    useEffect(() => {
        fetchAllCoins();
    }, []);

    const handleSearch = (event) => {
        dispatch(setSearch(event.target.value));
    }

    const loadMore = () => {
        dispatch(setNumberOfRows());
    }

    console.log('search value: ', searchValue)
  
    setInterval(fetchAllCoins, 300000);
    return (
        <div className="markets">
            <h1>Markets</h1>
            <div className="search-bar-container">
                <input type="text" onChange={handleSearch} placeholder='Search a Coin...'/>
            </div>
            <div className="desktop-version-wrapper">
                <div className="header-row">
                    <h3 className="coin-symbol-header">Symbol:</h3>
                    <h3 className="coin-price-header">Price:</h3>
                    <h3 className="coin-price-change-header">24h Change:</h3>
                    <h3 className="coin-high-low-header">24h High / 24h Low</h3>
                    <h3 className="coin-market-cap-header">Market Cap:</h3>
                </div>

                {
                allCoins ? (
                    allCoins.data.filter((el) => el.symbol.toLowerCase().includes(searchValue.toLowerCase()) || el.name.toLowerCase().includes(searchValue.toLowerCase())).slice(0, numberOfRows).map(coin => (
                        <Link to={`/coin/${coin.id}`} key={coin.id} >
                        <div className="all-coins-info-wrapper">
                            <h2 className="coin-symbol">{coin.symbol.toUpperCase()}</h2>
                            <h2 className="coin-price">${coin.current_price.toLocaleString()}</h2>
                            <h2 className="coin-price-change" style={{color: `${coin.current_price.toLocaleString() > 0 ? 'green' : 'red'}`}}>{coin.price_change_percentage_24h}%</h2>
                            <h2 className="coin-high-low">${coin.high_24h.toLocaleString()} / ${coin.low_24h.toLocaleString()}</h2>
                            <h2 className="coin-market-cap">${coin.market_cap.toLocaleString()}</h2>
                        </div>
                        </Link>
                    ))
                ) : (
                    <div className="loader"> Loading... </div>
                )
            }
            </div>


            <div className="mobile-version-wrapper">
                {
                allCoins ? (
                    allCoins.data.filter((el) => el.symbol.toLowerCase().includes(searchValue.toLowerCase()) || el.name.toLowerCase().includes(searchValue.toLowerCase())).slice(0, numberOfRows).map(coin => (
                        <Link to={`/coin/${coin.id}`} key={coin.id} >
                            <div className="mobile-coin-info-wrapper">
                                <h3 className="mobile-coin-symbol-header">Symbol:</h3>
                                <h2 className="mobile-coin-symbol">{coin.symbol.toUpperCase()}</h2>
                                <h3 className="mobile-coin-price-header">Price:</h3>
                                <h2 className="mobile-coin-price">${coin.current_price}</h2>
                                <h3 className="mobile-coin-price-change-header">24h Change:</h3>
                                <h2 className="mobile-coin-price-change"style={{color: `${coin.current_price.toLocaleString() > 0 ? 'green' : 'red'}`}}>{coin. price_change_percentage_24h}%</h2>
                                <h3 className="mobile-coin-high-low-header">24h High / 24h Low</h3>
                                <h2 className="mobile-coin-high-low">${coin.high_24h} / ${coin.low_24h} </h2>
                                <h3 className="mobile-coin-market-cap-header">Market Cap:</h3>
                                <h2 className="mobile-coin-market-cap">${coin.market_cap}</h2>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="loader"> Loading... </div>
                )
            }
            </div>
            <div className="load-more-button-container"><button className="load-more-button" onClick={loadMore}>Load more</button></div>
        </div>
    )
}

export default Markets;
