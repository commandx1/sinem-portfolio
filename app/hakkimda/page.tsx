import AboutContent from './aboutPage';
import Head from 'next/head';

export const metadata = {
    title: 'Hakkımda | Sinem Odalı Belen',
    description: 'İK ve İdari İşler alanında deneyimli yönetici Sinem Odalı Belen hakkında bilgiler.'
};

export default function AboutPage() {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://sinemodalibelen.com/hakkimda" />
            </Head>
            <AboutContent />
        </>
    );
}
