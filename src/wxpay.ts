import { genAuth } from './common/gen-auth.ts';
import {
  assertArray,
  assertUnknownObject,
} from 'https://deno.land/x/somefn@v0.27.1/ts/object.ts';
import {
  assertCertificate,
  Certificate,
} from './components/get-certificates.ts';

export class WxpaySDK {
  /** 商户号 */
  readonly mchid: string;

  /** RSA 密钥序列号 */
  private readonly rsaSN: string;

  /** 微信支付接入点 */
  private readonly endpoint: string;

  /** RSA 密钥, 保密 */
  private readonly keyString: string;

  isDebug = false;

  constructor(
    { mchid, rsaSN, endpoint, keyString, isDebug }: {
      mchid: string;
      rsaSN: string;
      keyString: string;
      endpoint?: string;
      isDebug?: boolean;
    },
  ) {
    this.mchid = mchid;
    this.rsaSN = rsaSN;
    this.keyString = keyString;
    this.endpoint = endpoint ?? 'https://api.mch.weixin.qq.com';
    if (isDebug !== undefined) {
      this.isDebug = isDebug;
    }
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

  private log(...data: unknown[]): void {
    if (this.isDebug) {
      console.log(...data);
    }
  }

  async request({
    method,
    path,
    body,
    headers,
  }: {
    method: 'POST' | 'GET';
    path: string;
    body?: unknown;
    headers?: Record<string, string>;
  }): Promise<unknown> {
    const bodyStr = JSON.stringify(body);
    const ua = 'zsqk-z1 0.0.1';
    const requestInit: RequestInit = body
      ? {
        method,
        headers: {
          'User-Agent': ua,
          ...headers,
          Authorization: await this.genAuth({ method, path, body: bodyStr }),
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Accept-Language': 'zh-CN',
        },
        body: bodyStr,
      }
      : {
        method,
        headers: {
          'User-Agent': ua,
          ...headers,
          Authorization: await this.genAuth({ method, path, body: '' }),
          Accept: 'application/json',
          'Accept-Language': 'zh-CN',
        },
      };
    const res = await fetch(`${this.endpoint}${path}`, requestInit);

    const text = await res.text();

    if (res.status >= 300) {
      if (res.headers.get('Content-Type') === 'application/json') {
        throw new Error(text);
      }
      throw new Error(`${res.status} ${text}`);
    }

    this.log('res.headers', res.headers);
    if (res.headers.get('Content-Type')?.includes('application/json')) {
      return JSON.parse(text);
    }
    return text;
  }

  /**
   * 获取平台证书
   * 接口的频率限制: 单个商户号1000 次/s
   * @link <https://pay.weixin.qq.com/docs/merchant/apis/platform-certificate/api-v3-get-certificates/get.html>
   * @returns
   */
  public async getCertificates(): Promise<{ data: Certificate[] }> {
    const res = await this.request({ method: 'GET', path: '/v3/certificates' });
    assertUnknownObject(res);
    assertArray(res.data);
    return {
      data: res.data.map((v) => {
        assertCertificate(v);
        return v;
      }),
    };
  }
}
