import React from 'react';
import ReactDOM from 'react-dom';
import nebula from 'bespoke-theme-nebula';
import createRoot from '../../lib/create-root';
import insertSlide from '../../lib/insert-slide';
import AppContainer from '../../lib/AppContainer';
import fetchSlides, { fetchCommon } from '../../lib/fetch-slides';
import setupBespoke from '../../lib/setup-bespoke';
import '../../lib/setup-hljs';
import './style.css';
import '../../common/style/common.css';
import 'highlight.js/styles/github.css';

const slidesInfo = fetchSlides('node8');
const profile = fetchCommon()['self-introduction.md'];

const App = () => {
  const slides = insertSlide(slidesInfo.slides, profile, 1);

  return (
    <AppContainer slides={slides}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/earlyaccess/sawarabigothic.css"
      />
    </AppContainer>
  );
};

ReactDOM.render(<App />, createRoot());

setupBespoke(nebula);