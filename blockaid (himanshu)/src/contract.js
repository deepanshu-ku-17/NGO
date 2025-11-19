import { ethers } from "ethers";

// Contract details
const CONTRACT_ADDRESS = "0xYourSmartContractAddress"; // Replace with deployed contract address
const ABI = [
    {
        "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }],
        "name": "registerNGO",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "registerDonor",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "_ngoAddress", "type": "address" },
            { "internalType": "uint256", "name": "_amount", "type": "uint256" }
        ],
        "name": "donateToNGO",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Connect to Ethereum provider (MetaMask)
const getEthereumContract = () => {
    if (!window.ethereum) throw new Error("MetaMask is not installed!");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};

// Function to register an NGO
export const registerNGO = async (_name) => {
    try {
        const contract = getEthereumContract();
        const tx = await contract.registerNGO(_name);
        await tx.wait();
        alert("NGO Registered Successfully!");
    } catch (error) {
        console.error(error);
        alert("Error Registering NGO!");
    }
};

// Function to register a Donor
export const registerDonor = async () => {
    try {
        const contract = getEthereumContract();
        const tx = await contract.registerDonor({ value: ethers.utils.parseEther("0.1") });
        await tx.wait();
        alert("Donor Registered Successfully!");
    } catch (error) {
        console.error(error);
        alert("Error Registering Donor!");
    }
};

// Function to make a donation
export const donateToNGO = async (_ngoAddress, _amount) => {
    try {
        const contract = getEthereumContract();
        const tx = await contract.donateToNGO(_ngoAddress, ethers.utils.parseEther(_amount));
        await tx.wait();
        alert("Donation Successful!");
    } catch (error) {
        console.error(error);
        alert("Error in Donation!");
    }
};
