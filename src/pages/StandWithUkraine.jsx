import './../styles/help.css';
import './../styles/link.css';

const Help = () => {
 return (
  <>
   <main className="section background-image standTextColor">
    <div className="container ">
     <ul className="content-list">
      <li className="content-list__item">
       <h2 className="title-2">Support Ukraine</h2>
       <p>
        The #StandWithUkraine page is dedicated to providing information and
        resources to support Ukraine during these challenging times. Our goal is
        to raise awareness about the situation in Ukraine and to encourage
        individuals and organizations to contribute in any way they can.
       </p>
      </li>
      <li className="content-list__item">
       <h2 className="title-2">How You Can Help</h2>
       <p>
        On this page, you will find various ways to offer support, including
        donating to trusted organizations, spreading awareness through social
        media, and participating in local initiatives. Every action, no matter
        how small, can make a difference in the lives of those affected by the
        crisis.
       </p>
      </li>
      <h2 className="title-2">Useful Links</h2>
      <ul className="content-list">
       <li className="content-list__item content-list__item--interactive">
        <a
         href="https://war.ukraine.ua/"
         target="_blank"
         rel="noopener noreferrer"
         className="interactive-link"
        >
         Russia invaded Ukraine
        </a>
       </li>
       <li className="content-list__item content-list__item--interactive">
        <a
         href="https://standwithukraine.com.ua/uk"
         target="_blank"
         rel="noopener noreferrer"
         className="interactive-link"
        >
         Donate to Ukrainian Relief Funds
        </a>
       </li>
       <li className="content-list__item content-list__item--interactive">
        <a
         href="https://ukraine.europarl.europa.eu/en/home"
         target="_blank"
         rel="noopener noreferrer"
         className="interactive-link"
        >
         Spread Awareness
        </a>
       </li>
       <li className="content-list__item content-list__item--interactive">
        <a
         href="https://stand-with-ukraine.pp.ua/"
         target="_blank"
         rel="noopener noreferrer"
         className="interactive-link"
        >
         Participate in Local Initiatives
        </a>
       </li>
       <li className="content-list__item content-list__item--interactive">
        <a
         href="https://visitukraine.today/uk/blog/1854/how-to-become-a-volunteer-in-ukraine-during-the-war-searching-for-volunteer-organizations-and-entry-rules"
         target="_blank"
         rel="noopener noreferrer"
         className="interactive-link"
        >
         Volunteer Your Time
        </a>
       </li>
      </ul>
     </ul>
    </div>
   </main>
  </>
 );
};

export default Help;
