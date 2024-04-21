import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const BasicMenu = () => {
  const loginState = useSelector((state) => state.loginSlice);
  const jwt = localStorage.getItem("jwt");
  const isLoggedIn = !!jwt;
  const isSeller = isLoggedIn && jwtDecode(jwt).role === "SELLER";

  return (
    <nav id="navbar" className=" flex  bg-blue-300">
      <div className="w-4/5 bg-gray-500">
        <ul className="flex p-4 text-white font-bold">
          <li className="pr-6 text-2xl">
            <Link to={"/"}>Main</Link>
          </li>
          <li className="pr-6 text-2xl">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="pr-6 text-2xl">
            <Link to={"/products/"}>Products</Link>
          </li>

          {isLoggedIn ? ( //로그인한 사용자만 출력되는 메뉴
            <>
              <li className="pr-6 text-2xl">
                <Link to={"/carts/"}>Cart</Link>
              </li>
            </>
          ) : (
              <></>
          )}
             {isSeller ? ( //seller만 보이는 메뉴
            <>
              <li className="pr-6 text-2xl">
                <Link to={"/store/"}>store</Link>
              </li>
            </>
          ) : (
            <></>
          )}
          <li className="pr-6 text-2xl">
            <Link to={'/coupons/'}>Coupons</Link>
          </li>
          <li className="pr-6 text-2xl">
            <Link to={'/totalOrder'}>payments</Link>
            <Link to={"/products/"}>Products</Link>
          </li>
        </ul>
      </div>

      <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
        {isLoggedIn ? (
          <div className="text-white text-sm m-1 rounded">
            <Link to={"/member/logout"}>Logout</Link>
          </div>
        ) : (
          <div className="text-white text-sm m-1 rounded">
            <Link to={"/member/login"}>Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BasicMenu;
