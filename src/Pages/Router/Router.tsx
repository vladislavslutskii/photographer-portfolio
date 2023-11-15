import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contactme from "../Contactme/Contactme";
import Gallery from "../Gallery";

import PagesWrapper from "../PagesWrapper";
import Aboutme from "../Aboutme/Aboutme";
import PhotoCard from "../../Components/PhotoCard";
import GallerySlider from "../../Components/GallerySlider";
import PostContent from "../PostContent";

export enum PathNames {
  Home = `/`,
  Gallery = `/gallery`,
  Contact = `/contactme`,
  About = `/aboutme`,
  GalleryPhoto = "/gallery/albums/:id/photos",
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
          <Route
            path={PathNames.Gallery}
            // element={<PhotoCard></PhotoCard>}
            element={<Gallery></Gallery>}
            // element={<GallerySlider></GallerySlider>}
          ></Route>
          <Route
            path={PathNames.GalleryPhoto}
            element={<PostContent></PostContent>}
          ></Route>
        </Route>
        <Route
          path={`*`}
          element={<Navigate to={PathNames.Home}></Navigate>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
