// pages/verify.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Verify() {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentIdPattern = /^U\d{4}\d{5}$/;
    if (!studentIdPattern.test(studentId)) {
      setError('学号格式不正确');
      return;
    }
    if (!name) {
      setError('姓名不能为空');
      return;
    }
    alert(`欢迎，${name}！`);
    router.push('/purchase');
  };

  return (
    <div>
      <h1>身份验证</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>学号:</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div>
          <label>姓名:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">提交</button>
      </form>
    </div>
  );
}
