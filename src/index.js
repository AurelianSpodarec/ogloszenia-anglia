import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';

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
    faBars,
    faSlidersH,
    faShareSquare,
    faEllipsisV,
    faThLarge,
    faSquare,
    faCommentAlt
} from '@fortawesome/free-solid-svg-icons';

import {
    faFacebookF,
    faGoogle,
    faInstagram
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
    faBars,
    faSlidersH,
    faInstagram,
    faShareSquare,
    faEllipsisV,
    faThLarge,
    faSquare,
    faCommentAlt
)


ReactDOM.render(<App />, document.getElementById('root'));