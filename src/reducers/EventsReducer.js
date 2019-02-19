import {
  ADD_EVENT,
  GET_EVENTS,
  DELETE_EVENT,
  DELETE_EVENT2,
  CHECKTOUPDATE_EVENT,
  CHECKTOUPDATE_EVENT2,
  STAGE_EVENT,
  UPDATE_EVENT,
  ADD_IMAGES,
  STAGE_EVENT2,
  ADD_EVENT2,
  UPDATE_EVENT2
} from "../actions/actionTypes";

const uuidv1 = require("uuid/v1");
const initialState = {
  articles: [
    {
      id: uuidv1(),
      title: "Lorem ipsum dolor ",
      description:
        "Lorem ipsum Sanic cursus mollis urna, eget finibus elit feugiat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus sapien risus, sagittis sodales magna aliquam viverra. Nullam nec condimentum sem. Aenean non auctor mi. Sed nisl purus, imperdiet sollicitudin diam mattis, tempor commodo turpis. Fusce maximus lacus ut magna sagittis, placerat laoreet lacus vehicula. Morbi egestas lacus id nibh pretium, quis placerat tortor pulvinar. Vivamus sagittis rhoncus neque, et finibus purus tristique et. Nullam velit lorem, viverra eget consequat eget, scelerisque in do dolor sit amet, consectetur adipiscing elit. Sed eget sapien eu dui fermentum vestibulum. Aenean posuere vestibulum lectus, ut venenatis enim blandit eget. Nunc eget erat in eros suscipit pretium. Nullam vehicula justo ut leo eleifend commodo. Nullam placerat efficitur eleifend. In ullamcorper, mi a tincidunt viverra, turpis elit interdum ligula, at tincidunt tellus dui a leo. Vestibulum iaculis volutpat risus vel dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec a dignissim metus, non efficitur est. ",
      author: "dolor sit amet"
    },
    {
      id: uuidv1(),
      title: "Aenean posuere vestibulum ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien eu dui fermentum vestibulum. Aenean posuere vestibulum lectus, ut venenatis enim blandit eget. Nunc eget erat in eros suscipit pretium. Nullam vehicula justo ut leo eleifend commodo. Nullam placerat efficitur eleifend. In ullamcorper, mi a tincidunt viverra, turpis elit interdum ligula, at tincidunt tellus dui a leo. Vestibulum iaculis volutpat risus vel dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec a dignissim metus, non efficitur est. ",
      author: "Sed eget sapien"
    },
    {
      id: uuidv1(),
      title: "fermentum vestibulum ",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Sed eget sapien eu dui fermentum vestibulum. Aenean posuere vestibulum lectus, ut venenatis enim blandit eget. Nunc eget erat in eros suscipit pretium. Nullam vehicula justo ut leo eleifend commodo. Nullam placerat efficitur eleifend. In ullamcorper, mi a tincidunt viverra, turpis elit interdum ligula, at tincidunt tellus dui a leo. Vestibulum iaculis volutpat risus vel dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu Sanic cursus mollis urna, eget finibus elit feugiat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus sapien risus, sagittis sodales magna aliquam viverra. Nullam nec condimentum sem. Aenean non auctor mi. Sed nisl purus, imperdiet sollicitudin diam mattis, tempor commodo turpis. Fusce maximus lacus ut magna sagittis, placerat laoreet lacus vehicula. Morbi egestas lacus id nibh pretium, quis placerat tortor pulvinar. Vivamus sagittis rhoncus neque, et finibus purus tristique et. Nullam velit lorem, viverra eget consequat eget, scelerisque in do Sanic cursus mollis urna, eget finibus elit feugiat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus sapien risus, sagittis sodales magna aliquam viverra. Nullam nec condimentum sem. Aenean non auctor mi. Sed nisl purus, imperdiet sollicitudin diam mattis, tempor commodo turpis. Fusce maximus lacus ut magna sagittis, placerat laoreet lacus vehicula. Morbi egestas lacus id nibh pretium, quis placerat tortor pulvinar. Vivamus sagittis rhoncus neque, et finibus purus tristique et. Nullam velit lor Sanic cursus mollis urna, eget finibus elit feugiat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus sapien risus, sagittis sodales magna aliquam viverra. Nullam nec condimentum sem. Aenean non auctor mi. Sed nisl purus, imperdiet sollicitudin diam mattis, tempor commodo turpis. Fusce maximus lacus ut magna sagittis, placerat laoreet lacus vehicula. Morbi egestas lacus id nibh pretium, quis placerat tortor pulvinar. Vivamus sagittis rhoncus neque, et finibus purus tristique et. Nullam velit lorem, viverra eget consequat eget, scelerisque in doem, viverra eget consequat eget, scelerisque in dos. Donec a dignissim metus, non efficitur est. ",
      author: "Lorem Ipsumivch"
    },
    {
      id: uuidv1(),
      title: "Sed eget sapien ",
      description:
        "Lorem ipsor sit amet, consectetur adipiscing elit. Sed eget sapien eu dui fermentum vestibulum. Aenean posuere vestibulum lectus, ut venenatis enim blandit eget. Nunc eget erat in eros suscipit pretium. Nullam vehicula justo ut leo eleifend commodo. Nullam placerat efficitur eleifend. In ullamcorper, mi a tincidunt viverra, turpis elit interdum ligula, at tincidunt tellus dui a leo. Vestibulum iaculis volutpat risus vel dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec a dignissim metus, non efficitur est. ",
      author: "adipiscing elit"
    },
    {
      id: uuidv1(),
      title: "consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien eu dui fermentum vestibulum. Aenean posuere vestibulum lectus, ut venenatis enim blandit eget. Nunc eget erat in eros suscipit pretium. Nullam vehicula justo ut leo eleifend commodo. Nullam placerat efficitur eleifend. In ullamcorper, mi a tincidunt viverra, turpis elit interdum ligula, at tincidunt tellus dui a leo. Vestibulum iaculis volutpat risus vel dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec a dignissim metus, non efficitur est. ",
      author: "Aenean posuere "
    }
  ],
  mainStage2: [
    {
      id: "",
      title: "",
      description: "",
      author: ""
    }
  ],
  events: [
    {
      id: uuidv1(),
      title: "Голямото откриване",
      date: "12/28/2018 от 12:00 до 15:00 часа",
      images: [
        "https://cdn.shibe.online/shibes/fca56fd4cb7926910a63d55ad650c2d1dfa75cf9.jpg",
        "https://cdn.shibe.online/shibes/a0e74b872a891ab129528edb38de400ce18af455.jpg",
        "https://cdn.shibe.online/shibes/096d0fc279a4fd632e52622856cf2a3145290b94.jpg",
        "https://cdn.shibe.online/shibes/27936f4e250bb2be24d35e5b3e661518e7a139bb.jpg",
        "https://cdn.shibe.online/shibes/8145bedb5c6c09fb67e6c080725a667553c403b6.jpg"
      ],
      location: "eget finiborem ipsum dolor sit amet, c",
      description:
        "Sanic cursus mollis urna, eget finibus elit feugiat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus sapien risus, sagittis sodales magna aliquam viverra. Nullam nec condimentum sem. Aenean non auctor mi. Sed nisl purus, imperdiet sollicitudin diam mattis, tempor commodo turpis. Fusce maximus lacus ut magna sagittis, placerat laoreet lacus vehicula. Morbi egestas lacus id nibh pretium, quis placerat tortor pulvinar. Vivamus sagittis rhoncus neque, et finibus purus tristique et. Nullam velit lorem, viverra eget consequat eget, scelerisque in dolor.",
      tax: "10лв",
      note: "orem ipsum dolor sit amet "
    },
    {
      id: uuidv1(),
      title: "Важното събрание",
      date: "10/28/2018 от 16:00 до 18:00 часа",
      images: [
        "https://cdn.shibe.online/shibes/cf5a362d4cc2e1d6710beda4fb68148795f7d829.jpg",
        "https://cdn.shibe.online/shibes/1178b80624703d5b749dea43ddb67071da163bb2.jpg",
        "https://cdn.shibe.online/shibes/b0e278452f3d35d0d007c009bd42f42ae9025f0d.jpg",
        "https://cdn.shibe.online/shibes/997455bccf98e5b2c6c299925a904c30f0236a3d.jpg"
      ],
      location: "eget finorem ipsum dolor sit amet, c",
      description:
        "Nunc eu pretium nibh. Quisque tempus, risus sed rhoncus commodo, leo ipsum euismod felis, a lobortis tellus libero sed metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut ut est purus. Vestibulum a tincidunt turpis. Sed ornare ornare leo, maximus malesuada mi mattis quis. Curabitur lobortis fringilla posuere. Cras vel imperdiet tortor, a pellentesque justo. Donec vestibulum lectus dui, id hendrerit mauris maximus quis. Cras ac volulentesque a. Quisque sapien augue, ultricies ut eros et, dapibus rutrum enim. Curabitur purus lacus, euismod non leo vel, vestibulum vulputate nibh. Pellentesque non velit nulla.",
      tax: "3лв",
      note: "orem ipsum dolor sit amet orem ipsum dolor sit amet"
    },
    {
      id: uuidv1(),
      title: "Разходка в парка",
      date: "19/28/2018 от 12:00 до 11:00 часа",
      images: [
        "https://cdn.shibe.online/shibes/86449f090bae591828eb583b65c5f551c97f85d1.jpg",
        "https://cdn.shibe.online/shibes/d2b6529f6eba74ba2d5311dbe165f7e2509fb48d.jpg",
        "https://cdn.shibe.online/shibes/e19d724fe49ae5fbf0cc07507ccf422cfc45fe19.jpg",
        "https://cdn.shibe.online/shibes/623ee33bd07cb9dffa4363db992088554a7b7093.jpg",
        "https://cdn.shibe.online/shibes/3f8e6501626a074e17edb0c7db26942765374cd1.jpg"
      ],
      location: "eget. Lorem ipsum dolor sit amet, c",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod ipsum, sit amet condimentum augue. Mauris elementum tellus sit amet pellentesque posuere. Vestibulum sed dictum lectus. Vivamus in luctus tortor. Curabitur sit amet varius velit, non aliquam mi. Maecenas vel tincidunt tortor. Duis imperdiet, tortor ut accumsan iaculis, nisl felis cursus nulla, at viverra sapien orci id leo. Ut in scelerisque metus, porttitor lacinia elit. Phasellus consequat erat ac consectetur fringilla. Nulla lacinia nunc hendrerit, pretium mi sed, venenatis sapien. In rutrum suscipit nibh sit amet interdum. Vestibulum eros arcu, laoreet eu libero non, malesuada pharetra est.",
      tax: "5лв",
      note: "orem ipsum dolor sit amet"
    },
    {
      id: uuidv1(),
      title: "На плажа",
      date: "19/24/2018 от 12:00 до 18:00 часа",
      images: [
        "https://cdn.shibe.online/shibes/42d20dc6c3da77034a24eef875394d6285abc794.jpg",
        "https://cdn.shibe.online/shibes/a434525d0aea62b3195cd24c3f0a16828cb7a555.jpg",
        "https://cdn.shibe.online/shibes/4ffe3e30fe2c22cb982e9a78c1b09dba7346cdb8.jpg",
        "https://cdn.shibe.online/shibes/a6118d1d8e608854fbea63b3c7cc47b4db7361b6.jpg",
        "https://cdn.shibe.online/shibes/3eec5f2b13553977ad45ad4c53889f0ce80e9138.jpg"
      ],
      location: "eget . Lorem ipsum dolor sit amet, c",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod ipsum, sit amet condimentum augue. Mauris elementum tellus sit amet pellentesque posuere. Vestibulum sed dictum lectus. Vivamus in luctus tortor. Curabitur sit amet varius velit, non aliquam mi. Maecenas vel tincidunt tortor. Duis imperdiet, tortor ut accumsan iaculis, nisl felis cursus nulla, at viverra sapien orci id leo. Ut in scelerisque metus, porttitor lacinia elit. Phasellus consequat erat ac consectetur fringilla. Nulla lacinia nunc hendrerit, pretium mi sed, venenatis sapien. In rutrum suscipit nibh sit amet interdum. Vestibulum eros arcu, laoreet eu libero non, malesuada pharetra est.",
      tax: "Вход свободен",
      note: "Нашето първо събитие"
    }
  ],
  toEditOrNot: {
    showEditableList: false
  },

  toEditOrNot2: {
    showEditableList: false
  },

  mainStage: [
    {
      id: "",
      title: "",
      images: [],
      date: "",
      location: "",
      description: "",
      tax: "",
      note: ""
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGES:
      return {
        ...state,

        events: state.events.map(eve => {
          if (eve.id === action.payload.id) {
            let event = {
              id: eve.id,
              title: eve.title,
              date: eve.date,
              tax: eve.tax,
              note: eve.note,
              description: eve.description,
              location: eve.location,
              images: eve.images.concat(action.payload.images)
            };
            return event;
          } else {
            return eve;
          }
        })
      };
    case GET_EVENTS:
      return {
        ...state
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(event =>
          event.id === action.payload.id ? (event = action.payload) : event
        )
      };

    case UPDATE_EVENT2:
      return {
        ...state,
        articles: state.articles.map(article =>
          article.id === action.payload.id
            ? (article = action.payload)
            : article
        )
      };

    case CHECKTOUPDATE_EVENT:
      if (action.payload === "true") {
        return {
          ...state,
          toEditOrNot: { showEditableList: true }
        };
      } else {
        return {
          ...state,
          toEditOrNot: { showEditableList: false }
        };
      }

    case CHECKTOUPDATE_EVENT2:
      if (action.payload === "true") {
        return {
          ...state,
          toEditOrNot2: { showEditableList: true }
        };
      } else {
        return {
          ...state,
          toEditOrNot2: { showEditableList: false }
        };
      }

    case STAGE_EVENT:
      return {
        ...state,
        mainStage: [action.payload]
      };
    case STAGE_EVENT2:
      return {
        ...state,
        mainStage2: [action.payload]
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events]
      };
    case ADD_EVENT2:
      return {
        ...state,
        articles: [action.payload, ...state.articles]
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(e => {
          return action.payload !== e.id;
        })
      };
    case DELETE_EVENT2:
      return {
        ...state,
        articles: state.articles.filter(e => {
          return action.payload !== e.id;
        })
      };
    default:
      return state;
  }
}
