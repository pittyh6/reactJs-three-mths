import { useState } from "react";

export interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Person) => {
  const [isShowInfo, setShowInfo] = useState<boolean>(false);
  const [personBio, setPersonBio] = useState<string | null>(null);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //the event: React.FormEvent<HTMLFormElement> is used to forms submit
    event.preventDefault();
  };

  return (
    <div>
      {isShowInfo && (
        <>
          <p>Name: {props.name}</p>
          <p>age: {props.age}</p>
          <p>This person is: {props.isMarried ? "married" : "single"}</p>
        </>
      )}
      <button onClick={toggleInfo}>Show Info</button>
      <p>
        {props.name} Bio: {!personBio ? "No bio available" : personBio}
      </p>
      <input onChange={handleChange} />
    </div>
  );
};
