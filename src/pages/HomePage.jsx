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

import group1 from '/src/assets/design/group-2-1.svg'
import group2 from '/src/assets/design/group-2-2.svg'
import group3 from '/src/assets/design/group-2-3.svg'
import divider from '/src/assets/design/c-item-divider-h.svg'

import laptop from '/src/assets/design/laptop-svgrepo-com.svg'
import apple from '/src/assets/design/apple-svgrepo-com.svg'
import windows from '/src/assets/design/windows-azure-svgrepo-com.svg'
import linux from '/src/assets/design/linux-svgrepo-com.svg'
import wifi from '/src/assets/design/wifi-signal-svgrepo-com.svg'

import titleBackground from '/src/assets/design/zbrljana-podloga.svg'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

function HomePage() {

  const headerStyle = { className: `text-5xl font-bold text-white text-center mb-5 bg-title-background [background-repeat:no-repeat] [background-size:cover] px-[40px] py-[20px]` } //before:content-[''] before:h-[2px] before:bg-edit-blue before:w-full before:inline-block
  const lecturerNameStyle = { className: 'text-center text-edit-blue font-mina font-bold text-2xl' }
  const lecturerSchoolStyle = { className: 'text-center font-sans font-light text-lg' }
  const blueWordStyle = { className: 'text-edit-blue font-bold text-2xl' }

  const lecturers = [
    { name: 'Andrijana Skelić', school: 'SŠ Braća Radić, Kaštela', image: lecturer1 },
    { name: 'Zoran Gabelica', school: 'OŠ Stjepan Radić, Imotski', image: lecturer2 },
    { name: 'Ana Marija Sačer', school: 'OŠ Majstora Radovana, Trogir', image: lecturer3 },
    { name: 'Ana Oreb', school: 'III. gimnazija, Split', image: lecturer4 },
    { name: 'Mirjana Gaćina Bilin', school: 'Srednja Zdravstvena škola, Split', image: lecturer5 },
    { name: 'Maristela Rubić', school: 'I. gimnazija, Split', image: lecturer6 },
    { name: 'Marijana Polić Kuko', school: 'OŠ Meje, Split', image: lecturer7 },
  ];

  const reviews = [
    { name: 'Mia Vrdoljak, studentica računarstva na FESB-u', review: '„Kroz srednju školu - III. gimnaziju, srela sam se s programiranjem, ali na EDIT-u je to bilo na dosta višoj razini. Zahvaljujući tom iskustvu sve sam stručne predmete na dosadašnje dvije godine fakulteta bez problema svladala jer je razina EDIT-a bila i iznad toga.“' },
    { name: 'Josip Smajo, 8. razred Osnovne škole Mejaši', review: '„Na EDIT CodeSchoolu sam dosta toga naučio i možda bi bilo teško da nemamo učiteljicu koja nam pomogne i objasni ono što nam nije jasno. O programiranju sam razmišljao od kad sam bio mali, doma sam ga učio preko Youtubea ili iz drugih izvora, ali, kad učim online, puno je sporije.“' },
    { name: 'Matej Grubišić, 4. razred Škole za dizajn, grafiku i održivu gradnju', review: '„U izradi web stranica sam već vrlo iskusan. Prvi "klijenti" su mi bili rođaci koji pokreću ili već imaju neki svoj posao bilo da im treba nova web stranica ili popravak stare. Već tu vidim koliko su programeri traženi. Zato kažem, tko god može i želi biti uspješan, neka se upiše na EDIT CodeSchool.“' },
    { name: 'Branimir Kovačić, roditelj', review: '„Jako je važno da djeca vide da to što oni osmisle u svojim glavama mogu prinijeti na kompjuter i da to može poslužiti nizu ljudi kojima baš nešto takvo možda zatreba. Kćer je oduševljena ovim programom i pohađat će ga i iduće godine.“' },
    { name: 'Ana Oreb, nastavnica informatike u 3. gimnaziji Split', review: '„Koristili smo materijale koje inače koristim u redovnom nastavnom programu i nadopunjavali ih sa rađenima isključivo za EDIT. Imali smo 12 radova - web stranica samo u našoj školi i bilo je teško izabrati dva najbolja za natjecanje.“' },
    { name: 'Ante Bartulović, voditelj projekta EDIT za srednje škole', review: '„Gradivo je podijeljeno na samostalne cjeline i na kraju svake te cjeline, djeca trebaju napraviti nekakvu igricu ili projektni zadačić. Osnovnu logiku programiranja su naučili i preko web stranice vidjeli rezultat svega naučenog.“' }
  ]

  const parnersRowOne = [
    { image: partner01, url: 'https://www.fesb.unist.hr/' },
    { image: partner02, url: 'https://www.pmfst.unist.hr/' },
    { image: partner03, url: 'http://www.gimnazija-treca-st.skole.hr/' },
    { image: partner04, url: 'https://www.gostudion.com/' },
    { image: partner05, url: 'https://www.littlecode.com/' },
    { image: partner06, url: 'https://www.infobip.com/' },
  ];
  const partnersRowTwo = [
    { image: partner07, url: 'https://getbybus.com/' },
    { image: partner08, url: 'https://www.seekandhit.com/' },
    { image: partner09, url: 'https://locastic.com/' },
    { image: partner10, url: 'https://www.ericsson.hr/' },
    { image: partner11, url: 'https://atos.net/hr/hrvatska' },
  ];
  const partnersRowThree = [
    { image: partner12, url: 'https://netmedia.hr/' },
    { image: partner13, url: 'https://valcon.com/hr/' },
    { image: partner14, url: 'https://www.nais.hr/' },
    { image: partner15, url: 'https://www.rimac-automobili.com/' },
    { image: partner16, url: 'https://www.codeeasy.net/' },
  ];

  // refresh AOS after render
  setTimeout(() => {
    AOS.refresh()
  }, 500)

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

  const settingsCenterMode = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
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
      <div className='font-sans px-44 font-extralight'>
        <div data-aos="fade-up" className='mb-10 mt-28 flex flex-col items-center'>
          <h1 {...headerStyle}>O nama</h1>
          <p className='text-2xl text-center'><span {...blueWordStyle}>EDIT CodeSchool</span> je besplatna škola programiranja
            koja se održava već sedam godina u preko 30 osnovnih i srednjih škola Splitsko-dalmatinske županije u gradovima <span {...blueWordStyle}>
              Split, Solin, Kaštela, Omiš, Trogir, Imotski, Sinj, Makarska, Supetar</span> i naseljima <span {...blueWordStyle}>Šestanovac i Grohote</span>.</p>

          <p className='text-2xl text-center my-10'>Ove godine u <span {...blueWordStyle}>Edit CodeSchool</span> sudjeluju sljedeće škole:</p>
          <div className='flex justify-around items-start w-full'>
            <ol data-aos="fade-right" className='list-decimal text-xl space-y-2'>
              <p className='text-2xl text-edit-blue font-bold text-center mb-5'>OSNOVNE ŠKOLE:</p>
              <li>Majstora Radovana - Trogir <span className='text-edit-yello</span>w'>(Ana Marija Sačer)</span></li>
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
            <ol data-aos="fade-left" data-aos-delay="500" className='list-decimal text-xl space-y-2'>
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
          <div data-aos="fade-up"  className='w-full h-max flex items-baseline justify-evenly mt-20 '>
            <div className='flex flex-col text-xl items-center justify-center'><img className='h-60' src={group1} /><p className='text-center mb-2'>Polaznici uče u malim grupama od maksimalno 15 učenika.</p><p className='text-center'>Nastava se održava uživo u školama, na FESB-u i PMF-u, a u slučaju nužde može se održati online.</p></div>
            <img className='h-8 px-10' src={divider} />
            <div className='flex flex-col text-xl items-center justify-center'><img className='h-60' src={group2} /><p className='text-center mb-2'>Nastava se održava subotom ili u dogovoru s EDIT profesorom neki drugi dan u tjednu u trajanju od 2 sata tjedno, a sadrži predavanja, vježbe te izradu moderne web aplikacije pod mentorstvom EDIT profesora.</p></div>
            <img className='h-8 px-10' src={divider} />
            <div className='flex flex-col text-xl items-center justify-center'><img className='h-60' src={group3} /><p className='text-center mb-2'>Učenje iz modernih materijala sa zadacima u elektroničkom obliku dostupnim na vlastitoj EDIT <a className='font-mina font-bold text-edit-blue' href="https://edit.dalmacija.hr/">edukativnoj platformi</a>.</p><p className='text-center'>Svi učenici rade praktičan završni rad i mogu osvojiti prigodne nagrade na kraju!</p></div>
          </div>
          <p  className='text-2xl text-center mt-10 mb-20'>Koji su minimalni tehnički uvjeti za pohađanje <span className='font-mina text-edit-blue font-bold'>EDIT CodeSchoola</span>?</p>
          <div data-aos="fade-up" className='w-full h-max flex justify-between items-center mb-20'>
            <div className='flex flex-col items-center h-[200px]'>
                <p className='text-2xl text-edit-blue font-mina font-bold'>PC/Laptop</p>
                <img className='h-full' src={laptop} alt='laptop' />
            </div>
            <div className='flex flex-col items-center h-[200px]'>
                <p className='text-2xl text-edit-blue font-mina font-bold'>Noviji operacijski sustav</p>
                <div className='flex h-full'><img className='h-full' src={linux} alt='laptop' /><img className='h-full' src={windows} alt='laptop' /><img className='h-full' src={apple} alt='laptop' /></div>
            </div>
            <div className='flex flex-col items-center h-[200px]'>
                <p className='text-2xl text-edit-blue font-mina font-bold'>Kvalitetna Internet veza</p>
                <img className='h-full' src={wifi} alt='laptop' />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className='mb-10 mt-20 flex flex-col items-center'>
          <h1 {...headerStyle}>Radionice</h1>
          <div>

            <p className='text-2xl text-center mb-10'>Uz moto <span {...blueWordStyle}>„Znanje dostupno svima“</span>, u Splitsko-dalmatinskoj županiji već sedmu godinu za redom organiziramo <span {...blueWordStyle}>EDIT CodeSchool</span> - besplatnu školu primijenjenog programiranja u kojoj učenike osnovnih i srednjih škola kroz čak 6 razina podučavamo osnovama programiranja te izradi web stranica i aplikacija.</p>

            <p className={blueWordStyle.className + ' mt-10'}>EDIT CodeSchool - osnovna škola (6. - 8. razred)</p>
            <p className='text-xl mt-1 mb-2'><span className='text-edit-yellow font-bold mb-2'>CyberSecurity tečaj</span> - nauči kako prepoznati i izbjeći potencijalne cyber prijetnje, kako se sigurno ponašati na Internetu i zaštititi svoju privatnost.</p>

            <p className={blueWordStyle.className + ' mt-10'}>EDIT CodeSchool - srednja škola (svi razredi)</p>
            <p className='text-xl mt-1 mb-2'><span className='text-edit-yellow font-bold mb-2'>Osnovni tečaj</span> - nauči samostalno izraditi moderne web stranice upoznajući razvojna sučelja koristeći odličan Tailwind CSS i AI alate.</p>
            <p className='text-xl mt-5'><span className='text-edit-yellow font-bold mb-2'>RIWA razvoj sustava temeljenih na umjetnoj inteligenciji</span> - upoznaj svijet strojnog učenja, razumi što su neuronske mreže i otkrij kako algoritmi funkcioniraju. Od computer vision do sentiment analysis, svaki korak će te približiti praktičnom razumijevanju kako umjetna inteligencija funkcionira.</p>
            <p className='text-xl mt-5'><span className='text-edit-yellow font-bold mb-2'>Osnovni JS tečaj</span> - ako si završio osnovni tečaj a nemaš dovoljno predznanja za sljedeći korak, tu je Osnovni JS tečaj u trajanju od 3 tjedna! Svladaj osnove JavaScript-a koje su ti potrebne za automatski upis u Srednji JS tečaj.</p>
            <p className='text-xl mt-5'><span className='text-edit-yellow font-bold mb-2'>Srednji JS tečaj</span> - produbi znanje programiranja kroz više konkretnih primjera i zadataka, nauči prepoznati glavne izazove razvoja web aplikacija  te osmisli i realiziraj vlastitu aplikaciju u kontekstu poučavanja pojedinih pojmova iz programiranja progresivnih aplikacija.</p>
            <p className='text-xl mt-5'><span className='text-edit-yellow font-bold mb-2'>Napredni JS tečaj</span> - nauči razvijati moderne web stranice koristeći programski jezik JavaScript te svladaj vezane tehnologije potrebne za izradu zahtjevnih web aplikacija koje koriste bazu podataka (Firebase).</p>

            <p className={blueWordStyle.className + ' mt-10'}>EDIT CodeSchool - osnovna škola (6. - 8. razred)</p>
            <p className='text-xl mt-1 mb-20'>Za najupornije editovce tu je i <span className='text-edit-yellow font-bold mb-2'>JUNIOR Dev</span> stručna edukacija koja će tvoje znanje i vještine za karijeru programera izbrusiti do zaposlenja.</p>

          </div>
          <p className='text-2xl text-center mb-1'>Želiš se prijaviti na neku od <span className='font-mina text-edit-blue font-bold'>EDIT CodeSchool</span> radionica? Pregledaj ih i prijavi se <span className='font-mina text-edit-blue font-bold underline'><Link to={"/workshops"}>OVDJE!</Link></span></p>
        </div>
        <div data-aos="fade-up" className='mb-10 mt-20 flex flex-col items-center'>
          <h1 {...headerStyle}>Predavači</h1>
          <p className='text-2xl text-center mb-1'>Svi naši nastavnici certificirani su stručnjaci posebnog edukativnog programa - <span className='font-mina text-edit-blue font-bold'>EDIT profesor</span> - osmišljenog za praktično, brzo i lako primjenjivo učenje osnova programiranja.</p>
          <div className='w-full mb-20'>
            <Slider {...settings}>
              {lecturers.map((lecturer, index) => (
                <div key={index} className='w-[400px] flex flex-col items-center'>
                  <img className='w-10/12 h-auto mx-auto' src={lecturer.image} />
                  <p {...lecturerNameStyle}>{lecturer.name}</p>
                  <p {...lecturerSchoolStyle}>{lecturer.school}</p>
                </div>
              ))}
            </Slider>
          </div>
          <p className='text-2xl text-center mb-1'>Sve predavače <span className='font-mina text-edit-blue font-bold'>EDIT CodeSchoola</span> možeš pogledati <span className='font-mina text-edit-blue font-bold underline'><Link to={"/lecturers"}>OVDJE!</Link></span></p>
        </div>
        <div data-aos="fade-up" className='flex flex-col items-center mb-10 mt-20'>
          <h1 {...headerStyle}>Partneri</h1>
          <div className='flex h-[163px] justify-center'>
            {parnersRowOne.map((partner, index) => (
              <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer">
                <img className='object-cover w-full h-full' src={partner.image} />
              </a>
            ))}
          </div>
          <div className='flex h-[163px] justify-center'>
            <div className='flex h-[163px] justify-center'>
              {partnersRowTwo.map((partner, index) => (
                <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer">
                  <img className='object-cover w-full h-full' src={partner.image} />
                </a>
              ))}
            </div>
          </div>
          <div className='flex h-[163px] justify-center'>
            {partnersRowThree.map((partner, index) => (
              <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer">
                <img className='object-cover w-full h-full' src={partner.image} />
              </a>
            ))}
          </div>
          <p className='text-2xl text-center mb-5'>Od samog početka partneri u osmišljavanju i provođenju edukacija su djelatnici <span className='font-mina font-bold text-edit-blue'>PMF Split, FESB Split i III. gimnazije Split</span>.</p>
          <p className='text-2xl text-center mb-1'>Kvalitet <span className='font-mina font-bold text-edit-blue'>EDIT CodeSchool</span> su prepoznale i partnersku podršku projektu pružaju neke od najuspješnijih splitskih i hrvatskih IT tvrtki, s kojima ćemo organizirati prigodna predavanja i posjete za naše polaznike EDIT CodeSchool.</p>
        </div>
        <div data-aos="fade-up" className='flex flex-col items-center mt-20 mb-10'>
          <h1 {...headerStyle}>Što drugi misle o nama?</h1>
          <div className='w-full mb-20 mt-10'>
            <Slider {...settingsCenterMode}>
              {reviews.map((review, index) => (
                <div key={index} className='w-[400px] h-full flex flex-col px-14'>
                  <p className='text-2xl text-center w-full font-mina font-bold text-edit-blue'>{review.name}</p>
                  <p className='text-xl text-center mt-5 w-full italic'>{review.review}</p>
                  <div className='flex justify-center mt-1'>
                    {[1, 2, 3, 4, 5].map((star) =>
                      <FontAwesomeIcon key={star} className='text-edit-yellow text-2xl' icon={faStar} />
                    )}
                  </div>
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