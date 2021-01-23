<template>
  <div class="shopping">
    <div class='add'>
        <h3>新增單筆</h3>
        <div class='add-data' >
            <span>名稱</span>
            <input class='name'
              v-model="name"
            />
            <span>單價</span>
            <input class='price'
              v-model="price"
              @input="price = price.replace(/[^\d]/g,'')"
            />
            <span>數量</span>
            <input class='number'
              v-model="number"
              @input="number = number.replace(/[^\d]/g,'')"
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
      list: [],
      name: '',
      price: '',
      number: '',
    }
    
  },

  methods: {
    addItem() {
        
        if(!this.name || !this.price || !this.number ) {
          alert('欄位不可為空！')
          return
        }
        this.list.push({
            id: this.num,
            name: this.name,
            price: this.price,
            number: this.number
        })
        // console.log(this.price)
        this.num ++ ;
    },
    deleteItem(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    test(){
      console.log(123)
      console.log(this.$refs.number)
    },
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


