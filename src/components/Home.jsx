import studentData from "../static/data";
import HomePage from "./Homepage";

export default function Home() {
    return (
      <div>
        <HomePage studentData={studentData} />
      </div>
    );
  }