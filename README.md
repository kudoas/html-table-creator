# Html Table Creator

![test](https://github.com/Kudoas/html-table-creator/workflows/test/badge.svg)[![Netlify Status](https://api.netlify.com/api/v1/badges/14c0f975-ca53-498c-af9a-d6fd8648dad5/deploy-status)](https://app.netlify.com/sites/html-table-creator/deploys)

フォームに入力することで誰でも簡単にHTMLの\<table>タグを作成できるWebアプリです。

[https://html-table-creator.netlify.app](https://html-table-creator.netlify.app)
![img](https://user-images.githubusercontent.com/45157831/97384233-a3043600-1912-11eb-9af4-e3fc118b960b.png)

## 設計思想

- PresentationalComponent / ContainerComponentを切り分け、DOM層とステートやデータを注入する層を分離
- custom Hooksとutils周りはテストにより、コードが正常に動くことを担保
- 一元的にファイルを管理し、CSSの記述方法がSCSSと同様なであるstyled componentを採用

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
