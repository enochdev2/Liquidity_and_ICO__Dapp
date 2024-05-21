// the three address
// the three address
// the three address

import {ethers} from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import factoryAbi from "./factoryAbi.json";
import ERC20ABI from "./abi.json";

import Enoch from "./Enoch.json";
import ICOEnoch from "./ICOEnoch.json";
import Liquidity from "./Liqudity.json";

//TOKEN
export const Enoch_Address = "0xfcE1fBC738a7DBB929e2e552203EC8D03a71D12c";
export const Enoch_ABI = Enoch.abi;

//TOKEN SALE
export const ICOEnoch_ADDRESS = "0x03ce4db9Ee93167DE626CAE6B0F1657f3d1c7e4d";
export const ICOEnoch_ABI = ICOEnoch.abi;
//LIQUIDITY
export const Liqudity_address = "0xf158a3bBa9d73c7F4ABC17c79a5F7590c5a9A0E4";
export const Liqudity_abi = Liquidity.abi;

export const FACTORY_ABI = factoryAbi;
export const FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const positionManagerAddress = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";


const fetchContract = (signer, ABI, ADDRESS) =>  new ethers.Contract(ADDRESS, ABI, signer);


export const web3Provider = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        return provider;
    } catch (error) {
        console.log(error);
    }
};

export const CONNECTING_CONTRACT = async (ADDRESS) => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const network = await provider.getNetwork();

        const signer = provider.getSigner();
        const contract = fetchContract(signer, ERC20ABI, ADDRESS);

        //USER ADDRESS
        const userAddress = signer.getAddress();
        const balance = await contract.balanceOf(userAddress);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const supply = await contract.totalSupply();
        const decimals = await contract.decimals();
        const address = await contract.address();

        const  token = {
            address: address,
            name: name,
            symbol: symbol,
            decimals: decimals,
            supply: ethers.utils.formatEther(supply.toString()),
            balance: ethers.utils.formatEther(balance.toString()),
            chainId: network.chainId,
        };

        return token;
    } catch (error) {
        console.log(error);
    }
};

export const internalWooxContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const contract = fetchContract(provider, Enoch_ABI, Enoch_Address);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const internalICOWooxContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const contract = fetchContract(provider, ICOWoox_ABI, ICOEnoch_ADDRESS);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const internalAddLiquidity = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const contract = fetchContract(provider, Liqudity_abi, Liqudity_address);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const getBalance = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        return await signer.getBalance();
    } catch (error) {
        console.log(error);
    }
};
