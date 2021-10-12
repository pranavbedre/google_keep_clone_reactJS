let date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &#169; {year}</p>
    </footer>
  );
}

export default Footer;
