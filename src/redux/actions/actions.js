import { ActionTypes } from "../constants/actionTypes";

export const mobileMenuClicked = () => {
    return {
        type: ActionTypes. MOBILE_MENU_CLICKED
    }
}

export const dropDownArrowClicked = () => {
    return {
        type: ActionTypes.DROP_DOWN_ARROW_CLICKED
    }
}

export const setTopCoins = (topCoins) => {
    return {
        type: ActionTypes.SET_TOP_COINS,
        payload: topCoins
    }
}

export const setSelectedCoin = (selectedCoin) => {
    return {
        type: ActionTypes.SET_SELECTED_COIN,
        payload: selectedCoin
    }
}

export const removeSelectedCoin = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_COIN
    }
}

export const isLogged = () => {
    return {
        type: ActionTypes.IS_LOGGED
    }
}

export const setAllCoins = (allCoins) => {
    return {
        type: ActionTypes.SET_ALL_COINS,
        payload: allCoins
    }
}

export const setNumberOfRows = () => {
    return {
        type: ActionTypes.SET_NUMBER_OF_ROWS
    }
}

export const setSearch = (value) => {
    return {
        type: ActionTypes.SET_SEARCH,
        payload: value
    }
}

export const setTradeType = (tradeType) => {
    return {
        type: ActionTypes.SET_TRADE_TYPE,
        payload: tradeType
    }
}

export const setSearchPopup = (valuePopup) => {
    return {
        type: ActionTypes.SET_SEARCH_POPUP,
        payload: valuePopup
    }
}

export const setArrowClicked = () => {
    return {
        type: ActionTypes.SET_ARROW_CLICKED,
    }
}

export const setSelectedCoinImage = (selectedCoinImage) => {
    return {
        type: ActionTypes.SET_SELECTED_COIN_IMAGE,
        payload: selectedCoinImage
    }
}

export const setSelectedCoinPrice = (selectedCoinPrice) => {
    return {
        type: ActionTypes.SET_SELECTED_COIN_PRICE,
        payload: selectedCoinPrice
    }
}

export const setDollarValue = (dollarValue) => {
    return {
        type: ActionTypes.SET_DOLLAR_VALUE,
        payload: dollarValue
    }

}

export const setFinalCoinValue = (finalCoinValue) => {
    return {
        type: ActionTypes.SET_FINAL_COIN_VALUE,
        payload: finalCoinValue
    }
}

export const setCardNumber = (cardNumber) => {
    return {
        type: ActionTypes.SET_CARD_NUMBER,
        payload: cardNumber
    }
}

export const setDay = (day) => {
    return {
        type: ActionTypes.SET_DAY,
        payload: day
    }
}

export const setMonth = (month) => {
    return {
        type: ActionTypes.SET_MONTH,
        payload: month
    }
}

export const setYear = (year) => {
    return {
        type: ActionTypes.SET_YEAR,
        payload: year
    }
}

export const setCvvNumber = (cvvNumber) => {
    return {
        type: ActionTypes.SET_CVV_NUMBER,
        payload: cvvNumber
    }
}

export const setCardNumberError = (bool) => {
    return {
        type: ActionTypes.SET_CARD_NUMBER_ERROR,
        payload: bool
    }
}

export const setExpiryError = (bool) => {
    return {
        type: ActionTypes.SET_EXPIRY_ERROR,
        payload: bool
    }
}

export const setCvvNumberError = (bool) => {
    return {
        type: ActionTypes.SET_CVV_NUMBER_ERROR,
        payload: bool
    }
}

export const setPassword = (password) => {
    return {
        type: ActionTypes.SET_PASSWORD,
        payload: password
    }
}

export const setRePassword = (rePassword) => {
    return {
        type: ActionTypes.SET_RE_PASSWORD,
        payload: rePassword
    }
}