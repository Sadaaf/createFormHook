import { useState } from "react";
import { deepCopy, isObjectEmpty } from "../utils/object-utils";

/**
 * @typedef {Object} param
 * @property {Object} init
 * @property {Object|boolean} validate
 *
 * This useForm can be used to create a form easily
 * @param {param} param
 * @returns
 */
const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (event) => {
    const { name: key, value } = event.target;

    const oldState = deepCopy(state);
    oldState[key].value = value;
    const { errors } = getErrors();
    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };

  const handleFocus = (event) => {
    const { name } = event.target;

    const oldState = deepCopy(state);
    oldState[name].focused = true;
    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }

    setState(oldState);
  };

  const handleBlur = (event) => {
    const { name: key } = event.target;

    const { errors } = getErrors();
    const oldState = deepCopy(state);
    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };

  const handleSubmit = (event, cb) => {
    event.preventDefault();

    const { hasError, errors, values } = getErrors();
    cb({
      hasError,
      errors,
      values,
      touched: mapStateToKeys(state, "touched"),
      focused: mapStateToKeys(state, "touched"),
    });
  };

  const clear = () => {
    const newState = mapValuesToState(init, true);
    setState(newState);
  };

  const getErrors = () => {
    let errors = null,
      hasError = null;
    const values = mapStateToKeys(state, "value");

    if (typeof validate == "boolean") {
      hasError = validate;
      errors = mapStateToKeys(state, "error");
    } else if (typeof validate === "function") {
      const errorsFromCb = validate(values);
      hasError = !isObjectEmpty(errorsFromCb);
      errors = errorsFromCb;
    } else {
      throw new Error("validate property must be boolean or function");
    }
    console.log(errors)
    return {
      errors,
      hasError,
      values,
    };
  };

  return {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  };
};

// Helper Functions
const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, curr) => {
    acc[curr] = {
      value: shouldClear ? "" : values[curr],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};

export default useForm;
