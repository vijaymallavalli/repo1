import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/createPost";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import SendVerification from "../../components/home/sendVerfication";
import Stories from "../../components/home/stories";
import "./style.css";
import CreatePostPopup from "../../components/createPostsPopup";
export default function Home({setVisible}) {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="home">
      <Header />
      {/* <LeftHome user={user} /> */}
      <Stories />
      <div className="home_middle">
        {user.verified === false && <SendVerification user={user} />}
        <CreatePost user={user} setVisible={setVisible}/>
      </div>
      <RightHome user={user} />
    </div>
  );
}
