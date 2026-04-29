const set = (key: string, value: unknown) => {
  if (typeof value === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key: string) => {
  if (typeof window === 'undefined') return;
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const clear = () => {
  if (typeof window === 'undefined') return;
  localStorage.clear();
};

export enum STORAGE_KEYS {
  LAB_REPORT_DECODED = 'lab_report_decoded',
}

export const storage = {
  set,
  get,
  clear,
};
