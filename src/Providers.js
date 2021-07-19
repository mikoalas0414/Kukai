import React from 'react'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { Provider } from 'react-redux'
import getRpcUrl from './utils/getRpcUrl'
import { configureStore } from './redux/store';

const Providers = ({ children }) => {
  const rpcUrl = getRpcUrl()
  const chainId = parseInt(process.env.REACT_APP_CHAIN_ID);
  return (
    <Provider store={configureStore()}>
      <bsc.UseWalletProvider
        chainId={chainId}
        connectors={{
          walletconnect: { rpcUrl },
          bsc,
        }}
      >
        {children}
      </bsc.UseWalletProvider>
    </Provider>
  )
}

export default Providers
