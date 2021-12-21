import React from 'react'

const Dependent = ({name, dob, rel}) => {
    return (
       <>
           <td className='d-td'>{name}</td>
           <td className='d-td'>{dob}</td>
           <td className='d-td'>{rel}</td>
       </>
    )
}

export default Dependent
