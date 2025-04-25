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
            <div className="md:flex md:flex-col grid grid-cols-2  items-center justify-between h-full text-center">
              <Image
                src="/images/crop-icon.png"
                alt="Crop Farming"
                width={80}
                height={80}
                className="md:w-30 md:h-30 h-20 w-25"
              />
              <div className=" items-start text-left md:text-center ">
              <h3 className="md:text-xl text-sm font-bold">Crop Farming</h3>
              <p className="md:text-xl text-sm md:mt-0 mt-3">
                Fund crop farms projects that turns fertile soil into nourishing harvest
              </p>
              </div>
            </div>
          </div>

          {/* Livestock Farming */}
          <div className="bg-[#0d8a30] rounded-lg md:p-6 p-3 text-white md:h-[300px] w-full ">
          <div className="md:flex md:flex-col grid grid-cols-2 gap-y-4 items-center md:justify-between h-full text-center">
              <Image
                src="/images/livestock-icon.png"
                alt="Livestock Farming"
                width={80}
                height={80}
                 className="md:w-30 md:h-25 h-20 w-30"
              />
              <div className=" items-start text-left md:text-center">
              <h3 className="md:text-xl text-md font-bold">Livestock Farming</h3>
              <p className="md:text-xl text-sm  md:mb-2 md:mt-0 mt-3">
                Support livestock projects that drive rural income and sustainable growth
              </p>
              </div>
            </div>
          </div>

          {/* Agro-Processing */}
          <div className="bg-[#B2FF96]  rounded-lg md:p-6 p-4 text-[#014F2A] md:h-[300px] w-full">
          <div className="md:flex md:flex-col grid grid-cols-2  items-center justify-between h-full text-center">
              <Image
                src="/images/processing-icon.png"
                alt="Agro-Processing"
                width={80}
                height={80}
               className="md:w-30 md:h-25 h-20 w-30"
              />
              <div className=" items-start text-left md:text-center">
              <h3 className="md:text-xl text-md font-bold">Agro-Processing</h3>
              <p className="md:text-xl text-sm  md:mt-0 mt-3">
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
