const ReUsableForm = ({ handleSubmit, title, submit }) => {
  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" /> <br /> <br />
        <input type="email" name="email" id="" /> <br /> <br />
        <input type="password" name="number" id="" /> <br />
        <br />
        <input type="submit" value={submit} />
      </form>
    </div>
  );
};

export default ReUsableForm;
