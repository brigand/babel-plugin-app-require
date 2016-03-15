Allows requires relative to `$(pwd)/src`.

```js
// src/a/b/c/d/e.js
import bar from '../../../../../foo/bar';
import bar from '@foo/bar';
```

Note: despite the name, only works for `import`.

