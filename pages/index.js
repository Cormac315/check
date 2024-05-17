// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [isHuman, setIsHuman] = useState(false);
  const router = useRouter();

  const handleVerification = () => {
    setIsHuman(true);
    router.push('/verify');
  };

  return (
    <div>
      <h1>机器人验证</h1>
      {isHuman ? (
        <p>验证通过！</p>
      ) : (
        <button onClick={handleVerification}>我不是机器人</button>
      )}
    </div>
  );
}
