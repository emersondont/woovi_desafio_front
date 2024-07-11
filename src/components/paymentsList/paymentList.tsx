import { ReactNode } from 'react';
import './paymentList.css'

type Props = {
  children: ReactNode;
  type: string;
}

export default function PaymentList(props: Props) {
  return (
    <div className='list'>
      <div className='payment_type_label'>{props.type}</div>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}