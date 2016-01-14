Allows requires relative to `$(pwd)/src` by preceding them with an `@`.

```js
// src/a/b/c/d/e.js
import x from '../../../../../foo/bar';
import x from '@foo/bar';
```

