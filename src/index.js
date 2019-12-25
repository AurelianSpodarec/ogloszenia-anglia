import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './views/Layout';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHandshake,
    faCar,
    faHome,
    faCouch,
    faGift,
    faMobileAlt,
    faMotorcycle,
    faDumbbell,
    faCalendarAlt,
    faCubes,
    faPlus,
    faArrowAltCircleRight,
    faMapMarkerAlt,
    faSearch,
    faHeart,
    faCamera,
    faLock,
    faEye,
    faEyeSlash,
    faTimes,
    faArrowLeft,
    faEnvelope,
    faTachometerAlt,
    faSignOutAlt,
    faCog,
    faUser,
    faBullhorn,
    faAngleRight,
    faBars
} from '@fortawesome/free-solid-svg-icons';

import {
    faFacebookF,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faHandshake,
    faCar,
    faHome,
    faCouch,
    faGift,
    faMobileAlt,
    faMotorcycle,
    faDumbbell,
    faCalendarAlt,
    faCubes,
    faPlus,
    faArrowAltCircleRight,
    faMapMarkerAlt,
    faSearch,
    faFacebookF,
    faGoogle,
    faHeart,
    faCamera,
    faLock,
    faEye,
    faEyeSlash,
    faTimes,
    faArrowLeft,
    faEnvelope,
    faTachometerAlt,
    faSignOutAlt,
    faCog,
    faUser,
    faBullhorn,
    faAngleRight,
    faBars
)


ReactDOM.render(<Layout />, document.getElementById('root'));