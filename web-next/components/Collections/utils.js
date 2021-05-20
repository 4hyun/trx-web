/* eslint-disable import/prefer-default-export */
const parseScrollContainerID = (name) =>
  name.replace(/\s|\./gi, '-').toLowerCase()

export { parseScrollContainerID }
