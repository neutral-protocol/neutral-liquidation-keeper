import { Contract, ethers } from 'ethers';
import colors from "colors";
import getOpenPositions from "../src/helpers/getOpenPositions";
import getPositionsToLiquidate from "../src/helpers/getPositionsToLiquidate";
import { checkProviderHealth } from "../src/utils";
import { ethBalance, liquidationErrors } from "../src/utils/prometheus";
import { liquidateMultiple } from "../src/helpers/liquidatePositions";

const liquidationHandler = async function () {
    try {
        let provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
        const isProviderHealthy = await checkProviderHealth(provider);
        if (!isProviderHealthy) {
            console.log(colors.red("Main provider is not healthy. Switching to fallback provider."));
            provider = new ethers.providers.JsonRpcProvider(process.env.FALLBACK_RPC_URL);
        }

        const signer = new ethers.Wallet(`0x${process.env.LIQUIDATOR_PRIVATE_KEY}`, provider);
        
        const vaultAbi = require('./abi/Vault.json');
        const vaultInterface = new ethers.utils.Interface(vaultAbi);
        const vault = new Contract(
            process.env.VAULT_ADDRESS,
            vaultInterface,
            signer
        );
        
        // Update ETH balance metric
        const balanceWei = await signer.getBalance();
        const balanceEth = ethers.utils.formatEther(balanceWei);
        ethBalance.set(parseFloat(balanceEth));

        console.log("STEP 1: Get open positions");

        const openPositions = await getOpenPositions(vault, provider);

        console.info("openPositions.length: " + openPositions.length);

        if (openPositions.length === 0) {
            console.info("OK, nothing liquidated.");
            return;
        }

        console.log("STEP 2: Get positions to liquidate");
        const positionsToLiquidate = await getPositionsToLiquidate(vault, openPositions);

        console.log("positionsToLiquidate.length: " + positionsToLiquidate.length);

        console.log("STEP 3: Check liquidations");
        if (positionsToLiquidate.length === 0) {
            console.info("OK, nothing liquidated.");
            return;
        }

        console.log("STEP 4: Liquidate positions");
        await liquidateMultiple(positionsToLiquidate, vault);
        console.log("OK, all positions liquidated.");

        return;
    } catch (error) {
        liquidationErrors.inc({ error: error.message });
        console.error("Error occured in liquidate.ts:handler");
        console.error(error);
    }
};

let isProcessing = false;
export default async () => {
    if (isProcessing) {
        console.info("Liquidation is already processing.");
        return;
    }
    isProcessing = true;
    await liquidationHandler();
    isProcessing = false;
};
