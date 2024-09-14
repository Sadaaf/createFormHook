# useForm Custom Hook

This is a customHook created for the purpose of using it to create dynamic forms.

To run this project and checkout a demo form make sure you have `nodejs` installed. Then run the following commands

```bash
git clone https://github.com/Sadaaf/createFormHook.git
cd createFormHook
npm install
npm run dev
```

## usage

The useHook custom hook can be used by importing it and then calling it with a initial state that will be an object init containing all the fields for the form and a function or boolean value as validate. While calling it will return the `formState` variable and function for `handleChange, handleFocus, handleBlur,handleSubmit` and clear.

Example:

```javascript
const {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    clear,
    } = useForm({
        {
            lastName: "",
            firstName: "",
            email: "",
            password: "",
            },
            (values) => {
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
};,
        });
```

After declaring and getting all the functions and state, these can be used to create functionality for a form.
