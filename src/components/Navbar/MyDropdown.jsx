import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function MyDropdown({ title, list }) {
  return (
    <Menu>
      <Menu.Button className='flex text-[16px] items-center'>
        {title}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-violet-black hover:text-violet-500"
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items className='bg-whiteDark w-[250px] absolute p-3 rounded-[8px]'>
        <Menu.Item >
            <a
              className='text-textCol '
              href="/account-settings"
            >
              {list}
            </a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default MyDropdown