import { WxpaySDK } from './wxpay.ts';
const wxpay = new WxpaySDK({
  mchid: '1637211800',
  rsaSN: '31224987FCD67455F95ED85999432467577AB13E',
  keyString: `MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6+QEal0/d2UPZ
  xora3ftDgGA3QUrXn8wBB9uZxOHCvO4AQfUEoG50mhNkvXNuXIhgtWYUVH7efAjQ
  ke9iMyvHzRmX+Lv6JKg6JheVWeX8ylJ0HLJIonS1DfCzvIXVVrhh7CURTl0/KtbJ
  1tuiU2fw4d7aOYjTOoYHZx943Af3irfp6u4qDxV8x9Jziw6NLHw6TFQ62Mi+2ro6
  7y+6J7K3upbVYreoqWWAdFhn6lZEu54c8wklOp0vsChz0/ztgkx0zBZjIgMTbKEf
  67JzJJRO+uM5ynzw8mNTtOZ4xkRo4MU5duxIP4jVI0N7VeoAn1j99Fq7A/zAcDrW
  LEGEFbx1AgMBAAECggEBAKX5nzo8sgBM+wdaUS8DOSZt0nuacVbCGrWbhRyWgpZ9
  YoVGB7xIsmS91ZNq/gotCD9ZKDnJ3CmiT6zer3Mr26Rs9FhMzIm8er3LzMme2SOz
  cshyJO2HkTScIF1dcCy248zBdRJMz0fgvnTET4pkofNafpqX0lc4L3xo1a5THJtn
  u3fVY8VDWBSAt5QBp0OtMsrxGRif1wW54l3BQw6J/ALymdrVirwAZN5STYqW7nXG
  M34w+0GkeeoxEBTrV+rCm1oYBtGk8s0tNa6N9PI/7nEIgL3Bl5/Qbk0ESB7eUbdB
  gt0mg0TPR8K3/OJB8oDQoakkH42qD98kmoRC/3tYy6ECgYEA2tU/yfxkRFhyZ/Ve
  ZlMj4MyCbB1Dw+DOrhvW1nAZevvNmOVT5RJ3jK7iBbfpPPXtVGGM8t9ETJHAIVfY
  Hp75pX2vflfyDXoNdgX6VSeygB1qWvhzCITqRHt8sgedlIKCMZwLQS2i2u/CZo78
  FbByQnz8wwsZpIDnVvOFE2e60D0CgYEA2rp70lDG+k/6NHLlMauuBymQ4LhCdN8r
  aIj8s755zd/0B2xJiL8Gbvt5ub6ZJPl4ldkJnIMwpMi/tMdQiDjUMnnKw99uX0cX
  +/qXgbzUkbbTUUxGajYcAnb1y0Aq8SH8DUuYGfX+gpQt9zkf8rCgiuYY55XkslqB
  wjkhkq8Y6JkCgYEAm4HnLrZ42kiwJEgtqTFz0ZADLqktOslKlleaOBC5SrgdxoVR
  NPwGkKbGX6Ht0TBCUzBvZThb5L2+dvNh1YDLj1rdlz8P95vAbRqaZmEra/d7WOIt
  fORXRgsq9aiLxrlno7FsHgk8LbEryI3bfd5BlBYV2NTOiCRCQXwUGVIhY1ECgYEA
  mIa0c9v6dXEyFEMOyo1ipQH6UoqLZT5+4b2tIpawD72dSVPdD2vOS7Q3lSxxVNRW
  n4Ai8K6XTEHlVWYsJWIjrzM5D1AOgohsFD4SStloDljEkYu0CrrC24EjM+ICT/aX
  8pmFbo0ZNuuoBh8ixTUgLtv3//6J5Umx9MOsQsKxhvkCgYBX+g9AY5vAWrrW5sjm
  E4c/FdFi5ArjjSPWNpmAldMohr654n3+fnGElLtG4KgZnBCltYWKpKqoKtRkONb4
  kO0Noz8ZWI3B44uG2siV9OEmNJBcpGCLBlyp89wQlfm0xWM1hPmmFHX28Q7NoT3T
  wBqKFrsuT6MSTR9kVD5n8sqvHw==`,
  apiV3KeyString: 'bAxpNXfE3DyMJYpvDCwJfE6jJ7Bz2H3D',
  isDebug: true,
});

Deno.test({
  name: 'test-wxpay-query',
  async fn() {
    try {
      const res = await wxpay.queryByOutTradeNo('202402261111');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
});
