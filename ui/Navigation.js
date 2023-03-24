import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const Navigation = () => {
  const router = useRouter()
  let tab=router.query.category;
  return (
    <div className='flex text-2xl px-20'>
      <div className={clsx("hover:text-red-600 grow text-center py-2",
       { "bg-red-500 text-white":tab==="business"}
      )}>
        <Link href="/news/business">
           Business
        </Link>
      </div>
      <div  className={clsx("hover:text-red-600 grow text-center py-2",
      
        { "bg-red-500 text-white":tab==="technology"}
      
      )}>
        <Link href="/news/technology">
          Technology
        </Link>
      </div>
      <div  className={clsx("hover:text-red-600 grow text-center py-2",
      
      { "bg-red-500 text-white":tab==="entertainment"}
    
    )}>
        <Link href="/news/entertainment">
          Entertainment
        </Link>
      </div >
      <div   className={clsx("hover:text-red-600 grow text-center py-2",
      
      { "bg-red-500 text-white":tab==="sports"}
    
    )}>
        <Link href="/news/sports">
          Sports
        </Link>
      </div>
      <div   className={clsx("hover:text-red-600 grow text-center py-2",
      
      { "bg-red-500 text-white":tab==="science"}
    
    )}>
          <Link href="/news/science">
            Science
          </Link>
        </div >
        <div   className={clsx("hover:text-red-600 grow text-center py-2",
      
      { "bg-red-500 text-white":tab==="general"}
    
    )}>
          <Link href="/news/general">
            General
          </Link>
        </div>
        <div  className={clsx("hover:text-red-600 grow text-center py-2",
      
      { "bg-red-500 text-white":tab==="health"}
    
    )}>
          <Link href="/news/health">
          Health
          </Link>
        </div>
      </div>
  )
}

export default Navigation