// pages/purchase.js
import { useEffect, useState } from 'react';

export default function Purchase() {
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    // 模拟支付状态检测
    const checkPaymentStatus = () => {
      // 在此处添加实际的支付状态检测逻辑
      setTimeout(() => {
        setIsPaid(true);
      }, 5000);
    };
    checkPaymentStatus();
  }, []);

  return (
    <div>
      <h1>购买 API Key</h1>
      {isPaid ? (
        <p>支付成功！您的 API Key 是：12345-ABCDE</p>
      ) : (
        <div>
          <p>请使用微信扫码支付</p>
          <img src="/qr_code.png" alt="微信支付二维码" />
        </div>
      )}
    </div>
  );
}
