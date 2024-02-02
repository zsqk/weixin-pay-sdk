import { assertUnknownObject } from 'https://deno.land/x/somefn@v0.27.1/ts/object.ts';

/**
 * [业务类型] 微信支付 平台证书
 * @link <https://pay.weixin.qq.com/docs/merchant/apis/platform-certificate/api-v3-get-certificates/get.html>
 */
export type Certificate = {
  /**
   * 【证书序列号】 平台证书的主键，唯一定义此资源的标识
   */
  serial_no: string;
  /**
   * 【证书启用时间】 启用证书的时间，时间格式为RFC3339。每个平台证书的启用时间是固定的。
   */
  effective_time?: string;
  /**
   * 【证书弃用时间】 弃用证书的时间，时间格式为RFC3339。更换平台证书前，会提前24小时修改老证书的弃用时间，接口返回新老两个平台证书。更换完成后，接口会返回最新的平台证书。
   */
  expire_time?: string;
  /**
   * 【证书信息】 证书内容
   */
  encrypt_certificate: {
    /**
     * 【加密证书的算法】 对开启结果数据进行加密的加密算法，目前只支持AEAD_AES_256_GCM。
     */
    algorithm: string;
    /**
     * 【加密证书的附加数据】 加密证书的附加数据，固定为“certificate"。
     */
    associated_data?: string;
    /**
     * 【加密后的证书内容】 使用API KEY和上述参数，可以解密出平台证书的明文。证书明文为PEM格式。（注意：更换证书时会出现PEM格式中的证书失效时间与接口返回的证书弃用时间不一致的情况）
     */
    ciphertext: string;
    /**
     * 【加密证书的随机串】 对应到加密算法中的IV。
     */
    nonce: string;
  };
};

/**
 * [业务类型断言函数] 断言参数为微信支付平台证书
 * @param v
 */
export function assertCertificate(v: unknown): asserts v is Certificate {
  assertUnknownObject(v);
  if (typeof v.serial_no !== 'string') {
    throw new TypeError('serial_no must be string');
  }
  if (v.effective_time !== undefined && typeof v.effective_time !== 'string') {
    throw new TypeError('effective_time must be string or undefined');
  }
  if (v.expire_time !== undefined && typeof v.expire_time !== 'string') {
    throw new TypeError('expire_time must be string or undefined');
  }
  assertUnknownObject(v.encrypt_certificate);
  if (typeof v.encrypt_certificate.algorithm !== 'string') {
    throw new TypeError('encrypt_certificate.algorithm must be string');
  }
  if (
    v.encrypt_certificate.associated_data !== undefined &&
    typeof v.encrypt_certificate.associated_data !== 'string'
  ) {
    throw new TypeError(
      'encrypt_certificate.associated_data must be string or undefined',
    );
  }
  if (typeof v.encrypt_certificate.ciphertext !== 'string') {
    throw new TypeError('encrypt_certificate.ciphertext must be string');
  }
  if (typeof v.encrypt_certificate.nonce !== 'string') {
    throw new TypeError('encrypt_certificate.nonce must be string');
  }
}
