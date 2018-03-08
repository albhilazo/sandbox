require('chai/register-expect')

module.exports = {
  networks: {
    development: {
      host: 'ethereum-network',
      port: 8545,
      network_id: '*'
    }
  }
}
