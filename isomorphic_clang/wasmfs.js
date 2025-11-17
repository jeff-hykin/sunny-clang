// https://esm.sh/@wasmer/wasmfs@0.12.0/esnext/wasmfs.development.mjs
var __setImmediate$ = (cb2, ...args) => ({ $t: setTimeout(cb2, 0, ...args), [Symbol.dispose]() {
  clearTimeout(this.t);
} });
function ba(a, b, c, d) {
  return new (c || (c = Promise))(function(e, f) {
    function g(a2) {
      try {
        k(d.next(a2));
      } catch (n) {
        f(n);
      }
    }
    function h(a2) {
      try {
        k(d["throw"](a2));
      } catch (n) {
        f(n);
      }
    }
    function k(a2) {
      a2.done ? e(a2.value) : new c(function(b2) {
        b2(a2.value);
      }).then(g, h);
    }
    k((d = d.apply(a, b || [])).next());
  });
}
function ca(a, b) {
  function c(a2) {
    return function(b2) {
      return d([a2, b2]);
    };
  }
  function d(c2) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; e; ) try {
      if (f = 1, g && (h = c2[0] & 2 ? g["return"] : c2[0] ? g["throw"] || ((h = g["return"]) && h.call(g), 0) : g.next) && !(h = h.call(g, c2[1])).done) return h;
      if (g = 0, h) c2 = [c2[0] & 2, h.value];
      switch (c2[0]) {
        case 0:
        case 1:
          h = c2;
          break;
        case 4:
          return e.label++, { value: c2[1], done: false };
        case 5:
          e.label++;
          g = c2[1];
          c2 = [0];
          continue;
        case 7:
          c2 = e.ops.pop();
          e.trys.pop();
          continue;
        default:
          if (!(h = e.trys, h = 0 < h.length && h[h.length - 1]) && (6 === c2[0] || 2 === c2[0])) {
            e = 0;
            continue;
          }
          if (3 === c2[0] && (!h || c2[1] > h[0] && c2[1] < h[3])) e.label = c2[1];
          else if (6 === c2[0] && e.label < h[1]) e.label = h[1], h = c2;
          else if (h && e.label < h[2]) e.label = h[2], e.ops.push(c2);
          else {
            h[2] && e.ops.pop();
            e.trys.pop();
            continue;
          }
      }
      c2 = b.call(a, e);
    } catch (n) {
      c2 = [6, n], g = 0;
    } finally {
      f = h = 0;
    }
    if (c2[0] & 5) throw c2[1];
    return { value: c2[0] ? c2[1] : void 0, done: true };
  }
  var e = { label: 0, sent: function() {
    if (h[0] & 1) throw h[1];
    return h[1];
  }, trys: [], ops: [] }, f, g, h, k;
  return k = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
    return this;
  }), k;
}
function da(a) {
  var b = "function" === typeof Symbol && a[Symbol.iterator], c = 0;
  return b ? b.call(a) : { next: function() {
    a && c >= a.length && (a = void 0);
    return { value: a && a[c++], done: !a };
  } };
}
function ea(a, b) {
  var c = "function" === typeof Symbol && a[Symbol.iterator];
  if (!c) return a;
  a = c.call(a);
  var d, e = [];
  try {
    for (; (void 0 === b || 0 < b--) && !(d = a.next()).done; ) e.push(d.value);
  } catch (g) {
    var f = { error: g };
  } finally {
    try {
      d && !d.done && (c = a["return"]) && c.call(a);
    } finally {
      if (f) throw f.error;
    }
  }
  return e;
}
function ia() {
  for (var a = [], b = 0; b < arguments.length; b++) a = a.concat(ea(arguments[b]));
  return a;
}
var l = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : {};
function t(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a["default"] : a;
}
function u(a, b) {
  return b = { exports: {} }, a(b, b.exports), b.exports;
}
var w = u(function(a, b) {
  Object.defineProperty(b, "__esModule", { value: true });
  b.constants = {
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFBLK: 24576,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    S_IFSOCK: 49152,
    O_CREAT: 64,
    O_EXCL: 128,
    O_NOCTTY: 256,
    O_TRUNC: 512,
    O_APPEND: 1024,
    O_DIRECTORY: 65536,
    O_NOATIME: 262144,
    O_NOFOLLOW: 131072,
    O_SYNC: 1052672,
    O_DIRECT: 16384,
    O_NONBLOCK: 2048,
    S_IRWXU: 448,
    S_IRUSR: 256,
    S_IWUSR: 128,
    S_IXUSR: 64,
    S_IRWXG: 56,
    S_IRGRP: 32,
    S_IWGRP: 16,
    S_IXGRP: 8,
    S_IRWXO: 7,
    S_IROTH: 4,
    S_IWOTH: 2,
    S_IXOTH: 1,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    UV_FS_COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_EXCL: 1,
    COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE_FORCE: 4
  };
});
t(w);
var ja = u(function(a, b) {
  b.default = "function" === typeof BigInt ? BigInt : function() {
    throw Error("BigInt is not supported in this environment.");
  };
});
var ka = u(function(a, b) {
  Object.defineProperty(b, "__esModule", { value: true });
  var c = w.constants.S_IFMT, d = w.constants.S_IFDIR, e = w.constants.S_IFREG, f = w.constants.S_IFBLK, g = w.constants.S_IFCHR, h = w.constants.S_IFLNK, k = w.constants.S_IFIFO, p = w.constants.S_IFSOCK;
  a = function() {
    function a2() {
    }
    a2.build = function(b2, c2) {
      void 0 === c2 && (c2 = false);
      var d2 = new a2(), e2 = b2.gid, f2 = b2.atime, g2 = b2.mtime, h2 = b2.ctime;
      c2 = c2 ? ja.default : function(a3) {
        return a3;
      };
      d2.uid = c2(b2.uid);
      d2.gid = c2(e2);
      d2.rdev = c2(0);
      d2.blksize = c2(4096);
      d2.ino = c2(b2.ino);
      d2.size = c2(b2.getSize());
      d2.blocks = c2(1);
      d2.atime = f2;
      d2.mtime = g2;
      d2.ctime = h2;
      d2.birthtime = h2;
      d2.atimeMs = c2(f2.getTime());
      d2.mtimeMs = c2(g2.getTime());
      e2 = c2(h2.getTime());
      d2.ctimeMs = e2;
      d2.birthtimeMs = e2;
      d2.dev = c2(0);
      d2.mode = c2(b2.mode);
      d2.nlink = c2(b2.nlink);
      return d2;
    };
    a2.prototype._checkModeProperty = function(a3) {
      return (Number(this.mode) & c) === a3;
    };
    a2.prototype.isDirectory = function() {
      return this._checkModeProperty(d);
    };
    a2.prototype.isFile = function() {
      return this._checkModeProperty(e);
    };
    a2.prototype.isBlockDevice = function() {
      return this._checkModeProperty(f);
    };
    a2.prototype.isCharacterDevice = function() {
      return this._checkModeProperty(g);
    };
    a2.prototype.isSymbolicLink = function() {
      return this._checkModeProperty(h);
    };
    a2.prototype.isFIFO = function() {
      return this._checkModeProperty(k);
    };
    a2.prototype.isSocket = function() {
      return this._checkModeProperty(p);
    };
    return a2;
  }();
  b.Stats = a;
  b.default = a;
});
t(ka);
var la = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
var x = [];
var y = [];
var ma = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
var oa = false;
function pa() {
  oa = true;
  for (var a = 0; 64 > a; ++a) x[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], y["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(a)] = a;
  y[45] = 62;
  y[95] = 63;
}
function qa(a, b, c) {
  for (var d = [], e = b; e < c; e += 3) b = (a[e] << 16) + (a[e + 1] << 8) + a[e + 2], d.push(x[b >> 18 & 63] + x[b >> 12 & 63] + x[b >> 6 & 63] + x[b & 63]);
  return d.join("");
}
function ra(a) {
  oa || pa();
  for (var b = a.length, c = b % 3, d = "", e = [], f = 0, g = b - c; f < g; f += 16383) e.push(qa(a, f, f + 16383 > g ? g : f + 16383));
  1 === c ? (a = a[b - 1], d += x[a >> 2], d += x[a << 4 & 63], d += "==") : 2 === c && (a = (a[b - 2] << 8) + a[b - 1], d += x[a >> 10], d += x[a >> 4 & 63], d += x[a << 2 & 63], d += "=");
  e.push(d);
  return e.join("");
}
function sa(a, b, c, d, e) {
  var f = 8 * e - d - 1;
  var g = (1 << f) - 1, h = g >> 1, k = -7;
  e = c ? e - 1 : 0;
  var p = c ? -1 : 1, n = a[b + e];
  e += p;
  c = n & (1 << -k) - 1;
  n >>= -k;
  for (k += f; 0 < k; c = 256 * c + a[b + e], e += p, k -= 8) ;
  f = c & (1 << -k) - 1;
  c >>= -k;
  for (k += d; 0 < k; f = 256 * f + a[b + e], e += p, k -= 8) ;
  if (0 === c) c = 1 - h;
  else {
    if (c === g) return f ? NaN : Infinity * (n ? -1 : 1);
    f += Math.pow(2, d);
    c -= h;
  }
  return (n ? -1 : 1) * f * Math.pow(2, c - d);
}
function ta(a, b, c, d, e, f) {
  var g, h = 8 * f - e - 1, k = (1 << h) - 1, p = k >> 1, n = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  f = d ? 0 : f - 1;
  var q = d ? 1 : -1, B = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
  b = Math.abs(b);
  isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = k) : (d = Math.floor(Math.log(b) / Math.LN2), 1 > b * (g = Math.pow(2, -d)) && (d--, g *= 2), b = 1 <= d + p ? b + n / g : b + n * Math.pow(2, 1 - p), 2 <= b * g && (d++, g /= 2), d + p >= k ? (b = 0, d = k) : 1 <= d + p ? (b = (b * g - 1) * Math.pow(2, e), d += p) : (b = b * Math.pow(2, p - 1) * Math.pow(2, e), d = 0));
  for (; 8 <= e; a[c + f] = b & 255, f += q, b /= 256, e -= 8) ;
  d = d << e | b;
  for (h += e; 0 < h; a[c + f] = d & 255, f += q, d /= 256, h -= 8) ;
  a[c + f - q] |= 128 * B;
}
var wa = {}.toString;
var ya = Array.isArray || function(a) {
  return "[object Array]" == wa.call(a);
};
z.TYPED_ARRAY_SUPPORT = void 0 !== la.TYPED_ARRAY_SUPPORT ? la.TYPED_ARRAY_SUPPORT : true;
var za = z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function Aa(a, b) {
  if ((z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < b) throw new RangeError("Invalid typed array length");
  z.TYPED_ARRAY_SUPPORT ? (a = new Uint8Array(b), a.__proto__ = z.prototype) : (null === a && (a = new z(b)), a.length = b);
  return a;
}
function z(a, b, c) {
  if (!(z.TYPED_ARRAY_SUPPORT || this instanceof z)) return new z(a, b, c);
  if ("number" === typeof a) {
    if ("string" === typeof b) throw Error("If encoding is specified then the first argument must be a string");
    return Ba(this, a);
  }
  return Ca(this, a, b, c);
}
z.poolSize = 8192;
z._augment = function(a) {
  a.__proto__ = z.prototype;
  return a;
};
function Ca(a, b, c, d) {
  if ("number" === typeof b) throw new TypeError('"value" argument must not be a number');
  if ("undefined" !== typeof ArrayBuffer && b instanceof ArrayBuffer) {
    b.byteLength;
    if (0 > c || b.byteLength < c) throw new RangeError("'offset' is out of bounds");
    if (b.byteLength < c + (d || 0)) throw new RangeError("'length' is out of bounds");
    b = void 0 === c && void 0 === d ? new Uint8Array(b) : void 0 === d ? new Uint8Array(b, c) : new Uint8Array(b, c, d);
    z.TYPED_ARRAY_SUPPORT ? (a = b, a.__proto__ = z.prototype) : a = Da(a, b);
    return a;
  }
  if ("string" === typeof b) {
    d = a;
    a = c;
    if ("string" !== typeof a || "" === a) a = "utf8";
    if (!z.isEncoding(a)) throw new TypeError('"encoding" must be a valid string encoding');
    c = Ea(b, a) | 0;
    d = Aa(d, c);
    b = d.write(b, a);
    b !== c && (d = d.slice(0, b));
    return d;
  }
  return Fa(a, b);
}
z.from = function(a, b, c) {
  return Ca(null, a, b, c);
};
z.TYPED_ARRAY_SUPPORT && (z.prototype.__proto__ = Uint8Array.prototype, z.__proto__ = Uint8Array);
function Ga(a) {
  if ("number" !== typeof a) throw new TypeError('"size" argument must be a number');
  if (0 > a) throw new RangeError('"size" argument must not be negative');
}
z.alloc = function(a, b, c) {
  Ga(a);
  a = 0 >= a ? Aa(null, a) : void 0 !== b ? "string" === typeof c ? Aa(null, a).fill(b, c) : Aa(null, a).fill(b) : Aa(null, a);
  return a;
};
function Ba(a, b) {
  Ga(b);
  a = Aa(a, 0 > b ? 0 : Ma(b) | 0);
  if (!z.TYPED_ARRAY_SUPPORT) for (var c = 0; c < b; ++c) a[c] = 0;
  return a;
}
z.allocUnsafe = function(a) {
  return Ba(null, a);
};
z.allocUnsafeSlow = function(a) {
  return Ba(null, a);
};
function Da(a, b) {
  var c = 0 > b.length ? 0 : Ma(b.length) | 0;
  a = Aa(a, c);
  for (var d = 0; d < c; d += 1) a[d] = b[d] & 255;
  return a;
}
function Fa(a, b) {
  if (A(b)) {
    var c = Ma(b.length) | 0;
    a = Aa(a, c);
    if (0 === a.length) return a;
    b.copy(a, 0, 0, c);
    return a;
  }
  if (b) {
    if ("undefined" !== typeof ArrayBuffer && b.buffer instanceof ArrayBuffer || "length" in b) return (c = "number" !== typeof b.length) || (c = b.length, c = c !== c), c ? Aa(a, 0) : Da(a, b);
    if ("Buffer" === b.type && ya(b.data)) return Da(a, b.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function Ma(a) {
  if (a >= (z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823)) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + (z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823).toString(16) + " bytes");
  return a | 0;
}
z.isBuffer = Na;
function A(a) {
  return !(null == a || !a._isBuffer);
}
z.compare = function(a, b) {
  if (!A(a) || !A(b)) throw new TypeError("Arguments must be Buffers");
  if (a === b) return 0;
  for (var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e) if (a[e] !== b[e]) {
    c = a[e];
    d = b[e];
    break;
  }
  return c < d ? -1 : d < c ? 1 : 0;
};
z.isEncoding = function(a) {
  switch (String(a).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
z.concat = function(a, b) {
  if (!ya(a)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === a.length) return z.alloc(0);
  var c;
  if (void 0 === b) for (c = b = 0; c < a.length; ++c) b += a[c].length;
  b = z.allocUnsafe(b);
  var d = 0;
  for (c = 0; c < a.length; ++c) {
    var e = a[c];
    if (!A(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    e.copy(b, d);
    d += e.length;
  }
  return b;
};
function Ea(a, b) {
  if (A(a)) return a.length;
  if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(a) || a instanceof ArrayBuffer)) return a.byteLength;
  "string" !== typeof a && (a = "" + a);
  var c = a.length;
  if (0 === c) return 0;
  for (var d = false; ; ) switch (b) {
    case "ascii":
    case "latin1":
    case "binary":
      return c;
    case "utf8":
    case "utf-8":
    case void 0:
      return Oa(a).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return 2 * c;
    case "hex":
      return c >>> 1;
    case "base64":
      return Pa(a).length;
    default:
      if (d) return Oa(a).length;
      b = ("" + b).toLowerCase();
      d = true;
  }
}
z.byteLength = Ea;
function Qa(a, b, c) {
  var d = false;
  if (void 0 === b || 0 > b) b = 0;
  if (b > this.length) return "";
  if (void 0 === c || c > this.length) c = this.length;
  if (0 >= c) return "";
  c >>>= 0;
  b >>>= 0;
  if (c <= b) return "";
  for (a || (a = "utf8"); ; ) switch (a) {
    case "hex":
      a = b;
      b = c;
      c = this.length;
      if (!a || 0 > a) a = 0;
      if (!b || 0 > b || b > c) b = c;
      d = "";
      for (c = a; c < b; ++c) a = d, d = this[c], d = 16 > d ? "0" + d.toString(16) : d.toString(16), d = a + d;
      return d;
    case "utf8":
    case "utf-8":
      return Ra(this, b, c);
    case "ascii":
      a = "";
      for (c = Math.min(this.length, c); b < c; ++b) a += String.fromCharCode(this[b] & 127);
      return a;
    case "latin1":
    case "binary":
      a = "";
      for (c = Math.min(this.length, c); b < c; ++b) a += String.fromCharCode(this[b]);
      return a;
    case "base64":
      return b = 0 === b && c === this.length ? ra(this) : ra(this.slice(b, c)), b;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      b = this.slice(b, c);
      c = "";
      for (a = 0; a < b.length; a += 2) c += String.fromCharCode(b[a] + 256 * b[a + 1]);
      return c;
    default:
      if (d) throw new TypeError("Unknown encoding: " + a);
      a = (a + "").toLowerCase();
      d = true;
  }
}
z.prototype._isBuffer = true;
function Sa(a, b, c) {
  var d = a[b];
  a[b] = a[c];
  a[c] = d;
}
z.prototype.swap16 = function() {
  var a = this.length;
  if (0 !== a % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var b = 0; b < a; b += 2) Sa(this, b, b + 1);
  return this;
};
z.prototype.swap32 = function() {
  var a = this.length;
  if (0 !== a % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var b = 0; b < a; b += 4) Sa(this, b, b + 3), Sa(this, b + 1, b + 2);
  return this;
};
z.prototype.swap64 = function() {
  var a = this.length;
  if (0 !== a % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var b = 0; b < a; b += 8) Sa(this, b, b + 7), Sa(this, b + 1, b + 6), Sa(this, b + 2, b + 5), Sa(this, b + 3, b + 4);
  return this;
};
z.prototype.toString = function() {
  var a = this.length | 0;
  return 0 === a ? "" : 0 === arguments.length ? Ra(this, 0, a) : Qa.apply(this, arguments);
};
z.prototype.equals = function(a) {
  if (!A(a)) throw new TypeError("Argument must be a Buffer");
  return this === a ? true : 0 === z.compare(this, a);
};
z.prototype.inspect = function() {
  var a = "";
  0 < this.length && (a = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), 50 < this.length && (a += " ... "));
  return "<Buffer " + a + ">";
};
z.prototype.compare = function(a, b, c, d, e) {
  if (!A(a)) throw new TypeError("Argument must be a Buffer");
  void 0 === b && (b = 0);
  void 0 === c && (c = a ? a.length : 0);
  void 0 === d && (d = 0);
  void 0 === e && (e = this.length);
  if (0 > b || c > a.length || 0 > d || e > this.length) throw new RangeError("out of range index");
  if (d >= e && b >= c) return 0;
  if (d >= e) return -1;
  if (b >= c) return 1;
  b >>>= 0;
  c >>>= 0;
  d >>>= 0;
  e >>>= 0;
  if (this === a) return 0;
  var f = e - d, g = c - b, h = Math.min(f, g);
  d = this.slice(d, e);
  a = a.slice(b, c);
  for (b = 0; b < h; ++b) if (d[b] !== a[b]) {
    f = d[b];
    g = a[b];
    break;
  }
  return f < g ? -1 : g < f ? 1 : 0;
};
function Ta(a, b, c, d, e) {
  if (0 === a.length) return -1;
  "string" === typeof c ? (d = c, c = 0) : 2147483647 < c ? c = 2147483647 : -2147483648 > c && (c = -2147483648);
  c = +c;
  isNaN(c) && (c = e ? 0 : a.length - 1);
  0 > c && (c = a.length + c);
  if (c >= a.length) {
    if (e) return -1;
    c = a.length - 1;
  } else if (0 > c) if (e) c = 0;
  else return -1;
  "string" === typeof b && (b = z.from(b, d));
  if (A(b)) return 0 === b.length ? -1 : Ua(a, b, c, d, e);
  if ("number" === typeof b) return b &= 255, z.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? e ? Uint8Array.prototype.indexOf.call(a, b, c) : Uint8Array.prototype.lastIndexOf.call(a, b, c) : Ua(a, [b], c, d, e);
  throw new TypeError("val must be string, number or Buffer");
}
function Ua(a, b, c, d, e) {
  function f(a2, b2) {
    return 1 === g ? a2[b2] : a2.readUInt16BE(b2 * g);
  }
  var g = 1, h = a.length, k = b.length;
  if (void 0 !== d && (d = String(d).toLowerCase(), "ucs2" === d || "ucs-2" === d || "utf16le" === d || "utf-16le" === d)) {
    if (2 > a.length || 2 > b.length) return -1;
    g = 2;
    h /= 2;
    k /= 2;
    c /= 2;
  }
  if (e) for (d = -1; c < h; c++) if (f(a, c) === f(b, -1 === d ? 0 : c - d)) {
    if (-1 === d && (d = c), c - d + 1 === k) return d * g;
  } else -1 !== d && (c -= c - d), d = -1;
  else for (c + k > h && (c = h - k); 0 <= c; c--) {
    h = true;
    for (d = 0; d < k; d++) if (f(a, c + d) !== f(b, d)) {
      h = false;
      break;
    }
    if (h) return c;
  }
  return -1;
}
z.prototype.includes = function(a, b, c) {
  return -1 !== this.indexOf(a, b, c);
};
z.prototype.indexOf = function(a, b, c) {
  return Ta(this, a, b, c, true);
};
z.prototype.lastIndexOf = function(a, b, c) {
  return Ta(this, a, b, c, false);
};
z.prototype.write = function(a, b, c, d) {
  if (void 0 === b) d = "utf8", c = this.length, b = 0;
  else if (void 0 === c && "string" === typeof b) d = b, c = this.length, b = 0;
  else if (isFinite(b)) b |= 0, isFinite(c) ? (c |= 0, void 0 === d && (d = "utf8")) : (d = c, c = void 0);
  else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  var e = this.length - b;
  if (void 0 === c || c > e) c = e;
  if (0 < a.length && (0 > c || 0 > b) || b > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  d || (d = "utf8");
  for (e = false; ; ) switch (d) {
    case "hex":
      a: {
        b = Number(b) || 0;
        d = this.length - b;
        c ? (c = Number(c), c > d && (c = d)) : c = d;
        d = a.length;
        if (0 !== d % 2) throw new TypeError("Invalid hex string");
        c > d / 2 && (c = d / 2);
        for (d = 0; d < c; ++d) {
          e = parseInt(a.substr(2 * d, 2), 16);
          if (isNaN(e)) {
            a = d;
            break a;
          }
          this[b + d] = e;
        }
        a = d;
      }
      return a;
    case "utf8":
    case "utf-8":
      return Va(Oa(a, this.length - b), this, b, c);
    case "ascii":
      return Va(Wa(a), this, b, c);
    case "latin1":
    case "binary":
      return Va(Wa(a), this, b, c);
    case "base64":
      return Va(Pa(a), this, b, c);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      d = a;
      e = this.length - b;
      for (var f = [], g = 0; g < d.length && !(0 > (e -= 2)); ++g) {
        var h = d.charCodeAt(g);
        a = h >> 8;
        h %= 256;
        f.push(h);
        f.push(a);
      }
      return Va(f, this, b, c);
    default:
      if (e) throw new TypeError("Unknown encoding: " + d);
      d = ("" + d).toLowerCase();
      e = true;
  }
};
z.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
function Ra(a, b, c) {
  c = Math.min(a.length, c);
  for (var d = []; b < c; ) {
    var e = a[b], f = null, g = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
    if (b + g <= c) switch (g) {
      case 1:
        128 > e && (f = e);
        break;
      case 2:
        var h = a[b + 1];
        128 === (h & 192) && (e = (e & 31) << 6 | h & 63, 127 < e && (f = e));
        break;
      case 3:
        h = a[b + 1];
        var k = a[b + 2];
        128 === (h & 192) && 128 === (k & 192) && (e = (e & 15) << 12 | (h & 63) << 6 | k & 63, 2047 < e && (55296 > e || 57343 < e) && (f = e));
        break;
      case 4:
        h = a[b + 1];
        k = a[b + 2];
        var p = a[b + 3];
        128 === (h & 192) && 128 === (k & 192) && 128 === (p & 192) && (e = (e & 15) << 18 | (h & 63) << 12 | (k & 63) << 6 | p & 63, 65535 < e && 1114112 > e && (f = e));
    }
    null === f ? (f = 65533, g = 1) : 65535 < f && (f -= 65536, d.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023);
    d.push(f);
    b += g;
  }
  a = d.length;
  if (a <= ab) d = String.fromCharCode.apply(String, d);
  else {
    c = "";
    for (b = 0; b < a; ) c += String.fromCharCode.apply(String, d.slice(b, b += ab));
    d = c;
  }
  return d;
}
var ab = 4096;
z.prototype.slice = function(a, b) {
  var c = this.length;
  a = ~~a;
  b = void 0 === b ? c : ~~b;
  0 > a ? (a += c, 0 > a && (a = 0)) : a > c && (a = c);
  0 > b ? (b += c, 0 > b && (b = 0)) : b > c && (b = c);
  b < a && (b = a);
  if (z.TYPED_ARRAY_SUPPORT) b = this.subarray(a, b), b.__proto__ = z.prototype;
  else {
    c = b - a;
    b = new z(c, void 0);
    for (var d = 0; d < c; ++d) b[d] = this[d + a];
  }
  return b;
};
function C(a, b, c) {
  if (0 !== a % 1 || 0 > a) throw new RangeError("offset is not uint");
  if (a + b > c) throw new RangeError("Trying to access beyond buffer length");
}
z.prototype.readUIntLE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C(a, b, this.length);
  c = this[a];
  for (var d = 1, e = 0; ++e < b && (d *= 256); ) c += this[a + e] * d;
  return c;
};
z.prototype.readUIntBE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C(a, b, this.length);
  c = this[a + --b];
  for (var d = 1; 0 < b && (d *= 256); ) c += this[a + --b] * d;
  return c;
};
z.prototype.readUInt8 = function(a, b) {
  b || C(a, 1, this.length);
  return this[a];
};
z.prototype.readUInt16LE = function(a, b) {
  b || C(a, 2, this.length);
  return this[a] | this[a + 1] << 8;
};
z.prototype.readUInt16BE = function(a, b) {
  b || C(a, 2, this.length);
  return this[a] << 8 | this[a + 1];
};
z.prototype.readUInt32LE = function(a, b) {
  b || C(a, 4, this.length);
  return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3];
};
z.prototype.readUInt32BE = function(a, b) {
  b || C(a, 4, this.length);
  return 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
};
z.prototype.readIntLE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C(a, b, this.length);
  c = this[a];
  for (var d = 1, e = 0; ++e < b && (d *= 256); ) c += this[a + e] * d;
  c >= 128 * d && (c -= Math.pow(2, 8 * b));
  return c;
};
z.prototype.readIntBE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C(a, b, this.length);
  c = b;
  for (var d = 1, e = this[a + --c]; 0 < c && (d *= 256); ) e += this[a + --c] * d;
  e >= 128 * d && (e -= Math.pow(2, 8 * b));
  return e;
};
z.prototype.readInt8 = function(a, b) {
  b || C(a, 1, this.length);
  return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a];
};
z.prototype.readInt16LE = function(a, b) {
  b || C(a, 2, this.length);
  a = this[a] | this[a + 1] << 8;
  return a & 32768 ? a | 4294901760 : a;
};
z.prototype.readInt16BE = function(a, b) {
  b || C(a, 2, this.length);
  a = this[a + 1] | this[a] << 8;
  return a & 32768 ? a | 4294901760 : a;
};
z.prototype.readInt32LE = function(a, b) {
  b || C(a, 4, this.length);
  return this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
};
z.prototype.readInt32BE = function(a, b) {
  b || C(a, 4, this.length);
  return this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
};
z.prototype.readFloatLE = function(a, b) {
  b || C(a, 4, this.length);
  return sa(this, a, true, 23, 4);
};
z.prototype.readFloatBE = function(a, b) {
  b || C(a, 4, this.length);
  return sa(this, a, false, 23, 4);
};
z.prototype.readDoubleLE = function(a, b) {
  b || C(a, 8, this.length);
  return sa(this, a, true, 52, 8);
};
z.prototype.readDoubleBE = function(a, b) {
  b || C(a, 8, this.length);
  return sa(this, a, false, 52, 8);
};
function E(a, b, c, d, e, f) {
  if (!A(a)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (b > e || b < f) throw new RangeError('"value" argument is out of bounds');
  if (c + d > a.length) throw new RangeError("Index out of range");
}
z.prototype.writeUIntLE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  c |= 0;
  d || E(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
  d = 1;
  var e = 0;
  for (this[b] = a & 255; ++e < c && (d *= 256); ) this[b + e] = a / d & 255;
  return b + c;
};
z.prototype.writeUIntBE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  c |= 0;
  d || E(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
  d = c - 1;
  var e = 1;
  for (this[b + d] = a & 255; 0 <= --d && (e *= 256); ) this[b + d] = a / e & 255;
  return b + c;
};
z.prototype.writeUInt8 = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 1, 255, 0);
  z.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
  this[b] = a & 255;
  return b + 1;
};
function bb(a, b, c, d) {
  0 > b && (b = 65535 + b + 1);
  for (var e = 0, f = Math.min(a.length - c, 2); e < f; ++e) a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e);
}
z.prototype.writeUInt16LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 2, 65535, 0);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : bb(this, a, b, true);
  return b + 2;
};
z.prototype.writeUInt16BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 2, 65535, 0);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : bb(this, a, b, false);
  return b + 2;
};
function cb(a, b, c, d) {
  0 > b && (b = 4294967295 + b + 1);
  for (var e = 0, f = Math.min(a.length - c, 4); e < f; ++e) a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255;
}
z.prototype.writeUInt32LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 4, 4294967295, 0);
  z.TYPED_ARRAY_SUPPORT ? (this[b + 3] = a >>> 24, this[b + 2] = a >>> 16, this[b + 1] = a >>> 8, this[b] = a & 255) : cb(this, a, b, true);
  return b + 4;
};
z.prototype.writeUInt32BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 4, 4294967295, 0);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : cb(this, a, b, false);
  return b + 4;
};
z.prototype.writeIntLE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  d || (d = Math.pow(2, 8 * c - 1), E(this, a, b, c, d - 1, -d));
  d = 0;
  var e = 1, f = 0;
  for (this[b] = a & 255; ++d < c && (e *= 256); ) 0 > a && 0 === f && 0 !== this[b + d - 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
  return b + c;
};
z.prototype.writeIntBE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  d || (d = Math.pow(2, 8 * c - 1), E(this, a, b, c, d - 1, -d));
  d = c - 1;
  var e = 1, f = 0;
  for (this[b + d] = a & 255; 0 <= --d && (e *= 256); ) 0 > a && 0 === f && 0 !== this[b + d + 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
  return b + c;
};
z.prototype.writeInt8 = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 1, 127, -128);
  z.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
  0 > a && (a = 255 + a + 1);
  this[b] = a & 255;
  return b + 1;
};
z.prototype.writeInt16LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 2, 32767, -32768);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : bb(this, a, b, true);
  return b + 2;
};
z.prototype.writeInt16BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 2, 32767, -32768);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : bb(this, a, b, false);
  return b + 2;
};
z.prototype.writeInt32LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 4, 2147483647, -2147483648);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8, this[b + 2] = a >>> 16, this[b + 3] = a >>> 24) : cb(this, a, b, true);
  return b + 4;
};
z.prototype.writeInt32BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 4, 2147483647, -2147483648);
  0 > a && (a = 4294967295 + a + 1);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : cb(this, a, b, false);
  return b + 4;
};
function db(a, b, c, d) {
  if (c + d > a.length) throw new RangeError("Index out of range");
  if (0 > c) throw new RangeError("Index out of range");
}
z.prototype.writeFloatLE = function(a, b, c) {
  c || db(this, a, b, 4);
  ta(this, a, b, true, 23, 4);
  return b + 4;
};
z.prototype.writeFloatBE = function(a, b, c) {
  c || db(this, a, b, 4);
  ta(this, a, b, false, 23, 4);
  return b + 4;
};
z.prototype.writeDoubleLE = function(a, b, c) {
  c || db(this, a, b, 8);
  ta(this, a, b, true, 52, 8);
  return b + 8;
};
z.prototype.writeDoubleBE = function(a, b, c) {
  c || db(this, a, b, 8);
  ta(this, a, b, false, 52, 8);
  return b + 8;
};
z.prototype.copy = function(a, b, c, d) {
  c || (c = 0);
  d || 0 === d || (d = this.length);
  b >= a.length && (b = a.length);
  b || (b = 0);
  0 < d && d < c && (d = c);
  if (d === c || 0 === a.length || 0 === this.length) return 0;
  if (0 > b) throw new RangeError("targetStart out of bounds");
  if (0 > c || c >= this.length) throw new RangeError("sourceStart out of bounds");
  if (0 > d) throw new RangeError("sourceEnd out of bounds");
  d > this.length && (d = this.length);
  a.length - b < d - c && (d = a.length - b + c);
  var e = d - c;
  if (this === a && c < b && b < d) for (d = e - 1; 0 <= d; --d) a[d + b] = this[d + c];
  else if (1e3 > e || !z.TYPED_ARRAY_SUPPORT) for (d = 0; d < e; ++d) a[d + b] = this[d + c];
  else Uint8Array.prototype.set.call(a, this.subarray(c, c + e), b);
  return e;
};
z.prototype.fill = function(a, b, c, d) {
  if ("string" === typeof a) {
    "string" === typeof b ? (d = b, b = 0, c = this.length) : "string" === typeof c && (d = c, c = this.length);
    if (1 === a.length) {
      var e = a.charCodeAt(0);
      256 > e && (a = e);
    }
    if (void 0 !== d && "string" !== typeof d) throw new TypeError("encoding must be a string");
    if ("string" === typeof d && !z.isEncoding(d)) throw new TypeError("Unknown encoding: " + d);
  } else "number" === typeof a && (a &= 255);
  if (0 > b || this.length < b || this.length < c) throw new RangeError("Out of range index");
  if (c <= b) return this;
  b >>>= 0;
  c = void 0 === c ? this.length : c >>> 0;
  a || (a = 0);
  if ("number" === typeof a) for (d = b; d < c; ++d) this[d] = a;
  else for (a = A(a) ? a : Oa(new z(a, d).toString()), e = a.length, d = 0; d < c - b; ++d) this[d + b] = a[d % e];
  return this;
};
var eb = /[^+\/0-9A-Za-z-_]/g;
function Oa(a, b) {
  b = b || Infinity;
  for (var c, d = a.length, e = null, f = [], g = 0; g < d; ++g) {
    c = a.charCodeAt(g);
    if (55295 < c && 57344 > c) {
      if (!e) {
        if (56319 < c) {
          -1 < (b -= 3) && f.push(239, 191, 189);
          continue;
        } else if (g + 1 === d) {
          -1 < (b -= 3) && f.push(239, 191, 189);
          continue;
        }
        e = c;
        continue;
      }
      if (56320 > c) {
        -1 < (b -= 3) && f.push(239, 191, 189);
        e = c;
        continue;
      }
      c = (e - 55296 << 10 | c - 56320) + 65536;
    } else e && -1 < (b -= 3) && f.push(239, 191, 189);
    e = null;
    if (128 > c) {
      if (0 > --b) break;
      f.push(c);
    } else if (2048 > c) {
      if (0 > (b -= 2)) break;
      f.push(c >> 6 | 192, c & 63 | 128);
    } else if (65536 > c) {
      if (0 > (b -= 3)) break;
      f.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128);
    } else if (1114112 > c) {
      if (0 > (b -= 4)) break;
      f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128);
    } else throw Error("Invalid code point");
  }
  return f;
}
function Wa(a) {
  for (var b = [], c = 0; c < a.length; ++c) b.push(a.charCodeAt(c) & 255);
  return b;
}
function Pa(a) {
  a = (a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")).replace(eb, "");
  if (2 > a.length) a = "";
  else for (; 0 !== a.length % 4; ) a += "=";
  oa || pa();
  var b = a.length;
  if (0 < b % 4) throw Error("Invalid string. Length must be a multiple of 4");
  var c = "=" === a[b - 2] ? 2 : "=" === a[b - 1] ? 1 : 0;
  var d = new ma(3 * b / 4 - c);
  var e = 0 < c ? b - 4 : b;
  var f = 0;
  for (b = 0; b < e; b += 4) {
    var g = y[a.charCodeAt(b)] << 18 | y[a.charCodeAt(b + 1)] << 12 | y[a.charCodeAt(b + 2)] << 6 | y[a.charCodeAt(b + 3)];
    d[f++] = g >> 16 & 255;
    d[f++] = g >> 8 & 255;
    d[f++] = g & 255;
  }
  2 === c ? (g = y[a.charCodeAt(b)] << 2 | y[a.charCodeAt(b + 1)] >> 4, d[f++] = g & 255) : 1 === c && (g = y[a.charCodeAt(b)] << 10 | y[a.charCodeAt(b + 1)] << 4 | y[a.charCodeAt(b + 2)] >> 2, d[f++] = g >> 8 & 255, d[f++] = g & 255);
  return d;
}
function Va(a, b, c, d) {
  for (var e = 0; e < d && !(e + c >= b.length || e >= a.length); ++e) b[e + c] = a[e];
  return e;
}
function Na(a) {
  return null != a && (!!a._isBuffer || fb(a) || "function" === typeof a.readFloatLE && "function" === typeof a.slice && fb(a.slice(0, 0)));
}
function fb(a) {
  return !!a.constructor && "function" === typeof a.constructor.isBuffer && a.constructor.isBuffer(a);
}
var gb = Object.freeze({ __proto__: null, INSPECT_MAX_BYTES: 50, kMaxLength: za, Buffer: z, SlowBuffer: function(a) {
  +a != a && (a = 0);
  return z.alloc(+a);
}, isBuffer: Na });
var F = u(function(a, b) {
  function c(a2) {
    for (var b2 = [], c2 = 1; c2 < arguments.length; c2++) b2[c2 - 1] = arguments[c2];
    return new (gb.Buffer.bind.apply(gb.Buffer, d([void 0, a2], b2)))();
  }
  var d = l && l.__spreadArrays || function() {
    for (var a2 = 0, b2 = 0, c2 = arguments.length; b2 < c2; b2++) a2 += arguments[b2].length;
    a2 = Array(a2);
    var d2 = 0;
    for (b2 = 0; b2 < c2; b2++) for (var k = arguments[b2], p = 0, n = k.length; p < n; p++, d2++) a2[d2] = k[p];
    return a2;
  };
  Object.defineProperty(b, "__esModule", { value: true });
  b.Buffer = gb.Buffer;
  b.bufferAllocUnsafe = gb.Buffer.allocUnsafe || c;
  b.bufferFrom = gb.Buffer.from || c;
});
t(F);
function hb() {
  throw Error("setTimeout has not been defined");
}
function ib() {
  throw Error("clearTimeout has not been defined");
}
var jb = hb;
var kb = ib;
"function" === typeof la.setTimeout && (jb = setTimeout);
"function" === typeof la.clearTimeout && (kb = clearTimeout);
function pb(a) {
  if (jb === setTimeout) return setTimeout(a, 0);
  if ((jb === hb || !jb) && setTimeout) return jb = setTimeout, setTimeout(a, 0);
  try {
    return jb(a, 0);
  } catch (b) {
    try {
      return jb.call(null, a, 0);
    } catch (c) {
      return jb.call(this, a, 0);
    }
  }
}
function rb(a) {
  if (kb === clearTimeout) return clearTimeout(a);
  if ((kb === ib || !kb) && clearTimeout) return kb = clearTimeout, clearTimeout(a);
  try {
    return kb(a);
  } catch (b) {
    try {
      return kb.call(null, a);
    } catch (c) {
      return kb.call(this, a);
    }
  }
}
var sb = [];
var tb = false;
var ub;
var vb = -1;
function wb() {
  tb && ub && (tb = false, ub.length ? sb = ub.concat(sb) : vb = -1, sb.length && xb());
}
function xb() {
  if (!tb) {
    var a = pb(wb);
    tb = true;
    for (var b = sb.length; b; ) {
      ub = sb;
      for (sb = []; ++vb < b; ) ub && ub[vb].run();
      vb = -1;
      b = sb.length;
    }
    ub = null;
    tb = false;
    rb(a);
  }
}
function G(a) {
  var b = Array(arguments.length - 1);
  if (1 < arguments.length) for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
  sb.push(new yb(a, b));
  1 !== sb.length || tb || pb(xb);
}
function yb(a, b) {
  this.fun = a;
  this.array = b;
}
yb.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function zb() {
}
var performance = la.performance || {};
var Ab = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
var Bb = /* @__PURE__ */ new Date();
var Cb = {
  nextTick: G,
  title: "browser",
  browser: true,
  env: {},
  argv: [],
  version: "",
  versions: {},
  on: zb,
  addListener: zb,
  once: zb,
  off: zb,
  removeListener: zb,
  removeAllListeners: zb,
  emit: zb,
  binding: function() {
    throw Error("process.binding is not supported");
  },
  cwd: function() {
    return "/";
  },
  chdir: function() {
    throw Error("process.chdir is not supported");
  },
  umask: function() {
    return 0;
  },
  hrtime: function(a) {
    var b = 1e-3 * Ab.call(performance), c = Math.floor(b);
    b = Math.floor(b % 1 * 1e9);
    a && (c -= a[0], b -= a[1], 0 > b && (c--, b += 1e9));
    return [c, b];
  },
  platform: "browser",
  release: {},
  config: {},
  uptime: function() {
    return (/* @__PURE__ */ new Date() - Bb) / 1e3;
  }
};
var Db = "function" === typeof Object.create ? function(a, b) {
  a.super_ = b;
  a.prototype = Object.create(b.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } });
} : function(a, b) {
  function c() {
  }
  a.super_ = b;
  c.prototype = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
};
var Eb = /%[sdj%]/g;
function Fb(a) {
  if (!Gb(a)) {
    for (var b = [], c = 0; c < arguments.length; c++) b.push(H(arguments[c]));
    return b.join(" ");
  }
  c = 1;
  var d = arguments, e = d.length;
  b = String(a).replace(Eb, function(a2) {
    if ("%%" === a2) return "%";
    if (c >= e) return a2;
    switch (a2) {
      case "%s":
        return String(d[c++]);
      case "%d":
        return Number(d[c++]);
      case "%j":
        try {
          return JSON.stringify(d[c++]);
        } catch (h) {
          return "[Circular]";
        }
      default:
        return a2;
    }
  });
  for (var f = d[c]; c < e; f = d[++c]) b = null !== f && Hb(f) ? b + (" " + H(f)) : b + (" " + f);
  return b;
}
function Ib(a, b) {
  if (Jb(la.process)) return function() {
    return Ib(a, b).apply(this, arguments);
  };
  if (true === Cb.noDeprecation) return a;
  var c = false;
  return function() {
    if (!c) {
      if (Cb.throwDeprecation) throw Error(b);
      Cb.traceDeprecation ? console.trace(b) : console.error(b);
      c = true;
    }
    return a.apply(this, arguments);
  };
}
var Kb = {};
var Lb;
function Mb(a) {
  Jb(Lb) && (Lb = Cb.env.NODE_DEBUG || "");
  a = a.toUpperCase();
  Kb[a] || (new RegExp("\\b" + a + "\\b", "i").test(Lb) ? Kb[a] = function() {
    var b = Fb.apply(null, arguments);
    console.error("%s %d: %s", a, 0, b);
  } : Kb[a] = function() {
  });
  return Kb[a];
}
function H(a, b) {
  var c = { seen: [], stylize: Nb };
  3 <= arguments.length && (c.depth = arguments[2]);
  4 <= arguments.length && (c.colors = arguments[3]);
  Ob(b) ? c.showHidden = b : b && Pb(c, b);
  Jb(c.showHidden) && (c.showHidden = false);
  Jb(c.depth) && (c.depth = 2);
  Jb(c.colors) && (c.colors = false);
  Jb(c.customInspect) && (c.customInspect = true);
  c.colors && (c.stylize = Qb);
  return Rb(c, a, c.depth);
}
H.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
H.styles = { special: "cyan", number: "yellow", "boolean": "yellow", undefined: "grey", "null": "bold", string: "green", date: "magenta", regexp: "red" };
function Qb(a, b) {
  return (b = H.styles[b]) ? "\x1B[" + H.colors[b][0] + "m" + a + "\x1B[" + H.colors[b][1] + "m" : a;
}
function Nb(a) {
  return a;
}
function Sb(a) {
  var b = {};
  a.forEach(function(a2) {
    b[a2] = true;
  });
  return b;
}
function Rb(a, b, c) {
  if (a.customInspect && b && Tb(b.inspect) && b.inspect !== H && (!b.constructor || b.constructor.prototype !== b)) {
    var d = b.inspect(c, a);
    Gb(d) || (d = Rb(a, d, c));
    return d;
  }
  if (d = Ub(a, b)) return d;
  var e = Object.keys(b), f = Sb(e);
  a.showHidden && (e = Object.getOwnPropertyNames(b));
  if (Vb(b) && (0 <= e.indexOf("message") || 0 <= e.indexOf("description"))) return Zb(b);
  if (0 === e.length) {
    if (Tb(b)) return a.stylize("[Function" + (b.name ? ": " + b.name : "") + "]", "special");
    if (ac(b)) return a.stylize(
      RegExp.prototype.toString.call(b),
      "regexp"
    );
    if (bc(b)) return a.stylize(Date.prototype.toString.call(b), "date");
    if (Vb(b)) return Zb(b);
  }
  d = "";
  var g = false, h = ["{", "}"];
  cc(b) && (g = true, h = ["[", "]"]);
  Tb(b) && (d = " [Function" + (b.name ? ": " + b.name : "") + "]");
  ac(b) && (d = " " + RegExp.prototype.toString.call(b));
  bc(b) && (d = " " + Date.prototype.toUTCString.call(b));
  Vb(b) && (d = " " + Zb(b));
  if (0 === e.length && (!g || 0 == b.length)) return h[0] + d + h[1];
  if (0 > c) return ac(b) ? a.stylize(RegExp.prototype.toString.call(b), "regexp") : a.stylize("[Object]", "special");
  a.seen.push(b);
  e = g ? dc(a, b, c, f, e) : e.map(function(d2) {
    return ec(a, b, c, f, d2, g);
  });
  a.seen.pop();
  return fc(e, d, h);
}
function Ub(a, b) {
  if (Jb(b)) return a.stylize("undefined", "undefined");
  if (Gb(b)) return b = "'" + JSON.stringify(b).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'", a.stylize(b, "string");
  if (gc(b)) return a.stylize("" + b, "number");
  if (Ob(b)) return a.stylize("" + b, "boolean");
  if (null === b) return a.stylize("null", "null");
}
function Zb(a) {
  return "[" + Error.prototype.toString.call(a) + "]";
}
function dc(a, b, c, d, e) {
  for (var f = [], g = 0, h = b.length; g < h; ++g) Object.prototype.hasOwnProperty.call(b, String(g)) ? f.push(ec(a, b, c, d, String(g), true)) : f.push("");
  e.forEach(function(e2) {
    e2.match(/^\d+$/) || f.push(ec(a, b, c, d, e2, true));
  });
  return f;
}
function ec(a, b, c, d, e, f) {
  var g, h;
  b = Object.getOwnPropertyDescriptor(b, e) || { value: b[e] };
  b.get ? h = b.set ? a.stylize("[Getter/Setter]", "special") : a.stylize("[Getter]", "special") : b.set && (h = a.stylize("[Setter]", "special"));
  Object.prototype.hasOwnProperty.call(d, e) || (g = "[" + e + "]");
  h || (0 > a.seen.indexOf(b.value) ? (h = null === c ? Rb(a, b.value, null) : Rb(a, b.value, c - 1), -1 < h.indexOf("\n") && (h = f ? h.split("\n").map(function(a2) {
    return "  " + a2;
  }).join("\n").substr(2) : "\n" + h.split("\n").map(function(a2) {
    return "   " + a2;
  }).join("\n"))) : h = a.stylize("[Circular]", "special"));
  if (Jb(g)) {
    if (f && e.match(/^\d+$/)) return h;
    g = JSON.stringify("" + e);
    g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (g = g.substr(1, g.length - 2), g = a.stylize(g, "name")) : (g = g.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), g = a.stylize(g, "string"));
  }
  return g + ": " + h;
}
function fc(a, b, c) {
  return 60 < a.reduce(function(a2, b2) {
    b2.indexOf("\n");
    return a2 + b2.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0) ? c[0] + ("" === b ? "" : b + "\n ") + " " + a.join(",\n  ") + " " + c[1] : c[0] + b + " " + a.join(", ") + " " + c[1];
}
function cc(a) {
  return Array.isArray(a);
}
function Ob(a) {
  return "boolean" === typeof a;
}
function gc(a) {
  return "number" === typeof a;
}
function Gb(a) {
  return "string" === typeof a;
}
function Jb(a) {
  return void 0 === a;
}
function ac(a) {
  return Hb(a) && "[object RegExp]" === Object.prototype.toString.call(a);
}
function Hb(a) {
  return "object" === typeof a && null !== a;
}
function bc(a) {
  return Hb(a) && "[object Date]" === Object.prototype.toString.call(a);
}
function Vb(a) {
  return Hb(a) && ("[object Error]" === Object.prototype.toString.call(a) || a instanceof Error);
}
function Tb(a) {
  return "function" === typeof a;
}
function hc(a) {
  return null === a || "boolean" === typeof a || "number" === typeof a || "string" === typeof a || "symbol" === typeof a || "undefined" === typeof a;
}
function ic(a) {
  return 10 > a ? "0" + a.toString(10) : a.toString(10);
}
var jc = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
function kc() {
  var a = /* @__PURE__ */ new Date(), b = [ic(a.getHours()), ic(a.getMinutes()), ic(a.getSeconds())].join(":");
  return [a.getDate(), jc[a.getMonth()], b].join(" ");
}
function Pb(a, b) {
  if (!b || !Hb(b)) return a;
  for (var c = Object.keys(b), d = c.length; d--; ) a[c[d]] = b[c[d]];
  return a;
}
var lc = { inherits: Db, _extend: Pb, log: function() {
  console.log("%s - %s", kc(), Fb.apply(null, arguments));
}, isBuffer: function(a) {
  return Na(a);
}, isPrimitive: hc, isFunction: Tb, isError: Vb, isDate: bc, isObject: Hb, isRegExp: ac, isUndefined: Jb, isSymbol: function(a) {
  return "symbol" === typeof a;
}, isString: Gb, isNumber: gc, isNullOrUndefined: function(a) {
  return null == a;
}, isNull: function(a) {
  return null === a;
}, isBoolean: Ob, isArray: cc, inspect: H, deprecate: Ib, format: Fb, debuglog: Mb };
function mc(a, b) {
  if (a === b) return 0;
  for (var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e) if (a[e] !== b[e]) {
    c = a[e];
    d = b[e];
    break;
  }
  return c < d ? -1 : d < c ? 1 : 0;
}
var nc = Object.prototype.hasOwnProperty;
var oc = Object.keys || function(a) {
  var b = [], c;
  for (c in a) nc.call(a, c) && b.push(c);
  return b;
};
var pc = Array.prototype.slice;
var qc;
function rc() {
  return "undefined" !== typeof qc ? qc : qc = function() {
    return "foo" === function() {
    }.name;
  }();
}
function sc(a) {
  return Na(a) || "function" !== typeof la.ArrayBuffer ? false : "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(a) : a ? a instanceof DataView || a.buffer && a.buffer instanceof ArrayBuffer ? true : false : false;
}
function I(a, b) {
  a || J(a, true, b, "==", tc);
}
var uc = /\s*function\s+([^\(\s]*)\s*/;
function vc(a) {
  if (Tb(a)) return rc() ? a.name : (a = a.toString().match(uc)) && a[1];
}
I.AssertionError = wc;
function wc(a) {
  this.name = "AssertionError";
  this.actual = a.actual;
  this.expected = a.expected;
  this.operator = a.operator;
  a.message ? (this.message = a.message, this.generatedMessage = false) : (this.message = xc(yc(this.actual), 128) + " " + this.operator + " " + xc(yc(this.expected), 128), this.generatedMessage = true);
  var b = a.stackStartFunction || J;
  Error.captureStackTrace ? Error.captureStackTrace(this, b) : (a = Error(), a.stack && (a = a.stack, b = vc(b), b = a.indexOf("\n" + b), 0 <= b && (b = a.indexOf("\n", b + 1), a = a.substring(b + 1)), this.stack = a));
}
Db(wc, Error);
function xc(a, b) {
  return "string" === typeof a ? a.length < b ? a : a.slice(0, b) : a;
}
function yc(a) {
  if (rc() || !Tb(a)) return H(a);
  a = vc(a);
  return "[Function" + (a ? ": " + a : "") + "]";
}
function J(a, b, c, d, e) {
  throw new wc({ message: c, actual: a, expected: b, operator: d, stackStartFunction: e });
}
I.fail = J;
function tc(a, b) {
  a || J(a, true, b, "==", tc);
}
I.ok = tc;
I.equal = zc;
function zc(a, b, c) {
  a != b && J(a, b, c, "==", zc);
}
I.notEqual = Ac;
function Ac(a, b, c) {
  a == b && J(a, b, c, "!=", Ac);
}
I.deepEqual = Bc;
function Bc(a, b, c) {
  Cc(a, b, false) || J(a, b, c, "deepEqual", Bc);
}
I.deepStrictEqual = Dc;
function Dc(a, b, c) {
  Cc(a, b, true) || J(a, b, c, "deepStrictEqual", Dc);
}
function Cc(a, b, c, d) {
  if (a === b) return true;
  if (Na(a) && Na(b)) return 0 === mc(a, b);
  if (bc(a) && bc(b)) return a.getTime() === b.getTime();
  if (ac(a) && ac(b)) return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
  if (null !== a && "object" === typeof a || null !== b && "object" === typeof b) {
    if (!sc(a) || !sc(b) || Object.prototype.toString.call(a) !== Object.prototype.toString.call(b) || a instanceof Float32Array || a instanceof Float64Array) {
      if (Na(a) !== Na(b)) return false;
      d = d || { actual: [], expected: [] };
      var e = d.actual.indexOf(a);
      if (-1 !== e && e === d.expected.indexOf(b)) return true;
      d.actual.push(a);
      d.expected.push(b);
      return Ec(a, b, c, d);
    }
    return 0 === mc(new Uint8Array(a.buffer), new Uint8Array(b.buffer));
  }
  return c ? a === b : a == b;
}
function Fc(a) {
  return "[object Arguments]" == Object.prototype.toString.call(a);
}
function Ec(a, b, c, d) {
  if (null === a || void 0 === a || null === b || void 0 === b) return false;
  if (hc(a) || hc(b)) return a === b;
  if (c && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
  var e = Fc(a), f = Fc(b);
  if (e && !f || !e && f) return false;
  if (e) return a = pc.call(a), b = pc.call(b), Cc(a, b, c);
  e = oc(a);
  var g = oc(b);
  if (e.length !== g.length) return false;
  e.sort();
  g.sort();
  for (f = e.length - 1; 0 <= f; f--) if (e[f] !== g[f]) return false;
  for (f = e.length - 1; 0 <= f; f--) if (g = e[f], !Cc(a[g], b[g], c, d)) return false;
  return true;
}
I.notDeepEqual = Gc;
function Gc(a, b, c) {
  Cc(a, b, false) && J(a, b, c, "notDeepEqual", Gc);
}
I.notDeepStrictEqual = Hc;
function Hc(a, b, c) {
  Cc(a, b, true) && J(a, b, c, "notDeepStrictEqual", Hc);
}
I.strictEqual = Ic;
function Ic(a, b, c) {
  a !== b && J(a, b, c, "===", Ic);
}
I.notStrictEqual = Jc;
function Jc(a, b, c) {
  a === b && J(a, b, c, "!==", Jc);
}
function Kc(a, b) {
  if (!a || !b) return false;
  if ("[object RegExp]" == Object.prototype.toString.call(b)) return b.test(a);
  try {
    if (a instanceof b) return true;
  } catch (c) {
  }
  return Error.isPrototypeOf(b) ? false : true === b.call({}, a);
}
function Lc(a, b, c, d) {
  if ("function" !== typeof b) throw new TypeError('"block" argument must be a function');
  "string" === typeof c && (d = c, c = null);
  try {
    b();
  } catch (h) {
    var e = h;
  }
  b = e;
  d = (c && c.name ? " (" + c.name + ")." : ".") + (d ? " " + d : ".");
  a && !b && J(b, c, "Missing expected exception" + d);
  e = "string" === typeof d;
  var f = !a && Vb(b), g = !a && b && !c;
  (f && e && Kc(b, c) || g) && J(b, c, "Got unwanted exception" + d);
  if (a && b && c && !Kc(b, c) || !a && b) throw b;
}
I.throws = Mc;
function Mc(a, b, c) {
  Lc(true, a, b, c);
}
I.doesNotThrow = Nc;
function Nc(a, b, c) {
  Lc(false, a, b, c);
}
I.ifError = Oc;
function Oc(a) {
  if (a) throw a;
}
var Pc = u(function(a, b) {
  function c(a2) {
    return function(a3) {
      function b2(b3) {
        for (var c2 = [], e2 = 1; e2 < arguments.length; e2++) c2[e2 - 1] = arguments[e2];
        c2 = a3.call(this, d(b3, c2)) || this;
        c2.code = b3;
        c2[h] = b3;
        c2.name = a3.prototype.name + " [" + c2[h] + "]";
        return c2;
      }
      g(b2, a3);
      return b2;
    }(a2);
  }
  function d(a2, b2) {
    I.strictEqual(typeof a2, "string");
    var c2 = k[a2];
    I(c2, "An invalid error message key was used: " + a2 + ".");
    if ("function" === typeof c2) a2 = c2;
    else {
      a2 = lc.format;
      if (void 0 === b2 || 0 === b2.length) return c2;
      b2.unshift(c2);
    }
    return String(a2.apply(null, b2));
  }
  function e(a2, b2) {
    k[a2] = "function" === typeof b2 ? b2 : String(b2);
  }
  function f(a2, b2) {
    I(a2, "expected is required");
    I("string" === typeof b2, "thing is required");
    if (Array.isArray(a2)) {
      var c2 = a2.length;
      I(0 < c2, "At least one expected value needs to be specified");
      a2 = a2.map(function(a3) {
        return String(a3);
      });
      return 2 < c2 ? "one of " + b2 + " " + a2.slice(0, c2 - 1).join(", ") + ", or " + a2[c2 - 1] : 2 === c2 ? "one of " + b2 + " " + a2[0] + " or " + a2[1] : "of " + b2 + " " + a2[0];
    }
    return "of " + b2 + " " + String(a2);
  }
  var g = l && l.__extends || /* @__PURE__ */ function() {
    function a2(b2, c2) {
      a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, b3) {
        a3.__proto__ = b3;
      } || function(a3, b3) {
        for (var c3 in b3) b3.hasOwnProperty(c3) && (a3[c3] = b3[c3]);
      };
      return a2(b2, c2);
    }
    return function(b2, c2) {
      function d2() {
        this.constructor = b2;
      }
      a2(b2, c2);
      b2.prototype = null === c2 ? Object.create(c2) : (d2.prototype = c2.prototype, new d2());
    };
  }();
  Object.defineProperty(b, "__esModule", { value: true });
  var h = "undefined" === typeof Symbol ? "_kCode" : Symbol("code"), k = {};
  a = function(a2) {
    function c2(c3) {
      if ("object" !== typeof c3 || null === c3) throw new b.TypeError("ERR_INVALID_ARG_TYPE", "options", "object");
      var d2 = c3.message ? a2.call(this, c3.message) || this : a2.call(this, lc.inspect(c3.actual).slice(0, 128) + " " + (c3.operator + " " + lc.inspect(c3.expected).slice(0, 128))) || this;
      d2.generatedMessage = !c3.message;
      d2.name = "AssertionError [ERR_ASSERTION]";
      d2.code = "ERR_ASSERTION";
      d2.actual = c3.actual;
      d2.expected = c3.expected;
      d2.operator = c3.operator;
      b.Error.captureStackTrace(d2, c3.stackStartFunction);
      return d2;
    }
    g(c2, a2);
    return c2;
  }(l.Error);
  b.AssertionError = a;
  b.message = d;
  b.E = e;
  b.Error = c(l.Error);
  b.TypeError = c(l.TypeError);
  b.RangeError = c(l.RangeError);
  e(
    "ERR_ARG_NOT_ITERABLE",
    "%s must be iterable"
  );
  e("ERR_ASSERTION", "%s");
  e("ERR_BUFFER_OUT_OF_BOUNDS", function(a2, b2) {
    return b2 ? "Attempt to write outside buffer bounds" : '"' + a2 + '" is outside of buffer bounds';
  });
  e("ERR_CHILD_CLOSED_BEFORE_REPLY", "Child closed before reply received");
  e("ERR_CONSOLE_WRITABLE_STREAM", "Console expects a writable stream instance for %s");
  e("ERR_CPU_USAGE", "Unable to obtain cpu usage %s");
  e("ERR_DNS_SET_SERVERS_FAILED", function(a2, b2) {
    return 'c-ares failed to set servers: "' + a2 + '" [' + b2 + "]";
  });
  e(
    "ERR_FALSY_VALUE_REJECTION",
    "Promise was rejected with falsy value"
  );
  e("ERR_ENCODING_NOT_SUPPORTED", function(a2) {
    return 'The "' + a2 + '" encoding is not supported';
  });
  e("ERR_ENCODING_INVALID_ENCODED_DATA", function(a2) {
    return "The encoded data was not valid for encoding " + a2;
  });
  e("ERR_HTTP_HEADERS_SENT", "Cannot render headers after they are sent to the client");
  e("ERR_HTTP_INVALID_STATUS_CODE", "Invalid status code: %s");
  e("ERR_HTTP_TRAILER_INVALID", "Trailers are invalid with this transfer encoding");
  e("ERR_INDEX_OUT_OF_RANGE", "Index out of range");
  e("ERR_INVALID_ARG_TYPE", function(a2, b2, c2) {
    I(a2, "name is required");
    if (b2.includes("not ")) {
      var d2 = "must not be";
      b2 = b2.split("not ")[1];
    } else d2 = "must be";
    if (Array.isArray(a2)) d2 = "The " + a2.map(function(a3) {
      return '"' + a3 + '"';
    }).join(", ") + " arguments " + d2 + " " + f(b2, "type");
    else if (a2.includes(" argument")) d2 = "The " + a2 + " " + d2 + " " + f(b2, "type");
    else {
      var e2 = a2.includes(".") ? "property" : "argument";
      d2 = 'The "' + a2 + '" ' + e2 + " " + d2 + " " + f(b2, "type");
    }
    3 <= arguments.length && (d2 += ". Received type " + (null !== c2 ? typeof c2 : "null"));
    return d2;
  });
  e(
    "ERR_INVALID_ARRAY_LENGTH",
    function(a2, b2, c2) {
      I.strictEqual(typeof c2, "number");
      return 'The array "' + a2 + '" (length ' + c2 + ") must be of length " + b2 + ".";
    }
  );
  e("ERR_INVALID_BUFFER_SIZE", "Buffer size must be a multiple of %s");
  e("ERR_INVALID_CALLBACK", "Callback must be a function");
  e("ERR_INVALID_CHAR", "Invalid character in %s");
  e("ERR_INVALID_CURSOR_POS", "Cannot set cursor row without setting its column");
  e("ERR_INVALID_FD", '"fd" must be a positive integer: %s');
  e("ERR_INVALID_FILE_URL_HOST", 'File URL host must be "localhost" or empty on %s');
  e("ERR_INVALID_FILE_URL_PATH", "File URL path %s");
  e("ERR_INVALID_HANDLE_TYPE", "This handle type cannot be sent");
  e("ERR_INVALID_IP_ADDRESS", "Invalid IP address: %s");
  e("ERR_INVALID_OPT_VALUE", function(a2, b2) {
    return 'The value "' + String(b2) + '" is invalid for option "' + a2 + '"';
  });
  e("ERR_INVALID_OPT_VALUE_ENCODING", function(a2) {
    return 'The value "' + String(a2) + '" is invalid for option "encoding"';
  });
  e("ERR_INVALID_REPL_EVAL_CONFIG", 'Cannot specify both "breakEvalOnSigint" and "eval" for REPL');
  e(
    "ERR_INVALID_SYNC_FORK_INPUT",
    "Asynchronous forks do not support Buffer, Uint8Array or string input: %s"
  );
  e("ERR_INVALID_THIS", 'Value of "this" must be of type %s');
  e("ERR_INVALID_TUPLE", "%s must be an iterable %s tuple");
  e("ERR_INVALID_URL", "Invalid URL: %s");
  e("ERR_INVALID_URL_SCHEME", function(a2) {
    return "The URL must be " + f(a2, "scheme");
  });
  e("ERR_IPC_CHANNEL_CLOSED", "Channel closed");
  e("ERR_IPC_DISCONNECTED", "IPC channel is already disconnected");
  e("ERR_IPC_ONE_PIPE", "Child process can have only one IPC pipe");
  e(
    "ERR_IPC_SYNC_FORK",
    "IPC cannot be used with synchronous forks"
  );
  e("ERR_MISSING_ARGS", function() {
    for (var a2 = [], b2 = 0; b2 < arguments.length; b2++) a2[b2] = arguments[b2];
    I(0 < a2.length, "At least one arg needs to be specified");
    b2 = "The ";
    var c2 = a2.length;
    a2 = a2.map(function(a3) {
      return '"' + a3 + '"';
    });
    switch (c2) {
      case 1:
        b2 += a2[0] + " argument";
        break;
      case 2:
        b2 += a2[0] + " and " + a2[1] + " arguments";
        break;
      default:
        b2 += a2.slice(0, c2 - 1).join(", "), b2 += ", and " + a2[c2 - 1] + " arguments";
    }
    return b2 + " must be specified";
  });
  e("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  e("ERR_NAPI_CONS_FUNCTION", "Constructor must be a function");
  e("ERR_NAPI_CONS_PROTOTYPE_OBJECT", "Constructor.prototype must be an object");
  e("ERR_NO_CRYPTO", "Node.js is not compiled with OpenSSL crypto support");
  e("ERR_NO_LONGER_SUPPORTED", "%s is no longer supported");
  e("ERR_PARSE_HISTORY_DATA", "Could not parse history data in %s");
  e("ERR_SOCKET_ALREADY_BOUND", "Socket is already bound");
  e("ERR_SOCKET_BAD_PORT", "Port should be > 0 and < 65536");
  e("ERR_SOCKET_BAD_TYPE", "Bad socket type specified. Valid types are: udp4, udp6");
  e("ERR_SOCKET_CANNOT_SEND", "Unable to send data");
  e("ERR_SOCKET_CLOSED", "Socket is closed");
  e("ERR_SOCKET_DGRAM_NOT_RUNNING", "Not running");
  e("ERR_STDERR_CLOSE", "process.stderr cannot be closed");
  e("ERR_STDOUT_CLOSE", "process.stdout cannot be closed");
  e("ERR_STREAM_WRAP", "Stream has StringDecoder set or is in objectMode");
  e("ERR_TLS_CERT_ALTNAME_INVALID", "Hostname/IP does not match certificate's altnames: %s");
  e("ERR_TLS_DH_PARAM_SIZE", function(a2) {
    return "DH parameter size " + a2 + " is less than 2048";
  });
  e("ERR_TLS_HANDSHAKE_TIMEOUT", "TLS handshake timeout");
  e("ERR_TLS_RENEGOTIATION_FAILED", "Failed to renegotiate");
  e("ERR_TLS_REQUIRED_SERVER_NAME", '"servername" is required parameter for Server.addContext');
  e("ERR_TLS_SESSION_ATTACK", "TSL session renegotiation attack detected");
  e("ERR_TRANSFORM_ALREADY_TRANSFORMING", "Calling transform done when still transforming");
  e("ERR_TRANSFORM_WITH_LENGTH_0", "Calling transform done when writableState.length != 0");
  e("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s");
  e("ERR_UNKNOWN_SIGNAL", "Unknown signal: %s");
  e("ERR_UNKNOWN_STDIN_TYPE", "Unknown stdin file type");
  e("ERR_UNKNOWN_STREAM_TYPE", "Unknown stream file type");
  e("ERR_V8BREAKITERATOR", "Full ICU data not installed. See https://github.com/nodejs/node/wiki/Intl");
});
t(Pc);
var K = u(function(a, b) {
  Object.defineProperty(b, "__esModule", { value: true });
  b.ENCODING_UTF8 = "utf8";
  b.assertEncoding = function(a2) {
    if (a2 && !F.Buffer.isEncoding(a2)) throw new Pc.TypeError("ERR_INVALID_OPT_VALUE_ENCODING", a2);
  };
  b.strToEncoding = function(a2, d) {
    return d && d !== b.ENCODING_UTF8 ? "buffer" === d ? new F.Buffer(a2) : new F.Buffer(a2).toString(d) : a2;
  };
});
t(K);
var Qc = u(function(a, b) {
  Object.defineProperty(b, "__esModule", { value: true });
  var c = w.constants.S_IFMT, d = w.constants.S_IFDIR, e = w.constants.S_IFREG, f = w.constants.S_IFBLK, g = w.constants.S_IFCHR, h = w.constants.S_IFLNK, k = w.constants.S_IFIFO, p = w.constants.S_IFSOCK;
  a = function() {
    function a2() {
      this.name = "";
      this.mode = 0;
    }
    a2.build = function(b2, c2) {
      var d2 = new a2(), e2 = b2.getNode().mode;
      d2.name = K.strToEncoding(b2.getName(), c2);
      d2.mode = e2;
      return d2;
    };
    a2.prototype._checkModeProperty = function(a3) {
      return (this.mode & c) === a3;
    };
    a2.prototype.isDirectory = function() {
      return this._checkModeProperty(d);
    };
    a2.prototype.isFile = function() {
      return this._checkModeProperty(e);
    };
    a2.prototype.isBlockDevice = function() {
      return this._checkModeProperty(f);
    };
    a2.prototype.isCharacterDevice = function() {
      return this._checkModeProperty(g);
    };
    a2.prototype.isSymbolicLink = function() {
      return this._checkModeProperty(h);
    };
    a2.prototype.isFIFO = function() {
      return this._checkModeProperty(k);
    };
    a2.prototype.isSocket = function() {
      return this._checkModeProperty(p);
    };
    return a2;
  }();
  b.Dirent = a;
  b.default = a;
});
t(Qc);
function Rc(a, b) {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var e = a[d];
    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) for (; c--; c) a.unshift("..");
  return a;
}
var Sc = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
function Tc() {
  for (var a = "", b = false, c = arguments.length - 1; -1 <= c && !b; c--) {
    var d = 0 <= c ? arguments[c] : "/";
    if ("string" !== typeof d) throw new TypeError("Arguments to path.resolve must be strings");
    d && (a = d + "/" + a, b = "/" === d.charAt(0));
  }
  a = Rc(Uc(a.split("/"), function(a2) {
    return !!a2;
  }), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
function Vc(a) {
  var b = Wc(a), c = "/" === Xc(a, -1);
  (a = Rc(Uc(a.split("/"), function(a2) {
    return !!a2;
  }), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}
function Wc(a) {
  return "/" === a.charAt(0);
}
function Yc(a, b) {
  function c(a2) {
    for (var b2 = 0; b2 < a2.length && "" === a2[b2]; b2++) ;
    for (var c2 = a2.length - 1; 0 <= c2 && "" === a2[c2]; c2--) ;
    return b2 > c2 ? [] : a2.slice(b2, c2 - b2 + 1);
  }
  a = Tc(a).substr(1);
  b = Tc(b).substr(1);
  a = c(a.split("/"));
  b = c(b.split("/"));
  for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++) if (a[f] !== b[f]) {
    e = f;
    break;
  }
  d = [];
  for (f = e; f < a.length; f++) d.push("..");
  d = d.concat(b.slice(e));
  return d.join("/");
}
var Zc = { extname: function(a) {
  return Sc.exec(a).slice(1)[3];
}, basename: function(a, b) {
  a = Sc.exec(a).slice(1)[2];
  b && a.substr(-1 * b.length) === b && (a = a.substr(0, a.length - b.length));
  return a;
}, dirname: function(a) {
  var b = Sc.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) return ".";
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}, sep: "/", delimiter: ":", relative: Yc, join: function() {
  var a = Array.prototype.slice.call(arguments, 0);
  return Vc(Uc(a, function(a2) {
    if ("string" !== typeof a2) throw new TypeError("Arguments to path.join must be strings");
    return a2;
  }).join("/"));
}, isAbsolute: Wc, normalize: Vc, resolve: Tc };
function Uc(a, b) {
  if (a.filter) return a.filter(b);
  for (var c = [], d = 0; d < a.length; d++) b(a[d], d, a) && c.push(a[d]);
  return c;
}
var Xc = "b" === "ab".substr(-1) ? function(a, b, c) {
  return a.substr(b, c);
} : function(a, b, c) {
  0 > b && (b = a.length + b);
  return a.substr(b, c);
};
var $c = u(function(a, b) {
  Object.defineProperty(b, "__esModule", { value: true });
  a = "function" === typeof __setImmediate$ ? __setImmediate$.bind(l) : setTimeout.bind(l);
  b.default = a;
});
t($c);
var L = u(function(a, b) {
  function c() {
    var a2 = Cb || {};
    a2.getuid || (a2.getuid = function() {
      return 0;
    });
    a2.getgid || (a2.getgid = function() {
      return 0;
    });
    a2.cwd || (a2.cwd = function() {
      return "/";
    });
    a2.nextTick || (a2.nextTick = $c.default);
    a2.emitWarning || (a2.emitWarning = function(a3, b2) {
      console.warn("" + b2 + (b2 ? ": " : "") + a3);
    });
    a2.env || (a2.env = {});
    return a2;
  }
  Object.defineProperty(b, "__esModule", { value: true });
  b.createProcess = c;
  b.default = c();
});
t(L);
function ad() {
}
ad.prototype = /* @__PURE__ */ Object.create(null);
function O() {
  O.init.call(this);
}
O.EventEmitter = O;
O.usingDomains = false;
O.prototype.domain = void 0;
O.prototype._events = void 0;
O.prototype._maxListeners = void 0;
O.defaultMaxListeners = 10;
O.init = function() {
  this.domain = null;
  this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new ad(), this._eventsCount = 0);
  this._maxListeners = this._maxListeners || void 0;
};
O.prototype.setMaxListeners = function(a) {
  if ("number" !== typeof a || 0 > a || isNaN(a)) throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = a;
  return this;
};
O.prototype.getMaxListeners = function() {
  return void 0 === this._maxListeners ? O.defaultMaxListeners : this._maxListeners;
};
O.prototype.emit = function(a) {
  var b, c;
  var d = "error" === a;
  if (b = this._events) d = d && null == b.error;
  else if (!d) return false;
  var e = this.domain;
  if (d) {
    b = arguments[1];
    if (e) b || (b = Error('Uncaught, unspecified "error" event')), b.domainEmitter = this, b.domain = e, b.domainThrown = false, e.emit("error", b);
    else {
      if (b instanceof Error) throw b;
      e = Error('Uncaught, unspecified "error" event. (' + b + ")");
      e.context = b;
      throw e;
    }
    return false;
  }
  e = b[a];
  if (!e) return false;
  b = "function" === typeof e;
  var f = arguments.length;
  switch (f) {
    case 1:
      if (b) e.call(this);
      else for (b = e.length, e = bd(e, b), d = 0; d < b; ++d) e[d].call(this);
      break;
    case 2:
      d = arguments[1];
      if (b) e.call(this, d);
      else for (b = e.length, e = bd(e, b), f = 0; f < b; ++f) e[f].call(this, d);
      break;
    case 3:
      d = arguments[1];
      f = arguments[2];
      if (b) e.call(this, d, f);
      else for (b = e.length, e = bd(e, b), c = 0; c < b; ++c) e[c].call(this, d, f);
      break;
    case 4:
      d = arguments[1];
      f = arguments[2];
      c = arguments[3];
      if (b) e.call(this, d, f, c);
      else {
        b = e.length;
        e = bd(e, b);
        for (var g = 0; g < b; ++g) e[g].call(this, d, f, c);
      }
      break;
    default:
      d = Array(f - 1);
      for (c = 1; c < f; c++) d[c - 1] = arguments[c];
      if (b) e.apply(this, d);
      else for (b = e.length, e = bd(e, b), f = 0; f < b; ++f) e[f].apply(this, d);
  }
  return true;
};
function cd(a, b, c, d) {
  var e;
  if ("function" !== typeof c) throw new TypeError('"listener" argument must be a function');
  if (e = a._events) {
    e.newListener && (a.emit("newListener", b, c.listener ? c.listener : c), e = a._events);
    var f = e[b];
  } else e = a._events = new ad(), a._eventsCount = 0;
  f ? ("function" === typeof f ? f = e[b] = d ? [c, f] : [f, c] : d ? f.unshift(c) : f.push(c), f.warned || (c = void 0 === a._maxListeners ? O.defaultMaxListeners : a._maxListeners) && 0 < c && f.length > c && (f.warned = true, c = Error("Possible EventEmitter memory leak detected. " + f.length + " " + b + " listeners added. Use emitter.setMaxListeners() to increase limit"), c.name = "MaxListenersExceededWarning", c.emitter = a, c.type = b, c.count = f.length, "function" === typeof console.warn ? console.warn(c) : console.log(c))) : (e[b] = c, ++a._eventsCount);
  return a;
}
O.prototype.addListener = function(a, b) {
  return cd(this, a, b, false);
};
O.prototype.on = O.prototype.addListener;
O.prototype.prependListener = function(a, b) {
  return cd(this, a, b, true);
};
function dd(a, b, c) {
  function d() {
    a.removeListener(b, d);
    e || (e = true, c.apply(a, arguments));
  }
  var e = false;
  d.listener = c;
  return d;
}
O.prototype.once = function(a, b) {
  if ("function" !== typeof b) throw new TypeError('"listener" argument must be a function');
  this.on(a, dd(this, a, b));
  return this;
};
O.prototype.prependOnceListener = function(a, b) {
  if ("function" !== typeof b) throw new TypeError('"listener" argument must be a function');
  this.prependListener(a, dd(this, a, b));
  return this;
};
O.prototype.removeListener = function(a, b) {
  var c;
  if ("function" !== typeof b) throw new TypeError('"listener" argument must be a function');
  var d = this._events;
  if (!d) return this;
  var e = d[a];
  if (!e) return this;
  if (e === b || e.listener && e.listener === b) 0 === --this._eventsCount ? this._events = new ad() : (delete d[a], d.removeListener && this.emit("removeListener", a, e.listener || b));
  else if ("function" !== typeof e) {
    var f = -1;
    for (c = e.length; 0 < c--; ) if (e[c] === b || e[c].listener && e[c].listener === b) {
      var g = e[c].listener;
      f = c;
      break;
    }
    if (0 > f) return this;
    if (1 === e.length) {
      e[0] = void 0;
      if (0 === --this._eventsCount) return this._events = new ad(), this;
      delete d[a];
    } else {
      c = f + 1;
      for (var h = e.length; c < h; f += 1, c += 1) e[f] = e[c];
      e.pop();
    }
    d.removeListener && this.emit("removeListener", a, g || b);
  }
  return this;
};
O.prototype.removeAllListeners = function(a) {
  var b = this._events;
  if (!b) return this;
  if (!b.removeListener) return 0 === arguments.length ? (this._events = new ad(), this._eventsCount = 0) : b[a] && (0 === --this._eventsCount ? this._events = new ad() : delete b[a]), this;
  if (0 === arguments.length) {
    b = Object.keys(b);
    for (var c = 0, d; c < b.length; ++c) d = b[c], "removeListener" !== d && this.removeAllListeners(d);
    this.removeAllListeners("removeListener");
    this._events = new ad();
    this._eventsCount = 0;
    return this;
  }
  b = b[a];
  if ("function" === typeof b) this.removeListener(
    a,
    b
  );
  else if (b) {
    do
      this.removeListener(a, b[b.length - 1]);
    while (b[0]);
  }
  return this;
};
O.prototype.listeners = function(a) {
  var b = this._events;
  if (b) if (a = b[a]) if ("function" === typeof a) a = [a.listener || a];
  else {
    b = Array(a.length);
    for (var c = 0; c < b.length; ++c) b[c] = a[c].listener || a[c];
    a = b;
  }
  else a = [];
  else a = [];
  return a;
};
O.listenerCount = function(a, b) {
  return "function" === typeof a.listenerCount ? a.listenerCount(b) : ed.call(a, b);
};
O.prototype.listenerCount = ed;
function ed(a) {
  var b = this._events;
  if (b) {
    a = b[a];
    if ("function" === typeof a) return 1;
    if (a) return a.length;
  }
  return 0;
}
O.prototype.eventNames = function() {
  return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : [];
};
function bd(a, b) {
  for (var c = Array(b); b--; ) c[b] = a[b];
  return c;
}
var fd = u(function(a, b) {
  var c = l && l.__extends || /* @__PURE__ */ function() {
    function a2(b2, c2) {
      a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, b3) {
        a3.__proto__ = b3;
      } || function(a3, b3) {
        for (var c3 in b3) b3.hasOwnProperty(c3) && (a3[c3] = b3[c3]);
      };
      return a2(b2, c2);
    }
    return function(b2, c2) {
      function d2() {
        this.constructor = b2;
      }
      a2(b2, c2);
      b2.prototype = null === c2 ? Object.create(c2) : (d2.prototype = c2.prototype, new d2());
    };
  }();
  Object.defineProperty(b, "__esModule", { value: true });
  var d = w.constants.S_IFMT, e = w.constants.S_IFDIR, f = w.constants.S_IFREG, g = w.constants.S_IFLNK, h = w.constants.O_APPEND;
  b.SEP = "/";
  a = function(a2) {
    function b2(b3, c2) {
      void 0 === c2 && (c2 = 438);
      var d2 = a2.call(this) || this;
      d2.uid = L.default.getuid();
      d2.gid = L.default.getgid();
      d2.atime = /* @__PURE__ */ new Date();
      d2.mtime = /* @__PURE__ */ new Date();
      d2.ctime = /* @__PURE__ */ new Date();
      d2.perm = 438;
      d2.mode = f;
      d2.nlink = 1;
      d2.perm = c2;
      d2.mode |= c2;
      d2.ino = b3;
      return d2;
    }
    c(b2, a2);
    b2.prototype.getString = function(a3) {
      void 0 === a3 && (a3 = "utf8");
      return this.getBuffer().toString(a3);
    };
    b2.prototype.setString = function(a3) {
      this.buf = F.bufferFrom(a3, "utf8");
      this.touch();
    };
    b2.prototype.getBuffer = function() {
      this.buf || this.setBuffer(F.bufferAllocUnsafe(0));
      return F.bufferFrom(this.buf);
    };
    b2.prototype.setBuffer = function(a3) {
      this.buf = F.bufferFrom(a3);
      this.touch();
    };
    b2.prototype.getSize = function() {
      return this.buf ? this.buf.length : 0;
    };
    b2.prototype.setModeProperty = function(a3) {
      this.mode = this.mode & ~d | a3;
    };
    b2.prototype.setIsFile = function() {
      this.setModeProperty(f);
    };
    b2.prototype.setIsDirectory = function() {
      this.setModeProperty(e);
    };
    b2.prototype.setIsSymlink = function() {
      this.setModeProperty(g);
    };
    b2.prototype.isFile = function() {
      return (this.mode & d) === f;
    };
    b2.prototype.isDirectory = function() {
      return (this.mode & d) === e;
    };
    b2.prototype.isSymlink = function() {
      return (this.mode & d) === g;
    };
    b2.prototype.makeSymlink = function(a3) {
      this.symlink = a3;
      this.setIsSymlink();
    };
    b2.prototype.write = function(a3, b3, c2, d2) {
      void 0 === b3 && (b3 = 0);
      void 0 === c2 && (c2 = a3.length);
      void 0 === d2 && (d2 = 0);
      this.buf || (this.buf = F.bufferAllocUnsafe(0));
      if (d2 + c2 > this.buf.length) {
        var e2 = F.bufferAllocUnsafe(d2 + c2);
        this.buf.copy(e2, 0, 0, this.buf.length);
        this.buf = e2;
      }
      a3.copy(this.buf, d2, b3, b3 + c2);
      this.touch();
      return c2;
    };
    b2.prototype.read = function(a3, b3, c2, d2) {
      void 0 === b3 && (b3 = 0);
      void 0 === c2 && (c2 = a3.byteLength);
      void 0 === d2 && (d2 = 0);
      this.buf || (this.buf = F.bufferAllocUnsafe(0));
      c2 > a3.byteLength && (c2 = a3.byteLength);
      c2 + d2 > this.buf.length && (c2 = this.buf.length - d2);
      this.buf.copy(a3, b3, d2, d2 + c2);
      return c2;
    };
    b2.prototype.truncate = function(a3) {
      void 0 === a3 && (a3 = 0);
      if (a3) if (this.buf || (this.buf = F.bufferAllocUnsafe(0)), a3 <= this.buf.length) this.buf = this.buf.slice(0, a3);
      else {
        var b3 = F.bufferAllocUnsafe(0);
        this.buf.copy(b3);
        b3.fill(0, a3);
      }
      else this.buf = F.bufferAllocUnsafe(0);
      this.touch();
    };
    b2.prototype.chmod = function(a3) {
      this.perm = a3;
      this.mode = this.mode & -512 | a3;
      this.touch();
    };
    b2.prototype.chown = function(a3, b3) {
      this.uid = a3;
      this.gid = b3;
      this.touch();
    };
    b2.prototype.touch = function() {
      this.mtime = /* @__PURE__ */ new Date();
      this.emit("change", this);
    };
    b2.prototype.canRead = function(a3, b3) {
      void 0 === a3 && (a3 = L.default.getuid());
      void 0 === b3 && (b3 = L.default.getgid());
      return this.perm & 4 || b3 === this.gid && this.perm & 32 || a3 === this.uid && this.perm & 256 ? true : false;
    };
    b2.prototype.canWrite = function(a3, b3) {
      void 0 === a3 && (a3 = L.default.getuid());
      void 0 === b3 && (b3 = L.default.getgid());
      return this.perm & 2 || b3 === this.gid && this.perm & 16 || a3 === this.uid && this.perm & 128 ? true : false;
    };
    b2.prototype.del = function() {
      this.emit("delete", this);
    };
    b2.prototype.toJSON = function() {
      return { ino: this.ino, uid: this.uid, gid: this.gid, atime: this.atime.getTime(), mtime: this.mtime.getTime(), ctime: this.ctime.getTime(), perm: this.perm, mode: this.mode, nlink: this.nlink, symlink: this.symlink, data: this.getString() };
    };
    return b2;
  }(O.EventEmitter);
  b.Node = a;
  a = function(a2) {
    function d2(b2, c2, d3) {
      var e2 = a2.call(this) || this;
      e2.children = {};
      e2.steps = [];
      e2.ino = 0;
      e2.length = 0;
      e2.vol = b2;
      e2.parent = c2;
      e2.steps = c2 ? c2.steps.concat([d3]) : [d3];
      return e2;
    }
    c(d2, a2);
    d2.prototype.setNode = function(a3) {
      this.node = a3;
      this.ino = a3.ino;
    };
    d2.prototype.getNode = function() {
      return this.node;
    };
    d2.prototype.createChild = function(a3, b2) {
      void 0 === b2 && (b2 = this.vol.createNode());
      var c2 = new d2(this.vol, this, a3);
      c2.setNode(b2);
      b2.isDirectory();
      this.setChild(a3, c2);
      return c2;
    };
    d2.prototype.setChild = function(a3, b2) {
      void 0 === b2 && (b2 = new d2(this.vol, this, a3));
      this.children[a3] = b2;
      b2.parent = this;
      this.length++;
      this.emit("child:add", b2, this);
      return b2;
    };
    d2.prototype.deleteChild = function(a3) {
      delete this.children[a3.getName()];
      this.length--;
      this.emit("child:delete", a3, this);
    };
    d2.prototype.getChild = function(a3) {
      if (Object.hasOwnProperty.call(this.children, a3)) return this.children[a3];
    };
    d2.prototype.getPath = function() {
      return this.steps.join(b.SEP);
    };
    d2.prototype.getName = function() {
      return this.steps[this.steps.length - 1];
    };
    d2.prototype.walk = function(a3, b2, c2) {
      void 0 === b2 && (b2 = a3.length);
      void 0 === c2 && (c2 = 0);
      if (c2 >= a3.length || c2 >= b2) return this;
      var d3 = this.getChild(a3[c2]);
      return d3 ? d3.walk(a3, b2, c2 + 1) : null;
    };
    d2.prototype.toJSON = function() {
      return {
        steps: this.steps,
        ino: this.ino,
        children: Object.keys(this.children)
      };
    };
    return d2;
  }(O.EventEmitter);
  b.Link = a;
  a = function() {
    function a2(a3, b2, c2, d2) {
      this.position = 0;
      this.link = a3;
      this.node = b2;
      this.flags = c2;
      this.fd = d2;
    }
    a2.prototype.getString = function() {
      return this.node.getString();
    };
    a2.prototype.setString = function(a3) {
      this.node.setString(a3);
    };
    a2.prototype.getBuffer = function() {
      return this.node.getBuffer();
    };
    a2.prototype.setBuffer = function(a3) {
      this.node.setBuffer(a3);
    };
    a2.prototype.getSize = function() {
      return this.node.getSize();
    };
    a2.prototype.truncate = function(a3) {
      this.node.truncate(a3);
    };
    a2.prototype.seekTo = function(a3) {
      this.position = a3;
    };
    a2.prototype.stats = function() {
      return ka.default.build(this.node);
    };
    a2.prototype.write = function(a3, b2, c2, d2) {
      void 0 === b2 && (b2 = 0);
      void 0 === c2 && (c2 = a3.length);
      "number" !== typeof d2 && (d2 = this.position);
      this.flags & h && (d2 = this.getSize());
      a3 = this.node.write(a3, b2, c2, d2);
      this.position = d2 + a3;
      return a3;
    };
    a2.prototype.read = function(a3, b2, c2, d2) {
      void 0 === b2 && (b2 = 0);
      void 0 === c2 && (c2 = a3.byteLength);
      "number" !== typeof d2 && (d2 = this.position);
      a3 = this.node.read(a3, b2, c2, d2);
      this.position = d2 + a3;
      return a3;
    };
    a2.prototype.chmod = function(a3) {
      this.node.chmod(a3);
    };
    a2.prototype.chown = function(a3, b2) {
      this.node.chown(a3, b2);
    };
    return a2;
  }();
  b.File = a;
});
t(fd);
var gd = fd.Node;
var hd = u(function(a, b) {
  Object.defineProperty(b, "__esModule", { value: true });
  b.default = function(a2, b2, e) {
    var c = setTimeout.apply(null, arguments);
    c && "object" === typeof c && "function" === typeof c.unref && c.unref();
    return c;
  };
});
t(hd);
function id() {
  this.tail = this.head = null;
  this.length = 0;
}
id.prototype.push = function(a) {
  a = { data: a, next: null };
  0 < this.length ? this.tail.next = a : this.head = a;
  this.tail = a;
  ++this.length;
};
id.prototype.unshift = function(a) {
  a = { data: a, next: this.head };
  0 === this.length && (this.tail = a);
  this.head = a;
  ++this.length;
};
id.prototype.shift = function() {
  if (0 !== this.length) {
    var a = this.head.data;
    this.head = 1 === this.length ? this.tail = null : this.head.next;
    --this.length;
    return a;
  }
};
id.prototype.clear = function() {
  this.head = this.tail = null;
  this.length = 0;
};
id.prototype.join = function(a) {
  if (0 === this.length) return "";
  for (var b = this.head, c = "" + b.data; b = b.next; ) c += a + b.data;
  return c;
};
id.prototype.concat = function(a) {
  if (0 === this.length) return z.alloc(0);
  if (1 === this.length) return this.head.data;
  a = z.allocUnsafe(a >>> 0);
  for (var b = this.head, c = 0; b; ) b.data.copy(a, c), c += b.data.length, b = b.next;
  return a;
};
var jd = z.isEncoding || function(a) {
  switch (a && a.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function kd(a) {
  this.encoding = (a || "utf8").toLowerCase().replace(/[-_]/, "");
  if (a && !jd(a)) throw Error("Unknown encoding: " + a);
  switch (this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;
    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2;
      this.detectIncompleteChar = ld;
      break;
    case "base64":
      this.surrogateSize = 3;
      this.detectIncompleteChar = md;
      break;
    default:
      this.write = nd;
      return;
  }
  this.charBuffer = new z(6);
  this.charLength = this.charReceived = 0;
}
kd.prototype.write = function(a) {
  for (var b = ""; this.charLength; ) {
    b = a.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : a.length;
    a.copy(this.charBuffer, this.charReceived, 0, b);
    this.charReceived += b;
    if (this.charReceived < this.charLength) return "";
    a = a.slice(b, a.length);
    b = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
    var c = b.charCodeAt(b.length - 1);
    if (55296 <= c && 56319 >= c) this.charLength += this.surrogateSize, b = "";
    else {
      this.charReceived = this.charLength = 0;
      if (0 === a.length) return b;
      break;
    }
  }
  this.detectIncompleteChar(a);
  var d = a.length;
  this.charLength && (a.copy(this.charBuffer, 0, a.length - this.charReceived, d), d -= this.charReceived);
  b += a.toString(this.encoding, 0, d);
  d = b.length - 1;
  c = b.charCodeAt(d);
  return 55296 <= c && 56319 >= c ? (c = this.surrogateSize, this.charLength += c, this.charReceived += c, this.charBuffer.copy(this.charBuffer, c, 0, c), a.copy(this.charBuffer, 0, 0, c), b.substring(0, d)) : b;
};
kd.prototype.detectIncompleteChar = function(a) {
  for (var b = 3 <= a.length ? 3 : a.length; 0 < b; b--) {
    var c = a[a.length - b];
    if (1 == b && 6 == c >> 5) {
      this.charLength = 2;
      break;
    }
    if (2 >= b && 14 == c >> 4) {
      this.charLength = 3;
      break;
    }
    if (3 >= b && 30 == c >> 3) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = b;
};
kd.prototype.end = function(a) {
  var b = "";
  a && a.length && (b = this.write(a));
  this.charReceived && (a = this.encoding, b += this.charBuffer.slice(0, this.charReceived).toString(a));
  return b;
};
function nd(a) {
  return a.toString(this.encoding);
}
function ld(a) {
  this.charLength = (this.charReceived = a.length % 2) ? 2 : 0;
}
function md(a) {
  this.charLength = (this.charReceived = a.length % 3) ? 3 : 0;
}
P.ReadableState = od;
var Q = Mb("stream");
Db(P, O);
function pd(a, b, c) {
  if ("function" === typeof a.prependListener) return a.prependListener(b, c);
  if (a._events && a._events[b]) Array.isArray(a._events[b]) ? a._events[b].unshift(c) : a._events[b] = [c, a._events[b]];
  else a.on(b, c);
}
function od(a, b) {
  a = a || {};
  this.objectMode = !!a.objectMode;
  b instanceof V && (this.objectMode = this.objectMode || !!a.readableObjectMode);
  b = a.highWaterMark;
  var c = this.objectMode ? 16 : 16384;
  this.highWaterMark = b || 0 === b ? b : c;
  this.highWaterMark = ~~this.highWaterMark;
  this.buffer = new id();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.reading = this.endEmitted = this.ended = false;
  this.sync = true;
  this.resumeScheduled = this.readableListening = this.emittedReadable = this.needReadable = false;
  this.defaultEncoding = a.defaultEncoding || "utf8";
  this.ranOut = false;
  this.awaitDrain = 0;
  this.readingMore = false;
  this.encoding = this.decoder = null;
  a.encoding && (this.decoder = new kd(a.encoding), this.encoding = a.encoding);
}
function P(a) {
  if (!(this instanceof P)) return new P(a);
  this._readableState = new od(a, this);
  this.readable = true;
  a && "function" === typeof a.read && (this._read = a.read);
  O.call(this);
}
P.prototype.push = function(a, b) {
  var c = this._readableState;
  c.objectMode || "string" !== typeof a || (b = b || c.defaultEncoding, b !== c.encoding && (a = z.from(a, b), b = ""));
  return qd(this, c, a, b, false);
};
P.prototype.unshift = function(a) {
  return qd(this, this._readableState, a, "", true);
};
P.prototype.isPaused = function() {
  return false === this._readableState.flowing;
};
function qd(a, b, c, d, e) {
  var f = c;
  var g = null;
  Na(f) || "string" === typeof f || null === f || void 0 === f || b.objectMode || (g = new TypeError("Invalid non-string/buffer chunk"));
  if (f = g) a.emit("error", f);
  else if (null === c) b.reading = false, b.ended || (b.decoder && (c = b.decoder.end()) && c.length && (b.buffer.push(c), b.length += b.objectMode ? 1 : c.length), b.ended = true, rd(a));
  else if (b.objectMode || c && 0 < c.length) if (b.ended && !e) a.emit("error", Error("stream.push() after EOF"));
  else if (b.endEmitted && e) a.emit("error", Error("stream.unshift() after end event"));
  else {
    if (b.decoder && !e && !d) {
      c = b.decoder.write(c);
      var h = !b.objectMode && 0 === c.length;
    }
    e || (b.reading = false);
    h || (b.flowing && 0 === b.length && !b.sync ? (a.emit("data", c), a.read(0)) : (b.length += b.objectMode ? 1 : c.length, e ? b.buffer.unshift(c) : b.buffer.push(c), b.needReadable && rd(a)));
    b.readingMore || (b.readingMore = true, G(sd, a, b));
  }
  else e || (b.reading = false);
  return !b.ended && (b.needReadable || b.length < b.highWaterMark || 0 === b.length);
}
P.prototype.setEncoding = function(a) {
  this._readableState.decoder = new kd(a);
  this._readableState.encoding = a;
  return this;
};
function td(a, b) {
  if (0 >= a || 0 === b.length && b.ended) return 0;
  if (b.objectMode) return 1;
  if (a !== a) return b.flowing && b.length ? b.buffer.head.data.length : b.length;
  if (a > b.highWaterMark) {
    var c = a;
    8388608 <= c ? c = 8388608 : (c--, c |= c >>> 1, c |= c >>> 2, c |= c >>> 4, c |= c >>> 8, c |= c >>> 16, c++);
    b.highWaterMark = c;
  }
  return a <= b.length ? a : b.ended ? b.length : (b.needReadable = true, 0);
}
P.prototype.read = function(a) {
  Q("read", a);
  a = parseInt(a, 10);
  var b = this._readableState, c = a;
  0 !== a && (b.emittedReadable = false);
  if (0 === a && b.needReadable && (b.length >= b.highWaterMark || b.ended)) return Q("read: emitReadable", b.length, b.ended), 0 === b.length && b.ended ? Jd(this) : rd(this), null;
  a = td(a, b);
  if (0 === a && b.ended) return 0 === b.length && Jd(this), null;
  var d = b.needReadable;
  Q("need readable", d);
  if (0 === b.length || b.length - a < b.highWaterMark) d = true, Q("length less than watermark", d);
  b.ended || b.reading ? Q(
    "reading or ended",
    false
  ) : d && (Q("do read"), b.reading = true, b.sync = true, 0 === b.length && (b.needReadable = true), this._read(b.highWaterMark), b.sync = false, b.reading || (a = td(c, b)));
  d = 0 < a ? Kd(a, b) : null;
  null === d ? (b.needReadable = true, a = 0) : b.length -= a;
  0 === b.length && (b.ended || (b.needReadable = true), c !== a && b.ended && Jd(this));
  null !== d && this.emit("data", d);
  return d;
};
function rd(a) {
  var b = a._readableState;
  b.needReadable = false;
  b.emittedReadable || (Q("emitReadable", b.flowing), b.emittedReadable = true, b.sync ? G(Ld, a) : Ld(a));
}
function Ld(a) {
  Q("emit readable");
  a.emit("readable");
  Md(a);
}
function sd(a, b) {
  for (var c = b.length; !b.reading && !b.flowing && !b.ended && b.length < b.highWaterMark && (Q("maybeReadMore read 0"), a.read(0), c !== b.length); ) c = b.length;
  b.readingMore = false;
}
P.prototype._read = function() {
  this.emit("error", Error("not implemented"));
};
P.prototype.pipe = function(a, b) {
  function c(a2) {
    Q("onunpipe");
    a2 === n && e();
  }
  function d() {
    Q("onend");
    a.end();
  }
  function e() {
    Q("cleanup");
    a.removeListener("close", h);
    a.removeListener("finish", k);
    a.removeListener("drain", B);
    a.removeListener("error", g);
    a.removeListener("unpipe", c);
    n.removeListener("end", d);
    n.removeListener("end", e);
    n.removeListener("data", f);
    m = true;
    !q.awaitDrain || a._writableState && !a._writableState.needDrain || B();
  }
  function f(b2) {
    Q("ondata");
    v = false;
    false !== a.write(b2) || v || ((1 === q.pipesCount && q.pipes === a || 1 < q.pipesCount && -1 !== Nd(q.pipes, a)) && !m && (Q("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, v = true), n.pause());
  }
  function g(b2) {
    Q("onerror", b2);
    p();
    a.removeListener("error", g);
    0 === a.listeners("error").length && a.emit("error", b2);
  }
  function h() {
    a.removeListener("finish", k);
    p();
  }
  function k() {
    Q("onfinish");
    a.removeListener("close", h);
    p();
  }
  function p() {
    Q("unpipe");
    n.unpipe(a);
  }
  var n = this, q = this._readableState;
  switch (q.pipesCount) {
    case 0:
      q.pipes = a;
      break;
    case 1:
      q.pipes = [
        q.pipes,
        a
      ];
      break;
    default:
      q.pipes.push(a);
  }
  q.pipesCount += 1;
  Q("pipe count=%d opts=%j", q.pipesCount, b);
  b = b && false === b.end ? e : d;
  if (q.endEmitted) G(b);
  else n.once("end", b);
  a.on("unpipe", c);
  var B = Od(n);
  a.on("drain", B);
  var m = false, v = false;
  n.on("data", f);
  pd(a, "error", g);
  a.once("close", h);
  a.once("finish", k);
  a.emit("pipe", n);
  q.flowing || (Q("pipe resume"), n.resume());
  return a;
};
function Od(a) {
  return function() {
    var b = a._readableState;
    Q("pipeOnDrain", b.awaitDrain);
    b.awaitDrain && b.awaitDrain--;
    0 === b.awaitDrain && a.listeners("data").length && (b.flowing = true, Md(a));
  };
}
P.prototype.unpipe = function(a) {
  var b = this._readableState;
  if (0 === b.pipesCount) return this;
  if (1 === b.pipesCount) {
    if (a && a !== b.pipes) return this;
    a || (a = b.pipes);
    b.pipes = null;
    b.pipesCount = 0;
    b.flowing = false;
    a && a.emit("unpipe", this);
    return this;
  }
  if (!a) {
    a = b.pipes;
    var c = b.pipesCount;
    b.pipes = null;
    b.pipesCount = 0;
    b.flowing = false;
    for (b = 0; b < c; b++) a[b].emit("unpipe", this);
    return this;
  }
  c = Nd(b.pipes, a);
  if (-1 === c) return this;
  b.pipes.splice(c, 1);
  --b.pipesCount;
  1 === b.pipesCount && (b.pipes = b.pipes[0]);
  a.emit("unpipe", this);
  return this;
};
P.prototype.on = function(a, b) {
  b = O.prototype.on.call(this, a, b);
  "data" === a ? false !== this._readableState.flowing && this.resume() : "readable" === a && (a = this._readableState, a.endEmitted || a.readableListening || (a.readableListening = a.needReadable = true, a.emittedReadable = false, a.reading ? a.length && rd(this) : G(Pd, this)));
  return b;
};
P.prototype.addListener = P.prototype.on;
function Pd(a) {
  Q("readable nexttick read 0");
  a.read(0);
}
P.prototype.resume = function() {
  var a = this._readableState;
  a.flowing || (Q("resume"), a.flowing = true, a.resumeScheduled || (a.resumeScheduled = true, G(Qd, this, a)));
  return this;
};
function Qd(a, b) {
  b.reading || (Q("resume read 0"), a.read(0));
  b.resumeScheduled = false;
  b.awaitDrain = 0;
  a.emit("resume");
  Md(a);
  b.flowing && !b.reading && a.read(0);
}
P.prototype.pause = function() {
  Q("call pause flowing=%j", this._readableState.flowing);
  false !== this._readableState.flowing && (Q("pause"), this._readableState.flowing = false, this.emit("pause"));
  return this;
};
function Md(a) {
  var b = a._readableState;
  for (Q("flow", b.flowing); b.flowing && null !== a.read(); ) ;
}
P.prototype.wrap = function(a) {
  var b = this._readableState, c = false, d = this;
  a.on("end", function() {
    Q("wrapped end");
    if (b.decoder && !b.ended) {
      var a2 = b.decoder.end();
      a2 && a2.length && d.push(a2);
    }
    d.push(null);
  });
  a.on("data", function(e2) {
    Q("wrapped data");
    b.decoder && (e2 = b.decoder.write(e2));
    b.objectMode && (null === e2 || void 0 === e2) || !(b.objectMode || e2 && e2.length) || d.push(e2) || (c = true, a.pause());
  });
  for (var e in a) void 0 === this[e] && "function" === typeof a[e] && (this[e] = /* @__PURE__ */ function(b2) {
    return function() {
      return a[b2].apply(a, arguments);
    };
  }(e));
  Rd([
    "error",
    "close",
    "destroy",
    "pause",
    "resume"
  ], function(b2) {
    a.on(b2, d.emit.bind(d, b2));
  });
  d._read = function(b2) {
    Q("wrapped _read", b2);
    c && (c = false, a.resume());
  };
  return d;
};
P._fromList = Kd;
function Kd(a, b) {
  if (0 === b.length) return null;
  if (b.objectMode) var c = b.buffer.shift();
  else if (!a || a >= b.length) c = b.decoder ? b.buffer.join("") : 1 === b.buffer.length ? b.buffer.head.data : b.buffer.concat(b.length), b.buffer.clear();
  else {
    c = b.buffer;
    b = b.decoder;
    if (a < c.head.data.length) b = c.head.data.slice(0, a), c.head.data = c.head.data.slice(a);
    else {
      if (a === c.head.data.length) c = c.shift();
      else if (b) {
        b = c.head;
        var d = 1, e = b.data;
        for (a -= e.length; b = b.next; ) {
          var f = b.data, g = a > f.length ? f.length : a;
          e = g === f.length ? e + f : e + f.slice(
            0,
            a
          );
          a -= g;
          if (0 === a) {
            g === f.length ? (++d, c.head = b.next ? b.next : c.tail = null) : (c.head = b, b.data = f.slice(g));
            break;
          }
          ++d;
        }
        c.length -= d;
        c = e;
      } else {
        b = z.allocUnsafe(a);
        d = c.head;
        e = 1;
        d.data.copy(b);
        for (a -= d.data.length; d = d.next; ) {
          f = d.data;
          g = a > f.length ? f.length : a;
          f.copy(b, b.length - a, 0, g);
          a -= g;
          if (0 === a) {
            g === f.length ? (++e, c.head = d.next ? d.next : c.tail = null) : (c.head = d, d.data = f.slice(g));
            break;
          }
          ++e;
        }
        c.length -= e;
        c = b;
      }
      b = c;
    }
    c = b;
  }
  return c;
}
function Jd(a) {
  var b = a._readableState;
  if (0 < b.length) throw Error('"endReadable()" called on non-empty stream');
  b.endEmitted || (b.ended = true, G(Sd, b, a));
}
function Sd(a, b) {
  a.endEmitted || 0 !== a.length || (a.endEmitted = true, b.readable = false, b.emit("end"));
}
function Rd(a, b) {
  for (var c = 0, d = a.length; c < d; c++) b(a[c], c);
}
function Nd(a, b) {
  for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
  return -1;
}
W.WritableState = Td;
Db(W, O);
function Ud() {
}
function Vd(a, b, c) {
  this.chunk = a;
  this.encoding = b;
  this.callback = c;
  this.next = null;
}
function Td(a, b) {
  Object.defineProperty(this, "buffer", { get: Ib(function() {
    return this.getBuffer();
  }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.") });
  a = a || {};
  this.objectMode = !!a.objectMode;
  b instanceof V && (this.objectMode = this.objectMode || !!a.writableObjectMode);
  var c = a.highWaterMark, d = this.objectMode ? 16 : 16384;
  this.highWaterMark = c || 0 === c ? c : d;
  this.highWaterMark = ~~this.highWaterMark;
  this.finished = this.ended = this.ending = this.needDrain = false;
  this.decodeStrings = false !== a.decodeStrings;
  this.defaultEncoding = a.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function(a2) {
    var c2 = b._writableState, d2 = c2.sync, e = c2.writecb;
    c2.writing = false;
    c2.writecb = null;
    c2.length -= c2.writelen;
    c2.writelen = 0;
    a2 ? (--c2.pendingcb, d2 ? G(e, a2) : e(a2), b._writableState.errorEmitted = true, b.emit("error", a2)) : ((a2 = Wd(c2)) || c2.corked || c2.bufferProcessing || !c2.bufferedRequest || Xd(b, c2), d2 ? G(Yd, b, c2, a2, e) : Yd(b, c2, a2, e));
  };
  this.writecb = null;
  this.writelen = 0;
  this.lastBufferedRequest = this.bufferedRequest = null;
  this.pendingcb = 0;
  this.errorEmitted = this.prefinished = false;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new Zd(this);
}
Td.prototype.getBuffer = function() {
  for (var a = this.bufferedRequest, b = []; a; ) b.push(a), a = a.next;
  return b;
};
function W(a) {
  if (!(this instanceof W || this instanceof V)) return new W(a);
  this._writableState = new Td(a, this);
  this.writable = true;
  a && ("function" === typeof a.write && (this._write = a.write), "function" === typeof a.writev && (this._writev = a.writev));
  O.call(this);
}
W.prototype.pipe = function() {
  this.emit("error", Error("Cannot pipe, not readable"));
};
W.prototype.write = function(a, b, c) {
  var d = this._writableState, e = false;
  "function" === typeof b && (c = b, b = null);
  z.isBuffer(a) ? b = "buffer" : b || (b = d.defaultEncoding);
  "function" !== typeof c && (c = Ud);
  if (d.ended) d = c, a = Error("write after end"), this.emit("error", a), G(d, a);
  else {
    var f = c, g = true, h = false;
    null === a ? h = new TypeError("May not write null values to stream") : z.isBuffer(a) || "string" === typeof a || void 0 === a || d.objectMode || (h = new TypeError("Invalid non-string/buffer chunk"));
    h && (this.emit("error", h), G(f, h), g = false);
    g && (d.pendingcb++, e = b, d.objectMode || false === d.decodeStrings || "string" !== typeof a || (a = z.from(a, e)), z.isBuffer(a) && (e = "buffer"), f = d.objectMode ? 1 : a.length, d.length += f, b = d.length < d.highWaterMark, b || (d.needDrain = true), d.writing || d.corked ? (f = d.lastBufferedRequest, d.lastBufferedRequest = new Vd(a, e, c), f ? f.next = d.lastBufferedRequest : d.bufferedRequest = d.lastBufferedRequest, d.bufferedRequestCount += 1) : $d(this, d, false, f, a, e, c), e = b);
  }
  return e;
};
W.prototype.cork = function() {
  this._writableState.corked++;
};
W.prototype.uncork = function() {
  var a = this._writableState;
  a.corked && (a.corked--, a.writing || a.corked || a.finished || a.bufferProcessing || !a.bufferedRequest || Xd(this, a));
};
W.prototype.setDefaultEncoding = function(a) {
  "string" === typeof a && (a = a.toLowerCase());
  if (!(-1 < "hex utf8 utf-8 ascii binary base64 ucs2 ucs-2 utf16le utf-16le raw".split(" ").indexOf((a + "").toLowerCase()))) throw new TypeError("Unknown encoding: " + a);
  this._writableState.defaultEncoding = a;
  return this;
};
function $d(a, b, c, d, e, f, g) {
  b.writelen = d;
  b.writecb = g;
  b.writing = true;
  b.sync = true;
  c ? a._writev(e, b.onwrite) : a._write(e, f, b.onwrite);
  b.sync = false;
}
function Yd(a, b, c, d) {
  !c && 0 === b.length && b.needDrain && (b.needDrain = false, a.emit("drain"));
  b.pendingcb--;
  d();
  ae(a, b);
}
function Xd(a, b) {
  b.bufferProcessing = true;
  var c = b.bufferedRequest;
  if (a._writev && c && c.next) {
    var d = Array(b.bufferedRequestCount), e = b.corkedRequestsFree;
    e.entry = c;
    for (var f = 0; c; ) d[f] = c, c = c.next, f += 1;
    $d(a, b, true, b.length, d, "", e.finish);
    b.pendingcb++;
    b.lastBufferedRequest = null;
    e.next ? (b.corkedRequestsFree = e.next, e.next = null) : b.corkedRequestsFree = new Zd(b);
  } else {
    for (; c && (d = c.chunk, $d(a, b, false, b.objectMode ? 1 : d.length, d, c.encoding, c.callback), c = c.next, !b.writing); ) ;
    null === c && (b.lastBufferedRequest = null);
  }
  b.bufferedRequestCount = 0;
  b.bufferedRequest = c;
  b.bufferProcessing = false;
}
W.prototype._write = function(a, b, c) {
  c(Error("not implemented"));
};
W.prototype._writev = null;
W.prototype.end = function(a, b, c) {
  var d = this._writableState;
  "function" === typeof a ? (c = a, b = a = null) : "function" === typeof b && (c = b, b = null);
  null !== a && void 0 !== a && this.write(a, b);
  d.corked && (d.corked = 1, this.uncork());
  if (!d.ending && !d.finished) {
    a = c;
    d.ending = true;
    ae(this, d);
    if (a) if (d.finished) G(a);
    else this.once("finish", a);
    d.ended = true;
    this.writable = false;
  }
};
function Wd(a) {
  return a.ending && 0 === a.length && null === a.bufferedRequest && !a.finished && !a.writing;
}
function ae(a, b) {
  var c = Wd(b);
  c && (0 === b.pendingcb ? (b.prefinished || (b.prefinished = true, a.emit("prefinish")), b.finished = true, a.emit("finish")) : b.prefinished || (b.prefinished = true, a.emit("prefinish")));
  return c;
}
function Zd(a) {
  var b = this;
  this.entry = this.next = null;
  this.finish = function(c) {
    var d = b.entry;
    for (b.entry = null; d; ) {
      var e = d.callback;
      a.pendingcb--;
      e(c);
      d = d.next;
    }
    a.corkedRequestsFree ? a.corkedRequestsFree.next = b : a.corkedRequestsFree = b;
  };
}
Db(V, P);
for (be = Object.keys(W.prototype), ce = 0; ce < be.length; ce++) {
  de = be[ce];
  V.prototype[de] || (V.prototype[de] = W.prototype[de]);
}
var de;
var be;
var ce;
function V(a) {
  if (!(this instanceof V)) return new V(a);
  P.call(this, a);
  W.call(this, a);
  a && false === a.readable && (this.readable = false);
  a && false === a.writable && (this.writable = false);
  this.allowHalfOpen = true;
  a && false === a.allowHalfOpen && (this.allowHalfOpen = false);
  this.once("end", ee);
}
function ee() {
  this.allowHalfOpen || this._writableState.ended || G(fe, this);
}
function fe(a) {
  a.end();
}
Db(X, V);
function ge(a) {
  this.afterTransform = function(b, c) {
    var d = a._transformState;
    d.transforming = false;
    var e = d.writecb;
    e ? (d.writechunk = null, d.writecb = null, null !== c && void 0 !== c && a.push(c), e(b), b = a._readableState, b.reading = false, (b.needReadable || b.length < b.highWaterMark) && a._read(b.highWaterMark), b = void 0) : b = a.emit("error", Error("no writecb in Transform class"));
    return b;
  };
  this.transforming = this.needTransform = false;
  this.writeencoding = this.writechunk = this.writecb = null;
}
function X(a) {
  if (!(this instanceof X)) return new X(a);
  V.call(this, a);
  this._transformState = new ge(this);
  var b = this;
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  a && ("function" === typeof a.transform && (this._transform = a.transform), "function" === typeof a.flush && (this._flush = a.flush));
  this.once("prefinish", function() {
    "function" === typeof this._flush ? this._flush(function(a2) {
      he(b, a2);
    }) : he(b);
  });
}
X.prototype.push = function(a, b) {
  this._transformState.needTransform = false;
  return V.prototype.push.call(this, a, b);
};
X.prototype._transform = function() {
  throw Error("Not implemented");
};
X.prototype._write = function(a, b, c) {
  var d = this._transformState;
  d.writecb = c;
  d.writechunk = a;
  d.writeencoding = b;
  d.transforming || (a = this._readableState, (d.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark));
};
X.prototype._read = function() {
  var a = this._transformState;
  null !== a.writechunk && a.writecb && !a.transforming ? (a.transforming = true, this._transform(a.writechunk, a.writeencoding, a.afterTransform)) : a.needTransform = true;
};
function he(a, b) {
  if (b) return a.emit("error", b);
  b = a._transformState;
  if (a._writableState.length) throw Error("Calling transform done when ws.length != 0");
  if (b.transforming) throw Error("Calling transform done when still transforming");
  return a.push(null);
}
Db(ie, X);
function ie(a) {
  if (!(this instanceof ie)) return new ie(a);
  X.call(this, a);
}
ie.prototype._transform = function(a, b, c) {
  c(null, a);
};
Db(Y, O);
Y.Readable = P;
Y.Writable = W;
Y.Duplex = V;
Y.Transform = X;
Y.PassThrough = ie;
Y.Stream = Y;
function Y() {
  O.call(this);
}
Y.prototype.pipe = function(a, b) {
  function c(b2) {
    a.writable && false === a.write(b2) && k.pause && k.pause();
  }
  function d() {
    k.readable && k.resume && k.resume();
  }
  function e() {
    p || (p = true, a.end());
  }
  function f() {
    p || (p = true, "function" === typeof a.destroy && a.destroy());
  }
  function g(a2) {
    h();
    if (0 === O.listenerCount(this, "error")) throw a2;
  }
  function h() {
    k.removeListener("data", c);
    a.removeListener("drain", d);
    k.removeListener("end", e);
    k.removeListener("close", f);
    k.removeListener("error", g);
    a.removeListener("error", g);
    k.removeListener(
      "end",
      h
    );
    k.removeListener("close", h);
    a.removeListener("close", h);
  }
  var k = this;
  k.on("data", c);
  a.on("drain", d);
  a._isStdio || b && false === b.end || (k.on("end", e), k.on("close", f));
  var p = false;
  k.on("error", g);
  a.on("error", g);
  k.on("end", h);
  k.on("close", h);
  a.on("close", h);
  a.emit("pipe", k);
  return a;
};
var je = Array.prototype.slice;
var le = { extend: function ke(a, b) {
  for (var d in b) a[d] = b[d];
  return 3 > arguments.length ? a : ke.apply(null, [a].concat(je.call(arguments, 2)));
} };
var me = u(function(a, b) {
  function c(a2, b2, c2) {
    void 0 === c2 && (c2 = function(a3) {
      return a3;
    });
    return function() {
      for (var e2 = [], f = 0; f < arguments.length; f++) e2[f] = arguments[f];
      return new Promise(function(f2, g) {
        a2[b2].bind(a2).apply(void 0, d(e2, [function(a3, b3) {
          return a3 ? g(a3) : f2(c2(b3));
        }]));
      });
    };
  }
  var d = l && l.__spreadArrays || function() {
    for (var a2 = 0, b2 = 0, c2 = arguments.length; b2 < c2; b2++) a2 += arguments[b2].length;
    a2 = Array(a2);
    var d2 = 0;
    for (b2 = 0; b2 < c2; b2++) for (var e2 = arguments[b2], n = 0, q = e2.length; n < q; n++, d2++) a2[d2] = e2[n];
    return a2;
  };
  Object.defineProperty(b, "__esModule", { value: true });
  var e = function() {
    function a2(a3, b2) {
      this.vol = a3;
      this.fd = b2;
    }
    a2.prototype.appendFile = function(a3, b2) {
      return c(this.vol, "appendFile")(this.fd, a3, b2);
    };
    a2.prototype.chmod = function(a3) {
      return c(this.vol, "fchmod")(this.fd, a3);
    };
    a2.prototype.chown = function(a3, b2) {
      return c(this.vol, "fchown")(this.fd, a3, b2);
    };
    a2.prototype.close = function() {
      return c(
        this.vol,
        "close"
      )(this.fd);
    };
    a2.prototype.datasync = function() {
      return c(this.vol, "fdatasync")(this.fd);
    };
    a2.prototype.read = function(a3, b2, d2, e2) {
      return c(this.vol, "read", function(b3) {
        return { bytesRead: b3, buffer: a3 };
      })(this.fd, a3, b2, d2, e2);
    };
    a2.prototype.readFile = function(a3) {
      return c(this.vol, "readFile")(this.fd, a3);
    };
    a2.prototype.stat = function(a3) {
      return c(this.vol, "fstat")(this.fd, a3);
    };
    a2.prototype.sync = function() {
      return c(this.vol, "fsync")(this.fd);
    };
    a2.prototype.truncate = function(a3) {
      return c(this.vol, "ftruncate")(this.fd, a3);
    };
    a2.prototype.utimes = function(a3, b2) {
      return c(this.vol, "futimes")(this.fd, a3, b2);
    };
    a2.prototype.write = function(a3, b2, d2, e2) {
      return c(this.vol, "write", function(b3) {
        return { bytesWritten: b3, buffer: a3 };
      })(this.fd, a3, b2, d2, e2);
    };
    a2.prototype.writeFile = function(a3, b2) {
      return c(this.vol, "writeFile")(this.fd, a3, b2);
    };
    return a2;
  }();
  b.FileHandle = e;
  b.default = function(a2) {
    return "undefined" === typeof Promise ? null : { FileHandle: e, access: function(b2, d2) {
      return c(a2, "access")(b2, d2);
    }, appendFile: function(b2, d2, f) {
      return c(a2, "appendFile")(b2 instanceof e ? b2.fd : b2, d2, f);
    }, chmod: function(b2, d2) {
      return c(a2, "chmod")(b2, d2);
    }, chown: function(b2, d2, e2) {
      return c(a2, "chown")(b2, d2, e2);
    }, copyFile: function(b2, d2, e2) {
      return c(a2, "copyFile")(b2, d2, e2);
    }, lchmod: function(b2, d2) {
      return c(a2, "lchmod")(b2, d2);
    }, lchown: function(b2, d2, e2) {
      return c(a2, "lchown")(b2, d2, e2);
    }, link: function(b2, d2) {
      return c(a2, "link")(b2, d2);
    }, lstat: function(b2, d2) {
      return c(a2, "lstat")(b2, d2);
    }, mkdir: function(b2, d2) {
      return c(a2, "mkdir")(b2, d2);
    }, mkdtemp: function(b2, d2) {
      return c(a2, "mkdtemp")(b2, d2);
    }, open: function(b2, d2, f) {
      return c(a2, "open", function(b3) {
        return new e(a2, b3);
      })(b2, d2, f);
    }, readdir: function(b2, d2) {
      return c(a2, "readdir")(b2, d2);
    }, readFile: function(b2, d2) {
      return c(a2, "readFile")(b2 instanceof e ? b2.fd : b2, d2);
    }, readlink: function(b2, d2) {
      return c(a2, "readlink")(b2, d2);
    }, realpath: function(b2, d2) {
      return c(a2, "realpath")(b2, d2);
    }, rename: function(b2, d2) {
      return c(a2, "rename")(b2, d2);
    }, rmdir: function(b2) {
      return c(a2, "rmdir")(b2);
    }, stat: function(b2, d2) {
      return c(a2, "stat")(b2, d2);
    }, symlink: function(b2, d2, e2) {
      return c(a2, "symlink")(b2, d2, e2);
    }, truncate: function(b2, d2) {
      return c(a2, "truncate")(b2, d2);
    }, unlink: function(b2) {
      return c(a2, "unlink")(b2);
    }, utimes: function(b2, d2, e2) {
      return c(a2, "utimes")(b2, d2, e2);
    }, writeFile: function(b2, d2, f) {
      return c(a2, "writeFile")(b2 instanceof e ? b2.fd : b2, d2, f);
    } };
  };
});
t(me);
var ne = /[^\x20-\x7E]/;
var oe = /[\x2E\u3002\uFF0E\uFF61]/g;
var pe = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" };
var qe = Math.floor;
var re = String.fromCharCode;
function se(a, b) {
  var c = a.split("@"), d = "";
  1 < c.length && (d = c[0] + "@", a = c[1]);
  a = a.replace(oe, ".");
  a = a.split(".");
  c = a.length;
  for (var e = []; c--; ) e[c] = b(a[c]);
  b = e.join(".");
  return d + b;
}
function te(a, b) {
  return a + 22 + 75 * (26 > a) - ((0 != b) << 5);
}
function ue(a) {
  return se(a, function(a2) {
    if (ne.test(a2)) {
      var b;
      var d = [];
      var e = [];
      var f = 0;
      for (b = a2.length; f < b; ) {
        var g = a2.charCodeAt(f++);
        if (55296 <= g && 56319 >= g && f < b) {
          var h = a2.charCodeAt(f++);
          56320 == (h & 64512) ? e.push(((g & 1023) << 10) + (h & 1023) + 65536) : (e.push(g), f--);
        } else e.push(g);
      }
      a2 = e;
      h = a2.length;
      e = 128;
      var k = 0;
      var p = 72;
      for (g = 0; g < h; ++g) {
        var n = a2[g];
        128 > n && d.push(re(n));
      }
      for ((f = b = d.length) && d.push("-"); f < h; ) {
        var q = 2147483647;
        for (g = 0; g < h; ++g) n = a2[g], n >= e && n < q && (q = n);
        var B = f + 1;
        if (q - e > qe((2147483647 - k) / B)) throw new RangeError(pe.overflow);
        k += (q - e) * B;
        e = q;
        for (g = 0; g < h; ++g) {
          n = a2[g];
          if (n < e && 2147483647 < ++k) throw new RangeError(pe.overflow);
          if (n == e) {
            var m = k;
            for (q = 36; ; q += 36) {
              n = q <= p ? 1 : q >= p + 26 ? 26 : q - p;
              if (m < n) break;
              var v = m - n;
              m = 36 - n;
              d.push(re(te(n + v % m, 0)));
              m = qe(v / m);
            }
            d.push(re(te(m, 0)));
            p = B;
            q = 0;
            k = f == b ? qe(k / 700) : k >> 1;
            for (k += qe(k / p); 455 < k; q += 36) k = qe(k / 35);
            p = qe(q + 36 * k / (k + 38));
            k = 0;
            ++f;
          }
        }
        ++k;
        ++e;
      }
      d = "xn--" + d.join("");
    } else d = a2;
    return d;
  });
}
var ve = Array.isArray || function(a) {
  return "[object Array]" === Object.prototype.toString.call(a);
};
function we(a) {
  switch (typeof a) {
    case "string":
      return a;
    case "boolean":
      return a ? "true" : "false";
    case "number":
      return isFinite(a) ? a : "";
    default:
      return "";
  }
}
function xe(a, b, c, d) {
  b = b || "&";
  c = c || "=";
  null === a && (a = void 0);
  return "object" === typeof a ? ye(ze(a), function(d2) {
    var e = encodeURIComponent(we(d2)) + c;
    return ve(a[d2]) ? ye(a[d2], function(a2) {
      return e + encodeURIComponent(we(a2));
    }).join(b) : e + encodeURIComponent(we(a[d2]));
  }).join(b) : d ? encodeURIComponent(we(d)) + c + encodeURIComponent(we(a)) : "";
}
function ye(a, b) {
  if (a.map) return a.map(b);
  for (var c = [], d = 0; d < a.length; d++) c.push(b(a[d], d));
  return c;
}
var ze = Object.keys || function(a) {
  var b = [], c;
  for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
  return b;
};
function Ae(a, b, c, d) {
  c = c || "=";
  var e = {};
  if ("string" !== typeof a || 0 === a.length) return e;
  var f = /\+/g;
  a = a.split(b || "&");
  b = 1e3;
  d && "number" === typeof d.maxKeys && (b = d.maxKeys);
  d = a.length;
  0 < b && d > b && (d = b);
  for (b = 0; b < d; ++b) {
    var g = a[b].replace(f, "%20"), h = g.indexOf(c);
    if (0 <= h) {
      var k = g.substr(0, h);
      g = g.substr(h + 1);
    } else k = g, g = "";
    k = decodeURIComponent(k);
    g = decodeURIComponent(g);
    Object.prototype.hasOwnProperty.call(e, k) ? ve(e[k]) ? e[k].push(g) : e[k] = [e[k], g] : e[k] = g;
  }
  return e;
}
var Fe = { parse: Be, resolve: Ce, resolveObject: De, format: Ee, Url: Z };
function Z() {
  this.href = this.path = this.pathname = this.query = this.search = this.hash = this.hostname = this.port = this.host = this.auth = this.slashes = this.protocol = null;
}
var Ge = /^([a-z0-9.+-]+:)/i;
var He = /:[0-9]*$/;
var Ie = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
var Je = "{}|\\^`".split("").concat('<>"` \r\n	'.split(""));
var Ke = ["'"].concat(Je);
var Le = ["%", "/", "?", ";", "#"].concat(Ke);
var Me = ["/", "?", "#"];
var Ne = 255;
var Oe = /^[+a-z0-9A-Z_-]{0,63}$/;
var Pe = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
var Qe = { javascript: true, "javascript:": true };
var Re = { javascript: true, "javascript:": true };
var Se = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };
function Be(a, b, c) {
  if (a && Hb(a) && a instanceof Z) return a;
  var d = new Z();
  d.parse(a, b, c);
  return d;
}
Z.prototype.parse = function(a, b, c) {
  return Te(this, a, b, c);
};
function Te(a, b, c, d) {
  if (!Gb(b)) throw new TypeError("Parameter 'url' must be a string, not " + typeof b);
  var e = b.indexOf("?");
  e = -1 !== e && e < b.indexOf("#") ? "?" : "#";
  b = b.split(e);
  b[0] = b[0].replace(/\\/g, "/");
  b = b.join(e);
  e = b.trim();
  if (!d && 1 === b.split("#").length && (b = Ie.exec(e))) return a.path = e, a.href = e, a.pathname = b[1], b[2] ? (a.search = b[2], a.query = c ? Ae(a.search.substr(1)) : a.search.substr(1)) : c && (a.search = "", a.query = {}), a;
  if (b = Ge.exec(e)) {
    b = b[0];
    var f = b.toLowerCase();
    a.protocol = f;
    e = e.substr(b.length);
  }
  if (d || b || e.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var g = "//" === e.substr(0, 2);
    !g || b && Re[b] || (e = e.substr(2), a.slashes = true);
  }
  if (!Re[b] && (g || b && !Se[b])) {
    b = -1;
    for (d = 0; d < Me.length; d++) g = e.indexOf(Me[d]), -1 !== g && (-1 === b || g < b) && (b = g);
    g = -1 === b ? e.lastIndexOf("@") : e.lastIndexOf("@", b);
    -1 !== g && (d = e.slice(0, g), e = e.slice(g + 1), a.auth = decodeURIComponent(d));
    b = -1;
    for (d = 0; d < Le.length; d++) g = e.indexOf(Le[d]), -1 !== g && (-1 === b || g < b) && (b = g);
    -1 === b && (b = e.length);
    a.host = e.slice(0, b);
    e = e.slice(b);
    Ue(a);
    a.hostname = a.hostname || "";
    g = "[" === a.hostname[0] && "]" === a.hostname[a.hostname.length - 1];
    if (!g) {
      var h = a.hostname.split(/\./);
      d = 0;
      for (b = h.length; d < b; d++) {
        var k = h[d];
        if (k && !k.match(Oe)) {
          for (var p = "", n = 0, q = k.length; n < q; n++) p = 127 < k.charCodeAt(n) ? p + "x" : p + k[n];
          if (!p.match(Oe)) {
            b = h.slice(0, d);
            d = h.slice(d + 1);
            if (k = k.match(Pe)) b.push(k[1]), d.unshift(k[2]);
            d.length && (e = "/" + d.join(".") + e);
            a.hostname = b.join(".");
            break;
          }
        }
      }
    }
    a.hostname = a.hostname.length > Ne ? "" : a.hostname.toLowerCase();
    g || (a.hostname = ue(a.hostname));
    d = a.port ? ":" + a.port : "";
    a.host = (a.hostname || "") + d;
    a.href += a.host;
    g && (a.hostname = a.hostname.substr(1, a.hostname.length - 2), "/" !== e[0] && (e = "/" + e));
  }
  if (!Qe[f]) for (d = 0, b = Ke.length; d < b; d++) g = Ke[d], -1 !== e.indexOf(g) && (k = encodeURIComponent(g), k === g && (k = escape(g)), e = e.split(g).join(k));
  d = e.indexOf("#");
  -1 !== d && (a.hash = e.substr(d), e = e.slice(0, d));
  d = e.indexOf("?");
  -1 !== d ? (a.search = e.substr(d), a.query = e.substr(d + 1), c && (a.query = Ae(a.query)), e = e.slice(0, d)) : c && (a.search = "", a.query = {});
  e && (a.pathname = e);
  Se[f] && a.hostname && !a.pathname && (a.pathname = "/");
  if (a.pathname || a.search) d = a.pathname || "", a.path = d + (a.search || "");
  a.href = Ve(a);
  return a;
}
function Ee(a) {
  Gb(a) && (a = Te({}, a));
  return Ve(a);
}
function Ve(a) {
  var b = a.auth || "";
  b && (b = encodeURIComponent(b), b = b.replace(/%3A/i, ":"), b += "@");
  var c = a.protocol || "", d = a.pathname || "", e = a.hash || "", f = false, g = "";
  a.host ? f = b + a.host : a.hostname && (f = b + (-1 === a.hostname.indexOf(":") ? a.hostname : "[" + this.hostname + "]"), a.port && (f += ":" + a.port));
  a.query && Hb(a.query) && Object.keys(a.query).length && (g = xe(a.query));
  b = a.search || g && "?" + g || "";
  c && ":" !== c.substr(-1) && (c += ":");
  a.slashes || (!c || Se[c]) && false !== f ? (f = "//" + (f || ""), d && "/" !== d.charAt(0) && (d = "/" + d)) : f || (f = "");
  e && "#" !== e.charAt(0) && (e = "#" + e);
  b && "?" !== b.charAt(0) && (b = "?" + b);
  d = d.replace(/[?#]/g, function(a2) {
    return encodeURIComponent(a2);
  });
  b = b.replace("#", "%23");
  return c + f + d + b + e;
}
Z.prototype.format = function() {
  return Ve(this);
};
function Ce(a, b) {
  return Be(a, false, true).resolve(b);
}
Z.prototype.resolve = function(a) {
  return this.resolveObject(Be(a, false, true)).format();
};
function De(a, b) {
  return a ? Be(a, false, true).resolveObject(b) : b;
}
Z.prototype.resolveObject = function(a) {
  if (Gb(a)) {
    var b = new Z();
    b.parse(a, false, true);
    a = b;
  }
  b = new Z();
  for (var c = Object.keys(this), d = 0; d < c.length; d++) {
    var e = c[d];
    b[e] = this[e];
  }
  b.hash = a.hash;
  if ("" === a.href) return b.href = b.format(), b;
  if (a.slashes && !a.protocol) {
    c = Object.keys(a);
    for (d = 0; d < c.length; d++) e = c[d], "protocol" !== e && (b[e] = a[e]);
    Se[b.protocol] && b.hostname && !b.pathname && (b.path = b.pathname = "/");
    b.href = b.format();
    return b;
  }
  var f;
  if (a.protocol && a.protocol !== b.protocol) {
    if (!Se[a.protocol]) {
      c = Object.keys(a);
      for (d = 0; d < c.length; d++) e = c[d], b[e] = a[e];
      b.href = b.format();
      return b;
    }
    b.protocol = a.protocol;
    if (a.host || Re[a.protocol]) b.pathname = a.pathname;
    else {
      for (f = (a.pathname || "").split("/"); f.length && !(a.host = f.shift()); ) ;
      a.host || (a.host = "");
      a.hostname || (a.hostname = "");
      "" !== f[0] && f.unshift("");
      2 > f.length && f.unshift("");
      b.pathname = f.join("/");
    }
    b.search = a.search;
    b.query = a.query;
    b.host = a.host || "";
    b.auth = a.auth;
    b.hostname = a.hostname || a.host;
    b.port = a.port;
    if (b.pathname || b.search) b.path = (b.pathname || "") + (b.search || "");
    b.slashes = b.slashes || a.slashes;
    b.href = b.format();
    return b;
  }
  c = b.pathname && "/" === b.pathname.charAt(0);
  var g = a.host || a.pathname && "/" === a.pathname.charAt(0), h = c = g || c || b.host && a.pathname;
  d = b.pathname && b.pathname.split("/") || [];
  e = b.protocol && !Se[b.protocol];
  f = a.pathname && a.pathname.split("/") || [];
  e && (b.hostname = "", b.port = null, b.host && ("" === d[0] ? d[0] = b.host : d.unshift(b.host)), b.host = "", a.protocol && (a.hostname = null, a.port = null, a.host && ("" === f[0] ? f[0] = a.host : f.unshift(a.host)), a.host = null), c = c && ("" === f[0] || "" === d[0]));
  if (g) b.host = a.host || "" === a.host ? a.host : b.host, b.hostname = a.hostname || "" === a.hostname ? a.hostname : b.hostname, b.search = a.search, b.query = a.query, d = f;
  else if (f.length) d || (d = []), d.pop(), d = d.concat(f), b.search = a.search, b.query = a.query;
  else if (null != a.search) {
    e && (b.hostname = b.host = d.shift(), e = b.host && 0 < b.host.indexOf("@") ? b.host.split("@") : false) && (b.auth = e.shift(), b.host = b.hostname = e.shift());
    b.search = a.search;
    b.query = a.query;
    if (null !== b.pathname || null !== b.search) b.path = (b.pathname ? b.pathname : "") + (b.search ? b.search : "");
    b.href = b.format();
    return b;
  }
  if (!d.length) return b.pathname = null, b.path = b.search ? "/" + b.search : null, b.href = b.format(), b;
  g = d.slice(-1)[0];
  f = (b.host || a.host || 1 < d.length) && ("." === g || ".." === g) || "" === g;
  for (var k = 0, p = d.length; 0 <= p; p--) g = d[p], "." === g ? d.splice(p, 1) : ".." === g ? (d.splice(p, 1), k++) : k && (d.splice(p, 1), k--);
  if (!c && !h) for (; k--; k) d.unshift("..");
  !c || "" === d[0] || d[0] && "/" === d[0].charAt(0) || d.unshift("");
  f && "/" !== d.join("/").substr(-1) && d.push("");
  h = "" === d[0] || d[0] && "/" === d[0].charAt(0);
  e && (b.hostname = b.host = h ? "" : d.length ? d.shift() : "", e = b.host && 0 < b.host.indexOf("@") ? b.host.split("@") : false) && (b.auth = e.shift(), b.host = b.hostname = e.shift());
  (c = c || b.host && d.length) && !h && d.unshift("");
  d.length ? b.pathname = d.join("/") : (b.pathname = null, b.path = null);
  if (null !== b.pathname || null !== b.search) b.path = (b.pathname ? b.pathname : "") + (b.search ? b.search : "");
  b.auth = a.auth || b.auth;
  b.slashes = b.slashes || a.slashes;
  b.href = b.format();
  return b;
};
Z.prototype.parseHost = function() {
  return Ue(this);
};
function Ue(a) {
  var b = a.host, c = He.exec(b);
  c && (c = c[0], ":" !== c && (a.port = c.substr(1)), b = b.substr(0, b.length - c.length));
  b && (a.hostname = b);
}
var We = u(function(a, b) {
  function c(a2, b2) {
    a2 = a2[b2];
    return 0 < b2 && ("/" === a2 || e && "\\" === a2);
  }
  function d(a2) {
    var b2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : true;
    if (e) {
      var d2 = a2;
      if ("string" !== typeof d2) throw new TypeError("expected a string");
      d2 = d2.replace(/[\\\/]+/g, "/");
      if (false !== b2) if (b2 = d2, d2 = b2.length - 1, 2 > d2) d2 = b2;
      else {
        for (; c(b2, d2); ) d2--;
        d2 = b2.substr(0, d2 + 1);
      }
      return d2.replace(/^([a-zA-Z]+:|\.\/)/, "");
    }
    return a2;
  }
  Object.defineProperty(b, "__esModule", { value: true });
  b.unixify = d;
  b.correctPath = function(a2) {
    return d(a2.replace(
      /^\\\\\?\\.:\\/,
      "\\"
    ));
  };
  var e = "win32" === Cb.platform;
});
t(We);
var Xe = u(function(a, b) {
  function c(a2, b2) {
    void 0 === b2 && (b2 = L.default.cwd());
    return cf(b2, a2);
  }
  function d(a2, b2) {
    return "function" === typeof a2 ? [e(), a2] : [e(a2), q(b2)];
  }
  function e(a2) {
    void 0 === a2 && (a2 = {});
    return aa({}, df, a2);
  }
  function f(a2) {
    return "number" === typeof a2 ? aa({}, ud, { mode: a2 }) : aa({}, ud, a2);
  }
  function g(a2, b2, c2, d2) {
    void 0 === b2 && (b2 = "");
    void 0 === c2 && (c2 = "");
    void 0 === d2 && (d2 = "");
    var e2 = "";
    c2 && (e2 = " '" + c2 + "'");
    d2 && (e2 += " -> '" + d2 + "'");
    switch (a2) {
      case "ENOENT":
        return "ENOENT: no such file or directory, " + b2 + e2;
      case "EBADF":
        return "EBADF: bad file descriptor, " + b2 + e2;
      case "EINVAL":
        return "EINVAL: invalid argument, " + b2 + e2;
      case "EPERM":
        return "EPERM: operation not permitted, " + b2 + e2;
      case "EPROTO":
        return "EPROTO: protocol error, " + b2 + e2;
      case "EEXIST":
        return "EEXIST: file already exists, " + b2 + e2;
      case "ENOTDIR":
        return "ENOTDIR: not a directory, " + b2 + e2;
      case "EISDIR":
        return "EISDIR: illegal operation on a directory, " + b2 + e2;
      case "EACCES":
        return "EACCES: permission denied, " + b2 + e2;
      case "ENOTEMPTY":
        return "ENOTEMPTY: directory not empty, " + b2 + e2;
      case "EMFILE":
        return "EMFILE: too many open files, " + b2 + e2;
      case "ENOSYS":
        return "ENOSYS: function not implemented, " + b2 + e2;
      default:
        return a2 + ": error occurred, " + b2 + e2;
    }
  }
  function h(a2, b2, c2, d2, e2) {
    void 0 === b2 && (b2 = "");
    void 0 === c2 && (c2 = "");
    void 0 === d2 && (d2 = "");
    void 0 === e2 && (e2 = Error);
    b2 = new e2(g(a2, b2, c2, d2));
    b2.code = a2;
    return b2;
  }
  function k(a2) {
    if ("number" === typeof a2) return a2;
    if ("string" === typeof a2) {
      var b2 = ua[a2];
      if ("undefined" !== typeof b2) return b2;
    }
    throw new Pc.TypeError("ERR_INVALID_OPT_VALUE", "flags", a2);
  }
  function p(a2, b2) {
    if (b2) {
      var c2 = typeof b2;
      switch (c2) {
        case "string":
          a2 = aa({}, a2, { encoding: b2 });
          break;
        case "object":
          a2 = aa({}, a2, b2);
          break;
        default:
          throw TypeError("Expected options to be either an object or a string, but got " + c2 + " instead");
      }
    } else return a2;
    "buffer" !== a2.encoding && K.assertEncoding(a2.encoding);
    return a2;
  }
  function n(a2) {
    return function(b2) {
      return p(a2, b2);
    };
  }
  function q(a2) {
    if ("function" !== typeof a2) throw TypeError(fa.CB);
    return a2;
  }
  function B(a2) {
    return function(b2, c2) {
      return "function" === typeof b2 ? [a2(), b2] : [a2(b2), q(c2)];
    };
  }
  function m(a2) {
    if ("string" !== typeof a2 && !F.Buffer.isBuffer(a2)) {
      try {
        if (!(a2 instanceof Fe.URL)) throw new TypeError(fa.PATH_STR);
      } catch (Xa) {
        throw new TypeError(fa.PATH_STR);
      }
      if ("" !== a2.hostname) throw new Pc.TypeError("ERR_INVALID_FILE_URL_HOST", L.default.platform);
      a2 = a2.pathname;
      for (var b2 = 0; b2 < a2.length; b2++) if ("%" === a2[b2]) {
        var c2 = a2.codePointAt(b2 + 2) | 32;
        if ("2" === a2[b2 + 1] && 102 === c2) throw new Pc.TypeError("ERR_INVALID_FILE_URL_PATH", "must not include encoded / characters");
      }
      a2 = decodeURIComponent(a2);
    }
    a2 = String(a2);
    qb(a2);
    return a2;
  }
  function v(a2, b2) {
    return (a2 = c(a2, b2).substr(1)) ? a2.split(S) : [];
  }
  function xa(a2) {
    return v(m(a2));
  }
  function La(a2, b2) {
    void 0 === b2 && (b2 = K.ENCODING_UTF8);
    return F.Buffer.isBuffer(a2) ? a2 : a2 instanceof Uint8Array ? F.bufferFrom(a2) : F.bufferFrom(String(a2), b2);
  }
  function $b(a2, b2) {
    return b2 && "buffer" !== b2 ? a2.toString(b2) : a2;
  }
  function qb(a2, b2) {
    if (-1 !== ("" + a2).indexOf("\0")) {
      a2 = Error("Path must be a string without null bytes");
      a2.code = "ENOENT";
      if ("function" !== typeof b2) throw a2;
      L.default.nextTick(b2, a2);
      return false;
    }
    return true;
  }
  function M(a2, b2) {
    a2 = "number" === typeof a2 ? a2 : "string" === typeof a2 ? parseInt(a2, 8) : b2 ? M(b2) : void 0;
    if ("number" !== typeof a2 || isNaN(a2)) throw new TypeError(fa.MODE_INT);
    return a2;
  }
  function Ya(a2) {
    if (a2 >>> 0 !== a2) throw TypeError(fa.FD);
  }
  function ha(a2) {
    if ("string" === typeof a2 && +a2 == a2) return +a2;
    if (a2 instanceof Date) return a2.getTime() / 1e3;
    if (isFinite(a2)) return 0 > a2 ? Date.now() / 1e3 : a2;
    throw Error("Cannot parse time: " + a2);
  }
  function Ha(a2) {
    if ("number" !== typeof a2) throw TypeError(fa.UID);
  }
  function Ia(a2) {
    if ("number" !== typeof a2) throw TypeError(fa.GID);
  }
  function ef(a2) {
    a2.emit("stop");
  }
  function T(a2, b2, c2) {
    if (!(this instanceof T)) return new T(a2, b2, c2);
    this._vol = a2;
    c2 = aa({}, p(c2, {}));
    void 0 === c2.highWaterMark && (c2.highWaterMark = 65536);
    Y.Readable.call(this, c2);
    this.path = m(b2);
    this.fd = void 0 === c2.fd ? null : c2.fd;
    this.flags = void 0 === c2.flags ? "r" : c2.flags;
    this.mode = void 0 === c2.mode ? 438 : c2.mode;
    this.start = c2.start;
    this.end = c2.end;
    this.autoClose = void 0 === c2.autoClose ? true : c2.autoClose;
    this.pos = void 0;
    this.bytesRead = 0;
    if (void 0 !== this.start) {
      if ("number" !== typeof this.start) throw new TypeError('"start" option must be a Number');
      if (void 0 === this.end) this.end = Infinity;
      else if ("number" !== typeof this.end) throw new TypeError('"end" option must be a Number');
      if (this.start > this.end) throw Error('"start" option must be <= "end" option');
      this.pos = this.start;
    }
    "number" !== typeof this.fd && this.open();
    this.on("end", function() {
      this.autoClose && this.destroy && this.destroy();
    });
  }
  function ff() {
    this.close();
  }
  function R(a2, b2, c2) {
    if (!(this instanceof R)) return new R(a2, b2, c2);
    this._vol = a2;
    c2 = aa({}, p(c2, {}));
    Y.Writable.call(this, c2);
    this.path = m(b2);
    this.fd = void 0 === c2.fd ? null : c2.fd;
    this.flags = void 0 === c2.flags ? "w" : c2.flags;
    this.mode = void 0 === c2.mode ? 438 : c2.mode;
    this.start = c2.start;
    this.autoClose = void 0 === c2.autoClose ? true : !!c2.autoClose;
    this.pos = void 0;
    this.bytesWritten = 0;
    if (void 0 !== this.start) {
      if ("number" !== typeof this.start) throw new TypeError('"start" option must be a Number');
      if (0 > this.start) throw Error('"start" must be >= zero');
      this.pos = this.start;
    }
    c2.encoding && this.setDefaultEncoding(c2.encoding);
    "number" !== typeof this.fd && this.open();
    this.once("finish", function() {
      this.autoClose && this.close();
    });
  }
  var Ja = l && l.__extends || /* @__PURE__ */ function() {
    function a2(b2, c2) {
      a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, b3) {
        a3.__proto__ = b3;
      } || function(a3, b3) {
        for (var c3 in b3) b3.hasOwnProperty(c3) && (a3[c3] = b3[c3]);
      };
      return a2(b2, c2);
    }
    return function(b2, c2) {
      function d2() {
        this.constructor = b2;
      }
      a2(b2, c2);
      b2.prototype = null === c2 ? Object.create(c2) : (d2.prototype = c2.prototype, new d2());
    };
  }(), Xb = l && l.__spreadArrays || function() {
    for (var a2 = 0, b2 = 0, c2 = arguments.length; b2 < c2; b2++) a2 += arguments[b2].length;
    a2 = Array(a2);
    var d2 = 0;
    for (b2 = 0; b2 < c2; b2++) for (var e2 = arguments[b2], f2 = 0, g2 = e2.length; f2 < g2; f2++, d2++) a2[d2] = e2[f2];
    return a2;
  };
  Object.defineProperty(b, "__esModule", { value: true });
  var aa = le.extend, cf = Zc.resolve, mb = w.constants.O_RDONLY, Ka = w.constants.O_WRONLY, na = w.constants.O_RDWR, U = w.constants.O_CREAT, nb = w.constants.O_EXCL, Za = w.constants.O_TRUNC, $a = w.constants.O_APPEND, vd = w.constants.O_SYNC, gf = w.constants.O_DIRECTORY, wd = w.constants.F_OK, hf = w.constants.COPYFILE_EXCL, jf = w.constants.COPYFILE_FICLONE_FORCE;
  var S = Zc.sep;
  var xd = Zc.relative;
  var Yb = "win32" === L.default.platform, fa = {
    PATH_STR: "path must be a string or Buffer",
    FD: "fd must be a file descriptor",
    MODE_INT: "mode must be an int",
    CB: "callback must be a function",
    UID: "uid must be an unsigned int",
    GID: "gid must be an unsigned int",
    LEN: "len must be an integer",
    ATIME: "atime must be an integer",
    MTIME: "mtime must be an integer",
    PREFIX: "filename prefix is required",
    BUFFER: "buffer must be an instance of Buffer or StaticBuffer",
    OFFSET: "offset must be an integer",
    LENGTH: "length must be an integer",
    POSITION: "position must be an integer"
  }, ua;
  (function(a2) {
    a2[a2.r = mb] = "r";
    a2[a2["r+"] = na] = "r+";
    a2[a2.rs = mb | vd] = "rs";
    a2[a2.sr = a2.rs] = "sr";
    a2[a2["rs+"] = na | vd] = "rs+";
    a2[a2["sr+"] = a2["rs+"]] = "sr+";
    a2[a2.w = Ka | U | Za] = "w";
    a2[a2.wx = Ka | U | Za | nb] = "wx";
    a2[a2.xw = a2.wx] = "xw";
    a2[a2["w+"] = na | U | Za] = "w+";
    a2[a2["wx+"] = na | U | Za | nb] = "wx+";
    a2[a2["xw+"] = a2["wx+"]] = "xw+";
    a2[a2.a = Ka | $a | U] = "a";
    a2[a2.ax = Ka | $a | U | nb] = "ax";
    a2[a2.xa = a2.ax] = "xa";
    a2[a2["a+"] = na | $a | U] = "a+";
    a2[a2["ax+"] = na | $a | U | nb] = "ax+";
    a2[a2["xa+"] = a2["ax+"]] = "xa+";
  })(ua = b.FLAGS || (b.FLAGS = {}));
  b.flagsToNumber = k;
  a = { encoding: "utf8" };
  var ob = n(a), yd = B(ob), zd = n({ flag: "r" }), Ad = {
    encoding: "utf8",
    mode: 438,
    flag: ua[ua.w]
  }, Bd = n(Ad), Cd = { encoding: "utf8", mode: 438, flag: ua[ua.a] }, Dd = n(Cd), kf = B(Dd), Ed = n(a), lf = B(Ed), ud = { mode: 511, recursive: false }, Fd = { recursive: false }, Gd = n({ encoding: "utf8", withFileTypes: false }), mf = B(Gd), df = { bigint: false };
  b.pathToFilename = m;
  if (Yb) {
    var nf = c, of = We.unixify;
    c = function(a2, b2) {
      return of(nf(a2, b2));
    };
  }
  b.filenameToSteps = v;
  b.pathToSteps = xa;
  b.dataToStr = function(a2, b2) {
    void 0 === b2 && (b2 = K.ENCODING_UTF8);
    return F.Buffer.isBuffer(a2) ? a2.toString(b2) : a2 instanceof Uint8Array ? F.bufferFrom(a2).toString(b2) : String(a2);
  };
  b.dataToBuffer = La;
  b.bufferToEncoding = $b;
  b.toUnixTimestamp = ha;
  a = function() {
    function a2(a3) {
      void 0 === a3 && (a3 = {});
      this.ino = 0;
      this.inodes = {};
      this.releasedInos = [];
      this.fds = {};
      this.releasedFds = [];
      this.maxFiles = 1e4;
      this.openFiles = 0;
      this.promisesApi = me.default(this);
      this.statWatchers = {};
      this.props = aa({ Node: fd.Node, Link: fd.Link, File: fd.File }, a3);
      a3 = this.createLink();
      a3.setNode(this.createNode(true));
      var b2 = this;
      this.StatWatcher = function(a4) {
        function c2() {
          return a4.call(this, b2) || this;
        }
        Ja(c2, a4);
        return c2;
      }(Hd);
      this.ReadStream = function(a4) {
        function c2() {
          for (var c3 = [], d2 = 0; d2 < arguments.length; d2++) c3[d2] = arguments[d2];
          return a4.apply(this, Xb([b2], c3)) || this;
        }
        Ja(c2, a4);
        return c2;
      }(T);
      this.WriteStream = function(a4) {
        function c2() {
          for (var c3 = [], d2 = 0; d2 < arguments.length; d2++) c3[d2] = arguments[d2];
          return a4.apply(this, Xb([b2], c3)) || this;
        }
        Ja(c2, a4);
        return c2;
      }(R);
      this.FSWatcher = function(a4) {
        function c2() {
          return a4.call(this, b2) || this;
        }
        Ja(c2, a4);
        return c2;
      }(Id);
      this.root = a3;
    }
    a2.fromJSON = function(b2, c2) {
      var d2 = new a2();
      d2.fromJSON(b2, c2);
      return d2;
    };
    Object.defineProperty(
      a2.prototype,
      "promises",
      { get: function() {
        if (null === this.promisesApi) throw Error("Promise is not supported in this environment.");
        return this.promisesApi;
      }, enumerable: true, configurable: true }
    );
    a2.prototype.createLink = function(a3, b2, c2, d2) {
      void 0 === c2 && (c2 = false);
      if (!a3) return new this.props.Link(this, null, "");
      if (!b2) throw Error("createLink: name cannot be empty");
      return a3.createChild(b2, this.createNode(c2, d2));
    };
    a2.prototype.deleteLink = function(a3) {
      var b2 = a3.parent;
      return b2 ? (b2.deleteChild(a3), true) : false;
    };
    a2.prototype.newInoNumber = function() {
      var a3 = this.releasedInos.pop();
      return a3 ? a3 : this.ino = (this.ino + 1) % 4294967295;
    };
    a2.prototype.newFdNumber = function() {
      var b2 = this.releasedFds.pop();
      return "number" === typeof b2 ? b2 : a2.fd--;
    };
    a2.prototype.createNode = function(a3, b2) {
      void 0 === a3 && (a3 = false);
      b2 = new this.props.Node(this.newInoNumber(), b2);
      a3 && b2.setIsDirectory();
      return this.inodes[b2.ino] = b2;
    };
    a2.prototype.getNode = function(a3) {
      return this.inodes[a3];
    };
    a2.prototype.deleteNode = function(a3) {
      a3.del();
      delete this.inodes[a3.ino];
      this.releasedInos.push(a3.ino);
    };
    a2.prototype.genRndStr = function() {
      var a3 = (Math.random() + 1).toString(36).substr(2, 6);
      return 6 === a3.length ? a3 : this.genRndStr();
    };
    a2.prototype.getLink = function(a3) {
      return this.root.walk(a3);
    };
    a2.prototype.getLinkOrThrow = function(a3, b2) {
      var c2 = v(a3);
      c2 = this.getLink(c2);
      if (!c2) throw h("ENOENT", b2, a3);
      return c2;
    };
    a2.prototype.getResolvedLink = function(a3) {
      a3 = "string" === typeof a3 ? v(a3) : a3;
      for (var b2 = this.root, c2 = 0; c2 < a3.length; ) {
        b2 = b2.getChild(a3[c2]);
        if (!b2) return null;
        var d2 = b2.getNode();
        d2.isSymlink() ? (a3 = d2.symlink.concat(a3.slice(c2 + 1)), b2 = this.root, c2 = 0) : c2++;
      }
      return b2;
    };
    a2.prototype.getResolvedLinkOrThrow = function(a3, b2) {
      var c2 = this.getResolvedLink(a3);
      if (!c2) throw h("ENOENT", b2, a3);
      return c2;
    };
    a2.prototype.resolveSymlinks = function(a3) {
      return this.getResolvedLink(a3.steps.slice(1));
    };
    a2.prototype.getLinkAsDirOrThrow = function(a3, b2) {
      var c2 = this.getLinkOrThrow(a3, b2);
      if (!c2.getNode().isDirectory()) throw h("ENOTDIR", b2, a3);
      return c2;
    };
    a2.prototype.getLinkParent = function(a3) {
      return this.root.walk(a3, a3.length - 1);
    };
    a2.prototype.getLinkParentAsDirOrThrow = function(a3, b2) {
      a3 = a3 instanceof Array ? a3 : v(a3);
      var c2 = this.getLinkParent(a3);
      if (!c2) throw h(
        "ENOENT",
        b2,
        S + a3.join(S)
      );
      if (!c2.getNode().isDirectory()) throw h("ENOTDIR", b2, S + a3.join(S));
      return c2;
    };
    a2.prototype.getFileByFd = function(a3) {
      return this.fds[String(a3)];
    };
    a2.prototype.getFileByFdOrThrow = function(a3, b2) {
      if (a3 >>> 0 !== a3) throw TypeError(fa.FD);
      a3 = this.getFileByFd(a3);
      if (!a3) throw h("EBADF", b2);
      return a3;
    };
    a2.prototype.getNodeByIdOrCreate = function(a3, b2, c2) {
      if ("number" === typeof a3) {
        a3 = this.getFileByFd(a3);
        if (!a3) throw Error("File nto found");
        return a3.node;
      }
      var d2 = xa(a3), e2 = this.getLink(d2);
      if (e2) return e2.getNode();
      if (b2 & U && (b2 = this.getLinkParent(d2))) return e2 = this.createLink(b2, d2[d2.length - 1], false, c2), e2.getNode();
      throw h("ENOENT", "getNodeByIdOrCreate", m(a3));
    };
    a2.prototype.wrapAsync = function(a3, b2, c2) {
      var d2 = this;
      q(c2);
      $c.default(function() {
        try {
          c2(null, a3.apply(d2, b2));
        } catch (va) {
          c2(va);
        }
      });
    };
    a2.prototype._toJSON = function(a3, b2, c2) {
      var d2;
      void 0 === a3 && (a3 = this.root);
      void 0 === b2 && (b2 = {});
      var e2 = true, r = a3.children;
      a3.getNode().isFile() && (r = (d2 = {}, d2[a3.getName()] = a3.parent.getChild(a3.getName()), d2), a3 = a3.parent);
      for (var D in r) {
        e2 = false;
        r = a3.getChild(D);
        if (!r) throw Error("_toJSON: unexpected undefined");
        d2 = r.getNode();
        d2.isFile() ? (r = r.getPath(), c2 && (r = xd(c2, r)), b2[r] = d2.getString()) : d2.isDirectory() && this._toJSON(r, b2, c2);
      }
      a3 = a3.getPath();
      c2 && (a3 = xd(c2, a3));
      a3 && e2 && (b2[a3] = null);
      return b2;
    };
    a2.prototype.toJSON = function(a3, b2, c2) {
      void 0 === b2 && (b2 = {});
      void 0 === c2 && (c2 = false);
      var d2 = [];
      if (a3) {
        a3 instanceof Array || (a3 = [a3]);
        for (var e2 = 0; e2 < a3.length; e2++) {
          var r = m(a3[e2]);
          (r = this.getResolvedLink(r)) && d2.push(r);
        }
      } else d2.push(this.root);
      if (!d2.length) return b2;
      for (e2 = 0; e2 < d2.length; e2++) r = d2[e2], this._toJSON(r, b2, c2 ? r.getPath() : "");
      return b2;
    };
    a2.prototype.fromJSON = function(a3, b2) {
      void 0 === b2 && (b2 = L.default.cwd());
      for (var d2 in a3) {
        var e2 = a3[d2];
        if ("string" === typeof e2) {
          d2 = c(d2, b2);
          var r = v(d2);
          1 < r.length && (r = S + r.slice(0, r.length - 1).join(S), this.mkdirpBase(r, 511));
          this.writeFileSync(d2, e2);
        } else this.mkdirpBase(d2, 511);
      }
    };
    a2.prototype.reset = function() {
      this.ino = 0;
      this.inodes = {};
      this.releasedInos = [];
      this.fds = {};
      this.releasedFds = [];
      this.openFiles = 0;
      this.root = this.createLink();
      this.root.setNode(this.createNode(true));
    };
    a2.prototype.mountSync = function(a3, b2) {
      this.fromJSON(b2, a3);
    };
    a2.prototype.openLink = function(a3, b2, c2) {
      void 0 === c2 && (c2 = true);
      if (this.openFiles >= this.maxFiles) throw h("EMFILE", "open", a3.getPath());
      var d2 = a3;
      c2 && (d2 = this.resolveSymlinks(a3));
      if (!d2) throw h("ENOENT", "open", a3.getPath());
      c2 = d2.getNode();
      if (c2.isDirectory()) {
        if ((b2 & (mb | na | Ka)) !== mb) throw h("EISDIR", "open", a3.getPath());
      } else if (b2 & gf) throw h("ENOTDIR", "open", a3.getPath());
      if (!(b2 & Ka || c2.canRead())) throw h("EACCES", "open", a3.getPath());
      a3 = new this.props.File(a3, c2, b2, this.newFdNumber());
      this.fds[a3.fd] = a3;
      this.openFiles++;
      b2 & Za && a3.truncate();
      return a3;
    };
    a2.prototype.openFile = function(a3, b2, c2, d2) {
      void 0 === d2 && (d2 = true);
      var e2 = v(a3), r = d2 ? this.getResolvedLink(e2) : this.getLink(e2);
      if (!r && b2 & U) {
        var D = this.getResolvedLink(e2.slice(0, e2.length - 1));
        if (!D) throw h("ENOENT", "open", S + e2.join(S));
        b2 & U && "number" === typeof c2 && (r = this.createLink(D, e2[e2.length - 1], false, c2));
      }
      if (r) return this.openLink(r, b2, d2);
      throw h("ENOENT", "open", a3);
    };
    a2.prototype.openBase = function(a3, b2, c2, d2) {
      void 0 === d2 && (d2 = true);
      b2 = this.openFile(a3, b2, c2, d2);
      if (!b2) throw h("ENOENT", "open", a3);
      return b2.fd;
    };
    a2.prototype.openSync = function(a3, b2, c2) {
      void 0 === c2 && (c2 = 438);
      c2 = M(c2);
      a3 = m(a3);
      b2 = k(b2);
      return this.openBase(a3, b2, c2);
    };
    a2.prototype.open = function(a3, b2, c2, d2) {
      var e2 = c2;
      "function" === typeof c2 && (e2 = 438, d2 = c2);
      c2 = M(e2 || 438);
      a3 = m(a3);
      b2 = k(b2);
      this.wrapAsync(this.openBase, [a3, b2, c2], d2);
    };
    a2.prototype.closeFile = function(a3) {
      this.fds[a3.fd] && (this.openFiles--, delete this.fds[a3.fd], this.releasedFds.push(a3.fd));
    };
    a2.prototype.closeSync = function(a3) {
      Ya(a3);
      a3 = this.getFileByFdOrThrow(a3, "close");
      this.closeFile(a3);
    };
    a2.prototype.close = function(a3, b2) {
      Ya(a3);
      this.wrapAsync(
        this.closeSync,
        [a3],
        b2
      );
    };
    a2.prototype.openFileOrGetById = function(a3, b2, c2) {
      if ("number" === typeof a3) {
        a3 = this.fds[a3];
        if (!a3) throw h("ENOENT");
        return a3;
      }
      return this.openFile(m(a3), b2, c2);
    };
    a2.prototype.readBase = function(a3, b2, c2, d2, e2) {
      return this.getFileByFdOrThrow(a3).read(b2, Number(c2), Number(d2), e2);
    };
    a2.prototype.readSync = function(a3, b2, c2, d2, e2) {
      Ya(a3);
      return this.readBase(a3, b2, c2, d2, e2);
    };
    a2.prototype.read = function(a3, b2, c2, d2, e2, f2) {
      var r = this;
      q(f2);
      if (0 === d2) return L.default.nextTick(function() {
        f2 && f2(null, 0, b2);
      });
      $c.default(function() {
        try {
          var D = r.readBase(
            a3,
            b2,
            c2,
            d2,
            e2
          );
          f2(null, D, b2);
        } catch (pf) {
          f2(pf);
        }
      });
    };
    a2.prototype.readFileBase = function(a3, b2, c2) {
      var d2 = "number" === typeof a3 && a3 >>> 0 === a3;
      if (!d2) {
        var e2 = m(a3);
        e2 = v(e2);
        if ((e2 = this.getResolvedLink(e2)) && e2.getNode().isDirectory()) throw h("EISDIR", "open", e2.getPath());
        a3 = this.openSync(a3, b2);
      }
      try {
        var r = $b(this.getFileByFdOrThrow(a3).getBuffer(), c2);
      } finally {
        d2 || this.closeSync(a3);
      }
      return r;
    };
    a2.prototype.readFileSync = function(a3, b2) {
      b2 = zd(b2);
      var c2 = k(b2.flag);
      return this.readFileBase(a3, c2, b2.encoding);
    };
    a2.prototype.readFile = function(a3, b2, c2) {
      c2 = B(zd)(
        b2,
        c2
      );
      b2 = c2[0];
      c2 = c2[1];
      var d2 = k(b2.flag);
      this.wrapAsync(this.readFileBase, [a3, d2, b2.encoding], c2);
    };
    a2.prototype.writeBase = function(a3, b2, c2, d2, e2) {
      return this.getFileByFdOrThrow(a3, "write").write(b2, c2, d2, e2);
    };
    a2.prototype.writeSync = function(a3, b2, c2, d2, e2) {
      Ya(a3);
      var r = "string" !== typeof b2;
      if (r) {
        var D = (c2 || 0) | 0;
        var f2 = d2;
        c2 = e2;
      } else var Xa = d2;
      b2 = La(b2, Xa);
      r ? "undefined" === typeof f2 && (f2 = b2.length) : (D = 0, f2 = b2.length);
      return this.writeBase(a3, b2, D, f2, c2);
    };
    a2.prototype.write = function(a3, b2, c2, d2, e2, f2) {
      var r = this;
      Ya(a3);
      var D = typeof b2, Xa = typeof c2, g2 = typeof d2, h2 = typeof e2;
      if ("string" !== D) if ("function" === Xa) var k2 = c2;
      else if ("function" === g2) {
        var lb = c2 | 0;
        k2 = d2;
      } else if ("function" === h2) {
        lb = c2 | 0;
        var m2 = d2;
        k2 = e2;
      } else {
        lb = c2 | 0;
        m2 = d2;
        var n2 = e2;
        k2 = f2;
      }
      else if ("function" === Xa) k2 = c2;
      else if ("function" === g2) n2 = c2, k2 = d2;
      else if ("function" === h2) {
        n2 = c2;
        var va = d2;
        k2 = e2;
      }
      var p2 = La(b2, va);
      "string" !== D ? "undefined" === typeof m2 && (m2 = p2.length) : (lb = 0, m2 = p2.length);
      var v2 = q(k2);
      $c.default(function() {
        try {
          var c3 = r.writeBase(a3, p2, lb, m2, n2);
          "string" !== D ? v2(null, c3, p2) : v2(null, c3, b2);
        } catch (qf) {
          v2(qf);
        }
      });
    };
    a2.prototype.writeFileBase = function(a3, b2, c2, d2) {
      var e2 = "number" === typeof a3;
      a3 = e2 ? a3 : this.openBase(m(a3), c2, d2);
      d2 = 0;
      var r = b2.length;
      c2 = c2 & $a ? void 0 : 0;
      try {
        for (; 0 < r; ) {
          var D = this.writeSync(a3, b2, d2, r, c2);
          d2 += D;
          r -= D;
          void 0 !== c2 && (c2 += D);
        }
      } finally {
        e2 || this.closeSync(a3);
      }
    };
    a2.prototype.writeFileSync = function(a3, b2, c2) {
      var d2 = Bd(c2);
      c2 = k(d2.flag);
      var e2 = M(d2.mode);
      b2 = La(b2, d2.encoding);
      this.writeFileBase(a3, b2, c2, e2);
    };
    a2.prototype.writeFile = function(a3, b2, c2, d2) {
      var e2 = c2;
      "function" === typeof c2 && (e2 = Ad, d2 = c2);
      c2 = q(d2);
      var r = Bd(e2);
      e2 = k(r.flag);
      d2 = M(r.mode);
      b2 = La(b2, r.encoding);
      this.wrapAsync(
        this.writeFileBase,
        [a3, b2, e2, d2],
        c2
      );
    };
    a2.prototype.linkBase = function(a3, b2) {
      var c2 = v(a3), d2 = this.getLink(c2);
      if (!d2) throw h("ENOENT", "link", a3, b2);
      var e2 = v(b2);
      c2 = this.getLinkParent(e2);
      if (!c2) throw h("ENOENT", "link", a3, b2);
      e2 = e2[e2.length - 1];
      if (c2.getChild(e2)) throw h("EEXIST", "link", a3, b2);
      a3 = d2.getNode();
      a3.nlink++;
      c2.createChild(e2, a3);
    };
    a2.prototype.copyFileBase = function(a3, b2, c2) {
      var d2 = this.readFileSync(a3);
      if (c2 & hf && this.existsSync(b2)) throw h("EEXIST", "copyFile", a3, b2);
      if (c2 & jf) throw h("ENOSYS", "copyFile", a3, b2);
      this.writeFileBase(b2, d2, ua.w, 438);
    };
    a2.prototype.copyFileSync = function(a3, b2, c2) {
      a3 = m(a3);
      b2 = m(b2);
      return this.copyFileBase(a3, b2, (c2 || 0) | 0);
    };
    a2.prototype.copyFile = function(a3, b2, c2, d2) {
      a3 = m(a3);
      b2 = m(b2);
      if ("function" === typeof c2) var e2 = 0;
      else e2 = c2, c2 = d2;
      q(c2);
      this.wrapAsync(this.copyFileBase, [a3, b2, e2], c2);
    };
    a2.prototype.linkSync = function(a3, b2) {
      a3 = m(a3);
      b2 = m(b2);
      this.linkBase(a3, b2);
    };
    a2.prototype.link = function(a3, b2, c2) {
      a3 = m(a3);
      b2 = m(b2);
      this.wrapAsync(this.linkBase, [a3, b2], c2);
    };
    a2.prototype.unlinkBase = function(a3) {
      var b2 = v(a3);
      b2 = this.getLink(b2);
      if (!b2) throw h("ENOENT", "unlink", a3);
      if (b2.length) throw Error("Dir not empty...");
      this.deleteLink(b2);
      a3 = b2.getNode();
      a3.nlink--;
      0 >= a3.nlink && this.deleteNode(a3);
    };
    a2.prototype.unlinkSync = function(a3) {
      a3 = m(a3);
      this.unlinkBase(a3);
    };
    a2.prototype.unlink = function(a3, b2) {
      a3 = m(a3);
      this.wrapAsync(this.unlinkBase, [a3], b2);
    };
    a2.prototype.symlinkBase = function(a3, b2) {
      var c2 = v(b2), d2 = this.getLinkParent(c2);
      if (!d2) throw h("ENOENT", "symlink", a3, b2);
      c2 = c2[c2.length - 1];
      if (d2.getChild(c2)) throw h("EEXIST", "symlink", a3, b2);
      b2 = d2.createChild(c2);
      b2.getNode().makeSymlink(v(a3));
      return b2;
    };
    a2.prototype.symlinkSync = function(a3, b2) {
      a3 = m(a3);
      b2 = m(b2);
      this.symlinkBase(a3, b2);
    };
    a2.prototype.symlink = function(a3, b2, c2, d2) {
      c2 = q("function" === typeof c2 ? c2 : d2);
      a3 = m(a3);
      b2 = m(b2);
      this.wrapAsync(this.symlinkBase, [a3, b2], c2);
    };
    a2.prototype.realpathBase = function(a3, b2) {
      var c2 = v(a3);
      c2 = this.getResolvedLink(c2);
      if (!c2) throw h("ENOENT", "realpath", a3);
      return K.strToEncoding(c2.getPath(), b2);
    };
    a2.prototype.realpathSync = function(a3, b2) {
      return this.realpathBase(m(a3), Ed(b2).encoding);
    };
    a2.prototype.realpath = function(a3, b2, c2) {
      c2 = lf(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      a3 = m(a3);
      this.wrapAsync(
        this.realpathBase,
        [a3, b2.encoding],
        c2
      );
    };
    a2.prototype.lstatBase = function(a3, b2) {
      void 0 === b2 && (b2 = false);
      var c2 = this.getLink(v(a3));
      if (!c2) throw h("ENOENT", "lstat", a3);
      return ka.default.build(c2.getNode(), b2);
    };
    a2.prototype.lstatSync = function(a3, b2) {
      return this.lstatBase(m(a3), e(b2).bigint);
    };
    a2.prototype.lstat = function(a3, b2, c2) {
      c2 = d(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      this.wrapAsync(this.lstatBase, [m(a3), b2.bigint], c2);
    };
    a2.prototype.statBase = function(a3, b2) {
      void 0 === b2 && (b2 = false);
      var c2 = this.getResolvedLink(v(a3));
      if (!c2) throw h("ENOENT", "stat", a3);
      return ka.default.build(c2.getNode(), b2);
    };
    a2.prototype.statSync = function(a3, b2) {
      return this.statBase(m(a3), e(b2).bigint);
    };
    a2.prototype.stat = function(a3, b2, c2) {
      c2 = d(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      this.wrapAsync(this.statBase, [m(a3), b2.bigint], c2);
    };
    a2.prototype.fstatBase = function(a3, b2) {
      void 0 === b2 && (b2 = false);
      a3 = this.getFileByFd(a3);
      if (!a3) throw h("EBADF", "fstat");
      return ka.default.build(a3.node, b2);
    };
    a2.prototype.fstatSync = function(a3, b2) {
      return this.fstatBase(a3, e(b2).bigint);
    };
    a2.prototype.fstat = function(a3, b2, c2) {
      b2 = d(b2, c2);
      this.wrapAsync(this.fstatBase, [a3, b2[0].bigint], b2[1]);
    };
    a2.prototype.renameBase = function(a3, b2) {
      var c2 = this.getLink(v(a3));
      if (!c2) throw h("ENOENT", "rename", a3, b2);
      var d2 = v(b2), e2 = this.getLinkParent(d2);
      if (!e2) throw h("ENOENT", "rename", a3, b2);
      (a3 = c2.parent) && a3.deleteChild(c2);
      c2.steps = Xb(e2.steps, [d2[d2.length - 1]]);
      e2.setChild(c2.getName(), c2);
    };
    a2.prototype.renameSync = function(a3, b2) {
      a3 = m(a3);
      b2 = m(b2);
      this.renameBase(a3, b2);
    };
    a2.prototype.rename = function(a3, b2, c2) {
      a3 = m(a3);
      b2 = m(b2);
      this.wrapAsync(this.renameBase, [a3, b2], c2);
    };
    a2.prototype.existsBase = function(a3) {
      return !!this.statBase(a3);
    };
    a2.prototype.existsSync = function(a3) {
      try {
        return this.existsBase(m(a3));
      } catch (D) {
        return false;
      }
    };
    a2.prototype.exists = function(a3, b2) {
      var c2 = this, d2 = m(a3);
      if ("function" !== typeof b2) throw Error(fa.CB);
      $c.default(function() {
        try {
          b2(c2.existsBase(d2));
        } catch (va) {
          b2(false);
        }
      });
    };
    a2.prototype.accessBase = function(a3) {
      this.getLinkOrThrow(a3, "access");
    };
    a2.prototype.accessSync = function(a3, b2) {
      void 0 === b2 && (b2 = wd);
      a3 = m(a3);
      this.accessBase(a3, b2 | 0);
    };
    a2.prototype.access = function(a3, b2, c2) {
      var d2 = wd;
      "function" !== typeof b2 && (d2 = b2 | 0, b2 = q(c2));
      a3 = m(a3);
      this.wrapAsync(this.accessBase, [a3, d2], b2);
    };
    a2.prototype.appendFileSync = function(a3, b2, c2) {
      void 0 === c2 && (c2 = Cd);
      c2 = Dd(c2);
      c2.flag && a3 >>> 0 !== a3 || (c2.flag = "a");
      this.writeFileSync(a3, b2, c2);
    };
    a2.prototype.appendFile = function(a3, b2, c2, d2) {
      d2 = kf(c2, d2);
      c2 = d2[0];
      d2 = d2[1];
      c2.flag && a3 >>> 0 !== a3 || (c2.flag = "a");
      this.writeFile(a3, b2, c2, d2);
    };
    a2.prototype.readdirBase = function(a3, b2) {
      var c2 = v(a3);
      c2 = this.getResolvedLink(c2);
      if (!c2) throw h("ENOENT", "readdir", a3);
      if (!c2.getNode().isDirectory()) throw h("ENOTDIR", "scandir", a3);
      if (b2.withFileTypes) {
        var d2 = [];
        for (e2 in c2.children) (a3 = c2.getChild(e2)) && d2.push(Qc.default.build(a3, b2.encoding));
        Yb || "buffer" === b2.encoding || d2.sort(function(a4, b3) {
          return a4.name < b3.name ? -1 : a4.name > b3.name ? 1 : 0;
        });
        return d2;
      }
      var e2 = [];
      for (d2 in c2.children) e2.push(K.strToEncoding(d2, b2.encoding));
      Yb || "buffer" === b2.encoding || e2.sort();
      return e2;
    };
    a2.prototype.readdirSync = function(a3, b2) {
      b2 = Gd(b2);
      a3 = m(a3);
      return this.readdirBase(a3, b2);
    };
    a2.prototype.readdir = function(a3, b2, c2) {
      c2 = mf(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      a3 = m(a3);
      this.wrapAsync(this.readdirBase, [a3, b2], c2);
    };
    a2.prototype.readlinkBase = function(a3, b2) {
      var c2 = this.getLinkOrThrow(a3, "readlink").getNode();
      if (!c2.isSymlink()) throw h("EINVAL", "readlink", a3);
      a3 = S + c2.symlink.join(S);
      return K.strToEncoding(a3, b2);
    };
    a2.prototype.readlinkSync = function(a3, b2) {
      b2 = ob(b2);
      a3 = m(a3);
      return this.readlinkBase(a3, b2.encoding);
    };
    a2.prototype.readlink = function(a3, b2, c2) {
      c2 = yd(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      a3 = m(a3);
      this.wrapAsync(this.readlinkBase, [a3, b2.encoding], c2);
    };
    a2.prototype.fsyncBase = function(a3) {
      this.getFileByFdOrThrow(a3, "fsync");
    };
    a2.prototype.fsyncSync = function(a3) {
      this.fsyncBase(a3);
    };
    a2.prototype.fsync = function(a3, b2) {
      this.wrapAsync(this.fsyncBase, [a3], b2);
    };
    a2.prototype.fdatasyncBase = function(a3) {
      this.getFileByFdOrThrow(
        a3,
        "fdatasync"
      );
    };
    a2.prototype.fdatasyncSync = function(a3) {
      this.fdatasyncBase(a3);
    };
    a2.prototype.fdatasync = function(a3, b2) {
      this.wrapAsync(this.fdatasyncBase, [a3], b2);
    };
    a2.prototype.ftruncateBase = function(a3, b2) {
      this.getFileByFdOrThrow(a3, "ftruncate").truncate(b2);
    };
    a2.prototype.ftruncateSync = function(a3, b2) {
      this.ftruncateBase(a3, b2);
    };
    a2.prototype.ftruncate = function(a3, b2, c2) {
      var d2 = "number" === typeof b2 ? b2 : 0;
      b2 = q("number" === typeof b2 ? c2 : b2);
      this.wrapAsync(this.ftruncateBase, [a3, d2], b2);
    };
    a2.prototype.truncateBase = function(a3, b2) {
      a3 = this.openSync(
        a3,
        "r+"
      );
      try {
        this.ftruncateSync(a3, b2);
      } finally {
        this.closeSync(a3);
      }
    };
    a2.prototype.truncateSync = function(a3, b2) {
      if (a3 >>> 0 === a3) return this.ftruncateSync(a3, b2);
      this.truncateBase(a3, b2);
    };
    a2.prototype.truncate = function(a3, b2, c2) {
      var d2 = "number" === typeof b2 ? b2 : 0;
      b2 = q("number" === typeof b2 ? c2 : b2);
      if (a3 >>> 0 === a3) return this.ftruncate(a3, d2, b2);
      this.wrapAsync(this.truncateBase, [a3, d2], b2);
    };
    a2.prototype.futimesBase = function(a3, b2, c2) {
      a3 = this.getFileByFdOrThrow(a3, "futimes").node;
      a3.atime = new Date(1e3 * b2);
      a3.mtime = new Date(1e3 * c2);
    };
    a2.prototype.futimesSync = function(a3, b2, c2) {
      this.futimesBase(a3, ha(b2), ha(c2));
    };
    a2.prototype.futimes = function(a3, b2, c2, d2) {
      this.wrapAsync(this.futimesBase, [a3, ha(b2), ha(c2)], d2);
    };
    a2.prototype.utimesBase = function(a3, b2, c2) {
      a3 = this.openSync(a3, "r+");
      try {
        this.futimesBase(a3, b2, c2);
      } finally {
        this.closeSync(a3);
      }
    };
    a2.prototype.utimesSync = function(a3, b2, c2) {
      this.utimesBase(m(a3), ha(b2), ha(c2));
    };
    a2.prototype.utimes = function(a3, b2, c2, d2) {
      this.wrapAsync(this.utimesBase, [m(a3), ha(b2), ha(c2)], d2);
    };
    a2.prototype.mkdirBase = function(a3, b2) {
      var c2 = v(a3);
      if (!c2.length) throw h(
        "EISDIR",
        "mkdir",
        a3
      );
      var d2 = this.getLinkParentAsDirOrThrow(a3, "mkdir");
      c2 = c2[c2.length - 1];
      if (d2.getChild(c2)) throw h("EEXIST", "mkdir", a3);
      d2.createChild(c2, this.createNode(true, b2));
    };
    a2.prototype.mkdirpBase = function(a3, b2) {
      a3 = v(a3);
      for (var c2 = this.root, d2 = 0; d2 < a3.length; d2++) {
        var e2 = a3[d2];
        if (!c2.getNode().isDirectory()) throw h("ENOTDIR", "mkdir", c2.getPath());
        var f2 = c2.getChild(e2);
        if (f2) if (f2.getNode().isDirectory()) c2 = f2;
        else throw h("ENOTDIR", "mkdir", f2.getPath());
        else c2 = c2.createChild(e2, this.createNode(true, b2));
      }
    };
    a2.prototype.mkdirSync = function(a3, b2) {
      b2 = f(b2);
      var c2 = M(b2.mode, 511);
      a3 = m(a3);
      b2.recursive ? this.mkdirpBase(a3, c2) : this.mkdirBase(a3, c2);
    };
    a2.prototype.mkdir = function(a3, b2, c2) {
      var d2 = f(b2);
      b2 = q("function" === typeof b2 ? b2 : c2);
      c2 = M(d2.mode, 511);
      a3 = m(a3);
      d2.recursive ? this.wrapAsync(this.mkdirpBase, [a3, c2], b2) : this.wrapAsync(this.mkdirBase, [a3, c2], b2);
    };
    a2.prototype.mkdirpSync = function(a3, b2) {
      this.mkdirSync(a3, { mode: b2, recursive: true });
    };
    a2.prototype.mkdirp = function(a3, b2, c2) {
      var d2 = "function" === typeof b2 ? void 0 : b2;
      b2 = q("function" === typeof b2 ? b2 : c2);
      this.mkdir(a3, { mode: d2, recursive: true }, b2);
    };
    a2.prototype.mkdtempBase = function(a3, b2, c2) {
      void 0 === c2 && (c2 = 5);
      var d2 = a3 + this.genRndStr();
      try {
        return this.mkdirBase(d2, 511), K.strToEncoding(d2, b2);
      } catch (va) {
        if ("EEXIST" === va.code) {
          if (1 < c2) return this.mkdtempBase(a3, b2, c2 - 1);
          throw Error("Could not create temp dir.");
        }
        throw va;
      }
    };
    a2.prototype.mkdtempSync = function(a3, b2) {
      b2 = ob(b2).encoding;
      if (!a3 || "string" !== typeof a3) throw new TypeError("filename prefix is required");
      qb(a3);
      return this.mkdtempBase(a3, b2);
    };
    a2.prototype.mkdtemp = function(a3, b2, c2) {
      c2 = yd(b2, c2);
      b2 = c2[0].encoding;
      c2 = c2[1];
      if (!a3 || "string" !== typeof a3) throw new TypeError("filename prefix is required");
      qb(a3) && this.wrapAsync(this.mkdtempBase, [a3, b2], c2);
    };
    a2.prototype.rmdirBase = function(a3, b2) {
      b2 = aa({}, Fd, b2);
      var c2 = this.getLinkAsDirOrThrow(a3, "rmdir");
      if (c2.length && !b2.recursive) throw h("ENOTEMPTY", "rmdir", a3);
      this.deleteLink(c2);
    };
    a2.prototype.rmdirSync = function(a3, b2) {
      this.rmdirBase(m(a3), b2);
    };
    a2.prototype.rmdir = function(a3, b2, c2) {
      var d2 = aa({}, Fd, b2);
      b2 = q("function" === typeof b2 ? b2 : c2);
      this.wrapAsync(this.rmdirBase, [m(a3), d2], b2);
    };
    a2.prototype.fchmodBase = function(a3, b2) {
      this.getFileByFdOrThrow(a3, "fchmod").chmod(b2);
    };
    a2.prototype.fchmodSync = function(a3, b2) {
      this.fchmodBase(a3, M(b2));
    };
    a2.prototype.fchmod = function(a3, b2, c2) {
      this.wrapAsync(this.fchmodBase, [a3, M(b2)], c2);
    };
    a2.prototype.chmodBase = function(a3, b2) {
      a3 = this.openSync(a3, "r+");
      try {
        this.fchmodBase(a3, b2);
      } finally {
        this.closeSync(a3);
      }
    };
    a2.prototype.chmodSync = function(a3, b2) {
      b2 = M(b2);
      a3 = m(a3);
      this.chmodBase(a3, b2);
    };
    a2.prototype.chmod = function(a3, b2, c2) {
      b2 = M(b2);
      a3 = m(a3);
      this.wrapAsync(this.chmodBase, [a3, b2], c2);
    };
    a2.prototype.lchmodBase = function(a3, b2) {
      a3 = this.openBase(a3, na, 0, false);
      try {
        this.fchmodBase(a3, b2);
      } finally {
        this.closeSync(a3);
      }
    };
    a2.prototype.lchmodSync = function(a3, b2) {
      b2 = M(b2);
      a3 = m(a3);
      this.lchmodBase(a3, b2);
    };
    a2.prototype.lchmod = function(a3, b2, c2) {
      b2 = M(b2);
      a3 = m(a3);
      this.wrapAsync(this.lchmodBase, [a3, b2], c2);
    };
    a2.prototype.fchownBase = function(a3, b2, c2) {
      this.getFileByFdOrThrow(a3, "fchown").chown(b2, c2);
    };
    a2.prototype.fchownSync = function(a3, b2, c2) {
      Ha(b2);
      Ia(c2);
      this.fchownBase(a3, b2, c2);
    };
    a2.prototype.fchown = function(a3, b2, c2, d2) {
      Ha(b2);
      Ia(c2);
      this.wrapAsync(this.fchownBase, [a3, b2, c2], d2);
    };
    a2.prototype.chownBase = function(a3, b2, c2) {
      this.getResolvedLinkOrThrow(a3, "chown").getNode().chown(
        b2,
        c2
      );
    };
    a2.prototype.chownSync = function(a3, b2, c2) {
      Ha(b2);
      Ia(c2);
      this.chownBase(m(a3), b2, c2);
    };
    a2.prototype.chown = function(a3, b2, c2, d2) {
      Ha(b2);
      Ia(c2);
      this.wrapAsync(this.chownBase, [m(a3), b2, c2], d2);
    };
    a2.prototype.lchownBase = function(a3, b2, c2) {
      this.getLinkOrThrow(a3, "lchown").getNode().chown(b2, c2);
    };
    a2.prototype.lchownSync = function(a3, b2, c2) {
      Ha(b2);
      Ia(c2);
      this.lchownBase(m(a3), b2, c2);
    };
    a2.prototype.lchown = function(a3, b2, c2, d2) {
      Ha(b2);
      Ia(c2);
      this.wrapAsync(this.lchownBase, [m(a3), b2, c2], d2);
    };
    a2.prototype.watchFile = function(a3, b2, c2) {
      a3 = m(a3);
      var d2 = b2;
      "function" === typeof d2 && (c2 = b2, d2 = null);
      if ("function" !== typeof c2) throw Error('"watchFile()" requires a listener function');
      b2 = 5007;
      var e2 = true;
      d2 && "object" === typeof d2 && ("number" === typeof d2.interval && (b2 = d2.interval), "boolean" === typeof d2.persistent && (e2 = d2.persistent));
      d2 = this.statWatchers[a3];
      d2 || (d2 = new this.StatWatcher(), d2.start(a3, e2, b2), this.statWatchers[a3] = d2);
      d2.addListener("change", c2);
      return d2;
    };
    a2.prototype.unwatchFile = function(a3, b2) {
      a3 = m(a3);
      var c2 = this.statWatchers[a3];
      c2 && ("function" === typeof b2 ? c2.removeListener("change", b2) : c2.removeAllListeners("change"), 0 === c2.listenerCount("change") && (c2.stop(), delete this.statWatchers[a3]));
    };
    a2.prototype.createReadStream = function(a3, b2) {
      return new this.ReadStream(a3, b2);
    };
    a2.prototype.createWriteStream = function(a3, b2) {
      return new this.WriteStream(a3, b2);
    };
    a2.prototype.watch = function(a3, b2, c2) {
      a3 = m(a3);
      var d2 = b2;
      "function" === typeof b2 && (c2 = b2, d2 = null);
      var e2 = ob(d2);
      b2 = e2.persistent;
      d2 = e2.recursive;
      e2 = e2.encoding;
      void 0 === b2 && (b2 = true);
      void 0 === d2 && (d2 = false);
      var f2 = new this.FSWatcher();
      f2.start(a3, b2, d2, e2);
      c2 && f2.addListener("change", c2);
      return f2;
    };
    a2.fd = 2147483647;
    return a2;
  }();
  b.Volume = a;
  var Hd = function(a2) {
    function b2(b3) {
      var c2 = a2.call(this) || this;
      c2.onInterval = function() {
        try {
          var a3 = c2.vol.statSync(c2.filename);
          c2.hasChanged(a3) && (c2.emit("change", a3, c2.prev), c2.prev = a3);
        } finally {
          c2.loop();
        }
      };
      c2.vol = b3;
      return c2;
    }
    Ja(b2, a2);
    b2.prototype.loop = function() {
      this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
    };
    b2.prototype.hasChanged = function(a3) {
      return a3.mtimeMs > this.prev.mtimeMs || a3.nlink !== this.prev.nlink ? true : false;
    };
    b2.prototype.start = function(a3, b3, c2) {
      void 0 === b3 && (b3 = true);
      void 0 === c2 && (c2 = 5007);
      this.filename = m(a3);
      this.setTimeout = b3 ? setTimeout : hd.default;
      this.interval = c2;
      this.prev = this.vol.statSync(this.filename);
      this.loop();
    };
    b2.prototype.stop = function() {
      clearTimeout(this.timeoutRef);
      L.default.nextTick(ef, this);
    };
    return b2;
  }(O.EventEmitter);
  b.StatWatcher = Hd;
  var N;
  lc.inherits(T, Y.Readable);
  b.ReadStream = T;
  T.prototype.open = function() {
    var a2 = this;
    this._vol.open(this.path, this.flags, this.mode, function(b2, c2) {
      b2 ? (a2.autoClose && a2.destroy && a2.destroy(), a2.emit("error", b2)) : (a2.fd = c2, a2.emit("open", c2), a2.read());
    });
  };
  T.prototype._read = function(a2) {
    if ("number" !== typeof this.fd) return this.once("open", function() {
      this._read(a2);
    });
    if (!this.destroyed) {
      if (!N || 128 > N.length - N.used) N = F.bufferAllocUnsafe(this._readableState.highWaterMark), N.used = 0;
      var b2 = N, c2 = Math.min(N.length - N.used, a2), d2 = N.used;
      void 0 !== this.pos && (c2 = Math.min(this.end - this.pos + 1, c2));
      if (0 >= c2) return this.push(null);
      var e2 = this;
      this._vol.read(this.fd, N, N.used, c2, this.pos, function(a3, c3) {
        a3 ? (e2.autoClose && e2.destroy && e2.destroy(), e2.emit("error", a3)) : (a3 = null, 0 < c3 && (e2.bytesRead += c3, a3 = b2.slice(
          d2,
          d2 + c3
        )), e2.push(a3));
      });
      void 0 !== this.pos && (this.pos += c2);
      N.used += c2;
    }
  };
  T.prototype._destroy = function(a2, b2) {
    this.close(function(c2) {
      b2(a2 || c2);
    });
  };
  T.prototype.close = function(a2) {
    var b2 = this;
    if (a2) this.once("close", a2);
    if (this.closed || "number" !== typeof this.fd) {
      if ("number" !== typeof this.fd) {
        this.once("open", ff);
        return;
      }
      return L.default.nextTick(function() {
        return b2.emit("close");
      });
    }
    this.closed = true;
    this._vol.close(this.fd, function(a3) {
      a3 ? b2.emit("error", a3) : b2.emit("close");
    });
    this.fd = null;
  };
  lc.inherits(R, Y.Writable);
  b.WriteStream = R;
  R.prototype.open = function() {
    this._vol.open(this.path, this.flags, this.mode, function(a2, b2) {
      a2 ? (this.autoClose && this.destroy && this.destroy(), this.emit("error", a2)) : (this.fd = b2, this.emit("open", b2));
    }.bind(this));
  };
  R.prototype._write = function(a2, b2, c2) {
    if (!(a2 instanceof F.Buffer)) return this.emit("error", Error("Invalid data"));
    if ("number" !== typeof this.fd) return this.once("open", function() {
      this._write(a2, b2, c2);
    });
    var d2 = this;
    this._vol.write(this.fd, a2, 0, a2.length, this.pos, function(a3, b3) {
      if (a3) return d2.autoClose && d2.destroy && d2.destroy(), c2(a3);
      d2.bytesWritten += b3;
      c2();
    });
    void 0 !== this.pos && (this.pos += a2.length);
  };
  R.prototype._writev = function(a2, b2) {
    if ("number" !== typeof this.fd) return this.once("open", function() {
      this._writev(a2, b2);
    });
    for (var c2 = this, d2 = a2.length, e2 = Array(d2), f2 = 0, g2 = 0; g2 < d2; g2++) {
      var h2 = a2[g2].chunk;
      e2[g2] = h2;
      f2 += h2.length;
    }
    d2 = F.Buffer.concat(e2);
    this._vol.write(this.fd, d2, 0, d2.length, this.pos, function(a3, d3) {
      if (a3) return c2.destroy && c2.destroy(), b2(a3);
      c2.bytesWritten += d3;
      b2();
    });
    void 0 !== this.pos && (this.pos += f2);
  };
  R.prototype._destroy = T.prototype._destroy;
  R.prototype.close = T.prototype.close;
  R.prototype.destroySoon = R.prototype.end;
  var Id = function(a2) {
    function b2(b3) {
      var c2 = a2.call(this) || this;
      c2._filename = "";
      c2._filenameEncoded = "";
      c2._recursive = false;
      c2._encoding = K.ENCODING_UTF8;
      c2._onNodeChange = function() {
        c2._emit("change");
      };
      c2._onParentChild = function(a3) {
        a3.getName() === c2._getName() && c2._emit("rename");
      };
      c2._emit = function(a3) {
        c2.emit("change", a3, c2._filenameEncoded);
      };
      c2._persist = function() {
        c2._timer = setTimeout(c2._persist, 1e6);
      };
      c2._vol = b3;
      return c2;
    }
    Ja(b2, a2);
    b2.prototype._getName = function() {
      return this._steps[this._steps.length - 1];
    };
    b2.prototype.start = function(a3, b3, c2, d2) {
      void 0 === b3 && (b3 = true);
      void 0 === c2 && (c2 = false);
      void 0 === d2 && (d2 = K.ENCODING_UTF8);
      this._filename = m(a3);
      this._steps = v(this._filename);
      this._filenameEncoded = K.strToEncoding(this._filename);
      this._recursive = c2;
      this._encoding = d2;
      try {
        this._link = this._vol.getLinkOrThrow(this._filename, "FSWatcher");
      } catch (Wb) {
        throw b3 = Error("watch " + this._filename + " " + Wb.code), b3.code = Wb.code, b3.errno = Wb.code, b3;
      }
      this._link.getNode().on("change", this._onNodeChange);
      this._link.on("child:add", this._onNodeChange);
      this._link.on("child:delete", this._onNodeChange);
      if (a3 = this._link.parent) a3.setMaxListeners(a3.getMaxListeners() + 1), a3.on("child:delete", this._onParentChild);
      b3 && this._persist();
    };
    b2.prototype.close = function() {
      clearTimeout(this._timer);
      this._link.getNode().removeListener("change", this._onNodeChange);
      var a3 = this._link.parent;
      a3 && a3.removeListener("child:delete", this._onParentChild);
    };
    return b2;
  }(O.EventEmitter);
  b.FSWatcher = Id;
});
t(Xe);
var Ye = Xe.pathToFilename;
var Ze = Xe.filenameToSteps;
var $e = Xe.Volume;
var af = u(function(a, b) {
  Object.defineProperty(b, "__esModule", { value: true });
  b.fsProps = "constants F_OK R_OK W_OK X_OK Stats".split(" ");
  b.fsSyncMethods = "renameSync ftruncateSync truncateSync chownSync fchownSync lchownSync chmodSync fchmodSync lchmodSync statSync lstatSync fstatSync linkSync symlinkSync readlinkSync realpathSync unlinkSync rmdirSync mkdirSync mkdirpSync readdirSync closeSync openSync utimesSync futimesSync fsyncSync writeSync readSync readFileSync writeFileSync appendFileSync existsSync accessSync fdatasyncSync mkdtempSync copyFileSync createReadStream createWriteStream".split(" ");
  b.fsAsyncMethods = "rename ftruncate truncate chown fchown lchown chmod fchmod lchmod stat lstat fstat link symlink readlink realpath unlink rmdir mkdir mkdirp readdir close open utimes futimes fsync write read readFile writeFile appendFile exists access fdatasync mkdtemp copyFile watchFile unwatchFile watch".split(" ");
});
t(af);
var bf = u(function(a, b) {
  function c(a2) {
    for (var b2 = { F_OK: g, R_OK: h, W_OK: k, X_OK: p, constants: w.constants, Stats: ka.default, Dirent: Qc.default }, c2 = 0, d2 = e; c2 < d2.length; c2++) {
      var n = d2[c2];
      "function" === typeof a2[n] && (b2[n] = a2[n].bind(a2));
    }
    c2 = 0;
    for (d2 = f; c2 < d2.length; c2++) n = d2[c2], "function" === typeof a2[n] && (b2[n] = a2[n].bind(a2));
    b2.StatWatcher = a2.StatWatcher;
    b2.FSWatcher = a2.FSWatcher;
    b2.WriteStream = a2.WriteStream;
    b2.ReadStream = a2.ReadStream;
    b2.promises = a2.promises;
    b2._toUnixTimestamp = Xe.toUnixTimestamp;
    return b2;
  }
  var d = l && l.__assign || function() {
    d = Object.assign || function(a2) {
      for (var b2, c2 = 1, d2 = arguments.length; c2 < d2; c2++) {
        b2 = arguments[c2];
        for (var e2 in b2) Object.prototype.hasOwnProperty.call(b2, e2) && (a2[e2] = b2[e2]);
      }
      return a2;
    };
    return d.apply(this, arguments);
  };
  Object.defineProperty(b, "__esModule", { value: true });
  var e = af.fsSyncMethods, f = af.fsAsyncMethods, g = w.constants.F_OK, h = w.constants.R_OK, k = w.constants.W_OK, p = w.constants.X_OK;
  b.Volume = Xe.Volume;
  b.vol = new Xe.Volume();
  b.createFsFromVolume = c;
  b.fs = c(b.vol);
  a.exports = d(d({}, a.exports), b.fs);
  a.exports.semantic = true;
});
t(bf);
var rf = bf.createFsFromVolume;
gd.prototype.emit = function(a) {
  for (var b, c, d = [], e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
  e = this.listeners(a);
  try {
    for (var f = da(e), g = f.next(); !g.done; g = f.next()) {
      var h = g.value;
      try {
        h.apply(void 0, ia(d));
      } catch (k) {
        console.error(k);
      }
    }
  } catch (k) {
    b = { error: k };
  } finally {
    try {
      g && !g.done && (c = f.return) && c.call(f);
    } finally {
      if (b) throw b.error;
    }
  }
  return 0 < e.length;
};
var sf = function() {
  function a() {
    this.volume = new $e();
    this.fs = rf(this.volume);
    this.fromJSON({ "/dev/stdin": "", "/dev/stdout": "", "/dev/stderr": "" });
  }
  a.prototype._toJSON = function(a2, c, d) {
    void 0 === c && (c = {});
    var b = true, f;
    for (f in a2.children) {
      b = false;
      var g = a2.getChild(f);
      if (g) {
        var h = g.getNode();
        h && h.isFile() ? (g = g.getPath(), d && (g = Yc(d, g)), c[g] = h.getBuffer()) : h && h.isDirectory() && this._toJSON(g, c, d);
      }
    }
    a2 = a2.getPath();
    d && (a2 = Yc(d, a2));
    a2 && b && (c[a2] = null);
    return c;
  };
  a.prototype.toJSON = function(a2, c, d) {
    var b, f;
    void 0 === c && (c = {});
    void 0 === d && (d = false);
    var g = [];
    if (a2) {
      a2 instanceof Array || (a2 = [a2]);
      try {
        for (var h = da(a2), k = h.next(); !k.done; k = h.next()) {
          var p = Ye(k.value), n = this.volume.getResolvedLink(p);
          n && g.push(n);
        }
      } catch (xa) {
        var q = { error: xa };
      } finally {
        try {
          k && !k.done && (b = h.return) && b.call(h);
        } finally {
          if (q) throw q.error;
        }
      }
    } else g.push(this.volume.root);
    if (!g.length) return c;
    try {
      for (var B = da(g), m = B.next(); !m.done; m = B.next()) n = m.value, this._toJSON(n, c, d ? n.getPath() : "");
    } catch (xa) {
      var v = { error: xa };
    } finally {
      try {
        m && !m.done && (f = B.return) && f.call(B);
      } finally {
        if (v) throw v.error;
      }
    }
    return c;
  };
  a.prototype.fromJSONFixed = function(a2, c) {
    for (var b in c) {
      var e = c[b];
      if (e ? null !== Object.getPrototypeOf(e) : null !== e) {
        var f = Ze(b);
        1 < f.length && (f = "/" + f.slice(0, f.length - 1).join("/"), a2.mkdirpBase(f, 511));
        a2.writeFileSync(b, e || "");
      } else a2.mkdirpBase(b, 511);
    }
  };
  a.prototype.fromJSON = function(a2) {
    this.volume = new $e();
    this.fromJSONFixed(this.volume, a2);
    this.fs = rf(this.volume);
    this.volume.releasedFds = [0, 1, 2];
    a2 = this.volume.openSync("/dev/stderr", "w");
    var b = this.volume.openSync("/dev/stdout", "w"), d = this.volume.openSync(
      "/dev/stdin",
      "r"
    );
    if (2 !== a2) throw Error("invalid handle for stderr: " + a2);
    if (1 !== b) throw Error("invalid handle for stdout: " + b);
    if (0 !== d) throw Error("invalid handle for stdin: " + d);
  };
  a.prototype.getStdOut = function() {
    return ba(this, void 0, void 0, function() {
      var a2, c = this;
      return ca(this, function() {
        a2 = new Promise(function(a3) {
          a3(c.fs.readFileSync("/dev/stdout", "utf8"));
        });
        return [2, a2];
      });
    });
  };
  return a;
}();
var index_esm_default = sf;
export {
  sf as WasmFs,
  index_esm_default as default
};
