import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";
import { ProductProps } from "../../type";
import { store } from "../lib/store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductCardSideNav = ({ product }: { product?: ProductProps }) => {
  const { addToFavorite, favoriteProduct } = store();
  const [existingProduct, setExistingProduct] = useState<ProductProps | null>(null);
  // Kiểm tra xem sản phẩm hiện tại có nằm trong danh sách yêu thích không
  useEffect(() => {
    const availableItem = favoriteProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableItem || null);
  }, [product, favoriteProduct]);
  // Thêm hoặc xóa sản phẩm khỏi danh sách yêu thích và hiển thị thông báo thành công bằng toast
  const handleFavorite = () => {
    if (product) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? `${product?.name.substring(0, 10)} removed successfully!`
            : `${product?.name.substring(0, 10)} added successfully!`
        );
      });
    }
  };

  return (
    <div className="absolute right-1 top-1 flex flex-col gap-1 transition translate-x-12 group-hover:translate-x-0 duration-300">
      <span
        onClick={handleFavorite}
        className={`w-11 h-11 inline-flex text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200 ${existingProduct ? 'text-red-500' : 'text-black'}`}
      >
        {existingProduct ? <FaStar /> : <FaRegStar />}
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <LuArrowLeftRight />
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <FaRegEye />
      </span>
    </div>
  );
};

export default ProductCardSideNav;
