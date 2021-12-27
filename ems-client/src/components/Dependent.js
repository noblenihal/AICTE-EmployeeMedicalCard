import React from 'react'

const Dependent = ({name, dob, rel, imgName}) => {
    return (
       <>
           <td className='d-td'>{name}</td>
           <td className='d-td'>{dob}</td>
           <td className='d-td'>{rel}</td>
           <td className='d-td'>{imgName}</td>
       </>
    )
}

export default Dependent
