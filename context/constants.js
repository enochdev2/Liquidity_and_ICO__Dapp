// the three address
// the three address
// the three address

import {ethers} from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import factoryAbi from "./factoryAbi.json";
import ERC20ABI from "./abi.json";

import Woox from "./Woox.json";
import ICOWoox from "./ICOWoox.json";
import Liquidity from "./Liqudity.json";

//TOKEN
export const Woox_ADDRESS = "0x.......";
export const Woox_ABI = Woox.abi;

//TOKEN SALE
export const ICOWoox_ADDRESS = "0x.......";
export const ICOWoox_ABI = Woox.abi;
//LIQUIDITY
export const Liqudity_address = "0x.......";
export const Liqudity_abi = Woox.abi;

export const FACTORY_ABI = factoryAbi;
export const FACTORY_ADDRESS = "....k..";
export const positionManagerAddress = "...y...";


const fetchContract = (signer, ABI, ADDRESS) =>  new ethers.Contract(ADDRESS, ABI, signer);


export const web3Provider = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.provider.web3Provider(connection);

        return provider;
    } catch (error) {
        console.log(error);
    }
};

export const CONNECTING_CONTRACT = async (ADDRESS) => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.provider.web3Provider(connection);

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
        const address = await contract.address;

        const  token = {
            address: address,
            name: name,
            symbol: symbol,
            decimals: decimals,
            supply: ethers.utils.formaEther(supply.toString()),
            balance: ethers.utils.formaEther(balance.toString()),
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
        const provider = new ethers.provider.web3Provider(connection);

        const contract = fetchContract(provider, Woox_ABI, Woox_ADDRESS);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const internalICOWooxContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.provider.web3Provider(connection);

        const contract = fetchContract(provider, ICOWoox_ABI, ICOWoox_ADDRESS);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const internalAddLiquidity = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.provider.web3Provider(connection);

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
