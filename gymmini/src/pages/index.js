import Image from 'next/image'
import Navber from '@/components/navber.js'
import Card from '@/components/card'

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
    </>
  )
}
