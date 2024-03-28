import Snippet from '@/components/Snippet/Snippet';
import { FUNC_DECLARATION, FUNC_EXPRESSION } from './snippets';

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
];
