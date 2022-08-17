# Button

<ButtonDemo/>

## 基础用法

通过控制 color 属性的值设置不同颜色的按钮

<div style="margin-bottom: 20px">
  <ACButton color="blue">主要按钮</ACButton>
  <ACButton color="green">绿色按钮</ACButton>
  <ACButton color="gray">灰色按钮</ACButton>
  <ACButton color="yellow">黄色按钮</ACButton>
  <ACButton color="red">红色按钮</ACButton>
</div>

::: details 展示代码

```vue
<template>
  <div style="margin-bottom: 20px">
    <ACButton color="blue">主要按钮</ACButton>
    <ACButton color="green">绿色按钮</ACButton>
    <ACButton color="gray">灰色按钮</ACButton>
    <ACButton color="yellow">黄色按钮</ACButton>
    <ACButton color="red">红色按钮</ACButton>
  </div>
</template>
```

:::

## 镂空按钮

通过设置 plain 属性来控制

<div style="margin-bottom: 20px">
  <ACButton color="blue" plain>朴素按钮</ACButton>
  <ACButton color="green" plain>绿色按钮</ACButton>
  <ACButton color="gray" plain>灰色按钮</ACButton>
  <ACButton color="yellow" plain>黄色按钮</ACButton>
  <ACButton color="red" plain>红色按钮</ACButton>
</div>

::: details 展示代码

```vue
<template>
  <div style="margin-bottom: 20px">
    <ACButton color="blue" plain>朴素按钮</ACButton>
    <ACButton color="green" plain>绿色按钮</ACButton>
    <ACButton color="gray" plain>灰色按钮</ACButton>
    <ACButton color="yellow" plain>黄色按钮</ACButton>
    <ACButton color="red" plain>红色按钮</ACButton>
  </div>
  <div style="margin-bottom: 20px">
    <ACButton size="small" plain>小按钮</ACButton>
    <ACButton size="medium" plain>中按钮</ACButton>
    <ACButton size="large" plain>大按钮</ACButton>
  </div>
</template>
```

:::

## 按钮大小

通过 size 属性控制

<div style="margin-bottom: 20px">
    <ACButton size="small" plain>小按钮</ACButton>
    <ACButton size="medium" plain>中按钮</ACButton>
    <ACButton size="large" plain>大按钮</ACButton>
  </div>

::: details 展示代码

```vue
<template>
  <div style="margin-bottom: 20px">
    <ACButton size="small" plain>小按钮</ACButton>
    <ACButton size="medium" plain>中按钮</ACButton>
    <ACButton size="large" plain>大按钮</ACButton>
  </div>
</template>
```

:::

## 圆角

控制 round 设置按钮的圆角

<div style="margin-bottom: 20px">
  <ACButton color="blue" round plain icon="search">搜索按钮</ACButton>
  <ACButton color="green" round plain icon="edit">编辑按钮</ACButton>
  <ACButton color="gray" round plain icon="check">成功按钮</ACButton>
  <ACButton color="yellow" round plain icon="message">提示按钮</ACButton>
  <ACButton color="red" round plain icon="delete">删除按钮</ACButton>
</div>

::: details 展示代码

```vue
<template>
  <div style="margin-bottom: 20px">
    <ACButton color="blue" round plain icon="search">搜索按钮</ACButton>
    <ACButton color="green" round plain icon="edit">编辑按钮</ACButton>
    <ACButton color="gray" round plain icon="check">成功按钮</ACButton>
    <ACButton color="yellow" round plain icon="message">提示按钮</ACButton>
    <ACButton color="red" round plain icon="delete">删除按钮</ACButton>
  </div>
  <div style="margin-bottom: 20px">
    <ACButton color="blue" round plain icon="search"></ACButton>
    <ACButton color="green" round plain icon="edit"></ACButton>
    <ACButton color="gray" round plain icon="check"></ACButton>
    <ACButton color="yellow" round plain icon="message"></ACButton>
    <ACButton color="red" round plain icon="delete"></ACButton>
  </div>
</template>
```

:::

## 图标按钮

通过配置 icon 的名称，来展示不同的图标

<div style="margin-bottom: 20px">
  <ACButton color="blue" round plain icon="search">搜索按钮</ACButton>
  <ACButton color="green" round plain icon="edit">编辑按钮</ACButton>
  <ACButton color="gray" round plain icon="check">成功按钮</ACButton>
  <ACButton color="yellow" round plain icon="message">提示按钮</ACButton>
  <ACButton color="red" round plain icon="delete">删除按钮</ACButton>
</div>
<div style="margin-bottom: 20px">
  <ACButton color="blue" round plain icon="search"></ACButton>
  <ACButton color="green" round plain icon="edit"></ACButton>
  <ACButton color="gray" round plain icon="check"></ACButton>
  <ACButton color="yellow" round plain icon="message"></ACButton>
  <ACButton color="red" round plain icon="delete"></ACButton>
</div>

::: details 显示代码

```vue
<template>
  <div style="margin-bottom: 20px">
    <ACButton color="blue" round plain icon="search">搜索按钮</ACButton>
    <ACButton color="green" round plain icon="edit">编辑按钮</ACButton>
    <ACButton color="gray" round plain icon="check">成功按钮</ACButton>
    <ACButton color="yellow" round plain icon="message">提示按钮</ACButton>
    <ACButton color="red" round plain icon="delete">删除按钮</ACButton>
  </div>
  <div style="margin-bottom: 20px">
    <ACButton color="blue" round plain icon="search"></ACButton>
    <ACButton color="green" round plain icon="edit"></ACButton>
    <ACButton color="gray" round plain icon="check"></ACButton>
    <ACButton color="yellow" round plain icon="message"></ACButton>
    <ACButton color="red" round plain icon="delete"></ACButton>
  </div>
</template>
```

:::
