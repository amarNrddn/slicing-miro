import React from 'react'
import { logo } from '../../assets'
import MyDropdown from './MyDropdown'
import { BsGlobe2 } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Button from '../Button/Button'

const Navbar = () => {
    return (
        <div className=' w-full h-[91px] flex items-center px-6 sticky top-0 z-50 justify-between bg-white'>
            <div className="flex items-center text-center gap-3">
                <img
                    className='w-[91px] h-[32px]'
                    src={logo}
                    alt="logo"
                />
                <ul className='sm:hidden lg:flex pt-3 gap-3'>
                    <li>
                        <MyDropdown title={'Product'} list={'list'} />
                    </li>
                    <li>
                        <MyDropdown title={'Solution'} list={'list'} />
                    </li>
                    <li>
                        <MyDropdown title={'Recources'} list={'list'} />
                    </li>
                    <li>
                        <MyDropdown title={'Enterprise'} list={'list'} />
                    </li>
                    <li>
                        <MyDropdown title={'Pricing'} list={'list'} />
                    </li>
                </ul>
            </div>

            <div className="flex items-center text-center gap-3 pt-3">
                <p className='flex items-center gap-1'>
                    <BsGlobe2 />
                    EN
                </p>
                <p>Contact Sales</p>
                <p>Login</p>
                <Button className='flex items-center bg-[#4262FF] gap-1 text-white p-3 rounded-[30px]'>
                    Sign up free
                    <AiOutlineArrowRight/>
                </Button>
            </div>
        </div>
    )
}

export default Navbar