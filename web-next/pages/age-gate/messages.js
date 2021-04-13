const AGEGATE_PASS_ID = "pass";

const messages = [
  {
    m_id: 1,
    title: "verify",
    message: "Are you of age?",
    action: [
      {
        a_id: 1,
        label: "Yes",
        next: { m_id: 2 },
        error: { m_id: 3 },
      },
      {
        a_id: 2,
        label: "No",
        next: { m_id: 3 },
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
        next: { m_id: AGEGATE_PASS_ID },
        error: null,
      },
      {
        a_id: 4,
        label: "Go without it",
        next: { m_id: AGEGATE_PASS_ID },
        error: null,
      },
    ],
  },
  {
    m_id: 3,
    title: "reject",
    message: "Sorry you must be of age!",
    action: [{ a_id: 5, label: "Try again", next: { m_id: 1 }, error: null }],
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

const getMessageById = (id) => {
  return messagesMap[id];
};

export const handleMessageAction = async (action, cbBeforeNextMessage) => {
  let { next, error: action_error } = action;
  try {
    let response = await cbBeforeNextMessage();
    console.log("handleMessageAction response : ", response);
    return getMessageById(next.m_id);
  } catch (error) {
    if (action_error) handleMessageActionError(action_error);
    throw error;
  }
};

export default messages;
