import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ShootCard from "../components/ShootCard/ShootCard";
import {TempData} from '../components/Data';
// import {users} from '../utils/firebase';

export default function Home() {
  // useEffect(()=>{
  //   console.log(users)
  // },[]);
  return (
    <>
      <Navbar />
      <section className="shootcards_section">
        <div className="container pt-3">
        {
          TempData.map((shoot,index)=>(
            <ShootCard key={index} shootData={shoot}/>  
          ))
        }
        </div>
      </section>
    </>
  );
}
