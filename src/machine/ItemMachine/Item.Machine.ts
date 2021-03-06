import { assign, createMachine, spawn } from 'xstate';
import {
  ItemMachine,
  ItemMachineContext,
  ItemMachineEvent,
} from './Item.Machine.types';

export const createItemMachine = (name: string): ItemMachine =>
  createMachine<ItemMachineContext, ItemMachineEvent>({
    initial: 'new',
    context: {
      name,
      items: [],
      currentItem: -1,
    },
    states: {
      new: {
        on: {
          CANCEL: {
            target: 'item',
            cond: (context) => context.items.length > 0,
          },
        },
      },
      item: {
        on: {
          DELETE: {
            actions: assign((context, event) => {
              if (event.type === 'DELETE') {
                const items = context.items.filter((_, i) => i !== event.index);
                const currentItem = context.items.length - 1;

                return {
                  items,
                  currentItem,
                };
              }

              return {
                items: context.items,
                currentItem: context.currentItem,
              };
            }),
            target: 'deleting',
          },
        },
      },
      deleting: {
        always: [
          { target: 'new', cond: (context) => context.items.length === 0 },
          { target: 'item' },
        ],
      },
    },
    on: {
      CREATE: 'new',
      ADD: {
        target: '.item',
        actions: assign((context, event) => {
          const newItemMachine = spawn(createItemMachine(event.name));
          const items = context.items.concat(newItemMachine);

          return {
            items: items,
            currentItem: items.length - 1,
          };
        }),
      },
      SWITCH: {
        actions: assign({
          currentItem: (context, event) => {
            if (event.type === 'SWITCH') {
              return event.index;
            }
            return context.currentItem;
          },
        }),
      },
      CHANGE_NAME: {
        actions: assign({
          name: (context, event) => {
            if (event.type === 'CHANGE_NAME') {
              return event.name;
            }

            return context.name;
          },
        }),
      },
    },
  });
