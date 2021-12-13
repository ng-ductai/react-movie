import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="footer__content container">        
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <Link to="/">Movies</Link>
                        </div>
                        <div className='content'>
                            Xem phim mới miễn phí nhanh chất lượng cao. 
                            Xem Phim online Việt Sub, Thuyết minh, 
                            lồng tiếng chất lượng HD.
                        </div>
                    </div>
                    <div className="footer__content__menu">
                        <div className='title'>Home</div>
                        <Link to="/">Trending Movie</Link>
                        <Link to="/">Top Rated Movie</Link>
                        <Link to="/">Trending TV</Link>
                    </div>
                    <div className="footer__content__menu">
                        <div className='title'>About us</div>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <div className='title'>Contact us</div>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
