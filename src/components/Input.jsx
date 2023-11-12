import React, { forwardRef } from "react";

const Input = forwardRef(function ({ value, label, name, placeholder, type, onChange, ...props }, ref) {

    return (
        <div className="flex flex-col"   >
            {label && <label className="font-semibold">{label}</label>}
            <input
                ref={ref}
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        </div>
    )
});

export default Input;