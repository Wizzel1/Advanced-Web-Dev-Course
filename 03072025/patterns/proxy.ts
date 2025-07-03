const person = {
    name: "John Doe",
    age: 42,
    nationality: "American",
};

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
      const key = String(prop);
      console.log(`The value of ${key} is ${obj[key as keyof typeof obj]}`);
      return obj[key as keyof typeof obj];
    },
    set: (obj, prop, value) => {
      const key = String(prop);
      console.log(`Changed ${key} from ${obj[key as keyof typeof obj]} to ${value}`);
      (obj as any)[key] = value;
      return true;
    },
  });
  

  personProxy.name = "Jane Doe";
  personProxy.age = 30;
  personProxy.nationality = "Canadian";

  console.log(personProxy.name);
  console.log(personProxy.age);
  console.log(personProxy.nationality);