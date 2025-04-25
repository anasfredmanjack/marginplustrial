import Image from "next/image"

export default function IndustryLeaders() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-[#004D2E] mb-4">Backed by Industry Leaders</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We collaborated with trusted financial and agricultural institutions ensure secure and profitable investments
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Image src="/images/partner1.png" alt="Partner" width={120} height={60} className="h-12 w-auto" />
          <Image src="/images/partner2.png" alt="Partner" width={120} height={60} className="h-12 w-auto" />
          <Image src="/images/partner3.png" alt="Partner" width={120} height={60} className="h-12 w-auto" />
        </div>
      </div>
    </section>
  )
}
