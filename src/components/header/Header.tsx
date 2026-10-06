'use client';
import './Header.scss';
import { useRouter } from 'next/navigation';
import LanguageChanger from '../language/LanguageChanger';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { localePath } from "@/lib/routes";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const router = useRouter();
    const { t } = useTranslation('header');
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={`header ${isOpen ? 'open' : 'closed'}`}>
            <div className='gradient-container'>
                <div className='gradient' />
            </div>
            <button className={`menu-icon-button ${isOpen ? '' : 'open'}`} onClick={toggleMenu}>
                <MenuIcon className='menu-icon' />
            </button>
            <button className={`close-menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <CloseIcon className='close-menu-icon' />
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <button className='header-button' onClick={() => {
                    router.push(localePath(currentLocale));
                    window.scrollTo(0, 0);
                }}
                >
                    <span className='header-button-text'>{t('home')}</span>
                </button>
                <button className='header-button' onClick={() => {
                    router.push(localePath(currentLocale, 'photography'));
                    window.scrollTo(0, 0);
                }}
                >
                    <span className='header-button-text'>{t('photography')}</span>
                </button>
                <button className='header-button' onClick={() => {
                    router.push(localePath(currentLocale, 'graphicDesign'));
                    window.scrollTo(0, 0);
                }}
                >
                    <span className='header-button-text'>{t('graphic-design')}</span>
                </button>
                <button className='header-button' onClick={() => {
                    router.push(localePath(currentLocale, 'aboutMe'));
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
