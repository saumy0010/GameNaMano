import React from "react";


const CustomSelect = (props:any) => {
  
  const options = ["Price : Low to High", "Price : High to Low"];
  const {selectedOption, setSelectedOption} = props

  const handleSelectChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{width:'100%'}}>
      
      <select
        value={selectedOption}
        onChange={handleSelectChange}
       className="select"
      >
        <option value="" disabled hidden>
          Sort By
        </option>
        {options.map((option) => (
          <option key={option} value={option} 
            style={{padding:'10px',
            height:'40px !important',
            

          }}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
