export interface ItemMachineContext {
  currentItem: number;
  items: any[];
  name: string;
}

export type ItemMachineEvent =
  | { type: 'CANCEL' }
  | { type: 'CREATE' }
  | { type: 'ADD'; name: string }
  | { type: 'SWITCH'; index: number }
  | { type: 'DELETE'; index: number };
