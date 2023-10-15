import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import { AiOutlineSend, AiOutlinePaperClip } from "react-icons/ai";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Context } from "../conext/context";

const MessageInput = ({ roomName, userId }) => {
  const [messageText, setMessageText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const inputRef = useRef(null);

  const [socketUrl, setSocketUrl] = useState(
    `wss://baobabpad-334a8864da0e.herokuapp.com/ws/chat/${userId}/${userId}${roomName}/`
  );
  const { readyState, sendJsonMessage } =
    useWebSocket(socketUrl);

  const handleSendInput = () => {
    sendJsonMessage({
      type: "chat_message",
      message: messageText,
    });
    console.log("Message sent:", messageText);
    setMessageText("");
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleClickOutsideProfile = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideProfile);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideProfile);

    };
  }, []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
  return (
    <div className="">
      <div className="absolute bottom-4 md:px-10 p-1 left-10 right-10 rounded">
        <div className="relative flex gap-2">
          <div className="relative grow">
            <textarea
              id="OrderNotes"
              className="mt-2 w-full rounded-lg border-gray-200 align-top shadow border sm:text-sm relative p-1 px-2"
              rows="4"
              placeholder="Enter message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            ></textarea>
            {/* {connectionStatus} */}
            <button
              className="absolute top-8 right-2 bg-gray-400 text-white p-1 rounded-full"
              style={{ cursor: "pointer" }}
              onClick={() => handleOpenMenu()}
            >
              {/* {connectionStatus} */}
              < AiOutlinePaperClip />
            </button>
          </div>

          <button
            onClick={() => {
              handleSendInput();
            }}
            className="bg-black text-white rounded p-1 px-2 h-8 border self-center"
          >
            <AiOutlineSend />
          </button>
        </div>
        {isMenuOpen && (
          <div
            className="mt-2 p-2 bottom-10 right-3  rounded  absolute"
            ref={inputRef}
          >
            {/* Menu content (file types) */}
            <div
              className=" end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              <div className="p-2">
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Image
                </a>

                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Document
                </a>

                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Video
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageInput;
