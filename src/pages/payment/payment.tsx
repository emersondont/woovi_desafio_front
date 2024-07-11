import { useLocation } from "react-router-dom";
import PaymentPageLayout from "../../components/paymentPageLayout/paymentPageLayout";
import paymentMethods from "../../utils/paymentMethodsData";
import PaymentDetail from "../../types/paymentDetailType";

export default function Payment() {
  const { pathname } = useLocation();
  const idMethod = pathname.split('/')[2];
  const method = paymentMethods.reduce<{ type: string, item: PaymentDetail } | null>((acc, method) => {
    const item = method.items.find(item => item.id === idMethod);
    if (item) {
      acc = { type: method.type, item };
    }
    return acc;
  }, null);

  return (
    <PaymentPageLayout title='João, pague a entrada de R$ 15.300,00 pelo Pix'>
      {method?.type}
    </PaymentPageLayout>
  )
}