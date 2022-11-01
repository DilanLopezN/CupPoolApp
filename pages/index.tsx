export default function Home(props) {
  return <h1>contagem: {props.count}</h1>
}

export const GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json().catch(error => console.log(error))
  console.log(data)

  return {
    props: {
      count: data.count
    }
  }
}
