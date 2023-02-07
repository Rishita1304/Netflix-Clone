import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Watch() {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getFeatured = async () => {
      try {
        const res = await axios.get(`https://netflix-uuj3.onrender.com/movie/`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFeatured();
  }, []);
  console.log(content);
  return (
    <div className="watch">
      <Link to='/'>
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={content?.trailer} />
    </div>
  );
}
