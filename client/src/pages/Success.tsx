import { Link} from "react-router-dom";
import {  useState } from "react";
import Container from "../ui/Container";
import Loading from "../ui/Loading";

// điều hướng tới trang success sau khi thanh toán thành công
const Success = () => {
  const [loading] = useState(false);

  return (
    <Container>
      {loading && <Loading />}
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          {loading
            ? "Your order payment is processing"
            : "Your Payment Success"}
        </h2>
        <p>
          {loading ? "Once done" : "Now"} you can continue
          Shopping with us
        </p>
        <div className="flex items-center gap-x-5">
          <Link to={"/"}>
            <button className="bg-black text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-primeColor duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Success;
