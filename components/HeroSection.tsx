import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <section id="home" className="pt-36 dark:bg-dark">
        <div className="container lg:grid lg:grid-cols-2">
          <div className="w-full self-center px-4">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">Hallo 👋, {"I'm"} <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">Muhammad Baharuddin</span></h1>
            <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">Junior <span className="text-dark dark:text-white">Backend Developer</span></h2>
          </div>
          <div className="w-full self-end px-4">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <Image src="/assets/person1.jpg" alt="Baharuddin" width={250} height={250} className="relative z-10 mx-auto max-w-full bottom-20 rounded-b-full" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#14b8a6"
                    d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection;