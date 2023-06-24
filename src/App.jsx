import "./App.css";
import { useGetUsersQuery } from "./services/user";

function App() {
  const { data, error, isLoading } = useGetUsersQuery();
  if (isLoading) {
    return <div>Loadiing...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}

export default App;
