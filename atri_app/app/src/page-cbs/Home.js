import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useCarousel1Cb() {

	return {  }
}
export function useTextBox2Cb() {
	const onClick = useCallback(callbackFactory("TextBox2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox3Cb() {
	const onClick = useCallback(callbackFactory("TextBox3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useCountdown1Cb() {

	return {  }
}
export function useImage1Cb() {
	const onClick = useCallback(callbackFactory("Image1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInput1Cb() {
	const onChange = useCallback(callbackFactory("Input1", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Input1", "Home", "/", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}
export function useRadio1Cb() {
	const onChange = useCallback(callbackFactory("Radio1", "Home", "/", "onChange", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "checked"
      ]
    }
  ]
}), [])
	return { onChange }
}
export function useStep1Cb() {

	return {  }
}
export function useUpload1Cb() {
	const onChange = useCallback(callbackFactory("Upload1", "Home", "/", "onChange", 
			{
  "handlers": [
    {
      "sendFile": {
        "self": true,
        "props": [
          "io",
          "files"
        ]
      }
    }
  ],
  "actions": [
    {
      "type": "file_input",
      "selector": [
        "io",
        "files"
      ]
    }
  ]
}), [])
	const onClick = useCallback(callbackFactory("Upload1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onClick }
}
export function useSlider1Cb() {
	const onChange = useCallback(callbackFactory("Slider1", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onFinish = useCallback(callbackFactory("Slider1", "Home", "/", "onFinish", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onFinish }
}