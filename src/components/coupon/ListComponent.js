import { useEffect, useState } from 'react';
import { getCoupons } from '../../api/couponApi';

const ListComponent = () => {
  const [coupons, setCoupons] = useState([]); // 쿠폰 목록을 저장할 상태
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태

  useEffect(() => {
    getCoupons()
    .then(coupons => {
      setCoupons(coupons || []); // API 응답이 없으면 빈 배열로 초기화
      setLoading(false); // 데이터 로딩 완료 후 로딩 상태 변경
    })
    .catch(error => {
      console.error('Error fetching coupons:', error);
      setLoading(false); // 데이터 로딩 실패 시 로딩 상태 변경
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
  }

  return (
      <div>
        <h1>Coupons</h1>
        <ul>
          {coupons.data.map((coupon, index) => (
              <li key={index}>
                <p>Coupon Info: {coupon.couponInfo || "No Information"}</p>
                <p>Discount: {coupon.discount}</p>
                <p>Amount: {coupon.amount}</p>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default ListComponent;
