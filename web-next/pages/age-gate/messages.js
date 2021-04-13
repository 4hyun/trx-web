import { AGE_CHECK_KEY } from "./constants";

const messages = [
  {
    m_id: 1,
    title: "verify",
    message: "Are you of age?",
    action: [
      {
        a_id: 1,
        label: "Yes",
        next: { m_id: 2 , pass:},
        error: { m_id: 3 },
      },
      {
        a_id: 2,
        label: "No",
        next: { m_id: 3 , pass: null},
        error: null,
      },
    ],
  },
  {
    m_id: 2,
    title: "welcome",
    message: "Welcome!",
    action: [
      {
        a_id: 3,
        label: "Remember me",
        next: { m_id: null ,pass:true},
        error: null,
      },
      {
        a_id: 4,
        label: "Go without it",
        next: { m_id: null ,pass:true},
        error: null,
      },
    ],
  },
  {
    m_id: 3,
    title: "reject",
    message: "Sorry you must be of age!",
    action: [{ a_id: 5, label: "Try again", next: { m_id: 1 , pass: null}, error: null }],
  },
];

const messagesMap = messages.reduce(
  map,
  (_message) => {
    let { title, message, options } = _message;
    map[_message.m_id] = { title, message, options };
    return map;
  },
  {}
);

const handleMessageActionError = (action_error) => {
  console.log("action.error : ", action_error);
  return;
};

export const getMessageById = (id) => {
  return messagesMap[id];
};

// May use async logic in the future (eg. server side age verification)
export const getAgeCheckValue = async() => {
  try {
    let {localStorage} = window
    let ageCheckValue = localStorage.getItem(AGE_CHECK_KEY)
    return ageCheckValue
  } catch (error) {
    console.warn('[Error] getAgeCheckValue', error)
  }
  
};

export const handleMessageAction = async (action, cbBeforeNextMessage) => {
  let { a_id,next, error: action_error } = action;
  try {
    let response = await cbBeforeNextMessage();
    console.log("handleMessageAction response : ", response);
    return getMessageById(next.m_id);
  } catch (error) {
    if (action_error) handleMessageActionError(action_error);
    console.warn(`[Error] handleMessageAction actionId:${a_id}`,error) ;
  }
};

export default messages;
