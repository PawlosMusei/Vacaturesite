const allapplications = ({vac}) => {
  return (
    
      <div className="vacature">
          {vac.map((vacature) => ( 
        <div key={vacature._id}>
          <h2>{vacature.title}</h2>
          <p>{vacature.description}</p>
          <img src={vacature.image} alt={vacature.title} />     
      </div>
       ))}
     
    </div>
  );
};

export default allapplications;
