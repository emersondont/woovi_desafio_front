import './customRadio.css'

type Props = {
  value: string;
  select: (value: string) => void;
}

export default function CustomRadio(props: Props) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.select(event.target.value)
  }

  return (
    <label className="custom-radio">
      <input type="radio" name="paymentOption" value={props.value} onChange={handleChange} />
      <span className='radio-button'></span> 
    </label>
  )
}