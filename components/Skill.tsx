import Image from "next/image";
import html from "@image/skill/html.png";

const Skill = () => {
 return (
  <div>
      <section id="skill" className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
              <h4 className="mb-3 text-xl font-bold uppercase text-primary">Skill</h4>
              <h2 className="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl">What Can I Do</h2>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={html} width={64} height={64} alt='HTML' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>HTML</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/css.png" width={64} height={64} alt='CSS' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>CSS</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/javascript.png" width={64} height={64} alt='JavaScript' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>JavaScript</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/typescript.png" width={64} height={64} alt='TypeScript' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>TypeScript</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/java.png" width={64} height={64} alt='Java' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Java</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/cpp.png" width={64} height={64} alt='C++' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>C++</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/go.png" width={64} height={64} alt='Go' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Golang</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/visual-basic.jpg" width={64} height={64} alt='Visual Basic' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Visual Basic</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/nestjs.png" width={64} height={64} alt='Nest' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Nest</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/node.png" width={64} height={64} alt='Node' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Node</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/deno.png" width={64} height={64} alt='Deno' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Deno</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/springboot.png" width={64} height={64} alt='Spring Boot' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Spring Boot</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/nextjs.png" width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Next</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/dotnet.png" width={64} height={64} alt='NET' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>.NET</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/tailwind.png" width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Tailwind</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/bootstrap.png" width={64} height={64} alt='Bootstrap' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Bootstrap</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/mysql.png" width={64} height={64} alt='MySQL' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>MySQL</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/postgresql.png" width={64} height={64} alt='PostgreSQL' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>PostgreSQL</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/mongodb.png" width={64} height={64} alt='MongoDB' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>MongoDB</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-700'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src="/assets/skill/git.png" width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Git</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
 ) 
}

export default Skill;