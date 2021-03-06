const Staking = artifacts.require("./Staking.sol")
const { expectRevert, time, BN, ether, balance } = require("@openzeppelin/test-helpers")

contract('Staking' , ([deployer, staker, one, two, three]) => {
    let staking;

    before(async () => {
        staking = await Staking.deployed()
    })

    describe('deployment', async() => {
        it('deploys successfully', async () => {
            const address = await staking.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })

    describe('Staking', async() => {
        let amount = web3.utils.toWei('1' , 'Ether');
        let werid = web3.utils.toWei('1' , 'Ether');
        let alot = web3.utils.toWei('3' , 'Ether');

        it('Deposit', async () => {
            
            web3.eth.getBalance(staker)
            .then(function (balance) {
                console.log("balance: ", balance)
            }).catch(function(e) {
                console.log(e);
            });

            await staking.deposit({from: staker, value: amount});
            await staking.deposit({from: staker, value: amount});

            await staking.donate({from: three, value: alot});
            await staking.deposit({from: two, value: werid});

            await staking.get_time.call().then(function (res) {
                console.log("Time: " + res)
            })

            await staking.get_pay_out(staker).then(function (res) {
                console.log("Staker Pay Out: " + res)
            })

            await staking.get_pay_out(two).then(function (res) {
                console.log("Two Pay Out: " + res)
            })

            total_stake = await staking.get_amount_staked.call().then(function (res) {
                console.log("Total Staked: " + res)
            })

            await staking.get_percentage.call().then(function (res) {
                console.log("Payout: " + res)
            })

            await staking.pay_out();

            console.log("blah");

            await staking.deposit({from: staker, value: amount});
            await staking.deposit({from: staker, value: amount});

            await staking.donate({from: three, value: alot});
            await staking.deposit({from: two, value: werid});

            let stuffs = await staking.pay_out();

            console.log(stuffs);

            web3.eth.getBalance(staker)
            .then(function (balance) {
                console.log("Fucking me balance: ", balance)
            }).catch(function(e) {
                console.log(e);
            });
    
            
        })

        it('Deposit Round 2', async () => {

            await staking.deposit({from: staker, value: amount});
            await staking.deposit({from: staker, value: amount});

            await staking.donate({from: three, value: alot});
            await staking.deposit({from: two, value: werid});
        
            await staking.get_pay_out(staker).then(function (res) {
                console.log("Staker Pay Out: " + res)
            })
    
            
        })

    })
})