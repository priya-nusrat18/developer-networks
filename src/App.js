import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import setAuthToken from "./utili/setAuthToken";
import { loadUser } from "./Redux/Actions/AuthActions";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/Auth/PrivateRoute";
import CreateProfile from "./components/ProfileForm/CreateProfile";
import EditProfile from "./components/ProfileForm/EditProfile";
import AddExperience from "./components/ProfileForm/AddExperience";
import AddEducation from "./components/ProfileForm/AddEducation";
import Profiles from "./components/Profiles/Profiles";
import Profile from "./components/ViewProfile/Profile";

import Post from "./components/Post/Post";
import Posts from "./components/Posts/Posts";
import Alert from "./utili/Alert";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/*" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/create-profile" element={<CreateProfile />} />

            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/edit-profile" element={<EditProfile />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/add-experience" element={<AddExperience/>} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/add-education" element={<AddEducation/>} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/posts" element={<Posts/>} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/posts/:id" element={<Post/>} />
            </Route>

            <Route>404 Not Found!</Route>
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
