const Footer = () => {
  return (
    <div className=" bg-[#03AA77] py-5 px-32">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <p className="text-14 text-white">© 2023 Persis Software Labs, All Rights Reserved.</p>
        <ul className="flex items-center gap-3">
          <li><img src="/src/assets/linkedin.svg" alt="icon" /></li>
          <li><img src="/src/assets/facebook.svg" alt="icon" /></li>
          <li><img src="/src/assets/insta.svg" alt="icon" /></li>
          <li><img src="/src/assets/X.svg" alt="icon" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
