---
title: APIs with NextJS
date: 2021-02-28
desc: how to get data with nextjs from various db
tag: tech
duration: 2min
---

```js
export async function getStaticProps(context) {
  return {
    props: {}
  };
}
```

then we add try catch

```js
export async function getStaticProps(context) {
  try {
    const res = await fetch('');
    const data = await res.json();
  } catch (err) {
    console.error(err);
  }
  return {
    props: {}
  };
}
```
