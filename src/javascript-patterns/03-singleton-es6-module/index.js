// index.js
import counter from './CounterClass.js';
import { decrement, getCount, increment } from './counterFunctional.js';
import './file2.js';
import './file3.js';

// Class
counter.increment();
counter.increment();
console.log('[Instance] counter:', counter.getCount()); // => 4

// Functional
increment();
decrement();
console.log('[Functional] counter :', getCount()); // => 2
