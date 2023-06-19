async function fetchIpinfo() {
  const response = await fetch('https://api.ip.pe.kr/json')
  const ipinfo = await response.json()
  return ipinfo
}

export default async function Home() {
  const ipinfo = await fetchIpinfo()
  return (
    <>
      <h1>{ipinfo.ip}</h1>
    </>
  )
}
