import Link from 'next/link';
import { Linkedin, Mail, FileText, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className='w-full border-t bg-white py-6'>
            <div className='container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6'>
                <div className='flex flex-col items-center gap-2 md:items-start'>
                    <p className='text-sm text-gray-500'>{t('Copyright')}</p>
                </div>
                <div className='flex gap-4'>
                    <Link
                        href='https://linkedin.com/in/sinem-odali-belen'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-pink-100 hover:text-navy-700'
                    >
                        <Linkedin className='h-5 w-5' />
                        <span className='sr-only'>LinkedIn</span>
                    </Link>
                    <Link
                        href='https://www.instagram.com/sinemodalii/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-pink-100 hover:text-navy-700'
                    >
                        <Instagram className='h-5 w-5' />
                        <span className='sr-only'>Instagram</span>
                    </Link>
                    <Link
                        href='/iletisim'
                        className='rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-pink-100 hover:text-navy-700'
                    >
                        <Mail className='h-5 w-5' />
                        <span className='sr-only'>E-posta</span>
                    </Link>
                    <Link
                        href='/sinem-odali-belen-cv.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-pink-100 hover:text-navy-700'
                    >
                        <FileText className='h-5 w-5' />
                        <span className='sr-only'>CV İndir</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
