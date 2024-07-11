import { ReactNode } from "react";
import './paymentPageLayout.css';
import logo from './Logo.png'
import securePayment from './secure_payment.svg'
import logoGray from './Logo_gray.png'

type Props = {
  children: ReactNode;
  title: string;
}
export default function PaymentPageLayout(props: Props) {
  return (
    <main className="main">
      <div className="content">
        <img src={logo} alt="Logo Woovi" />
        <h1 className="title">{props.title}</h1>
        {props.children}
        <footer className="footer">
          <img src={securePayment} alt="icon secure payment" />
          <p>Pagamento 100% seguro via: </p>
          <img src={logoGray} alt="Logo Woovi" />
        </footer>
      </div>
    </main>
  );
}