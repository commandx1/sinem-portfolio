'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Lang from './lang';
import { useTranslations } from 'next-intl';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const t = useTranslations('Link');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-white'>
            <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
                <Link href='/' className='flex items-center'>
                    <span className='text-xl font-bold text-navy-700'>Sinem Odalı Belen</span>
                </Link>
                <nav className='hidden md:flex gap-6'>
                    <Link
                        href='/'
                        className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                            isActive('/') ? 'text-navy-700' : 'text-gray-500'
                        }`}
                    >
                        {t('Home')}
                    </Link>
                    <Link
                        href='/hakkimda'
                        className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                            isActive('/hakkimda') ? 'text-navy-700' : 'text-gray-500'
                        }`}
                    >
                        {t('About')}
                    </Link>
                    <Link
                        href='/uzmanliklar'
                        className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                            isActive('/uzmanliklar') ? 'text-navy-700' : 'text-gray-500'
                        }`}
                    >
                        {t('Expertise')}
                    </Link>
                    <Link
                        href='/blog-yazilari'
                        className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                            isActive('/blog-yazilari') ? 'text-navy-700' : 'text-gray-500'
                        }`}
                    >
                        {t('Blog')}
                    </Link>
                    <Link
                        href='/iletisim'
                        className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                            isActive('/iletisim') ? 'text-navy-700' : 'text-gray-500'
                        }`}
                    >
                        {t('Contact')}
                    </Link>
                    <div className='border-r border-gray-200 h-5' />
                    <Lang />
                </nav>
                <div className='hidden md:flex'>
                    <Link href='/iletisim'>
                        <Button className='bg-navy-700 hover:bg-navy-800'>{t('GetInTouch')}</Button>
                    </Link>
                </div>
                <button className='md:hidden' onClick={toggleMenu}>
                    {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                </button>
            </div>
            {isMenuOpen && (
                <div className='md:hidden'>
                    <div className='container flex flex-col space-y-3 py-4 px-4 md:px-6'>
                        <Link
                            href='/'
                            className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                                isActive('/') ? 'text-navy-700' : 'text-gray-500'
                            }`}
                            onClick={toggleMenu}
                        >
                            {t('Home')}
                        </Link>
                        <Link
                            href='/hakkimda'
                            className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                                isActive('/hakkimda') ? 'text-navy-700' : 'text-gray-500'
                            }`}
                            onClick={toggleMenu}
                        >
                            {t('About')}
                        </Link>
                        <Link
                            href='/uzmanliklar'
                            className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                                isActive('/uzmanliklar') ? 'text-navy-700' : 'text-gray-500'
                            }`}
                            onClick={toggleMenu}
                        >
                            {t('Expertise')}
                        </Link>
                        <Link
                            href='/blog-yazilari'
                            className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                                isActive('/blog-yazilari') ? 'text-navy-700' : 'text-gray-500'
                            }`}
                            onClick={toggleMenu}
                        >
                            {t('Blog')}
                        </Link>
                        <Link
                            href='/iletisim'
                            className={`text-sm font-medium transition-colors hover:text-navy-700 ${
                                isActive('/iletisim') ? 'text-navy-700' : 'text-gray-500'
                            }`}
                            onClick={toggleMenu}
                        >
                            {t('Contact')}
                        </Link>
                        <div className='border-t border-gray-200' />
                        <Lang />
                        <Link href='/iletisim' onClick={toggleMenu}>
                            <Button className='w-full bg-navy-700 hover:bg-navy-800'>{t('GetInTouch')}</Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
