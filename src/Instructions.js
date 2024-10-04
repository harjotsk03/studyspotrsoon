import studySpotrLogo from "./studySpotrLogo.png";

export const Instructions = () => {
  return (
    <div className="lg:w-1/2 fadeUp lg:h-1/2 w-11/12 h-3/7 bg-white p-6 -mt-14 drop-shadow-xl rounded-2xl">
      <div className="flex flex-col rounded lg:flex-col gap-6 h-full w-full justify-center items-center overflow-scroll">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover"
            src={studySpotrLogo}
          ></img>
        </div>
        <div className="flex flex-col gap-4">
          <p className="poppins-light text-sm lg:text-lg lg:w-3/4 lg:ml-auto lg:mr-auto text-left">
            Welcome to Study Spotr, we want to help students, or just about
            anyone, who is looking for a place to study or work, find a spot
            that meets all their needs and wants.
          </p>
          <p className="poppins-light text-sm lg:text-lg lg:w-3/4 lg:ml-auto lg:mr-auto text-left">
            Register an account now so you can be notified when Study Spotr is
            released and you can find your next perfect spot to study or work!
          </p>
          <p className="poppins-light text-sm lg:text-lg lg:w-3/4 lg:ml-auto lg:mr-auto text-left">
            Please take 3 min to complete a survey to aid us in development of
            Study Spotr!
          </p>
        </div>
      </div>
    </div>
  );
};
