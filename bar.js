"use strict";

import Foo from "./foo.js";

class Bar {
  constructor() {
    this._foo = new Foo();
    this._foo.bar();
  }
}

export default Bar;