import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { frog, docu, vm, profil1, profil2, profil3 } from '../../assets'
import Button from '../Button/Button'

const Testimonial = () => {
    return (
        <div className='w-full justify-center mt-[80px]'>
            <h1 className='text-center text-[48px] font-bold mb-[24px]'>Loved by the world's best teams</h1>
            <div className="w-full flex justify-center mb-[40px]">
                <Button className={'border-2 border-blue text-blue flex items-center gap-1 px-[28px] py-[10px] rounded-[30px]'}>
                    See all customer stories
                    <AiOutlineArrowRight />
                </Button>
            </div>

            <div className="w-full flex px-[160px] justify-between">
                <div className="w-[359px] h-[460px] flex flex-col justify-between p-[36px]">
                    <div className="">
                        <img src={vm} alt="" />
                        <p className='mt-[34px] text-[17px] text-textCol mb-[51px]'>“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration remote.”</p>
                    </div>

                    <div className="flex gap-[16px]">
                        <img
                            className='h-[48px] w-[48px]'
                            src={profil1}
                            alt=""
                        />
                        <div className="w-full flex fl">
                            <h4 className='text-[14px] text-textCol'>Roxanne Mustafa</h4>
                            <p className='text-[14px] text-textCol'>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>

                <div className="w-[359px] h-[460px] flex flex-col justify-between  p-[36px]">
                    <div className="">
                        <img src={docu} alt="" />
                        <p className='mt-[34px] text-[17px] text-textCol mb-[51px]'>““Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”.”</p>
                    </div>

                    <div className="flex gap-[16px]">
                        <img
                            className='h-[48px] w-[48px]'
                            src={profil2}
                            alt=""
                        />
                        <div className="w-full flex justify-end ">
                            <h4 className='text-[14px] text-textCol'>Jane Ashley</h4>
                            <p className='text-[14px] text-textCol'>Head of Design at DocuSign</p>
                        </div>
                    </div>
                </div>

                <div className="w-[359px] h-[460px] flex flex-col justify-between p-[36px]">
                    <div className="">
                        <img src={frog} alt="" />
                        <p className='mt-[34px] text-[17px] text-textCol mb-[51px]'>“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                    </div>

                    <div className="flex gap-[16px]">
                        <img
                            className='h-[48px] w-[48px]'
                            src={profil3}
                            alt=""
                        />
                        <div className="w-full flex fl">
                            <h4 className='text-[14px] text-textCol'>Laura Baird</h4>
                            <p className='text-[14px] text-textCol'>Associate Design Director at frog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial