# iconfont-enum

Step1: Download

```sh
git clone git@github.com:JPJeePee/iconfont-enum.git
```

Step2: Install

```sh
npm install
```

Step3: Config

```json
{
  // your iconfont-repo address
  "symbol_url": "//at.alicdn.com/t/font_1373348_ghk94ooopqr.js",
  // the directory where to put your output
  "save_dir": "./",
  // exclude this array from your iconfont enum
  "excludes": []
}
```

Step4: Run

```sh
npm run generate
```
