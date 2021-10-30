import {React, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setSelectedCoin, removeSelectedCoin} from '../redux/actions/actions';
import '../styles/CoinDetail.css';

const CoinDetail = () => {
    const selectedCoin = useSelector(state => state.setSelectedCoinReducer.payload);
    const dispatch = useDispatch();
    const {coinId} = useParams();

    const fetchSelectedCoin = () => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`).catch(err => console.log('This is the error: ', err)).then(response => {
            dispatch(setSelectedCoin(response.data));
    })
    }


    useEffect(() => {
        if(coinId && coinId !== '') fetchSelectedCoin();
        return () => {
            dispatch(removeSelectedCoin())
        }
    }, [coinId]);

    console.log(selectedCoin)
    return (
        <div className="coinDetail">
                {selectedCoin ? (
                    <div className="coin-info-container">
                        <h1 className="selected-coin-name">
                         {selectedCoin.name}
                        </h1>
                        <div className="selected-coin-image-container">
                            <img src={selectedCoin.image.small} alt={coinId} />
                        </div>
                        <h3>
                            Release date: {selectedCoin.genesis_date !==null ? selectedCoin.genesis_date : 'Currently is not given in database'}
                        </h3>
                        <h3>Market Cap Rank: #{selectedCoin.market_data.market_cap_rank}</h3>
                        <h3>Max Supply: {selectedCoin.market_data.max_supply !==null ? selectedCoin.market_data.max_supply : 'Currently is not given in database'}</h3>
                        <h3>
                            Highest price 24h in: ${selectedCoin.market_data.high_24h.usd}
                        </h3>
                        <h3>
                            Lowest price 24h in: ${selectedCoin.market_data.low_24h.usd}
                        </h3>
                        <p>
                            {
                            new DOMParser().parseFromString(selectedCoin.description.en, "text/html").body.textContent
                            }
                        </p>
                    </div>
                ) : (
                    <div className="loader"> Loading... </div>
                )
            }
        </div>
    )
}

export default CoinDetail;
