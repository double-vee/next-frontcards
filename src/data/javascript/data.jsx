import Snippet from '@/components/Snippet/Snippet';
import {
  ARROW_OBJ_METHOD,
  ARROW_EVENT_HANDLER,
  FUNC_DECLARATION,
  FUNC_EXPRESSION,
  FOR_IN,
  FOR_OF,
} from './snippets';

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
    front: 'DOM',
    back: [
      <>short for Document Object Model</>,
      <>represents an HTML document</>,
      <>a tree of nodes created by the browser when HTML loads inside it</>,
      <>each element is an object that can be accessed with JavaScript</>,
    ],
  },
  {
    category: 'javascript',
    front: 'className vs classList',
    back: [
      <>
        the property <code>className</code> returns the value of the
        element&apos;s <code>class</code> attribute (a{' '}
        <span className="term">string</span>)
      </>,
      <>
        <code>classList</code> returns a collection (
        <span className="term">DOMTokenList</span>) of the element&apos;s
        classes
      </>,
      <>
        <code>classList</code> can be modified or checked with the methods{' '}
        <code>add()</code>, <code>remove()</code>, <code>replace()</code>,{' '}
        <code>toggle()</code>, <code>contains()</code>
      </>,
    ],
  },
  {
    category: 'javascript',
    front: 'deep vs shallow copy',
    back: [
      <>
        properties of a <span className="term">deep copy</span> of an object do
        not share any references with properties of the source object: changes
        made to the copy will not affect the source
      </>,
      <>
        <span className="term">deep copy</span> is created with:{' '}
        <code>JSON.parse(JSON.stringify())</code> or{' '}
        <code>structuredClone()</code>
      </>,
      <>
        changes to nested properties of a{' '}
        <span className="term">shallow copy</span> may affect its source object
      </>,
      <>
        <span className="term">shallow copy</span> is created with:{' '}
        <span className="term">spread syntax</span>,{' '}
        <code>Object.assign()</code>, <code>Object.create()</code>, and array
        methods <code>concat()</code>, <code>slice()</code>,{' '}
        <code>Array.from()</code>
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
    category: 'javascript',
    front: 'strict mode',
    back: [
      <>
        modifications added to JavaScript in 2009 with ES5 (ECMAScript&nbsp;5),
        off by default
      </>,
      <>
        enabled with the directive<code>&quot;use strict&quot;;</code> which can
        be put at the top of a script or at the beginning of a function
      </>,
      <>
        enabled automatically by <span className="term">classes</span>,{' '}
        <span className="term">modules</span> and bundlers like Webpack
      </>,
      <>
        strict mode prevents assigning to an undeclared variable by throwing a{' '}
        <span className="term">ReferenceError</span> (in non-strict mode,
        mistyping a variable in an assignment would add a property to the{' '}
        <span className="term">global object</span>)
      </>,
      <>
        strict mode prevents declaring duplicate function parameters by throwing
        a <span className="term">SyntaxError</span>
      </>,
      <>
        strict mode reserves more names than non-strict mode, e.g.{' '}
        <code>interface</code>, <code>package</code>, <code>static</code>
      </>,
      <>
        in strict mode, when a{' '}
        <span className="term">function declaration</span> is inside a code
        block it cannot be called outside of it
      </>,
      <>
        in strict mode, <code>this</code> passed to a function is{' '}
        <code>undefined</code> instead of the{' '}
        <span className="term">global object</span>
      </>,
    ],
  },
  {
    category: 'javascript',
    front: 'for...in vs for...of',
    back: [
      <>
        <span className="term">for...in</span> is used to iterate over
        properties of an <span className="term">object</span> (except the ones
        keyed by <span className="term">symbols</span>):
        <Snippet>{FOR_IN}</Snippet>
      </>,
      <>
        <span className="term">for...of</span> is used to iterate over elements
        of an <span className="term">iterable object</span> such as{' '}
        <span className="term">Array</span>,{' '}
        <span className="term">String</span>, <span className="term">Map</span>,{' '}
        <span className="term">Set</span>,{' '}
        <span className="term">NodeList</span>:<Snippet>{FOR_OF}</Snippet>
      </>,
    ],
  },
  {
    category: 'javascript',
    front: 'arrow function',
    back: [
      <>
        <span className="term">arrow functions</span> have no <code>this</code>:
        they inherit the execution context (the value of <code>this</code>) from
        the parent scope
      </>,
      <>
        <span className="term">arrow functions</span> should <em>not&nbsp;</em>{' '}
        be used as <span className="term">object methods</span>:{' '}
        <code>this</code> would refer to <code>window</code> instead of the
        actual object:
        <Snippet>{ARROW_OBJ_METHOD}</Snippet>
      </>,
      <>
        <span className="term">arrow functions</span> should <em>not&nbsp;</em>{' '}
        be used as <span className="term">event handlers</span>:
        <ul
          className="nestedNotes"
          role="list"
        >
          <li className="danger">
            you won&apos;t be able to use <code>removeEventListener()</code> if
            the handler is an <span className="term">anonymous function</span>
          </li>
          <li className="danger">
            <code>this</code> won&apos;t be bound to the target element (in this
            case, it will resolve to <code>undefined</code> instead of the
            button):
          </li>
        </ul>
        <span className="term"></span>
        <Snippet>{ARROW_EVENT_HANDLER}</Snippet>
      </>,
    ],
  },
];
