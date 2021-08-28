import Header from "../components/home/Header";
import { SearchIcon } from "@heroicons/react/solid";
import { Button } from "@material-tailwind/react";


export default function Home() {
  return (
    <div>
      <Header />
      <section className="relative items-center justify-center w-full pt-10">
        <img
          className=" h-screen mx-auto rounded-full"
          src="/assets/dashboard/bg.jpg"
          alt=""
        />
        <div className="absolute flex flex-col w-full top-0 mx-auto text-center justify-center">
          <h1 className="font-extrabold text-4xl text-grey">
            WE HAVE THE JOB OF YOUR DREAMS
          </h1>
          <h3 className="font-light my-5 text-dark tracking-wide">
            START YOUR SEARCH
          </h3>
          <div className="flex justify-around items-center border w-96 h-14 self-center bg-white-full rounded-lg">
            <input
              type="text"
              className="w-72 h-12 outline-none "
              placeholder="Search by name, skills, company or jobs"
            />
            <Button
              buttonType="link"
              size="regular"
              rounded={true}
              block={false}
              iconOnly={true}
              ripple="dark"
              className="bg-white-full h-12 w-12 border rounded-full"
            >
              <SearchIcon className="w-8 h-8 text-grey rounded-full" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
