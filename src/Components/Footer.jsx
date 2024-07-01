const Footer = () => {
  return (
    <div className=" bg-[#03AA77] py-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="flex items-center flex-col sm:flex-row gap-5 justify-between max-w-screen-xl mx-auto">
        <p className="text-[14px] sm:text-[16px]  text-white">
          All Right reserved to LXDYI
        </p>
        <ul className="flex items-center gap-3">
          <li>
            <img src="/src/assets/linkedin.svg" alt="icon" />
          </li>
          <li>
            <img src="/src/assets/facebook.svg" alt="icon" />
          </li>
          <li>
            <img src="/src/assets/insta.svg" alt="icon" />
          </li>
          <li>
            <img src="/src/assets/X.svg" alt="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
