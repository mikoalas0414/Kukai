const { BigNumber } = require('ethers')

export const getListByAll = async (web3, exchangeContract) => {
    const response = await exchangeContract.methods.getAllNFTs().call()
    const length = response.length;
    let nftList = [];
    for (let i = 0; i < length; i++) {
        nftList.push({
            "name": response[i][0],
            "price": parseFloat(web3.utils.fromWei(response[i][1], 'ether')).toFixed(2).toString(),
            "artistName": response[i][2],
            "imageUrl": response[i][3],
            "streamUrl": response[i][4],
            "amountAvailable": BigNumber.from(response[i][5]).toString(),
            "description": response[i][6],
            "id": BigNumber.from(response[i][7]).toString(),
            "creator": response[i][8],
            "feesAccrued": web3.utils.fromWei(response[i][9], 'ether').toString(),
        })
    }
    return nftList
}

export const getNFTById = async (web3, exchangeContract, id) => {
    const response = await exchangeContract.methods.getNftinfo(id).call()
    let nftItem = {};
    nftItem = {
        "nft": {
            "name": response[0][0],
            "price": parseFloat(web3.utils.fromWei(response[0][1], 'ether')).toFixed(2).toString(),
            "artistName": response[0][2],
            "imageUrl": response[0][3],
            "streamUrl": response[0][4],
            "amountAvailable": BigNumber.from(response[0][5]).toString(),
            "description": response[0][6],
            "id": BigNumber.from(response[0][7]).toString(),
            "creator": response[0][8],
            "feesAccrued": parseFloat(web3.utils.fromWei(response[0][9], 'ether')).toFixed(2).toString()
        },
        "artist": {
            "name": response[1][0],
            "imageUrl": response[1][1],
            "coverImage": response[1][2],
        }
    };
    return nftItem
}

export const getUserNFTs = async (web3, exchangeContract, address) => {
    const response = await exchangeContract.methods.getUserNFTs(address).call()
    const length = response.length;
    let nftList = [];
    for (let i = 0; i < length; i++) {
        nftList.push({
            "name": response[i][0],
            "price": parseFloat(web3.utils.fromWei(response[i][1], 'ether')).toFixed(2).toString(),
            "artistName": response[i][2],
            "imageUrl": response[i][3],
            "streamUrl": response[i][4],
            "amountAvailable": BigNumber.from(response[i][5]).toString(),
            "description": response[i][6],
            "id": BigNumber.from(response[i][7]).toString(),
            "creator": response[i][8],
            "feesAccrued": parseFloat(web3.utils.fromWei(response[i][9], 'ether')).toFixed(2).toString(),
        })
    }
    console.log(nftList)
    return nftList
}

export const createNFT = async (web3, exchangeContract, account, data) => {
    const response = await exchangeContract.methods.createSingleNFT(data.name, web3.utils.toWei(data.price, 'ether'), '', data.imageUrl, '', data.amountAvailable, data.description).send({ from: account });
    return response;
}

export const getAllNFTsforArtist = async (web3, exchangeContract, address) => {
    const response = await exchangeContract.methods.getAllNFTsforArtist(address).call()
    console.log(response)
    let nftItem = {};
    let nftList = [];
    let artistItem = {};
    for (let i = 0; i < response[0].length; i++) {
        nftList.push({
            "name": response[0][i][0],
            "price": parseFloat(web3.utils.fromWei(response[0][i][1], 'ether')).toFixed(2).toString(),
            "artistName": response[0][i][2],
            "imageUrl": response[0][i][3],
            "streamUrl": response[0][i][4],
            "amountAvailable": BigNumber.from(response[0][i][5]).toString(),
            "description": response[0][i][6],
            "id": BigNumber.from(response[0][i][7]).toString(),
            "creator": response[0][i][8],
            "feesAccrued": parseFloat(web3.utils.fromWei(response[0][i][9], 'ether')).toFixed(2).toString(),
        })
    }
    artistItem = {
        "name": response[1][0],
        "imageUrl": response[1][1],
        "coverImage": response[1][2],
    }
    nftItem = {
        list: nftList,
        artist: artistItem
    }
    console.log(nftItem)
    return nftItem
}

export const redeemUserNFTRoyalty = async (exchangeContract, account, id) => {
    const response = await exchangeContract.methods.redeemUserNFTRoyalty(account, id).send({ from: account });
    return response;
}

export const buyNFT = async (exchangeContract, account, id) => {
    const response = await exchangeContract.methods.buyNFT(id).send({ from: account });
    return response;
}