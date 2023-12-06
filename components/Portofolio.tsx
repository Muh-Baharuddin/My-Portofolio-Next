import Image from "next/image";

const Portofolio = () => {
  return (
    <div>
      <section id="portfolio" className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Project Terbaru</h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus porro consequuntur alias, commodi nemo enim aliquam ipsam obcaecati? Assumenda, ipsam?
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md">
                <Image src="/portofolio1.png" alt="Deno Rest API" width={600} height={260}/>
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Deno Rest API</h3>
              <p className="text-base font-medium text-secondary">Create Rest API using Deno Framework with TypeScript as Programming Language and MongoDB as Database. Check My Repo here : <a href="https://github.com/Muh-Baharuddin/Rest-Api-Deno-Oak">Github</a></p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md">
                <Image src="/portofolio2.png" alt="Mar Fashion" width={530} height={260}/>
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Mar Fashion</h3>
              <p className="text-base font-medium text-secondary">Create Website Using Next Js Framework with TypeScript as Programming Language and bootstrap. Check My Repo here : <a href="https://github.com/Muh-Baharuddin/Mar-Fashion-FE">Github</a></p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md">
                {/* <img src="dist/img/portfolio/3.png" alt="Rest Api" width="w-full" /> */}
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Rest Api</h3>
              <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md">
                {/* <img src="dist/img/portfolio/4.png" alt="Rest Api" width="w-full" /> */}
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Rest Api</h3>
              <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portofolio;