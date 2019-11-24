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
    faPlus
} from '@fortawesome/free-solid-svg-icons'

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
    faPlus
)


ReactDOM.render(<Layout />, document.getElementById('root'));