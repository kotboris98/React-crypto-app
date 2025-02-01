import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import { useContext } from 'react';
import cryptoContext from '../../context/crypto-context';

export default function AppLayout() {

     const {loading} = useContext(cryptoContext)
    
      if  (loading) {
        return <Spin fullscreen />
      }

    return (
    <Layout>
    <AppHeader />
    <Layout>
      <AppSider />
      <AppContent />
    </Layout>
    <AppFooter />
  </Layout>
  )
}