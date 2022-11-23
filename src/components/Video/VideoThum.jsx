import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoThum({ id, video }) {
  const { publishedAt, title, description, thumbnails } = video;
  return (
    <>
      <Link to={`/detail/${id}`}>
        publishedAt:{publishedAt}
        title:{title}
        description:{description}
        thum:{thumbnails.default.url}
      </Link>
    </>
  );
}
