import { StateMachine } from 'xstate';

export interface ItemMachineContext {
  currentItem: number;
  items: any[];
  name: string;
}

export type ItemMachineEvent =
  | { type: 'CANCEL' }
  | { type: 'CREATE' }
  | { type: 'CHANGE_NAME'; name: string }
  | { type: 'ADD'; name: string }
  | { type: 'SWITCH'; index: number }
  | { type: 'DELETE'; index: number };

export type ItemMachine = StateMachine<
  ItemMachineContext,
  any,
  ItemMachineEvent
>;
