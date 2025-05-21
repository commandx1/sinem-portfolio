import ExpertiseContent from './expertiseContent';
import Head from 'next/head';

export const metadata = {
    title: 'Uzmanlık Alanları | Sinem Odalı Belen',
    description: 'İK ve İdari İşler alanında deneyimli yönetici Sinem Odalı Belen uzmanlık alanları.'
};

export default function ExpertisePage() {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://sinemodalibelen.com/uzmanliklar" />
            </Head>
            <ExpertiseContent />
        </>
    );
}
