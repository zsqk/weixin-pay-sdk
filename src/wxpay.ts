import { genAuth } from './common/gen-auth.ts';

export class WxpaySDK {
  /** 商户号 */
  readonly mchid: string;

  /** RSA 密钥序列号 */
  private readonly rsaSN: string;

  /** 微信支付接入点 */
  private readonly endpoint: string;

  /** RSA 密钥, 保密 */
  private readonly keyString: string;

  constructor(
    { mchid, rsaSN, endpoint, keyString }: {
      mchid: string;
      rsaSN: string;
      keyString: string;
      endpoint?: string;
    },
  ) {
    this.mchid = mchid;
    this.rsaSN = rsaSN;
    this.keyString = keyString;
    this.endpoint = endpoint ?? 'https://api.mch.weixin.qq.com';
  }

  private genAuth(opt: {
    method: string;
    path: string;
    body: string;
  }): Promise<string> {
    return genAuth(opt, {
      keyString: this.keyString,
      mchid: this.mchid,
      rsaSN: this.rsaSN,
    });
  }

  async request({
    method,
    path,
    body,
  }: {
    method: 'POST' | 'GET';
    path: string;
    body: unknown;
  }): Promise<unknown> {
    const bodyStr = JSON.stringify(body);
    const res = await fetch(`${this.endpoint}${path}`, {
      method,
      headers: {
        Authorization: await this.genAuth({ method, path, body: bodyStr }),
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Language': 'zh-CN',
        'User-Agent': 'zsqk-z1 0.0.1',
      },
      body: bodyStr,
    });

    const text = await res.text();
    console.log(res.status, text);

    if (res.status >= 300) {
      // TODO: 完善报错信息
      throw new Error(`${res.status} ${text}`);
    }
    if (res.headers.get('Content-Type') !== 'application/json') {
      return text;
    }
    return JSON.parse(text);
  }
}
