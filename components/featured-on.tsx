import Image from "next/image"

export default function FeaturedOn() {
  return (
    <section className="bg-[#A5F48D] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <p className="text-[#008647] font-medium">Featured on:</p>
          <Image src="/images/techcrunch.png" alt="TechCrunch" width={120} height={30} className="h-6 w-auto" />
          <Image src="/images/bbc.png" alt="BBC" width={60} height={30} className="h-6 w-auto" />
          <Image src="/images/disrupt.png" alt="Disrupt" width={80} height={30} className="h-6 w-auto" />
          <Image src="/images/technosmia.png" alt="Technosmia" width={120} height={30} className="h-6 w-auto hidden md:block" />
        </div>
      </div>
    </section>
  )
}
