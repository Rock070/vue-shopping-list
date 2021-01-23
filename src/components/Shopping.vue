<template>
  <div class="shopping">
    <div class='add'>
        <h3>新增單筆</h3>
        <div class='add-data' >
            <span>名稱</span>
            <input class='name'
              ref='name'
            />
            <span>單價</span>
            <input class='price'
              ref='price'
            />
            <span>數量</span>
            <input class='number'
              ref='number'
            />
            <button 
              class='add-btn'
              @click="addItem" 
            >新增</button>
        </div>
    </div>
    <div class='list'>
        <h3>購物清單</h3>
        <div class='shopping-list'>
          <div v-for='item in list'
               :key='item.id'
          >
            <span>{{item.id}}. </span>
            <span>名稱：{{item.name}}</span>
            <span>單價：{{item.price}}</span>
            <span>數量：{{item.number}}</span>
            <button 
              @click="deleteItem(item.id)"
            >
              刪除</button>
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
        let name = this.$refs.name.value
        let price = this.$refs.price.value
        let number = this.$refs.number.value

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
    },
    test(){
      console.log(123)
      console.log(this.$refs.number)
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


