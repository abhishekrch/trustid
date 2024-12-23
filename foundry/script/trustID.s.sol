// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../src/trustID.sol"; 
import "forge-std/Script.sol"; 

contract DeployTrustID is Script {
    function run() external {
        vm.startBroadcast(); 

        TrustID trustID = new TrustID(); 

        console.log("Contract deployed to:", address(trustID)); 

        vm.stopBroadcast(); 
    }
}
