# Text
Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.

## Text alignment

Easily realign text to components with text alignment classes.

:::demo
<p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
:::

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

:::demo
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
:::

## Text wrapping and overflow

Wrap text with a `.text-wrap` class.

:::demo
<div class="badge badge-primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>
:::

Prevent text from wrapping with a `.text-nowrap` class.

:::demo
<div class="text-nowrap bd-highlight" style="width: 8rem;">
  This text should overflow the parent.
</div>
:::

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.**

:::demo
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>
:::

## Word break

Prevent long strings of text from breaking your components' layout by using `.text-break` to set `word-wrap: break-word`.

:::demo
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
:::

## Text transform

Transform text in components with text capitalization classes.

:::demo
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
:::

Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Font weight and italics

Quickly change the weight (boldness) of text or italicize text.

:::demo
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-bolder">Bolder weight text (relative to the parent element).</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-light">Light weight text.</p>
<p class="font-weight-lighter">Lighter weight text (relative to the parent element).</p>
<p class="font-italic">Italic text.</p>
:::

## Monospace

Change a selection to our monospace font stack with `.text-monospace`.

:::demo
<p class="text-monospace">This is in monospace</p>
:::

## Reset color

Reset a text or link's color with `.text-reset`, so that it inherits the color from its parent.

:::demo
<p class="text-muted">
  Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
:::

## Text decoration

Remove a text decoration with a `.text-decoration-none` class.

:::demo
<a href="#" class="text-decoration-none">Non-underlined link</a>
:::