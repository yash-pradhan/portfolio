export {};

declare global {
  interface Window {
    VANTA: {
      WAVES: (options: object) => { destroy: () => void };
    };
  }
}