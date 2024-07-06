import { db, storage, auth, provider } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { signInWithPopup } from "firebase/auth";

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
      Organization: name,
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

// google sign in func
export const signInWithGoogle = () => signInWithPopup(auth, provider);
