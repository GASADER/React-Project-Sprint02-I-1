import React from 'react'
import Navber from '@/components/navber.jsx'
import Card from '@/components/card'
import Popover from '@/components/popover-card'
import Mockserver from '@/components/mock'

import { MockdataProvider } from '@/context/cardContext'

export default function Home() {
  return (
    <>
    <Navber/>
    <main>
      <div className='sidebar'>sidebar</div>
      <section className='feedsection'>
    <MockdataProvider>
        <Card></Card>
    </MockdataProvider>
      </section>
      <div className='subbar'>subbar</div>
    </main>
    <Popover/>
    <Mockserver/>
    </>
  )
}
