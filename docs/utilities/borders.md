# Borders

## Border

Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.

### Additive

<div class="border-demo-additive">
  <span class="border"></span>
  <span class="border-top"></span>
  <span class="border-right"></span>
  <span class="border-bottom"></span>
  <span class="border-left"></span>
</div>

```html
<span class="border"></span>
<span class="border-top"></span>
<span class="border-right"></span>
<span class="border-bottom"></span>
<span class="border-left"></span>
```

### Subtractive

<div class="border-demo-subtractive">
  <span class="border-0"></span>
  <span class="border-top-0"></span>
  <span class="border-right-0"></span>
  <span class="border-bottom-0"></span>
  <span class="border-left-0"></span>
</div>

```html
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-right-0"></span>
<span class="border-bottom-0"></span>
<span class="border-left-0"></span>
```

## Border color

Change the border color using utilities built on our theme colors.

<div class="border-demo-colors">
<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>
<span class="border border-warning"></span>
<span class="border border-info"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-white"></span>
</div>

```html
<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>
<span class="border border-warning"></span>
<span class="border border-info"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-white"></span>
```


## Border-radius

Add classes to an element to easily round its corners.

<div class="border-demo-images">
  <img src="https://picsum.photos/75/75" class="rounded" alt="rounded">
  <img src="https://picsum.photos/75/75" class="rounded-top" alt="rounded-top">
  <img src="https://picsum.photos/75/75" class="rounded-right" alt="rounded-right">
  <img src="https://picsum.photos/75/75" class="rounded-bottom" alt="rounded-bottom">
  <img src="https://picsum.photos/75/75" class="rounded-left" alt="rounded-left">
  <img src="https://picsum.photos/75/75" class="rounded-circle" alt="rounded-circle">
  <img src="https://picsum.photos/150/75" class="rounded-pill" alt="rounded-pill">
  <img src="https://picsum.photos/75/75" class="rounded-0" alt="Example non-rounded image (overrides rounding applied elsewhere)">
</div>

```html
<img src="https://picsum.photos/75/75" class="rounded" alt="rounded">
<img src="https://picsum.photos/75/75" class="rounded-top" alt="rounded-top">
<img src="https://picsum.photos/75/75" class="rounded-right" alt="rounded-right">
<img src="https://picsum.photos/75/75" class="rounded-bottom" alt="rounded-bottom">
<img src="https://picsum.photos/75/75" class="rounded-left" alt="rounded-left">
<img src="https://picsum.photos/75/75" class="rounded-circle" alt="rounded-circle">
<img src="https://picsum.photos/150/75" class="rounded-pill" alt="rounded-pill">
<img src="https://picsum.photos/75/75" class="rounded-0" alt="Example non-rounded image (overrides rounding applied elsewhere)">
```

## Sizes

Use `.rounded-lg` or `.rounded-sm` for larger or smaller border-radius.


<div class="bd-example bd-example-images">
  <img src="https://picsum.photos/150/150" class="rounded-sm" alt="rounded-sm">
  <img src="https://picsum.photos/150/150" class="rounded-lg" alt="rounded-lg">
</div>

```html
<img src="..." alt="..." class="rounded-sm">
<img src="..." alt="..." class="rounded-lg">
```

<script>
export default {
  data(){
    return {
      colors:[]
    }
  }
}
</script>
<style>
  .border-demo-additive [class^=border]{
    display: inline-block;
    width: 5rem;
    height: 5rem;
    margin: .25rem;
    background-color: #f5f5f5;
    border-color:#bdc9d6;
  }
  .border-demo-subtractive span{
        display: inline-block;
    width: 5rem;
    height: 5rem;
    margin: .25rem;
    background-color: #f5f5f5;
    border:1px solid #bdc9d6;
  }
  .border-demo-colors span{
    display: inline-block;
    width: 5rem;
    height: 5rem;
    margin: .25rem;
    background-color: #f5f5f5;
  }
</style>