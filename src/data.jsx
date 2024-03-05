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
        called before the actual declaration
      </>,
      <>
        <span className="term">function expression</span>: the function is
        created when the execution flow reaches it so it cannot be called
        earlier
      </>,
      <>
        in <span className="term">strict mode</span>, a{' '}
        <span className="term">function declaration</span> is scoped to the
        block in which it was declared so the function cannot be called outside
        of it
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
