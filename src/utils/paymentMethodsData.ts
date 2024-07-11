import PaymentDetail from "../types/paymentDetailType";

const paymentMethods: { type: string, items: PaymentDetail[] }[] = [
  {
    type: 'Pix',
    items: [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        installments: 1,
        installmentAmount: 30500,
        totalAmount: 30500,
        cashback: {
          type: 'percentage',
          value: 3
        },
        reward: [
          {
            text: '🤑 R$ 300,00',
            bold: true
          },
          {
            text: 'de volta no seu Pix na hora',
          }
        ]
      }
    ]
  },
  {
    type: 'Pix Parcelado',
    items: [
      {
        id: '123e4567-e89b-12d3-a456-426614174001',
        installments: 2,
        installmentAmount: 15300,
        totalAmount: 30600
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174002',
        installments: 3,
        installmentAmount: 10196.66,
        totalAmount: 30620
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174003',
        installments: 4,
        installmentAmount: 7725,
        totalAmount: 30900,
        reward: [
          {
            text: '-3% de juros:',
            bold: true
          },
          {
            text: 'Melhor opção de parcelamento',
          }
        ]
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174004',
        installments: 5,
        installmentAmount: 6300,
        totalAmount: 31500
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174005',
        installments: 6,
        installmentAmount: 5283.33,
        totalAmount: 31699.98
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174006',
        installments: 7,
        installmentAmount: 4542.85,
        totalAmount: 31800.00
      }
    ]
  },
]

export default paymentMethods;