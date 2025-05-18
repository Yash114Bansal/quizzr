import Counter from "@/components/Counter";
import quizzrs from "@/components/Admin/Home/quizzrs";
import Modal from "@/components/Modal";
import CreatequizzrForm from "@/components/Admin/Home/CreatequizzrForm";

export default function Home() {
  return (
    <div className="text-slate-200">
      <quizzrs />
      <Modal btnTitle="Create quizzr">
        <CreatequizzrForm />
      </Modal>
      <Counter />
    </div>
  );
}
