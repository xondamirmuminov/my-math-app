import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';
const StyledApp = require('./styles/app').default;
const routes = require('./routes').default;

const { Header } = Layout;

function App() {
  return (
    <StyledApp>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
        <Menu style={{justifyContent: 'flex-end'}} theme="dark" mode="horizontal" defaultSelectedKeys={['add']}>
          <Menu.Item key="add"><Link to='/'>Add</Link></Menu.Item>
          <Menu.Item key="subract"><Link to='/subtract'>Subtract</Link></Menu.Item>
          <Menu.Item key="multiply"><Link to='/multiply'>Multiply</Link></Menu.Item>
          <Menu.Item key="divide"><Link to='/divide'>Divide</Link></Menu.Item>
        </Menu>
      </Header>
      <section style={{paddingBottom: '20px'}}>
        <Switch>
          {routes?.map((item: any) => (
            <Route path={item?.path} exact={true} key={item?.key} component={item?.component} />
          ))}
        </Switch>
      </section>
    </StyledApp>
  );
}

export default App;
