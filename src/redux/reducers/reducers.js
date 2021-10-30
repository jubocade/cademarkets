import { ActionTypes } from "../constants/actionTypes";

export const mobileMenuClickedReducer = (state = false, {type}) => {
    switch(type) {
        case ActionTypes. MOBILE_MENU_CLICKED:
            return !state
        default:
            return state
    }
}

export const dropDownArrowClickedReducer = (state = false, {type}) => {
    switch(type) {
        case ActionTypes.DROP_DOWN_ARROW_CLICKED:
            return !state
        default:
            return state
    }
}

export const setTopCoinsReducer = (state = [], {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_TOP_COINS:
            return {...state, payload}
        default:
            return state
    }
}
 
export const setSelectedCoinReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_SELECTED_COIN: 
            return {...state, payload}
        case ActionTypes.REMOVE_SELECTED_COIN:
            return {}
        default:
            return state
    }
}

export const isLoggedReducer = (state = false, {type}) => {
    switch(type) {
        case ActionTypes.IS_LOGGED:
            return !state
        default:
            return state
    }
}

export const setAllCoinsReducer = (state = [], {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_ALL_COINS:
            return {...state, payload}
        default:
            return state
    }
}

export const setNumberOfRowsReducer = (state = 20, {type}) => {
    switch(type) {
        case ActionTypes.SET_NUMBER_OF_ROWS:
            return state + 20
        default:
            return state
    }
}

export const setSearchReducer = (state = '', {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_SEARCH:
            return payload
        default:
            return state
    }
}

export const setTradeTypeReducer = (state = "buy", {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_TRADE_TYPE:
            return payload
        default: 
            return state
    }
}

export const setSearchPopupReducer = (state = '', {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_SEARCH_POPUP:
            return payload
        default:
            return state
    }
}

export const setArrowClickedReducer = (state = false, {type}) => {
    switch(type) {
        case ActionTypes.SET_ARROW_CLICKED:
            return !state
        default:
            return state
    }
}

export const selectedCoinImageReducer = (state = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E", {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_SELECTED_COIN_IMAGE: 
            return payload
        default:
            return state
    }
}

export const selectedCoinPriceReducer = (state = 0, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_SELECTED_COIN_PRICE: 
            return payload
        default:
            return state
    }
}

export const setDollarValueReducer = (state = 0, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_DOLLAR_VALUE:
            return payload
        default:
            return state
    }
}

export const setFinalCoinValueReducer = (state = null, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_FINAL_COIN_VALUE:
            return payload
        default:
            return state
    }
}

export const setCardNumberReducer = (state = '', {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_CARD_NUMBER:
            return payload
        default:
            return state
    }
}

export const setDayReducer = (state = '', {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_DAY:
            return payload
        default:
            return state
    }
}

export const setMonthReducer = (state = '', {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_MONTH:
            return payload
        default:
            return state
    }
}

export const setYearReducer = (state = '', {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_YEAR:
            return payload
        default:
            return state
    }
}


export const setCvvNumberReducer = (state = '', {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_CVV_NUMBER:
            return payload
        default:
            return state
    }
}

export const setCardNumberErrorReducer = (state = false, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_CARD_NUMBER_ERROR:
            return payload
        default:
            return state
    }
}

export const setExpiryErrorReducer = (state = false, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_EXPIRY_ERROR:
            return payload
        default:
            return state
    }
}

export const setCvvNumberErrorReducer = (state = false, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_CVV_NUMBER_ERROR:
            return payload
        default:
            return state
    }
}

export const setPasswordReducer = (state = '', {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PASSWORD:
            return payload
        default:
            return state
    }
}

export const setRePasswordReducer = (state = '', {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_RE_PASSWORD:
            return payload
        default:
            return state
    }
}