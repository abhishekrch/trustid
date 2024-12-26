import { ethers } from 'ethers';
import TrustID from './trustID.json';

export const contract = async () => {
    if (!window.ethereum) {
        throw new Error("Please install metamask");
    }

    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        
        const contractReader = new ethers.Contract(
            '0x7a52e25b56a1e1be2b931629f20d8c6e9ac2a3a2',
            TrustID,
            signer
        );
        
        return contractReader;

    } catch (error) {
        console.error("Contract initialization error:", error);
        throw error;
    }
};
