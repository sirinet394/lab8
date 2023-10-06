<template>
    <div class="col-md-4 mb-3">
        <div class="card" style="width: '18rem'">
            <img :src="product.image" class="card-img-top fixed-size-image" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <h6 class="card-text">{{product.titles}}</h6>
                <button 
                    @click="data.addToCart(product)"
                    class="btn btn-waring">
                    <i class="bi bi-cart-check"></i> add to cart
                </button>
            </div>
        </div>
    </div>  
</template>

<script setup>
    import { useShoppingStore } from '../stores'
    //get props
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    });
    //get store
    const data = useShoppingStore();
</script>

<style>
    .fixed-size-image {
        width: 100%; 
        height: 18rem; 
        object-fit: cover;
    }
</style>