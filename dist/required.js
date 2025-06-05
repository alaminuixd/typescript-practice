"use strict";
// because of "Required", the following gives error eventhough "mileage?" is optional
/* const myCar1: Required<Car> = {
  make: "",
  model: "",
}; */
// No "Required" no error despite not adding "mileage?" optional property
const myCar2 = {
    make: "Mazda",
    model: "2023",
};
