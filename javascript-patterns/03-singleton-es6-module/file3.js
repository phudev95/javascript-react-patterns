// file3.js
import {
  getInstance as getCounterInstance
} from './CounterClass.js';
import { increment } from './counterFunctional.js';

// Class
const counter = getCounterInstance();
counter.increment();

// Functional
increment();
