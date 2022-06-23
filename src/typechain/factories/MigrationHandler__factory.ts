/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MigrationHandler,
  MigrationHandlerInterface,
} from "../MigrationHandler";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "USDG_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ammRouterV1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ammRouterV2",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bnb",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "busd",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gmt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ammRouterV1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ammRouterV2",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gmt",
        type: "address",
      },
      {
        internalType: "address",
        name: "_xgmt",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdg",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bnb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_busd",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_migrator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_redemptionToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_usdgAmount",
        type: "uint256",
      },
    ],
    name: "redeemUsdg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_migrator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_usdgAmount",
        type: "uint256",
      },
    ],
    name: "refund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "refundedAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_migrator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gmtAmountForUsdg",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_xgmtAmountForUsdg",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gmtAmountForBusd",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdg",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "xgmt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600081905580546101003302610100600160a81b03199091161790556116c78061003e6000396000f3fe608060405234801561001057600080fd5b50600436106100d05760003560e01c8063252c3222146100d5578063392e53cd146101155780633ca5b2341461013157806349a876e4146101555780634a686d671461015d57806370ac0a93146101655780638a29e2de1461019d578063a53064d1146101fc578063a9eb51c614610204578063ade027f61461020c578063c9ec924814610214578063ccc362e71461024c578063f5b91b7b14610288578063f8322d2414610290578063f851a44014610298578063fbfa77cf146102a0575b600080fd5b610103600480360360408110156100eb57600080fd5b506001600160a01b03813581169160200135166102a8565b60408051918252519081900360200190f35b61011d6102c5565b604080519115158252519081900360200190f35b6101396102ce565b604080516001600160a01b039092168252519081900360200190f35b6101396102dd565b6101036102ec565b61019b6004803603606081101561017b57600080fd5b506001600160a01b038135811691602081013590911690604001356102f8565b005b61019b60048036036101008110156101b457600080fd5b506001600160a01b038135811691602081013582169160408201358116916060810135821691608082013581169160a081013582169160c082013581169160e00135166107e7565b610139610915565b610139610924565b610139610933565b61019b6004803603608081101561022a57600080fd5b506001600160a01b038135169060208101359060408101359060600135610942565b61019b6004803603608081101561026257600080fd5b506001600160a01b038135811691602081013582169160408201351690606001356111a7565b61013961147f565b61013961148e565b61013961149d565b6101396114b1565b600a60209081526000928352604080842090915290825290205481565b60015460ff1681565b6009546001600160a01b031681565b6008546001600160a01b031681565b670de0b6b3a764000081565b60015461010090046001600160a01b0316331461034a576040805162461bcd60e51b815260206004820152601b6024820152600080516020611621833981519152604482015290519081900360640190fd5b60026000541415610390576040805162461bcd60e51b815260206004820152601f6024820152600080516020611601833981519152604482015290519081900360640190fd5b6002600090815560075460048054604080516323b872dd60e01b81526001600160a01b03898116948201949094529183166024830152604482018690525191909216926323b872dd92606480820193602093909283900390910190829087803b1580156103fc57600080fd5b505af1158015610410573d6000803e3d6000fd5b505050506040513d602081101561042657600080fd5b50506004805460408051630711e61960e41b81526001600160a01b038681169482019490945230602482015290516000939092169163711e61909160448082019260209290919082900301818787803b15801561048257600080fd5b505af1158015610496573d6000803e3d6000fd5b505050506040513d60208110156104ac57600080fd5b5051604080516002808252606080830184529394509091602083019080368337505060085482519293506001600160a01b0316918391506000906104ec57fe5b6001600160a01b03928316602091820292909201015260095482519116908290600190811061051757fe5b6001600160a01b0392831660209182029290920101526008548582169116146105e057604080516003808252608082019092529060208201606080368337019050509050838160008151811061056957fe5b6001600160a01b03928316602091820292909201015260085482519116908290600190811061059457fe5b6001600160a01b0392831660209182029290920101526009548251911690829060029081106105bf57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b6003546040805163095ea7b360e01b81526001600160a01b0392831660048201526024810185905290519186169163095ea7b3916044808201926020929091908290030181600087803b15801561063657600080fd5b505af115801561064a573d6000803e3d6000fd5b505050506040513d602081101561066057600080fd5b50506003546040516338ed173960e01b8152600481018481526000602483018190526001600160a01b038981166064850152426084850181905260a060448601908152875160a4870152875192909616956338ed173995899589948e9493919260c40190602087810191028083838b5b838110156106e85781810151838201526020016106d0565b505050509050019650505050505050600060405180830381600087803b15801561071157600080fd5b505af1158015610725573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561074e57600080fd5b8101908080516040519392919084600160201b82111561076d57600080fd5b90830190602082018581111561078257600080fd5b82518660208202830111600160201b8211171561079e57600080fd5b82525081516020918201928201910280838360005b838110156107cb5781810151838201526020016107b3565b5050505091909101604052505060016000555050505050505050565b60015461010090046001600160a01b03163314610839576040805162461bcd60e51b815260206004820152601b6024820152600080516020611621833981519152604482015290519081900360640190fd5b60015460ff161561087b5760405162461bcd60e51b81526004018080602001828103825260258152602001806116416025913960400191505060405180910390fd5b6001805460ff191681179055600280546001600160a01b03199081166001600160a01b039a8b1617909155600380548216988a1698909817909755600480548816968916969096179095556005805487169488169490941790935560068054861692871692909217909155600780548516918616919091179055600880548416918516919091179055600980549092169216919091179055565b6002546001600160a01b031681565b6006546001600160a01b031681565b6003546001600160a01b031681565b60015461010090046001600160a01b03163314610994576040805162461bcd60e51b815260206004820152601b6024820152600080516020611621833981519152604482015290519081900360640190fd5b600260005414156109da576040805162461bcd60e51b815260206004820152601f6024820152600080516020611601833981519152604482015290519081900360640190fd5b600260008190556040805182815260608082018352929091602083019080368337505060055482519293506001600160a01b031691839150600090610a1b57fe5b6001600160a01b039283166020918202929092010152600754825191169082906001908110610a4657fe5b6001600160a01b03928316602091820292909201810191909152600554604080516323b872dd60e01b8152898516600482015230602482015260448101899052905191909316926323b872dd9260648083019391928290030181600087803b158015610ab157600080fd5b505af1158015610ac5573d6000803e3d6000fd5b505050506040513d6020811015610adb57600080fd5b50506005546003546040805163095ea7b360e01b81526001600160a01b039283166004820152602481018890529051919092169163095ea7b39160448083019260209291908290030181600087803b158015610b3657600080fd5b505af1158015610b4a573d6000803e3d6000fd5b505050506040513d6020811015610b6057600080fd5b50506003546040516338ed173960e01b8152600481018681526000602483018190526001600160a01b038981166064850152426084850181905260a060448601908152875160a4870152875192909616956338ed1739958b9589948e9493919260c40190602087810191028083838b5b83811015610be8578181015183820152602001610bd0565b505050509050019650505050505050600060405180830381600087803b158015610c1157600080fd5b505af1158015610c25573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610c4e57600080fd5b8101908080516040519392919084600160201b821115610c6d57600080fd5b908301906020820185811115610c8257600080fd5b82518660208202830111600160201b82111715610c9e57600080fd5b82525081516020918201928201910280838360005b83811015610ccb578181015183820152602001610cb3565b5050505090500160405250505050600660009054906101000a90046001600160a01b031681600081518110610cfc57fe5b6001600160a01b039283166020918202929092010152600754825191169082906001908110610d2757fe5b6001600160a01b03928316602091820292909201810191909152600654604080516323b872dd60e01b8152898516600482015230602482015260448101889052905191909316926323b872dd9260648083019391928290030181600087803b158015610d9257600080fd5b505af1158015610da6573d6000803e3d6000fd5b505050506040513d6020811015610dbc57600080fd5b50506006546003546040805163095ea7b360e01b81526001600160a01b039283166004820152602481018790529051919092169163095ea7b39160448083019260209291908290030181600087803b158015610e1757600080fd5b505af1158015610e2b573d6000803e3d6000fd5b505050506040513d6020811015610e4157600080fd5b50506003546040516338ed173960e01b8152600481018581526000602483018190526001600160a01b038981166064850152426084850181905260a060448601908152875160a4870152875192909616956338ed1739958a9589948e9493919260c40190602087810191028083838b5b83811015610ec9578181015183820152602001610eb1565b505050509050019650505050505050600060405180830381600087803b158015610ef257600080fd5b505af1158015610f06573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610f2f57600080fd5b8101908080516040519392919084600160201b821115610f4e57600080fd5b908301906020820185811115610f6357600080fd5b82518660208202830111600160201b82111715610f7f57600080fd5b82525081516020918201928201910280838360005b83811015610fac578181015183820152602001610f94565b5050505090500160405250505050600560009054906101000a90046001600160a01b031681600081518110610fdd57fe5b6001600160a01b03928316602091820292909201015260095482519116908290600190811061100857fe5b6001600160a01b03928316602091820292909201810191909152600554604080516323b872dd60e01b8152898516600482015230602482015260448101879052905191909316926323b872dd9260648083019391928290030181600087803b15801561107357600080fd5b505af1158015611087573d6000803e3d6000fd5b505050506040513d602081101561109d57600080fd5b50506005546002546040805163095ea7b360e01b81526001600160a01b039283166004820152602481018690529051919092169163095ea7b39160448083019260209291908290030181600087803b1580156110f857600080fd5b505af115801561110c573d6000803e3d6000fd5b505050506040513d602081101561112257600080fd5b50506002546040516338ed173960e01b8152600481018481526000602483018190526001600160a01b038981166064850152426084850181905260a060448601908152875160a4870152875192909616956338ed173995899589948e9493919260c40190602087810191028083838b83156106e85781810151838201526020016106d0565b60015461010090046001600160a01b031633146111f9576040805162461bcd60e51b815260206004820152601b6024820152600080516020611621833981519152604482015290519081900360640190fd5b6002600054141561123f576040805162461bcd60e51b815260206004820152601f6024820152600080516020611601833981519152604482015290519081900360640190fd5b60026000819055506000846001600160a01b03166341410d4a846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561129657600080fd5b505afa1580156112aa573d6000803e3d6000fd5b505050506040513d60208110156112c057600080fd5b5051604080516370a0823160e01b81526001600160a01b0387811660048301529151929350600092918416916370a0823191602480820192602092909190829003018186803b15801561131257600080fd5b505afa158015611326573d6000803e3d6000fd5b505050506040513d602081101561133c57600080fd5b50519050600061134d8460026114c0565b6001600160a01b038088166000908152600a60209081526040808320938816835292905220549091506113808183611506565b6001600160a01b038881166000908152600a602090815260408083209389168352929052208190558310156113e65760405162461bcd60e51b815260040180806020018281038252602c815260200180611666602c913960400191505060405180910390fd5b600754604080516323b872dd60e01b81526001600160a01b038b811660048301528a8116602483015260448201899052915191909216916323b872dd9160648083019260209291908290030181600087803b15801561144457600080fd5b505af1158015611458573d6000803e3d6000fd5b505050506040513d602081101561146e57600080fd5b505060016000555050505050505050565b6007546001600160a01b031681565b6005546001600160a01b031681565b60015461010090046001600160a01b031681565b6004546001600160a01b031681565b60006114ff83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b81525061155e565b9392505050565b6000828201838110156114ff576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b600081836115ea5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115af578181015183820152602001611597565b50505050905090810190601f1680156115dc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816115f657fe5b049594505050505056fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c004d6967726174696f6e48616e646c65723a20666f7262696464656e00000000004d6967726174696f6e48616e646c65723a20616c726561647920696e697469616c697a65644d6967726174696f6e48616e646c65723a20726566756e6461626c6520616d6f756e74206578636565646564a2646970667358221220e81d63ec5646f7d8cc962d7dbfeb94ea41b3f67776fab715703718e1c9ac5b2364736f6c634300060c0033";

export class MigrationHandler__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MigrationHandler> {
    return super.deploy(overrides || {}) as Promise<MigrationHandler>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MigrationHandler {
    return super.attach(address) as MigrationHandler;
  }
  connect(signer: Signer): MigrationHandler__factory {
    return super.connect(signer) as MigrationHandler__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigrationHandlerInterface {
    return new utils.Interface(_abi) as MigrationHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MigrationHandler {
    return new Contract(address, _abi, signerOrProvider) as MigrationHandler;
  }
}
