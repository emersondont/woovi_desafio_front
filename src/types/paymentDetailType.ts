type PaymentDetail = {
  id: string
  installments: number
  installmentAmount: number
  totalAmount: number
  cashback?: {
    type: 'percentage' | 'fixed'
    value: number
  }
  reward?: {
    text: string;
    bold?: boolean;
  }[]
}

export default PaymentDetail