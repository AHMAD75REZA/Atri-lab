import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Carousel1": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "Portfolio Creater"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Countdown1": {
      "custom": {
        "days": 1,
        "hours": 1,
        "minutes": 1,
        "seconds": 1,
        "frozen": true,
        "showDays": true,
        "showHours": true,
        "showMinutes": true,
        "showSeconds": true
      },
      "callbacks": {}
    },
    "Image1": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "custom": {
        "value": "",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "Radio1": {
      "custom": {
        "name": "",
        "label": "Radio",
        "checked": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Step1": {
      "custom": {
        "color": "#336699",
        "current": 1,
        "title": [],
        "description": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload1": {
      "custom": {
        "multiple": false,
        "showFilename": true,
        "text": "Upload",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Slider1": {
      "custom": {
        "minValue": 0,
        "maxValue": 100,
        "value": 50
      },
      "callbacks": {}
    }
  },
  "home.html": {}
}};

useStore.setState(desktopModeProps);

export default useStore;
