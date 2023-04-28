import React from 'react'
import Navber from '@/components/navber.jsx'
import Card from '@/components/card'
import Popover from '@/components/popover-card'

export default function Home() {
  return (
    <>
    <Navber/>
    <main>
      <div className='sidebar'>sidebar</div>
      <section className='feedsection'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
      <div className='subbar'>subbar</div>
    </main>
    <Popover/>
    </>
  )
}
