import Counter from "@/components/Counter";
import quizzrs from "@/components/Home/quizzrs";
import Createquizzr from "@/components/Home/Createquizzr";

export default function Home() {
  return (
    <div>
      <quizzrs />
      <Createquizzr/>
      <Counter />
    </div>
  );
}
