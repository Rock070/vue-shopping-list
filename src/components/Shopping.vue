<template>
  <div class="shopping">
    <div class='add'>
      <h3>新增單筆：</h3>
      <div class='add-data' >
        <div>
          <span>名稱</span>
          <input v-model="name"
            maxlength="30"
          />
        </div>
        <div>
          <span>單價</span>
          <input v-model="price"
            @input="price = price.replace(/[^\d]/g,'')"
            maxlength="8"
          />
        </div>
        <div>
        <span>數量</span>
        <input v-model="number"
          @input="number = number.replace(/[^\d]/g,'')"
          maxlength="8"
        />
        </div>
        <div 
          class='btn'
          @click="addItem" 
        >新增</div>
      </div>
    </div>
    <div class='list'>
      <h3>購物清單:</h3>
      <div class='shopping-list'>
        <div style='color: #DA2; cursor: pointer'
          v-if="list == false">
          目前沒有商品～
        </div>
        <div class='shopping-item' 
          v-for='item in list'
          :key='item.id'
        >
          <div class='name'>{{item.name}}</div>
          <div class='price'>${{item.price}}</div>
          <div class='number'>{{item.number}}</div>
          <div 
            class='btn btn-del'
            @click="deleteItem(item.id)"
          >刪除</div>
        </div>            
      </div>
    </div>
    <div class='total'>
      <h3>總價：${{countTotal}}</h3>
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
          this.list.unshift({
              id: this.num,
              name: this.name,
              price: this.price,
              number: this.number
          })
          this.name = '';
          this.price = '';
          this.number = '';
          this.num ++ ;
      },
      deleteItem(id) {
        this.list = this.list.filter(item => item.id !== id)
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


