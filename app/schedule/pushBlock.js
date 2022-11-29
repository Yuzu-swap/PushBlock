const { ethers } = require("ethers");
module.exports = {
    schedule: {
      interval: '6s', // 1 分钟间隔
      type: 'worker', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
        await ctx.service.web3.transferToMe()        
    },
  };