'use client'
import { useState, useEffect } from 'react'

function HomePage() {
  const [ip, setIP] = useState('')
  const [countryName, setCountryName] = useState('')
  const [countryCode, setCountryCode] = useState('')

  const getData = async () => {
    const res = await fetch('https://api.ip.pe.kr/json/')
    const data = await res.json()
    setIP(data.ip)
    setCountryName(data.country_name.ko)
    setCountryCode(data.country_code)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main className="font-['Nanum_Gothic'] text-center">
      <p className='text-xl'>당신의 IP주소는</p>
      <h1 className='font-bold text-4xl mt-2'>{ip}</h1>
      <p className='text-lg mt-4'>
        접속국가는 {countryName}({countryCode}) 입니다.
      </p>
    </main>
  )
}

export default HomePage
