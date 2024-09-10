const Contacts = () => {
 return (
  <main className="section">
   <div className="container">
    <h1 className="title-1">Contacts</h1>

    <ul className="content-list">
     <li className="content-list__item">
      <h2 className="title-2">Location</h2>
      <p className="my-city">
       <a
        href="https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80"
        className="highlight-yellow"
        target="_blank"
        rel="noopener noreferrer"
       >
        Ukraine
       </a>{' '}
       <br />
       <a
        href="https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80"
        className="highlight-blue"
        target="_blank"
        rel="noopener noreferrer"
       >
        Zhytomyr
       </a>
      </p>
     </li>
     <li className="content-list__item">
      <h2 className="title-2">Telegram / Viber</h2>
      <p>
       <a href="tel:+380984586793">+380 (98) 458-67-93</a>
      </p>
     </li>
     <li className="content-list__item">
      <h2 className="title-2">Email</h2>
      <p>
       <a href="mailto:olekchekrenov@gmail.com">olekchekrenov@gmail.com</a>
      </p>
     </li>
    </ul>
   </div>
  </main>
 );
};

export default Contacts;
