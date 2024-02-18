# Html Table Creator

フォームに入力することで誰でも簡単に HTML の\<table>タグを作成できる Web アプリです。

[https://html-table-creator.netlify.app](https://html-table-creator.netlify.app)
![img](https://user-images.githubusercontent.com/45157831/97384233-a3043600-1912-11eb-9af4-e3fc118b960b.png)

## 設計思想

- PresentationalComponent / ContainerComponent を切り分け、DOM 層とステートやデータを注入する層を分離
- custom Hooks と utils 周りはテストにより、コードが正常に動くことを担保
- 一元的にファイルを管理し、CSS の記述方法が SCSS と同様なである styled component を採用

## Design

- Neumorphism

## Libraries

- TypeScript
- React Hooks
- emotion (styled component)
- common-tags
- webpack
- babel

## Others

- ESlint
- Prettier
- jest
- react-testing-library

## CI/CD

- GitHub Actions

## Hosting

- Netlify

## Reference

- [経年劣化に耐える ReactComponent の書き方](https://qiita.com/Takepepe/items/41e3e7a2f612d7eb094a)
