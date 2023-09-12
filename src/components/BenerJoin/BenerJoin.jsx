import React from 'react'
import Button from '../Button/Button'
import {AiOutlineArrowRight} from 'react-icons/ai'

const BenerJoin = () => {
    return (
        <div className='w-full px-[160px] mt-[103px]' >
            <div className="w-full flex justify-center items-center flex-col bg-darkBlue py-[100px] rounded-lg">
                <h1 className='text-[48px] text-white font-bold'>Join 45M+ users today</h1>
                <p className='text-[18px] text-textCol mt-[4px] mb-[12px] '>Start for free — upgrade anytime.</p>
                <p className='text-[18px] text-textCol mb-[40px]'>Joining as an organization? Contact Sales</p>
                <Button className='flex items-center bg-[#4262FF] gap-1 text-white px-[28px] py-[10px]  text-[18px] rounded-[30px]'>
                    Sign up free
                    <AiOutlineArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default BenerJoin