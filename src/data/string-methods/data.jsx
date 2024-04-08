import Snippet from '@/components/Snippet/Snippet';
import {
  STR_CONCAT,
  STR_SUBSTRING,
  STR_SLICE,
  STR_SPLIT,
  STR_INCLUDES,
  STR_REPEAT,
  STR_SEARCH,
  STR_AT,
  STR_PADSTART,
  STR_PADEND,
  STR_STARTSWITH,
  STR_ENDSWITH,
} from './snippets';

export const CARDS = [
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
    category: 'string-methods',
    front: 'padStart(), padEnd()',
    back: [
      <>
        <code className="term">{`padStart(length)`}</code>
        <code className="term">
          {`padStart`}
          <wbr />
          {`(length, str)`}
        </code>
        <Snippet>{STR_PADSTART}</Snippet>
      </>,
      <>
        <code className="term">{`padEnd(length)`}</code>
        <code className="term">
          {`padEnd`}
          <wbr />
          {`(length, str)`}
        </code>
        <Snippet>{STR_PADEND}</Snippet>
      </>,
    ],
  },
  {
    category: 'string-methods',
    front: 'startsWith(), endsWith()',
    back: [
      <>
        <code className="term">{`startsWith(str)`}</code>
        <code className="term">
          {`startsWith`}
          <wbr />
          {`(str, position)`}
        </code>
        <Snippet>{STR_STARTSWITH}</Snippet>
      </>,
      <>
        <code className="term">{`endsWith(str)`}</code>
        <code className="term">
          {`endsWith`}
          <wbr />
          {`(str, position)`}
        </code>
        <Snippet>{STR_ENDSWITH}</Snippet>
      </>,
    ],
  },
];
