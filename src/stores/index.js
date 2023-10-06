import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {
                    id: 1,
                    name: 'Dinosaur',
                    price: 200,
                    image: 'https://images.vrtwinshop.com/99269/conversions/799656b0421e6c35ecc777a262fb1144-optimized.jpg',
                    titles: 'ตุ๊กตาน้องไดโนเสาร์  สูง 4.5-5 นิ้ว กว้าง 2.5-3 นิ้ว ใช้เวลาผลิต 7 - 30 วัน เนื่องจากเป็นงานฝีมือ'
                },
                {
                    id: 2,
                    name: 'dog',
                    price: 180,
                    image: 'https://i.pinimg.com/200x150/50/43/3a/50433ad7deb22c83952290c6b2fea127.jpg',
                    titles: 'ตุ๊กตาน้องหมา สูง 4.5-5 นิ้ว กว้าง 2.5-3 นิ้ว ใช้เวลาผลิต 7 - 30 วัน เนื่องจากเป็นงานฝีมือ'
                },
                {
                    id: 3,
                    name: 'lucky cat',
                    price: 200,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DfEnKd7lBect83RiI47lEjsXLwQRE8fyDlB8xL83MQQa23QN',
                    titles: 'ตุ๊กตาแมวนำโชค สูง 3 นิ้ว กว้าง 3 นิ้ว ใช้เวลาผลิต 7 - 30 วัน เนื่องจากเป็นงานฝีมือ'
                },
                {
                    id: 4,
                    name: 'Lemon',
                    price: 150,
                    image: 'https://i.pinimg.com/236x/68/ea/70/68ea705218be9a842e8c76cc3f7253cc--food-networktrisha-play-food.jpg',
                    titles: 'ตุ๊กตาน้องเลมอน สูง 3 นิ้ว กว้าง 3 นิ้ว ใช้เวลาผลิต 7 - 30 วัน เนื่องจากเป็นงานฝีมือ'
                }
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
            //   Swal.fire({
            //     position: 'top-end',
            //     icon: 'success',
            //     title: 'Your item has been updated',
            //     showConfirmButton: false,
            //     timer: 1500
            //   });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
            //   Swal.fire({
            //     position: 'top-end',
            //     icon: 'success',
            //     title: 'Your item has been saved',
            //     showConfirmButton: false,
            //     timer: 1500
            //   });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'Your item has been updated',
                //     showConfirmButton: false,
                //     timer: 1500
                // });
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'Your item has been updated',
                //     showConfirmButton: false,
                //     timer: 1500
                // });
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            // Swal.fire({
            //   position: 'top-end',
            //   icon: 'success',
            //   title: 'Your item has been removed',
            //   showConfirmButton: false,
            //   timer: 1500
            // });
        }
        
    },
})
