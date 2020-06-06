
# Modal Guide

## basic setup
<pre class="text-white">{{guide}}</pre>

::: demo
<div>
  <btn @click.native="showModalGuide">Click to toggle modal guide</btn>
  <modal-guide :guide="guide" :show="show" :index="index" @next-step="nextStep" @close="close">
    <div slot="step1">
      Test
    </div>
  </modal-guide>
</div>
:::

<row>
  <column>
    <card class="mb-2" id="card-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias soluta reiciendis dolorem, corrupti sunt consequuntur maxime, neque earum, beatae a impedit natus rerum saepe? Dolorum cumque praesentium, reprehenderit animi.</card>
    <card class="mb-2">At quos, maxime non ipsam minus est laboriosam. Facere, officia nihil assumenda dolor voluptatibus, labore dolores sequi fugit ea maxime laborum, tenetur in laudantium ipsum quisquam sed! Debitis, temporibus, sed.</card>
    <card class="mb-2">Deleniti vero quis eveniet hic placeat dolor, dicta, in, tempora similique rem ipsa recusandae ullam est ab! Harum explicabo amet laborum officia magni delectus, in exercitationem perspiciatis quia omnis impedit.</card>
  </column>
  <column>
    <card class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi sapiente repudiandae deleniti repellendus, enim omnis quasi perspiciatis explicabo! Facere, delectus officiis ad harum quidem fuga reiciendis error eveniet repellat, eligendi?</card>
    <card class="mb-2" id="card-5">Impedit atque ipsum, officiis pariatur aspernatur dignissimos dolorem, hic porro eveniet nam illo, amet labore. Sint, eum, dolorum officiis dignissimos beatae unde doloremque quia libero expedita quas sit porro voluptate?</card>
    <card class="mb-2">Accusantium dignissimos fuga, ducimus, unde corporis dolores atque labore optio adipisci id omnis commodi magni. Eaque dolores repellat repellendus recusandae, ad ipsam officia, sint libero, atque dignissimos natus impedit dolor.</card>
  </column>
  <column>
    <card class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ab laborum temporibus quos debitis quae nemo hic, explicabo esse aut iste totam, obcaecati dignissimos libero necessitatibus molestiae veritatis facilis. Consectetur!</card>
    <card class="mb-2">Quis incidunt cumque veritatis dolore. Ab provident aspernatur quisquam nobis labore dicta autem a. Non inventore incidunt natus. Nobis aut eligendi sequi repellendus quibusdam ipsam, praesentium. Accusantium fugiat sint, consequatur?</card>
    <card class="mb-2" id="card-9">Accusantium, odio, dignissimos. Quasi quo ex animi atque laboriosam reiciendis, inventore dolorum fugiat voluptatibus est consequuntur culpa! Maiores amet adipisci optio, architecto, accusantium sunt labore! Sapiente nihil impedit distinctio, rerum.</card>
  </column>
</row>

```js
methods:{
  showModalGuide(){
    this.show = true
    this.index = 0
  },
  nextStep(){
    this.index ++
  },
  close(){
    this.index = 0
    this.show = false
  }
}
```



### Props
Name    | Type   | Description | Default
----    | :----: | ----------- | -----
event   | String | click or hover  | null
target  | 		 | id of dom node that will trigger modal  | null
title   |      | Title of modal  | null
body    |      | body text of modal  | null
html    | 		 | body markup of modal  | null

<script>
export default {
	data () {
      	return {
          show:false,
          index: 0,
      		guide:{
            id:'modal-guide-1',
            steps:[
            { target:'card-1', title:'Step 1', html:'Some instructions' },
            { target:'card-5', title:'Step 2', html:'Some more instructions' },
            { target:'card-9', title:'Step 3', html:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In magnam laboriosam est numquam obcaecati, rerum adipisci consectetur, expedita, totam, saepe optio. Nemo doloremque, dolorem quasi fuga inventore reiciendis ipsa officia?' },
            { target:'basic-setup', title:'Step 4', html:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In magnam laboriosam est numquam obcaecati, rerum adipisci consectetur, expedita, totam, saepe optio. Nemo doloremque, dolorem quasi fuga inventore reiciendis ipsa officia?' },
            { target:'props', title:'Step 5', html:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vero quaerat expedita consequuntur amet dignissimos voluptatibus, incidunt beatae illo voluptas natus voluptatem, similique odio ipsa sunt alias iste veritatis explicabo.' },
            ]
          }
      	}
  	},
    mounted(){

    },
  	methods:{
      showModalGuide(){
        this.show = true
        this.index = 0
      },
      nextStep(){
        this.index ++
      },
      close(){
        this.index = 0
        this.show = false
      }
  	}
}
</script>