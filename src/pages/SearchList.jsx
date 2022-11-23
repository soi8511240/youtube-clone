import React from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../components/Video/VideoList';

export default function SearchDetail() {
  const { word } = useParams();
  return (
    <>
      <p>'{word}'의 검색결과 입니다.</p>
      <VideoList text={word} />
    </>
  );
}
