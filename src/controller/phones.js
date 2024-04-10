import { phoneList } from "../data/phoneList.js";
import Phone from "../models/car.js"; // Import the Car model
import { validationResult } from "express-validator";

export const getPhones = (req, res) => {
  Phone.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const getPhone = (req, res) => {
  const id = req.params.id;
  Phone.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const getError = (req, res) => {
  throw new Error("This is an error");
};

export const createPhone = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);
  console.log(errors);
  // on cree un nouvelle instance de Car
  const newPhone = new Phone(bodyContent);

  // on sauvegarde la nouvelle instance de Car
  newPhone
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export const udpatePhone = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const bodyContent = request.body;
  const phone = phoneList.find((phone) => phone.id === id);
  if (phone) {
    const updatedPhone = { ...phone, ...bodyContent };
    const index = phoneList.findIndex((phone) => phone.id === id);
    phoneList[index] = updatedPhone;
    response.json(updatedPhone);
  } else {
    response.status(404).json({ message: "Car not found" });
  }
};

export const deletePhone = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const phone = phoneList.find((phone) => phone.id === id);
  if (phone) {
    phoneList = phoneList.filter((phone) => phone.id !== id);
    response.status(204).end();
  } else {
    response.status(404).json({ message: "Car not found" });
  }
};
