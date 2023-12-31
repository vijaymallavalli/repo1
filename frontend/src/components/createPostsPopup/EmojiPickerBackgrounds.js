import { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";

export default function EmojiPickerBackgrounds({ text, user, setText, type2 ,background,setbackground}) {
  const [picker, setPicker] = useState(false);
  const [showbgs, setshowbgs] = useState(false);
  const [cursor, setCursor] = useState();
  const textRef = useRef(null);
  const bgRef= useRef(null);
  useEffect(() => {
    textRef.current.selectionEnd = cursor;
  }, [cursor]);
  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursor(start.length);
  };
  const postBackgrounds = [
    "../../../images/postbackgrounds/1.jpg",
    "../../../images/postbackgrounds/2.jpg",
    "../../../images/postbackgrounds/3.jpg",
    "../../../images/postbackgrounds/4.jpg",
    "../../../images/postbackgrounds/5.jpg",
    "../../../images/postbackgrounds/6.jpg",
    "../../../images/postbackgrounds/7.jpg",
    "../../../images/postbackgrounds/8.jpg",
    "../../../images/postbackgrounds/9.jpg",
  ];
  const backgroudHandler=(i)=>{
      bgRef.current.style.backgroundImage=`url(${postBackgrounds[i]})`;
      setbackground(postBackgrounds[i]);
      bgRef.current.classList.add("bgHandler")
  }
  const backgroudremove=(i)=>{
    bgRef.current.style.backgroundImage="";
    setbackground("");
    bgRef.current.classList.remove("bgHandler")
}

  return (
    <div className={type2 ? "images_input" : ""}>
      <div className={!type2 ? "flex_center" : ""} ref={bgRef}>
        <textarea
          ref={textRef}
          maxLength="250"
          value={text}
          placeholder={`wanna make something!, ${user.first_name}`}
          className={`post_input ${type2 ? "input2" : ""}`}
          onChange={(e) => setText(e.target.value)}
          style={{
            paddingTop: `${
              background
                ? Math.abs(textRef.current.value.length * 0.1 - 32)
                : "0"
            }%`,
          }}
        ></textarea>
      </div>
      <div className={!type2 ? "post_emojis_wrap" : ""}>
        {picker && (
          <div
            className={`comment_emoji_picker ${type2 ? "movepicker2" : "rlmove"
              }`}
          >
            <Picker onEmojiClick={handleEmoji} />
          </div>
        )}
        {!type2 && <img src="../../../icons/colorful.png" alt=""
          onClick={() => {
            setshowbgs((prev) => !prev);
          }}
        />}

        {
          !type2 && showbgs && (
            <div className="post_backgrounds">
              <div className="no_bg"   
              onClick={()=>{
                    backgroudremove()
                  }}></div>
              {
                postBackgrounds.map((bg, i) => (
                  <img 
                  src={bg} 
                  key={i} 
                  alt="" 
                  onClick={()=>{
                    backgroudHandler(i)
                  }}
                  />
                ))
              }

            </div>
          )
        }
        <i
          className={`emoji_icon_large ${type2 ? "moveleft" : ""}`}
          onClick={() => {
            setPicker((prev) => !prev);
          }}
        ></i>
      </div>
    </div>
  );
}
