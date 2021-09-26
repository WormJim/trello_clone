import { assign, createMachine } from 'xstate';

interface NewListContext {
  name: string;
}

export type NewListEvent =
  | { type: 'CHANGE'; input: string }
  | { type: 'SUBMIT'; input: string };

export const isNotEmpty = (context: NewListContext) => {
  return context.name.length > 2;
};

export const NewListMachine = createMachine<NewListContext, NewListEvent>({
  initial: 'active',
  context: {
    name: '',
  },
  states: {
    active: {
      on: {
        CHANGE: {
          actions: assign({
            name: (ctx, event) => {
              if (event.type === 'CHANGE') {
                return event.input.trimLeft();
              }
              return ctx.name;
            },
          }),
        },
        SUBMIT: {
          cond: isNotEmpty,
          actions: 'submit',
          target: 'clear',
        },
      },
    },
    clear: {
      on: {
        CLEAR: {
          target: 'active',
          actions: assign({
            name: '',
          }),
        },
      },
    },
  },
});
