import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const categoryItem = (props) => {
    return (
        <div>
            <Link href="[`props.link`]" as={`${props.name}`}>
                <a>
                    <FontAwesomeIcon icon="check-square" />
                    <h3>{props.text}</h3>
                </a>
            </Link>
        </div>
    )
}

export default categoryItem;