import { FaPoundSign } from "react-icons/fa";
import calculator from "./assets/icon-calculator.jpg";
import illustration from "./assets/illustration-empty.jpg";

const HomePage = () => {
  return (
    <main className="w-[1000px] h-[500px] flex shadow-2xl rounded-3xl ">
      <section className="w-[50%] h-auto p-8 bg-white rounded-3xl">
        <div className="flex justify-between items-center">
          <p className="text-[1.6rem] font-bold">Mortgage Calculator</p>
          <p className="border-b border-gray-400 cursor-pointer text-gray-500">
            Clear All
          </p>
        </div>
        <div className="relative mt-4">
          <p className="text-gray-500">Mortgage Amount</p>
          <div className="absolute p-[15px] flex justify-center items-center bg-blue-100  left-[1px]">
            <FaPoundSign className="text-gray-500 font-light" />
          </div>
          <input
            type="text"
            className="w-full border border-gray-500 p-3 rounded-md outline-none"
          />
        </div>
        <div className="flex gap-16 mt-4">
          <div className="relative">
            <p className="text-gray-500">Mortgage Term</p>
            <input
              type="text"
              className="border border-gray-500 p-3 rounded-md mt-2 outline-none w-full"
            />
            <div className="absolute right-0 top-[70%] translate-y-[-50%] text-gray-500 flex justify-center items-center bg-blue-100 p-3">
              <span>years</span>
            </div>
          </div>
          <div className="relative">
            <p className="text-gray-500">Interest Rate</p>
            <input
              type="text"
              name=""
              id=""
              className="border border-gray-500 p-3 rounded-md mt-2 outline-none"
            />
            <div className="absolute right-0 top-[70%] translate-y-[-50%] text-gray-500 flex justify-center items-center bg-blue-100 p-3 px-4">
              <span>%</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-500">Mortgage Type</p>
          <div className="flex flex-col gap-3">
            <label
              htmlFor=""
              className="w-full border border-gray-500 p-3 rounded-md flex gap-2 items-center  cursor-pointer"
            >
              <input type="radio" />
              <span className="text-blue-950 font-bold">Repayment</span>
            </label>
            <label
              htmlFor=""
              className="w-full border border-gray-500 p-3 rounded-md flex gap-2 items-center cursor-pointer"
            >
              <input type="radio" />
              <span className="text-blue-950 font-bold">Interest Only</span>
            </label>
          </div>
        </div>
        <div className="">
          <button
            type="button"
            className="flex gap-3 items-center mt-5 p-3 px-10 bg-yellow-300 rounded-3xl"
          >
            <img
              src={calculator}
              alt="calc"
              className="h-5 bg-transparent mix-blend-multiply"
            />
            <span className="text-blue-950 font-bold">
              Calculate Repayments
            </span>
          </button>
        </div>
      </section>
      <section className="w-[50%] h-auto bg-blue-950 flex flex-col justify-center items-center gap-6 rounded-tr-3xl rounded-br-3xl rounded-bl-[5rem]">
        <div>
          <img
            src={illustration}
            alt="illustration"
            className="h-[200px] !bg-transparent !border-0"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <h3 className="text-center text-white text-[1.5rem] font-medium">
            Results shown here
          </h3>
          <p className="text-gray-400 text-center">
            Complete the form and click "calculate repayments" to <br />
            see what your monthly repayments would be.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
