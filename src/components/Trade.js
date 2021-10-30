import {React, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setTradeType, setAllCoins, setSearchPopup, setArrowClicked, setSelectedCoin, setSelectedCoinImage, setSelectedCoinPrice, setDollarValue, setFinalCoinValue } from '../redux/actions/actions';
import axios from 'axios';
import '../styles/Trade.css';

const Trade = () => {
    const allCoins = useSelector(state => state.setAllCoinsReducer.payload);
    const tradeType = useSelector(state => state.setTradeTypeReducer);
    const searchValue = useSelector(state => state.setSearchPopupReducer)
    const arrowClicked = useSelector(state => state.setArrowClickedReducer);
    const selectedCoinImage = useSelector(state => state.selectedCoinImageReducer);
    const selectedCoinPrice = useSelector(state => state.selectedCoinPriceReducer);
    const dollarValue = useSelector(state => state.setDollarValueReducer);
    const finalCoinValue = useSelector(state => state.setFinalCoinValueReducer)
    const dispatch = useDispatch();

    const buyOption = () => {
        dispatch(setTradeType('buy'));
    }

    const sellOption = () => {
        dispatch(setTradeType('sell'));
    }

    const fetchAllCoins = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false').catch(err => console.log('This is an error', err)).then(response => dispatch(setAllCoins(response)));
    }

    const handleSearch = (event) => {
        dispatch(setSearchPopup(event.target.value));
    }

    const coinsDropDown = () => {
        console.log('sss')
        dispatch(setArrowClicked());
    }

    const handleDollarValue = (event) => {
        dispatch(setDollarValue(event.target.value))
    }

    const convert = () => {
        dispatch(setFinalCoinValue(dollarValue/selectedCoinPrice));
    }

    useEffect(() => {
        fetchAllCoins();
    }, []);

    setInterval(fetchAllCoins, 300000);
    return (
        <div className="trade">
            <h1>Buy and Sell Crypto With The Fastest Way!</h1>
            <div className="buy-or-sell">
                <div className="options-cont">
                    <button className="buy-option" style={{backgroundColor: tradeType==='buy' ?    '#00B3B3' : ''}} onClick={buyOption}>
                    Buy
                    </button>

                    <button className="sell-option"  style={{backgroundColor: tradeType==='sell' ? '#00B3B3' : ''}} onClick={sellOption}>
                    Sell
                    </button>   
                </div>

                <div className="exchange-container">
                    <div className="dollar-value">
                        <input type="text" onChange={handleDollarValue} placeholder="Enter Amount"/>
                        <i className="fa fa-dollar"></i>
                    </div>

                    <div className="crypto-value">
                        <input type="text" value={finalCoinValue}/>
                        <div className="choosing-crypto" onClick={coinsDropDown}>
                            {
                                allCoins ? (
                                    <> 
                                    <img src={selectedCoinImage} alt="c" />
                                    <span><i className={`${arrowClicked ? 'fa fa-arrow-up' : 'fa fa-arrow-down'}`}></i></span>
                                    
                                    </>
                                ) : (
                                    <div>Loading...</div>
                                )
                            }
                        </div>
                    </div>

                    <div className="dropdown-selection-all-coins" style={{display: `${arrowClicked ? 'block' : 'none'}`}}>
                        <div className="search-bar-container-popup">
                            <input type="text" onChange={handleSearch} placeholder='Search a Coin...'/>
                       </div>
                        {
                            allCoins ? (
                                allCoins.data.filter((el) => el.symbol.toLowerCase().includes(searchValue.toLowerCase()) || el.name.toLowerCase().includes(searchValue.toLowerCase())).map(coin => (
                                        <div className="coin-row-popup" key={coin.id} onClick={
                                            ()=> {
                                                dispatch(setSelectedCoinImage(coin.image))
                                                dispatch(setSelectedCoinPrice(coin.current_price))
                                                dispatch(setArrowClicked())
                                                }
                                            }>
                                            <h3 className="coin-symbol">{coin.symbol.toUpperCase()}</h3>
                                            <h3 className="coin-image">
                                                <img src={coin.image} alt={coin.id} />
                                            </h3>
                                        </div>
                                ))
                            ) : (
                                <div> Loading... </div>
                            )
                        }
                    </div>
                </div>
                <div className="convert-button" onClick={convert}>
                    Preview conversion
                </div>
                <div className="action-button">
                    {tradeType === 'buy' ? 'Buy By Current Rate' : 'Sell by Current Rate'}
                </div>
            </div>
        </div>
    )
}

export default Trade;
