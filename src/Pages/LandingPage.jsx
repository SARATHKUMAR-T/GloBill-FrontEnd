import BusinessSvg from '../Assets/Business-merger.svg';
import Button from '../Ui/Button';
import { HiArrowCircleRight } from 'react-icons/hi';
import Stribe from '../Assets/line-32.svg';
import Arrow53 from '../Assets/arrow-53.svg';

import { motion } from 'framer-motion';
function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-700 text-slate-200">
      <div>
        <div className="relative mx-auto mb-4 flex justify-center ">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="z-10 pt-12 text-center text-7xl font-bold tracking-wider text-slate-100"
          >
            Welcome to GloBill
          </motion.h1>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            src={Stribe}
            alt="Stribe-line"
            className="right-30 absolute  -top-24 h-96 w-96"
          />
        </div>
        <h2 className=" mt-12  text-center text-3xl font-medium">
          Powerful Billing Application for Your Business
        </h2>
        <p className="z-50 pt-3 text-center font-semibold md:text-xl">
          Simplify your invoicing process, track payments effortlessly, and
          optimize your financial management
        </p>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={BusinessSvg}
          alt="Globill-business-operations"
          className="flex-0 h-1/2 w-1/2"
        />
        <div className="flex-0 relative mt-4 flex flex-col gap-4 rounded-md bg-slate-300 px-12 py-8 shadow-xl  md:px-16 md:py-12 lg:px-24 lg:py-16">
          <img
            src={Arrow53}
            alt="svg"
            className="absolute -left-20  -top-32 hidden h-36 w-36  rotate-45 xl:block"
          />
          <Button type="primary" to="/login">
            Login
          </Button>
          <p className="text-center text-blue-700">or</p>
          <Button type="primary" to="/signup">
            Signup
          </Button>
          <HiArrowCircleRight className="mx-auto h-10 w-10 text-blue-700" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
