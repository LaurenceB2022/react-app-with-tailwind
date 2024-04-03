import React, {useState, useRef, useEffect, createContext, useContext} from "react";
import ReactDOM from "react-dom";

const SlideshowContext = createContext();

export function Slideshow ({ children, className, style }){
    const [slideIndex, setSlideIndex] = useState(0)
    const [context, setContext] = useState({
        slides: [],
        edge: false
      });
    const timer = useRef(null);

    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          // Move deactivated slide out when edge is false
          // Move activated slide in when edge is true
          if (context.slides.length > 1 && context.edge) {
            const head = context.slides.shift();
            context.slides.push(head);
          }
          context.edge = !context.edge;
          setContext({ ...context });
        }, 2500);
    
        return () => clearTimeout(timer.current);
      });
    
      return(
        <SlideshowContext.Provider value={[context, setContext]}>
          <div
            style={{
              height: "200px",
              width: "300px",
              position: "relative",
              overflow: "hidden"
            }}>
          {children}
          </div>
        </SlideshowContext.Provider>
      )
}

export function Slide ({ children }) {
  const name = useRef(`${performance.now()}_${Math.random()}`);
  // Generate a name for this slide.
  const [context] = useContext(SlideshowContext);
  const [stage, setStage] = useState("ready");

  useEffect(() => {
    // register self with the name.
    context.slides.push(name.current);
    return () => {
      // Remove the name when slide is removed.
      const index = context.slides.indexOf(name.current);
      context.slides.splice(index, 1);
    };
  }, []);

  useEffect(() => {
    const activeName = context.slides[0];
    if (activeName === name.current) {
      setStage("on");
    }
    if (activeName !== name.current && stage === "on") {
      setStage("off");
    }
    if (activeName !== name.current && stage === "off") {
      setStage("ready");
    }
  }, [context]);

  let left = 0;
  let zIndex = 0;
  switch (stage) {
    case "ready":
      left = "100%";
      break;
    case "on":
      left = "0";
      zIndex = 1;
      break;
    case "off":
      zIndex = 0;
      break;
    default:
    }

    return (
      <div
        style={{
          transition: "0.5s",
          position: "absolute",
          top: 0,
          left: left,
          zIndex: zIndex
        }}
      >
        {children}
      </div>
    );
}