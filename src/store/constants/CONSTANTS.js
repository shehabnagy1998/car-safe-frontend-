module.exports = {
    // ignore all this **********************************************
    REDUX_LOST: 'REDUX_LOST',
    REDUX_FOUND: 'REDUX_FOUND',
    REDUX_COLORS: 'REDUX_COLORS',
    REDUX_BRANDS: 'REDUX_BRANDS',
    REDUX_ADD_FOUND: 'REDUX_ADD_FOUND',
    REDUX_LOADING: 'REDUX_LOADING',
    REDUX_SIGNIN: 'REDUX_SIGNIN',
    REDUX_SIGNUP: 'REDUX_SIGNUP',
    REDUX_SIGNOUT: 'REDUX_SIGNOUT',

    // BASE_URL_HELPERS: 'http://localhost:8000/helpers',
    // BASE_URL_USER: 'http://localhost:8000/user',
    // BASE_URL_FOUND: 'http://localhost:8000/found',
    // BASE_URL_LOST: 'http://localhost:8000/lost',
    // till this ****************************************************

    // base links 
    BASE_URL_HELPERS: 'https://mighty-refuge-93855.herokuapp.com/helpers',
    BASE_URL_USER: 'https://mighty-refuge-93855.herokuapp.com/user',
    BASE_URL_FOUND: 'https://mighty-refuge-93855.herokuapp.com/found',
    BASE_URL_LOST: 'https://mighty-refuge-93855.herokuapp.com/lost',

    // will use BASE_URL_USER
    // sign in link (POST method)
    // sent data will be object of (email, pass)
    // recived data will be object of (email, pass, government, phone)
    SIGNIN: '/signin',

    // will use BASE_URL_USER
    // sign up link (POST method)
    // sent data will be object of (email, pass, government, phone)
    // recived data will be object of (email, pass, government, phone)
    SIGNUP: '/signup',

    // will use BASE_URL_HELPERS
    // get all colors link (GET method)
    // sent data NO
    // recived data will be array of (colorID, color_name)
    GET_COLORS: '/colors',

    // will use BASE_URL_HELPERS
    // get all brands link (GET method)
    // sent data NO
    // recived data will be array of (brandID, brand_name)
    GET_BRANDS: '/brands',

    // will use BASE_URL_FOUND or BASE_URL_LOST
    // get all lost reports or found reports link (GET method)
    // sent data NO
    // recived data will be array of (reportID, lic_pla_num, lic_pla_let, address, engine_no, vin_no, date, color, brand, userEmail) case of lost
    // recived data will be array of (reportID, lic_pla_num, lic_pla_let, address, date, color, brand, userEmail) case of found
    GET: '/',

    // will use BASE_URL_FOUND or BASE_URL_LOST
    // create lost reports or found reports link (POST method)
    // sent data will be object of (lic_pla_num, lic_pla_let, address, engine_no, vin_no, date, color, brand) case of lost
    // sent data will be object of (lic_pla_num, lic_pla_let, address, date, color, brand) case of found
    // recived data will be object of (reportID, lic_pla_num, lic_pla_let, address, engine_no, vin_no, date, color, brand, userEmail) case of lost
    // recived data will be object of (reportID, lic_pla_num, lic_pla_let, address, date, color, brand, userEmail) case of found
    ADD: '/add',

    // will use BASE_URL_FOUND or BASE_URL_LOST
    // remove lost report or found report link (DELETE method)
    // sent data will be reportID in lost or found 
    // recived data will be array of (reportID, lic_pla_num, lic_pla_let, address, engine_no, vin_no, date, color, brand, userEmail) case of lost
    // recived data will be array of (reportID, lic_pla_num, lic_pla_let, address, date, color, brand, userEmail) case of found
    REMOVE: '/remove/', // after last slash put the reportID
}