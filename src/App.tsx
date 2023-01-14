import * as React from 'react'
import './App.css'
// import nhac from "./assets/nhac.mp3"
import dia from "./assets/dia.png"
import vunginox from "./assets/vunginox.png"
import huu from "./assets/huu.png";
import bau from "./assets/bau.png";
import ga from "./assets/ga.png";
import ca from "./assets/ca.png";
import cua from "./assets/cua.png";
import tom from "./assets/tom.png";
import { toast } from 'react-toastify';
import Draggable from 'react-draggable';
import PopupLac from './components/PopupLac'

const nhac = require("./assets/nhacnen.mp3")

interface IRamdomArray {
  linkImg: string;
  code: number;
}

const randomArray: Array<IRamdomArray> = [
  {
    linkImg: huu,
    code: 1,
  },
  {
    linkImg: bau,
    code: 2,
  },
  {
    linkImg: ga,
    code: 3,
  },
  {
    linkImg: ca,
    code: 4,
  },
  {
    linkImg: tom,
    code: 5,
  },
  {
    linkImg: cua,
    code: 6,
  },
]

export interface ILayoutProps {
  children?: React.ReactNode
}

// const useAudio = (url: string, status: boolean) => {
//   const [audio] = React.useState(new Audio(url));
//   const [playing, setPlaying] = React.useState(status);
//   const toggle = () => setPlaying(!playing);

//   React.useEffect(() => {
//     playing ? audio.play() : audio.pause();
//   },
//     [playing]
//   );

//   React.useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

export default function App(props: ILayoutProps) {
  const { children } = props;
  // const [playing, toggle] = useAudio(nhacnen, true);
  // const [nhacLac, toggleNhacLac] = useAudio(nhac, false);
  const [modia, setModia] = React.useState<boolean>(false);
  const [listQua, setListQua] = React.useState<Array<number>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [position, setPosition] = React.useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const [audio] = React.useState(new Audio(nhac));
  const [playing, setPlaying] = React.useState(true);
  const toggle = () => setPlaying(!playing);

  React.useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  React.useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  const trackPos = (data: any) => {
    setPosition({ x: data.x, y: data.y });
  };

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const arrayQua = () => {
    return setListQua([random(1, 7), random(1, 7), random(1, 7)]);
  }

  React.useEffect(() => {
    arrayQua()
  }, [])

  return (
    <div>
      <div className='w-screen h-screen relative overflow-hidden bg-index bg-contain md:bg-cover'>
        <div className="pyro"><div className="before"></div><div className="after"></div></div>
        <button className='absolute w-16 h-16 rounded-full bg-orange-300 bottom-7 right-7 transition-all ease-in-out hover:animate-bounce font-bold text-stone-900' onClick={() => toggle()}>{playing ? "Pause" : "Play"}</button>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-[90%] md:w-1/2 p-3'>
            <div className='w-full h-auto flex items-center justify-center'>
              <div className='relative w-full flex items-center justify-center'>
                <img src={dia} className="relative" alt="Sample_image" />
                <div className='absolute w-14 h-14 md:w-20 md:h-20 rounded-full left-[25%] md:left-[30%] top-[35%] bg-gradiallr5dfff4 bg-white'>
                  <img src={randomArray.find((item) => item.code === listQua[0])?.linkImg} className="relative" alt="Sample_image" />
                </div>
                <div className='absolute w-14 h-14 md:w-20 md:h-20 left-[55%] rounded-full top-[30%] bg-gradiallrf6dc00'>
                  <img src={randomArray.find((item) => item.code === listQua[1])?.linkImg} className="relative" alt="Sample_image" />
                </div>
                <div className='absolute w-14 h-14 md:w-20 md:h-20 left-[45%] rounded-full top-[50%] bg-gradiallr13f9b6'>
                  <img src={randomArray.find((item) => item.code === listQua[2])?.linkImg} className="relative" alt="Sample_image" />
                </div>
                <Draggable
                  defaultPosition={{ x: 0, y: 0 }}
                  onDrag={(e, data) => trackPos(data)}
                  position={position}
                >
                  <img src={vunginox} className={`absolute w-[472px] transition-all cursor-pointer ease-in-out ${modia ? '-translate-y-52 md:translate-x-[400px]' : 'translate-y-0 md:-translate-x-1'}`} alt="Sample_image" />
                </Draggable>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
              <div className='bg-gradiallr13f9b6 w-3/4 md:w-28 text-center font-bold rounded-lg text-lg py-2 cursor-pointer hover:scale-110 hover:opacity-80 transition-all ease-in-out'
                onClick={() => {
                  setModia(true);
                  setPosition({ x: 300, y: -200 });
                }}
              >Mở đĩa</div>
              <div className={`bg-gradiallrf6dc00 w-3/4 md:w-28 text-center font-bold rounded-lg text-lg py-2 cursor-pointer hover:scale-110 hover:opacity-80 transition-all ease-in-out ${modia && 'opacity-70 cursor-not-allowed'}`}
                onClick={() => {
                  if (!modia && position.x === 0 && position.y === 0) {
                    arrayQua();
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 2000)
                  } else {
                    toast.warning("Đóng nắp để lắc tiếp nào.");
                  }
                }}
              >Lắc quà</div>
              <div className='bg-gradiallr5efff5 w-3/4 md:w-28 text-center font-bold rounded-lg text-lg py-2 cursor-pointer hover:scale-110 hover:opacity-80 transition-all ease-in-out'
                onClick={() => {
                  setModia(false);
                  setPosition({ x: 0, y: 0 });
                }
                }
              >Chơi lại</div>
            </div>
          </div>
        </div>
        <p className='absolute bottom-3 right-28 text-4xl font-bold opacity-20 pointer-events-none'>NVX</p>
        <PopupLac show={isLoading} closePopup={() => console.log("")} />
      </div>
    </div>
  )
}
