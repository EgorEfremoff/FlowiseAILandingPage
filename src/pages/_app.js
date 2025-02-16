import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import { initGAds, gtag_report_conversion } from 'ads';
// Load DM Sans typeface
import 'typeface-dm-sans';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  useEffect(() => {
    initGAds();
  }, []);
  return <Component {...pageProps} />;
}
