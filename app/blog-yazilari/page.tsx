import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700">
                İK Blogu
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Modern İK uygulamaları ve işyeri dinamikleri üzerine düşünceler
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  width={600}
                  height={400}
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-700 mb-2">İK Yönetiminde Uzaktan Çalışmanın Geleceği</h3>
                <p className="text-gray-500 mb-4">
                  İK profesyonelleri, uzaktan ve hibrit çalışma ortamlarının değişen dinamiklerine nasıl uyum sağlayabilir?
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>June 15, 2023</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <Link href="/blog/future-of-remote-work">
                  <Button variant="outline" className="w-full border-navy-700 text-navy-700">
                    Makaleyi Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  width={600}
                  height={400}
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-700 mb-2">Kapsayıcı Kurum Kültürleri Oluşturmak</h3>
                <p className="text-gray-500 mb-4">
                  Yenilik ve aidiyet duygusunu teşvik eden çeşitli ve kapsayıcı ortamlar oluşturma stratejileri.
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>May 22, 2023</span>
                  <span className="mx-2">•</span>
                  <span>7 min read</span>
                </div>
                <Link href="/blog/inclusive-workplace-cultures">
                  <Button variant="outline" className="w-full border-navy-700 text-navy-700">
                    Makaleyi Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  width={600}
                  height={400}
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-700 mb-2">Etkili Çalışan Sağlığı Programları</h3>
                <p className="text-gray-500 mb-4">
                  Çalışan sağlığını ve verimliliğini destekleyen sağlık programları nasıl tasarlanır ve uygulanır?
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>April 8, 2023</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>
                <Link href="/blog/employee-wellness-programs">
                  <Button variant="outline" className="w-full border-navy-700 text-navy-700">
                    Makaleyi Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  width={600}
                  height={400}
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-700 mb-2">Belirsiz Dönemlerde Stratejik İş Gücü Planlaması</h3>
                <p className="text-gray-500 mb-4">
                  Değişen piyasalarda iş ihtiyaçları ile uyumu sağlayan iş gücü planlama yaklaşımları.
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>March 12, 2023</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
                <Link href="/blog/strategic-workforce-planning">
                  <Button variant="outline" className="w-full border-navy-700 text-navy-700">
                    Makaleyi Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  width={600}
                  height={400}
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-700 mb-2">Modern İK Uygulamalarında Yapay Zekânın Rolü</h3>
                <p className="text-gray-500 mb-4">
                  Yapay zekânın işe alım, çalışan bağlılığı ve İK analitiği üzerindeki etkileri.
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>February 28, 2023</span>
                  <span className="mx-2">•</span>
                  <span>9 min read</span>
                </div>
                <Link href="/blog/ai-in-hr">
                  <Button variant="outline" className="w-full border-navy-700 text-navy-700">
                    Makaleyi Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  width={600}
                  height={400}
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-700 mb-2">Etkili Liderlik Gelişim Programları Oluşturmak</h3>
                <p className="text-gray-500 mb-4">
                  Kurumunuzda yeni nesil liderleri geliştirmek için en iyi uygulamalar.
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>January 15, 2023</span>
                  <span className="mx-2">•</span>
                  <span>7 min read</span>
                </div>
                <Link href="/blog/leadership-development">
                  <Button variant="outline" className="w-full border-navy-700 text-navy-700">
                    Makaleyi Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
