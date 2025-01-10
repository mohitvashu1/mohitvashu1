
// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i class="fa-solid fa-heart"></i>
        <a href="/" target="_blank">
          MOHIT
        </a>
        <i class="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>KART</span>
        </strong>
      </div>
    );
  };
  export default Footer;