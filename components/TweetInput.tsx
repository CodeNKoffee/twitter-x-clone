import { db, storage } from "@/firebase";
import { handleLoginModal } from "@/redux/modalSlice";
import { RootState } from "@/redux/store";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TweetInput() {
  const user = useSelector((state: RootState) => state.user);

  const [text, setText] = useState("");
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const buffer = new ArrayBuffer(10); // Create an ArrayBuffer with a length of 10 bytes

  async function sendTweet() {
    if (!user.username) {
      dispatch(handleLoginModal());
      return;
    }

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });

    if (image) {
      // Convert ArrayBuffer to Base64 string
      const base64Image =
        typeof image === "string" ? image : arrayBufferToBase64(image);

      const imageRef = ref(storage, `tweetImages/${docRef.id}`);
      const uploadImage = await uploadString(imageRef, base64Image, "data_url");
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    }

    setText("");
    setImage(null);
    setLoading(false);
  }

  function addImagetoTweet(e: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.addEventListener("load", (e) => {
      reader.addEventListener("load", (e) => {
        const image = e.target ? e.target.result : null;
        setImage(() => image);
      });
    });
  }

  // Helper function to convert ArrayBuffer to Base64 string
  function arrayBufferToBase64(buffer: ArrayBuffer): string {
    const binary = new Uint8Array(buffer);
    let base64String = "";
    binary.forEach((byte) => {
      base64String += String.fromCharCode(byte);
    });
    return btoa(base64String);
  }

  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src={user.photoUrl || "/assets/twitter-logo.png"}
      />

      {loading && <h1 className="text-2xl text-gray-500">Uploading post...</h1>}

      {!loading && (
        <div className="w-full">
          <textarea
            placeholder="What's on your mind?"
            className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />

          {image && (
            <div className="relative mb-4">
              <div
                onClick={() => setImage(null)}
                className="absolute top-1 left-1
            bg-[#272c26] rounded-full w-8 h-8 flex justify-center
            items-center cursor-pointer hover:bg-white hover:bg-opacity-10
            "
              >
                <XIcon className="h-5" />
              </div>
              <img
                className="rounded-2xl max-h-80 object-contain"
                src={typeof image === "string" ? image : ""}
              />
            </div>
          )}

          <div className="flex justify-between border-t border-gray-700 pt-4">
            {/* ICNONS DIV */}
            <div className="flex space-x-2">
              <div
                onClick={() =>
                  filePickerRef.current
                    ? filePickerRef.current.click()
                    : console.log("")
                }
                className="icon__animation"
              >
                <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              </div>
              <input
                ref={filePickerRef}
                onChange={addImagetoTweet}
                className="hidden"
                type="file"
              />
              <div className="icon__animation">
                <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
              </div>
              <div className="icon__animation">
                <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
              </div>
              <div className="icon__animation">
                <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
              </div>
              <div className="icon__animation">
                <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
              </div>
            </div>

            <button
              onClick={sendTweet}
              disabled={!text && !image}
              className="bg-[#1d9bf0] rounded-full px-4 py-1.5
          disabled:opacity-50
          "
            >
              Tweet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
