import "./index.css";
import Popup from "../Popup";

export interface IPopupLac {
  closePopup: Function;
  show: boolean;
  cb?: () => {};
}

export default function PopupLac({
  closePopup,
  show,
  cb,
}: IPopupLac) {
  return (
    <Popup className="z-[210]" closePopup={() => closePopup()} show={show}>
      <div className="text-black py-2 px-3 sm:py-5 sm:px-8 bg-full bg-bgPopupGreetingBack bg-no-repeat absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>
    </Popup>
  )
}