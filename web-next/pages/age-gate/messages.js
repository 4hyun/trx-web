import { AGE_CHECK_SUCCESS, AGE_CHECK_FAIL } from "pages/age-gate/constants";

const messages = [
  {
    mid: 1,
    title: "verify",
    message: "Are you of age?",
    options: [
      {
        opt_id: 1,
        label: "Yes",
        action: {
          next: { type: AGE_CHECK_SUCCESS, payload: { next_mid: 2 } },
          error: { type: AGE_CHECK_FAIL, payload: { next_mid: 3 } },
        },
      },
      {
        opt_id: 2,
        label: "No",
        action: {
          next: { type: AGE_CHECK_FAIL },
          payload: { next_mid: 3 },
          error: null,
        },
      },
    ],
  },
  {
    mid: 2,
    title: "welcome",
    message: "Welcome!",
    options: [
      {
        opt_id: 3,
        label: "Remember me",
        action: {
          next: { type: AGE_CHECK_SET_SETTINGS, payload: { next_mid: "done" } },
        },
      },
      { opt_id: 4, label: "Go without it" },
    ],
  },
  {
    mid: 3,
    title: "reject",
    message: "Sorry you must be of age!",
    options: [{ opt_id: 5, label: "Try again" }],
  },
];

export default messages;
