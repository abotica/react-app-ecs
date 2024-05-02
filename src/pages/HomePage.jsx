import React, { useEffect } from 'react'

import MainLayout from '../layout/MainLayout'

import { Slide } from 'react-slideshow-image';

import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

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
      <div style={{ height: 'calc(100vh - 64px)' }} className='flex justify-between '>
        <div className='pt-10 pl-10'>
          <h1 className='text-start font-bolts-sf'><span className='text-edit-blue text-[19rem] leading-none'>EDIT</span><br /><span className='text-edit-yellow text-9xl'>CODE SCHOOL</span></h1>
          <h2 data-aos="fade-right" data-aos-delay="500" className='text-5xl italic text-edit-blue font-mina font-bold mt-5'>„Znanje dostupno svima“</h2>
        </div>
        <div className='h-full'>
          <img className='h-full w-auto' src='src/assets/hero.png' alt='hero' />
        </div>

      </div>
      <div data-aos="fade-up" className='font-mina px-20'>
        <div className='mb-10 mt-28'>
          <h1 className='text-5xl font-bold text-edit-blue text-center'>O nama</h1>
          <p className='text-2xl text-center'><span className='font-bold text-edit-blue'>EDIT CodeSchool</span> je besplatna škola programiranja
            koja se održava već sedam godina u preko 30 osnovnih i srednjih škola Splitsko-dalmatinske županije u gradovima <span className='text-edit-blue font-bold'>
              Split, Solin, Kaštela, Omiš, Trogir, Imotski, Sinj, Makarska, Supetar</span> i naseljima <span className='text-edit-blue font-bold'>Šestanovac i Grohote</span>.</p>

          <div className='w-full mt-5'>
            <Slide arrows={false}>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} />
                </div>
              ))}
            </Slide>
          </div>

          <p className='text-2xl text-center my-10'>Ove godine u <span className='font-bold text-edit-blue'>Edit CodeSchool</span> sudjeluju sljedeće škole:</p>
          <div className='flex justify-around items-start'>
            <ol data-aos="fade-right" className='list-decimal text-lg'>
              <p className='text-2xl text-edit-blue font-bold text-start'>OSNOVNE ŠKOLE:</p>
              <li>Majstora Radovana - Trogir <span className='text-edit-yellow'>(Ana Marija Sačer)</span></li>
              <li>Meje - Split <span className='text-edit-yellow'>(Marijana Polić Kuko/Josip Reić)</span></li>
              <li>Blatine-Škrape - Split <span className='text-edit-yellow'>(Luka Kaleb)</span></li>
              <li>Stjepan Radić - Imotski <span className='text-edit-yellow'>(Zoran Gabelica)</span></li>
              <li>Manuš - Split <span className='text-edit-yellow'>(Katica Jukić)</span></li>
              <li>Fra Pavla Vučkovića - Sinj <span className='text-edit-yellow'>(Boško Lišnić)</span></li>
              <li>Grohote - Grohote <span className='text-edit-yellow'>(Ines Jovanović)</span></li>
              <li>Lučac - Split <span className='text-edit-yellow'>(Ivana Vodopija)</span></li>
              <li>Dugopolje - Dugopolje <span className='text-edit-yellow'>(Kristina Vladić)</span></li>
              <li>Žnjan - Pazdigrad <span className='text-edit-yellow'>(Luka Kaleb)</span></li>
            </ol>
            <ol data-aos="fade-left" data-aos-delay="500" className='list-decimal text-lg'>
              <p className='text-2xl text-edit-blue font-bold text-start'>SREDNJE ŠKOLE:</p>
              <li>Gimnazija dr. Mate Ujevića - Imotski <span className='text-edit-yellow'>(Martina Maršić)</span></li>
              <li>III. Gimnazija - Split <span className='text-edit-yellow'>(Ana Oreb / Ante Bartulović)</span></li>
              <li>Tehnička i industrijska R.Boškovića - Sinj <span className='text-edit-yellow'>(Marija Gaurina)</span></li>
              <li>Elektrotehnička - Split <span className='text-edit-yellow'>(Marin Ivandić / Roko Brljević)</span></li>
              <li>Brač - Supetar <span className='text-edit-yellow'>(Sandra Radulovski)</span></li>
              <li>IV. Gimnazija Marko Marulić - Split <span className='text-edit-yellow'>(Drago Koštić)</span></li>
              <li>Zdravstvena - Split <span className='text-edit-yellow'>(Mirjana Gaćin Bilin)</span></li>
              <li>Braće Radić - Kaštel Štafilić <span className='text-edit-yellow'>(Andrijana Skelić)</span></li>
              <li>Škola za dizajn, grafiku i održivu gradnju - Split <span className='text-edit-yellow'>(Nikolina Smilović)</span></li>
            </ol>
          </div>
        </div>
        <div data-aos="fade-up" className='mb-10'>
          <h1 className='text-5xl font-bold text-edit-blue text-center'>Radionice</h1>
          <p className='text-2xl text-center'>Naša škola nudi radionice iz raznih područja programiranja. Pogledajte naš raspored radionica i prijavite se na neku od njih.</p>
        </div>
        <div data-aos="fade-up" className='mb-10'>
          <h1 className='text-5xl font-bold text-edit-blue text-center'>Predavači</h1>
          <p className='text-2xl text-center'>Naši predavači su stručnjaci u svojim područjima i uvijek su spremni pomoći. Pogledajte njihove profile i radionice koje drže.</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage