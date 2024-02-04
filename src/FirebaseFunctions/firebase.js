import { db, storage } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

export const setOrders = async (
  name,
  contact,
  email,
  quantity,
  instructions,
  address,
  
) => {
  try {
    const order = await addDoc(collection(db, "Orders"), {
      Org: name,
      "Contact Number": contact,
      email: email,
      quantity: quantity,
      instructions: instructions,
      address: address,
    });

    return order;
  } catch (error) {
    console.log(error);
  }
};

export const uploadFiles = async (name, file) => {
  try {
    await uploadBytes(ref(storage, `${name}/files/details`), file);
  } catch (error) {
    console.log(error);
  }
};

export const uploadImages = async (name, file) => {
  try {
    await uploadBytes(ref(storage, `${name}/images/design`), file);
  } catch (error) {
    console.log(error);
  }
};
