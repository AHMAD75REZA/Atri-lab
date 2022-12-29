import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Countdown } from "@atrilabs/react-component-manifests/src/manifests/Countdown/Countdown.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Radio } from "@atrilabs/react-component-manifests/src/manifests/Radio/Radio.tsx";
import { Step } from "@atrilabs/react-component-manifests/src/manifests/Step/Step.tsx";
import { Upload } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { Slider } from "@atrilabs/react-component-manifests/src/manifests/Slider/Slider.tsx";
import { useCarousel1Cb, useTextBox2Cb, useTextBox3Cb, useCountdown1Cb, useImage1Cb, useInput1Cb, useRadio1Cb, useStep1Cb, useUpload1Cb, useSlider1Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const Countdown1Props = useStore((state)=>state["Home"]["Countdown1"]);
const Countdown1IoProps = useIoStore((state)=>state["Home"]["Countdown1"]);
const Countdown1Cb = useCountdown1Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const Radio1Props = useStore((state)=>state["Home"]["Radio1"]);
const Radio1IoProps = useIoStore((state)=>state["Home"]["Radio1"]);
const Radio1Cb = useRadio1Cb()
const Step1Props = useStore((state)=>state["Home"]["Step1"]);
const Step1IoProps = useIoStore((state)=>state["Home"]["Step1"]);
const Step1Cb = useStep1Cb()
const Upload1Props = useStore((state)=>state["Home"]["Upload1"]);
const Upload1IoProps = useIoStore((state)=>state["Home"]["Upload1"]);
const Upload1Cb = useUpload1Cb()
const Slider1Props = useStore((state)=>state["Home"]["Slider1"]);
const Slider1IoProps = useIoStore((state)=>state["Home"]["Slider1"]);
const Slider1Cb = useSlider1Cb()

  return (<>
  <TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<Carousel className="p-Home Carousel1 bpt" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Countdown className="p-Home Countdown1 bpt" {...Countdown1Props} {...Countdown1Cb} {...Countdown1IoProps}/>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
<Input className="p-Home Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<Radio className="p-Home Radio1 bpt" {...Radio1Props} {...Radio1Cb} {...Radio1IoProps}/>
<Step className="p-Home Step1 bpt" {...Step1Props} {...Step1Cb} {...Step1IoProps}/>
<Upload className="p-Home Upload1 bpt" {...Upload1Props} {...Upload1Cb} {...Upload1IoProps}/>
<Slider className="p-Home Slider1 bpt" {...Slider1Props} {...Slider1Cb} {...Slider1IoProps}/>
  </>);
}
