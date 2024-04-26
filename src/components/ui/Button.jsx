import React from 'react'


function Button({children, onClick}) {
  return (
    <button onClick={onClick} className="[z-index:1] border-[1px] border-[solid] border-edit-blue mx-[5px] my-[0] p-[5px] relative cursor-pointer text-edit-blue [transition:color_ease-in-out_0.3s] font-bold hover:text-[white] before:content-[''] before:absolute before:bottom-[0] before:left-[0] before:w-full before:h-[0] before:bg-edit-blue before:[transition:height_ease-in-out_0.3s] hover:before:h-full before:[z-index:-1]">
    {children}
    </button>
  )
}

export default Button