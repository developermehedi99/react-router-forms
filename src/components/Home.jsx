import { Outlet } from "react-router-dom";
import Header from "./Header";
import ReUsableForm from "./form/ReUsableForm";

const Home = () => {
  const handleSingUp = (data) => {
    console.log("hellow submit", data);
  };
  const handleUpdate = (data) => {
    console.log("hellow update", data);
  };
  return (
    <div>
      <Header></Header>
      <ReUsableForm
        handleSubmit={handleSingUp}
        submit={"submit"}
        title="Sing UP form"
      ></ReUsableForm>
      <ReUsableForm
        handleSubmit={handleUpdate}
        submit={"update"}
        title="Update form"
      ></ReUsableForm>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
