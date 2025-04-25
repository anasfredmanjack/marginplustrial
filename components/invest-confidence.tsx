import Image from "next/image"
import Link from "next/link"

export default function InvestConfidence() {
  return (
    <section className=" justify-center flex items-center bg-white text-white p-8">
      <div className=" bg-[#008647] rounded-lg w-full">
        <div className="flex flex-col md:flex-row items-center p-8 gap-8">
          <div className="md:w-3/4 space-y-6">
            <h2 className="text-3xl font-bold">Invest with Confidence</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Image src="/images/check.png" alt="Check" width={20} height={20} className="mt-1 flex-shrink-0" />
                <span>Earn <i className="text-xl text-[#B2FF96]"> up to 35% return</i> on your investments</span>
              </li>
              <li className="flex items-start gap-2">
                <Image src="/images/check.png" alt="Check" width={20} height={20} className="mt-1 flex-shrink-0" />
                <span>Secure and transparent investments</span>
              </li>
              <li className="flex items-start gap-2">
                <Image src="/images/check.png" alt="Check" width={20} height={20} className="mt-1 flex-shrink-0" />
                <span>Vetted opportunities to build wealth and drive impact</span>
              </li>
            </ul>
            <div>
              <Link
                href="/invest"
                className="bg-[#B2FF96] text-[#008647] px-6 py-3 rounded-md text-sm font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                Invest Now
              </Link>
            </div>
          </div>
          <div className="md:w-full hidden md:flex  justify-center">
            <Image src="/images/shield.png" alt="Security Shield" width={250} height={250} className="" />
          </div>
        </div>
      </div>
    </section>
  )
}
