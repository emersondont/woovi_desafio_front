import './link.css'
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
}

export default function Link_(props: Props) {
  return (
    <Link to={props.to} className='link' >
      {props.children}
    </Link>
  )
}