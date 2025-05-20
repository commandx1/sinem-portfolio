'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const AboutPage = () => {
    const t = useTranslations('AboutPage');
    return (
        <main className='flex flex-col min-h-screen'>
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
                                    {t('Title')}
                                </h1>
                                <p className='text-xl text-pink-300 font-medium'>{t('Pink')}</p>
                            </div>
                            <div className='max-w-[600px] text-gray-500 dark:text-gray-400 space-y-4'>
                                <p>{t('Desc1')}</p>
                                <p>{t('Desc2')}</p>
                                <p>{t('Desc3')}</p>
                            </div>
                            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                                <Link href='/iletisim'>
                                    <Button className='bg-navy-700 hover:bg-navy-800'>
                                        {t('Btn1')}
                                        <ArrowRight className='ml-2 h-4 w-4' />
                                    </Button>
                                </Link>
                                <Link href='/sinem-odali-belen-cv.pdf' target='_blank' rel='noopener noreferrer'>
                                    <Button variant='outline' className='border-navy-700 text-navy-700'>
                                        {t('Btn2')}
                                        <Download className='ml-2 h-4 w-4' />
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
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Career Timeline */}
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
                                {t('Adventure')}
                            </h2>
                            <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                {t('AdventureDesc')}
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto max-w-3xl py-12'>
                        {/* Timeline Item 1 */}
                        <div className='relative pl-8 pb-12 border-l border-gray-200'>
                            <div className='absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-navy-700'></div>
                            <div className='mb-2'>
                                <span className='inline-block rounded bg-pink-100 px-3 py-1 text-sm font-medium text-navy-700'>
                                    2016 - 2024
                                </span>
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('job1.Title')}</h3>
                            <p className='text-lg text-gray-600 mb-1'>{t('job1.Desc')}</p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>{t('job1.Bullet1')}</li>
                                <li>{t('job1.Bullet2')}</li>
                                <li>{t('job1.Bullet3')}</li>
                                <li>{t('job1.Bullet4')}</li>
                                <li>{t('job1.Bullet5')}</li>
                                <li>{t('job1.Bullet6')}</li>
                                <li>{t('job1.Bullet7')}</li>
                                <li>{t('job1.Bullet8')}</li>
                                <li>{t('job1.Bullet9')}</li>
                                <li>{t('job1.Bullet10')}</li>
                                <li>{t('job1.Bullet11')}</li>
                                <li>{t('job1.Bullet12')}</li>
                                <li>{t('job1.Bullet13')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Education & Certifications */}
            <motion.section
                className='w-full py-12 md:py-24 lg:py-32 bg-white'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <div className='container px-4 md:px-6'>
                    <div className='grid gap-10 lg:grid-cols-2'>
                        <div>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700 mb-8'>
                                {t('Education.Title')}
                            </h2>
                            <div className='space-y-8'>
                                <div className='space-y-2'>
                                    <h3 className='text-xl font-bold text-navy-700'>{t('Education.Part1.Title')}</h3>
                                    <p className='text-gray-600'>{t('Education.Part1.University')}</p>
                                    <p className='text-gray-500'>{t('Education.Part1.Date')}</p>
                                </div>
                                <div className='space-y-2'>
                                    <h3 className='text-xl font-bold text-navy-700'>{t('Education.Part2.Title')}</h3>
                                    <p className='text-gray-600'>{t('Education.Part2.University')}</p>
                                    <p className='text-gray-500'>{t('Education.Part2.Date')}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700 mb-8'>
                                {t('Certififaces.Title')}
                            </h2>
                            <div className='space-y-8'>
                                <div className='space-y-2'>
                                    <h3 className='text-xl font-bold text-navy-700'>{t('Certififaces.Part1.Title')}</h3>
                                    <p className='text-gray-600'>{t('Certififaces.Part1.Organization')}</p>
                                    <p className='text-gray-500'>{t('Certififaces.Part1.Date')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default AboutPage;
