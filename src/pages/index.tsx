/*interface HomeProps {
  count: number
}*/

export default function Home() {
  return <h1 className="text-sm bg-slate-500 font-bold">AAAA</h1>
}

/*export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count
    }
  }
}*/
