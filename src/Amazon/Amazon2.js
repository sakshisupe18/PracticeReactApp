const Amazon2 = (props) => {
  const { title, imgpath, brand, price, children } = props;

  return (
    <div className="myitem">
      <h3>{title}</h3>
      <img src={imgpath} alt="not found" width="150px" />
      <h3>{brand}</h3>
      <h3>{price}</h3>
      <h4>{children}</h4>
    </div>
  );
};

export default Amazon2;
