import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store: any) => store.customer);

  return <h2>👋 Welcome, {customer?.fullName}</h2>;
}

export default Customer;
