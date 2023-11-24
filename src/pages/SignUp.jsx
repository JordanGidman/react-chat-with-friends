import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    //capture all details at once. Not using controlled components in this case due to file upload
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    //sign the user up through firebase authentication
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      //Speak to the cloud storage and upload the file

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setError(true);
        },
        () => {
          //prevents the getDownloadURL from trying to acces the snapshot before its been made available
          uploadTask.snapshot.metadata &&
            //get the file back from cloud storage in the form of a url
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                //then update the user profile with the new img

                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL,
                });
                //save the new user to our users collection keeping the password out of it

                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                });

                //save the user chats by userid
                await setDoc(doc(db, "userChats", res.user.uid), {});
                navigate("/");
                setIsLoading(false);
              }
            );
        }
      );
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="logo">Giddy Chat</h1>
        <span className="subheading">Sign up</span>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="signup-inputs"
            placeholder="Dispaly Name"
          ></input>
          <input
            type="email"
            className="signup-inputs"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="signup-inputs"
            placeholder="password"
          ></input>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            className="signup-inputs"
          ></input>
          <label htmlFor="file" className="form-add-image-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="img-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span>Add a picture</span>
          </label>
          <button className="sign-up-form-btn" disabled={isLoading}>
            Sign Up
          </button>
          {error && <span>Something went wrong..</span>}
        </form>
        <p className="signup-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
