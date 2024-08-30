import Image from "next/image";
import Reveal from "../animations/Reveal";

const Footer = () => {
    return (
     <footer className="w-full text-black p-6 flex flex-col items-center justify-center space-y-6 bg-slate-100">
        <section className="flex w-full max-w-7xl flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
          <div className="flex flex-col justify-start items-center space-y-4">
            <div className="flex items-center justify-center h-full space-x-4">
              <Image height={130} width={350} src="/logo/logo.png" alt="" />
            </div>
            <p className="font-semibold text-lg uppercase">
              The right place to trade
              <span className="text-white mx-1 bg-primaryColor p-1 rounded shadow-md">your</span> way
            </p>
          </div>
          <div className="flex flex-col items-center space-y-8 h-full">
            <div className="flex flex-col items-start w-full">
              <a href="mailto:support@gccbrokers.com"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2">
                support@gccbrokers.com
              </a>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2">
                <a href="tel:+97144474808">+971 4 447 4808</a>
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2">
                <a href="tel:+97145490408">+971 4 549 0408</a>
              </button>
            </div>
            <div className="flex items-center justify-center w-full space-x-2">
              <a href="https://www.linkedin.com/company/gcc-brokers-limited" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primaryColor text-primary-foreground hover:bg-primaryColor/90 h-10 w-10">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <g>
                    <path fill="#fff" d="M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001C18.683,11.04,19,12.002,19,13.353V19z"></path>
                  </g>
                  <g>
                    <ellipse fill="#fff" cx="6.5" cy="6.5" rx="1.55" ry="1.5"></ellipse>
                  </g>
                </svg>
              </a>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primaryColor text-primary-foreground hover:bg-primaryColor/90 h-10 w-10">
                <a href="https://x.com/gccbrokers" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1227" viewBox="0 0 1200 1227" fill="none"
                    className="w-4 h-4">
                    <g>
                      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#fff"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2">
                        <rect width="1200" height="1227" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primaryColor text-primary-foreground hover:bg-primaryColor/90 h-10 w-10">
                <a href="https://www.instagram.com/gccbrokers/" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.7 56.7" className="w-6 h-6">
                    <g>
                      <path fill="#fff" d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"></path>
                      <circle fill="#fff" cx="41.5" cy="16.4" r="2.9"></circle>
                      <path fill="#fff" d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.5V19.3C53,15.2,51.7,11.5,49,8.9z M48.1,43.4c0,3.1-1,5.7-2.7,7.4c-1.8,1.8-4.4,2.7-7.5,2.7H17.4c-6.5,0-10.2-3.8-10.2-10.2V22.9c0-6.3,3.9-10.2,10.2-10.2h20.5c3.1,0,5.7,1,7.5,2.7c1.8,1.8,2.7,4.4,2.7,7.5V43.4z"></path>
                    </g>
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </section>
        
        <div className="w-full h-[1px] bg-primaryColor opacity-30"></div>
 
        <div className="max-w-7xl mx-auto space-y-6 text-slate-800">
              {/* Regulations Section */}
              <div className="space-y-2">
                <h2 className="font-semibold text-md">Regulations</h2>
                <p className="text-xs">
                  GCC Brokers Limited is registered in the Republic of Mauritius with registration number C193243 and regulated by the Financial Services Commission (FSC) of Mauritius as an Investment Dealer (Broker) with license number GB22200739.
                </p>
                <p className="text-xs">
                  GCC Brokers Limited is registered by the Hong Kong Special Administrative Region with registration number 2433846.
                </p>
                <p className="text-xs">
                  GCC Brokers Limited is registered by the Financial Services Authority (FSA) of St. Vincent and the Grenadines with registration number 25578 BC 2019.
                </p>
                <p className="text-xs">
                  GCC Brokers Limited Representative Office is a branch of a foreign company (GCC Brokers Limited Mauritius), registered in the United Arab Emirates and regulated by DET with license number 1202392.
                </p>
              </div>

              {/* Risk Warning Section */}
              <div className="space-y-2">
                <h2 className="font-semibold text-md">Risk Warning</h2>
                <p className="text-xs">
                  Please be aware that leveraged off-exchange trading of Foreign Exchange (FX) and Contracts for Differences (CFDs) carries a significant degree of risk and may not be suitable for many investors. Please ensure you fully understand the risks involved and carefully consider your financial situation and trading experience before trading and seek independent advice if necessary.
                </p>
              </div>

              {/* Regional Restrictions Section */}
              <div className="space-y-2">
                <h2 className="font-semibold text-md">Regional Restrictions</h2>
                <p className="text-xs">
                  GCC Brokers Limited does not offer services to residents of certain jurisdictions such as the United States and to jurisdictions on the FATF and EU/UN sanctions lists.
                </p>
              </div>

              {/* Legal Documents Section */}
              <div className="space-y-2">
                <h2 className="font-semibold text-md">Legal Documents</h2>
                <div className="flex space-x-6">
                  <a href="#" className="text-xs text-primaryColor hover:underline">Privacy Policy</a>
                  <a href="#" className="text-xs text-primaryColor hover:underline">Terms & Conditions</a>
                  <a href="#" className="text-xs text-primaryColor hover:underline">Risk Disclosure</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse items-center justify-between w-full max-w-7xl space-y-4 md:flex-row md:space-y-0">
          <p className="text-xs font-light leading-loose md:text-left">
            © GCC Brokers Limited 2024. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  