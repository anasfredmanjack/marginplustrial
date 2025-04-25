import Image from "next/image"

export default function InvestmentOpportunities() {
  return (
    <section className="bg-white relative -mb-10">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#076a24] text-center mb-10">
          Diverse Investment Opportunities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Crop Farming */}
          <div className="bg-[#0d8a30] rounded-lg p-6 text-white h-[300px] w-full">
            <div className="flex flex-col items-center justify-between h-full text-center">
              <Image
                src="/images/crop-icon.png"
                alt="Crop Farming"
                width={80}
                height={80}
                className="w-30 h-30"
              />
              <h3 className="text-xl font-bold">Crop Farming</h3>
              <p className="text-xl">
                Fund crop farms projects that turns fertile soil into nourishing harvest
              </p>
            </div>
          </div>

          {/* Livestock Farming */}
          <div className="bg-[#0d8a30] rounded-lg p-6 text-white h-[300px] w-full">
            <div className="flex flex-col items-center justify-between h-full text-center">
              <Image
                src="/images/livestock-icon.png"
                alt="Livestock Farming"
                width={80}
                height={80}
                className="w-30 h-25"
              />
              <h3 className="text-xl font-bold">Livestock Farming</h3>
              <p className="text-xl mb-2">
                Support livestock projects that drive rural income and sustainable growth
              </p>
            </div>
          </div>

          {/* Agro-Processing */}
          <div className="bg-[#B2FF96] rounded-lg p-6 text-[#014F2A] h-[300px] w-full">
            <div className="flex flex-col items-center justify-between h-full text-center">
              <Image
                src="/images/processing-icon.png"
                alt="Agro-Processing"
                width={80}
                height={80}
                className="w-30 h-30"
              />
              <h3 className="text-xl font-bold">Agro-Processing</h3>
              <p className="text-xl">
                Invest in agro-processing that turn raw potential into golden opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
