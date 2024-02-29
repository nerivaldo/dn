// components/CategoriesList.js
const CategoriesList = () => {
    const categories = [
        "Agricultura",
        "Automotivo",
        "Biotecnologia e Farmacêutica",
        "Construção e Engenharia",
        "Educação",
        "Eletroeletrônicos",
        "Energia",
        "Finanças",
        "Tecnologia da Informação (TI)",
        "Alimentos e Bebidas",
        "Saúde",
        "Hotelaria e Turismo",
        "Manufatura",
        "Mídia e Entretenimento",
        "Varejo",
        "Telecomunicações",
        "Transporte e Logística",
        "Moda e Vestuário",
        "Serviços Profissionais",
        "Meio Ambiente"
    ];
  
    return (
      <ul className="grid grid-cols-1">
        {categories.map((category, index) => (
          <li
            key={index}
            className="p-4 rounded-md cursor-pointer hover:bg-gray-300"
          >
            {category}
          </li>
        ))}
      </ul>
    );
  };
  
  export default CategoriesList;
  