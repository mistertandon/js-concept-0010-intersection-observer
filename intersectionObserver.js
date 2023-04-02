export const setupIntersectionObserver = () => {

  let video = document.querySelector("video");
  let hasVideoPlayed = false;
  video.addEventListener("pause", () => {
    console.log("Video paused by browser");
  });

  video.addEventListener("play", () => {
    console.log("Video play by browser");
  });

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        let {
          intersectionRatio,
          target: { paused },
        } = entry;

        console.log("entry", entry);
        let shouldCheck = true;

        if (shouldCheck && intersectionRatio < 1) {
          console.log("condition 1");
          video.pause();
          shouldCheck = false;
        }

        if (shouldCheck && intersectionRatio === 1 && !hasVideoPlayed) {
          console.log("condition 2");
          shouldCheck = false;
          hasVideoPlayed = true;
          video.play();
        }

        if (
          shouldCheck &&
          intersectionRatio === 1 &&
          hasVideoPlayed &&
          paused
        ) {
          console.log("condition 3");
          shouldCheck = false;
          video.play();
        }
        console.log("======================================\n\n");
      });
    },
    { threshold: 1 }
  );

  observer.observe(video);
};
