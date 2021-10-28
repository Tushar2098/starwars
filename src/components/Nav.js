import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';

export default function SwNav({ items = [] }) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          {items.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to={item.toUrl}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className='main-content'>
        <Switch>
          <Route path='/about'>
            <Home />
          </Route>
          <Route path='/users'>
            <Home />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </section>
    </BrowserRouter>
  );
}
