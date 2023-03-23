import React from 'react'
import Link from 'next/link'
import { categoriesData } from '@/hooks/useApi'
import {
  GiLargeDress,
  GiClothes,
  Gi3DHammer,
  GiWatch,
  GiHeadphones,
  GiHealthCapsule,
  GiSportMedal,
  GiBigDiamondRing,
} from 'react-icons/gi'
import { MdOutlineSportsEsports, MdOutlineSmartToy } from 'react-icons/md'
import { BiGift } from 'react-icons/bi'
import { FaBaby, FaMobileAlt, FaBookOpen } from 'react-icons/fa'
import { HiOutlineHome } from 'react-icons/hi'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { BsPhoneVibrate } from 'react-icons/bs'

export default function index() {
  return (
    <div className='flex w-full flex-row justify-between overflow-auto'>
      {categoriesData?.categories.map((categorie, i) => (
        <div style={{ minWidth: '75px' }} key={i}>
          <a
            style={{ height: '75px', minWidth: '75px' }}
            className='block cursor-pointer overflow-hidden pt-1 pr-2 text-center text-secondary'
          >
            <div className='flex flex-col content-between items-center gap-3'>
              <div className='mt-4'>
                {i == 0 ? (
                  <GiClothes className='scale-150 transform' />
                ) : i == 1 ? (
                  <GiLargeDress className='scale-150 transform' />
                ) : i == 2 ? (
                  <GiHeadphones className='scale-150 transform' />
                ) : i == 3 ? (
                  <GiHealthCapsule className='scale-150 transform' />
                ) : i == 4 ? (
                  <HiOutlineHome className='scale-150 transform' />
                ) : i == 5 ? (
                  <GiWatch className='scale-150 transform' />
                ) : i == 6 ? (
                  <FaBaby className='scale-150 transform' />
                ) : i == 7 ? (
                  <MdOutlineSportsEsports className='scale-150 transform' />
                ) : i == 8 ? (
                  <FaMobileAlt className='scale-150 transform' />
                ) : i == 9 ? (
                  <GiBigDiamondRing />
                ) : i == 10 ? (
                  <FaBookOpen className='scale-150 transform' />
                ) : i == 11 ? (
                  <GiSportMedal className='scale-150 transform' />
                ) : i == 12 ? (
                  <BsPhoneVibrate className='scale-150 transform' />
                ) : i == 13 ? (
                  <MdOutlineSmartToy className='scale-150 transform' />
                ) : i == 14 ? (
                  <BiGift />
                ) : i == 15 ? (
                  <Gi3DHammer />
                ) : i == 16 ? (
                  <AiOutlineSecurityScan />
                ) : (
                  ''
                )}
              </div>
              <div style={{ fontSize: '8px' }}>{categorie.name}</div>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
