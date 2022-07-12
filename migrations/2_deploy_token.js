const FXControllableToken = artifacts.require('FXControllableToken')

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(FXControllableToken)
    await FXControllableToken.deployed()
    console.log('FXC successfully deployed!')
}
