import contadorP from "./contador";

describe("Contar", () => {
  it("Deberia devolver Hola: 1", () => {
    expect(contadorP("Hola")).toEqual({"Hola": 1});
  });
   it("Deberia devolver la cadena correcta", () => {
    expect(contadorP("Hola Hola como estás")).toEqual({"Hola": 2,"como": 1,"estás": 1});
  });
  it("Deberia devolver la cadena correcta", () => {
    expect(contadorP("Hola Hola como como estás")).toEqual({"Hola": 2,"como": 2,"estás": 1});
  });
  it("Deberia devolver la cadena correcta", () => {
    expect(contadorP("Hola Hola como estás estás")).toEqual({"Hola": 2,"como": 1,"estás": 2});
  });
  it("Deberia devolver-la cadena correcta", () => {
    expect(contadorP("Hola Hola como estás estás")).toEqual({"Hola": 2,"como": 1,"estás": 2});
  });
});
