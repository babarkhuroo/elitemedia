import { DiReact, DiFirebase } from 'react-icons/di'
import { BreakLine, Title } from './styles/GlobalStyles'
import { StyledTechnologies } from './styles/Technologies.styled'

function Technologies() {
  return (
    <StyledTechnologies>
      <BreakLine />
      <Title id='portfolio'>Portfolio</Title>
      <h2>
        1. Armor Lubricants <span>Industry</span>
      </h2>
      <p>
        Leading Manufacturer and Supplier of Lubricants, Grease, and Car Care
        Additives in UAE
      </p>
      <ul>
        <li>• Google Ads Lead Results: 544 leads</li>
        <li>• Social Media (Facebook & Instagram): 2 million impressions</li>
      </ul>

      <h2>
        2. Armor Car Care <span>Local Service</span>
      </h2>
      <p>Car Wash Service in Sharjah</p>
      <ul>
        <li>• Google Ads Leads Results: 153 leads</li>
      </ul>
      <h2>
        3. Oakland-OdooERP <span>ERP Service</span>
      </h2>
      <p>
        Leading Odoo service provider in the GCC region, with a strong presence
        in the UAE
      </p>
      <ul>
        <li>• Google Ads Results: 364 leads</li>
      </ul>
      <h2>
        4. Remal Security <span>Service</span>
      </h2>
      <p>Home Automation and CCTV Company</p>
      <ul>
        <li>• Google Ads Results: 338 leads</li>
        <li>• Meta Leads Results: 31 leads</li>
      </ul>
      <h2>
        5. Kaizu - Japanese <span>Restaurant</span>
      </h2>
      <p>Japanese Restaurants</p>
      <ul>
        <li>• Google Ads Results: 1,387 conversions</li>
        <li>• Meta Leads Results: 123 contacts</li>
      </ul>
      <h2>
        6. Qannas Marketing <span>Agency</span>
      </h2>
      <p>Marketing Agency</p>
      <ul>
        <li>• Google Ads Results: 249 leads</li>
        <li>• Meta Leads Results: 101 contacts</li>
      </ul>
      <h2>
        7. Al-Saqer Property Management <span>Real Estate</span>
      </h2>
      <p>Property Management</p>
      <ul>
        <li>• Google Brand Awareness Results: 411,000 impressions</li>
        <li>• Meta Brand Awareness Results: 717,000 impressions</li>
        {/* <li>• Meta Lead Results: 34 leads</li> */}
        <li>• Linkedin Brand Awareness Results: 316,000 Impression</li>
      </ul>
      <h2>
        8. R777: Equestrian Center <span>Local Service</span>
      </h2>
      <p>Equestrian Center</p>
      <ul>
        <li>• Meta Leads results: 163 Leads</li>
        {/* <li>• Google Ads Results: 970 conversions</li> */}
        {/* <li>• Meta Contact Results: 123 contacts</li> */}
      </ul>

      {/* <p>
        I've worked with a range of technologies in the web development world.
      </p> */}
      {/* <ul>
        <li>
          <DiReact size='3rem' />
          <div>
            <h4>Frontend</h4>
            <p className='skills'>
              Experience with
              <br />
              HTML, CSS, Tailwind CSS, Bootstrap, Material UI,
              styled-components, Bulma, JavaScript, React, Nextjs and Redux
            </p>
          </div>
        </li>
        <li>
          <DiFirebase size='3rem' />
          <div>
            <h4>Backend</h4>
            <p className='skills'>
              Experience with
              <br />
              Node.js, Express, Sanity CMS, MongoDB and Mongoose
            </p>
          </div>
        </li>
      </ul> */}
      <div className='calendly-btn btn-services'>
        <a href={'#calendly'}>Arrange Your Consultation</a>
      </div>
    </StyledTechnologies>
  )
}

export default Technologies
