/**
 * 下单 (准备支付)
 * - JSAPI: https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/direct-jsons/jsapi-prepay.html
 * - 小程序: https://pay.weixin.qq.com/docs/merchant/apis/mini-program-payment/mini-prepay.html
 */

/**
 * 请求参数
 * @link <https://pay.weixin.qq.com/docs/merchant/apis/mini-program-payment/mini-prepay.html>
 */
export type PrepayReqParams = {
  /**
   * 【公众号ID】 公众号ID
   */
  appid: string;
  /**
   * 【直连商户号】 直连商户号
   */
  mchid: string;
  /**
   * 【商品描述】 商品描述
   */
  description: string;
  /**
   * 【商户订单号】 商户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一。
   */
  out_trade_no: string;
  /**
   * 【交易结束时间】 订单失效时间，遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，
   * yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss表示时分秒，
   * TIMEZONE表示时区（+08:00表示东八区时间，领先UTC8小时，即北京时间）。
   * 例如：2015-05-20T13:29:35+08:00表示，北京时间2015年5月20日13点29分35秒。
   */
  time_expire?: string;
  /**
   * 【附加数据】 附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，
   * 实际情况下只有支付完成状态才会返回该字段。
   */
  attach?: string;
  /**
   * 【通知地址】 异步接收微信支付结果通知的回调地址，通知URL必须为外网可访问的URL，不能携带参数。
   * 公网域名必须为HTTPS，如果是走专线接入，使用专线NAT IP或者私有回调域名可使用HTTP
   */
  notify_url: string;
  /**
   * 【订单优惠标记】 订单优惠标记
   */
  goods_tag?: string;
  /**
   * 【电子发票入口开放标识】 传入true时，支付成功消息和支付详情页将出现开票入口。
   * 需要在微信支付商户平台或微信公众平台开通电子发票功能，传此字段才可生效。true：是 false：否
   */
  support_fapiao?: boolean;
  /**
   * 【订单金额】 订单金额信息
   */
  amount: {
    /**
     * 【总金额】 订单总金额，单位为分。
     */
    total: number;
    /**
     * 【货币类型】 CNY：人民币，境内商户号仅支持人民币。
     */
    currency?: string;
  };
  /**
   * 【支付者】 支付者信息。
   */
  payer: {
    /**
     * 【用户标识】 用户在普通商户AppID下的唯一标识。 下单前需获取到用户的OpenID
     */
    openid: string;
  };
  /**
   * 【优惠功能】 优惠功能
   */
  detail?: {
    /**
     * 【订单原价】 1、商户侧一张小票订单可能被分多次支付，订单原价用于记录整张小票的交易金额。
     * 2、当订单原价与支付金额不相等，则不享受优惠。
     * 3、该字段主要用于防止同一张小票分多次支付，以享受多次优惠的情况，正常支付订单不必上传此参数。
     */
    cost_price?: number;
    /**
     * 【商品小票ID】 商家小票ID
     */
    invoice_id?: string;
    /**
     * 【商品ID】 商品ID
     * 条目个数限制：【1，6000】
     */
    goods_detail: Array<{
      /**
       * 【商户侧商品编码】 由半角的大小写字母、数字、中划线、下划线中的一种或几种组成。
       */
      merchant_goods_id: string;
      /**
       * 【微信支付商品编码】 微信支付定义的统一商品编号（没有可不传）
       */
      wechatpay_goods_id?: string;
      /**
       * 【商品名称】 商品的实际名称
       */
      goods_name?: string;
      /**
       * 【商品数量】 用户购买的数量
       */
      quantity: number;
      /**
       * 【商品单价】 单位为：分。如果商户有优惠，需传输商户优惠后的单价
       * (例如：用户对一笔100元的订单使用了商场发的纸质优惠券100-50，则活动商品的单价应为原单价-50)
       */
      unit_price: number;
    }>;
    /**
     * 【场景信息】 支付场景描述
     */
    scene_info?: {
      /**
       * 【用户终端IP】 用户的客户端IP，支持IPv4和IPv6两种格式的IP地址。
       */
      payer_client_ip: string;
      /**
       * 【商户端设备号】 商户端设备号（门店号或收银设备ID）。
       */
      device_id?: string;
      /**
       * 【商户门店信息】 商户门店信息
       */
      store_info?: {
        /**
         * 【门店编号】 商户侧门店编号
         */
        id: string;
        /**
         * 【门店名称】 商户侧门店名称
         */
        name?: string;
        /**
         * 【地区编码】 地区编码
         * TODO 详细请见省市区编号对照表。
         */
        area_code?: string;
        /**
         * 【详细地址】 详细的商户门店地址
         */
        address?: string;
      };
    };
    /**
     * 【结算信息】 结算信息
     */
    settle_info?: {
      /**
       * 【是否指定分账】 是否指定分账
       */
      profit_sharing?: boolean;
    };
  };
};

/**
 * 应答参数
 * @link <https://pay.weixin.qq.com/docs/merchant/apis/mini-program-payment/mini-prepay.html>
 */
export type PrepayRes = {
  /**
   * 【预支付交易会话标识】 预支付交易会话标识。用于后续接口调用中使用，该值有效期为2小时
   */
  prepay_id: string;
};

/**
 * 业务错误码
 * @link <https://pay.weixin.qq.com/docs/merchant/apis/mini-program-payment/mini-prepay.html>
 */
export enum BusinessErrorCode {
  /**
   * AppID和mch_id不匹配
   * 请确认AppID和mch_id是否匹配
   */
  APPID_MCHID_NOT_MATCH = 'APPID_MCHID_NOT_MATCH',
  /**
   * 无效请求
   * 请根据接口返回的详细信息检查
   */
  INVALID_REQUEST = 'INVALID_REQUEST',
  /**
   * 商户号不存在
   * 请检查商户号是否正确
   */
  MCH_NOT_EXISTS = 'MCH_NOT_EXISTS',
  /**
   * 订单已关闭
   * 当前订单已关闭，请重新下单
   */
  ORDER_CLOSED = 'ORDER_CLOSED',
  /**
   * 签名错误
   * 请检查签名参数和方法是否都符合签名算法要求
   */
  SIGN_ERROR = 'SIGN_ERROR',
  /**
   * 账号异常
   * 用户账号异常，无需更多操作
   */
  ACCOUNT_ERROR = 'ACCOUNT_ERROR',
  /**
   * 商户无权限
   * 请商户前往申请此接口相关权限
   */
  NO_AUTH = 'NO_AUTH',
  /**
   * 商户订单号重复
   * 请核实商户订单号是否重复提交
   */
  OUT_TRADE_NO_USED = 'OUT_TRADE_NO_USED',
  /**
   * 业务规则限制
   * 因业务规则限制请求频率，请查看接口返回的详细信息
   */
  RULE_LIMIT = 'RULE_LIMIT',
  /**
   * 交易错误
   * 因业务原因交易失败，请查看接口返回的详细信息
   */
  TRADE_ERROR = 'TRADE_ERROR',
  /**
   * 订单不存在
   * 请检查订单是否发起过交易
   */
  ORDER_NOT_EXIST = 'ORDER_NOT_EXIST',
  /**
   * 频率超限
   * 请降低请求接口频率
   */
  FREQUENCY_LIMITED = 'FREQUENCY_LIMITED',
  /**
   * 银行系统异常
   * 银行系统异常，请用相同参数重新调用
   */
  BANK_ERROR = 'BANK_ERROR',
  /**
   * 订单号非法
   * 请检查微信支付订单号是否正确
   */
  INVALID_TRANSACTIONID = 'INVALID_TRANSACTIONID',
  /**
   * OpenID和AppID不匹配
   * 请确认OpenID和AppID是否匹配
   */
  OPENID_MISMATCH = 'OPENID_MISMATCH',
  /**
   * 系统错误
   * 系统异常，请用相同参数重新调用
   */
  SYSTEM_ERROR = 'SYSTEM_ERROR',
  /**
   * 余额不足 (查询支付)
   * 用户账号余额不足，请用户充值或更换支付卡后再支付
   */
  NOT_ENOUGH = 'NOT_ENOUGH',
}
