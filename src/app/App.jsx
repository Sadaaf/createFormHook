import useForm from "../hooks/useForm";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/ui/buttons/Button";
import Task from "../components/task/Task";

const init = {
  lastName: "",
  firstName: "",
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }
  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  if (!values.email) {
    errors.email = "email is required";
  }
  if (!values.password) {
    errors.password = "password is required";
  }
  return errors;
};

const App = () => {
  const {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    clear,
  } = useForm({
    init,
    validate,
  });

  const cb = ({ hasError, values, errors }) => {
    hasError
      ? alert("ERROR!!! " + JSON.stringify(errors))
      : alert("SUCCESS!!! " + JSON.stringify(values));
    clear();
  };

  return (
    <div>
      <h1>Custom Hook Form</h1>
      <form onSubmit={(event) => handleSubmit(event, cb)}>
        <InputGroup
          value={state.firstName.value}
          error={state.firstName.error}
          label="Enter First Name"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder="John"
        />
        <InputGroup
          value={state.lastName.value}
          error={state.lastName.error}
          label="Enter Last Name"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder="Doe"
        />
        <InputGroup
          value={state.email.value}
          error={state.email.error}
          label="Enter Email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder="Johndoe@email.com"
        />
        <InputGroup
          value={state.password.value}
          error={state.password.error}
          label="Enter Password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder="*******"
        />
        <Button type="submit">Submit</Button>
        <br />
        <br />
        <Button type="reset" onClick={clear}>
          Clear
        </Button>
      </form>
      <hr />
      <Task />
    </div>
  );
};

export default App;
