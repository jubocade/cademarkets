import { combineReducers } from "redux";
import { mobileMenuClickedReducer, dropDownArrowClickedReducer, setTopCoinsReducer, setSelectedCoinReducer, isLoggedReducer, setAllCoinsReducer, setNumberOfRowsReducer, setSearchReducer, setTradeTypeReducer, setSearchPopupReducer, setArrowClickedReducer, selectedCoinImageReducer, selectedCoinPriceReducer, setDollarValueReducer, setFinalCoinValueReducer, setCardNumberReducer, setDayReducer, setMonthReducer,
setYearReducer, setCvvNumberReducer, setCardNumberErrorReducer, setExpiryErrorReducer, setCvvNumberErrorReducer, setPasswordReducer,
setRePasswordReducer } from "./reducers";

const reducers = combineReducers({
    mobileMenuClickedReducer,
    dropDownArrowClickedReducer,
    setTopCoinsReducer,
    setSelectedCoinReducer,
    isLoggedReducer,
    setAllCoinsReducer,
    setNumberOfRowsReducer,
    setSearchReducer,
    setTradeTypeReducer,
    setSearchPopupReducer,
    setArrowClickedReducer,
    selectedCoinImageReducer,
    selectedCoinPriceReducer,
    setDollarValueReducer,
    setFinalCoinValueReducer,
    setCardNumberReducer,
    setDayReducer,
    setMonthReducer,
    setYearReducer,
    setCvvNumberReducer,
    setCardNumberErrorReducer,
    setExpiryErrorReducer,
    setCvvNumberErrorReducer,
    setPasswordReducer,
    setRePasswordReducer
});

export default reducers;