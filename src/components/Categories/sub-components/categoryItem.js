import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const categoryItem = (props) => {
    return (
        <div>
            <a href="${`props.link`}">

                <FontAwesomeIcon icon={props.icon} />
                <p>{props.name}</p>
            </a>
        </div>
    )
}

export default categoryItem;