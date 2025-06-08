# BTC Layer 2 Bridge Architecture

## Overview
The BTC Layer 2 Bridge is a comprehensive system that enables bridging of native BTC, ERC20, and ERC721 tokens between Bitcoin and an EVM-compatible Layer 2 network. The system consists of several smart contracts that work together to provide a secure and efficient bridging mechanism.

## Contract Architecture

```mermaid
classDiagram
    class BTCLayer2Bridge {
        +address superAdminAddress
        +address normalAdminAddress
        +address bridgeERC20Address
        +address bridgeERC721Address
        +uint256 bridgeFee
        +address feeAddress
        +initialize(address,address,address,address,address)
        +setSuperAdminAddress(address)
        +setNormalAdminAddress(address)
        +addUnlockTokenAdminAddress(address)
        +unlockNativeToken(bytes32,address,uint256)
        +lockNativeToken(address,uint256,string)
        +setBridgeSettingsFee(address,uint256)
    }

    class BTCLayer2BridgeERC20 {
        +address bridgeAddress
        +mapping(bytes32 => address) erc20TokenInfoToWrappedToken
        +initialize(address,address)
        +addERC20TokenWrapped(string,string,uint8,uint256)
        +mintERC20Token(bytes32,address,address,uint256)
        +burnERC20Token(address,address,uint256)
        +setBlackListERC20Token(address,address,bool)
    }

    class BTCLayer2BridgeERC721 {
        +address bridgeAddress
        +mapping(bytes32 => address) erc721TokenInfoToWrappedToken
        +initialize(address,address)
        +addERC721TokenWrapped(string,string,string)
        +batchMintERC721Token(bytes32,address,address,string[],uint256[])
        +batchBurnERC721Token(address,address,uint256[])
        +setBaseURI(address,string)
    }

    class ERC20TokenWrapped {
        +mint(address,uint256)
        +burn(address,uint256)
        +setBlackList(address,bool)
    }

    class ERC721TokenWrapped {
        +mint(address,uint256,string)
        +burn(address,uint256)
        +setBaseURI(string)
    }

    BTCLayer2Bridge --> BTCLayer2BridgeERC20 : manages
    BTCLayer2Bridge --> BTCLayer2BridgeERC721 : manages
    BTCLayer2BridgeERC20 --> ERC20TokenWrapped : creates & manages
    BTCLayer2BridgeERC721 --> ERC721TokenWrapped : creates & manages
```

## Key Components

### 1. BTCLayer2Bridge
The main bridge contract that orchestrates the entire bridging system. It handles:
- Native BTC bridging (lock/unlock)
- Administration and access control
- Fee management
- Integration with ERC20 and ERC721 bridges

### 2. BTCLayer2BridgeERC20
Manages ERC20 token bridging:
- Creates wrapped ERC20 tokens
- Handles minting and burning of wrapped tokens
- Maintains token registry and transaction history

### 3. BTCLayer2BridgeERC721
Manages ERC721 token bridging:
- Creates wrapped ERC721 tokens
- Handles batch minting and burning of NFTs
- Manages token metadata and URIs

### 4. Wrapped Tokens
- `ERC20TokenWrapped`: Wrapped ERC20 token implementation
- `ERC721TokenWrapped`: Wrapped ERC721 token implementation

## Key Features

1. **Multi-Token Support**
   - Native BTC
   - ERC20 tokens
   - ERC721 tokens (NFTs)

2. **Security Features**
   - Multi-level admin system
   - Transaction hash tracking
   - Blacklist functionality
   - Pause mechanism

3. **Fee Management**
   - Configurable bridge fees
   - Fee whitelist system
   - Maximum fee limits

4. **Token Management**
   - Create2 deployment for wrapped tokens
   - Token metadata management
   - Batch operations for NFTs

## Access Control

The system implements a hierarchical access control system:
- Super Admin: Highest level of control
- Normal Admin: Secondary level of control
- Unlock Token Admin: Specific permissions for token unlocking
- Pause Admin: Ability to pause the system

## Events and Monitoring

The system emits various events for monitoring and tracking:
- Token minting/burning
- Admin changes
- Fee updates
- Bridge operations
- Blacklist updates

## Version Information
- BTCLayer2Bridge: v1.6.0
- BTCLayer2BridgeERC20: v1.2.0
- BTCLayer2BridgeERC721: v1.1.0 