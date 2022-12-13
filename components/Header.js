import React from 'react'
import Image from 'next/image'
import Headericon from './Headericon'
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div>
      <div>
        <Headericon Icon={HomeIcon} title="Home"/>
        <Headericon Icon={UserIcon} title="Account"/>
        <Headericon Icon={PhoneIcon} title="Contact"/>
        <Headericon Icon={InformationCircleIcon} title="About"/>
      </div>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" width="100" height="100"/>
    </div>
  )
}
