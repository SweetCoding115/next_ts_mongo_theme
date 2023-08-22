import Image from 'next/image';
import Link from 'next/link'
import { BsPostcardHeart } from 'react-icons/bs';

import Header from 'components/Header'
import TwinMobile from '../public/TwinMobile.png'

export default function Home() {

  return (
    <div>
      <Header>Next.js with TypeScript and MongoDB</Header>
      <div className="px-2 py-6 flex flex-col w-full">
        <Link href='/posts' className='flex flex-row btn glass text-black dark:text-white gap-2 dark:hover:btn-danger w-full'>
          <BsPostcardHeart /> Posts
        </Link>
        <div className="flex flex-row max-w-[1300px] h-[85vh] items-center mx-auto">
          <div className="flex-col xl:space-y-10 space-y-8 w-3/5 mx-auto justify-center text-center px-24">
            <p className='text-xl lg:text-2xl xl:text-3xl'>Моя самая популярная</p>
            <h2 className='text-3xl lg:text-4xl xl:text-5xl font-bold'><span className='text-purple-400' >Полная</span> образовательная программа</h2>
            <p className='text-sm lg:text-md xl:text-xl'>поступила в продажу в течение ограниченного времени</p>
            <div className='text-sm lg:text-md xl:text-xl text-start border-l-2 border-indigo-500 pl-4 lg:pl-8 xl:pl-16'>
              Создайте богатство через<br/> Овладение техническим анализом<br/> для крипто
            </div>
            <div className='flex-col lg:flex-row flex justify-around items-center lg:space-y-0 space-y-5 mx-8'>
              <Link
                href='/posts'
                className='flex-row lg:flex-col btn btn-primary btn-sm rounded-full'
              >
                <span className='text-md'>
                  Купить курс
                </span>
              </Link>
              <div className='flex-row lg:flex-col text-md'>
                * Подходит для трейдеров и <br/>долгосрочных инвесторов
              </div>
            </div>
          </div>
          <div className="flex-col w-2/5 items-center">
            <Image
              src={TwinMobile}
              className='m-auto invert dark:filter-none'
              height={500}
              alt='TwinMobile'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
