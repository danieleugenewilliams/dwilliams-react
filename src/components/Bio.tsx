import React, { useState } from "react";
import { SEO } from "./SEO";

const TABS = [
  { label: "Background", value: "background" },
  { label: "Expertise", value: "expertise" },
  { label: "Experience", value: "experience" },
  { label: "Education", value: "education" },
  { label: "Publications", value: "publications" },
];

const tabContent: Record<string, React.ReactNode> = {
  background: (
    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
      <p>
        With over two decades of experience, I am a strategic technology leader who
        solves complex challenges for edtech, public sector, nonprofit, and private
        sector organizations. A close colleague describes me as having "the mind of
        an engineer and the soul of an artist," a blend of analytical precision and
        creative insight that drives my ability to forge trusted relationships with
        VP, C-level, and board-level executives. My passion for innovation, fueled
        by interests in startups, tech investing, and vibrant commentary on movies
        and TV shows, delivers transformative outcomes across industries.
      </p>
      <p>
        Rooted in computer science and management consulting, I began my career
        coding Java, C#, Perl, PHP, and Python. Early on, I developed a cloud-based
        collaboration app for music producers and a voice-activated text search app
        for recruiters, which I sold to my employer, showcasing entrepreneurial
        acumen. I also led the Federal Reserve's Data Download, the first platform
        to enable statistical data sharing among the FRB, World Bank, IMF, and BLS,
        revolutionizing global data access.
      </p>
      <h3>Professional Journey</h3>
      <p>
        At SAIC, I deepened my technical expertise as a Senior Software Application
        Engineer, paving the way for strategic advisory roles. At the Federal
        Reserve, I led the development of Data Download, the first platform to
        enable statistical data sharing among the FRB, World Bank, IMF, and BLS,
        revolutionizing global data access.
      </p>
      <p>
        At Booz Allen Hamilton, I spearheaded strategic tech investments, earning a
        reputation as a "technology agnostic" problem solver. I led the development
        of the award-winning "Hello" employee networking app, enhancing enterprise
        collaboration, and authored white papers like "Meeting the Challenges of a
        Modern CIO" and "People, Process, Technology Strategy for Enterprise
        Collaboration." These insights were adopted by Law Enforcement,
        Intelligence, Defense, Homeland Security, and Energy sectors, driving
        operational efficiency. I also implemented a FISMA-compliant internal cloud
        platform based on VMware ESXi, decreasing a client's data center costs by
        66% for an innovation program with more than $100M in technology research
        investments.
      </p>
      <p>
        With graduate school friends from George Mason University, I co-founded
        Zengredients, a recipe-based grocery recommendation service, merging
        technology with consumer needs. At Beyondsoft Consulting, I managed the
        Toyota and Lexus digital properties, representing more than 6 million visits
        per month and 564,000 leads generated annually. I transformed the Dealer
        Information System, an API delivering legal and marketing data for nearly
        1,400 North American dealers, with a strategy generating over $10M annually
        in new revenue. I also led the first AWS-based disaster recovery for the
        system, achieving 99.999% uptime, and managed a $35M digital project
        portfolio for the Lexus brand, launching innovative retail tools for the
        Lexus Future Retail Initiative.
      </p>
      <p>
        Inspired by a chance meeting on a flight from LA to DC, I co-founded
        Likely, the first betting and analytics market for social media influencer
        popularity, enabling brands to identify rising influencers early. As a
        Principal at Pariveda Solutions, I drove digital transformation for clients
        across multiple industries. I led digital transformation for a
        transportation and logistics client, growing account revenue from $28K to
        over $4M in less than nine months. I integrated AWS Funding into Pariveda's
        sales strategy, leading to over $10M in net-new revenue, and led the
        company to become recognized as the #1 driver of AWS revenue for partners in
        Southern California in 2021. As Managing Principal, I established and led
        the national customer acquisition and alliances team focused on public
        sector and nonprofits clients, achieving a revenue target of $3.5+ million in
        the first six months.
      </p>
      <p>
        In 2024, I founded D. E. Williams & Co., a strategic technology advisory
        firm specializing in AI product development, digital transformation, and
        cloud solutions. Our most recent success is LocalMemory.co, an AI-powered
        personal knowledge assistant that I developed from concept to beta launch,
        achieving 85% weekly user retention and validating product-market fit through
        rigorous user research and analytics. My firm delivers measurable value to
        clients using tools like NotebookLM and GenAI Agents, optimizing operations,
        predicting donor churn, and enhancing decision-making for edtech, nonprofit, 
        and public sector organizations. I also publish Claude Code for Non-Coders,
        a weekly newsletter exploring practical AI applications and no-code automation
        for business leaders. At JFFLabs, I've created the JFFLabs Impact
        Incubation Model, a framework to standardize incubation, scaling, and impact
        measurement for digital products and partnerships. I've overseen product and
        API implementation for their Education Quality Outcomes Standards (EQOS)
        initiative, and developed a comprehensive strategy for their Economic
        Mobility for Veteran and Military Families program. I am an At-Large Director
        on the George Mason Alumni Board and have advised the boards of Bowie State
        University and Ariglad.
      </p>
      <p>
        When I am not working and advising clients, I enjoy reading, writing,
        working out, and time with my wife and two sons on the beaches of coastal
        Virginia.
      </p>
    </div>
  ),
  expertise: (
    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
      <p>
        Rooted in computer science and management consulting, I began my career coding Java, C#, Perl, PHP, and Python. Early on, I developed a cloud-based collaboration app for music producers and a voice-activated text search app for recruiters, which I sold to my employer, showcasing entrepreneurial acumen. I also led the Federal Reserve's Data Download, the first platform to enable statistical data sharing among the FRB, World Bank, IMF, and BLS, revolutionizing global data access.
      </p>
      <h3>Professional Journey</h3>
      <p>
        At SAIC, I deepened my technical expertise as a Senior Software Application
        Engineer, paving the way for strategic advisory roles. At the Federal Reserve, I led the development of Data Download, the first platform to enable statistical data sharing among the FRB, World Bank, IMF, and BLS, revolutionizing global data access.
      </p>
      <p>
        At Booz Allen Hamilton, I spearheaded strategic tech investments, earning a
        reputation as a "technology agnostic" problem solver. I led the development
        of the award-winning "Hello" employee networking app, enhancing enterprise
        collaboration, and authored white papers like "Meeting the Challenges of a
        Modern CIO" and "People, Process, Technology Strategy for Enterprise
        Collaboration." These insights were adopted by Law Enforcement,
        Intelligence, Defense, Homeland Security, and Energy sectors, driving
        operational efficiency. I also implemented a FISMA-compliant internal cloud
        platform based on VMware ESXi, decreasing a client's data center costs by
        66% for an innovation program with more than $100M in technology research
        investments.
      </p>
      <p>
        With graduate school friends from George Mason University, I co-founded
        Zengredients, a recipe-based grocery recommendation service, merging
        technology with consumer needs. At Beyondsoft Consulting, I managed the
        Toyota and Lexus digital properties, representing more than 6 million visits
        per month and 564,000 leads generated annually. I transformed the Dealer
        Information System, an API delivering legal and marketing data for nearly
        1,400 North American dealers, with a strategy generating over $10M annually
        in new revenue. I also led the first AWS-based disaster recovery for the
        system, achieving 99.999% uptime, and managed a $35M digital project
        portfolio for the Lexus brand, launching innovative retail tools for the
        Lexus Future Retail Initiative.
      </p>
      <p>
        Inspired by a chance meeting on a flight from LA to DC, I co-founded
        Likely, the first betting and analytics market for social media influencer
        popularity, enabling brands to identify rising influencers early. As a
        Principal at Pariveda Solutions, I drove digital transformation for clients
        across multiple industries. I led digital transformation for a
        transportation and logistics client, growing account revenue from $28K to
        over $4M in less than nine months. I integrated AWS Funding into Pariveda's
        sales strategy, leading to over $10M in net-new revenue, and led the
        company to become recognized as the #1 driver of AWS revenue for partners in
        Southern California in 2021. As Managing Principal, I established and led
        the national customer acquisition and alliances team focused on public
        sector and nonprofits clients, achieving a revenue target of $3.5+ million in
        the first six months.
      </p>
      <p>
        In 2024, I founded D. E. Williams & Co., a strategic technology advisory
        firm specializing in AI product development, digital transformation, and
        cloud solutions. Our most recent success is LocalMemory.co, an AI-powered
        personal knowledge assistant that I developed from concept to beta launch,
        achieving 85% weekly user retention and validating product-market fit through
        rigorous user research and analytics. My firm delivers measurable value to
        clients using tools like NotebookLM and GenAI Agents, optimizing operations,
        predicting donor churn, and enhancing decision-making for edtech, nonprofit, 
        and public sector organizations. I also publish Claude Code for Non-Coders,
        a weekly newsletter exploring practical AI applications and no-code automation
        for business leaders. At JFFLabs, I've created the JFFLabs Impact
        Incubation Model, a framework to standardize incubation, scaling, and impact
        measurement for digital products and partnerships. I've overseen product and
        API implementation for their Education Quality Outcomes Standards (EQOS)
        initiative, and developed a comprehensive strategy for their Economic
        Mobility for Veteran and Military Families program. I am an At-Large Director
        on the George Mason Alumni Board and have advised the boards of Bowie State
        University and Ariglad.
      </p>
      <p>
        When I am not working and advising clients, I enjoy reading, writing,
        working out, and time with my wife and two sons on the beaches of coastal
        Virginia.
      </p>
    </div>
  ),
  experience: (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h3 className="font-bold text-xl mb-2">D. E. WILLIAMS AND COMPANY</h3>
      <p className="mb-1"><strong>Founder and Managing Principal | 08/24 - Present</strong><br />
      Leading strategic technology advisory firm specializing in digital transformation, cloud solutions, and AI-driven innovation across edtech, nonprofit, and public sector organizations.</p>

      <h3 className="font-bold text-xl mt-6 mb-2">PARIVEDA SOLUTIONS, INC.</h3>
      <p className="mb-1"><strong>Managing Principal / National Segment Lead | 01/22 - 08/24</strong><br />
      Established and led the national customer acquisition and alliances team focused on public sector and nonprofits clients achieving revenue target of $3.5+ million in the first six months of year one.</p>
      <ul className="list-disc pl-6 mb-2">
        <li>Led and presented the data rationalization and recommendations to the C-level executive team for a global top-20 North American pension fund, leading to an investment of over $10M to achieve $35M in new revenue, savings, and operational optimization.</li>
      </ul>
      <p className="mb-1"><strong>Principal II | 06/20 - 01/22</strong><br />
      Led digital transformation for a T&L client, growing account revenue from $28K to over $4M in revenue in less than nine months, using a combination of product strategy, technical architecture, and over $250k in AWS Funding/Investment with the client's President, CIO, and CTO, driving over $8M revenue in 2022.</p>
      <ul className="list-disc pl-6 mb-2">
        <li>Integrated AWS Funding into Pariveda's sales strategy, leading to over $10M in net-new revenue over months and leading the company to become recognized as the #1 driver of AWS revenue for partners in Southern California in 2021.</li>
      </ul>
      <p className="mb-1"><strong>Principal I | 01/19 - 06/20</strong><br />
      Led product investment and development of an engineering platform for a national tax preparation client, that enabled the ability to convert 20-year-old legacy C++ code into modern C# automatically and React, saving the organization $2.5M in engineering costs in year 1.</p>
      <ul className="list-disc pl-6 mb-2">
        <li>Led assessment and recommendations for NFL Digital Media on organizational design to align with a more agile product engineering strategy to achieve an estimated $5M in annual operational savings.</li>
      </ul>

      <h3 className="font-bold text-xl mt-6 mb-2">BEYONDSOFT CONSULTING, INC</h3>
      <p className="mb-1"><strong>Senior Advisor / Product Lead, Key Accounts Portfolio | 06/17 - 02/18</strong><br />
      Developed overall account planning and client relationship management for the Toyota Financial business, growing the account from $0 to $1.2 million in less than a year.</p>
      <ul className="list-disc pl-6 mb-2">
        <li>Managed LexusPlus program (budget of $10M) that delivered improved digital retail tools for customers and dealers in the luxury automotive market; integrated Lexus, Lexus Financial, Lexus.com, Build Your Lexus, KBB, and 236 dealer websites, resulting in a 10% increase in lead conversions.</li>
        <li>Led IT strategy and discovery/requirements phases for Lexus Retail Transformation Initiative to redesign the luxury vehicle buying experience for consumers and dealers; attained a $1.5M budget for development/implementation phases.</li>
      </ul>
      <p className="mb-1"><strong>Digital Program Manager | 04/13 - 10/14</strong><br />
      Managed automotive dealer information services (DIS) portfolio across Toyota, Scion, and Lexus digital properties, representing more than 6 million visits per month and 564,000 leads generated annually.</p>
      <ul className="list-disc pl-6 mb-2">
        <li>Increased Toyota's third-party lead generation by 25% in the first six months as DIS Integration Lead for online advertisers KBB, CarFax, CDK Global, and VIN Solutions.</li>
        <li>Led a technology and data reporting implementation for Toyota's $25M annual National Dealer Meeting. Responsible for vendor contract negotiation, tech analysis, and executive sign-offs.</li>
      </ul>

      <h3 className="font-bold text-xl mt-6 mb-2">BOOZ ALLEN HAMILTON</h3>
      <p className="mb-1"><strong>Associate – Enterprise Collaboration and Technology | 03/10 - 04/13</strong><br />
      Won 2 proposals as Technical Lead: an $8M executive training program for VA Leading Edge; and a $1.1M portal for U.S.-based "first responders."</p>
      <ul className="list-disc pl-6 mb-2">
        <li>Led technical implementation of Leading EDGE Portal, a cloud-based, live HD broadcast of leadership content to 2,400+ senior executives across the U.S. federal government and military.</li>
        <li>Managed the monthly live broadcast of the Leading EDGE leadership conference using Livestream.com and YouTube to an average audience of 9,000+ senior executives across public and private sectors.</li>
        <li>Facilitated an initiative of professional IT clients at DHS to document and publish the Enterprise IT service catalog for an IT organization supporting 2,500+ internal customers.</li>
      </ul>
      <p className="mb-1"><strong>Sr. Consultant – Social Network Engineering & Analysis | 02/08 - 03/10</strong><br />
      Implemented a FISMA-compliant internal cloud platform based on VMware ESXi, decreasing the client's data center costs by 66% for an innovation program with more than $100M in technology research investments.</p>
      <ul className="list-disc pl-6 mb-2">
        <li>Assembled the requirements from key agency stakeholders to implement Drupal CMS, decreasing by 450% the number of days to develop initial regulation and process external feedback.</li>
        <li>Designed a data visualization "mashup" portal using Google Maps, KML, and jQuery that enabled remote analysts to centralize, edit, and share locations of medical facilities in "hot spots" around the world.</li>
        <li>Developed an interactive web app on the MAX.gov public cloud to track the spread of the H1N1 virus, thereby eliminating the need for manual reporting to the Homeland Security Council.</li>
        <li>Led the development of a SugarCRM solution and performance metrics-reporting framework that helped management track the effectiveness of stakeholder outreach and identify areas for improvement.</li>
      </ul>

      <h3 className="font-bold text-xl mt-6 mb-2">SCIENCE APPLICATION INTERNATIONAL CORPORATION, INC.</h3>
      <p className="mb-1"><strong>Senior Software Application Engineer | 02/07 - 02/08</strong></p>
      <h3 className="font-bold text-xl mt-6 mb-2">BOARD OF GOVERNORS OF THE FEDERAL RESERVE SYSTEM</h3>
      <p className="mb-1"><strong>Senior Applications Analyst | 07/03 - 02/07</strong></p>
      <h3 className="font-bold text-xl mt-6 mb-2">SPS TECHNOLOGIES, INC.</h3>
      <p className="mb-1"><strong>Senior Technical Information Specialist | 01/01 - 07/03</strong></p>
    </div>
  ),
  education: (
    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
      <h3>Education</h3>
      <ul>
        <li><strong>George Mason University</strong> — M.S., Computer Science</li>
        <li><strong>George Mason University</strong> — B.S., Computer Science</li>
        <li><strong>Additional Professional Development:</strong> AWS Certified Solutions Architect, AWS Certified Cloud Practitioner, ScrumMaster Certification, and ongoing executive education in digital transformation, cloud, and AI strategy.</li>
      </ul>
    </div>
  ),
  publications: (
    <div className="prose prose-md dark:prose-invert max-w-none mx-auto">
      <h3>Published Perspectives, Whitepapers, &amp; Articles</h3>
      <ul>
        <li>
          <a
            href="https://parivedasolutions.com/resources/a-framework-for-building-a-future-ready-nonprofit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            A Framework for Building a Future-Ready Nonprofit
          </a>{" "}
          (Pariveda Perspectives, Sep 2023)
        </li>
        <li>
          <a
            href="https://readwrite.com/the-impact-of-ai-as-companies-address-the-skilled-labor-shortage/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            The Impact of AI as Companies Address the Skilled Labor Shortage
          </a>{" "}
          (ReadWrite, Feb 2023)
        </li>
        <li>
          <a
            href="https://www.techrepublic.com/article/how-cios-approach-digital-transformation-investments/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            How CIOs can approach digital transformation investments to increase
            value
          </a>{" "}
          (Tech Republic, Aug 2022)
        </li>
        <li>
          <a
            href="https://readwrite.com/create-symbiotic-relationships-with-ai-in-business/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            Create Symbiotic Relationships with AI in Business
          </a>{" "}
          (ReadWrite, Apr 2020)
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/0B1nMNCwNPLJfZVFILUxqMWF2TTRYOURvVkJNOGJfYkZhSGNJ/view?resourcekey=0-AU2iRA7pulweIICe4huS1g"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            Meeting the Challenges of the Modern CIO
          </a>{" "}
          (Booz Allen Hamilton, Sep 2011)
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/0B1nMNCwNPLJfa2pqcWxEU0dJUy1kYng5UG9uZlc0X0pjN01Z/view?resourcekey=0-CmNwBJd9s_viG_29ppsB2Q"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            People Process Technology Strategy for Enterprise 2.0
          </a>{" "}
          (Booz Allen Hamilton, Jul 2011)
        </li>
      </ul>
    </div>
  ),
};

const Bio: React.FC = () => {
  const [tab, setTab] = useState<string>(TABS[0].value);

  return (
    <>
      <SEO 
        title="Professional Bio - Daniel E. Williams"
        description="Learn about Daniel E. Williams, strategic technology leader with over two decades of experience in edtech, public sector, and nonprofit technology consulting. Expert in AI, cloud transformation, and data strategy."
        keywords="Daniel E. Williams bio, technology leader, strategic advisory, edtech consultant, AI expert, cloud transformation specialist, nonprofit technology"
        url="/bio"
      />
      <section
        id="bio"
        className="bg-background py-12 md:py-16 min-h-[70vh]"
      >
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-8 text-center">
            Daniel E. Williams
          </h1>
          <div className="flex justify-center mb-8">
            <nav
              className="flex flex-wrap gap-2 bg-muted rounded-lg p-2"
              aria-label="Bio Tabs"
            >
              {TABS.map(({ label, value }) => (
                <button
                  key={value}
                  className={`px-4 py-2 rounded font-medium focus:outline-none transition-colors ${
                    tab === value
                      ? "bg-brand-primary text-white dark:bg-brand-primary-dark"
                      : "text-brand-primary dark:text-brand-primary-dark hover:bg-brand-primary/10 dark:hover:bg-brand-primary-dark/10"
                  }`}
                  onClick={() => setTab(value)}
                  aria-selected={tab === value}
                  aria-controls={`tab-panel-${value}`}
                  role="tab"
                  tabIndex={tab === value ? 0 : -1}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
          <div
            id={`tab-panel-${tab}`}
            role="tabpanel"
            aria-labelledby={tab}
          >
            {tabContent[tab]}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block bg-brand-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-brand-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
