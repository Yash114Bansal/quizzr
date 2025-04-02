import addquizzr from "../../actions/AddquizzrAction";
import SubmitButton from "../SubmitButton";
import InputField from "../InputField";

const CreatequizzrForm = () => {

  return (
    <form
      action={addquizzr}
      className="flex flex-col justify-center items-center"
    >
      <InputField
        type="text"
        name="title"
        placeholder="Title"
        className="text-slate-900 my-2 rounded-full p-2"
        required
        autoComplete="off"
      />
      <InputField
        type="text"
        name="description"
        placeholder="Description"
        autoComplete="off"
        className="text-slate-900 my-2 rounded-full p-2"
      />
        <SubmitButton />
    </form>
  );
};

export default CreatequizzrForm;
