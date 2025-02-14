const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const isAdmin = props.isAdmin;

  let message;
  if (isAdmin) message = <h1>You are logged in as admin</h1>;
  else message = <p>You are logged in as regular user</p>;

  // Här används en ternary operator för conditional rendering
  return (
    <>
      {isLoggedIn ? (
        <span>
          <h1>Welcome back!</h1>
          {message}
        </span>
      ) : (
        <h1>Please register to be able to login</h1>
      )}
    </>
  );
};

export default Greeting;
