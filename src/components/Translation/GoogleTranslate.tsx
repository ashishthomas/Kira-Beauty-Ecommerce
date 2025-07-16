import { useTranslation } from "react-i18next";
import "./GoogleTranslate.scss";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleChange} value={i18n.language}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="ta">Tamil</option>
      <option value="ml">Malayalam</option>
      <option value="kn">Kannada</option>
      <option value="te">Telugu</option>
    </select>
  );
};

export default LanguageSwitcher;
