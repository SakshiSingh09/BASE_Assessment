import React from 'react'
import { useState } from 'react';
import x from '../assets/images/x.png';

const TableContainer = ({ data, containerName }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
    
        setSelectedOptions((prevSelectedOptions) => {
          const newSet = new Set(prevSelectedOptions);
          newSet.add(selectedOption);
          console.log(newSet)
          return [...newSet];
        });
      };

      const handleRemoveOptions = (selectedOption) => {
        setSelectedOptions(selectedOptions.filter((option) => selectedOption !== option));
      };

  return (
    <tr className='uploaded__content__table__table-content'>
        <td>{data[0]}</td>
        <td>
            <a href={`www.${data[1]}`} style={{color: '#5B93FF', justifyContent: 'flex-start'}}>{`www.${data[1]}`}</a>
        </td>
        <td>{data[2]}</td>
        <td className='uploaded__content__table__table-content__dropdown'>
            <label htmlFor={`${containerName}-select`} style={{display:'none'}}>Select Options:</label>
            <select id={`${containerName}-select`} selected='Select Tags' onChange={handleSelectChange}>
                <option value="" selected disabled hidden>Select Tags</option>
                    {
                        (data[3].split(",")).map((item,i) => {
                            return(
                                <option value={item} key={i}>{item}</option>
                            )
                        })
                    }
            </select>
        </td>
        <td className='uploaded__content__table__table-content__selected-tags_list'>
            {
                selectedOptions.map((item,index) => {
                    return(
                        <span>
                            <p key={index}>{item}</p>
                            <img src={x} alt='cross-icon' onClick={() => handleRemoveOptions(item)}/>
                        </span>
                    )
                 })
            }
        </td>
    </tr>
  )
}

export default TableContainer
