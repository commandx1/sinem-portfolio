'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <main className='flex flex-col min-h-screen'>
            {/* Hero Section */}
            <motion.section
                className='w-full py-12 md:py-24 lg:py-32 bg-white'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className='container px-4 md:px-6'>
                    <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]'>
                        <div className='flex flex-col justify-center space-y-4'>
                            <div className='space-y-2'>
                                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700'>
                                    Sinem Odalı Belen
                                </h1>
                                <p className='text-xl text-pink-300 font-medium'>İK & İdari İşler Yöneticisi</p>
                                <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    "{t('ThePoint')}"
                                </p>
                            </div>
                            <div className='max-w-[600px] text-gray-500 dark:text-gray-400 space-y-4'>
                                <p>{t('Desc1')}</p>
                                <p>{t('Desc2')}</p>
                            </div>
                            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                                <Link href='/hakkimda'>
                                    <Button className='bg-navy-700 hover:bg-navy-800'>
                                        {t('Btn1')}
                                        <ArrowRight className='ml-2 h-4 w-4' />
                                    </Button>
                                </Link>
                                <Link href='/iletisim'>
                                    <Button variant='outline' className='border-navy-700 text-navy-700'>
                                        {t('Btn2')}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-[450px] w-[350px] overflow-hidden rounded-xl'>
                                <Image
                                    src='/sinem.jpeg?height=900&width=700'
                                    alt='Sinem Odalı Belen - HR Executive'
                                    fill
                                    className='object-cover'
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Expertise Preview Section */}
            <motion.section
                className='w-full py-12 md:py-24 lg:py-32 bg-beige-50'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className='container px-4 md:px-6'>
                    <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                        <div className='space-y-2'>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700'>
                                {t('ExpertiseTitle')}
                            </h2>
                            <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                {t('ExpertiseDesc')}
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12'>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Users className='h-5 w-5' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Expertise1')}</h3>
                            <p className='text-gray-500'>{t('Expertise1Desc')}</p>
                        </div>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Building className='h-5 w-5' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Expertise2')}</h3>
                            <p className='text-gray-500'>{t('Expertise2Desc')}</p>
                        </div>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Award className='h-5 w-5' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Expertise3')}</h3>
                            <p className='text-gray-500'>{t('Expertise3Desc')}</p>
                        </div>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <BookOpen className='h-5 w-5' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Expertise4')}</h3>
                            <p className='text-gray-500'>{t('Expertise4Desc')}</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Link href='/uzmanliklar'>
                            <Button variant='outline' className='border-navy-700 text-navy-700'>
                                {t('ExpertiseAll')}
                                <ArrowRight className='ml-2 h-4 w-4' />
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* Latest Articles Preview */}
            <motion.section
                className='w-full py-12 md:py-24 lg:py-32 bg-white'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <div className='container px-4 md:px-6'>
                    <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                        <div className='space-y-2'>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700'>
                                {t('LatestBlog')}
                            </h2>
                            <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                {t('LatestBlogDesc')}
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
                            <div className='aspect-video overflow-hidden'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Blog post thumbnail'
                                    width={600}
                                    height={400}
                                    className='object-cover transition-all group-hover:scale-105'
                                />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-bold text-navy-700 mb-2'>
                                    İK Yönetiminde Uzaktan Çalışmanın Geleceği
                                </h3>
                                <p className='text-gray-500 mb-4'>
                                    İK profesyonelleri, uzaktan ve hibrit çalışma ortamlarının değişen dinamiklerine
                                    nasıl uyum sağlayabilir?
                                </p>
                                <div className='flex items-center text-sm text-gray-400'>
                                    <span>June 15, 2023</span>
                                    <span className='mx-2'>•</span>
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </div>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
                            <div className='aspect-video overflow-hidden'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Blog post thumbnail'
                                    width={600}
                                    height={400}
                                    className='object-cover transition-all group-hover:scale-105'
                                />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-bold text-navy-700 mb-2'>
                                    Kapsayıcı Kurum Kültürleri Oluşturmak
                                </h3>
                                <p className='text-gray-500 mb-4'>
                                    Yenilik ve aidiyet duygusunu teşvik eden çeşitli ve kapsayıcı ortamlar oluşturma
                                    stratejileri.
                                </p>
                                <div className='flex items-center text-sm text-gray-400'>
                                    <span>May 22, 2023</span>
                                    <span className='mx-2'>•</span>
                                    <span>7 min read</span>
                                </div>
                            </div>
                        </div>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
                            <div className='aspect-video overflow-hidden'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Blog post thumbnail'
                                    width={600}
                                    height={400}
                                    className='object-cover transition-all group-hover:scale-105'
                                />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-bold text-navy-700 mb-2'>
                                    Etkili Çalışan Sağlığı Programları
                                </h3>
                                <p className='text-gray-500 mb-4'>
                                    Çalışan sağlığını ve verimliliğini destekleyen sağlık programları nasıl tasarlanır
                                    ve uygulanır?
                                </p>
                                <div className='flex items-center text-sm text-gray-400'>
                                    <span>April 8, 2023</span>
                                    <span className='mx-2'>•</span>
                                    <span>6 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Link href='/blog-yazilari'>
                            <Button variant='outline' className='border-navy-700 text-navy-700'>
                                {t('AllBlogs')}
                                <ArrowRight className='ml-2 h-4 w-4' />
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
