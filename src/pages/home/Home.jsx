import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from 'axios'

const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandom = async () => {
      try {
        const res = await axios.get(`https://netflix-uuj3.onrender.com/list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers:{
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
          },
        }
        );

      console.log(res.data);
      setList(res.data)

      } catch (err) {
        console.log(err);
      }
    }
    getRandom();
  }, [type, genre])

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre}/>
      {list.map(list=>(

      <List list={list}/>
      ))}
    </div>
  );
};

export default Home;
