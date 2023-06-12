import React from "react";
import SliderComponent from "./common/SliderComponent";
const SliderSelect = ({ data, setData }) => {
  const bank_limot = 10000;
  console.log(data);
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bank_limot}
        defaultValue={data.homevalue}
        value={data.homevalue}
        step={100}
        onChange={(e) =>
          setData({
            ...data,
            homevalue: e.target.value,
            downpayment: e.target.value * 0.2,
            loanamount: e.target.value * 0.8,
          })
        }
        unit="$"
        amount={data.homevalue}
      />
      <SliderComponent
        label="Down payment"
        min={0}
        max={data.homevalue}
        defaultValue={data.downpayment}
        value={data.downpayment}
        step={100}
        onChange={(e) =>
          setData({
            ...data,
            downpayment: e.target.value,
            loanamount: data.homevalue - e.target.value,
          })
        }
        unit="$"
        amount={data.downpayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homevalue}
        defaultValue={data.loanamount}
        value={data.loanamount}
        step={100}
        onChange={(e) =>
          setData({
            ...data,
            loanamount: e.target.value,
            downpayment: data.homevalue - e.target.value,
          })
        }
        unit="$"
        amount={data.loanamount}
      />
      <SliderComponent
        label="Intrest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e) =>
          setData({
            ...data,
            
            interestRate: e.target.value,
          })
        }
        unit="%"
        amount={data.interestRate}
      />
    </>
  );
};
export default SliderSelect;
