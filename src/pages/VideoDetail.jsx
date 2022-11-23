import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import VideoList from '../components/Video/VideoList';

export default function VideoDetail() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const {
    isLoading,
    error,
    data: video,
  } = useQuery(
    ['videoDetail', id],
    async () => {
      return fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyCuykthN9JYnA2j7kVUKxgK8wQAAjPBrv8&maxResults=20&part=snippet,contentDetails,statistics,status&regionCode=KR`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        });
    },
    { staleTime: 1000 * 60 * 60 * 24 }
  );
  if (isLoading) return 'Loading...';
  if (error) return `error! ${error}`;

  return (
    <div>
      <iframe
        width="725"
        height="408"
        src={`https://www.youtube.com/embed/${id}`}
        title={video.items[0].snippet.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <VideoList />
    </div>
  );
}
