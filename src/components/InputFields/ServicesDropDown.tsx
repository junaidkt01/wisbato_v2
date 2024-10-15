import { useState } from "react";
import "../../app/globals.css"

const ServicesDropDown = ({ onServiceSelected }: { onServiceSelected: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const categories = ['web development', 'application development', 'branding', 'ecommerce development', 'socialmedia marketing', 'search engine optimization', 'mobile app development', 'IT suppot'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleSelected = (category: string) => {
        setSelected(category)
        toggleDropdown()

        onServiceSelected(category);
    }

    return (
        <div className="form-drop-down-section">
            <label htmlFor="">Services</label>
            <div style={{ marginTop: "8px" }} className="form-drop-down-btn" onClick={toggleDropdown} >
                <p className="form-drop-down-selected" >{selected || "service categories"}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8.41693L10.5866 15.0037C10.9633 15.375 11.471 15.5831 12 15.5831C12.529 15.5831 13.0367 15.375 13.4134 15.0037L20 8.41693" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>


            <ul className={`form-dropdown-menu ${isOpen ? "open" : ""}`}>
                {categories.map((category, index) => (
                    <li onClick={() => handleSelected(category)} key={index}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default ServicesDropDown
