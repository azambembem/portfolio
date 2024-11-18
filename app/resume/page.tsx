import Navbar from "../../components/Navbar";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CalendarOutlined
} from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[75%] mx-auto mt-24">
        <div className="text-5xl ml-20 font-bold">
          RAKHMATOV AZAM
          <div className="text-3xl text-amber-700 mt-2">
            Front-End Developer
          </div>
          <div className="text-sm mt-4">
            <div className="flex items-center">
              <MailOutlined className="mr-2" />
              <span className="font-normal">azam123@naver.com</span>
              <div className="flex items-center ml-20">
                <PhoneOutlined className="mr-2" />
                <span className="font-normal">(+8210)26531030</span>
                <EnvironmentOutlined className="ml-20 mr-2" />
                <span className="font-normal">SOUTH KOREA</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <a
                href="https://t.me/happy1998071"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sky-500"
              >
                <FaTelegramPlane className="mr-2 text-sky-300" />
                <span className="font-normal">Telegram</span>
              </a>
            </div>

            <div className="flex mt-6 gap-8">
              <div className="w-[50%]">
                <div className="text-xl font-bold">CAREER OBJECTIVE</div>
                <hr className="border-t-2 border-black mt-1 mb-3 w-full" />
                <p className="leading-relaxed font-normal">
                  Front-End Developer with a strong foundation in web
                  development and a passion for continuous learning and
                  problem-solving. Throughout my academic journey, I have gained
                  hands-on experience in both front-end and back-end
                  development, including collaborative projects where I
                  implemented API servers, integrated data scraping
                  functionalities, and deployed applications using cloud
                  platforms like AWS. I am particularly excited about the
                  potential of IT services in the 4th Industrial Revolution and
                  am eager to contribute to a dynamic development team where I
                  can help build innovative web solutions. With a strong
                  commitment to both personal growth and team success, I look
                  forward to applying my skills and gaining more experience in a
                  collaborative environment at [Company Name].
                </p>
              </div>

              <div className="w-[40%]">
                <div className="text-xl font-bold">EDUCATION</div>
                <hr className="border-t-2 border-black mt-1 mb-3 w-full" />
                <p className="leading-relaxed font-normal">
                  Bachelor of Science <br />
                  Computer Science
                </p>
                <h3 className="text-amber-700 text-base font-semibold">
                  University of Gachon
                </h3>
                <div className="flex items-center mt-1">
                  <CalendarOutlined className="mr-2" />
                  <span className="font-normal">2019-2023</span>
                </div>
                <div className="flex items-center mt-1">
                  <EnvironmentOutlined className="mr-2" />
                  <span className="font-normal">Bokjeong-dong 620-2</span>
                </div>
              </div>
            </div>

            <div className="flex mt-6 gap-8">
              <div className="w-[50%]">
                <div className="text-xl font-bold">WORK EXPERIENCE</div>
                <hr className="border-t-2 border-black mt-1 mb-3 w-full" />
                <h3 className="text-xl font-normal">Front-End Developer</h3>
                <h4 className="text-amber-700 text-base font-semibold mt-2">
                  HubSpot
                </h4>
                <div className="flex items-center mt-1">
                  <CalendarOutlined className="mr-2" />
                  <span className="font-normal">May 2022 - Present</span>
                  <EnvironmentOutlined className="ml-20 mr-2" />
                  {/* <span className="font-normal">Remote</span> */}
                </div>
                <ul className="mt-3 leading-relaxed list-disc ml-6 font-normal">
                  <li>
                    Developed a Flower E-commerce Website: Designed and
                    implemented a responsive front-end for a flower shop website
                    using React, HTML5, CSS3, and JavaScript. Integrated a
                    payment gateway for seamless transactions and developed a
                    dynamic product catalog with real-time data fetching from an
                    API.
                  </li>
                  <li>
                    Built a Bookstore Website: Led the front-end development for
                    an online bookstore using React and Node.js. Implemented
                    features such as a book search functionality, dynamic
                    product filtering, and user authentication with JWT.
                    Integrated with an external API to fetch book details and
                    display them in an organized manner.
                  </li>
                  <li>
                    Responsive Web Design: Ensured that all web applications
                    were fully responsive, providing users with a seamless
                    experience across different devices.
                  </li>
                  <li>
                    UI/UX Design: Worked on improving the user experience by
                    designing intuitive user interfaces with a focus on ease of
                    navigation and overall aesthetics.
                  </li>
                  <li>
                    Optimized Performance: Improved site load speed by
                    optimizing images, reducing JavaScript bundle size, and
                    implementing lazy loading for product images.
                  </li>
                  <li>
                    Successfully deployed both the flower shop and bookstore
                    websites using Netlify ensuring they were fully functional
                    and live for public access.
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-normal">
                  Software Engineer I
                </h3>
                <h4 className="text-amber-700 text-base font-semibold mt-2">
                  Zillow
                </h4>
                <div className="flex items-center mt-1">
                  <CalendarOutlined className="mr-2" />
                  <span className="font-normal">May 2020 - June 2021</span>
                  <EnvironmentOutlined className="ml-20 mr-2" />
                  <span className="font-normal">Remote</span>
                </div>
                <ul className="mt-3 leading-relaxed list-disc ml-6 font-normal">
                  <li>
                    Developed membership, event, and legal platform technology
                    solutions, and automated internal processes.
                  </li>
                  <li>
                    Generated $50K+ in annual ad revenue as a system
                    administrator of a large network of websites.
                  </li>
                  <li>
                    Designed and implemented web applications along with 3rd
                    party software integrations as a web team liaison for all
                    interdepartmental and customer-facing projects.
                  </li>
                  <li>
                    Developed a node.js server to validate membership and track
                    digital badges being used, saving the company $22.5K.
                  </li>
                  <li>
                    Mentored 6 team members, enabling them to achieve
                    professional growth and personal goals.
                  </li>
                </ul>
              </div>

              <div className="w-[40%]">
                <div className="text-xl font-bold">SKILLS</div>
                <hr className="border-t-2 border-black mt-1 mb-3 w-full" />
                <h3 className="text-amber-700 text-base font-semibold">
                  Languages
                </h3>
                <ul className="leading-relaxed list-disc ml-3 font-normal">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>JSON</li>
                  <li>Python</li>
                </ul>
                <h3 className="mt-3 text-amber-700 text-base font-semibold">
                  Libraries
                </h3>
                <ul className="leading-relaxed list-disc ml-3 font-normal">
                  <li>React</li>
                  <li>Redux</li>
                  <li>Tailwind CSS</li>
                  <li>jQuery</li>
                  <li>Axios</li>
                </ul>
                <h3 className="mt-3 text-amber-700 text-base font-semibold">
                  Frameworks
                </h3>
                <ul className="leading-relaxed list-disc ml-3 font-normal">
                  <li>React</li>
                  <li>Next.js</li>
                </ul>
                <h3 className="mt-3 text-amber-700 text-base font-semibold">
                  Coding
                </h3>
                <ul className="leading-relaxed list-disc ml-3 font-normal">
                  <li>Responsive Design</li>
                  <li>Git, GitHub</li>
                  <li>ESLint</li>
                  <li>Prettier</li>
                </ul>
                <h3 className="mt-3 text-amber-700 text-base font-semibold">
                  Etc
                </h3>
                <ul className="leading-relaxed list-disc ml-3 font-normal">
                  <li>leet code</li>
                </ul>
              </div>
            </div>
            <h3 className="mt-8 text-xl font-normal">Publish</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, nostrum molestiae delectus deserunt quos quas nemo
              aliquam est ipsa dolorum libero facere minus quaerat sint laborum
              placeat sapiente asperiores alias!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
