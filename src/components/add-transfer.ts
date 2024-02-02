/**
 * 发起商家转账
 * @link <https://pay.weixin.qq.com/docs/merchant/apis/batch-transfer-to-balance/transfer-batch/initiate-batch-transfer.html>
 * @param p 请求参数
 * @param r 请求函数
 * @returns
 */
export function addTransfer<
  R = {
    /**
     * 【商家批次单号】 商户系统内部的商家批次单号，在商户系统内部唯一
     */
    out_batch_no: string;
    /**
     * 【微信批次单号】 微信批次单号，微信商家转账系统返回的唯一标识
     */
    batch_id: string;
    /**
     * 【批次创建时间】 批次受理成功时返回，按照使用rfc3339所定义的格式，格式为YYYY-MM-DDThh:mm:ss+TIMEZONE
     */
    create_time: string;
  },
>(
  p: {
    /**
     * 【商户appid】 申请商户号的appid或商户号绑定的appid（企业号corpid即为此appid）
     */
    appid: string;
    /**
     * 【商家批次单号】 商户系统内部的商家批次单号，要求此参数只能由数字、大小写字母组成，在商户系统内部唯一
     */
    out_batch_no: string;
    /**
     * 【批次名称】 该笔批量转账的名称
     */
    batch_name: string;
    batch_remark: string;
    total_amount: number;
    total_num: number;
    transfer_detail_list: Array<{
      /**
       * 【商家明细单号】 商户系统内部区分转账批次单下不同转账明细单的唯一标识，要求此参数只能由数字、大小写字母组成
       */
      out_detail_no: string;
      /**
       * 【转账金额】 转账金额单位为“分”
       */
      transfer_amount: number;
      transfer_remark: string;
      openid: string;
      /**
       * 【收款用户姓名】 收款方真实姓名。支持标准RSA算法和国密算法，公钥由微信侧提供
明细转账金额<0.3元时，不允许填写收款用户姓名
明细转账金额 >= 2,000元时，该笔明细必须填写收款用户姓名
同一批次转账明细中的姓名字段传入规则需保持一致，也即全部填写、或全部不填写
若商户传入收款用户姓名，微信支付会校验用户openID与姓名是否一致，并提供电子回单
       */
      user_name?: string;
    }>;
    transfer_scene_id?: string;
  },
  r: (p: unknown) => Promise<R>,
): Promise<R> {
  const method = 'POST';
  const path = '/v3/transfer/batches';
  return r(p);
}
