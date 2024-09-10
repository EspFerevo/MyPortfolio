const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2  className="title-2" >Location</h2>
                        <p className="my-city" >
                            <span  className="highlight-yellow">Ukraine</span> <br />  <span className="highlight-blue">Zhytomyr</span>
                        </p> </li>
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
