import { useEffect, useState } from 'react'
import useWeb3 from './useWeb3'
import { getExchangeAddress } from '../utils/addressHelpers'
import exchange from '../config/abis/exchange.json'

const useContract = (abi, address) => {
    const web3 = useWeb3()
    const [contract, setContract] = useState(new web3.eth.Contract(abi, address))

    useEffect(() => {
        setContract(new web3.eth.Contract(abi, address))
    }, [abi, address, web3])

    return contract
}

export const useExchange = () => {
    const abi = exchange.abi;
    return useContract(abi, getExchangeAddress())
}