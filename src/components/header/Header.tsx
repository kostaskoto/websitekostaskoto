'use client';
import './Header.scss';
import { useRouter } from 'next/navigation';
import LanguageChanger from '../language/LanguageChanger';
import { useTranslation } from 'react-i18next';


const Header = () => {
  const router = useRouter();
  const { t } = useTranslation('header');

  return (
    <div className="header">
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
        <LanguageChanger />
    </div>

  );
};

export default Header;
