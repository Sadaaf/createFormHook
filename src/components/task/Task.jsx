import useForm from "../../hooks/useForm";

const init = {
  text: "",
  checked: false,
};

const submitCb = ({ values }) => {
  alert(JSON.stringify(values));
};

const Task = () => {
  const { formState, handleChange, handleSubmit } = useForm({
    init,
    validate: true,
  });
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, submitCb)}>
        <input
          type="checkbox"
          name="checked"
          checked={formState.checked.value}
          value={formState.checked.value}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text"
          value={formState.text.value}
          onChange={handleChange}
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default Task;
