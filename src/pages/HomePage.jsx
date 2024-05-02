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


import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {

  const headerStyle = { className: "text-5xl font-bold text-edit-blue text-center mb-5" } //before:content-[''] before:h-[2px] before:bg-edit-blue before:w-full before:inline-block
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
    slidesToScroll: 3
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
      <div data-aos="fade-up" className='font-sans px-20 font-extralight'>
        <div className='mb-10 mt-28 flex flex-col items-center'>
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
        <div data-aos="fade-up" className='mb-10 flex flex-col items-center'>
          <hr className='h-[2px] bg-edit-blue w-6/12 mb-5' />
          <div>
            <h1 {...headerStyle}>Radionice</h1>
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

          </div>

        </div>
        <div data-aos="fade-up" className='mb-10 flex flex-col items-center'>
          <hr className='h-[2px] bg-edit-blue w-6/12 mb-5' />
          <h1 {...headerStyle}>Predavači</h1>
          <p className='text-xl text-center'>Svi naši nastavnici certificirani su stručnjaci posebnog edukativnog programa - <span className='font-mina text-edit-yellow font-bold'>EDIT profesor</span> - osmišljenog za praktično, brzo i lako primjenjivo učenje osnova programiranja.</p>
          <div className='w-full mb-20'>
            <Slider {...settings}>
              {lecturers.map((lecturer, index) => (
                <div key={index} className='w-[400px] flex flex-col'>
                  <img className='object-cover w-full h-full' src={lecturer.image} />
                  <p {...lecturerNameStyle}>{lecturer.name}</p>
                  <p {...lecturerSchoolStyle}>{lecturer.school}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage