import { Route, Routes } from '@solidjs/router';
import { Component, lazy } from 'solid-js';

const Index = lazy(() => import('./pages/Index'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Monster = lazy(() => import('./pages/Monster'))
const Playbill = lazy(() => import('./pages/Playbill'))
const Libraries = lazy(() => import('./pages/Libraries'))
const Support = lazy(() => import('./pages/Support'))

const App: Component = () => {  
  return (
    <Routes>
      <Route path='/' component={Index}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/monster' component={Monster}/>
      <Route path='/playbill' component={Playbill}/>
      <Route path='/libraries' component={Libraries}/>
      <Route path='/support' component={Support}/>
    </Routes>
  );
};

export default App;
