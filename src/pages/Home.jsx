///
import Header from './../components/hero/Hero.jsx';
import Optw from '../components/opentoWork/openToWotk.jsx';

///
const HomePage = () => {
    return (
        <>
            <Header />
            <Optw />

            <main class="section">
                <div class="container">
                    <ul class="content-list">
                        <li class="content-list__item">
                            <h2 class="title-2">Frontend</h2>
                            <p>
                                Key technologies: Java Script, ReactJS, VueJS, Redux, HTML5, CSS3.<br />
                                Familiar with tools: NPM, Flexbox,CSS Grid.<br />
                                Experience with version control systems: GitHub.<br />
                                Proficient in responsive web design.<br />
                            </p>
                        </li>
                        <li class="content-list__item">
                            <h2 class="title-2">Backend</h2>
                            <p>
                                Key technologies: NodeJS, MongoDB, Express.<br />
                                Experience with RESTful APIs.<br />
                                Tools for testing and documentation: Postman, Swagger<br /></p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default HomePage;
