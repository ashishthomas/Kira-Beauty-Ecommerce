import "./BrandsDropDown.scss";

const BrandsDropdown = () => {
  return (
    <div className="brands-dropdown">
      <div className="dropdown-column">
        <h4>Beauty</h4>
        <ul>
          <li>Face Cream</li>
          <li>Foundation</li>
          <li>Lipsticks</li>
          <li>Mascara</li>
          <li>Blush</li>
          <li>Highlighter</li>
          <li>Setting Spray</li>
        </ul>
      </div>
      <div className="dropdown-column">
        <h4>Cosmetics</h4>
        <ul>
          <li>Compact & Powder</li>
          <li>Primer</li>
          <li>BB & CC Creams</li>
          <li>Concealer</li>
          <li>Eye Shadow</li>
          <li>Makeup Remover</li>
          <li>Nail Polish</li>
        </ul>
      </div>
      <div className="dropdown-column">
        <h4>Grooming</h4>
        <ul>
          <li>Beard Oils</li>
          <li>Shaving Foam</li>
          <li>Trimmers</li>
          <li>After Shave</li>
          <li>Shaving Brush</li>
          <li>Hair Gel</li>
          <li>Body Wash</li>
        </ul>
      </div>
      <div className="dropdown-column">
        <h4>Top Brands</h4>
        <ul>
          <li>Lakmé</li>
          <li>Maybelline</li>
          <li>The Man Company</li>
          <li>UrbanGabru</li>
          <li>Beardo</li>
          <li>Bombay Shaving Co.</li>
          <li>MCaffeine</li>
        </ul>
      </div>
    </div>
  );
};

export default BrandsDropdown;
