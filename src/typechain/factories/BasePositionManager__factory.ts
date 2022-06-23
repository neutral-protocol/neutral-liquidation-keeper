/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BasePositionManager,
  BasePositionManagerInterface,
} from "../BasePositionManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_depositFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "marginFeeBasisPoints",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "DecreasePositionReferral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "marginFeeBasisPoints",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "IncreasePositionReferral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "SetAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "depositFee",
        type: "uint256",
      },
    ],
    name: "SetDepositFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "increasePositionBufferBps",
        type: "uint256",
      },
    ],
    name: "SetIncreasePositionBufferBps",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "longSizes",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "shortSizes",
        type: "uint256[]",
      },
    ],
    name: "SetMaxGlobalSizes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "referralStorage",
        type: "address",
      },
    ],
    name: "SetReferralStorage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawFees",
    type: "event",
  },
  {
    inputs: [],
    name: "BASIS_POINTS_DIVISOR",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositFee",
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
        name: "",
        type: "address",
      },
    ],
    name: "feeReserves",
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
    name: "gov",
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
    name: "increasePositionBufferBps",
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
        name: "",
        type: "address",
      },
    ],
    name: "maxGlobalLongSizes",
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
        name: "",
        type: "address",
      },
    ],
    name: "maxGlobalShortSizes",
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
    name: "referralStorage",
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
    name: "router",
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
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depositFee",
        type: "uint256",
      },
    ],
    name: "setDepositFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_increasePositionBufferBps",
        type: "uint256",
      },
    ],
    name: "setIncreasePositionBufferBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_longSizes",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_shortSizes",
        type: "uint256[]",
      },
    ],
    name: "setMaxGlobalSizes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_referralStorage",
        type: "address",
      },
    ],
    name: "setReferralStorage",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "weth",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052606460075534801561001557600080fd5b506040516113803803806113808339818101604052608081101561003857600080fd5b50805160208201516040830151606090930151600160008181558154336001600160a01b031991821681179093556003805482166001600160a01b03978816179055600480548216958716959095179094556005805485169590961694909417909455600655600280549091169092179091556112c59081906100bb90396000f3fe6080604052600436106100fd5760003560e01c80626cc35e146101525780631045c74e14610183578063126082cf146101c857806312d43a51146101dd5780631ce9cb8f146101f2578063233bfe3b1461022557806324a084df1461024f5780633fc8cef314610288578063490ae2101461029d57806367a52793146102c7578063704b6c02146102dc5780639698d25a1461030f57806398d1e03a14610342578063ae4d7f9a14610357578063cfad57a21461038a578063e1f21c67146103bd578063ef12c67e14610400578063f2555278146105b2578063f851a440146105ed578063f887ea4014610602578063fbfa77cf146106175761014d565b3661014d576005546001600160a01b0316331461014b5760405162461bcd60e51b81526004018080602001828103825260238152602001806112436023913960400191505060405180910390fd5b005b600080fd5b34801561015e57600080fd5b5061016761062c565b604080516001600160a01b039092168252519081900360200190f35b34801561018f57600080fd5b506101b6600480360360208110156101a657600080fd5b50356001600160a01b031661063b565b60408051918252519081900360200190f35b3480156101d457600080fd5b506101b661064d565b3480156101e957600080fd5b50610167610653565b3480156101fe57600080fd5b506101b66004803603602081101561021557600080fd5b50356001600160a01b0316610662565b34801561023157600080fd5b5061014b6004803603602081101561024857600080fd5b5035610674565b34801561025b57600080fd5b5061014b6004803603604081101561027257600080fd5b506001600160a01b0381351690602001356106fc565b34801561029457600080fd5b50610167610760565b3480156102a957600080fd5b5061014b600480360360208110156102c057600080fd5b503561076f565b3480156102d357600080fd5b506101b66107f7565b3480156102e857600080fd5b5061014b600480360360208110156102ff57600080fd5b50356001600160a01b03166107fd565b34801561031b57600080fd5b506101b66004803603602081101561033257600080fd5b50356001600160a01b031661089e565b34801561034e57600080fd5b506101b66108b0565b34801561036357600080fd5b5061014b6004803603602081101561037a57600080fd5b50356001600160a01b03166108b6565b34801561039657600080fd5b5061014b600480360360208110156103ad57600080fd5b50356001600160a01b0316610957565b3480156103c957600080fd5b5061014b600480360360608110156103e057600080fd5b506001600160a01b038135811691602081013590911690604001356109c6565b34801561040c57600080fd5b5061014b6004803603606081101561042357600080fd5b810190602081018135600160201b81111561043d57600080fd5b82018360208201111561044f57600080fd5b803590602001918460208302840111600160201b8311171561047057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156104bf57600080fd5b8201836020820111156104d157600080fd5b803590602001918460208302840111600160201b831117156104f257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561054157600080fd5b82018360208201111561055357600080fd5b803590602001918460208302840111600160201b8311171561057457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a9b945050505050565b3480156105be57600080fd5b5061014b600480360360408110156105d557600080fd5b506001600160a01b0381358116916020013516610c8a565b3480156105f957600080fd5b50610167610d6e565b34801561060e57600080fd5b50610167610d7d565b34801561062357600080fd5b50610167610d8c565b6008546001600160a01b031681565b600a6020526000908152604090205481565b61271081565b6001546001600160a01b031681565b60096020526000908152604090205481565b6002546001600160a01b031633146106c1576040805162461bcd60e51b815260206004820152601e6024820152600080516020611223833981519152604482015290519081900360640190fd5b60078190556040805182815290517f21167d0d4661af93817ebce920f18986eed3d75d5e1c03f2aed05efcbafbc4529181900360200190a150565b6001546001600160a01b03163314610749576040805162461bcd60e51b815260206004820152601560248201526000805160206111a3833981519152604482015290519081900360640190fd5b61075c6001600160a01b03831682610d9b565b5050565b6005546001600160a01b031681565b6002546001600160a01b031633146107bc576040805162461bcd60e51b815260206004820152601e6024820152600080516020611223833981519152604482015290519081900360640190fd5b60068190556040805182815290517f974fd3c1fcb4653dfc4fb740c4c692cd212d55c28f163f310128cb64d83006759181900360200190a150565b60065481565b6001546001600160a01b0316331461084a576040805162461bcd60e51b815260206004820152601560248201526000805160206111a3833981519152604482015290519081900360640190fd5b600280546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f5a272403b402d892977df56625f4164ccaf70ca3863991c43ecfe76a6905b0a19181900360200190a150565b600b6020526000908152604090205481565b60075481565b6002546001600160a01b03163314610903576040805162461bcd60e51b815260206004820152601e6024820152600080516020611223833981519152604482015290519081900360640190fd5b600880546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f828abcccea18192c21d645e575652c49e20b986dab777906fc473d056b01b6a89181900360200190a150565b6001546001600160a01b031633146109a4576040805162461bcd60e51b815260206004820152601560248201526000805160206111a3833981519152604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b03163314610a13576040805162461bcd60e51b815260206004820152601560248201526000805160206111a3833981519152604482015290519081900360640190fd5b826001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610a6a57600080fd5b505af1158015610a7e573d6000803e3d6000fd5b505050506040513d6020811015610a9457600080fd5b5050505050565b6002546001600160a01b03163314610ae8576040805162461bcd60e51b815260206004820152601e6024820152600080516020611223833981519152604482015290519081900360640190fd5b60005b8351811015610b83576000848281518110610b0257fe5b60200260200101519050838281518110610b1857fe5b6020026020010151600a6000836001600160a01b03166001600160a01b0316815260200190815260200160002081905550828281518110610b5557fe5b6020908102919091018101516001600160a01b039092166000908152600b9091526040902055600101610aeb565b507fae32d569b058895b9620d6552b09aaffedc9a6f396be4d595a224ad09f8b213983838360405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610bf0578181015183820152602001610bd8565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610c2f578181015183820152602001610c17565b50505050905001848103825285818151815260200191508051906020019060200280838360005b83811015610c6e578181015183820152602001610c56565b50505050905001965050505050505060405180910390a1505050565b6002546001600160a01b03163314610cd7576040805162461bcd60e51b815260206004820152601e6024820152600080516020611223833981519152604482015290519081900360640190fd5b6001600160a01b03821660009081526009602052604090205480610cfb575061075c565b6001600160a01b038316600081815260096020526040812055610d1f908383610e85565b604080516001600160a01b0380861682528416602082015280820183905290517f4f1b51dd7a2fcb861aa2670f668be66835c4ee12b4bbbf037e4d0018f39819e49181900360600190a1505050565b6002546001600160a01b031681565b6004546001600160a01b031681565b6003546001600160a01b031681565b80471015610df0576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015290519081900360640190fd5b6040516000906001600160a01b0384169083908381818185875af1925050503d8060008114610e3b576040519150601f19603f3d011682016040523d82523d6000602084013e610e40565b606091505b5050905080610e805760405162461bcd60e51b815260040180806020018281038252603a8152602001806111c3603a913960400191505060405180910390fd5b505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610e809084906060610f27826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f839092919063ffffffff16565b805190915015610e8057808060200190516020811015610f4657600080fd5b5051610e805760405162461bcd60e51b815260040180806020018281038252602a815260200180611266602a913960400191505060405180910390fd5b6060610f928484600085610f9c565b90505b9392505050565b606082471015610fdd5760405162461bcd60e51b81526004018080602001828103825260268152602001806111fd6026913960400191505060405180910390fd5b610fe6856110f8565b611037576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106110765780518252601f199092019160209182019101611057565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146110d8576040519150601f19603f3d011682016040523d82523d6000602084013e6110dd565b606091505b50915091506110ed8282866110fe565b979650505050505050565b3b151590565b6060831561110d575081610f95565b82511561111d5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561116757818101518382015260200161114f565b50505050905090810190601f1680156111945780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe476f7665726e61626c653a20666f7262696464656e0000000000000000000000416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c42617365506f736974696f6e4d616e616765723a20666f7262696464656e000042617365506f736974696f6e4d616e616765723a20696e76616c69642073656e6465725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212208b489b02ab1308985911aaf15dba30e77b33e4b1132c10b544419c1a4b0be23a64736f6c634300060c0033";

export class BasePositionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _vault: string,
    _router: string,
    _weth: string,
    _depositFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BasePositionManager> {
    return super.deploy(
      _vault,
      _router,
      _weth,
      _depositFee,
      overrides || {}
    ) as Promise<BasePositionManager>;
  }
  getDeployTransaction(
    _vault: string,
    _router: string,
    _weth: string,
    _depositFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _vault,
      _router,
      _weth,
      _depositFee,
      overrides || {}
    );
  }
  attach(address: string): BasePositionManager {
    return super.attach(address) as BasePositionManager;
  }
  connect(signer: Signer): BasePositionManager__factory {
    return super.connect(signer) as BasePositionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasePositionManagerInterface {
    return new utils.Interface(_abi) as BasePositionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasePositionManager {
    return new Contract(address, _abi, signerOrProvider) as BasePositionManager;
  }
}
