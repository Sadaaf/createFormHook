import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/ui/buttons/Button";

const init = {
  title: "",
  bio: "",
  skills: "",
};

const App = () => {
  const [values, setValues] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });
  const [focuses, setFocuses] = useState({
    title: false,
    bio: false,
    skills: false,
  });

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    const key = [event.target.name];
    const { errors } = checkValidity(values);
    if (!errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isValid, errors } = checkValidity(values);
    if (isValid) {
      console.log(values);
      setErrors({ ...init });
    } else {
      setErrors({ ...errors });
    }
  };

  const handleFocus = (event) => {
    setFocuses((prev) => ({
      ...prev,
      [event.target.name]: true,
    }));
  };

  const handleBlur = (event) => {
    const key = [event.target.name];
    const { errors } = checkValidity(values);
    if (errors[key] && focuses[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const checkValidity = (values) => {
    const errors = {};
    const { title, bio, skills } = values;
    if (!title) {
      errors.title = "Invalid title";
    }
    if (!bio) {
      errors.bio = "Invalid bio";
    }
    if (!skills) {
      errors.skills = "Invalid skills";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  return (
    <div style={{ padding: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <InputGroup
            value={values.title}
            label="Enter your title"
            name="title"
            placeholder={"Software Engineer"}
            onChange={handleChange}
            error={errors.title}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={values.bio}
            label="Enter your bio"
            name="bio"
            placeholder={"I was born ..."}
            onChange={handleChange}
            error={errors.bio}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={values.skills}
            label="Enter your skills"
            name="skills"
            placeholder={"Docker"}
            onChange={handleChange}
            error={errors.skills}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default App;
