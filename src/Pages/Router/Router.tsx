import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contactme from "../Contactme/Contactme";
import Gallery from "../Gallery";
import PagesWrapper from "../PagesWrapper";
import Aboutme from "../Aboutme/Aboutme";
import PostContent from "../PostContent";

import SignIn from "../SignIn";
import SignUp from "../SingUp";
import Admin from "../Admin";
import AdminDashboard from "../AdminDashboard";

export enum PathNames {
  Home = `/`,
  SignUp = "/signup",
  SignIn = "/login",
  Gallery = `/gallery`,
  Contact = `/contactme`,
  About = `/aboutme`,
  GalleryPhoto = "/gallery/albums/:id/photos",
  Admin = `/admin`,
  AdminDasboard = "/users",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper></PagesWrapper>}>
          <Route
            path={PathNames.Contact}
            element={<Contactme></Contactme>}
          ></Route>
          <Route path={PathNames.About} element={<Aboutme></Aboutme>}></Route>
          <Route path={PathNames.SignUp} element={<SignUp></SignUp>}></Route>
          <Route path={PathNames.SignIn} element={<SignIn></SignIn>}></Route>
          <Route path={PathNames.Gallery} element={<Gallery></Gallery>}></Route>
          <Route path={PathNames.Admin} element={<Admin></Admin>}></Route>
          <Route
            path={PathNames.GalleryPhoto}
            element={<PostContent></PostContent>}
          ></Route>
          <Route
            path={PathNames.AdminDasboard}
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
        </Route>
        {/* <Route
          path={`*`}
          element={<Navigate to={PathNames.Home}></Navigate>}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
