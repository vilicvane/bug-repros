export declare const timestampSymbol: unique symbol;

export declare const Timestamp: {
  [TKey in typeof timestampSymbol]: true;
};

export declare function now(): typeof Timestamp;
