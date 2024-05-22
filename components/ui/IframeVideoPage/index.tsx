import styles from "./iframe-video-page.module.css";
export interface IframeVideoPage {
  src: string;
}

function IframeVideoPage({ src }: IframeVideoPage) {
  return (
    <section id="video" className="w-full flex justify-center">
      <div className={styles.videoContainer}>
        <iframe
          src={src}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default IframeVideoPage;
