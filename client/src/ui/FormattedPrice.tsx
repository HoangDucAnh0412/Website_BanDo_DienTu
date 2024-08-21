// định dạng số thành chuỗi theo kiểu tiền tệ 
const FormattedPrice = ({ amount }: { amount?: number }) => {
    const formattedAmount = new Number(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    return <span>{formattedAmount}</span>;
  };
  
  export default FormattedPrice;
  