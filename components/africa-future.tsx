import Image from "next/image"

export default function AfricaFuture() {
  return (
    <section className="py-16 mt-[100px] bg-[#67D99D] relative">
      <div className="absolute inset-0 flex items-center justify-center bg-[#67D99D]">
        <div className="w-full max-w-3xl h-full flex items-center justify-center">
          <Image
            src="/images/africa-map.png"
            alt=""
            width={600}
            height={400}
            className="max-w-full max-h-full object-contain opacity-40"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto py-16">
          <h2 className="text-7xl md:text-6xl font-extrabold text-white mb-6">You are investing in Africa&apos;s Future!</h2>
          <p className="text-gray-700 mb-8 lg:w-[500px] text-2xl font-semibold  mx-auto">
            Every investment you make fuels the future by supporting farmers, businesses and sustainable wealth creation
          </p>
        </div>
      </div>
    </section>
  )
}
