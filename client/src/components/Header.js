function Header(props) {
  return `
    <header class="row justify-between">
      <h3>${props.logo}</h3>
      <nav>
        <a href="/">Home</a>
      </nav>
    </header>
  `
}

export default Header;