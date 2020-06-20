---
title: Grid
---

# Grid system

<p class="display-4">Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.</p>

# How it works

Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

::: tip
New to or unfamiliar with flexbox? [Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.
:::

::: demo
<row>
	<column bp="sm">One of three columns</column>
	<column bp="sm">One of three columns</column>
	<column bp="sm">One of three columns</column>
</row>
:::

The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <span class="text-info">.container</span>.

Breaking it down, here’s how it works:

* Containers provide a means to center and horizontally pad your site’s contents. Use .container for a responsive pixel width or .container-fluid for width: 100% across all viewport and device sizes.
* Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
* In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
* Thanks to flexbox, grid columns without a specified width will automatically layout as equal width columns. For example, four instances of .col-sm will each automatically be 25% wide from the small breakpoint and up. See the auto-layout columns section for more examples.
Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use .col-4.
* Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.
* Columns have horizontal padding to create the gutters between individual columns, however, you can remove the margin from rows and padding from columns with .no-gutters on the .row.
* To make the grid responsive, there are five grid breakpoints, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.
* Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., .col-sm-4 applies to small, medium, large, and extra large devices, but not the first xs breakpoint).
* You can use predefined grid classes (like .col-4) or Sass mixins for more semantic markup.
Be aware of the limitations and bugs around flexbox, like the inability to use some HTML elements as flex containers.

## Grid options
While Bootstrap uses ems or rems for defining most sizes, pxs are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size.

See how aspects of the Bootstrap grid system work across multiple devices with a handy table.

|&nbsp;|Extra small|Small|Medium|Large|Extra large
|---|-----------|-----|------|-----|--------------
|&nbsp;|<576px|≥576px|≥768px|≥992px|≥1200px
|**Max container width**|None (auto)|540px|720px|960px|1140px
|**Class prefix**|.col-|.col-sm-|.col-md-|.col-lg-|.col-xl-
|**# of columns**|12|
|**Gutter width**|30px (15px on each side of a column)
|**Nestable**|Yes|Yes|Yes|Yes|Yes
|**Column ordering**|Yes|Yes|Yes|Yes|Yes

# Auto-layout columns
Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like .col-sm-6.

## Equal-width
For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.

:::demo
<row>
	<column>1 of 2</column>
	<column>2 of 2</column>
</row>
<br>
<row>
	<column>1 of 3</column>
	<column>2 of 3</column>
	<column>3 of 3</column>
</row>
:::

## Equal-width multi-line
Create equal-width columns that span multiple lines by inserting a .w-100 where you want the columns to break to a new line. Make the breaks responsive by mixing .w-100 with some responsive display utilities.

There was a Safari flexbox bug that prevented this from working without an explicit flex-basis or border. There are workarounds for older browser versions, but they shouldn’t be necessary if your target browsers don’t fall into the buggy versions.

:::demo
<row>
	<column>col</column>
	<column>col</column>
	<div class="w-100"></div>
	<column>col</column>
	<column>col</column>
</row>
:::

## Setting one column width
Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.

:::demo
<row>
	<column>1 of 3</column>
	<column :sizes="6">2 of 3</column>
	<column>3 of 3</column>
</row>
<br>
<row>
	<column>1 of 3</column>
	<column>2 of 3</column>
	<column>3 of 3</column>
</row>
:::

## Variable width content
Use <span class="text-info">.col-{breakpoint}-auto</span> classes to size columns based on the natural width of their content.
:::demo
<row class="justify-content-md-center">
	<column :sizes="{lg:'2'}">1 of 3</column>
	<column :sizes="{md:'auto'}">Variable width content</column>
	<column :sizes="{lg:'2'}">3 of 3</column>
</row>
<br>
<row>
	<column>1 of 3</column>
	<column :sizes="{md:'auto'}">Variable width content</column>
	<column :sizes="{lg:'2'}">3 of 3</column>
</row>
:::

## Responsive classes
Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

## All breakpoints
For grids that are the same from the smallest of devices to the largest, use the .col and .col-* classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to .col.

:::demo
<row>
	<column>column</column>
	<column>column</column>
	<column>column</column>
	<column>column</column>
</row>
<row>
	<column :sizes="8">:sizes="8"</column>
	<column :sizes="4">:sizes="4"</column>
</row>
:::

## Stacked to horizontal
Using a single set of .col-sm-* classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (sm).

:::demo
<row>
	<column :sizes="{sm:8}">{sm:8}</column>
	<column :sizes="{sm:4}">{sm:4}</column>
</row>
<row>
	<column sizes="sm">sm</column>
	<column sizes="sm">sm</column>
</row>
:::

## Mix and match
Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.

:::demo
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <row>
		<column :sizes="{md:8}">{md:8}</column>
		<column :sizes="[6,{md:4}]">[6,{md:4}]</column>
  </row>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <row>
    <column :sizes="[6,{md:4}]">[6,{md:4}]</column>
    <column :sizes="[6,{md:4}]">[6,{md:4}]</column>
    <column :sizes="[6,{md:4}]">[6,{md:4}]</column>
  </row>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <row>
    <column :sizes="6">6</column>
    <column :sizes="6">6</column>
  </row>
:::

## Gutters

Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a negative margin utility on the .row and matching padding utilities on the .cols. The .container or .container-fluid parent may need to be adjusted too to avoid unwanted overflow, using again matching padding utility.

Here’s an example of customizing the Bootstrap grid at the large (lg) breakpoint and above. We’ve increased the .col padding with .px-lg-5, counteracted that with .mx-lg-n5 on the parent .row and then adjusted the .container wrapper with .px-lg-5.


:::demo
<div class="container px-lg-5">
  <row class="mx-lg-n5">
		<column class="py-3 px-lg-5 border bg-light">Custom column padding</column>
		<column class="py-3 px-lg-5 border bg-light">Custom column padding</column>
  </row>
</div>
:::


## Row columns
Use the responsive .row-cols-* classes to quickly set the number of columns that best render your content and layout. Whereas normal .col-* classes apply to the individual columns (e.g., .col-md-4), the row columns classes are set on the parent .row as a shortcut.

Use these row columns classes to quickly create basic grid layouts or to control your card layouts.

:::demo
  <row :sizes="2">
    <column>Column</column>
    <column>Column</column>
    <column>Column</column>
    <column>Column</column>
  </row>
:::
:::demo
  <row :sizes="3">
    <column>Column</column>
    <column>Column</column>
    <column>Column</column>
    <column>Column</column>
  </row>
:::
:::demo
  <row :sizes="4">
    <column>Column</column>
    <column>Column</column>
    <column>Column</column>
    <column>Column</column>
  </row>
:::
:::demo
  <row :sizes="4">
    <column>Column</column>
    <column>Column</column>
    <column :sizes="6">Column</column>
    <column>Column</column>
  </row>
:::
:::demo
  <row :sizes="[1,{sm:2,md:4}]">
    <column>Column</column>
    <column>Column</column>
    <column>Column</column>
    <column>Column</column>
  </row>
:::

You can also use the accompanying Sass mixin, row-cols():

``` scss
.element {
  // Three columns to start
  @include row-cols(3);

  // Five columns from medium breakpoint up
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}
```


## Alignment
Use flexbox alignment utilities to vertically and horizontally align columns. **Internet Explorer 10-11 do not support vertical alignment of flex items when the flex container has** a min-height **as shown below**. See Flexbugs #3 for more details.

## Vertical alignment
:::demo
  <div class="va-demo">
  	<row class="align-items-start">
	    <column>Column</column>
	    <column>Column</column>
	    <column>Column</column>
	  </row>
	  <row class="align-items-center">
	    <column>Column</column>
	    <column>Column</column>
	    <column>Column</column>
	  </row>
	  <row class="align-items-end">
	    <column>Column</column>
	    <column>Column</column>
	    <column>Column</column>
	  </row>
  </div>
:::

:::demo
  <div class="va-demo">
  	<row>
	    <column class="align-self-start">Column</column>
	    <column class="align-self-center">Column</column>
	    <column class="align-self-end">Column</column>
	  </row>
  </div>
:::

## Horizontal alignment

:::demo
<row class="justify-content-start">
	<column :sizes="4">justify-content-start</column>
	<column :sizes="4">justify-content-start</column>
</row>
<row class="justify-content-center">
	<column :sizes="4">justify-content-center</column>
	<column :sizes="4">justify-content-center</column>
</row>
<row class="justify-content-end">
	<column :sizes="4">justify-content-end</column>
	<column :sizes="4">justify-content-end</column>
</row>
<row class="justify-content-around">
	<column :sizes="4">justify-content-around</column>
	<column :sizes="4">justify-content-around</column>
</row>
<row class="justify-content-between">
	<column :sizes="4">justify-content-between</column>
	<column :sizes="4">justify-content-between</column>
</row>	
:::

## No gutters
The gutters between columns in our predefined grid classes can be removed with .no-gutters. This removes the negative margins from .row and the horizontal padding from all immediate children columns.

Here’s the source code for creating these styles. Note that column overrides are scoped to only the first children columns and are targeted via attribute selector. While this generates a more specific selector, column padding can still be further customized with spacing utilities.

```css
.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
```

In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

:::demo
<row class="no-gutters">
	<column :sizes="{sm:6,md:8}">no-gutters</column>
	<column :sizes="[6,{md:4}]">no-gutters</column>
</row>
:::

## Column wrapping
If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

:::demo
<row>
	<column :sizes="9">.col-9</column>
	<column :sizes="4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</column>
	<column :sizes="6">.col-6<br>Subsequent columns continue along the new line.</column>
</row>
:::

## Column breaks
Breaking columns to a new line in flexbox requires a small hack: add an element with width: 100% wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple .rows, but not every implementation method can account for this.

:::demo
<row>
	<column :sizes="[6,{md:3}]">[6,{md:3}]</column>
	<column :sizes="[6,{md:3}]">[6,{md:3}]</column>
	<div class="w-100"></div>
	<column :sizes="[6,{md:3}]">[6,{md:3}]</column>
	<column :sizes="[6,{md:3}]">[6,{md:3}]</column>
</row>
:::

You may also apply this break at specific breakpoints with the responsive display utilities.

:::demo
<row>
	<column :sizes="[6,{sm:4}]">[6,{sm:4}]</column>
	<column :sizes="[6,{sm:4}]">[6,{sm:4}]</column>
	<!-- Force next columns to break to new line at md breakpoint and up -->
	<div class="w-100 d-none d-md-block"></div>
	<column :sizes="[6,{sm:4}]">[6,{sm:4}]</column>
	<column :sizes="[6,{sm:4}]">[6,{sm:4}]</column>
</row>
:::

## Reordering
### Order classes
Use .order- classes for controlling the visual order of your content. These classes are responsive, so you can set the order by breakpoint (e.g., .order-1.order-md-2). Includes support for 1 through 12 across all five grid tiers.

:::demo
<row>
	<column>First in DOM, no order applied</column>
	<column order="12">Second in DOM, with a larger order</column>
	<column order="1">Third in DOM, with an order of 1</column>
</row>
:::

## Offsetting columns
You can offset grid columns in two ways: our responsive .offset- grid classes and our margin utilities. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

### Offset classes
Move columns to the right using .offset-md-* classes. These classes increase the left margin of a column by * columns. For example, .offset-md-4 moves .col-md-4 over four columns.

:::demo
<row>
	<column :sizes="{md:4}">:sizes="{md:4}"</column>
	<column :sizes="{md:4}" :offset="{md:4}">:sizes="{md:4}" :offset="{md:4}"</column>
</row>
<row>
	<column :sizes="{md:3}" :offset="{md:3}">:sizes="{md:3}" :offset="{md:3}"</column>
	<column :sizes="{md:3}" :offset="{md:3}">:sizes="{md:3}" :offset="{md:3}"</column>
</row>
<row>
	<column :sizes="{md:6}" :offset="{md:3}">:sizes="{md:6}" :offset="{md:3}"</column>
</row>
:::

In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in the grid example.

:::demo
<row>
	<column :sizes="{sm:5,md:6}">:sizes="{sm:5,md:6}"</column>
	<column :sizes="{sm:5,md:6}" :offset="{sm:2,md:0}">:sizes="{sm:5,md:6}" :offset="{sm:2,md:0}"</column>
</row>
<row>
	<column :sizes="{sm:6,md:5,lg:6}">:sizes="{sm:6,md:5,lg:6}"</column>
	<column :sizes="{sm:6,md:5,lg:6}" :offset="{md:2,lg:0}">:sizes="{sm:6,md:5,lg:6}" :offset="{md:2,lg:0}"</column>
</row>
:::

## Margin utilities
With the move to flexbox in v4, you can use margin utilities like .mr-auto to force sibling columns away from one another.

:::demo
<row>
	<column :sizes="{md:4}">:sizes="{md:4}"</column>
	<column :sizes="{md:4}" class="ml-auto">:sizes="{md:4}" .ml-auto</column>
</row>
<row>
	<column :sizes="{md:3}" class="ml-md-auto">:sizes="{md:3}" .ml-md-auto</column>
	<column :sizes="{md:3}" class="ml-md-auto">:sizes="{md:3}" .ml-md-auto</column>
</row>
<row>
	<column auto class="mr-auto">auto .mr-auto</column>
	<column auto>auto</column>
</row>
:::

## Nesting
To nest your content with the default grid, add a new .row and set of .col-sm-* columns within an existing .col-sm-* column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

::: demo
<row>
	<column :sizes="{sm:9}">
		Level 1: {sm:9}
		<row>
			<column :sizes="[8,{sm:6}]">
				Level 2: [8,{sm:6}]
			</column>
			<column :sizes="[4,{sm:6}]">
				Level 2: [4,{sm:6}]
			</column>
		</row>
	</column>
</row>
:::

## Sass mixins
When using Bootstrap’s source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

### Variables
Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

``` scss
$grid-columns:      12;
$grid-gutter-width: 30px;

$grid-breakpoints: (
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: 576px,
  // Medium screen / tablet
  md: 768px,
  // Large screen / desktop
  lg: 992px,
  // Extra large screen / wide desktop
  xl: 1200px
);

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px
);
```

### Mixins
Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

```scss
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();
@include make-col($size, $columns: $grid-columns);

// Get fancy by offsetting, or changing the sort order
@include make-col-offset($size, $columns: $grid-columns);
```

### Example usage
You can modify the variables to your own custom values, or just use the mixins with their default values. Here’s an example of using the default settings to create a two-column layout with a gap between.

```scss
.example-container {
  @include make-container();
  // Make sure to define this width after the mixin to override
  // `width: 100%` generated by `make-container()`
  width: 800px;
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
```
### Customizing the grid
Using our built-in grid Sass variables and maps, it’s possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths—then recompile.
#### Columns and gutters
The number of grid columns can be modified via Sass variables. $grid-columns is used to generate the widths (in percent) of each individual column while $grid-gutter-width sets the width for the column gutters.
```scss
$grid-columns: 12 !default;
$grid-gutter-width: 30px !default;
```
#### Grid tiers
Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the $grid-breakpoints and $container-max-widths to something like this:
```scss
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);

```

When making any changes to the Sass variables or maps, you’ll need to save your changes and recompile. Doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in px (not rem, em, or %).

<style>
.demo-and-code-wrapper {
	margin-top:1rem;
	padding:1rem;
}
.code-wrapper{
	margin:0 -1rem 0 -1rem;
}
.row{
}
.row>.col,.row>.col-auto, .row>[class^=col-] {
    padding-top: .75rem;
    padding-bottom: .75rem;
    background-color: rgba(86,61,124,.15);
    border: 1px solid rgba(86,61,124,.2);
}
.va-demo .row{
	min-height:160px;
	border:thin solid #666;
	background:var(--light);
	margin-bottom:1rem;
}
</style>