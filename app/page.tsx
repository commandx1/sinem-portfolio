import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <main className='flex flex-col min-h-screen'>
            {/* Hero Section */}
            <section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
                <div className='container px-4 md:px-6'>
                    <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]'>
                        <div className='flex flex-col justify-center space-y-4'>
                            <div className='space-y-2'>
                                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700'>
                                    Sinem Odalı Belen
                                </h1>
                                <p className='text-xl text-pink-300 font-medium'>İK & İdari İşler Yöneticisi</p>
                                <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    "İnsanlar en değerli varlığımızdır"
                                </p>
                            </div>
                            <div className='max-w-[600px] text-gray-500 dark:text-gray-400 space-y-4'>
                                <p>
                                    8 yılı aşkın İnsan Kaynakları ve İdari İşler tecrübemle, organizasyonel başarıyı
                                    destekleyen insan odaklı stratejiler geliştiriyorum.
                                </p>
                                <p>
                                    Stratejik liderliği pratik çözümlerle birleştirerek, güçlü kurum kültürleri ve
                                    verimli idari sistemler kuruyorum.
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                                <Link href='/hakkimda'>
                                    <Button className='bg-navy-700 hover:bg-navy-800'>
                                        Hakkımda Daha Fazla
                                        <ArrowRight className='ml-2 h-4 w-4' />
                                    </Button>
                                </Link>
                                <Link href='/iletisim'>
                                    <Button variant='outline' className='border-navy-700 text-navy-700'>
                                        İletişime Geç
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
            </section>

            {/* Expertise Preview Section */}
            <section className='w-full py-12 md:py-24 lg:py-32 bg-beige-50'>
                <div className='container px-4 md:px-6'>
                    <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                        <div className='space-y-2'>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700'>
                                Uzmanlık Alanları
                            </h2>
                            <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                Temel İK ve idari alanlarda uzmanlık ve kanıtlanmış deneyim
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12'>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Users className='h-5 w-5' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>İşe Alım & Yetenek</h3>
                            <p className='text-gray-500'>
                                Kurumsal hedeflerle uyumlu, en iyi yetenekleri çeken stratejik işe alım süreçleri
                            </p>
                        </div>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Building className='h-5 w-5' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>İdari İşler</h3>
                            <p className='text-gray-500'>Operasyonel verimliliği artıran idari sistemler</p>
                        </div>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <Award className='h-5 w-5' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>Performans Yönetimi</h3>
                            <p className='text-gray-500'>
                                Çalışan gelişimini ve kurumsal başarıyı destekleyen etkili sistemler
                            </p>
                        </div>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-navy-700 mb-4'>
                                <BookOpen className='h-5 w-5' />
                            </div>
                            <h3 className='text-xl font-bold text-navy-700 mb-2'>Eğitim & Gelişim</h3>
                            <p className='text-gray-500'>
                                Becerileri geliştiren ve kariyer ilerlemesini destekleyen kapsamlı programlar
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Link href='/uzmanliklar'>
                            <Button variant='outline' className='border-navy-700 text-navy-700'>
                                Tüm Uzmanlık Alanlarını Görüntüle
                                <ArrowRight className='ml-2 h-4 w-4' />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Latest Articles Preview */}
            <section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
                <div className='container px-4 md:px-6'>
                    <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                        <div className='space-y-2'>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700'>
                                Son Yazılar
                            </h2>
                            <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                Modern İK uygulamaları ve işyeri dinamikleri üzerine düşünceler
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
                            <div className='aspect-video overflow-hidden'>
                                <Image
                                    src='https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1200?height=400&width=600'
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
                                    src='https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1200?height=400&width=600'
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
                                    src='https://images.pexels.com/photos/32048352/pexels-photo-32048352/free-photo-of-dikis-makinelerini-kullanan-tekstil-fabrikasi-iscileri.jpeg?auto=compress&cs=tinysrgb&w=1200?height=400&width=600'
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
                                Tüm Yazıları Gör
                                <ArrowRight className='ml-2 h-4 w-4' />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
