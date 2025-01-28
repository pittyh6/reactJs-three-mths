export interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Person) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>This person is: {props.isMarried ? "married" : "single"}</p>
    </div>
  );
};
