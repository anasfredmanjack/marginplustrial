import Image from "next/image"
import Link from "next/link"

export default function AppShowcase() {
  return (
    <>
      {/* Mobile: show the phone above the section, and hide the desktop version */}
      <div className="flex justify-center md:hidden relative mt-12">
  <Image
    src="/images/app-screen.png"
    alt="Marginplus App Screen"
    width={300}
    height={1000}
  />
</div>


      <section className="bg-[#076a24] text-white relative md:h-[300px] overflow-visible lg:mt-32 md:mt-32">
        {/* Tablet & desktop:  show desktop phone image version section */}
        <div className="hidden md:block absolute top-23 left-4 transform -translate-y-1/2 z-10">
          <Image
            src="/images/app-screen.png"
            alt="Marginplus App Screen"
            width={300}
            height={1000}
          />
        </div>

        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
 
            <div className="hidden md:block" />

            {/* Content only */}
            <div className="space-y-6 md:col-span-1">
              <h2 className="text-2xl font-bold">
                Thousands of Africans are already transforming their financial future with Marginplus.
              </h2>

              <div className="flex mb-6">
                <Image
                  src="/images/user-avatars.png"
                  alt="User Avatars"
                  width={200}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>

              <div className="flex space-x-4 p-2 sm:p-6 md:p-0">
  <Link href="https://play.google.com" className="flex items-center z-20">
    <Image
      src="/images/google-play.png"
      alt="Google Play"
      width={120}
      height={36}
      className="h-9 w-auto"
    />
  </Link>
  <Link href="https://apps.apple.com" className="flex items-center z-20">
    <Image
      src="/images/app-store.png"
      alt="App Store"
      width={120}
      height={36}
      className="h-9 w-auto"
    />
  </Link>
</div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
