import Snippet from '@/components/Snippet/Snippet';
import {
  ARR_CONCAT,
  ARR_SLICE,
  ARR_INCLUDES,
  ARR_AT,
  ARR_FIND,
  ARR_FILTER,
  ARR_MAP,
  ARR_JOIN,
  ARR_REDUCE,
  ARR_REVERSE,
  ARR_SPLICE,
  ARR_FILL,
} from './snippets';

export const CARDS = [
  {
    category: 'array-methods',
    front: 'concat()',
    back: [
      <>
        <code className="term">{`concat()`}</code>
        <code className="term">{`concat(value1, value2)`}</code>
        <Snippet>{ARR_CONCAT}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'slice()',
    back: [
      <>
        <code className="term">{`slice()`}</code>
        <code className="term">{`slice(start)`}</code>
        <code className="term">{`slice(start, end)`}</code>
        <Snippet>{ARR_SLICE}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'includes()',
    back: [
      <>
        <code className="term">{`includes(item)`}</code>
        <code className="term">{`includes(item, fromIndex)`}</code>
        <Snippet>{ARR_INCLUDES}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'at()',
    back: [
      <>
        <code className="term">{`at(index)`}</code>
        <Snippet>{ARR_AT}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'find()',
    back: [
      <>
        <code className="term">{`find((el, i, arr) => { /* … */ })`}</code>
        <Snippet>{ARR_FIND}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'filter()',
    back: [
      <>
        <code className="term">{`filter((el, i, arr) => { /* … */ })`}</code>
        <Snippet>{ARR_FILTER}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'map()',
    back: [
      <>
        <code className="term">{`map((el, i, arr) => { /* … */ })`}</code>
        <Snippet>{ARR_MAP}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'join()',
    back: [
      <>
        <code className="term">{`join()`}</code>
        <code className="term">{`join(separator)`}</code>
        <Snippet>{ARR_JOIN}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'reverse()',
    back: [
      <>
        <code className="term">{`reverse()`}</code>
        <Snippet>{ARR_REVERSE}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'reduce()',
    back: [
      <>
        <code className="term">{`reduce((acc, value) => /* … */, initialValue)\
        `}</code>
        <Snippet>{ARR_REDUCE}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'splice()',
    back: [
      <>
        <code className="term">{`splice(start)`}</code>
        <code className="term">{`splice(start, deleteCount)`}</code>
        <code className="term">{`splice(start, deleteCount, item1, itemN)`}</code>
        <Snippet>{ARR_SPLICE}</Snippet>
      </>,
    ],
  },
  {
    category: 'array-methods',
    front: 'fill()',
    back: [
      <>
        <code className="term">{`fill(value)`}</code>
        <code className="term">{`fill(value, start)`}</code>
        <code className="term">{`fill(value, start, end)`}</code>
        <Snippet>{ARR_FILL}</Snippet>
      </>,
    ],
  },
];
