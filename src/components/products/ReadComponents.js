import { useEffect, useState } from "react";
import { getOne } from "../../api/productsApi";
import { API_SERVER_HOST } from "../../api/productsApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";

const host = API_SERVER_HOST;

const ReadComponent = ({ productId }) => {
  const initState = {
    id: 0,
    productName: "",
    info: "",
    realPrice: 0,
    price: 0,
    discount: 0,
    quantity: 0,
    storeName: "",
    storeInfo: "",
  };

  const [product, setProduct] = useState(initState);
  const { moveToList, moveToModify } = useCustomMove();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    getOne(productId)
      .then((data) => {
        setProduct(data.data);
        setFetching(false);
      })
      .catch((error) => {
        console.error(error);
        setFetching(false);
      });
  }, [productId]);

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {fetching ? <FetchingModal /> : <></>}
      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">제품 ID</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.id}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">제품명</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.productName}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">가격</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.price}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">설명</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.info}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">할인</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.discount}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">수량</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.quantity}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">매장명</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.storeName}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">매장 설명</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.storeInfo}
          </div>
        </div>
      </div>
      <div className="flex justify-end p-4">
        <button
          type="button"
          className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
          onClick={() => moveToModify(productId)}
        >
          Modify
        </button>
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={moveToList}
        >
          List
        </button>
      </div>
    </div>
  );
};

export default ReadComponent;