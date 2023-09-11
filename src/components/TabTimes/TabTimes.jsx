import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { Times } from '../../constans'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TabTimes() {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        setCategories(Times)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="w-full pt-[90px] px-2 py-16 sm:px-0 bg-whiteDark">
            <div className="px-[160px]">
                <h1 className='font-bold text-[48px] mb-[32px]'>Built for all kinds of teams</h1>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-black'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <div>
                                    {posts.map((post) => (
                                        <div className='flex'>
                                            <div className="w-full pl-[16px] pt-[30px] pr-[41px]">
                                                <ul className='max-w-[360px] mb-[34px]'>
                                                    <li className='flex items-center mb-[16px]'>
                                                        <AiOutlineCheck className='font-bold text-textCol mr-[16px]' />
                                                        <p className=' text-textCol ' >{post.lis1}</p>
                                                    </li>
                                                    <li className='flex items-center mb-[16px]'>
                                                        <AiOutlineCheck className='mt-[-21px] font-bold text-textCol mr-[16px]' />
                                                        <p className=' text-textCol ' >{post.lis2}</p>
                                                    </li>
                                                    <li className='flex items-center mb-[16px]'>
                                                        <AiOutlineCheck className='font-bold text-textCol mr-[16px]' />
                                                        <p className=' text-textCol ' >{post.lis3}</p>
                                                    </li>
                                                </ul>

                                                <p className='flex text-center items-center text-blue gap-[5px]'>
                                                    <p className='border-b-2 border-blue'>{post.action}</p>
                                                    <AiOutlineArrowRight />
                                                </p>

                                                <p className='mt-[70px]'>Integrate your favorite tools</p>
                                                <div className="flex mt-[23px] gap-[32px]">
                                                    <img src={post.imgTols1} alt=" " />
                                                    <img src={post.imgTols2} alt=" " />
                                                    <img src={post.imgTols3} alt=" " />
                                                    <img src={post.imgTols4} alt=" " />
                                                </div>
                                            </div>

                                            <div className="">
                                                <img
                                                    className='w-[1400px] h-[517px]'
                                                    src={post.img}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}
