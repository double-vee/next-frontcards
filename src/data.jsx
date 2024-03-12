import Snippet from '@/components/Snippet/Snippet';
import {
  FUNC_DECLARATION,
  FUNC_EXPRESSION,
  STR_CONCAT,
  STR_SUBSTRING,
  STR_SLICE,
  STR_SPLIT,
  STR_INCLUDES,
  STR_REPEAT,
  STR_SEARCH,
  STR_AT,
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
} from '@/snippets';

export const CARDS = [
  {
    category: 'javascript',
    front: 'expression vs statement',
    back: [
      <>
        <span className="term">expression</span> resolves to a value, e.g.{' '}
        <code>x + 1</code>
      </>,
      <>
        <span className="term">statement</span> performs an action, e.g.{' '}
        <code>let x = 0;</code>
      </>,
    ],
  },
  {
    category: 'javascript',
    front: 'function declaration vs function expression',
    back: [
      <>
        <span className="term">function declaration</span>: the function can be
        called before the actual declaration:
        <Snippet>{FUNC_DECLARATION}</Snippet>
      </>,
      <>
        <span className="term">function expression</span>: the function is
        created when the execution flow reaches it so it cannot be called
        earlier:
        <Snippet>{FUNC_EXPRESSION}</Snippet>
      </>,
    ],
  },
  {
    category: 'string-methods',
    front: 'concat()',
    back: [
      <>
        <code className="term">{`concat()`}</code>
        <code className="term">{`concat(str1, str2)`}</code>
        <Snippet>{STR_CONCAT}</Snippet>
      </>,
    ],
  },
  {
    category: 'string-methods',
    front: 'substring()',
    back: [
      <>
        <code className="term">{`substring(start)`}</code>
        <code className="term">
          {`substring`}
          <wbr />
          {`(start, end)`}
        </code>
        <Snippet>{STR_SUBSTRING}</Snippet>
      </>,
    ],
  },
  {
    category: 'string-methods',
    front: 'slice()',
    back: [
      <>
        <code className="term">{`slice(start)`}</code>
        <code className="term">
          {`slice`}
          <wbr />
          {`(start, end)`}
        </code>
        <Snippet>{STR_SLICE}</Snippet>
      </>,
    ],
  },
  {
    category: 'string-methods',
    front: 'split()',
    back: [
      <>
        <code className="term">{`split(separator)`}</code>
        <code className="term">
          {`split`}
          <wbr />
          {`(separator, limit)`}
        </code>
        <Snippet>{STR_SPLIT}</Snippet>
      </>,
    ],
  },
  {
    category: 'string-methods',
    front: 'includes()',
    back: [
      <>
        <code className="term">{`includes(str)`}</code>
        <code className="term">
          {`includes`}
          <wbr />
          {`(str, position)`}
        </code>
        <Snippet>{STR_INCLUDES}</Snippet>
      </>,
    ],
  },
  {
    category: 'string-methods',
    front: 'repeat()',
    back: [
      <>
        <code className="term">{`repeat(count)`}</code>
        <Snippet>{STR_REPEAT}</Snippet>
      </>,
    ],
  },
  {
    category: 'string-methods',
    front: 'search()',
    back: [
      <>
        <code className="term">{`search(regexp)`}</code>
        <Snippet>{STR_SEARCH}</Snippet>
      </>,
    ],
  },
  {
    category: 'string-methods',
    front: 'at()',
    back: [
      <>
        <code className="term">{`at(index)`}</code>
        <Snippet>{STR_AT}</Snippet>
      </>,
    ],
  },
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
  {
    category: 'react',
    front: 'props',
    back: [
      'short for properties',
      'used to pass values from parent components down to children',
      'to pass a value up to a parent, you first pass a function prop down to the child, and then call the function inside the child component',
      'read-only',
    ],
  },
  {
    category: 'react',
    front: 'state',
    back: [
      'managed within a component, cannot be accessed outside the component unless passed with props',
      'mutable',
    ],
  },
];
