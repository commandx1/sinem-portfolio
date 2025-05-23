import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sinem Odalı Belen | İK & İdari İşler Yöneticisi',
    description:
        'Sinem Odalı Belen için profesyonel web sitesi. Stratejik liderlik ve insan odaklı çözümler konusunda deneyimli bir İK ve İdari İşler Yöneticisi.',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png'
    },
    openGraph: {
        title: 'Sinem Odalı Belen | İK & İdari İşler Yöneticisi',
        description:
            'Sinem Odalı Belen için profesyonel web sitesi. Stratejik liderlik ve insan odaklı çözümler konusunda deneyimli bir İK ve İdari İşler Yöneticisi.',
        url: 'https://sinemodalibelen.com',
        siteName: 'Sinem Odalı Belen',
        locale: 'tr',
        type: 'website'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true
        }
    },
    verification: {
        google: 'LO6X6u7BAC8yb3Kv08g_6B2VZ69tOk9Gkplkpkq9sj0'
    }
};

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [messages, locale] = await Promise.all([getMessages(), getLocale()]);

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
                    <NextIntlClientProvider messages={messages} locale={locale}>
                        <Toaster />
                        <div className='flex min-h-screen flex-col'>
                            <Header />
                            {children}
                            <Footer />
                        </div>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
