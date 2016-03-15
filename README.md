Allows requires relative to `$(pwd)/src` by preceding them with an `@`.

```js
// in src/a/b/c/d/e.js

// Before:
import bar from '../../../../../foo/bar';

// After:
import bar from '@foo/bar';
```

Note: despite the name, only works for `import`.

