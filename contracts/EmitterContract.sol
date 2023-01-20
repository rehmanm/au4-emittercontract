// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface EmitterContract {
    function attempt() external;
} 

contract EmitWinner {

    function triggerEmit(address _emitterContractAddress) external {
        EmitterContract(_emitterContractAddress).attempt();
    }
}