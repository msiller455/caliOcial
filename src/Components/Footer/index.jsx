import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

import { FooterContainer, Copyright, MediaLinks, MediaLink } from './style'

const Footer = () => {
    return (
        <FooterContainer>
            <Copyright>
                © 2020 Michael Siller
            </Copyright>
            <MediaLinks>
                <MediaLink target="_blank" href="https://github.com/msiller455">
                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                </MediaLink>
                <MediaLink target="_blank" href="https://www.linkedin.com/in/michaelasiller/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </MediaLink>
                <MediaLink target="_blank" href="https://www.instagram.com/chum455/">
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                </MediaLink>
            </MediaLinks>
        </FooterContainer>
    );
};

export default Footer;