import React from 'react'

import MainLayout from '../layout/MainLayout'

import { Slide } from 'react-slideshow-image';

function HomePage() {

  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
  ];

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }

  return (
    <MainLayout>
      <div className='min-h-screen pt-10 pl-10 pr-10 flex justify-between'>
        <div>
          <h1 className='text-left font-bolts-sf'><span className='text-edit-blue text-9xl'>EDIT</span><br /><span className='text-edit-yellow text-8xl'>CODE SCHOOL</span></h1>
          <h2 className='text-5xl italic text-edit-blue font-bolts-sf'>Znanje dostupno svima</h2>
        </div>

        <div className='w-5/12 h-full'>
          <Slide arrows={false}>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} />
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-6xl font-bolts-sf text-edit-blue text-center'>O nama</h1>
          <p className='text-2xl text-center'>Edit Code School je škola programiranja koja nudi kvalitetne i pristupačne radionice za sve uzraste. Naši predavači su stručnjaci u svojim područjima i uvijek su spremni pomoći.</p>
        </div>
        <div>
          <h1 className='text-6xl font-bolts-sf text-edit-blue text-center'>Radionice</h1>
          <p className='text-2xl text-center'>Naša škola nudi radionice iz raznih područja programiranja. Pogledajte naš raspored radionica i prijavite se na neku od njih.</p>
        </div>
        <div>
          <h1 className='text-6xl font-bolts-sf text-edit-blue text-center'>Predavači</h1>
          <p className='text-2xl text-center'>Naši predavači su stručnjaci u svojim područjima i uvijek su spremni pomoći. Pogledajte njihove profile i radionice koje drže.</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage