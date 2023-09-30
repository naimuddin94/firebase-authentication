import { Link } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, loading } = useAuthInfo();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return console.log("Email not valid");
    }

    createUser(email, password)
      .then((result) => {
        sendEmailVerification(result.user).then(() => {
          alert("Verification sent successfully by email");
        });
        updateProfile(result.user, { displayName: name })
          .then(() => console.log("User name update successfully"))
          .catch((err) => console.log("During update profile", err));
        console.log(result.user);
      })
      .catch((err) => {
        err.message;
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-96">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label justify-start gap-3 label-text-alt">
                  All ready have a account?
                  <Link to="/login" className=" link link-hover">
                    Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                    <span className="loading loading-spinner text-error"></span>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
