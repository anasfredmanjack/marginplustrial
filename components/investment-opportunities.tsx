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
          <div className="bg-[#0d8a30] rounded-lg md:p-6 p-3 text-white md:h-[300px] w-full">
            <div className="
              flex items-center text-left
              md:flex-col md:items-center md:text-center
              h-full
            ">
              <Image
                src="/images/crop-icon.png"
                alt="Crop Farming"
                width={80}
                height={80}
                className="h-20 w-25 md:h-30 md:w-30"
              />
              <div className="ml-4 md:ml-0 md:mt-4">
                <h3 className="md:text-xl text-sm font-bold">Crop Farming</h3>
                <p className="md:text-xl text-sm mt-2 md:mt-1">
                  Fund crop farms projects that turns fertile soil into nourishing harvest
                </p>
              </div>
            </div>
          </div>

          {/* Livestock Farming */}
          <div className="bg-[#0d8a30] rounded-lg md:p-6 p-3 text-white md:h-[300px] w-full">
            <div className="
              flex items-center text-left
              md:flex-col md:items-center md:text-center
              h-full md:mt-2
            ">
              <Image
                src="/images/livestock-icon.png"
                alt="Livestock Farming"
                width={80}
                height={80}
                className="h-15 w-20 md:h-23 md:w-28"
              />
              <div className="ml-4  md:ml-0 md:mt-8">
                <h3 className="md:text-xl text-md font-bold">Livestock Farming</h3>
                <p className="md:text-xl text-sm mt-2 md:mt-1">
                  Support livestock projects that drive rural income and sustainable growth
                </p>
              </div>
            </div>
          </div>

          {/* Agro-Processing */}
          <div className="bg-[#B2FF96] rounded-lg md:p-6 p-4 text-[#014F2A] md:h-[300px] w-full">
            <div className="
              flex items-center text-left
              md:flex-col md:items-center md:text-center
              h-full
            ">
              <Image
                src="/images/processing-icon.png"
                alt="Agro-Processing"
                width={80}
                height={80}
                className="h-20 w-30 md:h-30 md:w-30"
              />
              <div className="ml-4 md:ml-0 md:mt-4">
                <h3 className="md:text-xl text-md font-bold">Agro-Processing</h3>
                <p className="md:text-xl text-sm mt-2 md:mt-1">
                  Invest in agro-processing that turn raw potential into golden opportunities
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
