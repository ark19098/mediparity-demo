import React,{useState} from 'react';
import { Select } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import './SelectAntd.css';

const myOptions = [
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'lucy',
      label: 'Lucy',
    },
    {
      value: 'disabled',
      disabled: true,
      label: 'Disabled',
    },
    {
      value: 'Yiminghe',
      label: 'yiminghe',
    },
  ]
//   const handleChange = (value) => {
//     console.log(`selected ${value}`);
//   };

const SelectAntd = () => {
    const [name, setName] = useState("Distance");

    const handleChange = (value) => {
        // setName(e.target.value);
        // console.log(e)
        setName(value);
    }

    return (
        <div className='select-container'>
            <Select
    //   defaultValue="lucy"
      
      bordered='false'
      name="name"
    //   dropdownStyle={{borderRadius: 30}}
      onChange={handleChange}
      value={name}
      options={myOptions}
      suffixIcon={<DownOutlined style={{color: "#1A4E87"}}/>}
    />
        </div>
    );
}

export default SelectAntd;


// Antd has custumized their components such that the the callback of onChange not receives event object, instead receives direct value.