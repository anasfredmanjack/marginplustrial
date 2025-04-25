import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="p-8 lg:-mt-10 md:-mt-10  relative overflow-hidden">
      {/* Big Background Text */}
      <div className="absolute inset-0 flex opacity-50 justify-center items-center pointer-events-none z-0">
        <h1
          className="
            text-[30vw]
            font-extrabold
            text-gray-200
            select-none
            leading-none
            tracking-tight
            whitespace-nowrap
            text-center
          "
        >
          Invest
        </h1>
      </div>

      {/* Foreground Content */}
      <div
  className="
    grid grid-cols-1 md:grid-cols-2
    justify-items-center md:justify-items-stretch
    items-stretch
    relative z-10
  "
>
  {/* Left Column */}
  <div
    className="
      max-w-lg
      flex flex-col justify-center space-y-6
      items-center md:items-start
    "
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#014F2A] leading-tight text-center md:text-left">
      Smart<br/>Investments in Agriculture
    </h1>
    <p className="text-gray-600 text-base sm:text-lg text-center md:text-left">
      Grow your wealth by investing in profitable, secure and impact-driven ventures.
    </p>
    <div>
      <Image
        src="/images/seclicense.png"
        alt="Sec License"
        width={100}
        height={36}
        className="h-9 w-auto"
      />
    </div>
    <small className="text-gray-600 text-sm text-center md:text-left">
      We are SEC licensed as a crowdfunding intermediary
    </small>
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex space-x-4">
        <Link href="https://play.google.com" className="flex items-center">
          <Image
            src="/images/playgreen.png"
            alt="Google Play"
            width={120}
            height={36}
            className="h-9 w-auto"
          />
        </Link>
        <Link href="https://apps.apple.com" className="flex items-center">
          <Image
            src="/images/applegreen.png"
            alt="App Store"
            width={120}
            height={36}
            className="h-9 w-auto"
          />
        </Link>
      </div>
    </div>
  </div>

  {/* Right Column */}
  <div
    className="
      relative w-full
      md:w-[370px] lg:w-[450px]
      h-[450px] md:h-[470px] lg:h-[550px]
      justify-self-center md:justify-self-end
    "
  >
    <Image
      src="/images/app-showcase.png"
      alt="Marginplus App"
      fill
      quality={100}
      className=""
    />
  </div>
</div>

    </section>
  )
}
