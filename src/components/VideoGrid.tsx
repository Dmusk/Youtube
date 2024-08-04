import { VideoCard } from "./VideoCard";

const VIDEOS = [{
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
}, {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
}, {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
}, {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
}, {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
},
  , {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
},
  , {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
},
  , {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
},
  , {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
},
  , {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
},
  , {
  title: "Next.js And Tailwind CSS | Learn in 100 Days",
  image: "/photo.jpg",
  thumb: "/thumb.jpg",
  author: "Aadarsh Wadile",
  subs: "2M",
  views: "300K"
}];


export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map(video => <div>
        <VideoCard
          title={video.title}
          author={video.author}
          subs={video.subs}
          views={video.views}
          thumb={video.thumb}
          image={video.image} />
      </div>)}

    </div>
  )
}