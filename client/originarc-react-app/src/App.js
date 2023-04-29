import Layout from './layouts/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Tools from './pages/Tools';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Routes>

          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path='generate' element={ <Tools /> } />
            <Route path='*' element={ <NotFound/> } />  
          </Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
