import React, { useState, useEffect, useContext } from "react";
import { auth } from "../../firebase";
import styles from "../styles/index.module.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/authContext";

export default function Registration() {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // next router
  const router = useRouter();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailFormRegistration"));
  }, [router]);

  console.log(email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // validation
    if (!email || !password) {
      toast.error("Email and Password is required");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(email, window.location.href);

      if (result.user.emailVerified) {
        //    remove email from local storage
        window.localStorage.removeItem("emailFormRegistration");
        let user = auth.currentUser;
        await user.updatePassword(password);
        // dispatch user with token and email
        // then redirect
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: { email: user.email, token: idTokenResult.token },
        });

        // make api request to save /update user in mongodb
        router.push("/");
      }
    } catch (error) {
      console.log("register complete error", error.message);
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        {loading ? <h5 className="text-danger">Түр хүлээнэ үү</h5> : <h4>Complete your registration</h4>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter email"
              disabled
            />
          </div>
          <div className="form-group">
            <label className="mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Password"
              disabled={loading}
            />
          </div>
          <button className="btn btn-raised btn-primary mt-4" disabled={!email || loading}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
