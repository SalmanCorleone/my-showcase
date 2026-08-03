const TTL_MS = 24 * 60 * 60 * 1000;

type TimedValue = { value: unknown; timestamp: number };

const set = (key: string, value: unknown) => {
  if (typeof value === 'undefined') return;
  const timed: TimedValue = { value, timestamp: Date.now() };
  localStorage.setItem(key, JSON.stringify(timed));
};

const get = (key: string) => {
  if (typeof window === 'undefined') return;
  const item = localStorage.getItem(key);
  if (!item) return null;
  const parsed = JSON.parse(item);
  if (typeof parsed?.timestamp !== 'number' || Date.now() - parsed.timestamp > TTL_MS) {
    localStorage.removeItem(key);
    return null;
  }
  return parsed.value;
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
