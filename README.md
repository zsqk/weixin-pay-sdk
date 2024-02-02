# weixin-pay-sdk

weixin pay SDK for deno (v3)

适用于微信支付 API 的 JS SDK. 使用 TypeScript 编写, 推荐在 Deno 环境下运行.

主要特性为:

1. 功能. 计划支持微信支付 API 的所有功能.
2. 性能. 尽量使用 Web API, 而不是 JS, 保证性能.
3. 兼容. 尽量使用 Web API, 兼容浏览器环境及 Deno.

主要功能有:

- [x] 1. [基础] 签名
- [ ] 2. [业务] 发起商家转账

## 文档标准

微信支付 v3 的 API 文档至少有两处, 以支付下单为例:

1. <https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/direct-jsons/jsapi-prepay.html>
2. <https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_1.shtml>

我们使用前者. 因为当前时间查看时, 前者文档显示的更新时间为 `2023.08.16`,
而后者文档显示的更新时间为 `2022.09.05`. 前者受到了微信支付更良好的维护.

## 版本号

大版本号跟随微信支付 API, 比如现在微信支付 API 版本为 `v3`, 那么 weixin-pay-sdk
的版本号则为 `3.x.x`.
