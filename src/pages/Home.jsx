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
        JavaScript,ReactJS, VueJS, Redux, HTML, CSS, NPM, CSS
        Flexible Box Layout, GitHub, Adaptive web design
       </p>
      </li>
      <li class="content-list__item">
       <h2 class="title-2">Backend</h2>
       <p>NodeJS, MongoDB, Express, RestAPI, Postman, Swagger</p>
      </li>
     </ul>
    </div>
   </main>
  </>
 );
};

export default HomePage;
