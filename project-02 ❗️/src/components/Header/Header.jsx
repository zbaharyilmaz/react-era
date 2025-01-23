import './Header.scss';

function Header() {
  return (
    <div className="header">
      <h1>Products List</h1>
      <div className="btns">
        <button>ALL</button>
        <button>ELECTRONICS</button>
        <button>JEWELERY</button>
        <button>MEN'S CLOTHING</button>
        <button>WOMEN'S CLOTHING</button>
      </div>
    </div>
  );
}

export default Header;
