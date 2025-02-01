import { useContext } from 'react';
import AppLayout from './components/layout/AppLayout';
import { CryptoContextProvider } from './context/crypto-context';
import cryptoContext from './context/crypto-context';

export default function App() {
 
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  )
}
