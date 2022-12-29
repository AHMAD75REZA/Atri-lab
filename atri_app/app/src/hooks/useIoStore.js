import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {
    "Upload1": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  },
  "home.html": {}
}});

export default useIoStore;
