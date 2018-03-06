let Trading = artifacts.require('./Trading.sol')

module.exports = (deployer) => { deployer.deploy(Trading) }
