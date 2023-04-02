import "./style.css";
import { setupIntersectionObserver } from "./intersectionObserver.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Intersection observer</h1>
    <video muted controls style="height: 700px; margin-top: 45vh;" >
      <source
        src="https://ucarecdn.com/33fa1b5d-a164-4178-908c-5a51f872fcef/video.webm"
        type="video/webm"
      />
      <source
        src="https://ucarecdn.com/1b63a65c-7796-4b23-a6fc-bb751f1221ed/video.ogg"
        type="video/ogg"
      />
      <source
        src="https://ucarecdn.com/ec3f39c9-be9f-4231-a4db-d7fcbd209e71/video.mp4"
        type="video/mp4"
      />
    </video>
  </div>
`;

setupIntersectionObserver();
