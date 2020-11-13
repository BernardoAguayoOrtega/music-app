// import actions
import initialData from './data';

export const music = (state = initialData(), action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
