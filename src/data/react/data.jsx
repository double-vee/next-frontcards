export const CARDS = [
  {
    category: 'react',
    front: 'props',
    back: [
      'properties passed into a component (similar to arguments passed to a function)',
      'used to pass data from parent components down to children',
      'to pass a value up to a parent, you first pass a function prop down to the child, and then call the function inside the child component',
      'read-only',
    ],
  },
  {
    category: 'react',
    front: 'state',
    back: [
      'used to track dynamic data',
      'managed within a component, cannot be accessed outside the component unless passed with props',
      'updated immutably',
    ],
  },
];
