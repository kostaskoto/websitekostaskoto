'use client';
import './Header.scss';
import { useRouter } from 'next/navigation';
import LanguageChanger from '../language/LanguageChanger';


const Header = () => {
  const router = useRouter();

  return (
    <div className="header">
        <button className='header-button' onClick={() => {
            router.push('/');
            window.scrollTo(0, 0);
        }}
            >
                <span className='header-button-text'>Home</span>
        </button>
        <button className='header-button' onClick={() => {
            router.push('/photography');
            window.scrollTo(0, 0);
        }}
        >
            <span className='header-button-text'>Photography</span>
        </button>
        <button className='header-button' onClick={() => {
            router.push('/graphicDesign');
            window.scrollTo(0, 0);
        }}
        >
            <span className='header-button-text'>Graphic Design</span>
        </button>
        <button className='header-button' onClick={() => {
            router.push('/aboutMe');
            window.scrollTo(0, 0);
        }}
        >
            <span className='header-button-text'>About Me</span>
        </button>
        <LanguageChanger />
    </div>

  );
};

Header.propTypes = {};

export default Header;
