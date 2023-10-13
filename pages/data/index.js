import React, { ReactNode } from "react";
import { GiFactory } from "react-icons/gi";
import { AiFillCar, AiFillFire, AiFillCloud } from "react-icons/ai";
import { SlChemistry } from "react-icons/sl";
import { BsExclamationTriangleFill } from "react-icons/bs";
import {
  FaRecycle,
  FaLeaf,
  FaIndustry,
  FaGasPump,
  FaTrash,
  FaPlane,
  FaBicycle,
  FaHandshake,
  FaShippingFast,
  FaCogs,
  FaTrashAlt,
  FaBuilding,
  FaUsers,
  FaMoneyBill,
} from "react-icons/fa";
import { MdOutlineBolt } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiTruckFill } from "react-icons/ri";
import { BsStack, BsFillInfoCircleFill } from "react-icons/bs";
import { FaLongArrowAltLeft } from "react-icons/fa";

import Salomon from "../../public/assets/Salomo4.jpg";
import Samson from "../../public/team/samson.png";
import Jessica from "../../public/assets/jess.jpeg";
import Umutesi from "../../public/assets/liliane.jpeg";
import Fido from "../../public/assets/fido.jpeg";
import pascaline from "../../public/assets/pasc.jpeg";
import rodney from "../../public/assets/rodney.jpeg";
import jacob from "../../public/assets/jacob.jpeg";
import Selma from "../../public/assets/selma.png";
import Eden from "../../public/assets/Eden.jpg";
import Kenny from "../../public/assets/kenny.jpg"
import Karen from "../../public/assets/karen.jpg"

import Mehafo from "../../public/assets/mehafo.jpg";
import Arrow from "../../public/assets/arrow.jpg";
import Savn from "../../public/assets/savn.jpeg";
import C1 from "../../public/assets/c1.jpeg";
import C2 from "../../public/assets/c2.jpeg";

import Decarb from "../../public/assets/deca-logo.png";
import Technet from "../../public/assets/technet.svg";
import Torparama from "../../public/assets/torp.webp";

import Christina from "../../public/placeholders/christina.webp"
import Christina_2 from "../../public/placeholders/Christina_2.webp";
import itay from "../../public/placeholders/itay.webp";
import ronny from "../../public/placeholders/ronny.webp";
import shadreck from "../../public/placeholders/shedrack.webp";
import willian from "../../public/placeholders/willian.webp";

export const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

export const Growth = [
  {
    img: Decarb,
    link: "https://decarbonify.com",
  },
  {
    img: Technet,
    link: "https://www.technetconsulting.no/",
  },
  {
    img: Torparama,
    link: "https://www.torppanorama.no/",
  },
];

export const StartUp = [
  {
    id: 1,
    img: Mehafo,
    link: "https://mehafo.com",
    bio: "MEHAFO SUSTAINABLE SOLUTIONS IS A PIONEERING COMPANY AT THE FOREFRONT OF AGRIBUSINESS DEVELOPMENT IN URBAN CENTERS AND SUSTAINABLE ADVISORY SOLUTIONS. BY PROMOTING URBAN AGRICULTURE, INTEGRATING ESG PRINCIPLES, AND FOCUSING ON RESILIENCE AND COMBATING CLIMATE CHANGE, THE COMPANY IS WORKING TOWARDS A FUTURE WHERE BUSINESSES CAN THRIVE WHILE CONTRIBUTING TO A MORE SUSTAINABLE AND RESILIENT WORLD.",
  },

  {
    id: 2,
    img: Savn,
    link: "/",
    bio: "",
  },
];

export const management_info = [
  // {
  //   id: 1,
  //   img: Selma,
  //   name: "Selma Nasheya",
  //   position: "CEO & Co-founder",
  //   Quote:
  //     "Pioneering Sustainability in Africa for Global Transformation: Driving Just Transitions through Strategic Collaboration and Information Technology. At BAOBABPAD, we are committed to driving extraordinary innovative solutions.",
  //     linkedin: "https://www.linkedin.com/in/selma-nasheya/"
  // },

  // {
  //   id: 2,
  //   img: Eden,
  //   name: "Eden Alem",
  //   position: "People Strategy & Digital",
  //   Quote: "Eden is a seasoned professional with a diverse background in people strategy and digital transformation. With years of experience in the business world in New York, Eden has established herself as a trusted partner and an invaluable asset to organizations seeking to optimize their human resources and leverage technology for growth.",
  //   linkedin: "https://www.linkedin.com/in/eden-alem-92627b23/?originalSubdomain=no"

  // },

  {
    id: 1,
    img: Kenny,
    name: "Kenny Kaluiji",
    position:"Chief Vision Officer",
    Quote: "Impact-oriented innovative business developer with domain skills in ESG analysis, impact investing, responsible innovation strategy, renewable energy, Africa opportunities",
    linkedin: "https://www.linkedin.com/in/kenny-kaluiji-902a1576/?originalSubdomain=no"
  },

  {
    id: 2,
    img: Karen,
    name: "Karen Kana",
    position:"Fund & Grant Lead",
    Quote: "A seasoned professional in Global Development Studies, Karen specializes in project and strategic management, comprehensive research, policy analysis, and advocacy, with a strong focus on gender-inclusive entrepreneurship and social impact projects. Karen provide's consultancy in global development, guide professional growth, and streamline organizational processes for optimal performance.",
    linkedin: "https://www.linkedin.com/in/kana-karen/"
  }
];

export const productionTeam = [
  {
    id: 5,
    img: Samson,
    project: Decarb,
    title: "Samson",
    lang: "English",
    services: "System Design",
    experience: "3 years",
    strength: "Front-End",
    industry: "ESG",
    back: `Samson Mabetho is an accomplished computer engineer and software developer with a track record of success in multiple companies. With a passion for innovation and a tireless work ethic, Samson has become known for his ability to take on complex projects and deliver results.

          Samson Mabetho is always eager to take on new challenges and is constantly seeking to learn and grow as a professional. Whether he's developing software, managing projects, or collaborating with others, he approaches every task with energy, enthusiasm, and a commitment to delivering results.`,
    bio: `Meet Samson Mabetho, a dynamic and dedicated front end web developer who brings a wealth of knowledge and experience to the world of software development. With over a 3 years of experience in the field, Samson has become a key player in the industry.

          Having spent years working as a front end developer, Samson has honed his craft and consistently produced high-quality work. He's always willing to go the extra mile to ensure that his projects are a success, and his attention to detail is second to none. Samson is a hard worker, and he prides himself on his ability to deliver top-notch results, no matter the task at hand.

          Samson's experience doesn't stop at front end development, though. He's also managed projects and worked collaboratively with cross-functional teams, demonstrating his exceptional leadership and interpersonal skills. He's a team player who enjoys working with others, and his ability to communicate complex ideas in a simple way has earned him a reputation as a trusted colleague and mentor.

          As a front end web developer, Samson is constantly exploring new technologies and staying up-to-date on industry trends. He's passionate about solving problems and finding innovative solutions to tricky issues. Whether it's building complex systems from scratch or optimizing existing ones, Samson is always up for the task.

          In summary, Samson is a front end web developer with a passion for software development, project management, and innovation. He's hardworking, analytical, and detail-oriented, and he always puts his best foot forward. With his exceptional skills and expertise, Samson is sure to make a lasting impact on the world of technology.`,
  },
  {
    id: 4,
    img: Jessica,
    project: Decarb,
    title: "Jessica",
    lang: "English, Portuguese",
    services: "System Design",
    experience: "3 years",
    strength: "Front-End",
    industry: "ESG",
    back: "ESG Customer Experience",
    bio: `Jessica is a highly skilled and experienced front-end web developer with a passion for creating visually stunning and intuitive user interfaces. With over 3 years of experience in the industry, she has honed her skills in HTML, CSS, and JavaScript, and is proficient in using various frameworks like React and Tailwind CSS. She is also well-versed in graphic design and has experience in tools like Figma and Adobe Creative Suite.

Jessica has a keen eye for design and aesthetics, and her work is characterized by clean lines, balanced layouts, and attention to detail. She understands the importance of creating responsive designs that can adapt to various screen sizes and devices and is always exploring new ways to enhance the user experience.

Jessica is committed to staying up-to-date with the latest web development trends and best practices. She takes courses regularly to expand her knowledge and skills, and actively participates in various developer communities.

In her free time, Jessica enjoys travelling, discovering new foods, capturing those moments through photography, and reading books. She also loves taking long walks, listening to music, and singing . Jessica's dedication and passion for front-end web development has earned her a reputation as a leader in her field, and her contributions have helped shape the industry in meaningful ways.`,
  },
  {
    id: 2,
    img: Salomon,
    project: Decarb,
    title: "Salomon",
    lang: "English",
    services: "System Design",
    experience: "3 years",
    strength: "Back-End",
    industry: "ESG",
    back: "Data Analyst",
    bio: `Salomon is an accomplished backend web developer with over a 3 years of experience in the field. He is highly skilled in developing and maintaining complex web applications and services, and is known for his attention to detail and ability to solve complex problems.

Salomon has a deep understanding of various programming languages and frameworks, including Java, Python, Ruby, and Node.js. He is well-versed in working with databases like MySQL and PostgreSQL, and has experience with various API and web service protocols such as REST and SOAP. Salomon is also an expert in using tools like Git and Jenkins for version control and continuous integration.

As a developer, Salomon is responsible for mentoring and training junior developers in his team. He takes great pride in sharing his knowledge and expertise with his peers, and takes an active role in improving his team's performance and efficiency.

Salomon is a strong advocate for code quality and follows best practices for writing clean and maintainable code. He believes that developing scalable and efficient systems requires a deep understanding of the business logic and user requirements.

Outside of work, Salomon enjoys reading about the latest technological advancements and attending tech conferences to stay up-to-date with the latest trends and best practices. His dedication and passion for web development have earned him a reputation as a leader in his field, and his contributions have helped shape the industry in meaningful ways.`,
  },

  {
    id: 7,
    img: jacob,
    project: Savn,
    title: "Jacob",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Back-End",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `Meet Jacob Mwale, an experienced back-end developer with a focus on Python, Django, Javascript, C, HTML, and CSS. Jacob has a strong passion for web development, API integration, and database management, and his impressive portfolio showcases his expertise.
          Jacob's proficiency in seamlessly integrating APIs into web applications, as well as his ability to work with databases such as MySQL, PostgreSQL, and Microsoft Access, has earned him a reputation as a skilled developer in the industry.
          Apart from his technical skills, Jacob has a keen interest in music, playing the guitar, piano, and singing. He is also passionate about teaching computer basics, which has helped him develop strong communication and teaching skills.
          With his dedication and commitment to delivering quality work, Jacob is a great choice for any project. His combination of technical proficiency, passion for learning, and excellent communication skills makes him an invaluable asset to any team.`,
  },
  {
    id: 8,
    img: rodney,
    project: Savn,
    title: "Chimwemwe",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Front-End",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `Chimwemwe Masona is a highly motivated front-end developer who is committed to delivering exceptional user experiences through his design and development skills. He holds a diploma in software engineering, with a specialization in front-end engineering, and has developed a strong command of HTML/CSS/SCSS, JavaScript, React, NextJS, Tailwind, and Typescript.

As a quick learner, Chimwemwe stays up-to-date with new technologies, tools, and techniques to ensure that his projects are optimized for functionality and user-friendliness. He understands that the power of design and user experience can make or break a project, and therefore takes a holistic approach to development. This means collaborating closely with designers, stakeholders, and other developers to ensure that every project meets the highest standards of quality and functionality.

Chimwemwe's excellent communication skills and collaborative spirit make him a great team player. He values teamwork and strives for timely delivery of high-quality projects, always going the extra mile to ensure that his work is of the highest standard.

In addition to his work as a front-end developer, Chimwemwe enjoys playing and watching sports, including football, basketball, and tennis. He finds that sports help him to stay physically fit and mentally sharp, and he is always looking for ways to challenge himself and improve his skills. Chimwemwe is also an avid reader and enjoys reading books on a variety of topics, from technology to personal development.`,
  },
  {
    id: 1,
    img: Umutesi,
    project: Savn,
    title: "Liliane",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Design",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `MUTESI LILIANE is a highly motivated computer application student with a strong passion for coding and software development. She has a keen eye for detail and is a skilled web developer with experience in HTML, CSS, JavaScript frameworks, Python, and Figma. LILIANE has worked on various projects throughout her studies, ranging from simple landing pages to complex web applications.
          LILIANE is committed to creating clean, responsive, and user-friendly websites that provide an optimal user experience. Her proficiency in front-end web development and understanding of user interface design enables her to create websites that are both visually appealing and functional. LILIANE is an excellent communicator and enjoys collaborating with designers, project managers, and other developers to ensure timely delivery of high-quality projects.
          Aside from her technical skills, LILIANE is an avid reader and enjoys spending time with friends. She also practices yoga as a way to relax and maintain a healthy work-life balance. LILIANE's dedication and commitment to delivering quality work make her a valuable asset to any team.
          In conclusion, LILIANE's passion for coding and software development, combined with her technical skills and excellent communication abilities, makes her an exceptional web developer with a promising future in the field.`,
  },
  {
    id: 3,
    img: pascaline,
    project: Savn,
    title: "Pascaline",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Design",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `NSHIMIYIMANA UWASE Pascaline, a 24-year-old lady living in Kigali City, Rwanda, is passionate about becoming a successful software designer and entrepreneur. With a strong desire to learn new skills as technology evolves, Pascaline aims to make a positive impact in the community.
          After completing her secondary school education at Lycee Notre Dame de Citeaux, where she focused on physics, mathematics, and geography (MPG), Pascaline pursued a major in computer and software engineering at the University of Rwanda/College of Science and Technology. She excelled in managing her workload, prioritizing projects and assignments to meet deadlines.
          Pascaline's impressive project portfolio includes the E-Health & stress detection and monitoring system, an IoT-based project that involved developing a wearable device and corresponding Android mobile app. The device utilizes sensor fusion to collect various vital body parameter data, including heart rate, body temperature, and oxygen saturation. It then uses an IF-THEN algorithm to determine stress status and provides notifications when a user is in danger. The system was built using PHP programming language, Android, and C programming language.
          With her strong work ethic, passion for coding, and collaborative spirit, Pascaline is well on her way to achieving her career goals and making a positive impact on society.`,
  },
  {
    id: 6,
    img: Fido,
    project: Savn,
    title: "Fido",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Design",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `Fido is an enthusiastic and dedicated web developer, known for her strong work ethic and creative problem-solving skills. She has always had a passion for technology and programming, and pursued her interest in web development during her college years.

        Fido has a solid foundation in front-end development, with a deep understanding of HTML, CSS, and JavaScript. She has also worked with various CMS platforms like WordPress and Drupal, and is well-versed in using popular frameworks like Bootstrap and React. Fido is a quick learner and keeps herself up-to-date with the latest web development trends and best practices.

        As a female web developer, Fido is a strong advocate for diversity and inclusion in the tech industry. She actively participates in organizations that support and empower women in tech, and mentors aspiring female developers.

        Fido's talent and hard work have earned her a reputation as a dependable and detail-oriented developer. She is known for her ability to take on complex projects and deliver high-quality work on time. Her passion for web development is matched only by her love for dogs, and she spends her free time volunteering at animal shelters and advocating for animal rights.

        Fido's dedication to her craft and commitment to making a positive impact in the world make her an inspiration to her peers and a role model for aspiring developers.`,
  },
];

export const emission_base = [
  {
    title: "Facilities",
    count: "6",
  },
  {
    title: "Regions",
    count: "65",
  },
  {
    title: "Employees",
    count: "32",
  },
  {
    title: "Supplier",
    count: "56",
  },
];

export const ghg_emissions = [
  {
    title: "Scope 1",
    entry_link: "scope1",
    description:
      "Scope 1 emissions refer to direct greenhouse gas emissions from a company's own operations, including fuel combustion and equipment usage.",
  },
  {
    title: "Scope 2",
    entry_link: "scope2",
    description:
      "Indirect emissions from energy purchased for use in operations, such as electricity or steam. It measures the carbon footprint from indirect energy consumption.",
  },
  {
    title: "Scope 3",
    entry_link: "scope3",
    description:
      "Indirect emissions from sources not owned or controlled by the company, such as suppliers and customers. These emissions have a significant impact on a company's overall carbon footprint and ESG performance.",
  },
];

export const employee_relations = [
  {
    title: "New Employee Hires and Employee Turnover",
    entry_link: "employee-turnover",
  },
  {
    title: "Different Benefits for Full-Time vs. Part-time Staff",
    entry_link: "full-time-part-time",
  },
  {
    title: "Parental Leave",
    entry_link: "parental-leave",
  },
  {
    title: "Relationship Policies and Supply Chain Management",
    entry_link: "supply-chain-management",
  },
];

export const scope1 = [
  {
    title: "Stationary Combustion",
    icon: GiFactory,
    count: "6",
    entry_link: "cat1",
  },
  {
    title: "Mobile Combustion",
    icon: AiFillCar,
    count: "65",
    entry_link: "cat2",
  },
  {
    title: "Process Emissions",
    icon: SlChemistry,
    count: "32",
    entry_link: "cat3",
  },
  {
    title: "Fugitive Emissions",
    icon: BsExclamationTriangleFill,
    count: "56",
    entry_link: "cat4",
  },
  {
    title: "CO2 Sequestration",
    icon: FaRecycle,
    count: "24",
    entry_link: "cat5",
  },
  {
    title: "Biogenic Emissions",
    icon: FaLeaf,
    count: "42",
    entry_link: "cat6",
  },
];

export const sample = [
  {
    name: "Sample",
    location: "None",
    start: "12/03/23",
    end: "12/05/23",
    status: "Open",
  },
  {
    name: "Ogoori",
    location: "Norway",
    start: "12/03/23",
    end: "12/05/23",
    status: "Open",
  },
  {
    name: "Debug",
    location: "Platform",
    start: "6/03/23",
    end: "12/08/23",
    status: "Open",
  },
  {
    name: "Tasks",
    location: "Platform",
    start: "1/03/23",
    end: "17/05/23",
    status: "Open",
  },
];

export const countries = [
  { country: "Afghanistan" },
  { country: "Albania" },
  { country: "Algeria" },
  { country: "Andorra" },
  { country: "Angola" },
  { country: "Antigua and Barbuda" },
  { country: "Argentina" },
  { country: "Armenia" },
  { country: "Australia" },
  { country: "Austria" },
  { country: "Azerbaijan" },
  { country: "Bahamas" },
  { country: "Bahrain" },
  { country: "Bangladesh" },
  { country: "Barbados" },
  { country: "Belarus" },
  { country: "Canada" },
  { country: "Central African Republic" },
  { country: "Chad" },
  { country: "Chile" },
  { country: "China" },
  { country: "Colombia" },
  { country: "Comoros" },
  { country: "Congo (Congo-Brazzaville)" },
  { country: "Costa Rica" },
  { country: "Croatia" },
  { country: "Cuba" },
  { country: "Cyprus" },
  { country: "Czechia (Czech Republic)" },
  { country: "Democratic Republic of the Congo" },
  { country: "Denmark" },
  { country: "Djibouti" },
  { country: "Dominica" },
  { country: "Dominican Republic" },
  { country: "Ecuador" },
  { country: "Egypt" },
  { country: "El Salvador" },
  { country: "Equatorial Guinea" },
  { country: "Eritrea" },
  { country: "Estonia" },
  { country: "Eswatini (fmr. Swaziland)" },
  { country: "Ethiopia" },
  { country: "Fiji" },
  { country: "Finland" },
  { country: "France" },
  { country: "Gabon" },
  { country: "Gambia" },
  { country: "Georgia" },
  { country: "Germany" },
  { country: "Ghana" },
  { country: "Greece" },
  { country: "Grenada" },
  { country: "Guatemala" },
  { country: "Guinea" },
  { country: "Guinea-Bissau" },
  { country: "Guyana" },
  { country: "Haiti" },
  { country: "Holy See" },
  { country: "Honduras" },
  { country: "Hungary" },
  { country: "Iceland" },
  { country: "India" },
  { country: "Indonesia" },
  { country: "Iran" },
  { country: "Iraq" },
  { country: "Ireland" },
  { country: "Israel" },
  { country: "Italy" },
  { country: "Jamaica" },
  { country: "Japan" },
  { country: "Jordan" },
  { country: "Kazakhstan" },
  { country: "Kenya" },
  { country: "Kiribati" },
  { country: "Kuwait" },
  { country: "Kyrgyzstan" },
  { country: "Laos" },
  { country: "Latvia" },
  { country: "Lebanon" },
  { country: "Lesotho" },
  { country: "Liberia" },
  { country: "Libya" },
  { country: "Liechtenstein" },
  { country: "Lithuania" },
  { country: "Luxembourg" },
  { country: "Madagascar" },
  { country: "Malawi" },
  { country: "Malaysia" },
  { country: "Maldives" },
  { country: "Mali" },
  { country: "Malta" },
  { country: "Marshall Islands" },
  { country: "Mauritania" },
  { country: "Mauritius" },
  { country: "Mexico" },
  { country: "Micronesia" },
  { country: "Moldova" },
  { country: "Monaco" },
  { country: "Mongolia" },
  { country: "Montenegro" },
  { country: "Morocco" },
  { country: "Mozambique" },
  { country: "Myanmar (formerly Burma)" },
  { country: "Namibia" },
  { country: "Nauru" },
  { country: "Nepal" },
  { country: "New Zealand" },
  { country: "Nicaragua" },
  { country: "Niger" },
  { country: "Nigeria" },
  { country: "North Korea" },
  { country: "North Macedonia" },
  { country: "Norway" },
  { country: "Oman" },
  { country: "Pakistan" },
  { country: "Palau" },
  { country: "Panama" },
  { country: "Papua New Guinea" },
  { country: "Paraguay" },
  { country: "Peru" },
  { country: "Philippines" },
  { country: "Poland" },
  { country: "Portugal" },
  { country: "Qatar" },
  { country: "Romania" },
  { country: "Russia" },
  { country: "Rwanda" },
  { country: "Saint Kitts and Nevis" },
  { country: "Saint Lucia" },
  { country: "Saint Vincent and the Grenadines" },
  { country: "Samoa" },
  { country: "San Marino" },
  { country: "Sao Tome and Principe" },
  { country: "Saudi Arabia" },
  { country: "Senegal" },
  { country: "Serbia" },
  { country: "Seychelles" },
  { country: "Sierra Leone" },
  { country: "Singapore" },
  { country: "Slovakia" },
  { country: "Slovenia" },
  { country: "Solomon Islands" },
  { country: "Somalia" },
  { country: "South Africa" },
  { country: "South Korea" },
  { country: "South Sudan" },
  { country: "Spain" },
  { country: "Sri Lanka" },
  { country: "Sudan" },
  { country: "Suriname" },
  { country: "Sweden" },
  { country: "Switzerland" },
  { country: "Syria" },
  { country: "Syria" },
  { country: "Taiwan*" },
  { country: "Tajikistan" },
  { country: "Tanzania" },
  { country: "Thailand" },
  { country: "Timor-Leste (East Timor)" },
  { country: "Togo" },
  { country: "Tonga" },
  { country: "Trinidad and Tobago" },
  { country: "Tunisia" },
  { country: "Turkey" },
  { country: "Turkmenistan" },
  { country: "Tuvalu" },
  { country: "Uganda" },
  { country: "Ukraine" },
  { country: "United Arab Emirates" },
  { country: "United Kingdom" },
  { country: "United States of America" },
  { country: "Uruguay" },
  { country: "Uzbekistan" },
  { country: "Vanuatu" },
  { country: "Venezuela" },
  { country: "Vietnam" },
  { country: "Yemen" },
  { country: "Zambia" },
  { country: "Zimbabwe" },
];

export const roles = [
  { role: "Select a role" },
  { role: "Artificial Intelligence (AI) Engineer" },
  { role: "Back-End Developer" },
  { role: "Business Analyst" },
  { role: "Cloud Architect" },
  { role: "Computer Hardware Engineer" },
  { role: "Content Strategist" },
  { role: "Cryptographer" },
  { role: "Data Analyst" },
  { role: "Data Scientist" },
  { role: "Database Administrator" },
  { role: "DevOps Engineer" },
  { role: "Front-End Developer" },
  { role: "Full-Stack Developer" },
  { role: "Game Developer" },
  { role: "Information Security Analyst" },
  { role: "IT Manager" },
  { role: "Machine Learning Engineer" },
  { role: "Mobile Developer" },
  { role: "Network Administrator" },
  { role: "Product Manager" },
  { role: "Project Manager" },
  { role: "Quality Assurance (QA) Tester" },
  { role: "Scrum Master" },
  { role: "Software Architect" },
  { role: "Software Developer" },
  { role: "Software Engineer" },
  { role: "Systems Administrator" },
  { role: "Technical Writer" },
  { role: "UI/UX Designer" },
  { role: "Web Developer" },
];

export const primary_skill = [
  { primary_skill: "Select skill" },
  { primary_skill: ".NET" },
  { primary_skill: "[Cross-Platfrom] React Native" },
  { primary_skill: "[JavaScript] Angular" },
  { primary_skill: "[JavaScript] Node.js" },
  { primary_skill: "[JavaScript] React" },
  { primary_skill: "[JavaScript] Vue" },
  { primary_skill: "Android" },
  { primary_skill: "Blockchain" },
  { primary_skill: "C/Embedded" },
  { primary_skill: "Cloud Engineering" },
  { primary_skill: "Cloud Engineering (AWS)" },
  { primary_skill: "Data Analyst" },
  { primary_skill: "Data Engineering" },
  { primary_skill: "Data Science" },
  { primary_skill: "DevOps" },
  { primary_skill: "DevOps (AWS)" },
  { primary_skill: "DevSecOps" },
  { primary_skill: "Digital Project Manager" },
  { primary_skill: "Elixir" },
  { primary_skill: "Flutter" },
  { primary_skill: "Golang" },
  { primary_skill: "Interaction Designer" },
  { primary_skill: "iOs" },
  { primary_skill: "Java" },
  { primary_skill: "Mulesoft" },
  { primary_skill: "PHP" },
  { primary_skill: "Product Manager" },
  { primary_skill: "Product Owner Technical" },
  { primary_skill: "Python" },
  { primary_skill: "QA" },
  { primary_skill: "Ruby" },
  { primary_skill: "Salesforce - Admin" },
  { primary_skill: "Salesforce - Architect" },
  { primary_skill: "Salesforce - BA/PM/PO" },
  { primary_skill: "Salesforce - Commerce Cloud" },
  { primary_skill: "Developer" },
  { primary_skill: "Salesforce - Marketer" },
  { primary_skill: "Scala" },
  { primary_skill: "Scrum Master" },
  { primary_skill: "SRE" },
  { primary_skill: "Technical Product Manager" },
  { primary_skill: "UI (Visual) Designer" },
  { primary_skill: "UI/UX Designer" },
  { primary_skill: "Unity" },
  { primary_skill: "UX Researcher" },
  { primary_skill: "UX Writer" },
];

export const techPositions = [
  "AI Engineer",
  "Agile Coach",
  "Android Developer",
  "Angular Developer",
  "AR Developer",
  "Backend Engineer",
  "Bioinformatics Scientist",
  "Blockchain Developer",
  "Business Intelligence Developer",
  "Cloud Architect",
  "Cloud Solutions Engineer",
  "Cybersecurity Analyst",
  "Data Analyst",
  "Data Engineer",
  "Data Scientist",
  "Database Administrator",
  "Database Developer",
  "DevOps Engineer",
  "Django Fullstack Developer",
  "Docker/Kubernetes Engineer",
  "Embedded Systems Engineer",
  "Ethical Hacker",
  "Firmware Engineer",
  "Frontend Engineer",
  "Fullstack Engineer",
  "Game Developer",
  "Information Security Engineer",
  "Interaction Designer",
  "IoT Developer",
  "iOS Developer",
  "Java Developer",
  "JavaScript Developer",
  "LAMP Stack Developer",
  "Machine Learning Engineer",
  "Manual Tester",
  "MEAN Stack Developer",
  "MERN Stack Developer",
  "Mobile App Developer (iOS/Android)",
  "Network Security Engineer",
  "Node.js Developer",
  "NoSQL Developer",
  "PHP Developer",
  "Product Designer",
  "Product Manager",
  "Product Owner",
  "Project Manager",
  "Python Developer",
  "QA Engineer",
  "Quantum Developer",
  "React Developer",
  "React Native Developer",
  "Robotic Process Automation Developer",
  "Robotics Engineer",
  "Ruby on Rails Developer",
  "Scrum Master",
  "Security Consultant",
  "Server-side Developer",
  "Site Reliability Engineer",
  "Smart Contract Developer",
  "Software Engineer",
  "Statistician",
  "Systems Administrator",
  "UI/UX Designer",
  "Unity Developer",
  "Unreal Engine Developer",
  "Virtual Reality Developer",
  "Web Developer",
  "Other"
];


export const years_work_experience = [
  { years: "Select a year" },
  { years: "1 year" },
  { years: "2 years" },
  { years: "3 years" },
  { years: "4 years" },
  { years: "5 years" },
  { years: "6 years" },
  { years: "7 years" },
  { years: "8 years" },
  { years: "9 years" },
  { years: "10 years" },
  { years: "11 years" },
  { years: "12 years" },
  { years: "13 years" },
  { years: "14 years" },
  { years: "15+ years" },
];

export const years_primary_skill = [
  { years_primary_skill: "Select a year" },
  { years_primary_skill: "1 year" },
  { years_primary_skill: "2 years" },
  { years_primary_skill: "3 years" },
  { years_primary_skill: "4 years" },
  { years_primary_skill: "5 years" },
  { years_primary_skill: "6 years" },
  { years_primary_skill: "7 years" },
  { years_primary_skill: "8 years" },
  { years_primary_skill: "9 years" },
  { years_primary_skill: "10 years" },
  { years_primary_skill: "11 years" },
  { years_primary_skill: "12 years" },
  { years_primary_skill: "13 years" },
  { years_primary_skill: "14 years" },
  { years_primary_skill: "15+ years" },
];

export const english_level = [
  { english_level: "Select a level" },
  { english_level: "Beginner A1/A2" },
  { english_level: "Intermediate B1/B2" },
  { english_level: "C1/C2" },
  { english_level: "Native" },
];

export const heard_baobabpad = [
  { method: "Select an option" },
  { method: "Advertising" },
  { method: "Email" },
  { method: "In-person Event" },
  { method: "Job Posts" },
  { method: "News" },
  { method: "Referral" },
  { method: "Search Engine" },
  { method: "Social Media" },
  { method: "Word of Mouth" },
  { method: "Other" },
];

export const conversationMessages = {
  1: [
    { text: "Hey, how's it going?", isCurrentUser: false },
    { text: "Hi there! Doing great, thanks.", isCurrentUser: true },
    {
      text: "I've been learning about networking recently.",
      isCurrentUser: false,
    },
    {
      text: "That's awesome! Networking is a crucial skill for developers. What have you learned so far?",
      isCurrentUser: true,
    },
    {
      text: "I've learned about IP addresses, subnetting, and the basics of TCP/IP.",
      isCurrentUser: false,
    },
    {
      text: "Those are fundamental concepts! IP addresses help identify devices on a network, and subnetting allows efficient address allocation.",
      isCurrentUser: true,
    },
    {
      text: "TCP/IP is the protocol suite that powers the internet. It enables reliable data transfer between devices.",
      isCurrentUser: true,
    },
    {
      text: "Exactly! I'm also exploring HTTP, DNS, and different types of network topologies.",
      isCurrentUser: false,
    },
    {
      text: "HTTP is the foundation of web communication, and DNS translates domain names to IP addresses. Network topologies determine how devices are connected.",
      isCurrentUser: true,
    },
    {
      text: "Thanks for the insights! Networking seems complex but fascinating.",
      isCurrentUser: false,
    },
  ],

  2: [
    {
      text: "Hey, have you been diving into UX research lately?",
      isCurrentUser: true,
    },
    {
      text: "Absolutely! UX research is crucial for understanding users and improving product experiences.",
      isCurrentUser: false,
    },
    {
      text: "Definitely. It helps in designing user-centered products and making informed decisions.",
      isCurrentUser: true,
    },
    {
      text: "I've heard about different methods like user interviews, surveys, and usability testing.",
      isCurrentUser: false,
    },
    {
      text: "Yes, those are common methods. User interviews provide qualitative insights, surveys help gather quantitative data, and usability testing uncovers usability issues.",
      isCurrentUser: true,
    },
    {
      text: "How about personas and user journeys? Are they important in UX research?",
      isCurrentUser: false,
    },
    {
      text: "Absolutely! Personas are fictional characters representing user types, and user journeys map out the user's experience through a product. They both help in understanding user needs and behaviors.",
      isCurrentUser: true,
    },
    {
      text: "I'm curious about remote user testing. It sounds convenient, but does it offer reliable results?",
      isCurrentUser: false,
    },
    {
      text: "Remote user testing can be effective, but it's important to consider factors like the participant's environment and possible technical issues. Moderated sessions and well-designed tasks can lead to valuable insights.",
      isCurrentUser: true,
    },
    {
      text: "Got it. How can I start learning more about UX research?",
      isCurrentUser: false,
    },
    {
      text: "There are plenty of online resources, courses, and books on UX research. Platforms like Coursera and LinkedIn Learning offer comprehensive courses. Don't forget to practice by conducting small research projects!",
      isCurrentUser: true,
    },
    {
      text: "Thanks for the advice! UX research sounds fascinating and impactful.",
      isCurrentUser: false,
    },
  ],
};

export const initialValidationErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export const village_member_profiles = [
  {
    imageSrc: willian,
    name: "Kofi Mensah",
    role: "Software Engineer",
    country: "Greece",
    experience: "2 years",
    courses: "CompTIA A+"
  },

  {
    imageSrc: Christina,
    name: "Zahara Mohammed",
    role: "UX Researcher",
    country: "Slovenia",
    experience: "2 years",
    courses: "Cisco CCNA"

  },
  {
    imageSrc: Christina_2,
    name: "Nala Sowande",
    role: "Systems Administrator",
    country: "Norway",
    experience: "2 years",
    courses: "AWS Certified Solutions Architect"

  },
  {
    imageSrc: shadreck,
    name: "Obinna Eze",
    role: "Software Engineer",
    country: "Greece",
    experience: "2 years",
    courses: "Microsoft Certified Azure Administrator"

  },
  {
    imageSrc: itay,
    name: "Ahmad Hassan",
    role: "UX Researcher",
    country: "Slovenia",
    experience: "2 years",
    courses: "Certified ScrumMaster (CSM)"

  },
  {
    imageSrc: ronny,
    name: "Isabella Muller",
    role: "Systems Administrator",
    country: "Norway",
    experience: "2 years",
    courses: "Certified Information Systems Security Professional (CISSP)"

  },
];

export const company_member_profiles = [
  {
    id: 1,
    name: "Google Inc",
    industry: "Tech",
    logo: "coming soon"
  },
  {
    id: 2,
    name: "Apple Inc",
    industry: "Tech",
    logo: "coming soon"
  },
  {
    id: 3,
    name: "Microsoft Corporation",
    industry: "Tech",
    logo: "coming soon"
  },
  {
    id: 4,
    name: "Amazon.com Inc",
    industry: "E-commerce",
    logo: "coming soon"
  },
  {
    id: 5,
    name: "Facebook, Inc",
    industry: "Social Media",
    logo: "coming soon"
  },
  {
    id: 6,
    name: "Tesla, Inc",
    industry: "Automotive",
    logo: "coming soon"
  }
];


export const languages = [
    "Mandarin Chinese",
    "Spanish",
    "English",
    "Hindi",
    "Arabic",
    "Bengali",
    "Portuguese",
    "Russian",
    "Urdu",
    "Indonesian",
    "Standard German",
    "French",
    "Japanese",
    "Telugu",
    "Marathi",
    "Vietnamese",
    "Korean",
    "Tamil",
    "Italian",
    "Turkish",
    "Yue Chinese",
    "Thai",
    "Gujarati",
    "Javanese",
    "Western Punjabi",
    "Wu Chinese",
    "Malay/Indonesian",
    "Kannada",
    "Odia",
    "Burmese",
    "Hakka Chinese",
    "Ukrainian",
    "Bhojpuri",
    "Tagalog",
    "Yoruba",
    "Maithili",
    "Uzbek",
    "Sundanese",
    "Thai",
    "Farsi",
    "Malayalam",
    "Igbo",
    "Sindhi",
    "Swahili",
    "Romanian",
    "Azerbaijani",
    "Dutch",
    "Nepali",
    "Gan Chinese",
    "Sinhala",
    "Chittagonian",
    "Khmer",
    "Hausa",
    "Kurdish",
    "Malagasy",
    "Amharic",
    "Cebuano",
    "Nepali",
    "Tibetan",
    "Chichewa",
    "Rundi",
    "Bambara",
    "Bulgarian",
    "Saraiki",
    "Zulu",
    "Kinyarwanda",
    "Swedish",
    "Yi Chinese",
    "Finnish",
    "Magahi",
    "Awadhi",
    "Gan Chinese",
    "Hungarian",
    "Chuang",
    "Madurese",
    "Greek",
    "Akan",
    "Kazakh",
    "Czech",
    "Sylheti",
    "Quechua",
    "Tatar",
    "Xhosa",
    "Slovak",
    "Malayalam",
    "Marwari",
    "Haryanvi",
    "Kurdish (Kurmanji)",
    "Zhuang",
    "Min Nan Chinese",
    "Ilocano",
    "Yoruba",
    "Burmese",
    "Amharic",
    "Oromo",
    "Igbo",
    "Maithili"
  ]




export default () => null;
