'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Users, Building, Award, BookOpen, BarChart, Briefcase, FileText, Heart, Lightbulb } from 'lucide-react';

const ExpertiseContent = () => {
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
                                Uzmanlık Alanları
                            </h1>
                            <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                Temel İK ve idari alanlarda uzmanlık ve kanıtlanmış deneyim
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
                        {/* Expertise Card 1 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Users className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>İşe Alım & Yetenek Kazanımı</h3>
                            <p className='text-gray-500 mb-4'>
                                Kurumsal hedef ve kültüre uygun, en iyi yetenekleri çeken stratejik işe alım süreçleri.
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>Üst düzey işe alım stratejileri</li>
                                <li>İşveren markası geliştirme</li>
                                <li>Aday değerlendirme çerçeveleri</li>
                                <li>Yetenek havuzu yönetimi</li>
                            </ul>
                        </div>

                        {/* Expertise Card 2 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Building className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>İdari İşler</h3>
                            <p className='text-gray-500 mb-4'>
                                Operasyonel verimliliği ve kurumsal etkinliği artıran idari sistemler.
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>Süreç optimizasyonu</li>
                                <li>Tesis yönetimi</li>
                                <li>Tedarikçi ilişkileri yönetimi</li>
                                <li>İdari bütçe takibi</li>
                            </ul>
                        </div>

                        {/* Expertise Card 3 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Award className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>Performans Yönetimi</h3>
                            <p className='text-gray-500 mb-4'>
                                Anlamlı geri bildirimlerle çalışan gelişimini ve kurumsal başarıyı destekleyen etkili
                                sistemler.
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>Hedef belirleme çerçeveleri</li>
                                <li>360 derece geri bildirim sistemleri</li>
                                <li>Performans değerlendirme süreçleri</li>
                                <li>Takdir programı tasarımı</li>
                            </ul>
                        </div>

                        {/* Expertise Card 4 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <BookOpen className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>Eğitim & Gelişim</h3>
                            <p className='text-gray-500 mb-4'>
                                Tüm seviyelerde beceri kazandıran ve kariyer gelişimini destekleyen kapsamlı programlar.
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>Liderlik gelişim programları</li>
                                <li>Beceri boşluğu analizi</li>
                                <li>Öğrenme yönetim sistemleri</li>
                                <li>Kariyer planlama çerçeveleri</li>
                            </ul>
                        </div>

                        {/* Expertise Card 5 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <BarChart className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>İK Analitiği & Strateji</h3>
                            <p className='text-gray-500 mb-4'>
                                İş gücü planlaması ve stratejik İK girişimleri için veri odaklı yaklaşımlar.
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>İş gücü analitiği uygulamaları</li>
                                <li>İK metrikleri geliştirme</li>
                                <li>Stratejik iş gücü planlaması</li>
                                <li>İK teknolojisi seçimi</li>
                            </ul>
                        </div>

                        {/* Expertise Card 6 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Briefcase className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>Ücret & Yan Haklar</h3>
                            <p className='text-gray-500 mb-4'>
                                En iyi yetenekleri çekmek ve elde tutmak için stratejik ücret ve yan haklar programları.
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>Toplam ödül stratejisi</li>
                                <li>Maaş yapısı tasarımı</li>
                                <li>Yan haklar programı yönetimi</li>
                                <li>Üst düzey ücretlendirme</li>
                            </ul>
                        </div>

                        {/* Expertise Card 7 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <FileText className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>İK Politikaları & Uyum</h3>
                            <p className='text-gray-500 mb-4'>
                                Yasal uyumu sağlayan ve kurumsal kültürü destekleyen İK politikalarının geliştirilmesi
                                ve uygulanması.
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>Politika geliştirme ve gözden geçirme</li>
                                <li>Mevzuat uyum yönetimi</li>
                                <li>Çalışan el kitabı oluşturma</li>
                                <li>İK denetim süreçleri</li>
                            </ul>
                        </div>

                        {/* Expertise Card 8 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Heart className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>Çalışan Bağlılığı</h3>
                            <p className='text-gray-500 mb-4'>
                                Pozitif kurum kültürü ve yüksek çalışan bağlılığı sağlayan strateji ve programlar.
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>Bağlılık anketi tasarımı</li>
                                <li>Kültür oluşturma girişimleri</li>
                                <li>Çalışan deneyimi haritalama</li>
                                <li>Çalışan elde tutma stratejisi geliştirme</li>
                            </ul>
                        </div>

                        {/* Expertise Card 9 */}
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Lightbulb className='h-6 w-6' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>Organizasyonel Gelişim</h3>
                            <p className='text-gray-500 mb-4'>
                                Kurumsal etkinliği artıran ve pozitif değişimi kolaylaştıran stratejik müdahaleler.
                            </p>
                            <ul className='list-disc pl-5 text-gray-500 space-y-1'>
                                <li>Değişim yönetimi</li>
                                <li>Organizasyon tasarımı</li>
                                <li>Ekip verimliliği programları</li>
                                <li>Liderlik uyumu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default ExpertiseContent;
