// async function fetchIpinfo() {
//   const response = await fetch('https://api.ip.pe.kr/json')
//   const ipinfo = await response.json()
//   return ipinfo
// }

// export default async function Home() {
//   const ipinfo = await fetchIpinfo()
//   return (
//     <>
//       <h1>{ipinfo.ip}</h1>
//     </>
//   )
// }

'use client';
import { useState, useEffect } from 'react';

function HomePage() {
  const [ip, setIP] = useState('');

  const getData = async () => {
    const res = await fetch('https://api.ip.pe.kr/json/');
    const data = await res.json();
    console.log(data);
    setIP(data.ip);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
    </div>
  );
}

export default HomePage;
