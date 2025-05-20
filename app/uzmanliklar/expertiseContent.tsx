'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Users, Building, Award, BookOpen, BarChart, Briefcase, FileText, Heart, Lightbulb } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ExpertiseContent = () => {
    const t = useTranslations('ExpertisePage');
    return (
        <main className='flex flex-col min-h-screen'>
            <motion.section
                className='w-full py-12 md:py-24 lg:py-32 bg-white'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className='container px-4 md:px-6'>
                    <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700'>
                                {t('Title')}
                            </h1>
                            <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                {t('Desc')}
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
                        {/* Expertise Card 1 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Users className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Card1Title')}</h3>
                            <p className='text-gray-500 mb-4'>
                                {t('Card1Desc')}
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                {t.raw('Card1List').map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise Card 2 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Building className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Card2Title')}</h3>
                            <p className='text-gray-500 mb-4'>
                                {t('Card2Desc')}
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                {t.raw('Card2List').map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise Card 3 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Award className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Card3Title')}</h3>
                            <p className='text-gray-500 mb-4'>
                                {t('Card3Desc')}
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                {t.raw('Card3List').map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise Card 4 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <BookOpen className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Card4Title')}</h3>
                            <p className='text-gray-500 mb-4'>
                                {t('Card4Desc')}
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                {t.raw('Card4List').map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise Card 5 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <BarChart className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Card5Title')}</h3>
                            <p className='text-gray-500 mb-4'>
                                {t('Card5Desc')}
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                {t.raw('Card5List').map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise Card 6 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Briefcase className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Card6Title')}</h3>
                            <p className='text-gray-500 mb-4'>
                                {t('Card6Desc')}
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                {t.raw('Card6List').map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise Card 7 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <FileText className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Card7Title')}</h3>
                            <p className='text-gray-500 mb-4'>
                                {t('Card7Desc')}
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                {t.raw('Card7List').map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise Card 8 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Heart className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Card8Title')}</h3>
                            <p className='text-gray-500 mb-4'>
                                {t('Card8Desc')}
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                {t.raw('Card8List').map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise Card 9 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Lightbulb className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>{t('Card9Title')}</h3>
                            <p className='text-gray-500 mb-4'>
                                {t('Card9Desc')}
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                {t.raw('Card9List').map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default ExpertiseContent;
