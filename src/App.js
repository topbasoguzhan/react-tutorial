import { Link, Route, Routes } from "react-router-dom";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { baseManager } from "./projectSample/request/baseManager";
import { useEffect } from "react";
import HomeView from "./projectSample/Views/HomeView";
import ProductListView from "./projectSample/Views/ProductListView";
import AddProductView from "./projectSample/Views/AddProductView";
import RefSample from "./otherHooks/RefSample";
import ParentSayacSample from "./otherHooks/ParentSayacSample";
import ParentPropSample from "./propSample/ParentPropSample";
import ReactRedux from "./reduxSample/ReactRedux";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { FavoritesReducer } from "./state/reducers/favorites.reducers";
import Favorites from "./reduxSample/Favorites";
import Favorites2 from "./reduxSample/Favorites2";

const favoritesStore = createStore(
  FavoritesReducer
)

function App() {

  const { Header, Content, Footer } = Layout;


  // const group = {
  //   name: 'Moonspel',
  //   year: 1992,
  //   detail: {
  //     albumCount: 5
  //   }
  // }

  // const linkStyle = {
  //   textDecoration: 'none'
  // }


  return (
    <>

      {/* <ParentPropSample></ParentPropSample> */}
      {/* <ParentSayacSample></ParentSayacSample> */}

      <Provider store={favoritesStore}>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"> <Link to='/products'>Products</Link></Menu.Item>
              <Menu.Item key="2"> <Link to='/addproduct'>Add Product</Link></Menu.Item>
              <Menu.Item key="3"> <Link to='/redux'>Redux Sample</Link></Menu.Item>
              <Menu.Item key="4"> <Link to='/favorites'>Favorites</Link></Menu.Item>
              <Menu.Item key="5"> <Link to='/favorites2'>Favorites</Link></Menu.Item>
           
            </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

              <Routes>
                <Route path='/' element={<HomeView />}></Route>
                <Route path='/products' element={<ProductListView />}></Route>
                <Route path='/addproduct' element={<AddProductView />}></Route>
                <Route path='/redux' element={<ReactRedux />}></Route>
                <Route path='/favorites' element={<Favorites />}></Route>
                <Route path='/favorites2' element={<Favorites2 />}></Route>


              </Routes>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

      </Provider>



      {/* <ProductList></ProductList> */}

      {/* </CartProvider> */}
    </>

  );
}

export default App;
