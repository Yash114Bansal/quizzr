import Counter from "@/components/Counter";
import quizzrs from "@/components/Home/quizzrs";
import Modal from "@/components/Modal";
import CreatequizzrForm from "@/components/Home/CreatequizzrForm";

export default function Home() {
  return (
    <div>
      <quizzrs />
      <Modal btnTitle="Create quizzr">
        <CreatequizzrForm />
      </Modal>
      <Counter />
    </div>
  );
}
