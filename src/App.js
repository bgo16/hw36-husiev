export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <CenterContainer />
    </>
  );
}

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: 'grey'
  };

  return <h1 style={headerStyle}>Header</h1>;
}

function NavBarElement({ count }) {
  const navElementStyle = {
    listStyle: 'none',
    margin: '5px',
    background: 'green'
  };

  return (
    <li style={navElementStyle}>
      <a href={count + '+item'}>{count + ' item'}</a>
    </li>
  );
}

function NavBar() {
  const navStyle = {
    float: 'left',
    background: 'lightgreen'
  };

  return (
    <nav style={navStyle}>
      <aside>
        <h2>Navigation bar</h2>
        <ul>
          <NavBarElement count='first' />
          <NavBarElement count='second' />
          <NavBarElement count='third' />
        </ul>
      </aside>
    </nav>
  );
}

function CenterContainer() {
  const CenterContainerStyle = {
    marginLeft: '20%',
    padding: '1rem',
    background: 'lightblue'
  };

  return <div style={CenterContainerStyle}>Some text content</div>;
}
