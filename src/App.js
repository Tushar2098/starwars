import SwNav from './components/Nav';

function App() {
  const routes = [
    { name: 'Home', toUrl: '/' },
    { name: 'People', toUrl: '/people' },
    { name: 'Starships', toUrl: '/starships' },
  ];
  return <SwNav items={routes}></SwNav>;
}

export default App;
