# FXC - Controllable Token
`FXC` 一种可控代币，可以实现代币的增发与销毁。

### ABI

#### 获取实例
```js
let instance = await FXControllableToken.deployed()
```

#### 获取供应量
```js
let total = await instance.totalSupply()
total.toString()
```

#### 获取余额
```js
let balance = await instance.balanceOf(<ACCOUNT_ADDRESS>)
balance.toString()
```

#### 转账
```js
let result = await instance.transfer(<TO_ADDRESS>, web3.utils.toBN(<AMOUNT>))
result
```

#### 增发
```js
let result = await instance.mint(<TO_ADDRESS>, web3.utils.toBN(<AMOUNT>))
result
```

#### 销毁
```js
let result = await instance.burn(web3.utils.toBN(web3.utils.toBN(<AMOUNT>)))
result
```