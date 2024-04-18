import {useEffect, useState} from "react"
import { Navigate, createSearchParams, useNavigate } from "react-router-dom";
import {totalOrderAdd} from "../../api/totalOrderApi";
import {getIssued} from "../../api/issuedApi";

const initState = {
  issuedId: 0,
  address: ''
}
const dropdownStyle = {
  border: '1px solid #ccc', // 테두리 스타일 지정
  borderRadius: '4px', // 테두리의 둥근 정도 설정
  padding: '8px', // 내부 여백 지정
};

const TotalOrderComponent = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태
  const [requestParam, setRequestParam] = useState({...initState})
  const navigate = useNavigate();

  const handleChange = (e) => {

    const request = {...requestParam};
    request[e.target.name] = e.target.value;

    setRequestParam(request);
  }
  const addOrder = () => {
    totalOrderAdd(requestParam);
    navigate({ pathname: "/payment" }, { replace: true });
  }

  useEffect(() => {
    getIssued()
    .then(coupons => {
      setCoupons(coupons || []);
      console.log(coupons)
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
  }

  return (
      <div>
        <div className="flex justify-center">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-full p-3 text-left font-bold">사용가능한 쿠폰</div>
            <select name="issuedId" onChange={handleChange} style={dropdownStyle} >
              <option value="0">선택 안함</option>
              {coupons.data.map((coupon, index) => (
                  <option key={index} value={coupon.issuedId}>
                    {coupon.couponInfo || "No Information"}
                  </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-full p-3 text-left font-bold">받으실 주소</div>
            <input
                className="w-full p-3 rounded-r border border-solid border-neutral-500 shadow-md"
                name="address"
                type={'text'}
                value={requestParam.address}
                onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative mb-4 flex w-full justify-center">
            <div className="w-100 p-6 flex justify-center font-bold">
              <button
                  className="rounded p-4 w-36 bg-blue-500 text-xl  text-white"
                  onClick={addOrder}
              >
                결제하기
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
export default TotalOrderComponent;
