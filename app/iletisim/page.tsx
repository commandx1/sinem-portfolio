import ContactForm from './contactForm';
import Head from 'next/head';

export const metadata = {
    title: 'İletişim | Sinem Odalı Belen',
    description: 'İK ve İdari İşler alanında deneyimli yönetici Sinem Odalı Belen ile iletişime geçebilirsiniz.'
};

export default function ContactPage() {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://sinemodalibelen.com/iletisim" />
            </Head>
            <ContactForm />
        </>
    );
}
