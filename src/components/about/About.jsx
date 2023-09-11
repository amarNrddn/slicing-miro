import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Star from '../Star/Star'
import { logoG, logoCaptera, logoGetApp, contenAbout } from '../../assets'

const About = () => {
    return (
        <div className='flex px-[120px] py-[60px] justify-between gap-[40px] bg-[#F5F5F5]'>
            <div className="max-w-[440px]">
                <h2 className='text-[48px] font-bold'>Take ideas from better to best</h2>
                <p className='text-textCol'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>

                <Input
                    placeHolder={'Masukan Email'}
                    type={'text'}
                    name={'email'}
                    className={'pl-[25px] py-[11px] outline-none border-2 border-texCol w-full rounded-[20px] mt-[32px]'}
                />

                <Button className='flex justify-center items-center bg-[#4262FF] w-full text-center text-white py-[12px] rounded-[30px] mt-[10px]' >
                    Sign up free
                    <AiOutlineArrowRight />
                </Button>
                <p className='text-textCol text-[14px] mt-[7px] mb-[41px]'>Collaborate with your team within minutes</p>

                <div className="flex items-center ">
                    <div className="flex gap-[14px]">
                        <div className="">
                            <Star />
                            <p className='text-[11px]'>Based on 5149+ reviews:</p>
                        </div>

                        <div className="flex gap-[14px]">
                            <img src={logoGetApp} alt='logoG' />
                            <img src={logoCaptera} alt='logoG' />
                            <img src={logoG} alt='logoG' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <img
                    className='h-[462px] w-[640px]'
                    src={contenAbout}
                    alt="contenAbout"
                />
            </div>
        </div>
    )
}

export default About