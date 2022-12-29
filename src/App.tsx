import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { data, error, loading } = useFetch("https://www.boredapi.com/api/activity")
  
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {(loading === false) && <div>
        <h1>Activity</h1>
        <p>{data?.activity}</p>
        <h5>Type {data?.type}</h5>
        <button onClick={() => location.reload()}>Reload</button>
      </div> }
    </div>
  )
}

export default App;