import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/ui/buttons/Button";
import { deepClone } from "../utils/object-utils";

const init = {
  title: {
    value: "",
    error: "",
    focus: false,
  },
  bio: {
    value: "",
    error: "",
    focus: false,
  },
  skills: {
    value: "",
    error: "",
    focus: false,
  },
};

const App = () => {
  const [state, setState] = useState({ ...init });

  const handleChange = (event) => {
    const oldState = deepClone(state);
    const { name: key, value } = event.target;
    const values = mapStateToValues(oldState);
    const { errors } = checkValidity(values);
    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    oldState[key].value = value;
    setState(oldState);
  };

  const mapStateToValues = (state) =>
    Object.keys(state).reduce((acc, curr) => {
      acc[curr] = state[curr].value;
      return acc;
    }, {});

  const handleSubmit = (event) => {
    event.preventDefault();

    const values = mapStateToValues(state);
    const { isValid, errors } = checkValidity(values);
    if (!isValid) {
      const oldState = deepClone(state);
      Object.keys(errors).forEach((key) => (oldState[key].error = errors[key]));
      setState(oldState);
    } else {
      console.log(values);
    }
  };

  const handleFocus = (event) => {
    const { name } = event.target;
    const oldState = deepClone(state);
    oldState[name].focus = true;
    setState(oldState);
  };

  const handleBlur = (event) => {
    const key = [event.target.name];
    const values = mapStateToValues(state);
    const { errors } = checkValidity(values);
    const oldState = deepClone(state);
    console.log(errors);
    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
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
            value={state.title.value}
            label="Enter your title"
            name="title"
            placeholder={"Software Engineer"}
            onChange={handleChange}
            error={state.title.error}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={state.bio.value}
            label="Enter your bio"
            name="bio"
            placeholder={"I was born ..."}
            onChange={handleChange}
            error={state.bio.error}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={state.skills.value}
            label="Enter your skills"
            name="skills"
            placeholder={"Docker"}
            onChange={handleChange}
            error={state.skills.error}
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
