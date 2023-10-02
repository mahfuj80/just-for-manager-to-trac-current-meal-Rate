import Footer from './Footer';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
