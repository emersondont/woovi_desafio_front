import { useState } from 'react';
import './payment.css'
import PaymentListItem from '../../components/paymentListItem/paymentListItem';
import PaymentPageLayout from '../../components/paymentPageLayout/paymentPageLayout';
import PaymentList from '../../components/paymentsList/paymentList';
import paymentMethods from '../../utils/paymentMethodsData';

export default function Payment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  return (
    <PaymentPageLayout title='João, como você quer pagar?'>
      {
        paymentMethods.map((paymentMethod, index) => (
          <PaymentList type={paymentMethod.type} key={index}>
            {
              paymentMethod.items.map((item) => (
                <PaymentListItem
                  key={item.id}
                  item={item}
                  select={setSelectedPaymentMethod}
                  selected={selectedPaymentMethod === item.id}
                />
              ))}
          </PaymentList>
        ))}
    </PaymentPageLayout>
  );
}