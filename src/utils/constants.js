const GOOGLE_API_KEY = "AIzaSyAPnzyAqwKFf9DYOH3NhGmLoIaPnQTAL6I";
const SERPAPI_KEY =
  "236c9ef94fe802bcd2a67b8a9d7319c6318a4433b227d36008c3273bff48b7f0";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_VIDEOS_API = (query) => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${GOOGLE_API_KEY}`;
};

export const YOUTUBE_COMMENTS_API = (videoId) => {
  return `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${GOOGLE_API_KEY}`;
};

export const YOUTUBE_VIDEO_BY_ID = (videoId) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`;
};

export const YOUTUBE_CHANNEL_BY_ID = (channelId) => {
  return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOOGLE_API_KEY}`;
};

export const YOUTUBE_SEARCH_SUGGESTION = (query) => {
  return `https://serpapi.com/search.json?engine=google_autocomplete&q=${query}&hl=en&gl=us&api_key=${SERPAPI_KEY}`;
};

export const integerToFormat = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};

export const timeAgo = (date) => {
  const now = new Date();
  const past = new Date(date);
  const seconds = Math.floor((now - past) / 1000);

  const units = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(seconds / unit.seconds);
    if (interval > 0) {
      return interval === 1
        ? `${interval} ${unit.label} ago`
        : `${interval} ${unit.label}s ago`;
    }
  }
  return "just now";
};

export const BUTTON_NAMES = [
  { id: 1, name: "Fitness" },
  { id: 2, name: "Web Development" },
  { id: 3, name: "Gaming" },
  { id: 4, name: "The Hanuman" },
  { id: 5, name: "Programming" },
  { id: 6, name: "Cyber Security" },
  { id: 7, name: "Marvel Trailers" },
  { id: 8, name: "Technology" },
  { id: 9, name: "Soundtracks" },
  { id: 10, name: "Dsa" },
  { id: 11, name: "Recently Uploaded" },
  { id: 12, name: "Gadgets" },
  { id: 13, name: "Cooking Techniques" },
];
