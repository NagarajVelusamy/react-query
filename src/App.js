
import './App.css';
import { useGetUsers } from './hooks/useGetUsers';

function App() {

  const { isLoading, data: userData, error, refetch } = useGetUsers();

  if (isLoading) return <div>Loading</div>

  return (
    <div className="App">
      <button type='button' onClick={refetch}>Load Data</button>
      {error && <p>{error.message}</p>}
      {userData?.data.map((user, idx) => <div key={idx}>{user.email}</div>)}
    </div>
  );
}

export default App;
