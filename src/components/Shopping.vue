<template>
  <div class="shopping">
    <div class='add'>
        <h3>新增單筆</h3>
        <div class='add-data' >
            <span>名稱</span>
            <input class='name'/>
            <span>單價</span>
            <input class='price'/>
            <span>數量</span>
            <input class='number'/>
            <button v-on:click="addItem" class='add-btn'>新增</button>
        </div>
    </div>
    <div class='list'>
        <h3>購物清單</h3>
        <div class='shopping-list'>
          <div v-for='item in list'
               v-bind:key='item.id'
          >
            <span>{{item.id}}. </span>
            <span>名稱：{{item.name}}</span>
            <span>單價：{{item.price}}</span>
            <span>數量：{{item.number}}</span>
            <button v-on:click="deleteItem(item.id)">刪除</button>
          </div>            
        </div>
    </div>
    <div class='total'>
        <h3>總價: {{countTotal}}</h3>
        <div class='shopping-list' ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopping',
  data() {
    return {
      num: 1,
      list: []
    }
    
  },

  methods: {
    addItem() {
        let name = document.querySelector('.name').value
        let price = document.querySelector('.price').value
        let number = document.querySelector('.number').value

        console.log(name, price, number)
        this.list.push({
            id: this.num,
            name, 
            price,
            number
        })

        this.num ++ ;
    },
    deleteItem(id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  },
  computed: {
    countTotal() {
      let total = 0
      for(let item of this.list) {
        total += item.price * item.number
      }
      return total
    }
  }
  
  

}
</script>


