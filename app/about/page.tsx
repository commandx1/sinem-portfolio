import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700">
                  Hakkımda
                </h1>
                <p className="text-xl text-pink-300 font-medium">İK & İdari Liderlikte Yolculuğum</p>
              </div>
              <div className="max-w-[600px] text-gray-500 dark:text-gray-400 space-y-4">
                <p>
                  8 yılı aşkın süredir üst düzey İnsan Kaynakları ve İdari İşler tecrübesiyle, çalışanların geliştiği ve işletmelerin başarılı olduğu insan odaklı organizasyonlar inşa etmeye adadım.
                </p>
                <p>
                  Stratejik vizyonu pratik uygulamalarla birleştirerek, İK girişimlerinin kurumsal hedeflerle uyumlu olmasını ve tüm seviyelerdeki çalışanların gerçek ihtiyaçlarını karşılamasını sağlıyorum.
                </p>
                <p>
                  Kariyerim boyunca yetenek kazanımı, performans yönetimi, organizasyonel gelişim ve idari verimlilik alanlarında dönüşüm sağlayan projelere liderlik ettim.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-navy-700 hover:bg-navy-800">
                    İletişime Geç
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/cv.pdf">
                  <Button variant="outline" className="border-navy-700 text-navy-700">
                    CV İndir
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[450px] w-[350px] overflow-hidden rounded-xl">
                <Image
                  src="/sinem.jpeg?height=900&width=700"
                  alt="Sinem Odalı Belen - HR Executive"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-beige-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Kariyer Yolculuğu
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Profesyonel deneyimlerim ve önemli başarılarımın zaman çizelgesi
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            {/* Timeline Item 1 */}
            <div className="relative pl-8 pb-12 border-l border-gray-200">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-navy-700"></div>
              <div className="mb-2">
                <span className="inline-block rounded bg-pink-100 px-3 py-1 text-sm font-medium text-navy-700">
                  2020 - Present
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-2">Global İK & İdari İşler Direktörü</h3>
              <p className="text-lg text-gray-600 mb-1">XYZ International Corporation</p>
              <ul className="list-disc pl-5 text-gray-500 space-y-1">
                <li>5 global ofiste 25 kişilik İK ekibine liderlik ettim</li>
                <li>Performans yönetim sistemini yeniden tasarlayarak çalışan memnuniyetini %32 artırdım</li>
                <li>İdari süreçleri sadeleştirerek operasyonel maliyetleri %18 azalttım</li>
                <li>Çeşitlilik ve kapsayıcılık girişimleriyle iş gücü çeşitliliğini %27 artırdım</li>
              </ul>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 pb-12 border-l border-gray-200">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-navy-700"></div>
              <div className="mb-2">
                <span className="inline-block rounded bg-pink-100 px-3 py-1 text-sm font-medium text-navy-700">
                  2015 - 2020
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-2">Kıdemli İK Müdürü</h3>
              <p className="text-lg text-gray-600 mb-1">ABC Tech Solutions</p>
              <ul className="list-disc pl-5 text-gray-500 space-y-1">
                <li>Kapsamlı bir yetenek kazanım stratejisi geliştirdim ve uyguladım</li>
                <li>Liderlik gelişim programı oluşturarak %40 iç terfi oranı sağladım</li>
                <li>200'den 800'e hızla büyüyen bir organizasyonun İK operasyonlarını yönettim</li>
                <li>Şirket genelinde kültürel dönüşüm projesine liderlik ettim</li>
              </ul>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 pb-12 border-l border-gray-200">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-navy-700"></div>
              <div className="mb-2">
                <span className="inline-block rounded bg-pink-100 px-3 py-1 text-sm font-medium text-navy-700">
                  2010 - 2015
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-2">İK İş Ortağı</h3>
              <p className="text-lg text-gray-600 mb-1">Global Innovations Inc.</p>
              <ul className="list-disc pl-5 text-gray-500 space-y-1">
                <li>İK stratejisini iş hedefleriyle uyumlu hale getirmek için üst yönetimle birlikte çalıştım</li>
                <li>Birden fazla iş biriminde (300+ çalışan) tam çalışan yaşam döngüsünü yönettim</li>
                <li>Oryantasyon sürecini yeniden tasarlayarak işe başlama süresini %25 azalttım</li>
                <li>Çalışan bağlılığını ve elde tutmayı artırmak için çapraz fonksiyonel projeler yönettim</li>
              </ul>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative pl-8 border-l border-gray-200">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-navy-700"></div>
              <div className="mb-2">
                <span className="inline-block rounded bg-pink-100 px-3 py-1 text-sm font-medium text-navy-700">
                  2007 - 2010
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-2">İK Uzmanı</h3>
              <p className="text-lg text-gray-600 mb-1">Enterprise Solutions Ltd.</p>
              <ul className="list-disc pl-5 text-gray-500 space-y-1">
                <li>Çeşitli departmanlarda işe alım ve seçme süreçlerini yönettim</li>
                <li>Çalışanlar ve yöneticiler için eğitim programları geliştirdim ve sundum</li>
                <li>Yan haklar ve ücret programlarını yönettim</li>
                <li>Organizasyonel değişim yönetimi girişimlerini destekledim</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700 mb-8">Eğitim</h2>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy-700">İşletme Yüksek Lisansı (MBA)</h3>
                  <p className="text-gray-600">Harvard Business School</p>
                  <p className="text-gray-500">2012 - 2014</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy-700">İnsan Kaynakları Yönetimi Lisans</h3>
                  <p className="text-gray-600">University of Pennsylvania</p>
                  <p className="text-gray-500">2003 - 2007</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700 mb-8">Sertifikalar</h2>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy-700">Kıdemli İnsan Kaynakları Uzmanı (SPHR)</h3>
                  <p className="text-gray-600">HR Certification Institute</p>
                  <p className="text-gray-500">2018</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy-700">Certified Diversity Professional (CDP)</h3>
                  <p className="text-gray-600">Institute for Diversity Certification</p>
                  <p className="text-gray-500">2019</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy-700">Project Management Professional (PMP)</h3>
                  <p className="text-gray-600">Project Management Institute</p>
                  <p className="text-gray-500">2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
