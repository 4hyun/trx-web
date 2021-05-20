import { AGE_GATE_LS_KEY } from "./constants";

const messages = [
  {
    m_id: 1,
    title: "verify",
    message: "Are you of age?",
    actions: [
      {
        a_id: 1,
        label: "Yes",
        next: { m_id: 2, pass: null },
        error: { m_id: 3 },
      },
      {
        a_id: 2,
        label: "No",
        next: { m_id: 3, pass: null },
        error: null,
      },
    ],
  },
  {
    m_id: 2,
    title: "welcome",
    message: "Welcome!",
    actions: [
      {
        a_id: 3,
        label: "Remember me",
        next: { m_id: null, pass: true },
        error: null,
      },
      {
        a_id: 4,
        label: "Go without it",
        next: { m_id: null, pass: true },
        error: null,
      },
    ],
  },
  {
    m_id: 3,
    title: "reject",
    message: "Sorry you must be of age!",
    actions: [
      {
        a_id: 5,
        label: "Try again",
        next: { m_id: 1, pass: null },
        error: null,
      },
    ],
  },
];
/* TODO: refactor functions to "lib" */

const messagesMap = messages.reduce((map, _message) => {
  const { title, message, actions } = _message;
  map[_message.m_id] = { title, message, actions };
  return map;
}, {});

const handleMessageActionError = (action_error) => {
  console.log("action.error : ", action_error);
  
};

export const getMessageById = (id) => messagesMap[id];

// May use async logic in the future (eg. server side age verification)
export const getAgeCheckValue = async () => {
  try {
    const { localStorage } = window;
    const ageCheckValue = localStorage.getItem(AGE_GATE_LS_KEY);
    return ageCheckValue;
  } catch (error) {
    console.warn("[Error] getAgeCheckValue", error);
  }
};

export const setAgeCheckValue = async () => {
  try {
    const { localStorage } = window;
    const newAgeCheckValue = new Date().getTime();
    localStorage.setItem(AGE_GATE_LS_KEY, newAgeCheckValue);
    return newAgeCheckValue;
  } catch (error) {
    console.warn("[Error] setAgeCheckValue", error);
  }
};

export const handleMessageAction = async (action, cbBeforeNextMessage) => {
  const {
    a_id,
    next: { m_id, pass },
    error: action_error,
  } = action;
  let response;
  try {
    if (cbBeforeNextMessage) {
      response = await cbBeforeNextMessage();
    }
    const nextMessage = getMessageById(m_id);
    return nextMessage;
  } catch (error) {
    if (action_error) handleMessageActionError(action_error);
    console.warn(`[Error] handleMessageAction actionId:${a_id}`, error);
  }
};

export default messages;
