const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 1,
  }).format(price / 1);
};

export default FormatPrice;
