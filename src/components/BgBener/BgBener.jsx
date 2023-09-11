import React from 'react'
import { bgBener } from '../../assets'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Button from '../Button/Button'

const BgBener = () => {
    return (
        <div className='w-full relative items-center bg-whiteDark'>
            <img src={bgBener} alt="bener" className='' />

            <div className="absolute w-full h-[500px] mt-auto pr-[130px] flex justify-end z-2 top-0">
                <div className="w-[500px] flex flex-col justify-center items-center">
                    <h2 className='font-bold text-[22px]'>
                        The Ways
                        <h2>We Work</h2>
                    </h2>
                    <p className='text-[]'>How has our relationship with work changed?</p>

                    <Button className='flex items-center bg-[#4262FF] gap-1 text-white px-[26px] py-[8px]  text-[14px] rounded-[30px]'>
                        View the report
                        <AiOutlineArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BgBener