import { ethers } from "ethers"
import { Keypair } from "@solana/web3.js";
import { HDKey } from "micro-ed25519-hdkey";
import * as bip39 from "bip39";

(async () => {
  const mnemonic = ""
  const seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)
  const hd = HDKey.fromMasterSeed(seed.toString("hex"));
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/501'`;
    const keypair = Keypair.fromSeed(hd.derive(path).privateKey);
    console.log(`${path} => ${keypair.publicKey.toBase58()}`);
  }
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/501'/${i}'`;
    const keypair = Keypair.fromSeed(hd.derive(path).privateKey);
    console.log(`${path} => ${keypair.publicKey.toBase58()}`);
  }
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/501'/${i}'/0'`;
    const keypair = Keypair.fromSeed(hd.derive(path).privateKey);
    console.log(`${path} => ${keypair.publicKey.toBase58()}`);
    for (let j = 0; j < 10; j++) {
      const path = `m/44'/501'/${i}'/0'/${j}'`;
      const keypair = Keypair.fromSeed(hd.derive(path).privateKey);
      console.log(`${path} => ${keypair.publicKey.toBase58()}`);
    }
  }

  /**
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/60'`;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
    console.log(`${path} => ${wallet.address}`);
  }
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/60'/${i}'`;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
    console.log(`${path} => ${wallet.address}`);
  }
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/60'/0'/${i}`;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
    console.log(`${path} => ${wallet.address}`);
  }
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/60'/0'/${i}'`;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
    console.log(`${path} => ${wallet.address}`);
  }
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/60'/${i}'/0`;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
    console.log(`${path} => ${wallet.address}`);
    for (let j = 0; j < 10; j++) {
      const path = `m/44'/60'/${i}'/0'/${j}`;
      const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
      console.log(`${path} => ${wallet.address}`);
    }
  }
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/60'/${i}'/0`;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
    console.log(`${path} => ${wallet.address}`);
    for (let j = 0; j < 10; j++) {
      const path = `m/44'/60'/${i}'/0/${j}`;
      const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
      console.log(`${path} => ${wallet.address}`);
    }
    for (let j = 0; j < 10; j++) {
      const path = `m/44'/60'/${i}'/0'/${j}`;
      const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
      console.log(`${path} => ${wallet.address}`);
    }
 }
  **/

})();
