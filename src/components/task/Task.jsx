import useForm from "../../hooks/useForm";

const init = {
  text: "",
  checked: false,
  group: "",
  priority: "medium",
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
        <select
          name="group"
          value={formState.group.value}
          onChange={handleChange}
        >
          <option value="Home">HOME</option>
          <option value="Office">OFFICE</option>
        </select>
        <input
          type="radio"
          name="priority"
          value="low"
          onChange={handleChange}
        />
        LOW
        <input
          type="radio"
          name="priority"
          value="medium"
          onChange={handleChange}
        />
        MEDIUM
        <input
          type="radio"
          name="priority"
          value="high"
          onChange={handleChange}
        />
        HIGH
        <button>Create</button>
      </form>
    </div>
  );
};

export default Task;
