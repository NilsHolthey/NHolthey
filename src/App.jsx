import { useEffect, useState } from 'react';

import LoadingPage from './components/LoadingPage';

import MainPage from './components/MainPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);
  return <>{isLoading == true ? <LoadingPage /> : <MainPage />}</>;
}

export default App;
