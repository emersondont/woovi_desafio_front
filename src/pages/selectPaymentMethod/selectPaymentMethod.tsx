import { useState } from 'react';
import PaymentListItem from '../../components/paymentListItem/paymentListItem';
import PaymentPageLayout from '../../components/paymentPageLayout/paymentPageLayout';
import PaymentList from '../../components/paymentsList/paymentList';
import paymentMethods from '../../utils/paymentMethodsData';
import Link from '../../components/link/link';

export default function SelectPaymentMethod() {
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

        {
          selectedPaymentMethod && 
          <Link to={`${selectedPaymentMethod}`}>Continuar</Link>
        }
        
    </PaymentPageLayout>
  );
}