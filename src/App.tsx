import React from 'react';
import "./App.css";
import { useGetUsersQuery } from "./services/user";

const App: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  console.log({ data, error, isLoading })
  if (isLoading) {
    return <div>Loadiing...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      {data.map((item: { id: number, title: string }) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}

export default App;
