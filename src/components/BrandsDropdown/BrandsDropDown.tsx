import "./BrandsDropDown.scss";

const dropdownData = [
  {
    category: "Beauty",
    items: ["Lakmé", "L'Oréal", "MAC", "Revlon", "Colorbar", "Faces Canada", "Sugar"]
  },
  {
    category: "Cosmetics",
    items: ["Maybelline", "NYX", "e.l.f", "Wet n Wild", "Essence", "Swiss Beauty", "Chambor"]
  },
  {
    category: "Grooming",
    items: ["The Man Company", "Beardo", "UrbanGabru", "Bombay Shaving Co.", "Ustraa", "Gillette", "Park Avenue"]
  },
  {
    category: "Top Brands",
    items: ["Lakmé", "Maybelline", "The Man Company", "UrbanGabru", "Beardo", "Bombay Shaving Co.", "MCaffeine"]
  }
];

const BrandsDropdown = () => {
  return (
    <div className="brands-dropdown">
      {dropdownData.map((section, index) => (
        <div className="dropdown-column" key={index}>
          <h4>{section.category}</h4>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BrandsDropdown;
