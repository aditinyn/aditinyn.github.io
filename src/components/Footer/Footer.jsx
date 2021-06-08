import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';
import { githubButtons } from '../../mock/data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab);
library.add(far);

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">

          {/*{<div className="social-links__a">
            <SocialIcon url="mailto:aditinyn@gmail.com"
              bgColor="#333333"
              fgColor="#f5f5f5"
              style={{ height: 200, width: 50 }}
            />
          </div>
          <div className="social-links__a">
            <SocialIcon url="https://instagram.com/adiii.narayan" 
              bgColor="#333333"
              fgColor="#f5f5f5"
            />
          </div>
          <div className="social-links__a">
            <SocialIcon url="https://discord.com/users/637715696549232656" 
            bgColor="#333333"
            fgColor="#f5f5f5"
            />
          </div>          
          <div className="social-links__a">
            <SocialIcon url="https://www.linkedin.com/in/aditi-narayan-089a861a4/" 
              bgColor="#333333"
              fgColor="#f5f5f5"
            />
          </div>
          <div className="social-links__a">
            <SocialIcon url="https://www.youtube.com/channel/UCHNTBz5VNK5GFQ-_sSItPNA" 
              bgColor="#333333"
              fgColor="#f5f5f5"
            />
  </div>*/}
          <a href="mailto:aditinyn@gmail.com"> <FontAwesomeIcon icon={['far', 'envelope']} /> </a>
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || ''}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <FontAwesomeIcon icon={['fab', `${name}`]} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} Aditi Narayan
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;