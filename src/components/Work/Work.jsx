import React from 'react'
import { work1, work2 } from '../../assets'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Work = () => {
    return (
        <>
            <div className='w-full justify-center gap-[129px] pt-[140px] bg-whiteDark flex items-center'>
                <div className="max-w-[550px] ">
                    <h2 className='text-[48px] font-bold mb-[16px]'>
                        Work together,
                        <h2>wherever you work</h2>
                    </h2>
                    <p className='text-[18px] text-textCol max-w-[453px] mb-[40px]'> In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>

                    <p className='flex text-center items-center text-blue gap-[5px]'>
                        <p className='border-b-2 border-blue'>Learn more </p>
                        <AiOutlineArrowRight />
                    </p>
                </div>

                <div className="">
                    <img src={work1} alt="logo" />
                </div>
            </div>

            <div className='w-full justify-center gap-[129px] pt-[60px] pb-[60px] bg-whiteDark flex items-center'>
                <div className="">
                    <img src={work2} alt="logo" />
                </div>

                <div className="max-w-[550px] ">
                    <h2 className='text-[48px] font-bold mb-[16px]'>
                        Work together,
                        <h2>wherever you work</h2>
                    </h2>
                    <p className='text-[18px] text-textCol max-w-[453px] mb-[40px]'> In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>

                    <p className='flex text-center items-center text-blue gap-[5px]'>
                        <p className='border-b-2 border-blue'>Learn more </p>
                        <AiOutlineArrowRight />
                    </p>
                </div>
            </div>
        </>
    )
}

export default Work