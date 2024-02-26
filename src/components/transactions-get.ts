import { PrepayReqParams } from './transactions-prepay.ts';

type ReqParams =
  & Partial<Pick<PrepayReqParams, 'appid'>>
  & Pick<PrepayReqParams, 'mchid' | 'out_trade_no' | 'attach'>
  & {
    /**
     * 【微信支付订单号】 微信支付系统生成的订单号。
     */
    transaction_id?: string;
    /**
     * 【交易类型】 交易类型，枚举值：
     * JSAPI：公众号支付
     * NATIVE：扫码支付
     * APP：APP支付
     * MICROPAY：付款码支付
     * MWEB：H5支付
     * FACEPAY：刷脸支付
     */
    trade_type?: string;
    /**
     * 【交易状态】 交易状态，枚举值：
     * SUCCESS：支付成功
     * REFUND：转入退款
     * NOTPAY：未支付
     * CLOSED：已关闭
     * REVOKED：已撤销（仅付款码支付会返回）
     * USERPAYING：用户支付中（仅付款码支付会返回）
     * PAYERROR：支付失败（仅付款码支付会返回）
     */
    trade_state: string;
    /**
     * 【交易状态描述】 交易状态描述
     */
    trade_state_desc: string;
    /**
     * 【银行类型】 银行类型，采用字符串类型的银行标识。 银行标识请参考《银行类型对照表》
     * https://pay.weixin.qq.com/docs/merchant/development/chart/bank-type.html
     */
    bank_type?: string;
    /**
     * 【支付完成时间】 支付完成时间
     */
    success_time?: string;
    /**
     * 【支付者】 支付者
     */
    payer?: {
      /**
       * 【用户标识】 用户标识
       * TODO: 什么情况下有 payer 却没有 openid?
       */
      openid?: string;
    };
    /**
     * 【订单金额】 订单金额
     */
    amount?: {
      /**
       * 【总金额】 订单总金额，单位为分
       */
      total?: number;
      /**
       * 【用户支付金额】 用户支付金额，单位为分。（指使用优惠券的情况下，这里等于总金额-优惠券金额）
       */
      payer_total?: number;
      /**
       * 【货币类型】 CNY：人民币，境内商户号仅支持人民币。
       */
      currency?: string;
      /**
       * 【用户支付币种】 用户支付币种
       */
      payer_currency?: string;
    };
    /**
     * 【场景信息】 场景信息
     */
    scene_info?: {
      /**
       * 【商户端设备号】 商户端设备号
       */
      device_id?: string;
    };
    /**
     * 【优惠功能】 优惠功能
     */
    promotion_detail?: Array<{
      /**
       * 【券ID】 券ID
       */
      coupon_id: string;
      /**
       * 【优惠名称】 优惠名称
       */
      name?: string;
      /**
       * 【优惠范围】 优惠范围，枚举值：
       * GLOBAL：全场代金券
       * SINGLE：单品优惠
       */
      scope?: string;
      /**
       * 【优惠类型】 优惠类型，枚举值：
       * CASH：充值型代金券
       * NOCASH：免充值型代金券
       */
      type?: string;
      /**
       * 【优惠券面额】 优惠券面额
       */
      amount: string;
      /**
       * 【活动ID】 活动ID，批次ID
       */
      stock_id?: string;
      /**
       * 【微信出资】 微信出资，单位为分
       */
      wechatpay_contribute?: string;
      /**
       * 【商户出资】 商户出资，单位为分
       */
      merchant_contribute?: string;
      /**
       * 【其他出资】 其他出资，单位为分
       */
      other_contribute?: string;
      /**
       * 【优惠币种】 CNY：人民币，境内商户号仅支持人民币。
       */
      currency?: string;
      /**
       * 【单品列表】
       */
      goods_detail?: Array<{
        /**
         * 【商品编码】 商品编码
         */
        goods_id: string;
        /**
         * 【商品数量】 商品数量
         */
        quantity: string;
        /**
         * 【商品单价】 商品单价，单位为分
         */
        unit_price: number;
        /**
         * 【商品优惠金额】 商品优惠金额
         */
        discount_amount: number;
        /**
         * 【商品备注】 商品备注
         */
        goods_remark?: string;
      }>;
    }>;
  };

export type PayDetailRes = {
  /** 【公众号ID】 公众号ID */
  appid?: string;
  /** 【直连商户号】 直连商户号 */
  mchid: string;
  /**
   * 【商户订单号】 商户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一，详见【商户订单号】
   */
  out_trade_no: string;
  /**
   * 【微信支付订单号】 微信支付系统生成的订单号。
   */
  transaction_id?: string;
  /**
   * 【交易类型】 交易类型，枚举值：
   * JSAPI：公众号支付
   * NATIVE：扫码支付
   * APP：APP支付
   * MICROPAY：付款码支付
   * MWEB：H5支付
   * FACEPAY：刷脸支付
   */
  trade_type?: string;
  /**
   * 【交易状态】 交易状态，枚举值：
   * SUCCESS：支付成功
   * REFUND：转入退款
   * NOTPAY：未支付
   * CLOSED：已关闭
   * REVOKED：已撤销（仅付款码支付会返回）
   * USERPAYING：用户支付中（仅付款码支付会返回）
   * PAYERROR：支付失败（仅付款码支付会返回）
   */
  trade_state: string;
  /**
   * 【交易状态描述】 交易状态描述
   */
  trade_state_desc: string;
  /**
   * 【银行类型】 银行类型，采用字符串类型的银行标识。 银行标识请参考《银行类型对照表》
   * https://pay.weixin.qq.com/docs/merchant/development/chart/bank-type.html
   */
  bank_type?: string;
  /** 【附加数据】 附加数据 */
  attach?: string;
  /**【支付完成时间】 支付完成时间 */
  success_time?: string;
  payer?: {
    /**
     * 【用户标识】 用户标识
     * TODO: 什么情况下有 payer 却没有 openid?
     */
    openid?: string;
  };
  /**
   * 【订单金额】 订单金额
   */
  amount?: {
    /**
     * 【总金额】 订单总金额，单位为分
     */
    total?: number;
    /**
     * 【用户支付金额】 用户支付金额，单位为分。（指使用优惠券的情况下，这里等于总金额-优惠券金额）
     */
    payer_total?: number;
    /**
     * 【货币类型】 CNY：人民币，境内商户号仅支持人民币。
     */
    currency?: string;
    /**
     * 【用户支付币种】 用户支付币种
     */
    payer_currency?: string;
  };
  /**
   * 【场景信息】 场景信息
   */
  scene_info?: {
    /**
     * 【商户端设备号】 商户端设备号
     */
    device_id?: string;
  };
  /**
   * 【优惠功能】 优惠功能
   */
  promotion_detail?: Array<{
    /**
     * 【券ID】 券ID
     */
    coupon_id: string;
    /**
     * 【优惠名称】 优惠名称
     */
    name?: string;
    /**
     * 【优惠范围】 优惠范围，枚举值：
     * GLOBAL：全场代金券
     * SINGLE：单品优惠
     */
    scope?: string;
    /**
     * 【优惠类型】 优惠类型，枚举值：
     * CASH：充值型代金券
     * NOCASH：免充值型代金券
     */
    type?: string;
    /**
     * 【优惠券面额】 优惠券面额
     */
    amount: string;
    /**
     * 【活动ID】 活动ID，批次ID
     */
    stock_id?: string;
    /**
     * 【微信出资】 微信出资，单位为分
     */
    wechatpay_contribute?: string;
    /**
     * 【商户出资】 商户出资，单位为分
     */
    merchant_contribute?: string;
    /**
     * 【其他出资】 其他出资，单位为分
     */
    other_contribute?: string;
    /**
     * 【优惠币种】 CNY：人民币，境内商户号仅支持人民币。
     */
    currency?: string;
    /**
     * 【单品列表】
     */
    goods_detail?: Array<{
      /**
       * 【商品编码】 商品编码
       */
      goods_id: string;
      /**
       * 【商品数量】 商品数量
       */
      quantity: string;
      /**
       * 【商品单价】 商品单价，单位为分
       */
      unit_price: number;
      /**
       * 【商品优惠金额】 商品优惠金额
       */
      discount_amount: number;
      /**
       * 【商品备注】 商品备注
       */
      goods_remark?: string;
    }>;
  }>;
};
