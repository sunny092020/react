/* eslint-disable react/prop-types */
import "./university.css";

import { useState, useEffect } from "react";
import * as React from "react";

import { useSelector } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";

export default function UniversityItem({ university, favourites }) {
  const user = useSelector((state) => state.auth.value);
  const [favourite, setFavorite] = useState(true);

  useEffect(() => {
    setFavorite(favourites.includes(university.name));
  }, [user, university, favourites]);

  const toggleFavorite = () => {
    axios
      .post("/favourites/toggle", {
        username: user.username,
        favourite: !favourite,
        university: university.name,
      })
      .then(function () {
        setFavorite(!favourite);
      })
      .catch(function () {});
  };

  return (
    <div className="ws-tile-three-line-text">
      <span>
        <h3 className="list-h3">{university.name}</h3>
        <p className="list-p">{university.country}</p>
        <p className="list-p">{university["state-province"]}</p>
        {university.web_pages.map((url, index) => {
          return (
            <p className="list-p" key={index}>
              <a href={url}>{url}</a>
            </p>
          );
        })}
        {favourite ? (
          <FavoriteIcon onClick={toggleFavorite} className="favoriteIcon" />
        ) : (
          <FavoriteBorderIcon
            onClick={toggleFavorite}
            className="favoriteIcon"
          />
        )}
      </span>
      <br />
      <br />
    </div>
  );
}
