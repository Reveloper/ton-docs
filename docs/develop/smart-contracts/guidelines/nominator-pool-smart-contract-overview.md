# Nominator pool smart contract overview.
## Overview.
Here we try step-by-step research and find out how nominators pool works on deep smart-contract level.
For the begining assure, that we now, from where we will begin.

## Step one.
Look for the official [repository](https://github.com/ton-blockchain/nominator-pool) with contract. Let's start from "main" contract, that will route all funds and proccessed request's - [pool.fc](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc)
So, what now, and how contract works?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Research scheme 1](/img/nominator-pool-smart-contract-overview/research_step_1.png?raw=true)

<ConceptImage src = "/img/nominator-pool-smart-contract-overview/research_step_1.png"/>

As we can see, in pool.fc description:
:::info
The validator has his own wallet in the masterchain, on which he holds his own coins for operating.
From this wallet he sends commands to this nominator pool (mostly `new_stake`, `update_validator_set` and `recover_stake`).
Register/vote_for complaints and register/vote_for config proposals are sent from validator's wallet.
:::

At this point we conclude, that `pool.fc` route incoming messages and do acitons with own storage based on op-codes schema.
We can find out what variants of op we have from [here](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L9).

## Step two. What the OP-codes here?
Let's track of routing `pool.fc` and build top-level scheme of cases:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Research scheme 2](/img/nominator-pool-smart-contract-overview/research_step_2.png?raw=true)

For better understanding, refactor and imagine of op-codes in table:

| OP code                                                                                                                                            | Description                                                                                                                                                                                                  |
|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [new_stake()](https://github.com/ton-blockchain/ton/blob/b38d227a469666d83ac535ad2eea80cb49d911b8/crypto/smartcont/elector-code.fc#L621)           | OP-code of processing message as request for new stake with [process_new_stake()](https://github.com/ton-blockchain/ton/blob/b38d227a469666d83ac535ad2eea80cb49d911b8/crypto/smartcont/elector-code.fc#L198) |
| [new_stake_error()](https://github.com/ton-blockchain/ton/blob/b38d227a469666d83ac535ad2eea80cb49d911b8/crypto/smartcont/elector-code.fc#L169)     | OP-code of processing message as request to switch state = 0(?) [here](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L497)                                                         |                                                                                                       |                                                                                                                             |
| [new_stake_ok()](https://github.com/ton-blockchain/ton/blob/b38d227a469666d83ac535ad2eea80cb49d911b8/crypto/smartcont/elector-code.fc#L173)        | Switch state = 2(?) [here](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L501)                                                                                                     |                                                                                                                      |
| [recover_stake()](https://github.com/ton-blockchain/ton/blob/b38d227a469666d83ac535ad2eea80cb49d911b8/crypto/smartcont/elector-code.fc#L625)       | OP-code used for send recover_stake() to elector [here](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L564).                                                                       |
| [recover_stake_error()](https://github.com/ton-blockchain/ton/blob/b38d227a469666d83ac535ad2eea80cb49d911b8/crypto/smartcont/elector-code.fc#L407) | (?) has no implemented yet.                                                                                                                                                                                  |
| [recover_stake_ok() ](https://github.com/ton-blockchain/ton/blob/b38d227a469666d83ac535ad2eea80cb49d911b8/crypto/smartcont/elector-code.fc#L426)   | Used to for processing accepted message from elector [here](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L470)                                                                    |       

Place op-codes on shceme:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Research scheme 2](/img/nominator-pool-smart-contract-overview/research_step_3.png?raw=true)

Look for `pool.fc` [code](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L322) one another time from macro level - what parts we can see in this smart contract. Let imagine each as a sections and try to spell what for they are:
* [Predefined values](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L9) section - describes some constant for convenient code reading.
* [Functions helpers](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L29) section - describes function helpers that will use in recv_internal() and get_methods.
* [Function recv_iternal()](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L322) section - describes `recv_internal()`, main function of smart contract.
* [Get methods](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L673) section - describes functions that return specified requested information about smart contract. 

Generally, all interactions starts from `recv_internal()`, this main function that route all incoming internal messages from blockchain and acts correspondedly predefined behaviour in it.\
From this moment, we can say, that our messages processing and routes with `recv_internal()`, let's place this on scheme:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Research scheme 2](/img/nominator-pool-smart-contract-overview/research_step_4.png?raw=true)

Now, we can say, that smart contract `pool.fc` does some predefined in it actions(as a rule, sending outcome messages in blockchain) correspondly to OP-codes in incoming messages. 
Simply, denotes they as **action_1**, **action_2**, ... **action_n**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Research scheme 2](/img/nominator-pool-smart-contract-overview/research_step_5.png?raw=true)

Generally, it how `pool.fc` works in blockchain. As we can see `recv_internal()` [code](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc#L322) consits from a lot of different logics. Perhaps, it will be very hard to place all action-scenario in one scheme from first time. From this point let's try to describe each scenario based on OP-code one by one.

## Step three. OP = new_stake().
Let's find out, what new_stake() scenario is.
Now we have scond schem without information, just OP Code = new_stake()


New scheme will build based on three rules:
* Start from real world event
* Describe only key-step 
* Ends with real world event

From the begining we don't know start and end point, but we chosed key-step - msg with op - new_stake. Place all we have on scheme:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Research scheme 2](/img/nominator-pool-smart-contract-overview/research_step_6.png?raw=true)

We can scan through poolf.fc back and forward for 