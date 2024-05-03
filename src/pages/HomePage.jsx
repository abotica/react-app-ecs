import React, { useEffect } from 'react'

import MainLayout from '../layout/MainLayout'

import Slider from "react-slick";

import lecturer1 from '/src/assets/lecturers/lecturer1.png'
import lecturer2 from '/src/assets/lecturers/lecturer2.png';
import lecturer3 from '/src/assets/lecturers/lecturer3.png';
import lecturer4 from '/src/assets/lecturers/lecturer4.png';
import lecturer5 from '/src/assets/lecturers/lecturer5.png';
import lecturer6 from '/src/assets/lecturers/lecturer6.png';
import lecturer7 from '/src/assets/lecturers/lecturer7.jpg';

import partner01 from '/src/assets/partners/partner01.png'
import partner02 from '/src/assets/partners/partner02.png'
import partner03 from '/src/assets/partners/partner03.png'
import partner04 from '/src/assets/partners/partner04.svg'
import partner05 from '/src/assets/partners/partner05.png'
import partner06 from '/src/assets/partners/partner06.png'
import partner07 from '/src/assets/partners/partner07.png'
import partner08 from '/src/assets/partners/partner08.png'
import partner09 from '/src/assets/partners/partner09.png'
import partner10 from '/src/assets/partners/partner10.png'
import partner11 from '/src/assets/partners/partner11.png'
import partner12 from '/src/assets/partners/partner12.png'
import partner13 from '/src/assets/partners/partner13.png'
import partner14 from '/src/assets/partners/partner14.png'
import partner15 from '/src/assets/partners/partner15.png'
import partner16 from '/src/assets/partners/partner16.png'

import grup1 from '/src/assets/design/group-1-1-1.svg'
import grup2 from '/src/assets/design/group-1-2-1.svg'
import grup3 from '/src/assets/design/group-1-3-1.svg'

import divider from '/src/assets/design/c-item-divider-h.svg'

import titleBackground from '/src/assets/design/zbrljana-podloga.svg'


import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {

  const headerStyle = { className: `text-5xl font-bold text-white text-center mb-5 bg-title-background [background-repeat:no-repeat] [background-size:cover] px-[40px] py-[20px]` } //before:content-[''] before:h-[2px] before:bg-edit-blue before:w-full before:inline-block
  const lecturerNameStyle = { className: 'text-center text-edit-blue font-mina font-bold text-2xl' }
  const lecturerSchoolStyle = { className: 'text-center font-sans font-light text-lg' }

  const lecturers = [
    { name: 'Andrijana Skelić', school: 'SŠ Braća Radić, Kaštela', image: lecturer1 },
    { name: 'Zoran Gabelica', school: 'OŠ Stjepan Radić, Imotski', image: lecturer2 },
    { name: 'Ana Marija Sačer', school: 'OŠ Majstora Radovana, Trogir', image: lecturer3 },
    { name: 'Ana Oreb', school: 'III. gimnazija, Split', image: lecturer4 },
    { name: 'Mirjana Gaćina Bilin', school: 'Srednja Zdravstvena škola, Split', image: lecturer5 },
    { name: 'Maristela Rubić', school: 'I. gimnazija, Split', image: lecturer6 },
    { name: 'Marijana Polić Kuko', school: 'OŠ Meje, Split', image: lecturer7 },
  ];

  const parnersRowOne = [partner01, partner02, partner03, partner04, partner05, partner06]
  const partnersRowTwo = [partner07, partner08, partner09, partner10, partner11]
  const partnersRowThree = [partner12, partner13, partner14, partner15, partner16]

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    auotplaySpeed: 2000
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }

  return (
    <MainLayout>
      <div style={{ height: 'calc(100vh - 64px)' }} className='flex justify-between'>
        <div className='pt-10 pl-10'>
          <h1 className='text-start font-bolts-sf'><span className='text-edit-blue text-[19rem] leading-none'>EDIT</span><br /><span className='text-edit-yellow text-9xl'>CODE SCHOOL</span></h1>
          <h2 data-aos="fade-right" data-aos-delay="500" className='text-5xl italic text-edit-blue font-mina font-bold mt-5'>„Znanje dostupno svima“</h2>
        </div>
        <div className='h-full'>
          <img className='h-full w-auto' src='src/assets/hero.png' alt='hero' />
        </div>

      </div>
      <div className='font-sans px-20 font-extralight'>
        <div data-aos="fade-up" className='mb-10 mt-28 flex flex-col items-center'>
          <h1 {...headerStyle}>O nama</h1>
          <p className='text-2xl text-center'><span className='font-bold text-edit-blue'>EDIT CodeSchool</span> je besplatna škola programiranja
            koja se održava već sedam godina u preko 30 osnovnih i srednjih škola Splitsko-dalmatinske županije u gradovima <span className='text-edit-blue font-bold'>
              Split, Solin, Kaštela, Omiš, Trogir, Imotski, Sinj, Makarska, Supetar</span> i naseljima <span className='text-edit-blue font-bold'>Šestanovac i Grohote</span>.</p>

          <p className='text-2xl text-center my-10'>Ove godine u <span className='font-bold text-edit-blue'>Edit CodeSchool</span> sudjeluju sljedeće škole:</p>
          <div className='flex justify-around items-start w-full'>
            <ol data-aos="fade-right" className='list-decimal text-lg'>
              <p className='text-2xl text-edit-blue font-bold text-center mb-5'>OSNOVNE ŠKOLE:</p>
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
              <p className='text-2xl text-edit-blue font-bold text-center mb-5'>SREDNJE ŠKOLE:</p>
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
        <div data-aos="fade-up" className='mb-10 mt-20 flex flex-col items-center'>
          <h1 {...headerStyle}>Radionice</h1>
          <div>

            <p className='text-2xl text-center mb-1'>Uz moto „Znanje dostupno svima“, u Splitsko-dalmatinskoj županiji već sedmu godinu za redom organiziramo EDIT CodeSchool - besplatnu školu primijenjenog programiranja u kojoj učenike osnovnih i srednjih škola kroz čak 6 razina podučavamo osnovama programiranja te izradi web stranica i aplikacija.</p>

            <p className='font-mina text-edit-blue font-bold text-2xl mt-10'>EDIT CodeSchool - osnovna škola (6. - 8. razred)</p>
            <p className='text-xl mt-1'><span className='text-edit-yellow font-bold'>CyberSecurity tečaj</span> - nauči kako prepoznati i izbjeći potencijalne cyber prijetnje, kako se sigurno ponašati na Internetu i zaštititi svoju privatnost.</p>

            <p className='font-mina text-edit-blue font-bold text-2xl mt-10'>EDIT CodeSchool - srednja škola (svi razredi)</p>
            <p className='text-xl mt-1'><span className='text-edit-yellow font-bold'>Osnovni tečaj</span> - nauči samostalno izraditi moderne web stranice upoznajući razvojna sučelja koristeći odličan Tailwind CSS i AI alate.</p>
            <p className='text-xl mt-5'><span className='text-edit-yellow font-bold'>RIWA razvoj sustava temeljenih na umjetnoj inteligenciji</span> - upoznaj svijet strojnog učenja, razumi što su neuronske mreže i otkrij kako algoritmi funkcioniraju. Od computer vision do sentiment analysis, svaki korak će te približiti praktičnom razumijevanju kako umjetna inteligencija funkcionira.</p>
            <p className='text-xl mt-5'><span className='text-edit-yellow font-bold'>Osnovni JS tečaj</span> - ako si završio osnovni tečaj a nemaš dovoljno predznanja za sljedeći korak, tu je Osnovni JS tečaj u trajanju od 3 tjedna! Svladaj osnove JavaScript-a koje su ti potrebne za automatski upis u Srednji JS tečaj.</p>
            <p className='text-xl mt-5'><span className='text-edit-yellow font-bold'>Srednji JS tečaj</span> - produbi znanje programiranja kroz više konkretnih primjera i zadataka, nauči prepoznati glavne izazove razvoja web aplikacija  te osmisli i realiziraj vlastitu aplikaciju u kontekstu poučavanja pojedinih pojmova iz programiranja progresivnih aplikacija.</p>
            <p className='text-xl mt-5'><span className='text-edit-yellow font-bold'>Napredni JS tečaj</span> - nauči razvijati moderne web stranice koristeći programski jezik JavaScript te svladaj vezane tehnologije potrebne za izradu zahtjevnih web aplikacija koje koriste bazu podataka (Firebase).</p>

            <p className='font-mina text-edit-blue font-bold text-2xl mt-10'>EDIT CodeSchool - osnovna škola (6. - 8. razred)</p>
            <p className='text-xl mt-1'>Za najupornije editovce tu je i <span className='text-edit-yellow font-bold'>JUNIOR Dev</span> stručna edukacija koja će tvoje znanje i vještine za karijeru programera izbrusiti do zaposlenja.</p>
            {/* <div className='flex h-64 justify-center items-center'>
              <div className='w-full flex items-center justify-center'>
                <img className='object-contain h-full' src={grup1} />

              </div>
              <div className='w-32'><img className='object-contain' src={divider} /></div>
              <div className='w-full flex items-center justify-center'>
                <img className='object-contain' src={grup2} />

              </div>
              <div className='w-32'><img className='object-contain' src={divider} /></div>
              <div className='w-full flex items-center justify-center'>
                <img className='object-contain' src={grup3} />
              </div>
            </div> */}

          </div>

        </div>
        <div data-aos="fade-up" className='mb-10 mt-20 flex flex-col items-center'>
          <h1 {...headerStyle}>Predavači</h1>
          <p className='text-xl text-center'>Svi naši nastavnici certificirani su stručnjaci posebnog edukativnog programa - <span className='font-mina text-edit-yellow font-bold'>EDIT profesor</span> - osmišljenog za praktično, brzo i lako primjenjivo učenje osnova programiranja.</p>
          <div className='w-full mb-20'>
            <Slider {...settings}>
              {lecturers.map((lecturer, index) => (
                <div key={index} className='w-[400px] flex flex-col'>
                  <img className='object-cover w-8/12 h-full' src={lecturer.image} />
                  <p {...lecturerNameStyle}>{lecturer.name}</p>
                  <p {...lecturerSchoolStyle}>{lecturer.school}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div data-aos="fade-up" className='flex flex-col items-center'>
          <h1 {...headerStyle}>Partneri</h1>
          <div className='flex h-[163px] justify-center'>
            {parnersRowOne.map((path, index) => <div key={index}><img className='object-cover w-full h-full' src={path} /></div>)}
          </div>
          <div className='flex h-[163px] justify-center'>
            <div className='flex h-[163px] justify-center'>
              {partnersRowTwo.map((path, index) => <div key={index}><img className='object-cover w-full h-full' src={path} /></div>)}
            </div>
          </div>
          <div className='flex h-[163px] justify-center'>
            {partnersRowThree.map((path, index) => <div key={index}><img className='object-cover w-full h-full' src={path} /></div>)}
          </div>
          <p className='text-xl text-center mt-5'>Od samog početka partneri u osmišljavanju i provođenju edukacija su djelatnici PMF Split, FESB Split i III. Gimnazije Split .</p>
          <p className='text-xl text-center mt-5'>Kvalitet EDIT CodeSchool su prepoznale i partnersku podršku projektu pružaju neke od najuspješnijih splitskih i hrvatskih IT tvrtki, s kojima ćemo organizirati prigodna predavanja i posjete za naše polaznike EDIT CodeSchool.</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage