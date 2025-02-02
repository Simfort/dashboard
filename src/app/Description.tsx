import Link from "next/link";
import github from '@/images/github.svg'
import Image from "next/image";
import {rubik} from './ui/fonts'
import bitcoin from '@/images/bitcoin.png'
import crypts from '@/images/crypts.png'

export default function Description(){
    return <section className="h-[70vh] flex justify-center ml-[50px] mr-[50px] items-center  flex-wrap ">
        <div className="mt-10  bg-gray-100 min-h-[50%] flex flex-col justify-center p-[50px]  w-[700px] rounded-[20%] ">
             <p className="text-2xl mb-[20px]">This is simple example for testing and learning nextjs!  
            <Link className="inline-block ml-[20px]  hover:opacity-30" href='https://github.com/Simfort'><Image alt='github icon' width={50} src={github}/></Link></p>
            <Link className={`${rubik.className} text-2xl    flex justify-center w-[200px] p-6 bg-blue-500 text-white rounded-2xl font-bold active:opacity-30 transition duration-300 hover:bg-blue-400`} href='/login'>Log in</Link> 
        </div>
        <Image className="ml-[10%]" src={crypts} alt="bitcoin" height={600}/>
    </section>
}