import React from 'react'
import { Footer } from "flowbite-react"
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"

function CustomFooter() {
    return (
        <Footer container className='bg-edit-blue mt-auto'>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="https://digitalnadalmacija.hr/"
                            src="src/assets/logos/DDalm_footer.png"
                            alt="Digitalna Dalmacija Logo"
                            name=""
                            className='w-44 h-auto'
                        />
                    </div>
                    <div className="flex justify-evenly w-6/12 items-center text-white">
                        <div>
                            <Footer.LinkGroup col>
                                <Footer.Link href='https://digitalnadalmacija.hr/o-nama'>O nama</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://digitalnadalmacija.hr/novosti">Novosti</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://digitalnadalmacija.hr/edukacije">Digitalne vještine</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://digitalnadalmacija.hr/zajednica">Tech zajednica</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://digitalnadalmacija.hr/itposlovanje">Startup ekosustav</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between text-white">
                    <Footer.Copyright href="#" by="Splitsko-dalmatinska Županija™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="https://www.facebook.com/ictzupanija/" icon={BsFacebook} />
                        <Footer.Icon href="https://www.instagram.com/digitalnadalmacija/" icon={BsInstagram} />
                        <Footer.Icon href="https://linkedin.com/company/digitalnadalmacija/" icon={BsLinkedin} />
                        <Footer.Icon href="https://www.youtube.com/channel/UCJocgtiq6W4bFdRCGxTDoTg/videos" icon={BsYoutube} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default CustomFooter