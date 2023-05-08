import React from 'react'
import Navber from '@/components/navber.jsx'
import Card from '@/components/card'
import Mockserver from '@/components/mock'

import { MockdataProvider } from '@/context/cardContext'

export default function Home() {
  return (
    <>
    <Navber/>
    <main>
      <div className='sidebar'>sidebar</div>
      <section className='feedsection  lg:columns-3 md:columns-2 p-4'>
    <MockdataProvider>
        <Card></Card>
    </MockdataProvider>
      </section>
    </main>
    <Mockserver/>
    </>
  )
}
