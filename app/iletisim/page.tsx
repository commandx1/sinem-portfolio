'use client';

import type React from 'react';

import Link from 'next/link';
import { Download, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useForm from '../../hooks/useForm';

export const metadata = {
    title: 'İletişim | Sinem Odalı Belen',
    description: 'İK ve İdari İşler alanında deneyimli yönetici Sinem Odalı Belen ile iletişime geçebilirsiniz.'
};

export default function ContactPage() {
    const { handleChange, handleSubmit, loading, formData } = useForm();

    return (
        <main className='flex flex-col min-h-screen'>
            <section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
                <div className='container px-4 md:px-6'>
                    <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700'>
                                İletişime Geç
                            </h1>
                            <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                Yeni fırsatları, İK ile ilgili zorlukları veya sadece bağlantı kurmayı her zaman
                                memnuniyetle karşılarım.
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto grid gap-8 py-12 md:grid-cols-2'>
                        <div className='space-y-6'>
                            <div>
                                <h2 className='text-2xl font-bold text-navy-700 mb-4'>İletişim Bilgileri</h2>
                                <p className='text-gray-500 mb-6'>
                                    İletişim formunu kullanarak ya da aşağıdaki kanallardan doğrudan bana
                                    ulaşabilirsiniz:
                                </p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700'>
                                    <Mail className='h-5 w-5' />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>E-posta</p>
                                    <p className='font-medium text-navy-700'>sinemodali@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700'>
                                    <Linkedin className='h-5 w-5' />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>LinkedIn</p>
                                    <Link
                                        href='https://linkedin.com/in/sinem-odali-belen'
                                        className='font-medium text-navy-700 hover:underline'
                                    >
                                        linkedin.com/in/sinem-odali-belen
                                    </Link>
                                </div>
                            </div>
                            <div className='pt-6'>
                                <Link href='/sinem-odali-belen-cv.pdf' target='_blank' rel='noopener noreferrer'>
                                    <Button variant='outline' className='border-navy-700 text-navy-700'>
                                        CV İndir
                                        <Download className='ml-2 h-4 w-4' />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <div>
                                <h2 className='text-2xl font-bold text-navy-700 mb-4'>Mesaj Gönder</h2>
                            </div>
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div className='grid gap-4 sm:grid-cols-2'>
                                    <div className='space-y-2'>
                                        <label
                                            htmlFor='name'
                                            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                        >
                                            Adınız
                                        </label>
                                        <Input
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder='Adınız'
                                            required
                                        />
                                    </div>
                                    <div className='space-y-2'>
                                        <label
                                            htmlFor='email'
                                            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                        >
                                            E-posta
                                        </label>
                                        <Input
                                            id='email'
                                            name='email'
                                            type='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='E-posta'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='space-y-2'>
                                    <label
                                        htmlFor='subject'
                                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                    >
                                        Konu
                                    </label>
                                    <Input
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder='Konu'
                                        required
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <label
                                        htmlFor='message'
                                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                    >
                                        Mesajınız
                                    </label>
                                    <Textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Mesajınız'
                                        className='min-h-[150px]'
                                        required
                                    />
                                </div>
                                <Button
                                    loading={loading}
                                    type='submit'
                                    className='w-full bg-navy-700 hover:bg-navy-800'
                                >
                                    Mesaj Gönder
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
