import { useEffect, useRef } from "react";

const UseRefFrom = () => {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nurmoni is better than mim");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={myRef} type="text" name="name" /> <br /> <br />
        <input type="email" name="email" id="" /> <br /> <br />
        <input type="number" name="number" id="" /> <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UseRefFrom;
