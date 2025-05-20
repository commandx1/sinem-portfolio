'use client';

import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Lang = () => {
    const [locale, setLocale] = useState<string>('');
    const router = useRouter();

    const changeLocale = (newLocale: string) => {
        if (typeof window === 'undefined') return;

        setLocale(newLocale);
        document.cookie = `sinemodalibelen_locale=${newLocale}`;
        router.refresh();
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const cookieLocale = document.cookie
            .split('; ')
            .find(row => row.startsWith('sinemodalibelen_locale='))
            ?.split('=')[1];

        if (cookieLocale) {
            setLocale(cookieLocale);
        } else {
            const browserLocale = navigator.language.slice(0, 2);
            setLocale(browserLocale);
            document.cookie = `sinemodalibelen_locale=${browserLocale}`;
            router.refresh();
        }
    }, [router]);

    const locales = {
        tr: (
            <>
                <Image src='/turkey.png' alt='Türkçe' width={20} height={20} /> Türkçe
            </>
        ),
        en: (
            <>
                <Image src='/united-kingdom.png' alt='English' width={20} height={20} /> English
            </>
        )
    };
    return (
        <div
            className={
                'text-sm font-medium cursor-pointer transition-colors hover:text-navy-700 flex items-center gap-2'
            }
            onClick={() => changeLocale(locale === 'tr' ? 'en' : 'tr')}
        >
            {locale ? locales[locale as 'tr' | 'en'] : <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
        </div>
    );
};

export default Lang;
