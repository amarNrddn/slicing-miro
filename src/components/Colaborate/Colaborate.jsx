import React from 'react'
import Button from '../Button/Button'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Colaborate = () => {
  return (
    <div className="w-full flex justify-center items-center bg-whiteDark pt-[50px]">
      <div className='w-[1140px] flex flex-col justify-center'>
        <div className="w-full">
          <div className="flex justify-end pr-[260px]">
            <Button className={'bg-yelow font-semibold px-[15px] rotate-[15deg] py-[8px] rounded-[15px] text-[11px]'}>
              YOUR IDEA STARTS HERE
            </Button>
          </div>

          <div className="">
            <h2 className='text-center text-[48px] font-semibold'>
              Collaborate without
              <h2>constraints</h2>
            </h2>
          </div>
        </div>

        <div className="flex w-full justify-center mt-[35px] gap-[20px]">
          <div className="max-w-[313px] ">
            <h4 className='text-[24px] font-bold mb-[29px]'>Free forever</h4>
            <p className='text-[18px] text-textCol text-left'>Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our
              <span className='text-[#4262FF]'> pricing</span > plans for more features.</p>
          </div>

          <div className="max-w-[313px]">
            <h4 className='text-[24px] font-bold mb-[29px]'>Easy integrations</h4>
            <p className='text-[18px] text-textCol text-left'>Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <span className='text-[#4262FF]'> Marketplace</span> .</p>
          </div>

          <div className="max-w-[313px]">
            <h4 className='text-[24px] font-bold mb-[29px]'>Security first</h4>
            <p className='text-[18px] text-textCol text-left'>We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more
              at our <span className='text-[#4262FF]'> Trust Center</span> .</p>
          </div>

        </div>
        <div className="flex justify-center mt-[80px]">
          <Button className='flex items-center bg-[#4262FF] gap-1 text-white px-[28px] py-[10px]  text-[18px] rounded-[30px]'>
            Sign up free
            <AiOutlineArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Colaborate