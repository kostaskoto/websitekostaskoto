'use client';
import './Header.scss';
import { useRouter } from 'next/navigation';
import LanguageChanger from '../language/LanguageChanger';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const router = useRouter();
    const { t } = useTranslation('header');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="header">
            <button className={`menu-icon-button ${isOpen ? '' : 'open'}`} onClick={toggleMenu}>
                <MenuIcon className='menu-icon' />
            </button>
            <button className={`close-menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <CloseIcon className='close-menu-icon' />
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <button className='header-button' onClick={() => {
                    router.push('/');
                    window.scrollTo(0, 0);
                }}
                    >
                        <span className='header-button-text'>{t('home')}</span>
                </button>
                <button className='header-button' onClick={() => {
                    router.push('/photography');
                    window.scrollTo(0, 0);
                }}
                >
                    <span className='header-button-text'>{t('photography')}</span>
                </button>
                <button className='header-button' onClick={() => {
                    router.push('/graphicDesign');
                    window.scrollTo(0, 0);
                }}
                >
                    <span className='header-button-text'>{t('graphic-design')}</span>
                </button>
                <button className='header-button' onClick={() => {
                    router.push('/aboutMe');
                    window.scrollTo(0, 0);
                }}
                >
                    <span className='header-button-text'>{t('about-me')}</span>
                </button>
            </div>
            <LanguageChanger />
        </div>

    );
};

export default Header;
