import Image from "next/image"
import Link from "next/link"

export default function NeedFunding() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image first on mobile, second on md+ */}
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/images/farmer.png"
              alt="Farmer with produce"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>

          {/* Content second on mobile, first on md+ */}
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-[#014F2A]">
              Need Funding for Your Agribusiness?
            </h2>
            <p className="text-black">
              Whether you`&apos;`re a smallholder farmer or scaling an agro-processing venture, Marginplus helps you connect
              with impact-driven investors ready to support your journey.
            </p>
            <div>
              <Link
                href="/apply"
                className="bg-[#014F2A] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#076a24] transition-colors inline-block"
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
