import { timeStamp } from "console";
import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpeg",
    thumbImage: "thumb.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpeg",
    thumbImage: "thumb.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((vide) => (
        <div>
          <VideoCard
            title={vide.title}
            image={vide.image}
            thumbImage={vide.thumbImage}
            author={vide.author}
            views={vide.views}
            timestamp={vide.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
