# MerlinBridge Periphery

Welcome to the MerlinBridge Periphery repository! This project provides a set of smart contracts and scripts for interacting with the MerlinSwap protocol, allowing users to perform swaps, manage liquidity,Bridge and more.

![0_oOQA60kLJExCUboR](https://github.com/user-attachments/assets/b255bc77-5f1e-4bb8-aa84-30e01826eb52)


## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Running Scripts](#running-scripts)
- [Private Keys](#private-keys)
- [Contributing](#contributing)
- [License](#license)
- [Tokenomics](#tokenomics)

## Installation

To get started with MerlinBridge Periphery, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Merlinchain-io/MerlinBridge.git
   cd MerlinBridge
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

## Configuration

### Setting Up Your Environment

1. **Create a `.secret.js` File**
   - In the root directory, create a file named `.secret.js`.
   - Add your private keys and API keys as follows:
     ```javascript
     module.exports = {
       privateKeys: ['0xYourPrivateKey1', '0xYourPrivateKey2'],
       apiKey: 'YourApiKey',
     };
     ```

2. **Update `hardhat.config.js`**
   - Ensure that your `hardhat.config.js` file is configured to use the networks you want to interact with. You can find the network configurations in the `networks` section of the file.

## Usage

### Running Scripts

To run the scripts, use the following command format:

```bash
npx hardhat run scripts/<script_name>.js --network <network_name>
```

#### Example: Checking Balance

To check the ETH balance of addresses derived from your private keys, run:

```bash
npx hardhat run scripts/checkBalance.js --network bscTest
```

### Swapping Tokens

To perform a swap, you can use the `Swap.sol` contract. Ensure you have the correct parameters for the swap, such as the token addresses and amounts. **Users who swap with our periphery contracts earn points**, which can be used for various rewards and incentives within the ecosystem.

## Private Keys

- **Security**: Keep your private keys secure and never share them. They are used to sign transactions and should be kept confidential.
- **Storage**: Store your private keys in the `.secret.js` file, which should not be committed to version control.

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Tokenomics

### Overview Distribution and Vesting

The total supply of MERL will be 2,100,000,000 and will become accessible over four years, starting at the time of the Token Generation Event (TGE). The initial four-year post-TGE allocation of the total supply of MERL is as follows:

#### Distribution

| Category | Percentage of Total Supply | Description |
|----------|----------------------------|-------------|
| Merlin's Seal Participants | 20.00% (420,000,000 MERL) | Airdropped to participants in Merlin's Seal event. |
| Public Sale | 1.00% (21,000,000 MERL) | Allocated for the public sale via the People's Launchpad. |
| Private Investors | 15.23% (319,830,000 MERL) | Allocated to private investors in two rounds: A round (1.33%) and B round (13.90%). |
| Advisors | 3.00% (63,000,000 MERL) | Allocated to advisors. |
| Team | 4.20% (88,200,000 MERL) | Allocated to the team. |
| Community | 16.57% (348,000,000 MERL) | Allocated for future ecosystem plans and community rewards. |
| Ecosystem | 40.00% (840,000,000 MERL) | Allocated for ecosystem grants and incentives to foster a thriving application environment on Merlin Chain. |

#### Vesting Schedule

| Category | Initial Unlock | Release Schedule |
|----------|----------------|------------------|
| Merlin's Seal Participants | 50% at TGE | Remaining released over 5 months: 25%, 12.5%, 6.25%, 3.125%, 3.125% |
| Public Sale | 50% at TGE | Remaining released over 5 months: 25%, 12.5%, 6.25%, 3.125%, 3.125% |
| Private Investors | None | A round: After 6-month cliff, released over 18 months. B round: After 12-month cliff, released over 36 months. |
| Advisors | None | Released over 30 months after cliff. |
| Team | None | Released over 24 months after cliff. |
| Community | None | Released over 48 months. |
| Ecosystem | None | Released over 48 months. |

### Utility

MERL is the native token of the Merlin Chain ecosystem, playing a crucial role in governance, security, and the overall development of the ecosystem. Its multifaceted utility includes:

- **Governance**: MERL token holders have the right to participate in the decision-making process for significant proposals within the Merlin Chain ecosystem through voting. This community-driven governance ensures that the ecosystem evolves in a manner that reflects the collective interests of its participants.

- **Staking**: MERL can be staked to enhance the security of Merlin Chain. Staking MERL helps maintain the integrity and reliability of the network operations by preventing Sybil attacks, aligning stakers with the success of the ecosystem, and enabling slashing to penalize malicious actors. By staking MERL, participants contribute to the network's robustness and resilience.

- **Transaction Fees**: MERL can be used to pay for transaction fees on prospective Layer3 networks on top of Merlin Chain. This utility provides a seamless and efficient way to facilitate transactions within the ecosystem, making MERL an integral part of the network's economic activities.

- **Delegating to Consensus Nodes**: MERL token holders can delegate their tokens to consensus nodes or stake MERL themselves to operate a consensus node. This delegation process supports the decentralization and scalability of the Merlin Chain, ensuring a secure and efficient consensus mechanism.

- **Native Liquidity and Collateral**: MERL can serve as native liquidity and collateral within the Merlin ecosystem. This functionality promotes smooth transactions and supports lending mechanisms, thereby enhancing the liquidity and financial stability of the network.

### Summary

The multifold utility of MERL underpins its critical role in the Merlin Chain ecosystem, ensuring robust governance, security, and transactional efficiency. Through staking, transaction fee payments, governance participation, and serving as liquidity and collateral, MERL is pivotal to the ongoing success and development of Merlin Chain.
