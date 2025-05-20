'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
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
                                    Hakkımda
                                </h1>
                                <p className='text-xl text-pink-300 font-medium'>İK & İdari Liderlikte Yolculuğum</p>
                            </div>
                            <div className='max-w-[600px] text-gray-500 dark:text-gray-400 space-y-4'>
                                <p>
                                    8 yılı aşkın süredir üst düzey İnsan Kaynakları ve İdari İşler tecrübesiyle,
                                    çalışanların geliştiği ve işletmelerin başarılı olduğu insan odaklı organizasyonlar
                                    inşa etmeye adadım.
                                </p>
                                <p>
                                    Stratejik vizyonu pratik uygulamalarla birleştirerek, İK girişimlerinin kurumsal
                                    hedeflerle uyumlu olmasını ve tüm seviyelerdeki çalışanların gerçek ihtiyaçlarını
                                    karşılamasını sağlıyorum.
                                </p>
                                <p>
                                    Kariyerim boyunca yetenek kazanımı, performans yönetimi, organizasyonel gelişim ve
                                    idari verimlilik alanlarında dönüşüm sağlayan projelere liderlik ettim.
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                                <Link href='/contact'>
                                    <Button className='bg-navy-700 hover:bg-navy-800'>
                                        İletişime Geç
                                        <ArrowRight className='ml-2 h-4 w-4' />
                                    </Button>
                                </Link>
                                <Link href='/sinem-odali-belen-cv.pdf' target='_blank' rel='noopener noreferrer'>
                                    <Button variant='outline' className='border-navy-700 text-navy-700'>
                                        CV İndir
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
                                Kariyer Yolculuğu
                            </h2>
                            <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                Profesyonel deneyimlerim ve önemli başarılarımın zaman çizelgesi
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
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>İK & İdari İşler Müdürü</h3>
                            <p className='text-lg text-gray-600 mb-1'>VUR-MAK VURUSKAN MAKİNA SAN. VE TİC. A.S</p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>
                                    300+ çalışanın bulunduğu üretim tesisinde tam kapsamlı İK süreçlerini yönettim; işe
                                    alım, oryantasyon, performans yönetimi, bordrolama ve işten çıkış görüşmeleri dahil
                                    olmak üzere çalışan yaşam döngüsünün her aşamasını kapsayan sistemler geliştirdim.
                                </li>
                                <li>
                                    İş Kanunu, SGK ve İSG mevzuatlarına tam hakimiyetle şirketin tüm yasal süreçlerini
                                    sorunsuz yürüttüm; eksik gün bildirimi, SGK tahakkuku, BES işlemleri, E-Vizite
                                    süreçleri ve resmi kurum yazışmalarını eksiksiz yönettim.
                                </li>
                                <li>
                                    Bordrolama ve puantaj takibi süreçlerini dijitalleştirerek operasyonel verimliliği
                                    %20 artırdım, maliyetlendirme analizleriyle İK bütçesinde %15 optimizasyon sağladım.
                                </li>
                                <li>
                                    Fabrika genelinde servis, güvenlik, temizlik, yemek gibi idari hizmetlerin
                                    kesintisiz ve verimli yürütülmesini sağladım; bu süreçlerdeki sadeleştirmelerle
                                    operasyonel maliyetlerde %18 düşüş sağladım.
                                </li>
                                <li>
                                    İşe giriş-çıkış süreçlerinde özlük dosyalarının KVKK'ya uygun şekilde hazırlanmasını
                                    ve güncel tutulmasını sağlayarak denetimlerde %100 uyum elde ettim.
                                </li>
                                <li>
                                    Yıllık izin, maaş avansı, geçici görev takibi gibi kritik personel yönetimi
                                    alanlarında manuel süreçleri dijital sistemlere entegre ederek hata oranını minimize
                                    ettim.
                                </li>
                                <li>
                                    Mavi ve beyaz yaka çalışanların pasaport ve vize işlemlerini yürüterek yurt dışı
                                    görevlendirmelerde gecikmeleri önledim.
                                </li>
                                <li>
                                    Performans değerlendirme sistemini yeniden kurgulayarak çalışan memnuniyetini %32
                                    artırdım; bu doğrultuda iç terfi oranlarını yükseltmek için liderlik gelişim
                                    programları oluşturup %40 iç terfi oranı sağladım.
                                </li>
                                <li>
                                    İSG Uzmanları ile koordineli çalışarak iş sağlığı ve güvenliği kültürünü
                                    güçlendirdim; atık bertaraf süreçlerinde çevre mevzuatına tam uyum sağladım.
                                </li>
                                <li>
                                    Kariyer yönetimi ve eğitim ihtiyaç analizi doğrultusunda gelişim planları oluşturup
                                    personelin bireysel hedefleriyle kurumsal hedefleri uyumlu hale getirdim.
                                </li>
                                <li>
                                    Çalışan bağlılığını artırmak için memnuniyet anketleri düzenledim ve motivasyon
                                    artırıcı etkinlikler planladım.
                                </li>
                                <li>
                                    Resmî Gazete'yi günlük takip ederek yasal düzenlemeleri anlık olarak süreçlere
                                    entegre ettim.
                                </li>
                                <li>
                                    Microsoft Office ve CANIAS ERP sistemlerine ileri düzeyde hakimiyetle tüm İK
                                    süreçlerinde teknolojiyi etkin kullandım.
                                </li>
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
                                Eğitim
                            </h2>
                            <div className='space-y-8'>
                                <div className='space-y-2'>
                                    <h3 className='text-xl font-bold text-navy-700'>Sosyoloji</h3>
                                    <p className='text-gray-600'>Anadolu Üniversitesi</p>
                                    <p className='text-gray-500'>2023 - Devam Ediyor</p>
                                </div>
                                <div className='space-y-2'>
                                    <h3 className='text-xl font-bold text-navy-700'>Halkla İlişkiler ve Tanıtım</h3>
                                    <p className='text-gray-600'>Namık Kemal Üniversitesi</p>
                                    <p className='text-gray-500'>2013 - 2016</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700 mb-8'>
                                Sertifikalar
                            </h2>
                            <div className='space-y-8'>
                                <div className='space-y-2'>
                                    <h3 className='text-xl font-bold text-navy-700'>
                                        Stratejik İnsan Kaynakları Yönetimi
                                    </h3>
                                    <p className='text-gray-600'>IIENSTITU</p>
                                    <p className='text-gray-500'>2022</p>
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
