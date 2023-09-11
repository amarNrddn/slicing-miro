import React from 'react'
import { walmart, okta, volvo, deloite, cisco } from '../../assets'

const Bener = () => {
    return (
        <div className='w-full justify-center text-center py-[64px] bg-white '>
            <p className='mb-[48px] ml-[22px] text-textCol'>Trusted by 45M+ users</p>
            <div className=" w-full flex justify-center gap-[54px]  mt-[20px]">
                <img className='h-[64px]' src={walmart} alt='bener' />
                <img className='h-[64px]' src={cisco} alt='bener' />
                <img className='h-[64px] ' src={volvo} alt='bener' />
                <img className='h-[64px]' src={deloite} alt='bener' />
                <img className='h-[64px]' src={okta} alt='bener' />
            </div>
        </div>
    )
}

export default Bener