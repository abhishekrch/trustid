import {ethers} from 'ethers';
import TrustID from './trustID.json';

export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const {ethereum} = window;
    if(ethereum) {
        const signer = provider.getSigner()
        const contractReader = new ethers.Contract(
            '0x7a52e25b56a1e1be2b931629f20d8c6e9ac2a3a2', 
            TrustID, 
            signer
        )
        return contractReader;

    }

}
