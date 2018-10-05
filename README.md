# preact-example

`git clone https://github.com/ArakiTakaki/preact-example`

`npm install`

`npm run start`

## commands

コマンド|効果
:---|:---
`npm run mock` | プレビューを3000番portで開始する。
`npm run dev` | 開発環境（サーバー有）で起動する。
`npm run prod` | ファイルのBuildを行う

## 各種[babel-plugin]解説

### react-css-modules

[Github](https://github.com/gajus/babel-plugin-react-css-modules)

```jsx
import React from 'react';
import styles from './table.css';

export default class Table extends React.Component {
  render () {
    return <div className={styles.table}>
      <div className={styles.row}>
        <div className={styles.cell}>A0</div>
        <div className={styles.cell}>B0</div>
      </div>
    </div>;
  }
}
```

このような形でCSSを提供するモジュール[AtomicDesignに則している]形に作成できる。

### decorators-legacy

[Github](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

よくある@つけるとクラスのwrapを省略？できるやつ

### transform-class-properties

[Github](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)

クラスの環境変数などが使用できる。

### transform-runtime

[Github](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime)

よくある昔のブラウザでも動くようになるやつ