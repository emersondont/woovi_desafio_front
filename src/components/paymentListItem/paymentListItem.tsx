import './paymentListItem.css'
import PaymentDetail from '../../types/paymentDetailType'
import CustomRadio from '../customRadio/customRadio'

type Props = {
  selected?: boolean
  item: PaymentDetail
  select: (value: string) => void
}

export default function PaymentListItem(props: Props) {
  return (
    <li className={'payment_list_item' + (props.selected ? ' selected' : '')}>
      <div className='payment_details'>
        <div>
          <p className='installments'>
            <strong>{props.item.installments}x </strong>
            {props.item.installmentAmount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>

          {
            props.item.installments > 1 &&
            <p className='total'>
              Total: {props.item.totalAmount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
          }
        </div>

        <CustomRadio
          value={props.item.id}
          select={props.select}
        />

      </div>

      {
        props.item.cashback &&
        <p className='cashback'>
          Ganhe <strong>{props.item.cashback.type === 'percentage' ? `${props.item.cashback.value}%` : props.item.cashback.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </strong>
          de Cashback
        </p>
      }

      {
        props.item.reward &&
        <div className='reward'>
          <p>
            {props.item.reward.map((r, i) => (
              r.bold ?
                <strong key={i}>{r.text} </strong> :
                <span key={i}>{r.text} </span>
            ))}
          </p>
        </div>
      }
    </li>
  )
}