import BlogContent from './blogPage';
import Head from 'next/head';

export const metadata = {
    title: 'Blog Yazıları | Sinem Odalı Belen',
    description: 'İK ve İdari İşler alanında deneyimli yönetici Sinem Odalı Belen blog yazıları.'
};

export default function BlogPage() {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://sinemodalibelen.com/blog-yazilari" />
            </Head>
            <BlogContent />
        </>
    );
}
