import React, { useEffect } from "react";

export default function Adsense(props) {
  const loadAds = () => {

    try {

      if (typeof window !== "undefined") {

        (window.adsbygoogle = window.adsbygoogle || []).push({});

      }

    } catch (error) {

      console.log("adsense error", error.message);

    }

  };

  useEffect(() => {

    loadAds();

  }, []);

  return (
    <ins className="adsbygoogle"
	style={props.style}
        data-ad-client='ca-pub-3967909071939660'
        data-ad-slot={props.slot}
        data-ad-format={props.format ? props.format : "auto"}
        data-full-width-responsive="true"
    ></ins>
  );
}