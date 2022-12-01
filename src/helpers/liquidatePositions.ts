import colors from 'colors';
import { Contract } from 'ethers';
import { IPositionSchema } from '../models/position';
import { liquidations } from '../utils/prometheus';

export const liquidateMultiple = async(positions : IPositionSchema[], vault : Contract) => {
    const promises : Promise<any>[] = [];
    
    for (const position of positions) {
        promises.push(
            liquidateSingle(position, vault)
        );
    }
    
    return Promise.all(promises);
};

export const liquidateSingle = async(position : IPositionSchema, vault : Contract) => {
    console.log(colors.yellow(`Liquidating position ${position.account}`));
    const tx = await vault.liquidatePosition(
        position.account,
        position.collateralToken,
        position.indexToken,
        position.isLong,
        process.env.FEE_RECEIVER
    );
    const receipt = await tx.wait();
    console.log(colors.green(`Sent!`));
    console.log(colors.green(`Transaction hash: ${receipt.transactionHash}`));
    liquidations.inc(1);
};
