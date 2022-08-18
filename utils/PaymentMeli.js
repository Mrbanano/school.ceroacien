import axios from "axios";

export const PaymentMeli = async (info) => {
  console.log("PaymentMeli", info);

  const {
    data: { id, external_reference, link },
  } = await axios.post("/api/v0/mercadopago/preferencia", {
    info,
  });
  return { id, external_reference, link };
};
