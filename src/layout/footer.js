import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (

        <footer>
            <p>
                <FontAwesomeIcon icon={faCopyright} color='rgb(207, 66, 66)' /> <a rel="noopener noreferrer" target="_blank" href="https://mahmudsust.netlify.app/">mahmudsust</a> <br />
                All Rights Reserved
            </p>
        </footer>

    )
}

export default Footer;
