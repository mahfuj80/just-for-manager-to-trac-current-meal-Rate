import Footer from './Footer';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
