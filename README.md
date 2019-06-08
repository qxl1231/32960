# @36node/protocol-32960

[![version][0]][1] [![downloads][2]][3]

电动汽车 32960 协议服务端

## Install

```bash
yarn add @36node/protocol-32960
```

## Usage

```js
import Protocol from "@36node/protocol-32960";

// buffer: origin data
const protocol = new Protocol({
  encrypt: { key: "xx", iv: "xxx", method: "AES128" },
});
const data = protocol.parse(buffer);
const buf = protocol.build(data);
```

### cli

使用方法，可以全局安装或者用 npx 免安装执行

```sh
npx @36node/protocol-32960 parse -h

# Usage: parse [options]
# Parse binary message data

# Options:
#  -d, --data <data>        Binary hex data of message
#  -h, --help               output usage information

# example:

npx @36node/protocol-32960 parse -d  232303fe4c53464430333230324a4330303136323701006b13020200210c81010002ff0300000423f5010002ff0300000423f3010002ff0300000423f3010002ff0300000423f3010002ff0300000423f3010002ff0300000423f6010002ff0300000423f5010002ff0300000423f5010002ff0300000423f3010002ff0300000423f30e

# 如果需要将结果拷贝到内存，可以通过管道
npx @36node/protocol-32960 parse -d xxxxxxxxxxxxxxx | pbcopy
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**module** © [36node](https://github.com/36node), Released under the [MIT](./LICENSE) License.

Authored and maintained by 36node with help from contributors ([list](https://github.com/36node/module/contributors)).

> [github.com/zzswang](https://github.com/zzswang) · GitHub [@36node](https://github.com/36node)

[0]: https://img.shields.io/npm/v/@36node/protocol-32960.svg?style=flat
[1]: https://npmjs.com/package/@36node/protocol-32960
[2]: https://img.shields.io/npm/dm/@36node/protocol-32960.svg?style=flat
[3]: https://npmjs.com/package/@36node/protocol-32960
