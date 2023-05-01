import {useState } from 'react'





export default function IconButton({ children, text, color, ...props }) {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    return (
        <button onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
         className ={'flex p-2 items-center rounded-lg text-white ${color || "bg-purple-600"}'

        }
            {...props}
        >
            {children}
            <div style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
            className="overflow-x-hidden transition-all duration-300 ease-out">
                <span ref={ref} className="px-1.5">
                    {text}
                </span>
            </div>
        </button>
    )
}