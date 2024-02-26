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

export function checkGetPayDetailRes(p: unknown): PayDetailRes {
  const {
    appid,
    mchid,
    out_trade_no,
    transaction_id,
    trade_type,
    trade_state,
    trade_state_desc,
    bank_type,
    attach,
    success_time,
    payer,
    amount,
    scene_info,
    promotion_detail,
  } = p as Record<string, unknown>;
  if (appid !== undefined) {
    if (typeof appid !== 'string') {
      throw new Error('返回参数类型错误: appid');
    }
  }
  if (typeof mchid !== 'string') {
    throw new Error('返回参数类型错误: mchid');
  }
  if (typeof out_trade_no !== 'string') {
    throw new Error('返回参数类型错误: out_trade_no');
  }
  if (transaction_id !== undefined) {
    if (typeof transaction_id !== 'string') {
      throw new Error('返回参数类型错误: transaction_id');
    }
  }
  if (trade_type !== undefined) {
    if (typeof trade_type !== 'string') {
      throw new Error('返回参数类型错误: trade_type');
    }
  }
  if (typeof trade_state !== 'string') {
    throw new Error('返回参数类型错误: trade_state');
  }
  if (typeof trade_state_desc !== 'string') {
    throw new Error('返回参数类型错误: trade_state_desc');
  }
  if (bank_type !== undefined) {
    if (typeof bank_type !== 'string') {
      throw new Error('返回参数类型错误: bank_type');
    }
  }
  if (attach !== undefined) {
    if (typeof attach !== 'string') {
      throw new Error('返回参数类型错误: attach');
    }
  }
  if (success_time !== undefined) {
    if (typeof success_time !== 'string') {
      throw new Error('返回参数类型错误: success_time');
    }
  }
  if (payer !== undefined) {
    const { openid } = payer as {
      openid?: string;
    };
    if (openid !== undefined) {
      if (typeof openid !== 'string') {
        throw new Error('返回参数类型错误: payer.openid');
      }
    }
  }
  if (amount !== undefined) {
    const { total, payer_total, currency, payer_currency } = amount as {
      total?: number;
      payer_total?: number;
      currency?: string;
      payer_currency?: string;
    };
    if (total !== undefined) {
      if (typeof total !== 'number') {
        throw new Error('返回参数类型错误: amount.total');
      }
    }
    if (payer_total !== undefined) {
      if (typeof payer_total !== 'number') {
        throw new Error('返回参数类型错误: amount.payer_total');
      }
    }
    if (currency !== undefined) {
      if (typeof currency !== 'string') {
        throw new Error('返回参数类型错误: amount.currency');
      }
    }
    if (payer_currency !== undefined) {
      if (typeof payer_currency !== 'string') {
        throw new Error('返回参数类型错误: amount.payer_currency');
      }
    }
  }
  if (scene_info !== undefined) {
    const { device_id } = scene_info as {
      device_id?: string;
    };
    if (device_id !== undefined) {
      if (typeof device_id !== 'string') {
        throw new Error('返回参数类型错误: scene_info.device_id');
      }
    }
  }
  if (promotion_detail !== undefined) {
    if (!Array.isArray(promotion_detail)) {
      throw new Error('返回参数类型错误: promotion_detail');
    }
    for (
      const {
        coupon_id,
        name,
        scope,
        type,
        amount,
        stock_id,
        wechatpay_contribute,
        merchant_contribute,
        other_contribute,
        currency,
        goods_detail,
      } of promotion_detail
    ) {
      if (typeof coupon_id !== 'string') {
        throw new Error('返回参数类型错误: promotion_detail.coupon_id');
      }

      if (name !== undefined) {
        if (typeof name !== 'string') {
          throw new Error('返回参数类型错误: promotion_detail.name');
        }
      }
      if (scope !== undefined) {
        if (typeof scope !== 'string') {
          throw new Error('返回参数类型错误: promotion_detail.scope');
        }
      }
      if (type !== undefined) {
        if (typeof type !== 'string') {
          throw new Error('返回参数类型错误: promotion_detail.type');
        }
      }
      if (typeof amount !== 'string') {
        throw new Error('返回参数类型错误: promotion_detail.amount');
      }
      if (stock_id !== undefined) {
        if (typeof stock_id !== 'string') {
          throw new Error('返回参数类型错误: promotion_detail.stock_id');
        }
      }
      if (wechatpay_contribute !== undefined) {
        if (typeof wechatpay_contribute !== 'string') {
          throw new Error(
            '返回参数类型错误: promotion_detail.wechatpay_contribute',
          );
        }
      }
      if (merchant_contribute !== undefined) {
        if (typeof merchant_contribute !== 'string') {
          throw new Error(
            '返回参数类型错误: promotion_detail.merchant_contribute',
          );
        }
      }
      if (other_contribute !== undefined) {
        if (typeof other_contribute !== 'string') {
          throw new Error(
            '返回参数类型错误: promotion_detail.other_contribute',
          );
        }
      }
      if (currency !== undefined) {
        if (typeof currency !== 'string') {
          throw new Error(
            '返回参数类型错误: promotion_detail.currency',
          );
        }
      }
      if (goods_detail !== undefined) {
        if (!Array.isArray(goods_detail)) {
          throw new Error(
            '返回参数类型错误: promotion_detail.goods_detail',
          );
        }
        for (
          const {
            goods_id,
            quantity,
            unit_price,
            discount_amount,
            goods_remark,
          } of goods_detail
        ) {
          if (typeof goods_id !== 'string') {
            throw new Error(
              '返回参数类型错误: promotion_detail.goods_detail.goods_id',
            );
          }
          if (typeof quantity !== 'string') {
            throw new Error(
              '返回参数类型错误: promotion_detail.goods_detail.quantity',
            );
          }
          if (typeof unit_price !== 'number') {
            throw new Error(
              '返回参数类型错误: promotion_detail.goods_detail.unit_price',
            );
          }
          if (typeof discount_amount !== 'number') {
            throw new Error(
              '返回参数类型错误: promotion_detail.goods_detail.discount_amount',
            );
          }
          if (goods_remark !== undefined) {
            if (typeof goods_remark !== 'string') {
              throw new Error(
                '返回参数类型错误: promotion_detail.goods_detail.goods_remark',
              );
            }
          }
        }
      }
    }
  }
  return {
    appid,
    mchid,
    out_trade_no,
    transaction_id,
    trade_type,
    trade_state,
    trade_state_desc,
    bank_type,
    attach,
    success_time,
    payer: payer as {
      openid?: string;
    },
    amount: amount as {
      total?: number;
      payer_total?: number;
      currency?: string;
      payer_currency?: string;
    },
    scene_info: scene_info as {
      device_id?: string;
    },
    promotion_detail,
  };
}
