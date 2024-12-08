import { GoHome } from "react-icons/go";
import YoutubeShorts from "../assets/images/youtube-shorts-logo.png";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineLightbulb } from "react-icons/md";
import { MdOutlinePodcasts } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

export const SIDEBAR1 = [
  {
    id: 1,
    title: "Home",
    icon: <GoHome />,
  },
  {
    id: 2,
    title: "Shorts",
    icon: <img src={YoutubeShorts} alt="youtube-shorts-logo" className="h-7" />,
  },
  {
    id: 3,
    title: "Subscriptions",
    icon: <MdOutlineSubscriptions />,
  },
];

export const SIDEBAR2 = [
  {
    id: 1,
    title: "History",
    icon: <MdHistory />,
  },
  {
    id: 2,
    title: "Playlists",
    icon: <MdPlaylistPlay />,
  },
  {
    id: 3,
    title: "You videos",
    icon: <GoVideo />,
  },
  {
    id: 4,
    title: "Your courses",
    icon: <MdOutlineLightbulb />,
  },
  {
    id: 5,
    title: "Your podcasts",
    icon: <MdOutlinePodcasts />,
  },
  {
    id: 6,
    title: "Watch Later",
    icon: <MdOutlineWatchLater />,
  },
  {
    id: 7,
    title: "Liked videos",
    icon: <AiOutlineLike />,
  },
];
