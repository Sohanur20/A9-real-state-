import { useEffect, useState } from "react";


const Loader = () => {

    const [progressNumber, setProgressNumber] = useState(0);
    const ProgressNumberPercent = 90; // Adjust the number for your project.
    useEffect(() => {
      const interval = setInterval(() => {
        setProgressNumber((prevNumber) => (prevNumber === ProgressNumberPercent ? 0 : prevNumber + 1));
      }, 30); // Adjust the interval as per your requirement
      return () => clearInterval(interval); // Cleanup function to clear the interval
    }, []);

    return (
        <div className="flex flex-col w-[300px] gap-2 justify-center m-72">
        <div className={`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300`}>
            <div style={{ width: `${progressNumber}%` }} className={`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500`} ></div>
        </div>
        <span className="text-lg font-medium text-center text-sky-400"> {progressNumber} %</span>
    </div>
    );
};

export default Loader;